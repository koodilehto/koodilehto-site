require(['jquery'], function($) {
    $(function() {
        var firstDescription = $('.polaroid:first .description').text();

        $('#info').text(firstDescription);
        $('.polaroid').hover(function() {
            var desc = $('.description', this).text();

            $('#info').text(desc);
        });
    });
});
