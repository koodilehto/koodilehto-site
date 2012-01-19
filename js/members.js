require(['jquery'], function($) {
    $(function() {
        var firstDescription = $('.polaroid:first .description').html();

        $('#info').html(firstDescription);
        var cb = function() {
            var desc = $('.description', this).html();

            $('#info').html(desc);
        };

        $('.polaroid').hover(cb).on('click', cb);
    });
});
