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
    require('./assets/templates/layouts/catalog.html');
    require('./assets/templates/layouts/catalog-checked-filters.html');
    require('./assets/templates/layouts/catalog-list.html');
    require('./assets/templates/layouts/search-results.html');
    require('./assets/templates/layouts/price.html');
    require('./assets/templates/layouts/no-goods.html');
    require('./assets/templates/layouts/thank-you.html');
    require('./assets/templates/layouts/photo-gallery.html');
    require('./assets/templates/layouts/photo-gallery-category.html');
    require('./assets/templates/layouts/video-gallery.html');
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

    // photo slider navigation

    $('.photo-slider').each(function () {
        var $slider = $(this);

        $slider.find('.slick-prev').append(`<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00089 3.99966C8.00089 4.13226 7.94822 4.25944 7.85445 4.35321C7.76068 4.44698 7.6335 4.49966 7.50089 4.49966H1.70789L3.85489 6.64566C3.90138 6.69214 3.93826 6.74733 3.96342 6.80807C3.98858 6.86881 4.00152 6.93391 4.00152 6.99966C4.00152 7.0654 3.98858 7.1305 3.96342 7.19124C3.93826 7.25198 3.90138 7.30717 3.85489 7.35366C3.80841 7.40014 3.75322 7.43702 3.69248 7.46218C3.63174 7.48734 3.56664 7.50029 3.50089 7.50029C3.43515 7.50029 3.37005 7.48734 3.30931 7.46218C3.24857 7.43702 3.19338 7.40014 3.14689 7.35366L0.146894 4.35366C0.100331 4.30721 0.0633875 4.25203 0.0381811 4.19129C0.0129746 4.13054 0 4.06542 0 3.99966C0 3.93389 0.0129746 3.86877 0.0381811 3.80802C0.0633875 3.74728 0.100331 3.6921 0.146894 3.64566L3.14689 0.645655C3.24078 0.551769 3.36812 0.499023 3.50089 0.499023C3.63367 0.499023 3.76101 0.551769 3.85489 0.645655C3.94878 0.739542 4.00152 0.866879 4.00152 0.999655C4.00152 1.13243 3.94878 1.25977 3.85489 1.35366L1.70789 3.49966H7.50089C7.6335 3.49966 7.76068 3.55233 7.85445 3.6461C7.94822 3.73987 8.00089 3.86705 8.00089 3.99966Z" fill="white"/>
</svg>
`);

        $slider.find('.slick-next').append(`<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M-0.000893899 4.00035C-0.00089391 3.86774 0.0517842 3.74056 0.145552 3.64679C0.23932 3.55302 0.366498 3.50035 0.499106 3.50035L6.29211 3.50034L4.14511 1.35435C4.09862 1.30786 4.06174 1.25267 4.03658 1.19193C4.01142 1.13119 3.99847 1.06609 3.99847 1.00035C3.99847 0.934601 4.01142 0.869501 4.03658 0.808761C4.06174 0.748022 4.09862 0.692833 4.14511 0.646345C4.19159 0.599857 4.24678 0.562981 4.30752 0.537822C4.36826 0.512663 4.43336 0.499714 4.49911 0.499714C4.56485 0.499714 4.62995 0.512663 4.69069 0.537822C4.75143 0.56298 4.80662 0.599857 4.85311 0.646345L7.85311 3.64634C7.89967 3.69279 7.93661 3.74797 7.96182 3.80871C7.98703 3.86946 8 3.93458 8 4.00034C8 4.06611 7.98703 4.13123 7.96182 4.19198C7.93661 4.25272 7.89967 4.3079 7.85311 4.35434L4.85311 7.35435C4.75922 7.44823 4.63188 7.50098 4.49911 7.50098C4.36633 7.50098 4.23899 7.44823 4.14511 7.35435C4.05122 7.26046 3.99848 7.13312 3.99848 7.00035C3.99848 6.86757 4.05122 6.74023 4.14511 6.64634L6.29211 4.50034L0.499106 4.50035C0.366498 4.50035 0.23932 4.44767 0.145552 4.3539C0.0517842 4.26013 -0.000893887 4.13295 -0.000893899 4.00035Z" fill="white"/>
</svg>
`);

        $slider.closest('.counter-photo-slider__wrapper').find('.slider-next').click(function () {
            $slider.slick('slickNext');
        });

        $slider.closest('.counter-photo-slider__wrapper').find('.slider-prev').click(function () {
            $slider.slick('slickPrev');
        });

        var currentSlide;
        var slidesCount;
        var sliderCounter = $slider.closest('.counter-photo-slider__wrapper').find('.slider-counter');
        $(sliderCounter).text('ФОТО ' + '1' + ' из ' + $slider.slick('getSlick').slideCount);

        if ($slider.find('.slick-prev').hasClass('slick-disabled')) {
            $slider.closest('.counter-photo-slider__wrapper').find('.slider-prev').addClass('slick-disabled');
        }
        else {
            $slider.closest('.counter-photo-slider__wrapper').find('.slider-prev').removeClass('slick-disabled');
        }

        if ($slider.find('.slick-next').hasClass('slick-disabled')) {
            $slider.closest('.counter-photo-slider__wrapper').find('.slider-next').addClass('slick-disabled');
        }
        else {
            $slider.closest('.counter-photo-slider__wrapper').find('.slider-next').removeClass('slick-disabled');
        }

        var updateSliderCounter = function (slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = $slider.slick('getSlick').slideCount;
            $(sliderCounter).text('Фото ' + currentSlide + ' из ' + slidesCount);
        };

        $slider.on('init', function (event, slick, slidesCount) {
            updateSliderCounter(slick, slidesCount);
        });


        $slider.on('afterChange', function (event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);

            if ($slider.find('.slick-prev').hasClass('slick-disabled')) {
                $slider.closest('.counter-photo-slider__wrapper').find('.slider-prev').addClass('slick-disabled');
            }
            else {
                $slider.closest('.counter-photo-slider__wrapper').find('.slider-prev').removeClass('slick-disabled');
            }

            if ($slider.find('.slick-next').hasClass('slick-disabled')) {
                $slider.closest('.counter-photo-slider__wrapper').find('.slider-next').addClass('slick-disabled');
            }
            else {
                $slider.closest('.counter-photo-slider__wrapper').find('.slider-next').removeClass('slick-disabled');
            }
        });
    });

    $('.popup-btn').on('click', function () {
        $(window).trigger('resize');
        $('.slick-slider').slick('setPosition');
    });


    // chechout
    // chechout goods del

    $('.checkout-goods__item-close').click(function () {
        $(this).closest('.checkout-goods__item').remove();
    });

    // chechout comment
    $('.chechout-comment').hide();
    $('.chechout-comment__btn').click(function () {
        $('.chechout-comment').slideToggle();
    });

    // chechout form
    $(".deliver-self").hide();
    $(".select.delivery").change(function () {
        var value = $(this).val(),

            $nova = $(this).closest(".chechout-form").find(".deliver.deliver-nova"),
            $self = $(this).closest(".chechout-form").find(".deliver.deliver-self");

        if (value == "nova") {
            $nova.show();
        } else {
            $nova.hide();
        }

        if (value == "self") {
            $self.show();
        } else {
            $self.hide();
        }
    });

    $(".obl.select").SumoSelect({
        search: true,
        searchText: "Найти",
        noMatch: "Не найдено",
        forceCustomRendering: true
    });

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

    // catalog filters

    $('.catalog-filer__title').click(function () {
        $(this).toggleClass('active').next('.catalog-filter__body').toggle();
    });

    $('.cat-open').click(function () {
        $(this).toggleClass('show').next('ul').toggle();
    });

    $('.catalog-filters__show-all').each(function () {
        if ($(this).closest('.catalog-filter__body').find('.catalog-filters li').length > 10) {
            $(this).closest('.catalog-filter__body').find('.catalog-filters__show-all').show();
        }
        else {
            $(this).closest('.catalog-filter__body').find('.catalog-filters__show-all').hide();
        }
    });

    $('.catalog-filters__show-all').click(function () {
        $(this).html() == 'Показать все' ? $(this).html('Свернуть') : $(this).html('Показать все');
        $(this).closest('.catalog-filter__body').find('.catalog-filters').toggleClass('all');
    });

    $('.catalog-btn__filters').click(function () {
        $('.mob-filters').addClass('active');
        $('body').addClass('filters-opened');
    });

    $('.catalog-btn__categories').click(function () {
        $('.mob-categories').addClass('active');
        $('body').addClass('filters-opened');
    });

    $(document).click(function () {
        $('.catalog-mob__filters').removeClass('active');
        $('body').removeClass('filters-opened');
    });

    $(document).on('click', '.catalog-mob__filters', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', '.catalog-btn__filters', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', '.catalog-btn__categories', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', '.mob-filters__close', function () {
        $('.catalog-mob__filters').removeClass('active');
        $('body').removeClass('filters-opened');
    });

    // select

    $('.select').SumoSelect({
        forceCustomRendering: true
    });

    // price categories

    $('.price-goods__cat-btn').on('click', function(){
        $('.price-goods__cat-list').toggleClass('active');
    });

    $(document).click(function() {
        $('.price-goods__cat-list').removeClass('active');
    });

    $(document).on('click', '.price-goods__cat-list', function(e) {
        e.stopPropagation();
    });

    $(document).on('click', '.price-goods__cat-btn', function(e) {
        e.stopPropagation();
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

