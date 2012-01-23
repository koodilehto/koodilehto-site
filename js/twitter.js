define(['jquery', 'utils'], function($, utils) {
    function widget($parent, users, amount) {
        var cache = utils.attr('tweetCache');
        var parsedData = [];
        var found = 0;
        var exec = true;

        if(cache) {
            var hour = 1000 * 60 * 60;
            var diff = (new Date().getTime() - cache.time) / hour;

            if(diff < 1) {
                var entries = $.map(cache.entries, function(k, i) {
                    k.publishedDate = new Date(k.publishedDate);

                    return k;
                });

                constructTweetUI($parent, entries);
                exec = false;
            }
        }

        if(exec) {
            cache = {
                time: new Date().getTime()
            };

            $.each(users, function(i, user) {
                getLatestTweets(user, 3, function(data) {
                    parsedData = parsedData.concat(data);
                    found++;

                    if(found == users.length) {    
                        var entries = utils.orderEntries(parsedData, amount);

                        constructTweetUI($parent, entries);

                        cache.entries = $.map(entries, function(k, i) {
                            k.publishedDate = k.publishedDate.getTime();

                            return k;
                        });
                        utils.attr('tweetCache', cache);
                    }
                });
            });
        }
    }

    function getLatestTweets(user, limit, doneCb) {
        var count = 0;

        twitterlib.timeline(user, { limit: limit }, function(tweets) {
            doneCb($.map(tweets, function(k, i) {
                return {
                    author: k.user.screen_name,
                    text: twitterlib.ify.clean(twitterlib.expandLinks(k)),
                    publishedDate: new Date(k.created_at)
                };
            }));
        });
    }

    function constructTweetUI($parent, entries) {
        var $dl = $('<dl>').appendTo($parent);

        $.each(entries, function(i, k) {
            $('<dt>').append('<span class="date">' + utils.ISODateString(k.publishedDate) + '</span>').
                append('<span class="author"><a href="https://twitter.com/#!/' + k.author + '">' + k.author  + '</a></span>').appendTo($dl);
            $('<dd>').append('<span class="title">' + k.text + '</span>').appendTo($dl);
        });
    }

    return {
        widget: widget
    };
});

