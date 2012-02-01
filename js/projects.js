require(['jquery', 'github', 'jquery.ellipsis'], function($, github) {
    $(function() {
        var users = ['bebraw', 'maakuth', 'epeli', 'tuomasjjrasanen', 'deggis', 'alexhanh', 'zouppen'];

        github.widget($('#github'), users, 10);

        $('#github ul').ellipsis();
    });
});
