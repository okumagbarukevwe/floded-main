/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[853], {
    90473: function(e, t, n) {
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(67064)
          , c = n.n(i)
          , u = n(77545)
          , s = n(12079)
          , l = n(84987)
          , f = n(94165);
        function d(e) {
            "@babel/helpers - typeof";
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function h(e, t) {
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
                if ("object" !== d(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== d(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === d(t) ? t : String(t)
        }
        function p(e, t) {
            return (p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function m(e) {
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
                var n, r = g(e);
                if (t) {
                    var a = g(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === d(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return y(e)
                }(this, n)
            }
        }
        function y(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function g(e) {
            return (g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                t && p(e, t)
            }(n, r.PureComponent);
            var t = m(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).handleOnClickAvatar = r.handleOnClickAvatar.bind(y(r)),
                r
            }
            return function(e, t, n) {
                t && h(e.prototype, t),
                n && h(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleOnClickAvatar",
                value: function() {
                    this.props.editBtnDisplayed && this.uploadFieldRef.handleClick()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.imgSrc
                      , a = t.editBtnDisplayed
                      , o = t.hasPhoto
                      , i = t.acceptFileTypes
                      , d = t.changeBtnText
                      , h = t.changeBtnTip
                      , v = t.deleteBtnText
                      , p = t.deleteBtnTip
                      , m = t.onChange
                      , y = t.onDelete;
                    return r.createElement("div", {
                        className: "ow-Avatar"
                    }, r.createElement("div", {
                        role: f.HB.PRESENTATION,
                        className: c()("ow-Avatar-imgContainer", a ? "ow-Avatar-imgContainer-pointer" : ""),
                        onClick: this.handleOnClickAvatar,
                        tabIndex: a ? 0 : -1,
                        "aria-label": (0,
                        l.t)("aria.label.AVATAR_IMG"),
                        onKeyDown: function(t) {
                            return t.key === f.BY.ENTERKEY && e.handleOnClickAvatar()
                        }
                    }, o && n ? r.createElement("img", {
                        alt: "",
                        src: n,
                        className: "ow-Avatar-img"
                    }) : r.createElement("span", {
                        className: "ow-Avatar-img-default"
                    })), a ? r.createElement("div", {
                        className: "ow-Avatar-btnContainer"
                    }, r.createElement(s.Z, {
                        ref: function(t) {
                            e.uploadFieldRef = t
                        },
                        clearAfterSelected: !0,
                        accept: i,
                        onChange: m
                    }, r.createElement(u.Z, {
                        className: "ow-Avatar-editBtn",
                        iconName: "ico-upload",
                        role: f.HB.BUTTON,
                        "aria-label": h || d,
                        title: h || d,
                        onClick: function(e) {
                            return e.preventDefault()
                        }
                    }, (0,
                    l.t)("contacts.editPanel.UPLOAD_PHOTO"))), o ? r.createElement("div", null, r.createElement(u.Z, {
                        className: "ow-Avatar-deleteBtn",
                        iconName: "trash",
                        role: f.HB.BUTTON,
                        "aria-label": p || v,
                        title: p || v,
                        onClick: y
                    })) : void 0) : void 0)
                }
            }]),
            n
        }();
        b.defaultProps = {
            imgSrc: "",
            acceptFileTypes: "image/pjpeg,image/jpeg,image/x-png,image/png,image/gif",
            hasPhoto: !1,
            editBtnDisplayed: !1,
            changeBtnText: "",
            changeBtnTip: "",
            deleteBtnText: "",
            deleteBtnTip: "",
            onChange: function() {},
            onDelete: function() {}
        },
        b.propTypes = {
            imgSrc: o().string,
            hasPhoto: o().bool,
            acceptFileTypes: o().string,
            editBtnDisplayed: o().bool,
            changeBtnText: o().string,
            changeBtnTip: o().string,
            deleteBtnText: o().string,
            deleteBtnTip: o().string,
            onChange: o().func,
            onDelete: o().func
        },
        t.Z = b
    },
    87492: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return Ne
            }
        });
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a);
        function i(e) {
            "@babel/helpers - typeof";
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c() {
            return (c = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function u(e, t) {
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
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach(function(t) {
                    l(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function l(e, t, n) {
            return (t = d(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function f(e, t) {
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
                if ("object" !== i(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== i(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === i(t) ? t : String(t)
        }
        function h(e, t) {
            return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, r = m(e);
                if (t) {
                    var a = m(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === i(t) || "function" == typeof t))
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
        var y = {
            down: "onMouseDown",
            move: "onMouseMove",
            up: "onMouseUp"
        }
          , g = {
            down: "mousedown",
            move: "mousemove",
            up: "mouseup"
        }
          , b = function(e) {
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
                t && h(e, t)
            }(n, r.Component);
            var t = v(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    drag: !1,
                    my: null,
                    mx: null,
                    image: {
                        x: 0,
                        y: 0
                    }
                },
                r.handleMouseDown = r.handleMouseDown.bind(p(r)),
                r.handleMouseMove = r.handleMouseMove.bind(p(r)),
                r.handleMouseUp = r.handleMouseUp.bind(p(r)),
                r.handleImageReady = r.handleImageReady.bind(p(r)),
                r
            }
            return function(e, t, n) {
                t && f(e.prototype, t),
                n && f(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.canvas.getContext("2d");
                    if (this.props.image && this.loadImage(this.props.image),
                    this.paint(e),
                    document) {
                        var t = g;
                        document.addEventListener(t.move, this.handleMouseMove, !1),
                        document.addEventListener(t.up, this.handleMouseUp, !1)
                    }
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.props.scale === e.scale && this.props.height === e.height && this.props.width === e.width && this.props.border === e.border || this.squeeze(e)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this.canvas.getContext("2d");
                    e.clearRect(0, 0, this.getDimensions().canvas.width, this.getDimensions().canvas.height),
                    this.paint(e),
                    this.paintImage(e, this.state.image, this.props.border)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    if (document) {
                        var e = g;
                        document.removeEventListener(e.move, this.handleMouseMove, !1),
                        document.removeEventListener(e.up, this.handleMouseUp, !1)
                    }
                }
            }, {
                key: "getDimensions",
                value: function() {
                    var e = this.props
                      , t = e.width
                      , n = e.height
                      , r = e.border;
                    return {
                        width: t,
                        height: n,
                        border: r,
                        canvas: {
                            width: t + 2 * r[1],
                            height: n + 2 * r[0]
                        }
                    }
                }
            }, {
                key: "getImage",
                value: function() {
                    var e = this.getCroppingRect()
                      , t = this.state.image;
                    e.x *= t.resource.width,
                    e.y *= t.resource.height,
                    e.width *= t.resource.width,
                    e.height *= t.resource.height;
                    var n = document.createElement("canvas");
                    return n.width = e.width,
                    n.height = e.height,
                    n.getContext("2d").drawImage(t.resource, -e.x, -e.y),
                    n
                }
            }, {
                key: "getCroppingRect",
                value: function() {
                    var e = this.getDimensions()
                      , t = e.border[1]
                      , n = e.border[0]
                      , r = e.width
                      , a = e.height
                      , o = this.calculatePosition(this.state.image, e.border);
                    return {
                        x: (t - o.x) / o.width,
                        y: (n - o.y) / o.height,
                        width: r / o.width,
                        height: a / o.height
                    }
                }
            }, {
                key: "getInitialSize",
                value: function(e, t) {
                    var n, r, a = this.getDimensions();
                    return a.height / a.width > t / e ? r = e * ((n = this.getDimensions().height) / t) : n = t * ((r = this.getDimensions().width) / e),
                    {
                        height: n,
                        width: r
                    }
                }
            }, {
                key: "getBoundedX",
                value: function(e, t) {
                    var n = this.state.image
                      , r = this.getDimensions()
                      , a = Math.floor((n.width - r.width / t) / 2);
                    return a = Math.max(0, a),
                    Math.max(-a, Math.min(e, a))
                }
            }, {
                key: "getBoundedY",
                value: function(e, t) {
                    var n = this.state.image
                      , r = this.getDimensions()
                      , a = Math.floor((n.height - r.height / t) / 2);
                    return a = Math.max(0, a),
                    Math.max(-a, Math.min(e, a))
                }
            }, {
                key: "isDataURL",
                value: function(e) {
                    return !!e.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+=[a-z\-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@\/?%\s]*\s*$/i)
                }
            }, {
                key: "loadImage",
                value: function(e) {
                    var t = new window.Image;
                    t.onload = this.handleImageReady.bind(this, t),
                    t.onerror = this.props.onLoadFailure,
                    this.isDataURL(e) || (t.crossOrigin = "anonymous"),
                    t.src = e
                }
            }, {
                key: "handleImageReady",
                value: function(e) {
                    var t = this.getInitialSize(e.width, e.height);
                    t.resource = e,
                    t.x = 0,
                    t.y = 0,
                    this.setState({
                        drag: !1,
                        image: t
                    }, this.props.onImageReady),
                    this.props.onLoadSuccess(t)
                }
            }, {
                key: "handleMouseDown",
                value: function(e) {
                    (e = e || window.event).preventDefault(),
                    this.setState({
                        drag: !0,
                        mx: null,
                        my: null
                    })
                }
            }, {
                key: "handleMouseUp",
                value: function() {
                    this.state.drag && (this.setState({
                        drag: !1
                    }),
                    this.props.onMouseUp())
                }
            }, {
                key: "handleMouseMove",
                value: function(e) {
                    if (e = e || window.event,
                    !1 !== this.state.drag) {
                        var t = this.state.image
                          , n = t.x
                          , r = t.y
                          , a = e.targetTouches ? e.targetTouches[0].pageX : e.clientX
                          , o = e.targetTouches ? e.targetTouches[0].pageY : e.clientY
                          , i = {
                            mx: a,
                            my: o,
                            image: t
                        };
                        if (this.state.mx && this.state.my) {
                            var c = (this.state.mx - a) / this.props.scale
                              , u = (this.state.my - o) / this.props.scale;
                            t.y = this.getBoundedY(r - u, this.props.scale),
                            t.x = this.getBoundedX(n - c, this.props.scale)
                        }
                        this.setState(i),
                        this.props.onMouseMove()
                    }
                }
            }, {
                key: "squeeze",
                value: function(e) {
                    var t = this.state.image;
                    t.y = this.getBoundedY(t.y, e.scale),
                    t.x = this.getBoundedX(t.x, e.scale),
                    this.setState({
                        image: t
                    })
                }
            }, {
                key: "paintImage",
                value: function(e, t, n) {
                    if (t.resource) {
                        var r = this.calculatePosition(t, n);
                        e.save(),
                        e.globalCompositeOperation = "destination-over",
                        e.drawImage(t.resource, r.x, r.y, r.width, r.height),
                        e.restore()
                    }
                }
            }, {
                key: "calculatePosition",
                value: function(e, t) {
                    e = e || this.state.image;
                    var n = this.getDimensions()
                      , r = e.width * this.props.scale
                      , a = e.height * this.props.scale
                      , o = (r - n.width) / 2
                      , i = (a - n.height) / 2;
                    return {
                        x: e.x * this.props.scale - o + t[1],
                        y: e.y * this.props.scale - i + t[0],
                        height: a,
                        width: r
                    }
                }
            }, {
                key: "paint",
                value: function(e) {
                    e.save(),
                    e.translate(0, 0),
                    e.fillStyle = "rgba(" + this.props.color.slice(0, 4).join(",") + ")";
                    var t = this.getDimensions()
                      , n = t.border
                      , r = t.canvas.height
                      , a = t.canvas.width;
                    e.beginPath(),
                    e.rect(n[1], n[0], a - 2 * n[1], r - 2 * n[0]),
                    e.rect(a, 0, -a, r),
                    e.fill("evenodd"),
                    e.restore()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = {
                        cursor: this.state.drag ? "grabbing" : "grab"
                    }
                      , n = {
                        width: this.getDimensions().canvas.width,
                        height: this.getDimensions().canvas.height,
                        style: s(s(s({}, t), this.props.style), {}, {
                            width: "100%",
                            height: "100%"
                        })
                    };
                    return n[y.down] = this.handleMouseDown,
                    r.createElement("canvas", c({
                        ref: function(t) {
                            e.canvas = t
                        }
                    }, n))
                }
            }]),
            n
        }();
        b.defaultProps = {
            scale: 1,
            image: "",
            border: [37, 220],
            width: 320,
            height: 320,
            color: [255, 255, 255, .6],
            style: {},
            onLoadFailure: function() {},
            onLoadSuccess: function() {},
            onImageReady: function() {},
            onMouseUp: function() {},
            onMouseMove: function() {}
        },
        b.propTypes = {
            scale: o().number,
            image: o().string,
            border: o().arrayOf(o().number),
            width: o().number,
            height: o().number,
            color: o().arrayOf(o().number),
            style: o().shape({}),
            onLoadFailure: o().func,
            onLoadSuccess: o().func,
            onImageReady: o().func,
            onMouseUp: o().func,
            onMouseMove: o().func
        };
        var E = b
          , O = n(98401)
          , S = n(1413)
          , w = n(4942)
          , C = n(93433)
          , P = n(29439)
          , M = n(71002)
          , A = n(67064)
          , T = n.n(A);
        function N(e) {
            var t = r.useRef();
            return t.current = e,
            r.useCallback(function() {
                for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                    r[a] = arguments[a];
                return null === (e = t.current) || void 0 === e ? void 0 : e.call.apply(e, [t].concat(r))
            }, [])
        }
        var k = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect
          , x = function(e, t) {
            var n = r.useRef(!0);
            k(function() {
                return e(n.current)
            }, t),
            k(function() {
                return n.current = !1,
                function() {
                    n.current = !0
                }
            }, [])
        }
          , R = function(e, t) {
            x(function(t) {
                if (!t)
                    return e()
            }, t)
        };
        function I(e) {
            var t = r.useRef(!1)
              , n = r.useState(e)
              , a = (0,
            P.Z)(n, 2)
              , o = a[0]
              , i = a[1];
            return r.useEffect(function() {
                return t.current = !1,
                function() {
                    t.current = !0
                }
            }, []),
            [o, function(e, n) {
                n && t.current || i(e)
            }
            ]
        }
        function j(e) {
            return void 0 !== e
        }
        var _ = {}
          , D = [];
        function U(e, t) {}
        function Z(e, t) {}
        function B(e, t, n) {
            t || _[n] || (e(!1, n),
            _[n] = !0)
        }
        function L(e, t) {
            B(U, e, t)
        }
        L.preMessage = function(e) {
            D.push(e)
        }
        ,
        L.resetWarned = function() {
            _ = {}
        }
        ,
        L.noteOnce = function(e, t) {
            B(Z, e, t)
        }
        ;
        var F = L;
        var H = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , r = new Set;
            return function e(t, a) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                  , i = r.has(t);
                if (F(!i, "Warning: There may be circular references"),
                i)
                    return !1;
                if (t === a)
                    return !0;
                if (n && o > 1)
                    return !1;
                r.add(t);
                var c = o + 1;
                if (Array.isArray(t)) {
                    if (!Array.isArray(a) || t.length !== a.length)
                        return !1;
                    for (var u = 0; u < t.length; u++)
                        if (!e(t[u], a[u], c))
                            return !1;
                    return !0
                }
                if (t && a && "object" === (0,
                M.Z)(t) && "object" === (0,
                M.Z)(a)) {
                    var s = Object.keys(t);
                    return s.length === Object.keys(a).length && s.every(function(n) {
                        return e(t[n], a[n], c)
                    })
                }
                return !1
            }(e, t)
        }
          , K = r.createContext({
            min: 0,
            max: 0,
            direction: "ltr",
            step: 1,
            includedStart: 0,
            includedEnd: 0,
            tabIndex: 0,
            keyboard: !0,
            styles: {},
            classNames: {}
        })
          , G = n(87462)
          , Y = n(45987)
          , W = {
            MAC_ENTER: 3,
            BACKSPACE: 8,
            TAB: 9,
            NUM_CENTER: 12,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAUSE: 19,
            CAPS_LOCK: 20,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PRINT_SCREEN: 44,
            INSERT: 45,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            QUESTION_MARK: 63,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            META: 91,
            WIN_KEY_RIGHT: 92,
            CONTEXT_MENU: 93,
            NUM_ZERO: 96,
            NUM_ONE: 97,
            NUM_TWO: 98,
            NUM_THREE: 99,
            NUM_FOUR: 100,
            NUM_FIVE: 101,
            NUM_SIX: 102,
            NUM_SEVEN: 103,
            NUM_EIGHT: 104,
            NUM_NINE: 105,
            NUM_MULTIPLY: 106,
            NUM_PLUS: 107,
            NUM_MINUS: 109,
            NUM_PERIOD: 110,
            NUM_DIVISION: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            NUMLOCK: 144,
            SEMICOLON: 186,
            DASH: 189,
            EQUALS: 187,
            COMMA: 188,
            PERIOD: 190,
            SLASH: 191,
            APOSTROPHE: 192,
            SINGLE_QUOTE: 222,
            OPEN_SQUARE_BRACKET: 219,
            BACKSLASH: 220,
            CLOSE_SQUARE_BRACKET: 221,
            WIN_KEY: 224,
            MAC_FF_META: 224,
            WIN_IME: 229,
            isTextModifyingKeyEvent: function(e) {
                var t = e.keyCode;
                if (e.altKey && !e.ctrlKey || e.metaKey || t >= W.F1 && t <= W.F12)
                    return !1;
                switch (t) {
                case W.ALT:
                case W.CAPS_LOCK:
                case W.CONTEXT_MENU:
                case W.CTRL:
                case W.DOWN:
                case W.END:
                case W.ESC:
                case W.HOME:
                case W.INSERT:
                case W.LEFT:
                case W.MAC_FF_META:
                case W.META:
                case W.NUMLOCK:
                case W.NUM_CENTER:
                case W.PAGE_DOWN:
                case W.PAGE_UP:
                case W.PAUSE:
                case W.PRINT_SCREEN:
                case W.RIGHT:
                case W.SHIFT:
                case W.UP:
                case W.WIN_KEY:
                case W.WIN_KEY_RIGHT:
                    return !1;
                default:
                    return !0
                }
            },
            isCharacterKey: function(e) {
                if (e >= W.ZERO && e <= W.NINE)
                    return !0;
                if (e >= W.NUM_ZERO && e <= W.NUM_MULTIPLY)
                    return !0;
                if (e >= W.A && e <= W.Z)
                    return !0;
                if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
                    return !0;
                switch (e) {
                case W.SPACE:
                case W.QUESTION_MARK:
                case W.NUM_PLUS:
                case W.NUM_MINUS:
                case W.NUM_PERIOD:
                case W.NUM_DIVISION:
                case W.SEMICOLON:
                case W.DASH:
                case W.EQUALS:
                case W.COMMA:
                case W.PERIOD:
                case W.SLASH:
                case W.APOSTROPHE:
                case W.SINGLE_QUOTE:
                case W.OPEN_SQUARE_BRACKET:
                case W.BACKSLASH:
                case W.CLOSE_SQUARE_BRACKET:
                    return !0;
                default:
                    return !1
                }
            }
        }
          , V = W;
        function X(e, t, n) {
            return (e - t) / (n - t)
        }
        function z(e, t, n, r) {
            var a = X(t, n, r)
              , o = {};
            switch (e) {
            case "rtl":
                o.right = "".concat(100 * a, "%"),
                o.transform = "translateX(50%)";
                break;
            case "btt":
                o.bottom = "".concat(100 * a, "%"),
                o.transform = "translateY(50%)";
                break;
            case "ttb":
                o.top = "".concat(100 * a, "%"),
                o.transform = "translateY(-50%)";
                break;
            default:
                o.left = "".concat(100 * a, "%"),
                o.transform = "translateX(-50%)"
            }
            return o
        }
        function Q(e, t) {
            return Array.isArray(e) ? e[t] : e
        }
        var $ = ["prefixCls", "value", "valueIndex", "onStartMove", "style", "render", "dragging", "onOffsetChange"];
        var q = r.forwardRef(function(e, t) {
            var n, a, o = e.prefixCls, i = e.value, c = e.valueIndex, u = e.onStartMove, s = e.style, l = e.render, f = e.dragging, d = e.onOffsetChange, h = (0,
            Y.Z)(e, $), v = r.useContext(K), p = v.min, m = v.max, y = v.direction, g = v.disabled, b = v.keyboard, E = v.range, O = v.tabIndex, C = v.ariaLabelForHandle, P = v.ariaLabelledByForHandle, M = v.ariaValueTextFormatterForHandle, A = v.styles, N = v.classNames, k = "".concat(o, "-handle"), x = function(e) {
                g || u(e, c)
            }, R = z(y, i, p, m), I = r.createElement("div", (0,
            G.Z)({
                ref: t,
                className: T()(k, (n = {},
                (0,
                w.Z)(n, "".concat(k, "-").concat(c + 1), E),
                (0,
                w.Z)(n, "".concat(k, "-dragging"), f),
                n), N.handle),
                style: (0,
                S.Z)((0,
                S.Z)((0,
                S.Z)({}, R), s), A.handle),
                onMouseDown: x,
                onTouchStart: x,
                onKeyDown: function(e) {
                    if (!g && b) {
                        var t = null;
                        switch (e.which || e.keyCode) {
                        case V.LEFT:
                            t = "ltr" === y || "btt" === y ? -1 : 1;
                            break;
                        case V.RIGHT:
                            t = "ltr" === y || "btt" === y ? 1 : -1;
                            break;
                        case V.UP:
                            t = "ttb" !== y ? 1 : -1;
                            break;
                        case V.DOWN:
                            t = "ttb" !== y ? -1 : 1;
                            break;
                        case V.HOME:
                            t = "min";
                            break;
                        case V.END:
                            t = "max";
                            break;
                        case V.PAGE_UP:
                            t = 2;
                            break;
                        case V.PAGE_DOWN:
                            t = -2
                        }
                        null !== t && (e.preventDefault(),
                        d(t, c))
                    }
                },
                tabIndex: g ? null : Q(O, c),
                role: "slider",
                "aria-valuemin": p,
                "aria-valuemax": m,
                "aria-valuenow": i,
                "aria-disabled": g,
                "aria-label": Q(C, c),
                "aria-labelledby": Q(P, c),
                "aria-valuetext": null === (a = Q(M, c)) || void 0 === a ? void 0 : a(i),
                "aria-orientation": "ltr" === y || "rtl" === y ? "horizontal" : "vertical"
            }, h));
            return l && (I = l(I, {
                index: c,
                prefixCls: o,
                value: i,
                dragging: f
            })),
            I
        })
          , J = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"];
        var ee = r.forwardRef(function(e, t) {
            var n = e.prefixCls
              , a = e.style
              , o = e.onStartMove
              , i = e.onOffsetChange
              , c = e.values
              , u = e.handleRender
              , s = e.draggingIndex
              , l = (0,
            Y.Z)(e, J)
              , f = r.useRef({});
            return r.useImperativeHandle(t, function() {
                return {
                    focus: function(e) {
                        var t;
                        null === (t = f.current[e]) || void 0 === t || t.focus()
                    }
                }
            }),
            r.createElement(r.Fragment, null, c.map(function(e, t) {
                return r.createElement(q, (0,
                G.Z)({
                    ref: function(e) {
                        e ? f.current[t] = e : delete f.current[t]
                    },
                    dragging: s === t,
                    prefixCls: n,
                    style: Q(a, t),
                    key: t,
                    value: e,
                    valueIndex: t,
                    onStartMove: o,
                    onOffsetChange: i,
                    render: u
                }, l))
            }))
        });
        function te(e) {
            var t = "touches"in e ? e.touches[0] : e;
            return {
                pageX: t.pageX,
                pageY: t.pageY
            }
        }
        function ne(e) {
            var t = e.prefixCls
              , n = e.style
              , a = e.children
              , o = e.value
              , i = e.onClick
              , c = r.useContext(K)
              , u = c.min
              , s = c.max
              , l = c.direction
              , f = c.includedStart
              , d = c.includedEnd
              , h = c.included
              , v = "".concat(t, "-text")
              , p = z(l, o, u, s);
            return r.createElement("span", {
                className: T()(v, (0,
                w.Z)({}, "".concat(v, "-active"), h && f <= o && o <= d)),
                style: (0,
                S.Z)((0,
                S.Z)({}, p), n),
                onMouseDown: function(e) {
                    e.stopPropagation()
                },
                onClick: function() {
                    i(o)
                }
            }, a)
        }
        function re(e) {
            var t = e.prefixCls
              , n = e.marks
              , a = e.onClick
              , o = "".concat(t, "-mark");
            return n.length ? r.createElement("div", {
                className: o
            }, n.map(function(e) {
                var t = e.value
                  , n = e.style
                  , i = e.label;
                return r.createElement(ne, {
                    key: t,
                    prefixCls: o,
                    style: n,
                    value: t,
                    onClick: a
                }, i)
            })) : null
        }
        function ae(e) {
            var t = e.prefixCls
              , n = e.value
              , a = e.style
              , o = e.activeStyle
              , i = r.useContext(K)
              , c = i.min
              , u = i.max
              , s = i.direction
              , l = i.included
              , f = i.includedStart
              , d = i.includedEnd
              , h = "".concat(t, "-dot")
              , v = l && f <= n && n <= d
              , p = (0,
            S.Z)((0,
            S.Z)({}, z(s, n, c, u)), "function" == typeof a ? a(n) : a);
            return v && (p = (0,
            S.Z)((0,
            S.Z)({}, p), "function" == typeof o ? o(n) : o)),
            r.createElement("span", {
                className: T()(h, (0,
                w.Z)({}, "".concat(h, "-active"), v)),
                style: p
            })
        }
        function oe(e) {
            var t = e.prefixCls
              , n = e.marks
              , a = e.dots
              , o = e.style
              , i = e.activeStyle
              , c = r.useContext(K)
              , u = c.min
              , s = c.max
              , l = c.step
              , f = r.useMemo(function() {
                var e = new Set;
                if (n.forEach(function(t) {
                    e.add(t.value)
                }),
                a && null !== l)
                    for (var t = u; t <= s; )
                        e.add(t),
                        t += l;
                return Array.from(e)
            }, [u, s, l, a, n]);
            return r.createElement("div", {
                className: "".concat(t, "-step")
            }, f.map(function(e) {
                return r.createElement(ae, {
                    prefixCls: t,
                    key: e,
                    value: e,
                    style: o,
                    activeStyle: i
                })
            }))
        }
        function ie(e) {
            var t, n = e.prefixCls, a = e.style, o = e.start, i = e.end, c = e.index, u = e.onStartMove, s = e.replaceCls, l = r.useContext(K), f = l.direction, d = l.min, h = l.max, v = l.disabled, p = l.range, m = l.classNames, y = "".concat(n, "-track"), g = X(o, d, h), b = X(i, d, h), E = function(e) {
                !v && u && u(e, -1)
            }, O = {};
            switch (f) {
            case "rtl":
                O.right = "".concat(100 * g, "%"),
                O.width = "".concat(100 * b - 100 * g, "%");
                break;
            case "btt":
                O.bottom = "".concat(100 * g, "%"),
                O.height = "".concat(100 * b - 100 * g, "%");
                break;
            case "ttb":
                O.top = "".concat(100 * g, "%"),
                O.height = "".concat(100 * b - 100 * g, "%");
                break;
            default:
                O.left = "".concat(100 * g, "%"),
                O.width = "".concat(100 * b - 100 * g, "%")
            }
            var C = s || T()(y, (t = {},
            (0,
            w.Z)(t, "".concat(y, "-").concat(c + 1), null !== c && p),
            (0,
            w.Z)(t, "".concat(n, "-track-draggable"), u),
            t), m.track);
            return r.createElement("div", {
                className: C,
                style: (0,
                S.Z)((0,
                S.Z)({}, O), a),
                onMouseDown: E,
                onTouchStart: E
            })
        }
        function ce(e) {
            var t = e.prefixCls
              , n = e.style
              , a = e.values
              , o = e.startPoint
              , i = e.onStartMove
              , c = r.useContext(K)
              , u = c.included
              , s = c.range
              , l = c.min
              , f = c.styles
              , d = c.classNames
              , h = r.useMemo(function() {
                if (!s) {
                    if (0 === a.length)
                        return [];
                    var e = null !== o && void 0 !== o ? o : l
                      , t = a[0];
                    return [{
                        start: Math.min(e, t),
                        end: Math.max(e, t)
                    }]
                }
                for (var n = [], r = 0; r < a.length - 1; r += 1)
                    n.push({
                        start: a[r],
                        end: a[r + 1]
                    });
                return n
            }, [a, s, o, l])
              , v = null;
            return (d.tracks || f.tracks) && (v = r.createElement(ie, {
                index: null,
                prefixCls: t,
                start: h[0].start,
                end: h[h.length - 1].end,
                replaceCls: T()(d.tracks, "".concat(t, "-tracks")),
                style: f.tracks
            })),
            u ? r.createElement(r.Fragment, null, v, h.map(function(e, a) {
                var o = e.start
                  , c = e.end;
                return r.createElement(ie, {
                    index: a,
                    prefixCls: t,
                    style: (0,
                    S.Z)((0,
                    S.Z)({}, Q(n, a)), f.track),
                    start: o,
                    end: c,
                    key: a,
                    onStartMove: i
                })
            })) : null
        }
        var ue = r.forwardRef(function(e, t) {
            var n, a = e.prefixCls, o = void 0 === a ? "rc-slider" : a, i = e.className, c = e.style, u = e.classNames, s = e.styles, l = e.disabled, f = void 0 !== l && l, d = e.keyboard, h = void 0 === d || d, v = e.autoFocus, p = e.onFocus, m = e.onBlur, y = e.min, g = void 0 === y ? 0 : y, b = e.max, E = void 0 === b ? 100 : b, O = e.step, A = void 0 === O ? 1 : O, k = e.value, x = e.defaultValue, _ = e.range, D = e.count, U = e.onChange, Z = e.onBeforeChange, B = e.onAfterChange, L = e.allowCross, F = void 0 === L || L, G = e.pushable, Y = void 0 !== G && G, W = e.draggableTrack, V = e.reverse, X = e.vertical, z = e.included, Q = void 0 === z || z, $ = e.startPoint, q = e.trackStyle, J = e.handleStyle, ne = e.railStyle, ae = e.dotStyle, ie = e.activeDotStyle, ue = e.marks, se = e.dots, le = e.handleRender, fe = e.tabIndex, de = void 0 === fe ? 0 : fe, he = e.ariaLabelForHandle, ve = e.ariaLabelledByForHandle, pe = e.ariaValueTextFormatterForHandle, me = r.useRef(), ye = r.useRef(), ge = r.useMemo(function() {
                return X ? V ? "ttb" : "btt" : V ? "rtl" : "ltr"
            }, [V, X]), be = r.useMemo(function() {
                return isFinite(g) ? g : 0
            }, [g]), Ee = r.useMemo(function() {
                return isFinite(E) ? E : 100
            }, [E]), Oe = r.useMemo(function() {
                return null !== A && A <= 0 ? 1 : A
            }, [A]), Se = r.useMemo(function() {
                return "boolean" == typeof Y ? !!Y && Oe : Y >= 0 && Y
            }, [Y, Oe]), we = r.useMemo(function() {
                return Object.keys(ue || {}).map(function(e) {
                    var t = ue[e]
                      , n = {
                        value: Number(e)
                    };
                    return t && "object" === (0,
                    M.Z)(t) && !r.isValidElement(t) && ("label"in t || "style"in t) ? (n.style = t.style,
                    n.label = t.label) : n.label = t,
                    n
                }).filter(function(e) {
                    var t = e.label;
                    return t || "number" == typeof t
                }).sort(function(e, t) {
                    return e.value - t.value
                })
            }, [ue]), Ce = function(e, t, n, a, o, i) {
                var c = r.useCallback(function(n) {
                    var r = isFinite(n) ? n : e;
                    return r = Math.min(t, n),
                    r = Math.max(e, r)
                }, [e, t])
                  , u = r.useCallback(function(r) {
                    if (null !== n) {
                        var a = e + Math.round((c(r) - e) / n) * n
                          , o = function(e) {
                            return (String(e).split(".")[1] || "").length
                        }
                          , i = Math.max(o(n), o(t), o(e))
                          , u = Number(a.toFixed(i));
                        return e <= u && u <= t ? u : null
                    }
                    return null
                }, [n, e, t, c])
                  , s = r.useCallback(function(r) {
                    var o = c(r)
                      , i = a.map(function(e) {
                        return e.value
                    });
                    null !== n && i.push(u(r)),
                    i.push(e, t);
                    var s = i[0]
                      , l = t - e;
                    return i.forEach(function(e) {
                        var t = Math.abs(o - e);
                        t <= l && (s = e,
                        l = t)
                    }),
                    s
                }, [e, t, a, n, c, u])
                  , l = function r(o, i, c) {
                    var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unit";
                    if ("number" == typeof i) {
                        var l, f = o[c], d = f + i, h = [];
                        a.forEach(function(e) {
                            h.push(e.value)
                        }),
                        h.push(e, t),
                        h.push(u(f));
                        var v = i > 0 ? 1 : -1;
                        "unit" === s ? h.push(u(f + v * n)) : h.push(u(d)),
                        h = h.filter(function(e) {
                            return null !== e
                        }).filter(function(e) {
                            return i < 0 ? e <= f : e >= f
                        }),
                        "unit" === s && (h = h.filter(function(e) {
                            return e !== f
                        }));
                        var p = "unit" === s ? f : d;
                        l = h[0];
                        var m = Math.abs(l - p);
                        if (h.forEach(function(e) {
                            var t = Math.abs(e - p);
                            t < m && (l = e,
                            m = t)
                        }),
                        void 0 === l)
                            return i < 0 ? e : t;
                        if ("dist" === s)
                            return l;
                        if (Math.abs(i) > 1) {
                            var y = (0,
                            C.Z)(o);
                            return y[c] = l,
                            r(y, i - v, c, s)
                        }
                        return l
                    }
                    return "min" === i ? e : "max" === i ? t : void 0
                }
                  , f = function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unit"
                      , a = e[n]
                      , o = l(e, t, n, r);
                    return {
                        value: o,
                        changed: o !== a
                    }
                }
                  , d = function(e) {
                    return null === i && 0 === e || "number" == typeof i && e < i
                };
                return [s, function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unit"
                      , a = e.map(s)
                      , c = a[n]
                      , u = l(a, t, n, r);
                    if (a[n] = u,
                    !1 === o) {
                        var h = i || 0;
                        n > 0 && a[n - 1] !== c && (a[n] = Math.max(a[n], a[n - 1] + h)),
                        n < a.length - 1 && a[n + 1] !== c && (a[n] = Math.min(a[n], a[n + 1] - h))
                    } else if ("number" == typeof i || null === i) {
                        for (var v = n + 1; v < a.length; v += 1)
                            for (var p = !0; d(a[v] - a[v - 1]) && p; ) {
                                var m = f(a, 1, v);
                                a[v] = m.value,
                                p = m.changed
                            }
                        for (var y = n; y > 0; y -= 1)
                            for (var g = !0; d(a[y] - a[y - 1]) && g; ) {
                                var b = f(a, -1, y - 1);
                                a[y - 1] = b.value,
                                g = b.changed
                            }
                        for (var E = a.length - 1; E > 0; E -= 1)
                            for (var O = !0; d(a[E] - a[E - 1]) && O; ) {
                                var S = f(a, -1, E - 1);
                                a[E - 1] = S.value,
                                O = S.changed
                            }
                        for (var w = 0; w < a.length - 1; w += 1)
                            for (var C = !0; d(a[w + 1] - a[w]) && C; ) {
                                var P = f(a, 1, w + 1);
                                a[w + 1] = P.value,
                                C = P.changed
                            }
                    }
                    return {
                        value: a[n],
                        values: a
                    }
                }
                ]
            }(be, Ee, Oe, we, F, Se), Pe = (0,
            P.Z)(Ce, 2), Me = Pe[0], Ae = Pe[1], Te = function(e, t) {
                var n = t || {}
                  , r = n.defaultValue
                  , a = n.value
                  , o = n.onChange
                  , i = n.postState
                  , c = I(function() {
                    return j(a) ? a : j(r) ? "function" == typeof r ? r() : r : "function" == typeof e ? e() : e
                })
                  , u = (0,
                P.Z)(c, 2)
                  , s = u[0]
                  , l = u[1]
                  , f = void 0 !== a ? a : s
                  , d = i ? i(f) : f
                  , h = N(o)
                  , v = I([f])
                  , p = (0,
                P.Z)(v, 2)
                  , m = p[0]
                  , y = p[1];
                return R(function() {
                    var e = m[0];
                    s !== e && h(s, e)
                }, [m]),
                R(function() {
                    j(a) || l(a)
                }, [a]),
                [d, N(function(e, t) {
                    l(e, t),
                    y([f], t)
                })]
            }(x, {
                value: k
            }), Ne = (0,
            P.Z)(Te, 2), ke = Ne[0], xe = Ne[1], Re = r.useMemo(function() {
                var e = null === ke || void 0 === ke ? [] : Array.isArray(ke) ? ke : [ke]
                  , t = (0,
                P.Z)(e, 1)[0]
                  , n = null === ke ? [] : [void 0 === t ? be : t];
                if (_) {
                    if (n = (0,
                    C.Z)(e),
                    D || void 0 === ke) {
                        var r = D >= 0 ? D + 1 : 2;
                        for (n = n.slice(0, r); n.length < r; ) {
                            var a;
                            n.push(null !== (a = n[n.length - 1]) && void 0 !== a ? a : be)
                        }
                    }
                    n.sort(function(e, t) {
                        return e - t
                    })
                }
                return n.forEach(function(e, t) {
                    n[t] = Me(e)
                }),
                n
            }, [ke, _, be, D, Me]), Ie = r.useRef(Re);
            Ie.current = Re;
            var je = function(e) {
                return _ ? e : e[0]
            }
              , _e = function(e) {
                var t = (0,
                C.Z)(e).sort(function(e, t) {
                    return e - t
                });
                U && !H(t, Ie.current, !0) && U(je(t)),
                xe(t)
            }
              , De = function(e) {
                if (!f) {
                    var t = 0
                      , n = Ee - be;
                    Re.forEach(function(r, a) {
                        var o = Math.abs(e - r);
                        o <= n && (n = o,
                        t = a)
                    });
                    var r = (0,
                    C.Z)(Re);
                    r[t] = e,
                    _ && !Re.length && void 0 === D && r.push(e),
                    null === Z || void 0 === Z || Z(je(r)),
                    _e(r),
                    null === B || void 0 === B || B(je(r))
                }
            }
              , Ue = r.useState(null)
              , Ze = (0,
            P.Z)(Ue, 2)
              , Be = Ze[0]
              , Le = Ze[1];
            r.useEffect(function() {
                if (null !== Be) {
                    var e = Re.indexOf(Be);
                    e >= 0 && me.current.focus(e)
                }
                Le(null)
            }, [Be]);
            var Fe = r.useMemo(function() {
                return (!W || null !== Oe) && W
            }, [W, Oe])
              , He = function(e, t, n, a, o, i, c, u, s) {
                var l = r.useState(null)
                  , f = (0,
                P.Z)(l, 2)
                  , d = f[0]
                  , h = f[1]
                  , v = r.useState(-1)
                  , p = (0,
                P.Z)(v, 2)
                  , m = p[0]
                  , y = p[1]
                  , g = r.useState(n)
                  , b = (0,
                P.Z)(g, 2)
                  , E = b[0]
                  , O = b[1]
                  , S = r.useState(n)
                  , w = (0,
                P.Z)(S, 2)
                  , M = w[0]
                  , A = w[1]
                  , T = r.useRef(null)
                  , N = r.useRef(null);
                r.useEffect(function() {
                    -1 === m && O(n)
                }, [n, m]),
                r.useEffect(function() {
                    return function() {
                        document.removeEventListener("mousemove", T.current),
                        document.removeEventListener("mouseup", N.current),
                        document.removeEventListener("touchmove", T.current),
                        document.removeEventListener("touchend", N.current)
                    }
                }, []);
                var k = function(e, t) {
                    E.some(function(t, n) {
                        return t !== e[n]
                    }) && (void 0 !== t && h(t),
                    O(e),
                    c(e))
                }
                  , x = function(e, t) {
                    if (-1 === e) {
                        var n = M[0]
                          , r = M[M.length - 1]
                          , c = a - n
                          , u = o - r
                          , l = t * (o - a);
                        l = Math.max(l, c),
                        l = Math.min(l, u);
                        var f = i(n + l);
                        l = f - n;
                        var d = M.map(function(e) {
                            return e + l
                        });
                        k(d)
                    } else {
                        var h = (o - a) * t
                          , v = (0,
                        C.Z)(E);
                        v[e] = M[e];
                        var p = s(v, h, e, "dist");
                        k(p.values, p.value)
                    }
                }
                  , R = r.useRef(x);
                R.current = x;
                var I = r.useMemo(function() {
                    var e = (0,
                    C.Z)(n).sort(function(e, t) {
                        return e - t
                    })
                      , t = (0,
                    C.Z)(E).sort(function(e, t) {
                        return e - t
                    });
                    return e.every(function(e, n) {
                        return e === t[n]
                    }) ? E : n
                }, [n, E]);
                return [m, d, I, function(r, a) {
                    r.stopPropagation();
                    var o = n[a];
                    y(a),
                    h(o),
                    A(n);
                    var i = te(r)
                      , c = i.pageX
                      , s = i.pageY
                      , l = function(n) {
                        n.preventDefault();
                        var r, o = te(n), i = o.pageX, u = o.pageY, l = i - c, f = u - s, d = e.current.getBoundingClientRect(), h = d.width, v = d.height;
                        switch (t) {
                        case "btt":
                            r = -f / v;
                            break;
                        case "ttb":
                            r = f / v;
                            break;
                        case "rtl":
                            r = -l / h;
                            break;
                        default:
                            r = l / h
                        }
                        R.current(a, r)
                    }
                      , f = function e(t) {
                        t.preventDefault(),
                        document.removeEventListener("mouseup", e),
                        document.removeEventListener("mousemove", l),
                        document.removeEventListener("touchend", e),
                        document.removeEventListener("touchmove", l),
                        T.current = null,
                        N.current = null,
                        y(-1),
                        u()
                    };
                    document.addEventListener("mouseup", f),
                    document.addEventListener("mousemove", l),
                    document.addEventListener("touchend", f),
                    document.addEventListener("touchmove", l),
                    T.current = l,
                    N.current = f
                }
                ]
            }(ye, ge, Re, be, Ee, Me, _e, function() {
                null === B || void 0 === B || B(je(Ie.current))
            }, Ae)
              , Ke = (0,
            P.Z)(He, 4)
              , Ge = Ke[0]
              , Ye = Ke[1]
              , We = Ke[2]
              , Ve = Ke[3]
              , Xe = function(e, t) {
                Ve(e, t),
                null === Z || void 0 === Z || Z(je(Ie.current))
            }
              , ze = -1 !== Ge;
            r.useEffect(function() {
                if (!ze) {
                    var e = Re.lastIndexOf(Ye);
                    me.current.focus(e)
                }
            }, [ze]);
            var Qe = r.useMemo(function() {
                return (0,
                C.Z)(We).sort(function(e, t) {
                    return e - t
                })
            }, [We])
              , $e = r.useMemo(function() {
                return _ ? [Qe[0], Qe[Qe.length - 1]] : [be, Qe[0]]
            }, [Qe, _, be])
              , qe = (0,
            P.Z)($e, 2)
              , Je = qe[0]
              , et = qe[1];
            r.useImperativeHandle(t, function() {
                return {
                    focus: function() {
                        me.current.focus(0)
                    },
                    blur: function() {
                        var e = document.activeElement;
                        ye.current.contains(e) && (null === e || void 0 === e || e.blur())
                    }
                }
            }),
            r.useEffect(function() {
                v && me.current.focus(0)
            }, []);
            var tt = r.useMemo(function() {
                return {
                    min: be,
                    max: Ee,
                    direction: ge,
                    disabled: f,
                    keyboard: h,
                    step: Oe,
                    included: Q,
                    includedStart: Je,
                    includedEnd: et,
                    range: _,
                    tabIndex: de,
                    ariaLabelForHandle: he,
                    ariaLabelledByForHandle: ve,
                    ariaValueTextFormatterForHandle: pe,
                    styles: s || {},
                    classNames: u || {}
                }
            }, [be, Ee, ge, f, h, Oe, Q, Je, et, _, de, he, ve, pe, s, u]);
            return r.createElement(K.Provider, {
                value: tt
            }, r.createElement("div", {
                ref: ye,
                className: T()(o, i, (n = {},
                (0,
                w.Z)(n, "".concat(o, "-disabled"), f),
                (0,
                w.Z)(n, "".concat(o, "-vertical"), X),
                (0,
                w.Z)(n, "".concat(o, "-horizontal"), !X),
                (0,
                w.Z)(n, "".concat(o, "-with-marks"), we.length),
                n)),
                style: c,
                onMouseDown: function(e) {
                    e.preventDefault();
                    var t, n = ye.current.getBoundingClientRect(), r = n.width, a = n.height, o = n.left, i = n.top, c = n.bottom, u = n.right, s = e.clientX, l = e.clientY;
                    switch (ge) {
                    case "btt":
                        t = (c - l) / a;
                        break;
                    case "ttb":
                        t = (l - i) / a;
                        break;
                    case "rtl":
                        t = (u - s) / r;
                        break;
                    default:
                        t = (s - o) / r
                    }
                    De(Me(be + t * (Ee - be)))
                }
            }, r.createElement("div", {
                className: T()("".concat(o, "-rail"), null === u || void 0 === u ? void 0 : u.rail),
                style: (0,
                S.Z)((0,
                S.Z)({}, ne), null === s || void 0 === s ? void 0 : s.rail)
            }), r.createElement(ce, {
                prefixCls: o,
                style: q,
                values: Qe,
                startPoint: $,
                onStartMove: Fe ? Xe : null
            }), r.createElement(oe, {
                prefixCls: o,
                marks: we,
                dots: se,
                style: ae,
                activeStyle: ie
            }), r.createElement(ee, {
                ref: me,
                prefixCls: o,
                style: J,
                values: We,
                draggingIndex: Ge,
                onStartMove: Xe,
                onOffsetChange: function(e, t) {
                    if (!f) {
                        var n = Ae(Re, e, t);
                        null === Z || void 0 === Z || Z(je(Re)),
                        _e(n.values),
                        null === B || void 0 === B || B(je(n.values)),
                        Le(n.value)
                    }
                },
                onFocus: p,
                onBlur: m,
                handleRender: le
            }), r.createElement(re, {
                prefixCls: o,
                marks: we,
                onClick: De
            })))
        })
          , se = ["className"];
        function le() {
            return (le = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function fe(e, t) {
            if (null == e)
                return {};
            var n, r, a = function(e, t) {
                if (null == e)
                    return {};
                var n, r, a = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        var de = function(e) {
            var t = e.className
              , n = fe(e, se)
              , a = T()("ow-slider-customize", t);
            return r.createElement(ue, le({}, n, {
                className: a
            }))
        };
        de.defaultProps = {
            className: ""
        },
        de.propTypes = {
            className: o().string
        };
        var he = de
          , ve = n(10091)
          , pe = n(17375)
          , me = n(38423)
          , ye = n(84987)
          , ge = n(4446)
          , be = n(94165)
          , Ee = n(6885);
        function Oe(e) {
            "@babel/helpers - typeof";
            return (Oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Se(e, t) {
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
                if ("object" !== Oe(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Oe(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Oe(t) ? t : String(t)
        }
        function Ce(e, t) {
            return (Ce = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Pe(e) {
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
                var n, r = Ae(e);
                if (t) {
                    var a = Ae(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Oe(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Me(e)
                }(this, n)
            }
        }
        function Me(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Ae(e) {
            return (Ae = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Te = function(e) {
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
                t && Ce(e, t)
            }(n, r.Component);
            var t = Pe(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    scale: 1
                },
                r.handleSave = r.handleSave.bind(Me(r)),
                r.handleScale = r.handleScale.bind(Me(r)),
                r.handleCancel = r.handleCancel.bind(Me(r)),
                r
            }
            return function(e, t, n) {
                t && Se(e.prototype, t),
                n && Se(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleCancel",
                value: function() {
                    this.props.onCancel()
                }
            }, {
                key: "handleSave",
                value: function() {
                    var e = this.props
                      , t = e.onSave
                      , n = e.onCancel
                      , r = this.imageEditor.getImage();
                    (0,
                    me.A)(),
                    (0,
                    pe.N)() ? t(r.msToBlob()) : r.toBlob(function(e) {
                        return t(e)
                    }),
                    n()
                }
            }, {
                key: "handleScale",
                value: function(e) {
                    var t = Ee.parseFloat(e);
                    this.state.scale !== t && this.setState({
                        scale: t
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.imageURL
                      , n = this.state.scale;
                    return r.createElement(O.Z, {
                        show: !0,
                        bsSize: "large",
                        backdrop: "static",
                        className: "ow-contacts-ContactAvatarEditor",
                        onHide: this.handleCancel
                    }, r.createElement(O.Z.Header, {
                        closeButton: !0
                    }, r.createElement(O.Z.Title, {
                        id: "ow-contacts-ContactAvatarEditor-dialog"
                    }, (0,
                    ye.t)("contacts.detailEdit.avatarEditPanel.TITLE"))), r.createElement(O.Z.Body, null, r.createElement(E, {
                        ref: function(t) {
                            e.imageEditor = t
                        },
                        scale: n,
                        image: t
                    })), r.createElement(O.Z.Footer, null, r.createElement(he, {
                        className: "ow-contacts-ContactAvatarEditor-scale",
                        defaultValue: 1,
                        min: 1,
                        max: 10,
                        step: .01,
                        tipFormatter: null,
                        onChange: (0,
                        ge.w1q)() ? void 0 : this.handleScale,
                        onAfterChange: this.handleScale
                    }), r.createElement(ve.Z, {
                        className: "ow-contacts-ContactAvatarEditor-button"
                    }, r.createElement(ve.Z.Button, {
                        className: "ow-contacts-ContactAvatarEditor-button-save",
                        onClick: this.handleSave,
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        ye.t)("contacts.detailEdit.avatarEditPanel.SAVE_EDIT")
                    }, (0,
                    ye.t)("contacts.detailEdit.avatarEditPanel.SAVE_EDIT")), r.createElement(ve.Z.Button, {
                        className: "ow-contacts-ContactAvatarEditor-button-cancel",
                        onClick: this.handleCancel,
                        role: be.HB.BUTTON,
                        "aria-label": (0,
                        ye.t)("contacts.detailEdit.avatarEditPanel.CANCEL_EDIT")
                    }, (0,
                    ye.t)("contacts.detailEdit.avatarEditPanel.CANCEL_EDIT")))))
                }
            }]),
            n
        }();
        Te.defaultProps = {
            imageURL: "",
            onSave: function() {},
            onCancel: function() {}
        },
        Te.propTypes = {
            imageURL: o().string,
            onSave: o().func,
            onCancel: o().func
        };
        var Ne = Te
    },
    83853: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return x
            }
        });
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(67064)
          , c = n.n(i)
          , u = n(90473)
          , s = n(54075)
          , l = n(96646)
          , f = n(87492)
          , d = n(40944)
          , h = n(84987)
          , v = n(4446)
          , p = n(29610)
          , m = n(83416);
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
        function g(e, t) {
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
                var n, r = w(e);
                if (t) {
                    var a = w(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === y(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return S(e)
                }(this, n)
            }
        }
        function S(e) {
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
        var C = function(e) {
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
            }(n, r.Component);
            var t = O(n);
            function n(e) {
                var r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                r = t.call(this, e);
                var a = e.hasPhoto
                  , o = e.contactId
                  , i = e.addressBookId
                  , c = e.onGetContactAvatar;
                return r.state = {
                    imgSrc: a && o && i ? "".concat(c(i, o), "&d=").concat(Date.now()) : "",
                    hasPhoto: a,
                    showAlert: !1,
                    errorMsg: "",
                    avatarEditorUrl: "",
                    displayProgress: !1,
                    uploadProgress: 0
                },
                r.handleHideAlert = r.handleHideAlert.bind(S(r)),
                r.handleDelete = r.handleDelete.bind(S(r)),
                r.handleChange = r.handleChange.bind(S(r)),
                r.handleAvatarEditorSave = r.handleAvatarEditorSave.bind(S(r)),
                r.handleAvatarEditorCancel = r.handleAvatarEditorCancel.bind(S(r)),
                r
            }
            return function(e, t, n) {
                t && g(e.prototype, t),
                n && g(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = e.contactId
                      , n = e.addressBookId
                      , r = e.hasPhoto
                      , a = e.avatarStatus;
                    if (r !== this.props.hasPhoto || a !== this.props.avatarStatus) {
                        var o = this.state.imgSrc;
                        this.setState({
                            hasPhoto: r,
                            imgSrc: r ? o.replace(/&d=.*$/, "&d=".concat(Date.now())) : ""
                        })
                    }
                    r && t && n && (t !== this.props.contactId || r !== this.state.hasPhoto) && this.setState({
                        imgSrc: "".concat(this.props.onGetContactAvatar(n, t), "&d=").concat(Date.now())
                    })
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    var n = this.props
                      , r = n.contactId
                      , a = n.addressBookId;
                    return r !== e.contactId || a !== e.addressBookId || this.state.hasPhoto !== t.hasPhoto || this.state.imgSrc !== t.imgSrc || this.state.showAlert !== t.showAlert || this.state.avatarEditorUrl !== t.avatarEditorUrl || this.state.displayProgress !== t.displayProgress || this.state.uploadProgress !== t.uploadProgress
                }
            }, {
                key: "handleHideAlert",
                value: function() {
                    this.setState({
                        showAlert: !1
                    })
                }
            }, {
                key: "handleDelete",
                value: function(e) {
                    e.preventDefault(),
                    this.setState({
                        imgSrc: "",
                        hasPhoto: !1
                    }),
                    this.props.onChange("")
                }
            }, {
                key: "handleChange",
                value: function(e) {
                    var t = e[0].source
                      , n = (0,
                    d.tc)(t);
                    n.errorMsg ? this.setState({
                        showAlert: !0,
                        errorMsg: n.errorMsg
                    }) : v.UhU.isDesktop ? this.setState({
                        showAlert: !1,
                        errorMsg: "",
                        avatarEditorUrl: URL.createObjectURL(t)
                    }) : (this.setState({
                        showAlert: !1,
                        errorMsg: "",
                        hasPhoto: !0,
                        imgSrc: URL.createObjectURL(t)
                    }),
                    this.uploadAvatar(t))
                }
            }, {
                key: "handleAvatarEditorSave",
                value: function(e) {
                    this.setState({
                        imgSrc: URL.createObjectURL(e),
                        hasPhoto: !0
                    }),
                    this.uploadAvatar(e)
                }
            }, {
                key: "uploadAvatar",
                value: function(e) {
                    var t = this
                      , n = new FormData;
                    n.append("fileToUpload", e, "IMG_Avatar.png");
                    var r = (0,
                    m.Z)("mail.timeoutInline");
                    (0,
                    p.j)("contacts", "update_photo"),
                    this.props.uploadContactAvatar("contactPhoto".concat(Date.now()), n, r, {
                        onInit: function() {
                            t.setState({
                                displayProgress: !0
                            })
                        },
                        onProgress: function(e) {
                            setTimeout(function() {
                                t.setState({
                                    uploadProgress: e.loaded / e.total
                                })
                            }, 0)
                        },
                        onSuccess: function() {
                            t.setState({
                                displayProgress: !1
                            })
                        },
                        onError: function() {
                            t.setState({
                                displayProgress: !1
                            })
                        }
                    }).then(function(e) {
                        var n = e.data;
                        t.props.onChange(n.files[0].id)
                    })
                }
            }, {
                key: "handleAvatarEditorCancel",
                value: function() {
                    this.setState({
                        avatarEditorUrl: ""
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.editBtnDisplayed
                      , a = e.acceptFileTypes
                      , o = this.state
                      , i = o.imgSrc
                      , d = o.hasPhoto
                      , v = o.avatarEditorUrl
                      , p = o.showAlert
                      , m = o.errorMsg
                      , y = o.displayProgress
                      , g = o.uploadProgress;
                    return r.createElement("div", {
                        className: c()("ow-contacts-contactAvatar", t)
                    }, r.createElement(u.Z, {
                        editBtnDisplayed: n,
                        imgSrc: i,
                        hasPhoto: d,
                        acceptFileTypes: a,
                        changeBtnText: (0,
                        h.t)("contacts.detailEdit.label.CHANGE_PHOTO"),
                        changeBtnTip: (0,
                        h.t)("contacts.detailEdit.toolTips.CHANGE_PHOTO"),
                        deleteBtnText: (0,
                        h.t)("contacts.detailEdit.label.DELETE_PHOTO"),
                        deleteBtnTip: (0,
                        h.t)("contacts.detailEdit.toolTips.DELETE_PHOTO"),
                        onChange: this.handleChange,
                        onDelete: this.handleDelete
                    }), v ? r.createElement(f.Z, {
                        imageURL: v,
                        onCancel: this.handleAvatarEditorCancel,
                        onSave: this.handleAvatarEditorSave
                    }) : void 0, y && r.createElement(l.Z, {
                        show: !0,
                        title: (0,
                        h.t)("contacts.editPanel.message.UPLOADING_PHOTO"),
                        progress: g
                    }), p && r.createElement(s.Z, {
                        show: !0,
                        title: (0,
                        h.t)("common.ERROR"),
                        message: m,
                        onHide: this.handleHideAlert
                    }))
                }
            }]),
            n
        }();
        C.propTypes = {
            className: o().string,
            hasPhoto: o().bool,
            acceptFileTypes: o().string,
            editBtnDisplayed: o().bool,
            avatarStatus: o().string,
            onChange: o().func,
            onGetContactAvatar: o().func,
            uploadContactAvatar: o().func,
            addressBookId: o().string,
            contactId: o().string
        },
        C.defaultProps = {
            className: "",
            acceptFileTypes: "image/pjpeg,image/jpeg,image/x-png,image/png,image/gif",
            hasPhoto: !1,
            editBtnDisplayed: !1,
            avatarStatus: "",
            onChange: function() {},
            onGetContactAvatar: function() {},
            uploadContactAvatar: function() {},
            addressBookId: "",
            contactId: ""
        };
        var P = C
          , M = n(16083)
          , A = n(46095)
          , T = n(93279)
          , N = n(46141)
          , k = n(17702)
          , x = (0,
        M.$j)(function(e, t) {
            return {
                addressBookId: t.addressBookId || (0,
                N.am)(e),
                avatarStatus: (0,
                k.Ad)(e)
            }
        }, function(e) {
            return {
                onGetContactAvatar: (0,
                A.DE)(T.getContactAvatar, e),
                uploadContactAvatar: (0,
                A.DE)(T.resourceUpload, e)
            }
        })(P)
    },
    30907: function(e, t, n) {
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    83878: function(e, t, n) {
        function r(e) {
            if (Array.isArray(e))
                return e
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    59199: function(e, t, n) {
        function r(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    25267: function(e, t, n) {
        function r() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    1413: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(4942);
        function a(e, t) {
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
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach(function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
    },
    29439: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(83878);
        var a = n(40181)
          , o = n(25267);
        function i(e, t) {
            return (0,
            r.Z)(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, a, o, i, c = [], u = !0, s = !1;
                    try {
                        if (o = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            u = !1
                        } else
                            for (; !(u = (r = o.call(n)).done) && (c.push(r.value),
                            c.length !== t); u = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        a = e
                    } finally {
                        try {
                            if (!u && null != n.return && (i = n.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (s)
                                throw a
                        }
                    }
                    return c
                }
            }(e, t) || (0,
            a.Z)(e, t) || (0,
            o.Z)()
        }
    },
    93433: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(30907);
        var a = n(59199)
          , o = n(40181);
        function i(e) {
            return function(e) {
                if (Array.isArray(e))
                    return (0,
                    r.Z)(e)
            }(e) || (0,
            a.Z)(e) || (0,
            o.Z)(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    },
    40181: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var r = n(30907);
        function a(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return (0,
                    r.Z)(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0,
                r.Z)(e, t) : void 0
            }
        }
    }
}]);
