;(function () {

    'use strict';

    // Parallax
    const parallax = function () {
        $(window).stellar();
    };


    // Burger Menu
    const burgerMenu = function () {

        $('body').on('click', '.js-nav-toggle', function (event) {

            event.preventDefault();

            if ($('#navbar').is(':visible')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }


        });

    };


    const testimonialCarousel = function () {
        const owl = $('.owl-carousel-fullwidth');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoHeight: true
        });
    };

    // Page Nav
    const clickMenu = function () {

        $('#navbar a:not([class="external"])').click(function (event) {
            const section = $(this).data('nav-section'),
                navbar = $('#navbar');

            if ($('[data-section="' + section + '"]').length) {
                $('html, body').animate({
                    scrollTop: $('[data-section="' + section + '"]').offset().top - 55
                }, 500);
            }

            if (navbar.is(':visible')) {
                navbar.removeClass('in');
                navbar.attr('aria-expanded', 'false');
                $('.js-nav-toggle').removeClass('active');
            }

            event.preventDefault();
            return false;
        });


    };

    // Reflect scrolling in navigation
    const navActive = function (section) {

        const $el = $('#navbar > ul');
        $el.find('li').removeClass('active');
        $el.each(function () {
            $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
        });

    };

    const navigationSection = function () {

        const $section = $('section[data-section]');

        $section.waypoint(function (direction) {
            if (direction === 'down') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: 'bottom-in-view'
        });

        $section.waypoint(function (direction) {
            if (direction === 'up') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: function () {
                return -$(this.element).height() + 155;
            }
        });

    };

    // Window Scroll
    const windowScroll = function () {
        const lastScrollTop = 0;

        $(window).scroll(function (event) {

            const header = $('#header'),
                scrlTop = $(this).scrollTop();

            if (scrlTop > 500 && scrlTop <= 2000) {
                header.addClass('navbar-fixed-top animated slideInDown');
            } else if (scrlTop <= 500) {
                if (header.hasClass('navbar-fixed-top')) {
                    header.addClass('navbar-fixed-top animated slideOutUp');
                    setTimeout(function () {
                        header.removeClass('navbar-fixed-top animated slideInDown slideOutUp');
                    }, 100);
                }
            }

        });
    };


    // Animations
    // Home
    const homeAnimate = function () {
        if ($('#home').length > 0) {

            $('#home').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        $('#home .to-animate').each(function (k) {
                            const el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };

    const exploreAnimate = function () {

        const explore = $('#tour');
        if (explore.length > 0) {

            explore.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        explore.find('.to-animate').each(function (k) {
                            const el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    setTimeout(function () {
                        explore.find('.to-animate-2').each(function (k) {
                            const el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInLeft animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 700);

                    setTimeout(function () {
                        explore.find('.to-animate-3').each(function (k) {
                            const el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInRight animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 1000);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };

    const testimonyAnimate = function () {
        const testimony = $('#gallery');
        if (testimony.length > 0) {

            testimony.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        testimony.find('.to-animate').each(function (k) {
                            const el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };

    const servicesAnimate = function () {
        const services = $('#videos');
        if (services.length > 0) {

            services.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    let sec = services.find('.to-animate').length;
                    sec = parseInt((sec * 200) + 400);

                    setTimeout(function () {
                        services.find('.to-animate').each(function (k) {
                            const el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    setTimeout(function () {
                        services.find('.to-animate-2').each(function (k) {
                            const el = $(this);

                            setTimeout(function () {
                                el.addClass('bounceIn animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, sec);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };

    const teamAnimate = function () {
        const team = $('#band');
        if (team.length > 0) {

            team.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {

                    let sec = team.find('.to-animate').length;
                    sec = parseInt((sec * 200) + 400);

                    setTimeout(function () {
                        team.find('.to-animate').each(function (k) {
                            const el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeIn animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    setTimeout(function () {
                        team.find('.to-animate-2').each(function (k) {
                            const el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, sec);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };

    const footerAnimate = function () {
        const footer = $('#footer');
        if (footer.length > 0) {

            footer.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {

                    setTimeout(function () {
                        footer.find('.to-animate').each(function (k) {
                            const el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeIn animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };


    // Document on load.
    $(function () {

        parallax();
        burgerMenu();
        clickMenu();
        // windowScroll();
        navigationSection();
        testimonialCarousel();

        // Animations
        homeAnimate();
        exploreAnimate();
        testimonyAnimate();
        servicesAnimate();
        teamAnimate();
        footerAnimate();


    });


}());