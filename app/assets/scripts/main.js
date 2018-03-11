$(document).ready(function(){
      
    $(".slider").slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000,
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".navbar--color").addClass("navbar--nav-color");
        }
        else {
            $(".navbar--color").removeClass("navbar--nav-color");
        }
    });

    var stop = $(".get-in-touch").offset().top;
    $(window).scroll(startCounter);
    function startCounter() {
        if ($(window).scrollTop() > stop) {
            $(window).off("scroll", startCounter);
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    }

});