$(function() {
    $('.proj_link').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});

$(document).ready(function() {
    function setCarouselSettings() {
        var slidesToShow = $(window).width() <= 768 ? 3 : 5;
        $('.carousel').slick({
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            accessibility: false,
            pauseOnHover: false,
        });
    }

    setCarouselSettings();

    $(window).resize(function() {
        $('.carousel').slick('unslick'); // Destroy the current instance
        setCarouselSettings(); // Reinitialize with new settings
    });
});