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

    // reviews

    $('.reviews-item__text').each(function () {
        if ($(this).text().length > 300) {
            $(this).closest('.reviews-item__wrapper').addClass('hide-text');
        }
    });

    $('.reviews-item__more').click(function () {
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

    $('.header-search').on('focusin', function () {
        $(this).closest('.header-search__wrapper').addClass('focus');
        $('body').addClass('open-search-results');
    });
    $('.header-search').on('focusout', function () {
        $(this).closest('.header-search__wrapper').removeClass('focus');
        $('body').removeClass('open-search-results');
    });


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
            $this.closest('.header-search__wrapper').removeClass('active');
            $('.header-search > .search-results').hide();
            $('body').removeClass('open-search-results');
        } else {
            $this.closest('.header-search__wrapper').addClass('active');
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
        $('body').removeClass('mob-search').removeClass('mob-menu');
        $('.header-search > .search-results').hide();
    });

    $(document).on('click', '.header-search__wrapper', function (e) {
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

