require(['jquery', 'jquery.hashchange'], function($) {
    $(function() {
        // opera hack to make sure descriptions keep hidden (use css instead?)
        $('.polaroid .description').hide();

        $('.polaroid').on('click', function() {
            // Need to put '/' in to the hash so that page won't scroll to the
            // matching element
            window.location.hash = '/' + $(this).attr("id");
        });

        $(window).bind('hashchange', function(e, skipAnimation) {
            var personId = window.location.hash.replace('/', '');
            var $polaroid = $(personId).length > 0? $(personId): $('.polaroid:first');
            var $name = $('.name', $polaroid);
            var $desc = $('.description', $polaroid);

            if(skipAnimation) {
                $('#name').text($name.html());
                $('#info').html($desc.html());
            }
            else {
                $('#name, #info').fadeOut(function() {
                    $('#name').text($name.html());
                    $('#info').html($desc.html());

                    $('#name, #info').fadeIn();
                });
            }

            $('.polaroid').removeClass('selected');
            $polaroid.addClass('selected');
        });

        // Force trigger hashchange so that we don't see blank on start
        $(window).trigger('hashchange', true);
    });
});
