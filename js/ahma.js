require(['jquery', 'jquery.caro'], function($) {
    $(function() {
        $('#gallery').caro({naviClass: 'carouselNavi'});

        var path = window.location.pathname;
        $('a[href="' + path + '"]').addClass('selected');
        $('a[href="/' + path.split('/')[1] + '/"]').addClass('selected');
    });
});
