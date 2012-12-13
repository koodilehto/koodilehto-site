(function($) {
  $.fn.randomize = function(childElem) {
    return this.each(function() {
        var $this = $(this);
        var elems = $this.children(childElem);
      
        function shuffle(array) {
            var tmp, current, top = array.length;

            if(top) while(--top) {
            	current = Math.floor(Math.random() * (top + 1));
            	tmp = array[current];
            	array[current] = array[top];
            	array[top] = tmp;
            }

            return array;
        }
        
        elems = shuffle(elems);

        $this.remove(childElem);  

        for(var i=0; i < elems.length; i++)
          $this.append(elems[i]);      

    });    
  }
})(jQuery);