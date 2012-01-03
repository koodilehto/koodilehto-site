(function($){
  function caroize($elem, opts) {
    var $slideContainer = $elem.find('.slides');
    var $slides = $slideContainer.children().append($('<div>'));
    var $wrapper = $('<div>').append($slides).appendTo($slideContainer);
    var delay = opts.delay;
    var pos = 0;
    var amount = $slides.length;
    var max = amount * 100;

    $slideContainer.css('overflow', 'hidden');
    $wrapper.css({
      position: 'relative',
      width: max + '%'
    });

    $slides.each(function(i, e) {
      $(e).css({
        display: 'inline-block',
        width: (100 / amount) + '%',
        'vertical-align': 'top'
      });
    });
    
    $elem.find('.left').on('click', function() {
      pos += 100;
      
      if(pos > 0) {
        pos = 0;
      }
      else {
        $wrapper.animate({left: pos + '%'}, delay);
      }
    });
    
    $elem.find('.right').on('click', function() {
      pos -= 100;
      
      if(pos <= -max) {
        pos = -max + 100;
      }
      else {
        $wrapper.animate({left: pos + '%'}, delay);
      }
    });
  }
  
  $.fn.caro = function (options) {
    return this.each(function () {
      var $elem = $(this);
      var opts = $.extend({
        delay: 300 // in ms
      }, options);
      
      caroize($elem, opts);
    });
  };
})(jQuery);

