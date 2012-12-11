require(['jquery', 'motto', 'rss', 'twitter', 'jquery.caro', 'jquery.yabox'],
        function($, motto, rss, twitter) {
    $(function() {
        var feeds = ['http://www.kammo.net/feed/', 'http://feeds.feedburner.com/nixtu?format=xml', 'http://blog.deggis.iki.fi/feed/', 'http://feeds.feedburner.com/Esa-mattiSuuronen?format=xml'];
        var twitterUsers = ['bebraw', 'maakuth', 'EsaMatti', 'Zouppen', 'Eladith', 'Cornix_', 'deggis'];

        $('#projects').caro({naviClass: 'carouselNavi', cycle: true});
        motto.pick();
        rss.widget($('#news'), feeds, 5);
        twitter.widget($('#tweets'), twitterUsers, 5);

        $('#contact').yabox({
            hideOnClick: false,
            $content: $('#contactForm')
        });
        $('#contactForm .close').bind('click', $('#contact').yabox.hide);
    });
});
