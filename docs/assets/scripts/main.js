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

anime.timeline({loop: true})
    .add({
    targets: '.ml15 .word',
    scale: [7,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: function(el, i) {
      return 800 * i;
    }
    }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
    });

$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});

$(function(){
    $(".scroll").click(function(){
        $("html,body").animate({scrollTop:$("body").offset().top},"1000");
        return false
    })
});    

$(function() {
    
    // Cache the Window object
    var $window = $(window);
    
    // Parallax Backgrounds
    // Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
    
    //Select section with [data-type="background"]
    
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
        
        $(window).scroll(function() {
        
            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!                              
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
            
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
            
        }); // end window scroll
    });
    
});

$(".lazyload").on("load", function() {
    Waypoint.refreshAll();
});

$('.waypoint').each(function() {
    var $el = $(this);
    var waypoint = new Waypoint({
    element: $el,
    handler: function() {
        $el.addClass("reveal-item--is-visible");
    },
    offset:"75%"
    });
});

