// God save the Dev

'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('./assets/templates/layouts/index.html');
    require('./assets/templates/layouts/contacts.html');
    require('./assets/templates/layouts/404.html');
    require('./assets/templates/layouts/blog.html');
    require('./assets/templates/layouts/blog-article.html');
    require('./assets/templates/layouts/blog-not-found.html');
    require('./assets/templates/layouts/reviews.html');
    require('./assets/templates/layouts/delivery-payment.html');
    require('./assets/templates/layouts/warranty.html');
    require('./assets/templates/layouts/product.html');
    require('./assets/templates/layouts/about.html');
    require('./assets/templates/layouts/purchase.html');
    require('./assets/templates/layouts/faq.html');
    require('./assets/templates/layouts/checkout.html');
}

// Depends
var $ = require('jquery');
require('bootstrap-sass');

// Modules
var Forms = require('_modules/forms');
var Slider = require('_modules/slider');
var Popup = require('_modules/popup');
var Fancy_select = require('_modules/fancyselect');
var Jscrollpane = require('_modules/jscrollpane');
var LightGallery = require('_modules/lightgallery');
var Jslider = require('_modules/jslider');
var Fancybox = require('_modules/fancybox');
require('../node_modules/sumoselect/jquery.sumoselect.min');
require('../node_modules/mark.js/dist/jquery.mark.min');
require('_modules/succinct/succinct');
import PerfectScrollbar from 'perfect-scrollbar';

// Stylesheet entrypoint
require('_stylesheets/app.scss');

// Are you ready?
$(function () {
    new Forms();
    new Popup();
    new Fancy_select();
    new Jscrollpane();
    new LightGallery();
    new Slider();
    new Jslider();
    new Fancybox();


    setTimeout(function () {
        $('body').trigger('scroll');
    }, 100);

    // fixed header

    if ($(window).width() >= 991) {
        var header = $('.header'),
            scrollPrev = 0;

        $(window).scroll(function () {
            var scrolled = $(window).scrollTop();

            if (scrolled > 156 && scrolled) {
                header.addClass('fixed');
                $('body').addClass('fixed-header');
            } else {
                header.removeClass('fixed');
                $('body').removeClass('fixed-header');
            }
            scrollPrev = scrolled;
        });
    }

    $(window).resize(function () {
        var count1 = $('.blog-slider .slick-slide.slick-cloned').length;
        if (count1 > 0) {
            $('.blog-slider').closest('.counter-slider__wrapper').find('.slider-nav').css('display', 'flex');
        }
        else {
            $('.blog-slider').closest('.counter-slider__wrapper').find('.slider-nav').hide();
        }

        var count2 = $('.reviews-slider .slick-slide.slick-cloned').length;
        if (count2 > 0) {
            $('.reviews-slider').closest('.counter-slider__wrapper').find('.slider-nav').css('display', 'flex');
        }
        else {
            $('.reviews-slider').closest('.counter-slider__wrapper').find('.slider-nav').hide();
        }
        setTimeout(function () {
            $('.slick-slider').slick('setPosition');
        }, 100);
    });

    // footer menu

    if ($(window).width() < 575) {
        $('.footer-menu__title').on('click', function () {
            $(this).toggleClass('active').next('div').slideToggle();
        });
    }

    // scroll

    $('.scroll-wrapper').each(function () {
        const ps = new PerfectScrollbar($(this)[0], {
            wheelSpeed: 1,
            wheelPropagation: false
        });
        ps.update();
        $(window).resize(function () {
            ps.update();
        });
    });

    // ===========================

    // faq

    $(".acc-body").css("display", "none");
    $(".acc-head").click(function () {
        $(this).toggleClass("active").next().slideToggle();
        $(".acc-head").not(this).removeClass("active").next().slideUp();
    });

    // reviews

    $('.reviews-item__text').each(function () {
        if ($(this).text().length > 300) {
            $(this).closest('.reviews-item__wrapper').addClass('hide-text');
        }
    });

    $(document).delegate('.reviews-item__more', 'click', function () {
        $(this).hide().closest('.reviews-item__wrapper').find('.reviews-item__text').css({
            'height': 'auto', 'max-height': 'unset', 'overflow': 'auto',
            '-webkit-line-clamp': '100'
        });
    });

    // blog (оставить отзыв)

    $('.spoiler-content.reviews__form').css('display', 'none');

    $('.spoiler-title').click(function () {
        $(this).toggleClass('active').next('.spoiler-content').slideToggle();
    });

    // header-search

    /*$('.header-search').on('focusin', function () {
        $(this).closest('.header-search__wrapper').addClass('focus');
        $('body').addClass('open-search-results');
    });*/
    /*$('.header-search').on('focusout', function () {
        $(this).closest('.header-search__wrapper').removeClass('focus');
        $('body').removeClass('open-search-results');
    });*/

    if ($('.header-search input[type="search"]').val().length) {
        $('.header-search button').css('pointer-events', 'auto');
    }
    else {
        $('.header-search button').css('pointer-events', 'none');
    }

    $('.header-search input[type="search"]').on('keyup', function () {
        if ($('.header-search input[type="search"]').val().length) {
            $('.header-search button').css('pointer-events', 'auto');
        }
        else {
            $('.header-search button').css('pointer-events', 'none');
        }
    });

    $('.header-search input[type="search"]').bind('keyup keypress', function (e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            if ($(this).val() == '') {
                e.preventDefault();
                return false;
            }
        }
    });

    $('.header-search input[type="search"]').on('keyup', function (e) {
        var $this = $(this);
        if ($this.val().length < 3) {
            $this.closest('.header-search__wrapper').removeClass('focus').removeClass('active');
            $('.header-search > .search-results').hide();
            $('body').removeClass('open-search-results');
        } else {
            $this.closest('.header-search__wrapper').addClass('focus').addClass('active');
            $('.header-search > .search-results').show();
            $('body').addClass('open-search-results');
        }
    });

    $('.header-mob__search-btn').click(function () {
        $('body').toggleClass('mob-search').removeClass('mob-phones');
        $(this).toggleClass('active');
        $('.header-search__wrapper').toggleClass('show');
        $('.mobile-menu__btn').removeClass('active');
        $('.mobile-menu__wrapper').removeClass('active');
        $('body').addClass('active');
        return false;
    });

    $(document).click(function () {
        $('.header-search__wrapper').removeClass('show').removeClass('active');
        $('body').removeClass('mob-search').removeClass('mob-menu').removeClass('open-search-results');
        $('.header-search > .search-results').hide();
    });

    $(document).on('click', '.header-search__wrapper', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', '.header-search__wrapper .search-results', function (e) {
        e.stopPropagation();
    });

    // header-search
    // the input field
    var $input = $('.header-search input'),
        $content = $('.header-search .search-results'),
        $results,
        //currentClass = 'current',
        //offsetTop = 50,
        currentIndex = 0;

    /*function jumpTo() {
        if ($results.length) {
            var position,
                $current = $results.eq(currentIndex);
            $results.removeClass(currentClass);
            if ($current.length) {
                $current.addClass(currentClass);
                position = $current.offset().top - offsetTop;
                window.scrollTo(0, position);
            }
        }
    }*/

    $input.on('input', function () {
        var searchVal = this.value;
        $('.header-search .search-results li a').each(function () {
            $(this).find('span').bind('DOMSubtreeModified', function () {
                if ($(this).find('mark').length) {
                    $(this).closest('li').addClass('show').closest('ul').addClass('highlighting-results');
                }
                else {
                    $(this).closest('li').removeClass('show');
                }
            });
        });

        $content.unmark({
            done: function () {
                $content.mark(searchVal, {
                    separateWordSearch: true,
                    done: function () {
                        $results = $content.find('mark');
                        currentIndex = 0;
                        //jumpTo();
                    }
                });
            }
        });
        if ($('.search-results > ul li.show').length) {
            $('.search-results > div > a').css('display', 'flex');
            $('.search-results > div > span').css('display', 'none');
        }
        else {
            $('.search-results > div > a').css('display', 'none');
            $('.search-results > div > span').css('display', 'flex');
        }
    });



    // filters blog
    $(".cat-all__main").click(function () {
        $(this).closest(".cat-all").addClass("open");
    });

    $(".cat-all__inner").on("click", "ul a", function () {
        var val = $(this).html();
        $(this).closest('.cat-all').removeClass('open');
        $(this).closest('.cat-all').find('.cat-all__main').find('.cat-all__main-name').html(val);
    });

    $(document).on('click', '.cat-all__main', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', '.cat-all', function (e) {
        e.stopPropagation();
    });

    $(document).click(function () {
        $('.cat-all').removeClass('open');
    });

    // product slider navigation

    $('.product-slider').each(function () {
        var $slider = $(this);

        $slider.find('.slick-prev').append('<svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M1.79067 3.52855C1.79067 3.52855 3.33158 5.08954 3.33403 5.09202C3.53916 5.29947 3.53916 5.63635 3.33403 5.84415C3.12891 6.05195 2.79636 6.05195 2.59158 5.84415C2.59158 5.84415 1.40702 4.64415 0.153847 3.37465C-0.0512816 3.1672 -0.0512816 2.83032 0.153847 2.62252C1.35101 1.40975 2.40326 0.343793 2.58878 0.15585C2.79391 -0.0519517 3.12646 -0.0519517 3.33123 0.15585C3.53636 0.363651 3.53636 0.700532 3.33123 0.907979L1.79487 2.46472L13.4749 2.46472C13.6142 2.46472 13.7476 2.52074 13.8463 2.62039C13.9447 2.72039 14 2.8555 14 2.99663C14 3.13777 13.9447 3.27287 13.8463 3.37287C13.7476 3.47252 13.6142 3.52855 13.4749 3.52855L1.79067 3.52855Z" fill="#fff"/>\n' +
            '</svg>');

        $slider.find('.slick-next').append('<svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2093 2.47145C12.2093 2.47145 10.6684 0.91046 10.666 0.907978C10.4608 0.700531 10.4608 0.363652 10.666 0.155851C10.8711 -0.0519504 11.2036 -0.0519504 11.4084 0.155851C11.4084 0.155851 12.593 1.35585 13.8462 2.62535C14.0513 2.8328 14.0513 3.16968 13.8462 3.37748C12.649 4.59025 11.5967 5.65621 11.4112 5.84415C11.2061 6.05195 10.8735 6.05195 10.6688 5.84415C10.4636 5.63635 10.4636 5.29947 10.6688 5.09202L12.2051 3.53528L0.525072 3.53528C0.385753 3.53528 0.252386 3.47926 0.153672 3.37961C0.0553087 3.27961 0 3.1445 0 3.00337C0 2.86223 0.0553087 2.72713 0.153672 2.62713C0.252386 2.52748 0.385753 2.47145 0.525072 2.47145L12.2093 2.47145Z" fill="#fff"/>\n' +
            '</svg>');

        var currentSlide;
        var slidesCount;
        var sliderCounter = $slider.closest('.counter-slider__wrapper').find('.slider-counter');
        $(sliderCounter).text('1' + ' из ' + $slider.slick('getSlick').slideCount);

        var updateSliderCounter = function (slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = $slider.slick('getSlick').slideCount;
            $(sliderCounter).text(currentSlide + ' из ' + slidesCount);
        };

        $slider.on('init', function (event, slick, slidesCount) {
            updateSliderCounter(slick, slidesCount);
        });

        $slider.on('afterChange', function (event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });
    });

    // product counter

    $('.plus').click(function () {
        var input = $(this).parent().find('input');
        input.val(parseInt(input.val()) + 1).change();
    });

    $('.minus').click(function () {
        var input = $(this).parent().find('input');
        var val = parseInt(input.val());
        if (val > 1) {
            val--;
        }
        input.val(val).change();
    });

    // tabs

    $('.tabs').on('click', 'li:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active')
            .closest('.tabs-wrapper').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
        $(window).trigger('resize');
        $('.slick-slider').slick('setPosition');
    });

    // counter slider

    $('.counter-slider').each(function () {
        var $slider = $(this);

        $slider.closest('.counter-slider__wrapper').find('.slider-next').click(function () {
            $slider.slick('slickNext');
        });

        $slider.closest('.counter-slider__wrapper').find('.slider-prev').click(function () {
            $slider.slick('slickPrev');
        });
        if ($slider.find('.slick-prev').hasClass('slick-disabled')) {
            $slider.closest('.counter-slider__wrapper').find('.slider-prev').addClass('slick-disabled');
        }
        else {
            $slider.closest('.counter-slider__wrapper').find('.slider-prev').removeClass('slick-disabled');
        }

        if ($slider.find('.slick-next').hasClass('slick-disabled')) {
            $slider.closest('.counter-slider__wrapper').find('.slider-next').addClass('slick-disabled');
        }
        else {
            $slider.closest('.counter-slider__wrapper').find('.slider-next').removeClass('slick-disabled');
        }

        var currentSlide;
        var slidesCount;
        var sliderCounter = $slider.closest('.counter-slider__wrapper').find('.slider-counter');
        $(sliderCounter).text('1' + ' / ' + $slider.slick('getSlick').slideCount);

        var updateSliderCounter = function (slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = $slider.slick('getSlick').slideCount;
            $(sliderCounter).text(currentSlide + ' / ' + slidesCount);
        };

        $slider.on('init', function (event, slick, slidesCount) {
            updateSliderCounter(slick, slidesCount);
        });

        $slider.on('afterChange', function (event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);

            if ($slider.find('.slick-prev').hasClass('slick-disabled')) {
                $slider.closest('.counter-slider__wrapper').find('.slider-prev').addClass('slick-disabled');
            }
            else {
                $slider.closest('.counter-slider__wrapper').find('.slider-prev').removeClass('slick-disabled');
            }

            if ($slider.find('.slick-next').hasClass('slick-disabled')) {
                $slider.closest('.counter-slider__wrapper').find('.slider-next').addClass('slick-disabled');
            }
            else {
                $slider.closest('.counter-slider__wrapper').find('.slider-next').removeClass('slick-disabled');
            }
        });
    });

    // lazy load
    var lazyload = function () {
        var scroll = $(window).scrollTop() + $(window).height() * 3;

        $('.lazy').each(function () {
            var $this = $(this);
            if ($this.offset().top < scroll) {
                $this.attr('src', $(this).data('original'));
            }
        });
        $('.lazy-web').each(function () {
            var $this = $(this);
            if ($this.offset().top < scroll) {
                $this.attr('srcset', $(this).data('original'));
            }
        });
    };
    $(window).scroll(lazyload);
});

