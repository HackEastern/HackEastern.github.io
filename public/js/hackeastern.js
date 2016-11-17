(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    //The possible image urls
    var imageUrls = [
      'blue-circuitry-wallpaper-wide.jpg',
      'eatSleepCode.png',
      'greenMatrixCode.png',
      'macCode.png',
      'purpleBlurCode.png',
      'yellowWallOfCode.png'
    ];

    //generate random number 0 inclusive to 6 exclusive
    var rand = Math.floor(Math.random() * 6);

    //initialize the startup background splash screen to a random image in fullscreen folder
    $(".background").css("background-image", "url(\"img/fullscreen/"+imageUrls[rand]+"\")");

    //Disabled for now, don't need
    // // Offset for Main Navigation
    // $('#mainNav').affix({
    //     offset: {
    //         top: 50
    //     }
    // })

})(jQuery); // End of use strict
