require(['jquery', 'github', 'motto', 'jquery.ellipsis'], function($, github, motto) {
    $(function() {
        var users = ['bebraw', 'maakuth', 'epeli', 'tuomasjjrasanen', 'jpot',
            'deggis', 'alexhanh', 'zouppen', 'tuomosipola', 'gzrrplox'];

        motto.pick();

        github.widget($('#github'), users, 10, function($p) {
            $('ul', $p).ellipsis();
        });
    });
});
