define(function() {
    return {
        show: function() {
            var $elem = $(this);
            var yRatio = $elem.height() / $elem.width();
            var height = 300 * yRatio;
            var $overlay = $('#overlay').length? $('#overlay'): $('<div>').attr('id', 'overlay').appendTo($('body'));
            var $fullPolaroid = $elem.data('full');

            var closePolaroid = function() {
                $fullPolaroid.fadeOut(300, function() {
                    $overlay.fadeOut(300);
                });
                };

            if(!$fullPolaroid) {
                $fullPolaroid = $elem.clone().css({
                    'margin-top': -height / 2 + 'px',
                    'margin-left': '-150px',
                    'z-index': 2
                }).hide().removeClass('animated').addClass('fullPolaroid').removeClass('polaroid animated').appendTo($('body')).bind('click', closePolaroid);
                $('<div>').addClass('close').appendTo($fullPolaroid).
                    bind('click', closePolaroid);
                $overlay.bind('click', closePolaroid);
                $elem.data('full', $fullPolaroid);
            }

            $overlay.show().css('opacity', 0.3);
            $fullPolaroid.fadeIn(300);
        }
    }
});

