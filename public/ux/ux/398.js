/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[398], {
    87398: function(e, t, r) {
        r.r(t);
        var n = r(87401)
          , o = r(55665)
          , i = r.n(o)
          , a = r(23398)
          , u = r.n(a)
          , s = r(16083)
          , c = r(40757)
          , l = r(44461)
          , f = r(45792)
          , p = r(2711)
          , d = r(83228)
          , y = r(94165)
          , h = r(83416)
          , b = r(47957)
          , m = r.n(b)
          , v = r(45857)
          , g = r(88422)
          , w = r(4446)
          , O = r(74494)
          , S = r(9631)
          , j = r(96312)
          , E = r(84987);
        function P(e) {
            "@babel/helpers - typeof";
            return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function R(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, k(n.key), n)
            }
        }
        function k(e) {
            var t = function(e, t) {
                if ("object" !== P(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" !== P(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === P(t) ? t : String(t)
        }
        function N(e, t) {
            return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function T(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = A(e);
                if (t) {
                    var o = A(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === P(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function A(e) {
            return (A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var L = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && N(e, t)
            }(r, n.Component);
            var t = T(r);
            function r(e) {
                var n;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                n = t.call(this, e);
                var o = window.uxLocalStorage && JSON.parse(window.uxLocalStorage.getItem("concurrentPopupShow"));
                return n.state = {
                    concurrentLoginShow: o
                },
                n
            }
            return function(e, t, r) {
                t && R(e.prototype, t),
                r && R(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(r, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    !0 !== window.securityNotification && (0,
                    w.nIE)() && e.securityTrackingList.filter(function(e) {
                        return "mail.vacationMessage2.save" !== e
                    }).map(function(t, r) {
                        window.securityNotification = !0,
                        (0,
                        c.Am)(n.createElement(S.Z, {
                            key: r,
                            toastId: t,
                            message: t,
                            id: r,
                            autoforwardAddress: e.autoforwardAddress.addresses,
                            addressEnabled: 0 === e.autoforwardAddress.addresses.length && "mail.forwarding.save" === t ? y.Q1.ENABLED : y.Q1.TEXT
                        }), {
                            autoClose: (0,
                            h.Z)("securityNotification.toastInterval"),
                            hideProgressBar: !0,
                            closeOnClick: !1,
                            pauseOnHover: !1,
                            draggable: !1,
                            progress: !1,
                            newestOnTop: !0,
                            transition: c.sm
                        })
                    })
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    if (m()(this.props, "autoforwardAddress.keepCopy") !== m()(e, "autoforwardAddress.keepCopy"))
                        return !1
                }
            }, {
                key: "render",
                value: function() {
                    return !(!window.uxLocalStorage || !JSON.parse(window.uxLocalStorage.getItem("erroredOut"))) && JSON.parse(window.uxLocalStorage.getItem("erroredOut")) ? n.createElement("div", null) : n.createElement("div", {
                        className: "ow-appLayout-hbox ow-appLayout-settings"
                    }, n.createElement(l.Z, null, n.createElement("div", {
                        className: "ow-appLayout-hbox ow-appLayout-flex"
                    }, n.createElement(i(), {
                        className: "ow-settings-SplitPane",
                        size: y.mW.SIZE,
                        maxSize: y.mW.MAXSIZE,
                        minSize: y.mW.MINSIZE
                    }, n.createElement(l.Z, null, n.createElement("div", {
                        className: "ow-appLayout-left"
                    }, n.createElement("div", {
                        className: "ow-appLayout-vbox"
                    }, n.createElement("div", {
                        className: "ow-appLayout-top"
                    }, n.createElement("div", {
                        className: "ow-settings-top-header"
                    }, n.createElement("div", {
                        className: "ow-settingsDetail-header-title",
                        role: y.HB.HEADING,
                        "aria-label": (0,
                        E.t)("app.SETTINGS"),
                        "aria-level": y.DU.H1
                    }, (0,
                    E.t)("app.SETTINGS")))), n.createElement("div", {
                        className: "ow-appLayout-flex ow-applayout-settings"
                    }, n.createElement(p.Z, null))))), n.createElement(l.Z, null, n.createElement(d.Z, null)))), (0,
                    h.Z)("advertisement.skyscrapper") && n.createElement(f.Nv, {
                        title: "ad",
                        className: "ow-advertisement-right",
                        url: (0,
                        h.Z)("advertisement.skyscrapperUrl")
                    })))
                }
            }], [{
                key: "name",
                get: function() {
                    return y.lw.SETTINGS
                }
            }]),
            r
        }();
        L.defaultProps = {
            securityTrackingList: [],
            autoforwardAddress: []
        },
        L.propTypes = {
            getUserProfile: u().string.isRequired,
            getAuthDetails: u().string.isRequired,
            getLoginHistory: u().string.isRequired,
            securityTrackingList: u().arrayOf(u().string),
            autoforwardAddress: u().arrayOf(u().string)
        };
        t.default = (0,
        s.$j)(function(e) {
            var t = (0,
            O.YqX)(e)
              , r = (0,
            j.PK)(e);
            return {
                getUserProfile: (0,
                v.zx)(e),
                getAuthDetails: (0,
                g._)(e),
                getLoginHistory: (0,
                v.JG)(e),
                securityTrackingList: t,
                autoforwardAddress: r
            }
        })(L)
    },
    45792: function(e, t, r) {
        r.d(t, {
            $t: function() {
                return z
            },
            Nv: function() {
                return B
            }
        });
        var n = r(16083)
          , o = r(87401)
          , i = r(23398)
          , a = r.n(i)
          , u = {
            title: a().string,
            url: a().string,
            hide: a().bool,
            className: a().string,
            style: a().shape(a().object)
        };
        function s(e) {
            var t = e.title
              , r = e.url
              , n = e.className
              , i = e.hide
              , a = e.style;
            return !i && o.createElement("div", {
                className: "".concat(n),
                style: a,
                tabIndex: 0
            }, o.createElement("iframe", {
                width: "100%",
                height: "100%",
                title: t,
                scrolling: "no",
                frameBorder: 0,
                src: r,
                tabIndex: -1
            }))
        }
        s.propTypes = u,
        s.defaultProps = {
            title: "ad",
            url: "",
            hide: !1,
            className: "",
            style: {}
        };
        var c = r(77545)
          , l = r(84987);
        function f(e) {
            "@babel/helpers - typeof";
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var p = ["hide", "showRightBtn"];
        function d() {
            return (d = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function y(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function h(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, b(n.key), n)
            }
        }
        function b(e) {
            var t = function(e, t) {
                if ("object" !== f(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" !== f(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === f(t) ? t : String(t)
        }
        function m(e, t) {
            return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function v(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = w(e);
                if (t) {
                    var o = w(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === f(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return g(e)
                }(this, r)
            }
        }
        function g(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function w(e) {
            return (w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var O = function(e) {
            var t = function(t) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && m(e, t)
                }(n, o.PureComponent);
                var r = v(n);
                function n(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, n),
                    (t = r.call(this, e)).state = {
                        width: 120,
                        showRightAd: !0
                    },
                    t.handlerResize = t.handlerResize.bind(g(t)),
                    t.handlerToggleAd = t.handlerToggleAd.bind(g(t)),
                    t.handleOutClick = t.handleOutClick.bind(g(t)),
                    t
                }
                return function(e, t, r) {
                    t && h(e.prototype, t),
                    r && h(e, r),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    })
                }(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.handlerResize(),
                        window.addEventListener("resize", this.handlerResize),
                        document.addEventListener("click", this.handleOutClick)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("resize", this.handlerResize),
                        document.removeEventListener("click", this.handleOutClick)
                    }
                }, {
                    key: "handleOutClick",
                    value: function(e) {
                        var t = this
                          , r = this.props
                          , n = r.hide
                          , o = r.autoRestoreRightAd;
                        if (!n && o) {
                            var i = e.target && e.target.classList;
                            i && (i.contains("ow-advertisement-right-button") || i.contains("ow-advertisement-right-wrapper") || i.contains("ow-icon-left")) || i && i.contains("ow-icon-right") && setTimeout(function() {
                                t.setState({
                                    showRightAd: !0
                                })
                            }, 500)
                        }
                    }
                }, {
                    key: "handlerResize",
                    value: function() {
                        if (!this.props.hide) {
                            var e = window.innerWidth
                              , t = this.props
                              , r = t.adSmallSize
                              , n = t.adBigSize
                              , o = e > t.browserLimit ? n : r;
                            this.setState({
                                width: o
                            })
                        }
                    }
                }, {
                    key: "handlerToggleAd",
                    value: function() {
                        this.setState({
                            showRightAd: !this.state.showRightAd
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props
                          , r = t.hide
                          , n = t.showRightBtn
                          , i = y(t, p);
                        if (r)
                            return null;
                        var a = this.state
                          , u = a.width
                          , s = a.showRightAd
                          , f = s ? "right" : "left"
                          , h = s ? (0,
                        l.t)("app.ADBTN_HIDE") : (0,
                        l.t)("app.ADBTN_SHOW")
                          , b = {
                            width: u
                        };
                        return o.createElement("div", {
                            className: "ow-advertisement-right-wrapper"
                        }, n && o.createElement(c.Z, {
                            className: "ow-advertisement-right-button",
                            iconName: f,
                            title: h,
                            showContent: !1,
                            onClick: this.handlerToggleAd,
                            "aria-label": h
                        }), o.createElement(e, d({
                            style: b,
                            hide: !s
                        }, i)))
                    }
                }]),
                n
            }();
            return t.defaultProps = {
                adSmallSize: 120,
                adBigSize: 150,
                browserLimit: 1280,
                hide: !1,
                showRightBtn: !0,
                autoRestoreRightAd: !0
            },
            t.propTypes = {
                adSmallSize: a().number,
                adBigSize: a().number,
                browserLimit: a().number,
                hide: a().bool,
                showRightBtn: a().bool,
                autoRestoreRightAd: a().bool
            },
            t
        }
          , S = r(45857)
          , j = r(17702)
          , E = r(96744)
          , P = r(77454)
          , R = r(83416);
        function k(e) {
            "@babel/helpers - typeof";
            return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function N(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function T(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? N(Object(r), !0).forEach(function(t) {
                    A(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function A(e, t, r) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== k(e) || null === e)
                        return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== k(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === k(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var L = function(e) {
            var t = (0,
            S.Vg)(e).enabled
              , r = (0,
            R.Z)("advertisement") || {}
              , n = r.on
              , o = void 0 === n || n
              , i = r.adSmallSize
              , a = r.adBigSize
              , u = r.browserLimit
              , s = window.showADToggleBtn
              , c = window.autoRestoreADV;
            return {
                hide: !t || !o,
                adSmallSize: i,
                adBigSize: a,
                browserLimit: u,
                showRightBtn: s,
                autoRestoreRightAd: c
            }
        }
          , x = function() {
            return {}
        }
          , z = (0,
        n.$j)(L, x)(s)
          , B = ((0,
        n.$j)(function(e) {
            var t = L(e)
              , r = (0,
            E.b7)(e).renderData
              , n = void 0 === r ? {} : r
              , o = n.expanded
              , i = n.collapsing
              , a = (0,
            E.qI)("_")(e)
              , u = t.hide || o && !i || a;
            return T(T({}, t), {}, {
                hide: u
            })
        }, x)(s),
        (0,
        n.$j)(function(e) {
            var t = L(e)
              , r = (0,
            j.u0)(e).renderData
              , n = void 0 === r ? {} : r
              , o = n.expanded
              , i = n.collapsing
              , a = t.hide || o && !i;
            return T(T({}, t), {}, {
                hide: a
            })
        }, x)(s),
        (0,
        n.$j)(function(e) {
            var t = L(e)
              , r = (0,
            P.d9)(e).renderData
              , n = void 0 === r ? {} : r
              , o = n.expanded
              , i = n.collapsing
              , a = t.hide || o && !i;
            return T(T({}, t), {}, {
                hide: a
            })
        }, x)(s),
        (0,
        n.$j)(L, x)(O(s)))
    }
}]);
