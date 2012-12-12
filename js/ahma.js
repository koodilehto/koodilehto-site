require(['jquery', 'jquery.caro'], function($) {
    $(function() {
        $('#gallery').caro({naviClass: 'carouselNavi', buttonClass: 'btn', cycle: true});

        var path = window.location.pathname;
        $('a[href="' + path + '"]').addClass('selected');
        $('a[href="/' + path.split('/')[1] + '/"]').addClass('selected');
    });
});
