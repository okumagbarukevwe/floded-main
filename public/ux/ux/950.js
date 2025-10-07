/*! Synchronoss Messaging 2018 */
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[950], {
    62093: function(e) {
        (function() {
            var t, n, r;
            "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                return performance.now()
            }
            : "undefined" != typeof process && null !== process && process.hrtime ? (e.exports = function() {
                return (t() - r) / 1e6
            }
            ,
            n = process.hrtime,
            r = (t = function() {
                var e;
                return 1e9 * (e = n())[0] + e[1]
            }
            )()) : Date.now ? (e.exports = function() {
                return Date.now() - r
            }
            ,
            r = Date.now()) : (e.exports = function() {
                return (new Date).getTime() - r
            }
            ,
            r = (new Date).getTime())
        }
        ).call(this)
    },
    14923: function(e, t, n) {
        for (var r = n(6885), o = n(81965), i = "undefined" == typeof window ? r : window, a = ["moz", "webkit"], l = "AnimationFrame", s = i["request" + l], u = i["cancel" + l] || i["cancelRequest" + l], c = 0; !s && c < a.length; c++)
            s = i[a[c] + "Request" + l],
            u = i[a[c] + "Cancel" + l] || i[a[c] + "CancelRequest" + l];
        if (!s || !u) {
            var d = 0
              , f = 0
              , p = [];
            s = function(e) {
                if (0 === p.length) {
                    var t = o()
                      , n = Math.max(0, 1e3 / 60 - (t - d));
                    d = n + t,
                    setTimeout(function() {
                        var e = p.slice(0);
                        p.length = 0;
                        for (var t = function() {
                            if (!e[n].cancelled)
                                try {
                                    e[n].callback(d)
                                } catch (e) {
                                    setTimeout(function() {
                                        throw e
                                    }, 0)
                                }
                        }, n = 0; n < e.length; n++)
                            t()
                    }, Math.round(n))
                }
                return p.push({
                    handle: ++f,
                    callback: e,
                    cancelled: !1
                }),
                f
            }
            ,
            u = function(e) {
                for (var t = 0; t < p.length; t++)
                    p[t].handle === e && (p[t].cancelled = !0)
            }
        }
        e.exports = function(e) {
            return s.call(i, e)
        }
        ,
        e.exports.cancel = function() {
            u.apply(i, arguments)
        }
        ,
        e.exports.polyfill = function(e) {
            e || (e = i),
            e.requestAnimationFrame = s,
            e.cancelAnimationFrame = u
        }
    },
    81965: function(e) {
        (function() {
            var t, n, r, o, i, a;
            "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                return performance.now()
            }
            : "undefined" != typeof process && null !== process && process.hrtime ? (e.exports = function() {
                return (t() - i) / 1e6
            }
            ,
            n = process.hrtime,
            o = (t = function() {
                var e;
                return 1e9 * (e = n())[0] + e[1]
            }
            )(),
            a = 1e9 * process.uptime(),
            i = o - a) : Date.now ? (e.exports = function() {
                return Date.now() - r
            }
            ,
            r = Date.now()) : (e.exports = function() {
                return (new Date).getTime() - r
            }
            ,
            r = (new Date).getTime())
        }
        ).call(this)
    },
    51432: function(e, t, n) {
        "use strict";
        function r(e) {
            "@babel/helpers - typeof";
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        t.__esModule = !0;
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = a(n(12735))
          , s = a(n(43194))
          , u = a(n(56564))
          , c = a(n(62093))
          , d = a(n(14923))
          , f = a(n(1011))
          , p = a(n(87401))
          , h = a(n(23398))
          , y = 1e3 / 60
          , v = function(e) {
            function t(n) {
                var r = this;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                e.call(this, n),
                this.wasAnimating = !1,
                this.animationID = null,
                this.prevTime = 0,
                this.accumulatedTime = 0,
                this.unreadPropStyle = null,
                this.clearUnreadPropStyle = function(e) {
                    var t = !1
                      , n = r.state
                      , i = n.currentStyle
                      , a = n.currentVelocity
                      , l = n.lastIdealStyle
                      , s = n.lastIdealVelocity;
                    for (var u in e)
                        if (Object.prototype.hasOwnProperty.call(e, u)) {
                            var c = e[u];
                            "number" == typeof c && (t || (t = !0,
                            i = o({}, i),
                            a = o({}, a),
                            l = o({}, l),
                            s = o({}, s)),
                            i[u] = c,
                            a[u] = 0,
                            l[u] = c,
                            s[u] = 0)
                        }
                    t && r.setState({
                        currentStyle: i,
                        currentVelocity: a,
                        lastIdealStyle: l,
                        lastIdealVelocity: s
                    })
                }
                ,
                this.startAnimationIfNecessary = function() {
                    r.animationID = d.default(function(e) {
                        var t = r.props.style;
                        if (f.default(r.state.currentStyle, t, r.state.currentVelocity))
                            return r.wasAnimating && r.props.onRest && r.props.onRest(),
                            r.animationID = null,
                            r.wasAnimating = !1,
                            void (r.accumulatedTime = 0);
                        r.wasAnimating = !0;
                        var n = e || c.default()
                          , o = n - r.prevTime;
                        if (r.prevTime = n,
                        r.accumulatedTime = r.accumulatedTime + o,
                        r.accumulatedTime > 10 * y && (r.accumulatedTime = 0),
                        0 === r.accumulatedTime)
                            return r.animationID = null,
                            void r.startAnimationIfNecessary();
                        var i = (r.accumulatedTime - Math.floor(r.accumulatedTime / y) * y) / y
                          , a = Math.floor(r.accumulatedTime / y)
                          , l = {}
                          , s = {}
                          , d = {}
                          , p = {};
                        for (var h in t)
                            if (Object.prototype.hasOwnProperty.call(t, h)) {
                                var v = t[h];
                                if ("number" == typeof v)
                                    d[h] = v,
                                    p[h] = 0,
                                    l[h] = v,
                                    s[h] = 0;
                                else {
                                    for (var m = r.state.lastIdealStyle[h], b = r.state.lastIdealVelocity[h], g = 0; g < a; g++) {
                                        var w = u.default(y / 1e3, m, b, v.val, v.stiffness, v.damping, v.precision);
                                        m = w[0],
                                        b = w[1]
                                    }
                                    var O = u.default(y / 1e3, m, b, v.val, v.stiffness, v.damping, v.precision)
                                      , S = O[0]
                                      , T = O[1];
                                    d[h] = m + (S - m) * i,
                                    p[h] = b + (T - b) * i,
                                    l[h] = m,
                                    s[h] = b
                                }
                            }
                        r.animationID = null,
                        r.accumulatedTime -= a * y,
                        r.setState({
                            currentStyle: d,
                            currentVelocity: p,
                            lastIdealStyle: l,
                            lastIdealVelocity: s
                        }),
                        r.unreadPropStyle = null,
                        r.startAnimationIfNecessary()
                    })
                }
                ,
                this.state = this.defaultState()
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + r(t));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
            i(t, null, [{
                key: "propTypes",
                value: {
                    defaultStyle: h.default.objectOf(h.default.number),
                    style: h.default.objectOf(h.default.oneOfType([h.default.number, h.default.object])).isRequired,
                    children: h.default.func.isRequired,
                    onRest: h.default.func
                },
                enumerable: !0
            }]),
            t.prototype.defaultState = function() {
                var e = this.props
                  , t = e.defaultStyle
                  , n = e.style
                  , r = t || s.default(n)
                  , o = l.default(r);
                return {
                    currentStyle: r,
                    currentVelocity: o,
                    lastIdealStyle: r,
                    lastIdealVelocity: o
                }
            }
            ,
            t.prototype.componentDidMount = function() {
                this.prevTime = c.default(),
                this.startAnimationIfNecessary()
            }
            ,
            t.prototype.componentWillReceiveProps = function(e) {
                null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle),
                this.unreadPropStyle = e.style,
                null == this.animationID && (this.prevTime = c.default(),
                this.startAnimationIfNecessary())
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null != this.animationID && (d.default.cancel(this.animationID),
                this.animationID = null)
            }
            ,
            t.prototype.render = function() {
                var e = this.props.children(this.state.currentStyle);
                return e && p.default.Children.only(e)
            }
            ,
            t
        }(p.default.Component);
        t.default = v,
        e.exports = t.default
    },
    40708: function(e, t, n) {
        "use strict";
        function r(e) {
            "@babel/helpers - typeof";
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        t.__esModule = !0;
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = a(n(12735))
          , s = a(n(43194))
          , u = a(n(56564))
          , c = a(n(62093))
          , d = a(n(14923))
          , f = a(n(1011))
          , p = a(n(87401))
          , h = a(n(23398))
          , y = 1e3 / 60;
        var v = function(e) {
            function t(n) {
                var r = this;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                e.call(this, n),
                this.animationID = null,
                this.prevTime = 0,
                this.accumulatedTime = 0,
                this.unreadPropStyles = null,
                this.clearUnreadPropStyle = function(e) {
                    for (var t = r.state, n = t.currentStyles, i = t.currentVelocities, a = t.lastIdealStyles, l = t.lastIdealVelocities, s = !1, u = 0; u < e.length; u++) {
                        var c = e[u]
                          , d = !1;
                        for (var f in c)
                            if (Object.prototype.hasOwnProperty.call(c, f)) {
                                var p = c[f];
                                "number" == typeof p && (d || (d = !0,
                                s = !0,
                                n[u] = o({}, n[u]),
                                i[u] = o({}, i[u]),
                                a[u] = o({}, a[u]),
                                l[u] = o({}, l[u])),
                                n[u][f] = p,
                                i[u][f] = 0,
                                a[u][f] = p,
                                l[u][f] = 0)
                            }
                    }
                    s && r.setState({
                        currentStyles: n,
                        currentVelocities: i,
                        lastIdealStyles: a,
                        lastIdealVelocities: l
                    })
                }
                ,
                this.startAnimationIfNecessary = function() {
                    r.animationID = d.default(function(e) {
                        var t = r.props.styles(r.state.lastIdealStyles);
                        if (function(e, t, n) {
                            for (var r = 0; r < e.length; r++)
                                if (!f.default(e[r], t[r], n[r]))
                                    return !1;
                            return !0
                        }(r.state.currentStyles, t, r.state.currentVelocities))
                            return r.animationID = null,
                            void (r.accumulatedTime = 0);
                        var n = e || c.default()
                          , o = n - r.prevTime;
                        if (r.prevTime = n,
                        r.accumulatedTime = r.accumulatedTime + o,
                        r.accumulatedTime > 10 * y && (r.accumulatedTime = 0),
                        0 === r.accumulatedTime)
                            return r.animationID = null,
                            void r.startAnimationIfNecessary();
                        for (var i = (r.accumulatedTime - Math.floor(r.accumulatedTime / y) * y) / y, a = Math.floor(r.accumulatedTime / y), l = [], s = [], d = [], p = [], h = 0; h < t.length; h++) {
                            var v = t[h]
                              , m = {}
                              , b = {}
                              , g = {}
                              , w = {};
                            for (var O in v)
                                if (Object.prototype.hasOwnProperty.call(v, O)) {
                                    var S = v[O];
                                    if ("number" == typeof S)
                                        m[O] = S,
                                        b[O] = 0,
                                        g[O] = S,
                                        w[O] = 0;
                                    else {
                                        for (var T = r.state.lastIdealStyles[h][O], I = r.state.lastIdealVelocities[h][O], E = 0; E < a; E++) {
                                            var P = u.default(y / 1e3, T, I, S.val, S.stiffness, S.damping, S.precision);
                                            T = P[0],
                                            I = P[1]
                                        }
                                        var k = u.default(y / 1e3, T, I, S.val, S.stiffness, S.damping, S.precision)
                                          , x = k[0]
                                          , C = k[1];
                                        m[O] = T + (x - T) * i,
                                        b[O] = I + (C - I) * i,
                                        g[O] = T,
                                        w[O] = I
                                    }
                                }
                            d[h] = m,
                            p[h] = b,
                            l[h] = g,
                            s[h] = w
                        }
                        r.animationID = null,
                        r.accumulatedTime -= a * y,
                        r.setState({
                            currentStyles: d,
                            currentVelocities: p,
                            lastIdealStyles: l,
                            lastIdealVelocities: s
                        }),
                        r.unreadPropStyles = null,
                        r.startAnimationIfNecessary()
                    })
                }
                ,
                this.state = this.defaultState()
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + r(t));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
            i(t, null, [{
                key: "propTypes",
                value: {
                    defaultStyles: h.default.arrayOf(h.default.objectOf(h.default.number)),
                    styles: h.default.func.isRequired,
                    children: h.default.func.isRequired
                },
                enumerable: !0
            }]),
            t.prototype.defaultState = function() {
                var e = this.props
                  , t = e.defaultStyles
                  , n = e.styles
                  , r = t || n().map(s.default)
                  , o = r.map(function(e) {
                    return l.default(e)
                });
                return {
                    currentStyles: r,
                    currentVelocities: o,
                    lastIdealStyles: r,
                    lastIdealVelocities: o
                }
            }
            ,
            t.prototype.componentDidMount = function() {
                this.prevTime = c.default(),
                this.startAnimationIfNecessary()
            }
            ,
            t.prototype.componentWillReceiveProps = function(e) {
                null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles),
                this.unreadPropStyles = e.styles(this.state.lastIdealStyles),
                null == this.animationID && (this.prevTime = c.default(),
                this.startAnimationIfNecessary())
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null != this.animationID && (d.default.cancel(this.animationID),
                this.animationID = null)
            }
            ,
            t.prototype.render = function() {
                var e = this.props.children(this.state.currentStyles);
                return e && p.default.Children.only(e)
            }
            ,
            t
        }(p.default.Component);
        t.default = v,
        e.exports = t.default
    },
    16960: function(e, t, n) {
        "use strict";
        function r(e) {
            "@babel/helpers - typeof";
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        t.__esModule = !0;
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = a(n(12735))
          , s = a(n(43194))
          , u = a(n(56564))
          , c = a(n(52488))
          , d = a(n(62093))
          , f = a(n(14923))
          , p = a(n(1011))
          , h = a(n(87401))
          , y = a(n(23398))
          , v = 1e3 / 60;
        function m(e, t, n) {
            var r = t;
            return null == r ? e.map(function(e, t) {
                return {
                    key: e.key,
                    data: e.data,
                    style: n[t]
                }
            }) : e.map(function(e, t) {
                for (var o = 0; o < r.length; o++)
                    if (r[o].key === e.key)
                        return {
                            key: r[o].key,
                            data: r[o].data,
                            style: n[t]
                        };
                return {
                    key: e.key,
                    data: e.data,
                    style: n[t]
                }
            })
        }
        function b(e, t, n, r, o, i, a, s, u) {
            for (var d = c.default(r, o, function(e, r) {
                var o = t(r);
                return null == o ? (n({
                    key: r.key,
                    data: r.data
                }),
                null) : p.default(i[e], o, a[e]) ? (n({
                    key: r.key,
                    data: r.data
                }),
                null) : {
                    key: r.key,
                    data: r.data,
                    style: o
                }
            }), f = [], h = [], y = [], v = [], m = 0; m < d.length; m++) {
                for (var b = d[m], g = null, w = 0; w < r.length; w++)
                    if (r[w].key === b.key) {
                        g = w;
                        break
                    }
                if (null == g) {
                    var O = e(b);
                    f[m] = O,
                    y[m] = O;
                    var S = l.default(b.style);
                    h[m] = S,
                    v[m] = S
                } else
                    f[m] = i[g],
                    y[m] = s[g],
                    h[m] = a[g],
                    v[m] = u[g]
            }
            return [d, f, h, y, v]
        }
        var g = function(e) {
            function t(n) {
                var r = this;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                e.call(this, n),
                this.unmounting = !1,
                this.animationID = null,
                this.prevTime = 0,
                this.accumulatedTime = 0,
                this.unreadPropStyles = null,
                this.clearUnreadPropStyle = function(e) {
                    for (var t = b(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, e, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), n = t[0], i = t[1], a = t[2], l = t[3], s = t[4], u = 0; u < e.length; u++) {
                        var c = e[u].style
                          , d = !1;
                        for (var f in c)
                            if (Object.prototype.hasOwnProperty.call(c, f)) {
                                var p = c[f];
                                "number" == typeof p && (d || (d = !0,
                                i[u] = o({}, i[u]),
                                a[u] = o({}, a[u]),
                                l[u] = o({}, l[u]),
                                s[u] = o({}, s[u]),
                                n[u] = {
                                    key: n[u].key,
                                    data: n[u].data,
                                    style: o({}, n[u].style)
                                }),
                                i[u][f] = p,
                                a[u][f] = 0,
                                l[u][f] = p,
                                s[u][f] = 0,
                                n[u].style[f] = p)
                            }
                    }
                    r.setState({
                        currentStyles: i,
                        currentVelocities: a,
                        mergedPropsStyles: n,
                        lastIdealStyles: l,
                        lastIdealVelocities: s
                    })
                }
                ,
                this.startAnimationIfNecessary = function() {
                    r.unmounting || (r.animationID = f.default(function(e) {
                        if (!r.unmounting) {
                            var t = r.props.styles
                              , n = "function" == typeof t ? t(m(r.state.mergedPropsStyles, r.unreadPropStyles, r.state.lastIdealStyles)) : t;
                            if (function(e, t, n, r) {
                                if (r.length !== t.length)
                                    return !1;
                                for (var o = 0; o < r.length; o++)
                                    if (r[o].key !== t[o].key)
                                        return !1;
                                for (o = 0; o < r.length; o++)
                                    if (!p.default(e[o], t[o].style, n[o]))
                                        return !1;
                                return !0
                            }(r.state.currentStyles, n, r.state.currentVelocities, r.state.mergedPropsStyles))
                                return r.animationID = null,
                                void (r.accumulatedTime = 0);
                            var o = e || d.default()
                              , i = o - r.prevTime;
                            if (r.prevTime = o,
                            r.accumulatedTime = r.accumulatedTime + i,
                            r.accumulatedTime > 10 * v && (r.accumulatedTime = 0),
                            0 === r.accumulatedTime)
                                return r.animationID = null,
                                void r.startAnimationIfNecessary();
                            for (var a = (r.accumulatedTime - Math.floor(r.accumulatedTime / v) * v) / v, l = Math.floor(r.accumulatedTime / v), s = b(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, n, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), c = s[0], f = s[1], h = s[2], y = s[3], g = s[4], w = 0; w < c.length; w++) {
                                var O = c[w].style
                                  , S = {}
                                  , T = {}
                                  , I = {}
                                  , E = {};
                                for (var P in O)
                                    if (Object.prototype.hasOwnProperty.call(O, P)) {
                                        var k = O[P];
                                        if ("number" == typeof k)
                                            S[P] = k,
                                            T[P] = 0,
                                            I[P] = k,
                                            E[P] = 0;
                                        else {
                                            for (var x = y[w][P], C = g[w][P], D = 0; D < l; D++) {
                                                var R = u.default(v / 1e3, x, C, k.val, k.stiffness, k.damping, k.precision);
                                                x = R[0],
                                                C = R[1]
                                            }
                                            var j = u.default(v / 1e3, x, C, k.val, k.stiffness, k.damping, k.precision)
                                              , M = j[0]
                                              , H = j[1];
                                            S[P] = x + (M - x) * a,
                                            T[P] = C + (H - C) * a,
                                            I[P] = x,
                                            E[P] = C
                                        }
                                    }
                                y[w] = I,
                                g[w] = E,
                                f[w] = S,
                                h[w] = T
                            }
                            r.animationID = null,
                            r.accumulatedTime -= l * v,
                            r.setState({
                                currentStyles: f,
                                currentVelocities: h,
                                lastIdealStyles: y,
                                lastIdealVelocities: g,
                                mergedPropsStyles: c
                            }),
                            r.unreadPropStyles = null,
                            r.startAnimationIfNecessary()
                        }
                    }))
                }
                ,
                this.state = this.defaultState()
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + r(t));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
            i(t, null, [{
                key: "propTypes",
                value: {
                    defaultStyles: y.default.arrayOf(y.default.shape({
                        key: y.default.string.isRequired,
                        data: y.default.any,
                        style: y.default.objectOf(y.default.number).isRequired
                    })),
                    styles: y.default.oneOfType([y.default.func, y.default.arrayOf(y.default.shape({
                        key: y.default.string.isRequired,
                        data: y.default.any,
                        style: y.default.objectOf(y.default.oneOfType([y.default.number, y.default.object])).isRequired
                    }))]).isRequired,
                    children: y.default.func.isRequired,
                    willEnter: y.default.func,
                    willLeave: y.default.func,
                    didLeave: y.default.func
                },
                enumerable: !0
            }, {
                key: "defaultProps",
                value: {
                    willEnter: function(e) {
                        return s.default(e.style)
                    },
                    willLeave: function() {
                        return null
                    },
                    didLeave: function() {}
                },
                enumerable: !0
            }]),
            t.prototype.defaultState = function() {
                var e = this.props
                  , t = e.defaultStyles
                  , n = e.styles
                  , r = e.willEnter
                  , o = e.willLeave
                  , i = e.didLeave
                  , a = "function" == typeof n ? n(t) : n
                  , u = void 0;
                u = null == t ? a : t.map(function(e) {
                    for (var t = 0; t < a.length; t++)
                        if (a[t].key === e.key)
                            return a[t];
                    return e
                });
                var c = null == t ? a.map(function(e) {
                    return s.default(e.style)
                }) : t.map(function(e) {
                    return s.default(e.style)
                })
                  , d = null == t ? a.map(function(e) {
                    return l.default(e.style)
                }) : t.map(function(e) {
                    return l.default(e.style)
                })
                  , f = b(r, o, i, u, a, c, d, c, d)
                  , p = f[0];
                return {
                    currentStyles: f[1],
                    currentVelocities: f[2],
                    lastIdealStyles: f[3],
                    lastIdealVelocities: f[4],
                    mergedPropsStyles: p
                }
            }
            ,
            t.prototype.componentDidMount = function() {
                this.prevTime = d.default(),
                this.startAnimationIfNecessary()
            }
            ,
            t.prototype.componentWillReceiveProps = function(e) {
                this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
                var t = e.styles;
                this.unreadPropStyles = "function" == typeof t ? t(m(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t,
                null == this.animationID && (this.prevTime = d.default(),
                this.startAnimationIfNecessary())
            }
            ,
            t.prototype.componentWillUnmount = function() {
                this.unmounting = !0,
                null != this.animationID && (f.default.cancel(this.animationID),
                this.animationID = null)
            }
            ,
            t.prototype.render = function() {
                var e = m(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles)
                  , t = this.props.children(e);
                return t && h.default.Children.only(t)
            }
            ,
            t
        }(h.default.Component);
        t.default = g,
        e.exports = t.default
    },
    12735: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t.default = function(e) {
            var t = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = 0);
            return t
        }
        ,
        e.exports = t.default
    },
    52488: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t.default = function(e, t, n) {
            for (var r = {}, o = 0; o < e.length; o++)
                r[e[o].key] = o;
            for (var i = {}, o = 0; o < t.length; o++)
                i[t[o].key] = o;
            for (var a = [], o = 0; o < t.length; o++)
                a[o] = t[o];
            for (var o = 0; o < e.length; o++)
                if (!Object.prototype.hasOwnProperty.call(i, e[o].key)) {
                    var l = n(o, e[o]);
                    null != l && a.push(l)
                }
            return a.sort(function(e, n) {
                var o = i[e.key]
                  , a = i[n.key]
                  , l = r[e.key]
                  , s = r[n.key];
                if (null != o && null != a)
                    return i[e.key] - i[n.key];
                if (null != l && null != s)
                    return r[e.key] - r[n.key];
                if (null != o) {
                    for (var u = 0; u < t.length; u++) {
                        var c = t[u].key;
                        if (Object.prototype.hasOwnProperty.call(r, c)) {
                            if (o < i[c] && s > r[c])
                                return -1;
                            if (o > i[c] && s < r[c])
                                return 1
                        }
                    }
                    return 1
                }
                for (var u = 0; u < t.length; u++) {
                    var c = t[u].key;
                    if (Object.prototype.hasOwnProperty.call(r, c)) {
                        if (a < i[c] && l > r[c])
                            return 1;
                        if (a > i[c] && l < r[c])
                            return -1
                    }
                }
                return -1
            })
        }
        ,
        e.exports = t.default
    },
    79871: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t.default = {
            noWobble: {
                stiffness: 170,
                damping: 26
            },
            gentle: {
                stiffness: 120,
                damping: 14
            },
            wobbly: {
                stiffness: 180,
                damping: 12
            },
            stiff: {
                stiffness: 210,
                damping: 20
            }
        },
        e.exports = t.default
    },
    76555: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e.default : e
        }
        var o = n(51432);
        t.y_ = r(o),
        r(n(40708));
        var i = n(16960);
        t.bg = r(i);
        var a = n(52445);
        t.ST = r(a),
        r(n(79871)),
        r(n(43194)),
        r(n(49686))
    },
    49686: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t.default = function() {
            0
        }
        ;
        e.exports = t.default
    },
    1011: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t.default = function(e, t, n) {
            for (var r in t)
                if (Object.prototype.hasOwnProperty.call(t, r)) {
                    if (0 !== n[r])
                        return !1;
                    var o = "number" == typeof t[r] ? t[r] : t[r].val;
                    if (e[r] !== o)
                        return !1
                }
            return !0
        }
        ,
        e.exports = t.default
    },
    52445: function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ;
        t.default = function(e, t) {
            return r({}, i, t, {
                val: e
            })
        }
        ;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(79871))
          , i = r({}, o.default.noWobble, {
            precision: .01
        });
        e.exports = t.default
    },
    56564: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t.default = function(e, t, r, o, i, a, l) {
            var s = r + (-i * (t - o) + -a * r) * e
              , u = t + s * e;
            if (Math.abs(s) < l && Math.abs(u - o) < l)
                return n[0] = o,
                n[1] = 0,
                n;
            return n[0] = u,
            n[1] = s,
            n
        }
        ;
        var n = [0, 0];
        e.exports = t.default
    },
    43194: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t.default = function(e) {
            var t = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = "number" == typeof e[n] ? e[n] : e[n].val);
            return t
        }
        ,
        e.exports = t.default
    },
    10283: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return J
            }
        });
        var r = n(87401)
          , o = n(23398)
          , i = n.n(o)
          , a = n(67064)
          , l = n.n(a)
          , s = n(76555)
          , u = n(47957)
          , c = n.n(u)
          , d = n(94165);
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
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach(function(t) {
                    y(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function y(e, t, n) {
            return (t = m(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function v(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, m(r.key), r)
            }
        }
        function m(e) {
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
        function b(e, t) {
            return (b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                t && b(e, t)
            }(n, r.PureComponent);
            var t = g(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    topDeltaX: 0,
                    topDeltaY: 0,
                    pageX: void 0,
                    targetX: 0,
                    targetY: 0,
                    reachHardLeft: !1,
                    reachHardRight: !1,
                    swipeLeft: !1,
                    swipeRight: !1,
                    reachHardUp: !1,
                    reachHardDown: !1,
                    isPressed: !1,
                    swipeStarted: !1
                },
                r.handleMouseDown = r.handleMouseDown.bind(w(r)),
                r.handleMouseUp = r.handleMouseUp.bind(w(r)),
                r.handleTouchStart = r.handleTouchStart.bind(w(r)),
                r.handleTouchMove = r.handleTouchMove.bind(w(r)),
                r.handleMouseMove = r.handleMouseMove.bind(w(r)),
                r.registerMoveUpEvents = r.registerMoveUpEvents.bind(w(r)),
                r.handleOnRest = r.handleOnRest.bind(w(r)),
                r.handleLeftHardTimer = r.handleLeftHardTimer.bind(w(r)),
                r.handleRightHardTimer = r.handleRightHardTimer.bind(w(r)),
                r.updateOpenStatus = r.updateOpenStatus.bind(w(r)),
                r.handleLongPress = r.handleLongPress.bind(w(r)),
                r.reset = r.reset.bind(w(r)),
                r.handleOutsideMousedown = r.handleOutsideMousedown.bind(w(r)),
                r.getTargetPos = r.getTargetPos.bind(w(r)),
                r.handleDownHardTimer = r.handleDownHardTimer.bind(w(r)),
                r.handleUpHardTimer = r.handleUpHardTimer.bind(w(r)),
                r
            }
            return function(e, t, n) {
                t && v(e.prototype, t),
                n && v(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = e.leftOpened
                      , n = e.rightOpened
                      , r = e.downOpened
                      , o = e.upOpened
                      , i = e.leftOffsetEnd
                      , a = e.upOffsetEnd
                      , l = e.downOffsetEnd
                      , s = e.xDisabled
                      , u = e.yDisabled
                      , c = this.state
                      , d = c.targetX
                      , f = c.targetY
                      , p = c.isPressed;
                    if (this.state.swipeStarted && s && u)
                        this.handleMouseUp();
                    else if (!p) {
                        var h = this.props
                          , y = h.leftOffsetThreshold
                          , v = h.onOpenChanged;
                        if (!p) {
                            var m = d;
                            n && -d < y && (m = i),
                            !n && -d > y && (m = 0);
                            var b;
                            b = r ? a : o ? l : 0,
                            t === this.props.leftOpened && n === this.props.rightOpened && o === this.props.upOpened && r === this.props.downOpened || v({
                                rightOpened: n,
                                leftOpened: t,
                                upOpened: o,
                                downOpened: r
                            }),
                            this.setState({
                                targetX: m,
                                targetY: b
                            })
                        }
                    }
                }
            }, {
                key: "getTargetPos",
                value: function(e) {
                    var t = e.pageX
                      , n = e.pageY
                      , r = this.state
                      , o = r.topDeltaX
                      , i = r.topDeltaY
                      , a = r.targetX
                      , l = r.pageX
                      , s = this.props
                      , u = s.xDisabled
                      , c = s.yDisabled
                      , d = s.downHardOffset
                      , f = s.upHardOffset
                      , p = s.leftHardOffset
                      , h = s.rightHardOffset
                      , y = s.hardDamp
                      , v = t - o
                      , m = n - i;
                    return u ? v = 0 : v < 0 ? v = Math.atan(v / p) * p * y / Math.PI : (v = Math.atan(v / h) * h * y / Math.PI,
                    t > l && (v = Math.max(a, v))),
                    {
                        targetX: v,
                        targetY: m = c ? 0 : m < 0 ? Math.atan(m / f) * f * y / Math.PI : Math.atan(m / d) * d * y / Math.PI
                    }
                }
            }, {
                key: "registerMoveUpEvents",
                value: function(e) {
                    var t, n;
                    e ? null === (t = this.swipeContainer) || void 0 === t || t.addEventListener("touchend", this.handleMouseUp) : null === (n = this.swipeContainer) || void 0 === n || n.removeEventListener("touchend", this.handleMouseUp)
                }
            }, {
                key: "handleMouseDown",
                value: function(e, t) {
                    var n = e.x
                      , r = e.y
                      , o = t.pageX
                      , i = t.pageY
                      , a = this.props
                      , l = a.xDisabled
                      , s = a.yDisabled
                      , u = a.onLongPress
                      , c = a.leftHardOffset
                      , d = a.rightOpened
                      , f = a.hardDamp;
                    if (!l || !s) {
                        var p = o - n;
                        if (d)
                            p = o - Math.tan(n * Math.PI / (c * f)) * c;
                        this.registerMoveUpEvents(!0),
                        this.setState({
                            topDeltaX: p,
                            topDeltaY: i - r,
                            targetX: l ? 0 : n,
                            targetY: s ? 0 : r,
                            startPageX: o,
                            startPageY: i,
                            isPressed: !0,
                            pageX: o
                        }),
                        u && (this.longPressTimer = setTimeout(this.handleLongPress, 600))
                    }
                }
            }, {
                key: "handleLongPress",
                value: function() {
                    this.reset(),
                    (0,
                    this.props.onLongPress)()
                }
            }, {
                key: "handleMouseMove",
                value: function(e) {
                    var t = e.pageX
                      , n = e.pageY
                      , r = this.state
                      , o = r.isPressed
                      , i = r.startPageX
                      , a = r.startPageY
                      , l = r.swipeStarted
                      , s = r.swipeLeft
                      , u = r.swipeRight
                      , c = r.reachHardLeft
                      , d = r.reachHardRight
                      , f = r.reachHardUp
                      , p = r.reachHardDown;
                    if (t === i && n === a || clearTimeout(this.longPressTimer),
                    o) {
                        var h = this.props
                          , y = h.xDisabled
                          , v = h.yDisabled
                          , m = h.leftOffsetEnd
                          , b = h.rightOffsetEnd
                          , g = this.getTargetPos({
                            pageX: t,
                            pageY: n
                        })
                          , w = g.targetX
                          , O = g.targetY;
                        if (!l && (v && Math.abs(n - a) > Math.abs(t - i) || y && Math.abs(t - i) > Math.abs(n - a)))
                            this.handleMouseUp();
                        else {
                            var S = this.props
                              , T = S.onSwipeStart
                              , I = S.onSwipeDirectionChange
                              , E = S.onSwiping
                              , P = S.leftHardOffset
                              , k = S.rightHardOffset
                              , x = S.upHardOffset
                              , C = S.downHardOffset
                              , D = S.reachHardDelay
                              , R = w < 0
                              , j = w > 0
                              , M = l || R || j || O < 0 || O > 0
                              , H = c || -w >= P
                              , V = d || w >= k
                              , _ = f || -O >= x
                              , L = p || O >= C;
                            this.setState({
                                pageX: t,
                                targetX: w,
                                targetY: O,
                                swipeLeft: R,
                                swipeRight: j,
                                swipeStarted: M,
                                reachHardLeft: H,
                                reachHardRight: V,
                                reachHardUp: _,
                                reachHardDown: L
                            }),
                            l || !R && !j || T({
                                swipeLeft: R,
                                swipeRight: j
                            }),
                            M && E({
                                x: w,
                                y: O,
                                leftOffsetEnd: m,
                                rightOffsetEnd: b
                            }),
                            R === s && j === u || I({
                                swipeLeft: R,
                                swipeRight: j
                            }),
                            H && !c && (clearTimeout(this.hardTimer),
                            this.hardTimer = setTimeout(this.handleLeftHardTimer, D)),
                            V && !d && (clearTimeout(this.hardTimer),
                            this.hardTimer = setTimeout(this.handleRightHardTimer, D)),
                            _ && !f && (clearTimeout(this.hardTimer),
                            this.hardTimer = setTimeout(this.handleUpHardTimer, D)),
                            L && !p && (clearTimeout(this.hardTimer),
                            this.hardTimer = setTimeout(this.handleDownHardTimer, D))
                        }
                    }
                }
            }, {
                key: "handleLeftHardTimer",
                value: function() {
                    var e = this.state
                      , t = e.isPressed
                      , n = e.reachHardLeft
                      , r = e.targetX;
                    if (t) {
                        var o = this.props
                          , i = o.leftHardOffset
                          , a = o.rightHardOffset
                          , l = o.onSwipeReachHard;
                        n && -r > i && l({
                            reachHardLeft: -r > i,
                            reachHardRight: r > a
                        })
                    }
                }
            }, {
                key: "handleRightHardTimer",
                value: function() {
                    var e = this.state
                      , t = e.isPressed
                      , n = e.reachHardRight
                      , r = e.targetX;
                    if (t) {
                        var o = this.props
                          , i = o.leftHardOffset
                          , a = o.rightHardOffset
                          , l = o.onSwipeReachHard;
                        n && r > a && l({
                            reachHardLeft: -r > i,
                            reachHardRight: r > a
                        })
                    }
                }
            }, {
                key: "handleUpHardTimer",
                value: function() {
                    var e = this.state
                      , t = e.isPressed
                      , n = e.reachHardUp
                      , r = e.targetY;
                    if (t) {
                        var o = this.props
                          , i = o.upHardOffset
                          , a = o.downHardOffset
                          , l = o.onSwipeReachHard;
                        n && -r > i && l({
                            reachHardUp: -r > i,
                            reachHardDown: r > a
                        })
                    }
                }
            }, {
                key: "handleDownHardTimer",
                value: function() {
                    var e = this.state
                      , t = e.isPressed
                      , n = e.reachHardDown
                      , r = e.targetY;
                    if (t) {
                        var o = this.props
                          , i = o.upHardOffset
                          , a = o.downHardOffset
                          , l = o.onSwipeReachHard;
                        n && r > a && l({
                            reachHardUp: -r > i,
                            reachHardDown: r > a
                        })
                    }
                }
            }, {
                key: "handleMouseUp",
                value: function() {
                    var e = this.props
                      , t = e.xDisabled
                      , n = e.yDisabled
                      , r = e.leftOffsetEnd
                      , o = e.rightOffsetEnd
                      , i = e.upOffsetEnd
                      , a = e.downOffsetEnd
                      , l = e.onSwipeEnd
                      , s = this.updateOpenStatus()
                      , u = s.leftOpened
                      , c = s.rightOpened
                      , d = s.upOpened
                      , f = s.downOpened
                      , p = u ? o : c ? -r : 0
                      , h = d ? a : f ? -i : 0;
                    this.reset({
                        targetX: t ? 0 : p,
                        targetY: n ? 0 : h
                    }),
                    l({
                        leftOpened: u,
                        rightOpened: c,
                        upOpened: d,
                        downOpened: f,
                        y: h,
                        x: p
                    }),
                    (u || c || d || f) && window.addEventListener("touchstart", this.handleOutsideMousedown)
                }
            }, {
                key: "reset",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.registerMoveUpEvents(!1),
                    clearTimeout(this.longPressTimer),
                    clearTimeout(this.hardTimer);
                    var t = h({
                        isPressed: !1,
                        swipeStarted: !1,
                        topDeltaY: 0,
                        topDeltaX: 0,
                        reachHardLeft: !1,
                        reachHardRight: !1,
                        reachHardDown: !1,
                        reachHardUp: !1
                    }, e);
                    this.setState(t)
                }
            }, {
                key: "updateOpenStatus",
                value: function() {
                    var e = this.state
                      , t = e.targetX
                      , n = e.targetY
                      , r = this.props
                      , o = r.leftOffsetThreshold
                      , i = r.rightOffsetThreshold
                      , a = r.downOffsetThreshold
                      , l = r.upOffsetThreshold
                      , s = r.leftOpened
                      , u = r.rightOpened
                      , c = r.upOpened
                      , d = r.downOpened
                      , f = r.onOpenChanged
                      , p = t > i
                      , h = -t > o
                      , y = n > a
                      , v = -n > l;
                    return s === p && u === h && c === y && d === v || f({
                        leftOpened: p,
                        rightOpened: h,
                        upOpened: y,
                        downOpened: v
                    }),
                    {
                        leftOpened: p,
                        rightOpened: h,
                        upOpened: y,
                        downOpened: v
                    }
                }
            }, {
                key: "handleTouchStart",
                value: function(e, t) {
                    this.handleMouseDown(e, t.touches[0])
                }
            }, {
                key: "handleTouchMove",
                value: function(e) {
                    this.handleMouseMove(e.touches[0]),
                    this.state.swipeStarted && e.stopPropagation()
                }
            }, {
                key: "handleOnRest",
                value: function() {
                    var e = this.state
                      , t = e.isPressed
                      , n = e.targetX
                      , r = e.swipeLeft
                      , o = e.swipeRight
                      , i = this.props
                      , a = i.leftOpened
                      , l = i.rightOpened
                      , s = i.onRest
                      , u = i.onSwipeDirectionChange;
                    if (!t) {
                        var c = n < 0
                          , d = n > 0;
                        r === c && o === d || (this.setState({
                            swipeLeft: c,
                            swipeRight: d
                        }),
                        u({
                            swipeLeft: c,
                            swipeRight: d
                        })),
                        s({
                            leftOpened: a,
                            rightOpened: l
                        })
                    }
                }
            }, {
                key: "handleOutsideMousedown",
                value: function(e) {
                    if (!this.state.isPressed) {
                        var t = this.props.wrapperComponent;
                        if (!t || !t.contains(e.target)) {
                            window.removeEventListener("touchstart", this.handleOutsideMousedown);
                            var n = this.props
                              , r = n.leftOpened
                              , o = n.rightOpened
                              , i = n.onOpenChanged;
                            (r || o) && i({
                                leftOpened: !1,
                                rightOpened: !1
                            })
                        }
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.state
                      , n = t.targetX
                      , o = t.targetY
                      , i = t.isPressed
                      , a = this.props
                      , l = a.ref
                      , u = void 0 === l ? function(e) {
                        return e
                    }
                    : l
                      , c = a.className
                      , d = void 0 === c ? "" : c
                      , f = a.style
                      , p = void 0 === f ? {} : f
                      , y = a.tabIndex
                      , v = void 0 === y ? 0 : y
                      , m = a.onKeyDown
                      , b = void 0 === m ? void 0 : m
                      , g = a.children
                      , w = a.locked
                      , O = a.springConfig
                      , S = n
                      , T = o
                      , I = i ? {
                        x: n,
                        y: o
                    } : {
                        x: (0,
                        s.ST)(S, O),
                        y: (0,
                        s.ST)(T, O)
                    };
                    return r.createElement(s.y_, {
                        style: I,
                        onRest: this.handleOnRest
                    }, function(t) {
                        var n = t.x
                          , o = t.y
                          , i = w ? 0 : n
                          , a = w ? 0 : o;
                        return r.createElement("div", {
                            ref: function(t) {
                                e.swipeContainer = u(t)
                            },
                            className: "ow-swipeable-touchWrapper ".concat(d),
                            onTouchMove: function(t) {
                                return e.handleTouchMove(t)
                            },
                            onTouchStart: e.handleTouchStart.bind(null, {
                                x: n,
                                y: o
                            }),
                            style: h(h({}, p), {}, {
                                transform: "translate3d(".concat(i, "px, ").concat(a, "px, 0)"),
                                WebkitTransform: "translate3d(".concat(i, "px, ").concat(a, "px, 0)")
                            }),
                            tabIndex: v,
                            onKeyDown: b
                        }, g)
                    })
                }
            }]),
            n
        }();
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
        S.defaultProps = {
            xDisabled: !1,
            yDisabled: !0,
            locked: !1,
            leftOpened: !1,
            rightOpened: !1,
            leftOffsetEnd: 60,
            leftOffsetThreshold: 30,
            leftHardOffset: 80,
            rightOffsetEnd: 60,
            rightOffsetThreshold: 60,
            rightHardOffset: 70,
            upHardOffset: 70,
            upOffsetEnd: 70,
            upOffsetThreshold: 70,
            downHardOffset: 70,
            downOffsetEnd: 70,
            downOffsetThreshold: 70,
            upOpened: !1,
            downOpened: !1,
            reachHardDelay: 100,
            hardDamp: 3,
            ref: function(e) {
                return e
            },
            className: "",
            style: {},
            tabIndex: 0,
            onKeyDown: void 0,
            children: [],
            onSwiping: function() {},
            onSwipeStart: function() {},
            onSwipeEnd: function() {},
            onSwipeDirectionChange: function() {},
            onSwipeReachHard: function() {},
            onOpenChanged: function() {},
            onRest: function() {},
            onLongPress: void 0,
            onMoving: function() {},
            wrapperComponent: null,
            springConfig: {
                stiffness: 250,
                damping: 20
            }
        },
        S.propTypes = {
            xDisabled: i().bool,
            yDisabled: i().bool,
            locked: i().bool,
            leftOpened: i().bool,
            rightOpened: i().bool,
            leftOffsetEnd: i().number,
            leftOffsetThreshold: i().number,
            leftHardOffset: i().number,
            rightOffsetEnd: i().number,
            rightOffsetThreshold: i().number,
            rightHardOffset: i().number,
            upOffsetEnd: i().number,
            upHardOffset: i().number,
            upOffsetThreshold: i().number,
            downOffsetThreshold: i().number,
            downHardOffset: i().number,
            downOffsetEnd: i().number,
            upOpened: i().bool,
            downOpened: i().bool,
            reachHardDelay: i().number,
            hardDamp: i().number,
            ref: i().func,
            className: i().string,
            style: i().shape(i().object),
            tabIndex: i().number,
            onKeyDown: i().func,
            children: [],
            onSwiping: i().func,
            onSwipeStart: i().func,
            onSwipeEnd: i().func,
            onSwipeDirectionChange: i().func,
            onSwipeReachHard: i().func,
            onOpenChanged: i().func,
            onRest: i().func,
            onLongPress: i().func,
            onMoving: i().func,
            wrapperComponent: i().shape(i().object),
            springConfig: i().shape({
                stiffness: i().number,
                damping: i().number
            })
        };
        var I = ["styles", "children", "onStyle"];
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
        function P(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function k(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, x(r.key), r)
            }
        }
        function x(e) {
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
        function C(e, t) {
            return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function D(e) {
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
                var n, r = R(e);
                if (t) {
                    var o = R(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === T(t) || "function" == typeof t))
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
        function R(e) {
            return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var j = function(e) {
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
                t && C(e, t)
            }(n, r.Component);
            var t = D(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).reservedStyles = void 0,
                r
            }
            return function(e, t, n) {
                t && k(e.prototype, t),
                n && k(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "shouldComponentUpdate",
                value: function(e) {
                    var t = e.styles;
                    e.styleCount;
                    if (!e.transforming)
                        return !0;
                    var n = this.props.styles.map(function(e) {
                        return e.style
                    })
                      , r = t.map(function(e) {
                        return e.style
                    });
                    return n.length !== r.length || (this.reservedStyles,
                    this.reservedStyles = r,
                    !0)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.styles
                      , o = t.children
                      , i = t.onStyle
                      , a = P(t, I);
                    return i && i(n),
                    r.createElement(S, E({
                        ref: function(t) {
                            e.swipe = t
                        }
                    }, a), o)
                }
            }]),
            n
        }();
        j.defaultProps = {
            styles: [],
            children: null,
            styleCount: 0,
            transforming: !1,
            onStyle: function() {}
        },
        j.propTypes = {
            styles: (0,
            o.arrayOf)(o.object),
            children: (0,
            o.arrayOf)(o.object),
            styleCount: o.number,
            transforming: o.bool,
            onStyle: o.func
        };
        var M = j
          , H = n(4446)
          , V = n(44910)
          , _ = n(83416);
        function L(e) {
            "@babel/helpers - typeof";
            return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function N(e) {
            return function(e) {
                if (Array.isArray(e))
                    return A(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return A(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return A(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function A(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
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
        function K(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? U(Object(n), !0).forEach(function(t) {
                    W(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function W(e, t, n) {
            return (t = Y(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function B(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Y(r.key), r)
            }
        }
        function Y(e) {
            var t = function(e, t) {
                if ("object" !== L(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== L(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === L(t) ? t : String(t)
        }
        function z(e, t) {
            return (z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function X(e) {
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
                var n, r = q(e);
                if (t) {
                    var o = q(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === L(t) || "function" == typeof t))
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
        function q(e) {
            return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Z = function(e) {
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
                t && z(e, t)
            }(n, r.Component);
            var t = X(n);
            function n(e) {
                var r, o;
                ((function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, n),
                (r = t.call(this, e)).handleScroll = r.handleScroll.bind(F(r)),
                r.handleItemClick = r.handleItemClick.bind(F(r)),
                r.willUpdateSelection = r.willUpdateSelection.bind(F(r)),
                r.handleSelectItemBySwiping = r.handleSelectItemBySwiping.bind(F(r)),
                r.handleCheckChange = r.handleCheckChange.bind(F(r)),
                r.handleKeyDown = r.handleKeyDown.bind(F(r)),
                r.currentFocusElement = r.currentFocusElement.bind(F(r)),
                r.updateCurrentStyles = r.updateCurrentStyles.bind(F(r)),
                r.swipeOnTouch = r.swipeOnTouch.bind(F(r)),
                r.keyboardScroll = r.keyboardScroll.bind(F(r)),
                r.handleKeyPress = r.handleKeyPress.bind(F(r)),
                r.scrollFocus = r.scrollFocus.bind(F(r)),
                r.focusAdd = r.focusAdd.bind(F(r)),
                r.focusItemVal = r.focusItemVal.bind(F(r)),
                r.focusOnAds = r.focusOnAds.bind(F(r)),
                r.focusRemoval = r.focusRemoval.bind(F(r)),
                r.handleRightKey = r.handleRightKey.bind(F(r)),
                r.focusListItem = r.focusListItem.bind(F(r)),
                r.handleCollapsingExpanded = r.handleCollapsingExpanded.bind(F(r)),
                r.handleSwipeEnd = r.handleSwipeEnd.bind(F(r)),
                r.getMotionRange = r.getMotionRange.bind(F(r)),
                r.state = {
                    expanded: !1,
                    collapsingExpanded: !1,
                    swipeTargetY: 0,
                    focusedValueIndex: 0,
                    prevValueIndex: -1
                },
                r.renderedStart = -1,
                r.renderedEnd = -1,
                null !== H.UhU && void 0 !== H.UhU && H.UhU.isDesktop && (0,
                _.Z)("common.ScrollKeysEnabled")) && (null === (o = window) || void 0 === o || o.addEventListener("keydown", r.handleKeyPress));
                return r
            }
            return function(e, t, n) {
                t && B(e.prototype, t),
                n && B(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "swipeOnTouch",
                value: function(e) {
                    try {
                        (0,
                        this.props.onTouchMoveCallback)()
                    } catch (e) {}
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.updateScrollTop(this.props.scrollTop)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e;
                    null !== H.UhU && void 0 !== H.UhU && H.UhU.isDesktop && (0,
                    _.Z)("common.ScrollKeysEnabled") && (null === (e = window) || void 0 === e || e.removeEventListener("keydown", this.handleKeyPress))
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = e.data
                      , n = (t || {}).expanded;
                    this.setState({
                        expanded: !!t && n
                    })
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    var n = this.props
                      , r = n.shouldComponentUpdateOverwrite
                      , o = n.data;
                    if (this.state.collapsingExpanded !== t.collapsingExpanded || this.state.swipeTargetY !== t.swipeTargetY || o !== e.data)
                        return !0;
                    if (r)
                        return r(K(K({}, this.props), {}, {
                            renderedStart: this.renderedStart,
                            renderedEnd: this.renderedEnd
                        }), e, this.state, t);
                    var i = this.props
                      , a = i.visibleStartIndex
                      , l = i.visibleEndIndex
                      , s = i.listHeight;
                    return a !== e.visibleStartIndex || l !== e.visibleEndIndex || s !== e.listHeight
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t, n, r, o, i, a, l, s, u = this.props, c = u.scrollTop, d = u.data, f = d.expanded, p = d.itemTotalCount, h = (null === (t = this.props) || void 0 === t ? void 0 : null === (n = t.selectedAddressBook) || void 0 === n ? void 0 : n.name) !== (null === e || void 0 === e ? void 0 : null === (r = e.selectedAddressBook) || void 0 === r ? void 0 : r.name) || (null === (o = this.props) || void 0 === o ? void 0 : o.selectedFolderPath) !== (null === e || void 0 === e ? void 0 : e.selectedFolderPath) || (null === (i = this.props) || void 0 === i ? void 0 : null === (a = i.selectedTasksGroup) || void 0 === a ? void 0 : a.name) !== (null === e || void 0 === e ? void 0 : null === (l = e.selectedTasksGroup) || void 0 === l ? void 0 : l.name);
                    if (this.scrollContainer && !f && this.updateScrollTop(c),
                    p < (null === e || void 0 === e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : s.itemTotalCount) && (0,
                    _.Z)("common.ScrollKeysEnabled") && H.UhU.isDesktop) {
                        var y = this.state
                          , v = y.focusedValueIndex
                          , m = y.prevValueIndex;
                        if (v > 0 && !h) {
                            var b, g, w, O = null !== (b = ["ow-contacts-ContactList", "ow-calendar-EventList"]) && void 0 !== b && b.includes(null === (g = this.props) || void 0 === g ? void 0 : g.className) ? v : this.focusItemVal(p, null === e || void 0 === e ? void 0 : null === (w = e.data) || void 0 === w ? void 0 : w.itemTotalCount, v), S = p <= m;
                            O = this.focusListItem(O),
                            "ow-mail-MailSummaryList" === this.props.className || "" === this.props.className ? (this.setState({
                                focusedValueIndex: S ? 0 : v,
                                prevValueIndex: S ? -1 : m
                            }),
                            this.focusOnAds(S, p, O)) : (this.setState({
                                focusedValueIndex: v - 1,
                                prevValueIndex: m - 1
                            }),
                            this.focusAdd(S ? p - 1 : O),
                            !S && this.setState({
                                focusedValueIndex: v,
                                prevValueIndex: m
                            }))
                        }
                    }
                    h && (0,
                    _.Z)("common.ScrollKeysEnabled") && H.UhU.isDesktop && (this.focusRemoval(0),
                    this.setState({
                        focusedValueIndex: 0,
                        prevValueIndex: -1
                    }))
                }
            }, {
                key: "focusListItem",
                value: function(e) {
                    var t;
                    if (void 0 !== (null === (t = document.getElementsByClassName("ow-VirtualizedList-wrapper")[0]) || void 0 === t ? void 0 : t.children[0])) {
                        var n, r, o = parseInt(null === (n = document.getElementsByClassName("ow-VirtualizedList-wrapper")[0]) || void 0 === n ? void 0 : null === (r = n.children[0]) || void 0 === r ? void 0 : r.id), i = "ow-calendar-EventList" === this.props.className;
                        return o > 0 ? i ? e - 1 - o : e - o : i ? e - 1 : e
                    }
                }
            }, {
                key: "handleRightKey",
                value: function() {
                    var e = this.props.className;
                    "ow-contacts-ContactList" === e ? (0,
                    V.kW)(".ow-ResponsiveToolbar") : "ow-tasks-TasksToDoList" === e ? (0,
                    V.kW)(".ow-tasks-TasksToDoPreviewToolbar .ow-BasicToolbar") : (0,
                    V.kW)(".ow-mail-MailPreview-thread-subject")
                }
            }, {
                key: "focusOnAds",
                value: function(e, t, n) {
                    var r, o;
                    null !== (r = document.querySelector(".ow-VirtualizedList-wrapper")) && void 0 !== r && null !== (o = r.children[e ? 0 : n]) && void 0 !== o && o.querySelector("a") ? this.focusAdd(e ? t - 1 : n - 1) : this.focusAdd(e ? t - 1 : n)
                }
            }, {
                key: "focusItemVal",
                value: function(e, t, n) {
                    var r = n - (t - e);
                    return Math.abs(r)
                }
            }, {
                key: "focusAdd",
                value: function(e) {
                    var t, n, r;
                    null === (t = document.getElementsByClassName("ow-VirtualizedList-item-wrapper")) || void 0 === t || null === (n = t[e]) || void 0 === n || null === (r = n.classList) || void 0 === r || r.add("ow-VirtualizedList-item-scrollfocus")
                }
            }, {
                key: "focusRemoval",
                value: function(e) {
                    var t, n, r;
                    null === (t = document.getElementsByClassName("ow-VirtualizedList-item-wrapper")) || void 0 === t || null === (n = t[e]) || void 0 === n || null === (r = n.classList) || void 0 === r || r.remove("ow-VirtualizedList-item-scrollfocus")
                }
            }, {
                key: "currentFocusElement",
                value: function(e, t, n) {
                    for (var r = 0; r < (null === (o = document.getElementsByClassName("ow-VirtualizedList-item-wrapper")) || void 0 === o ? void 0 : o.length); r++) {
                        var o, i, a;
                        if ((null === (i = document.getElementsByClassName("ow-VirtualizedList-item-wrapper")) || void 0 === i ? void 0 : null === (a = i[r]) || void 0 === a ? void 0 : a.id) == e)
                            if (t === d.I.ARROW_DOWN)
                                this.focusRemoval(r - 1),
                                this.focusAdd(r);
                            else if (t === d.I.ARROW_UP) {
                                var l, s;
                                (null === (l = document.getElementsByClassName("ow-VirtualizedList-item-wrapper")) || void 0 === l ? void 0 : null === (s = l[r]) || void 0 === s ? void 0 : s.id) == n - 1 ? (this.focusRemoval(r),
                                this.focusAdd(r - 1)) : (this.focusRemoval(r - 1),
                                this.focusAdd(r - 2))
                            }
                    }
                }
            }, {
                key: "handleKeyPress",
                value: function(e) {
                    var t, n, r;
                    "ow-calendar-EventList" !== (null === (t = this.props) || void 0 === t ? void 0 : t.className) && this.scrollFocus(),
                    this.handleKeyDown(e, null === (n = this.props) || void 0 === n ? void 0 : null === (r = n.data) || void 0 === r ? void 0 : r.rows)
                }
            }, {
                key: "scrollFocus",
                value: function() {
                    var e = this.props.viewportStartIndex
                      , t = this.state
                      , n = t.focusedValueIndex
                      , r = t.prevValueIndex;
                    if (n != e)
                        n > e ? this.setState({
                            focusedValueIndex: n,
                            prevValueIndex: r
                        }) : (-1 !== r && this.focusRemoval(r),
                        this.setState({
                            focusedValueIndex: e + 1,
                            prevValueIndex: e
                        }));
                    else if (n === e) {
                        var o, i;
                        (null === (o = document.getElementsByClassName("ow-VirtualizedList-item-wrapper")[n]) || void 0 === o ? void 0 : null === (i = o.classList) || void 0 === i ? void 0 : i.contains("ow-VirtualizedList-item-scrollfocus")) ? this.setState({
                            focusedValueIndex: n + 1,
                            prevValueIndex: n
                        }) : this.setState({
                            focusedValueIndex: n,
                            prevValueIndex: r
                        })
                    } else
                        this.setState({
                            focusedValueIndex: n + 1,
                            prevValueIndex: r
                        })
                }
            }, {
                key: "onExpandProgress",
                value: function(e) {
                    var t = new CustomEvent(d.dt,{
                        detail: e
                    });
                    window.dispatchEvent(t)
                }
            }, {
                key: "getMotionRange",
                value: function() {
                    var e = this.props
                      , t = e.scrollTop
                      , n = e.data
                      , r = e.viewportEndIndex
                      , o = e.viewportStartIndex
                      , i = e.visibleStartIndex
                      , a = e.visibleEndIndex
                      , l = e.listHeight
                      , s = n.expanded
                      , u = n.expandedTop
                      , c = n.collapsedHeight;
                    if (!s)
                        return {
                            start: i,
                            end: a + 1
                        };
                    for (var d = l - (u - t) - c, f = r + 1; d > 0 && f < n.rows.length; f += 1)
                        d -= n.rows[f].clientRect.height;
                    return {
                        start: o,
                        end: f
                    }
                }
            }, {
                key: "getDefaultStyles",
                value: function(e, t) {
                    var n = this.props.getDefaultStyles
                      , r = this.swipeContainer ? this.swipeContainer.state.targetY : 0;
                    return n(e, t, K(K({}, this.state), {}, {
                        deltaY: r
                    }))
                }
            }, {
                key: "getMotionStyles",
                value: function(e, t) {
                    var n = this.props.getMotionStyles
                      , r = this.swipeContainer ? this.swipeContainer.state.targetY : 0;
                    return n(e, t, K(K({}, this.state), {}, {
                        deltaY: r
                    }))
                }
            }, {
                key: "handleCollapsingExpanded",
                value: function(e) {
                    var t = e.y;
                    this.setState({
                        collapsingExpanded: !0,
                        swipeTargetY: t
                    })
                }
            }, {
                key: "handleSwipeEnd",
                value: function(e) {
                    var t = e.y
                      , n = void 0 === t ? 0 : t;
                    if (0 !== n) {
                        var r = this.props.onBeginCollapsing;
                        this.state.collapsingExpanded = !1,
                        this.state.swipeTargetY = n,
                        this.state.expanded = !1,
                        r()
                    } else
                        this.setState({
                            collapsingExpanded: !1,
                            swipeTargetY: n,
                            expanded: !0
                        })
                }
            }, {
                key: "keyboardScroll",
                value: function(e, t, n, r) {
                    var o = this
                      , i = n
                      , a = (null === e || void 0 === e ? void 0 : e[r]).clientRect;
                    setTimeout(function() {
                        var e = a.top
                          , r = a.bottom;
                        e < n ? i = e : r > n + t && (i = r - t),
                        o.updateScrollTop(i)
                    }, 0)
                }
            }, {
                key: "willUpdateSelection",
                value: function(e, t) {
                    var n, r, o, i, a, l, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, u = this.state, c = u.focusedValueIndex, f = u.prevValueIndex, p = this.props, h = p.onSelectChange, y = p.scrollTop, v = p.listHeight;
                    if (this.updateCurrentStyles(this.scrollContainer.scrollTop),
                    y !== this.scrollContainer.scrollTop && this.willUpdateScrollTop(this.scrollContainer.scrollTop),
                    l = null !== (n = [null === d.DJ || void 0 === d.DJ ? void 0 : d.DJ.PREVIEW_NONE, null === d.DJ || void 0 === d.DJ ? void 0 : d.DJ.PREVIEW_BELOW]) && void 0 !== n && n.includes(null === (r = this.props) || void 0 === r ? void 0 : r.layout) ? (null === e || void 0 === e ? void 0 : e.length) - 1 : null === e || void 0 === e ? void 0 : e.length,
                    -1 !== c && c < l && (0,
                    _.Z)("common.ScrollKeysEnabled")) {
                        if (s.keyCode === d.I.ARROW_DOWN)
                            this.setState({
                                focusedValueIndex: c !== f ? c + 1 : c,
                                prevValueIndex: c
                            }),
                            this.currentFocusElement(c, s.keyCode),
                            this.keyboardScroll(e, v, y, c);
                        else if (s.keyCode === d.I.ARROW_UP && f > 0)
                            this.setState({
                                focusedValueIndex: c !== f ? c - 1 : c,
                                prevValueIndex: f - 1
                            }),
                            this.currentFocusElement(c, s.keyCode),
                            this.keyboardScroll(e, v, y, f - 1);
                        else if (s.keyCode === d.I.ARROW_RIGHT)
                            this.handleRightKey();
                        else if (-1 === f) {
                            var m;
                            if ([d.I.ENTER, d.I.DELETE].includes(s.keyCode) && (null === (m = document.getElementsByClassName("ow-VirtualizedList-item-wrapper")[0]) || void 0 === m || !m.classList.contains("ow-VirtualizedList-item-scrollfocus")))
                                return
                        }
                    } else
                        c === l && s.keyCode === d.I.ARROW_UP && (0,
                        _.Z)("common.ScrollKeysEnabled") && (this.setState({
                            focusedValueIndex: c - 1,
                            prevValueIndex: f - 1
                        }),
                        this.currentFocusElement(f, s.keyCode, l));
                    var b, g, w, O = (null === s || void 0 === s ? void 0 : null === (o = s.target) || void 0 === o ? void 0 : null === (i = o.closest(".ow-VirtualizedList-item-wrapper")) || void 0 === i ? void 0 : i.getBoundingClientRect()) || {}, S = O.x, T = O.y, I = O.height, E = O.width, P = O.top, k = O.left, x = O.bottom, C = O.right;
                    null !== (a = [d.I.ARROW_UP, d.I.ARROW_DOWN, d.I.DELETE, d.I.ARROW_RIGHT]) && void 0 !== a && a.includes(s.keyCode) || h(!(0,
                    _.Z)("common.ScrollKeysEnabled") || s.keyCode !== d.I.ENTER || null !== (b = [d.rW.CHECK, d.rW.CLICK]) && void 0 !== b && b.includes(t) ? e : e[c - 1], {
                        ctrlKey: s.ctrlKey,
                        shiftKey: s.shiftKey,
                        metaKey: s.metaKey,
                        keyCode: !((0,
                        _.Z)("common.ScrollKeysEnabled") && s.keyCode === d.I.ENTER && (null === (g = [d.rW.CHECK, d.rW.CLICK]) || void 0 === g || !g.includes(t))) && s.keyCode,
                        trigger: !(0,
                        _.Z)("common.ScrollKeysEnabled") || s.keyCode !== d.I.ENTER || null !== (w = [d.rW.CHECK, d.rW.CLICK]) && void 0 !== w && w.includes(t) ? t : d.rW.CLICK,
                        mouseX: s.clientX,
                        mouseY: s.clientY,
                        targetRect: {
                            x: S,
                            y: T,
                            height: I,
                            width: E,
                            top: P,
                            left: k,
                            bottom: x,
                            right: C
                        }
                    })
                }
            }, {
                key: "handleItemClick",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.rW.CLICK
                      , r = this.state
                      , o = r.focusedValueIndex
                      , i = r.prevValueIndex;
                    e.data && ((0,
                    this.props.validClickArea)(t) && (o > 0 && -1 !== i && void 0 !== document.getElementsByClassName("ow-VirtualizedList-item-wrapper")[i] && (0,
                    _.Z)("common.ScrollKeysEnabled") && this.focusRemoval(i),
                    (0,
                    _.Z)("common.ScrollKeysEnabled") && this.setState({
                        focusedValueIndex: (null === e || void 0 === e ? void 0 : e.index) + 1,
                        prevValueIndex: null === e || void 0 === e ? void 0 : e.index
                    }),
                    this.willUpdateSelection(e, n, t)))
                }
            }, {
                key: "handleSelectItemBySwiping",
                value: function(e) {
                    this.willUpdateSelection(e, d.rW.MOBILE_SWIPE_HORIZONTAL, {})
                }
            }, {
                key: "handleCheckChange",
                value: function(e, t) {
                    var n = this.state
                      , r = n.focusedValueIndex
                      , o = n.prevValueIndex;
                    r > 0 && -1 !== o && void 0 !== document.getElementsByClassName("ow-VirtualizedList-item-wrapper")[o] && (0,
                    _.Z)("common.ScrollKeysEnabled") && this.focusRemoval(o),
                    (0,
                    _.Z)("common.ScrollKeysEnabled") && this.setState({
                        focusedValueIndex: (null === e || void 0 === e ? void 0 : e.index) + 1,
                        prevValueIndex: null === e || void 0 === e ? void 0 : e.index
                    }),
                    this.willUpdateSelection(e, d.rW.CHECK, t)
                }
            }, {
                key: "handleKeyDown",
                value: function(e, t) {
                    var n, r, o, i, a, l, s, u, c, f = e.keyCode, p = e.ctrlKey, h = e.shiftKey, y = e.metaKey, v = ((null === (n = document) || void 0 === n ? void 0 : null === (r = n.activeElement) || void 0 === r ? void 0 : null === (o = r.className) || void 0 === o ? void 0 : o.includes("ow-VirtualizedList-wrapper")) || (null === (i = document) || void 0 === i ? void 0 : null === (a = i.activeElement) || void 0 === a ? void 0 : null === (l = a.className) || void 0 === l ? void 0 : l.includes("ow-VirtualizedTable ow-mail-MailSummaryTable"))) && !(null !== (s = document.getElementsByClassName("ow-app-header-settings-link-active active")) && void 0 !== s && s[0]) && (null === (u = this.props) || void 0 === u ? void 0 : u.layout) !== (null === d.DJ || void 0 === d.DJ ? void 0 : d.DJ.ATTACHMENT_VIEW);
                    if (null !== (c = [d.I.ARROW_UP, d.I.ARROW_DOWN, d.I.ENTER, d.I.DELETE, d.I.ARROW_RIGHT]) && void 0 !== c && c.includes(f) && (0,
                    _.Z)("common.ScrollKeysEnabled")) {
                        var m, b;
                        if (null !== e && void 0 !== e && e.repeat && v)
                            return e.stopPropagation(),
                            e.preventDefault(),
                            !1;
                        1 !== (null === (m = this.props) || void 0 === m ? void 0 : null === (b = m.isComposeOpen) || void 0 === b ? void 0 : b.length) && v && (this.willUpdateSelection(t, d.rW.KEYBOARD, {
                            keyCode: f,
                            ctrlKey: p,
                            shiftKey: h,
                            metaKey: y
                        }),
                        e.preventDefault())
                    } else
                        38 !== f && 40 !== f || (this.willUpdateSelection(t, d.rW.KEYBOARD, {
                            keyCode: f,
                            ctrlKey: p,
                            shiftKey: h,
                            metaKey: y
                        }),
                        e.preventDefault())
                }
            }, {
                key: "willUpdateScrollTop",
                value: function(e) {
                    (0,
                    this.props.updatePagination)({
                        scrollTop: e
                    }, {
                        scrolling: !0
                    })
                }
            }, {
                key: "updateScrollTop",
                value: function(e) {
                    Number.isNaN(e) || this.scrollContainer && this.scrollContainer.scrollTop !== e && (this.scrollContainer.scrollTop = Math.round(e))
                }
            }, {
                key: "handleScroll",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , r = n.expanded
                      , o = n.collapsing
                      , i = t.onScrollChanged;
                    if (i && i(this.scrollContainer.scrollTop),
                    !r && !o) {
                        this.lastScroll = Date.now();
                        var a = this;
                        this.requestAnimationFrameID || (this.requestAnimationFrameID = requestAnimationFrame(function t() {
                            var n = Date.now()
                              , r = c()(a, "scrollContainer.scrollTop");
                            if (n - e.lastScroll > 100 && e.lastUpdate !== e.lastScroll && e.props.scrollTop !== r)
                                return e.willUpdateScrollTop(r),
                                void delete e.requestAnimationFrameID;
                            n - e.lastScroll > 1e3 ? delete e.requestAnimationFrameID : e.requestAnimationFrameID = requestAnimationFrame(t)
                        }))
                    }
                }
            }, {
                key: "updateCurrentStyles",
                value: function(e) {
                    if (this.transitionMotion) {
                        var t = this.transitionMotion.state;
                        t.currentStyles.forEach(function(t) {
                            t.scrollTop = e
                        }),
                        t.lastIdealStyles.forEach(function(t) {
                            t.scrollTop = e
                        }),
                        t.mergedPropsStyles.forEach(function(t) {
                            t.style.scrollTop = e
                        })
                    }
                }
            }, {
                key: "renderRowsWithAnimation",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.renderSection
                      , o = t.renderItem
                      , i = t.itemWrapperClass
                      , a = t.data
                      , l = a.sections
                      , u = a.totalHeight
                      , c = a.expandedTop
                      , f = a.collapsing
                      , p = a.expanded
                      , h = a.collapsedHeight
                      , y = a.expandedHeight
                      , v = t.scrollTop
                      , m = t.listHeight
                      , b = t.getLeaveMotionStyle
                      , g = (t.selectedInfo,
                    this.getMotionRange())
                      , w = g.start
                      , O = g.end
                      , S = this.props.data.rows;
                    return r.createElement(s.bg, {
                        ref: function(t) {
                            e.transitionMotion = t
                        },
                        styles: this.getMotionStyles(w, O),
                        defaultStyles: this.getDefaultStyles(w, O),
                        willLeave: b
                    }, function(t) {
                        var a = Math.max(0, c - v)
                          , s = Math.max(0, m - (c - v) - h);
                        return r.createElement(M, {
                            yDisabled: !e.state.expanded,
                            xDisabled: !0,
                            locked: !0,
                            hardDamp: 2,
                            transforming: p || f,
                            ref: function(t) {
                                e.swipeContainer = t && t.swipe
                            },
                            styleCount: (l && l.length + O) - w,
                            styles: t,
                            onStyle: function(t) {
                                0 !== t.length && e.updateScrollTop(t[0].style.scrollTop)
                            },
                            downHardOffset: a,
                            downOffsetEnd: a,
                            downOffsetThreshold: Math.min(50, a / 2),
                            upHardOffset: s,
                            upOffsetEnd: s,
                            upOffsetThreshold: Math.min(50, s / 2),
                            className: "ow-VirtualizedList-wrapper",
                            style: {
                                height: u
                            },
                            tabIndex: "0",
                            onKeyDown: e.handleKeyDown(S),
                            onSwiping: e.handleCollapsingExpanded,
                            onSwipeEnd: e.handleSwipeEnd
                        }, t.map(function(t, a) {
                            var l = t.key
                              , s = t.data
                              , u = t.style
                              , c = u.x
                              , v = u.y
                              , m = u.width
                              , b = void 0 === m ? "100%" : m
                              , g = u.height
                              , w = u.opacity
                              , O = u.leaving
                              , S = Math.round(g)
                              , T = void 0 !== s.value && s
                              , I = Math.round(v)
                              , E = "rgba(0,0,0,".concat(w / 1.5, ")")
                              , P = !!O || p || f
                              , k = "unset";
                            if (T && n)
                                return r.createElement("div", {
                                    role: d.HB.PRESENTATION,
                                    key: l,
                                    className: "ow-VirtualizedList-section-wrapper".concat(p ? " ow-transforming" : ""),
                                    style: {
                                        height: S,
                                        width: b,
                                        backgroundColor: P ? E : "unset",
                                        transform: "translate3d(".concat(c, "px, ").concat(I, "px, 0)"),
                                        WebkitTransform: "translate3d(".concat(c, "px, ").concat(I, "px, 0)"),
                                        zIndex: 0
                                    }
                                }, n(T));
                            var x = void 0 === s.value && s;
                            if (null !== x && void 0 !== x && x.data) {
                                if (x.expanded) {
                                    var C = void 0 === h ? 0 : Math.round(100 * (S - h) / (y - h)) / 100;
                                    if (x.motionProgress = C,
                                    e.onExpandProgress(C),
                                    f && S === h)
                                        (0,
                                        e.props.onFinishedCollapsing)();
                                    P = 0 !== C && 1 !== C,
                                    E = "transparent",
                                    k = "0 0px 10px 0px rgba(0, 0, 0, ".concat(w, ")")
                                }
                                return r.createElement("div", {
                                    key: l,
                                    id: null === x || void 0 === x ? void 0 : x.index,
                                    className: "ow-VirtualizedList-item-wrapper ".concat(i ? i(x) : ""),
                                    style: {
                                        width: b,
                                        height: S,
                                        transform: "translate3d(".concat(c, "px, ").concat(I, "px, 0)"),
                                        WebkitTransform: "translate3d(".concat(c, "px, ").concat(I, "px, 0)"),
                                        zIndex: x.expanded ? 1e4 : a
                                    }
                                }, o(x, e), P && r.createElement("div", {
                                    role: d.HB.PRESENTATION,
                                    className: "ow-shadow-top",
                                    style: {
                                        top: "-1px",
                                        left: "0px",
                                        width: "100%",
                                        height: "".concat(S + 1, "px"),
                                        position: "absolute",
                                        boxShadow: k,
                                        backgroundColor: E
                                    }
                                }))
                            }
                            return null
                        }))
                    })
                }
            }, {
                key: "renderRows",
                value: function(e, t) {
                    var n = this.props.data.rows.slice(e, t + 1);
                    return [].concat(N(this.renderItems(n)), N(this.renderSections()))
                }
            }, {
                key: "renderSections",
                value: function() {
                    var e = this.props
                      , t = e.data.sections
                      , n = e.renderSection;
                    return n && t ? t.map(function(e) {
                        var t = e.value
                          , o = e.top
                          , i = e.height
                          , a = e.width;
                        return r.createElement("div", {
                            key: "sec_".concat(t),
                            className: "ow-VirtualizedList-section-wrapper",
                            style: {
                                height: i,
                                top: o,
                                width: a,
                                zIndex: 1
                            }
                        }, n(e))
                    }) : []
                }
            }, {
                key: "renderItems",
                value: function(e) {
                    var t = this
                      , n = this.props
                      , o = n.renderItem
                      , i = n.itemWrapperClass
                      , a = n.getItemKey;
                    return e.map(function(e) {
                        var n = e.clientRect
                          , l = n.top
                          , s = n.left
                          , u = n.height
                          , c = n.width
                          , f = 0;
                        return r.createElement("div", {
                            role: d.HB.PRESENTATION,
                            id: null === e || void 0 === e ? void 0 : e.index,
                            key: "".concat(a(e)),
                            className: "ow-VirtualizedList-item-wrapper ".concat(i ? i(e) : ""),
                            style: {
                                height: u,
                                width: void 0 === c ? "100%" : c,
                                top: l,
                                left: s
                            },
                            onClick: function(n) {
                                e.data && !e.data.uid || (f += 1,
                                n.persist(),
                                2 === f && (0,
                                _.Z)("mail.compose.detachWindow") && (clearTimeout(t.timer),
                                f = 0,
                                t.handleItemClick(e, n, d.rW.DBCLICK),
                                n.stopPropagation()),
                                clearTimeout(t.timer),
                                t.timer = setTimeout(function() {
                                    1 === f && (t.handleItemClick(e, n),
                                    n.stopPropagation()),
                                    f = 0
                                }, 400))
                            }
                        }, o(e, t))
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.animation
                      , o = t.className
                      , i = t.listHeight
                      , a = t.listWidth
                      , s = t.data.totalHeight
                      , u = t.visibleStartIndex
                      , c = t.visibleEndIndex
                      , f = t.children
                      , p = t.location;
                    this.renderedStart = u,
                    this.renderedEnd = c;
                    var h = p && p.pathname.indexOf("settings") > 0 ? "ow-VirtualizedList-cleanup-container" : "ow-VirtualizedList-container"
                      , y = H.UhU.isMobile;
                    return r.createElement("div", {
                        className: l()("ow-VirtualizedList", o, this.state.expanded ? "ow-VirtualizedList-expanded" : "")
                    }, f, r.createElement("div", {
                        className: h,
                        style: {
                            height: i,
                            width: a,
                            overflowY: this.state.expanded ? "hidden" : "auto",
                            overflowX: !this.state.expanded || y ? "hidden" : "auto"
                        },
                        ref: function(t) {
                            e.scrollContainer = t
                        },
                        onScroll: this.handleScroll,
                        onTouchMove: this.swipeOnTouch
                    }, n ? this.renderRowsWithAnimation(u, c) : r.createElement("div", {
                        role: d.HB.PRESENTATION,
                        className: "ow-VirtualizedList-wrapper",
                        style: {
                            height: s
                        },
                        onKeyDown: this.handleKeyDown
                    }, this.renderRows(u, c))))
                }
            }]),
            n
        }();
        Z.defaultProps = {
            animation: !1,
            data: {},
            renderItem: function() {},
            getItemKey: function(e) {
                var t = e.index;
                return "iw_".concat(t)
            },
            renderSection: null,
            children: null,
            className: "",
            listHeight: 0,
            listWidth: void 0,
            updatePagination: function() {},
            scrollTop: 0,
            visibleStartIndex: 0,
            visibleEndIndex: 0,
            viewportStartIndex: 0,
            viewportEndIndex: 0,
            shouldComponentUpdateOverwrite: function() {},
            onSelectChange: function() {},
            itemWrapperClass: void 0,
            validClickArea: function() {
                return !0
            },
            onFinishedCollapsing: function() {},
            getLeaveMotionStyle: function() {},
            getDefaultStyles: function() {},
            getMotionStyles: function() {},
            onBeginCollapsing: function() {},
            onScrollChanged: void 0,
            selectedInfo: [],
            onTouchMoveCallback: function() {}
        },
        Z.propTypes = {
            animation: i().bool,
            data: i().shape({
                rows: i().arrayOf(i().object),
                sections: i().arrayOf(i().object),
                totalHeight: i().number,
                itemTotalCount: i().number
            }),
            children: i().oneOfType([i().element, i().arrayOf(i().element)]),
            getItemKey: i().func,
            renderItem: i().func,
            renderSection: i().func,
            listHeight: i().oneOfType([i().number, i().string]),
            listWidth: i().number,
            className: i().string,
            updatePagination: i().func,
            scrollTop: i().number,
            visibleStartIndex: i().number,
            visibleEndIndex: i().number,
            viewportStartIndex: i().number,
            viewportEndIndex: i().number,
            shouldComponentUpdateOverwrite: i().func,
            onSelectChange: i().func,
            itemWrapperClass: i().func,
            validClickArea: i().func,
            onFinishedCollapsing: i().func,
            getLeaveMotionStyle: i().func,
            getDefaultStyles: i().func,
            getMotionStyles: i().func,
            onBeginCollapsing: i().func,
            onScrollChanged: i().func,
            onTouchMoveCallback: i().func,
            selectedInfo: i().arrayOf(i().oneOfType([i().number, i().string]))
        };
        var J = Z
    },
    9631: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return T
            }
        });
        var r = n(87401)
          , o = n(23398)
          , i = n.n(o)
          , a = n(70293)
          , l = n.n(a)
          , s = n(38868)
          , u = n.n(s)
          , c = (n(39940),
        n(84987))
          , d = n(90656)
          , f = n(29610)
          , p = n(21453)
          , h = n(19745)
          , y = n.n(h)
          , v = n(94165);
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
        function b(e, t) {
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
        function w(e, t) {
            return (w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    if (t && ("object" === m(t) || "function" == typeof t))
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
                t && w(e, t)
            }(n, r.Component);
            var t = O(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && b(e.prototype, t),
                n && b(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.id
                      , o = t.message
                      , i = t.autoforwardAddress
                      , a = t.addressEnabled;
                    return (0,
                    f.j)("SN", "security_notification_show", {
                        record: ["show_notification", !0]
                    }),
                    r.createElement(r.Fragment, null, r.createElement("div", {
                        id: "ow-notification-".concat(n),
                        className: "ow-security-notification"
                    }, r.createElement(u(), null, o && r.createElement(l(), {
                        lg: "11",
                        md: "11"
                    }, " ", r.createElement("b", null, (0,
                    d.WU)((0,
                    c.t)("mail.securityNotification.".concat(o.toUpperCase(), ".").concat(a)), i), r.createElement(p.Z, {
                        location: location,
                        to: "mail.vacationMessage.save" === o ? "/settings#autoReply" : "mail.filter.save" === o ? "/settings#mailRules" : "/settings#autoForward",
                        className: "mail.vacationMessage.save" === o ? "ow-autoReply-banner-link" : "mail.filter.save" === o ? "ow-ruleFilter-banner-link" : "ow-forward-banner-link",
                        role: v.HB.NAVIGATION,
                        tabIndex: -1,
                        onClick: function() {
                            var t;
                            null === (t = e.props) || void 0 === t || t.closeToast()
                        }
                    }, r.createElement(y(), null, r.createElement("a", {
                        hfer: "javascript:void(0)",
                        className: "ow-security-notification-link"
                    }, " ", (0,
                    d.WU)((0,
                    c.t)("mail.securityNotification.".concat(o.toUpperCase(), ".LINK"))), " "))))), r.createElement(l(), {
                        lg: "1",
                        md: "1"
                    }, " ", r.createElement("button", {
                        className: "ow-security-notification-close-button",
                        type: "button",
                        "aria-label": "close",
                        onClick: function() {
                            (0,
                            f.j)("SN", "security_notification_close", {
                                record: ["show_notification", !0]
                            }),
                            e.props.closeToast()
                        }
                    }, "✖"), " "))))
                }
            }]),
            n
        }();
        T.defaultProps = {
            id: "",
            closeToast: function() {},
            autoforwardAddress: "",
            message: "",
            addressEnabled: ""
        },
        T.propTypes = {
            id: i().string,
            closeToast: i().func,
            autoforwardAddress: i().string,
            message: i().string,
            addressEnabled: i().string
        }
    },
    88422: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return r
            }
        });
        var r = function(e) {
            return e.auth
        }
    }
}]);
