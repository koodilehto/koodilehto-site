require(['jquery', 'github', 'jquery.ellipsis'], function($, github) {
    $(function() {
        var users = ['bebraw', 'maakuth', 'epeli', 'tuomasjjrasanen',
            'deggis', 'alexhanh', 'zouppen', 'tuomosipola'];

        github.widget($('#github'), users, 10, function($p) {
            $('ul', $p).ellipsis();
        });
    });
});
