$(function() {
    var mottos = ['Conclave of contankerous tinkerers', 'Club of thoughtful tinkerers', 'Happening of happy hipsters', 'Collection of gaudy geeks', 'Motley crew of nice nerds'];
    var feeds = ['http://feeds.feedburner.com/nixtu?format=xml', 'http://blog.deggis.iki.fi/feed/', 'http://feeds.feedburner.com/Esa-mattiSuuronen?format=xml'];
    var amountOfRSS = 5;
    var twitterUsers = ['bebraw', 'maakuth', 'EsaMatti', 'Zouppen'];
    var amountOfTweets = 5;

    pickMotto($('#motto'), mottos);
  
    urlWidget($('#news'), feeds, amountOfRSS);
    twitterWidget($('#tweets'), twitterUsers, amountOfTweets);
    $('#projects').caro();
  
      var showPolaroid = function() {
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
    };
                          
    $('.polaroid').bind('click', showPolaroid);                       
});

function parseRSS(url, callback) {
    $.ajax({
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
        dataType: 'json',
        success: function(data) {
            callback(data.responseData.feed);
        }
    });
}

function ISODateString(d){
    function pad(n){
        return n<10 ? '0'+n : n;
    }

    return d.getUTCFullYear()+'-' +
        pad(d.getUTCMonth()+1)+'-'+
        pad(d.getUTCDate());
}

function orderEntries(entries, limit) {
    entries.sort(function(a, b) {
        return a.publishedDate < b.publishedDate? 1: -1;
    });

    return entries.slice(0, limit);
}

function orderRSSEntries(data, amount) {
    var entries = [];

    $.each(data, function(i, k) {
        var author = k.author;

        entries = entries.concat(k.entries.slice(0, 7));
 
        $.each(entries, function(i, k) {
            k.author = k.author || author;
        });
    });

    $.each(entries, function(i, k) {
        k.publishedDate = new Date(k.publishedDate);
    });
  
    return orderEntries(entries, amount);
}

function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

function constructRSSUI($parent, entries) {
    var $dl = $('<dl>').appendTo($parent);

    $.each(entries, function(i, k) {
        $('<dt>').append('<span class="date">' + ISODateString(k.publishedDate) + '</span>').
            append('<span class="author">' + k.author + '</span>').appendTo($dl);
        $('<dd>').attr('title', htmlDecode(k.contentSnippet)).append('<a href="' + k.link + '"><span class="title">' + k.title + '</span></a>').appendTo($dl);
    });
}

function urlWidget($parent, feeds, amount) {
    var parsedData = [];

    $.each(feeds, function(i, url) {
        parseRSS(url, function(data) {
            parsedData.push(data);
          
            if(parsedData.length == feeds.length) {
                var entries = orderRSSEntries(parsedData, amount);
                constructRSSUI($parent, entries);
            }
        });
    });
}

// https://github.com/jamescarr/jquery-text-tools
function linkify(text){
    return text.replace(/(href="|<a.*?>)?[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/g, function($0, $1) {
        return $1 ? $0 : $0.link($0);
    });
}

function attr(k, v) {
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
}

function getLatestTweets(user, limit, doneCb) {
    var count = 0;
    var tweetCache = attr('tweetCache');
    var now = new Date();

    if(tweetCache) {
        if(new Date(now - new Date(tweetCache.time)).getHours() < 1) {
            var tweets = tweetCache.tweets;

            tweets = $.map(tweets, function(k, i) {
                k.publishedDate = new Date(k.publishedDate);
        
                return k;
            });

            doneCb(tweets);

            return;
        }
    }
    else {
        tweetCache = {
            time: now.getTime()
        };
    }

    twitterlib.timeline(user, { limit: limit }, function(tweets) {
        var ret = [];
    
        $.each(tweets, function(i, k) {
            ret.push({
                author: user,
                text: linkify(k.text),
                publishedDate: k.created_at
            });
        });

        tweetCache.tweets = ret;
        attr('tweetCache', tweetCache);

        ret = $.map(ret, function(k, i) {
            k.publishedDate = new Date(k.publishedDate);

            return k;
        });
    
        doneCb(ret);
    });
}

function constructTweetUI($parent, entries) {
    var $dl = $('<dl>').appendTo($parent);

    $.each(entries, function(i, k) {
        $('<dt>').append('<span class="date">' + ISODateString(k.publishedDate) + '</span>').
            append('<span class="author">' + k.author + '</span>').appendTo($dl);
        $('<dd>').append('<span class="title">' + k.text + '</span>').appendTo($dl);
    });
}

function twitterWidget($parent, users, amount) {
    var parsedData = [];
    var found = 0;

    $.each(users, function(i, user) {
        getLatestTweets(user, 3, function(data) {
            parsedData = parsedData.concat(data);
            found++;
      
            if(found == users.length) {
                var entries = orderEntries(parsedData, amount);
                constructTweetUI($parent, entries);
            }
        });
    });
}

function pickMotto($parent, alternatives) {
    var picked = alternatives[Math.floor(Math.random() * alternatives.length)];
    $parent.text(picked);
}

