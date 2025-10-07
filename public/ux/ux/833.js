/*! Synchronoss Messaging 2018 */
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[833], {
    75198: function(e, t, n) {
        var r = n(78378)
          , o = n(88204)
          , a = 4294967295;
        function i(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = a,
            this.__views__ = []
        }
        i.prototype = r(o.prototype),
        i.prototype.constructor = i,
        e.exports = i
    },
    4039: function(e, t, n) {
        var r = n(78378)
          , o = n(88204);
        function a(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        a.prototype = r(o.prototype),
        a.prototype.constructor = a,
        e.exports = a
    },
    88204: function(e) {
        e.exports = function() {}
    },
    52573: function(e, t, n) {
        var r = n(4039)
          , o = n(91172)
          , a = n(74582)
          , i = n(43921)
          , l = n(80991)
          , c = n(64126)
          , s = "Expected a function"
          , u = 8
          , d = 32
          , f = 128
          , p = 256;
        e.exports = function(e) {
            return o(function(t) {
                var n = t.length
                  , o = n
                  , m = r.prototype.thru;
                for (e && t.reverse(); o--; ) {
                    var h = t[o];
                    if ("function" != typeof h)
                        throw new TypeError(s);
                    if (m && !y && "wrapper" == i(h))
                        var y = new r([],!0)
                }
                for (o = y ? o : n; ++o < n; ) {
                    h = t[o];
                    var b = i(h)
                      , v = "wrapper" == b ? a(h) : void 0;
                    y = v && c(v[0]) && v[1] == (f | u | d | p) && !v[4].length && 1 == v[9] ? y[i(v[0])].apply(y, v[3]) : 1 == h.length && c(h) ? y[b]() : y.thru(h)
                }
                return function() {
                    var e = arguments
                      , r = e[0];
                    if (y && 1 == e.length && l(r))
                        return y.plant(r).value();
                    for (var o = 0, a = n ? t[o].apply(this, e) : r; ++o < n; )
                        a = t[o].call(this, a);
                    return a
                }
            })
        }
    },
    74582: function(e, t, n) {
        var r = n(809)
          , o = n(40504)
          , a = r ? function(e) {
            return r.get(e)
        }
        : o;
        e.exports = a
    },
    43921: function(e, t, n) {
        var r = n(90310)
          , o = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            for (var t = e.name + "", n = r[t], a = o.call(r, t) ? n.length : 0; a--; ) {
                var i = n[a]
                  , l = i.func;
                if (null == l || l == e)
                    return i.name
            }
            return t
        }
    },
    64126: function(e, t, n) {
        var r = n(75198)
          , o = n(74582)
          , a = n(43921)
          , i = n(78286);
        e.exports = function(e) {
            var t = a(e)
              , n = i[t];
            if ("function" != typeof n || !(t in r.prototype))
                return !1;
            if (e === n)
                return !0;
            var l = o(n);
            return !!l && e === l[0]
        }
    },
    809: function(e, t, n) {
        var r = n(40683)
          , o = r && new r;
        e.exports = o
    },
    90310: function(e) {
        e.exports = {}
    },
    75438: function(e, t, n) {
        var r = n(75198)
          , o = n(4039)
          , a = n(95640);
        e.exports = function(e) {
            if (e instanceof r)
                return e.clone();
            var t = new o(e.__wrapped__,e.__chain__);
            return t.__actions__ = a(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
    },
    6402: function(e, t, n) {
        var r = n(52573)();
        e.exports = r
    },
    78286: function(e, t, n) {
        var r = n(75198)
          , o = n(4039)
          , a = n(88204)
          , i = n(80991)
          , l = n(61662)
          , c = n(75438)
          , s = Object.prototype.hasOwnProperty;
        function u(e) {
            if (l(e) && !i(e) && !(e instanceof r)) {
                if (e instanceof o)
                    return e;
                if (s.call(e, "__wrapped__"))
                    return c(e)
            }
            return new o(e)
        }
        u.prototype = a.prototype,
        u.prototype.constructor = u,
        e.exports = u
    },
    87537: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return Ts
            }
        });
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(16083)
          , l = n(40757)
          , c = n(55665)
          , s = n.n(c)
          , u = n(12154)
          , d = n(43557)
          , f = n(84987)
          , p = n(45792)
          , m = n(45857)
          , h = n(12588)
          , y = n(23586)
          , b = n(98960)
          , v = n(4446)
          , g = n(54806)
          , w = n(93279)
          , E = n(9224)
          , S = n(45889)
          , T = n(89083)
          , O = n(19251)
          , C = n(96312)
          , P = n(70039)
          , A = n(47369)
          , R = n(85391)
          , k = n(63482)
          , I = (0,
        i.$j)((0,
        v.OdQ)({
            selectMailAccountId: m.F9,
            selectDefaultAccountId: m.Ep,
            selectExternalAccountList: h.UD,
            selectAccountInfo: m.hL,
            selectUserProfile: g.d,
            selectUserPrefs: g.n4,
            selectedSettings: P.Ci,
            list: h.Ow,
            selected: C.dW,
            hasSelected: C.V1,
            showModal: C.Yk,
            modalType: C.OD,
            showConfirm: C._i,
            showAlert: C.fl,
            messageTitle: C.wA,
            message: C.yf,
            isLoading: C.BY,
            errorType: C.oG,
            errorMessage: C.Sy,
            advancedSetting: C.iy,
            externalAccountDetail: m.WS,
            isFolderScrollRequired: O.XZ,
            tagsList: R.gQ,
            selectedTag: R.iX,
            selectMailModeIsThread: k.KQ
        }), (0,
        v.yEg)({
            changeMailAccount: y._A1,
            getExternalAccountList: y.Otr,
            logout: b.logout,
            onGetAvatar: w.getUserProfileAvatar,
            onShowModal: function(e, t) {
                return (0,
                E.iB)(e, t)
            },
            onSelectedChange: function(e) {
                return (0,
                E.us)(e)
            },
            onAdd: function(e, t) {
                return (0,
                S.IO)({
                    object: e
                }, t)
            },
            onDelete: function() {
                return (0,
                S.vi)({})
            },
            onUpdate: function(e, t, n) {
                return (0,
                S.$e)({
                    object: e
                }, t, n)
            },
            onCancel: function() {
                return (0,
                E.iB)(!1)
            },
            onDeleteYes: function() {
                return (0,
                E.F)("OK")
            },
            onDeleteNo: function() {
                return (0,
                E.F)("NO")
            },
            onAlertHide: function() {
                return (0,
                E.K7)(A.bd, !1)
            },
            onTagsListFetch: function(e) {
                return (0,
                T.r8)(e)
            },
            onCreateTags: function() {
                return (0,
                T.E0)()
            },
            resetTagClick: function() {
                return (0,
                T.hL)()
            }
        }))
          , N = n(1989)
          , D = n(47957)
          , M = n.n(D)
          , _ = n(77545)
          , j = n(90088)
          , L = n(32081)
          , F = n(67064)
          , x = n.n(F)
          , B = n(76555);
        function H(e) {
            "@babel/helpers - typeof";
            return (H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function U(e, t) {
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
        function Z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? U(Object(n), !0).forEach(function(t) {
                    V(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function V(e, t, n) {
            return (t = q(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function K(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, q(r.key), r)
            }
        }
        function q(e) {
            var t = function(e, t) {
                if ("object" !== H(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== H(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === H(t) ? t : String(t)
        }
        function Y(e, t) {
            return (Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function G(e) {
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
                var n, r = X(e);
                if (t) {
                    var o = X(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === H(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return W(e)
                }(this, n)
            }
        }
        function W(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function X(e) {
            return (X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var z = function(e) {
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
                t && Y(e, t)
            }(n, r.PureComponent);
            var t = G(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    startX: 0,
                    startY: 0,
                    x: 0,
                    y: 0
                },
                r.handleTouchStart = r.handleTouchStart.bind(W(r)),
                r.handleTouchMove = r.handleTouchMove.bind(W(r)),
                r.handleTouchEnd = r.handleTouchEnd.bind(W(r)),
                r.startPos = {
                    pageX: 0,
                    pageY: 0
                },
                r
            }
            return function(e, t, n) {
                t && K(e.prototype, t),
                n && K(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "getDelta",
                value: function(e, t) {
                    var n = e.pageX
                      , r = e.pageY
                      , o = this.props
                      , a = o.xDirections
                      , i = o.yDirections
                      , l = o.computeDelta
                      , c = this.startPos
                      , s = c.pageX
                      , u = c.pageY
                      , d = this.state
                      , f = l({
                        xDirections: a,
                        yDirections: i,
                        startX: d.startX,
                        startY: d.startY,
                        startPageX: s,
                        startPageY: u,
                        currentPageX: n,
                        currentPageY: r
                    }, t);
                    if (!("deltaX"in f && "deltaX"in f))
                        throw Error("computeDelta must return an object which includes deltaX property and deltaY property");
                    return {
                        deltaX: f.deltaX,
                        deltaY: f.deltaY
                    }
                }
            }, {
                key: "getTargetPos",
                value: function(e, t) {
                    var n = e.deltaX
                      , r = e.deltaY
                      , o = this.props.computeTargetPos
                      , a = this.state
                      , i = o({
                        startX: a.startX,
                        startY: a.startY,
                        deltaX: n,
                        deltaY: r
                    }, t);
                    if (!("targetX"in i && "targetY"in i))
                        throw Error("computeTargetPos must return an object which includes targetX property and targetY property");
                    return {
                        targetX: i.targetX,
                        targetY: i.targetY
                    }
                }
            }, {
                key: "updateTargetPos",
                value: function(e) {
                    var t = e.x
                      , n = e.y;
                    this.setState({
                        x: t,
                        y: n
                    })
                }
            }, {
                key: "handleTouchStart",
                value: function(e, t) {
                    var n = t.x
                      , r = t.y
                      , o = this.props.onSwipeStart
                      , a = e.changedTouches[0];
                    this.startPos = a,
                    this.setState({
                        startX: n,
                        startY: r
                    }),
                    o({
                        startX: n,
                        startY: r
                    }, e),
                    e.stopPropagation()
                }
            }, {
                key: "handleTouchMove",
                value: function(e) {
                    var t = this.props.onSwiping
                      , n = this.state
                      , r = n.startX
                      , o = n.startY
                      , a = e.changedTouches[0]
                      , i = this.getDelta(a, e)
                      , l = this.getTargetPos(i, e)
                      , c = l.targetX
                      , s = l.targetY;
                    this.updateTargetPos({
                        x: c,
                        y: s
                    }),
                    t(Z(Z({
                        startX: r,
                        startY: o
                    }, i), {}, {
                        targetX: c,
                        targetY: s
                    }), e),
                    e.stopPropagation()
                }
            }, {
                key: "handleTouchEnd",
                value: function(e) {
                    var t = this.props.onSwipeEnd
                      , n = this.state
                      , r = n.startX
                      , o = n.startY
                      , a = e.changedTouches[0]
                      , i = this.getDelta(a, e)
                      , l = this.getTargetPos(i, e)
                      , c = l.targetX
                      , s = l.targetY;
                    this.updateTargetPos({
                        x: c,
                        y: s
                    }),
                    t(Z(Z({
                        startX: r,
                        startY: o
                    }, i), {}, {
                        targetX: c,
                        targetY: s
                    }), e),
                    e.stopPropagation()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , o = t.style
                      , a = t.springConfig
                      , i = t.children
                      , l = this.state
                      , c = l.x
                      , s = l.y;
                    return r.createElement(B.y_, {
                        style: {
                            x: (0,
                            B.ST)(c, a),
                            y: (0,
                            B.ST)(s, a)
                        }
                    }, function(t) {
                        var a = t.x
                          , l = t.y;
                        return r.createElement("div", {
                            className: x()("ow-swipeable", n),
                            onTouchStart: function(t) {
                                e.handleTouchStart(t, {
                                    x: a,
                                    y: l
                                })
                            },
                            onTouchMove: e.handleTouchMove,
                            onTouchEnd: e.handleTouchEnd,
                            style: Z({
                                transform: "translate3d(".concat(a, "px, ").concat(l, "px, 0)"),
                                WebkitTransform: "translate3d(".concat(a, "px, ").concat(l, "px, 0)")
                            }, o)
                        }, i)
                    })
                }
            }]),
            n
        }();
        z.defaultProps = {
            className: "",
            springConfig: {
                stiffness: 86,
                damping: 15
            },
            style: {},
            xDirections: {
                swipeLeft: !0,
                swipeRight: !0
            },
            yDirections: {
                swipeUp: !0,
                swipeDown: !0
            },
            computeDelta: function(e) {
                var t = e.xDirections
                  , n = e.yDirections
                  , r = e.startPageX
                  , o = e.startPageY
                  , a = function(e, t) {
                    return Math.atan(Math.abs(t) / Math.abs(e)) <= Math.PI / 6
                }
                  , i = e.currentPageX - r
                  , l = e.currentPageY - o
                  , c = t.swipeLeft
                  , s = t.swipeRight
                  , u = n.swipeUp
                  , d = n.swipeDown
                  , f = i
                  , p = l;
                return (i > 0 && !s || i < 0 && !c) && (f = 0,
                a(i, l) && (p = 0)),
                (l > 0 && !d || l < 0 && !u) && (p = 0,
                a(l, i) && (f = 0)),
                {
                    deltaX: f,
                    deltaY: p
                }
            },
            computeTargetPos: function(e) {
                var t = e.startX
                  , n = e.startY;
                return {
                    targetX: t + e.deltaX,
                    targetY: n + e.deltaY
                }
            },
            onSwipeStart: function() {},
            onSwiping: function() {},
            onSwipeEnd: function() {}
        },
        z.propTypes = {
            className: a().string,
            children: a().node.isRequired,
            springConfig: a().shape({
                stiffness: a().number,
                damping: a().number,
                precision: a().number
            }),
            style: a().object,
            xDirections: a().shape({
                swipeLeft: a().bool,
                swipeRight: a().bool
            }),
            yDirections: a().shape({
                swipeUp: a().bool,
                swipeDown: a().bool
            }),
            computeDelta: a().func,
            computeTargetPos: a().func,
            onSwipeStart: a().func,
            onSwiping: a().func,
            onSwipeEnd: a().func
        };
        var J = z;
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
        var Q = ["className", "onSwiping"];
        function ee() {
            return (ee = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function te(e, t) {
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
        function ne(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, re(r.key), r)
            }
        }
        function re(e) {
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
        }
        function oe(e, t) {
            return (oe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function ae(e) {
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
                var n, r = le(e);
                if (t) {
                    var o = le(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === $(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return ie(e)
                }(this, n)
            }
        }
        function ie(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function le(e) {
            return (le = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ce = function(e) {
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
                t && oe(e, t)
            }(n, r.PureComponent);
            var t = ae(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).computeTargetPos = r.computeTargetPos.bind(ie(r)),
                r.handleOnSwiping = r.handleOnSwiping.bind(ie(r)),
                r
            }
            return function(e, t, n) {
                t && ne(e.prototype, t),
                n && ne(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "computeTargetPos",
                value: function(e, t) {
                    var r = e.startX
                      , o = e.startY
                      , a = e.deltaX
                      , i = e.deltaY
                      , l = this.props.bounds
                      , c = l.left
                      , s = void 0 === c ? {} : c
                      , u = l.right
                      , d = void 0 === u ? {} : u
                      , f = l.top
                      , p = void 0 === f ? {} : f
                      , m = l.bottom
                      , h = void 0 === m ? {} : m
                      , y = a + r
                      , b = i + o;
                    return "touchmove" === t.type ? {
                        targetX: y,
                        targetY: b
                    } : (y > 0 ? y = n.computeValue(y, s) : y < 0 && (y = -n.computeValue(Math.abs(y), d)),
                    b > 0 ? b = n.computeValue(b, p) : b < 0 && (b = -n.computeValue(Math.abs(b), h)),
                    {
                        targetX: y,
                        targetY: b
                    })
                }
            }, {
                key: "handleOnSwiping",
                value: function(e, t) {
                    var n = e.startX
                      , r = e.startY
                      , o = e.deltaX
                      , a = e.deltaY
                      , i = e.targetX
                      , l = e.targetY
                      , c = this.props
                      , s = c.bounds
                      , u = s.left
                      , d = void 0 === u ? {} : u
                      , f = s.right
                      , p = void 0 === f ? {} : f
                      , m = s.top
                      , h = void 0 === m ? {} : m
                      , y = s.bottom
                      , b = void 0 === y ? {} : y
                      , v = c.onSwiping
                      , g = c.onSwipeToResistance
                      , w = c.resistanceDelay;
                    v({
                        startX: n,
                        startY: r,
                        deltaX: o,
                        deltaY: a,
                        targetX: i,
                        targetY: l
                    }, t);
                    var E = Number.POSITIVE_INFINITY
                      , S = d.resistance
                      , T = void 0 === S ? E : S
                      , O = p.resistance
                      , C = void 0 === O ? E : O
                      , P = h.resistance
                      , A = void 0 === P ? E : P
                      , R = b.resistance
                      , k = void 0 === R ? E : R;
                    Math.abs(i) >= T || Math.abs(i) >= C ? this.horizontalTimer || (this.horizontalTimer = setTimeout(function() {
                        g({
                            axis: "x",
                            targetX: i,
                            targetY: l
                        }, t)
                    }, w)) : (clearTimeout(this.horizontalTimer),
                    this.horizontalTimer = void 0),
                    Math.abs(l) >= A || Math.abs(l) >= k ? this.verticalTimer || (this.verticalTimer = setTimeout(function() {
                        g({
                            axis: "y",
                            targetX: i,
                            targetY: l
                        }, t)
                    }, w)) : (clearTimeout(this.verticalTimer),
                    this.verticalTimer = void 0)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = (e.onSwiping,
                    te(e, Q));
                    return r.createElement(J, ee({
                        className: x()("ow-enhanceSwipeable", t),
                        computeTargetPos: this.computeTargetPos,
                        onSwiping: this.handleOnSwiping
                    }, n))
                }
            }], [{
                key: "computeValue",
                value: function(e, t) {
                    var n = t.threshold
                      , r = void 0 === n ? 0 : n
                      , o = t.persistance
                      , a = e;
                    if (e <= r)
                        a = 0;
                    else if (o) {
                        if (o <= r)
                            throw Error("The value of persistance must be greater than the value of threshold.");
                        a = o
                    }
                    return a
                }
            }]),
            n
        }();
        ce.defaultProps = {
            className: "",
            bounds: {
                left: {
                    threshold: 30,
                    persistance: 60,
                    resistance: 90
                },
                right: {
                    threshold: 30,
                    persistance: 60,
                    resistance: 90
                },
                top: {
                    threshold: 70
                },
                bottom: {
                    threshold: 70
                }
            },
            resistanceDelay: 90,
            onSwiping: function() {},
            onSwipeToResistance: function() {}
        },
        ce.propTypes = {
            className: a().string,
            bounds: a().shape(a().shape({
                left: a().shape({
                    threshold: a().number,
                    persistance: a().number,
                    resistance: a().number
                }),
                right: a().shape({
                    threshold: a().number,
                    persistance: a().number,
                    resistance: a().number
                }),
                top: a().shape({
                    threshold: a().number,
                    persistance: a().number,
                    resistance: a().number
                }),
                bottom: a().shape({
                    threshold: a().number,
                    persistance: a().number,
                    resistance: a().number
                })
            })),
            onSwipeToResistance: a().func,
            onSwiping: a().func,
            resistanceDelay: a().number
        };
        var se = ce
          , ue = n(59883)
          , de = n.n(ue)
          , fe = n(97186)
          , pe = n.n(fe)
          , me = n(12674)
          , he = n(83416)
          , ye = n(90656)
          , be = n(94165);
        function ve(e) {
            "@babel/helpers - typeof";
            return (ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ge(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, we(r.key), r)
            }
        }
        function we(e) {
            var t = function(e, t) {
                if ("object" !== ve(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== ve(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === ve(t) ? t : String(t)
        }
        function Ee(e, t) {
            return (Ee = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Se(e) {
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
                var n, r = Oe(e);
                if (t) {
                    var o = Oe(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ve(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Te(e)
                }(this, n)
            }
        }
        function Te(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Oe(e) {
            return (Oe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Ce = function(e) {
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
                t && Ee(e, t)
            }(n, r.Component);
            var t = Se(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).handleSearchInput = r.handleSearchInput.bind(Te(r)),
                r.handleSearch = r.handleSearch.bind(Te(r)),
                r.state = {
                    googleSearchValue: ""
                },
                r
            }
            return function(e, t, n) {
                t && ge(e.prototype, t),
                n && ge(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleSearchInput",
                value: function(e) {
                    this.setState({
                        googleSearchValue: e.target.value
                    })
                }
            }, {
                key: "handleSearch",
                value: function() {
                    (0,
                    me.findDOMNode)(this.searchInput).blur();
                    var e = this.state.googleSearchValue;
                    if (e && !pe()(e.trim())) {
                        var t = (0,
                        he.Z)("googleSearch.windowName") || "searchResult"
                          , n = (0,
                        he.Z)("googleSearch") && (0,
                        he.Z)("googleSearch.url")
                          , r = (0,
                        ye.WU)(n, e);
                        window.open(r, t)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return r.createElement("div", {
                        className: "ow-collapse-animation-wrapper-google-search"
                    }, r.createElement("div", {
                        className: "ow-google"
                    }), r.createElement(de(), {
                        ref: function(t) {
                            e.searchInput = t
                        },
                        className: "ow-mail-TuiSearch-input-text",
                        type: "text",
                        placeholder: (0,
                        f.t)("search.PLACEHOLDER"),
                        value: this.state.googleSearchValue,
                        onChange: function(t) {
                            return e.handleSearchInput(t)
                        },
                        onKeyDown: function(t) {
                            return 13 === t.keyCode && e.handleSearch()
                        }
                    }), r.createElement(_.Z, {
                        onClick: function() {
                            e.handleSearch()
                        },
                        iconName: "search",
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("search.PLACEHOLDER")
                    }))
                }
            }]),
            n
        }();
        function Pe(e) {
            "@babel/helpers - typeof";
            return (Pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ae(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Re(r.key), r)
            }
        }
        function Re(e) {
            var t = function(e, t) {
                if ("object" !== Pe(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Pe(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Pe(t) ? t : String(t)
        }
        function ke(e, t) {
            return (ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ie(e) {
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
                var n, r = De(e);
                if (t) {
                    var o = De(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Pe(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Ne(e)
                }(this, n)
            }
        }
        function Ne(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function De(e) {
            return (De = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Me = function(e) {
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
                t && ke(e, t)
            }(n, r.PureComponent);
            var t = Ie(n);
            function n(e) {
                var r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    show: !1,
                    isSwiping: !1,
                    clientX: 0,
                    deltaX: 0,
                    deltaY: 0
                };
                var o = (document.body || {}).offsetWidth;
                return r.collapseContentWidth = .8 * o,
                r.handleSwiping = r.handleSwiping.bind(Ne(r)),
                r.handleSwipeEnd = r.handleSwipeEnd.bind(Ne(r)),
                r.handleSwipeStart = r.handleSwipeStart.bind(Ne(r)),
                r.handleHide = r.handleHide.bind(Ne(r)),
                r.setShow = r.setShow.bind(Ne(r)),
                r
            }
            return function(e, t, n) {
                t && Ae(e.prototype, t),
                n && Ae(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.state.show !== e.show && this.setState({
                        show: e.show
                    })
                }
            }, {
                key: "getBackDropStyle",
                value: function() {
                    var e = this.state
                      , t = e.show
                      , n = e.isSwiping
                      , r = e.clientX
                      , o = e.deltaX
                      , a = e.deltaY
                      , i = (document.body || {}).offsetWidth
                      , l = 0;
                    n ? l = t && (Math.abs(a) >= .5 * Math.abs(o) || o > 0) ? .5 : (i > r ? (r / i).toFixed(2) : 1) / 2 : l = t ? .5 : 0;
                    return {
                        opacity: l,
                        right: 0 === l ? 8e3 : 0
                    }
                }
            }, {
                key: "getContentStyle",
                value: function() {
                    var e, t = this.state, n = t.show, r = t.isSwiping, o = t.clientX, a = t.deltaX;
                    return n ? r && a < 0 ? (e = a) < -this.collapseContentWidth && (e = -this.collapseContentWidth) : e = 0 : e = (e = r && a > 0 ? o - this.collapseContentWidth : -this.collapseContentWidth) > 0 ? 0 : e,
                    {
                        transform: "translate(".concat(e, "px, 0px)"),
                        WebkitTransform: "translate(".concat(e, "px, 0)")
                    }
                }
            }, {
                key: "getContainerStyle",
                value: function() {
                    var e, t = this.state, n = t.show, r = t.isSwiping, o = (document.body || {}).offsetWidth;
                    return e = n || r ? 0 : this.props.collapseWidth - o,
                    {
                        transform: "translate(".concat(e, "px, 0px)"),
                        WebkitTransform: "translate(".concat(e, "px, 0)")
                    }
                }
            }, {
                key: "setShow",
                value: function(e) {
                    var t = this.props.onHide;
                    this.setState({
                        show: e
                    }),
                    e || t()
                }
            }, {
                key: "handleSwipeStart",
                value: function() {
                    this.setState({
                        isSwiping: !1
                    })
                }
            }, {
                key: "handleSwiping",
                value: function(e, t) {
                    var n = t.changedTouches[0].clientX;
                    this.setState({
                        isSwiping: !0,
                        clientX: Math.abs(n),
                        deltaX: e.deltaX,
                        deltaY: e.deltaY
                    })
                }
            }, {
                key: "handleSwipeEnd",
                value: function(e, t) {
                    var n = this.state
                      , r = n.show
                      , o = n.isSwiping
                      , a = n.deltaX
                      , i = t.changedTouches[0].clientX
                      , l = (document.body || {}).offsetWidth
                      , c = !1;
                    if (o) {
                        c = r ? !(a < 0 && Math.abs(a) > .4 * l) : i >= Math.round(l / 2),
                        this.setState({
                            isSwiping: !1,
                            clientX: Math.abs(i)
                        }),
                        this.setShow(c);
                        var s = document.createEvent("CustomEvent");
                        s.initCustomEvent("slideForTui", !1, !1, {
                            hideDialog: !1
                        }),
                        window.dispatchEvent(s)
                    }
                }
            }, {
                key: "handleHide",
                value: function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    this.setShow(!1),
                    this.setState({
                        deltaX: 0,
                        deltaY: 0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.getContentStyle()
                      , t = this.getBackDropStyle()
                      , n = this.getContainerStyle()
                      , o = window.UXConfig.ui.tui.header.showGoogleSearch;
                    return r.createElement("div", {
                        className: "ow-collapse-animation-wrapper",
                        style: n
                    }, r.createElement(se, {
                        yDirections: {
                            swipeUp: !1,
                            swipeDown: !1
                        },
                        onSwiping: this.handleSwiping,
                        onSwipeEnd: this.handleSwipeEnd,
                        onSwipeStart: this.handleSwipeStart,
                        style: {
                            transform: "translate3d(0px, 0px, 0px)",
                            WebkitTransform: "translate3d(0px, 0px, 0px)"
                        }
                    }, r.createElement("div", {
                        role: be.HB.PRESENTATION,
                        className: "ow-collapse-animation-wrapper-backdrop",
                        onClick: this.handleHide,
                        style: t
                    }), r.createElement("div", {
                        role: be.HB.PRESENTATION,
                        className: "ow-collapse-animation-wrapper-content",
                        style: e,
                        onClick: function(e) {
                            e.preventDefault(),
                            e.stopPropagation()
                        }
                    }, r.createElement("div", {
                        className: "ow-collapse-animation-wrapper-header"
                    }, this.props.titleElement, r.createElement(_.Z, {
                        iconName: "close",
                        onClick: this.handleHide,
                        className: "ow-close"
                    })), r.createElement("div", {
                        className: "ow-collapse-animation-wrapper-body"
                    }, this.props.children), o ? r.createElement(Ce, null) : "")))
                }
            }]),
            n
        }();
        Me.defaultProps = {
            show: !1,
            collapseWidth: 10,
            children: void 0,
            titleElement: void 0,
            onHide: function() {}
        },
        Me.propTypes = {
            show: a().bool,
            collapseWidth: a().number,
            children: a().node,
            titleElement: a().element,
            onHide: a().func
        };
        var _e = n(37200);
        function je(e) {
            "@babel/helpers - typeof";
            return (je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Le = ["onAdd", "modalType", "showModal", "onUpdate", "onCancel", "isLoading", "advancedSetting", "externalAccountDetail", "errorType", "errorMessage"];
        function Fe(e, t) {
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
        function xe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Fe(Object(n), !0).forEach(function(t) {
                    Be(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fe(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function Be(e, t, n) {
            return (t = Ke(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function He(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Ue(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return Ue(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Ue(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Ue(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function Ze(e, t) {
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
        function Ve(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Ke(r.key), r)
            }
        }
        function Ke(e) {
            var t = function(e, t) {
                if ("object" !== je(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== je(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === je(t) ? t : String(t)
        }
        function qe(e, t) {
            return (qe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ye(e) {
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
                var n, r = We(e);
                if (t) {
                    var o = We(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === je(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Ge(e)
                }(this, n)
            }
        }
        function Ge(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function We(e) {
            return (We = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Xe(e) {
            var t = e.value;
            return r.createElement("div", {
                className: "Select-value"
            }, r.createElement("span", {
                className: "Select-value-label"
            }, r.createElement("div", {
                className: "ow-account-header-name"
            }, t && t.name ? t.name : ""), r.createElement("div", {
                className: "ow-account-header-email"
            }, t && t.accountName ? t.accountName : "")))
        }
        function ze(e) {
            var t = e.className
              , n = e.option
              , o = e.isFocused
              , a = e.onSelect
              , i = e.onFocus
              , l = e.children;
            return r.createElement("div", {
                role: "presentation",
                className: t,
                onMouseDown: function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    a(n, e)
                },
                onMouseEnter: function(e) {
                    i(n, e)
                },
                onMouseMove: function(e) {
                    o || i(n, e)
                },
                title: n.title
            }, r.createElement("span", {
                className: "Select-value-label"
            }, r.createElement("span", {
                className: "ow-account-header-email"
            }, l)))
        }
        var Je = function(e) {
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
                t && qe(e, t)
            }(n, r.Component);
            var t = Ye(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    showAddAccount: !1
                },
                r.renderAccountModal = r.renderAccountModal.bind(Ge(r)),
                r.renderAddAccount = r.renderAddAccount.bind(Ge(r)),
                r
            }
            return function(e, t, n) {
                t && Ve(e.prototype, t),
                n && Ve(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "renderAccountModal",
                value: function() {
                    var e = this.props
                      , t = e.onAdd
                      , n = e.modalType
                      , o = e.showModal
                      , a = e.onUpdate
                      , i = e.onCancel
                      , l = e.isLoading
                      , c = e.advancedSetting
                      , s = e.externalAccountDetail
                      , u = e.errorType
                      , d = e.errorMessage;
                    Ze(e, Le);
                    return r.createElement(_e.Z, {
                        show: o,
                        advancedSetting: c,
                        type: n,
                        data: {},
                        onAdd: t,
                        onUpdate: a,
                        onCancel: i,
                        errorType: u,
                        errorMessage: d,
                        isLoading: l,
                        externalAccountDetail: s
                    })
                }
            }, {
                key: "renderAddAccount",
                value: function() {
                    this.props.onShowModal(!0, "new"),
                    this.setState({
                        showAddAccount: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.selectMailAccountId
                      , o = t.selectExternalAccountList
                      , a = t.selectAccountInfo
                      , i = t.changeMailAccount
                      , l = t.onHide
                      , c = t.children
                      , s = t.show
                      , u = t.logout
                      , d = t.disable
                      , f = t.onGetAvatar
                      , p = t.selectUserProfile
                      , m = t.selectUserPrefs
                      , h = (0,
                    he.Z)("mail.addAccountLink")
                      , y = !1;
                    if (c && c[0]) {
                        var b = M()(c[0], "type.displayName")
                          , g = c[0] && c[0].props && c[0].props.accountId;
                        b && "" === g && (y = !0)
                    }
                    this.imgSrc = p.hasPhoto ? "".concat(f(), "&d=").concat(Date.now()) : "";
                    var w = [xe(xe({}, a), {}, {
                        id: ""
                    })].concat(He(o))
                      , E = "ow-account-header ".concat(1 === w.length ? "ow-singleAccount" : "", " ").concat(!0 === d ? "ow-disable-arrow" : "");
                    return r.createElement(Me, {
                        show: s,
                        onHide: l,
                        titleElement: r.createElement("div", {
                            className: "ow-accounts"
                        }, r.createElement("div", {
                            className: "ow-logo"
                        }), r.createElement(_.Z, {
                            className: "ow-signout",
                            onClick: function() {
                                e.context.onExit && e.context.onExit(),
                                u()
                            }
                        }, r.createElement(L.Z, {
                            name: "signout"
                        })), this.imgSrc ? r.createElement("img", {
                            alt: "",
                            src: this.imgSrc,
                            className: "ow-account-header-avatar-load"
                        }) : r.createElement("span", {
                            className: "ow-account-header-avatar"
                        }), r.createElement("div", {
                            className: E
                        }, r.createElement(j.Z, {
                            disabled: 1 === w.length || d,
                            value: n,
                            options: w.map(function(e) {
                                var t = e.id
                                  , n = e.username
                                  , r = (e.accountName,
                                e.accountEmail)
                                  , o = e.email
                                  , a = (0,
                                he.Z)("common.displayOptionInWelcomeMsg")
                                  , i = ""
                                  , l = ""
                                  , c = "";
                                switch (p && (void 0 === p.firstName || void 0 === p.lastName ? (l = m[be.IS.PROFILE_FIRSTNAME],
                                c = m[be.IS.PROFILE_LASTNAME]) : (l = p.firstName ? p.firstName : "",
                                c = p.lastName ? p.lastName : "")),
                                a) {
                                case "firstName":
                                    i = l;
                                    break;
                                case "lastName":
                                    i = c;
                                    break;
                                case "both":
                                    i = i.concat(l, " ", c);
                                    break;
                                case "emailAddress":
                                    i = o || r;
                                    break;
                                default:
                                    i = l || c ? i.concat(l, " ", c) : i = o
                                }
                                return {
                                    value: t,
                                    label: "".concat(n),
                                    name: "".concat(i),
                                    id: "tether-account",
                                    accountName: "".concat(o || n)
                                }
                            }),
                            onChange: function(e) {
                                var t = e.value;
                                i(t)
                            },
                            searchable: !1,
                            clearable: !1,
                            valueComponent: Xe,
                            optionComponent: ze
                        })))
                    }, y ? r.createElement("div", {
                        className: "ow-mail0folder-list-title-wrapper"
                    }, r.createElement("span", {
                        className: "ow-mail-folder-list-title"
                    }, (0,
                    v.t)("app.MY_ACCOUNT")), h ? r.createElement("span", {
                        className: "ow-add-mail-accounts"
                    }, this.state.showAddAccount && this.renderAccountModal(), r.createElement("span", null, r.createElement(_.Z, {
                        onClick: function(t) {
                            e.renderAddAccount()
                        }
                    }, (0,
                    v.t)("app.ADD_ACCOUNT"), r.createElement("span", {
                        className: "ow-icon-plus"
                    })))) : "") : "", c)
                }
            }]),
            n
        }();
        Je.defaultProps = {
            selectMailAccountId: "",
            selectExternalAccountList: [],
            selectAccountInfo: [],
            changeMailAccount: function() {},
            children: "",
            show: !1,
            logout: function() {},
            disable: !0,
            onHide: function() {}
        },
        Je.contextTypes = {
            onExit: a().func
        },
        Je.propTypes = {
            selectMailAccountId: a().string,
            selectExternalAccountList: a().arrayOf(a().string),
            selectAccountInfo: a().arrayOf(a().string),
            changeMailAccount: a().func,
            children: a().string,
            show: a().bool,
            logout: a().func,
            disable: a().bool,
            onHide: a().func,
            onGetAvatar: a().func
        },
        Je.defaultProps = {
            onGetAvatar: function() {}
        };
        var $e = I(N.Z, Je)
          , Qe = n(51756)
          , et = n(80861);
        function tt(e, t) {
            if (null == e)
                return {};
            var n = {};
            for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                    if (t.includes(r))
                        continue;
                    n[r] = e[r]
                }
            return n
        }
        var nt = n(68207);
        function rt() {
            return (rt = nt ? nt.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(null, arguments)
        }
        var ot = n(25380)
          , at = n(21900);
        function it(e, t) {
            return (it = at ? at.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function lt(e, t) {
            e.prototype = ot(t.prototype),
            e.prototype.constructor = e,
            it(e, t)
        }
        var ct = n(10414)
          , st = n(43562)
          , ut = n.n(st)
          , dt = n(26888)
          , ft = n.n(dt)
          , pt = {
            large: "lg",
            medium: "md",
            small: "sm",
            xsmall: "xs",
            lg: "lg",
            md: "md",
            sm: "sm",
            xs: "xs"
        }
          , mt = "default"
          , ht = "primary";
        function yt(e) {
            return function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                return "function" == typeof n[n.length - 1] ? e.apply(void 0, n) : function(t) {
                    return e.apply(void 0, n.concat([t]))
                }
            }
        }
        function bt(e, t) {
            var n = (e.bsClass || "").trim();
            return null == n && ft()(!1),
            n + (t ? "-" + t : "")
        }
        var vt = yt(function(e, t) {
            var n = t.propTypes || (t.propTypes = {})
              , r = t.defaultProps || (t.defaultProps = {});
            return n.bsClass = a().string,
            r.bsClass = e,
            t
        })
          , gt = yt(function(e, t, n) {
            "string" != typeof t && (n = t,
            t = void 0);
            var r = n.STYLES || []
              , o = n.propTypes || {};
            e.forEach(function(e) {
                -1 === r.indexOf(e) && r.push(e)
            });
            var i = a().oneOf(r);
            (n.STYLES = r,
            i._values = r,
            n.propTypes = rt({}, o, {
                bsStyle: i
            }),
            void 0 !== t) && ((n.defaultProps || (n.defaultProps = {})).bsStyle = t);
            return n
        });
        yt(function(e, t, n) {
            "string" != typeof t && (n = t,
            t = void 0);
            var r = n.SIZES || []
              , o = n.propTypes || {};
            e.forEach(function(e) {
                -1 === r.indexOf(e) && r.push(e)
            });
            var i = [];
            r.forEach(function(e) {
                var t = pt[e];
                t && t !== e && i.push(t),
                i.push(e)
            });
            var l = a().oneOf(i);
            return l._values = i,
            n.SIZES = r,
            n.propTypes = rt({}, o, {
                bsSize: l
            }),
            void 0 !== t && (n.defaultProps || (n.defaultProps = {}),
            n.defaultProps.bsSize = t),
            n
        });
        function wt(e) {
            var t, n = ((t = {})[bt(e)] = !0,
            t);
            e.bsSize && (n[bt(e, pt[e.bsSize] || e.bsSize)] = !0);
            return e.bsStyle && (n[bt(e, e.bsStyle)] = !0),
            n
        }
        function Et(e) {
            return {
                bsClass: e.bsClass,
                bsSize: e.bsSize,
                bsStyle: e.bsStyle,
                bsRole: e.bsRole
            }
        }
        function St(e) {
            return "bsClass" === e || "bsSize" === e || "bsStyle" === e || "bsRole" === e
        }
        function Tt(e) {
            var t = {};
            return ut()(e).forEach(function(e) {
                var n = e[0]
                  , r = e[1];
                St(n) || (t[n] = r)
            }),
            [Et(e), t]
        }
        function Ot(e, t) {
            var n = {};
            t.forEach(function(e) {
                n[e] = !0
            });
            var r = {};
            return ut()(e).forEach(function(e) {
                var t = e[0]
                  , o = e[1];
                St(t) || n[t] || (r[t] = o)
            }),
            [Et(e), r]
        }
        var Ct = {
            map: function(e, t, n) {
                var o = 0;
                return r.Children.map(e, function(e) {
                    return r.isValidElement(e) ? t.call(n, e, o++) : e
                })
            },
            forEach: function(e, t, n) {
                var o = 0;
                r.Children.forEach(e, function(e) {
                    r.isValidElement(e) && t.call(n, e, o++)
                })
            },
            count: function(e) {
                var t = 0;
                return r.Children.forEach(e, function(e) {
                    r.isValidElement(e) && ++t
                }),
                t
            },
            find: function(e, t, n) {
                var o, a = 0;
                return r.Children.forEach(e, function(e) {
                    o || r.isValidElement(e) && t.call(n, e, a++) && (o = e)
                }),
                o
            },
            filter: function(e, t, n) {
                var o = 0
                  , a = [];
                return r.Children.forEach(e, function(e) {
                    r.isValidElement(e) && t.call(n, e, o++) && a.push(e)
                }),
                a
            },
            every: function(e, t, n) {
                var o = 0
                  , a = !0;
                return r.Children.forEach(e, function(e) {
                    a && r.isValidElement(e) && (t.call(n, e, o++) || (a = !1))
                }),
                a
            },
            some: function(e, t, n) {
                var o = 0
                  , a = !1;
                return r.Children.forEach(e, function(e) {
                    a || r.isValidElement(e) && t.call(n, e, o++) && (a = !0)
                }),
                a
            },
            toArray: function(e) {
                var t = [];
                return r.Children.forEach(e, function(e) {
                    r.isValidElement(e) && t.push(e)
                }),
                t
            }
        }
          , Pt = (n(25567),
        a().oneOfType([a().string, a().number]));
        var At = {
            accordion: a().bool,
            activeKey: a().any,
            onSelect: a().func,
            role: a().string,
            generateChildId: a().func,
            id: function(e) {
                return function(t) {
                    var n = null;
                    if (!t.generateChildId) {
                        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                            o[a - 1] = arguments[a];
                        (n = Pt.apply(void 0, [t].concat(o))) || t.id || (n = new Error("In order to properly initialize the " + e + " in a way that is accessible to assistive technologies (such as screen readers) an `id` or a `generateChildId` prop to " + e + " is required"))
                    }
                    return n
                }
            }("PanelGroup")
        }
          , Rt = {
            $bs_panelGroup: a().shape({
                getId: a().func,
                headerRole: a().string,
                panelRole: a().string,
                activeKey: a().any,
                onToggle: a().func
            })
        }
          , kt = function(e) {
            function t() {
                for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return (t = e.call.apply(e, [this].concat(r)) || this).handleSelect = function(e, n, r) {
                    n ? t.props.onSelect(e, r) : t.props.activeKey === e && t.props.onSelect(null, r)
                }
                ,
                t
            }
            lt(t, e);
            var n = t.prototype;
            return n.getChildContext = function() {
                var e = this.props
                  , t = e.activeKey
                  , n = e.accordion
                  , r = e.generateChildId
                  , o = e.id
                  , a = null;
                return n && (a = r || function(e, t) {
                    return o ? o + "-" + t + "-" + e : null
                }
                ),
                {
                    $bs_panelGroup: rt({
                        getId: a,
                        headerRole: "tab",
                        panelRole: "tabpanel"
                    }, n && {
                        activeKey: t,
                        onToggle: this.handleSelect
                    })
                }
            }
            ,
            n.render = function() {
                var e = this.props
                  , t = e.accordion
                  , n = e.className
                  , o = e.children
                  , a = Ot(tt(e, ["accordion", "className", "children"]), ["onSelect", "activeKey"])
                  , i = a[0]
                  , l = a[1];
                t && (l.role = l.role || "tablist");
                var c = wt(i);
                return r.createElement("div", rt({}, l, {
                    className: x()(n, c)
                }), Ct.map(o, function(e) {
                    return (0,
                    r.cloneElement)(e, {
                        bsStyle: e.props.bsStyle || i.bsStyle
                    })
                }))
            }
            ,
            t
        }(r.Component);
        kt.propTypes = At,
        kt.defaultProps = {
            accordion: !1
        },
        kt.childContextTypes = Rt;
        var It = (0,
        ct.uncontrollable)(vt("panel-group", kt), {
            activeKey: "onSelect"
        })
          , Nt = n(18428)
          , Dt = n.n(Nt)
          , Mt = n(18433)
          , _t = n.n(Mt)
          , jt = (n(83087),
        n(79529))
          , Lt = n.n(jt)
          , Ft = n(9561)
          , xt = n.n(Ft)
          , Bt = n(29593);
        function Ht(e) {
            return "" + e.charAt(0).toUpperCase() + e.slice(1)
        }
        var Ut, Zt = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.filter(function(e) {
                return null != e
            }).reduce(function(e, t) {
                if ("function" != typeof t)
                    throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
                return null === e ? t : function() {
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                        r[o] = arguments[o];
                    e.apply(this, r),
                    t.apply(this, r)
                }
            }, null)
        }, Vt = {
            height: ["marginTop", "marginBottom"],
            width: ["marginLeft", "marginRight"]
        };
        var Kt = ((Ut = {})[Bt.EXITED] = "collapse",
        Ut[Bt.EXITING] = "collapsing",
        Ut[Bt.ENTERING] = "collapsing",
        Ut[Bt.ENTERED] = "collapse in",
        Ut)
          , qt = {
            in: a().bool,
            mountOnEnter: a().bool,
            unmountOnExit: a().bool,
            appear: a().bool,
            timeout: a().number,
            onEnter: a().func,
            onEntering: a().func,
            onEntered: a().func,
            onExit: a().func,
            onExiting: a().func,
            onExited: a().func,
            dimension: a().oneOfType([a().oneOf(["height", "width"]), a().func]),
            getDimensionValue: a().func,
            role: a().string
        }
          , Yt = {
            in: !1,
            timeout: 300,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            dimension: "height",
            getDimensionValue: function(e, t) {
                var n = t["offset" + Ht(e)]
                  , r = Vt[e];
                return n + Lt()(xt()(t, r[0]), 10) + Lt()(xt()(t, r[1]), 10)
            }
        }
          , Gt = function(e) {
            function t() {
                for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return (t = e.call.apply(e, [this].concat(r)) || this).handleEnter = function(e) {
                    e.style[t.getDimension()] = "0"
                }
                ,
                t.handleEntering = function(e) {
                    var n = t.getDimension();
                    e.style[n] = t._getScrollDimensionValue(e, n)
                }
                ,
                t.handleEntered = function(e) {
                    e.style[t.getDimension()] = null
                }
                ,
                t.handleExit = function(e) {
                    var n = t.getDimension();
                    e.style[n] = t.props.getDimensionValue(n, e) + "px",
                    function(e) {
                        e.offsetHeight
                    }(e)
                }
                ,
                t.handleExiting = function(e) {
                    e.style[t.getDimension()] = "0"
                }
                ,
                t
            }
            lt(t, e);
            var n = t.prototype;
            return n.getDimension = function() {
                return "function" == typeof this.props.dimension ? this.props.dimension() : this.props.dimension
            }
            ,
            n._getScrollDimensionValue = function(e, t) {
                return e["scroll" + Ht(t)] + "px"
            }
            ,
            n.render = function() {
                var e = this
                  , t = this.props
                  , n = t.onEnter
                  , o = t.onEntering
                  , a = t.onEntered
                  , i = t.onExit
                  , l = t.onExiting
                  , c = t.className
                  , s = t.children
                  , u = tt(t, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children"]);
                delete u.dimension,
                delete u.getDimensionValue;
                var d = Zt(this.handleEnter, n)
                  , f = Zt(this.handleEntering, o)
                  , p = Zt(this.handleEntered, a)
                  , m = Zt(this.handleExit, i)
                  , h = Zt(this.handleExiting, l);
                return r.createElement(Bt.default, rt({}, u, {
                    "aria-expanded": u.role ? u.in : null,
                    onEnter: d,
                    onEntering: f,
                    onEntered: p,
                    onExit: m,
                    onExiting: h
                }), function(t, n) {
                    return r.cloneElement(s, rt({}, n, {
                        className: x()(c, s.props.className, Kt[t], "width" === e.getDimension() && "width")
                    }))
                })
            }
            ,
            t
        }(r.Component);
        Gt.propTypes = qt,
        Gt.defaultProps = Yt;
        var Wt = Gt
          , Xt = {
            onEnter: a().func,
            onEntering: a().func,
            onEntered: a().func,
            onExit: a().func,
            onExiting: a().func,
            onExited: a().func
        }
          , zt = {
            $bs_panel: a().shape({
                headingId: a().string,
                bodyId: a().string,
                bsClass: a().string,
                expanded: a().bool
            })
        }
          , Jt = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return lt(t, e),
            t.prototype.render = function() {
                var e = this.props.children
                  , t = this.context.$bs_panel || {}
                  , n = t.headingId
                  , o = t.bodyId
                  , a = t.bsClass
                  , i = t.expanded
                  , l = Tt(this.props)
                  , c = l[0]
                  , s = l[1];
                return c.bsClass = a || c.bsClass,
                n && o && (s.id = o,
                s.role = s.role || "tabpanel",
                s["aria-labelledby"] = n),
                r.createElement(Wt, rt({
                    in: i
                }, s), r.createElement("div", {
                    className: bt(c, "collapse")
                }, e))
            }
            ,
            t
        }(r.Component);
        Jt.propTypes = Xt,
        Jt.contextTypes = zt;
        var $t = vt("panel", Jt)
          , Qt = {
            collapsible: a().bool.isRequired
        }
          , en = {
            $bs_panel: a().shape({
                bsClass: a().string
            })
        }
          , tn = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return lt(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.children
                  , n = e.className
                  , o = e.collapsible
                  , a = (this.context.$bs_panel || {}).bsClass
                  , i = Ot(this.props, ["collapsible"])
                  , l = i[0]
                  , c = i[1];
                l.bsClass = a || l.bsClass;
                var s = r.createElement("div", rt({}, c, {
                    className: x()(n, bt(l, "body"))
                }), t);
                return o && (s = r.createElement($t, null, s)),
                s
            }
            ,
            t
        }(r.Component);
        tn.propTypes = Qt,
        tn.defaultProps = {
            collapsible: !1
        },
        tn.contextTypes = en;
        var nn = vt("panel", tn)
          , rn = n(54029)
          , on = {
            componentClass: rn.default
        }
          , an = {
            $bs_panel: a().shape({
                headingId: a().string,
                bsClass: a().string
            })
        }
          , ln = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return lt(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.children
                  , n = e.className
                  , o = e.componentClass
                  , a = tt(e, ["children", "className", "componentClass"])
                  , i = this.context.$bs_panel || {}
                  , l = i.headingId
                  , c = i.bsClass
                  , s = Tt(a)
                  , u = s[0]
                  , d = s[1];
                return u.bsClass = c || u.bsClass,
                l && (d.role = d.role || "tab",
                d.id = l),
                r.createElement(o, rt({}, d, {
                    className: x()(n, bt(u, "heading"))
                }), t)
            }
            ,
            t
        }(r.Component);
        ln.propTypes = on,
        ln.defaultProps = {
            componentClass: "div"
        },
        ln.contextTypes = an;
        var cn = vt("panel", ln);
        function sn(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        var un = n(29653)
          , dn = n.n(un)
          , fn = {
            href: a().string,
            onClick: a().func,
            onKeyDown: a().func,
            disabled: a().bool,
            role: a().string,
            tabIndex: a().oneOfType([a().number, a().string]),
            componentClass: dn()
        };
        function pn(e) {
            return !e || "#" === e.trim()
        }
        var mn = function(e) {
            function t(t, n) {
                var r;
                return (r = e.call(this, t, n) || this).handleClick = r.handleClick.bind(sn(sn(r))),
                r.handleKeyDown = r.handleKeyDown.bind(sn(sn(r))),
                r
            }
            lt(t, e);
            var n = t.prototype;
            return n.handleClick = function(e) {
                var t = this.props
                  , n = t.disabled
                  , r = t.href
                  , o = t.onClick;
                (n || pn(r)) && e.preventDefault(),
                n ? e.stopPropagation() : o && o(e)
            }
            ,
            n.handleKeyDown = function(e) {
                " " === e.key && (e.preventDefault(),
                this.handleClick(e))
            }
            ,
            n.render = function() {
                var e = this.props
                  , t = e.componentClass
                  , n = e.disabled
                  , o = e.onKeyDown
                  , a = tt(e, ["componentClass", "disabled", "onKeyDown"]);
                return pn(a.href) && (a.role = a.role || "button",
                a.href = a.href || "#"),
                n && (a.tabIndex = -1,
                a.style = rt({
                    pointerEvents: "none"
                }, a.style)),
                r.createElement(t, rt({}, a, {
                    onClick: this.handleClick,
                    onKeyDown: Zt(this.handleKeyDown, o)
                }))
            }
            ,
            t
        }(r.Component);
        mn.propTypes = fn,
        mn.defaultProps = {
            componentClass: "a"
        };
        var hn = mn
          , yn = {
            onClick: a().func,
            componentClass: rn.default
        }
          , bn = {
            componentClass: hn
        }
          , vn = {
            $bs_panel: a().shape({
                bodyId: a().string,
                onToggle: a().func,
                expanded: a().bool
            })
        }
          , gn = function(e) {
            function t() {
                for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return (t = e.call.apply(e, [this].concat(r)) || this).handleToggle = t.handleToggle.bind(sn(sn(t))),
                t
            }
            lt(t, e);
            var n = t.prototype;
            return n.handleToggle = function(e) {
                var t = (this.context.$bs_panel || {}).onToggle;
                t && t(e)
            }
            ,
            n.render = function() {
                var e = this.props
                  , t = e.onClick
                  , n = e.className
                  , o = e.componentClass
                  , a = tt(e, ["onClick", "className", "componentClass"])
                  , i = this.context.$bs_panel || {}
                  , l = i.expanded
                  , c = i.bodyId
                  , s = o;
                return a.onClick = Zt(t, this.handleToggle),
                a["aria-expanded"] = l,
                a.className = x()(n, !l && "collapsed"),
                c && (a["aria-controls"] = c),
                r.createElement(s, a)
            }
            ,
            t
        }(r.Component);
        gn.propTypes = yn,
        gn.defaultProps = bn,
        gn.contextTypes = vn;
        var wn = gn
          , En = {
            componentClass: rn.default,
            toggle: a().bool
        }
          , Sn = {
            $bs_panel: a().shape({
                bsClass: a().string
            })
        }
          , Tn = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return lt(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.children
                  , n = e.className
                  , o = e.toggle
                  , a = e.componentClass
                  , i = tt(e, ["children", "className", "toggle", "componentClass"])
                  , l = (this.context.$bs_panel || {}).bsClass
                  , c = Tt(i)
                  , s = c[0]
                  , u = c[1];
                return s.bsClass = l || s.bsClass,
                o && (t = r.createElement(wn, null, t)),
                r.createElement(a, rt({}, u, {
                    className: x()(n, bt(s, "title"))
                }), t)
            }
            ,
            t
        }(r.Component);
        Tn.propTypes = En,
        Tn.defaultProps = {
            componentClass: "div"
        },
        Tn.contextTypes = Sn;
        var On = vt("panel", Tn)
          , Cn = {
            $bs_panel: a().shape({
                bsClass: a().string
            })
        }
          , Pn = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return lt(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.children
                  , n = e.className
                  , o = (this.context.$bs_panel || {}).bsClass
                  , a = Tt(this.props)
                  , i = a[0]
                  , l = a[1];
                return i.bsClass = o || i.bsClass,
                r.createElement("div", rt({}, l, {
                    className: x()(n, bt(i, "footer"))
                }), t)
            }
            ,
            t
        }(r.Component);
        Pn.contextTypes = Cn;
        var An = vt("panel", Pn)
          , Rn = Object.prototype.hasOwnProperty
          , kn = function(e, t) {
            return e ? e + "--" + t : null
        }
          , In = {
            expanded: a().bool,
            onToggle: a().func,
            eventKey: a().any,
            id: a().string
        }
          , Nn = {
            $bs_panelGroup: a().shape({
                getId: a().func,
                activeKey: a().any,
                onToggle: a().func
            })
        }
          , Dn = {
            $bs_panel: a().shape({
                headingId: a().string,
                bodyId: a().string,
                bsClass: a().string,
                onToggle: a().func,
                expanded: a().bool
            })
        }
          , Mn = function(e) {
            function t() {
                for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return (t = e.call.apply(e, [this].concat(r)) || this).handleToggle = function(e) {
                    var n = t.context.$bs_panelGroup
                      , r = !t.getExpanded();
                    n && n.onToggle ? n.onToggle(t.props.eventKey, r, e) : t.props.onToggle(r, e)
                }
                ,
                t
            }
            lt(t, e);
            var n = t.prototype;
            return n.getChildContext = function() {
                var e, t = this.props, n = t.eventKey, r = t.id, o = null == n ? r : n;
                if (null !== o) {
                    var a = this.context.$bs_panelGroup
                      , i = a && a.getId || kn;
                    e = {
                        headingId: i(o, "heading"),
                        bodyId: i(o, "body")
                    }
                }
                return {
                    $bs_panel: rt({}, e, {
                        bsClass: this.props.bsClass,
                        expanded: this.getExpanded(),
                        onToggle: this.handleToggle
                    })
                }
            }
            ,
            n.getExpanded = function() {
                var e = this.context.$bs_panelGroup;
                return e && Rn.call(e, "activeKey") ? e.activeKey === this.props.eventKey : !!this.props.expanded
            }
            ,
            n.render = function() {
                var e = this.props
                  , t = e.className
                  , n = e.children
                  , o = Ot(this.props, ["onToggle", "eventKey", "expanded"])
                  , a = o[0]
                  , i = o[1];
                return r.createElement("div", rt({}, i, {
                    className: x()(t, wt(a))
                }), n)
            }
            ,
            t
        }(r.Component);
        Mn.propTypes = In,
        Mn.contextTypes = Nn,
        Mn.childContextTypes = Dn;
        var _n = (0,
        ct.uncontrollable)(vt("panel", gt(_t()({
            SUCCESS: "success",
            WARNING: "warning",
            DANGER: "danger",
            INFO: "info"
        }).concat([mt, ht]), mt, Mn)), {
            expanded: "onToggle"
        });
        Dt()(_n, {
            Heading: cn,
            Title: On,
            Body: nn,
            Footer: An,
            Toggle: wn,
            Collapse: $t
        });
        var jn = _n
          , Ln = n(91162)
          , Fn = n(18161)
          , xn = n(13491)
          , Bn = (n(88955),
        n(5599),
        n(54075));
        function Hn(e) {
            "@babel/helpers - typeof";
            return (Hn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Un(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Zn(r.key), r)
            }
        }
        function Zn(e) {
            var t = function(e, t) {
                if ("object" !== Hn(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Hn(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Hn(t) ? t : String(t)
        }
        function Vn(e, t) {
            return (Vn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Kn(e) {
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
                var n, r = Yn(e);
                if (t) {
                    var o = Yn(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Hn(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return qn(e)
                }(this, n)
            }
        }
        function qn(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Yn(e) {
            return (Yn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Gn = function(e) {
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
                t && Vn(e, t)
            }(n, r.PureComponent);
            var t = Kn(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    showAlert: !1,
                    errorMsg: ""
                },
                r.onSelectedTag = r.onSelectedTag.bind(qn(r)),
                r.onDeleteTag = r.onDeleteTag.bind(qn(r)),
                r.handleEditTag = r.handleEditTag.bind(qn(r)),
                r.handleHideAlert = r.handleHideAlert.bind(qn(r)),
                r
            }
            return function(e, t, n) {
                t && Un(e.prototype, t),
                n && Un(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "onSelectedTag",
                value: function() {
                    var e = this.props
                      , t = e.tag
                      , n = e.selectedTag
                      , r = e.selectMailModeIsThread;
                    if (n.id != t.id) {
                        if (r)
                            return this.setState({
                                showAlert: !0,
                                errorMsg: (0,
                                f.t)("mail.tags.tagsEditor.CONVERSATION_VIEW_CHECK")
                            }),
                            null;
                        this.props.onTagSelection(t)
                    }
                }
            }, {
                key: "handleHideAlert",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        e.setState({
                            showAlert: !1
                        })
                    }, 0)
                }
            }, {
                key: "onDeleteTag",
                value: function(e) {
                    var t = this.props
                      , n = t.selectedTag;
                    (0,
                    t.onRemoveTag)({
                        modalType: "confirm",
                        modalProps: {
                            title: (0,
                            f.t)("mail.tags.tagsEditor.REMOVE_TAG"),
                            message: (0,
                            f.t)("mail.tags.tagsEditor.REMOVE_TAG_CONFIRMATION")
                        }
                    }, n)
                }
            }, {
                key: "handleEditTag",
                value: function() {
                    var e = this.props;
                    (0,
                    e.onEditTag)(e.tag)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.tag
                      , o = t.selectedTag
                      , a = (null === n || void 0 === n ? void 0 : n.id) === (null === o || void 0 === o ? void 0 : o.id) ? "active" : ""
                      , i = r.createElement(L.Z, {
                        name: "ow-icon-options",
                        className: x()("ow-tags-options ow-icon-options", a)
                    });
                    return r.createElement("div", {
                        className: x()("ow-simpleList-item", a),
                        onClick: function(t) {
                            e.onSelectedTag(),
                            t.stopPropagation()
                        },
                        key: null === n || void 0 === n ? void 0 : n.id
                    }, r.createElement(L.Z, {
                        style: {
                            color: null === n || void 0 === n ? void 0 : n.color
                        },
                        name: "ow-icon-tag ow-icon-tag",
                        className: "ow-icon-tag",
                        role: be.HB.BUTTON
                    }), r.createElement("span", {
                        className: "ow-tag-name",
                        "aria-label": n.name
                    }, n.name), r.createElement(Ln.v, {
                        onClick: function(e) {
                            e.preventDefault()
                        },
                        menuButton: r.createElement(Fn.j, null, i)
                    }, r.createElement(xn.s, {
                        onClick: function(t) {
                            e.handleEditTag()
                        }
                    }, (0,
                    f.t)("mail.tags.tagsEditor.EDIT_TAG")), r.createElement(xn.s, {
                        onClick: function(t) {
                            e.onDeleteTag()
                        }
                    }, (0,
                    f.t)("mail.tags.tagsEditor.REMOVE_TAG"))), r.createElement(Bn.Z, {
                        show: this.state.showAlert,
                        message: this.state.errorMsg,
                        onHide: this.handleHideAlert
                    }))
                }
            }]),
            n
        }();
        Gn.defaultProps = {
            tag: "",
            onRemoveTag: function() {},
            onTagSelection: function() {}
        },
        Gn.propTypes = {
            tag: o.PropTypes.element.isRequired,
            onRemoveTag: o.func,
            onTagSelection: o.func
        };
        var Wn = (0,
        i.$j)(function(e) {
            return {}
        }, function(e) {
            return {
                onEditTag: function(t) {
                    return e((0,
                    T.b$)(t))
                },
                onRemoveTag: function(t, n) {
                    return e((0,
                    T.N2)(t, n))
                },
                onTagSelection: function(t) {
                    return e((0,
                    T.vC)(t))
                }
            }
        })(Gn);
        function Xn(e) {
            "@babel/helpers - typeof";
            return (Xn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function zn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Jn(r.key), r)
            }
        }
        function Jn(e) {
            var t = function(e, t) {
                if ("object" !== Xn(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Xn(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Xn(t) ? t : String(t)
        }
        function $n(e, t) {
            return ($n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Qn(e) {
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
                var n, r = er(e);
                if (t) {
                    var o = er(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Xn(t) || "function" == typeof t))
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
        function er(e) {
            return (er = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var tr = function(e) {
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
                t && $n(e, t)
            }(n, r.PureComponent);
            var t = Qn(n);
            function n(e) {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.call(this, e)
            }
            return function(e, t, n) {
                t && zn(e.prototype, t),
                n && zn(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.tagsList
                      , n = e.selectedTag
                      , o = e.selectMailModeIsThread;
                    return r.createElement("div", {
                        className: "ow-Tags-List"
                    }, (null === t || void 0 === t ? void 0 : t.length) > 0 ? t.map(function(e) {
                        return r.createElement(Wn, {
                            tag: e,
                            key: e.id,
                            selectMailModeIsThread: o,
                            selectedTag: n
                        })
                    }) : r.createElement("span", {
                        className: "ow-Tags-empty"
                    }, (0,
                    f.t)("mail.tags.tagsEditor.EMPTY_TAG_MESSAGE")))
                }
            }]),
            n
        }();
        tr.defaultProps = {
            tagsList: []
        },
        tr.propTypes = {
            tagsList: a().element.isRequired
        };
        var nr = (0,
        i.$j)(function(e) {
            return {
                tagsList: (0,
                R.gQ)(e),
                selectedTag: (0,
                R.iX)(e)
            }
        }, function(e) {
            return {
                onEditTag: function(t) {
                    return e(editTagSelection(t))
                },
                onRemoveTag: function(t, n) {
                    return e(deleteTagSelection(t, n))
                }
            }
        })(tr);
        function rr(e) {
            "@babel/helpers - typeof";
            return (rr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var or = ["selectDefaultAccountId", "selectExternalAccountList", "changeMailAccount", "selectMailAccountId", "selectAccountInfo", "onShowModal", "isFolderScrollRequired", "tagsList", "selectedTag", "onCreateTags", "selectMailModeIsThread"];
        function ar(e, t) {
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
        function ir(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, lr(r.key), r)
            }
        }
        function lr(e) {
            var t = function(e, t) {
                if ("object" !== rr(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== rr(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === rr(t) ? t : String(t)
        }
        function cr(e, t) {
            return (cr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function sr(e) {
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
                var n, r = dr(e);
                if (t) {
                    var o = dr(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === rr(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return ur(e)
                }(this, n)
            }
        }
        function ur(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function dr(e) {
            return (dr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var fr = function(e) {
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
                t && cr(e, t)
            }(n, r.PureComponent);
            var t = sr(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    openedAccordionKey: 1
                },
                r.changeAccordionState = r.changeAccordionState.bind(ur(r)),
                r.renderAccordion = r.renderAccordion.bind(ur(r)),
                r
            }
            return function(e, t, n) {
                t && ir(e.prototype, t),
                n && ir(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    if ((0,
                    he.Z)("mail.tags.enabled")) {
                        var e = this.props.onTagsListFetch
                          , t = "resources/tagsMockData/tagsList.json"
                          , n = new XMLHttpRequest;
                        n.open("GET", t),
                        n.addEventListener("load", function(n) {
                            try {
                                var r = JSON.parse(n.target.responseText);
                                e(r)
                            } catch (e) {
                                console.error("Local file MUST be in JSON", t)
                            }
                        }),
                        n.addEventListener("error", function(e) {
                            fail && fail()
                        }),
                        n.send()
                    }
                }
            }, {
                key: "renderAccordion",
                value: function() {
                    return r.createElement(r.Fragment, null)
                }
            }, {
                key: "changeAccordionState",
                value: function(e) {
                    this.state.openedAccordionKey === e ? this.setState({
                        openedAccordionKey: 0
                    }) : this.setState({
                        openedAccordionKey: e
                    }),
                    2 !== e && this.props.resetTagClick()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.selectDefaultAccountId
                      , o = t.selectExternalAccountList
                      , a = void 0 === o ? [] : o
                      , i = t.changeMailAccount
                      , l = t.selectMailAccountId
                      , c = t.selectAccountInfo
                      , s = (t.onShowModal,
                    t.isFolderScrollRequired)
                      , u = t.tagsList
                      , d = (t.selectedTag,
                    t.onCreateTags)
                      , f = t.selectMailModeIsThread
                      , p = (ar(t, or),
                    (0,
                    he.Z)("mail.addAccountLink"))
                      , m = ((0,
                    he.Z)("mail.externalAccount.displayLabel"),
                    "ow-mail-accounts");
                    s && (m = "ow-mail-accounts ow-mail-accounts-expanded");
                    var h = (0,
                    he.Z)("mail.tags.maxTagsList")
                      , y = !1;
                    u && h <= u.length && (y = !0);
                    var b = a.length > 0
                      , g = (0,
                    he.Z)("mail.displayEmailIdInMail") && c && c.email ? " : " + c.email : ""
                      , w = b ? "ow-accordian-external-body" : ""
                      , E = !1 === (0,
                    he.Z)("mail.tags.enabled") ? "" : "ow-tags-external-body";
                    (0,
                    he.Z)("mail.tags.enabled");
                    return r.createElement("div", {
                        className: p ? m : "".concat(m, " ow-mail-accounts-remove-add-link")
                    }, r.createElement(It, {
                        accordion: !0,
                        className: "ow-mail-accounts-accordion",
                        defaultActiveKey: "1"
                    }, r.createElement(jn, {
                        eventKey: "1",
                        onClick: function() {
                            i(n),
                            e.changeAccordionState(1)
                        }
                    }, r.createElement(jn.Heading, {
                        role: be.HB.HEADING
                    }, r.createElement(jn.Title, {
                        className: "ow-tags-title",
                        toggle: !0
                    }, r.createElement("div", {
                        className: "ow-tags-header"
                    }, r.createElement("span", {
                        className: "ow-tags-label"
                    }, r.createElement("div", {
                        title: M()(c, "email", " "),
                        "aria-label": (0,
                        v.t)("app.MY_ACCOUNT") + {
                            accountName: g
                        }
                    }, (0,
                    v.t)("app.MY_ACCOUNT"), (0,
                    he.Z)("mail.displayEmailIdInMail") && c && c.email ? " : " + c.email : "")), 1 === this.state.openedAccordionKey ? r.createElement(_.Z, {
                        className: "ow-mail-tags-button-expanded",
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        v.t)("mail.tags.tagsEditor.CARET_EXPANDED")
                    }, r.createElement("span", {
                        className: "caret"
                    })) : r.createElement(_.Z, {
                        className: "ow-mail-tags-button",
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        v.t)("mail.tags.tagsEditor.CARET_COLLAPSED")
                    }, r.createElement("span", {
                        className: "caret"
                    }))))), r.createElement(jn.Body, {
                        collapsible: !0,
                        className: "ow-accordian-body ".concat(E, " ").concat(w)
                    }, r.createElement(Qe.Z, {
                        accountId: n
                    }))), (0,
                    he.Z)("mail.tags.enabled") && r.createElement(jn, {
                        eventKey: "2",
                        onClick: function() {
                            e.changeAccordionState(2)
                        }
                    }, r.createElement(jn.Heading, {
                        role: be.HB.HEADING
                    }, r.createElement(jn.Title, {
                        className: "ow-tags-title",
                        toggle: !0,
                        "aria-label": (0,
                        v.t)("mail.tags.tagsEditor.TAGS_HEADING")
                    }, r.createElement("div", {
                        className: "ow-tags-header"
                    }, r.createElement("span", {
                        className: "ow-tags-label"
                    }, (0,
                    v.t)("mail.tags.tagsEditor.TAGS_HEADING")), r.createElement(_.Z, {
                        className: "ow-mail-tags-button",
                        disabled: y,
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        v.t)("mail.tags.tagsEditor.CREATE_TAG"),
                        onClick: function(t) {
                            d(),
                            2 === e.state.openedAccordionKey && t.stopPropagation()
                        }
                    }, r.createElement(L.Z, {
                        name: "plus",
                        className: "ow-tags-plus-icon",
                        onClick: function(e) {
                            y && (e.stopPropagation(),
                            e.preventDefault())
                        }
                    })), 2 === this.state.openedAccordionKey ? r.createElement(_.Z, {
                        className: "ow-mail-tags-button-expanded",
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        v.t)("mail.tags.tagsEditor.CARET_EXPANDED")
                    }, r.createElement("span", {
                        className: "caret"
                    })) : r.createElement(_.Z, {
                        className: "ow-mail-tags-button",
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        v.t)("mail.tags.tagsEditor.CARET_COLLAPSED")
                    }, r.createElement("span", {
                        className: "caret"
                    }))))), r.createElement(jn.Body, {
                        collapsible: !0,
                        className: "ow-accordian-body ".concat(E)
                    }, r.createElement("div", {
                        className: "ow-tags-tagsList-container"
                    }, r.createElement(nr, {
                        selectMailModeIsThread: f
                    })))), b ? r.createElement(jn, {
                        eventKey: "3",
                        onClick: function() {
                            e.changeAccordionState(3)
                        }
                    }, r.createElement(jn.Heading, {
                        role: be.HB.HEADING
                    }, r.createElement(jn.Title, {
                        className: "ow-tags-title",
                        toggle: !0,
                        "aria-label": (0,
                        v.t)("app.OTHER_ACCOUNT")
                    }, r.createElement("div", {
                        className: "ow-tags-header"
                    }, r.createElement("span", {
                        className: "ow-tags-label"
                    }, (0,
                    v.t)("app.OTHER_ACCOUNT")), 3 === this.state.openedAccordionKey ? r.createElement(_.Z, {
                        className: "ow-mail-tags-button-expanded",
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        v.t)("mail.tags.tagsEditor.CARET_EXPANDED")
                    }, r.createElement("span", {
                        className: "caret"
                    })) : r.createElement(_.Z, {
                        className: "ow-mail-tags-button",
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        v.t)("mail.tags.tagsEditor.CARET_COLLAPSED")
                    }, r.createElement("span", {
                        className: "caret"
                    }))))), r.createElement(jn.Body, {
                        collapsible: !0,
                        className: "ow-accordian-body ".concat(w)
                    }, r.createElement("div", {
                        className: "ow-tags-tagsList-container"
                    }, a.length && a.map(function(e) {
                        return r.createElement(et.Z, {
                            active: l,
                            onFocus: i
                        }, r.createElement(et.i, {
                            id: e.id,
                            key: e.id
                        }, r.createElement("div", null, e.accountName), r.createElement(Qe.Z, {
                            accountId: e.id
                        })))
                    })))) : ""))
                }
            }]),
            n
        }();
        fr.defaultProps = {
            showAddAccount: !1,
            selectMailAccountId: "",
            selectDefaultAccountId: "",
            selectExternalAccountList: [],
            changeMailAccount: function() {}
        },
        fr.propTypes = {
            showAddAccount: a().boolean,
            selectMailAccountId: a().string,
            selectDefaultAccountId: a().string,
            selectExternalAccountList: a().arrayOf(a().string),
            changeMailAccount: a().func
        };
        var pr = I(fr)
          , mr = n(86956)
          , hr = n(46594)
          , yr = n(68151)
          , br = n(93549)
          , vr = n.n(br)
          , gr = n(46095)
          , wr = n(44910)
          , Er = n(97517)
          , Sr = n(85608)
          , Tr = n(96744)
          , Or = n(3203)
          , Cr = n(69218)
          , Pr = n(99688)
          , Ar = n(14212);
        function Rr(e) {
            "@babel/helpers - typeof";
            return (Rr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function kr(e, t) {
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
        function Ir(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? kr(Object(n), !0).forEach(function(t) {
                    Nr(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kr(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function Nr(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Rr(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Rr(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Rr(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var Dr = be.DJ.ATTACHMENT_VIEW
          , Mr = (0,
        i.$j)(function(e) {
            var t = (0,
            Tr.DU)(e)[0]
              , n = (0,
            Tr.Nn)(e)
              , r = v.UhU.isDesktop ? (0,
            Tr.YQ)(e) : (0,
            Tr.wR)(e)
              , o = (0,
            m.hL)(e)
              , a = o && o.email
              , i = (0,
            R.gQ)(e)
              , l = (0,
            R.iX)(e)
              , c = n ? n.length : 0
              , s = 1 !== c || !M()(n[0], "from.address", "")
              , u = r === Dr ? (0,
            Tr.X4)(e) : (0,
            Tr.b7)(e)
              , d = u.selectMode
              , f = u.renderData || {}
              , p = f.expanded
              , y = f.collapsing
              , b = (0,
            Tr.s2)(e);
            if (0 === n.length)
                return {
                    layout: r,
                    selectMode: d,
                    searchMode: b,
                    tagsList: i,
                    selectedTag: l
                };
            var g = n.every(function(e) {
                return e.flags && e.flags.seen && (!e.uidList || e.uidList && e.seenChildrenUids && e.seenChildrenUids.length === e.childrenUids.length)
            })
              , w = n.every(function(e) {
                return e.flags && !e.flags.seen && (!e.uidList || e.uidList && (!e.seenChildrenUids || 0 === e.seenChildrenUids.length))
            })
              , E = n.every(function(t) {
                return t.flags && t.flags.junk && (!t.uidList || t.uidList && t.junkChildrenUids && t.junkChildrenUids.length === t.childrenUids.length) || "junk" === (0,
                Tr.wP)(t.folderPath)(e)
            })
              , S = n.every(function(e) {
                return e.flags && e.flags.flagged && (!e.uidList || e.uidList && e.flaggedChildrenUids && e.flaggedChildrenUids.length === e.childrenUids.length)
            })
              , T = n.every(function(e) {
                return e.flags && !e.flags.flagged && (!e.uidList || e.uidList && (!e.flaggedChildrenUids || 0 === e.flaggedChildrenUids.length))
            })
              , O = n.every(function(e) {
                return e.from && e.from.address !== o.email
            })
              , C = (0,
            Tr.Gt)(e)
              , P = n.map(function(e) {
                return e.folderPath
            }).filter(function(e, t, n) {
                return n.indexOf(e) === t
            })
              , A = (0,
            Tr.$_)(e)
              , k = !(0,
            Ar.qI)("_")(e)
              , I = (0,
            m.H_)(e)
              , N = (0,
            Or.af)(e)
              , D = (0,
            Or.Ix)(be.PG.MAIL_FORWARD_TYPE)(e) || be.Sv.INLINE
              , _ = "true" === N.enableMessageCategories && I.enableMessageCategories
              , j = (0,
            m.F9)(e)
              , L = !("" === j)
              , F = (0,
            Tr.EM)(e)
              , x = !!(1 === n.length && n[0].childrenUids && n[0].childrenUids.length > 0)
              , B = (0,
            Ar.IX)(e)
              , H = (0,
            h.UD)(e)
              , U = (0,
            Cr.n$)(e)
              , Z = (0,
            Or.KQ)(e);
            return {
                searchMode: b,
                selectMode: d,
                selectedCount: c,
                summaries: n,
                layout: r,
                read: g,
                unread: w,
                forwardType: D,
                junk: E,
                flagged: S,
                unflagged: T,
                notSelf: O,
                folderData: C,
                folderPaths: P,
                detailStatus: (0,
                Tr.Vd)(e),
                currentCategory: A,
                enableMessageCategories: _,
                expanded: p,
                collapsing: y,
                show: k,
                accountEmail: a,
                accountId: j,
                isExternalAccount: L,
                isThread: x,
                PreviewDetail: B,
                cancelSendInProgress: F,
                externalFolders: H,
                disbleEmailOperations: s,
                isComposeOpen: U,
                index: t,
                tagsList: i,
                selectedTag: l,
                isThreadMode: Z
            }
        }, function(e) {
            return {
                dispatch: e
            }
        }, function(e, t, n) {
            var r = e.accountId
              , o = e.summaries
              , a = e.layout
              , i = e.index
              , l = t.dispatch
              , c = vr()(t, ["dispatch"])
              , s = o && o.map(function(e) {
                var t = e.from;
                return t && t.address
            })
              , u = Ir(Ir({}, c), {}, {
                onMarkAsSpam: function() {
                    l((0,
                    Er.markAsSpam)(o, !0))
                },
                onMarkAsPhishing: function() {
                    l((0,
                    Er.markAsPhishing)(o, !0))
                },
                onMarkAsNotSpam: function() {
                    l((0,
                    Er.markAsSpam)(o, !1))
                },
                onMarkAsUnread: function() {
                    return l((0,
                    Er.markAsReadUnread)(o, !1))
                },
                onMarkAsRead: function() {
                    return l((0,
                    Er.markAsReadUnread)(o, !0))
                },
                onDelete: function(e) {
                    l((0,
                    Er.deleteMail)({
                        summaries: o,
                        actionSource: be.FX.TOOLBAR,
                        index: i
                    }, e))
                },
                onMarkAsFlag: function() {
                    l((0,
                    Er.markAsFlag)(o, !0))
                },
                onClearFlag: function() {
                    return l((0,
                    Er.markAsFlag)(o, !1))
                },
                onViewSource: function() {
                    return l((0,
                    Er.viewSource)(o[0]))
                },
                onCreateGroup: function() {
                    return l((0,
                    Er.createGroup)(o))
                },
                onUpdateState: (0,
                gr.DE)(Er.updateState, (0,
                wr.Tw)(l)),
                onPrintMail: function(e) {
                    l((0,
                    Er.printMail)(o, e))
                },
                onSaveEMLFile: function() {
                    l((0,
                    Er.downloadMail)(o[0]))
                },
                onMoveToFolder: function(e) {
                    l((0,
                    Er.mailSummariesMoveTo)({
                        uidInfo: o,
                        folderPath: e
                    }))
                },
                onCreateFolder: function(e) {
                    var t = e.parent
                      , n = e.value;
                    l((0,
                    Er.createFolder)({
                        accountId: r,
                        parentPath: t.path,
                        name: n
                    }))
                },
                onInvite: function() {
                    var e = o.reduce(function(e, t) {
                        var n = t.recipients
                          , r = n.to
                          , o = void 0 === r ? [] : r
                          , a = n.cc
                          , i = void 0 === a ? [] : a;
                        return e.concat(o.concat(i).map(function(e) {
                            return e.address
                        }))
                    }, []).filter(function(e, t, n) {
                        return t === n.indexOf(e)
                    });
                    l((0,
                    Sr.yM)(void 0, void 0, e))
                },
                onInviteToEvent: function(e) {
                    var t = o[0]
                      , n = []
                      , r = t.recipients
                      , a = r.to
                      , i = void 0 === a ? [] : a
                      , c = r.cc
                      , s = void 0 === c ? [] : c
                      , u = t.from
                      , d = i.concat(s);
                    d.push(u),
                    (d = d.filter(function(t) {
                        return t.address !== e
                    })).map(function(e) {
                        var t = e.name
                          , r = e.address;
                        return n.push({
                            commonName: t,
                            address: r,
                            status: "needsAction",
                            type: "internal"
                        }),
                        {}
                    }),
                    l((0,
                    Sr.yM)(void 0, void 0, n))
                },
                onNewCompose: function(e) {
                    return l((0,
                    Pr.mH)("", e))
                },
                onCreateTags: function() {
                    l((0,
                    Er.createTags)())
                },
                onManageTag: function() {
                    return l((0,
                    Er.manageTagSelection)())
                },
                onIncludeTagToMail: function(e) {
                    return l((0,
                    Er.includeTagToMail)(e, o))
                },
                onReply: function() {
                    var t = e.PreviewDetail;
                    l((0,
                    Pr.U4)(t))
                },
                onReplyAll: function() {
                    var t = e.PreviewDetail;
                    l((0,
                    Pr.B$)(t))
                },
                onForwardInline: function() {
                    var t = e.PreviewDetail;
                    l((0,
                    Pr.Gi)(t))
                },
                onForwardAttachment: function() {
                    var t = e.PreviewDetail;
                    l((0,
                    Pr.ED)(t))
                },
                onRefresh: function() {
                    l(a === Dr ? (0,
                    Er.refreshAttachmentList)() : (0,
                    Er.refreshMailSummaryList)())
                },
                onMoveCategory: function(e) {
                    l((0,
                    Er.moveToCategory)(o, e))
                },
                onSafeSender: function() {
                    l((0,
                    Er.safeSender)(s))
                },
                onBlockSender: function() {
                    l((0,
                    Er.blockSender)(s))
                },
                onBlockDomain: function() {
                    l((0,
                    Er.blockDomain)(s))
                },
                onBlockSenderAndMarkAsSpam: function() {
                    l((0,
                    Er.blockSenderAndMarkAsSpam)(o, !0, "", s))
                },
                onBlockDomainAndMarkAsSpam: function() {
                    l((0,
                    Er.blockDomainAndMarkAsSpam)(o, !0, "", s))
                },
                onSafesenderAndMarkAsNotSpam: function() {
                    l((0,
                    Er.safesenderAndMarkAsNotSpam)(o, !1, "", s))
                },
                toggleSelectMode: function(e) {
                    l(a === Dr ? (0,
                    Er.attachmentListToggleSelectMode)(e) : (0,
                    Er.mailSummaryToggleSelectMode)(e))
                },
                onBeginCollapsing: function() {
                    l((0,
                    Er.navigateMailSummaryList)({
                        collapsing: !0
                    }))
                },
                toggleSearch: function(e) {
                    l((0,
                    Er.toggleMailTuiSearch)(e))
                },
                onSearch: function(e) {
                    l((0,
                    T.mh)(e))
                }
            });
            return Object.assign({}, n, e, u)
        })
          , _r = (Mr(hr.Z),
        Mr(yr.Z))
          , jr = n(51304)
          , Lr = n(24083)
          , Fr = n(55086)
          , xr = n(47093)
          , Br = n(7179);
        function Hr(e) {
            "@babel/helpers - typeof";
            return (Hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Ur = ["ItemComponent"];
        function Zr() {
            return (Zr = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Vr(e, t) {
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
        function Kr(e, t) {
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
        function qr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Kr(Object(n), !0).forEach(function(t) {
                    Yr(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kr(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function Yr(e, t, n) {
            return (t = Wr(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Gr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Wr(r.key), r)
            }
        }
        function Wr(e) {
            var t = function(e, t) {
                if ("object" !== Hr(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Hr(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Hr(t) ? t : String(t)
        }
        function Xr(e, t) {
            return (Xr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function zr(e) {
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
                var n, r = $r(e);
                if (t) {
                    var o = $r(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Hr(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Jr(e)
                }(this, n)
            }
        }
        function Jr(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function $r(e) {
            return ($r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Qr = function(e) {
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
                t && Xr(e, t)
            }(n, r.PureComponent);
            var t = zr(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).renderItem = r.renderItem.bind(Jr(r)),
                r.itemWrapperClass = r.itemWrapperClass.bind(Jr(r)),
                r.getItemKey = r.getItemKey.bind(Jr(r)),
                r.getMotionStyles = r.getMotionStyles.bind(Jr(r)),
                r.getDefaultStyles = r.getDefaultStyles.bind(Jr(r)),
                r.getCollapseHeight = r.getCollapseHeight.bind(Jr(r)),
                r.getCollapseY = r.getCollapseY.bind(Jr(r)),
                r.getCollapseShadow = r.getCollapseShadow.bind(Jr(r)),
                r.getCollapseOpacity = r.getCollapseOpacity.bind(Jr(r)),
                r.getMotionStyles = r.getMotionStyles.bind(Jr(r)),
                r.getCollapseSectionY = r.getCollapseSectionY.bind(Jr(r)),
                r.getLeaveMotionStyle = r.getLeaveMotionStyle.bind(Jr(r)),
                r
            }
            return function(e, t, n) {
                t && Gr(e.prototype, t),
                n && Gr(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.itemHeight
                      , n = e.bufferCount
                      , r = e.scrollTop;
                    (0,
                    e.updatePagination)({
                        itemHeight: t,
                        bufferCount: n,
                        scrollTop: r
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t, n, r, o, a, i, l = this.props.data, c = l.itemTotalCount, s = l.rows, u = (null === (t = this.props) || void 0 === t ? void 0 : t.selectedFolderPath) !== (null === e || void 0 === e ? void 0 : e.selectedFolderPath);
                    c < (null === e || void 0 === e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : n.itemTotalCount) && void 0 !== c && v.UhU.isDesktop && null != this.listComponent && !u && ((0,
                    wr.we)("[class*=ow-icon]", c, this.listComponent, null === e || void 0 === e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : r.itemTotalCount),
                    (0 === c && (null === e || void 0 === e ? void 0 : null === (o = e.data) || void 0 === o ? void 0 : o.itemTotalCount) <= 2 || 1 === (null === s || void 0 === s ? void 0 : null === (a = s.data) || void 0 === a ? void 0 : a.length) && 1 === (null === s || void 0 === s ? void 0 : null === (i = s.data) || void 0 === i ? void 0 : i.adid)) && (0,
                    wr.kW)(".ow-ResponsiveToolbar"))
                }
            }, {
                key: "getCollapseSectionY",
                value: function(e, t) {
                    var n = e.top
                      , r = t.expandedHeight
                      , o = t.collapsedHeight
                      , a = t.expandedTop
                      , i = void 0 === a ? 0 : a
                      , l = t.collapsingExpanded
                      , c = t.deltaY
                      , s = this.props
                      , u = s.scrollTop
                      , d = s.motionConfig
                      , f = s.data
                      , p = f.expanded
                      , m = f.collapsing
                      , h = qr(qr({}, d), {}, {
                        precision: .5
                    });
                    if (!p && !m)
                        return n;
                    if (!p || m)
                        return (0,
                        B.ST)(n, h);
                    var y = 0;
                    return y = c > 0 ? Math.round((r - o) * Math.abs(c) / (i - u)) : Math.round((r - o) * Math.abs(c) / (r - o - (i - u))),
                    l ? n < i ? n : n - y : n <= i ? n : (0,
                    B.ST)(n - y, h)
                }
            }, {
                key: "getCollapseY",
                value: function(e, t) {
                    var n = e.index
                      , r = e.clientRect
                      , o = r.top
                      , a = r.height
                      , i = r.collapsedHeight
                      , l = r.expandedHeight
                      , c = t.expandedIndex
                      , s = t.expandedTop
                      , u = void 0 === s ? 0 : s
                      , d = t.deltaY
                      , f = t.collapsingExpanded
                      , p = t.expanded
                      , m = this.props
                      , h = m.viewportStartIndex
                      , y = m.viewportEndIndex
                      , b = m.scrollTop
                      , v = m.listHeight
                      , g = m.motionConfig
                      , w = m.data
                      , E = w.collapsing
                      , S = w.expanded
                      , T = qr(qr({}, g), {}, {
                        precision: .5
                    });
                    if (!S && !E)
                        return n < h || n > y ? o : (0,
                        B.ST)(o, T);
                    if (!S || E)
                        return n < h || n > y ? o : (0,
                        B.ST)(o, T);
                    var O = 0;
                    return O = d > 0 ? Math.round((l - i) * Math.abs(d)) / (u - b) : Math.round((l - i) * Math.abs(d)) / (l - i - u + b),
                    f ? n <= c ? o : o - O : n <= c ? o : p ? n > c + Math.ceil((v - (u - b)) / a) ? o : (0,
                    B.ST)(o, T) : n > c + Math.ceil((v - (u - b)) / a) ? o - O : (0,
                    B.ST)(o - O, T)
                }
            }, {
                key: "getCollapseScrollTop",
                value: function(e, t) {
                    var n = t.expandedTop
                      , r = t.deltaY
                      , o = t.collapsingExpanded
                      , a = t.expanded
                      , i = this.props
                      , l = i.scrollTop
                      , c = i.motionConfig
                      , s = i.listHeight
                      , u = i.data
                      , d = u.collapsing
                      , f = u.expanded
                      , p = u.collapsedHeight
                      , m = qr(qr({}, c), {}, {
                        precision: .01
                    });
                    if (!f || d)
                        return d ? (0,
                        B.ST)(l, m) : l;
                    var h = 0;
                    if (r > 0)
                        h = n - Math.abs(r);
                    else {
                        var y = n - l;
                        h = Math.round(n - y * (Math.abs(r) / (s - y - p)))
                    }
                    if (o)
                        return h;
                    var b = a ? n : l;
                    return (0,
                    B.ST)(b, m)
                }
            }, {
                key: "getCollapseHeight",
                value: function(e, t) {
                    var n = e.expanded
                      , r = e.clientRect
                      , o = r.height
                      , a = r.collapsedHeight
                      , i = r.expandedHeight
                      , l = t.collapsingPercentage
                      , c = t.collapsingExpanded
                      , s = t.expanded
                      , u = this.props
                      , d = u.motionConfig
                      , f = u.data.collapsing
                      , p = qr(qr({}, d), {}, {
                        precision: .5
                    })
                      , m = Math.round((i - a) * l);
                    return c ? n ? m + a : o : n ? (0,
                    B.ST)(s && !f ? i : a, p) : o
                }
            }, {
                key: "getCollapseShadow",
                value: function(e, t) {
                    var n = e.expanded
                      , r = t.collapsingPercentage
                      , o = t.collapsingExpanded
                      , a = t.expanded
                      , i = qr(qr({}, this.props.motionConfig), {}, {
                        precision: .5
                    });
                    return o ? n ? r : 0 : n ? (0,
                    B.ST)(a ? 0 : 1, i) : 1
                }
            }, {
                key: "getCollapseOpacity",
                value: function(e, t) {
                    var n = t.collapsingPercentage
                      , r = t.collapsingExpanded
                      , o = t.expanded
                      , a = this.props
                      , i = a.motionConfig
                      , l = a.data.collapsing;
                    if (!o)
                        return 0;
                    var c = qr(qr({}, i), {}, {
                        precision: .5
                    });
                    return r ? n : l ? (0,
                    B.ST)(0, c) : (0,
                    B.ST)(1, c)
                }
            }, {
                key: "getDefaultStyles",
                value: function(e, t, n) {
                    return this.getMotionStyles(e, t, n, !0)
                }
            }, {
                key: "getMotionStyles",
                value: function(e, t, n) {
                    var r = this
                      , o = n.expanded
                      , a = n.collapsingExpanded
                      , i = n.deltaY
                      , l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , c = this.props
                      , s = c.scrollTop
                      , u = c.data
                      , d = c.motionConfig
                      , f = u.rows.slice(e, t + 1)
                      , p = u.expandedIndex
                      , m = u.expandedTop
                      , h = u.expandedHeight
                      , y = u.collapsedHeight
                      , b = u.sections
                      , v = 0;
                    v = i > 0 ? 1 - Math.abs(i) / (m - s) : 1 - Math.abs(i) / (h - y - (m - s)),
                    v = Math.round(100 * v) / 100;
                    var g = f.map(function(e) {
                        var t = e.clientRect
                          , n = t.top
                          , c = void 0 === n ? 0 : n
                          , u = t.left
                          , f = void 0 === u ? 0 : u
                          , h = t.height;
                        return {
                            key: r.getItemKey(e),
                            data: e,
                            style: {
                                ty: c,
                                th: h,
                                x: l || a ? f : (0,
                                B.ST)(f, d),
                                y: l ? c : r.getCollapseY(e, {
                                    expandedIndex: p,
                                    expandedTop: m,
                                    deltaY: i,
                                    expanded: o,
                                    collapsingExpanded: a
                                }),
                                height: l ? h : r.getCollapseHeight(e, {
                                    collapsingPercentage: v,
                                    collapsingExpanded: a,
                                    expanded: o,
                                    deltaY: i,
                                    expandedTop: m
                                }),
                                opacity: l ? 1 : r.getCollapseOpacity(e, {
                                    collapsingPercentage: v,
                                    collapsingExpanded: a,
                                    expanded: o
                                }),
                                shadow: l ? 100 : r.getCollapseShadow(e, {
                                    collapsingPercentage: v,
                                    collapsingExpanded: a,
                                    expanded: o
                                }),
                                scrollTop: l ? s : r.getCollapseScrollTop(e, {
                                    expandedTop: m,
                                    deltaY: i,
                                    collapsingExpanded: a,
                                    expanded: o
                                })
                            }
                        }
                    })
                      , w = b.map(function(e) {
                        var t = e.top
                          , n = void 0 === t ? 0 : t
                          , c = e.left
                          , s = void 0 === c ? 0 : c
                          , u = e.height
                          , f = e.index;
                        return {
                            key: "sec_".concat(f),
                            data: e,
                            style: {
                                ty: n,
                                x: l || a ? s : (0,
                                B.ST)(s, d),
                                y: l ? n : r.getCollapseSectionY(e, {
                                    expandedHeight: h,
                                    collapsedHeight: y,
                                    expandedTop: m,
                                    deltaY: i,
                                    collapsingPercentage: v
                                }),
                                height: u,
                                opacity: l ? 1 : r.getCollapseOpacity(e, {
                                    collapsingPercentage: v,
                                    collapsingExpanded: a,
                                    expanded: o
                                })
                            }
                        }
                    });
                    return g.concat(w)
                }
            }, {
                key: "getLeaveMotionStyle",
                value: function(e) {
                    var t = e.data;
                    if (!t.clientRect)
                        return {
                            x: 0,
                            y: t.top,
                            height: t.height,
                            opacity: 0
                        };
                    var n = t.index
                      , r = t.data
                      , o = t.clientRect
                      , a = o.height
                      , i = o.top
                      , l = this.props
                      , c = l.motionConfig
                      , s = l.viewportStartIndex
                      , u = l.viewportEndIndex;
                    return !r || n < s || n > u ? null : {
                        x: 0,
                        y: i,
                        height: a,
                        shadow: 100,
                        scrollTop: 0,
                        opacity: r && n >= s && n <= u ? (0,
                        B.ST)(.2, c) : 0,
                        leaving: 1
                    }
                }
            }, {
                key: "getItemKey",
                value: function(e) {
                    var t = e.index
                      , n = e.data;
                    return n ? "".concat((0,
                    Br.IA)(n.uid, n.folderPath), "_").concat(t) : "iw_".concat(t)
                }
            }, {
                key: "itemWrapperClass",
                value: function(e) {
                    return (0,
                    this.props.isItemSelected)(e) ? "ow-VirtualizedList-item-selected" : ""
                }
            }, {
                key: "renderSection",
                value: function(e) {
                    return r.createElement("span", {
                        className: "ow-mail-MailSummaryListItem-section-label",
                        role: be.HB.HEADING,
                        "aria-level": be.DU.H4,
                        "aria-label": null === e || void 0 === e ? void 0 : e.label
                    }, e.label)
                }
            }, {
                key: "renderItem",
                value: function(e, t) {
                    var n = this.props
                      , o = n.ItemComponent
                      , a = Vr(n, Ur);
                    return r.createElement(o, Zr({}, a, {
                        rowData: e,
                        listComponent: t
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , o = t.updatePagination
                      , a = t.isFetching
                      , i = t.onRefresh
                      , l = n.expanded;
                    return r.createElement(Fr.Z, {
                        className: "ow-mail-AutoSizer",
                        disableWidth: !0,
                        onResize: function(e) {
                            var t = e.height;
                            o({
                                listHeight: t
                            }, {
                                resizing: !0
                            })
                        }
                    }, function(t) {
                        var o = t.height;
                        return 0 === o ? r.createElement("div", null) : a || n && 0 !== n.itemTotalCount ? [r.createElement(Lr.JZ, Zr({
                            animation: !0,
                            className: "ow-mail-MailSummaryList",
                            renderItem: e.renderItem,
                            itemWrapperClass: e.itemWrapperClass,
                            renderSection: e.renderSection,
                            getMotionStyles: e.getMotionStyles,
                            getDefaultStyles: e.getDefaultStyles,
                            getItemKey: e.getItemKey
                        }, e.props, {
                            ref: function(t) {
                                e.listComponent = t
                            }
                        })), r.createElement(xr.Z, {
                            show: a,
                            onSwipeEnd: function() {
                                i()
                            },
                            list: function() {
                                return l ? null : e.listComponent && e.listComponent.scrollContainer
                            }
                        })] : [r.createElement("div", {
                            role: be.HB.PRESENTATION,
                            className: "ow-mail-MailSummaryList-tooltip",
                            style: {
                                height: "".concat(o, "px")
                            },
                            ref: function(t) {
                                e.emptyList = t
                            }
                        }, r.createElement("span", null, e.props.selectedFolderPathType ? (0,
                        f.t)("mail.listView.EMPTY_MAIL_LIST") : e.props.selectedFolderPath !== be.YX.INBOX ? (0,
                        f.t)("mail.listView.EMPTY_MAIL_LIST") : "")), r.createElement(xr.Z, {
                            show: a,
                            onSwipeEnd: function() {
                                i()
                            },
                            list: function() {
                                return l ? null : e.emptyList
                            }
                        })]
                    })
                }
            }]),
            n
        }();
        Qr.defaultProps = {
            data: {
                rows: [],
                totalHeight: 0,
                itemTotalCount: 0
            },
            ItemComponent: void 0,
            itemHeight: (0,
            he.Z)("advertisement.inline") && (0,
            he.Z)("advertisement.rightViewAdHeight") ? (0,
            he.Z)("advertisement.rightViewAdHeight") : (0,
            he.Z)("mail.enableMessagePreview") ? (0,
            he.Z)("mail.rightViewListHeight") : 70,
            listHeight: 0,
            bufferCount: 40,
            sectionHeaderHeight: 40,
            scrollTop: 0,
            selectedInfo: [],
            renderStartIndex: 0,
            renderEndIndex: 0,
            isFetching: !1,
            showFolder: !0,
            viewportStartIndex: 0,
            viewportEndIndex: 0,
            onSelectChange: function() {},
            updatePagination: function() {},
            isItemSelected: function() {},
            shouldComponentUpdateOverwrite: function() {},
            folderDisplay: function() {},
            onPinToggle: function() {},
            onMarkAsRead: function() {},
            onMarkAsUnread: function() {},
            onMarkAsFlag: function() {},
            onClearFlag: function() {},
            onDelete: function() {},
            onReply: function() {},
            onRefresh: function() {},
            motionConfig: {
                stiffness: 250,
                damping: 25,
                precision: .5
            }
        },
        Qr.propTypes = {
            ItemComponent: a().func,
            data: a().shape({
                rows: a().arrayOf(a().object),
                totalHeight: a().number,
                itemTotalCount: a().number
            }),
            itemHeight: a().number,
            listHeight: a().number,
            bufferCount: a().number,
            scrollTop: a().number,
            sectionHeaderHeight: a().number,
            renderStartIndex: a().number,
            renderEndIndex: a().number,
            isFetching: a().bool,
            showFolder: a().bool,
            viewportStartIndex: a().number,
            viewportEndIndex: a().number,
            selectedInfo: a().arrayOf(a().oneOfType([a().number, a().string])),
            fetchMailSummaryList: a().func.isRequired,
            onSelectChange: a().func,
            updatePagination: a().func,
            isItemSelected: a().func,
            shouldComponentUpdateOverwrite: a().func,
            folderDisplay: a().func,
            onPinToggle: a().func,
            onMarkAsRead: a().func,
            onMarkAsUnread: a().func,
            onMarkAsFlag: a().func,
            onClearFlag: a().func,
            onDelete: a().func,
            onReply: a().func,
            onRefresh: a().func,
            motionConfig: a().shape({
                stiffness: a().number,
                damping: a().number
            })
        };
        var eo = n(41773)
          , to = n(230)
          , no = n(66067)
          , ro = n(52566);
        function oo(e) {
            "@babel/helpers - typeof";
            return (oo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ao(e, t) {
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
        function io(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== oo(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== oo(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === oo(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var lo = v.UhU.isDesktop
          , co = v.UhU.isMobile
          , so = v.UhU.isTablet
          , uo = function(e) {
            var t = (0,
            m.F9)(e)
              , n = (0,
            Cr.n$)(e)
              , r = (0,
            m.GK)(e)
              , o = (0,
            no.b7)(e)
              , a = o.scrollTop
              , i = o.listHeight
              , l = o.renderData
              , c = o.visibleStartIndex
              , s = o.visibleEndIndex
              , u = o.viewportStartIndex
              , d = o.viewportEndIndex
              , p = o.forceRenderingMark
              , h = o.headerWidths
              , y = o.selectMode
              , b = (0,
            no.uf)(e)
              , g = (0,
            k.KQ)(e)
              , w = (0,
            no.sE)(e)
              , E = be.bF === (0,
            no.nE)(e)
              , S = (0,
            ro.EQ)(e)
              , T = (0,
            k.a0)(e)
              , C = (0,
            Cr.EM)(e)
              , P = (0,
            ro.i3)(e)
              , A = (0,
            R.iX)(e)
              , I = (0,
            R.gQ)(e)
              , N = (0,
            R.lk)(e)
              , D = (0,
            Ar.qI)("")(e)
              , M = (0,
            k.bt)(e)
              , _ = (0,
            no.f1)(e)
              , j = (0,
            m.F9)(e)
              , L = "long" === (0,
            k.Tv)(e)
              , F = "true" === (0,
            k.jm)(e)
              , x = (0,
            O.iZ)(e)
              , B = (0,
            O.a_)(e)
              , H = (0,
            v.VTK)(r, x, b)
              , U = (0,
            m.hL)(e).email
              , Z = (0,
            k.Tv)(e)
              , V = (0,
            Tr.YQ)(e)
              , K = (0,
            R.gQ)(e);
            return {
                sort: b,
                accountId: t,
                showPin: H,
                selectedInfo: w,
                data: l,
                scrollTop: a,
                listHeight: i,
                visibleStartIndex: c,
                visibleEndIndex: s,
                viewportStartIndex: u,
                viewportEndIndex: d,
                isItemSelected: function(e) {
                    return !(!e || !e.data) && w.filter(function(t) {
                        var n = t.uid
                          , r = t.folderPath;
                        return e.data.uid === n && e.data.folderPath === r
                    }).length > 0
                },
                shouldComponentUpdateOverwrite: function(e, t) {
                    var n, r, o, a, i, l;
                    if (co && !y && !t.data.expanded && 1 === t.selectedInfo.length)
                        return !1;
                    var c = e.renderedStart
                      , s = e.renderedEnd;
                    return !(!(e.data.dataSignature !== t.data.dataSignature || e.showPin && e.data.pinLen !== t.data.pinLen || e.data && (!1 === e.data.expanded && !0 === t.data.expanded || e.data.collapsing !== t.data.collapsing) || e.selectMode !== t.selectMode || t.viewportStartIndex >= 0 && t.viewportStartIndex < c || s >= 0 && t.viewportEndIndex > s || e.isFetching !== t.isFetching || lo && e.listHeight !== t.listHeight || e.listWidth !== t.listWidth) && (!y && !so || e.selectedInfo.length === t.selectedInfo.length && e.selectedInfo.every(function(e, n) {
                        var r = e.uid
                          , o = e.folderPath;
                        return r === t.selectedInfo[n].uid && o === t.selectedInfo[n].folderPath
                    })) && e.data.rows.length === t.data.rows.length && e.data.totalHeight === t.data.totalHeight && e.useLongTime === t.useLongTime && e.use24HrFormat === t.use24HrFormat && e.showAvatar === t.showAvatar && e.manageShowAvatar === t.manageShowAvatar && e.avatarData === t.avatarData && (null === (n = e.selectedTag) || void 0 === n ? void 0 : n.name) === (null === (r = t.selectedTag) || void 0 === r ? void 0 : r.name) && (null === (o = e.selectedTag) || void 0 === o ? void 0 : o.color) === (null === (a = t.selectedTag) || void 0 === a ? void 0 : a.color) && (null === (i = e.tagsList) || void 0 === i ? void 0 : i.length) === (null === (l = t.tagsList) || void 0 === l ? void 0 : l.length) && e.tagUpdateReq === t.tagUpdateReq)
                },
                isFetching: E,
                showFolder: S,
                tagFolder: P,
                tagList: I,
                tagUpdateReq: N,
                isThreadMode: g,
                folderDisplay: function(t) {
                    var n = (0,
                    O.hD)(t)(e);
                    return n && (0,
                    f.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(n)) || t
                },
                forceRenderingMark: p,
                opened: D,
                showAvatar: M,
                manageShowAvatar: j,
                avatarData: _,
                email: U,
                categoryEnabled: T,
                selectMode: y,
                headerWidths: h,
                useLongTime: L,
                use24HrFormat: F,
                selectedFolderPath: B,
                isComposeOpen: n,
                timeDisplayFormat: Z,
                layout: V,
                selectedTag: A,
                getItemKey: function(e) {
                    var t = e.index
                      , n = e.data;
                    return n && n.uid && (0,
                    Br.IA)(n.uid, n.folderPath) || String(t)
                },
                selectedFolderPathType: x,
                cancelSendInProgress: C,
                tagsList: K
            }
        }
          , fo = function(e) {
            return function(t) {
                return {
                    dispatch: t,
                    onSelectViewPort: function() {
                        return t((0,
                        eo.ge)())
                    },
                    onSortChange: function(e, n) {
                        return t((0,
                        eo.wX)(e, n))
                    },
                    onSelectChange: function(n, r) {
                        r.trigger === be.rW.DBCLICK ? Object.assign(r, {
                            param: e()
                        }) : Object.assign(r, {
                            param: {}
                        }),
                        n && n.data && t((0,
                        eo.RL)([n.data], r))
                    },
                    updatePagination: function(e, n) {
                        return t((0,
                        eo.fE)(e, n))
                    },
                    onPinToggle: function(e) {
                        return t((0,
                        eo.Yw)(e))
                    },
                    onMarkAsRead: function(e) {
                        t((0,
                        to.t8)([e], !0))
                    },
                    onMarkAsUnread: function(e) {
                        t((0,
                        to.t8)([e], !1))
                    },
                    onMarkAsFlag: function(e) {
                        t((0,
                        to.W5)([e], !0))
                    },
                    onClearFlag: function(e) {
                        t((0,
                        to.W5)([e], !1))
                    },
                    onDelete: function(e, n) {
                        t((0,
                        to.xw)({
                            summaries: [e],
                            actionSource: be.FX.FLOATING_TOOLBAR
                        }, n))
                    },
                    onReply: function(e) {
                        t((0,
                        Pr.U4)(e))
                    },
                    onMarkAsSpam: function(e) {
                        t((0,
                        to.XL)([e], !0))
                    },
                    onMarkAsPhishing: function(e) {
                        t((0,
                        to.ch)([e], !0))
                    },
                    onMarkAsNotSpam: function(e) {
                        t((0,
                        to.XL)([e], !1))
                    },
                    toggleSelectMode: function(e) {
                        t((0,
                        eo.jZ)(e))
                    },
                    onFinishedCollapsing: function() {
                        t((0,
                        eo.RL)([], {
                            trigger: be.rW.MOBILE_SWIPE_VERTICAL
                        }))
                    },
                    onBeginCollapsing: function() {
                        t((0,
                        eo.fE)({
                            collapsing: !0
                        }))
                    },
                    onRefresh: function() {
                        t((0,
                        eo.jK)())
                    },
                    onGetAvatar: (0,
                    gr.DE)(w.getContactAvatar, t)
                }
            }
        }
          , po = function(e, t, n) {
            var r = vr()(e)
              , o = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ao(Object(n), !0).forEach(function(t) {
                        io(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ao(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, vr()(t, ["dispatch"]));
            return Object.assign({}, n, r, o)
        }
          , mo = n(68115)
          , ho = function(e) {
            return (0,
            i.$j)(uo, fo(e), po)
        }(function() {
            return mo.default
        })(Qr)
          , yo = function(e) {
            return (0,
            i.$j)(uo, fo(e), po)
        }(function() {
            return mo.default
        })(jr.Z)
          , bo = n(80357)
          , vo = n.n(bo)
          , go = n(20040)
          , wo = n.n(go);
        function Eo(e) {
            "@babel/helpers - typeof";
            return (Eo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function So(e, t) {
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
        function To(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? So(Object(n), !0).forEach(function(t) {
                    Oo(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : So(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function Oo(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Eo(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Eo(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Eo(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var Co = (0,
        i.$j)(function(e) {
            return {
                sort: (0,
                no.uf)(e),
                accountId: (0,
                m.F9)(e)
            }
        }, function(e) {
            return {
                onChange: function() {
                    return e(eo.wX.apply(void 0, arguments))
                }
            }
        }, function(e, t, n) {
            return To(To(To(To({}, e), t), n), {}, {
                onChange: function() {
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                        r[o] = arguments[o];
                    return t.onChange.apply(t, r.concat([e.accountId]))
                }
            })
        });
        function Po(e) {
            "@babel/helpers - typeof";
            return (Po = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ao(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Ro(r.key), r)
            }
        }
        function Ro(e) {
            var t = function(e, t) {
                if ("object" !== Po(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Po(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Po(t) ? t : String(t)
        }
        function ko(e, t) {
            return (ko = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Io(e) {
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
                var n, r = Do(e);
                if (t) {
                    var o = Do(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Po(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return No(e)
                }(this, n)
            }
        }
        function No(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Do(e) {
            return (Do = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Mo = be.u0.SORT_DATE_ASC
          , _o = be.u0.SORT_DATE_DESC
          , jo = be.u0.SORT_FROM_ASC
          , Lo = be.u0.SORT_FROM_DESC
          , Fo = be.u0.SORT_TO_ASC
          , xo = be.u0.SORT_TO_DESC
          , Bo = be.u0.SORT_SUBJECT_ASC
          , Ho = be.u0.SORT_SUBJECT_DESC
          , Uo = be.u0.SORT_UNREAD_ASC
          , Zo = be.u0.SORT_UNREAD_DESC
          , Vo = be.u0.SORT_PRIORITY_ASC
          , Ko = be.u0.SORT_PRIORITY_DESC
          , qo = be.u0.SORT_FLAG_ASC
          , Yo = be.u0.SORT_FLAG_DESC
          , Go = be.u0.SORT_SIZE_ASC
          , Wo = be.u0.SORT_SIZE_DESC
          , Xo = function(e) {
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
                t && ko(e, t)
            }(n, r.PureComponent);
            var t = Io(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).handleFieldSelect = r.handleFieldSelect.bind(No(r)),
                r.handleUnreadFilter = r.handleUnreadFilter.bind(No(r)),
                r
            }
            return function(e, t, n) {
                t && Ao(e.prototype, t),
                n && Ao(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "getSortFields",
                value: function() {
                    var e = this.props.folderSelectPathType
                      , t = !e || -1 === e.toLowerCase().indexOf(be.S.SENT) && -1 === e.toLowerCase().indexOf(be.S.DRAFT) ? {
                        id: "SORT_FROM",
                        ascKey: jo,
                        descKey: Lo,
                        text: (0,
                        f.t)("mail.listView.HEADER_SENDER"),
                        defaultDirection: "asc"
                    } : {
                        id: "SORT_TO",
                        ascKey: Fo,
                        descKey: xo,
                        text: (0,
                        f.t)("mail.listView.HEADER_RECIPIENT"),
                        defaultDirection: "asc"
                    }
                      , n = (0,
                    he.Z)("mail.sortFields")
                      , r = {
                        date: {
                            id: "SORT_DATE",
                            ascKey: Mo,
                            descKey: _o,
                            text: (0,
                            f.t)("mail.listView.HEADER_DATE"),
                            defaultDirection: "desc"
                        },
                        toFrom: t,
                        subject: {
                            id: "SORT_SUBJECT",
                            ascKey: Bo,
                            descKey: Ho,
                            text: (0,
                            f.t)("mail.listView.HEADER_SUBJECT"),
                            defaultDirection: "asc"
                        },
                        priority: {
                            id: "SORT_PRIORITY",
                            ascKey: Ko,
                            descKey: Vo,
                            text: (0,
                            f.t)("mail.listView.HEADER_PRIORITY"),
                            defaultDirection: "desc"
                        },
                        flag: {
                            id: "SORT_FLAG",
                            ascKey: qo,
                            descKey: Yo,
                            text: (0,
                            f.t)("mail.listView.HEADER_FLAG"),
                            defaultDirection: "desc"
                        },
                        size: {
                            id: "SORT_SIZE",
                            ascKey: Go,
                            descKey: Wo,
                            text: (0,
                            f.t)("mail.listView.SORTBY_SIZE"),
                            defaultDirection: "desc"
                        }
                    }
                      , o = [];
                    return n.map(function(e) {
                        o.push(r[e])
                    }),
                    o
                }
            }, {
                key: "getFieldBySortKey",
                value: function(e) {
                    return this.getSortFields().filter(function(t) {
                        var n = t.ascKey
                          , r = t.optionalAscKey
                          , o = t.descKey
                          , a = t.optionalDescKey;
                        return e === n || e === r || e === o || e === a
                    })[0]
                }
            }, {
                key: "handleFieldSelect",
                value: function(e) {
                    var t = e.ascKey
                      , n = e.optionalAscKey
                      , r = e.descKey
                      , o = e.optionalDescKey
                      , a = e.defaultDirection
                      , i = this.props
                      , l = i.sort;
                    (0,
                    i.onChange)((t === l || n === l) && r || (r === l || o === l) && t || ("desc" === a ? r : t))
                }
            }, {
                key: "handleUnreadFilter",
                value: function(e, t, n) {
                    var r = this.props;
                    r.sort;
                    (0,
                    r.onChange)("desc" === n ? e : t)
                }
            }, {
                key: "renderMenuItems",
                value: function() {
                    var e = this.props.sort;
                    return this.getSortFields().map(function(t) {
                        var n = (e === t.ascKey || e === t.optionalAscKey) && r.createElement(L.Z, {
                            name: "up-thin",
                            className: "mail-MailSummaryListSortBtn-asc"
                        }) || (e === t.descKey || e === t.optionalDescKey) && r.createElement(L.Z, {
                            name: "down-thin",
                            className: "mail-MailSummaryListSortBtn-desc"
                        });
                        return r.createElement(wo(), {
                            key: t.id,
                            eventKey: t
                        }, n, r.createElement("span", {
                            className: "mail-MailSummaryListSortBtn-item-label",
                            "aria-label": null === t || void 0 === t ? void 0 : t.text
                        }, t.text))
                    })
                }
            }, {
                key: "renderUnreadSort",
                value: function() {
                    var e = this
                      , t = this.props.sort
                      , n = r.createElement(_.Z, {
                        onClick: function() {
                            e.handleUnreadFilter(Uo, Zo, "asc")
                        },
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("mail.listView.SORT_UNREAD")
                    }, r.createElement(L.Z, {
                        name: "filter-line",
                        title: (0,
                        f.t)("mail.listView.SORT_UNREAD")
                    }));
                    return "SORT_UNREAD_DESC" === t && (n = r.createElement(_.Z, {
                        onClick: function() {
                            e.handleUnreadFilter(Uo, Zo, "desc")
                        },
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("mail.listView.SORT_READ")
                    }, r.createElement(L.Z, {
                        name: "filter-line-blue",
                        title: (0,
                        f.t)("mail.listView.SORT_READ")
                    }))),
                    r.createElement(r.Fragment, null, " ", (0,
                    he.Z)("mail.sortUnread") && n, " ")
                }
            }, {
                key: "render",
                value: function() {
                    return r.createElement(r.Fragment, null, r.createElement(vo(), {
                        pullRight: !0,
                        title: (0,
                        f.t)("mail.listView.SORT"),
                        onSelect: this.handleFieldSelect
                    }, r.createElement(vo().Toggle, {
                        noCaret: !0,
                        bsStyle: "default"
                    }, r.createElement(L.Z, {
                        name: "sort",
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("mail.listView.SORT")
                    })), r.createElement(vo().Menu, {
                        className: "super-colors"
                    }, r.createElement("div", {
                        className: "ow-MenuItem dropdown-header",
                        "aria-label": (0,
                        f.t)("tasks.tasklist.menu.SORT_TITLE")
                    }, (0,
                    f.t)("tasks.tasklist.menu.SORT_TITLE")), this.renderMenuItems())), this.renderUnreadSort())
                }
            }]),
            n
        }();
        Xo.defaultProps = {
            sort: null,
            onChange: function() {}
        },
        Xo.propTypes = {
            sort: a().string,
            onChange: a().func
        };
        var zo = Co(Xo)
          , Jo = n(49758)
          , $o = n.n(Jo);
        function Qo(e) {
            "@babel/helpers - typeof";
            return (Qo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ea(e, t) {
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
        function ta(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ea(Object(n), !0).forEach(function(t) {
                    na(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ea(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function na(e, t, n) {
            return (t = oa(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function ra(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, oa(r.key), r)
            }
        }
        function oa(e) {
            var t = function(e, t) {
                if ("object" !== Qo(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Qo(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Qo(t) ? t : String(t)
        }
        function aa(e, t) {
            return (aa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function ia(e) {
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
                var n, r = ca(e);
                if (t) {
                    var o = ca(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Qo(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return la(e)
                }(this, n)
            }
        }
        function la(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ca(e) {
            return (ca = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var sa = be.DJ.PREVIEW_NONE
          , ua = be.DJ.PREVIEW_BELOW
          , da = be.DJ.ATTACHMENT_VIEW
          , fa = be.u0.SORT_UNREAD_ASC
          , pa = be.u0.SORT_UNREAD_DESC
          , ma = function(e) {
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
                t && aa(e, t)
            }(n, r.PureComponent);
            var t = ia(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).updateSelector = r.updateSelector.bind(la(r)),
                r.clearField = r.clearField.bind(la(r)),
                r.handleUnreadFilter = r.handleUnreadFilter.bind(la(r)),
                r
            }
            return function(e, t, n) {
                t && ra(e.prototype, t),
                n && ra(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    this.updateSelector()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this.props.fromFolderPath;
                    this.updateSelector(),
                    e && (this.lastFolderPath = e)
                }
            }, {
                key: "clearField",
                value: function() {
                    var e = this.props;
                    (0,
                    e.onSelectFolder)(e.accountId, this.props.fromFolderPath)
                }
            }, {
                key: "updateSelector",
                value: function() {
                    if (this.category) {
                        var e = this.category.querySelector(".ow-mail-MailSummaryListToolbar-category-selected")
                          , t = this.category.getBoundingClientRect()
                          , n = t.x
                          , r = t.height
                          , o = e.getBoundingClientRect()
                          , a = o.x
                          , i = o.width
                          , l = this.selector.getBoundingClientRect()
                          , c = l.height
                          , s = l.width;
                        this.selector.style.left = "".concat(a - n + (i - s) / 2, "px"),
                        this.selector.style.top = "".concat(r - c, "px")
                    }
                }
            }, {
                key: "handleUnreadFilter",
                value: function(e, t, n) {
                    (0,
                    this.props.onSort)("desc" === n ? e : t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.title
                      , o = t.showExit
                      , a = t.onCategory
                      , i = t.selectedCategory
                      , l = t.selectedFolderPath
                      , c = t.mobileViewMode
                      , s = t.enableMessageCategories
                      , u = t.selectedLayout
                      , d = t.sort
                      , p = r.createElement(_.Z, {
                        onClick: function() {
                            e.handleUnreadFilter(fa, pa, "asc")
                        },
                        className: "ow-unread-sort-button",
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("mail.listView.SORT_UNREAD")
                    }, r.createElement(L.Z, {
                        name: "filter-line",
                        title: (0,
                        f.t)("mail.listView.SORT_UNREAD")
                    }));
                    return d === pa && (p = r.createElement(_.Z, {
                        onClick: function() {
                            e.handleUnreadFilter(fa, pa, "desc")
                        },
                        className: "ow-unread-sort-button",
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("mail.listView.SORT_READ")
                    }, r.createElement(L.Z, {
                        name: "filter-line-blue",
                        title: (0,
                        f.t)("mail.listView.SORT_READ")
                    }))),
                    s && i && !(c === da) ? r.createElement("div", {
                        className: "ow-mail-MailSummaryListToolbar-categories",
                        ref: function(t) {
                            e.category = t
                        }
                    }, be.aA.map(function(e) {
                        return r.createElement("span", {
                            key: e.path,
                            className: "ow-mail-MailSummaryListToolbar-category ".concat(i.path === e.path ? "ow-mail-MailSummaryListToolbar-category-selected" : ""),
                            onClick: function() {
                                a(ta(ta({}, e), {}, {
                                    folderPath: l
                                }))
                            },
                            role: be.HB.PRESENTATION,
                            tabIndex: 0,
                            onKeyDown: function(t) {
                                return t.key === be.BY.ENTERKEY && a(ta(ta({}, e), {}, {
                                    folderPath: l
                                }))
                            }
                        }, (0,
                        f.t)("mail.folder.CATEGORY_FOLDER_DISPLAY[".concat(e.name, "]")))
                    }), (0,
                    he.Z)("mail.sortUnread") && (u === sa || u === ua) && p, r.createElement("div", {
                        className: "ow-category-selector",
                        ref: function(t) {
                            e.selector = t
                        }
                    }, r.createElement("div", {
                        className: "ow-category-selector-inner"
                    }))) : r.createElement(r.Fragment, null, r.createElement("div", {
                        className: "ow-mail-MailSummaryListToolbar-header",
                        role: be.HB.HEADING,
                        "aria-label": n,
                        "aria-level": be.DU.H3
                    }, r.createElement("span", {
                        className: "ow-mail-MailSummaryListToolbar-title",
                        title: n
                    }, o && r.createElement(_.Z, {
                        iconName: "exit",
                        onClick: function(t) {
                            return e.clearField(t)
                        },
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("mail.search.EXIT_SEARCH")
                    }, (0,
                    f.t)("mail.search.EXIT_SEARCH")), n), (0,
                    he.Z)("mail.sortUnread") && (u === sa || u === ua) && p))
                }
            }]),
            n
        }();
        ma.defaultProps = {
            title: "",
            showExit: !1,
            selectedCategory: null,
            mobileViewMode: "",
            selectedFolderPath: null,
            enableMessageCategories: !1,
            onCategory: function() {},
            fromFolderPath: "",
            onSelectFolder: function() {},
            accountId: "",
            onSort: function() {}
        },
        ma.propTypes = {
            title: a().string,
            showExit: a().bool,
            selectedCategory: a().shape(a().object),
            enableMessageCategories: a().bool,
            selectedFolderPath: a().string,
            mobileViewMode: a().string,
            onCategory: a().func,
            fromFolderPath: a().string,
            onSelectFolder: a().func,
            accountId: a().string,
            onSort: a().func
        };
        var ha = ["selectedCount", "selectedLayout", "onSelectViewPort", "categoryEnabled"];
        function ya(e, t) {
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
        var ba = be.DJ.PREVIEW_RIGHT
          , va = be.DJ.ATTACHMENT_VIEW
          , ga = function(e) {
            var t, n = e.selectedCount, o = e.selectedLayout, a = e.onSelectViewPort, i = e.categoryEnabled;
            ya(e, ha);
            return t = n > 0 ? n < 100 ? n : "..." : " ",
            r.createElement("div", {
                className: "ow-mail-MailSummaryListToolbar"
            }, r.createElement("div", {
                className: "ow-mail-MailSummaryListToolbar-checkbox-wrapper"
            }, r.createElement($o(), {
                className: n > 0 ? "ow-mail-MailSummaryListHeader-selectCount" : "ow-mail-MailSummaryListHeader-selectCount-0",
                onClick: function() {
                    return a()
                },
                title: (0,
                f.t)("mail.listView.tooltips.SELECT_IN_VIEW"),
                tabIndex: 0,
                onKeyDown: function(e) {
                    e.key === be.BY.ENTERKEY && a()
                },
                role: be.HB.CHECKBOX,
                "aria-label": 0 !== n ? "".concat(n, " ").concat((0,
                f.t)("aria.label.SELECT")) : (0,
                f.t)("mail.listView.tooltips.SELECT_IN_VIEW")
            }, t)), r.createElement(ma, e), (o === ba || o === va) && r.createElement("div", {
                className: "ow-mail-MailSummaryListToolbar-sortBtn-wrapper ".concat(i ? "ow-mail-MailSummaryListToolbar-sortBtn-wrapper-enabled" : "")
            }, r.createElement(zo, e)))
        };
        ga.defaultProps = {
            selectedCount: 0,
            selectedLayout: "",
            onSelectViewPort: function() {}
        },
        ga.propTypes = {
            selectedCount: a().number,
            selectedLayout: a().string,
            onSelectViewPort: a().func
        };
        var wa = ga
          , Ea = n(37848)
          , Sa = (0,
        Ea.I)(wa)
          , Ta = ((0,
        Ea.s)(ma),
        n(45600));
        function Oa(e) {
            "@babel/helpers - typeof";
            return (Oa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ca(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Pa(r.key), r)
            }
        }
        function Pa(e) {
            var t = function(e, t) {
                if ("object" !== Oa(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Oa(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Oa(t) ? t : String(t)
        }
        function Aa(e, t) {
            return (Aa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ra(e) {
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
                var n, r = Ia(e);
                if (t) {
                    var o = Ia(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Oa(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return ka(e)
                }(this, n)
            }
        }
        function ka(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Ia(e) {
            return (Ia = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Na = function(e) {
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
                    t && Aa(e, t)
                }(o, r.Component);
                var n = Ra(o);
                function o(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o),
                    (t = n.call(this, e)).renderExitButton = t.renderExitButton.bind(ka(t)),
                    t.renderHandleNavigationPreviewLeft = t.renderHandleNavigationPreviewLeft.bind(ka(t)),
                    t.renderHandleNavigationPreviewRight = t.renderHandleNavigationPreviewRight.bind(ka(t)),
                    t.handleKeyPress = t.handleKeyPress.bind(ka(t)),
                    window.addEventListener("keydown", t.handleKeyPress),
                    t
                }
                return function(e, t, n) {
                    t && Ca(e.prototype, t),
                    n && Ca(e, n),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    })
                }(o, [{
                    key: "componentDidMount",
                    value: function() {
                        var e, t, n;
                        [null, void 0].includes(null === (e = this.exitRef) || void 0 === e ? void 0 : null === (t = e.props) || void 0 === t ? void 0 : t.className) || null === (n = document.querySelector(".ow-mail-MailPreviewFull-header-back")) || void 0 === n || n.focus()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this.props.lastNextInfo
                          , n = e.lastNextInfo;
                        if (t && t !== n) {
                            var r = t.nextInfo
                              , o = void 0 === r ? {} : r
                              , a = o.index
                              , i = (o.messageInfo,
                            t.lastInfo)
                              , l = void 0 === i ? {} : i;
                            if (l.index,
                            l.messageInfo,
                            n && n.nextInfo && n.index === a)
                                return
                        }
                    }
                }, {
                    key: "handleKeyPress",
                    value: function(e) {
                        switch (e.key) {
                        case "Escape":
                            this.props.handleClosePreview()
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window && window.removeEventListener("keydown", this.handleKeyPress)
                    }
                }, {
                    key: "renderExitButton",
                    value: function() {
                        var e = this
                          , t = this.props.handleClosePreview;
                        return (0,
                        he.Z)("mail.preview.previousAndNextBtnLocalize") ? r.createElement(_.Z, {
                            iconName: "mail-prev-close",
                            className: "ow-mail-MailPreviewFull-header-back ow-mail-MailPreviewLocalize",
                            onClick: t,
                            ref: function(t) {
                                return e.exitRef = t
                            }
                        }, (0,
                        f.t)("mail.preview.CLOSE")) : r.createElement(_.Z, {
                            iconName: "exit",
                            className: "ow-mail-MailPreviewFull-header-back",
                            onClick: t,
                            ref: function(t) {
                                return e.exitRef = t
                            }
                        }, (0,
                        f.t)("mail.search.EXIT_SEARCH"))
                    }
                }, {
                    key: "renderHandleNavigationPreviewLeft",
                    value: function() {
                        var e = this.props
                          , t = e.handleNavigatePreview
                          , n = e.lastNextInfo.lastInfo
                          , o = void 0 === n ? {} : n
                          , a = o.index
                          , i = o.messageInfo
                          , l = i ? "enable" : "disable"
                          , c = !i
                          , s = "";
                        return i && (s = i.subject || (0,
                        f.t)("mail.preview.EMPTY_SUBJECT")),
                        (0,
                        he.Z)("mail.preview.previousAndNextBtnLocalize") ? r.createElement(_.Z, {
                            className: "ow-mail-MailPreviewFull-header-last ow-mail-MailPreviewLocalize",
                            disabled: c,
                            onClick: function() {
                                t(-1, a)
                            },
                            role: be.HB.BUTTON,
                            "aria-disabled": c
                        }, r.createElement(L.Z, {
                            name: "mail-prev-previous"
                        }), r.createElement("span", {
                            className: "ow-mail-MailPreviewFull-header-last-summary",
                            "aria-label": (0,
                            f.t)("mail.preview.PREVIEW_SHORT")
                        }, (0,
                        f.t)("mail.preview.PREVIEW_SHORT"))) : r.createElement("a", {
                            className: "ow-mail-MailPreviewFull-header-last ".concat(l),
                            onClick: function() {
                                t(-1, a)
                            },
                            role: be.HB.LINK,
                            tabindex: "0",
                            "aria-label": s
                        }, r.createElement(L.Z, {
                            name: "left",
                            className: l
                        }), r.createElement("span", {
                            className: "ow-mail-MailPreviewFull-header-last-summary",
                            "aria-label": s
                        }, s))
                    }
                }, {
                    key: "renderHandleNavigationPreviewRight",
                    value: function() {
                        var e = this.props
                          , t = e.handleNavigatePreview
                          , n = e.lastNextInfo.nextInfo
                          , o = void 0 === n ? {} : n
                          , a = o.index
                          , i = o.messageInfo
                          , l = i ? "enable" : "disable"
                          , c = !i
                          , s = "";
                        return i && (s = i.subject || (0,
                        f.t)("mail.preview.EMPTY_SUBJECT")),
                        (0,
                        he.Z)("mail.preview.previousAndNextBtnLocalize") ? r.createElement(_.Z, {
                            className: "ow-mail-MailPreviewFull-header-next ow-mail-MailPreviewLocalize",
                            disabled: c,
                            onClick: function() {
                                t(1, a)
                            },
                            role: be.HB.BUTTON,
                            "aria-disabled": c
                        }, r.createElement(L.Z, {
                            name: "mail-prev-next"
                        }), r.createElement("span", {
                            className: "ow-mail-MailPreviewFull-header-next-summary",
                            "aria-label": (0,
                            f.t)("mail.preview.NEXT")
                        }, (0,
                        f.t)("mail.preview.NEXT"))) : r.createElement("a", {
                            className: "ow-mail-MailPreviewFull-header-next ".concat(l),
                            onClick: function() {
                                t(1, a)
                            },
                            role: be.HB.LINK,
                            tabindex: "0",
                            "aria-label": s
                        }, r.createElement("span", {
                            className: "ow-mail-MailPreviewFull-header-next-summary",
                            "aria-label": s
                        }, s), r.createElement(L.Z, {
                            name: "right"
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = Object.assign({}, (function(e) {
                            if (null == e)
                                throw new TypeError("Cannot destructure " + e)
                        }(this.props),
                        this.props));
                        return (0,
                        he.Z)("mail.preview.previousAndNextBtnLocalize") ? r.createElement("div", {
                            className: "ow-mail-MailPreviewFull ow-mail-MailPreviewLocalize"
                        }, r.createElement("div", {
                            className: "ow-mail-MailPreviewFull-header"
                        }, this.renderHandleNavigationPreviewLeft(), this.renderHandleNavigationPreviewRight(), this.renderExitButton()), r.createElement(e, t)) : r.createElement("div", {
                            className: "ow-mail-MailPreviewFull"
                        }, r.createElement("div", {
                            className: "ow-mail-MailPreviewFull-header"
                        }, this.renderExitButton(), this.renderHandleNavigationPreviewLeft(), r.createElement("div", {
                            className: "ow-mail-MailPreviewFull-space"
                        }), this.renderHandleNavigationPreviewRight()), r.createElement(e, t))
                    }
                }]),
                o
            }();
            return t.defaultProps = {
                lastNextInfo: {},
                handleLastNextMessage: function() {}
            },
            t.propTypes = {
                handleNavigatePreview: a().func.isRequired,
                handleClosePreview: a().func.isRequired,
                handleLastNextMessage: a().func,
                lastNextInfo: a().shape(a().object)
            },
            t
        }
          , Da = n(91437)
          , Ma = (0,
        Da.rP)(function() {
            return mo.default
        })(Ta.Z)
          , _a = (0,
        Da.Dx)(function() {
            return mo.default
        })(Na(Ta.Z))
          , ja = n(73918)
          , La = n.n(ja)
          , Fa = n(42583)
          , xa = n.n(Fa)
          , Ba = n(96072)
          , Ha = n.n(Ba)
          , Ua = n(43779)
          , Za = n.n(Ua)
          , Va = n(30468)
          , Ka = n(38620)
          , qa = n(54057)
          , Ya = n(62347)
          , Ga = n(72278)
          , Wa = n(20545);
        function Xa(e) {
            "@babel/helpers - typeof";
            return (Xa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function za(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Xa(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Xa(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Xa(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var Ja = function() {
            var e = document.location.href.indexOf("app.html") > -1 ? "resources/ad" : "ad";
            return r.createElement("div", null, r.createElement("a", {
                href: "".concat("https://google.com"),
                target: "_blank",
                tabIndex: -1
            }, r.createElement("div", {
                className: "ow-advertisement-flL",
                tabIndex: v.UhU.isDesktop ? 0 : -1,
                onKeyDown: function(e) {
                    var t, n;
                    e.key === be.BY.ENTERKEY && (null === (t = e.target) || void 0 === t || null === (n = t.parentNode) || void 0 === n || n.click())
                }
            }, r.createElement("img", {
                src: "".concat(e, "/adv_rightv.png"),
                className: "ow-advertisement-left-img"
            })), r.createElement("div", {
                className: "ow-advertisement-flR"
            }, r.createElement("div", za({
                className: "txtcolor"
            }, "className", "ow-advertisement-learnmore"), "Learn more"), r.createElement("img", {
                src: "".concat(e, "/ico-info.png"),
                className: "ow-advertisement-right-img"
            }))))
        }
          , $a = n(82325);
        function Qa(e) {
            "@babel/helpers - typeof";
            return (Qa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ei(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, ti(r.key), r)
            }
        }
        function ti(e) {
            var t = function(e, t) {
                if ("object" !== Qa(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Qa(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Qa(t) ? t : String(t)
        }
        function ni(e, t) {
            return (ni = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function ri(e) {
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
                var n, r = ai(e);
                if (t) {
                    var o = ai(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Qa(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return oi(e)
                }(this, n)
            }
        }
        function oi(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ai(e) {
            return (ai = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ii = function(e) {
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
                t && ni(e, t)
            }(n, r.PureComponent);
            var t = ri(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).renderTagsList = r.renderTagsList.bind(oi(r)),
                r
            }
            return function(e, t, n) {
                t && ei(e.prototype, t),
                n && ei(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "renderTagsList",
                value: function(e, t, n) {
                    var o, a, i, l, c, s, u, d = 0;
                    return null === e || void 0 === e || null === (a = e.data) || void 0 === a || null === (i = a.tagids) || void 0 === i || i.map(function(e) {
                        return n.map(function(n) {
                            var r;
                            (null === n || void 0 === n ? void 0 : n.id) === (null === e || void 0 === e ? void 0 : e.id) && (o || (o = n),
                            d++,
                            t && (null === (r = Object.keys(t)) || void 0 === r ? void 0 : r.length) > 1 && (null === t || void 0 === t ? void 0 : t.id) === (null === e || void 0 === e ? void 0 : e.id) && (o = t))
                        })
                    }),
                    (null === e || void 0 === e ? void 0 : null === (l = e.data) || void 0 === l ? void 0 : null === (c = l.tagids) || void 0 === c ? void 0 : c.length) > 0 && d > 0 && r.createElement("div", {
                        className: "ow-tags-count"
                    }, r.createElement("span", null, " ", r.createElement("span", {
                        className: "ow-mail-list-tags",
                        style: {
                            background: "".concat(null === (s = o) || void 0 === s ? void 0 : s.color)
                        }
                    }, null === (u = o) || void 0 === u ? void 0 : u.name, " "), " ", r.createElement("span", {
                        className: "ow-mail-list-tags-count"
                    }, "  ", 1 == d ? "" : "+ ".concat(d - 1, " ")), " "))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.useLongTime
                      , o = t.use24HrFormat
                      , a = t.onMarkAsRead
                      , i = t.onMarkAsUnread
                      , l = t.onMarkAsFlag
                      , c = t.onClearFlag
                      , s = t.onDelete
                      , u = t.onReply
                      , d = t.rowData
                      , p = t.isItemSelected
                      , m = t.selectedInfo
                      , h = t.showFolder
                      , y = t.folderDisplay
                      , b = t.selectedFolderPathType
                      , g = t.listComponent
                      , w = t.categoryEnabled
                      , E = t.onPinToggle
                      , S = t.showPin
                      , T = t.cancelSendInProgress
                      , O = t.showAvatar
                      , C = t.manageShowAvatar
                      , P = t.isThreadMode
                      , A = t.avatarData
                      , R = t.onGetAvatar
                      , k = t.onRefresh
                      , I = t.email
                      , N = t.layout
                      , D = t.selectedTag
                      , _ = t.tagFolder
                      , j = t.tagList
                      , F = b === be.S.DRAFT || b === be.S.SENT;
                    if (d && d.data) {
                        var B = d.data
                          , H = B.flags
                          , U = H.seen
                          , Z = H.flagged
                          , V = H.answered
                          , K = H.forwarded
                          , q = H.userFlags
                          , Y = B.uid
                          , G = B.folderPath
                          , W = B.from
                          , X = B.receivedDate
                          , z = B.subject
                          , J = B.attachmentCount
                          , $ = B.priority
                          , Q = B.uidList
                          , ee = B.pinned
                          , te = B.messagePreview
                          , ne = B.recipients
                          , re = B.bimiLocations
                          , oe = B.sentDate
                          , ae = q && Za()(q, "bimi")
                          , ie = "";
                        te && (ie = te.body ? (0,
                        Br.Mc)(te.body) : (0,
                        f.t)("mail.NO_MESSAGE_PREVIEW"));
                        var le = z || (0,
                        f.t)("mail.listView.EMPTY_SUBJECT")
                          , ce = M()(W, "name", "") || M()(W, "address", "")
                          , se = M()(ne, "to", "") && M()(ne, "to", "").map(function(e) {
                            return e && (e.name || e.address)
                        }).filter(function(e) {
                            return !!e
                        })
                          , ue = se && se.join(";")
                          , de = F ? ue : ce
                          , fe = Q && Q.length
                          , pe = x()("ow-mail-MailSummaryListItem", "ow-InlineBar-wrapper", {
                            "ow-mail-MailSummaryListItem-unread": !U
                        })
                          , me = p(d)
                          , ye = w && q && Za()(q, "suspicious")
                          , ve = 0;
                        return d && d.data && !d.data.uid ? r.createElement(Ja, null) : r.createElement("div", {
                            role: be.HB.PRESENTATION,
                            className: pe,
                            onClick: function(t) {
                                ve += 1,
                                t.persist(),
                                2 === ve && (0,
                                he.Z)("mail.compose.detachWindow") && (clearTimeout(e.timer),
                                ve = 0,
                                g.handleItemClick(d, t, be.rW.DBCLICK),
                                t.stopPropagation()),
                                clearTimeout(e.timer),
                                e.timer = setTimeout(function() {
                                    1 === ve && (g.handleItemClick(d, t),
                                    t.stopPropagation()),
                                    ve = 0
                                }, 400)
                            }
                        }, r.createElement("div", {
                            className: "ow-selectable-item-checkbox-container"
                        }, (0,
                        he.Z)("mail.avatar.enabled") && O && "" === C ? r.createElement($a.Z, {
                            displayAddress: de,
                            listComponent: g.handleCheckChange,
                            listClick: g.handleItemClick,
                            isItemSelected: p,
                            rowData: d,
                            bimiIndicator: ae,
                            bimiLocations: re,
                            folderType: b,
                            avatarData: A,
                            onGetAvatar: R,
                            email: I,
                            selectedInfo: m,
                            listComp: g
                        }) : r.createElement(L.Z, {
                            role: be.HB.CHECKBOX,
                            "aria-checked": me,
                            "aria-label": le,
                            name: me ? "checkbox-selected" : "checkbox-unselected",
                            tabIndex: v.UhU.isDesktop ? 0 : -1,
                            onKeyDown: function(e) {
                                (0,
                                wr.OG)(e, ".ow-mail-MailPreview-thread-subject", m, null === g || void 0 === g ? void 0 : g.handleCheckChange, d, me, null === g || void 0 === g ? void 0 : g.handleItemClick)
                            },
                            onFocus: function(e) {
                                return (0,
                                wr.yJ)(e)
                            },
                            onBlur: function(e) {
                                (0,
                                wr.yJ)(e),
                                (0,
                                wr.np)(e, g)
                            },
                            onClick: function(e) {
                                e.stopPropagation(),
                                g.handleCheckChange(d, e)
                            }
                        })), r.createElement("div", {
                            className: "ow-mail-MailSummaryListItem-status",
                            role: be.HB.STATUS,
                            "aria-label": U ? (0,
                            f.t)("aria.label.READ") : (0,
                            f.t)("aria.label.UNREAD")
                        }, r.createElement(Wa.Z, {
                            isReplied: V,
                            isForwarded: K
                        })), r.createElement("div", {
                            className: "ow-mail-MailSummaryListItem-detail"
                        }, r.createElement("div", {
                            className: "ow-mail-MailSummaryListItem-row"
                        }, ye && r.createElement(Ha(), {
                            className: "ow-mail-MailSummaryListItem-row-suspicious"
                        }, r.createElement(La(), {
                            placement: "bottom",
                            overlay: r.createElement(xa(), {
                                id: "tooltip-bottom"
                            }, r.createElement("span", {
                                className: "ow-mail-MailSummaryListItem-row-suspicious-tooltip",
                                "aria-label": (0,
                                f.t)("mail.listView.tooltips.SUSPICIOUS_MESSAGE")
                            }, (0,
                            f.t)("mail.listView.tooltips.SUSPICIOUS_MESSAGE")))
                        }, r.createElement("span", {
                            className: "ow-icon-mail-suspicious"
                        }))), r.createElement("div", {
                            className: "ow-mail-MailSummaryListItem-from",
                            title: de,
                            "aria-label": de
                        }, de, de === M()(W, "name", "") && r.createElement(xa(), {
                            title: M()(W, "address", ""),
                            className: "ow-mail-MailSummaryTable-cell-text-tooltip"
                        }, M()(W, "address", ""))), r.createElement("div", {
                            className: "ow-mail-MailSummaryListItem-date"
                        }, !o && n ? window.TimeUtil.getTimeZoneDateTime(X, oe) : TimeUtil.getTimeParseInt24to12(window.TimeUtil.getCalendarDateTime(X)))), r.createElement("div", {
                            className: "ow-mail-MailSummaryListItem-row"
                        }, r.createElement("div", {
                            className: "ow-mail-MailSummaryListItem-subject",
                            title: le,
                            "aria-label": le
                        }, le), r.createElement("div", {
                            className: "ow-mail-MailSummaryListItem-info",
                            role: be.HB.STATUS,
                            "aria-label": (0,
                            f.t)("mail.listView.HEADER_ATTACHMENT")
                        }, Z && r.createElement(L.Z, {
                            name: "flag-mail"
                        }), J > 0 && r.createElement(L.Z, {
                            name: "attachment-mail"
                        }), fe > 1 && r.createElement($o(), {
                            className: "ow-mail-MailSummaryListItem-threadCount"
                        }, (fe < 10 ? "0" : "") + fe), r.createElement(Ga.Z, {
                            level: $
                        }), S && ee && r.createElement(L.Z, {
                            name: "pin-mail"
                        }))), r.createElement("div", {
                            className: "ow-mail-MailSummaryListItem-row"
                        }, (0,
                        he.Z)("mail.tags.enabled") && !P && "" === C && this.renderTagsList(d, D, j), ie ? r.createElement("div", {
                            className: "ow-mail-MailSummaryListItem-bodyPreview",
                            dangerouslySetInnerHTML: {
                                __html: (0,
                                qa.bt)((0,
                                Br.iT)(ie))
                            }
                        }) : r.createElement("div", {
                            className: "ow-mail-MailSummaryListItem-bodyPreview-empty",
                            dangerouslySetInnerHTML: {
                                __html: (0,
                                qa.bt)((0,
                                Br.iT)(ie))
                            }
                        }), h && !_ ? r.createElement("div", {
                            className: "ow-mail-MailSummaryListItem-folder",
                            title: y(G)
                        }, y(G)) : null)), r.createElement(Ya.Z, {
                            className: ie ? "ow-mail-MailSummaryListItem-hoverToolbar" : "ow-mail-MailSummaryListItem-hoverToolbar-custom",
                            enableHover: !0
                        }, r.createElement(Va.Z, {
                            summary: d.data,
                            index: d.index,
                            cancelSendInProgress: T,
                            onMarkAsUnread: i,
                            onMarkAsRead: a,
                            onMarkAsFlag: l,
                            onClearFlag: c,
                            onDelete: s,
                            onReply: u,
                            onRefresh: k,
                            onPinToggle: E,
                            showPin: S,
                            layout: N
                        })), r.createElement(Ka.Z, {
                            className: "ow-mail-MailSummaryDragSource",
                            selectedInfo: m,
                            currentId: Y,
                            folderPath: G,
                            handleBeginDrag: function() {
                                g.willUpdateSelection(d, be.rW.DRAG, {})
                            }
                        }))
                    }
                    return r.createElement("div", {
                        className: "ow-mail-MailSummaryListBlankItem"
                    }, r.createElement("div", {
                        className: "ow-mail-MailSummaryListBlankItem-row"
                    }), r.createElement("div", {
                        className: "ow-mail-MailSummaryListBlankItem-row"
                    }), r.createElement("div", {
                        className: "ow-mail-MailSummaryListBlankItem-row"
                    }))
                }
            }]),
            n
        }();
        ii.defaultProps = {
            useLongTime: !1,
            use24HrFormat: !1,
            showAvatar: !1,
            manageShowAvatar: "",
            rowData: null,
            selectedInfo: [],
            showFolder: !1,
            cancelSendInProgress: !1,
            selectedFolderPathType: "",
            listComponent: null,
            categoryEnabled: !1,
            showPin: !1,
            isItemSelected: function() {},
            folderDisplay: function() {},
            onPinToggle: function() {},
            onMarkAsRead: function() {},
            onMarkAsUnread: function() {},
            onMarkAsFlag: function() {},
            onClearFlag: function() {},
            onDelete: function() {},
            onReply: function() {}
        },
        ii.propTypes = {
            useLongTime: a().bool,
            use24HrFormat: a().bool,
            showAvatar: a().bool,
            manageShowAvatar: a().string,
            rowData: a().shape({
                data: a().object
            }),
            isItemSelected: a().func,
            selectedInfo: a().arrayOf(a().oneOfType([a().number, a().string])),
            showFolder: a().bool,
            folderDisplay: a().func,
            selectedFolderPathType: a().string,
            listComponent: a().object,
            categoryEnabled: a().bool,
            showPin: a().bool,
            cancelSendInProgress: a().bool,
            onPinToggle: a().func,
            onMarkAsRead: a().func,
            onMarkAsUnread: a().func,
            onMarkAsFlag: a().func,
            onClearFlag: a().func,
            onDelete: a().func,
            onReply: a().func
        };
        var li = n(1972)
          , ci = n(88762);
        function si(e) {
            "@babel/helpers - typeof";
            return (si = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ui(e, t) {
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
        function di(e, t, n) {
            return (t = pi(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function fi(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, pi(r.key), r)
            }
        }
        function pi(e) {
            var t = function(e, t) {
                if ("object" !== si(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== si(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === si(t) ? t : String(t)
        }
        function mi(e, t) {
            return (mi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function hi(e) {
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
                var n, r = yi(e);
                if (t) {
                    var o = yi(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === si(t) || "function" == typeof t))
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
        function yi(e) {
            return (yi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var bi = function(e) {
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
                t && mi(e, t)
            }(n, r.PureComponent);
            var t = hi(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && fi(e.prototype, t),
                n && fi(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    this.props.connectDragPreview((0,
                    ci.rX)(), {
                        captureDraggingState: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.connectDragSource
                      , n = e.isDragging
                      , o = e.className;
                    return t(r.createElement("div", {
                        role: be.HB.PRESENTATION,
                        className: "".concat(o, " ").concat(n ? "ow-mail-AttachmentListItemDragSource-dragging" : ""),
                        onMouseDown: function(e) {
                            e.stopPropagation()
                        }
                    }))
                }
            }]),
            n
        }();
        bi.propTypes = {
            connectDragSource: a().func.isRequired,
            isDragging: a().bool.isRequired,
            connectDragPreview: a().func.isRequired,
            className: a().string.isRequired
        };
        var vi = {
            beginDrag: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.selectedInfo
                  , n = e.currentInfo
                  , r = e.handleBeginDrag;
                r && r();
                var o = n.data.uid;
                return {
                    selected: t.filter(function(e) {
                        return e.uid === o
                    }).length > 0 ? t : [function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ui(Object(n), !0).forEach(function(t) {
                                di(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ui(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, n)]
                }
            }
        };
        var gi = (0,
        li.Ej)(be.ZV.CLOUD_FILE, vi, function(e, t) {
            return {
                connectDragSource: e.dragSource(),
                connectDragPreview: e.dragPreview(),
                isDragging: t.isDragging()
            }
        })(bi)
          , wi = n(14137);
        function Ei(e) {
            "@babel/helpers - typeof";
            return (Ei = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Si(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Ti(r.key), r)
            }
        }
        function Ti(e) {
            var t = function(e, t) {
                if ("object" !== Ei(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Ei(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Ei(t) ? t : String(t)
        }
        function Oi(e, t) {
            return (Oi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ci(e) {
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
                var n, r = Ai(e);
                if (t) {
                    var o = Ai(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Ei(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Pi(e)
                }(this, n)
            }
        }
        function Pi(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Ai(e) {
            return (Ai = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Ri = function(e) {
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
                t && Oi(e, t)
            }(n, r.PureComponent);
            var t = Ci(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).imageLoaded = o.imageLoaded.bind(Pi(o)),
                o.state = {
                    imageLoaded: !1,
                    imageWidth: 0,
                    imageHeight: 0
                },
                o.imageAreaRef = r.createRef(),
                o.renderThumbnailViewTop = o.renderThumbnailViewTop.bind(Pi(o)),
                o.renderThumbnailViewMid = o.renderThumbnailViewMid.bind(Pi(o)),
                o
            }
            return function(e, t, n) {
                t && Si(e.prototype, t),
                n && Si(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "imageLoaded",
                value: function(e) {
                    this.setState({
                        imageLoaded: !0,
                        imageWidth: e.target.naturalWidth,
                        imageHeight: e.target.naturalHeight
                    })
                }
            }, {
                key: "renderThumbnailViewTop",
                value: function() {
                    var e = this.props.childrenLeft;
                    return r.createElement("div", {
                        className: "ow-thumbnailFileView-top",
                        ref: this.imageAreaRef
                    }, e, r.createElement(L.Z, {
                        name: "attachment"
                    }))
                }
            }, {
                key: "renderThumbnailViewMid",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.thumbnailSrc
                      , o = t.handleClickImage
                      , a = t.fileIcon
                      , i = !1;
                    return this.imageAreaRef.current && (i = this.state.imageWidth / this.state.imageHeight > this.imageAreaRef.current.clientWidth / this.imageAreaRef.current.clientHeight),
                    r.createElement("div", {
                        className: "ow-thumbnailFileView-mid"
                    }, n && r.createElement("img", {
                        role: be.HB.PRESENTATION,
                        alt: "alt",
                        className: "".concat(this.state.imageLoaded ? "ow-thumbnailFileView-img-loaded" : "ow-thumbnailFileView-img", " ").concat(i ? "ow-thumbnailFileView-img-widthmax" : "ow-thumbnailFileView-img-heightmax"),
                        onClick: function(e) {
                            return o(e)
                        },
                        src: n,
                        onLoad: function(t) {
                            return e.imageLoaded(t)
                        },
                        ref: function(t) {
                            e.fileImgEle = t
                        }
                    }), !this.state.imageLoaded && r.createElement(L.Z, {
                        name: a,
                        onClick: function(e) {
                            return o(e)
                        },
                        ref: function(t) {
                            e.fileIconEle = t
                        }
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.childrenDragSource
                      , n = e.className
                      , o = e.children;
                    return e.empty ? r.createElement("div", {
                        className: "ow-thumbnailFileView ".concat(n)
                    }, r.createElement("div", {
                        className: "ow-thumbnailFileView-top"
                    }), r.createElement("div", {
                        className: "ow-thumbnailFileView-bottom"
                    }, r.createElement("div", {
                        className: "ow-mail-thumbnailFileView-empty-right-row0"
                    }), r.createElement("div", {
                        className: "ow-mail-thumbnailFileView-empty-right-row1"
                    }))) : r.createElement("div", {
                        className: "ow-thumbnailFileView ".concat(n)
                    }, this.renderThumbnailViewTop(), this.renderThumbnailViewMid(), r.createElement("div", {
                        className: "ow-thumbnailFileView-bottom"
                    }, o), t)
                }
            }]),
            n
        }();
        Ri.defaultProps = {
            empty: !0,
            fileIcon: "",
            thumbnailSrc: "",
            className: "",
            childrenLeft: null,
            childrenDragSource: void 0,
            children: null,
            handleClickImage: function() {}
        },
        Ri.propTypes = {
            empty: a().bool,
            fileIcon: a().string,
            thumbnailSrc: a().string,
            className: a().string,
            childrenLeft: a().element,
            childrenDragSource: a().element,
            children: a().element,
            handleClickImage: a().func
        };
        var ki = Ri;
        function Ii(e) {
            "@babel/helpers - typeof";
            return (Ii = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ni() {
            return (Ni = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Di(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return Mi(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Mi(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, i = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return i = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    a = e
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw a
                    }
                }
            }
        }
        function Mi(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function _i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, ji(r.key), r)
            }
        }
        function ji(e) {
            var t = function(e, t) {
                if ("object" !== Ii(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Ii(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Ii(t) ? t : String(t)
        }
        function Li(e, t) {
            return (Li = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Fi(e) {
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
                var n, r = Bi(e);
                if (t) {
                    var o = Bi(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Ii(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return xi(e)
                }(this, n)
            }
        }
        function xi(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Bi(e) {
            return (Bi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Hi = function(e) {
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
                t && Li(e, t)
            }(n, r.PureComponent);
            var t = Fi(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).renderItem = r.renderItem.bind(xi(r)),
                r.itemWrapperClass = r.itemWrapperClass.bind(xi(r)),
                r.getMotionStyles = r.getMotionStyles.bind(xi(r)),
                r.getDefaultStyles = r.getDefaultStyles.bind(xi(r)),
                r.getLeaveMotionStyle = r.getLeaveMotionStyle.bind(xi(r)),
                r.getItemKey = r.getItemKey.bind(xi(r)),
                r
            }
            return function(e, t, n) {
                t && _i(e.prototype, t),
                n && _i(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.bufferCount
                      , n = e.scrollTop;
                    (0,
                    e.updatePagination)({
                        bufferCount: t,
                        scrollTop: n
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    if (this.attachmentlist && this.attachmentlist.parentNode) {
                        var e = this.attachmentlist.parentNode.querySelectorAll('img[src*="r=resource.download"]');
                        if (e && e.length) {
                            var t, n = Di(e);
                            try {
                                for (n.s(); !(t = n.n()).done; ) {
                                    t.value.src = "#"
                                }
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                        }
                    }
                }
            }, {
                key: "getDefaultStyles",
                value: function(e, t, n) {
                    return this.getMotionStyles(e, t, n, !0)
                }
            }, {
                key: "getMotionStyles",
                value: function(e, t, n) {
                    var r = this
                      , o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , a = this.props
                      , i = a.scrollTop
                      , l = a.data
                      , c = a.motionConfig
                      , s = l.rows.slice(e, t)
                      , u = l.sections
                      , d = s.map(function(e) {
                        var t = e.clientRect
                          , n = t.top
                          , a = void 0 === n ? 0 : n
                          , l = t.left
                          , s = void 0 === l ? 0 : l
                          , u = t.height
                          , d = t.width;
                        return {
                            key: r.getItemKey(e),
                            data: e,
                            style: {
                                x: o ? s : (0,
                                B.ST)(s, c),
                                y: o ? a : (0,
                                B.ST)(a, c),
                                height: u,
                                width: d,
                                opacity: o ? .6 : (0,
                                B.ST)(1, c),
                                shadow: 0,
                                scrollTop: i
                            }
                        }
                    })
                      , f = u.map(function(e) {
                        var t = e.top
                          , n = void 0 === t ? 0 : t
                          , r = e.left
                          , a = void 0 === r ? 0 : r
                          , i = e.height
                          , l = e.index;
                        return {
                            key: "sec_".concat(l),
                            data: e,
                            style: {
                                x: a,
                                y: o ? n : (0,
                                B.ST)(n, c),
                                height: i,
                                opacity: 1
                            }
                        }
                    });
                    return d.concat(f)
                }
            }, {
                key: "getLeaveMotionStyle",
                value: function(e) {
                    var t = e.data
                      , n = this.props
                      , r = n.motionConfig
                      , o = n.viewportStartIndex
                      , a = n.viewportEndIndex;
                    if (!t.clientRect)
                        return {
                            x: 0,
                            y: t.top,
                            height: t.height,
                            opacity: (0,
                            B.ST)(0, r)
                        };
                    var i = t.index
                      , l = t.data
                      , c = t.clientRect
                      , s = c.height
                      , u = c.top;
                    return !l || i < o || i > a ? null : {
                        x: 0,
                        y: u,
                        height: s,
                        shadow: 0,
                        scrollTop: 0,
                        opacity: (0,
                        B.ST)(.2, r),
                        leaving: 1
                    }
                }
            }, {
                key: "getItemKey",
                value: function(e) {
                    var t = e.index
                      , n = e.data
                      , r = n || {}
                      , o = r.uid
                      , a = r.folderPath
                      , i = r.part;
                    return n ? (0,
                    v.IAw)(o, a, i) : "iw_".concat(t)
                }
            }, {
                key: "doValidClickArea",
                value: function(e) {
                    return "ow-mail-AttachmentList-item" !== e.target.className
                }
            }, {
                key: "itemWrapperClass",
                value: function(e) {
                    return (0,
                    this.props.isItemSelected)(e) ? "ow-VirtualizedList-item-selected" : ""
                }
            }, {
                key: "renderSection",
                value: function(e) {
                    return r.createElement("span", {
                        className: "ow-mail-MailSummaryListItem-section-label",
                        role: be.HB.PRESENTATION,
                        "aria-label": null === e || void 0 === e ? void 0 : e.label
                    }, e.label)
                }
            }, {
                key: "renderItem",
                value: function(e) {
                    var t = this
                      , n = this.props
                      , o = n.isItemSelected
                      , a = n.layout
                      , i = n.onClickMessageInfo
                      , l = n.handlePreviewAttachment
                      , c = n.handlePreviewMessage
                      , s = n.handleDownloadAttachment
                      , u = n.selectMode
                      , d = n.selectedInfo
                      , f = n.cloudFileViewOpened
                      , p = e.data || {
                        contentType: {},
                        messageInfo: {}
                    }
                      , m = p.filename
                      , h = p.part
                      , y = p.size
                      , b = p.messageInfo
                      , g = e.clientRect.thumbnail
                      , w = b.subject
                      , E = b.from
                      , S = b.receivedDate
                      , T = b.flags
                      , O = (void 0 === T ? {} : T).seen
                      , C = o(e)
                      , P = (0,
                    v.cFe)(m)
                      , A = "".concat(w, "\n").concat(E && (E.name || E.address), "\n").concat(window.TimeUtil.getTimeZoneDateTime(S))
                      , R = !e.data
                      , k = r.createElement(L.Z, {
                        name: C ? "checkbox-selected" : "checkbox-unselected",
                        onClick: function(n) {
                            n.stopPropagation(),
                            t.listComponent.handleCheckChange(e, n)
                        },
                        role: be.HB.CHECKBOX,
                        "aria-checked": C,
                        "aria-label": m,
                        tabIndex: 0,
                        onKeyDown: function(n) {
                            n.key === be.BY.ENTERKEY && (null === n || void 0 === n || n.stopPropagation(),
                            t.listComponent.handleCheckChange(e, n))
                        }
                    })
                      , I = [r.createElement("a", {
                        role: be.HB.PRESENTATION,
                        onClick: function() {
                            return s(e.data)
                        },
                        className: "ow-fileView-file-name".concat(O ? "" : " unread"),
                        title: m,
                        "aria-label": m
                    }, m), r.createElement("a", {
                        role: be.HB.PRESENTATION,
                        className: "ow-fileView-message-from",
                        title: A,
                        onClick: function(t) {
                            t.stopPropagation(),
                            i(e.data)
                        },
                        "aria-label": A
                    }, E && (E.name || E.address), " ", r.createElement("br", null)), r.createElement("div", {
                        className: "ow-fileView-message-info"
                    }, r.createElement("span", {
                        className: "ow-fileView-message-size"
                    }, (0,
                    wr.RD)(y)), r.createElement("span", null, TimeUtil.getTimeParseInt24to12(window.TimeUtil.getCalendarDateTime(S))))]
                      , N = f ? r.createElement(gi, {
                        className: "ow-mail-AttachmentListItemDragSource",
                        selectedInfo: d,
                        currentInfo: e,
                        handleBeginDrag: function() {
                            t.listComponent.willUpdateSelection(e, be.rW.DRAG, {})
                        }
                    }) : void 0;
                    return r.createElement("div", {
                        className: "ow-mail-AttachmentList-item",
                        title: A
                    }, a === be.qU.INFO ? r.createElement(wi.Z, {
                        empty: R,
                        filename: m,
                        thumbnailSrc: g,
                        size: y,
                        fileIcon: P,
                        childrenLeft: k,
                        childrenDragSource: N,
                        className: "ow-mail-attachmentList-fileview",
                        key: m + h,
                        handleClickImage: function(t) {
                            t.stopPropagation(),
                            l(e.data, !0, !v.UhU.isMobile)
                        },
                        handleClickTitle: function() {
                            return s(e.data)
                        },
                        onClickSaveToCloud: function() {
                            t.attachmentsWillToSave = e.data,
                            t.setState({})
                        }
                    }, I) : r.createElement(ki, {
                        isSelected: C,
                        filename: m,
                        empty: R,
                        size: y,
                        date: S,
                        thumbnailSrc: g,
                        selectMode: u,
                        fileIcon: P,
                        childrenLeft: k,
                        childrenDragSource: N,
                        title: A,
                        readFlag: O,
                        handleClickImage: function(n) {
                            n.stopPropagation(),
                            u ? t.listComponent.handleItemClick(e, n) : l(e.data, !0, !v.UhU.isMobile)
                        },
                        handleClickTitle: function(n) {
                            n.stopPropagation(),
                            u ? t.listComponent.handleItemClick(e, n) : s(e.data)
                        },
                        handleSelectMenu: function(t) {
                            "download" === t ? s(e.data) : "preview" === t ? "default" !== P && l(e.data, !0, !v.UhU.isMobile) : "message" === t && c(e.data, !1, !0)
                        }
                    }, I))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , o = t.updatePagination
                      , a = t.isFetching
                      , i = t.isExternalaccount
                      , l = t.onRefresh
                      , c = n.expanded;
                    return r.createElement(Fr.Z, {
                        className: "ow-mail-AutoSizer",
                        onResize: function(e) {
                            var t = e.height
                              , n = e.width;
                            o({
                                listHeight: t,
                                listWidth: n
                            })
                        },
                        ref: function(t) {
                            e.attachmentlist = t
                        }
                    }, function(t) {
                        var o = t.height
                          , s = t.width;
                        if (0 === s || 0 === o)
                            return null;
                        if (!(a || n && 0 !== n.itemTotalCount)) {
                            var u = {
                                width: "".concat(s, "px")
                            };
                            return [r.createElement("div", {
                                role: be.HB.PRESENTATION,
                                className: "ow-mail-MailSummaryList-tooltip",
                                style: u,
                                ref: function(t) {
                                    e.emptyList = t
                                }
                            }, r.createElement("span", null, i ? (0,
                            f.t)("mail.attachmentView.NOT_SUPPORT") : (0,
                            f.t)("mail.attachmentView.NO_ATTACHMENT"))), r.createElement(xr.Z, {
                                show: a,
                                onSwipeEnd: function() {
                                    l()
                                },
                                list: function() {
                                    return c ? null : e.emptyList
                                }
                            })]
                        }
                        return [r.createElement(Lr.JZ, Ni({
                            animation: !0,
                            className: "ow-mail-MailAttachmentList",
                            renderItem: e.renderItem,
                            itemWrapperClass: e.itemWrapperClass,
                            renderSection: e.renderSection,
                            validClickArea: function(t) {
                                return e.doValidClickArea(t)
                            },
                            getMotionStyles: e.getMotionStyles,
                            getDefaultStyles: e.getDefaultStyles
                        }, e.props, {
                            ref: function(t) {
                                e.listComponent = t
                            }
                        })), r.createElement(xr.Z, {
                            show: a,
                            onSwipeEnd: function() {
                                l()
                            },
                            list: function() {
                                return c ? null : e.listComponent && e.listComponent.scrollContainer
                            }
                        })]
                    })
                }
            }]),
            n
        }();
        Hi.defaultProps = {
            data: {
                rows: [],
                totalHeight: 0,
                itemTotalCount: 0
            },
            listHeight: 0,
            bufferCount: 15,
            sectionHeaderHeight: 40,
            scrollTop: 0,
            selectedInfo: [],
            renderStartIndex: 0,
            renderEndIndex: 0,
            isFetching: !1,
            showFolder: !0,
            layout: "",
            cloudFileViewOpened: !1,
            selectMode: !1,
            isExternalaccount: !1,
            viewportStartIndex: 0,
            viewportEndIndex: 0,
            handlePreviewAttachment: function() {},
            handlePreviewMessage: function() {},
            handleDownloadAttachment: function() {},
            onSelectChange: function() {},
            updatePagination: function() {},
            isItemSelected: function() {},
            shouldComponentUpdateOverwrite: function() {},
            folderDisplay: function() {},
            onPinToggle: function() {},
            onClickMessageInfo: function() {},
            onRefresh: function() {},
            motionConfig: {
                stiffness: 300,
                damping: 30,
                precision: .5
            }
        },
        Hi.propTypes = {
            data: a().shape({
                rows: a().arrayOf(a().object),
                totalHeight: a().number,
                itemTotalCount: a().number
            }),
            listHeight: a().number,
            bufferCount: a().number,
            scrollTop: a().number,
            sectionHeaderHeight: a().number,
            renderStartIndex: a().number,
            renderEndIndex: a().number,
            isFetching: a().bool,
            showFolder: a().bool,
            isExternalaccount: a().bool,
            selectedInfo: a().arrayOf(a().oneOfType([a().number, a().string])),
            layout: a().string,
            cloudFileViewOpened: a().bool,
            selectMode: a().bool,
            viewportStartIndex: a().number,
            viewportEndIndex: a().number,
            handlePreviewAttachment: a().func,
            handlePreviewMessage: a().func,
            handleDownloadAttachment: a().func,
            onSelectChange: a().func,
            updatePagination: a().func,
            isItemSelected: a().func,
            shouldComponentUpdateOverwrite: a().func,
            folderDisplay: a().func,
            onPinToggle: a().func,
            onClickMessageInfo: a().func,
            onRefresh: a().func,
            motionConfig: a().shape({
                stiffness: a().number,
                damping: a().number
            })
        };
        var Ui = n(22557)
          , Zi = n(57096)
          , Vi = n(40329)
          , Ki = (0,
        i.$j)(function(e) {
            var t = (0,
            m.F9)(e)
              , n = !("" === t)
              , r = (0,
            Zi.X4)(e)
              , o = r.scrollTop
              , a = r.listHeight
              , i = r.listWidth
              , l = r.renderData
              , c = r.visibleStartIndex
              , s = r.visibleEndIndex
              , u = r.selectMode
              , d = (0,
            Zi.zH)(e)
              , f = (0,
            Zi.U5)(e)
              , p = (0,
            Zi.AV)(e)
              , h = be.bF === (0,
            Zi.Rr)(e);
            return {
                sort: f,
                selectMode: (0,
                v.nIE)() || u,
                layout: d,
                accountId: t,
                selectedInfo: p,
                data: l,
                scrollTop: o,
                listWidth: i,
                listHeight: a,
                visibleStartIndex: c,
                visibleEndIndex: s,
                isItemSelected: function(e) {
                    return !(!e || !e.data) && p.filter(function(t) {
                        var n = t.uid
                          , r = t.folderPath
                          , o = t.part;
                        return e.data.uid === n && e.data.folderPath === r && e.data.part === o
                    }).length > 0
                },
                shouldComponentUpdateOverwrite: function(e, t) {
                    if (e.data.dataSignature !== t.data.dataSignature || e.layout !== t.layout || e.selectMode !== t.selectMode || e.visibleStartIndex !== t.visibleStartIndex || e.visibleEndIndex !== t.visibleEndIndex || e.isFetching !== t.isFetching || e.listHeight !== t.listHeight || e.listWidth !== t.listWidth || e.selectedInfo.length !== t.selectedInfo.length || !e.selectedInfo.every(function(e, n) {
                        var r = e.uid
                          , o = e.folderPath;
                        return r === t.selectedInfo[n].uid && o === t.selectedInfo[n].folderPath
                    }) || e.data.rows.length !== t.data.rows.length)
                        return !0;
                    for (var n = e.visibleStartIndex, r = e.visibleEndIndex, o = e.data, a = n; o.rows.length > 0 && a <= r; a += 1) {
                        var i = o.rows[a]
                          , l = i.data
                          , c = i.clientRect
                          , s = t.data.rows[a]
                          , u = s.data
                          , d = s.clientRect;
                        if (i.selected !== s.selected)
                            return !0;
                        if (c.left !== d.left)
                            return !0;
                        if (l && !u || !l && u)
                            return !0;
                        if (l && u && l.messageInfo.uid !== u.messageInfo.uid)
                            return !0
                    }
                    return !1
                },
                isFetching: h,
                isExternalaccount: n
            }
        }, function(e) {
            return {
                onSelectViewPort: function() {
                    return e((0,
                    Er.selectMailAttachmentListViewPort)())
                },
                onClickMessageInfo: function(t) {
                    return e((0,
                    Er.previewMailAttachmentMessage)(t))
                },
                onSelectChange: function(t, n) {
                    return e((0,
                    Er.updateMailAttachmentListSelection)(t, n))
                },
                updatePagination: function(t) {
                    return e((0,
                    Er.navigateMailAttachmentList)(t))
                },
                handleDownloadAttachment: function(t) {
                    return e((0,
                    Ui.Ve)(t))
                },
                handlePreviewMessage: function(t) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                      , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                    e((0,
                    Er.previewAttachment)({
                        attachment: t,
                        accountId: o,
                        opened: !0,
                        attachmentPreviewDisplay: n,
                        messagePreviewDisplay: r
                    }, "_"))
                },
                handlePreviewAttachment: function(t) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                      , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ""
                      , a = t.contentType.baseType;
                    (0,
                    Vi._y)(a) && (0,
                    v.tqC)() ? e((0,
                    Er.previewEMLAttachment)({
                        attachment: t,
                        accountId: ""
                    }, mo.default)) : e((0,
                    Er.previewAttachment)({
                        attachment: t,
                        accountId: o,
                        opened: !0,
                        attachmentPreviewDisplay: n,
                        messagePreviewDisplay: r
                    }, "_"))
                },
                onRefresh: function() {
                    e((0,
                    Er.refreshAttachmentList)())
                }
            }
        })(Hi)
          , qi = n(8764)
          , Yi = n.n(qi)
          , Gi = n(70224);
        function Wi(e) {
            "@babel/helpers - typeof";
            return (Wi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Xi(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, zi(r.key), r)
            }
        }
        function zi(e) {
            var t = function(e, t) {
                if ("object" !== Wi(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Wi(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Wi(t) ? t : String(t)
        }
        function Ji(e, t) {
            return (Ji = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function $i(e) {
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
                var n, r = el(e);
                if (t) {
                    var o = el(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Wi(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Qi(e)
                }(this, n)
            }
        }
        function Qi(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function el(e) {
            return (el = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var tl = function(e) {
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
                t && Ji(e, t)
            }(n, r.PureComponent);
            var t = $i(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).clearField = r.clearField.bind(Qi(r)),
                r.renderBadge = r.renderBadge.bind(Qi(r)),
                r.renderShowExit = r.renderShowExit.bind(Qi(r)),
                r.renderListBtn = r.renderListBtn.bind(Qi(r)),
                r.renderThumbnailBtn = r.renderThumbnailBtn.bind(Qi(r)),
                r.renderSortBy = r.renderSortBy.bind(Qi(r)),
                r.renderShowOnly = r.renderShowOnly.bind(Qi(r)),
                r.renderFromCloud = r.renderFromCloud.bind(Qi(r)),
                r
            }
            return function(e, t, n) {
                t && Xi(e.prototype, t),
                n && Xi(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidUpdate",
                value: function() {
                    var e = this.props.fromFolderPath;
                    e && (this.lastFolderPath = e)
                }
            }, {
                key: "clearField",
                value: function() {
                    var e = this.props;
                    (0,
                    e.onSelectFolder)(e.accountId, this.lastFolderPath)
                }
            }, {
                key: "renderBadge",
                value: function() {
                    var e = this.props
                      , t = e.selectedCount
                      , n = e.onSelectViewPort
                      , o = " ";
                    return t > 0 && t < 100 && (o = t),
                    t > 100 && (o = "..."),
                    r.createElement("div", {
                        className: "ow-mail-MailAttachmentListToolbar-checkbox-wrapper"
                    }, r.createElement($o(), {
                        className: t > 0 ? "ow-mail-MailAttachmentListToolbar-selectCount" : "ow-mail-MailAttachmentListToolbar-selectCount-0",
                        onClick: function() {
                            return n()
                        },
                        role: be.HB.CHECKBOX,
                        title: (0,
                        f.t)("mail.listView.tooltips.SELECT_IN_VIEW"),
                        tabIndex: 0,
                        "aria-checked": t > 0,
                        onKeyDown: function(e) {
                            e.key === be.BY.ENTERKEY && n()
                        }
                    }, o))
                }
            }, {
                key: "renderShowExit",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.title
                      , o = t.showExit;
                    return r.createElement("span", {
                        className: "ow-mail-MailAttachmentListToolbar-title",
                        title: n
                    }, o && r.createElement(Yi(), {
                        onClick: function(t) {
                            return e.clearField(t)
                        },
                        className: "ow-mail-MailAttachmentListToolbar-exit",
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("mail.search.EXIT_SEARCH")
                    }, r.createElement(L.Z, {
                        name: "exit"
                    }), (0,
                    f.t)("mail.search.EXIT_SEARCH")), n)
                }
            }, {
                key: "renderListBtn",
                value: function() {
                    var e = this.props
                      , t = e.layout
                      , n = e.onChangeLayout;
                    return r.createElement(Yi(), {
                        className: "".concat(t === be.qU.INFO ? "ow-mail-AttachmentList-layout-selected" : ""),
                        title: (0,
                        f.t)("mail.attachmentView.INFO"),
                        onClick: function() {
                            return n(be.qU.INFO)
                        },
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("mail.attachmentView.INFO")
                    }, r.createElement(L.Z, {
                        name: "th-list"
                    }))
                }
            }, {
                key: "renderThumbnailBtn",
                value: function() {
                    var e = this.props
                      , t = e.layout
                      , n = e.onChangeLayout;
                    return r.createElement(Yi(), {
                        className: "".concat(t === be.qU.THUMBNAIL ? "ow-mail-AttachmentList-layout-selected" : ""),
                        title: (0,
                        f.t)("mail.attachmentView.THUMBNAIL"),
                        onClick: function() {
                            return n(be.qU.THUMBNAIL)
                        },
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("mail.attachmentView.THUMBNAIL")
                    }, r.createElement(L.Z, {
                        name: "th-large"
                    }))
                }
            }, {
                key: "renderSortBy",
                value: function() {
                    var e = this.props
                      , t = e.sortType
                      , n = e.onChangeSort
                      , o = e.isFetching
                      , a = [{
                        id: be.CJ.SORT_OLDEST_FIRST,
                        text: (0,
                        f.t)("mail.attachmentView.SORT_OLDEST_FIRST")
                    }, {
                        id: be.CJ.SORT_NEWEST_FIRST,
                        text: (0,
                        f.t)("mail.attachmentView.SORT_NEWEST_FIRST")
                    }, {
                        id: be.CJ.SORT_ATTACHMENT_AZ,
                        text: (0,
                        f.t)("mail.attachmentView.SORT_ATTACHMENT_AZ")
                    }, {
                        id: be.CJ.SORT_ATTACHMENT_ZA,
                        text: (0,
                        f.t)("mail.attachmentView.SORT_ATTACHMENT_ZA")
                    }, {
                        id: be.CJ.SORT_SMALLER_FIRST,
                        text: (0,
                        f.t)("mail.attachmentView.SORT_SMALLER_FIRST")
                    }, {
                        id: be.CJ.SORT_BIGGER_FIRST,
                        text: (0,
                        f.t)("mail.attachmentView.SORT_BIGGER_FIRST")
                    }];
                    return r.createElement(vo(), {
                        pullRight: !0,
                        disabled: o,
                        title: (0,
                        f.t)("mail.attachmentView.SORT_BY"),
                        onSelect: function(e) {
                            e !== t && n(e)
                        },
                        "aria-label": (0,
                        f.t)("mail.attachmentView.SORT_BY"),
                        "aria-disabled": o
                    }, r.createElement(vo().Toggle, {
                        className: "ow-mail-AttachmentView-btn",
                        noCaret: !0,
                        bsStyle: "default",
                        role: be.HB.LISTBOX,
                        "aria-label": (0,
                        f.t)("mail.attachmentView.SORT_BY")
                    }, r.createElement(L.Z, {
                        disabled: o,
                        name: "sort"
                    })), r.createElement(vo().Menu, {
                        className: "ow-mail-AttachmentView-sortBy"
                    }, a.map(function(e) {
                        var n = e.id
                          , o = e.text;
                        return r.createElement(Gi.Z, {
                            key: n,
                            eventKey: n,
                            active: n === t,
                            "aria-label": o
                        }, o)
                    })))
                }
            }, {
                key: "renderShowOnly",
                value: function() {
                    var e = this.props
                      , t = e.onChangeFilter
                      , n = e.filterType
                      , o = e.isFetching
                      , a = [{
                        id: be.CJ.FILTER_ALL,
                        text: (0,
                        f.t)("mail.attachmentView.FILTER_ALL")
                    }, {
                        id: be.CJ.FILTER_IMAGES,
                        text: (0,
                        f.t)("mail.attachmentView.FILTER_IMAGES")
                    }, {
                        id: be.CJ.FILTER_DOCUMENTS,
                        text: (0,
                        f.t)("mail.attachmentView.FILTER_DOCUMENTS")
                    }, {
                        id: be.CJ.FILTER_AUDIOS,
                        text: (0,
                        f.t)("mail.attachmentView.FILTER_AUDIOS")
                    }, {
                        id: be.CJ.FILTER_VIDEOS,
                        text: (0,
                        f.t)("mail.attachmentView.FILTER_VIDEOS")
                    }, {
                        id: be.CJ.FILTER_ARCHIVES,
                        text: (0,
                        f.t)("mail.attachmentView.FILTER_ARCHIVES")
                    }];
                    return r.createElement(vo(), {
                        pullRight: !0,
                        title: (0,
                        f.t)("mail.attachmentView.SHOW_ONLY"),
                        disabled: o,
                        onSelect: function(e) {
                            e !== n && t(e)
                        },
                        "aria-label": (0,
                        f.t)("mail.attachmentView.SHOW_ONLY")
                    }, r.createElement(vo().Toggle, {
                        className: "ow-mail-AttachmentView-btn",
                        noCaret: !0,
                        role: be.HB.LISTBOX,
                        "aria-label": (0,
                        f.t)("mail.attachmentView.SHOW_ONLY")
                    }, r.createElement(L.Z, {
                        disabled: o,
                        name: "filter"
                    })), r.createElement(vo().Menu, {
                        className: "ow-mail-AttachmentView-filter"
                    }, a.map(function(e) {
                        var t = e.id
                          , o = e.text;
                        return r.createElement(Gi.Z, {
                            key: t,
                            eventKey: t,
                            active: t === n,
                            "aria-label": o
                        }, o)
                    })))
                }
            }, {
                key: "renderFromCloud",
                value: function() {
                    var e = this.props
                      , t = e.cloudFileViewOpened
                      , n = e.onToggleCloudFileView;
                    return r.createElement(r.Fragment, null, r.createElement("span", {
                        className: "ow-mail-seperator"
                    }), r.createElement(Yi(), {
                        className: "btn-cloudFileView".concat(t ? " opened" : ""),
                        title: (0,
                        f.t)("cloud.CLOUD_TITLE"),
                        onClick: function() {
                            return n()
                        },
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("cloud.CLOUD_TITLE")
                    }, r.createElement(L.Z, {
                        name: "cloud"
                    })))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.canShowCloudFileView;
                    return r.createElement("div", {
                        className: "ow-mail-MailAttachmentListToolbar"
                    }, this.renderBadge(), this.renderShowExit(), this.renderListBtn(), this.renderThumbnailBtn(), r.createElement("span", {
                        className: "ow-mail-seperator"
                    }), this.renderSortBy(), this.renderShowOnly(), e && this.renderFromCloud())
                }
            }]),
            n
        }();
        tl.defaultProps = {
            selectedCount: 0,
            title: "",
            showExit: !1,
            sortType: be.CJ.SORT_NEWEST_FIRST,
            layout: be.qU.INFO,
            canShowCloudFileView: !1,
            cloudFileViewOpened: !1,
            filterType: be.CJ.FILTER_ALL,
            onSelectViewPort: function() {},
            onChangeSort: function() {},
            onChangeFilter: function() {},
            onChangeLayout: function() {},
            onToggleCloudFileView: function() {},
            fromFolderPath: "",
            onSelectFolder: function() {},
            accountId: ""
        },
        tl.propTypes = {
            selectedCount: a().number,
            title: a().string,
            showExit: a().bool,
            onSelectViewPort: a().func,
            onChangeSort: a().func,
            onChangeFilter: a().func,
            sortType: a().oneOf([be.CJ.SORT_OLDEST_FIRST, be.CJ.SORT_NEWEST_FIRST, be.CJ.SORT_ATTACHMENT_SORT_FILTER_AZ, be.CJ.SORT_ATTACHMENT_SORT_FILTER_ZA, be.CJ.SORT_SMALLER_FIRST, be.CJ.SORT_BIGGER_FIRST]),
            filterType: a().oneOf([be.CJ.FILTER_ALL, be.CJ.FILTER_IMAGES, be.CJ.FILTER_DOCUMENTS, be.CJ.FILTER_AUDIOS, be.CJ.FILTER_VIDEOS, be.CJ.FILTER_ARCHIVES]),
            layout: a().string,
            canShowCloudFileView: a().bool,
            cloudFileViewOpened: a().bool,
            onChangeLayout: a().func,
            onToggleCloudFileView: a().func,
            fromFolderPath: a().string,
            onSelectFolder: a().func,
            accountId: a().string
        };
        var nl = n(30999)
          , rl = n(40572)
          , ol = (0,
        i.$j)(function(e) {
            var t, n, r = (0,
            Zi.AV)(e), o = (0,
            O.xC)(e), a = (0,
            ro.ku)(e), i = (0,
            m.F9)(e), l = o && o.path;
            if (a) {
                var c = (0,
                O.hD)(a)(e)
                  , s = c ? (0,
                f.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(c)) : a || (0,
                f.t)("mail.search.ALL_FOLDER");
                t = "".concat((0,
                f.t)("mail.search.SEARCH_IN"), " ").concat(s),
                n = !0
            } else
                o && (t = o.type ? (0,
                f.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(o.type)) : o.path,
                n = !1);
            var u = (0,
            Zi.U5)(e)
              , d = (0,
            Zi.Ez)(e)
              , p = (0,
            Zi.zH)(e)
              , h = be.bF === (0,
            Zi.Rr)(e);
            return {
                title: t,
                showExit: n,
                sortType: u,
                filterType: d,
                layout: p,
                selectedCount: r.length,
                fromFolderPath: l,
                accountId: i,
                isFetching: h
            }
        }, function(e) {
            return {
                onChangeLayout: function(t) {
                    return e((0,
                    nl.wx)(t))
                },
                onChangeSort: function(t) {
                    return e((0,
                    nl.rE)(t))
                },
                onChangeFilter: function(t) {
                    return e((0,
                    nl.VE)(t))
                },
                onCategory: function(t) {
                    return e((0,
                    rl.K7)(t))
                },
                onSelectViewPort: function() {
                    return e((0,
                    nl.gl)())
                },
                onSelectFolder: function(t, n) {
                    return e((0,
                    Er.selectFolder)(t, [n]))
                }
            }
        })(tl)
          , al = n(44461)
          , il = n(68418)
          , ll = n(57440)
          , cl = n(8394)
          , sl = (0,
        i.$j)(function(e) {
            var t = (0,
            Or.Ix)("autoCheckInterval")(e);
            null !== t && "undefined" !== t || (t = e.settings.preference.items.autoCheckInterval);
            var n = (0,
            Tr.Y8)(e)
              , r = (0,
            R.iX)(e);
            return {
                autoCheckInterval: t,
                lastAutoCheck: n,
                selectedLayout: v.UhU.isDesktop && (0,
                Tr.YQ)(e) == be.DJ.PREVIEW_MOBILE_EXPANDED ? (0,
                he.Z)("mail.defaultMailView") : (0,
                Tr.YQ)(e),
                selectedFolder: (0,
                Tr.a_)(e),
                fullOpenSelected: (0,
                Tr.xe)(e) || (0,
                Tr.t7)(e),
                canSaveToCloud: (0,
                ll.R5)(e),
                selectPreferenceSizeWidth: (0,
                k.hG)(e),
                selectPreferenceSizeHeight: (0,
                k.ip)(e),
                widthSplitPane: (0,
                no.m3)(e),
                heightSplitPane: (0,
                no.zh)(e),
                selectedTag: r
            }
        }, function(e) {
            return {
                onAutoCheck: function(t) {
                    e((0,
                    Er.mailAutoCheck)(t))
                },
                onSplitPaneDrag: function(t) {
                    e((0,
                    Er.updateSplitPane)(t))
                },
                onSplitPaneDragBelow: function(t) {
                    e((0,
                    Er.updateSplitPaneBelow)(t))
                },
                onSwitchLayout: function(t) {
                    return e((0,
                    il.rc)(t))
                },
                onShowCloudFileBrowser: function() {
                    return e(cl.cloudGetFolderAndQuota.apply(void 0, arguments))
                }
            }
        })
          , ul = n(43178)
          , dl = (0,
        i.$j)(function(e) {
            return {
                selectedFolder: (0,
                ll.ut)(e),
                selectedAttachments: (0,
                Zi.AV)(e),
                cloudFolderFetchStatus: (0,
                ll.SB)(e)
            }
        }, function(e) {
            return {
                onSaveToCloud: function(t, n) {
                    return e((0,
                    cl.cloudCreateUploadFile)(t, n))
                }
            }
        })
          , fl = function(e) {
            var t = e.connectDropTarget
              , n = e.children
              , o = e.className
              , a = e.canDrop
              , i = e.isOver;
            return t(r.createElement("div", {
                className: "".concat(o, " ").concat(i && a && "dragOver")
            }, n))
        };
        fl.defaultProps = {
            children: null,
            className: "",
            canDrop: !1,
            isOver: !1,
            connectDropTarget: function() {}
        },
        fl.propTypes = {
            children: a().node,
            className: a().string,
            canDrop: a().bool,
            isOver: a().bool,
            connectDropTarget: a().func
        };
        var pl = fl
          , ml = {
            drop: function(e) {
                var t = e.selectedFolder
                  , n = e.selectedAttachments;
                (0,
                e.onSaveToCloud)(n, t)
            },
            canDrop: function(e) {
                return e.cloudFolderFetchStatus === be.uP
            }
        };
        var hl = dl((0,
        li.GR)(be.ZV.CLOUD_FILE, ml, function(e, t) {
            return {
                connectDropTarget: e.dropTarget(),
                canDrop: t.canDrop(),
                isOver: t.isOver()
            }
        })(pl));
        function yl(e) {
            "@babel/helpers - typeof";
            return (yl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function bl(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, vl(r.key), r)
            }
        }
        function vl(e) {
            var t = function(e, t) {
                if ("object" !== yl(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== yl(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === yl(t) ? t : String(t)
        }
        function gl(e, t) {
            return (gl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function wl(e) {
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
                var n, r = Sl(e);
                if (t) {
                    var o = Sl(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === yl(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return El(e)
                }(this, n)
            }
        }
        function El(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Sl(e) {
            return (Sl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Tl = be.DJ.PREVIEW_RIGHT
          , Ol = be.DJ.PREVIEW_BELOW
          , Cl = be.DJ.PREVIEW_NONE
          , Pl = be.DJ.ATTACHMENT_VIEW
          , Al = function(e) {
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
                t && gl(e, t)
            }(n, r.Component);
            var t = wl(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    cloudFileViewOpened: !1,
                    selectedFolder: "",
                    resetHeight: !1,
                    belowViewSize: void 0,
                    rightViewSize: void 0
                },
                r.handleAutoCheck = r.handleAutoCheck.bind(El(r)),
                r.handleSwitchLayout = r.handleSwitchLayout.bind(El(r)),
                r.handleOutsideClick = r.handleOutsideClick.bind(El(r)),
                r.handleDragFinished = r.handleDragFinished.bind(El(r)),
                r.handleDragStart = r.handleDragStart.bind(El(r)),
                r.renderRightView = r.renderRightView.bind(El(r)),
                r.handleDragFinishedBelow = r.handleDragFinishedBelow.bind(El(r)),
                window.addEventListener("resize", r.handleSwitchLayout),
                r
            }
            return function(e, t, n) {
                t && bl(e.prototype, t),
                n && bl(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleDragFinished",
                value: function(e) {
                    var t = this.props.onSplitPaneDrag
                      , n = "".concat(e, "px");
                    t(n),
                    this.setState({
                        resetHeight: !1,
                        rightViewSize: n
                    }),
                    this.setState(function(e) {
                        return {
                            resetHeight: !1,
                            rightViewSize: n
                        }
                    })
                }
            }, {
                key: "handleDragFinishedBelow",
                value: function(e) {
                    var t = this.props.onSplitPaneDragBelow;
                    e >= (0,
                    he.Z)("mail.splitPane.minHeight") && e <= (0,
                    he.Z)("mail.splitPane.height") ? (t(e),
                    this.setState(function(t) {
                        return {
                            resetHeight: !1,
                            belowSize: e
                        }
                    })) : this.setState({
                        resetHeight: !1
                    })
                }
            }, {
                key: "handleDragStart",
                value: function() {
                    this.setState({
                        resetHeight: !0
                    })
                }
            }, {
                key: "handleOutsideClick",
                value: function(e) {
                    var t = this.props.selectedLayout
                      , n = this.state.selectedFolder;
                    if (t === Pl) {
                        var r, o, a, i = "" === n ? null === (r = document) || void 0 === r ? void 0 : null === (o = r.getElementsByClassName("ow-mail-MailAttachmentListToolbar-title")[0]) || void 0 === o ? void 0 : o.innerText : n;
                        if (void 0 === e.target || void 0 === e.target.classList || !e.target.classList.value.includes("folder") || e.target.innerText === i || "My Folders" === e.target.innerText)
                            return;
                        this.setState({
                            selectedFolder: e.target.innerText
                        });
                        for (var l = null === this || void 0 === this ? void 0 : null === (a = this.node) || void 0 === a ? void 0 : a.querySelectorAll("img"), c = 0; c < (null === l || void 0 === l ? void 0 : l.length); c++)
                            l[c].src = ""
                    }
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this.props.autoCheckInterval;
                    this.handleAutoCheck(e),
                    window.addEventListener("mousedown", this.handleOutsideClick, !1)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = e.autoCheckInterval;
                    this.props.autoCheckInterval !== t && this.handleAutoCheck(t)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    clearInterval(this.autoCheckIntervalTimer),
                    window.removeEventListener("resize", this.handleSwitchLayout),
                    window.removeEventListener("mousedown", this.handleOutsideClick, !1)
                }
            }, {
                key: "handleSwitchLayout",
                value: function() {
                    var e = this.props;
                    (0,
                    e.onSwitchLayout)(e.selectedLayout)
                }
            }, {
                key: "handleAutoCheck",
                value: function(e) {
                    var t = this;
                    clearInterval(this.autoCheckIntervalTimer),
                    e && (this.autoCheckIntervalTimer = setInterval(function() {
                        var e = t.props
                          , n = e.onAutoCheck;
                        e.selectedFolder && n(Date.now())
                    }, 1e3 * e))
                }
            }, {
                key: "renderRightView",
                value: function() {
                    var e = this.props
                      , t = (e.canSaveToCloud,
                    e.widthSplitPane)
                      , n = e.selectedTag;
                    (0,
                    he.Z)("cloud").dropFileEnable;
                    return r.createElement(s(), {
                        minSize: "276",
                        defaultSize: t || (0,
                        he.Z)("mail.splitPane.width"),
                        size: this.state.rightViewSize ? this.state.rightViewSize : t || (0,
                        he.Z)("mail.splitPane.width"),
                        maxSize: -160,
                        pane2Style: {
                            minWidth: 0
                        },
                        onDragFinished: this.handleDragFinished
                    }, r.createElement("div", {
                        className: "ow-appLayout-middle ow-appLayout-vbox"
                    }, r.createElement(al.Z, null, r.createElement(Sa, null), r.createElement("div", {
                        className: "ow-appLayout-flex"
                    }, r.createElement(ho, {
                        ItemComponent: ii,
                        selectedTag: n
                    })))), r.createElement(al.Z, null, r.createElement(Ma, {
                        previewInstance: ""
                    })))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.selectedLayout
                      , o = t.fullOpenSelected
                      , a = t.onShowCloudFileBrowser
                      , i = t.canSaveToCloud
                      , l = t.heightSplitPane
                      , c = this.state
                      , u = c.cloudFileViewOpened
                      , d = (c.resetHeight,
                    (0,
                    he.Z)("cloud").dropFileEnable)
                      , p = i && d;
                    return n && n !== Tl ? n === Ol ? r.createElement(s(), {
                        split: "horizontal",
                        className: "ow-mail-SplitPane-previewBelow",
                        size: this.state.belowSize ? this.state.belowSize : parseInt(l) < (0,
                        he.Z)("mail.splitPane.minHeight") ? (0,
                        he.Z)("mail.splitPane.minHeight") : parseInt(l) || (0,
                        he.Z)("mail.splitPane.height"),
                        minSize: (0,
                        he.Z)("mail.splitPane.minHeight"),
                        defaultSize: parseInt(l) < (0,
                        he.Z)("mail.splitPane.minHeight") ? (0,
                        he.Z)("mail.splitPane.minHeight") : parseInt(l) || (0,
                        he.Z)("mail.splitPane.height"),
                        maxSize: (0,
                        he.Z)("mail.splitPane.height"),
                        pane1Style: {
                            minHeight: (0,
                            he.Z)("mail.splitPane.minHeight")
                        },
                        onDragStarted: this.handleDragStart,
                        onDragFinished: this.handleDragFinishedBelow
                    }, r.createElement("div", {
                        className: "ow-mail-PreviewBelow-wrapper "
                    }, r.createElement(al.Z, null, r.createElement(Sa, null), r.createElement("div", {
                        className: "ow-mail-MailSummaryTable-wrapper"
                    }, r.createElement(yo, null)))), r.createElement(al.Z, null, r.createElement(Ma, {
                        previewInstance: ""
                    }))) : n === Cl ? o ? r.createElement("div", {
                        className: "ow-mail-PreviewNone-preveiw-wrapper"
                    }, r.createElement(al.Z, null, r.createElement(_a, {
                        previewInstance: ""
                    }))) : r.createElement("div", {
                        role: be.HB.PRESENTATION,
                        className: "ow-mail-PreviewNone-wrapper"
                    }, r.createElement(al.Z, null, r.createElement(Sa, null), r.createElement("div", {
                        className: "ow-mail-MailSummaryTable-wrapper"
                    }, r.createElement(yo, null)))) : n === Pl ? o ? r.createElement("div", {
                        className: "ow-mail-MailAttachmentList-preveiw-wrapper"
                    }, r.createElement(al.Z, null, r.createElement(_a, {
                        previewInstance: ""
                    }))) : r.createElement("div", {
                        ref: function(t) {
                            return e.node = t
                        },
                        className: "ow-mail-MailAttachmentView-wrapper"
                    }, r.createElement(ol, {
                        canShowCloudFileView: p,
                        cloudFileViewOpened: u,
                        onToggleCloudFileView: function() {
                            e.setState({
                                cloudFileViewOpened: !u
                            }),
                            u || a()
                        }
                    }), r.createElement("div", {
                        className: "ow-mail-MailAttachmentList-wrapper ow-mail-attachment-wrapper"
                    }, p && u ? r.createElement(s(), {
                        size: 300,
                        minSize: 300,
                        maxSize: 420,
                        primary: "second"
                    }, r.createElement(al.Z, null, r.createElement(Ki, {
                        cloudFileViewOpened: !0
                    })), r.createElement(al.Z, null, r.createElement(ul.Z, {
                        style: {
                            height: "100%",
                            background: "#fff"
                        },
                        isModalMode: !1,
                        canDropFile: !0,
                        fileDropTarget: hl,
                        show: !0,
                        title: (0,
                        f.t)("cloud.CLOUD_TITLE"),
                        addBtnLabel: (0,
                        f.t)("cloud.browser.directory.ADD"),
                        okBtnLabel: (0,
                        f.t)("cloud.browser.directory.CONFIRM_BUTTON")
                    }))) : r.createElement(al.Z, null, r.createElement(Ki, {
                        cloudFileViewOpened: !1
                    })))) : this.renderRightView() : this.renderRightView()
                }
            }]),
            n
        }();
        Al.propTypes = {
            selectedLayout: a().oneOf([Tl, Ol, Cl, Pl]).isRequired,
            selectedFolder: a().string.isRequired,
            fullOpenSelected: a().bool.isRequired,
            canSaveToCloud: a().bool.isRequired,
            autoCheckInterval: a().number.isRequired,
            lastAutoCheck: a().number.isRequired,
            onAutoCheck: a().func.isRequired,
            onSwitchLayout: a().func.isRequired,
            onShowCloudFileBrowser: a().func.isRequired
        };
        var Rl = sl(Al)
          , kl = n(90872)
          , Il = n(76707)
          , Nl = n.n(Il)
          , Dl = n(15292)
          , Ml = n.n(Dl)
          , _l = n(32022)
          , jl = n.n(_l)
          , Ll = n(35369)
          , Fl = n(5613)
          , xl = n(55594)
          , Bl = n.n(xl)
          , Hl = n(78295)
          , Ul = n.n(Hl)
          , Zl = n(70293)
          , Vl = n.n(Zl)
          , Kl = n(10091)
          , ql = n(92520);
        function Yl(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Gl(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return Gl(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Gl(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Gl(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var Wl = (0,
        i.$j)(function(e) {
            var t = (0,
            Tr.xC)(e)
              , n = (0,
            Tr.ku)(e)
              , r = t && t.path
              , o = r || n
              , a = (0,
            Tr.YQ)(e)
              , i = (0,
            h.UD)(e)
              , l = (0,
            Tr.aV)(e) || (0,
            Tr.kb)(e)
              , c = [{
                name: (0,
                f.t)("mail.search.ALL_FOLDER"),
                path: "",
                type: ""
            }].concat(Yl((0,
            Tr.Gt)(e)));
            return {
                accountId: (0,
                m.F9)(e),
                fromFolderPath: r,
                layout: a,
                searchSelected: l,
                selectedFolderPath: o,
                folderData: c,
                folderDisplay: function(t) {
                    var n = (0,
                    Tr.hD)(t)(e);
                    return n && (0,
                    f.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(n)) || t || (0,
                    f.t)("mail.search.ALL_FOLDER")
                },
                externalFolders: i,
                dateFormat: (0,
                k.Ox)(e, !0)
            }
        }, function(e) {
            return {
                onSelectFolder: function(t, n) {
                    return e((0,
                    Er.selectFolder)(t, [n]))
                },
                onSearchAttachment: function(t) {
                    return e((0,
                    Er.searchMailAttachment)(t))
                },
                onSearch: function(t, n) {
                    return e((0,
                    Er.searchMailSummary)(t, n))
                },
                onAdvanceSearch: function(t, n) {
                    return e((0,
                    Er.advanceSearchMailSummary)(t, n))
                }
            }
        });
        function Xl(e) {
            "@babel/helpers - typeof";
            return (Xl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var zl = ["terms", "isAdvancedSearchShow", "selectedFolderPath", "after", "before"];
        function Jl(e, t) {
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
        function $l(e, t, n) {
            return (t = ec(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Ql(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, ec(r.key), r)
            }
        }
        function ec(e) {
            var t = function(e, t) {
                if ("object" !== Xl(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Xl(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Xl(t) ? t : String(t)
        }
        function tc(e, t) {
            return (tc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function nc(e) {
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
                var n, r = oc(e);
                if (t) {
                    var o = oc(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Xl(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return rc(e)
                }(this, n)
            }
        }
        function rc(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function oc(e) {
            return (oc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ac = (0,
        ql.Z)(Kl.Z.Dropdown)
          , ic = function(e) {
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
                t && tc(e, t)
            }(n, r.PureComponent);
            var t = nc(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).handleOnHide = r.handleOnHide.bind(rc(r)),
                r.handleAdvanceBtnClick = r.handleAdvanceBtnClick.bind(rc(r)),
                r.handleChange = r.handleChange.bind(rc(r)),
                r.handleSelectFolder = r.handleSelectFolder.bind(rc(r)),
                r.handleChangeStart = r.handleChangeStart.bind(rc(r)),
                r.handleChangeEnd = r.handleChangeEnd.bind(rc(r)),
                r.handleQuickSearch = r.handleQuickSearch.bind(rc(r)),
                r.handleAdvSearch = r.handleAdvSearch.bind(rc(r)),
                r.clearField = r.clearField.bind(rc(r)),
                r.handleEnterKey = r.handleEnterKey.bind(rc(r)),
                r.getInitState = r.getInitState.bind(rc(r)),
                r.state = r.getInitState(),
                r
            }
            return function(e, t, n) {
                t && Ql(e.prototype, t),
                n && Ql(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.searchSelected === this.props.searchSelected || e.searchSelected || this.setState(this.getInitState())
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this.props.fromFolderPath;
                    e && (this.lastFolderPath = e)
                }
            }, {
                key: "getInitState",
                value: function() {
                    return {
                        terms: "",
                        recipient: "",
                        sender: "",
                        subject: "",
                        body: "",
                        folderPath: "",
                        selectedFolderPath: null,
                        after: null,
                        before: null,
                        isAdvancedSearchShow: !1
                    }
                }
            }, {
                key: "clearField",
                value: function(e) {
                    this.setState($l({}, e, ""));
                    var t = this.props;
                    (0,
                    t.onSelectFolder)(t.accountId, this.lastFolderPath)
                }
            }, {
                key: "handleOnHide",
                value: function(e) {
                    e && e.target.blockRootClose || this.setState(this.getInitState())
                }
            }, {
                key: "handleChange",
                value: function(e, t) {
                    this.setState($l({}, e, t))
                }
            }, {
                key: "handleEnterKey",
                value: function(e) {
                    "terms" === e && this.handleQuickSearch()
                }
            }, {
                key: "handleQuickSearch",
                value: function() {
                    var e = this.props
                      , t = e.accountId
                      , n = e.onSearch
                      , r = e.onSearchAttachment
                      , o = e.layout
                      , a = this.props.selectedFolderPath
                      , i = this.state.terms;
                    i && i.trim() && (o === be.DJ.ATTACHMENT_VIEW ? r({
                        attachName: i,
                        folderPath: a
                    }) : n(a && !window.UXConfig.mail.quickSearchAllFolders ? {
                        terms: i,
                        folderPath: a
                    } : {
                        terms: i
                    }, t))
                }
            }, {
                key: "handleAdvSearch",
                value: function() {
                    var e = this.props
                      , t = e.accountId
                      , n = e.onAdvanceSearch
                      , r = this.state
                      , o = (r.terms,
                    r.isAdvancedSearchShow,
                    r.selectedFolderPath,
                    r.after)
                      , a = r.before
                      , i = Jl(r, zl);
                    i.after = o && jl()(o).add(864e5 - 1, "milliseconds").valueOf(),
                    i.before = a && jl()(a).add(864e5 - 1, "milliseconds").valueOf(),
                    Object.keys(i).forEach(function(e) {
                        return !i[e] && delete i[e]
                    }),
                    n(i, t),
                    this.setState({
                        terms: "",
                        isAdvancedSearchShow: !1
                    })
                }
            }, {
                key: "handleSelectFolder",
                value: function(e) {
                    this.setState({
                        folderPath: e
                    })
                }
            }, {
                key: "handleChangeStart",
                value: function(e) {
                    null !== e && void 0 !== e && e.isAfter(this.state.before) ? this.setState({
                        after: jl()(this.state.before),
                        before: e
                    }) : this.setState({
                        after: e
                    })
                }
            }, {
                key: "handleChangeEnd",
                value: function(e) {
                    null !== e && void 0 !== e && e.isBefore(this.state.after) ? this.setState({
                        after: e,
                        before: jl()(this.state.after)
                    }) : this.setState({
                        before: e
                    })
                }
            }, {
                key: "handleAdvanceBtnClick",
                value: function() {
                    var e = this.state.isAdvancedSearchShow
                      , t = this.props.selectedFolderPath;
                    this.setState({
                        folderPath: t || this.state.folderPath,
                        isAdvancedSearchShow: !e
                    })
                }
            }, {
                key: "renderInputField",
                value: function(e) {
                    var t = this
                      , n = e.placeHolderText
                      , o = e.value
                      , a = e.fieldName
                      , i = e.label
                      , l = void 0 === i ? "" : i
                      , c = e.clear;
                    return r.createElement("div", {
                        className: "ow-mail-MailSearch-input"
                    }, r.createElement(Ll.UP, {
                        name: a,
                        label: l,
                        "aria-label": l || n,
                        className: "ow-mail-MailSearch-input-text",
                        type: "text",
                        placeholder: n,
                        value: o,
                        onChange: function(e) {
                            return t.handleChange(a, e)
                        },
                        onKeyDown: function(e) {
                            return 13 === e.keyCode ? t.handleEnterKey(a) : ""
                        }
                    }), r.createElement(r.Fragment, null, (o || c) && r.createElement(L.Z, {
                        name: "close",
                        className: "ow-mail-MailSearch-input-clear",
                        onClick: function(e) {
                            return t.clearField(a, e)
                        },
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("common.CLOSE"),
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            return e.key === be.BY.ENTERKEY && t.clearField(a, e)
                        }
                    }), r.createElement(L.Z, {
                        name: "search-active",
                        className: "ow-mail-MailSearch-input-search",
                        onClick: function() {
                            return t.handleEnterKey(a)
                        },
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("mail.search.SEARCH"),
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            return e.key === be.BY.ENTERKEY && t.handleEnterKey(a)
                        }
                    })))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    if (!window.TimeUtil)
                        return null;
                    var t = this.state
                      , n = t.isAdvancedSearchShow
                      , o = t.folderPath
                      , a = this.props
                      , i = a.searchSelected
                      , l = a.folderDisplay
                      , c = a.selectedFolderPath
                      , s = a.folderData
                      , u = a.layout
                      , d = a.accountId
                      , p = a.externalFolders
                      , m = a.dateFormat
                      , h = !1
                      , y = s;
                    p && (p.find(function(e) {
                        e.id === d && (h = !!e.protocol.match(be.p6))
                    }),
                    h && (y = y && y.filter(function(e) {
                        return e.type.toLowerCase().match(be.S.INBOX)
                    })));
                    var b = this.state.sender || this.state.recipient || this.state.body || this.state.subject || this.state.before || this.state.after
                      , v = (0,
                    he.Z)("mail.quickSearchAllFolders") ? (0,
                    f.t)("mail.search.DEFAULT_SEARCH_PLACEHOLDER") : "".concat((0,
                    f.t)("mail.search.SEARCH_IN")).concat(l(c))
                      , g = u === be.DJ.ATTACHMENT_VIEW ? (0,
                    f.t)("mail.attachmentView.SEARCH_BY_ATTACH_NAME") : v;
                    return r.createElement("div", {
                        className: "ow-mail-MailSearch ".concat(i ? "ow-mail-MailSearch-selected" : ""),
                        tabIndex: 0
                    }, r.createElement("div", {
                        ref: function(t) {
                            e.topBorder = t
                        }
                    }), r.createElement(Ll.l0, {
                        className: "ow-mail-MailSearch-quickField"
                    }, this.renderInputField({
                        placeHolderText: g,
                        value: this.state.terms,
                        fieldName: "terms",
                        clear: i
                    }), u !== be.DJ.ATTACHMENT_VIEW ? r.createElement(_.Z, {
                        onClick: this.handleAdvanceBtnClick,
                        className: "ow-mail-MailSearch-arrow",
                        title: (0,
                        f.t)("common.SHOW_ADVANCED_TOOLTIP"),
                        "aria-label": n ? (0,
                        f.t)("aria.label.EXPAND") : (0,
                        f.t)("aria.label.COLLAPSE")
                    }, r.createElement("span", {
                        className: "caret"
                    })) : r.createElement("span", {
                        className: "ow-mail-MailSearch-spacing"
                    })), r.createElement(Nl(), {
                        show: n,
                        container: this,
                        target: this.topBorder,
                        placement: "bottom",
                        rootClose: !0,
                        onHide: this.handleOnHide,
                        animation: !1
                    }, r.createElement("div", {
                        className: "ow-mail-MailSearch-overlay"
                    }, r.createElement(Ml(), null, r.createElement(Ml().Body, null, r.createElement(Ll.l0, {
                        horizontal: !0
                    }, this.renderInputField({
                        value: this.state.recipient,
                        fieldName: "recipient",
                        label: (0,
                        f.t)("mail.search.RECIPIENT")
                    }), this.renderInputField({
                        value: this.state.sender,
                        fieldName: "sender",
                        label: (0,
                        f.t)("mail.search.SENDER")
                    }), this.renderInputField({
                        value: this.state.subject,
                        fieldName: "subject",
                        label: (0,
                        f.t)("mail.search.SUBJECT")
                    }), this.renderInputField({
                        value: this.state.body,
                        fieldName: "body",
                        label: (0,
                        f.t)("mail.search.BODY")
                    }), r.createElement("div", {
                        className: "ow-mail-MailSearch-folder"
                    }, r.createElement("div", {
                        className: "ow-mail-MailSearch-folderLabel",
                        "aria-label": (0,
                        f.t)("mail.search.FOLDER")
                    }, (0,
                    f.t)("mail.search.FOLDER")), r.createElement(ac, {
                        folderData: h ? y : s,
                        onSelectFolder: this.handleSelectFolder,
                        disabled: 0 === s.length,
                        title: l(o),
                        selectedPath: o
                    })), r.createElement(Ul(), {
                        controlId: "fromDate",
                        bsSize: ""
                    }, r.createElement(Vl(), {
                        componentClass: Bl(),
                        sm: 2,
                        xs: 2
                    }, (0,
                    f.t)("calendar.editorView.FIELD_TYPE_SELECTED_TEXT.DATE")), r.createElement(Vl(), {
                        className: "ow-calendar-MailSearch-dates",
                        sm: 9,
                        xs: 9
                    }, r.createElement("div", {
                        style: {
                            position: "relative"
                        }
                    }, r.createElement("label", {
                        className: "ow-icon-ico-calendar-datepicker"
                    }, " ", r.createElement(Fl.Z, {
                        name: "afterDate",
                        dateFormat: m,
                        placeholderText: (0,
                        f.t)("mail.search.FROM_DATE"),
                        title: (0,
                        f.t)("mail.search.FROM_DATE"),
                        className: "ow-calendar-MailSearch-from",
                        selected: this.state.after,
                        selectsStart: !0,
                        startDate: this.state.after,
                        endDate: this.state.before,
                        onChange: this.handleChangeStart,
                        maxDate: jl()(),
                        ref: function(e) {
                            e && (e.onInputClick = function() {}
                            )
                        }
                    }))), r.createElement("span", {
                        className: "ow-calendar-MailSearch-dates-seperator"
                    }, " - "), r.createElement("div", {
                        style: {
                            position: "relative"
                        }
                    }, r.createElement("label", {
                        className: "ow-icon-ico-calendar-datepicker"
                    }, " ", r.createElement(Fl.Z, {
                        name: "beforeDate",
                        dateFormat: m,
                        placeholderText: (0,
                        f.t)("mail.search.TO_DATE"),
                        title: (0,
                        f.t)("mail.search.TO_DATE"),
                        className: "ow-calendar-MailSearch-to",
                        selected: this.state.before,
                        selectsEnd: !0,
                        startDate: this.state.after,
                        endDate: this.state.before,
                        onChange: this.handleChangeEnd,
                        maxDate: jl()(),
                        popperClassName: "ow-react-datepicker-popper-alignment",
                        ref: function(e) {
                            e && (e.onInputClick = function() {}
                            )
                        }
                    }))))), r.createElement("div", {
                        className: "ow-mail-MailSearch-searchBtn-wrapper"
                    }, r.createElement(_.Z, {
                        className: "ow-button-primary btn btn-default",
                        onClick: this.handleAdvSearch,
                        disabled: !b,
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        f.t)("mail.search.SEARCH"),
                        "aria-disabled": !b
                    }, (0,
                    f.t)("mail.search.SEARCH")))))))))
                }
            }]),
            n
        }();
        ic.defaultProps = {
            fromFolderPath: null,
            searchSelected: !1,
            selectedFolderPath: null,
            layout: "",
            accountId: "",
            folderData: null,
            folderDisplay: function() {},
            onSearch: function() {},
            onSearchAttachment: function() {},
            onAdvanceSearch: function() {},
            onSelectFolder: function() {}
        },
        ic.propTypes = {
            accountId: a().string,
            fromFolderPath: a().string,
            layout: a().string,
            folderData: a().arrayOf(a().object),
            searchSelected: a().bool,
            selectedFolderPath: a().string,
            folderDisplay: a().func,
            onSearch: a().func,
            onSearchAttachment: a().func,
            onAdvanceSearch: a().func,
            onSelectFolder: a().func
        };
        var lc = Wl(ic)
          , cc = n(19745)
          , sc = n.n(cc)
          , uc = n(92012)
          , dc = n.n(uc)
          , fc = n(38868)
          , pc = n.n(fc)
          , mc = n(82e3)
          , hc = n.n(mc)
          , yc = n(29798)
          , bc = n(21453)
          , vc = n(51402);
        function gc(e) {
            "@babel/helpers - typeof";
            return (gc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function wc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Ec(r.key), r)
            }
        }
        function Ec(e) {
            var t = function(e, t) {
                if ("object" !== gc(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== gc(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === gc(t) ? t : String(t)
        }
        function Sc(e, t) {
            return (Sc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Tc(e) {
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
                var n, r = Cc(e);
                if (t) {
                    var o = Cc(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === gc(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Oc(e)
                }(this, n)
            }
        }
        function Oc(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Cc(e) {
            return (Cc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Pc = 60 * ((0,
        he.Z)("mail.quotaDataAutoLoadInterval") || 30) * 1e3
          , Ac = function(e) {
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
                t && Sc(e, t)
            }(n, r.PureComponent);
            var t = Tc(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    updatedDate: new Date
                },
                r.autoUpdateQuotaState = r.autoUpdateQuotaState.bind(Oc(r)),
                r
            }
            return function(e, t, n) {
                t && wc(e.prototype, t),
                n && wc(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    !function t() {
                        var n = setTimeout(function() {
                            e.autoUpdateQuotaState(),
                            clearTimeout(n),
                            t()
                        }, Pc)
                    }()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = e.quota
                      , n = this.props.quota
                      , r = n.usedBytes
                      , o = n.limitBytes;
                    r === t.usedBytes && o === t.limitBytes || this.setState({
                        updatedDate: new Date
                    })
                }
            }, {
                key: "autoUpdateQuotaState",
                value: function() {
                    (0,
                    this.props.loadQuotaData)(),
                    this.setState({
                        updatedDate: new Date
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n, o, a, i, l = this.props, c = l.quota, s = l.location, u = l.timezone, d = l.prefItems, p = c.usedBytes, m = c.limitBytes, h = "", y = (0,
                    he.Z)("mail.unlimited");
                    if (m && (h = y && parseInt(y, 10) > parseInt(m, 10) ? (0,
                    ye.WU)((0,
                    f.t)("settings.mail.USED"), (0,
                    Vi.QM)(p, 0)) : (0,
                    ye.WU)((0,
                    f.t)("settings.mail.STORAGE_USAGE_DESC"), (0,
                    Vi.QM)(p, 0), parseInt(Math.round(100 * p / m).toFixed((0,
                    he.Z)("mail.quotaPercentageFactor"))), (0,
                    Vi.QM)(m, 0))),
                    "false" === d["attr.user.timezone.UseDeviceTimeZone"] && void 0 != u)
                        o = this.state.updatedDate.toLocaleTimeString("en-US", {
                            timeZone: u
                        }),
                        n = (0,
                        ye.WU)((0,
                        f.t)("settings.mail.MESSAGE_CLEAN_UP_QUOTA_MESSAGE"), hc()(o, "hh:mm:ss a").format(null === (a = window) || void 0 === a ? void 0 : null === (i = a.TimeUtil) || void 0 === i ? void 0 : i.getDateTimePatterns().ShortTime));
                    else if (void 0 != (null === (e = window) || void 0 === e ? void 0 : null === (t = e.TimeUtil) || void 0 === t ? void 0 : t.getSelectTimezone())) {
                        var b, v;
                        o = this.state.updatedDate.toLocaleTimeString(),
                        n = (0,
                        ye.WU)((0,
                        f.t)("settings.mail.MESSAGE_CLEAN_UP_QUOTA_MESSAGE"), hc()(o, "hh:mm:ss a").format(null === (b = window) || void 0 === b ? void 0 : null === (v = b.TimeUtil) || void 0 === v ? void 0 : v.getDateTimePatterns().ShortTime))
                    }
                    var g = (100 * p / m).toFixed((0,
                    he.Z)("mail.quotaPercentageFactor"))
                      , w = 100 - g
                      , E = (0,
                    he.Z)("mail.cleanup.enabled")
                      , S = (0,
                    he.Z)("mail.dataIndicator");
                    return r.createElement(pc(), {
                        className: "ow-msg-right-container",
                        tabIndex: 0
                    }, !E || "/mail" !== s.pathname && "/settings" !== s.pathname ? null : r.createElement(Vl(), {
                        lg: "6",
                        xs: "6",
                        md: "6",
                        className: "ow-user-managestorage-container"
                    }, r.createElement(sc(), {
                        title: h,
                        eventKey: g,
                        className: "ow-quotadisplay-navbar",
                        tabIndex: -1
                    }, S && r.createElement(dc(), {
                        className: "ow-progressbar-maindiv",
                        tabIndex: 0
                    }, r.createElement(dc(), {
                        className: "ow-progressbar-quotaDisplay",
                        variant: "success",
                        now: g,
                        key: g
                    }), r.createElement(dc(), {
                        className: "ow-progressbar-remainingQuotaDisplay",
                        variant: "danger",
                        now: w,
                        key: w
                    })), r.createElement("fragment", {
                        className: "ow-quota-message",
                        tabIndex: 0
                    }, h), r.createElement("fragment", {
                        className: "ow-quota-message",
                        tabIndex: 0
                    }, n))), E && "/mail" === s.pathname ? r.createElement(Vl(), {
                        lg: "6",
                        xs: "6",
                        md: "6"
                    }, r.createElement(bc.Z, {
                        location: s,
                        to: "/settings#cleanup",
                        className: "ow-manage-storage",
                        role: be.HB.NAVIGATION,
                        tabIndex: -1
                    }, r.createElement(sc(), {
                        title: (0,
                        f.t)("settings.mail.MESSAGE_CLEAN_UP_TOOL_LINK"),
                        eventKey: "nav_message_cleanup",
                        "aria-label": (0,
                        f.t)("settings.mail.MESSAGE_CLEAN_UP_TOOL_LINK")
                    }, r.createElement("fragment", {
                        className: "ow-message-cleanup-link",
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            var t;
                            return e.key === be.BY.ENTERKEY && (null === e || void 0 === e ? void 0 : null === (t = e.target) || void 0 === t ? void 0 : t.click())
                        }
                    }, (0,
                    f.t)("settings.mail.MESSAGE_CLEAN_UP_TOOL_LINK"))))) : null)
                }
            }]),
            n
        }();
        Ac.defaultProps = {
            quota: {},
            loadQuotaData: function() {}
        },
        Ac.propTypes = {
            location: a().object.isRequired,
            quota: a().shape({
                usedBytes: a().number,
                limitBytes: a().number
            }),
            loadQuotaData: a().func
        };
        var Rc = (0,
        i.$j)(function(e) {
            var t = ((0,
            vc.s5)(e) || {}).id;
            return {
                prefItems: (0,
                k.af)(e),
                timezone: t
            }
        }, function(e) {
            return {
                loadQuotaData: function() {
                    return e((0,
                    yc.Uj)())
                }
            }
        })(Ac)
          , kc = n(13536)
          , Ic = n(59904);
        function Nc(e) {
            "@babel/helpers - typeof";
            return (Nc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Dc(e, t) {
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
        function Mc(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Nc(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Nc(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Nc(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var _c = (0,
        i.$j)(function(e) {
            var t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Dc(Object(n), !0).forEach(function(t) {
                        Mc(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dc(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, e.mail.actionConfirm);
            return t.show = t.type === Ic.Hbh,
            t
        }, function(e) {
            return {
                onYes: function() {
                    return e((0,
                    y.L2A)(be.iQ.YES))
                },
                onNo: function() {
                    return e((0,
                    y.L2A)(be.iQ.NO))
                },
                onCancel: function() {
                    return e((0,
                    y.L2A)(be.iQ.CANCEL))
                },
                onDismiss: function() {
                    return e((0,
                    y.L2A)(be.iQ.CANCEL))
                }
            }
        })(kc.Z)
          , jc = n(54015)
          , Lc = n(38881)
          , Fc = n(98401);
        function xc(e) {
            "@babel/helpers - typeof";
            return (xc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Bc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Hc(r.key), r)
            }
        }
        function Hc(e) {
            var t = function(e, t) {
                if ("object" !== xc(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== xc(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === xc(t) ? t : String(t)
        }
        function Uc(e, t) {
            return (Uc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Zc(e) {
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
                var n, r = Kc(e);
                if (t) {
                    var o = Kc(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === xc(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Vc(e)
                }(this, n)
            }
        }
        function Vc(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Kc(e) {
            return (Kc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var qc = function(e) {
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
                t && Uc(e, t)
            }(n, r.PureComponent);
            var t = Zc(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).handleCancel = r.handleCancel.bind(Vc(r)),
                r.handleColorChanged = r.handleColorChanged.bind(Vc(r)),
                r.handleSave = r.handleSave.bind(Vc(r)),
                r.disableSaveBtn = r.disableSaveBtn.bind(Vc(r)),
                r.onFormChange = r.onFormChange.bind(Vc(r)),
                r.handleShow = r.handleShow.bind(Vc(r)),
                r.state = {
                    colorIdx: 0,
                    clickCancel: !1,
                    deleteEnabled: !1
                },
                r
            }
            return function(e, t, n) {
                t && Bc(e.prototype, t),
                n && Bc(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleShow",
                value: function() {
                    var e = this
                      , t = this.props.tag
                      , n = (void 0 === t ? {} : t).color
                      , r = void 0 === n ? 0 : n
                      , o = be.LR.indexOf(r);
                    setTimeout(function() {
                        var t = (0,
                        me.findDOMNode)(e.nameInput).querySelector("input");
                        t.setSelectionRange(1e3, 1e3),
                        t.focus()
                    }, 300),
                    this.setState({
                        clickCancel: !1,
                        deleteEnabled: !1
                    }),
                    o > -1 && this.setState({
                        colorIdx: o,
                        clickCancel: !1
                    })
                }
            }, {
                key: "handleSave",
                value: function() {
                    var e = this.props
                      , t = e.onSaveTags
                      , n = e.tag
                      , r = void 0 === n ? {} : n
                      , o = this.form.getModel().tagName
                      , a = be.LR[this.state.colorIdx];
                    t({
                        id: r.id,
                        name: o,
                        color: a
                    }),
                    this.setState({
                        colorIdx: 0,
                        canSave: !1,
                        deleteEnabled: !0
                    })
                }
            }, {
                key: "handleColorChanged",
                value: function(e) {
                    this.state.colorIdx !== e && this.setState({
                        colorIdx: e,
                        canSave: !0
                    }),
                    this.form.validateForm()
                }
            }, {
                key: "isChanged",
                value: function() {
                    return -1 !== this.state.colorIdx && this.state.colorIdx !== Number(color)
                }
            }, {
                key: "disableSaveBtn",
                value: function() {
                    this.setState({
                        canSave: !1
                    })
                }
            }, {
                key: "onFormChange",
                value: function() {
                    (0,
                    me.findDOMNode)(this.nameInput).querySelector("input").value.trim() ? this.setState({
                        canSave: !0
                    }) : this.setState({
                        canSave: !1
                    })
                }
            }, {
                key: "handleCancel",
                value: function() {
                    this.props.onCloseCreateTags(),
                    this.setState({
                        colorIdx: 0,
                        canSave: !1,
                        clickCancel: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.showTagsModal
                      , o = t.tagNameValidator
                      , a = t.tag
                      , i = void 0 === a ? {} : a
                      , l = i.name
                      , c = void 0 === l ? "" : l
                      , s = this.state
                      , u = s.clickCancel
                      , d = s.deleteEnabled;
                    return r.createElement(Fc.Z, {
                        show: n,
                        onHide: this.handleCancel,
                        onEntered: function() {
                            return e.handleShow()
                        },
                        backdrop: "static",
                        className: "ow-tags-tagsModal"
                    }, r.createElement(Fc.Z.Header, {
                        closeButton: !0
                    }, r.createElement(Fc.Z.Title, {
                        id: "ow-tagedit-dialog",
                        role: be.HB.HEADING,
                        "aria-level": be.DU.H2
                    }, null !== i && void 0 !== i && i.id ? (0,
                    f.t)("mail.tags.tagsEditor.TITLE_EDIT") : (0,
                    f.t)("mail.tags.tagsEditor.TITLE_CREATE"))), r.createElement(Fc.Z.Body, null, r.createElement(Ll.l0, {
                        ref: function(t) {
                            e.form = t
                        },
                        onValidSubmit: this.handleSave,
                        onInValid: this.disableSaveBtn,
                        onChange: this.onFormChange,
                        className: "ow-tagsEditor-form"
                    }, r.createElement(Ll.UP, {
                        ref: function(t) {
                            e.nameInput = t
                        },
                        className: "ow-tags-tagsEditor-tagName",
                        label: "".concat((0,
                        f.t)("mail.tags.tagsEditor.LABEL_TAG_NAME")),
                        "aria-label": (0,
                        f.t)("mail.tags.tagsEditor.LABEL_TAG_NAME"),
                        "aria-required": "true",
                        name: "tagName",
                        value: unescape(c),
                        required: !0,
                        validations: {
                            customRegexp: function(e, t) {
                                return o(t, u, d)
                            }
                        }
                    }), r.createElement("div", {
                        className: "ow-tags-tagsEditor-colorField"
                    }, r.createElement("div", {
                        className: "ow-tags-tagsEditor-colorLabel"
                    }, "".concat((0,
                    f.t)("mail.tags.tagsEditor.LABEL_COLOR"))), r.createElement("div", {
                        className: "ow-tags-tagsEditor-colors"
                    }, be.LR.map(function(t, n) {
                        var o;
                        return r.createElement("div", {
                            role: be.HB.RADIO,
                            className: "ow-tags-tagsEditor-colorsItem".concat(e.state.colorIdx === n ? " ow-tags-tagsEditor-colorsItem-selected" : ""),
                            style: {
                                backgroundColor: t
                            },
                            onClick: function() {
                                return e.handleColorChanged(n)
                            },
                            tabIndex: 0,
                            "aria-checked": (null === e || void 0 === e ? void 0 : null === (o = e.state) || void 0 === o ? void 0 : o.colorIdx) === n
                        })
                    }))))), r.createElement(Fc.Z.Footer, null, r.createElement(_.Z, {
                        className: "ow-tasks-TasksGroupEditor-saveBtn ow-button-primary",
                        onClick: function() {
                            e.form.submit()
                        },
                        disabled: !this.state.canSave,
                        "aria-label": (0,
                        f.t)("common.SAVE")
                    }, (0,
                    f.t)("common.SAVE")), r.createElement(_.Z, {
                        className: "ow-tasks-TasksGroupEditor-cancelBtn",
                        onClick: this.handleCancel,
                        "aria-label": (0,
                        f.t)("common.CANCEL")
                    }, (0,
                    f.t)("common.CANCEL"))))
                }
            }]),
            n
        }()
          , Yc = n(16955)
          , Gc = n.n(Yc)
          , Wc = (0,
        he.Z)("contacts").regexp.folderNameInvalidChars
          , Xc = (0,
        i.$j)(function(e) {
            var t = (0,
            R.ZN)(e)
              , n = (0,
            R.gQ)(e)
              , r = (0,
            R.P2)(e);
            return {
                showTagsModal: t,
                colors: UXConfig.calendar.calendarColors.map(function(e) {
                    return "#".concat(e)
                }),
                tagNameValidator: function(e, t, o) {
                    var a = e.trim();
                    return !!t || !!o || (a ? n.some(function(e) {
                        var t, n;
                        return e.id !== (null === r || void 0 === r ? void 0 : null === (t = r[0]) || void 0 === t ? void 0 : t.id) && (null === e || void 0 === e ? void 0 : null === (n = e.name) || void 0 === n ? void 0 : n.toUpperCase().trim()) === (null === a || void 0 === a ? void 0 : a.toUpperCase().trim())
                    }) ? (0,
                    f.t)("mail.tags.tagsEditor.TAG_ALREADY_EXISTS") : a.length > 64 ? (0,
                    ye.WU)((0,
                    f.t)("mail.tags.warningMessage.WARNING_TOO_LONG"), (0,
                    f.t)("mail.tags.TAGS_HEADING"), 64) : "" !== Gc()(e) && !Wc.test(e) || (0,
                    ye.WU)((0,
                    f.t)("mail.tags.tagsEditor.VALIDATE_TAG_NAME"), (0,
                    ye.iC)(Wc)) : (0,
                    f.t)("common.errorMessage.REQUIRED"))
                },
                tag: null === r || void 0 === r ? void 0 : r[0]
            }
        }, function(e) {
            return {
                onCreateTags: function() {
                    return e((0,
                    T.E0)(name, color))
                },
                onCloseCreateTags: function() {
                    return e((0,
                    T.F3)())
                },
                onSaveTags: function(t) {
                    return e((0,
                    T.MB)(t))
                }
            }
        })(qc);
        function zc(e) {
            "@babel/helpers - typeof";
            return (zc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Jc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, $c(r.key), r)
            }
        }
        function $c(e) {
            var t = function(e, t) {
                if ("object" !== zc(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== zc(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === zc(t) ? t : String(t)
        }
        function Qc(e, t) {
            return (Qc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function es(e) {
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
                var n, r = ns(e);
                if (t) {
                    var o = ns(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === zc(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return ts(e)
                }(this, n)
            }
        }
        function ts(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ns(e) {
            return (ns = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var rs = function(e) {
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
                t && Qc(e, t)
            }(n, r.PureComponent);
            var t = es(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).handleCancel = r.handleCancel.bind(ts(r)),
                r.handleEditTag = r.handleEditTag.bind(ts(r)),
                r.handleDeleteTag = r.handleDeleteTag.bind(ts(r)),
                r
            }
            return function(e, t, n) {
                t && Jc(e.prototype, t),
                n && Jc(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleEditTag",
                value: function(e) {
                    (0,
                    this.props.onEditTag)(e)
                }
            }, {
                key: "handleDeleteTag",
                value: function(e) {
                    (0,
                    this.props.onDeleteTag)({
                        modalType: "confirm",
                        modalProps: {
                            title: (0,
                            f.t)("mail.tags.tagsEditor.REMOVE_TAG"),
                            message: (0,
                            f.t)("mail.tags.tagsEditor.REMOVE_TAG_CONFIRMATION")
                        }
                    }, e)
                }
            }, {
                key: "handleCancel",
                value: function() {
                    this.props.onCloseManageTags()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.showManageModal
                      , o = t.tagsList;
                    return r.createElement(Fc.Z, {
                        show: n,
                        onHide: this.handleCancel,
                        backdrop: "static",
                        role: be.HB.DIALOG,
                        "aria-labelledby": "ow-manage-tags-dialog",
                        className: "ow-tags-tagsModal"
                    }, r.createElement(Fc.Z.Header, {
                        closeButton: !0
                    }, r.createElement(Fc.Z.Title, {
                        id: "ow-manage-tags-dialog",
                        "aria-label": "ow-manage-tags-dialog"
                    }, (0,
                    f.t)("mail.tags.tagsEditor.TITLE_MANAGE"))), r.createElement(Fc.Z.Body, null, r.createElement("div", {
                        className: "ow-simpleList-Managetags-item"
                    }, null === o || void 0 === o ? void 0 : o.map(function(t) {
                        return r.createElement(pc(), {
                            key: t.id,
                            className: "ow-simpleList-tags-item",
                            "aria-label": t.name
                        }, r.createElement(Vl(), {
                            lg: "9",
                            className: "ow-simpleList-tags-item-name"
                        }, r.createElement(L.Z, {
                            style: {
                                color: null === t || void 0 === t ? void 0 : t.color
                            },
                            name: "ow-icon-tag ow-icon-tag",
                            className: "ow-icon-tag",
                            role: be.HB.BUTTON
                        }), null === t || void 0 === t ? void 0 : t.name), r.createElement(Vl(), {
                            lg: "3",
                            className: "ow-simpleList-tags-item-button"
                        }, r.createElement(_.Z, {
                            onClick: function() {
                                e.handleEditTag(t)
                            },
                            title: (0,
                            f.t)("contacts.catalogView.RENAME"),
                            iconName: "edit-contacts",
                            role: be.HB.BUTTON,
                            "aria-label": (0,
                            f.t)("contacts.catalogView.RENAME")
                        }), r.createElement(_.Z, {
                            iconName: "trash-mail",
                            onClick: function() {
                                e.handleDeleteTag(t)
                            },
                            role: be.HB.BUTTON,
                            title: (0,
                            f.t)("mail.action.DELETE"),
                            "aria-label": (0,
                            f.t)("mail.action.DELETE")
                        })))
                    }))))
                }
            }]),
            n
        }()
          , os = (0,
        i.$j)(function(e) {
            return {
                showManageModal: (0,
                R.$k)(e),
                tagsList: (0,
                R.gQ)(e)
            }
        }, function(e) {
            return {
                onEditTag: function(t) {
                    return e((0,
                    T.b$)(t))
                },
                onCloseManageTags: function() {
                    return e((0,
                    T.Md)())
                },
                onDeleteTag: function(t, n) {
                    return e((0,
                    T.N2)(t, n))
                }
            }
        })(rs)
          , as = n(52396)
          , is = n(61123)
          , ls = n(52114)
          , cs = n(74490)
          , ss = n(74494)
          , us = n(9631)
          , ds = n(88422)
          , fs = (n(19125),
        n(92610));
        function ps(e) {
            "@babel/helpers - typeof";
            return (ps = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var ms = ["onAdd", "modalType", "showModal", "onUpdate", "onCancel", "isLoading", "advancedSetting", "externalAccountDetail", "errorType", "errorMessage"];
        function hs(e, t) {
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
        function ys(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, bs(r.key), r)
            }
        }
        function bs(e) {
            var t = function(e, t) {
                if ("object" !== ps(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== ps(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === ps(t) ? t : String(t)
        }
        function vs(e, t) {
            return (vs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function gs(e) {
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
                var n, r = Es(e);
                if (t) {
                    var o = Es(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ps(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return ws(e)
                }(this, n)
            }
        }
        function ws(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Es(e) {
            return (Es = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Ss = function(e) {
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
                t && vs(e, t)
            }(n, r.PureComponent);
            var t = gs(n);
            function n(e) {
                var r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                r = t.call(this, e);
                var o = window.uxLocalStorage && JSON.parse(window.uxLocalStorage.getItem("concurrentPopupShow"));
                return r.state = {
                    concurrentLoginShow: o
                },
                r.handleDragFinished = r.handleDragFinished.bind(ws(r)),
                r.handleClickRightButton = r.handleClickRightButton.bind(ws(r)),
                r.handleCancelToast = r.handleCancelToast.bind(ws(r)),
                r.reOpenAllToast = r.reOpenAllToast.bind(ws(r)),
                r.sendAllMails = r.sendAllMails.bind(ws(r)),
                r.errorToastOpener = r.errorToastOpener.bind(ws(r)),
                r.clearPopBuilder = r.clearPopBuilder.bind(ws(r)),
                window.addEventListener("toastOpener", r.handleCancelToast),
                window.addEventListener("sendlogOut", r.sendAllMails),
                window.addEventListener("clearPreviewPopUp", r.clearPopBuilder),
                r.renderAccountModal = r.renderAccountModal.bind(ws(r)),
                r.renderAddAccount = r.renderAddAccount.bind(ws(r)),
                r
            }
            return function(e, t, n) {
                t && ys(e.prototype, t),
                n && ys(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    (0,
                    this.props.popInstruction)()
                }
            }, {
                key: "clearPopBuilder",
                value: function() {
                    (0,
                    this.props.closePop)()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.clearPopBuilder(),
                    window && window.removeEventListener("toastOpener", this.handleCancelToast),
                    window && window.removeEventListener("clearPreviewPopUp", this.clearPopBuilder)
                }
            }, {
                key: "renderAccountModal",
                value: function() {
                    var e = this.props
                      , t = e.onAdd
                      , n = e.modalType
                      , o = e.showModal
                      , a = e.onUpdate
                      , i = e.onCancel
                      , l = e.isLoading
                      , c = e.advancedSetting
                      , s = e.externalAccountDetail
                      , u = e.errorType
                      , d = e.errorMessage;
                    hs(e, ms);
                    return r.createElement(_e.Z, {
                        show: o,
                        advancedSetting: c,
                        type: n,
                        data: {},
                        onAdd: t,
                        onUpdate: a,
                        onCancel: i,
                        errorType: u,
                        errorMessage: d,
                        isLoading: l,
                        externalAccountDetail: s
                    })
                }
            }, {
                key: "renderAddAccount",
                value: function() {
                    this.props.onShowModal(!0, "new"),
                    this.setState({
                        showAddAccount: !0
                    })
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    !0 !== window.securityNotification && (0,
                    v.nIE)() && e.securityTrackingList.filter(function(e) {
                        return "mail.vacationMessage2.save" !== e
                    }).map(function(t, n) {
                        window.securityNotification = !0,
                        (0,
                        l.Am)(r.createElement(us.Z, {
                            key: n,
                            toastId: t,
                            message: t,
                            id: n,
                            autoforwardAddress: e.autoforwardAddress.addresses,
                            addressEnabled: 0 === e.autoforwardAddress.addresses.length && "mail.forwarding.save" === t ? be.Q1.ENABLED : be.Q1.TEXT
                        }), {
                            autoClose: (0,
                            he.Z)("securityNotification.toastInterval"),
                            hideProgressBar: !0,
                            closeOnClick: !1,
                            pauseOnHover: !1,
                            draggable: !1,
                            progress: !1,
                            newestOnTop: !0,
                            transition: l.sm
                        })
                    })
                }
            }, {
                key: "handleDragFinished",
                value: function(e) {
                    var t = this.props
                      , n = t.mailAccountListExpanded
                      , r = t.expandAccountList
                      , o = t.shrinkAccountList
                      , a = (0,
                    he.Z)("common.appLayoutLeftExpandWidth");
                    n && e < a ? o() : r()
                }
            }, {
                key: "handleClickRightButton",
                value: function() {
                    (0,
                    this.props.expandAccountList)()
                }
            }, {
                key: "sendAllMails",
                value: function() {
                    if (window.ux.logout) {
                        l.Am.dismiss();
                        var e = this.props.sendAllCancelMailForLogout;
                        (0,
                        l.Am)(r.createElement("span", {
                            align: "center"
                        }, r.createElement("b", null, " ", (0,
                        f.t)("mail.cancelMail.CANCEL_SEND_LOG_OUT"))), {
                            className: "ow-cancel-mail-toast-logout"
                        }),
                        e(this.fireLogoutEvent)
                    }
                    window.ux.logout = !1,
                    window.ux.closeAllToastSuccess = !0
                }
            }, {
                key: "errorToastOpener",
                value: function(e) {
                    var t = e.detail.errorMessage;
                    (0,
                    l.Am)(r.createElement(is.Z, {
                        errorMessage: t
                    }))
                }
            }, {
                key: "fireLogoutEvent",
                value: function() {
                    var e = document.createEvent("CustomEvent");
                    e.initCustomEvent("cancellogOut", !1, !1, {}),
                    window.dispatchEvent(e)
                }
            }, {
                key: "handleCancelToast",
                value: function(e) {
                    var t = e.detail
                      , n = t.id
                      , o = t.onSendMail;
                    window.addEventListener(n, this.reOpenAllToast),
                    window.addEventListener("".concat(n, "error"), this.errorToastOpener),
                    (0,
                    l.Am)(r.createElement(as.Z, {
                        key: n,
                        id: n,
                        onSendMail: o,
                        onCancelSend: this.props.saveMessage
                    })),
                    this.props.addToastAccociatedIds(n)
                }
            }, {
                key: "reOpenAllToast",
                value: function(e) {
                    var t = this
                      , n = e.detail
                      , o = n.id
                      , a = n.timer;
                    window.ux.logout || setTimeout(function() {
                        (0,
                        l.Am)(r.createElement(as.Z, {
                            key: o,
                            id: o,
                            timer: a - 1,
                            onSendMail: t.props.sendMessage,
                            onCancelSend: t.props.saveMessage
                        }))
                    }, 1e3)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.opened
                      , o = t.mailAccountListExpanded
                      , a = t.uploadingToCloudStatus
                      , i = t.quota
                      , l = t.location
                      , c = t.selectAccountId
                      , u = {
                        visibility: n ? "hidden" : "visible"
                    }
                      , m = (0,
                    he.Z)("mail.showMailQuotaOnLeft.enabled") && !c
                      , h = (0,
                    he.Z)("mail.addAccountLink")
                      , y = (0,
                    he.Z)("mail.tags.enabled") ? "ow-leftPanel-withAccordion" : "ow-leftPanel-withoutAccordion";
                    return r.createElement("div", {
                        className: "ow-appLayout-hbox ow-appLayout-mail",
                        role: be.HB.HEADING,
                        "aria-level": be.DU.H1,
                        "aria-label": (0,
                        f.t)("app.EMAIL"),
                        tabIndex: 0
                    }, r.createElement(al.Z, null, r.createElement(al.Z, null, r.createElement(ls.Z, null)), r.createElement("div", {
                        className: "ow-appLayout-flex ow-appLayout-hbox"
                    }, r.createElement(al.Z, null, r.createElement(mo.default, {
                        previewInstance: "_"
                    })), r.createElement(s(), {
                        style: u,
                        className: "ow-mail-SplitPane",
                        defaultSize: o ? "19%" : 40,
                        maxSize: be.mW.MAXSIZE,
                        minSize: be.mW.MINSIZE,
                        size: be.mW.SIZE,
                        onDragFinished: this.handleDragFinished
                    }, r.createElement("div", {
                        className: "ow-appLayout-left ow-appLayout-vbox"
                    }, r.createElement(jn, {
                        id: "ow-appLayout-left-panel"
                    }, r.createElement(jn.Heading, null, o ? r.createElement(lc, null) : r.createElement(_.Z, {
                        className: "ow-mail-search-expand",
                        iconName: "search",
                        onClick: this.handleClickRightButton
                    })), r.createElement(jn.Body, {
                        className: y
                    }, !o && r.createElement("div", {
                        className: "ow-appLayout-flex ow-account-folder-list-expand"
                    }, r.createElement(_.Z, {
                        className: "ow-mail-folder-list-right-button",
                        iconName: "right",
                        onClick: this.handleClickRightButton
                    })), r.createElement("div", {
                        className: "ow-appLayout-flex"
                    }, (0,
                    he.Z)("mail.tags.enabled") ? r.createElement(pr, null) : r.createElement($e, null))), r.createElement(jn.Footer, null, h ? r.createElement("div", {
                        className: "ow-add-mail-accounts"
                    }, this.state.showAddAccount && this.renderAccountModal(), r.createElement(_.Z, {
                        onClick: function() {
                            e.renderAddAccount()
                        },
                        "aria-label": (0,
                        f.t)("app.ADD_ACCOUNT"),
                        onKeyDown: function(e) {
                            return e.key === be.BY.ENTERKEY && (0,
                            wr.Mb)()
                        }
                    }, (0,
                    f.t)("app.ADD_ACCOUNT"))) : "", o && r.createElement(r.Fragment, null, r.createElement(al.Z, null, m && l && r.createElement("div", {
                        className: "ow-mail-quota",
                        tabIndex: -1
                    }, r.createElement(Rc, {
                        location: l,
                        quota: i
                    })), (0,
                    he.Z)("advertisement.adBanner") && r.createElement(p.$t, {
                        title: "bottomAd",
                        className: "ow-advertisement-bottom",
                        url: (0,
                        he.Z)("advertisement.adBannerUrl")
                    })))))), r.createElement("div", {
                        className: "ow-appLayout-flex ow-appLayout-vbox"
                    }, r.createElement("div", {
                        className: "ow-appLayout-top"
                    }, r.createElement("div", {
                        className: "ow-appLayout-hbox ow-mail-toolbar-container"
                    }, r.createElement("div", {
                        className: "ow-appLayout-flex"
                    }, r.createElement(al.Z, null, r.createElement(_r, null))), r.createElement(al.Z, null, r.createElement(kl.Z, {
                        className: "ow-mail-MailModeSwitcher"
                    })))), r.createElement("div", {
                        className: "ow-mail-MailView-wrapper ow-layout-flex ow-appLayout-hbox"
                    }, r.createElement(d.Z, {
                        isShown: a,
                        message: (0,
                        f.t)("file.UPLOADING")
                    }), r.createElement(al.Z, null, r.createElement(Rl, null))))), r.createElement(Xc, null), r.createElement(os, null), r.createElement(mr.Z, null)), r.createElement(al.Z, null, r.createElement(_c, null)), r.createElement(al.Z, null, r.createElement(jc.Z, null)), r.createElement(al.Z, null, r.createElement(Lc.Z, null)), (0,
                    he.Z)("advertisement.skyscrapper") && r.createElement(p.Nv, {
                        title: "ad",
                        className: "ow-advertisement-right",
                        url: (0,
                        he.Z)("advertisement.skyscrapperUrl")
                    })))
                }
            }], [{
                key: "name",
                get: function() {
                    return be.lw.MAIL
                }
            }]),
            n
        }();
        Ss.defaultProps = {
            opened: !1,
            mailAccountListExpanded: !1,
            uploadingToCloudStatus: !1,
            popInstruction: function() {},
            shrinkAccountList: function() {},
            expandAccountList: function() {},
            addToastAccociatedIds: function() {},
            sendAllCancelMailForLogout: function() {},
            sendMessage: function() {},
            saveMessage: function() {},
            closePop: function() {},
            securityTrackingList: [],
            autoforwardAddress: [],
            selectAccountId: "",
            onShowModal: function() {},
            onSelectedChange: function() {},
            onAdd: function() {},
            onDelete: function() {},
            onUpdate: function() {},
            onCancel: function() {},
            onDeleteYes: function() {},
            onDeleteNo: function() {},
            onAlertHide: function() {},
            showAddAccount: !1
        },
        Ss.propTypes = {
            opened: a().bool,
            mailAccountListExpanded: a().bool,
            uploadingToCloudStatus: a().bool,
            popInstruction: a().func,
            shrinkAccountList: a().func,
            expandAccountList: a().func,
            addToastAccociatedIds: a().func,
            sendAllCancelMailForLogout: a().func,
            sendMessage: a().func,
            saveMessage: a().func,
            closePop: a().func,
            getUserProfile: a().string.isRequired,
            getAuthDetails: a().string.isRequired,
            securityTrackingList: a().arrayOf(a().string),
            autoforwardAddress: a().arrayOf(a().string),
            selectAccountId: a().string,
            onShowModal: a().func,
            onSelectedChange: a().func,
            onAdd: a().func,
            onDelete: a().func,
            onUpdate: a().func,
            onCancel: a().func,
            onDeleteYes: a().func,
            onDeleteNo: a().func,
            onAlertHide: a().func,
            showAddAccount: a().boolean
        };
        var Ts = (0,
        i.$j)(function(e) {
            var t = (0,
            ss.qIN)("_")(e)
              , n = (0,
            no.xi)(e)
              , r = (0,
            Zi.cn)(e)
              , o = (0,
            ss.YqX)(e)
              , a = (0,
            fs.P)(e)
              , i = (0,
            u.k$)(e)
              , l = (0,
            C.PK)(e)
              , c = (0,
            m.F9)(e)
              , s = (0,
            m.WS)(e)
              , d = (0,
            C.Yk)(e)
              , f = (0,
            C.OD)(e)
              , p = (0,
            C._i)(e)
              , h = (0,
            C.fl)(e)
              , y = (0,
            C.wA)(e)
              , b = (0,
            C.yf)(e)
              , v = (0,
            C.BY)(e)
              , g = (0,
            C.oG)(e)
              , w = (0,
            C.Sy)(e)
              , E = (0,
            C.iy)(e);
            return {
                opened: t,
                mailAccountListExpanded: n,
                uploadingToCloudStatus: r,
                getUserProfile: (0,
                m.zx)(e),
                getAuthDetails: (0,
                ds._)(e),
                securityTrackingList: o,
                quota: a,
                location: i,
                autoforwardAddress: l,
                selectAccountId: c,
                externalAccountDetail: s,
                showModal: d,
                modalType: f,
                showConfirm: p,
                showAlert: h,
                messageTitle: y,
                message: b,
                isLoading: v,
                errorType: g,
                errorMessage: w,
                advancedSetting: E
            }
        }, function(e) {
            return {
                popInstruction: function() {
                    var t = (0,
                    wr.dZ)(be.cO);
                    if (t.length > 0)
                        for (var n = 0; n < t.length; n += 1)
                            e((0,
                            cs.s)(t[n].id, !1, !0, t[n]))
                },
                shrinkAccountList: function() {
                    return e((0,
                    eo.Mg)())
                },
                expandAccountList: function() {
                    return e((0,
                    eo.HU)())
                },
                addToastAccociatedIds: function(t) {
                    return e((0,
                    y.Sy9)(t))
                },
                sendAllCancelMailForLogout: function(t) {
                    return e((0,
                    y.gFF)(t))
                },
                sendMessage: function(t, n, r, o) {
                    return e((0,
                    y.bG5)(t, n, r, o))
                },
                saveMessage: function(t, n, r) {
                    return e((0,
                    y.zEV)(t, n, r))
                },
                closePop: function() {
                    return e((0,
                    eo.nI)())
                },
                onShowModal: function(t, n) {
                    return e((0,
                    E.iB)(t, n))
                },
                onSelectedChange: function(t) {
                    return e((0,
                    E.us)(t))
                },
                onAdd: function(t, n) {
                    return e((0,
                    S.IO)({
                        object: t
                    }, n))
                },
                onDelete: function() {
                    return e((0,
                    S.vi)({}))
                },
                onUpdate: function(t, n, r) {
                    return e((0,
                    S.$e)({
                        object: t
                    }, n, r))
                },
                onCancel: function() {
                    return e((0,
                    E.iB)(!1))
                },
                onDeleteYes: function() {
                    return e((0,
                    E.F)("OK"))
                },
                onDeleteNo: function() {
                    return e((0,
                    E.F)("NO"))
                },
                onAlertHide: function() {
                    return e((0,
                    E.K7)(A.bd, !1))
                }
            }
        })(Ss)
    },
    82565: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return T
            }
        });
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(51756)
          , l = n(80861)
          , c = n(4446)
          , s = n(83416)
          , u = n(47957)
          , d = n.n(u)
          , f = (n(77545),
        n(37200));
        n(94165),
        n(44910);
        function p(e) {
            "@babel/helpers - typeof";
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var m = ["onAdd", "modalType", "showModal", "onUpdate", "onCancel", "isLoading", "advancedSetting", "externalAccountDetail", "errorType", "errorMessage"]
          , h = ["selectDefaultAccountId", "selectExternalAccountList", "changeMailAccount", "selectMailAccountId", "selectAccountInfo", "onShowModal", "isFolderScrollRequired"];
        function y(e, t) {
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
        function b(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, v(r.key), r)
            }
        }
        function v(e) {
            var t = function(e, t) {
                if ("object" !== p(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== p(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === p(t) ? t : String(t)
        }
        function g(e, t) {
            return (g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function w(e) {
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
                    if (t && ("object" === p(t) || "function" == typeof t))
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
        function S(e) {
            return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var T = function(e) {
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
                t && g(e, t)
            }(n, r.PureComponent);
            var t = w(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    showAddAccount: !1
                },
                r.renderAccountModal = r.renderAccountModal.bind(E(r)),
                r.renderAddAccount = r.renderAddAccount.bind(E(r)),
                r
            }
            return function(e, t, n) {
                t && b(e.prototype, t),
                n && b(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "renderAccountModal",
                value: function() {
                    var e = this.props
                      , t = e.onAdd
                      , n = e.modalType
                      , o = e.showModal
                      , a = e.onUpdate
                      , i = e.onCancel
                      , l = e.isLoading
                      , c = e.advancedSetting
                      , s = e.externalAccountDetail
                      , u = e.errorType
                      , d = e.errorMessage;
                    y(e, m);
                    return r.createElement(f.Z, {
                        show: o,
                        advancedSetting: c,
                        type: n,
                        data: {},
                        onAdd: t,
                        onUpdate: a,
                        onCancel: i,
                        errorType: u,
                        errorMessage: d,
                        isLoading: l,
                        externalAccountDetail: s
                    })
                }
            }, {
                key: "renderAddAccount",
                value: function() {
                    this.props.onShowModal(!0, "new"),
                    this.setState({
                        showAddAccount: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.selectDefaultAccountId
                      , n = e.selectExternalAccountList
                      , o = void 0 === n ? [] : n
                      , a = e.changeMailAccount
                      , u = e.selectMailAccountId
                      , f = e.selectAccountInfo
                      , p = (e.onShowModal,
                    e.isFolderScrollRequired)
                      , m = (y(e, h),
                    (0,
                    s.Z)("mail.addAccountLink"))
                      , b = "ow-mail-accounts";
                    p && (b = "ow-mail-accounts ow-mail-accounts-expanded");
                    var v = o.length > 0;
                    return r.createElement("div", {
                        className: m ? b : "".concat(b, " ow-mail-accounts-remove-add-link")
                    }, r.createElement(l.Z, {
                        active: u,
                        onFocus: a
                    }, r.createElement(l.i, {
                        id: t
                    }, r.createElement("div", {
                        title: d()(f, "email", " ")
                    }, (0,
                    c.t)("app.MY_ACCOUNT"), (0,
                    s.Z)("mail.displayEmailIdInMail") && f && f.email ? " : " + f.email : ""), r.createElement(i.Z, {
                        accountId: t
                    })), v ? r.createElement(l.i, null, r.createElement("div", null, (0,
                    c.t)("app.OTHER_ACCOUNT")), r.createElement("div", null)) : "", o.length && o.map(function(e) {
                        return r.createElement(l.i, {
                            id: e.id,
                            key: e.id
                        }, r.createElement("div", null, e.accountName), r.createElement(i.Z, {
                            accountId: e.id
                        }))
                    })))
                }
            }]),
            n
        }();
        T.defaultProps = {
            showAddAccount: !1,
            selectMailAccountId: "",
            selectDefaultAccountId: "",
            selectExternalAccountList: [],
            changeMailAccount: function() {}
        },
        T.propTypes = {
            showAddAccount: a().boolean,
            selectMailAccountId: a().string,
            selectDefaultAccountId: a().string,
            selectExternalAccountList: a().arrayOf(a().string),
            changeMailAccount: a().func
        }
    },
    90540: function(e, t, n) {
        "use strict";
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(55086)
          , l = n(10091)
          , c = n(70224)
          , s = n(77926)
          , u = n(32081)
          , d = n(92520)
          , f = n(84987)
          , p = n(94165);
        function m(e) {
            "@babel/helpers - typeof";
            return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var h = ["onMoveCategory", "currentCategory"];
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
                if ("object" !== m(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== m(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === m(t) ? t : String(t)
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
                var n, r = E(e);
                if (t) {
                    var o = E(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === m(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return w(e)
                }(this, n)
            }
        }
        function w(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function E(e) {
            return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function S() {
            return (S = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function T(e, t) {
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
        var O = (0,
        n(83416).Z)("calendar.enabled")
          , C = function(e) {
            var t = e.onMoveCategory
              , n = e.currentCategory
              , o = T(e, h)
              , a = (n || {}).path;
            return r.createElement(s.Z, S({
                title: (0,
                f.t)("mail.action.MOVE_TO_CATEGORY")
            }, o), p.aA.map(function(e) {
                return r.createElement(c.Z, S({}, o, {
                    disabled: a === e.path,
                    onClick: function() {
                        return a !== e.path && t(e)
                    }
                }), (0,
                f.t)("mail.folder.CATEGORY_FOLDER_DISPLAY[".concat(e.name, "]")))
            }))
        }
          , P = function(e) {
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
            }(n, r.PureComponent);
            var t = g(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    forwardType: e.forwardType || "attachment",
                    showFolderSelector: !1
                },
                r.handleForward = r.handleForward.bind(w(r)),
                r.handleForwardInline = r.handleForwardInline.bind(w(r)),
                r.handleForwardAttachment = r.handleForwardAttachment.bind(w(r)),
                r.showFolderSelector = r.showFolderSelector.bind(w(r)),
                r.hideFolderSelector = r.hideFolderSelector.bind(w(r)),
                r.handleInviteToEvent = r.handleInviteToEvent.bind(w(r)),
                r.callBackForReset = r.callBackForReset.bind(w(r)),
                r
            }
            return function(e, t, n) {
                t && y(e.prototype, t),
                n && y(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "showFolderSelector",
                value: function() {
                    this.setState({
                        showFolderSelector: !0
                    })
                }
            }, {
                key: "callBackForReset",
                value: function() {
                    UXConfig.advertisement.skyscrapper && this.props.onRefresh()
                }
            }, {
                key: "handleInviteToEvent",
                value: function() {
                    var e = this.props;
                    (0,
                    e.onInviteToEvent)(e.accountEmail)
                }
            }, {
                key: "hideFolderSelector",
                value: function() {
                    this.setState({
                        showFolderSelector: !1
                    })
                }
            }, {
                key: "handleForward",
                value: function(e) {
                    var t = this.props
                      , n = t.onForwardAttachment
                      , r = t.onForwardInline;
                    return /inline/.test(this.state.forwardType) ? r(e) : n(e)
                }
            }, {
                key: "handleForwardInline",
                value: function(e) {
                    this.setState({
                        forwardType: "inline"
                    }),
                    this.props.onForwardInline(e)
                }
            }, {
                key: "handleForwardAttachment",
                value: function(e) {
                    this.setState({
                        forwardType: "attachment"
                    }),
                    this.props.onForwardAttachment(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.onMarkAsSpam
                      , o = t.onMarkAsNotSpam
                      , a = t.onReply
                      , s = t.onReplyAll
                      , m = t.onDelete
                      , h = t.onCreateGroup
                      , y = t.onSaveEMLFile
                      , b = t.onMarkAsFlag
                      , v = t.onClearFlag
                      , g = t.onViewSource
                      , w = t.onMarkAsUnread
                      , E = t.onMarkAsRead
                      , S = t.onSafeSender
                      , T = t.onBlockSender
                      , P = t.onBlockDomain
                      , A = t.onBlockSenderAndMarkAsSpam
                      , R = t.onCreateFolder
                      , k = t.junk
                      , I = t.read
                      , N = t.unread
                      , D = t.flagged
                      , M = t.unflagged
                      , _ = t.notSelf
                      , j = t.isExternalAccount
                      , L = t.selectedCount
                      , F = t.folderData
                      , x = t.folderPaths
                      , B = t.onMoveToFolder
                      , H = t.onMoveCategory
                      , U = t.currentCategory
                      , Z = t.show
                      , V = t.disbleEmailOperations
                      , K = t.onMarkAsPhishing
                      , q = t.onUpdateState
                      , Y = this.state.forwardType;
                    return Z ? r.createElement(i.Z, {
                        className: "ow-mail-MailToolbar-AutoSizer  ow-mail-MailToolbar-tablet",
                        disableHeight: !0
                    }, function(t) {
                        var i = t.width;
                        return r.createElement("div", {
                            className: "ow-mail-MailToolbar-wrapper"
                        }, r.createElement(l.Z, {
                            enableResponsive: !0,
                            width: i
                        }, r.createElement("span", {
                            className: "ow-spacing"
                        }), r.createElement(l.Z.Dropdown, {
                            className: "ow-mail-reply-dropdown",
                            title: r.createElement(u.Z, {
                                name: "reply-mail"
                            }),
                            pullRight: !0,
                            noCaret: !0
                        }, r.createElement(c.Z, {
                            onClick: a,
                            iconName: "reply-mail",
                            disabled: 1 !== L || V
                        }, (0,
                        f.t)("mail.action.REPLY")), r.createElement(c.Z, {
                            onClick: s,
                            iconName: "replyAll-mail",
                            disabled: 1 !== L || V
                        }, (0,
                        f.t)("mail.action.REPLY_ALL")), r.createElement(c.Z, {
                            onClick: e.handleForwardInline,
                            iconName: "forward-mail",
                            disabled: 1 !== L
                        }, (0,
                        f.t)("mail.action.FORWARD")), r.createElement(c.Z, {
                            onClick: e.handleForwardAttachment,
                            iconName: "forward-mail",
                            disabled: 1 !== L,
                            active: /attachment/.test(Y)
                        }, (0,
                        f.t)("mail.action.FORWARD_IN_ATTACHMENT"))), r.createElement(l.Z.Button, {
                            iconName: "trash-mail",
                            disabled: !L,
                            onClick: function() {
                                return m(e.callBackForReset)
                            }
                        }), r.createElement(l.Z.Button, {
                            onClick: e.showFolderSelector,
                            iconName: "folder",
                            disabled: !L
                        }), r.createElement(l.Z.Dropdown, {
                            className: "ow-icon-more-dropdown",
                            title: r.createElement(u.Z, {
                                name: "more"
                            }),
                            pullRight: !0,
                            noCaret: !0
                        }, _ && r.createElement(c.Z, {
                            onClick: S,
                            disabled: !L || V
                        }, (0,
                        f.t)("mail.action.SAFE_SENDER")), _ && r.createElement(c.Z, {
                            onClick: T,
                            disabled: !L || V
                        }, (0,
                        f.t)("mail.action.BLOCK_SENDER")), r.createElement(c.Z, {
                            onClick: P,
                            disabled: !L || V
                        }, (0,
                        f.t)("mail.action.BLOCK_DOMAIN")), !j && _ && r.createElement(c.Z, {
                            onClick: A,
                            iconName: "reply-mail",
                            disabled: !L || V
                        }, (0,
                        f.t)("mail.action.BLOCK_SENDER_SPAM")), r.createElement(C, {
                            disabled: !U || 0 === x.length,
                            onMoveCategory: H,
                            currentCategory: U
                        }), r.createElement(c.Z, {
                            onClick: I ? null : E,
                            disabled: I,
                            iconName: "reply-mail"
                        }, (0,
                        f.t)("mail.action.READ")), r.createElement(c.Z, {
                            onClick: N ? null : w,
                            disabled: N,
                            iconName: "reply-mail"
                        }, (0,
                        f.t)("mail.action.UNREAD")), r.createElement(c.Z, {
                            disabled: !L || D,
                            onSelect: D ? null : b
                        }, (0,
                        f.t)("mail.action.FLAG_FOR_FOLLOW_UP")), r.createElement(c.Z, {
                            disabled: !L || M,
                            onSelect: M ? null : v
                        }, (0,
                        f.t)("mail.action.CLEAR_FLAG")), !j && L && k ? r.createElement(c.Z, {
                            onClick: o,
                            iconName: "reply-mail"
                        }, (0,
                        f.t)("mail.action.NOT_JUNK")) : null, j || !L || k ? null : r.createElement(c.Z, {
                            onClick: n,
                            iconName: "reply-mail"
                        }, (0,
                        f.t)("mail.action.JUNK")), j || !L || k ? null : r.createElement(c.Z, {
                            onClick: K,
                            iconName: "reply-mail"
                        }, (0,
                        f.t)("mail.action.PHISHING")), r.createElement(c.Z, {
                            disabled: 0 === L || V,
                            onClick: h,
                            iconName: "reply-mail"
                        }, (0,
                        f.t)("mail.action.CREATE_GROUP")), r.createElement(c.Z, {
                            disabled: 1 !== L,
                            onClick: g,
                            iconName: "reply-mail"
                        }, (0,
                        f.t)("mail.action.VIEW_SOURCE")), r.createElement(c.Z, {
                            disabled: 1 !== L,
                            onClick: y,
                            iconName: "reply-mail"
                        }, (0,
                        f.t)("mail.action.SAVEASEML_EMAIL")), O && r.createElement(c.Z, {
                            disabled: 1 !== L || V,
                            onClick: e.handleInviteToEvent,
                            iconName: "reply-mail"
                        }, (0,
                        f.t)("mail.action.INVITE_RECIPIENTS")))), r.createElement(d.Z, {
                            folders: F,
                            isAddEnabled: !0,
                            show: e.state.showFolderSelector,
                            onHide: function() {
                                e.hideFolderSelector()
                            },
                            selectedFolderPath: 1 === x.length ? x[0] : void 0,
                            onSelectFolder: function(t) {
                                var n = t.type
                                  , r = t.path;
                                n !== p.S.VIRTUAL && (1 === x.length && x.includes(r) ? e.hideFolderSelector() : (B(r),
                                e.hideFolderSelector()))
                            },
                            onCreateFolder: R,
                            onUpdateState: function(e) {
                                q(e)
                            }
                        }))
                    }) : null
                }
            }]),
            n
        }();
        P.propTypes = {
            show: a().bool,
            junk: a().bool,
            read: a().bool,
            unread: a().bool,
            flagged: a().bool,
            unflagged: a().bool,
            disabled: a().bool,
            notSelf: a().bool,
            isExternalAccount: a().bool,
            selectedCount: a().number,
            detailStatus: a().string,
            forwardType: a().string,
            onMarkAsSpam: a().func.isRequired,
            onMarkAsPhishing: a().func.isRequired,
            onMarkAsNotSpam: a().func.isRequired,
            onMarkAsUnread: a().func.isRequired,
            onMarkAsRead: a().func.isRequired,
            onDelete: a().func.isRequired,
            onMarkAsFlag: a().func.isRequired,
            onClearFlag: a().func.isRequired,
            onViewSource: a().func.isRequired,
            onCreateGroup: a().func.isRequired,
            onPrintMail: a().func.isRequired,
            onSaveEMLFile: a().func.isRequired,
            onNewCompose: a().func.isRequired,
            onReply: a().func.isRequired,
            onReplyAll: a().func.isRequired,
            onForwardInline: a().func.isRequired,
            onForwardAttachment: a().func.isRequired,
            onRefresh: a().func.isRequired,
            onMoveToFolder: a().func.isRequired,
            onSafeSender: a().func.isRequired,
            onBlockSender: a().func.isRequired,
            onBlockDomain: a().func.isRequired,
            onBlockSenderAndMarkAsSpam: a().func.isRequired,
            onCreateFolder: a().func.isRequired,
            folderData: a().arrayOf(a().object),
            folderPaths: a().arrayOf(a().string),
            currentCategory: a().shape(a().object),
            onMoveCategory: a().func.isRequired,
            onInviteToEvent: a().func.isRequired,
            accountEmail: a().string
        },
        P.defaultProps = {
            show: !0,
            junk: !1,
            flagged: !1,
            unflagged: !1,
            disabled: !1,
            read: !0,
            unread: !0,
            notSelf: !0,
            isExternalAccount: !1,
            selectedCount: 0,
            detailStatus: "",
            forwardType: "",
            onMarkAsSpam: function() {},
            onMarkAsNotSpam: function() {},
            onMarkAsUnread: function() {},
            onMarkAsPhishing: function() {},
            onMarkAsRead: function() {},
            onDelete: function() {},
            onMarkFlag: function() {},
            onClearFlag: function() {},
            onViewSource: function() {},
            onCreateGroup: function() {},
            onPrintMail: function() {},
            onSaveEMLFile: function() {},
            onNewCompose: function() {},
            onReply: function() {},
            onReplyAll: function() {},
            onForwardAttachment: function() {},
            onForwardInline: function() {},
            onRefresh: function() {},
            onMoveToFolder: function() {},
            onSafeSender: function() {},
            onBlockSender: function() {},
            onBlockDomain: function() {},
            onBlockSenderAndMarkAsSpam: function() {},
            folderPaths: [],
            folderData: [],
            currentCategory: "",
            onMoveCategory: function() {},
            onInviteToEvent: function() {},
            accountEmail: ""
        },
        t.Z = P
    },
    20545: function(e, t, n) {
        "use strict";
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(32081)
          , l = function(e) {
            var t = e.isReplied
              , n = e.isForwarded;
            return t && n ? r.createElement(i.Z, {
                name: "repliedForwarded-mail"
            }) : t ? r.createElement(i.Z, {
                name: "reply-mail"
            }) : n ? r.createElement(i.Z, {
                name: "forward-mail"
            }) : null
        };
        l.defaultProps = {
            isReplied: !1,
            isForwarded: !1
        },
        l.propTypes = {
            isReplied: a().bool,
            isForwarded: a().bool
        },
        t.Z = l
    },
    41285: function(e, t, n) {
        "use strict";
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(67064)
          , l = n.n(i)
          , c = n(35369)
          , s = n(55086)
          , u = n(10091)
          , d = n(92520)
          , f = n(70224)
          , p = n(32081)
          , m = n(84987)
          , h = n(94165)
          , y = n(83416)
          , b = n(80110)
          , v = n(40757)
          , g = n(4446)
          , w = n(44910)
          , E = ["onMoveCategory", "currentCategory", "disabled", "isImplicit"];
        function S(e) {
            return function(e) {
                if (Array.isArray(e))
                    return T(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return T(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return T(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function T(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function O(e) {
            "@babel/helpers - typeof";
            return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function C(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, I(r.key), r)
            }
        }
        function P(e, t) {
            return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function A(e) {
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
                var n, r = k(e);
                if (t) {
                    var o = k(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === O(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return R(e)
                }(this, n)
            }
        }
        function R(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function k(e) {
            return (k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function I(e) {
            var t = function(e, t) {
                if ("object" !== O(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== O(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === O(t) ? t : String(t)
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
        function D(e, t) {
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
        var M = (0,
        d.Z)(u.Z.Dropdown)
          , _ = (0,
        y.Z)("calendar.enabled")
          , j = h.DJ.ATTACHMENT_VIEW
          , L = (h.DJ.PREVIEW_RIGHT,
        h.DJ.PREVIEW_BELOW,
        h.DJ.PREVIEW_NONE,
        function(e) {
            var t = e.onMoveCategory
              , n = e.currentCategory
              , o = e.disabled
              , a = e.isImplicit
              , i = D(e, E)
              , l = (n || {}).path;
            return o ? "" : r.createElement(u.Z.Dropdown, {
                title: (0,
                m.t)("mail.action.MOVE_TO_CATEGORY"),
                role: h.HB.LIST,
                disabled: o,
                isImplicit: a,
                "aria-disabled": o
            }, h.aA.map(function(e) {
                return r.createElement(f.Z, N({}, i, {
                    disabled: l === e.path,
                    onClick: function() {
                        return l !== e.path && t(e)
                    },
                    "aria-label": (0,
                    m.t)("mail.folder.CATEGORY_FOLDER_DISPLAY[".concat(null === e || void 0 === e ? void 0 : e.name, "]")),
                    "aria-disabled": l === (null === e || void 0 === e ? void 0 : e.path)
                }), (0,
                m.t)("mail.folder.CATEGORY_FOLDER_DISPLAY[".concat(e.name, "]")))
            }))
        }
        )
          , F = function(e) {
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
            var t = A(n);
            function n(e) {
                var o, a;
                ((function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, n),
                function(e, t, n) {
                    (t = I(t))in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                }(R(o = t.call(this, e)), "handleInputClick", function(e) {
                    e.preventDefault(),
                    e.stopPropagation()
                }),
                o.inputRef = r.createRef(),
                o.refPrintToast = r.createRef(),
                o.handleForward = o.handleForward.bind(R(o)),
                o.handleForwardInline = o.handleForwardInline.bind(R(o)),
                o.handleForwardAttachment = o.handleForwardAttachment.bind(R(o)),
                o.handleInviteToEvent = o.handleInviteToEvent.bind(R(o)),
                o.callBackForReset = o.callBackForReset.bind(R(o)),
                o.setDisableCall = o.setDisableCall.bind(R(o)),
                o.resetDisableCompose = o.resetDisableCompose.bind(R(o)),
                o.renderRefresh = o.renderRefresh.bind(R(o)),
                o.renderReply = o.renderReply.bind(R(o)),
                o.renderCompose = o.renderCompose.bind(R(o)),
                o.handleClickCompose = o.handleClickCompose.bind(R(o)),
                o.renderForward = o.renderForward.bind(R(o)),
                o.renderMoveTo = o.renderMoveTo.bind(R(o)),
                o.renderCategory = o.renderCategory.bind(R(o)),
                o.renderSafeSender = o.renderSafeSender.bind(R(o)),
                o.renderBlockSender = o.renderBlockSender.bind(R(o)),
                o.renderBlockDomain = o.renderBlockDomain.bind(R(o)),
                o.renderRead = o.renderRead.bind(R(o)),
                o.renderUnread = o.renderUnread.bind(R(o)),
                o.renderFlag = o.renderFlag.bind(R(o)),
                o.renderInviteEvent = o.renderInviteEvent.bind(R(o)),
                o.renderCreateGroup = o.renderCreateGroup.bind(R(o)),
                o.renderViewSource = o.renderViewSource.bind(R(o)),
                o.renderPrint = o.renderPrint.bind(R(o)),
                o.renderSaveEML = o.renderSaveEML.bind(R(o)),
                o.renderSpam = o.renderSpam.bind(R(o)),
                o.renderUnSpam = o.renderUnSpam.bind(R(o)),
                o.handleKeyPress = o.handleKeyPress.bind(R(o)),
                o.printToastCurrent = o.printToastCurrent.bind(R(o)),
                o.handlePrintMail = o.handlePrintMail.bind(R(o)),
                o.handleManageTag = o.handleManageTag.bind(R(o)),
                o.handleInputClick = o.handleInputClick.bind(R(o)),
                o.onhandleIncludeTag = o.onhandleIncludeTag.bind(R(o)),
                null !== g.UhU && void 0 !== g.UhU && g.UhU.isDesktop && (0,
                y.Z)("common.ScrollKeysEnabled")) && (null === (a = window) || void 0 === a || a.addEventListener("keydown", o.handleKeyPress));
                return o.handleReply = o.handleReply.bind(R(o)),
                o.closeRunningSpinner = o.closeRunningSpinner.bind(R(o)),
                o.renderMarkAsSpam = o.renderMarkAsSpam.bind(R(o)),
                o.renderMarkAsPhishing = o.renderMarkAsPhishing.bind(R(o)),
                o.renderMarkAsNotSpam = o.renderMarkAsNotSpam.bind(R(o)),
                o.renderTags = o.renderTags.bind(R(o)),
                o.handleQuickSearch = o.handleQuickSearch.bind(R(o)),
                o.clearField = o.clearField.bind(R(o)),
                window.addEventListener("closeRunningSpinner", o.closeRunningSpinner),
                o.state = {
                    disableDelete: !1,
                    disableCompose: !1,
                    inputListValue: null,
                    dropdownOpen: !1,
                    searchText: ""
                },
                o.state = {
                    spinner: !1
                },
                o
            }
            return function(e, t, n) {
                t && C(e.prototype, t),
                n && C(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "printToastCurrent",
                value: function() {
                    this.refPrintToast.current = (0,
                    v.Am)(r.createElement("div", {
                        className: "ow-print-notification-toast",
                        id: "ow-print-Toast-id"
                    }, (0,
                    m.t)("mail.printMailNotification.MESSAGE")))
                }
            }, {
                key: "handleKeyPress",
                value: function(e) {
                    var t, n, r, o, a, i, l, c, s, u, d = this.props, f = d.selectedCount, p = d.onDelete, m = d.layout, h = ((null === (t = document) || void 0 === t ? void 0 : null === (n = t.activeElement) || void 0 === n ? void 0 : null === (r = n.className) || void 0 === r ? void 0 : r.includes("ow-VirtualizedList-wrapper")) || (null === (o = document) || void 0 === o ? void 0 : null === (a = o.activeElement) || void 0 === a ? void 0 : null === (i = a.className) || void 0 === i ? void 0 : i.includes("ow-VirtualizedTable ow-mail-MailSummaryTable"))) && !(null !== (l = document) && void 0 !== l && null !== (c = l.getElementsByClassName("ow-app-header-settings-link-active active")) && void 0 !== c && c[0]) && m !== j;
                    "Delete" === (null === e || void 0 === e ? void 0 : e.key) && 1 !== (null === (s = this.props) || void 0 === s ? void 0 : null === (u = s.isComposeOpen) || void 0 === u ? void 0 : u.length) && f >= 1 && h && p(this.callBackForReset)
                }
            }, {
                key: "closeRunningSpinner",
                value: function() {
                    this.setState({
                        spinner: !1
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e;
                    null !== g.UhU && void 0 !== g.UhU && g.UhU.isDesktop && (0,
                    y.Z)("common.ScrollKeysEnabled") && (null === (e = window) || void 0 === e || e.removeEventListener("keydown", this.handleKeyPress));
                    window.removeEventListener("closeRunningSpinner", this.closeRunningSpinner)
                }
            }, {
                key: "callBackForReset",
                value: function(e) {
                    var t, n;
                    (this.setState({
                        disableDelete: !1
                    }),
                    UXConfig.advertisement.adBanner || UXConfig.advertisement.skyscrapper) && ((null === (t = [j]) || void 0 === t || !t.includes(null === (n = this.props) || void 0 === n ? void 0 : n.layout)) && e < UXConfig.advertisement.refreshAdCounter && this.props.onRefresh())
                }
            }, {
                key: "setDisableCall",
                value: function() {
                    this.setState({
                        disableDelete: !0
                    })
                }
            }, {
                key: "resetDisableCompose",
                value: function() {
                    this.setState({
                        disableCompose: !1
                    })
                }
            }, {
                key: "handleClickCompose",
                value: function() {
                    this.setState({
                        disableCompose: !0
                    }),
                    this.props.onNewCompose(this.resetDisableCompose)
                }
            }, {
                key: "onhandleIncludeTag",
                value: function(e) {
                    this.props.onIncludeTagToMail(e)
                }
            }, {
                key: "handleForward",
                value: function(e) {
                    var t = this.props
                      , n = t.onForwardAttachment
                      , r = t.onForwardInline
                      , o = t.forwardType
                      , a = t.PreviewDetail;
                    /inline/.test(o) ? (a && a.size > (0,
                    y.Z)("mail.maxMessageSizeForLoader") && this.setState({
                        spinner: !0
                    }),
                    setTimeout(function() {
                        r(e)
                    }, 100)) : n(e)
                }
            }, {
                key: "handleForwardInline",
                value: function(e) {
                    var t = this;
                    if (e) {
                        var n, r = this.props, o = r.PreviewDetail, a = r.summaries;
                        e.stopPropagation(),
                        ((null === o || void 0 === o ? void 0 : o.size) || (null === a || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : n.size)) > (0,
                        y.Z)("mail.maxMessageSizeForLoader") && this.setState({
                            spinner: !0
                        }),
                        setTimeout(function() {
                            t.props.onForwardInline(e)
                        }, 100)
                    }
                }
            }, {
                key: "handleForwardAttachment",
                value: function(e) {
                    e && (e.stopPropagation(),
                    this.props.onForwardAttachment(e))
                }
            }, {
                key: "handlePrintMail",
                value: function(e, t) {
                    var n = this.props.summaries.map(function(e) {
                        return null === e || void 0 === e ? void 0 : e.isThread
                    }).includes(!0);
                    e <= (0,
                    y.Z)("mail.message.maxPrintEmailCount") && !n && this.printToastCurrent(),
                    t(this.refPrintToast.current)
                }
            }, {
                key: "handleInviteToEvent",
                value: function() {
                    var e = this.props;
                    (0,
                    e.onInviteToEvent)(e.accountEmail)
                }
            }, {
                key: "renderRefresh",
                value: function(e, t) {
                    return r.createElement(u.Z.Button, {
                        iconName: "refresh",
                        onClick: e,
                        role: h.HB.BUTTON,
                        "aria-label": (0,
                        m.t)("common.SYNC"),
                        title: (0,
                        m.t)("common.SYNC")
                    })
                }
            }, {
                key: "renderCompose",
                value: function(e) {
                    var t, n = this;
                    return r.createElement(u.Z.Button, {
                        disabled: this.state.disableCompose,
                        onClick: function() {
                            n.handleClickCompose()
                        },
                        iconName: "compose-mail-Toolbar",
                        role: h.HB.BUTTON,
                        "aria-label": (0,
                        m.t)("mail.action.COMPOSE"),
                        "aria-disabled": null === this || void 0 === this ? void 0 : null === (t = this.state) || void 0 === t ? void 0 : t.disableCompose,
                        title: (0,
                        m.t)("mail.action.COMPOSE"),
                        onKeyDown: function(e) {
                            "Enter" === e.key && setTimeout(function() {
                                var e, t;
                                document.activeElement.blur(),
                                null === (e = document.querySelector(".ow-mail-compose-header-toolbar .ow-icon-close")) || void 0 === e || null === (t = e.closest("button")) || void 0 === t || t.focus()
                            }, 50)
                        }
                    }, e.showMenuText ? (0,
                    m.t)("mail.action.COMPOSE") : "")
                }
            }, {
                key: "renderReply",
                value: function(e, t, n, o) {
                    var a = this;
                    return r.createElement(r.Fragment, null, r.createElement(u.Z.Button, {
                        onClick: function(t) {
                            a.handleReply(t, e)
                        },
                        iconName: "reply-mail",
                        role: h.HB.BUTTON,
                        disabled: 1 !== t || n,
                        "aria-label": (0,
                        m.t)("mail.action.REPLY"),
                        "aria-disabled": 1 !== t || n,
                        title: (0,
                        m.t)("mail.action.REPLY")
                    }, o.showMenuText ? (0,
                    m.t)("mail.action.REPLY") : ""))
                }
            }, {
                key: "renderReplyAll",
                value: function(e, t, n, o) {
                    var a = this;
                    return r.createElement(r.Fragment, null, r.createElement(u.Z.Button, {
                        onClick: function(t) {
                            a.handleReply(t, e)
                        },
                        iconName: "replyAll-mail",
                        disabled: 1 !== t || n,
                        role: h.HB.BUTTON,
                        "aria-label": (0,
                        m.t)("mail.action.REPLY_ALL"),
                        "aria-disabled": 1 !== t || n,
                        title: (0,
                        m.t)("mail.action.REPLY_ALL")
                    }, o.showMenuText ? (0,
                    m.t)("mail.action.REPLY_ALL") : ""))
                }
            }, {
                key: "handleReply",
                value: function(e, t) {
                    var n, r = this.props, o = r.onReplyAll, a = r.onReply, i = r.PreviewDetail, l = r.summaries;
                    ((null === i || void 0 === i ? void 0 : i.size) || (null === l || void 0 === l ? void 0 : null === (n = l[0]) || void 0 === n ? void 0 : n.size)) > (0,
                    y.Z)("mail.maxMessageSizeForLoader") && this.setState({
                        spinner: !0
                    }),
                    setTimeout(function() {
                        return "onReply" == t.name ? a() : o()
                    }, 100)
                }
            }, {
                key: "renderDelete",
                value: function(e, t, n) {
                    var o = this
                      , a = r.createElement(r.Fragment, null);
                    return this.props.layout !== j && (a = r.createElement(u.Z.Button, {
                        iconName: "trash-mail",
                        disabled: t,
                        onClick: function() {
                            o.setDisableCall(),
                            e(o.callBackForReset)
                        },
                        role: h.HB.BUTTON,
                        title: (0,
                        m.t)("mail.action.DELETE"),
                        "aria-label": (0,
                        m.t)("mail.action.DELETE"),
                        "aria-disabled": t,
                        onKeyDown: function(e) {
                            e.key === h.BY.ENTERKEY && (0,
                            w.Mb)()
                        }
                    }, " ", n.showMenuText ? (0,
                    m.t)("mail.action.DELETE") : "")),
                    a
                }
            }, {
                key: "renderMarkAsNotSpam",
                value: function() {
                    var e = this.props
                      , t = e.onMarkAsNotSpam
                      , n = e.junk
                      , o = e.notSelf
                      , a = e.isExternalAccount
                      , i = e.selectedCount
                      , l = e.onSafesenderAndMarkAsNotSpam;
                    return !a && i && n ? r.createElement(u.Z.Dropdown, {
                        className: "ow-mail-markasSpam-dropdown",
                        title: (0,
                        m.t)("mail.action.MARK_AS_NOT_SPAM"),
                        disabled: 0 === i,
                        "aria-label": (0,
                        m.t)("mail.action.MARK_AS_NOT_SPAM"),
                        "aria-disabled": 0 === i
                    }, r.createElement(f.Z, {
                        disabled: !o,
                        onClick: l,
                        "aria-label": (0,
                        m.t)("mail.action.MARK_AS_NOT_SPAM_SAFE_SENDER"),
                        "aria-disabled": !o
                    }, (0,
                    m.t)("mail.action.MARK_AS_NOT_SPAM_SAFE_SENDER")), r.createElement(f.Z, {
                        onClick: t,
                        "aria-label": (0,
                        m.t)("mail.action.MARK_AS_NOT_SPAM")
                    }, (0,
                    m.t)("mail.action.MARK_AS_NOT_SPAM"))) : r.createElement("div", null)
                }
            }, {
                key: "renderMarkAsSpam",
                value: function() {
                    var e = this.props
                      , t = e.onMarkAsSpam
                      , n = e.junk
                      , o = e.notSelf
                      , a = e.isExternalAccount
                      , i = e.selectedCount
                      , l = e.disbleEmailOperations
                      , c = e.onBlockSenderAndMarkAsSpam
                      , s = e.onBlockDomainAndMarkAsSpam;
                    return a || !i || n ? r.createElement("div", null) : r.createElement(u.Z.Dropdown, {
                        className: "ow-mail-markasSpam-dropdown",
                        title: (0,
                        m.t)("mail.action.MARK_AS_SPAM"),
                        disabled: 0 === i,
                        "aria-label": (0,
                        m.t)("mail.action.MARK_AS_SPAM"),
                        "aria-disabled": 0 === i
                    }, r.createElement(f.Z, {
                        disabled: !o || l,
                        onClick: c,
                        "aria-label": (0,
                        m.t)("mail.action.MARK_AS_SPAM_BLOCK_SENDER"),
                        "aria-disabled": !o || l
                    }, (0,
                    m.t)("mail.action.MARK_AS_SPAM_BLOCK_SENDER")), r.createElement(f.Z, {
                        disabled: l,
                        onClick: s,
                        "aria-label": (0,
                        m.t)("mail.action.MARK_AS_SPAM_BLOCK_DOMAIN"),
                        "aria-disabled": l
                    }, (0,
                    m.t)("mail.action.MARK_AS_SPAM_BLOCK_DOMAIN")), r.createElement(f.Z, {
                        onClick: t,
                        "aria-label": (0,
                        m.t)("mail.action.MARK_AS_SPAM")
                    }, (0,
                    m.t)("mail.action.MARK_AS_SPAM")))
                }
            }, {
                key: "renderMarkAsPhishing",
                value: function() {
                    var e = this.props
                      , t = e.onMarkAsPhishing
                      , n = e.junk
                      , o = (e.notSelf,
                    e.isExternalAccount)
                      , a = e.selectedCount;
                    e.disbleEmailOperations;
                    return o || !a || n ? r.createElement("div", null) : r.createElement(u.Z.Button, {
                        onClick: t,
                        disabled: 0 == a,
                        "aria-label": (0,
                        m.t)("mail.action.PHISHING"),
                        "aria-disabled": 0 == a
                    }, (0,
                    m.t)("mail.action.PHISHING"))
                }
            }, {
                key: "renderForward",
                value: function(e, t, n, o) {
                    return 2 == e.length && "forwardAsAttach" === e[0] ? r.createElement(u.Z.Dropdown, {
                        className: "ow-mail-forward-dropdown",
                        onClick: this.handleForward,
                        title: r.createElement("span", {
                            role: h.HB.PRESENTATION,
                            title: (0,
                            m.t)("mail.action.FORWARD")
                        }, r.createElement(p.Z, {
                            name: "forward-mail"
                        }), o.showMenuText ? (0,
                        m.t)("mail.action.FORWARD") : ""),
                        split: !0,
                        disabled: 0 === n,
                        "aria-label": (0,
                        m.t)("mail.action.FORWARD"),
                        "aria-disabled": 0 === n
                    }, r.createElement(f.Z, {
                        onClick: this.handleForwardAttachment,
                        active: /attachment/.test(t),
                        "aria-label": (0,
                        m.t)("mail.action.ATTACHMENT")
                    }, (0,
                    m.t)("mail.action.ATTACHMENT")), r.createElement(f.Z, {
                        onClick: 1 === n ? this.handleForwardInline : null,
                        disabled: 1 !== n,
                        active: /inline/.test(t),
                        "aria-label": (0,
                        m.t)("mail.action.INLINE"),
                        "aria-disabled": 1 !== n
                    }, (0,
                    m.t)("mail.action.INLINE"))) : 2 == e.length && "forwardInline" === e[0] ? r.createElement(u.Z.Dropdown, {
                        className: "ow-mail-forward-dropdown",
                        onClick: this.handleForward,
                        title: r.createElement("span", {
                            role: h.HB.PRESENTATION,
                            title: (0,
                            m.t)("mail.action.FORWARD")
                        }, r.createElement(p.Z, {
                            name: "forward-mail"
                        }), (0,
                        m.t)("mail.action.FORWARD")),
                        split: !0,
                        disabled: 0 === n,
                        "aria-label": (0,
                        m.t)("mail.action.FORWARD"),
                        "aria-disabled": 0 === n
                    }, r.createElement(f.Z, {
                        onClick: 1 === n ? this.handleForwardInline : null,
                        disabled: 1 !== n,
                        active: /inline/.test(t),
                        "aria-label": (0,
                        m.t)("mail.action.INLINE"),
                        "aria-disabled": 1 !== n
                    }, (0,
                    m.t)("mail.action.INLINE")), r.createElement(f.Z, {
                        onClick: this.handleForwardAttachment,
                        active: /attachment/.test(t),
                        "aria-label": (0,
                        m.t)("mail.action.ATTACHMENT")
                    }, (0,
                    m.t)("mail.action.ATTACHMENT"))) : 1 == e.length && "forwardInline" === e[0] ? r.createElement(u.Z.Dropdown, {
                        className: "ow-mail-forward-dropdown",
                        onClick: this.handleForward,
                        title: r.createElement("span", {
                            role: h.HB.PRESENTATION,
                            title: (0,
                            m.t)("mail.action.FORWARD")
                        }, r.createElement(p.Z, {
                            name: "forward-mail"
                        }), (0,
                        m.t)("mail.action.FORWARD")),
                        split: !0,
                        disabled: 0 === n,
                        "aria-label": (0,
                        m.t)("mail.action.FORWARD"),
                        "aria-disabled": 0 === n
                    }, r.createElement(f.Z, {
                        onClick: 1 === n ? this.handleForwardInline : null,
                        disabled: 1 !== n,
                        active: /inline/.test(t),
                        "aria-label": (0,
                        m.t)("mail.action.INLINE"),
                        "aria-disabled": 1 !== n
                    }, (0,
                    m.t)("mail.action.INLINE"))) : 1 == e.length && "forwardAsAttach" === e[0] ? r.createElement(u.Z.Dropdown, {
                        className: "ow-mail-forward-dropdown",
                        onClick: this.handleForward,
                        title: r.createElement("span", {
                            role: h.HB.PRESENTATION,
                            title: (0,
                            m.t)("mail.action.FORWARD")
                        }, r.createElement(p.Z, {
                            name: "forward-mail"
                        }), (0,
                        m.t)("mail.action.FORWARD")),
                        split: !0,
                        disabled: 0 === n,
                        "aria-label": (0,
                        m.t)("mail.action.FORWARD"),
                        "aria-disabled": 0 === n
                    }, r.createElement(f.Z, {
                        onClick: this.handleForwardAttachment,
                        active: /attachment/.test(t),
                        "aria-label": (0,
                        m.t)("mail.action.ATTACHMENT"),
                        "aria-disabled": 0 === n
                    }, (0,
                    m.t)("mail.action.ATTACHMENT"))) : 0 == e.length ? r.createElement("div", null) : void 0
                }
            }, {
                key: "renderMoveTo",
                value: function(e, t, n) {
                    return r.createElement(M, {
                        folderData: e,
                        folderPaths: t,
                        onSelectFolder: n,
                        disabled: 0 === e.length,
                        title: (0,
                        m.t)("mail.action.MOVE_TO")
                    })
                }
            }, {
                key: "renderCategory",
                value: function() {
                    var e = this.props
                      , t = e.folderPaths
                      , n = e.onMoveCategory
                      , o = e.currentCategory;
                    return r.createElement(L, {
                        disabled: !o || 0 === t.length,
                        onMoveCategory: n,
                        currentCategory: o
                    })
                }
            }, {
                key: "renderSafeSender",
                value: function() {
                    var e = this.props
                      , t = e.onSafeSender
                      , n = e.notSelf
                      , o = e.selectedCount
                      , a = e.disbleEmailOperations;
                    return n && r.createElement(u.Z.Button, {
                        onClick: t,
                        disabled: !o || a,
                        "aria-label": (0,
                        m.t)("mail.action.SAFE_SENDER"),
                        "aria-disabled": !o || a
                    }, (0,
                    m.t)("mail.action.SAFE_SENDER"))
                }
            }, {
                key: "renderBlockSender",
                value: function() {
                    var e = this.props
                      , t = e.onBlockSender
                      , n = e.notSelf
                      , o = e.selectedCount
                      , a = e.disbleEmailOperations;
                    return n && r.createElement(u.Z.Button, {
                        onClick: t,
                        disabled: !o || a,
                        "aria-label": (0,
                        m.t)("mail.action.BLOCK_SENDER"),
                        "aria-disabled": !o || a
                    }, (0,
                    m.t)("mail.action.BLOCK_SENDER"))
                }
            }, {
                key: "renderBlockDomain",
                value: function() {
                    var e = this.props
                      , t = e.onBlockDomain
                      , n = e.selectedCount
                      , o = e.disbleEmailOperations;
                    return r.createElement(u.Z.Button, {
                        onClick: t,
                        disabled: !n || o,
                        "aria-label": (0,
                        m.t)("mail.action.BLOCK_DOMAIN"),
                        "aria-disabled": !n || o
                    }, (0,
                    m.t)("mail.action.BLOCK_DOMAIN"))
                }
            }, {
                key: "renderRead",
                value: function() {
                    var e = this.props
                      , t = e.onMarkAsRead
                      , n = e.read;
                    return r.createElement(u.Z.Button, {
                        onClick: n ? null : t,
                        disabled: n,
                        "aria-label": (0,
                        m.t)("mail.action.READ"),
                        "aria-disabled": n
                    }, (0,
                    m.t)("mail.action.READ"))
                }
            }, {
                key: "renderUnread",
                value: function() {
                    var e = this.props
                      , t = e.onMarkAsUnread
                      , n = e.unread;
                    return r.createElement(u.Z.Button, {
                        onClick: n ? null : t,
                        disabled: n,
                        "aria-label": (0,
                        m.t)("mail.action.UNREAD"),
                        "aria-disabled": n
                    }, (0,
                    m.t)("mail.action.UNREAD"))
                }
            }, {
                key: "renderFlag",
                value: function() {
                    var e = this.props
                      , t = e.onMarkAsFlag
                      , n = e.flagged
                      , o = e.unflagged
                      , a = e.selectedCount
                      , i = e.onClearFlag;
                    return r.createElement(u.Z.Dropdown, {
                        disabled: !a,
                        title: (0,
                        m.t)("mail.action.FLAG"),
                        "aria-label": (0,
                        m.t)("mail.action.FLAG"),
                        "aria-disabled": !a,
                        className: "ow-mail-markasSpam-dropdown"
                    }, r.createElement(f.Z, {
                        disabled: !a || n,
                        onSelect: n ? null : t,
                        "aria-label": (0,
                        m.t)("mail.action.FLAG_FOR_FOLLOW_UP"),
                        "aria-disabled": !a || n
                    }, (0,
                    m.t)("mail.action.FLAG_FOR_FOLLOW_UP")), r.createElement(f.Z, {
                        disabled: !a || o,
                        onSelect: o ? null : i,
                        "aria-label": (0,
                        m.t)("mail.action.CLEAR_FLAG"),
                        "aria-disabled": !a || o
                    }, (0,
                    m.t)("mail.action.CLEAR_FLAG")))
                }
            }, {
                key: "renderInviteEvent",
                value: function() {
                    var e = this.props
                      , t = e.selectedCount
                      , n = e.disbleEmailOperations;
                    return _ && r.createElement(u.Z.Button, {
                        disabled: 0 === t || n,
                        onClick: this.handleInviteToEvent,
                        "aria-label": (0,
                        m.t)("mail.action.INVITE_RECIPIENTS"),
                        "aria-disabled": 0 === t || n
                    }, (0,
                    m.t)("mail.action.INVITE_RECIPIENTS"))
                }
            }, {
                key: "renderCreateGroup",
                value: function() {
                    var e = this.props
                      , t = e.onCreateGroup
                      , n = e.selectedCount
                      , o = e.disbleEmailOperations;
                    return r.createElement(u.Z.Button, {
                        disabled: 0 === n || o,
                        onClick: t,
                        "aria-label": (0,
                        m.t)("mail.action.CREATE_GROUP"),
                        "aria-disabled": 0 === n || o,
                        onKeyDown: function(e) {
                            return e.key === h.BY.ENTERKEY && setTimeout(function() {
                                (0,
                                g.kWv)(".ow-contacts-ContactForm-panel-upper")
                            }, 50)
                        }
                    }, (0,
                    m.t)("mail.action.CREATE_GROUP"))
                }
            }, {
                key: "renderViewSource",
                value: function() {
                    var e = this.props
                      , t = e.onViewSource
                      , n = e.isThread
                      , o = e.selectedCount;
                    return r.createElement(u.Z.Button, {
                        disabled: 1 !== o || n,
                        onClick: t,
                        "aria-label": (0,
                        m.t)("mail.action.VIEW_SOURCE"),
                        "aria-disabled": 1 !== o || n
                    }, (0,
                    m.t)("mail.action.VIEW_SOURCE"))
                }
            }, {
                key: "renderPrint",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.onPrintMail
                      , o = t.selectedCount;
                    return r.createElement(u.Z.Button, {
                        onClick: function() {
                            return e.handlePrintMail(o, n)
                        },
                        "aria-label": (0,
                        m.t)("mail.action.PRINT_EMAIL")
                    }, (0,
                    m.t)("mail.action.PRINT_EMAIL"))
                }
            }, {
                key: "renderSaveEML",
                value: function() {
                    var e = this.props
                      , t = e.onSaveEMLFile
                      , n = e.isThread
                      , o = e.selectedCount;
                    return r.createElement(u.Z.Button, {
                        disabled: 1 !== o || n,
                        onClick: t,
                        "aria-label": (0,
                        m.t)("mail.action.SAVEASEML_EMAIL"),
                        "aria-disabled": 1 !== o || n
                    }, (0,
                    m.t)("mail.action.SAVEASEML_EMAIL"))
                }
            }, {
                key: "renderUnSpam",
                value: function() {
                    var e = this.props
                      , t = e.onMarkAsNotSpam
                      , n = e.junk
                      , o = e.isExternalAccount
                      , a = e.selectedCount;
                    return !o && a && n ? r.createElement(u.Z.Button, {
                        onClick: t,
                        "aria-label": (0,
                        m.t)("mail.action.NOT_JUNK")
                    }, (0,
                    m.t)("mail.action.NOT_JUNK")) : null
                }
            }, {
                key: "renderSpam",
                value: function() {
                    var e = this.props
                      , t = e.onMarkAsSpam
                      , n = e.junk
                      , o = e.isExternalAccount
                      , a = e.selectedCount;
                    return o || !a || n ? null : r.createElement(u.Z.Button, {
                        onClick: t,
                        "aria-label": (0,
                        m.t)("mail.action.JUNK")
                    }, (0,
                    m.t)("mail.action.JUNK"))
                }
            }, {
                key: "handleManageTag",
                value: function() {
                    (0,
                    this.props.onManageTag)(),
                    this.setState({
                        dropdownOpen: !1
                    })
                }
            }, {
                key: "toggle",
                value: function(e, t, n) {
                    e ? this.setState({
                        dropdownOpen: !0
                    }) : this.setState({
                        dropdownOpen: !1
                    })
                }
            }, {
                key: "clearField",
                value: function() {
                    var e = this.props.tagsList;
                    this.setState({
                        searchText: "",
                        inputListValue: null
                    }),
                    this.renderTags(e)
                }
            }, {
                key: "handleQuickSearch",
                value: function(e) {
                    var t, n, r;
                    this.setState({
                        dropdownOpen: !0
                    });
                    var o = null === (t = this.form) || void 0 === t ? void 0 : null === (n = t.getCurrentValues()) || void 0 === n ? void 0 : null === (r = n.fieldName) || void 0 === r ? void 0 : r.trim();
                    this.setState({
                        inputListValue: o,
                        searchText: o
                    })
                }
            }, {
                key: "renderTags",
                value: function(e) {
                    var t, n = this, o = this.props, a = o.onCreateTags, i = o.selectedTag, s = o.selectedCount, d = o.isExternalAccount, b = o.isThreadMode, v = (0,
                    y.Z)("mail.tags.maxTagsList"), g = !1;
                    e && v <= e.length && (g = !0),
                    i && Object.keys(i).length;
                    var w = this.state.inputListValue ? e.filter(function(e) {
                        return Object.values(e).some(function(e) {
                            return e.toString().includes(n.state.inputListValue)
                        })
                    }) : e;
                    return r.createElement(u.Z.Dropdown, {
                        onToggle: function(e, t, r) {
                            n.toggle(e, t, r)
                        },
                        onClick: function(e, t, r) {
                            n.toggle(e, t, r)
                        },
                        open: null === this || void 0 === this ? void 0 : null === (t = this.state) || void 0 === t ? void 0 : t.dropdownOpen,
                        className: "ow-tags-toolbar-dropdown",
                        title: (0,
                        m.t)("mail.tags.tagsEditor.TAGS_HEADING"),
                        split: !0,
                        disabled: 0 === s || d || b,
                        "aria-label": (0,
                        m.t)("mail.tags.tagsEditor.TAGS_HEADING"),
                        "aria-disabled": 0 === s
                    }, r.createElement("div", {
                        className: "ow-tag-dropdown"
                    }, r.createElement("div", null, r.createElement(c.l0, {
                        ref: function(e) {
                            n.form = e
                        },
                        className: "ow-tag-dropdown-form"
                    }, r.createElement(c.UP, {
                        name: "fieldName",
                        label: (0,
                        m.t)("mail.tags.tagsEditor.TAG_AS"),
                        autoFocus: !0,
                        ref: this.inputRef,
                        maxLength: (0,
                        y.Z)("common.textMaxLength"),
                        className: "ow-tag-dropdown-input",
                        type: "text",
                        placeholder: (0,
                        m.t)("mail.tags.tagsEditor.SEARCH_TAG"),
                        value: this.state.searchText,
                        onSelect: function(e) {
                            n.handleInputClick(e)
                        },
                        onClick: function(e) {
                            n.handleInputClick(e)
                        },
                        onKeyDown: function(e) {
                            return 13 === e.keyCode ? n.handleQuickSearch(e) : ""
                        }
                    }), r.createElement("div", null, this.state.inputListValue && r.createElement(p.Z, {
                        name: "close",
                        className: "ow-tag-dropdown-input-close",
                        onClick: function(e) {
                            return n.clearField("fieldName", e)
                        },
                        role: h.HB.BUTTON,
                        "aria-label": (0,
                        m.t)("common.CLOSE")
                    }), r.createElement(p.Z, {
                        name: "search-active",
                        className: "ow-tag-dropdown-input-search",
                        onClick: function(e) {
                            n.handleQuickSearch(e),
                            e.stopPropagation()
                        },
                        role: h.HB.BUTTON,
                        "aria-label": (0,
                        m.t)("mail.search.SEARCH")
                    })))), r.createElement(f.Z, {
                        divider: !0
                    }), null === w || void 0 === w ? void 0 : w.map(function(e) {
                        var t = (null === e || void 0 === e ? void 0 : e.id) === (null === i || void 0 === i ? void 0 : i.id) ? "active" : "";
                        return r.createElement(f.Z, {
                            onClick: function(t) {
                                n.onhandleIncludeTag(e, t),
                                t.stopPropagation()
                            },
                            key: e.id,
                            className: l()("ow-simpleList-tags-item", t),
                            eventKey: e,
                            "aria-label": e.name
                        }, r.createElement(p.Z, {
                            style: {
                                color: null === e || void 0 === e ? void 0 : e.color
                            },
                            name: "ow-icon-tag ow-icon-tag",
                            className: "ow-icon-tag",
                            role: h.HB.BUTTON
                        }), null === e || void 0 === e ? void 0 : e.name)
                    }), r.createElement(f.Z, {
                        divider: !0
                    }), r.createElement(f.Z, {
                        disabled: g,
                        "aria-label": (0,
                        m.t)("mail.tags.tagsEditor.TITLE_CREATE"),
                        className: "ow-simpleList-tags-item",
                        onClick: function() {
                            a()
                        }
                    }, (0,
                    m.t)("mail.tags.tagsEditor.TITLE_CREATE")), r.createElement(f.Z, {
                        divider: !0
                    }), r.createElement(f.Z, {
                        className: "ow-simpleList-tags-item",
                        "aria-label": (0,
                        m.t)("mail.tags.tagsEditor.TITLE_MANAGE"),
                        onClick: function() {
                            n.handleManageTag()
                        }
                    }, (0,
                    m.t)("mail.tags.tagsEditor.TITLE_MANAGE")), r.createElement(f.Z, {
                        divider: !0
                    })))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.onReply
                      , o = t.onReplyAll
                      , a = t.onDelete
                      , i = t.onRefresh
                      , l = t.selectedCount
                      , c = t.folderPaths
                      , d = t.onMoveToFolder
                      , f = t.forwardType
                      , p = t.summaries
                      , m = t.cancelSendInProgress
                      , v = t.externalFolders
                      , g = t.accountId
                      , w = t.disbleEmailOperations
                      , E = t.tagsList
                      , T = !1
                      , C = this.props.folderData;
                    v && (v.find(function(e) {
                        e.id === g && (T = !!e.protocol.match(h.p6))
                    }),
                    T && (C = C && C.filter(function(e) {
                        return e.type.toLowerCase().match(h.S.INBOX)
                    })));
                    var P = !1;
                    (m && p && p.length > 0 && h.YX.DRAFT === p[0].folderPath || !l || this.state.disableDelete) && (P = !0);
                    var A = []
                      , R = []
                      , k = []
                      , I = {};
                    (0,
                    y.Z)("mail.toolbar").map(function(e) {
                        if ("object" === O(e)) {
                            var t = Object.keys(e)
                              , n = Object.values(e);
                            if (I[t[0]] = n[0],
                            "forward" === t[0])
                                R = [],
                                R = S(n[0].menu),
                                A.push(t[0]);
                            else if ("more" === t[0])
                                k = [],
                                k = S(n[0]);
                            else {
                                if (!(0,
                                y.Z)("mail.tags.enabled") && "tags" === t[0])
                                    return !1;
                                A.push(n)
                            }
                        } else
                            A.push(e)
                    });
                    var N = {
                        refresh: this.renderRefresh(i, I.refresh),
                        compose: this.renderCompose(I.compose),
                        reply: this.renderReply(n, l, w, I.reply),
                        replyAll: this.renderReplyAll(o, l, w, I.replyAll),
                        delete: this.renderDelete(a, P, I.delete),
                        forward: this.renderForward(R, f, l, I.forward),
                        move: this.renderMoveTo(C, c, d),
                        tags: this.renderTags(E),
                        category: this.renderCategory(),
                        safeSender: this.renderSafeSender(),
                        blockSender: this.renderBlockSender(),
                        blockDomain: this.renderBlockDomain(),
                        read: this.renderRead(),
                        unread: this.renderUnread(),
                        inviteEvent: this.renderInviteEvent(),
                        createGroup: this.renderCreateGroup(),
                        viewSource: this.renderViewSource(),
                        print: this.renderPrint(),
                        saveEML: this.renderSaveEML(),
                        flag: this.renderFlag(),
                        markAsSpam: this.renderMarkAsSpam(),
                        markAsPhishing: this.renderMarkAsPhishing(),
                        markNotAsSpam: this.renderMarkAsNotSpam()
                    };
                    return r.createElement(s.Z, {
                        className: "ow-mail-MailToolbar-AutoSizer",
                        disableHeight: !0
                    }, function(t) {
                        var n = t.width;
                        return r.createElement("div", {
                            className: "ow-mail-MailToolbar-wrapper"
                        }, r.createElement(u.Z, {
                            enableResponsive: !0,
                            width: n > 750 ? 750 : n,
                            selectedCount: e.props.selectedCount
                        }, A.map(function(t) {
                            if (e.props.layout !== j || "delete" !== t) {
                                var n = "forward" === t ? t : t[0].menuName;
                                return N[n]
                            }
                        }), k.map(function(e) {
                            return N[e]
                        })), e.state.spinner && r.createElement(b.Z, null))
                    })
                }
            }]),
            n
        }();
        F.propTypes = {
            junk: a().bool,
            read: a().bool,
            unread: a().bool,
            flagged: a().bool,
            unflagged: a().bool,
            notSelf: a().bool,
            isExternalAccount: a().bool,
            selectedCount: a().number,
            detailStatus: a().string,
            forwardType: a().string,
            disabled: a().bool,
            isImplicit: a().bool,
            isThread: a().bool,
            onMarkAsSpam: a().func.isRequired,
            onMarkAsPhishing: a().func.isRequired,
            onMarkAsNotSpam: a().func.isRequired,
            onMarkAsUnread: a().func.isRequired,
            onMarkAsRead: a().func.isRequired,
            onDelete: a().func.isRequired,
            onMarkAsFlag: a().func.isRequired,
            onClearFlag: a().func.isRequired,
            onViewSource: a().func.isRequired,
            onCreateGroup: a().func.isRequired,
            onPrintMail: a().func.isRequired,
            onSaveEMLFile: a().func.isRequired,
            onNewCompose: a().func.isRequired,
            onReply: a().func.isRequired,
            onReplyAll: a().func.isRequired,
            onInvite: a().func,
            onForwardInline: a().func.isRequired,
            onForwardAttachment: a().func.isRequired,
            onRefresh: a().func.isRequired,
            onMoveToFolder: a().func.isRequired,
            onSafeSender: a().func.isRequired,
            onBlockSender: a().func.isRequired,
            onBlockDomain: a().func.isRequired,
            onBlockSenderAndMarkAsSpam: a().func.isRequired,
            folderPaths: a().arrayOf(a().string),
            folderData: a().arrayOf(a().object),
            currentCategory: a().shape(a().object),
            onMoveCategory: a().func.isRequired,
            onInviteToEvent: a().func.isRequired,
            onCreateTags: a().func,
            accountEmail: a().string,
            cancelSendInProgress: a().bool
        },
        F.defaultProps = {
            junk: !1,
            flagged: !1,
            unflagged: !1,
            read: !0,
            unread: !0,
            notSelf: !0,
            isExternalAccount: !1,
            selectedCount: 0,
            detailStatus: "",
            forwardType: "",
            disabled: !1,
            isImplicit: !1,
            isThread: !1,
            onMarkAsSpam: function() {},
            onMarkAsPhishing: function() {},
            onMarkAsNotSpam: function() {},
            onMarkAsUnread: function() {},
            onMarkAsRead: function() {},
            onDelete: function() {},
            onMarkFlag: function() {},
            onClearFlag: function() {},
            onViewSource: function() {},
            onPrintMail: function() {},
            onSaveEMLFile: function() {},
            onNewCompose: function() {},
            onReply: function() {},
            onReplyAll: function() {},
            onForwardAttachment: function() {},
            onForwardInline: function() {},
            onRefresh: function() {},
            onInvite: function() {},
            onMoveToFolder: function() {},
            onSafeSender: function() {},
            onBlockSender: function() {},
            onBlockDomain: function() {},
            onBlockSenderAndMarkAsSpam: function() {},
            folderPaths: [],
            folderData: [],
            currentCategory: "",
            onMoveCategory: function() {},
            onInviteToEvent: function() {},
            accountEmail: "",
            cancelSendInProgress: !1,
            onCreateTags: function() {}
        },
        t.Z = F
    },
    82325: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return k
            }
        });
        var r = n(87401)
          , o = n(47957)
          , a = n.n(o)
          , i = n(23398)
          , l = n.n(i)
          , c = n(94165)
          , s = n(68725)
          , u = n(32081)
          , d = n(7179)
          , f = n(4446)
          , p = n(44910)
          , m = n(84987);
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
                var n, r = E(e);
                if (t) {
                    var o = E(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === h(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return w(e)
                }(this, n)
            }
        }
        function w(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function E(e) {
            return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var S = "ow-icon-checkbox-unselected"
          , T = "ow-icon-default-custom-img"
          , O = "ow-icon-default-custom"
          , C = "ow-mail-MailSummaryTable-cell-container"
          , P = "ow-VirtualizedList-item-tabFocus"
          , A = "[class*=ow-mail-MailSummaryListItem]"
          , R = "[class*=ow-mail-MailSummaryTable-cell-container]"
          , k = function(e) {
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
            }(n, r.PureComponent);
            var t = g(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).getUserColor = r.getUserColor.bind(w(r)),
                r.customIconMouseOver = r.customIconMouseOver.bind(w(r)),
                r.customIconMouseOut = r.customIconMouseOut.bind(w(r)),
                r.customIconImgMouseOver = r.customIconImgMouseOver.bind(w(r)),
                r.customIconImgMouseOut = r.customIconImgMouseOut.bind(w(r)),
                r.setHoverAction = r.setHoverAction.bind(w(r)),
                r.updateImageError = r.updateImageError.bind(w(r)),
                r.renderAvatar = r.renderAvatar.bind(w(r)),
                r.renderLetterCheckbox = r.renderLetterCheckbox.bind(w(r)),
                r.checkboxLetters = r.checkboxLetters.bind(w(r)),
                r.useToGenerateColor = r.useToGenerateColor.bind(w(r)),
                r.checkLettersForNormalFolder = r.checkLettersForNormalFolder.bind(w(r)),
                r.checkLettersForDraftsAndSent = r.checkLettersForDraftsAndSent.bind(w(r)),
                r.focusOutBackgroundClr = r.focusOutBackgroundClr.bind(w(r)),
                r.focusAddBackground = r.focusAddBackground.bind(w(r)),
                r.state = {
                    avatarImgSrc: "",
                    hover: !1,
                    checkImageError: !1
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
                key: "componentDidUpdate",
                value: function() {
                    var e, t, n, r, o, a = document.activeElement;
                    (null !== a && void 0 !== a && null !== (e = a.classList) && void 0 !== e && e.contains(T) || null !== a && void 0 !== a && null !== (t = a.classList) && void 0 !== t && t.contains(S)) && (null === a || void 0 === a || a.classList.remove(T),
                    null === a || void 0 === a || a.classList.add(S),
                    null === a || void 0 === a || null === (n = a.closest(A)) || void 0 === n || null === (r = n.parentNode) || void 0 === r || r.classList.add(P),
                    null === a || void 0 === a || null === (o = a.closest(R)) || void 0 === o || o.parentNode.classList.add(P))
                }
            }, {
                key: "getUserColor",
                value: function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3, n = 0, r = 0; r < e.length; r++)
                        n = (n << 5) - n + e.charCodeAt(r),
                        n &= n;
                    return c.LR[Math.round(t * Math.abs(n) / 2147483648) % c.LR.length]
                }
            }, {
                key: "focusOutBackgroundClr",
                value: function(e) {
                    var t, n, r = null === (t = e.closest(A)) || void 0 === t ? void 0 : t.parentNode.classList, o = null === (n = e.closest(R)) || void 0 === n ? void 0 : n.parentNode.classList;
                    null !== r && void 0 !== r && r.contains(P) ? null === r || void 0 === r || r.remove(P) : null !== o && void 0 !== o && o.contains(P) && (null === o || void 0 === o || o.remove(P))
                }
            }, {
                key: "focusAddBackground",
                value: function(e, t) {
                    var n, r = null === (n = t.closest(e)) || void 0 === n ? void 0 : n.parentNode.classList;
                    r.contains("ow-VirtualizedList-item-wrapper") && r.add(P)
                }
            }, {
                key: "customIconImgMouseOver",
                value: function(e) {
                    e.stopPropagation();
                    var t = e.target.parentNode
                      , n = e.target
                      , r = n.classList;
                    if (this.setHoverAction(!0),
                    r.contains("ow-icon-checkbox-selected"))
                        r.remove(S);
                    else {
                        if (n.getAttribute("error"))
                            return n.textContent = "",
                            n.style.background = "",
                            r.add(S),
                            r.remove(O),
                            void n.setAttribute("error", "img-error");
                        t.classList.contains("ow-icon") && (t.parentNode.classList.contains("ow-selectable-item-checkbox-container") || t.parentNode.classList.contains(C)) && (t.classList.remove(T),
                        t.classList.add(S)),
                        n.classList.contains("ow-icon") && (t.classList.contains("ow-selectable-item-checkbox-container") || t.classList.contains(C)) && (r.remove(T),
                        r.add(S),
                        t.closest(A) ? this.focusAddBackground(A, t) : this.focusAddBackground(R, t))
                    }
                }
            }, {
                key: "customIconImgMouseOut",
                value: function(e, t, n, r) {
                    e.stopPropagation();
                    var o = this.props.isItemSelected;
                    this.setHoverAction(!1);
                    var a = o(t)
                      , i = e.target
                      , l = i.classList;
                    if (!a) {
                        if (l.length && l.remove(S),
                        e.target.getAttribute("error"))
                            return l.add(O),
                            l.remove(T),
                            i.textContent = n,
                            void (i.style.background = this.getUserColor(r));
                        l.contains("ow-icon") && !e.target.getAttribute("error") ? (l.remove(S),
                        l.add(T),
                        this.focusOutBackgroundClr(i),
                        (0,
                        p.np)(e, this.props.listComp)) : "IMG" !== i.nodeName || e.target.getAttribute("error") ? l.contains(C) && !e.target.getAttribute("error") && i.childNode.classList.add(T) : (i.parentNode.classList.remove(S),
                        i.parentNode.classList.add(T))
                    }
                }
            }, {
                key: "customIconMouseOver",
                value: function(e) {
                    e.stopPropagation();
                    var t = this.props
                      , n = t.rowData
                      , r = (0,
                    t.isItemSelected)(n)
                      , o = e.target;
                    o.textContent = "",
                    o.style.background = "transparent",
                    o.classList.remove(O),
                    (0,
                    f.nIE)() && this.setHoverAction(!0),
                    r || o.classList.add("ow-icon-checkbox-unselected"),
                    o.closest(A) ? this.focusAddBackground(A, o) : this.focusAddBackground(R, o)
                }
            }, {
                key: "customIconMouseOut",
                value: function(e, t, n) {
                    e.stopPropagation();
                    var r = this.props
                      , o = r.rowData
                      , a = (0,
                    r.isItemSelected)(o)
                      , i = e.target;
                    this.setHoverAction(!1),
                    a || !t || e.target.getAttribute("error") || (i.textContent = t,
                    i.style.background = this.getUserColor(n),
                    i.classList.remove(S),
                    i.classList.add(O)),
                    this.focusOutBackgroundClr(i),
                    (0,
                    p.np)(e, this.props.listComp)
                }
            }, {
                key: "setHoverAction",
                value: function(e) {
                    this.setState({
                        hover: e
                    })
                }
            }, {
                key: "updateImageError",
                value: function(e) {
                    this.setState({
                        checkImageError: e
                    })
                }
            }, {
                key: "useToGenerateColor",
                value: function() {
                    var e = this.props
                      , t = e.rowData
                      , n = e.folderType
                      , r = t.data
                      , o = n === c.S.DRAFT || n === c.S.SENT
                      , i = a()(r, "from.address", "")
                      , l = a()(r, "recipients.to", "");
                    return o ? l.length ? a()(r, "recipients.to[0].address", "") : "" : i
                }
            }, {
                key: "checkLettersForDraftsAndSent",
                value: function() {
                    var e = this.props
                      , t = e.rowData
                      , n = e.folderType
                      , r = ""
                      , o = n === c.S.DRAFT || n === c.S.SENT
                      , i = a()(t.data, "recipients.to[0].name", "") ? a()(t.data, "recipients.to[0].name", "") : a()(t.data, "recipients.to[0].address", "")
                      , l = i.split(" ");
                    return o && i && !s.Z.is("email", i) && l.length > 1 ? (r = (0,
                    d.xn)(l[0].charAt(0)) ? l[0].charAt(0).toUpperCase() : "",
                    r += (0,
                    d.xn)(l[1].charAt(0)) ? l[1].charAt(0).toUpperCase() : "") : o && i && !s.Z.is("email", i) && (0,
                    d.xn)(l[0].charAt(0)) ? r = (0,
                    d.xn)(l[0].charAt(0)) ? l[0].charAt(0).toUpperCase() : "" : o && i && s.Z.is("email", i) && (r = i.charAt(0).toUpperCase()),
                    r
                }
            }, {
                key: "checkLettersForNormalFolder",
                value: function() {
                    var e = this.props.displayAddress
                      , t = ""
                      , n = e.split(" ");
                    return n.length > 1 ? (t = (0,
                    d.xn)(n[0].charAt(0)) ? n[0].charAt(0).toUpperCase() : "",
                    t += (0,
                    d.xn)(n[1].charAt(0)) ? n[1].charAt(0).toUpperCase() : "") : e && (0,
                    d.xn)(n[0].charAt(0)) && (t = e.charAt(0).toUpperCase()),
                    t
                }
            }, {
                key: "checkboxLetters",
                value: function() {
                    var e = this.props
                      , t = e.rowData
                      , n = e.folderType
                      , r = ""
                      , o = a()(t.data, "from.address", "")
                      , i = n === c.S.DRAFT || n === c.S.SENT;
                    return r = i ? this.checkLettersForDraftsAndSent() : this.checkLettersForNormalFolder(),
                    i || "" != r ? r : r = o && o.charAt(0).toUpperCase()
                }
            }, {
                key: "renderAvatar",
                value: function() {
                    var e, t = this, n = this.props, o = n.listComponent, a = n.isItemSelected, i = n.rowData, l = n.selectedInfo, s = n.listClick, d = (null === i || void 0 === i ? void 0 : null === (e = i.data) || void 0 === e ? void 0 : e.subject) || (0,
                    m.t)("mail.listView.EMPTY_SUBJECT"), h = this.useToGenerateColor(), y = this.checkboxLetters(), b = a(i);
                    return r.createElement(u.Z, {
                        name: b ? "checkbox-selected" : this.state.avatarImgSrc && !this.state.checkImageError ? "default-custom-img" : !this.state.hover && this.state.checkImageError ? "default-custom" : "checkbox-unselected",
                        role: c.HB.CHECKBOX,
                        "aria-checked": b,
                        "aria-label": d,
                        onClick: function(e) {
                            e.stopPropagation(),
                            o(i, e)
                        },
                        tabIndex: f.UhU.isDesktop ? 0 : -1,
                        onKeyDown: function(e) {
                            (0,
                            p.OG)(e, ".ow-mail-MailPreview-thread-subject", l, o, i, b, s)
                        },
                        onFocus: function(e) {
                            f.UhU.isDesktop && t.customIconImgMouseOver(e)
                        },
                        onBlur: function(e) {
                            f.UhU.isDesktop && t.customIconImgMouseOut(e, i, y, h)
                        },
                        onMouseOver: function(e) {
                            t.customIconImgMouseOver(e)
                        },
                        onMouseLeave: function(e) {
                            t.customIconImgMouseOut(e, i, y, h)
                        },
                        imageerror: this.updateImageError,
                        caption: this.state.avatarImgSrc,
                        avatarinitails: y,
                        avatarbgcolor: this.getUserColor(h),
                        style: {
                            bgStyle: {
                                background: "transparent"
                            }
                        }
                    })
                }
            }, {
                key: "renderLetterCheckbox",
                value: function() {
                    var e, t = this, n = this.props, o = n.listComponent, a = n.isItemSelected, i = n.rowData, l = n.selectedInfo, s = n.listClick, d = a(i), h = this.useToGenerateColor(), y = this.checkboxLetters(), b = {
                        background: "transparent"
                    }, v = (null === i || void 0 === i ? void 0 : null === (e = i.data) || void 0 === e ? void 0 : e.subject) || (0,
                    m.t)("mail.listView.EMPTY_SUBJECT");
                    return r.createElement(u.Z, {
                        role: c.HB.CHECKBOX,
                        "aria-checked": d,
                        "aria-label": v,
                        name: d ? "checkbox-selected" : y && !this.state.hover ? "default-custom" : "checkbox-unselected",
                        onClick: function(e) {
                            e.stopPropagation(),
                            o(i, e)
                        },
                        tabIndex: f.UhU.isDesktop ? 0 : -1,
                        onKeyDown: function(e) {
                            (0,
                            p.OG)(e, ".ow-mail-MailPreview-thread-subject", l, o, i, d, s)
                        },
                        onFocus: function(e) {
                            f.UhU.isDesktop && t.customIconMouseOver(e)
                        },
                        onBlur: function(e) {
                            f.UhU.isDesktop && t.customIconMouseOut(e, y, h)
                        },
                        onMouseOver: function(e) {
                            t.customIconMouseOver(e)
                        },
                        onMouseLeave: function(e) {
                            t.customIconMouseOut(e, y, h)
                        },
                        caption: d ? "" : y,
                        style: d ? {
                            bgStyle: b
                        } : y && !this.state.hover ? {
                            background: this.getUserColor(h)
                        } : {
                            bgStyle: b
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return this.state.avatarImgSrc ? r.createElement(r.Fragment, null, this.renderAvatar()) : r.createElement(r.Fragment, null, this.renderLetterCheckbox())
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    var n = e.rowData
                      , r = e.folderType
                      , o = e.avatarData
                      , i = e.onGetAvatar
                      , l = e.email
                      , s = e.bimiIndicator
                      , u = e.bimiLocations;
                    if (!(a()(o, "avatarListImgData.totalCount", "") && a()(n.data, "from", "") || s))
                        return null;
                    var p = n.data
                      , m = p.from
                      , h = p.recipients
                      , y = o.avatarListImgData;
                    if (!y)
                        return null;
                    var b = r === c.S.DRAFT || r === c.S.SENT
                      , v = a()(m, "address", "")
                      , g = a()(h, "to", "")
                      , w = b ? g ? a()(h, "to[0].address", "") : "" : v
                      , E = y[w];
                    if (!E || t.avatarImgSrc) {
                        var S = u && u[0];
                        if (s && f.UhU.isDesktop && S) {
                            var T = new Image;
                            if (T.src = S,
                            !t.avatarImgSrc)
                                return {
                                    avatarImgSrc: T
                                }
                        }
                        return null
                    }
                    var O = l + "~" + w
                      , C = localStorage.getItem(O);
                    if (C && E) {
                        var P = new Image;
                        return P.src = "data:image/jpg;base64," + C,
                        {
                            avatarImgSrc: P
                        }
                    }
                    var A = new Image;
                    return A.addEventListener("load", function() {
                        (0,
                        d.fQ)(O, A)
                    }, !1),
                    A.src = i(E.src.addressbookid, E.src.id),
                    t.avatarImgSrc ? null : {
                        avatarImgSrc: A
                    }
                }
            }]),
            n
        }();
        k.defaultProps = {
            displayAddress: "",
            listComponent: null,
            isItemSelected: function() {},
            rowData: null,
            folderType: "",
            imageerror: function() {},
            bimiLocations: [],
            bimiIndicator: !1
        },
        k.propTypes = {
            displayAddress: l().string,
            bimiIndicator: l().bool,
            bimiLocations: l().arrayOf(l().string),
            listComponent: l().object,
            isItemSelected: l().func,
            rowData: l().shape({
                data: l().object
            }),
            folderType: l().string,
            imageerror: l().func
        }
    },
    38620: function(e, t, n) {
        "use strict";
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(1972)
          , l = n(88762)
          , c = n(94165);
        function s(e) {
            "@babel/helpers - typeof";
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
                Object.defineProperty(e, d(r.key), r)
            }
        }
        function d(e) {
            var t = function(e, t) {
                if ("object" !== s(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== s(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === s(t) ? t : String(t)
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
                var n, r = m(e);
                if (t) {
                    var o = m(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === s(t) || "function" == typeof t))
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
                t && f(e, t)
            }(n, r.PureComponent);
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
                key: "componentDidMount",
                value: function() {
                    this.props.connectDragPreview((0,
                    l.rX)(), {
                        captureDraggingState: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.connectDragSource
                      , n = e.isDragging
                      , o = e.className;
                    return t(r.createElement("div", {
                        className: "".concat(o, " ").concat(n ? "ow-mail-MailSummaryDragSource-dragging" : ""),
                        onMouseDown: function(e) {
                            e.stopPropagation()
                        }
                    }))
                }
            }]),
            n
        }();
        h.propTypes = {
            connectDragSource: a().func.isRequired,
            isDragging: a().bool.isRequired,
            connectDragPreview: a().func.isRequired,
            className: a().string.isRequired
        };
        var y = {
            beginDrag: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.selectedInfo
                  , n = e.currentId
                  , r = e.handleBeginDrag
                  , o = e.folderPath;
                return r && r(),
                {
                    selected: t.filter(function(e) {
                        var t = e.uid
                          , r = e.folderPath;
                        return t === n && r === o
                    }).length > 0 ? t : [{
                        uid: n,
                        folderPath: o
                    }],
                    folderPath: o
                }
            }
        };
        t.Z = (0,
        i.Ej)(c.ZV.MESSAGES, y, function(e, t) {
            return {
                connectDragSource: e.dragSource(),
                connectDragPreview: e.dragPreview(),
                isDragging: t.isDragging()
            }
        })(h)
    },
    6136: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return ne
            }
        });
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(49758)
          , l = n.n(i)
          , c = n(73918)
          , s = n.n(c)
          , u = n(42583)
          , d = n.n(u)
          , f = n(96072)
          , p = n.n(f)
          , m = n(43779)
          , h = n.n(m)
          , y = n(32081)
          , b = n(30468)
          , v = n(62347)
          , g = n(38620)
          , w = n(24083)
          , E = n(55086)
          , S = n(80110)
          , T = n(20545)
          , O = n(72278)
          , C = n(84987)
          , P = n(94165)
          , A = n(83416)
          , R = n(7179)
          , k = n(47957)
          , I = n.n(k)
          , N = n(82325)
          , D = n(44910)
          , M = n(4446);
        function _(e) {
            "@babel/helpers - typeof";
            return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function j() {
            return (j = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function L(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Z(r.key), r)
            }
        }
        function F(e, t) {
            return (F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function x(e) {
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
                var n, r = H(e);
                if (t) {
                    var o = H(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === _(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return B(e)
                }(this, n)
            }
        }
        function B(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function H(e) {
            return (H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function U(e, t, n) {
            return (t = Z(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Z(e) {
            var t = function(e, t) {
                if ("object" !== _(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== _(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === _(t) ? t : String(t)
        }
        var V = P.u0.SORT_DATE_ASC
          , K = P.u0.SORT_DATE_DESC
          , q = P.u0.SORT_FROM_ASC
          , Y = P.u0.SORT_FROM_DESC
          , G = P.u0.SORT_SUBJECT_ASC
          , W = P.u0.SORT_SUBJECT_DESC
          , X = P.u0.SORT_PRIORITY_ASC
          , z = P.u0.SORT_PRIORITY_DESC
          , J = P.u0.SORT_FLAG_ASC
          , $ = P.u0.SORT_FLAG_DESC
          , Q = P.u0.SORT_TO_ASC
          , ee = P.u0.SORT_TO_DESC
          , te = (0,
        w.h4)(w.JZ, {})
          , ne = function(e) {
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
                t && F(e, t)
            }(n, r.PureComponent);
            var t = x(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                U(B(r = t.call(this, e)), "handleDragStart", function(e) {
                    r.setState({
                        enableDrag: !1
                    });
                    var t = setTimeout(function() {
                        r.setState({
                            enableDrag: !0
                        }),
                        clearTimeout(t)
                    }, 1e3)
                }),
                U(B(r), "handleClickRef", function(e, t) {
                    r.tableComponent.handleCheckChange(e, t)
                }),
                r.renderRowExtra = r.renderRowExtra.bind(B(r)),
                r.itemWrapperClass = r.itemWrapperClass.bind(B(r)),
                r.handleHeaderResize = r.handleHeaderResize.bind(B(r)),
                r.getColumnConfig = r.getColumnConfig.bind(B(r)),
                r.textContent = r.textContent.bind(B(r)),
                r.handleClickRef = r.handleClickRef.bind(B(r)),
                r.handleDragStart = r.handleDragStart.bind(B(r)),
                r.state = {
                    enableDrag: !0
                },
                r
            }
            return function(e, t, n) {
                t && L(e.prototype, t),
                n && L(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.itemHeight
                      , n = e.bufferCount
                      , r = e.scrollTop;
                    (0,
                    e.updatePagination)({
                        itemHeight: t,
                        bufferCount: n,
                        scrollTop: r
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t, n, r, o, a, i, l, c, s = this.props.data, u = s.itemTotalCount, d = s.rows, f = (null === (t = this.props) || void 0 === t ? void 0 : t.selectedFolderPath) !== (null === e || void 0 === e ? void 0 : e.selectedFolderPath);
                    u < (null === e || void 0 === e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : n.itemTotalCount) && void 0 !== u && M.UhU.isDesktop && !f && null != (null === (r = this.tableComponent) || void 0 === r ? void 0 : r.wrappedList) && ((0,
                    D.we)("[class*=ow-icon]", u, null === (o = this.tableComponent) || void 0 === o ? void 0 : o.wrappedList, null === e || void 0 === e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.itemTotalCount),
                    (0 === u && (null === e || void 0 === e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : i.itemTotalCount) <= 2 || 1 === (null === (l = d.data) || void 0 === l ? void 0 : l.length) && 1 === (null === (c = d.data) || void 0 === c ? void 0 : c.adid)) && (0,
                    D.kW)(".ow-ResponsiveToolbar"))
                }
            }, {
                key: "getColumnConfig",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.isThreadMode
                      , o = t.selectedInfo
                      , a = t.isItemSelected
                      , i = t.onSelectViewPort
                      , c = t.categoryEnabled
                      , s = t.showFolder
                      , u = t.folderDisplay
                      , d = t.showPin
                      , f = t.useLongTime
                      , p = t.use24HrFormat
                      , m = t.selectedFolderPathType
                      , b = t.timeDisplayFormat
                      , v = t.headerWidths
                      , g = !0
                      , w = !1
                      , E = JSON.parse(window.uxLocalStorage.getItem("headerWidths"));
                    m && (-1 === m.toLowerCase().indexOf(P.S.SENT) && -1 === m.toLowerCase().indexOf(P.S.DRAFT) ? g = !0 : (w = !0,
                    g = !1));
                    var S = [{
                        renderHeaderContent: function() {
                            var e = o.length < 100 ? o.length : "...";
                            return r.createElement("div", {
                                className: "ow-selectable-item-checkbox-container"
                            }, r.createElement(l(), {
                                className: o.length > 0 ? "ow-mail-MailSummaryListHeader-selectCount" : "ow-mail-MailSummaryListHeader-selectCount-0",
                                onClick: function() {
                                    return i()
                                },
                                tabIndex: 0,
                                role: P.HB.CHECKBOX,
                                "aria-label": 0 !== (null === o || void 0 === o ? void 0 : o.length) ? "".concat(null === o || void 0 === o ? void 0 : o.length, " ").concat((0,
                                C.t)("aria.label.SELECT")) : (0,
                                C.t)("mail.listView.tooltips.SELECT_IN_VIEW"),
                                onKeyDown: function(e) {
                                    return e.key === P.BY.ENTERKEY && i()
                                }
                            }, o.length > 0 ? e : " "))
                        },
                        width: 45,
                        renderCellContent: function(t) {
                            if (null !== t && void 0 !== t && t.data) {
                                var n, i, l, c = a(t), s = e.props, u = s.showAvatar, d = s.manageShowAvatar, f = s.avatarData, p = s.onGetAvatar, m = s.selectedFolderPathType, b = s.email, v = m === P.S.DRAFT || m === P.S.SENT, g = I()(t, "data.from.name", "") || I()(t, "data.from.address", ""), w = I()(t, "data.recipients.to", "") && I()(t, "data.recipients.to", "").map(function(e) {
                                    return e && (e.name || e.address)
                                }).filter(function(e) {
                                    return !!e
                                }), E = I()(w, "[0]", ""), S = v ? E : g, T = I()(t, "data.flags.userFlags", []), O = I()(t, "data.bimiLocations", []), R = T && h()(T, "bimi"), k = I()(t, "data.subject", "") || (0,
                                C.t)("mail.listView.EMPTY_SUBJECT");
                                return (0,
                                A.Z)("mail.avatar.enabled") && u && "" === d ? r.createElement(N.Z, {
                                    displayAddress: S,
                                    listComponent: e.handleClickRef,
                                    listClick: null === (n = e.tableComponent) || void 0 === n ? void 0 : null === (i = n.wrappedList) || void 0 === i ? void 0 : i.handleItemClick,
                                    isItemSelected: a,
                                    rowData: t,
                                    folderType: m,
                                    avatarData: f,
                                    onGetAvatar: p,
                                    email: b,
                                    bimiIndicator: R,
                                    bimiLocations: O,
                                    selectedInfo: o,
                                    listComp: null === (l = e.tableComponent) || void 0 === l ? void 0 : l.wrappedList
                                }) : r.createElement(y.Z, {
                                    name: c ? "checkbox-selected" : "checkbox-unselected",
                                    tabIndex: M.UhU.isDesktop ? 0 : -1,
                                    role: P.HB.CHECKBOX,
                                    "aria-checked": c,
                                    "aria-label": k,
                                    onKeyDown: function(n) {
                                        var r, a;
                                        (0,
                                        D.OG)(n, ".ow-mail-MailPreview-thread-subject", o, e.handleClickRef, t, c, null === (r = e.tableComponent) || void 0 === r ? void 0 : null === (a = r.wrappedList) || void 0 === a ? void 0 : a.handleItemClick)
                                    },
                                    onFocus: function(e) {
                                        return (0,
                                        D.yJ)(e)
                                    },
                                    onBlur: function(t) {
                                        var n;
                                        (0,
                                        D.yJ)(t),
                                        (0,
                                        D.np)(t, null === (n = e.tableComponent) || void 0 === n ? void 0 : n.wrappedList)
                                    },
                                    onClick: function(n) {
                                        n.stopPropagation(),
                                        e.tableComponent.handleCheckChange(t, n)
                                    }
                                })
                            }
                        }
                    }, {
                        renderHeaderContent: function() {
                            return r.createElement(y.Z, {
                                name: "repliedForwarded-mail",
                                role: P.HB.BUTTON,
                                "aria-label": (0,
                                C.t)("aria.label.REPLY_FORWARD")
                            })
                        },
                        width: 40,
                        renderCellContent: function(t) {
                            var n = t.data;
                            if (n) {
                                var o = n.flags
                                  , a = o.forwarded
                                  , i = o.answered;
                                return a || i ? r.createElement(T.Z, {
                                    isReplied: i,
                                    isForwarded: a
                                }) : null
                            }
                            return e.emptyContent()
                        }
                    }, n ? {
                        renderHeaderContent: function() {
                            return r.createElement(y.Z, {
                                name: "conversation-mail",
                                role: P.HB.BUTTON,
                                "aria-label": (0,
                                C.t)("aria.label.CONVERSATION_MAIL")
                            })
                        },
                        width: 40,
                        renderCellContent: function(t) {
                            var n = t.data;
                            if (n) {
                                var o = n.uidList
                                  , a = o && o.length;
                                return a > 1 && r.createElement(l(), {
                                    className: "ow-mail-MailSummaryListItem-threadCount"
                                }, (a < 10 ? "0" : "") + a)
                            }
                            return e.emptyContent()
                        }
                    } : null, g ? {
                        headerClass: "ow-mail-MailSummaryTable-header-from",
                        width: E ? E.from : 200,
                        minWidth: 100,
                        maxWidth: 450,
                        resizable: !0,
                        renderHeaderContent: function() {
                            return e.sortableHeader({
                                ascKey: q,
                                descKey: Y,
                                text: (0,
                                C.t)("mail.listView.HEADER_SENDER"),
                                defaultDirection: "asc"
                            })
                        },
                        renderCellContent: function(t) {
                            var n = t.data;
                            if (n) {
                                var r = n.from
                                  , o = n.flags
                                  , a = o.seen
                                  , i = o.userFlags
                                  , l = r && (r.name || r.address)
                                  , s = c && i && h()(i, "suspicious");
                                return e.textContent(!!a, l, r, s)
                            }
                            return e.emptyContent()
                        }
                    } : null, w ? {
                        headerClass: "ow-mail-MailSummaryTable-header-to",
                        width: E ? E.from : 200,
                        minWidth: 100,
                        maxWidth: 600,
                        resizable: !0,
                        renderHeaderContent: function() {
                            return e.sortableHeader({
                                ascKey: Q,
                                descKey: ee,
                                text: (0,
                                C.t)("mail.listView.HEADER_RECIPIENT"),
                                defaultDirection: "asc"
                            })
                        },
                        renderCellContent: function(t) {
                            var n = t.data;
                            if (n) {
                                var r = n.from
                                  , o = n.flags
                                  , a = o.seen
                                  , i = o.userFlags
                                  , l = r && (r.name || r.address)
                                  , s = c && i && h()(i, "suspicious")
                                  , u = n.recipients;
                                if (u.to)
                                    l = u.to.map(function(e) {
                                        return e.name || e.address
                                    }).join("; ");
                                return e.textContent(!!a, l, s)
                            }
                            return e.emptyContent()
                        }
                    } : null, {
                        headerClass: "ow-mail-MailSummaryTable-header-subject",
                        flex: 1,
                        width: E ? E.subject : 100,
                        minWidth: 100,
                        maxWidth: 600,
                        resizable: !0,
                        renderHeaderContent: function() {
                            return e.sortableHeader({
                                ascKey: G,
                                descKey: W,
                                text: (0,
                                C.t)("mail.listView.HEADER_SUBJECT"),
                                defaultDirection: "asc"
                            })
                        },
                        renderCellContent: function(t) {
                            var n = t.data;
                            if (n) {
                                var o, a, i, l = e.props, c = l.tagList, d = l.accountId, f = l.isThreadMode, p = n.subject, m = n.flags.seen, h = n.messagePreview, y = n.folderPath, b = n.tagids, v = n.selectedTag, g = 0;
                                null === b || void 0 === b || b.map(function(e) {
                                    return c.map(function(t) {
                                        var n;
                                        (null === t || void 0 === t ? void 0 : t.id) === (null === e || void 0 === e ? void 0 : e.id) && (i || (i = t),
                                        g++,
                                        v && (null === (n = Object.keys(v)) || void 0 === n ? void 0 : n.length) > 1 && (null === v || void 0 === v ? void 0 : v.id) === (null === e || void 0 === e ? void 0 : e.id) && (i = v))
                                    })
                                });
                                var w = r.createElement("span", {
                                    className: "ow-tags-count"
                                }, r.createElement("div", {
                                    className: "ow-tags-count"
                                }, r.createElement("span", null, " ", r.createElement("span", {
                                    className: "ow-mail-list-tags",
                                    style: {
                                        background: "".concat(null === (o = i) || void 0 === o ? void 0 : o.color)
                                    }
                                }, null === (a = i) || void 0 === a ? void 0 : a.name, " "), " ", r.createElement("span", {
                                    className: "ow-mail-list-tags-count"
                                }, "  ", 1 == g ? "" : "+ ".concat(g - 1, " ")), " ")))
                                  , E = p || (0,
                                C.t)("mail.listView.EMPTY_SUBJECT")
                                  , S = "";
                                h && (S = h.body ? (0,
                                R.Mc)(h.body) : (0,
                                C.t)("mail.NO_MESSAGE_PREVIEW"));
                                var T = (null === b || void 0 === b ? void 0 : b.length) > 0 && "" === d && !f && g > 0
                                  , O = r.createElement("span", null, " ", T ? w : "", " ", E, " ", S ? r.createElement("span", {
                                    className: "ow-mail-MailSummaryTable-bodyPreview"
                                }, " - ".concat(S)) : "");
                                return e.textContent(!!m, O, null, s, u, y, !0)
                            }
                            return e.emptyContent()
                        }
                    }, {
                        headerClass: "ow-mail-MailSummaryTable-header-date",
                        width: "long" === b ? 182 : E ? E.date : 110,
                        minWidth: 90,
                        maxWidth: 600,
                        resizable: !0,
                        renderHeaderContent: function() {
                            return e.sortableHeader({
                                ascKey: V,
                                descKey: K,
                                text: (0,
                                C.t)("mail.listView.HEADER_DATE"),
                                defaultDirection: "desc"
                            })
                        },
                        renderCellContent: function(t) {
                            var n = t.data;
                            if (n) {
                                var r = n.receivedDate
                                  , o = n.sentDate
                                  , a = n.flags.seen
                                  , i = !p && f ? window.TimeUtil.getTimeZoneDateTime(r, o) : TimeUtil.getTimeParseInt24to12(window.TimeUtil.getCalendarDateTime(r));
                                return e.textContent(!!a, i, null)
                            }
                            return e.emptyContent()
                        }
                    }, {
                        renderHeaderContent: function() {
                            return e.sortableHeader({
                                ascKey: J,
                                descKey: $,
                                text: r.createElement(y.Z, {
                                    name: "flag-mail",
                                    role: P.HB.BUTTON,
                                    "aria-label": (0,
                                    C.t)("mail.listView.HEADER_FLAG")
                                }),
                                defaultDirection: "desc"
                            })
                        },
                        headerClass: "ow-mail-MailSummaryTable-header-flag",
                        width: 30,
                        renderCellContent: function(t) {
                            var n = t.data;
                            return n ? n.flags.flagged && r.createElement(y.Z, {
                                name: "flag-mail"
                            }) : e.emptyContent()
                        }
                    }, {
                        renderHeaderContent: function() {
                            return r.createElement(y.Z, {
                                name: "attachment-mail",
                                role: P.HB.BUTTON,
                                "aria-label": (0,
                                C.t)("mail.listView.HEADER_ATTACHMENT")
                            })
                        },
                        width: 35,
                        renderCellContent: function(t) {
                            var n = t.data;
                            return n ? n.attachmentCount > 0 && r.createElement(y.Z, {
                                name: "attachment-mail"
                            }) : e.emptyContent()
                        }
                    }, {
                        headerClass: "ow-mail-MailSummaryTable-header-priority",
                        width: 30,
                        renderHeaderContent: function() {
                            return e.sortableHeader({
                                ascKey: z,
                                descKey: X,
                                text: r.createElement(y.Z, {
                                    name: "exclamation",
                                    role: P.HB.BUTTON,
                                    "aria-label": (0,
                                    C.t)("mail.listView.HEADER_PRIORITY")
                                }),
                                defaultDirection: "desc"
                            })
                        },
                        renderCellContent: function(t) {
                            var n = t.data;
                            if (n) {
                                var o = n.priority;
                                return r.createElement(O.Z, {
                                    level: o
                                })
                            }
                            return e.emptyContent()
                        }
                    }, d ? {
                        renderHeaderContent: function() {
                            return r.createElement(y.Z, {
                                name: "pin-mail",
                                role: P.HB.BUTTON,
                                "aria-label": (0,
                                C.t)("aria.label.PIN")
                            })
                        },
                        width: 30,
                        renderCellContent: function(t) {
                            var n = t.data;
                            return n ? n.pinned && r.createElement(y.Z, {
                                name: "pin-mail"
                            }) : e.emptyContent()
                        }
                    } : null];
                    return v ? S.filter(function(e) {
                        return null !== e
                    }).map(function(e, t) {
                        return e.width = v[t],
                        e
                    }) : S.filter(function(e) {
                        return null !== e
                    })
                }
            }, {
                key: "emptyContent",
                value: function() {
                    return r.createElement("div", {
                        className: "ow-mail-MailSummaryTable-cell-epmty"
                    })
                }
            }, {
                key: "textContent",
                value: function(e, t, n, o, a, i, l, c) {
                    var u = this.props.tagFolder
                      , f = void 0 !== u && u;
                    return r.createElement("div", null, r.createElement("div", {
                        className: "ow-mail-MailSummaryTable-cell"
                    }, o && !f && r.createElement(p(), {
                        className: "ow-mail-MailSummaryTable-cell-suspicious"
                    }, r.createElement(s(), {
                        placement: "bottom",
                        overlay: r.createElement(d(), {
                            id: "tooltip-bottom"
                        }, r.createElement("span", {
                            className: "ow-mail-MailSummaryListItem-row-suspicious-tooltip",
                            "aria-label": (0,
                            C.t)("mail.listView.tooltips.SUSPICIOUS_MESSAGE")
                        }, (0,
                        C.t)("mail.listView.tooltips.SUSPICIOUS_MESSAGE")))
                    }, r.createElement("span", {
                        className: "ow-icon-mail-suspicious"
                    }))), r.createElement("span", {
                        className: "ow-mail-MailSummaryTable-cell-text".concat(e ? "" : a && "date" === a ? " ow-mail-MailSummaryTable-cell-bold-text ow-mail-MailSummaryListItem-date " : " ow-mail-MailSummaryTable-cell-bold-text"),
                        title: t,
                        "aria-label": t
                    }, t, r.createElement("div", {
                        className: "ow-mail-MailSummaryTable-cell-text-Drag "
                    }, t === I()(n, "name", "") && r.createElement(d(), {
                        style: {
                            width: "160px,height:60px"
                        },
                        onMouseDown: this.handleDragStart,
                        title: I()(n, "address", ""),
                        className: "ow-mail-MailSummaryTable-cell-text-tooltip"
                    }, I()(n, "address", ""))))), a && c && !f ? r.createElement("div", {
                        className: "ow-mail-header-folder"
                    }, r.createElement("span", {
                        className: "ow-mail-MailSummaryListItem-folder",
                        title: i(l)
                    }, i(l))) : null)
                }
            }, {
                key: "sortableHeader",
                value: function(e) {
                    var t = e.ascKey
                      , n = e.optionalAscKey
                      , o = e.descKey
                      , a = e.optionalDescKey
                      , i = e.text
                      , l = e.defaultDirection
                      , c = this.props
                      , s = c.sort
                      , u = c.onSortChange
                      , d = c.isFetching
                      , f = c.accountId
                      , p = s === t || s === n
                      , m = s === o || s === a
                      , h = p && r.createElement(y.Z, {
                        name: "up-thin",
                        className: "mail-MailSummaryListSortBtn-asc"
                    }) || m && r.createElement(y.Z, {
                        name: "down-thin",
                        className: "mail-MailSummaryListSortBtn-desc"
                    })
                      , b = p && o || m && t || ("asc" === l ? t : o);
                    return r.createElement("div", {
                        role: P.HB.PRESENTATION,
                        className: "ow-mail-MailSummaryTable-header"
                    }, r.createElement("span", {
                        className: d ? "ow-mail-MailSummaryTable-header-text-disable" : "ow-mail-MailSummaryTable-header-text",
                        role: P.HB.PRESENTATION,
                        onClick: function() {
                            return u(b, f)
                        },
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            return e.key === P.BY.ENTERKEY && u(b, f)
                        },
                        "aria-label": i
                    }, i, h))
                }
            }, {
                key: "handleHeaderResize",
                value: function(e) {
                    var t, n = this.props.updatePagination;
                    t = {
                        from: e[2],
                        subject: e[3],
                        date: e[4]
                    },
                    window.uxLocalStorage.setItem("headerWidths", JSON.stringify(t)),
                    n({
                        headerWidths: e
                    })
                }
            }, {
                key: "itemWrapperClass",
                value: function(e) {
                    return (0,
                    this.props.isItemSelected)(e) ? "ow-VirtualizedTable-item-selected ow-InlineBar-wrapper" : "ow-InlineBar-wrapper"
                }
            }, {
                key: "renderSection",
                value: function(e) {
                    return r.createElement("span", {
                        className: "ow-mail-MailSummaryListItem-section-label",
                        role: P.HB.HEADING,
                        "aria-level": P.DU.H4,
                        "aria-label": null === e || void 0 === e ? void 0 : e.label
                    }, e.label)
                }
            }, {
                key: "renderRowExtra",
                value: function(e) {
                    var t = this;
                    if (!e.data)
                        return null;
                    var n = this.props
                      , o = n.selectedInfo
                      , a = n.onPinToggle
                      , i = n.onMarkAsUnread
                      , l = n.onMarkAsRead
                      , c = n.onMarkAsFlag
                      , s = n.onClearFlag
                      , u = n.onDelete
                      , d = n.onRefresh
                      , f = n.onReply
                      , p = n.showPin
                      , m = n.cancelSendInProgress
                      , h = n.layout
                      , y = e.data
                      , w = y.uid
                      , E = y.folderPath;
                    return [r.createElement(g.Z, {
                        className: "ow-mail-MailSummaryDragSource",
                        selectedInfo: o,
                        currentId: w,
                        folderPath: E,
                        handleBeginDrag: function() {
                            return t.tableComponent.wrappedList.willUpdateSelection(e, P.rW.DRAG, {})
                        }
                    }), r.createElement(v.Z, {
                        className: "ow-mail-MailSummaryTable-row-hoverToolbar",
                        enableHover: !0
                    }, r.createElement(b.Z, {
                        cancelSendInProgress: m,
                        summary: e.data,
                        index: e.index,
                        onMarkAsUnread: i,
                        onMarkAsRead: l,
                        onMarkAsFlag: c,
                        onClearFlag: s,
                        onDelete: u,
                        onRefresh: d,
                        onReply: f,
                        showPin: p,
                        layout: h,
                        onPinToggle: function() {
                            return a(e.data)
                        }
                    }))]
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , o = t.updatePagination
                      , a = t.headerHeight
                      , i = t.isFetching;
                    return r.createElement(E.Z, {
                        className: "ow-mail-AutoSizer",
                        onResize: function(e) {
                            var t = e.height;
                            o({
                                listHeight: t - a
                            })
                        }
                    }, function(t) {
                        var o = t.height
                          , l = t.width;
                        return 0 === o ? r.createElement("div", null) : i || n ? r.createElement(te, j({
                            onHeaderResize: e.handleHeaderResize,
                            columnConfig: e.getColumnConfig(),
                            className: "ow-mail-MailSummaryTable",
                            tableHeight: o,
                            listWidth: l,
                            headerHeight: a,
                            renderRowExtra: e.renderRowExtra,
                            renderSection: e.renderSection,
                            itemWrapperClass: e.itemWrapperClass
                        }, e.props, {
                            ref: function(t) {
                                e.tableComponent = t
                            }
                        }), i ? r.createElement("div", {
                            style: {
                                width: l,
                                position: "relative",
                                zIndex: 1
                            }
                        }, r.createElement(S.Z, null), " ") : null, i || 0 !== n.itemTotalCount ? null : r.createElement("div", {
                            style: {
                                width: l
                            },
                            className: "ow-mail-MailSummaryList-tooltip",
                            role: "alert",
                            "aria-live": P.HO.ASSERTIVE,
                            "aria-label": (0,
                            C.t)("mail.listView.EMPTY_MAIL_LIST")
                        }, r.createElement("span", null, (0,
                        C.t)("mail.listView.EMPTY_MAIL_LIST")))) : r.createElement("div", {
                            style: {
                                width: l
                            },
                            className: "ow-mail-MailSummaryList-tooltip",
                            role: P.HB.ALERT,
                            "aria-live": P.HO.ASSERTIVE,
                            "aria-label": (0,
                            C.t)("mail.listView.EMPTY_MAIL_LIST")
                        }, r.createElement("span", null, (0,
                        C.t)("mail.listView.EMPTY_MAIL_LIST")))
                    })
                }
            }]),
            n
        }();
        ne.defaultProps = {
            useLongTime: !1,
            use24HrFormat: !1,
            showAvatar: !1,
            manageShowAvatar: "",
            sort: null,
            showPin: !1,
            data: {
                rows: [],
                totalHeight: 0,
                itemTotalCount: 0
            },
            headerHeight: 30,
            itemHeight: (0,
            A.Z)("advertisement.inline") && (0,
            A.Z)("advertisement.noneViewAdHeight") ? (0,
            A.Z)("advertisement.noneViewAdHeight") : (0,
            A.Z)("mail.noneViewListHeight"),
            bufferCount: 20,
            scrollTop: 0,
            selectedInfo: [],
            headerWidths: void 0,
            isThreadMode: !1,
            isFetching: !1,
            categoryEnabled: !1,
            updatePagination: function() {},
            onSelectChange: function() {},
            isItemSelected: function() {},
            onSortChange: function() {},
            onSelectViewPort: function() {},
            onMarkAsRead: function() {},
            onMarkAsUnread: function() {},
            onMarkAsFlag: function() {},
            onClearFlag: function() {},
            onDelete: function() {},
            onRefresh: function() {},
            onReply: function() {},
            onPinToggle: function() {},
            showFolder: !1,
            folderDisplay: function() {},
            folderPath: void 0,
            cancelSendInProgress: !1
        },
        ne.propTypes = {
            useLongTime: a().bool,
            use24HrFormat: a().bool,
            showAvatar: a().bool,
            manageShowAvatar: a().string,
            sort: a().string,
            showPin: a().bool,
            data: a().shape({
                rows: a().arrayOf(a().object),
                totalHeight: a().number,
                itemTotalCount: a().number
            }),
            headerHeight: a().number,
            itemHeight: a().number,
            bufferCount: a().number,
            scrollTop: a().number,
            isFetching: a().bool,
            categoryEnabled: a().bool,
            isThreadMode: a().bool,
            selectedInfo: a().arrayOf(a().oneOfType([a().number, a().string])),
            headerWidths: a().arrayOf(a().number),
            onSelectChange: a().func,
            updatePagination: a().func,
            isItemSelected: a().func,
            onSortChange: a().func,
            onSelectViewPort: a().func,
            onMarkAsRead: a().func,
            onMarkAsUnread: a().func,
            onMarkAsFlag: a().func,
            onClearFlag: a().func,
            onDelete: a().func,
            onRefresh: a().func,
            onReply: a().func,
            onPinToggle: a().func,
            showFolder: a().bool,
            folderDisplay: a().func,
            folderPath: a().string,
            cancelSendInProgress: a().bool
        }
    },
    30468: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return T
            }
        });
        var r = n(87401)
          , o = n(23398)
          , a = n(32081)
          , i = n(4446)
          , l = n(94165)
          , c = n(47957)
          , s = n.n(c)
          , u = n(83416)
          , d = n(80110);
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
        function p(e, t) {
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
        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach(function(t) {
                    h(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function h(e, t, n) {
            return (t = b(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
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
                if ("object" !== f(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== f(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === f(t) ? t : String(t)
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
                var n, r = E(e);
                if (t) {
                    var o = E(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === f(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return w(e)
                }(this, n)
            }
        }
        function w(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function E(e) {
            return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var S = l.DJ.ATTACHMENT_VIEW
          , T = (l.DJ.PREVIEW_RIGHT,
        l.DJ.PREVIEW_BELOW,
        l.DJ.PREVIEW_NONE,
        function(e) {
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
                (r = t.call(this, e)).handleClick = r.handleClick.bind(w(r)),
                r.callBackForReset = r.callBackForReset.bind(w(r)),
                r.setDisableCall = r.setDisableCall.bind(w(r)),
                r.state = {
                    disableDelete: !1,
                    spinner: !1
                },
                r.closeRunningSpinner = r.closeRunningSpinner.bind(w(r)),
                window.addEventListener("closeRunningSpinner", r.closeRunningSpinner),
                r
            }
            return function(e, t, n) {
                t && y(e.prototype, t),
                n && y(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "callBackForReset",
                value: function() {
                    var e, t;
                    (this.setState({
                        disableDelete: !1
                    }),
                    UXConfig.advertisement.adBanner || UXConfig.advertisement.skyscrapper) && ((null === (e = [S]) || void 0 === e || !e.includes(null === (t = this.props) || void 0 === t ? void 0 : t.layout)) && this.props.index < UXConfig.advertisement.refreshAdCounter && this.props.onRefresh())
                }
            }, {
                key: "setDisableCall",
                value: function() {
                    this.setState({
                        disableDelete: !0
                    })
                }
            }, {
                key: "handleClick",
                value: function(e) {
                    var t = this.props
                      , n = t.summary
                      , r = t.onReply
                      , o = t.summary.size;
                    e.stopPropagation(),
                    o > (0,
                    u.Z)("mail.maxMessageSizeForLoader") && this.setState({
                        spinner: !0
                    }),
                    setTimeout(function() {
                        if (n.isThread) {
                            var e = n.parentUid;
                            r(m(m({}, n), {}, {
                                uid: e
                            }))
                        } else
                            r(n)
                    }, 100)
                }
            }, {
                key: "closeRunningSpinner",
                value: function(e) {
                    this.setState({
                        spinner: !1
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("closeRunningSpinner", this.closeRunningSpinner)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.onMarkAsUnread
                      , o = t.onMarkAsRead
                      , c = t.onMarkAsFlag
                      , u = t.onClearFlag
                      , f = t.onDelete
                      , p = t.onPinToggle
                      , m = t.summary
                      , h = t.showPin
                      , y = t.cancelSendInProgress;
                    if (!m)
                        return null;
                    var b = m.flags
                      , v = void 0 === b ? {} : b
                      , g = v.seen
                      , w = v.flagged
                      , E = m.pinned
                      , S = !s()(m, "from.address", "")
                      , T = {};
                    return (y && m.folderPath === l.YX.DRAFT || this.state.disableDelete) && (T = {
                        pointerEvents: "none",
                        opacity: "0.4"
                    }),
                    r.createElement("div", {
                        className: "ow-mail-MailSummaryToolbar"
                    }, r.createElement(a.Z, {
                        name: "read-unread",
                        title: g ? (0,
                        i.t)("mail.action.UNREAD") : (0,
                        i.t)("mail.action.READ"),
                        onClick: function(e) {
                            e.stopPropagation(),
                            g ? n(m) : o(m)
                        },
                        role: l.HB.BUTTON,
                        "aria-label": g ? (0,
                        i.t)("mail.action.UNREAD") : (0,
                        i.t)("mail.action.READ"),
                        "aria-hidden": "true"
                    }), !S && r.createElement(a.Z, {
                        name: "reply-mail",
                        title: (0,
                        i.t)("mail.action.REPLY"),
                        onClick: this.handleClick,
                        role: l.HB.BUTTON,
                        "aria-label": (0,
                        i.t)("mail.action.REPLY"),
                        "aria-hidden": "true"
                    }), r.createElement(a.Z, {
                        name: "flag-mail",
                        title: w ? (0,
                        i.t)("mail.action.CLEAR_FLAG") : (0,
                        i.t)("mail.action.FLAG"),
                        onClick: function(e) {
                            e.stopPropagation(),
                            w ? u(m) : c(m)
                        },
                        role: l.HB.BUTTON,
                        "aria-label": w ? (0,
                        i.t)("mail.action.CLEAR_FLAG") : (0,
                        i.t)("mail.action.FLAG"),
                        "aria-hidden": "true"
                    }), !this.state.disableDelete && r.createElement(a.Z, {
                        style: T,
                        name: "trash-mail",
                        title: (0,
                        i.t)("mail.action.DELETE"),
                        onClick: function(t) {
                            t.stopPropagation(),
                            e.setDisableCall(),
                            setTimeout(function() {
                                f(m, e.callBackForReset)
                            }, 500)
                        },
                        role: l.HB.BUTTON,
                        "aria-label": (0,
                        i.t)("mail.action.DELETE"),
                        "aria-true": "true"
                    }), h && r.createElement(a.Z, {
                        name: "pin-mail",
                        title: E ? (0,
                        i.t)("mail.action.UNPIN") : (0,
                        i.t)("mail.action.PIN"),
                        onClick: function(e) {
                            e.stopPropagation(),
                            p(m)
                        },
                        role: l.HB.BUTTON,
                        "aria-label": E ? (0,
                        i.t)("mail.action.UNPIN") : (0,
                        i.t)("mail.action.PIN"),
                        "aria-hidden": "true"
                    }), this.state.spinner && r.createElement(d.Z, null))
                }
            }]),
            n
        }());
        T.defaultProps = {
            onMarkAsUnread: function() {},
            onMarkAsRead: function() {},
            onReply: function() {},
            onMarkAsFlag: function() {},
            onClearFlag: function() {},
            onDelete: function() {},
            onPinToggle: function() {},
            summary: {},
            showPin: !1,
            cancelSendInProgress: !1
        },
        T.propTypes = {
            onMarkAsUnread: o.func,
            onMarkAsRead: o.func,
            onReply: o.func,
            onMarkAsFlag: o.func,
            onClearFlag: o.func,
            onDelete: o.func,
            onPinToggle: o.func,
            summary: (0,
            o.shape)({}),
            showPin: o.bool,
            cancelSendInProgress: o.bool
        }
    },
    63505: function(e, t, n) {
        "use strict";
        var r = n(16083)
          , o = n(94165)
          , a = n(68418)
          , i = n(74494)
          , l = n(96744)
          , c = o.DJ.PREVIEW_RIGHT;
        t.Z = (0,
        r.$j)(function(e) {
            var t;
            return {
                isDefaultAccount: (0,
                i.GKE)(e),
                categoryEnabled: (0,
                i.a0Y)(e),
                selectedLayout: (0,
                i.YQw)(e) || c,
                enableThread: (0,
                i.KQl)(e),
                selectedMsgCount: (0,
                l.Nn)(e) ? null === (t = (0,
                l.Nn)(e)) || void 0 === t ? void 0 : t.length : 0
            }
        }, function(e) {
            return {
                onLayoutChange: function(t) {
                    return e((0,
                    a.Vh)(t))
                },
                onThreadToggle: function(t, n) {
                    return e((0,
                    a.xp)(t, n))
                },
                onCategoryToggle: function(t) {
                    return e((0,
                    a.Ts)(t))
                }
            }
        })
    },
    51756: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return ft
            }
        });
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(32307)
          , l = n.n(i)
          , c = n(6402)
          , s = n.n(c)
          , u = n(31186)
          , d = n.n(u)
          , f = n(1972)
          , p = n(67064)
          , m = n.n(p)
          , h = n(56590)
          , y = n.n(h)
          , b = n(8764)
          , v = n.n(b)
          , g = n(44724)
          , w = n.n(g)
          , E = n(96072)
          , S = n.n(E)
          , T = n(78295)
          , O = n.n(T)
          , C = n(55046)
          , P = n.n(C)
          , A = n(55594)
          , R = n.n(A)
          , k = n(49758)
          , I = n.n(k)
          , N = n(76707)
          , D = n.n(N)
          , M = n(70293)
          , _ = n.n(M)
          , j = n(98401)
          , L = n(32081)
          , F = n(80110)
          , x = n(84987)
          , B = n(94165)
          , H = n(29610)
          , U = n(83416);
        function Z(e) {
            "@babel/helpers - typeof";
            return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var V = ["collapsed", "className", "itemClassName", "folderNodeClassName", "childrenClassName", "nodeLabel", "children", "onClick", "onCollapse", "onMouseEnter", "onMouseLeave", "onRightClick", "selected", "setHeightValues", "node"];
        function K() {
            return (K = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function q(e, t) {
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
        function Y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? q(Object(n), !0).forEach(function(t) {
                    G(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function G(e, t, n) {
            return (t = ee(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function W(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, a, i, l = [], c = !0, s = !1;
                    try {
                        if (a = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            c = !1
                        } else
                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                            l.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            if (!c && null != n.return && (i = n.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return l
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return X(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return X(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function X(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function z(e, t) {
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
        function J(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function $(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, ee(r.key), r)
            }
        }
        function Q(e, t, n) {
            return t && $(e.prototype, t),
            n && $(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function ee(e) {
            var t = function(e, t) {
                if ("object" !== Z(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Z(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Z(t) ? t : String(t)
        }
        function te(e, t) {
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
            t && ne(e, t)
        }
        function ne(e, t) {
            return (ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function re(e) {
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
                var n, r = ae(e);
                if (t) {
                    var o = ae(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Z(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return oe(e)
                }(this, n)
            }
        }
        function oe(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ae(e) {
            return (ae = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ie = function(e) {
            return function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e && e()
            }
        }
          , le = function(e) {
            te(n, r.PureComponent);
            var t = re(n);
            function n() {
                return J(this, n),
                t.apply(this, arguments)
            }
            return Q(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.collapsed
                      , n = e.className
                      , o = void 0 === n ? "" : n
                      , a = e.itemClassName
                      , i = void 0 === a ? "" : a
                      , l = e.folderNodeClassName
                      , c = void 0 === l ? "" : l
                      , s = e.childrenClassName
                      , u = void 0 === s ? "" : s
                      , d = e.nodeLabel
                      , f = e.children
                      , p = e.onClick
                      , m = e.onCollapse
                      , h = e.onMouseEnter
                      , y = e.onMouseLeave
                      , b = e.onRightClick
                      , v = e.selected
                      , g = e.setHeightValues
                      , w = e.node
                      , E = (z(e, V),
                    (null === w || void 0 === w ? void 0 : w.displayName) || (null === w || void 0 === w ? void 0 : w.name))
                      , S = "folder-node-arrow ow-icon-down-open"
                      , T = "folder-node-children";
                    t && (S += " folder-node-arrow-collapsed",
                    T += " folder-node-children-collapsed");
                    var O = r.createElement("div", {
                        className: "".concat(o, " ").concat(S, " ").concat(r.Children.count(f) ? "" : "disabled"),
                        onClick: m || p,
                        tabIndex: r.Children.count(f) ? 0 : -1,
                        onKeyDown: function(e) {
                            var t;
                            return e.key === B.BY.ENTERKEY && (null === e || void 0 === e ? void 0 : null === (t = e.target) || void 0 === t ? void 0 : t.click())
                        },
                        "aria-label": t ? "".concat(E, " ").concat((0,
                        x.t)("aria.label.COLLAPSE")) : "".concat(E, " ").concat((0,
                        x.t)("aria.label.EXPAND"))
                    });
                    return r.createElement("div", {
                        className: "folder-node ".concat(o, " ").concat(c)
                    }, r.createElement("div", {
                        className: "folder-node-item ".concat(i, " ").concat(v ? " selected " : ""),
                        onClick: p,
                        onMouseEnter: h,
                        setHeightValues: g,
                        onMouseLeave: y,
                        onContextMenu: b && function(e) {
                            e.preventDefault(),
                            e.stopPropagation(),
                            b(e),
                            (0,
                            H.j)("mail", "folder_right_click")
                        }
                    }, O, d), r.createElement("div", {
                        className: "".concat(T, " ").concat(u, " ").concat(t ? "collapsed" : "")
                    }, f))
                }
            }]),
            n
        }();
        le.defaultProps = {
            className: "",
            itemClassName: "",
            folderNodeClassName: "",
            childrenClassName: ""
        },
        le.propTypes = {
            collapsed: a().bool.isRequired,
            className: a().string,
            itemClassName: a().string,
            folderNodeClassName: a().string,
            childrenClassName: a().string,
            nodeLabel: a().shape.isRequired,
            children: a().element.isRequired,
            defaultCollapsed: a().bool.isRequired,
            onClick: a().func.isRequired,
            onCollapse: a().func.isRequired,
            onMouseEnter: a().func.isRequired,
            onMouseLeave: a().func.isRequired,
            onRightClick: a().func.isRequired,
            selected: a().bool.isRequired,
            node: a().object.isRequired
        };
        var ce = function(e) {
            te(n, r.PureComponent);
            var t = re(n);
            function n() {
                return J(this, n),
                t.apply(this, arguments)
            }
            return Q(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.node
                      , o = e.parent;
                    return r.createElement(S(), {
                        className: "folder-toolbar"
                    }, r.createElement(w(), {
                        bsSize: "small",
                        bsStyle: "default"
                    }, t.map(function(e, t) {
                        var a = e.name
                          , i = e.displayName
                          , l = e.icon
                          , c = e.onAction;
                        return r.createElement(v(), {
                            key: t,
                            title: i,
                            role: B.HB.BUTTON,
                            "aria-label": i,
                            "aria-hidden": "true",
                            "aria-labelledby": "displayName",
                            onClick: function(e) {
                                setTimeout(function() {
                                    e.preventDefault(),
                                    e.stopPropagation(),
                                    c && c({
                                        node: n,
                                        parent: o
                                    }, e)
                                }, 200)
                            }
                        }, l ? r.createElement(L.Z, {
                            name: l
                        }) : a)
                    })))
                }
            }]),
            n
        }();
        ce.propTypes = {
            actions: a().object.isRequired,
            node: a().object.isRequired,
            parent: a().object.isRequired
        };
        var se = function(e) {
            te(n, r.PureComponent);
            var t = re(n);
            function n() {
                return J(this, n),
                t.apply(this, arguments)
            }
            return Q(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = void 0 === t ? [] : t
                      , o = e.node
                      , a = e.parent
                      , i = e.onDismiss
                      , l = e.show
                      , c = e.target;
                    return r.createElement(D(), {
                        show: l,
                        placement: "top",
                        container: document.body,
                        target: c,
                        animation: !1
                    }, r.createElement("ul", {
                        className: "dropdown-menu in",
                        style: {
                            display: "block"
                        },
                        tabIndex: 0,
                        ref: function(e) {
                            e && e.focus()
                        },
                        onBlur: i
                    }, n.map(function(e) {
                        var t = e.name
                          , n = e.displayName
                          , l = e.onAction;
                        return r.createElement("li", {
                            key: t
                        }, r.createElement("a", {
                            role: B.HB.PRESENTATION,
                            onClick: function(e) {
                                e.stopPropagation(),
                                l && l({
                                    node: o,
                                    parent: a
                                }, e),
                                i()
                            }
                        }, n || t))
                    })))
                }
            }]),
            n
        }();
        se.propTypes = {
            actions: a().object.isRequired,
            node: a().object.isRequired,
            parent: a().object.isRequired,
            onDismiss: a().func.isRequired,
            show: a().bool.isRequired,
            target: a().element.isRequired
        };
        var ue = function(e) {
            te(n, r.PureComponent);
            var t = re(n);
            function n(e) {
                var r;
                return J(this, n),
                (r = t.call(this, e)).handleClick = r.handleClick.bind(oe(r)),
                r
            }
            return Q(n, [{
                key: "handleClick",
                value: function(e) {
                    var t = this.props.onClick;
                    t && t(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.node
                      , n = e.parent
                      , o = e.actions
                      , a = e.icon
                      , i = e.status
                      , l = e.title
                      , c = e.badge
                      , s = e.showToolbar
                      , u = e.showMenu
                      , d = e.onDismissMenu
                      , f = t.displayName || t.name;
                    return r.createElement("span", {
                        className: "folder-label",
                        title: l || f,
                        onClick: this.handleClick,
                        tabindex: 0,
                        onKeyDown: function(e) {
                            var t;
                            return e.key === B.BY.ENTERKEY && (null === e || void 0 === e ? void 0 : null === (t = e.target) || void 0 === t ? void 0 : t.click())
                        }
                    }, "WAIT" === i ? r.createElement(F.Z, null) : r.createElement(L.Z, {
                        name: a
                    }), r.createElement("span", {
                        className: "folder-label-content",
                        role: B.HB.BUTTON,
                        "aria-label": f
                    }, f), !c || o.length && s ? null : r.createElement(I(), null, c), o.length && s && "WAIT" !== i ? r.createElement(ce, {
                        actions: o,
                        node: t,
                        parent: n
                    }) : null, o.length && u && "WAIT" !== i ? r.createElement(se, {
                        actions: o,
                        node: t,
                        parent: n,
                        onDismiss: d,
                        show: u,
                        target: this
                    }) : null)
                }
            }]),
            n
        }();
        ue.propTypes = {
            actions: a().object.isRequired,
            node: a().object.isRequired,
            parent: a().object.isRequired,
            icon: a().string.isRequired,
            status: a().string.isRequired,
            title: a().string.isRequired,
            badge: a().number.isRequired,
            showToolbar: a().bool.isRequired,
            showMenu: a().bool.isRequired,
            onDismissMenu: a().func.isRequired,
            onClick: a().func.isRequired
        };
        var de = function(e) {
            te(n, r.PureComponent);
            var t = re(n);
            function n(e) {
                var r;
                return J(this, n),
                (r = t.call(this, e)).state = {
                    value: e.node.name,
                    showModal: e.showModal,
                    validation: null,
                    disabled: !1,
                    prompt: "",
                    isPrompting: !1,
                    keyUp: !1
                },
                r.handleClose = r.handleClose.bind(oe(r)),
                r.handleInput = r.handleInput.bind(oe(r)),
                r.handleSave = r.handleSave.bind(oe(r)),
                r.handleKeyUp = r.handleKeyUp.bind(oe(r)),
                r.handleBlur = r.handleBlur.bind(oe(r)),
                r.handleBlurOnModal = r.handleBlurOnModal.bind(oe(r)),
                r.renderInline = r.renderInline.bind(oe(r)),
                r.renderModal = r.renderModal.bind(oe(r)),
                r.handleResetInput = r.handleResetInput.bind(oe(r)),
                r
            }
            return Q(n, [{
                key: "componentDidMount",
                value: function() {
                    if (this.input) {
                        var e = this.input.value.length;
                        this.input.focus(),
                        this.input.setSelectionRange(e, e)
                    }
                }
            }, {
                key: "handleBlurOnModal",
                value: function(e) {
                    var t = this;
                    e.preventDefault();
                    var n = this.props
                      , r = n.validate
                      , o = n.parent
                      , a = n.node
                      , i = e.target.value;
                    if (!this.state.showModal)
                        setTimeout(function() {
                            !function(e, t) {
                                var n = "" === i && r ? r(i, o, a) : [!0, ""];
                                /^\s*$/.test(i) && e.setState({
                                    value: i,
                                    prompt: n,
                                    validation: "error",
                                    disabled: !0
                                })
                            }(t)
                        }, 200)
                }
            }, {
                key: "handleInput",
                value: function(e) {
                    e.preventDefault();
                    var t = this.props
                      , n = t.validate
                      , r = t.parent
                      , o = t.node
                      , a = e.target.value
                      , i = W("" !== a && n ? n(a, r, o) : [!0, ""], 2)
                      , l = i[0]
                      , c = i[1];
                    l ? this.setState({
                        value: a,
                        prompt: "",
                        validation: null,
                        disabled: !1
                    }) : this.setState({
                        value: a,
                        prompt: c,
                        validation: "error",
                        disabled: !1,
                        isPrompting: !0
                    })
                }
            }, {
                key: "handleClose",
                value: function(e) {
                    var t = this.props.onClose;
                    this.setState({
                        showModal: !1,
                        value: ""
                    }),
                    t && t(e)
                }
            }, {
                key: "handleSave",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.onSave
                      , r = t.node
                      , o = t.validate
                      , a = t.parent
                      , i = this.state.value;
                    if (r.name !== i) {
                        var l = W(o ? o(i, a, r) : [!0, ""], 2)
                          , c = l[0]
                          , s = l[1];
                        if (!c)
                            return this.setState({
                                prompt: s,
                                validation: "error",
                                disabled: !1,
                                isPrompting: !0
                            });
                        if (n)
                            return this.setState({
                                disabled: !0
                            }),
                            n({
                                node: r,
                                value: i,
                                parent: a
                            }, function() {
                                r.name = i,
                                e.setState({
                                    disabled: !1,
                                    value: null
                                }),
                                e.handleClose()
                            }, function(t) {
                                var n = t.err;
                                e.setState({
                                    prompt: n,
                                    validation: "error",
                                    disabled: !1
                                })
                            })
                    }
                    return r.name = i,
                    this.handleClose()
                }
            }, {
                key: "handleBlur",
                value: function() {
                    this.state.keyUp || "error" === this.state.validation ? this.setState({
                        keyUp: !1
                    }) : this.props.onClose()
                }
            }, {
                key: "handleKeyUp",
                value: function(e) {
                    switch (e.key) {
                    case "Enter":
                        this.setState({
                            keyUp: !0
                        }),
                        this.handleSave(),
                        this.handleBlur();
                        break;
                    case "Escape":
                        this.setState({
                            keyUp: !0
                        }),
                        this.handleClose()
                    }
                }
            }, {
                key: "handleResetInput",
                value: function() {
                    var e = this.props.node;
                    this.setState({
                        value: e.name,
                        isPrompting: !1,
                        validation: null,
                        prompt: ""
                    })
                }
            }, {
                key: "renderModal",
                value: function() {
                    var e = this
                      , t = this.props.path
                      , n = this.state
                      , o = n.value
                      , a = n.showModal
                      , i = n.prompt
                      , l = n.validation
                      , c = !o || "error" === l;
                    return r.createElement(j.Z, {
                        show: a,
                        onHide: this.handleClose
                    }, r.createElement(j.Z.Header, {
                        class: "modal-body",
                        closeButton: !0
                    }, r.createElement(j.Z.Title, {
                        id: "ow-Folder-dialog"
                    }, (0,
                    x.t)("mail.folder.CREATE_FOLDER_TITLE", t))), r.createElement(j.Z.Body, null, r.createElement("div", {
                        className: "folder-form form-horizontal"
                    }, r.createElement(O(), {
                        bsSize: "small",
                        controlId: "folderForm",
                        validationState: l
                    }, r.createElement(_(), {
                        sm: 3
                    }, (0,
                    x.t)("mail.folder.CREATE_FOLDER_LABEL")), r.createElement(_(), {
                        sm: 9
                    }, r.createElement(P(), {
                        block: !0
                    }, r.createElement("input", {
                        className: "form-control",
                        "aria-label": (0,
                        x.t)("mail.folder.CREATE_FOLDER_LABEL"),
                        type: "text",
                        value: o,
                        autoFocus: !0,
                        onChange: this.handleInput,
                        onBlur: this.handleBlurOnModal,
                        ref: function(t) {
                            e.input = t
                        }
                    }))), "error" === l ? r.createElement(_(), {
                        smOffset: 3,
                        sm: 9
                    }, r.createElement(R(), {
                        role: B.HB.ALERT,
                        "aria-label": i
                    }, i)) : null))), r.createElement(j.Z.Footer, null, r.createElement(v(), {
                        className: "ow-button-primary",
                        onClick: this.handleSave,
                        disabled: c,
                        "aria-label": (0,
                        x.t)("common.SAVE"),
                        "aria-disabled": c,
                        role: B.HB.BUTTON
                    }, " ", (0,
                    x.t)("common.SAVE"), " "), r.createElement(v(), {
                        className: "ow-button",
                        onClick: this.handleClose,
                        role: B.HB.BUTTON,
                        "aria-label": (0,
                        x.t)("common.CANCEL")
                    }, " ", (0,
                    x.t)("common.CANCEL"), " ")))
                }
            }, {
                key: "renderInline",
                value: function() {
                    var e = this
                      , t = this.state
                      , n = t.value
                      , o = t.prompt
                      , a = t.validation
                      , i = t.disabled
                      , l = t.isPrompting;
                    return r.createElement("div", {
                        className: "folder-form"
                    }, r.createElement(O(), {
                        bsSize: "small",
                        controlId: "folderForm",
                        validationState: a
                    }, r.createElement(P(), {
                        block: !0
                    }, r.createElement("input", {
                        className: "form-control",
                        type: "text",
                        value: n,
                        disabled: i,
                        ref: function(t) {
                            e.input = t
                        },
                        onChange: this.handleInput,
                        onClick: ie(),
                        onKeyUp: this.handleKeyUp,
                        onBlur: this.handleBlur
                    }), r.createElement(P().Addon, {
                        bsSize: "small",
                        onClick: this.handleClose
                    }, i ? r.createElement(F.Z, null) : r.createElement(L.Z, {
                        name: "delete-folder"
                    })))), "error" === a && l ? r.createElement(pe, {
                        title: "Error",
                        message: o,
                        onClose: this.handleResetInput
                    }) : null)
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.inlineEditable ? this.renderInline() : this.renderModal()
                }
            }]),
            n
        }();
        function fe(e) {
            var t = e.title
              , n = void 0 === t ? "" : t
              , o = e.message
              , a = void 0 === o ? "" : o
              , i = e.node
              , l = void 0 === i ? "" : i;
            switch (n) {
            case B.Cf.ERROR:
                return r.createElement("div", {
                    class: "ow-modal-style"
                }, r.createElement(L.Z, {
                    name: "intimation-error"
                }), r.createElement("div", {
                    class: "ow-modal-folder-style"
                }, a));
            default:
                return r.createElement("div", {
                    class: "ow-modal-style"
                }, r.createElement("div", {
                    class: "ow-modal-folder-style",
                    title: l.path
                }, r.createElement(L.Z, {
                    name: "intimation-warning"
                }), r.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                })))
            }
        }
        function pe(e) {
            var t = e.title
              , n = void 0 === t ? "" : t
              , o = e.message
              , a = void 0 === o ? "" : o
              , i = e.onClose
              , l = e.onAction
              , c = e.node;
            return r.createElement(j.Z, {
                show: !0,
                onHide: i
            }, r.createElement(j.Z.Header, {
                closeButton: !0
            }, r.createElement(j.Z.Title, {
                id: "ow-FolderPrompt-dialog"
            }, n)), r.createElement(j.Z.Body, null, r.createElement(fe, {
                title: n,
                message: a,
                node: c
            })), r.createElement(j.Z.Footer, null, l && r.createElement(v(), {
                className: "ow-settings-button ow-button-primary",
                onClick: ie(l),
                "aria-label": (0,
                x.t)("common.YES")
            }, " ", (0,
            x.t)("common.YES"), " "), r.createElement(v(), {
                className: l ? "ow-button btn btn-default" : "ow-button-ok",
                onClick: ie(i),
                role: B.HB.BUTTON,
                "aria-label": l ? (0,
                x.t)("common.NO") : (0,
                x.t)("common.OK")
            }, " ", l ? (0,
            x.t)("common.NO") : (0,
            x.t)("common.OK"), " ")))
        }
        de.propTypes = {
            actions: a().object.isRequired,
            node: a().object.isRequired,
            parent: a().object.isRequired,
            path: a().string.isRequired,
            showModal: a().bool.isRequired,
            inlineEditable: a().bool.isRequired,
            validate: a().func.isRequired,
            onClose: a().func.isRequired,
            onSave: a().func.isRequired
        },
        pe.propTypes = {
            actions: a().object.isRequired,
            node: a().object.isRequired,
            parent: a().object.isRequired,
            message: a().string.isRequired,
            title: a().string.isRequired,
            onAction: a().func.isRequired,
            onClose: a().func.isRequired
        };
        var me = function(e) {
            te(n, r.PureComponent);
            var t = re(n);
            function n(e) {
                var r;
                return J(this, n),
                (r = t.call(this, e)).state = {
                    collapsed: e.collapsed || !0,
                    status: [],
                    newNode: {
                        name: ""
                    },
                    showMenu: !1,
                    showToolbar: e.showToolbar
                },
                r.handleAddFolder = r.handleAddFolder.bind(oe(r)),
                r.handleClick = r.handleClick.bind(oe(r)),
                r.handleCollapse = r.handleCollapse.bind(oe(r)),
                r.handleEditFolder = r.handleEditFolder.bind(oe(r)),
                r.handleAdded = r.handleAdded.bind(oe(r)),
                r.handleRemoveFolder = r.handleRemoveFolder.bind(oe(r)),
                r.handleEmptyFolder = r.handleEmptyFolder.bind(oe(r)),
                r.resetStatus = r.resetStatus.bind(oe(r)),
                r.handleMouseEnter = r.handleMouseEnter.bind(oe(r)),
                r.handleMouseLeave = r.handleMouseLeave.bind(oe(r)),
                r.handleRightClick = r.handleRightClick.bind(oe(r)),
                r.updateFolderStatus = r.updateFolderStatus.bind(oe(r)),
                r.getuxLocalStorage = r.getuxLocalStorage.bind(oe(r)),
                r.parseuxLocalStorage = r.parseuxLocalStorage.bind(oe(r)),
                r.setuxLocalStorage = r.setuxLocalStorage.bind(oe(r)),
                r.removeuxLocalStorage = r.removeuxLocalStorage.bind(oe(r)),
                r.makeLogoutDelay = r.makeLogoutDelay.bind(oe(r)),
                r.saveFolderStatesAndLogout = r.saveFolderStatesAndLogout.bind(oe(r)),
                window.addEventListener("sendlogOutStatusToSave", r.makeLogoutDelay),
                r
            }
            return Q(n, [{
                key: "saveFolderStatesAndLogout",
                value: function() {
                    var e = document.createEvent("CustomEvent");
                    e.initCustomEvent("cancellogOut", !1, !1, {}),
                    window.dispatchEvent(e)
                }
            }, {
                key: "makeLogoutDelay",
                value: function(e) {
                    var t = function() {};
                    e.detail.cbreq && (t = this.saveFolderStatesAndLogout);
                    var n = this.props
                      , r = n.saveFolderStates
                      , o = n.accountId;
                    this.getuxLocalStorage() && !o ? r && r(B.IS.FOLDER_STATE, this.getuxLocalStorage(), t) : t(),
                    window.ux.sendlogOutStatusToSave = !1
                }
            }, {
                key: "removeuxLocalStorage",
                value: function() {
                    window.uxLocalStorage.removeItem(B.IS.FOLDER_STATE)
                }
            }, {
                key: "getuxLocalStorage",
                value: function() {
                    try {
                        return window.uxLocalStorage.getItem(B.IS.FOLDER_STATE)
                    } catch (e) {
                        return {}
                    }
                }
            }, {
                key: "parseuxLocalStorage",
                value: function() {
                    try {
                        return JSON.parse(this.getuxLocalStorage()) || {}
                    } catch (e) {
                        return {}
                    }
                }
            }, {
                key: "setuxLocalStorage",
                value: function(e) {
                    window.uxLocalStorage.setItem(B.IS.FOLDER_STATE, JSON.stringify(e))
                }
            }, {
                key: "updateFolderStatus",
                value: function(e) {
                    var t = this.props
                      , n = t.node
                      , r = t.keyName
                      , o = t.accountId
                      , a = n[r];
                    if (n && n.subfolders && !o) {
                        var i = this.parseuxLocalStorage();
                        "" == a && i[""] ? i[""] = !1 : i[a] ? Object.keys(i).length > 1 && Object.keys(i).forEach(function(e) {
                            e.indexOf(a) > -1 && delete i[e]
                        }) : i[a] = !0,
                        window.ux.sendlogOutStatusToSave = !0,
                        this.setuxLocalStorage(i)
                    }
                }
            }, {
                key: "handleCollapse",
                value: function(e) {
                    e.stopPropagation(),
                    e.preventDefault(),
                    this.setState({
                        collapsed: !this.state.collapsed,
                        showMenu: !1
                    }),
                    this.updateFolderStatus(),
                    (0,
                    this.props.setHeightValues)()
                }
            }, {
                key: "handleClick",
                value: function(e) {
                    var t = this.props
                      , n = t.onSelect
                      , r = t.node
                      , o = t.active
                      , a = t.keyName;
                    if (this.handleCollapse(e),
                    !(e.target.className.indexOf("-edit-") > -1 || e.target.className.indexOf("-delete-") > -1)) {
                        var i = !(0,
                        U.Z)("mail.returnToCurrentFolder") && o === r[a];
                        n && n(r, i)
                    }
                }
            }, {
                key: "handleAddFolder",
                value: function(e) {
                    var t = e.name
                      , n = this.state.collapsed;
                    this.setState({
                        status: ["ADDING", t]
                    }),
                    n && this.setState({
                        collapsed: !1
                    })
                }
            }, {
                key: "handleEditFolder",
                value: function() {
                    var e = this.props.node;
                    this.setState({
                        status: ["EDITING", e.name]
                    })
                }
            }, {
                key: "handleAdded",
                value: function(e, t, n) {
                    var r = this
                      , o = e.value
                      , a = this.props
                      , i = a.node
                      , l = a.onAddFolder
                      , c = a.childrenKey
                      , s = a.accountId;
                    if (l)
                        return l({
                            parent: i,
                            value: o
                        }, function() {
                            if (!s) {
                                var e = r.parseuxLocalStorage();
                                e[i.path] = !0,
                                r.setuxLocalStorage(e)
                            }
                            t.apply(void 0, arguments),
                            r.setState({
                                newNode: {},
                                collapsed: !1
                            })
                        }, n);
                    Array.isArray(i[c]) || (i[c] = []);
                    var u = {
                        name: o,
                        path: o
                    };
                    return i[c].push(u),
                    this.setState({
                        newNode: {},
                        collapsed: !1
                    }),
                    t({
                        result: u
                    })
                }
            }, {
                key: "handleRemoveFolder",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.node
                      , r = t.onRemoveFolder
                      , o = t.onRemove
                      , a = r ? function() {
                        r({
                            node: n
                        }, function() {
                            o && o(),
                            e.setState({
                                status: ""
                            })
                        }, function(t) {
                            var n = t.message;
                            e.setState({
                                status: ["PROMPT", {
                                    title: "Error",
                                    message: n
                                }]
                            })
                        })
                    }
                    : o
                      , i = /^Trash\//g.test(n.path) || /^Deleted\//g.test(n.path) || /^trash\//g.test(n.path) || /^deleted\//g.test(n.path) ? (0,
                    x.t)("mail.confirmMessage.DELETE_FOLDER_CONFIRM", n.path) : (0,
                    x.t)("mail.confirmMessage.MOVE_FOLDER_CONFIRM", n.name);
                    this.setState({
                        status: ["PROMPT", {
                            title: (0,
                            x.t)("common.WARNING"),
                            onAction: a,
                            message: i,
                            node: n
                        }]
                    })
                }
            }, {
                key: "handleEmptyFolder",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.node
                      , r = t.childrenKey
                      , o = t.onEmptyFolder
                      , a = o ? function() {
                        o({
                            node: n
                        }, function() {
                            e.setState({
                                status: ""
                            })
                        }, function(t) {
                            var n = t.message;
                            e.setState({
                                status: ["PROMPT", {
                                    title: "Error",
                                    message: n
                                }]
                            })
                        }),
                        e.setState({
                            status: ["WAIT"]
                        })
                    }
                    : function() {
                        n[r] = []
                    }
                      , i = (0,
                    x.t)("mail.confirmMessage.EMPTY_FOLDER_CONFIRM", n.displayName);
                    this.setState({
                        status: ["PROMPT", {
                            title: (0,
                            x.t)("common.WARNING"),
                            onAction: a,
                            message: i
                        }]
                    })
                }
            }, {
                key: "handleMouseEnter",
                value: function() {
                    this.setState({
                        showToolbar: !0
                    })
                }
            }, {
                key: "handleMouseLeave",
                value: function() {
                    this.props.showToolbar || this.setState({
                        showToolbar: !1
                    })
                }
            }, {
                key: "handleRightClick",
                value: function(e) {
                    var t = this.props
                      , n = t.onSelect
                      , r = t.node
                      , o = t.active === r[t.keyName];
                    n && n(r, o),
                    this.setState({
                        showMenu: !!e
                    })
                }
            }, {
                key: "resetStatus",
                value: function() {
                    this.setState({
                        status: ""
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , o = t.icon
                      , a = t.title
                      , i = t.badge
                      , l = t.node
                      , c = t.active
                      , s = t.parent
                      , u = t.children
                      , d = t.childrenKey
                      , f = t.childComponent
                      , p = t.keyName
                      , h = t.disableChild
                      , b = t.inlineEditable
                      , v = t.actions
                      , g = void 0 === v ? [] : v
                      , w = t.validate
                      , E = t.onEditFolder
                      , S = t.onAddFolder
                      , T = t.onRemoveFolder
                      , O = t.onSelect
                      , C = t.onDrop
                      , P = t.isDragging
                      , A = t.isOver
                      , R = t.accountId;
                    l.subfolders && l.subfolders.sort(function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1
                    });
                    var k, I, N = this.state, D = N.collapsed, M = N.status, _ = N.newNode, j = N.showToolbar, L = N.showMenu;
                    Array.isArray(M) && (M[0] && (k = M[0]),
                    M[1] && (I = M[1]));
                    var F = {
                        add: {
                            icon: "add-folder",
                            onAction: this.handleAddFolder
                        },
                        edit: {
                            icon: "edit-folder",
                            onAction: this.handleEditFolder
                        },
                        remove: {
                            icon: "delete-folder",
                            onAction: this.handleRemoveFolder
                        },
                        empty: {
                            icon: "delete-folder",
                            onAction: this.handleEmptyFolder
                        }
                    }
                      , x = g ? g.map(function(e) {
                        return Y(Y({}, F[e.name] || {}), e)
                    }) : F
                      , B = h ? [] : l[d] || []
                      , H = c === l[p]
                      , U = !A && D;
                    if (!R && (U = !this.getuxLocalStorage() || !this.parseuxLocalStorage()[l[p]],
                    k && U)) {
                        this.folderOperation = !0,
                        U = !1;
                        var Z = this.parseuxLocalStorage();
                        Z[l[p]] = !0,
                        this.setuxLocalStorage(Z)
                    }
                    var V = r.createElement("div", null, "EDITING" !== k || "EDITING" === k && !b ? r.createElement(ue, {
                        key: "folder-label",
                        node: l,
                        icon: o,
                        title: a,
                        badge: i,
                        parent: s,
                        onClick: this.handleClick,
                        onDismissMenu: function() {
                            return e.handleRightClick(!1)
                        },
                        showToolbar: j,
                        showMenu: L,
                        actions: x,
                        status: k,
                        setHeightValues: this.props.setHeightValues
                    }) : null, "EDITING" === k ? r.createElement(de, {
                        key: "folder-form",
                        node: l,
                        parent: s,
                        childrenKey: d,
                        validate: w,
                        onClose: this.resetStatus,
                        onSave: E,
                        inlineEditable: b,
                        showModal: !0
                    }) : null, "PROMPT" === k ? r.createElement(pe, K({
                        onClose: this.resetStatus
                    }, I)) : null);
                    return l ? r.createElement(le, {
                        className: m()(n, {
                            isDragging: P,
                            isOver: A
                        }),
                        nodeLabel: V,
                        selected: H,
                        collapsed: U,
                        onCollapse: this.handleCollapse,
                        onClick: this.handleClick,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        onRightClick: this.handleRightClick,
                        setHeightValues: this.props.setHeightValues,
                        node: l
                    }, (r.Children.count(u) ? r.Children.toArray(u) : B.map(function(t, n) {
                        return r.createElement(f, {
                            key: n,
                            node: t,
                            active: c,
                            icon: o,
                            parent: l,
                            childrenKey: d,
                            childComponent: f,
                            actions: g,
                            validate: w,
                            onRemove: function() {
                                y()(l[d], function(e) {
                                    return e.name === t.name
                                }),
                                e.setState({
                                    status: ["remove", t.name]
                                })
                            },
                            onAddFolder: S,
                            onEditFolder: E,
                            onRemoveFolder: T,
                            onSelect: O,
                            onDrop: C,
                            setHeightValues: e.props.setHeightValues
                        })
                    })).concat("ADDING" === k ? r.createElement(de, {
                        key: "folder-form",
                        node: _,
                        parent: l,
                        childrenKey: d,
                        path: l.displayName || l.name,
                        validate: w,
                        onClose: this.resetStatus,
                        onSave: this.handleAdded,
                        showModal: !0
                    }) : [])) : null
                }
            }]),
            n
        }();
        me.defaultProps = {
            className: "",
            icon: "",
            title: "",
            badge: 0,
            active: !1,
            parent: void 0,
            childrenKey: "children",
            childComponent: me,
            keyName: "path",
            disableChild: !1,
            inlineEditable: !0,
            actions: [],
            showToolbar: !1,
            isDragging: !1,
            isOver: !1
        },
        me.propTypes = {
            className: a().string,
            icon: a().string,
            title: a().string,
            badge: a().number,
            node: a().shape({
                name: a().string,
                displayName: a().string,
                path: a().string
            }).isRequired,
            active: a().string,
            collapsed: a().bool.isRequired,
            parent: a().shape({
                name: a().string,
                displayName: a().string
            }),
            children: a().node.isRequired,
            childrenKey: a().string,
            childComponent: a().node,
            keyName: a().string,
            disableChild: a().bool,
            inlineEditable: a().bool,
            actions: a().arrayOf(a().shape({
                name: a().string.isRequired,
                icon: a().string,
                handler: a().func
            })),
            showToolbar: a().bool,
            status: a().arrayOf(a().string).isRequired,
            validate: a().func.isRequired,
            onEditFolder: a().func.isRequired,
            onAddFolder: a().func.isRequired,
            onRemoveFolder: a().func.isRequired,
            onEmptyFolder: a().func.isRequired,
            onRemove: a().func.isRequired,
            onSelect: a().func.isRequired,
            onDrop: a().func.isRequired,
            isDragging: a().bool,
            isOver: a().bool
        };
        var he = me;
        function ye(e) {
            "@babel/helpers - typeof";
            return (ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var be = ["node", "actions", "children", "connectDropTarget", "connectDragSource", "isOver", "isDragging", "cancelSendInProgress", "accountId"];
        function ve() {
            return (ve = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ge(e, t) {
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
        function we(e, t, n) {
            return (t = Te(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Ee(e, t) {
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
        function Se(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Te(r.key), r)
            }
        }
        function Te(e) {
            var t = function(e, t) {
                if ("object" !== ye(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== ye(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === ye(t) ? t : String(t)
        }
        function Oe(e, t) {
            return (Oe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ce(e) {
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
                var n, r = Pe(e);
                if (t) {
                    var o = Pe(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ye(t) || "function" == typeof t))
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
        function Pe(e) {
            return (Pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Ae = {
            canDrop: function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    node: {}
                }).node
                  , t = e.path
                  , n = e.isRoot
                  , r = e.canHoldMessages
                  , o = e.canHoldFolders
                  , a = (arguments.length > 1 ? arguments[1] : void 0).getItem()
                  , i = a.folderPaths
                  , l = a.folderPath;
                return !(!l || !n) || (r && l ? t && l !== t : !!(o && i && i.length) && (n || !i.some(function(e) {
                    return e === t
                })))
            },
            drop: function(e, t) {
                if (!t.didDrop()) {
                    var n = e.onDrop
                      , r = e.node.path
                      , o = t.getItem().folderPaths;
                    n && n({
                        folderPath: r,
                        folderPaths: o
                    })
                }
            }
        }
          , Re = function(e, t) {
            return {
                connectDropTarget: e.dropTarget(),
                isOver: t.isOver()
            }
        }
          , ke = {
            beginDrag: function() {
                return {
                    folderPaths: [(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        node: {}
                    }).node.path]
                }
            }
        }
          , Ie = function(e) {
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
                t && Oe(e, t)
            }(n, r.PureComponent);
            var t = Ce(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && Se(e.prototype, t),
                n && Se(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.connectDragPreview
                      , n = e.connectDragSource;
                    t && t(r.createElement("div", null, r.createElement(L.Z, {
                        name: "folder"
                    })), {
                        captureDraggingState: !0
                    }),
                    n && n(r.createElement("div", null, r.createElement(L.Z, {
                        name: "folder"
                    })), {
                        captureDraggingState: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props, n = t.node, o = t.actions, a = t.children, i = t.connectDropTarget, l = t.connectDragSource, c = t.isOver, u = t.isDragging, f = t.cancelSendInProgress, p = t.accountId, m = Ee(t, be), h = n.type, y = n.canHoldFolders, b = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ge(Object(n), !0).forEach(function(t) {
                                we(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({
                        displayName: h && h !== B.S.VIRTUAL ? (0,
                        x.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(h)) : void 0
                    }, n), v = n.status || {}, g = v.messageCount, w = v.unreadMessageCount, E = n && n.name ? n.name + "," : "", S = n.status ? "".concat(E, " ").concat((0,
                    x.t)("mail.action.toolbar.TOTAL"), ": ").concat(g || 0, " ").concat((0,
                    x.t)("mail.action.toolbar.EMAILS"), ", ").concat((0,
                    x.t)("mail.action.toolbar.UNREAD"), ": ").concat(w || 0, " ").concat((0,
                    x.t)("mail.action.toolbar.EMAILS")) : void 0, T = (0,
                    U.Z)("mail.unreadMessageCountofCustomPlusToShow.enabled") ? w : w > B.kj ? B.GZ : w;
                    if (h === B.S.VIRTUAL && (e = null),
                    e = h === B.S.SENT ? w ? T : null : h === B.S.DRAFT ? g ? g > 99 ? "99+" : g : null : w ? T : null,
                    !1 === y) {
                        var O = o.findIndex(function(e) {
                            return "add" === e.name
                        });
                        o.splice(O, 1)
                    }
                    var C = {};
                    return B.S.DRAFT === h && f && (C = {
                        pointerEvents: "none",
                        opacity: "0.4"
                    }),
                    s()(d()([i, l]))(r.createElement("div", {
                        style: C,
                        className: "ow-mail-folder-wrapper".concat(c ? " ow-dragOver" : "")
                    }, r.createElement(he, ve({
                        className: "ow-mail-folder-user-root",
                        node: b,
                        actions: o,
                        draggingOver: c,
                        icon: "mail-folder".concat(h ? "-".concat(h) : ""),
                        childrenKey: "subfolders",
                        childComponent: Ne,
                        keyName: "path",
                        title: S,
                        badge: e,
                        isDragging: u,
                        isOver: c,
                        accountId: p,
                        setHeightValues: this.props.setHeightValues
                    }, m, function(e) {
                        var t = {};
                        return e && e.forEach(function(e) {
                            "add" === e.name && (t.onAddFolder = e.handler),
                            "edit" === e.name && (t.onEditFolder = e.handler),
                            "remove" === e.name && (t.onRemoveFolder = e.handler),
                            "empty" === e.name && (t.onEmptyFolder = e.handler)
                        }),
                        t
                    }(o), {
                        collapsed: !c
                    }), a)))
                }
            }]),
            n
        }();
        Ie.defaultProps = {
            cancelSendInProgress: !1,
            node: a().shape({
                name: "",
                displayName: "",
                path: ""
            })
        },
        Ie.propTypes = {
            node: a().shape({
                name: a().string,
                displayName: a().string,
                path: a().string
            }).isRequired,
            actions: a().arrayOf(a().shape({
                name: a().string.isRequired,
                icon: a().string,
                handler: a().func
            })).isRequired,
            connectDropTarget: a().func.isRequired,
            connectDragSource: a().func.isRequired,
            connectDragPreview: a().func.isRequired,
            isOver: a().bool.isRequired,
            isDragging: a().bool.isRequired,
            cancelSendInProgress: a().arrayOf(a().string),
            children: a().node.isRequired
        };
        var Ne = s()((0,
        f.Ej)(B.ZV.FOLDERS, ke, function(e, t) {
            return {
                connectDragSource: e.dragSource(),
                connectDragPreview: e.dragPreview(),
                isDragging: t.isDragging()
            }
        }), (0,
        f.GR)([B.ZV.MESSAGES, B.ZV.FOLDERS], Ae, Re))(Ie)
          , De = (0,
        f.GR)(B.ZV.FOLDERS, Ae, Re)
          , Me = Ne
          , _e = (De(Ie),
        n(54075));
        function je(e) {
            "@babel/helpers - typeof";
            return (je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Le(e, t) {
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
        function Fe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Le(Object(n), !0).forEach(function(t) {
                    xe(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function xe(e, t, n) {
            return (t = Ve(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Be() {
            return (Be = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function He(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, a, i, l = [], c = !0, s = !1;
                    try {
                        if (a = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            c = !1
                        } else
                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                            l.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            if (!c && null != n.return && (i = n.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return l
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return Ue(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Ue(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Ue(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function Ze(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Ve(r.key), r)
            }
        }
        function Ve(e) {
            var t = function(e, t) {
                if ("object" !== je(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== je(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === je(t) ? t : String(t)
        }
        function Ke(e, t) {
            return (Ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function qe(e) {
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
                var n, r = Ge(e);
                if (t) {
                    var o = Ge(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === je(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Ye(e)
                }(this, n)
            }
        }
        function Ye(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Ge(e) {
            return (Ge = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var We = Me
          , Xe = function(e) {
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
                t && Ke(e, t)
            }(n, r.PureComponent);
            var t = qe(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    displayAlert: !1
                },
                r.handleDropRoot = r.handleDropRoot.bind(Ye(r)),
                r.setDisplayAlert = r.setDisplayAlert.bind(Ye(r)),
                r.renderAlertModal = r.renderAlertModal.bind(Ye(r)),
                r
            }
            return function(e, t, n) {
                t && Ze(e.prototype, t),
                n && Ze(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleDropRoot",
                value: function(e) {
                    var t = e.folderPaths
                      , n = e.folderPath;
                    t && (this.checkFolderDraggable(t) && this.props.moveFolders({
                        folderPaths: t,
                        newParentPath: n
                    }))
                }
            }, {
                key: "checkFolderDraggable",
                value: function(e) {
                    var t = this.props.folders;
                    if (e.toString().includes("/"))
                        return !0;
                    var n = t && t.length > 0 && t.find(function(t) {
                        if (t.path.toUpperCase() === e.toString().toUpperCase())
                            return t
                    });
                    return n && (n.draggable ? this.setDisplayAlert(!1) : this.setDisplayAlert(!0)),
                    !n || n.draggable
                }
            }, {
                key: "setDisplayAlert",
                value: function(e) {
                    this.setState({
                        displayAlert: e
                    })
                }
            }, {
                key: "renderAlertModal",
                value: function() {
                    var e = this;
                    return r.createElement(_e.Z, {
                        show: !0,
                        title: (0,
                        x.t)("common.ERROR"),
                        message: (0,
                        x.t)("errorMsg.SYSTEM_FOLDER_CANNOT_MODIFY"),
                        onHide: function() {
                            return e.setDisplayAlert(!1)
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.accountId
                      , o = t.folders
                      , a = t.selectSelectedFolder
                      , i = t.selectedMailSummariesMoveTo
                      , c = t.createFolder
                      , s = t.emptyFolder
                      , u = t.emptyTrash
                      , d = t.moveToTrash
                      , f = t.renameFolder
                      , p = t.deleteFolder
                      , m = t.moveFolders
                      , h = t.focusFolder
                      , y = t.validate
                      , b = t.invisible
                      , v = t.cancelSendInProgress
                      , g = t.externalFolders
                      , w = t.saveFolderStates
                      , E = t.setHeightValues;
                    if (b)
                        return !1;
                    var S = He(o.slice(-1), 1)[0]
                      , T = S.subfolders
                      , O = {}
                      , C = !1;
                    g && g.find(function(e) {
                        e.id === n && (C = !!e.protocol.match(B.p6))
                    }),
                    o.slice(0, -1).forEach(function(e) {
                        O[e.type] = e
                    });
                    var P = {
                        active: a,
                        onSelect: h,
                        validate: y,
                        cancelSendInProgress: v,
                        accountId: n,
                        saveFolderStates: w,
                        setHeightValues: E,
                        onDrop: function(t) {
                            var r = t.folderPath
                              , o = t.folderPaths;
                            if (o) {
                                return e.checkFolderDraggable(o) && !o.some(function(e) {
                                    return -1 !== e.indexOf("".concat(r, "/")) && -1 === e.replace("".concat(r, "/"), "").indexOf("/")
                                }) && m({
                                    folderPaths: o,
                                    newParentPath: r
                                })
                            }
                            return i({
                                accountId: n,
                                folderPath: r
                            })
                        },
                        createFolder: c
                    }
                      , A = {
                        add: {
                            name: "add",
                            displayName: (0,
                            x.t)("mail.folder.ADD"),
                            icon: "add-folder",
                            handler: c
                        },
                        empty: {
                            name: "empty",
                            displayName: (0,
                            x.t)("mail.folder.EMPTY_JUNK"),
                            icon: "trash-folder",
                            handler: s
                        },
                        edit: {
                            name: "edit",
                            displayName: (0,
                            x.t)("mail.folder.RENAME"),
                            icon: "edit-mail",
                            handler: f
                        },
                        remove: {
                            name: "remove",
                            displayName: (0,
                            x.t)("mail.folder.DELETE"),
                            icon: "delete-folder",
                            handler: d(O.trash.path)
                        }
                    };
                    return C ? r.createElement("div", {
                        className: "ow-mail-folder-list"
                    }, r.createElement(Me, Be({
                        node: O.inbox
                    }, P, {
                        actions: [A.add]
                    }), O.inbox.subfolders && O.inbox.subfolders.sort(function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1
                    }).map(function(e) {
                        return r.createElement(Me, Be({}, P, {
                            key: e.path,
                            node: e,
                            icon: "folder",
                            actions: [A.edit, A.remove, A.add],
                            parent: O.inbox,
                            accountId: n
                        }))
                    }))) : r.createElement("div", {
                        className: "ow-mail-folder-list"
                    }, this.state.displayAlert ? this.renderAlertModal() : "", r.createElement(Me, Be({
                        node: O.inbox
                    }, P, {
                        actions: [A.add]
                    }), O.inbox.subfolders && O.inbox.subfolders.sort(function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1
                    }).map(function(e) {
                        return r.createElement(Me, Be({}, P, {
                            key: e.path,
                            node: e,
                            icon: "folder",
                            actions: [A.edit, A.remove, A.add],
                            parent: O.inbox
                        }))
                    })), r.createElement(Me, Be({
                        node: O.draft
                    }, P, {
                        actions: [A.add]
                    }), O.draft.subfolders && O.draft.subfolders.sort(function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1
                    }).map(function(e) {
                        return r.createElement(Me, Be({}, P, {
                            key: e.path,
                            node: e,
                            icon: "folder",
                            actions: [A.edit, A.remove, A.add],
                            parent: O.draft
                        }))
                    })), r.createElement(Me, Be({
                        node: O.sent
                    }, P, {
                        actions: [A.add]
                    }), O.sent.subfolders && O.sent.subfolders.sort(function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1
                    }).map(function(e) {
                        return r.createElement(Me, Be({}, P, {
                            key: e.path,
                            node: e,
                            icon: "folder",
                            actions: [A.edit, A.remove, A.add],
                            parent: O.sent
                        }))
                    })), r.createElement(Me, Be({}, P, {
                        node: O.junk,
                        actions: [A.add, A.empty]
                    }), O.junk.subfolders && O.junk.subfolders.sort(function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1
                    }).map(function(e) {
                        return r.createElement(Me, Be({}, P, {
                            key: e.path,
                            node: e,
                            icon: "folder",
                            actions: [A.edit, A.remove, A.add],
                            parent: O.junk
                        }))
                    })), r.createElement(Me, Be({}, P, {
                        node: O.trash,
                        disableChild: !0,
                        actions: [A.add, Fe(Fe({}, A.empty), {}, {
                            displayName: (0,
                            x.t)("mail.folder.EMPTY_TRASH"),
                            handler: u
                        })]
                    }), O.trash.subfolders && l()(O.trash.subfolders, "name").sort(function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1
                    }).map(function(e) {
                        return r.createElement(Me, Be({}, P, {
                            key: e.path,
                            node: e,
                            icon: "folder",
                            actions: [Fe(Fe({}, A.remove), {}, {
                                handler: p
                            })],
                            parent: O.junk
                        }))
                    })), r.createElement(We, {
                        className: "ow-mail-folder-user-root",
                        node: Fe(Fe({}, S), {}, {
                            isRoot: !0,
                            displayName: (0,
                            x.t)("mail.folder.DEFAULT_FOLDERLIST_TITLE")
                        }),
                        icon: "folder",
                        showToolbar: !0,
                        actions: [A.add],
                        validate: y,
                        collapsed: !0,
                        onDrop: this.handleDropRoot,
                        accountId: n,
                        setHeightValues: this.props.setHeightValues
                    }, T.length > 0 && T.sort(function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1
                    }).map(function(e) {
                        return r.createElement(Me, Be({}, P, {
                            key: e.path,
                            node: e,
                            icon: "folder",
                            actions: [A.edit, A.remove, A.add],
                            accountId: n
                        }))
                    })))
                }
            }]),
            n
        }();
        Xe.defaultProps = {
            accountId: "",
            folders: [],
            cancelSendInProgress: !1,
            selectSelectedFolder: "",
            selectedMailSummariesMoveTo: function() {},
            createFolder: function() {},
            emptyFolder: function() {},
            emptyTrash: function() {},
            moveToTrash: function() {},
            renameFolder: function() {},
            deleteFolder: function() {},
            moveFolders: function() {},
            focusFolder: function() {},
            validate: function() {},
            invisible: !1
        },
        Xe.propTypes = {
            accountId: a().string,
            folders: a().arrayOf(a().object),
            selectSelectedFolder: a().string,
            selectedMailSummariesMoveTo: a().func,
            createFolder: a().func,
            emptyFolder: a().func,
            emptyTrash: a().func,
            moveToTrash: a().func,
            renameFolder: a().func,
            deleteFolder: a().func,
            moveFolders: a().func,
            focusFolder: a().func,
            validate: a().func,
            invisible: a().bool,
            cancelSendInProgress: a().bool
        };
        var ze = n(16083)
          , Je = n(46095)
          , $e = n(23586)
          , Qe = n(19251)
          , et = n(44910)
          , tt = n(74494)
          , nt = n(12588)
          , rt = n(45857);
        function ot(e) {
            "@babel/helpers - typeof";
            return (ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function at(e, t) {
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
        function it(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? at(Object(n), !0).forEach(function(t) {
                    lt(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : at(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function lt(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== ot(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== ot(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === ot(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function ct(e) {
            return function(e) {
                if (Array.isArray(e))
                    return dt(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || ut(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function st(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, a, i, l = [], c = !0, s = !1;
                    try {
                        if (a = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            c = !1
                        } else
                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                            l.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            if (!c && null != n.return && (i = n.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return l
                }
            }(e, t) || ut(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ut(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return dt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? dt(e, t) : void 0
            }
        }
        function dt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var ft = (0,
        ze.$j)(function(e) {
            return {
                accountId: (0,
                rt.F9)(e),
                selectIsAddingFolder: (0,
                Qe.aq)(e),
                folders: (0,
                Qe.Gt)(e),
                customFolders: (0,
                Qe.qc)(e),
                selectSelectedFolder: (0,
                Qe.a_)(e),
                selectWindowTitle: (0,
                Qe.cB)(e),
                cancelSendInProgress: (0,
                tt.EMs)(e),
                externalFolders: (0,
                nt.UD)(e)
            }
        }, function(e, t) {
            var n = t.onSelectFolder
              , r = t.accountId;
            return {
                fetchFolderListAll: (0,
                Je.DE)($e.Rcb, (0,
                et.Tw)(e)),
                saveFolderStates: (0,
                Je.DE)($e.Pcr, (0,
                et.Tw)(e)),
                createFolder: function(t, n, o) {
                    var a = t.parent
                      , i = t.value;
                    return (0,
                    $e.L60)({
                        accountId: r,
                        parentPath: a.path,
                        name: i
                    })((0,
                    et.Tw)(e)).then(n, o)
                },
                deleteFolder: function(t, n, o) {
                    var a = t.node;
                    return (0,
                    $e.Goz)({
                        accountId: r,
                        folderPaths: [a.path]
                    })((0,
                    et.Tw)(e)).then(n, o)
                },
                moveToTrash: function(t) {
                    return function(n, o, a) {
                        var i = n.node;
                        return (0,
                        $e.J1J)({
                            accountId: r,
                            folderPaths: [i.path],
                            newParentPath: t
                        })((0,
                        et.Tw)(e)).then(o, a)
                    }
                },
                renameFolder: function(t, n, o) {
                    var a = t.node
                      , i = t.value;
                    return (0,
                    $e.p0)({
                        accountId: r,
                        folderPath: a.path,
                        newName: i
                    })((0,
                    et.Tw)(e)).then(n, o)
                },
                emptyFolder: function(t, n, o) {
                    var a = t.node;
                    return (0,
                    $e.yts)({
                        accountId: r,
                        folderPath: a.path
                    })((0,
                    et.Tw)(e)).then(n, o)
                },
                emptyTrash: function(t, n, o) {
                    return (0,
                    $e.uoz)({
                        accountId: r
                    })((0,
                    et.Tw)(e)).then(n, o)
                },
                emptyAllTrash: (0,
                Je.DE)($e.vQ7, (0,
                et.Tw)(e)),
                moveFolders: (0,
                Je.DE)($e.J1J, (0,
                et.Tw)(e)),
                onUpdateState: (0,
                Je.DE)($e.xqy, (0,
                et.Tw)(e)),
                focusFolder: function(t, r) {
                    r || (t && (0,
                    et.Tw)(e)((0,
                    $e.db3)(t.path)),
                    n && n(t))
                },
                selectedMailSummariesMoveTo: (0,
                Je.DE)($e.pwJ, (0,
                et.Tw)(e)),
                setHeightValues: (0,
                Je.DE)($e.SlU, (0,
                et.Tw)(e))
            }
        }, function(e, t, n) {
            var r = e.folders.slice(0, -1)
              , o = st(e.folders.slice(-1), 1)[0]
              , a = [].concat(ct(r), ct(o.subfolders));
            return it(it(it(it({}, n), e), t), {}, {
                validate: function(e, t, n) {
                    var r, o;
                    return "" === e ? [!1, (0,
                    x.t)("mail.folder.errorMessage.BLANK_NAME")] : (0,
                    U.Z)("common.regexp.folderNameDisableChars").test(e) ? [!1, (0,
                    x.t)("mail.folder.errorMessage.INVALIDATE_NAME")] : (0,
                    U.Z)("mail.folder.maxNameSize") <= e.length ? [!1, (0,
                    x.t)("mail.folder.errorMessage.LONG_NAME", (0,
                    U.Z)("mail.folder.maxNameSize"))] : function(e, t, n, r) {
                        var o = !t || t.isRoot ? n : t.subfolders || [];
                        return o && o.find(function(t) {
                            return t.name === e && (!r || t.path !== r.path)
                        })
                    }(e, t, a, n) ? [!1, (0,
                    x.t)("mail.folder.errorMessage.DUP_NAME")] : t && (null === t || void 0 === t ? void 0 : null === (r = t.path) || void 0 === r ? void 0 : null === (o = r.split("/")) || void 0 === o ? void 0 : o.length) >= (0,
                    U.Z)("mail.folder.maxDeepth") ? [!1, (0,
                    x.t)("mail.folder.errorMessage.FOLDERSIZE_EXCEEDED")] : [!0, ""]
                }
            })
        })(Xe)
    },
    11752: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(61120);
        function o() {
            return (o = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
                var o = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = (0,
                    r.Z)(e)); )
                        ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(arguments.length < 3 ? e : n) : a.value
                }
            }
            ).apply(this, arguments)
        }
    }
}]);
