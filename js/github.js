define(['jquery', 'utils'], function($, utils) {
    function widget($parent, users, amount) {
        utils.cache('githubCache', cached, exec);

        function cached(entries) {
            entries = $.map(entries, function(k, i) {
                k.date = new Date(k.date);

                return k;
            });

            constructGitHubUI($parent, entries);
        }

        function exec(cache, finish) {
            var parsedData = [];
            var found = 0;

            $.each(users, function(i, user) {
                getLatestCommits(user, 3, function(data) {
                    parsedData = parsedData.concat(data);
                    found++;

                    if(found == users.length) {
                        var entries = utils.orderEntries(parsedData, amount, 'date');

                        constructGitHubUI($parent, entries);

                        cache.entries = $.map(entries, function(k, i) {
                            k.date = k.date.getTime();

                            return k;
                        });

                        finish();
                    }
                });
            });
        }
    }

    function getLatestCommits(user, limit, doneCb) {
        var count = 0;

        $.ajax({
            dataType: 'jsonp',
            url: 'https://api.github.com/users/' + user + '/events',
            success: function(r) {
                var commitData = $.grep(r.data.slice(0, limit), function(k, i) {
                    return 'commits' in k.payload;
                });
                doneCb($.map(commitData, function(k, i) {
                    return {
                        author: k.actor.login,
                        repo: k.repo.name,
                        commits: k.payload.commits,
                        date: new Date(k.created_at)
                    }
                }));
            }
        });
    }

    function constructGitHubUI($parent, entries) {
        var $dl = $('<dl>').appendTo($parent);

        $.each(entries, function(i, k) {
            $('<dt>').append('<span class="date">' + utils.ISODateString(k.date) + '</span').
                append('<span class="author"><a href="https://github.com/' + k.author + '">' + k.author + '</a></span>').appendTo($dl);
            var $dd = $('<dd>').append('<span class="repo"><a href="https://github.com/' + k.repo + '">' + k.repo + '</a></span>').appendTo($dl);

            if(k.commits) {
            var $ul = $('<ul>').appendTo($dd);
                $.each(k.commits, function(i, k2) {
                    $('<li>').append('<span class="message"><a href="https://github.com/' +
                        k.repo + '/commit/' + k2.sha + '">' + k2.message +
                        '</a></span>').appendTo($ul);
                });
            }
        });
    }

    return {
        widget: widget
    };
});
