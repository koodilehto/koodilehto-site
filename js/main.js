require(['jquery', 'utils', 'rss', 'twitter', 'polaroid', 'jquery.caro'], function($, utils, rss, twitter, polaroid) {
    $(function() {
        var mottos = ['Conclave of contankerous tinkerers', 'Club of thoughtful tinkerers', 'Happening of happy hipsters', 'Collection of gaudy geeks', 'Motley crew of nice nerds'];
        var feeds = ['http://feeds.feedburner.com/nixtu?format=xml', 'http://blog.deggis.iki.fi/feed/', 'http://feeds.feedburner.com/Esa-mattiSuuronen?format=xml'];
        var twitterUsers = ['bebraw', 'maakuth', 'EsaMatti', 'Zouppen'];

        $('#projects').caro();
        $('.polaroid').bind('click', polaroid.show);
        utils.pick($('#motto'), mottos);
        rss.widget($('#news'), feeds, 5);
        twitter.widget($('#tweets'), twitterUsers, 5);
    });
});
