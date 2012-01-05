define(function() {
    return {
        pick: function($e, alts) {
            $e.text(alts[Math.floor(Math.random() * alts.length)]);
        },
        ISODateString: function(d){
            function pad(n){
                return n<10 ? '0'+n : n;
            }
            
            return d.getUTCFullYear()+'-' +
                pad(d.getUTCMonth()+1)+'-'+
                pad(d.getUTCDate());
        },
        orderEntries: function(entries, limit) {
            entries.sort(function(a, b) {
                return a.publishedDate < b.publishedDate? 1: -1;
            });

            return entries.slice(0, limit);
        },
        htmlDecode: function(input){
            var e = document.createElement('div');
            e.innerHTML = input;

            return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        },
        attr: function(k, v) {
            // http://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
            var target = sessionStorage;

            if(!target) {
                return null; // no support for localStorage :(
            }

            if(v !== undefined) {
                target.setItem(k, JSON.stringify(v));

                return null;
            }

            try {
                return JSON.parse(target.getItem(k));
            }
            catch(e) {}

            return target.getItem(k);
        },
        linkify: function(text) {
            return text.replace(/(href="|<a.*?>)?[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/g, function($0, $1) {
                return $1 ? $0 : $0.link($0);
            });
        }
    };
});
