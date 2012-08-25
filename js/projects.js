require(['jquery', 'github', 'jquery.ellipsis'], function($, github) {
    $(function() {
        var users = ['bebraw', 'maakuth', 'epeli', 'tuomasjjrasanen', 'jpot',
            'deggis', 'alexhanh', 'zouppen', 'tuomosipola', 'gzrrplox'];

        github.widget($('#github'), users, 10, function($p) {
            $('ul', $p).ellipsis();
        });
    });
});
