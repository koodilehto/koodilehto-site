require(['jquery', 'rss'],
        function($, rss) {
    $(function() {
        var feeds = ['http://www.kammo.net/feed/', 'http://feeds.feedburner.com/nixtu?format=xml', 'http://blog.deggis.iki.fi/feed/', 'http://feeds.feedburner.com/Esa-mattiSuuronen?format=xml'];

        rss.widget($('#news'), feeds, 5);
    });
});
