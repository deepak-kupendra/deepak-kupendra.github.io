! function(a) {
    function b() {
        var a = document.createElement("style");
        a.appendChild(document.createTextNode("@-ms-viewport { width: device-width; }")), navigator.userAgent.match(/IEMobile\/10\.0/) && a.appendChild(document.createTextNode("@-ms-viewport { width: auto !important; }")), document.getElementsByTagName("head")[0].appendChild(a)
    }

    function c(b) {
        return a(b).length > 0
    }

    function d() {
        return !!("ontouchstart" in window) || !!("onmsgesturechange" in window) && !!window.navigator.maxTouchPoints
    }

    function e() {
        a(".pie-chart").each(function() {
            var b = a(this),
                c = b.parent().width(),
                d = b.attr("data-barSize");
            d > c && (d = c), b.css("height", d), b.css("width", d), b.css("line-height", d + "px"), b.find("i").css({
                "line-height": d + "px",
                "font-size": d / 3
            })
        })
    }

    function f() {
        "undefined" != typeof a.fn.easyPieChart && a(".pie-chart:in-viewport").each(function() {
            var b = a(this),
                c = b.parent().width(),
                d = b.attr("data-barSize");
            d > c && (d = c), b.easyPieChart({
                animate: 1300,
                lineCap: "square",
                lineWidth: b.attr("data-lineWidth"),
                size: d,
                barColor: b.attr("data-barColor"),
                trackColor: b.attr("data-trackColor"),
                scaleColor: "transparent",
                onStep: function(b, c, d) {
                    a(this.el).find(".pie-chart-percent span").text(Math.round(d))
                }
            })
        })
    }

    function g() {
        a(".milestone:in-viewport").each(function() {
            var b = a(this),
                c = b.find(".milestone-value").attr("data-stop"),
                d = parseInt(b.find(".milestone-value").attr("data-speed"));
            b.hasClass("already-animated") || (b.addClass("already-animated"), a({
                countNum: b.find(".milestone-value").text()
            }).animate({
                countNum: c
            }, {
                duration: d,
                easing: "linear",
                step: function() {
                    b.find(".milestone-value").text(Math.floor(this.countNum))
                },
                complete: function() {
                    b.find(".milestone-value").text(this.countNum)
                }
            }))
        })
    }

    function h() {
        a(".progress-bar .progress-bar-outer:in-viewport").each(function() {
            var b = a(this);
            b.hasClass("already-animated") || (b.addClass("already-animated"), b.animate({
                width: b.attr("data-width") + "%"
            }, 2e3))
        })
    }

    function i() {
        "undefined" != typeof a.fn.parallax && a(".parallax").each(function() {
            var b = a(this);
            b.addClass("parallax-enabled"), b.parallax("49%", .3, !1)
        })
    }

    function j() {
        "undefined" != typeof a.fn.validate && a("#contact-form").validate({
            errorClass: "validation-error",
            rules: {
                name: {
                    required: !0
                },
                user_email: {
                    required: !0,
                    email: !0
                },
                msg: {
                    required: !0
                }
            },
            messages: {
                name: {
                    required: "Field is required!"
                },
                user_email: {
                    required: "Field is required!",
                    email: "Please enter a valid email address"
                },
                msg: {
                    required: "Field is required!"
                }
            },
            submitHandler: function(b) {
                var c;
                a(b).ajaxSubmit({
                    type: "POST",
                    data: a(b).serialize(),
                    url: "php/send_contact_message.php",
                    success: function(b) {
                        "OK" == b ? (c = "<div class='alert success'><i class='fa fa-check-circle-o'></i>The message has been sent! I'll get in touch soon.</div>", a("#contact-form").clearForm()) : c = '<div class="alert error"><i class="fa fa-times-circle"></i>' + b + "</div>", a("#formstatus").html(c)
                    },
                    error: function() {
                        c = '<div class="alert error"><i class="fa fa-times-circle"></i>There was an error sending the message!</div>', a("#formstatus").html(c)
                    }
                })
            }
        })
    }

    function k() {
        a(window).width() > s ? (a("#mobile-menu").hide(), a("#mobile-menu-trigger").removeClass("mobile-menu-opened").addClass("mobile-menu-closed")) : c("#mobile-menu") || (a("#menu").clone().attr({
            id: "mobile-menu",
            "class": "fixed"
        }).insertAfter("#nav"), a("#mobile-menu > li > a, #mobile-menu > li > ul > li > a").each(function() {
            var b = a(this);
            (b.next().hasClass("sub-menu") || b.next().is("ul")) && b.append('<span class="fa fa-angle-down mobile-menu-submenu-arrow mobile-menu-submenu-closed"></span>')
        }), a(".mobile-menu-submenu-arrow").click(function(b) {
            var c = a(this);
            c.hasClass("mobile-menu-submenu-closed") ? (c.parent().siblings("ul").slideDown(300), c.removeClass("mobile-menu-submenu-closed fa-angle-down").addClass("mobile-menu-submenu-opened fa-angle-up")) : (c.parent().siblings("ul").slideUp(300), c.removeClass("mobile-menu-submenu-opened fa-angle-up").addClass("mobile-menu-submenu-closed fa-angle-down")), b.preventDefault()
        }), a("#mobile-menu li, #mobile-menu li a, #mobile-menu ul").attr("style", ""))
    }

    function l() {
        a("#mobile-menu-trigger").click(function(b) {
            var c = a(this),
                d = a("#mobile-menu");
            c.hasClass("mobile-menu-opened") ? (c.removeClass("mobile-menu-opened").addClass("mobile-menu-closed"), d.slideUp(300)) : (c.removeClass("mobile-menu-closed").addClass("mobile-menu-opened"), d.slideDown(300)), b.preventDefault()
        })
    }

    function m() {
        a(".accordion a.accordion-item-toggle").click(function(b) {
            var c = a(this).closest(".accordion-item").find(".accordion-item-content");
            a(this).closest(".accordion").find(".accordion-item-content").not(c).slideUp(), a(this).hasClass("active") ? a(this).removeClass("active") : (a(this).closest(".accordion").find(".accordion-item-toggle.active").removeClass("active"), a(this).addClass("active")), c.stop(!1, !0).slideToggle(), b.preventDefault()
        }), a(".toggle a.toggle-item-toggle").click(function(b) {
            var c = a(this).closest(".toggle-item").find(".toggle-item-content");
            a(this).hasClass("active") ? a(this).removeClass("active") : a(this).addClass("active"), c.stop(!1, !0).slideToggle(), b.preventDefault()
        })
    }

    function n() {
        a("#back-to-top").click(function() {
            return a("html, body").animate({
                scrollTop: 0
            }, "slow"), !1
        })
    }

    function o() {
        a(window).scrollTop() > a(window).height() / 2 ? (a("#back-to-top").removeClass("gone"), a("#back-to-top").addClass("visible")) : (a("#back-to-top").removeClass("visible"), a("#back-to-top").addClass("gone"))
    }

    function p() {
        a(".loader-img").delay(500).fadeOut(), a("#pageloader").delay(1e3).fadeOut("slow")
    }

    function q() {
        var b = a(window).height();
        a(".full-screen").css("min-height", b + "px")
    }

    function r() {
        a("a[href*=#]:not([href=#])").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var b = a(this.hash);
                if (b = b.length ? b : a("[name=" + this.hash.slice(1) + "]"), b.length) return a("html,body").animate({
                    scrollTop: b.offset().top
                }, 700), !1
            }
        })
    }
    var s = 979;
    a(document).ready(function() {
        b(), e(), f(), g(), h(), d() || i(), j(), k(), l(), m(), n(), o(), q(), r();
        var c = !0;
        "undefined" != typeof a.fn.waypoint && c && a(window).width() > 1024 && a("#nav").waypoint("sticky", {
            wrapper: '<div class="sticky-wrapper" />',
            stuckClass: "stuck"
        }), "undefined" != typeof a.fn.simplePlaceholder && a("input[placeholder], textarea[placeholder]").simplePlaceholder(), "undefined" != typeof a.fn.fitVids && a(".fitvids").fitVids(), "undefined" != typeof a.fn.superfish && a("#menu").superfish({
            delay: 100,
            animation: {
                opacity: "show",
                height: "show"
            },
            speed: 100,
            cssArrows: !1
        }), "undefined" != typeof a.fn.bxSlider && a(".references-slider .slides").bxSlider({
            mode: "fade",
            speed: 500,
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            pager: !0,
            pagerType: "full",
            controls: !0,
            auto: !0,
            pause: 4e3,
            autoHover: !0,
            useCSS: !1
        }), "undefined" != typeof a.fn.scrollspy && a("body").scrollspy({
            offset: 50
        }), "undefined" != typeof a.fn.magnificPopup && (a(".magnificPopup").magnificPopup({
            disableOn: 400,
            closeOnContentClick: !0,
            type: "image"
        }), a(".magnificPopup-gallery").magnificPopup({
            disableOn: 400,
            type: "image",
            gallery: {
                enabled: !0
            }
        }), a(".ajax-popup-link").magnificPopup({
            type: "ajax",
            closeOnContentClick: !1,
            closeOnBgClick: !1,
            gallery: {
                enabled: !0
            },
            callbacks: {
                ajaxContentAdded: function() {
                    a(".portfolio-slider .slides").bxSlider({
                        mode: "horizontal",
                        speed: 500,
                        infiniteLoop: !0,
                        hideControlOnEnd: !1,
                        pager: !0,
                        pagerType: "full",
                        controls: !1,
                        auto: !0,
                        pause: 4e3,
                        autoHover: !0,
                        useCSS: !1
                    })
                }
            }
        })), "undefined" != typeof a.fn.easytabs && (a(".tabs-container").easytabs({
            animationSpeed: 300,
            updateHash: !1
        }), a(".vertical-tabs-container").easytabs({
            animationSpeed: 300,
            updateHash: !1
        })), "undefined" != typeof a.fn.gMap && a(".google-map").each(function() {
            var b = a(this),
                c = parseInt(b.attr("data-zoom")),
                d = b.attr("data-address"),
                e = b.attr("data-caption");
            b.gMap({
                maptype: "ROADMAP",
                scrollwheel: !1,
                zoom: c,
                markers: [{
                    address: d,
                    html: e,
                    popup: !1
                }]
            })
        }), "undefined" != typeof a.fn.isotope && a(window).width() > 767 && a(".portfolio-items").imagesLoaded(function() {
            var b = a(".portfolio-items");
            b.isotope({
                itemSelector: ".item",
                layoutMode: "masonry",
                transitionDuration: "0.5s"
            }), a(".portfolio-filter li a").click(function() {
                a(".portfolio-filter li a").removeClass("active"), a(this).addClass("active");
                var c = a(this).attr("data-filter");
                return b.isotope({
                    filter: c
                }), !1
            }), a(window).resize(function() {
                b.isotope({})
            })
        })
    }), a(window).scroll(function() {
        g(), f(), h(), o()
    }), a(window).resize(function() {
        k(), q()
    }), a(window).load(function() {
        p()
    })
}(window.jQuery);