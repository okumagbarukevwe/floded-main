/*! Synchronoss Messaging 2018 */
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[272], {
    70964: function(e, t, n) {
        n(48901),
        e.exports = n(63093).Array.isArray
    },
    48901: function(e, t, n) {
        var a = n(14518);
        a(a.S, "Array", {
            isArray: n(35730)
        })
    },
    27154: function(e, t, n) {
        var a = n(66440)
          , i = n(95872)
          , r = Array.prototype.splice;
        e.exports = function(e, t) {
            for (var n = e ? t.length : 0, o = n - 1; n--; ) {
                var s = t[n];
                if (n == o || s !== l) {
                    var l = s;
                    i(s) ? r.call(e, s, 1) : a(e, s)
                }
            }
            return e
        }
    },
    56590: function(e, t, n) {
        var a = n(71451)
          , i = n(27154);
        e.exports = function(e, t) {
            var n = [];
            if (!e || !e.length)
                return n;
            var r = -1
              , o = []
              , s = e.length;
            for (t = a(t, 3); ++r < s; ) {
                var l = e[r];
                t(l, r, e) && (n.push(l),
                o.push(r))
            }
            return i(e, o),
            n
        }
    },
    44181: function(e, t, n) {
        "use strict";
        var a = n(82569);
        t.__esModule = !0,
        t.default = void 0;
        var i = a(n(66660))
          , r = a(n(50914))
          , o = a(n(69471))
          , s = a(n(67064))
          , l = a(n(87401))
          , u = n(88378)
          , c = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return (0,
            o.default)(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.className
                  , n = (0,
                r.default)(e, ["className"])
                  , a = (0,
                u.splitBsProps)(n)
                  , o = a[0]
                  , c = a[1]
                  , d = (0,
                u.getClassSet)(o);
                return l.default.createElement("span", (0,
                i.default)({}, c, {
                    className: (0,
                    s.default)(t, d)
                }))
            }
            ,
            t
        }(l.default.Component)
          , d = (0,
        u.bsClass)("help-block", c);
        t.default = d,
        e.exports = t.default
    },
    73918: function(e, t, n) {
        "use strict";
        var a = n(17343)
          , i = n(82569);
        t.__esModule = !0,
        t.default = void 0;
        var r = i(n(50914))
          , o = i(n(69471))
          , s = i(n(89653))
          , l = i(n(66660))
          , u = i(n(78149))
          , c = i(n(16242))
          , d = a(n(87401))
          , h = i(n(23398))
          , p = i(n(12674))
          , m = (i(n(83087)),
        i(n(76707)))
          , f = i(n(44072));
        function v(e, t) {
            return (0,
            u.default)(t) ? t.indexOf(e) >= 0 : e === t
        }
        var g = h.default.oneOf(["click", "hover", "focus"])
          , E = (0,
        l.default)({}, m.default.propTypes, {
            trigger: h.default.oneOfType([g, h.default.arrayOf(g)]),
            delay: h.default.number,
            delayShow: h.default.number,
            delayHide: h.default.number,
            defaultOverlayShown: h.default.bool,
            overlay: h.default.node.isRequired,
            onBlur: h.default.func,
            onClick: h.default.func,
            onFocus: h.default.func,
            onMouseOut: h.default.func,
            onMouseOver: h.default.func,
            target: h.default.oneOf([null]),
            onHide: h.default.oneOf([null]),
            show: h.default.oneOf([null])
        })
          , y = function(e) {
            function t(t, n) {
                var a;
                return (a = e.call(this, t, n) || this).handleToggle = a.handleToggle.bind((0,
                s.default)((0,
                s.default)(a))),
                a.handleDelayedShow = a.handleDelayedShow.bind((0,
                s.default)((0,
                s.default)(a))),
                a.handleDelayedHide = a.handleDelayedHide.bind((0,
                s.default)((0,
                s.default)(a))),
                a.handleHide = a.handleHide.bind((0,
                s.default)((0,
                s.default)(a))),
                a.handleMouseOver = function(e) {
                    return a.handleMouseOverOut(a.handleDelayedShow, e, "fromElement")
                }
                ,
                a.handleMouseOut = function(e) {
                    return a.handleMouseOverOut(a.handleDelayedHide, e, "toElement")
                }
                ,
                a._mountNode = null,
                a.state = {
                    show: t.defaultOverlayShown
                },
                a
            }
            (0,
            o.default)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                this._mountNode = document.createElement("div"),
                this.renderOverlay()
            }
            ,
            n.componentDidUpdate = function() {
                this.renderOverlay()
            }
            ,
            n.componentWillUnmount = function() {
                p.default.unmountComponentAtNode(this._mountNode),
                this._mountNode = null,
                clearTimeout(this._hoverShowDelay),
                clearTimeout(this._hoverHideDelay)
            }
            ,
            n.handleDelayedHide = function() {
                var e = this;
                if (null != this._hoverShowDelay)
                    return clearTimeout(this._hoverShowDelay),
                    void (this._hoverShowDelay = null);
                if (this.state.show && null == this._hoverHideDelay) {
                    var t = null != this.props.delayHide ? this.props.delayHide : this.props.delay;
                    t ? this._hoverHideDelay = setTimeout(function() {
                        e._hoverHideDelay = null,
                        e.hide()
                    }, t) : this.hide()
                }
            }
            ,
            n.handleDelayedShow = function() {
                var e = this;
                if (null != this._hoverHideDelay)
                    return clearTimeout(this._hoverHideDelay),
                    void (this._hoverHideDelay = null);
                if (!this.state.show && null == this._hoverShowDelay) {
                    var t = null != this.props.delayShow ? this.props.delayShow : this.props.delay;
                    t ? this._hoverShowDelay = setTimeout(function() {
                        e._hoverShowDelay = null,
                        e.show()
                    }, t) : this.show()
                }
            }
            ,
            n.handleHide = function() {
                this.hide()
            }
            ,
            n.handleMouseOverOut = function(e, t, n) {
                var a = t.currentTarget
                  , i = t.relatedTarget || t.nativeEvent[n];
                i && i === a || (0,
                c.default)(a, i) || e(t)
            }
            ,
            n.handleToggle = function() {
                this.state.show ? this.hide() : this.show()
            }
            ,
            n.hide = function() {
                this.setState({
                    show: !1
                })
            }
            ,
            n.makeOverlay = function(e, t) {
                return d.default.createElement(m.default, (0,
                l.default)({}, t, {
                    show: this.state.show,
                    onHide: this.handleHide,
                    target: this
                }), e)
            }
            ,
            n.show = function() {
                this.setState({
                    show: !0
                })
            }
            ,
            n.renderOverlay = function() {
                p.default.unstable_renderSubtreeIntoContainer(this, this._overlay, this._mountNode)
            }
            ,
            n.render = function() {
                var e = this.props
                  , t = e.trigger
                  , n = e.overlay
                  , a = e.children
                  , i = e.onBlur
                  , o = e.onClick
                  , s = e.onFocus
                  , l = e.onMouseOut
                  , u = e.onMouseOver
                  , c = (0,
                r.default)(e, ["trigger", "overlay", "children", "onBlur", "onClick", "onFocus", "onMouseOut", "onMouseOver"]);
                delete c.delay,
                delete c.delayShow,
                delete c.delayHide,
                delete c.defaultOverlayShown;
                var h = d.default.Children.only(a)
                  , p = h.props
                  , m = {};
                return this.state.show && (m["aria-describedby"] = n.props.id),
                m.onClick = (0,
                f.default)(p.onClick, o),
                v("click", t) && (m.onClick = (0,
                f.default)(m.onClick, this.handleToggle)),
                v("hover", t) && (m.onMouseOver = (0,
                f.default)(p.onMouseOver, u, this.handleMouseOver),
                m.onMouseOut = (0,
                f.default)(p.onMouseOut, l, this.handleMouseOut)),
                v("focus", t) && (m.onFocus = (0,
                f.default)(p.onFocus, s, this.handleDelayedShow),
                m.onBlur = (0,
                f.default)(p.onBlur, i, this.handleDelayedHide)),
                this._overlay = this.makeOverlay(n, c),
                (0,
                d.cloneElement)(h, m)
            }
            ,
            t
        }(d.default.Component);
        y.propTypes = E,
        y.defaultProps = {
            defaultOverlayShown: !1,
            trigger: ["hover", "focus"]
        };
        var C = y;
        t.default = C,
        e.exports = t.default
    },
    80861: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return C
            },
            i: function() {
                return y
            }
        });
        var a = n(87401)
          , i = n(23398)
          , r = n.n(i)
          , o = n(72437)
          , s = n.n(o)
          , l = n(94165);
        function u(e) {
            "@babel/helpers - typeof";
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, p(a.key), a)
            }
        }
        function h(e, t, n) {
            return t && d(e.prototype, t),
            n && d(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function p(e) {
            var t = function(e, t) {
                if ("object" !== u(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== u(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === u(t) ? t : String(t)
        }
        function m(e, t) {
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
        }
        function f(e, t) {
            return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, a = E(e);
                if (t) {
                    var i = E(this).constructor;
                    n = Reflect.construct(a, arguments, i)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === u(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return g(e)
                }(this, n)
            }
        }
        function g(e) {
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
        var y = function(e) {
            m(n, a.PureComponent);
            var t = v(n);
            function n(e) {
                var a;
                return c(this, n),
                (a = t.call(this, e)).state = {
                    collapse: e.collapse
                },
                a.handleClick = a.handleClick.bind(g(a)),
                a
            }
            return h(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.props.collapse !== e.collapse && this.setState({
                        collapse: e.collapse
                    })
                }
            }, {
                key: "handleClick",
                value: function() {
                    this.props.onClick ? this.props.onClick(this.props.id, this) : this.setState({
                        collapse: !this.state.collapse
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.children
                      , n = Array.isArray(t) ? t[0] : null
                      , i = this.state.collapse
                      , r = Array.isArray(t) ? a.cloneElement(t[1], {
                        invisible: i
                    }) : null;
                    return a.createElement("div", {
                        className: "ow-collapse-tab ".concat(i ? "" : "ow-collapse-tab-active", " "),
                        tabIndex: 0,
                        onKeyDown: function(t) {
                            var n, a, i, r;
                            if (t.key === l.BY.ENTERKEY)
                                if ("MailGeneral" === e.props.active)
                                    "MailGeneral" === e.props.id ? e.setState({
                                        collapse: !e.state.collapse
                                    }) : t.stopPropagation(),
                                    null === (i = t.target) || void 0 === i || null === (r = i.children[0]) || void 0 === r || r.click();
                                else if (null !== (n = t.target) && void 0 !== n && null !== (a = n.children) && void 0 !== a && a[0]) {
                                    var o;
                                    null === (o = t.target) || void 0 === o || o.children[0].click()
                                } else
                                    e.handleClick()
                        }
                    }, a.createElement("span", {
                        className: "ow-collapse-tab-label",
                        onClick: this.handleClick
                    }, n), a.createElement(s(), {
                        in: !i
                    }, a.createElement("div", null, r)))
                }
            }]),
            n
        }();
        y.propTypes = {
            children: r().node,
            collapse: r().bool,
            onClick: r().func,
            id: r().string
        },
        y.defaultProps = {
            children: null,
            collapse: !0,
            onClick: function() {},
            id: ""
        };
        var C = function(e) {
            m(n, a.PureComponent);
            var t = v(n);
            function n(e) {
                var a;
                return c(this, n),
                (a = t.call(this, e)).state = {
                    active: void 0 !== e.active ? e.active : 0
                },
                a.handleEachClick = a.handleEachClick.bind(g(a)),
                a
            }
            return h(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.props.active !== e.active && this.setState({
                        active: e.active
                    })
                }
            }, {
                key: "handleEachClick",
                value: function(e) {
                    this.setState({
                        active: e
                    }),
                    this.props.onFocus && this.props.onFocus(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.children
                      , n = this.state.active;
                    return a.createElement("div", {
                        className: "ow-collapse-tabs"
                    }, a.Children.map(t, function(t, i) {
                        if (t.type === y) {
                            var r = t.props ? t.props.id : i;
                            return a.cloneElement(t, {
                                key: t.key || r,
                                collapse: !(n === r || n && r && -1 !== n.indexOf(r)),
                                id: r,
                                onClick: e.handleEachClick
                            })
                        }
                        return null
                    }))
                }
            }]),
            n
        }();
        C.propTypes = {
            active: r().string,
            children: r().node,
            onFocus: r().func
        },
        C.defaultProps = {
            active: "",
            children: null,
            onFocus: function() {}
        }
    },
    60274: function(e, t, n) {
        "use strict";
        var a = n(44181)
          , i = n.n(a);
        t.Z = i()
    },
    72278: function(e, t, n) {
        "use strict";
        var a = n(87401)
          , i = n(23398)
          , r = n.n(i)
          , o = n(32081)
          , s = function(e) {
            switch (e.level) {
            case 1:
                return a.createElement(o.Z, {
                    name: "exclamation",
                    className: "ow-mail-PriorityBadge-high"
                });
            case 5:
                return a.createElement(o.Z, {
                    name: "minus-mail"
                });
            case 3:
            default:
                return null
            }
        };
        s.propTypes = {
            level: r().number
        },
        t.Z = s
    },
    37200: function(e, t, n) {
        "use strict";
        var a = n(87401)
          , i = n(23398)
          , r = n(45014)
          , o = n(50328)
          , s = n(35369)
          , l = n(84987)
          , u = n(83416)
          , c = n(32081)
          , d = n(94165)
          , h = n(44910)
          , p = n(60274)
          , m = n(37364);
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
        function v(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, b(a.key), a)
            }
        }
        function g(e, t) {
            return (g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function E(e) {
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
                var n, a = C(e);
                if (t) {
                    var i = C(this).constructor;
                    n = Reflect.construct(a, arguments, i)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === f(t) || "function" == typeof t))
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
        function C(e) {
            return (C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function b(e) {
            var t = function(e, t) {
                if ("object" !== f(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== f(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === f(t) ? t : String(t)
        }
        var S = {
            type: i.string,
            data: (0,
            i.shape)({
                id: i.string,
                username: i.string,
                email: i.string,
                displayName: i.string,
                accountName: i.string,
                accountEmail: i.string
            }),
            show: i.bool,
            isLoading: i.bool,
            errorType: i.string,
            errorMessage: i.string,
            onAdd: i.func,
            onUpdate: i.func,
            onCancel: i.func,
            onValueChanged: i.func,
            imailCheck: i.string,
            smtpCheck: i.string,
            externalAccountDetail: i.array
        }
          , w = (function(e, t, n) {
            (t = b(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }({}, r.CsB, (0,
        l.t)("settings.mail.ACCOUNT_WARNING")),
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
                t && g(e, t)
            }(n, a.PureComponent);
            var t = E(n);
            function n(e) {
                var a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (a = t.call(this, e)).state = {
                    isGmail: !1,
                    imailCheck: "",
                    smtpCheck: "",
                    showSetting: !1,
                    formChanged: !1,
                    rName: "",
                    sName: "",
                    rPort: "",
                    sPort: "",
                    protocol: d.MW
                },
                "edit" === a.props.type && (a.state = {
                    defaultedPwd: "*******"
                }),
                a.onFormChange = a.onFormChange.bind(y(a)),
                a.handleProtocol = a.handleProtocol.bind(y(a)),
                a.renderLabel = a.renderLabel.bind(y(a)),
                a.renderInputFields = a.renderInputFields.bind(y(a)),
                a.renderAdvancedSettings = a.renderAdvancedSettings.bind(y(a)),
                a.renderAdvancedSettingsDropdown = a.renderAdvancedSettingsDropdown.bind(y(a)),
                a.renderAdvancedSettingsInputFields = a.renderAdvancedSettingsInputFields.bind(y(a)),
                a.handleSettingClick = a.handleSettingClick.bind(y(a)),
                a.stateHandler = a.stateHandler.bind(y(a)),
                a.onValueChanged = a.onValueChanged.bind(y(a)),
                a.handleUserPwdInput = a.handleUserPwdInput.bind(y(a)),
                a.onPwdfocusout = a.onPwdfocusout.bind(y(a)),
                a
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
                    var t = e.data.accountEmail
                      , n = e.advancedSetting
                      , a = e.externalAccountDetail;
                    this.props.show != e.show || this.props.type != e.type ? n ? this.setState({
                        showSetting: !0
                    }) : this.stateHandler(n) : e.isLoading || e.errorType !== d.lL || this.setState({
                        showSetting: !0
                    });
                    var i = t && "gmail" === t.match(/@([^.]*)/)[1] && a && a.supportedOAuth2Servlets && a.supportedOAuth2Servlets.indexOf("gmail") > -1;
                    this.setState({
                        isGmail: i
                    })
                }
            }, {
                key: "onFormChange",
                value: function(e) {
                    var t = e.accountEmail
                      , n = this.props.externalAccountDetail.supportedOAuth2Servlets
                      , a = /@([^.]*)/.test(t) && "gmail" === t.match(/@([^.]*)/)[1] && n && n.indexOf("gmail") > -1;
                    this.setState({
                        isGmail: a
                    })
                }
            }, {
                key: "stateHandler",
                value: function(e) {
                    e === this.state.showSetting ? this.setState({
                        showSetting: !1,
                        imailCheck: "",
                        smtpCheck: "",
                        rName: "",
                        rPort: "",
                        sName: "",
                        sPort: ""
                    }) : this.setState({
                        showSetting: !1
                    })
                }
            }, {
                key: "onValueChanged",
                value: function(e, t, n) {
                    (t && !this.state.previousFormValue && t.receivingServer && (delete t.accountName,
                    delete t.accountFromName,
                    "*******" !== t.password && "" !== t.password || delete t.password,
                    this.setState({
                        previousFormValue: t
                    })),
                    delete e.accountName,
                    delete e.accountFromName,
                    n && this.state.showSetting && (t && t.receivingServer || this.state.previousFormValue && this.state.previousFormValue.receivingServer)) ? ("*******" !== e.password && "" !== e.password || delete e.password,
                    (0,
                    h.vZ)(e, this.state.previousFormValue ? this.state.previousFormValue : t) ? this.setState({
                        defaultedPwd: "*******",
                        formChanged: !1
                    }) : this.setState({
                        defaultedPwd: "",
                        formChanged: !0
                    })) : this.state.pwdUpdating || this.setState({
                        defaultedPwd: "*******",
                        formChanged: !1
                    })
                }
            }, {
                key: "handleUserPwdInput",
                value: function(e) {
                    "edit" === this.props.type && "*******" === e.target.value && this.setState({
                        defaultedPwd: "",
                        pwdUpdating: !0
                    })
                }
            }, {
                key: "onPwdfocusout",
                value: function(e) {
                    var t = this.props.type;
                    e || "edit" !== t || (this.state.formChanged || this.state.defaultedPwd ? this.setState({
                        pwdUpdating: !1
                    }) : this.setState({
                        defaultedPwd: "*******",
                        pwdUpdating: !1
                    }))
                }
            }, {
                key: "handleProtocol",
                value: function(e) {
                    this.setState({
                        protocol: e
                    })
                }
            }, {
                key: "handleSettingClick",
                value: function(e) {
                    this.setState({
                        showSetting: !e
                    })
                }
            }, {
                key: "getOptions",
                value: function(e) {
                    return e.map(function(e, t) {
                        if (!isNaN(e))
                            return {
                                label: e,
                                value: e
                            }
                    })
                }
            }, {
                key: "renderLabel",
                value: function() {
                    var e = this.props.data;
                    return a.createElement("fieldset", null, a.createElement("legend", {
                        "aria-label": (0,
                        l.t)("settings.mail.ACCOUNT_APPEAR_PART_TITLE")
                    }, (0,
                    l.t)("settings.mail.ACCOUNT_APPEAR_PART_TITLE")), a.createElement(s.UP, {
                        label: (0,
                        l.t)("settings.mail.ACCOUNT_DESCRIPTION"),
                        name: "accountName",
                        required: !0,
                        value: e.accountName,
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            l.t)("common.errorMessage.REQUIRED")
                        },
                        "aria-required": !0,
                        "aria-label": (0,
                        l.t)("settings.mail.ACCOUNT_DESCRIPTION")
                    }), a.createElement(s.UP, {
                        label: (0,
                        l.t)("settings.mail.ACCOUNT_FROM_NAME"),
                        name: "accountFromName",
                        value: e.accountFromName,
                        required: !0,
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            l.t)("common.errorMessage.REQUIRED")
                        },
                        "aria-required": !0
                    }))
                }
            }, {
                key: "renderInputFields",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.type
                      , i = t.data
                      , r = !this.state.isGmail;
                    "edit" === n && void 0 === this.state.defaultedPwd && this.setState({
                        defaultedPwd: "*******"
                    });
                    var o = {};
                    return this.state.formChanged ? o = {
                        isDefaultRequiredValue: (0,
                        l.t)("common.errorMessage.REENTER_PASSWORD")
                    } : r && (o = {
                        isDefaultRequiredValue: (0,
                        l.t)("common.errorMessage.REQUIRED")
                    }),
                    a.createElement("fieldset", null, a.createElement("legend", {
                        "aria-label": (0,
                        l.t)("settings.mail.ACCOUNT_ACCESS_PART_TITLE")
                    }, (0,
                    l.t)("settings.mail.ACCOUNT_ACCESS_PART_TITLE")), a.createElement(s.UP, {
                        label: (0,
                        l.t)("settings.mail.ACCOUNT_USERNAME"),
                        name: "accountEmail",
                        value: i.accountEmail,
                        validations: "isEmail",
                        required: !0,
                        validationErrors: {
                            isEmail: (0,
                            l.t)("common.errorMessage.INVALID_EMAIL_ADDRESS"),
                            isDefaultRequiredValue: (0,
                            l.t)("common.errorMessage.REQUIRED")
                        },
                        emailname: !0,
                        disabled: "edit" === n,
                        "aria-required": !0
                    }), a.createElement(s.UP, {
                        label: (0,
                        l.t)("settings.mail.ACCOUNT_PASSCODE"),
                        name: "password",
                        value: this.state.formChanged || "edit" !== n ? "" : this.state.defaultedPwd,
                        required: r,
                        onClick: function(t) {
                            e.handleUserPwdInput(t)
                        },
                        onBlur: function(t) {
                            e.onPwdfocusout(t)
                        },
                        type: "password",
                        validationErrors: r ? o : {},
                        disabled: !r,
                        "aria-required": r
                    }), a.createElement(s.Hi, {
                        name: "protocol",
                        className: "ow-settings-mail-accounts-dropdown",
                        label: (0,
                        l.t)("settings.mail.ACCOUNT_SERVER_TYPE"),
                        options: [{
                            label: (0,
                            l.t)("settings.mail.SERVERTYPE_IMAP"),
                            value: "imap"
                        }, {
                            label: (0,
                            l.t)("settings.mail.SERVERTYPE_POP"),
                            value: "pop"
                        }],
                        onChange: this.handleProtocol,
                        disabled: "edit" === n || !r,
                        value: i.protocol || "imap"
                    }), "pop" === this.state.protocol ? a.createElement(p.Z, null, a.createElement("ul", null, a.createElement("li", null, a.createElement("span", null, (0,
                    l.t)("settings.mail.ACCOUNT_SERVER_POP_TIP"))))) : null)
                }
            }, {
                key: "renderAdvancedSettingsDropdown",
                value: function() {
                    var e, t, n, i, r = this, o = this.props, u = o.data, c = o.errorType, h = o.errorMessage, p = o.externalAccountDetail.allowedPorts, f = p.imap, v = p.pop, g = p.smtp, E = u.securityType ? u.securityType === d.CY : !(!this.state.imailCheck || this.state.imailCheck !== d.CY), y = u.smtpSecurityType ? u.smtpSecurityType === d.CY : !(!this.state.smtpCheck || this.state.smtpCheck !== d.CY), C = E ? this.getOptions(f.securePorts) : this.getOptions(f.nonSecurePorts), b = E ? this.getOptions(v.securePorts) : this.getOptions(v.nonSecurePorts), S = y ? this.getOptions(g.securePorts) : this.getOptions(g.nonSecurePorts), w = u && u.protocol ? u.protocol : this.state.protocol, A = w === d.MW ? C : b, N = f.enabled, _ = v.enabled, O = w === d.MW ? N : _, P = g.enabled, D = d.vt;
                    return a.createElement("div", {
                        class: "rui-mail-account-external-advanced-panel"
                    }, a.createElement("div", null, a.createElement("label", {
                        class: "ow-sub-heading",
                        "aria-label": (0,
                        l.t)("settings.mail.ACCOUNT_ADVANCE_TITLE")
                    }, (0,
                    l.t)("settings.mail.ACCOUNT_ADVANCE_TITLE"))), c === d.lL ? a.createElement("p", {
                        className: "ow-settingDetail-errorMsg",
                        role: d.HB.ALERT,
                        "aria-label": (0,
                        m.CC)(h)
                    }, " ", (0,
                    m.CC)(h)) : "", a.createElement("fieldset", {
                        class: "field-set"
                    }, a.createElement("legend", {
                        class: "legend",
                        "aria-label": (0,
                        l.t)("settings.mail.ADVANCE_RECEIVE_MAIL")
                    }, (0,
                    l.t)("settings.mail.ADVANCE_RECEIVE_MAIL")), a.createElement(s.UP, {
                        className: "inputs-label",
                        label: (0,
                        l.t)("settings.mail.ADVANCE_INCOMING_SERVER"),
                        name: "receivingServer",
                        value: u.host ? u.host : this.state.rName,
                        required: this.state.showSetting,
                        onChange: function(e) {
                            r.setState({
                                rName: e
                            })
                        },
                        validate: this.serverValidate,
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            l.t)("common.errorMessage.REQUIRED")
                        },
                        "aria-required": null === this || void 0 === this ? void 0 : null === (e = this.state) || void 0 === e ? void 0 : e.showSetting
                    }), O ? a.createElement(s.Hi, {
                        name: "imailport",
                        className: "dropdown-label",
                        label: (0,
                        l.t)("settings.mail.ADVANCE_PORT"),
                        options: A,
                        required: this.state.showSetting,
                        onChange: function(e) {
                            r.setState({
                                rPort: e
                            })
                        },
                        type: "number",
                        value: u.port ? u.port : this.state.rPort,
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            l.t)("common.errorMessage.REQUIRED")
                        }
                    }) : a.createElement(s.UP, {
                        className: "inputs-label",
                        label: (0,
                        l.t)("settings.mail.ADVANCE_PORT"),
                        name: "imailport",
                        required: this.state.showSetting,
                        value: u.port ? u.port : this.state.rPort,
                        onChange: function(e) {
                            r.setState({
                                rPort: e
                            })
                        },
                        type: "number",
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            l.t)("common.errorMessage.REQUIRED")
                        },
                        "aria-required": null === this || void 0 === this ? void 0 : null === (t = this.state) || void 0 === t ? void 0 : t.showSetting
                    }), a.createElement(s.Hi, {
                        name: "imailSSL",
                        className: "dropdown-label dropdown-ssl-options",
                        label: (0,
                        l.t)("settings.mail.CONNECTION_TYPE"),
                        options: D,
                        required: this.state.showSetting,
                        onChange: function(e) {
                            r.setState({
                                imailCheck: e
                            })
                        },
                        value: u.securityType ? u.securityType : d.t6,
                        "aria-label": (0,
                        l.t)("settings.mail.CONNECTION_TYPE")
                    })), a.createElement("fieldset", {
                        class: "field-set"
                    }, a.createElement("legend", {
                        class: "legend",
                        "aria-label": (0,
                        l.t)("settings.mail.ADVANCE_SENDING_MAIL")
                    }, (0,
                    l.t)("settings.mail.ADVANCE_SENDING_MAIL")), a.createElement(s.UP, {
                        className: "inputs-label",
                        label: (0,
                        l.t)("settings.mail.ADVANCE_OUTGOING_SERVER"),
                        name: "sendingServer",
                        required: this.state.showSetting,
                        value: u.smtpHost ? u.smtpHost : this.state.sName,
                        onChange: function(e) {
                            r.setState({
                                sName: e
                            })
                        },
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            l.t)("common.errorMessage.REQUIRED")
                        },
                        "aria-required": null === this || void 0 === this ? void 0 : null === (n = this.state) || void 0 === n ? void 0 : n.showSetting
                    }), P ? a.createElement(s.Hi, {
                        name: "smtpport",
                        className: "dropdown-label",
                        label: (0,
                        l.t)("settings.mail.ADVANCE_PORT"),
                        options: S,
                        required: this.state.showSetting,
                        onChange: function(e) {
                            r.setState({
                                sPort: e
                            })
                        },
                        type: "number",
                        value: u.smtpPort ? u.smtpPort : this.state.sPort,
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            l.t)("common.errorMessage.REQUIRED")
                        },
                        "aria-label": (0,
                        l.t)("settings.mail.ADVANCE_PORT")
                    }) : a.createElement(s.UP, {
                        className: "inputs-label",
                        label: (0,
                        l.t)("settings.mail.ADVANCE_PORT"),
                        name: "smtpport",
                        required: this.state.showSetting,
                        value: u.smtpPort ? u.smtpPort : this.state.sPort,
                        onChange: function(e) {
                            r.setState({
                                sPort: e
                            })
                        },
                        type: "number",
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            l.t)("common.errorMessage.REQUIRED")
                        },
                        "aria-required": null === this || void 0 === this ? void 0 : null === (i = this.state) || void 0 === i ? void 0 : i.showSetting
                    }), a.createElement(s.Hi, {
                        name: "smptSSL",
                        className: "dropdown-label dropdown-ssl-options",
                        label: (0,
                        l.t)("settings.mail.CONNECTION_TYPE"),
                        options: D,
                        required: this.state.showSetting,
                        onChange: function(e) {
                            r.setState({
                                smtpCheck: e
                            })
                        },
                        value: u.smtpSecurityType ? u.smtpSecurityType : d.t6,
                        "aria-label": (0,
                        l.t)("settings.mail.CONNECTION_TYPE")
                    })))
                }
            }, {
                key: "renderAdvancedSettingsInputFields",
                value: function() {
                    var e, t, n, i, r = this, o = this.props, u = o.data, c = o.errorType;
                    return a.createElement("div", {
                        class: "rui-mail-account-external-advanced-panel"
                    }, a.createElement("div", null, a.createElement("label", {
                        class: "ow-sub-heading",
                        "aria-label": (0,
                        l.t)("settings.mail.ACCOUNT_ADVANCE_TITLE")
                    }, (0,
                    l.t)("settings.mail.ACCOUNT_ADVANCE_TITLE"))), c === d.lL ? a.createElement("p", {
                        className: "ow-settingDetail-errorMsg"
                    }, (0,
                    m.CC)(errorMessage)) : "", a.createElement("fieldset", {
                        class: "field-set"
                    }, a.createElement("legend", {
                        class: "legend",
                        "aria-label": (0,
                        l.t)("settings.mail.ADVANCE_RECEIVE_MAIL")
                    }, (0,
                    l.t)("settings.mail.ADVANCE_RECEIVE_MAIL")), a.createElement(s.UP, {
                        className: "inputs-label",
                        label: (0,
                        l.t)("settings.mail.ADVANCE_INCOMING_SERVER"),
                        name: "receivingServer",
                        value: u.host ? u.host : this.state.rName,
                        required: this.state.showSetting,
                        onChange: function(e) {
                            r.setState({
                                rName: e
                            })
                        },
                        validate: this.serverValidate,
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            l.t)("common.errorMessage.REQUIRED")
                        },
                        "aria-required": null === this || void 0 === this ? void 0 : null === (e = this.state) || void 0 === e ? void 0 : e.showSetting
                    }), a.createElement(s.UP, {
                        className: "inputs-label",
                        label: (0,
                        l.t)("settings.mail.ADVANCE_PORT"),
                        name: "imailport",
                        required: this.state.showSetting,
                        value: u.port ? u.port : this.state.rPort,
                        onChange: function(e) {
                            r.setState({
                                rPort: e
                            })
                        },
                        type: "number",
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            l.t)("common.errorMessage.REQUIRED")
                        },
                        "aria-required": null === this || void 0 === this ? void 0 : null === (t = this.state) || void 0 === t ? void 0 : t.showSetting
                    }), a.createElement(s.bM, {
                        label: (0,
                        l.t)("settings.mail.ADVANCE_SSL"),
                        name: "imailSSL",
                        value: u.securityType ? u.securityType === d.CY : this.state.imailCheck,
                        checkedValue: !0,
                        uncheckedValue: !1,
                        onChange: function(e) {
                            r.setState({
                                imailCheck: e
                            })
                        }
                    })), a.createElement("fieldset", {
                        class: "field-set"
                    }, a.createElement("legend", {
                        class: "legend",
                        "aria-label": (0,
                        l.t)("settings.mail.ADVANCE_SENDING_MAIL")
                    }, (0,
                    l.t)("settings.mail.ADVANCE_SENDING_MAIL")), a.createElement(s.UP, {
                        className: "inputs-label",
                        label: (0,
                        l.t)("settings.mail.ADVANCE_OUTGOING_SERVER"),
                        name: "sendingServer",
                        required: this.state.showSetting,
                        value: u.smtpHost ? u.smtpHost : this.state.sName,
                        onChange: function(e) {
                            r.setState({
                                sName: e
                            })
                        },
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            l.t)("common.errorMessage.REQUIRED")
                        },
                        "aria-required": null === this || void 0 === this ? void 0 : null === (n = this.state) || void 0 === n ? void 0 : n.showSetting
                    }), a.createElement(s.UP, {
                        className: "inputs-label",
                        label: (0,
                        l.t)("settings.mail.ADVANCE_PORT"),
                        name: "smtpport",
                        required: this.state.showSetting,
                        value: u.smtpPort ? u.smtpPort : this.state.sPort,
                        onChange: function(e) {
                            r.setState({
                                sPort: e
                            })
                        },
                        type: "number",
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            l.t)("common.errorMessage.REQUIRED")
                        },
                        "aria-required": null === this || void 0 === this ? void 0 : null === (i = this.state) || void 0 === i ? void 0 : i.showSetting
                    }), a.createElement(s.bM, {
                        label: (0,
                        l.t)("settings.mail.ADVANCE_SSL"),
                        name: "smptSSL",
                        value: u.smtpSecurityType ? u.smtpSecurityType === d.CY : this.state.smtpCheck,
                        checkedValue: !0,
                        uncheckedValue: !1,
                        onChange: function(e) {
                            r.setState({
                                smtpCheck: e
                            })
                        },
                        "aria-label": (0,
                        l.t)("settings.mail.ADVANCE_SSL")
                    })))
                }
            }, {
                key: "renderAdvancedSettings",
                value: function() {
                    var e = this.props.externalAccountDetail;
                    return null !== e && void 0 !== e && e.allowedPorts && Object.keys(null === e || void 0 === e ? void 0 : e.allowedPorts).length > 0 ? this.renderAdvancedSettingsDropdown() : this.renderAdvancedSettingsInputFields()
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n = this, i = this.props, r = i.type, h = i.show, p = i.isLoading, f = i.errorType, v = i.errorMessage, g = i.onAdd, E = i.onUpdate, y = i.onCancel, C = (0,
                    u.Z)("mail.externalAccount.advancedSettingEnable"), b = this.state.formChanged || this.state.pwdUpdating ? (0,
                    l.t)("settings.mail.ACCOUNT_TEST") : (0,
                    l.t)("settings.mail.SAVING_ACCOUNT");
                    return a.createElement(o.Z, {
                        className: "ow-SettingsMailAccounts-Form",
                        show: h,
                        advancedSetting: this.state.showSetting,
                        needtestConnection: this.state.formChanged || this.state.pwdUpdating,
                        title: "new" === r ? (0,
                        l.t)("settings.mail.ACCOUNT_ADD_WINDOW_TITLE") : (0,
                        l.t)("settings.mail.ACCOUNT_EDIT_WINDOW_TITLE"),
                        desc: (0,
                        l.t)("settings.mail.ACCOUNT_DETAIL"),
                        isLoading: p,
                        loadingMessage: b,
                        onSave: "new" === r ? g : E,
                        onCancel: y,
                        onValueChanged: this.onValueChanged
                    }, a.createElement(s.l0, {
                        onChange: this.onFormChange,
                        className: "ow-settingsAccount-form"
                    }, C ? null : f === d.lL ? a.createElement("p", {
                        className: "ow-settingDetail-errorMsg"
                    }, " ", (0,
                    m.CC)(v)) : "", this.renderLabel(), this.renderInputFields(), C ? a.createElement("div", {
                        className: "rui-mail-account-external-advanced-panel",
                        onClick: function() {
                            n.handleSettingClick(n.state.showSetting)
                        }
                    }, a.createElement("span", {
                        class: "ow-sub-heading",
                        role: d.HB.HEADING,
                        "aria-level": d.DU.H3,
                        "aria-label": this.state.showSetting ? (0,
                        l.t)("settings.mail.ACCOUNT_HIDE_ADVANCE_HEADING") : (0,
                        l.t)("settings.mail.ACCOUNT_ADVANCE_HEADING")
                    }, " ", this.state.showSetting ? (0,
                    l.t)("settings.mail.ACCOUNT_HIDE_ADVANCE_HEADING") : (0,
                    l.t)("settings.mail.ACCOUNT_ADVANCE_HEADING")), a.createElement(c.Z, {
                        onKeyDown: function(e) {
                            return e.key === d.BY.ENTERKEY && n.handleSettingClick(n.state.showSetting)
                        },
                        tabIndex: 0,
                        name: this.state.showSetting ? "up-open" : "down-open",
                        role: d.HB.BUTTON,
                        "aria-label": null !== this && void 0 !== this && null !== (e = this.state) && void 0 !== e && e.showSetting ? (0,
                        l.t)("settings.mail.ACCOUNT_HIDE_ADVANCE_HEADING") : (0,
                        l.t)("settings.mail.ACCOUNT_ADVANCE_HEADING"),
                        "aria-expanded": null === this || void 0 === this ? void 0 : null === (t = this.state) || void 0 === t ? void 0 : t.showSetting
                    })) : null, C && this.state.showSetting ? this.renderAdvancedSettings() : null))
                }
            }]),
            n
        }());
        w.propTypes = S,
        w.defaultProps = {
            type: "new",
            data: {},
            show: !1,
            isLoading: !1,
            errorType: "",
            errorMessage: "",
            onAdd: function() {},
            onUpdate: function() {},
            onCancel: function() {},
            onValueChanged: function() {},
            imailCheck: "",
            smtpCheck: "",
            externalAccountDetail: {}
        },
        t.Z = w
    },
    78149: function(e, t, n) {
        e.exports = n(70964)
    }
}]);
