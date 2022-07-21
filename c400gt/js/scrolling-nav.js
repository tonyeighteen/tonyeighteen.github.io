$(function() {
    $('a.navbar1').bind('click', function (event) {
       
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top + 100
        }, 3500, 'easeInOutExpo');
        event.preventDefault();
    });
});
