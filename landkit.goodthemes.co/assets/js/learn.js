"use strict";
"undefined" != typeof AOS && AOS.init({
        duration: 700,
        easing: "ease-out-quad",
        once: !0,
        startEvent: "load"
    }),
    function() {
        var e = document.querySelectorAll('[data-toggle="countup"]');

        function a(e) {
            var t = e.dataset.from ? +e.dataset.from : null,
                a = e.dataset.to ? +e.dataset.to : null,
                o = e.dataset.decimals ? +e.dataset.decimals : null,
                n = e.dataset.duration ? +e.dataset.duration : null,
                l = e.dataset.options ? JSON.parse(e.dataset.options) : null,
                r = new CountUp(e, t, a, o, n, l);
            r.error ? console.error(r.error) : (r.start(), e.classList.add("counted"))
        }
        "undefined" != typeof CountUp && e && [].forEach.call(e, function(e) {
            "countup:in" !== e.getAttribute("data-aos-id") && a(e)
        }), document.addEventListener("aos:in:countup:in", function(e) {
            if (e.detail instanceof Element) a(e.detail);
            else {
                var t = document.querySelectorAll('.aos-animate[data-aos-id="countup:in"]:not(.counted)');
                [].forEach.call(t, function(e) {
                    a(e)
                })
            }
        })
    }(), jQuery().fancybox && ($.fancybox.defaults.image.preload = !1, $.fancybox.defaults.toolbar = !1, $.fancybox.defaults.clickContent = !1),
    function() {
        var e = document.querySelectorAll(".highlight");
        "undefined" != typeof hljs && e && [].forEach.call(e, function(e) {
            ! function(e) {
                hljs.highlightBlock(e)
            }(e)
        })
    }(),
    function() {
        var e = document.querySelectorAll('[data-toggle="map"]');
        "undefined" != typeof mapboxgl && e && [].forEach.call(e, function(e) {
            ! function(e) {
                var t = e.dataset.options;
                t = t ? JSON.parse(t) : {};
                var a = {
                        container: e,
                        style: "mapbox://styles/mapbox/light-v9",
                        scrollZoom: !1,
                        interactive: !1
                    },
                    o = Object.assign(a, t);
                mapboxgl.accessToken = "pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg", new mapboxgl.Map(o)
            }(e)
        })
    }(),
    function() {
        var t = document.querySelector(".navbar"),
            a = !1,
            o = !!t && t.classList.contains("navbar-togglable");

        function n() {
            a && o && (t.classList.remove("navbar-light"), t.classList.remove("bg-white"), t.classList.remove("border-bottom"), t.classList.add("navbar-dark"), t.style.display = "none", t.offsetHeight, t.style.display = "block", a = !1)
        }

        function l() {
            var e = window.pageYOffset;
            0 < e && !a ? !a && o && (t.classList.remove("navbar-dark"), t.classList.add("navbar-light"), t.classList.add("bg-white"), t.classList.add("border-bottom"), a = !0) : (0 == e || e < 0 && a) && n()
        }
        t && o && "load scroll".split(" ").forEach(function(e) {
            window.addEventListener(e, function(e) {
                e.type;
                l()
            })
        })
    }(),
    function() {
        var e = document.querySelectorAll(".svg-shim > svg");
        /MSIE \d|Trident.*rv:/.test(navigator.userAgent) && [].forEach.call(e, function(e) {
            ! function(e) {
                var t = window.getComputedStyle(e, null).getPropertyValue("color"),
                    a = (new XMLSerializer).serializeToString(e);
                a = "data:image/svg+xml," + (a = (a = (a = (a = (a = (a = a.replace(/currentColor/g, t)).replace(/\s\s+/g, " ")).replace(/</g, "%3C")).replace(/>/g, "%3E")).replace(/#/g, "%23")).replace(/"/g, "'"));
                var o = document.createElement("img");
                o.src = a, o.alt = "...";
                var n = e.parentNode;
                n.appendChild(o), n.removeChild(e)
            }(e)
        })
    }(),
    function() {
        var e = document.querySelectorAll('[data-toggle="popover"]');
        e && $(e).popover({
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h6 class="popover-header text-uppercase"></h6><div class="popover-body"></div></div>'
        })
    }(),
    function() {
        var e = document.querySelector('[data-toggle="price"]');
        "undefined" != typeof CountUp && e && e.addEventListener("change", function(e) {
            ! function(e) {
                var newElement = document.createElement("div");
                var chng = document.getElementById("chng-item");
                
                

                
                var t = e.target,
                    n = t.checked,
                    a = t.dataset.target,
                    o = document.querySelectorAll(a);
                
                [].forEach.call(o, function(e) {
                    var t = e.dataset.annual,
                        a = e.dataset.monthly,
                        o = n ? new CountUp(e, t, a, null, 1) : new CountUp(e, a, t, null, 1);
                    o.error ? console.error(o.error) : o.start()
                        chn = n ? chng.innerHTML = ' <div class="card-body"> <h6 class="font-weight-bold text-uppercase text-center mb-5">incorporation of LLP</h6> <div class="d-flex justify-content-center"> <span class="h2 mb-0 mt-2">Rs.</span> <span class="price display-2 mb-0" data-annual="4999" data-monthly="4999">4999</span> <span class="h2 align-self-end mb-1"></span> </div><p class="text-center text-muted mb-6 mb-md-8"> one time fees </p><div class="d-flex"> <span class="badge badge-rounded-circle badge-success-soft mt-1 mr-4"> <i class="fe fe-check"></i> </span> <p> DSC with 3 years validity for directors </p></div><div class="d-flex"> <span class="badge badge-rounded-circle badge-success-soft mt-1 mr-4"> <i class="fe fe-check"></i> </span> <p> Directory Identification numbers (DIN) </p></div><div class="d-flex"> <span class="badge badge-rounded-circle badge-success-soft mt-1 mr-4"> <i class="fe fe-check"></i> </span> <p> Partnership deed </p></div><div class="d-flex"> <span class="badge badge-rounded-circle badge-success-soft mt-1 mr-4"> <i class="fe fe-check"></i> </span> <p> PAN and TAN </p></div><div class="d-flex"> <span class="badge badge-rounded-circle badge-success-soft mt-1 mr-4"> <i class="fe fe-check"></i> </span> <p> RUN approval 1 time </p></div><div class="d-flex"> <span class="badge badge-rounded-circle badge-success-soft mt-1 mr-4"> <i class="fe fe-check"></i> </span> <p> PTEC enrolment </p></div><div class="d-flex"> <span class="badge badge-rounded-circle badge-success-soft mt-1 mr-4"> <i class="fe fe-check"></i> </span> <p class="mb-0"> Udyog Adhar </p></div></div><a href="contact.html#contact" class="card-btn btn btn-block btn-lg btn-light bg-gray-300 text-gray-700 rounded-bottom"> Contact us </a>'
                    : chng.innerHTML = ' <div class="card-body py-6 py-md-8"> <div class="row justify-content-center"> <div class="col-12 col-xl-10"> <p class="text-center mb-8 mb-md-11"> <span class="badge badge-pill badge-primary-soft"> <span class="h6 font-weight-bold text-uppercase">Enterprise</span> </span> </p><p class="lead text-center text-muted mb-0 mb-md-10"> We offer variable pricing with discounts for larger organizations. Get in touch with us and we’ll figure out something that works for everyone. </p></div></div></div><a href="contact.html#contact" class="card-btn btn btn-block btn-lg btn-light bg-gray-300 text-gray-700 rounded-bottom"> Contact us </a>';
                    chn.error ? console.error(chn.error) : chn.start()
                })
            }(e)
        })
    }(),
    function() {
        var e = '[data-toggle="smooth-scroll"]';
        "undefined" != typeof SmoothScroll && new SmoothScroll(e, {
            header: ".navbar.fixed-top",
            offset: "24"
        })
    }(),
    function() {
        var e = document.querySelectorAll('[data-toggle="tooltip"]');
        e && $(e).tooltip()
    }(),
    function() {
        var e = document.querySelectorAll('[data-toggle="typed"]');
        "undefined" != typeof Typed && e && [].forEach.call(e, function(e) {
            ! function(e) {
                var t = e.dataset.options;
                t = t ? JSON.parse(t) : {};
                var a = Object.assign({
                    typeSpeed: 40,
                    backSpeed: 40,
                    backDelay: 1e3,
                    loop: !0
                }, t);
                new Typed(e, a)
            }(e)
        })
    }();