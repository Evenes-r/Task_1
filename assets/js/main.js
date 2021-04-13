$(function () {
    $('.hero-description__btn>:nth-child(2)').click(function () {
        $('.hero-description__btn>:nth-child(1)').removeClass('active');
        $('.hero-description__btn>:nth-child(2)').addClass('active');
    });
    $('.hero-description__btn>:nth-child(1)').click(function () {
        $('.hero-description__btn>:nth-child(2)').removeClass('active');
        $('.hero-description__btn>:nth-child(1)').addClass('active');
    });
});

$(function () {
    $('.price-plan-btn>:nth-child(2)').click(function () {
        $('.price-plan-btn>:nth-child(1)').removeClass('active');
        $('.price-plan-btn>:nth-child(2)').addClass('active');
        $('.price-plan-content__plan>:nth-child(5)').addClass('active');
        $('.price-plan-content__plan>:nth-child(4)').addClass('hidden');
    });
    $('.price-plan-btn>:nth-child(1)').click(function () {
        $('.price-plan-btn>:nth-child(2)').removeClass('active');
        $('.price-plan-btn>:nth-child(1)').addClass('active');
        $('.price-plan-content__plan>:nth-child(5)').removeClass('active');
        $('.price-plan-content__plan>:nth-child(4)').removeClass('hidden');
    });
});
$(function () {
    $('.btn-price-white').click(function () {
        $('.btn-price-blue').removeClass('active');
        $('.btn-price-white').addClass('active');
    });
    $('.btn-price-blue').click(function () {
        $('.btn-price-white').removeClass('active');
        $('.btn-price-blue').addClass('active');
    });
});
$(function () {
    $('.header-mobile').click(function () {
        $('.header-mobile__burger span').addClass('active');
        $('.header-content>:nth-child(2)').addClass('active');
        $('.mobile-wrapper-close').addClass('active');
    });
    $('.mobile-wrapper-close').click(function () {
        $('.header-mobile__burger span').removeClass('active');
        $('.header-content>:nth-child(2)').removeClass('active');
        $('.mobile-wrapper-close').removeClass('active');
    });
});
$(document).ready(function () {
    $('.slider').slick({
        variableWidth: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1

    });
});
function slowScroll(id) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 500);
    return false;
}
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });

});

