require(['jquery', 'rss', 'twitter'],
        function($, rss, twitter) {
    $(function() {
        var feeds = ['http://www.kammo.net/feed/', 'http://feeds.feedburner.com/nixtu?format=xml', 'http://blog.deggis.iki.fi/feed/', 'http://feeds.feedburner.com/Esa-mattiSuuronen?format=xml'];
        var twitterUsers = ['bebraw', 'maakuth', 'EsaMatti', 'Zouppen', 'Eladith', 'Cornix_', 'deggis'];

        rss.widget($('#news'), feeds, 5);
        twitter.widget($('#tweets'), twitterUsers, 5);
    });
});
