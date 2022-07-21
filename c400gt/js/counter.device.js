$(function () {
    function isScrolledIntoView($elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function start() {
        if (isScrolledIntoView($('.count')) && !$('.count').data("isCounting")) {
            $('.count').each(function () {
                $(this).data("isCounting", true);
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                            $(this).data("isCounting", false);
                        }
                    });
            });
        }
    };
    $(document).on("scroll", start);

});