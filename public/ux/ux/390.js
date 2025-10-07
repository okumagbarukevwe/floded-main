/*! Synchronoss Messaging 2018 */
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[390], {
    81587: function(e, t, n) {
        var r = n(73204);
        e.exports = function(e, t) {
            for (var n = e.length; n-- && r(t, e[n], 0) > -1; )
                ;
            return n
        }
    },
    99321: function(e, t, n) {
        var r = n(73204);
        e.exports = function(e, t) {
            for (var n = -1, o = e.length; ++n < o && r(t, e[n], 0) > -1; )
                ;
            return n
        }
    },
    16955: function(e, t, n) {
        var r = n(36929)
          , o = n(73988)
          , a = n(14759)
          , i = n(81587)
          , s = n(99321)
          , l = n(15392)
          , c = n(51177);
        e.exports = function(e, t, n) {
            if ((e = c(e)) && (n || void 0 === t))
                return o(e);
            if (!e || !(t = r(t)))
                return e;
            var u = l(e)
              , f = l(t)
              , d = s(u, f)
              , p = i(u, f) + 1;
            return a(u, d, p).join("")
        }
    },
    46749: function(e, t, n) {
        "use strict";
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(32081)
          , s = function(e) {
            var t = e.icon
              , n = e.message;
            return r.createElement("div", {
                className: "ow-PreviewPrompt-container"
            }, r.createElement("div", {
                className: "ow-PreviewPrompt-top"
            }), r.createElement("div", {
                className: "ow-PreviewPrompt-content"
            }, r.createElement(i.Z, {
                name: t,
                className: "ow-PreviewPrompt-icon"
            }), r.createElement("span", {
                className: "ow-PreviewPrompt-message",
                "aria-label": n
            }, n)), r.createElement("div", {
                className: "ow-PreviewPrompt-bottom"
            }))
        };
        s.defaultProps = {
            icon: "",
            message: ""
        },
        s.propTypes = {
            icon: a().string.isRequired,
            message: a().string.isRequired
        },
        t.Z = s
    },
    47093: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return h
            }
        });
        var r = n(87401)
          , o = n(12674)
          , a = n(23398)
          , i = n.n(a)
          , s = n(80110);
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
        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, u(r.key), r)
            }
        }
        function u(e) {
            var t = function(e, t) {
                if ("object" !== l(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== l(r))
                        return r;
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
        function d(e) {
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
                var n, r = m(e);
                if (t) {
                    var o = m(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === l(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return p(e)
                }(this, n)
            }
        }
        function p(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function m(e) {
            return (m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var h = function(e) {
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
            }(n, r.Component);
            var t = d(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).handleTouchStart = r.handleTouchStart.bind(p(r)),
                r.handleTouchEnd = r.handleTouchEnd.bind(p(r)),
                r.handleTouchMove = r.handleTouchMove.bind(p(r)),
                r.getMoveDistance = r.getMoveDistance.bind(p(r)),
                r.registerTouchEvents = r.registerTouchEvents.bind(p(r)),
                r.unregisterTouchEvents = r.unregisterTouchEvents.bind(p(r)),
                r
            }
            return function(e, t, n) {
                t && c(e.prototype, t),
                n && c(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props.show
                      , t = (0,
                    o.findDOMNode)(this.spinner)
                      , n = t.getBoundingClientRect().height;
                    t.style.top = "".concat(e ? 70 : -n - 55, "px")
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    var t = e.show
                      , n = e.list;
                    return this.props.list !== n && this.unregisterTouchEvents(),
                    this.props.show !== t || this.props.list !== n
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this.props
                      , t = e.list
                      , n = e.show
                      , r = (0,
                    o.findDOMNode)(this.spinner);
                    if (!this.startMoving) {
                        var a = r.getBoundingClientRect().height;
                        r.style.top = "".concat(n ? 70 : -a - 55, "px")
                    }
                    t && (this.unregisterTouchEvents(),
                    this.registerTouchEvents())
                }
            }, {
                key: "getMoveDistance",
                value: function(e) {
                    var t = (0,
                    o.findDOMNode)(this.spinner).getBoundingClientRect().height
                      , n = e - this.touchStartY;
                    return 70 * Math.atan(n / 70) * 3.5 / Math.PI - t
                }
            }, {
                key: "registerTouchEvents",
                value: function() {
                    var e = this.props.list;
                    if (e) {
                        var t = e();
                        t && (t.addEventListener("touchstart", this.handleTouchStart, {
                            passive: !0
                        }),
                        t.addEventListener("touchmove", this.handleTouchMove, {
                            passive: !0
                        }),
                        t.addEventListener("touchend", this.handleTouchEnd, {
                            passive: !0
                        }))
                    }
                }
            }, {
                key: "unregisterTouchEvents",
                value: function() {
                    var e = this.props.list;
                    if (e) {
                        var t = e();
                        t && (t.removeEventListener("touchstart", this.handleTouchStart, {
                            passive: !0
                        }),
                        t.removeEventListener("touchmove", this.handleTouchMove, {
                            passive: !0
                        }),
                        t.removeEventListener("touchend", this.handleTouchEnd, {
                            passive: !0
                        }))
                    }
                }
            }, {
                key: "handleTouchStart",
                value: function(e) {
                    if (!this.props.show) {
                        var t = e.touches[0]
                          , n = t.clientX
                          , r = t.clientY;
                        this.touchStartY = r,
                        this.touchStartX = n,
                        this.touchStarted = !0
                    }
                }
            }, {
                key: "handleTouchMove",
                value: function(e) {
                    var t = e.touches[0]
                      , n = t.clientX
                      , r = t.clientY
                      , a = e.currentTarget;
                    if (Math.abs(this.touchStartX - n) > Math.abs(this.touchStartY - r) && (this.touchStarted = !1),
                    this.touchStarted) {
                        this.startMoving || 0 !== a.scrollTop || (this.startMoving = !0,
                        this.touchStartY = r,
                        this.touchStartX = n);
                        var i = (0,
                        o.findDOMNode)(this.spinner);
                        if (this.startMoving) {
                            var s = this.getMoveDistance(r);
                            i.style.transition = "unset",
                            i.style.top = "".concat(s, "px")
                        }
                    }
                }
            }, {
                key: "handleTouchEnd",
                value: function(e) {
                    var t = this.props.show
                      , n = (0,
                    o.findDOMNode)(this.spinner);
                    if (n.style.transition = "top 0.5s",
                    this.startMoving = !1,
                    !t) {
                        var r = this.props.onSwipeEnd
                          , a = e.changedTouches[0].clientY;
                        if (this.getMoveDistance(a) > 70)
                            n.style.top = "".concat(70, "px"),
                            r();
                        else {
                            var i = n.getBoundingClientRect().height;
                            n.style.top = "".concat(-i - 5, "px")
                        }
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return r.createElement(s.Z, {
                        className: "ow-adv-spinner",
                        ref: function(t) {
                            e.spinner = t
                        }
                    })
                }
            }]),
            n
        }();
        h.defaultProps = {
            show: !1,
            list: null,
            onSwipeEnd: function() {}
        },
        h.propTypes = {
            show: i().bool,
            list: i().func,
            onSwipeEnd: i().func
        }
    },
    74222: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return H
            }
        });
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(58574)
          , s = n.n(i)
          , l = n(27542)
          , c = n.n(l)
          , u = n(97186)
          , f = n.n(u)
          , d = n(64143)
          , p = n.n(d)
          , m = n(60782)
          , h = n.n(m)
          , y = n(45239)
          , b = n.n(y)
          , v = n(97230)
          , g = n(8379)
          , E = n(54427)
          , O = n(12790)
          , S = n(90088)
          , w = n(54075)
          , C = n(40944)
          , P = n(84987)
          , j = n(44910)
          , F = n(94165);
        function T(e) {
            "@babel/helpers - typeof";
            return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function N() {
            return (N = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function D(e) {
            return function(e) {
                if (Array.isArray(e))
                    return I(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return I(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return I(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function I(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function k(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function _(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? k(Object(n), !0).forEach(function(t) {
                    M(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function M(e, t, n) {
            return (t = A(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function R(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, A(r.key), r)
            }
        }
        function A(e) {
            var t = function(e, t) {
                if ("object" !== T(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== T(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === T(t) ? t : String(t)
        }
        function B(e, t) {
            return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function L(e) {
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
                var n, r = G(e);
                if (t) {
                    var o = G(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === T(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return x(e)
                }(this, n)
            }
        }
        function x(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function G(e) {
            return (G = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var V = "contacts.detailEdit.label"
          , H = function(e) {
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
                t && B(e, t)
            }(n, r.Component);
            var t = L(n);
            function n(e) {
                var r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                r = t.call(this, e);
                var o = (0,
                C.HK)(e.config);
                return r.state = {
                    showAlert: !1,
                    errorMsg: "",
                    baseFields: o,
                    pristineData: e.pristineData,
                    fields: (0,
                    C.Oi)(o, e.data)
                },
                r.handleSelectOtherFields = r.handleSelectOtherFields.bind(x(r)),
                r.reset = r.reset.bind(x(r)),
                r.getFormData = r.getFormData.bind(x(r)),
                r.handleHideAlert = r.handleHideAlert.bind(x(r)),
                r.handleChange = r.handleChange.bind(x(r)),
                r.handleChange(),
                r
            }
            return function(e, t, n) {
                t && R(e.prototype, t),
                n && R(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = e.pristineData
                      , n = e.data;
                    c()(t, this.props.pristineData) || this.setState({
                        pristineData: t
                    }, this.handleChange),
                    c()(n, this.props.data) || this.setState({
                        fields: (0,
                        C.Oi)(this.state.baseFields, n)
                    }, this.handleChange)
                }
            }, {
                key: "getOptions",
                value: function(e, t) {
                    var n = this.state.fields[e]
                      , r = n.allowDuplicates
                      , o = n.labels
                      , a = n.displayLabels;
                    return r ? o.map(function(e) {
                        return {
                            text: (0,
                            C.ss)(e, V),
                            value: e
                        }
                    }) : s()(o, s()(p()(a, "labelType"), [t])).map(function(e) {
                        return {
                            text: (0,
                            C.ss)(e, V),
                            value: e
                        }
                    })
                }
            }, {
                key: "getFormData",
                value: function() {
                    var e = this.state.fields
                      , t = (0,
                    C.m5)(e)
                      , n = t.message
                      , r = n.isInvalid
                      , o = n.hasRequiredFields;
                    return r || o ? (this.setState({
                        showAlert: !0,
                        errorMsg: (0,
                        C.ss)(o ? "NEED_REQUIRED_FIELDS" : "INVALID_FIELD", "contacts.editPanel.message")
                    }),
                    null) : t
                }
            }, {
                key: "handleHideAlert",
                value: function() {
                    this.setState({
                        showAlert: !1
                    })
                }
            }, {
                key: "handleSelectOtherFields",
                value: function(e) {
                    if (e) {
                        var t = e.value;
                        this.setState(function(e) {
                            var n, r = e.fields.additionalFields;
                            if ("lzHeader" === t) {
                                var o, a = e.fields[t], i = a.labels, l = a.displayLabels, c = s()(i, p()(l, "labelType"));
                                return {
                                    fields: _(_({}, e.fields), {}, (o = {},
                                    M(o, t, _(_({}, e.fields[t]), {}, {
                                        displayLabels: [].concat(D(l), D(c.map(function(e) {
                                            return _(_({}, (0,
                                            C.XW)(e, V)), {}, {
                                                value: ""
                                            })
                                        })))
                                    })),
                                    M(o, "additionalFields", r.filter(function(e) {
                                        return e.type !== t
                                    })),
                                    o))
                                }
                            }
                            return {
                                fields: _(_({}, e.fields), {}, (n = {},
                                M(n, t, _(_({}, e.fields[t]), {}, {
                                    display: !0
                                })),
                                M(n, "additionalFields", r.filter(function(e) {
                                    return e.type !== t
                                })),
                                n))
                            }
                        })
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this.setState({
                        fields: (0,
                        C.Oi)(this.state.baseFields, {})
                    })
                }
            }, {
                key: "handleImgChange",
                value: function(e, t) {
                    this.setState(function(n) {
                        return {
                            fields: _(_({}, n.fields), {}, M({}, e, _(_({}, n.fields[e]), {}, {
                                photo: _(_({}, n.fields[e].photo), {}, {
                                    has: !!t,
                                    id: t,
                                    removed: n.fields[e].photo.has && !t
                                })
                            })))
                        }
                    }, this.handleChange)
                }
            }, {
                key: "handleInputBlur",
                value: function(e, t, n, r) {
                    this.setState(function(o) {
                        var a = o.fields[e]
                          , i = a.displayLabels
                          , s = a.hasMultiInputs
                          , l = a.validator
                          , c = (0,
                        C.cd)(n, (0,
                        C.X)(l, e, r));
                        return s ? {
                            fields: _(_({}, o.fields), {}, M({}, e, _(_({}, o.fields[e]), {}, {
                                displayLabels: i.map(function(e, n) {
                                    return t === n ? _(_({}, e), {}, {
                                        fields2Value: _(_({}, e.fields2Value), {}, M({}, r, _(_({}, e.fields2Value[r]), c)))
                                    }) : e
                                })
                            })))
                        } : {
                            fields: _(_({}, o.fields), {}, M({}, e, _(_({}, o.fields[e]), {}, {
                                displayLabels: i.map(function(e, n) {
                                    return t === n ? _(_({}, e), c) : e
                                })
                            })))
                        }
                    })
                }
            }, {
                key: "isShowAddBtn",
                value: function(e) {
                    var t = this.state.fields[e]
                      , n = t.allowDuplicates
                      , r = t.labels
                      , o = t.displayLabels;
                    return !!n || !!s()(r, p()(o, "labelType")).length
                }
            }, {
                key: "addField",
                value: function(e) {
                    this.setState(function(t) {
                        var n = t.fields[e]
                          , r = n.hasMultiInputs
                          , o = n.allowDuplicates
                          , a = n.labels
                          , i = n.displayLabels
                          , l = n.fields
                          , c = n.labelCustomized
                          , u = p()(i, "labelType");
                        if (r) {
                            var f = o ? a[0] : s()(a, u)[0]
                              , d = {};
                            return Object.values(l[f]).forEach(function(e) {
                                d[e.name] = {
                                    value: "",
                                    placeholder: e.placeholder
                                }
                            }),
                            {
                                fields: _(_({}, t.fields), {}, M({}, e, _(_({}, t.fields[e]), {}, {
                                    displayLabels: [].concat(D(i), [_(_({}, (0,
                                    C.XW)(f, V)), {}, {
                                        fields2Value: d
                                    })])
                                })))
                            }
                        }
                        var m = o ? a[0] : s()(a, u)[0]
                          , h = _(_({}, (0,
                        C.XW)(m, V)), {}, c ? {
                            labelValue: "",
                            value: ""
                        } : {
                            value: ""
                        });
                        return {
                            fields: _(_({}, t.fields), {}, M({}, e, _(_({}, t.fields[e]), {}, {
                                displayLabels: [].concat(D(i), [h])
                            })))
                        }
                    })
                }
            }, {
                key: "removeField",
                value: function(e, t) {
                    this.setState(function(n) {
                        var r = n.fields[e].displayLabels;
                        return {
                            fields: _(_({}, n.fields), {}, M({}, e, _(_({}, n.fields[e]), {}, {
                                displayLabels: r.filter(function(e, n) {
                                    return t !== n
                                })
                            })))
                        }
                    }, this.handleChange)
                }
            }, {
                key: "handleSelectChange",
                value: function(e, t, n) {
                    this.setState(function(r) {
                        var o = r.fields[e].displayLabels;
                        return {
                            fields: _(_({}, r.fields), {}, M({}, e, _(_({}, r.fields[e]), {}, {
                                displayLabels: o.map(function(e, r) {
                                    return t === r ? _(_({}, e), (0,
                                    C.XW)(n, V)) : e
                                })
                            })))
                        }
                    }, this.handleChange)
                }
            }, {
                key: "handleInputChange",
                value: function(e, t, n, r) {
                    this.setState(function(o) {
                        var a = o.fields[e]
                          , i = a.displayLabels
                          , s = a.hasMultiInputs
                          , l = a.validator
                          , c = "email" !== l ? (0,
                        C.X)(l, e, r) : ""
                          , u = (0,
                        C.Hv)(n, c);
                        return s ? {
                            fields: _(_({}, o.fields), {}, M({}, e, _(_({}, o.fields[e]), {}, {
                                displayLabels: i.map(function(e, o) {
                                    return t === o ? _(_({}, e), {}, {
                                        fields2Value: _(_({}, e.fields2Value), {}, M({}, r, _(_({}, e.fields2Value[r]), {}, {
                                            value: n
                                        }, u)))
                                    }) : e
                                })
                            })))
                        } : {
                            fields: _(_({}, o.fields), {}, M({}, e, _(_({}, o.fields[e]), {}, {
                                displayLabels: i.map(function(e, r) {
                                    return t === r ? _(_({}, e), {}, {
                                        value: n
                                    }, u) : e
                                })
                            })))
                        }
                    }, this.handleChange)
                }
            }, {
                key: "handleLabelChange",
                value: function(e, t, n) {
                    this.setState(function(r) {
                        var o = r.fields[e].displayLabels
                          , a = (0,
                        C.AJ)(n);
                        return {
                            fields: _(_({}, r.fields), {}, M({}, e, _(_({}, r.fields[e]), {}, {
                                displayLabels: o.map(function(e, r) {
                                    return t === r ? _(_({}, e), {}, {
                                        labelValue: n
                                    }, a) : e
                                })
                            })))
                        }
                    }, this.handleChange)
                }
            }, {
                key: "handleChange",
                value: function() {
                    var e = this.props.onChange
                      , t = this.state
                      , n = t.pristineData
                      , r = t.fields
                      , o = (0,
                    C.m5)(r)
                      , a = o.data
                      , i = o.message
                      , s = i.photoId
                      , l = i.photoRemoved
                      , u = !1;
                    f()(n) ? (!f()(a.firstName) || !f()(a.lastName) || a.fields.length > 1) && (u = !0) : (!c()(n.firstName, a.firstName) || !c()(n.lastName, a.lastName) || s || l || n.fields.length !== a.fields.length || h()(n.fields, a.fields, function(e, t) {
                        return e.type === t.type && e.label === t.label && !!(e.value && t.value && c()(e.value, t.value) || e.values && t.values && c()(e.values, t.values))
                    }).length) && (u = !0),
                    e(u, a)
                }
            }, {
                key: "renderHeaderSection",
                value: function(e, t, n, o) {
                    var a = this
                      , i = this.props.data;
                    return r.createElement(v.Z, N({
                        key: e,
                        ref: o,
                        contactId: i.id,
                        editBtnDisplayed: n,
                        onInputChange: function(t, n, r) {
                            return a.handleInputChange(e, t, n, r)
                        },
                        onInputBlur: function(t, n, r) {
                            return a.handleInputBlur(e, t, n, r)
                        },
                        onImgChange: function(t) {
                            return a.handleImgChange(e, t)
                        },
                        hasPhoto: t.photo.has
                    }, t))
                }
            }, {
                key: "renderSelectGroupField",
                value: function(e, t, n) {
                    var o = this;
                    return r.createElement(E.Z, N({
                        key: e,
                        ref: n,
                        getOptions: function(t) {
                            return o.getOptions(e, t)
                        },
                        isShowAddBtn: function() {
                            return o.isShowAddBtn(e)
                        },
                        addField: function() {
                            return o.addField(e)
                        },
                        removeField: function(t) {
                            o.removeField(e, t)
                        },
                        onSelectChange: function(t, n) {
                            return o.handleSelectChange(e, t, n)
                        },
                        onInputChange: function(t, n, r) {
                            return o.handleInputChange(e, t, n, r)
                        },
                        onInputBlur: function(t, n, r) {
                            return o.handleInputBlur(e, t, n, r)
                        }
                    }, t))
                }
            }, {
                key: "renderSelectField",
                value: function(e, t, n) {
                    var o = this;
                    return r.createElement(g.Z, N({
                        key: e,
                        ref: n,
                        getOptions: function(t) {
                            return o.getOptions(e, t)
                        },
                        isShowAddBtn: function() {
                            return o.isShowAddBtn(e)
                        },
                        addField: function() {
                            return o.addField(e)
                        },
                        removeField: function(t) {
                            o.removeField(e, t)
                        },
                        onSelectChange: function(t, n) {
                            return o.handleSelectChange(e, t, n)
                        },
                        onInputChange: function(t, n) {
                            return o.handleInputChange(e, t, n)
                        },
                        onInputBlur: function(t, n) {
                            return o.handleInputBlur(e, t, n)
                        }
                    }, t))
                }
            }, {
                key: "renderTextField",
                value: function(e, t, n) {
                    var o = this;
                    return r.createElement(O.Z, N({
                        key: e,
                        ref: n,
                        isShowAddBtn: function() {
                            return o.isShowAddBtn(e)
                        },
                        addField: function() {
                            return o.addField(e)
                        },
                        removeField: function(t) {
                            o.removeField(e, t)
                        },
                        onInputChange: function(t, n) {
                            return o.handleInputChange(e, t, n)
                        },
                        onLabelChange: function(t, n) {
                            return o.handleLabelChange(e, t, n)
                        },
                        onInputBlur: function(t, n) {
                            return o.handleInputBlur(e, t, n)
                        }
                    }, t))
                }
            }, {
                key: "renderAdditionalFields",
                value: function() {
                    var e = this
                      , t = this.state.fields.additionalFields
                      , n = this.context.isRtl
                      , o = t.map(function(e) {
                        return {
                            label: e.label,
                            value: e.type
                        }
                    });
                    return t.length ? r.createElement("div", {
                        className: "ow-contacts-ContactEditForm-section"
                    }, r.createElement("div", {
                        className: "ow-contacts-ContactEditForm-section-title",
                        role: F.HB.HEADING,
                        "aria-level": F.DU.H3,
                        "arai-label": (0,
                        P.t)("contacts.editPanel.other")
                    }, r.createElement("span", null, (0,
                    P.t)("contacts.editPanel.other"))), r.createElement("div", {
                        className: "ow-contacts-editForm-optionsFields ow-contacts-ContactEditForm-section-fields",
                        onKeyDown: function(e) {
                            return e.key === F.BY.TABKEY && (0,
                            j.kW)(".ow-contacts-ContactFormCancelBtn")
                        }
                    }, r.createElement("span", {
                        className: "ow-selectInput-mainLabel",
                        "aria-label": (0,
                        P.t)("contacts.editPanel.addFields")
                    }, (0,
                    P.t)("contacts.editPanel.addFields")), r.createElement(S.Z, {
                        rtl: n,
                        onChange: function(t) {
                            return e.handleSelectOtherFields(t)
                        },
                        options: o,
                        placeholder: (0,
                        P.t)("contacts.editPanel.ADD_FIELD_BUTTON_LABEL"),
                        "aria-label": (0,
                        P.t)("contacts.editPanel.ADD_FIELD_BUTTON_LABEL"),
                        clearable: !1,
                        searchable: !1
                    }))) : void 0
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.editBtnDisplayed
                      , n = this.state
                      , o = n.fields
                      , a = n.showAlert
                      , i = n.errorMsg
                      , s = [];
                    return Object.keys(o).forEach(function(n) {
                        var r = o[n]
                          , a = (0,
                        C.pL)(n);
                        r.display && (r.isHeader ? s.push(e.renderHeaderSection(n, r, t, a)) : r.hasMultiInputs ? s.push(e.renderSelectGroupField(n, r, a)) : 1 === Object.keys(r.fields).length ? s.push(e.renderTextField(n, r, a)) : s.push(e.renderSelectField(n, r, a)))
                    }),
                    s.sort(function(e, t) {
                        return e.ref > t.ref ? 1 : -1
                    }),
                    r.createElement("div", {
                        className: "ow-contacts-ContactEditForm"
                    }, r.createElement(w.Z, {
                        show: a,
                        message: i,
                        onHide: this.handleHideAlert
                    }), r.createElement("div", {
                        className: "ow-contacts-ContactEditForm-body"
                    }, r.createElement(b(), {
                        horizontal: !0
                    }, s, this.renderAdditionalFields())))
                }
            }]),
            n
        }();
        H.contextTypes = {
            isRtl: a().bool
        },
        H.propTypes = {
            config: a().array.isRequired,
            pristineData: a().object.isRequired,
            data: a().object.isRequired,
            editBtnDisplayed: a().bool,
            onChange: a().func
        },
        H.defaultProps = {
            editBtnDisplayed: !0,
            onChange: function() {}
        }
    },
    41619: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return w
            }
        });
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(78295)
          , s = n.n(i)
          , l = n(83853)
          , c = n(22747)
          , u = n(84987)
          , f = n(70293)
          , d = n.n(f)
          , p = n(38868)
          , m = n.n(p)
          , h = n(94165);
        function y(e) {
            "@babel/helpers - typeof";
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function b() {
            return (b = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function v(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, g(r.key), r)
            }
        }
        function g(e) {
            var t = function(e, t) {
                if ("object" !== y(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== y(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === y(t) ? t : String(t)
        }
        function E(e, t) {
            return (E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function O(e) {
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
                var n, r = S(e);
                if (t) {
                    var o = S(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === y(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, n)
            }
        }
        function S(e) {
            return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var w = function(e) {
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
                t && E(e, t)
            }(n, r.PureComponent);
            var t = O(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && v(e.prototype, t),
                n && v(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.fields
                      , n = e.displayLabels
                      , o = e.onInputChange
                      , a = e.editBtnDisplayed
                      , i = e.hasPhoto
                      , f = e.onImgChange
                      , p = e.onInputBlur
                      , y = e.contactId
                      , v = n.map(function(e, n) {
                        return r.createElement(d(), {
                            lg: "6",
                            md: "6",
                            xs: "12"
                        }, r.createElement("div", {
                            className: "ow-contacts-ContactHeaderSection-field",
                            "aria-label": null === e || void 0 === e ? void 0 : e.label
                        }, r.createElement("span", {
                            className: "ow-contacts-header-text-field-line-label"
                        }, e.label), r.createElement(c.Z, b({
                            "aria-label": e.label,
                            key: e.labelType,
                            type: t[e.labelType].type,
                            onChange: function(t) {
                                return o(n, t, e.labelType)
                            },
                            onBlur: function(t) {
                                return p(n, t, e.labelType)
                            }
                        }, e))))
                    });
                    return r.createElement(s(), {
                        className: "ow-contacts-ContactHeaderSection"
                    }, r.createElement(l.Z, {
                        contactId: y,
                        editBtnDisplayed: a,
                        hasPhoto: i,
                        onChange: f
                    }), r.createElement(m(), null, r.createElement(d(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, r.createElement("div", {
                        className: "ow-contacts-ContactEditForm-section-title",
                        role: h.HB.HEADING,
                        "aria-level": h.DU.H3,
                        "aria-label": (0,
                        u.t)("contacts.editPanel.header")
                    }, r.createElement("span", null, (0,
                    u.t)("contacts.editPanel.header"))))), r.createElement(m(), null, r.createElement("div", {
                        className: "ow-contacts-ContactHeaderSection-fields"
                    }, v)))
                }
            }]),
            n
        }();
        w.propTypes = {
            fields: a().object,
            displayLabels: a().arrayOf(a().shape({
                labelType: a().string
            })),
            onInputChange: a().func,
            contactId: a().string,
            editBtnDisplayed: a().bool,
            hasPhoto: a().bool,
            onImgChange: a().func,
            onInputBlur: a().func
        },
        w.defaultProps = {
            fields: {},
            displayLabels: [],
            onInputChange: function() {},
            contactId: "",
            editBtnDisplayed: !1,
            hasPhoto: !1,
            onImgChange: function() {},
            onInputBlur: function() {}
        }
    },
    95093: function(e, t, n) {
        "use strict";
        var r = n(87401)
          , o = n(23398)
          , a = n(67142)
          , i = n.n(a)
          , s = n(35369)
          , l = n(74238)
          , c = n(32081)
          , u = n(84987)
          , f = n(90656)
          , d = n(68725)
          , p = n(40944)
          , m = n(94165)
          , h = n(83416)
          , y = n(44910);
        function b(e) {
            "@babel/helpers - typeof";
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function v() {
            return (v = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function g(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function E(e) {
            return function(e) {
                if (Array.isArray(e))
                    return O(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return O(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return O(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function O(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function S(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? S(Object(n), !0).forEach(function(t) {
                    N(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function C(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, D(r.key), r)
            }
        }
        function P(e, t) {
            return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function j(e) {
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
                var n, r = T(e);
                if (t) {
                    var o = T(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === b(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return F(e)
                }(this, n)
            }
        }
        function F(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function T(e) {
            return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function N(e, t, n) {
            return (t = D(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function D(e) {
            var t = function(e, t) {
                if ("object" !== b(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== b(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === b(t) ? t : String(t)
        }
        var I = m.sH.SORT_FIRSTNAME_ASC
          , k = m.sH.SORT_LASTNAME_ASC
          , _ = (0,
        h.Z)("contacts")
          , M = _.regexp.folderNameInvalidChars
          , R = _.group
          , A = R.max
          , B = R.allowDuplicateName
          , L = function(e) {
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
                t && P(e, t)
            }(n, r.PureComponent);
            var t = j(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                N(F(r = t.call(this, e)), "handleFocusOnEnabledSave", function() {
                    r.props.disableSave ? (0,
                    y.kW)(".ow-contacts-ContactFormCancelBtn") : setTimeout(function() {
                        (0,
                        y.kW)(".ow-contacts-ContactFormSaveBtn")
                    }, 0)
                }),
                r.state = {
                    initialMemberIds: e.data.contacts ? Object.keys(e.data.contacts.items) : [],
                    initialEmails: e.data.emails || [],
                    currentMembers: e.data.contacts ? w({}, e.data.contacts.items) : {},
                    currentMemberIds: e.data.contacts ? Object.keys(e.data.contacts.items) : [],
                    currentEmails: e.data.emails || []
                },
                r.memberChanged = !1,
                r.emailChanged = !1,
                r.nameChanged = !1,
                r.currentName = void 0,
                r.initialEmailChanged = !1,
                r.props.data && !r.props.data.id && r.state.initialEmails.length > 0 && (r.initialEmailChanged = !0),
                r.setFormsyRef = r.setFormsyRef.bind(F(r)),
                r.handleAddMembersOrEmails = r.handleAddMembersOrEmails.bind(F(r)),
                r.handleRemoveMembersOrEmails = r.handleRemoveMembersOrEmails.bind(F(r)),
                r.handleFormChange = r.handleFormChange.bind(F(r)),
                r.getOptionsList = r.getOptionsList.bind(F(r)),
                r.handleValidateContact = r.handleValidateContact.bind(F(r)),
                r.handleFocusOnEnabledSave = r.handleFocusOnEnabledSave.bind(F(r)),
                r
            }
            return function(e, t, n) {
                t && C(e.prototype, t),
                n && C(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    this.autoInput && this.autoInput.setState({
                        values: []
                    }),
                    this.handleOnChange()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    this.memberChanged = !!i()(t.initialMemberIds, this.state.currentMemberIds).length,
                    this.emailChanged = !!i()(t.initialEmails, this.state.currentEmails).length,
                    this.handleOnChange()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    (0,
                    this.props.onChange)(!1)
                }
            }, {
                key: "setFormsyRef",
                value: function(e) {
                    e && (0,
                    this.props.formsyRef)(e)
                }
            }, {
                key: "handleValidateContact",
                value: function(e, t) {
                    var n = this.state.currentMembers
                      , r = d.Z.is("email", e[t]);
                    for (var o in n)
                        return n[o].email !== e[t] && r
                }
            }, {
                key: "handleOnChange",
                value: function() {
                    var e = this.props.onChange
                      , t = this.initialEmailChanged
                      , n = this.emailChanged
                      , r = this.memberChanged
                      , o = this.nameChanged
                      , a = this.currentName;
                    e(t || n || o || r, a)
                }
            }, {
                key: "handleAddMembersOrEmails",
                value: function(e) {
                    var t = e.id
                      , n = e.value
                      , r = e.type
                      , o = this.state
                      , a = o.currentEmails
                      , i = o.currentMemberIds;
                    if (!(!t && !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(n) || t && i.includes(t) && "secondary" !== r || a.includes(n.toLowerCase()) || (0,
                    p.C7)(a, n.toLowerCase()))) {
                        if (t && "secondary" !== r) {
                            var s = this.props.contactList;
                            this.setState(function(e) {
                                return {
                                    currentMemberIds: [].concat(E(e.currentMemberIds), [t]),
                                    currentMembers: w(w({}, e.currentMembers), {}, N({}, t, s.find(function(e) {
                                        return e.id === t
                                    })))
                                }
                            })
                        } else {
                            var l = "".concat(e.title, "<").concat(e.value, ">");
                            this.setState(function(e) {
                                return {
                                    currentEmails: [].concat(E(e.currentEmails), [l])
                                }
                            })
                        }
                        this.autoInput.setState({
                            values: []
                        })
                    }
                }
            }, {
                key: "handleRemoveMembersOrEmails",
                value: function(e) {
                    var t = this;
                    (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).isContact ? this.setState(function(t) {
                        var n = t.currentMemberIds
                          , r = t.currentMembers
                          , o = n.slice();
                        o.splice(o.indexOf(e), 1);
                        r[e];
                        var a = g(r, [e].map(D));
                        return {
                            currentMemberIds: E(o),
                            currentMembers: w({}, a)
                        }
                    }, function() {
                        t.handleFocusOnEnabledSave()
                    }) : this.setState(function(t) {
                        var n = t.currentEmails.slice();
                        return n.splice(n.indexOf(e), 1),
                        {
                            currentEmails: E(n)
                        }
                    }, function() {
                        t.handleFocusOnEnabledSave()
                    })
                }
            }, {
                key: "handleFormChange",
                value: function(e, t) {
                    this.nameChanged = t,
                    this.currentName = e,
                    this.handleOnChange()
                }
            }, {
                key: "getOptionsList",
                value: function(e, t) {
                    var n = [];
                    return e.map(function(e) {
                        var r = (0,
                        p._t)(e, {
                            sort: t,
                            postProcess: !0
                        }).title;
                        e.lzEmail.fields.forEach(function(t) {
                            var o;
                            o = t.value === e.email ? "primary" : "secondary",
                            n.push({
                                id: e.id,
                                title: r,
                                value: t.value,
                                type: o
                            })
                        })
                    }),
                    n
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , o = n.id
                      , a = n.groupName
                      , i = t.groupNames
                      , d = t.contactSort
                      , h = t.shouldMask
                      , y = t.onSearch
                      , b = t.onValid
                      , g = t.onInvalid
                      , O = t.onValidSubmit
                      , S = this.state
                      , w = S.currentEmails
                      , C = S.currentMembers
                      , P = S.currentMemberIds;
                    return r.createElement("div", {
                        className: "ow-contacts-GroupEditForm"
                    }, r.createElement("div", {
                        className: "ow-contacts-GroupEditForm-body"
                    }, r.createElement("div", {
                        className: "ow-contacts-GroupEditForm-editor-name"
                    }, r.createElement(c.Z, {
                        name: "group-contacts"
                    }), r.createElement(s.l0, {
                        onChange: this.handleFormChange,
                        onValid: b,
                        onInvalid: g,
                        onValidSubmit: O,
                        ref: this.setFormsyRef
                    }, r.createElement(s.UP, {
                        type: "text",
                        label: "",
                        placeholder: (0,
                        u.t)("contacts.catalogView.ADD_GROUP_LABEL"),
                        "aria-label": (0,
                        u.t)("contacts.catalogView.ADD_GROUP_LABEL"),
                        name: "name",
                        value: a || "",
                        validations: {
                            customValidation: function(e, t) {
                                return "" === t.trim() ? (0,
                                u.t)("contacts.catalogView.controlDialog.errorMessage.BLANK_NAME") : M.test(t) ? (0,
                                f.WU)((0,
                                u.t)("contacts.catalogView.controlDialog.errorMessage.INVALIDATE_NAME"), (0,
                                f.iC)(M)) : !(!o && !B && -1 !== i.indexOf(t.trim())) || (0,
                                f.WU)((0,
                                u.t)("contacts.catalogView.controlDialog.errorMessage.DUP_NAME"), t)
                            },
                            maxLength: A
                        },
                        validationErrors: {
                            maxLength: (0,
                            f.WU)((0,
                            u.t)("contacts.catalogView.message.maxLengthText"), A),
                            isDefaultRequiredValue: (0,
                            u.t)("contacts.catalogView.controlDialog.errorMessage.BLANK_NAME")
                        },
                        required: !0,
                        "aria-required": !0
                    }))), r.createElement("div", {
                        className: "ow-contacts-GroupEditForm-editor-members"
                    }, r.createElement("div", {
                        className: "ow-contacts-GroupEditForm-editor-members-autoInput"
                    }, r.createElement(l.Z, v({
                        placeholder: (0,
                        u.t)("contacts.editPanel.GROUP_ADD_MEMBER_PLACEHOLDER"),
                        title: (0,
                        u.t)("contacts.editPanel.GROUP_ADD_MEMBER_PLACEHOLDER"),
                        options: this.getOptionsList(this.props.contactList, d),
                        getOptions: y,
                        onAdd: this.handleAddMembersOrEmails,
                        handleFocus: this.handleFocusOnEnabledSave,
                        groupMembers: [].concat(E(P), E(w)),
                        ref: function(t) {
                            e.autoInput = t
                        },
                        labelKey: "title",
                        valueKey: "value",
                        showMask: h,
                        autoSuggest: !0,
                        optionRender: function(e, t, n) {
                            return r.createElement("div", {
                                className: "ow-combox-menuitem-option"
                            }, r.createElement("div", {
                                title: n[e]
                            }, n[e]), r.createElement("div", {
                                title: n[t]
                            }, n[t]))
                        },
                        getValueToEdit: function(e, t, n) {
                            var r = e[t]
                              , o = e[n];
                            return -1 !== o.lastIndexOf("<") || -1 !== o.lastIndexOf(">") ? "".concat(r).concat(o) : r ? "".concat(r, "<").concat(o, ">") : o
                        },
                        setEditValue: function(e, t, n, r) {
                            -1 !== r.lastIndexOf("<") && r.lastIndexOf(">") === r.length - 1 ? (e[t] = r.slice(0, r.lastIndexOf("<")),
                            e[n] = r.slice(r.lastIndexOf("<") + 1, -1)) : (e[t] = "",
                            e[n] = r)
                        },
                        validate: this.handleValidateContact
                    }, this.props)), r.createElement("span", {
                        "aria-label": (0,
                        u.t)("contacts.editPanel.message.GROUP_ADD_MEMBER_TIP")
                    }, (0,
                    u.t)("contacts.editPanel.message.GROUP_ADD_MEMBER_TIP"))), r.createElement("div", {
                        className: "ow-contacts-GroupEditForm-section"
                    }, r.createElement("div", {
                        className: "ow-contacts-GroupEditForm-section-title",
                        "aria-label": (0,
                        u.t)("contacts.detailEdit.label.CONTACT_LIST")
                    }, r.createElement("span", null, (0,
                    u.t)("contacts.detailEdit.label.CONTACT_LIST"), " ", "(".concat(P.length + w.length, ")"))), r.createElement("div", {
                        className: "ow-contacts-GroupEditForm-section-members"
                    }, P.map(function(t, n) {
                        var o = (0,
                        p._t)(C[t], {
                            sort: d
                        })
                          , a = o.title
                          , i = o.value
                          , s = [].concat(E(P), E(w));
                        return r.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member",
                            tabIndex: 0
                        }, r.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member-content"
                        }, r.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member-title",
                            title: a,
                            "aria-label": a
                        }, r.createElement("span", null, a)), r.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member-value",
                            title: i,
                            "aria-label": i
                        }, r.createElement("span", null, i))), r.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member-control"
                        }, r.createElement(c.Z, {
                            name: "trash",
                            onClick: function() {
                                return e.handleRemoveMembersOrEmails(t, {
                                    isContact: !0
                                })
                            },
                            role: m.HB.BUTTON,
                            "aria-label": (0,
                            u.t)("common.DELETE"),
                            tabIndex: 0,
                            onKeyDown: function(r) {
                                if (r.key !== m.BY.TABKEY) {
                                    if (r.key !== m.BY.ENTERKEY)
                                        return;
                                    e.handleRemoveMembersOrEmails(t, {
                                        isContact: !0
                                    })
                                }
                                r.shiftKey || n !== (null === s || void 0 === s ? void 0 : s.length) - 1 || e.handleFocusOnEnabledSave()
                            }
                        })))
                    })), r.createElement("div", {
                        className: "ow-contacts-GroupEditForm-section-emails"
                    }, w.map(function(t, n) {
                        return r.createElement("div", {
                            className: "ow-contacts-GroupEditForm-email",
                            tabIndex: 0
                        }, r.createElement("div", {
                            className: "ow-contacts-GroupEditForm-email-content"
                        }, t.indexOf("<") > -1 ? r.createElement("div", null, r.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member-title"
                        }, r.createElement("span", null, r.createElement("b", null, t.substr(0, t.indexOf("<"))))), r.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member-value",
                            title: t,
                            "aria-label": t
                        }, r.createElement("span", null, t.substring(t.lastIndexOf("<") + 1, t.lastIndexOf(">"))))) : r.createElement("div", {
                            className: "ow-contacts-GroupEditForm-email-content"
                        }, r.createElement("div", {
                            className: "ow-contacts-GroupEditForm-email-title",
                            title: t,
                            "aria-label": t
                        }, r.createElement("span", null, t)))), r.createElement("div", {
                            className: "ow-contacts-GroupEditForm-email-control"
                        }, r.createElement(c.Z, {
                            name: "trash",
                            role: m.HB.BUTTON,
                            "aria-label": (0,
                            u.t)("common.DELETE"),
                            onClick: function() {
                                return e.handleRemoveMembersOrEmails(t)
                            },
                            tabIndex: 0,
                            onKeyDown: function(r) {
                                if (r.key !== m.BY.TABKEY) {
                                    if (r.key !== m.BY.ENTERKEY)
                                        return;
                                    e.handleRemoveMembersOrEmails(t)
                                }
                                r.shiftKey || n !== (null === w || void 0 === w ? void 0 : w.length) - 1 || e.handleFocusOnEnabledSave()
                            }
                        })))
                    }))))))
                }
            }]),
            n
        }();
        L.defaultProps = {
            data: {},
            groupNames: [],
            contactList: [],
            contactSort: k,
            shouldMask: !1,
            onSearch: function() {},
            onSelect: function() {},
            onChange: function() {},
            onValid: function() {},
            onInvalid: function() {},
            onValidSubmit: function() {},
            formsyRef: function() {}
        },
        L.propTypes = {
            data: (0,
            o.shape)({
                id: o.string,
                isGroup: o.bool,
                groupName: o.string,
                emails: (0,
                o.arrayOf)(o.string),
                displayName: o.string,
                addressBookId: o.string,
                fields: (0,
                o.arrayOf)((0,
                o.shape)({
                    type: o.string,
                    label: o.string,
                    value: o.string
                })),
                contacts: (0,
                o.shape)({
                    items: o.object,
                    totalCount: o.number
                })
            }),
            groupNames: (0,
            o.arrayOf)(o.string),
            contactList: (0,
            o.arrayOf)((0,
            o.shape)({
                id: o.string,
                isGroup: o.bool,
                firstName: o.string,
                lastName: o.string,
                email: o.string,
                displayName: o.string,
                addressBookId: o.string,
                fields: (0,
                o.arrayOf)((0,
                o.shape)({
                    type: o.string,
                    label: o.string,
                    value: o.string
                }))
            })),
            contactSort: (0,
            o.oneOf)([I, k]),
            shouldMask: o.bool,
            onSearch: o.func,
            onSelect: o.func,
            onChange: o.func,
            onValid: o.func,
            onInvalid: o.func,
            onValidSubmit: o.func,
            formsyRef: o.func
        },
        t.Z = L
    },
    61123: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return h
            }
        });
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(8764)
          , s = n.n(i)
          , l = n(32081);
        function c(e) {
            "@babel/helpers - typeof";
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, f(r.key), r)
            }
        }
        function f(e) {
            var t = function(e, t) {
                if ("object" !== c(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== c(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === c(t) ? t : String(t)
        }
        function d(e, t) {
            return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, r = m(e);
                if (t) {
                    var o = m(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === c(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, n)
            }
        }
        function m(e) {
            return (m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var h = function(e) {
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
                t && d(e, t)
            }(n, r.Component);
            var t = p(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && u(e.prototype, t),
                n && u(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e = this;
                    return r.createElement("div", {
                        className: "ow-cancel-send-toast"
                    }, r.createElement("div", {
                        className: "ow-error-message-toast"
                    }, r.createElement("span", null, this.props.errorMessage)), r.createElement("div", null, r.createElement(s(), {
                        className: "ow-cancel-send-toast-close-icon",
                        onClick: function() {
                            return e.props.closeToast()
                        }
                    }, r.createElement(l.Z, {
                        name: "close"
                    }))))
                }
            }]),
            n
        }();
        h.defaultProps = {
            closeToast: function() {},
            errorMessage: ""
        },
        h.propTypes = {
            closeToast: a().func,
            errorMessage: a().string
        }
    },
    52396: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return S
            }
        });
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(8764)
          , s = n.n(i)
          , l = n(70293)
          , c = n.n(l)
          , u = n(38868)
          , f = n.n(u)
          , d = n(83416)
          , p = n(84987)
          , m = n(90656);
        function h(e) {
            "@babel/helpers - typeof";
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, b(r.key), r)
            }
        }
        function b(e) {
            var t = function(e, t) {
                if ("object" !== h(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== h(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === h(t) ? t : String(t)
        }
        function v(e, t) {
            return (v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function g(e) {
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
                var n, r = O(e);
                if (t) {
                    var o = O(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === h(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return E(e)
                }(this, n)
            }
        }
        function E(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function O(e) {
            return (O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var S = function(e) {
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
                t && v(e, t)
            }(n, r.Component);
            var t = g(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).tick = r.tick.bind(E(r)),
                r.state = {
                    seconds: r.props.timer,
                    saveDraft: !1,
                    sendMessage: !1
                },
                r
            }
            return function(e, t, n) {
                t && y(e.prototype, t),
                n && y(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    this.timer = setInterval(this.tick, 1e3)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    if (this.state.seconds > 0 && !this.state.saveDraft && !this.state.sendMessage && !window.ux.closeAllToastSuccess) {
                        var e = document.createEvent("CustomEvent");
                        e.initCustomEvent(this.props.id, !1, !1, {
                            id: this.props.id,
                            timer: this.state.seconds
                        }),
                        window.dispatchEvent(e)
                    }
                }
            }, {
                key: "tick",
                value: function() {
                    this.state.seconds > 0 ? this.setState({
                        seconds: this.state.seconds - 1
                    }) : (clearInterval(this.timer),
                    this.setState({
                        sendMessage: !0
                    }),
                    this.props.onSendMail(this.props.id, "", function() {}, !0),
                    this.props.closeToast())
                }
            }, {
                key: "handleSendMessage",
                value: function() {
                    this.props.onSendMail(this.props.id, "", function() {}, !0),
                    this.props.closeToast(),
                    this.setState({
                        sendMessage: !0
                    })
                }
            }, {
                key: "handleSaveDraft",
                value: function() {
                    var e = this;
                    this.setState({
                        seconds: 5,
                        saveDraft: !0
                    }),
                    this.props.onCancelSend(this.props.id, function() {}, !0),
                    setTimeout(function() {
                        e.props.closeToast()
                    }, 1800)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return r.createElement(f(), {
                        className: "ow-cancel-send-toast"
                    }, !this.state.saveDraft && r.createElement(c(), {
                        lg: "7"
                    }, " ", (0,
                    m.WU)((0,
                    p.t)("mail.cancelMail.TOAST_SENDING_MAIL"), this.state.seconds)), this.state.saveDraft && r.createElement(c(), {
                        className: "ow-cancel-send-toast-draft"
                    }, " ", (0,
                    p.t)("mail.cancelMail.TOAST_DRAFT_SAVE")), !this.state.saveDraft && r.createElement(c(), {
                        lg: "2"
                    }, r.createElement(s(), {
                        onClick: function(t) {
                            e.handleSaveDraft(t)
                        },
                        className: "ow-cancel-send-toast-button"
                    }, r.createElement("span", null, (0,
                    p.t)("mail.cancelMail.CANCEL_SEND")))), !this.state.saveDraft && r.createElement(c(), {
                        lg: "2"
                    }, r.createElement(s(), {
                        onClick: function(t) {
                            return e.handleSendMessage(t)
                        },
                        className: "ow-send-now-toast-button"
                    }, r.createElement("span", null, (0,
                    p.t)("mail.cancelMail.SEND_NOW")))))
                }
            }]),
            n
        }();
        S.defaultProps = {
            id: "",
            timer: (0,
            d.Z)("mail.cancelmail.cancelSendTimerCount") || 0,
            onSendMail: function() {},
            closeToast: function() {},
            onCancelSend: function() {}
        },
        S.propTypes = {
            id: a().string,
            onSendMail: a().func,
            closeToast: a().func,
            onCancelSend: a().func,
            timer: a().number
        }
    },
    86956: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return Q
            }
        });
        var r = n(87401)
          , o = n(23398)
          , a = n(97186)
          , i = n.n(a)
          , s = n(24655)
          , l = n(13536)
          , c = n(74222)
          , u = n(10091)
          , f = n(84987)
          , d = n(94165)
          , p = n(44910)
          , m = function(e) {
            var t = e.onSave
              , n = e.onCancel
              , o = e.disableSave
              , a = e.disableCancel
              , i = e.title;
            return r.createElement("div", {
                className: "ow-contacts-ContactFormToolbar-container"
            }, r.createElement(u.Z, {
                className: "ow-contacts-ContactFormToolbar"
            }, r.createElement(u.Z.Button, {
                className: "ow-contacts-ContactFormSaveBtn",
                iconName: "save-contacts-ContactFormSaveBtn",
                title: (0,
                f.t)("contacts.toolBar.toolTips.SAVE_CONTACT"),
                "aria-label": (0,
                f.t)("contacts.toolBar.toolTips.SAVE_CONTACT"),
                onClick: function(e) {
                    e.preventDefault(),
                    t()
                },
                "aria-disabled": o,
                disabled: o,
                tabindex: 0,
                onKeyDown: function(e) {
                    e.key === d.BY.TABKEY && e.shiftKey && ((0,
                    p.kW)(".ow-contacts-ContactForm-panel-upper"),
                    e.preventDefault())
                }
            }, (0,
            f.t)("contacts.toolBar.SAVE_CONTACT")), r.createElement(u.Z.Button, {
                className: "ow-contacts-ContactFormCancelBtn",
                iconName: "cancel-contacts-ContactFormCancelBtn",
                title: (0,
                f.t)("contacts.toolBar.toolTips.CANCEL_EDIT"),
                "aria-label": (0,
                f.t)("contacts.toolBar.toolTips.CANCEL_EDIT"),
                onClick: function(e) {
                    e.preventDefault(),
                    n()
                },
                "aria-disabled": a,
                disabled: a,
                tabindex: 0,
                onKeyDown: function(e) {
                    if (e.key !== d.BY.TABKEY) {
                        if (e.key !== d.BY.ENTERKEY)
                            return;
                        o || (0,
                        p.Mb)()
                    }
                    e.shiftKey && (o ? (0,
                    p.kW)(".ow-contacts-ContactForm-panel-upper") : (0,
                    p.kW)(".ow-contacts-ContactFormSaveBtn"),
                    e.preventDefault())
                }
            }, (0,
            f.t)("contacts.toolBar.CANCEL_EDIT"))), r.createElement("div", {
                className: "ow-contacts-ContactFormToolbar-title",
                role: d.HB.HEADING,
                "aria-level": d.DU.H2,
                "aria-label": i
            }, i))
        };
        m.defaultProps = {
            title: "",
            onSave: function() {},
            onCancel: function() {},
            disableSave: !1,
            disableCancel: !1
        },
        m.propTypes = {
            title: o.string,
            onSave: o.func,
            onCancel: o.func,
            disableSave: o.bool,
            disableCancel: o.bool
        };
        var h = m
          , y = n(58184)
          , b = n(83416)
          , v = n(44461);
        function g(e) {
            "@babel/helpers - typeof";
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function E() {
            return (E = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function O(e) {
            return function(e) {
                if (Array.isArray(e))
                    return S(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return S(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return S(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function S(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function w(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function C(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(n), !0).forEach(function(t) {
                    P(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function P(e, t, n) {
            return (t = F(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function j(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, F(r.key), r)
            }
        }
        function F(e) {
            var t = function(e, t) {
                if ("object" !== g(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== g(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === g(t) ? t : String(t)
        }
        function T(e, t) {
            return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function N(e) {
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
                var n, r = I(e);
                if (t) {
                    var o = I(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === g(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return D(e)
                }(this, n)
            }
        }
        function D(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function I(e) {
            return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var k = (0,
        b.Z)("contacts.contactForm").sections.contact
          , _ = d.ob.TYPE_GROUP
          , M = d.sH.SORT_FIRSTNAME_ASC
          , R = d.sH.SORT_LASTNAME_ASC
          , A = d.sH.SORT_NICKNAME_ASC
          , B = function(e) {
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
                t && T(e, t)
            }(n, r.PureComponent);
            var t = N(n);
            function n(e) {
                var r, o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).state = {
                    isFormChanged: !1,
                    displayConfirm: !1,
                    isGroupNameEmpty: !1
                },
                o.handleGroupFormValidSubmit = o.handleGroupFormValidSubmit.bind(D(o)),
                o.handleFormChange = o.handleFormChange.bind(D(o)),
                o.handleSave = o.handleSave.bind(D(o)),
                o.handleCancel = o.handleCancel.bind(D(o)),
                o.handleConfirmYes = o.handleConfirmYes.bind(D(o)),
                o.handleConfirmNo = o.handleConfirmNo.bind(D(o)),
                o.handleConfirmCancel = o.handleConfirmCancel.bind(D(o)),
                o.handleKeyPress = o.handleKeyPress.bind(D(o)),
                null === (r = window) || void 0 === r || r.addEventListener("keydown", o.handleKeyPress),
                o
            }
            return function(e, t, n) {
                t && j(e.prototype, t),
                n && j(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = e.displayConfirm;
                    e.displayContactForm.show || this.setIsFormChanged(!1),
                    t !== this.props.displayConfirm && this.setDisplayConfirm(t)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e;
                    null === (e = window) || void 0 === e || e.removeEventListener("keydown", this.handleKeyPress)
                }
            }, {
                key: "handleKeyPress",
                value: function(e) {
                    switch (e.key) {
                    case "Escape":
                        this.handleCancel()
                    }
                }
            }, {
                key: "setIsFormChanged",
                value: function(e) {
                    this.setState({
                        isFormChanged: e
                    })
                }
            }, {
                key: "setDisplayConfirm",
                value: function(e) {
                    this.setState({
                        displayConfirm: e
                    })
                }
            }, {
                key: "getHeaderTitle",
                value: function() {
                    var e = this.props
                      , t = e.displayContactForm.isGroup
                      , n = e.data
                      , r = !(i()(n) || !n.id);
                    return t ? r ? (0,
                    f.t)("contacts.editPanel.FORM_TITLE_EDIT_GROUP") : (0,
                    f.t)("contacts.editPanel.FORM_TITLE_ADD_GROUP") : r ? (0,
                    f.t)("contacts.editPanel.FORM_TITLE_EDIT") : (0,
                    f.t)("contacts.editPanel.FORM_TITLE_ADD")
                }
            }, {
                key: "handleGroupFormValidSubmit",
                value: function() {
                    var e = this.props
                      , t = e.onSave
                      , n = e.data
                      , r = this.groupEditFormsyRef.getCurrentValues().name
                      , o = this.groupEditForm.state
                      , a = o.currentEmails
                      , i = o.currentMembers;
                    n && n.id ? t({
                        data: C(C({}, n), {}, {
                            name: r,
                            contacts: Object.values(i),
                            emails: O(a)
                        }),
                        isGroup: !0
                    }) : t({
                        newGroup: !0,
                        isGroup: !0,
                        data: {
                            "@type": _,
                            name: r,
                            contacts: Object.values(i),
                            emails: O(a)
                        }
                    }),
                    this.setIsFormChanged(!1)
                }
            }, {
                key: "handleFormChange",
                value: function(e) {
                    (0,
                    this.props.onFormChange)(e),
                    this.setIsFormChanged(e),
                    this.groupEditFormsyRef && "" == this.groupEditFormsyRef.getCurrentValues().name ? this.setState({
                        isGroupNameEmpty: !0
                    }) : this.setState({
                        isGroupNameEmpty: !1
                    })
                }
            }, {
                key: "handleSave",
                value: function() {
                    var e = this.props
                      , t = e.displayContactForm.isGroup
                      , n = e.onSave
                      , r = e.data;
                    if (t)
                        this.groupEditFormsyRef.submit();
                    else {
                        var o = this.contactEditForm.getFormData();
                        if (!o)
                            return;
                        var a = o.data
                          , i = o.message
                          , s = i.photoId
                          , l = i.photoRemoved;
                        r && r.id ? n({
                            data: C(C({}, r), {}, {
                                firstName: a.firstName,
                                lastName: a.lastName,
                                fields: O(a.fields)
                            }),
                            photoId: s,
                            photoRemoved: l
                        }) : n({
                            newContact: !0,
                            data: a,
                            photoId: s,
                            photoRemoved: l
                        }),
                        this.setIsFormChanged(!1)
                    }
                }
            }, {
                key: "handleCancel",
                value: function() {
                    var e, t, n, r = this.props, o = r.onCancel, a = r.data, i = r.cudFetchStatus, s = this.state, l = s.isFormChanged, c = s.isGroupNameEmpty, u = i === d.bF, m = !(a && a.groupName) && (!l || u);
                    (m = c || m) ? (this.resetForm(),
                    o(),
                    document.querySelector(".ow-contacts-ContactForm-panel") && (null !== (e = [(0,
                    f.t)("contacts.editPanel.FORM_TITLE_EDIT"), (0,
                    f.t)("contacts.editPanel.FORM_TITLE_EDIT_GROUP")]) && void 0 !== e && e.includes(document.querySelector(".ow-contacts-ContactFormToolbar-title").ariaLabel) ? null === (t = document.querySelector(".ow-contacts-ContactPreviewToolbar .ow-icon-edit-contacts")) || void 0 === t || null === (n = t.closest("button.ow-button")) || void 0 === n || n.focus() : (0,
                    p.kW)("#contactListToolbarNew"))) : this.setDisplayConfirm(!0)
                }
            }, {
                key: "resetForm",
                value: function() {
                    if (this.props.displayContactForm.isGroup) {
                        var e = this.groupEditFormsyRef.getPristineValues();
                        this.groupEditFormsyRef.reset(e)
                    }
                }
            }, {
                key: "handleConfirmYes",
                value: function() {
                    var e = this.props.onConfirmYes;
                    this.setIsFormChanged(!1),
                    this.setDisplayConfirm(!1),
                    this.handleSave(),
                    e()
                }
            }, {
                key: "handleConfirmNo",
                value: function() {
                    var e = this.props.onConfirmNo;
                    this.setIsFormChanged(!1),
                    this.setDisplayConfirm(!1),
                    this.resetForm(),
                    e()
                }
            }, {
                key: "handleConfirmCancel",
                value: function() {
                    var e = this.props.onConfirmCancel;
                    this.setDisplayConfirm(!1),
                    e()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.displayContactForm
                      , o = n.show
                      , a = n.isGroup
                      , u = t.contactList
                      , p = t.contactSort
                      , m = t.groupNames
                      , b = t.shouldMask
                      , g = t.onSearch
                      , O = t.onSelect
                      , S = t.pristineData
                      , w = t.data
                      , C = t.cudFetchStatus
                      , P = {
                        contactList: u,
                        shouldMask: b,
                        onSearch: g,
                        onSelect: O
                    }
                      , j = this.state
                      , F = j.isFormChanged
                      , T = j.displayConfirm
                      , N = j.isGroupNameEmpty
                      , D = C === d.bF
                      , I = !(w && w.groupName) && (!F || D);
                    return I = N || I,
                    r.createElement(s.Z, {
                        className: "ow-contactForm-overlayWrapper",
                        show: o,
                        onHide: this.handleCancel
                    }, r.createElement("div", {
                        className: "ow-contacts-ContactForm-panel",
                        ROLE: d.HB.DIALOG,
                        "aria-label": this.getHeaderTitle()
                    }, r.createElement("div", {
                        className: "ow-contacts-ContactForm-panel-upper",
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === d.BY.TABKEY && e.shiftKey && e.preventDefault()
                        }
                    }, r.createElement(v.Z, null, r.createElement(h, {
                        onSave: this.handleSave,
                        onCancel: this.handleCancel,
                        disableSave: I,
                        disableCancel: D,
                        title: this.getHeaderTitle()
                    }))), r.createElement("div", {
                        className: "ow-contacts-ContactForm-panel-lower",
                        tabIndex: 0
                    }, r.createElement(v.Z, null, a ? r.createElement(y.Z, E({
                        ref: function(t) {
                            e.groupEditForm = t
                        },
                        data: w,
                        groupNames: m,
                        editMode: !(i()(w) || !w.id)
                    }, P, {
                        onChange: this.handleFormChange,
                        onValidSubmit: this.handleGroupFormValidSubmit,
                        formsyRef: function(t) {
                            e.groupEditFormsyRef = t
                        },
                        contactSort: p,
                        disableSave: I
                    })) : r.createElement(c.Z, {
                        config: k,
                        ref: function(t) {
                            e.contactEditForm = t
                        },
                        onChange: this.handleFormChange,
                        pristineData: S,
                        data: w,
                        editMode: !(i()(w) || !w.id),
                        editBtnDisplayed: !0
                    }))), T && r.createElement(l.Z, {
                        show: !0,
                        buttonConfig: ["yes", "no"],
                        title: (0,
                        f.t)("common.MESSAGE"),
                        message: (0,
                        f.t)("app.message.CONFIRM_CANCEL_EDIT"),
                        onYes: this.handleConfirmYes,
                        onNo: this.handleConfirmNo,
                        onDismiss: this.handleConfirmCancel
                    })))
                }
            }]),
            n
        }()
          , L = {
            id: o.string,
            isGroup: o.bool,
            firstName: o.string,
            lastName: o.string,
            email: o.string,
            displayName: o.string,
            addressBookId: o.string,
            fields: (0,
            o.arrayOf)((0,
            o.shape)({
                type: o.string,
                label: o.string,
                value: o.string
            }))
        }
          , x = {
            id: o.string,
            isGroup: o.bool,
            groupName: o.string,
            emails: (0,
            o.arrayOf)(o.string),
            displayName: o.string,
            addressBookId: o.string,
            fields: (0,
            o.arrayOf)((0,
            o.shape)({
                type: o.string,
                label: o.string,
                value: o.string
            })),
            contacts: (0,
            o.shape)({
                items: o.object,
                totalCount: o.number
            })
        };
        B.propTypes = {
            displayContactForm: (0,
            o.shape)({
                show: o.bool,
                isGroup: o.bool
            }),
            pristineData: (0,
            o.oneOfType)([(0,
            o.shape)(L), (0,
            o.shape)(x)]),
            data: (0,
            o.oneOfType)([(0,
            o.shape)(L), (0,
            o.shape)(x)]),
            groupNames: (0,
            o.arrayOf)(o.string),
            contactList: (0,
            o.arrayOf)((0,
            o.shape)({
                id: o.string,
                title: o.string,
                value: o.string,
                isGroup: o.bool,
                fields: (0,
                o.shape)({
                    email: o.string,
                    mobile: o.string,
                    phone: o.string,
                    address: o.string
                })
            })),
            contactSort: (0,
            o.oneOf)([M, R, A]),
            shouldMask: o.bool,
            displayConfirm: o.bool,
            cudFetchStatus: (0,
            o.oneOf)([d.t3, d.bF, d.uP, d.iZ]),
            onSave: o.func,
            onCancel: o.func,
            onSearch: o.func,
            onSelect: o.func,
            onFormChange: o.func,
            onConfirmYes: o.func,
            onConfirmNo: o.func,
            onConfirmCancel: o.func
        },
        B.defaultProps = {
            displayContactForm: {},
            pristineData: {},
            data: {},
            groupNames: [],
            contactList: [],
            contactSort: R,
            shouldMask: !1,
            displayConfirm: !1,
            cudFetchStatus: d.t3,
            onSave: function() {},
            onCancel: function() {},
            onSearch: function() {},
            onSelect: function() {},
            onFormChange: function() {},
            onConfirmYes: function() {},
            onConfirmNo: function() {},
            onConfirmCancel: function() {}
        };
        var G = B
          , V = n(16083)
          , H = n(27093)
          , Z = n(79351)
          , Y = n(59559)
          , U = n(79819)
          , K = n(81793)
          , W = n(17702)
          , q = n(63499)
          , X = n(63482);
        function $(e) {
            "@babel/helpers - typeof";
            return ($ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function z(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function J(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== $(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== $(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === $(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var Q = (0,
        V.$j)(function(e) {
            var t = (0,
            W.o1)(e)
              , n = t.pristineData
              , r = t.data;
            return {
                displayContactForm: (0,
                q.nO)(e),
                pristineData: n,
                data: r,
                displayConfirm: (0,
                U.J)(e),
                cudFetchStatus: (0,
                W.g_)(e),
                groupNames: (0,
                W.sB)(e),
                contactList: (0,
                K.qB)(e),
                contactSort: (0,
                X.Mk)(e),
                shouldMask: (0,
                K.M3)(e)
            }
        }, function(e) {
            return {
                onSave: function() {
                    e((0,
                    H.appSetFormDirty)(!1)),
                    e((0,
                    H.appSetPendingOver)(!1)),
                    e(Z.ep.apply(void 0, arguments))
                },
                onCancel: function() {
                    e((0,
                    H.appSetPendingCancel)()),
                    e(Z.sl.apply(void 0, arguments))
                },
                onFormChange: function(t) {
                    e((0,
                    H.appSetFormDirty)(t))
                },
                onConfirmYes: function() {
                    e((0,
                    H.appSetFormDirty)(!1)),
                    e((0,
                    H.appSetPendingOver)(!1))
                },
                onConfirmNo: function() {
                    e((0,
                    H.appSetFormDirty)(!1)),
                    e((0,
                    H.appSetPendingOver)(!1)),
                    e(Z.sl.apply(void 0, arguments))
                },
                onConfirmCancel: function() {
                    e((0,
                    H.appSetPendingCancel)())
                },
                onSearch: function(t, n) {
                    return e((0,
                    Y.VQ)({
                        filter: t
                    }, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? z(Object(n), !0).forEach(function(t) {
                                J(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, n)))
                }
            }
        })(G)
    }
}]);
