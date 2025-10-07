/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[791], {
    55046: function(e, t, r) {
        var n = r(82569);
        t.__esModule = !0,
        t.default = void 0;
        var o = n(r(66660))
          , i = n(r(50914))
          , a = n(r(69471))
          , u = n(r(67064))
          , l = n(r(87401))
          , s = n(r(80559))
          , c = n(r(58965))
          , f = r(88378)
          , p = r(96467)
          , d = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return (0,
            a.default)(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.className
                  , r = (0,
                i.default)(e, ["className"])
                  , n = (0,
                f.splitBsProps)(r)
                  , a = n[0]
                  , s = n[1]
                  , c = (0,
                f.getClassSet)(a);
                return l.default.createElement("span", (0,
                o.default)({}, s, {
                    className: (0,
                    u.default)(t, c)
                }))
            }
            ,
            t
        }(l.default.Component);
        d.Addon = s.default,
        d.Button = c.default;
        var b = (0,
        f.bsClass)("input-group", (0,
        f.bsSizes)([p.Size.LARGE, p.Size.SMALL], d));
        t.default = b,
        e.exports = t.default
    },
    80559: function(e, t, r) {
        var n = r(82569);
        t.__esModule = !0,
        t.default = void 0;
        var o = n(r(66660))
          , i = n(r(50914))
          , a = n(r(69471))
          , u = n(r(67064))
          , l = n(r(87401))
          , s = r(88378)
          , c = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return (0,
            a.default)(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.className
                  , r = (0,
                i.default)(e, ["className"])
                  , n = (0,
                s.splitBsProps)(r)
                  , a = n[0]
                  , c = n[1]
                  , f = (0,
                s.getClassSet)(a);
                return l.default.createElement("span", (0,
                o.default)({}, c, {
                    className: (0,
                    u.default)(t, f)
                }))
            }
            ,
            t
        }(l.default.Component)
          , f = (0,
        s.bsClass)("input-group-addon", c);
        t.default = f,
        e.exports = t.default
    },
    58965: function(e, t, r) {
        var n = r(82569);
        t.__esModule = !0,
        t.default = void 0;
        var o = n(r(66660))
          , i = n(r(50914))
          , a = n(r(69471))
          , u = n(r(67064))
          , l = n(r(87401))
          , s = r(88378)
          , c = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return (0,
            a.default)(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.className
                  , r = (0,
                i.default)(e, ["className"])
                  , n = (0,
                s.splitBsProps)(r)
                  , a = n[0]
                  , c = n[1]
                  , f = (0,
                s.getClassSet)(a);
                return l.default.createElement("span", (0,
                o.default)({}, c, {
                    className: (0,
                    u.default)(t, f)
                }))
            }
            ,
            t
        }(l.default.Component)
          , f = (0,
        s.bsClass)("input-group-btn", c);
        t.default = f,
        e.exports = t.default
    },
    62347: function(e, t, r) {
        var n = r(87401)
          , o = r(23398)
          , i = r.n(o)
          , a = r(67064)
          , u = r.n(a);
        function l(e) {
            "@babel/helpers - typeof";
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, c(n.key), n)
            }
        }
        function c(e) {
            var t = function(e, t) {
                if ("object" !== l(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" !== l(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === l(t) ? t : String(t)
        }
        function f(e, t) {
            return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function p(e) {
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
                var r, n = d(e);
                if (t) {
                    var o = d(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === l(t) || "function" == typeof t))
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
        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var b = function(e) {
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
                t && f(e, t)
            }(r, n.Component);
            var t = p(r);
            function r() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                t.apply(this, arguments)
            }
            return function(e, t, r) {
                t && s(e.prototype, t),
                r && s(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(r, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props.enableHover
                      , t = this.inlineBarDom.parentElement;
                    e && !t.classList.contains("ow-InlineBar-wrapper") && t.classList.add("ow-InlineBar-wrapper")
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , r = t.className
                      , o = t.children;
                    return n.createElement("div", {
                        className: u()("ow-InlineBar", r),
                        ref: function(t) {
                            e.inlineBarDom = t
                        }
                    }, o)
                }
            }]),
            r
        }();
        b.defaultProps = {
            enableHover: !1,
            className: ""
        },
        b.propTypes = {
            children: i().node.isRequired,
            enableHover: i().bool,
            className: i().string
        },
        t.Z = b
    },
    45792: function(e, t, r) {
        r.d(t, {
            $t: function() {
                return A
            },
            Nv: function() {
                return T
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
        function l(e) {
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
        l.propTypes = u,
        l.defaultProps = {
            title: "ad",
            url: "",
            hide: !1,
            className: "",
            style: {}
        };
        var s = r(77545)
          , c = r(84987);
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
        function b(e, t) {
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
                Object.defineProperty(e, y(n.key), n)
            }
        }
        function y(e) {
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
                          , i = b(t, p);
                        if (r)
                            return null;
                        var a = this.state
                          , u = a.width
                          , l = a.showRightAd
                          , f = l ? "right" : "left"
                          , h = l ? (0,
                        c.t)("app.ADBTN_HIDE") : (0,
                        c.t)("app.ADBTN_SHOW")
                          , y = {
                            width: u
                        };
                        return o.createElement("div", {
                            className: "ow-advertisement-right-wrapper"
                        }, n && o.createElement(s.Z, {
                            className: "ow-advertisement-right-button",
                            iconName: f,
                            title: h,
                            showContent: !1,
                            onClick: this.handlerToggleAd,
                            "aria-label": h
                        }), o.createElement(e, d({
                            style: y,
                            hide: !l
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
          , P = r(96744)
          , R = r(77454)
          , E = r(83416);
        function B(e) {
            "@babel/helpers - typeof";
            return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function k(e, t) {
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
        function N(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? k(Object(r), !0).forEach(function(t) {
                    _(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function _(e, t, r) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== B(e) || null === e)
                        return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== B(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === B(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var C = function(e) {
            var t = (0,
            S.Vg)(e).enabled
              , r = (0,
            E.Z)("advertisement") || {}
              , n = r.on
              , o = void 0 === n || n
              , i = r.adSmallSize
              , a = r.adBigSize
              , u = r.browserLimit
              , l = window.showADToggleBtn
              , s = window.autoRestoreADV;
            return {
                hide: !t || !o,
                adSmallSize: i,
                adBigSize: a,
                browserLimit: u,
                showRightBtn: l,
                autoRestoreRightAd: s
            }
        }
          , z = function() {
            return {}
        }
          , A = (0,
        n.$j)(C, z)(l)
          , T = ((0,
        n.$j)(function(e) {
            var t = C(e)
              , r = (0,
            P.b7)(e).renderData
              , n = void 0 === r ? {} : r
              , o = n.expanded
              , i = n.collapsing
              , a = (0,
            P.qI)("_")(e)
              , u = t.hide || o && !i || a;
            return N(N({}, t), {}, {
                hide: u
            })
        }, z)(l),
        (0,
        n.$j)(function(e) {
            var t = C(e)
              , r = (0,
            j.u0)(e).renderData
              , n = void 0 === r ? {} : r
              , o = n.expanded
              , i = n.collapsing
              , a = t.hide || o && !i;
            return N(N({}, t), {}, {
                hide: a
            })
        }, z)(l),
        (0,
        n.$j)(function(e) {
            var t = C(e)
              , r = (0,
            R.d9)(e).renderData
              , n = void 0 === r ? {} : r
              , o = n.expanded
              , i = n.collapsing
              , a = t.hide || o && !i;
            return N(N({}, t), {}, {
                hide: a
            })
        }, z)(l),
        (0,
        n.$j)(C, z)(O(l)))
    }
}]);
