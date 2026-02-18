(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-200px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Pricing-carousel
    $(".pricing-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Testimonial-carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });



    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Search Form Handling
    $('.search-form').submit(function (e) {
        e.preventDefault();
        var keyword = $(this).find('input').val();
        if (keyword) {
            alert('Searching for: ' + keyword);
            $('#searchModal').modal('hide');
        }
    });

    // Dynamic Active Nav Link Highlighting
    $(document).ready(function () {
        var path = window.location.pathname.split("/").pop();
        if (path == '') {
            path = 'index.html';
        }

        $('.navbar-nav .nav-link, .navbar-nav .dropdown-item, .sidebar .nav-link').each(function () {
            var href = $(this).attr('href');
            if (path === href) {
                $(this).addClass('active');
                if ($(this).hasClass('dropdown-item')) {
                    $(this).closest('.nav-item.dropdown').find('.nav-link.dropdown-toggle').addClass('active');
                }
            } else {
                $(this).removeClass('active');
            }
        });
    });


    // Dark Mode Toggle
    $(document).ready(function () {
        const toggleButton = $('#theme-toggle');
        const body = $('body');
        const icon = toggleButton.find('i');

        // Check localStorage or system preference
        if (localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            body.addClass('dark-mode');
            icon.removeClass('fa-moon').addClass('fa-sun');
        }

        toggleButton.click(function () {
            body.toggleClass('dark-mode');

            if (body.hasClass('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                icon.removeClass('fa-moon').addClass('fa-sun');
            } else {
                localStorage.setItem('theme', 'light');
                icon.removeClass('fa-sun').addClass('fa-moon');
            }
        });
    });
})(jQuery);

