require(['motto', 'jquery', 'jquery.caro'], function(motto, $) {
    $(function() {
        $('#gallery').caro({naviClass: 'carouselNavi', buttonClass: 'btn', cycle: true});

        motto.pick();

        var path = window.location.pathname;
        $('a[href="' + path + '"]').addClass('selected');
        $('a[href="/' + path.split('/')[1] + '/"]').addClass('selected');
    });
});
