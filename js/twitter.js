define(['jquery', 'utils'], function($, utils) {
    function widget($parent, users, amount) {
        var parsedData = [];
        var found = 0;

        $.each(users, function(i, user) {
            getLatestTweets(user, 3, function(data) {
                parsedData = parsedData.concat(data);
                found++;
      
                if(found == users.length) {
                    var entries = utils.orderEntries(parsedData, amount);
                    constructTweetUI($parent, entries);
                }
            });
        });
    }

    function getLatestTweets(user, limit, doneCb) {
        var count = 0;
        var tweetCache = utils.attr('tweetCache');
        var now = new Date();

        if(tweetCache) {
            if(new Date(now - new Date(tweetCache.time)).getHours() < 1) {
                var tweets = tweetCache.tweets;

                tweets = $.map(tweets, function(k, i) {
                    k.publishedDate = new Date(k.publishedDate);

                    return k;
                });

                doneCb(tweets);

                return;
            }
        }
        else {
            tweetCache = {
                time: now.getTime()
            };
        }

        twitterlib.timeline(user, { limit: limit }, function(tweets) {
            var ret = [];

            $.each(tweets, function(i, k) {
                ret.push({
                    author: user,
                    text: utils.linkify(k.text),
                    publishedDate: k.created_at
                });
            });

            tweetCache.tweets = ret;
            utils.attr('tweetCache', tweetCache);

            ret = $.map(ret, function(k, i) {
                k.publishedDate = new Date(k.publishedDate);

                return k;
            });

            doneCb(ret);
        });
    }

    function constructTweetUI($parent, entries) {
        var $dl = $('<dl>').appendTo($parent);

        $.each(entries, function(i, k) {
            $('<dt>').append('<span class="date">' + utils.ISODateString(k.publishedDate) + '</span>').
                append('<span class="author">' + k.author + '</span>').appendTo($dl);
            $('<dd>').append('<span class="title">' + k.text + '</span>').appendTo($dl);
        });
    }

    return {
        widget: widget
    };
});

