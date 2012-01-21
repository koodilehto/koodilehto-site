require(['jquery'], function($) {
    $(function() {
        var personId = window.location.hash;
        var $firstPolaroid = $(personId).length > 0? $(personId): $('.polaroid:first');
        var $firstDescription = $('.description', $firstPolaroid);

        $firstPolaroid.addClass('selected');

        // opera hack to make sure descriptions keep hidden (use css instead?)
        $('.polaroid .description').hide();

        $('#info').html($firstDescription.html());

        $('.polaroid').on('click', updateDescription);

        function updateDescription() {
            var $desc = $('.description', this);

            $('#info').html($desc.html());

            $('.polaroid').removeClass('selected');
            $(this).addClass('selected');
        }
    });
});
