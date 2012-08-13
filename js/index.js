require(['jquery', 'utils', 'rss', 'twitter', 'jquery.caro', 'jquery.yabox'],
        function($, utils, rss, twitter) {
    $(function() {
        var mottos = ['Conclave of contankerous tinkerers', 'Club of thoughtful tinkerers', 'Happening of happy hipsters', 'Collection of gaudy geeks', 'Motley crew of nice nerds'];
        var feeds = ['http://www.kammo.net/feed/', 'http://feeds.feedburner.com/nixtu?format=xml', 'http://blog.deggis.iki.fi/feed/', 'http://feeds.feedburner.com/Esa-mattiSuuronen?format=xml'];
        var twitterUsers = ['bebraw', 'maakuth', 'EsaMatti', 'Zouppen', 'Eladith', 'Cornix_', 'deggis'];

        $('#projects').caro({naviClass: 'carouselNavi', cycle: true});
        utils.pick($('#motto'), mottos);
        rss.widget($('#news'), feeds, 5);
        twitter.widget($('#tweets'), twitterUsers, 5);

        $('#contact').yabox({
            hideOnClick: false,
            $content: $('#contactForm')
        });
        $('#contactForm .close').bind('click', $('#contact').yabox.hide);

        /* bg pan test
        $('.hero-unit').on('mousemove', function(e) {
            var y = e.pageY - this.offsetTop;

            $(this).css('background-position-y', -y + 'px');
        });*/
    });
});
