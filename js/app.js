
/////////////////////////////scroll to top code\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll_top').fadeIn();
        } else {
            $('.scroll_top').fadeOut();
        }
    });

    $(".scroll_top").click(function () {
        $('html ,body').animate({ scrollTop: 0 }, 1000);
    });



    /////////////////////////////hamberger code\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    let hamberger = document.querySelector('.hamberger');
    let cross = document.querySelector('.cross');
    let mobNav = document.querySelector('.mob_nav');
    let mobNav_link = document.querySelectorAll('.mob_nav a');


    hamberger.addEventListener('click', function () {
        mobNav.classList.add('open');
    });

    cross.addEventListener('click', function () {
        mobNav.classList.remove('open');
    });

    mobNav_link.forEach((item) => {
        item.addEventListener('click', () => {
            hamberger.classList.add('open');
            mobNav.classList.remove('open');
        });
    });
});












///////////////////////owl  owlCarousel code\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTime: 1000,
    nav: false,
    responsive: {
        0: {
            items: 1
        }
    }
});


/////////////////////////////smooth scroll code\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
jQuery('#main_nav a').on('click', function () {
    var target = jQuery(this);
    var element = target.attr('href');

    jQuery('#main_nav a').removeClass('active')
    target.addClass('active');

    jQuery("body, html").animate({
        scrollTop: jQuery(element).offset().top
    }, 800);
});







/////////////////////////////typing js code\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
$(function () {
    $(".typed").typed({
        strings: ["Web Designer", "Web Developer"],
        stringsElement: null,
        typeSpeed: 70,
        startDelay: 30,
        backSpeed: 70,
        backDelay: 0,
        loop: true,
        loopCount: Infinity,
    });
});








