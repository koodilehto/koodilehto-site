require(['jquery'], function($) {
    $(function() {
        var firstDescription = $('.polaroid:first .description').html();

        // opera hack to make sure descriptions keep hidden (use css instead?)
        $('.polaroid .description').hide();

        $('#info').html(firstDescription);
        var cb = function() {
            var desc = $('.description', this).html();

            $('#info').html(desc);
        };

        $('.polaroid').hover(cb).on('click', cb);
    });
});
