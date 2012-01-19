require(['jquery'], function($) {
    $(function() {
        var $firstPolaroid = $('.polaroid:first');
        var $firstDescription = $('.description', $firstPolaroid);

        $firstPolaroid.addClass('selected');

        // opera hack to make sure descriptions keep hidden (use css instead?)
        $('.polaroid .description').hide();

        $('#info').html($firstDescription.html());
        var cb = function() {
            var $desc = $('.description', this);

            $('#info').html($desc.html());

            $('.polaroid').removeClass('selected');
            $(this).addClass('selected');
        };

        $('.polaroid').hover(cb).on('click', cb);
    });
});
