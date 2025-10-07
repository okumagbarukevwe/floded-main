/*! Synchronoss Messaging 2018 */
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[106], {
    29829: function(e, t, n) {
        "use strict";
        var r = n(73089)
          , a = n(89140)
          , o = n(1551)
          , i = n(47491)
          , l = n(52576);
        function s(e) {
            return e && 2 === e.length
        }
        t.rZ = function(e) {
            return s(e = e ? e.toUpperCase() : null) ? a[e] || "Wrong Country Code Input" : o[e] || "Wrong Country Code Input"
        }
    },
    18956: function(e) {
        e.exports = function(e) {
            return null === e
        }
    },
    13643: function(e, t, n) {
        var r = n(42190)
          , a = n(44317)
          , o = n(90114)
          , i = 9007199254740991
          , l = 4294967295
          , s = Math.min;
        e.exports = function(e, t) {
            if ((e = o(e)) < 1 || e > i)
                return [];
            var n = l
              , c = s(e, l);
            t = a(t),
            e -= l;
            for (var u = r(c, t); ++n < e; )
                t(n);
            return u
        }
    },
    59186: function(e, t, n) {
        var r = n(51177);
        e.exports = function(e) {
            return r(e).toUpperCase()
        }
    },
    75904: function(e, t, n) {
        "use strict";
        var r = n(82569);
        t.__esModule = !0,
        t.default = void 0;
        var a = r(n(69471))
          , o = r(n(66660))
          , i = r(n(87401))
          , l = r(n(23398))
          , s = r(n(18893))
          , c = r(n(123))
          , u = r(n(19117))
          , f = (0,
        o.default)({}, u.default.propTypes, {
            disabled: l.default.bool,
            title: l.default.node,
            tabClassName: l.default.string
        })
          , d = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return (0,
            a.default)(t, e),
            t.prototype.render = function() {
                var e = (0,
                o.default)({}, this.props);
                return delete e.title,
                delete e.disabled,
                delete e.tabClassName,
                i.default.createElement(u.default, e)
            }
            ,
            t
        }(i.default.Component);
        d.propTypes = f,
        d.Container = s.default,
        d.Content = c.default,
        d.Pane = u.default;
        var p = d;
        t.default = p,
        e.exports = t.default
    },
    18893: function(e, t, n) {
        "use strict";
        var r = n(82569);
        t.__esModule = !0,
        t.default = void 0;
        var a = r(n(50914))
          , o = r(n(69471))
          , i = r(n(87401))
          , l = r(n(23398))
          , s = n(10414)
          , c = l.default.oneOfType([l.default.string, l.default.number])
          , u = {
            id: function(e) {
                var t = null;
                if (!e.generateChildId) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                        r[a - 1] = arguments[a];
                    (t = c.apply(void 0, [e].concat(r))) || e.id || (t = new Error("In order to properly initialize Tabs in a way that is accessible to assistive technologies (such as screen readers) an `id` or a `generateChildId` prop to TabContainer is required"))
                }
                return t
            },
            generateChildId: l.default.func,
            onSelect: l.default.func,
            activeKey: l.default.any
        }
          , f = {
            $bs_tabContainer: l.default.shape({
                activeKey: l.default.any,
                onSelect: l.default.func.isRequired,
                getTabId: l.default.func.isRequired,
                getPaneId: l.default.func.isRequired
            })
        }
          , d = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            (0,
            o.default)(t, e);
            var n = t.prototype;
            return n.getChildContext = function() {
                var e = this.props
                  , t = e.activeKey
                  , n = e.onSelect
                  , r = e.generateChildId
                  , a = e.id
                  , o = r || function(e, t) {
                    return a ? a + "-" + t + "-" + e : null
                }
                ;
                return {
                    $bs_tabContainer: {
                        activeKey: t,
                        onSelect: n,
                        getTabId: function(e) {
                            return o(e, "tab")
                        },
                        getPaneId: function(e) {
                            return o(e, "pane")
                        }
                    }
                }
            }
            ,
            n.render = function() {
                var e = this.props
                  , t = e.children
                  , n = (0,
                a.default)(e, ["children"]);
                return delete n.generateChildId,
                delete n.onSelect,
                delete n.activeKey,
                i.default.cloneElement(i.default.Children.only(t), n)
            }
            ,
            t
        }(i.default.Component);
        d.propTypes = u,
        d.childContextTypes = f;
        var p = (0,
        s.uncontrollable)(d, {
            activeKey: "onSelect"
        });
        t.default = p,
        e.exports = t.default
    },
    123: function(e, t, n) {
        "use strict";
        var r = n(82569);
        t.__esModule = !0,
        t.default = void 0;
        var a = r(n(66660))
          , o = r(n(50914))
          , i = r(n(69471))
          , l = r(n(89653))
          , s = r(n(67064))
          , c = r(n(87401))
          , u = r(n(23398))
          , f = r(n(29653))
          , d = n(88378)
          , p = {
            componentClass: f.default,
            animation: u.default.oneOfType([u.default.bool, f.default]),
            mountOnEnter: u.default.bool,
            unmountOnExit: u.default.bool
        }
          , m = {
            $bs_tabContainer: u.default.shape({
                activeKey: u.default.any
            })
        }
          , h = {
            $bs_tabContent: u.default.shape({
                bsClass: u.default.string,
                animation: u.default.oneOfType([u.default.bool, f.default]),
                activeKey: u.default.any,
                mountOnEnter: u.default.bool,
                unmountOnExit: u.default.bool,
                onPaneEnter: u.default.func.isRequired,
                onPaneExited: u.default.func.isRequired,
                exiting: u.default.bool.isRequired
            })
        }
          , y = function(e) {
            function t(t, n) {
                var r;
                return (r = e.call(this, t, n) || this).handlePaneEnter = r.handlePaneEnter.bind((0,
                l.default)((0,
                l.default)(r))),
                r.handlePaneExited = r.handlePaneExited.bind((0,
                l.default)((0,
                l.default)(r))),
                r.state = {
                    activeKey: null,
                    activeChild: null
                },
                r
            }
            (0,
            i.default)(t, e);
            var n = t.prototype;
            return n.getChildContext = function() {
                var e = this.props
                  , t = e.bsClass
                  , n = e.animation
                  , r = e.mountOnEnter
                  , a = e.unmountOnExit
                  , o = this.state.activeKey
                  , i = this.getContainerActiveKey()
                  , l = null != o && o !== i;
                return {
                    $bs_tabContent: {
                        bsClass: t,
                        animation: n,
                        activeKey: null != o ? o : i,
                        mountOnEnter: r,
                        unmountOnExit: a,
                        onPaneEnter: this.handlePaneEnter,
                        onPaneExited: this.handlePaneExited,
                        exiting: l
                    }
                }
            }
            ,
            n.UNSAFE_componentWillReceiveProps = function(e) {
                !e.animation && this.state.activeChild && this.setState({
                    activeKey: null,
                    activeChild: null
                })
            }
            ,
            n.componentWillUnmount = function() {
                this.isUnmounted = !0
            }
            ,
            n.getContainerActiveKey = function() {
                var e = this.context.$bs_tabContainer;
                return e && e.activeKey
            }
            ,
            n.handlePaneEnter = function(e, t) {
                return !!this.props.animation && (t === this.getContainerActiveKey() && (this.setState({
                    activeKey: t,
                    activeChild: e
                }),
                !0))
            }
            ,
            n.handlePaneExited = function(e) {
                this.isUnmounted || this.setState(function(t) {
                    return t.activeChild !== e ? null : {
                        activeKey: null,
                        activeChild: null
                    }
                })
            }
            ,
            n.render = function() {
                var e = this.props
                  , t = e.componentClass
                  , n = e.className
                  , r = (0,
                o.default)(e, ["componentClass", "className"])
                  , i = (0,
                d.splitBsPropsAndOmit)(r, ["animation", "mountOnEnter", "unmountOnExit"])
                  , l = i[0]
                  , u = i[1];
                return c.default.createElement(t, (0,
                a.default)({}, u, {
                    className: (0,
                    s.default)(n, (0,
                    d.prefix)(l, "content"))
                }))
            }
            ,
            t
        }(c.default.Component);
        y.propTypes = p,
        y.defaultProps = {
            componentClass: "div",
            animation: !0,
            mountOnEnter: !1,
            unmountOnExit: !1
        },
        y.contextTypes = m,
        y.childContextTypes = h;
        var b = (0,
        d.bsClass)("tab", y);
        t.default = b,
        e.exports = t.default
    },
    19117: function(e, t, n) {
        "use strict";
        var r = n(82569);
        t.__esModule = !0,
        t.default = void 0;
        var a = r(n(66660))
          , o = r(n(50914))
          , i = r(n(69471))
          , l = r(n(89653))
          , s = r(n(67064))
          , c = r(n(87401))
          , u = r(n(23398))
          , f = r(n(29653))
          , d = (r(n(83087)),
        n(88378))
          , p = r(n(44072))
          , m = r(n(45202))
          , h = {
            eventKey: u.default.any,
            animation: u.default.oneOfType([u.default.bool, f.default]),
            id: u.default.string,
            "aria-labelledby": u.default.string,
            bsClass: u.default.string,
            onEnter: u.default.func,
            onEntering: u.default.func,
            onEntered: u.default.func,
            onExit: u.default.func,
            onExiting: u.default.func,
            onExited: u.default.func,
            mountOnEnter: u.default.bool,
            unmountOnExit: u.default.bool
        }
          , y = {
            $bs_tabContainer: u.default.shape({
                getTabId: u.default.func,
                getPaneId: u.default.func
            }),
            $bs_tabContent: u.default.shape({
                bsClass: u.default.string,
                animation: u.default.oneOfType([u.default.bool, f.default]),
                activeKey: u.default.any,
                mountOnEnter: u.default.bool,
                unmountOnExit: u.default.bool,
                onPaneEnter: u.default.func.isRequired,
                onPaneExited: u.default.func.isRequired,
                exiting: u.default.bool.isRequired
            })
        }
          , b = {
            $bs_tabContainer: u.default.oneOf([null])
        }
          , v = function(e) {
            function t(t, n) {
                var r;
                return (r = e.call(this, t, n) || this).handleEnter = r.handleEnter.bind((0,
                l.default)((0,
                l.default)(r))),
                r.handleExited = r.handleExited.bind((0,
                l.default)((0,
                l.default)(r))),
                r.in = !1,
                r
            }
            (0,
            i.default)(t, e);
            var n = t.prototype;
            return n.getChildContext = function() {
                return {
                    $bs_tabContainer: null
                }
            }
            ,
            n.componentDidMount = function() {
                this.shouldBeIn() && this.handleEnter()
            }
            ,
            n.componentDidUpdate = function() {
                this.in ? this.shouldBeIn() || this.handleExited() : this.shouldBeIn() && this.handleEnter()
            }
            ,
            n.componentWillUnmount = function() {
                this.in && this.handleExited()
            }
            ,
            n.getAnimation = function() {
                if (null != this.props.animation)
                    return this.props.animation;
                var e = this.context.$bs_tabContent;
                return e && e.animation
            }
            ,
            n.handleEnter = function() {
                var e = this.context.$bs_tabContent;
                e && (this.in = e.onPaneEnter(this, this.props.eventKey))
            }
            ,
            n.handleExited = function() {
                var e = this.context.$bs_tabContent;
                e && (e.onPaneExited(this),
                this.in = !1)
            }
            ,
            n.isActive = function() {
                var e = this.context.$bs_tabContent
                  , t = e && e.activeKey;
                return this.props.eventKey === t
            }
            ,
            n.shouldBeIn = function() {
                return this.getAnimation() && this.isActive()
            }
            ,
            n.render = function() {
                var e = this.props
                  , t = e.eventKey
                  , n = e.className
                  , r = e.onEnter
                  , i = e.onEntering
                  , l = e.onEntered
                  , u = e.onExit
                  , f = e.onExiting
                  , h = e.onExited
                  , y = e.mountOnEnter
                  , b = e.unmountOnExit
                  , v = (0,
                o.default)(e, ["eventKey", "className", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit"])
                  , g = this.context
                  , S = g.$bs_tabContent
                  , E = g.$bs_tabContainer
                  , C = (0,
                d.splitBsPropsAndOmit)(v, ["animation"])
                  , O = C[0]
                  , _ = C[1]
                  , w = this.isActive()
                  , D = this.getAnimation()
                  , T = null != y ? y : S && S.mountOnEnter
                  , P = null != b ? b : S && S.unmountOnExit;
                if (!w && !D && P)
                    return null;
                var A = !0 === D ? m.default : D || null;
                S && (O.bsClass = (0,
                d.prefix)(S, "pane"));
                var N = (0,
                a.default)({}, (0,
                d.getClassSet)(O), {
                    active: w
                });
                E && (_.id = E.getPaneId(t),
                _["aria-labelledby"] = E.getTabId(t));
                var R = c.default.createElement("div", (0,
                a.default)({}, _, {
                    role: "tabpanel",
                    "aria-hidden": !w,
                    className: (0,
                    s.default)(n, N)
                }));
                if (A) {
                    var I = S && S.exiting;
                    return c.default.createElement(A, {
                        in: w && !I,
                        onEnter: (0,
                        p.default)(this.handleEnter, r),
                        onEntering: i,
                        onEntered: l,
                        onExit: u,
                        onExiting: f,
                        onExited: (0,
                        p.default)(this.handleExited, h),
                        mountOnEnter: T,
                        unmountOnExit: P
                    }, R)
                }
                return R
            }
            ,
            t
        }(c.default.Component);
        v.propTypes = h,
        v.contextTypes = y,
        v.childContextTypes = b;
        var g = (0,
        d.bsClass)("tab-pane", v);
        t.default = g,
        e.exports = t.default
    },
    78355: function(e, t, n) {
        "use strict";
        var r = n(82569);
        t.__esModule = !0,
        t.default = void 0;
        var a = r(n(66660))
          , o = r(n(50914))
          , i = r(n(69471))
          , l = r(n(87401))
          , s = r(n(23398))
          , c = r(n(4055))
          , u = n(10414)
          , f = r(n(29653))
          , d = r(n(98664))
          , p = r(n(19745))
          , m = r(n(18893))
          , h = r(n(123))
          , y = n(88378)
          , b = r(n(63523))
          , v = m.default.ControlledComponent
          , g = {
            activeKey: s.default.any,
            bsStyle: s.default.oneOf(["tabs", "pills"]),
            animation: s.default.oneOfType([s.default.bool, f.default]),
            id: (0,
            c.default)(s.default.oneOfType([s.default.string, s.default.number])),
            onSelect: s.default.func,
            mountOnEnter: s.default.bool,
            unmountOnExit: s.default.bool
        };
        var S = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            (0,
            i.default)(t, e);
            var n = t.prototype;
            return n.renderTab = function(e) {
                var t = e.props
                  , n = t.title
                  , r = t.eventKey
                  , a = t.disabled
                  , o = t.tabClassName;
                return null == n ? null : l.default.createElement(p.default, {
                    eventKey: r,
                    disabled: a,
                    className: o
                }, n)
            }
            ,
            n.render = function() {
                var e = this.props
                  , t = e.id
                  , n = e.onSelect
                  , r = e.animation
                  , i = e.mountOnEnter
                  , s = e.unmountOnExit
                  , c = e.bsClass
                  , u = e.className
                  , f = e.style
                  , p = e.children
                  , m = e.activeKey
                  , y = void 0 === m ? function(e) {
                    var t;
                    return b.default.forEach(e, function(e) {
                        null == t && (t = e.props.eventKey)
                    }),
                    t
                }(p) : m
                  , g = (0,
                o.default)(e, ["id", "onSelect", "animation", "mountOnEnter", "unmountOnExit", "bsClass", "className", "style", "children", "activeKey"]);
                return l.default.createElement(v, {
                    id: t,
                    activeKey: y,
                    onSelect: n,
                    className: u,
                    style: f
                }, l.default.createElement("div", null, l.default.createElement(d.default, (0,
                a.default)({}, g, {
                    role: "tablist"
                }), b.default.map(p, this.renderTab)), l.default.createElement(h.default, {
                    bsClass: c,
                    animation: r,
                    mountOnEnter: i,
                    unmountOnExit: s
                }, p)))
            }
            ,
            t
        }(l.default.Component);
        S.propTypes = g,
        S.defaultProps = {
            bsStyle: "tabs",
            animation: !0,
            mountOnEnter: !1,
            unmountOnExit: !1
        },
        (0,
        y.bsClass)("tab", S);
        var E = (0,
        u.uncontrollable)(S, {
            activeKey: "onSelect"
        });
        t.default = E,
        e.exports = t.default
    },
    22326: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return O
            }
        });
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(67064)
          , l = n.n(i)
          , s = n(35369)
          , c = n(13536)
          , u = n(54075)
          , f = n(77545)
          , d = n(84987)
          , p = n(4446)
          , m = n(94165)
          , h = n(44910);
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
        function g(e, t) {
            return (g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function S(e) {
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
                var n, r = C(e);
                if (t) {
                    var a = C(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === y(t) || "function" == typeof t))
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
        function C(e) {
            return (C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var O = function(e) {
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
            var t = S(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    isFormChanged: !1,
                    displayConfirm: e.displayConfirm,
                    displayAlert: !1
                },
                r.setDisplayConfirm = r.setDisplayConfirm.bind(E(r)),
                r.setDisplayAlert = r.setDisplayAlert.bind(E(r)),
                r.handleConfirmYes = r.handleConfirmYes.bind(E(r)),
                r.handleConfirmNo = r.handleConfirmNo.bind(E(r)),
                r.handleConfirmCancel = r.handleConfirmCancel.bind(E(r)),
                r.setFormIsValid = r.setFormIsValid.bind(E(r)),
                r.handleFormChange = r.handleFormChange.bind(E(r)),
                r.handleFormValidSubmit = r.handleFormValidSubmit.bind(E(r)),
                r.handleFormInvalidSubmit = r.handleFormInvalidSubmit.bind(E(r)),
                r.handleSave = r.handleSave.bind(E(r)),
                r.handleCancel = r.handleCancel.bind(E(r)),
                r.renderHeader = r.renderHeader.bind(E(r)),
                r.renderSettingsContent = r.renderSettingsContent.bind(E(r)),
                r.renderConfirmModal = r.renderConfirmModal.bind(E(r)),
                r.renderAlertModal = r.renderAlertModal.bind(E(r)),
                r.settingsDetail = r.settingsDetail.bind(E(r)),
                r
            }
            return function(e, t, n) {
                t && b(e.prototype, t),
                n && b(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.props.displayConfirm !== e.displayConfirm && this.setDisplayConfirm(e.displayConfirm)
                }
            }, {
                key: "settingsDetail",
                value: function(e) {
                    var t;
                    e && (null === e || void 0 === e || null === (t = e.querySelector(".ow-settingsDetail-body")) || void 0 === t || t.focus())
                }
            }, {
                key: "setDisplayConfirm",
                value: function(e) {
                    this.setState({
                        displayConfirm: e
                    })
                }
            }, {
                key: "setDisplayAlert",
                value: function(e) {
                    this.setState({
                        displayAlert: e
                    })
                }
            }, {
                key: "setFormIsValid",
                value: function(e) {
                    this.formIsValid = e
                }
            }, {
                key: "handleConfirmYes",
                value: function() {
                    var e = this.props
                      , t = e.onConfirmYes
                      , n = e.onConfirmCancel;
                    this.setDisplayConfirm(!1),
                    this.handleSave(),
                    this.formIsValid ? t() : n()
                }
            }, {
                key: "handleConfirmNo",
                value: function() {
                    var e = this.props.onConfirmNo
                      , t = this.form.getPristineValues();
                    this.formReset(t),
                    this.setDisplayConfirm(!1),
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
                key: "formReset",
                value: function(e) {
                    this.setState({
                        isFormChanged: !1
                    }),
                    this.form.reset(e),
                    this.form.inputs.forEach(function(e) {
                        e.setState({
                            isPristine: !0
                        })
                    })
                }
            }, {
                key: "handleFormChange",
                value: function(e, t) {
                    var n = this.props.onFormChange;
                    this.setState({
                        isFormChanged: t
                    }),
                    n(t, e)
                }
            }, {
                key: "handleFormValidSubmit",
                value: function() {
                    var e = this.props.onSave
                      , t = this.form.getCurrentValues()
                      , n = this.form.props.data || this.form.getPristineValues()
                      , r = {};
                    Object.keys(t).forEach(function(e) {
                        t[e] !== n[e] && (r[e] = t[e])
                    }),
                    e(r)
                }
            }, {
                key: "handleFormInvalidSubmit",
                value: function() {
                    this.setDisplayAlert(!0)
                }
            }, {
                key: "handleSave",
                value: function() {
                    this.form.submit()
                }
            }, {
                key: "handleCancel",
                value: function() {
                    (0,
                    this.props.onCancel)(this.form.getPristineValues()),
                    this.setDisplayConfirm(!0)
                }
            }, {
                key: "renderHeader",
                value: function() {
                    var e = this.props
                      , t = e.title
                      , n = e.desc;
                    return r.createElement("div", {
                        className: "ow-settingsDetail-header",
                        tabIndex: 0
                    }, r.createElement("div", {
                        className: "ow-settingsDetail-header-title",
                        role: m.HB.HEADING,
                        "aria-level": m.DU.H2,
                        "aria-label": t
                    }, t), r.createElement("div", {
                        className: "ow-settingsDetail-header-desc",
                        "aria-label": n
                    }, n))
                }
            }, {
                key: "renderSettingsBody",
                value: function() {
                    return r.createElement("div", {
                        className: "ow-settingsDetail-body",
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            var t;
                            e.key === m.BY.TABKEY && (e.shiftKey && ("ow-settingsDetail-body" === (null === (t = document.activeElement) || void 0 === t ? void 0 : t.className) ? (0,
                            h.kW)(".ow-collapse-tab-active") : e.stopPropagation()))
                        }
                    }, this.renderHeader(), this.renderSettingsContent(), this.renderToolbar())
                }
            }, {
                key: "renderSettingsSecurityBody",
                value: function() {
                    return r.createElement("div", {
                        className: "ow-settingsDetail-body ow-settingsDetail-security-enhancement-form",
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            var t;
                            e.key === m.BY.TABKEY && (e.shiftKey && ("ow-settingsDetail-body" === (null === (t = document.activeElement) || void 0 === t ? void 0 : t.className) ? (0,
                            h.kW)(".ow-collapse-tab-active") : e.stopPropagation()))
                        }
                    }, this.renderHeader(), this.renderSettingsContent(), this.renderToolbar())
                }
            }, {
                key: "renderSettingsContent",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.children
                      , a = t.isSecurity
                      , o = t.className;
                    return r.createElement("div", {
                        className: "ow-settingsDetail-content",
                        id: a ? "ow-main-security" : o,
                        tabIndex: 0
                    }, r.Children.map(n, function(t) {
                        return t && t.type === s.l0 ? r.cloneElement(t, {
                            className: l()("ow-settingsDetail-form", t.props.className),
                            onChange: function() {
                                var n;
                                e.handleFormChange.apply(e, arguments),
                                t.props.onChange && (n = t.props).onChange.apply(n, arguments)
                            },
                            onValid: function() {
                                e.setFormIsValid(!0),
                                t.props.onValid && t.props.onValid()
                            },
                            onInvalid: function() {
                                e.setFormIsValid(!1),
                                t.props.onInvalid && t.props.onInvalid()
                            },
                            onValidSubmit: function() {
                                var n;
                                e.handleFormValidSubmit.apply(e, arguments),
                                t.props.onValidSubmit && (n = t.props).onValidSubmit.apply(n, arguments)
                            },
                            onInvalidSubmit: function() {
                                var n;
                                e.handleFormInvalidSubmit.apply(e, arguments),
                                t.props.onInvalidSubmit && (n = t.props).onInvalidSubmit.apply(n, arguments)
                            },
                            ref: function(n) {
                                e.form = n,
                                t.ref && t.ref(n)
                            }
                        }) : t
                    }))
                }
            }, {
                key: "renderToolbar",
                value: function() {
                    var e = this.props
                      , t = e.enableSave
                      , n = e.enableCancel
                      , a = this.state.isFormChanged;
                    if (t || n)
                        return r.createElement("div", {
                            className: "ow-settingsDetail-toolbar"
                        }, t && r.createElement(f.Z, {
                            className: "ow-settings-button ow-settingsButton-default",
                            disabled: !a,
                            onClick: this.handleSave,
                            role: m.HB.BUTTON,
                            "aria-label": (0,
                            d.t)("common.SAVE"),
                            "aria-disabled": !a,
                            tabIndex: 0
                        }, (0,
                        d.t)("common.SAVE")), n && r.createElement(f.Z, {
                            className: "ow-settings-button ow-button-primary",
                            disabled: !a,
                            onClick: this.handleCancel,
                            role: m.HB.BUTTON,
                            "aria-label": (0,
                            d.t)("common.CANCEL"),
                            "aria-disabled": !a,
                            tabIndex: 0,
                            onKeyDown: function(e) {
                                e.key === m.BY.ENTERKEY && (0,
                                h.Mb)()
                            }
                        }, (0,
                        d.t)("common.CANCEL")))
                }
            }, {
                key: "renderConfirmModal",
                value: function() {
                    return r.createElement(c.Z, {
                        show: !0,
                        buttonConfig: ["yes", "no"],
                        title: (0,
                        d.t)("settings.saveSettings.TITLE"),
                        message: (0,
                        d.t)("settings.saveSettings.DESC"),
                        onYes: this.handleConfirmYes,
                        onNo: this.handleConfirmNo,
                        onDismiss: this.handleConfirmCancel
                    })
                }
            }, {
                key: "renderAlertModal",
                value: function() {
                    var e = this;
                    return r.createElement(u.Z, {
                        show: !0,
                        title: (0,
                        d.t)("common.ERROR"),
                        message: (0,
                        d.t)("app.errorMessage.INVALID_INPUT_DATA"),
                        onHide: function() {
                            return e.setDisplayAlert(!1)
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.isSecurity
                      , a = this.state
                      , o = a.displayConfirm
                      , i = a.displayAlert;
                    return r.createElement("div", {
                        className: l()("ow-settings-detail", t),
                        ref: this.settingsDetail
                    }, p.UhU.isDesktop && n ? this.renderSettingsSecurityBody(!0) : this.renderSettingsBody(), o && this.renderConfirmModal(), i && this.renderAlertModal())
                }
            }]),
            n
        }();
        O.defaultProps = {
            className: "",
            title: "",
            desc: "",
            enableSave: !0,
            enableCancel: !0,
            displayConfirm: !1,
            onSave: function() {},
            onCancel: function() {},
            onFormChange: function() {},
            onConfirmYes: function() {},
            onConfirmNo: function() {},
            onConfirmCancel: function() {},
            children: null,
            isSecurity: !1
        },
        O.propTypes = {
            className: o().string,
            title: o().string,
            isSecurity: o().bool,
            desc: o().string,
            enableSave: o().bool,
            enableCancel: o().bool,
            displayConfirm: o().bool,
            onSave: o().func,
            onCancel: o().func,
            onFormChange: o().func,
            onConfirmYes: o().func,
            onConfirmNo: o().func,
            onConfirmCancel: o().func,
            children: o().node
        }
    },
    36447: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return C
            }
        });
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(80861)
          , l = n(46262)
          , s = n(84987)
          , c = n(83416)
          , u = n(44461)
          , f = n(32081)
          , d = n(7179)
          , p = n(4446)
          , m = n(94165);
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
                    var a = E(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === h(t) || "function" == typeof t))
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
        function E(e) {
            return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                t && v(e, t)
            }(n, r.PureComponent);
            var t = g(n);
            function n(e) {
                var r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n);
                var a = (r = t.call(this, e)).getData();
                return e.onSelectedChange(a[0].name),
                r.selected = r.getSelectedName(e.selected),
                r.renderListItems = r.renderListItems.bind(S(r)),
                r.renderSecondLevelListItems = r.renderSecondLevelListItems.bind(S(r)),
                r.trackClickCount = r.trackClickCount.bind(S(r)),
                r.bannerPage = r.bannerPage.bind(S(r)),
                r.state = {
                    mailClickCount: 0
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
                    var e = this.props
                      , t = e.routerLocation
                      , n = t.pathname
                      , r = t.hash
                      , a = e.onSelectedChange;
                    this.bannerPage(n, r, a)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props
                      , n = t.routerLocation
                      , r = n.pathname
                      , a = n.hash
                      , o = t.onSelectedChange;
                    a !== e.routerLocation.hash && this.bannerPage(r, a, o)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.props.selected !== e.selected && (this.selected = this.getSelectedName(e.selected))
                }
            }, {
                key: "bannerPage",
                value: function(e, t, n) {
                    /settings(#cloud)+/.test(e + t) ? n("Cloud") : /settings(#cleanup)+/.test(e + t) ? n("MailGeneral#MessageCleanup") : /settings(#Blockimages)+/.test(e + t) ? n("MailGeneral#BlockImage") : /settings(#autoReply)+/.test(e + t) ? n("MailGeneral#AutoReply") : /settings(#autoForward)+/.test(e + t) ? n("MailGeneral#AutoForward") : /settings(#mailRules)+/.test(e + t) && n("MailGeneral#MailRules")
                }
            }, {
                key: "getData",
                value: function() {
                    var e = this.props.account.mailAlias || {}
                      , t = e.enabled
                      , n = e.limit
                      , r = (0,
                    c.Z)("common.concurrentLogin.enabled")
                      , a = (0,
                    c.Z)("mail.loginHistory.enabled")
                      , o = r || a
                      , i = "MX" === (0,
                    d.sO)();
                    return (0,
                    l.uR)({
                        cloudEnabled: (0,
                        c.Z)("cloud.enabled"),
                        aliasEnabled: t && n && (0,
                        c.Z)("mail.alias.enabled"),
                        cleanupEnabled: (0,
                        c.Z)("mail.cleanup.enabled"),
                        calendarEnabled: (0,
                        c.Z)("calendar.enabled"),
                        configDeviceLoginHistoryEnabled: a,
                        configConcurrentLoginEnabled: r,
                        loginDetailEnabled: o,
                        isMX: i
                    })
                }
            }, {
                key: "getSelectedName",
                value: function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split("#");
                    return e.length > 1 ? e[e.length - 1] : e[0]
                }
            }, {
                key: "trackClickCount",
                value: function(e) {
                    e === p._r7 ? 2 !== this.state.mailClickCount ? this.setState({
                        mailClickCount: this.state.mailClickCount + 1
                    }) : this.setState({
                        mailClickCount: this.state.mailClickCount - 1
                    }) : this.setState({
                        mailClickCount: 0
                    })
                }
            }, {
                key: "createSelectedName",
                value: function(e, t) {
                    return t ? "".concat(t, "#").concat(e) : e
                }
            }, {
                key: "renderListItems",
                value: function(e, t) {
                    var n = this
                      , a = e.name
                      , o = e.desc
                      , i = this.props.onSelectedChange
                      , c = this.state.mailClickCount;
                    return r.createElement("div", {
                        className: "ow-settings-listItem ".concat(this.selected === a ? "ow-settings-listItem-selected" : ""),
                        "aria-current": (null === this || void 0 === this ? void 0 : this.selected) === a
                    }, r.createElement(u.Z, null, r.createElement("div", {
                        role: m.HB.PRESENTATION,
                        class: "ow-settings-presentation",
                        onClick: function() {
                            i(n.createSelectedName(a, t), n.trackClickCount(a))
                        }
                    }, void 0 === t ? r.createElement(f.Z, {
                        name: l.Lj[a]
                    }) : "", r.createElement("span", {
                        className: "ow-focus"
                    }, " ", (0,
                    s.t)("settings.MODULE_DESC.".concat(o)), " "), "MAIL" === o && r.createElement("span", {
                        className: "caret",
                        role: m.HB.BUTTON,
                        "aria-atomic": "true",
                        "aria-label": 1 === c ? (0,
                        s.t)("aria.label.EXPAND") : (0,
                        s.t)("aria.label.COLLAPSE"),
                        "aria-expanded": 1 === c,
                        "aria-live": c <= 1 && p.HOX.POLITE
                    }))))
                }
            }, {
                key: "renderSecondLevelListItems",
                value: function(e, t, n) {
                    var a = this;
                    return r.createElement("div", {
                        className: "ow-settings-listItem-secondLevel",
                        role: m.HB.LIST
                    }, e && t && t.map(function(e) {
                        return a.renderItem(e, n)
                    }))
                }
            }, {
                key: "renderItem",
                value: function(e, t) {
                    var n = this
                      , a = e.name
                      , o = e.desc
                      , l = e.children
                      , s = this.props
                      , c = s.onSelectedChange
                      , u = s.account
                      , f = this.selected;
                    if (void 0 !== u && void 0 !== u.allowedSenderSettings && void 0 !== u.blockedSenderSettings) {
                        if ("SafeSenders" === a && !u.allowedSenderSettings.enabled)
                            return;
                        if ("BlockedSenders" === a && !u.blockedSenderSettings.enabled)
                            return
                    }
                    var d = (f === a || l && l.some(function(e) {
                        return e.name === f
                    })) && this.state.mailClickCount <= 1;
                    return r.createElement(i.i, {
                        id: a,
                        key: a,
                        onClick: function() {
                            return c(n.createSelectedName(a, t))
                        },
                        active: f
                    }, this.renderListItems({
                        name: a,
                        desc: o
                    }, t), this.renderSecondLevelListItems(d, l, a))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.onSelectedChange
                      , a = t.selected
                      , o = this.getData();
                    return r.createElement("div", {
                        className: "ow-settings-list"
                    }, r.createElement(i.Z, {
                        onFocus: n,
                        active: a
                    }, o.map(function(t) {
                        return e.renderItem(t)
                    })))
                }
            }]),
            n
        }();
        C.defaultProps = {
            account: {},
            selected: "",
            onSelectedChange: function() {},
            routerLocation: {
                pathname: "",
                hash: ""
            }
        },
        C.propTypes = {
            account: o().object,
            selected: o().string,
            onSelectedChange: o().func,
            routerLocation: o().shape({
                pathname: o().string,
                hash: o().string
            })
        }
    },
    67462: function(e, t, n) {
        "use strict";
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(16969)
          , l = n(35369)
          , s = n(84987)
          , c = n(4446)
          , u = n(68777);
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
        var d = ["data", "onChange"]
          , p = ["data", "onSave", "onChange"];
        function m() {
            return (m = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function h(e, t) {
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
                    var a = E(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === f(t) || "function" == typeof t))
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
        function E(e) {
            return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var C = c.UhU.isDesktop
          , O = {
            data: o().object,
            onChange: o().func,
            onSave: o().func
        }
          , _ = function(e) {
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
                (r = t.call(this, e)).renderRadioButton = r.renderRadioButton.bind(S(r)),
                r
            }
            return function(e, t, n) {
                t && y(e.prototype, t),
                n && y(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "renderRadioButton",
                value: function() {
                    var e = this.props
                      , t = e.data
                      , n = e.onChange;
                    h(e, d);
                    return r.createElement(u.Z, {
                        name: "imageBlockerOption",
                        value: t,
                        alignText: "right",
                        list: [{
                            value: "alwaysAllow",
                            text: (0,
                            s.t)("settings.blockImage.CHOICE[0]")
                        }, {
                            value: "alwaysBlock",
                            text: (0,
                            s.t)("settings.blockImage.CHOICE[1]")
                        }, {
                            value: "allowFromContacts",
                            text: (0,
                            s.t)("settings.blockImage.CHOICE[2]")
                        }, {
                            value: "blockFromSpam",
                            text: (0,
                            s.t)("settings.blockImage.CHOICE[3]")
                        }],
                        onChange: n
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.data,
                    e.onSave)
                      , n = (e.onChange,
                    h(e, p));
                    return r.createElement(i.Z, m({}, n, {
                        title: (0,
                        s.t)("settings.blockImage.TITLE"),
                        desc: (0,
                        s.t)("settings.blockImage.DESC"),
                        onSave: function(e) {
                            var n = e.imageBlockerOption;
                            return t({
                                imageBlockerOption: n
                            })
                        },
                        enableCancel: C
                    }), r.createElement(l.l0, {
                        className: "ow-settings-blockImage-form"
                    }, this.renderRadioButton()))
                }
            }]),
            n
        }();
        _.propTypes = O,
        _.defaultProps = {
            data: {},
            onChange: function() {},
            onSave: function() {}
        },
        t.Z = _
    },
    98568: function(e, t, n) {
        "use strict";
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(13643)
          , l = n.n(i)
          , s = n(35369)
          , c = n(16969)
          , u = n(84987)
          , f = n(83416)
          , d = n(4446)
          , p = n(70293)
          , m = n.n(p)
          , h = n(38868)
          , y = n.n(h);
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
        var v = ["data", "isHour24", "onSave"];
        function g() {
            return (g = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function S(e, t) {
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
        function E(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, C(r.key), r)
            }
        }
        function C(e) {
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
        function O(e, t) {
            return (O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function _(e) {
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
                    if (t && ("object" === b(t) || "function" == typeof t))
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
        function w(e) {
            return (w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var D = d.UhU.isMobile
          , T = d.UhU.isDesktop
          , P = (0,
        f.Z)("calendar.TRASH_SUPPORT").trashSupport
          , A = void 0 !== P && P
          , N = (0,
        f.Z)("calendar.SMS_SUPPORT").SMSSupport
          , R = void 0 !== N && N
          , I = [{
            label: "7 Days",
            value: "7"
        }, {
            label: "30 Days",
            value: "30"
        }, {
            label: "90 Days",
            value: "90"
        }]
          , M = [{
            label: "5 m",
            value: "5"
        }, {
            label: "15 m",
            value: "15"
        }, {
            label: "30 m",
            value: "30"
        }, {
            label: "45 m",
            value: "45"
        }, {
            label: "1 h",
            value: "60"
        }, {
            label: "3 h",
            value: "180"
        }, {
            label: "6 h",
            value: "360"
        }, {
            label: "12 h",
            value: "720"
        }, {
            label: "24 h",
            value: "1440"
        }]
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
                t && O(e, t)
            }(n, r.PureComponent);
            var t = _(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && E(e.prototype, t),
                n && E(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "getTimeOptions",
                value: function(e) {
                    var t = [];
                    return e ? l()(24, function(e) {
                        e < 10 ? t.push({
                            label: "0".concat(e, ":00"),
                            value: e
                        }) : t.push({
                            label: "".concat(e, ":00"),
                            value: e
                        })
                    }) : l()(24, function(e) {
                        e < 12 ? t.push({
                            label: "".concat(e, ":00 AM"),
                            value: e
                        }) : t.push({
                            label: "".concat(12 === e ? e : e % 12, ":00 PM"),
                            value: e
                        })
                    }),
                    t
                }
            }, {
                key: "getDefaultOptions",
                value: function() {
                    return [{
                        label: (0,
                        u.t)("calendar.toolbar.BUTTON_DAY"),
                        value: "day"
                    }, {
                        label: (0,
                        u.t)("calendar.toolbar.BUTTON_WEEK"),
                        value: "week"
                    }, {
                        label: (0,
                        u.t)("calendar.toolbar.BUTTON_MONTH"),
                        value: "month"
                    }, {
                        label: (0,
                        u.t)("calendar.toolbar.BUTTON_AGENDA"),
                        value: "list"
                    }]
                }
            }, {
                key: "weekStartOptions",
                value: function() {
                    return [{
                        label: (0,
                        u.t)("calendar.dayListDisplay.su"),
                        value: "0"
                    }, {
                        label: (0,
                        u.t)("calendar.dayListDisplay.mo"),
                        value: "1"
                    }, {
                        label: (0,
                        u.t)("calendar.dayListDisplay.tu"),
                        value: "2"
                    }, {
                        label: (0,
                        u.t)("calendar.dayListDisplay.we"),
                        value: "3"
                    }, {
                        label: (0,
                        u.t)("calendar.dayListDisplay.th"),
                        value: "4"
                    }, {
                        label: (0,
                        u.t)("calendar.dayListDisplay.fr"),
                        value: "5"
                    }, {
                        label: (0,
                        u.t)("calendar.dayListDisplay.sa"),
                        value: "6"
                    }]
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.data
                      , n = e.isHour24
                      , a = e.onSave
                      , o = S(e, v);
                    return r.createElement(c.Z, g({}, o, {
                        className: "ow-settingsCalendar",
                        title: (0,
                        u.t)("settings.calendar.TITLE"),
                        desc: (0,
                        u.t)("settings.calendar.DESC"),
                        onSave: a,
                        enableBack: D,
                        enableCancel: !D
                    }), r.createElement(s.l0, null, r.createElement(y(), null, A && r.createElement(m(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, r.createElement(s.hE, {
                        label: (0,
                        u.t)("settings.calendar.AUTO_EMPTY_TRASH_LOGOUT"),
                        name: "autoEmptyTrashLogout",
                        value: t.autoEmptyTrashBeforeLogout,
                        checkedValue: "true",
                        uncheckedValue: "false"
                    })), T && r.createElement(m(), {
                        lg: "5",
                        md: "5",
                        xs: "12"
                    }, r.createElement(s.Hi, {
                        label: (0,
                        u.t)("settings.calendar.VIEW"),
                        name: "defaultView",
                        value: t.defaultView,
                        isValidNewOption: !1,
                        options: this.getDefaultOptions()
                    })), r.createElement(m(), {
                        lg: "5",
                        md: "5",
                        xs: "12"
                    }, r.createElement(s.Hi, {
                        label: (0,
                        u.t)("settings.calendar.EVENT_DURATION"),
                        name: "eventDurationTime",
                        value: t.eventDurationTime,
                        options: M
                    }))), r.createElement(y(), null, r.createElement(m(), {
                        lg: "5",
                        md: "5",
                        xs: "12"
                    }, r.createElement(s.Hi, {
                        label: (0,
                        u.t)("settings.calendar.DAY_START"),
                        name: "dayStart",
                        value: t.dayStart,
                        options: this.getTimeOptions(n),
                        validations: {
                            customRegexp: function(e) {
                                var t = e.dayEnd
                                  , n = e.dayStart;
                                return !(t && +n >= +t) || (0,
                                u.t)("calendar.warningMessage.DATE_VALIDATION_MESSAGE")
                            }
                        }
                    })), r.createElement(m(), {
                        lg: "5",
                        md: "5",
                        xs: "12"
                    }, r.createElement(s.Hi, {
                        label: (0,
                        u.t)("settings.calendar.DAY_END"),
                        name: "dayEnd",
                        value: t.dayEnd,
                        options: this.getTimeOptions(n),
                        validations: {
                            customRegexp: function(e) {
                                var t = e.dayEnd
                                  , n = e.dayStart;
                                return !(n && +n >= +t) || (0,
                                u.t)("calendar.warningMessage.DATE_VALIDATION_MESSAGE")
                            }
                        }
                    }))), r.createElement(y(), null, r.createElement(m(), {
                        lg: "5",
                        md: "5",
                        xs: "12"
                    }, r.createElement(s.Hi, {
                        label: (0,
                        u.t)("settings.calendar.WEEK_START"),
                        name: "weekStart",
                        value: "7" === t.weekStart ? "0" : t.weekStart,
                        options: this.weekStartOptions()
                    }))), R && r.createElement(y(), {
                        className: "ow-row-top-iconCheckbox"
                    }, r.createElement(m(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, r.createElement(s.hE, {
                        label: (0,
                        u.t)("settings.calendar.AUTO_EMPTY_TRASH_LOGOUT"),
                        name: "SMSReminder",
                        value: t.SMSReminder,
                        checkedValue: "true",
                        uncheckedValue: "false"
                    }))), A && r.createElement(y(), null, r.createElement(m(), {
                        lg: "5",
                        md: "5",
                        xs: "12"
                    }, r.createElement(s.Hi, {
                        label: (0,
                        u.t)("settings.calendar.AUTO_EMPTY_TRASH"),
                        name: "autoEmptyTrash",
                        value: t.autoEmptyTrash,
                        options: I
                    })))))
                }
            }]),
            n
        }();
        L.defaultProps = {
            data: {},
            isHour24: !1,
            onSave: function() {}
        },
        L.propTypes = {
            data: o().object,
            isHour24: o().bool,
            onSave: o().func
        },
        t.Z = L
    },
    95551: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return x
            }
        });
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(90966)
          , l = n.n(i)
          , s = n(59186)
          , c = n.n(s)
          , u = n(48306)
          , f = n.n(u)
          , d = n(82e3)
          , p = n.n(d)
          , m = n(35369)
          , h = n(16969)
          , y = n(84987)
          , b = n(4446)
          , v = n(94165)
          , g = n(83416)
          , S = n(70293)
          , E = n.n(S)
          , C = n(38868)
          , O = n.n(C);
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
        var w = ["data", "timezoneOptions"]
          , D = ["data"]
          , T = ["data"]
          , P = ["data"]
          , A = ["data"];
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
        function R(e, t) {
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
        function I(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, M(r.key), r)
            }
        }
        function M(e) {
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
        function L(e, t) {
            return (L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, r = k(e);
                if (t) {
                    var a = k(this).constructor;
                    n = Reflect.construct(r, arguments, a)
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
        function k(e) {
            return (k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var F = (0,
        g.Z)("settings.preference")
          , U = b.UhU.isMobile
          , x = function(e) {
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
                t && L(e, t)
            }(n, r.PureComponent);
            var t = j(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    disableTimezoneSelect: e.data && r.isUseDeviceTimeZone(e.data)
                },
                r.setDisableTimezoneSelect = r.setDisableTimezoneSelect.bind(B(r)),
                r.handleCheckboxChange = r.handleCheckboxChange.bind(B(r)),
                r.handleSave = r.handleSave.bind(B(r)),
                r.renderTimeZoneFields = r.renderTimeZoneFields.bind(B(r)),
                r.renderLanguageField = r.renderLanguageField.bind(B(r)),
                r.renderDateFormatField = r.renderDateFormatField.bind(B(r)),
                r.renderTimeFormatField = r.renderTimeFormatField.bind(B(r)),
                r
            }
            return function(e, t, n) {
                t && I(e.prototype, t),
                n && I(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.props.data[v.sw.useDeviceTimeZone.key] !== e.data[v.sw.useDeviceTimeZone.key] && this.setDisableTimezoneSelect(e.data)
                }
            }, {
                key: "setDisableTimezoneSelect",
                value: function(e) {
                    this.setState({
                        disableTimezoneSelect: this.isUseDeviceTimeZone(e)
                    })
                }
            }, {
                key: "getZoneOfSystem",
                value: function() {
                    var e = this.props
                      , t = e.timezoneIdList
                      , n = e.timezoneOptions
                      , r = p().tz.guess(!0);
                    if (t.includes(r))
                        return r;
                    var a = -60 * (new Date).getTimezoneOffset() * 1e3
                      , o = (f()(n, function(e) {
                        return e.offset === a
                    }) || {}).value;
                    return void 0 === o ? "" : o
                }
            }, {
                key: "isUseDeviceTimeZone",
                value: function(e) {
                    return l()(e) ? "true" === e[v.sw.useDeviceTimeZone.key] : "true" === e
                }
            }, {
                key: "handleCheckboxChange",
                value: function(e) {
                    this.isUseDeviceTimeZone(e) && this.timezoneRef.setValue(this.getZoneOfSystem()),
                    this.setDisableTimezoneSelect(e)
                }
            }, {
                key: "handleSave",
                value: function(e) {
                    var t = this.props.onSave;
                    "ignoredName"in e && delete e.ignoredName,
                    t(e)
                }
            }, {
                key: "renderTimeZoneFields",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , a = t.timezoneOptions
                      , o = (R(t, w),
                    this.state.disableTimezoneSelect)
                      , i = o ? this.getZoneOfSystem() : n.timezone;
                    return r.createElement("div", {
                        className: "ow-settingsLocale-timezone"
                    }, r.createElement(E(), {
                        lg: "12",
                        md: "12"
                    }, r.createElement(m.hE, {
                        label: (0,
                        y.t)("settings.general.DEVICE_TIME_ZONE"),
                        "aria-label": (0,
                        y.t)("settings.general.DEVICE_TIME_ZONE"),
                        name: v.sw.useDeviceTimeZone.key,
                        value: n[v.sw.useDeviceTimeZone.key],
                        checkedValue: "true",
                        uncheckedValue: "false",
                        onChange: this.handleCheckboxChange
                    })), o && r.createElement(E(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, r.createElement(m.Hi, {
                        label: (0,
                        y.t)("settings.languageTimeDate.TIME_ZONE"),
                        "aria-label": (0,
                        y.t)("settings.languageTimeDate.TIME_ZONE"),
                        name: "ignoredName",
                        disabled: !0,
                        value: "",
                        options: [{
                            name: c()((0,
                            y.t)("settings.general.DEVICE_TIME_ZONE")),
                            value: ""
                        }],
                        labelKey: "name",
                        valueKey: "value"
                    })), r.createElement(E(), {
                        lg: "4",
                        md: "5",
                        xs: "12",
                        className: "".concat(o ? "hide" : "")
                    }, r.createElement(m.Hi, {
                        className: "".concat(o ? "hide" : ""),
                        ref: function(t) {
                            e.timezoneRef = t
                        },
                        label: (0,
                        y.t)("settings.languageTimeDate.TIME_ZONE"),
                        "aria-label": (0,
                        y.t)("settings.languageTimeDate.TIME_ZONE"),
                        name: "timezone",
                        disabled: o,
                        value: i,
                        options: a,
                        labelKey: "name",
                        valueKey: "value",
                        placeholder: (0,
                        y.t)("settings.languageTimeDate.SELECT")
                    })))
                }
            }, {
                key: "renderLanguageField",
                value: function() {
                    var e = this.props
                      , t = e.data;
                    R(e, D);
                    return r.createElement(m.Hi, {
                        label: (0,
                        y.t)("settings.languageTimeDate.LANGUAGE"),
                        "aria-label": (0,
                        y.t)("settings.languageTimeDate.LANGUAGE"),
                        name: F.localeLanguage.key,
                        value: t[F.localeLanguage.key],
                        options: F.localeLanguage.available,
                        labelKey: "text",
                        valueKey: "value"
                    })
                }
            }, {
                key: "renderDateFormatField",
                value: function() {
                    var e = this.props
                      , t = e.data;
                    R(e, T);
                    return r.createElement(m.Hi, {
                        label: (0,
                        y.t)("settings.languageTimeDate.DATE_FORMAT"),
                        "aria-label": (0,
                        y.t)("settings.languageTimeDate.DATE_FORMAT"),
                        name: v.sw.dateFormat.key,
                        value: t[v.sw.dateFormat.key],
                        options: v.sw.dateFormat.available
                    })
                }
            }, {
                key: "renderTimeFormatField",
                value: function() {
                    var e = this.props
                      , t = e.data;
                    R(e, P);
                    return r.createElement(m.Hi, {
                        label: (0,
                        y.t)("settings.languageTimeDate.TIME_FORMAT"),
                        "aria-label": (0,
                        y.t)("settings.languageTimeDate.TIME_FORMAT"),
                        name: v.sw.timeFormatFlag.key,
                        value: t[v.sw.timeFormatFlag.key].toLowerCase(),
                        options: [{
                            label: (0,
                            y.t)("settings.languageTimeDate.HOUR12"),
                            value: "false"
                        }, {
                            label: (0,
                            y.t)("settings.languageTimeDate.HOUR24"),
                            value: "true"
                        }]
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.data
                      , n = R(e, A);
                    return r.createElement(h.Z, N({}, n, {
                        className: "ow-settingsLocale",
                        title: (0,
                        y.t)("settings.languageTimeDate.TITLE"),
                        desc: (0,
                        y.t)("settings.languageTimeDate.DESC"),
                        enableBack: U,
                        enableCancel: !U,
                        onSave: this.handleSave,
                        onCancel: this.setDisableTimezoneSelect
                    }), r.createElement(m.l0, {
                        data: t
                    }, r.createElement(O(), null, this.renderTimeZoneFields(), r.createElement(E(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, this.renderLanguageField())), r.createElement(O(), null, r.createElement(E(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, this.renderDateFormatField()), r.createElement(E(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, this.renderTimeFormatField()))))
                }
            }]),
            n
        }();
        x.defaultProps = {
            data: {},
            onSave: function() {},
            onLoadTimezoneList: function() {}
        },
        x.propTypes = {
            data: o().object,
            timezoneIdList: o().arrayOf(o().string).isRequired,
            timezoneOptions: o().arrayOf(o().shape({
                name: o().string,
                value: o().string
            })).isRequired,
            onSave: o().func,
            onLoadTimezoneList: o().func
        }
    },
    53796: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return re
            }
        });
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(16969)
          , l = n(4446)
          , s = n(10091)
          , c = n(32081)
          , u = n(54075)
          , f = n(13536)
          , d = n(76081)
          , p = n(50328)
          , m = n(35369)
          , h = n(84987)
          , y = n(90656)
          , b = n(68725)
          , v = n(83416)
          , g = n(97186)
          , S = n.n(g)
          , E = n(94165)
          , C = n(70293)
          , O = n.n(C)
          , _ = n(38868)
          , w = n.n(_);
        function D(e) {
            "@babel/helpers - typeof";
            return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var T = ["data"]
          , P = ["data"]
          , A = ["isNew", "data", "onSave"];
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
        function R(e, t) {
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
        function I(e, t) {
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
        function M(e, t, n) {
            return (t = k(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function L(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, a, o, i, l = [], s = !0, c = !1;
                    try {
                        if (o = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            s = !1
                        } else
                            for (; !(s = (r = o.call(n)).done) && (l.push(r.value),
                            l.length !== t); s = !0)
                                ;
                    } catch (e) {
                        c = !0,
                        a = e
                    } finally {
                        try {
                            if (!s && null != n.return && (i = n.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (c)
                                throw a
                        }
                    }
                    return l
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return j(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return j(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function j(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function B(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, k(r.key), r)
            }
        }
        function k(e) {
            var t = function(e, t) {
                if ("object" !== D(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== D(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === D(t) ? t : String(t)
        }
        function F(e, t) {
            return (F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function U(e) {
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
                    var a = G(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === D(t) || "function" == typeof t))
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
        var H = function(e) {
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
            var t = U(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).handleSave = r.handleSave.bind(x(r)),
                r.renderDefaultCheckBox = r.renderDefaultCheckBox.bind(x(r)),
                r.renderInputField = r.renderInputField.bind(x(r)),
                r.getDomainOptions = r.getDomainOptions.bind(x(r)),
                r
            }
            return function(e, t, n) {
                t && B(e.prototype, t),
                n && B(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "getUserInfo",
                value: function() {
                    var e = this.props.accountInfo.email
                      , t = L(e ? e.split("@") : [], 2)
                      , n = t[0]
                      , r = void 0 === n ? "" : n
                      , a = t[1];
                    return {
                        userName: r,
                        userDomain: void 0 === a ? "" : a
                    }
                }
            }, {
                key: "getDomainOptions",
                value: function() {
                    var e = this.props.allowedDomains;
                    return e && e.map(function(e) {
                        return {
                            label: e,
                            value: e
                        }
                    })
                }
            }, {
                key: "getAliasName",
                value: function() {
                    var e = this.props
                      , t = e.data.name
                      , r = e.isNew
                      , a = this.getUserInfo()
                      , o = a.userName
                      , i = a.userDomain;
                    if (!r && t && t.indexOf("@") > -1) {
                        var l = t.substring(t.lastIndexOf("@") + 1);
                        if (l || (l = i),
                        n.isFullMode())
                            return t.match(new RegExp("(.*)@".concat(l, "$"))) ? t.match(new RegExp("(.*)@".concat(l, "$")))[1] : "";
                        var s = t.match(new RegExp("^".concat(o, "(.*)"))) ? t.match(new RegExp("^".concat(o, "(.*)")))[1] : "";
                        return s.match(new RegExp("(.*)@".concat(l, "$"))) ? s.match(new RegExp("(.*)@".concat(l, "$")))[1] : ""
                    }
                    return ""
                }
            }, {
                key: "handleSave",
                value: function(e) {
                    var t = this.props
                      , n = t.data
                      , r = t.onSave
                      , a = e.defaultAlias
                      , o = e.preferredName
                      , i = e.aliasName
                      , l = e.aliasSuffixName
                      , s = e.domains
                      , c = this.getUserInfo()
                      , u = c.userName
                      , f = c.userDomain
                      , d = {
                        defaultAlias: a,
                        preferredName: o
                    }
                      , p = s || f;
                    i ? d.name = "".concat(i, "@").concat(p) : l && (d.name = "".concat(u).concat(l, "@").concat(p)),
                    n && n.id && (d.id = n.name,
                    d.notes = ""),
                    r(n && n.id ? function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? I(Object(n), !0).forEach(function(t) {
                                M(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, d) : d)
                }
            }, {
                key: "renderAddress",
                value: function() {
                    var e = this.getUserInfo()
                      , t = e.userName
                      , a = e.userDomain
                      , o = this.props
                      , i = o.allowedDomains
                      , l = o.isNew
                      , s = o.data.name
                      , c = this.getAliasName()
                      , u = a
                      , f = "@".concat(a);
                    l || s && s.indexOf("@") > -1 && (u = s.substring(s.lastIndexOf("@") + 1),
                    f = "@".concat(u));
                    var d = !0;
                    return i && i.length > 0 && (i.includes(a) || i.push(a),
                    l || i.includes(u) || i.push(u),
                    i.length > 1 && (d = !1)),
                    n.isFullMode() ? r.createElement("div", {
                        className: "ow-settingsDetail-formField-inline ow-SettingsMailAlias-window-container-full"
                    }, r.createElement(w(), null, r.createElement(O(), {
                        lg: "8",
                        md: "8",
                        xs: "7"
                    }, r.createElement(m.UP, {
                        label: (0,
                        h.t)("settings.mail.ALIAS_EMAIL"),
                        name: "aliasName",
                        value: c,
                        required: !0,
                        validations: {
                            maxLength: (0,
                            v.Z)("mail.alias.maxAliasLength"),
                            matchRegexp: (0,
                            v.Z)("mail.alias.emailLocalPartRegularExp")
                        },
                        validationErrors: {
                            maxLength: (0,
                            y.WU)((0,
                            h.t)("settings.profile.maxLengthText"), (0,
                            v.Z)("mail.alias.maxAliasLength")),
                            matchRegexp: (0,
                            h.t)("settings.aliases.message.INVALID_LOCAL_PART"),
                            isDefaultRequiredValue: (0,
                            h.t)("common.errorMessage.REQUIRED")
                        },
                        "aria-required": "true"
                    })), d ? r.createElement(O(), {
                        lg: "4",
                        md: "4",
                        xs: "5"
                    }, r.createElement("span", {
                        className: "domain"
                    }, f)) : r.createElement(O(), {
                        lg: "4",
                        md: "4",
                        xs: "5"
                    }, r.createElement("div", {
                        className: "ow-SettingsMailAlias-window-drop"
                    }, r.createElement("span", {
                        className: "domain"
                    }, "@"), r.createElement(m.Hi, {
                        className: "ow-SettingsMailAlias-window-domain",
                        name: "domains",
                        options: this.getDomainOptions(),
                        value: u || this.getDomainOptions()[0]
                    }))))) : r.createElement("div", {
                        className: "ow-settingsDetail-formField-inline ow-SettingsMailAlias-window-container-suffix"
                    }, r.createElement(m.UP, {
                        label: (0,
                        h.t)("settings.mail.ALIAS_EMAIL"),
                        name: "useless",
                        className: "ow-settingsDetail-aliases-suffix"
                    }), r.createElement(m.UP, {
                        label: t,
                        className: "ow-settingsDetail-aliases-suffix",
                        name: "aliasSuffixName",
                        value: c,
                        required: !0,
                        validations: {
                            maxLength: (0,
                            v.Z)("mail.alias.maxAliasLength"),
                            matchRegexp: (0,
                            v.Z)("mail.alias.emailLocalSuffixPartRegularExp")
                        },
                        validationErrors: {
                            maxLength: (0,
                            y.WU)((0,
                            h.t)("settings.profile.maxLengthText"), (0,
                            v.Z)("mail.alias.maxAliasLength")),
                            matchRegexp: (0,
                            h.t)("settings.aliases.message.INVALID_LOCAL_PART_SUFFIX"),
                            isDefaultRequiredValue: (0,
                            h.t)("common.errorMessage.REQUIRED")
                        }
                    }), d ? r.createElement("span", {
                        className: "domain"
                    }, f) : r.createElement("div", {
                        className: "ow-SettingsMailAlias-window-drop"
                    }, r.createElement("span", {
                        className: "domain"
                    }, "@"), r.createElement(m.Hi, {
                        className: "ow-SettingsMailAlias-window-domain",
                        name: "domains",
                        options: this.getDomainOptions(),
                        value: u || this.getDomainOptions()[0]
                    })))
                }
            }, {
                key: "renderDefaultCheckBox",
                value: function() {
                    var e = this.props
                      , t = e.data;
                    R(e, T);
                    return r.createElement(m.hE, {
                        label: (0,
                        h.t)("settings.mail.ALIAS_DEFAULT"),
                        name: "defaultAlias",
                        value: t.defaultAlias
                    })
                }
            }, {
                key: "renderInputField",
                value: function() {
                    var e = this.props
                      , t = e.data;
                    R(e, P);
                    return t && t.preferredName ? r.createElement(m.UP, {
                        label: (0,
                        h.t)("settings.mail.ALIAS_NAME"),
                        name: "preferredName",
                        value: t.preferredName,
                        required: !0,
                        validations: {
                            maxLength: (0,
                            v.Z)("mail.alias.maxNameLength"),
                            notEmpty: function(e, t) {
                                return b.Z.isNotEmptyText(t)
                            }
                        },
                        validationErrors: {
                            maxLength: (0,
                            y.WU)((0,
                            h.t)("settings.profile.maxLengthText"), (0,
                            v.Z)("mail.alias.maxNameLength")),
                            notEmpty: (0,
                            h.t)("settings.aliases.message.INVALID_NAME"),
                            isDefaultRequiredValue: (0,
                            h.t)("common.errorMessage.REQUIRED")
                        }
                    }) : r.createElement(m.UP, {
                        label: (0,
                        h.t)("settings.mail.ALIAS_NAME"),
                        name: "preferredName",
                        value: t.preferredName,
                        required: !0,
                        validations: {
                            maxLength: (0,
                            v.Z)("mail.alias.maxNameLength"),
                            customValidation: function(e) {
                                return !(e && (!e.preferredName || S()(e.preferredName) || "" === e.preferredName.trim())) || (0,
                                h.t)("common.errorMessage.REQUIRED")
                            }
                        },
                        validationErrors: {
                            maxLength: (0,
                            y.WU)((0,
                            h.t)("settings.profile.maxLengthText"), (0,
                            v.Z)("mail.alias.maxNameLength")),
                            isDefaultRequiredValue: (0,
                            h.t)("common.errorMessage.REQUIRED")
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.isNew
                      , n = (e.data,
                    e.onSave,
                    R(e, A));
                    return r.createElement(p.Z, N({}, n, {
                        className: "ow-SettingsMailAlias-window",
                        title: t ? (0,
                        h.t)("settings.mail.ALIAS_ADD_WINDOW_TITLE") : (0,
                        h.t)("settings.mail.ALIAS_EDIT_WINDOW_TITLE"),
                        desc: (0,
                        h.t)("settings.mail.ALIAS_WIN_TITLE_DESC"),
                        onSave: this.handleSave
                    }), r.createElement(m.l0, null, r.createElement("div", {
                        className: "ow-SettingsMailAlias-window-form"
                    }, r.createElement(w(), null, r.createElement(O(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, this.renderDefaultCheckBox())), r.createElement(w(), null, r.createElement(O(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, this.renderInputField())), this.renderAddress())))
                }
            }], [{
                key: "isFullMode",
                value: function() {
                    return (0,
                    v.Z)("mail.alias.localNamePolicy") === E.ER.partPolicyFull
                }
            }]),
            n
        }();
        H.defaultProps = {
            show: !1,
            isNew: !0,
            data: {
                id: "",
                preferredName: "",
                name: "",
                defaultAlias: !1
            },
            accountInfo: {
                email: ""
            },
            onSave: function() {},
            allowedDomains: []
        },
        H.propTypes = {
            show: o().bool,
            isNew: o().string,
            data: o().shape({
                id: o().string,
                preferredName: o().string,
                name: o().string,
                defaultAlias: o().bool
            }),
            accountInfo: o().shape({
                email: o().string
            }),
            onSave: o().func,
            allowedDomains: o().arrayOf(o().string)
        };
        var K = n(44910);
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
        var Y = ["list"]
          , V = ["accountInfo"]
          , W = ["list", "accountInfo"];
        function J() {
            return (J = Object.assign ? Object.assign.bind() : function(e) {
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
        function z(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Q(r.key), r)
            }
        }
        function Q(e) {
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
        function X(e, t) {
            return (X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function $(e) {
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
                var n, r = te(e);
                if (t) {
                    var a = te(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Z(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return ee(e)
                }(this, n)
            }
        }
        function ee(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function te(e) {
            return (te = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ne = (0,
        v.Z)("settings.showDeleteIconPerItem")
          , re = function(e) {
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
                t && X(e, t)
            }(n, r.PureComponent);
            var t = $(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).props.onLoad(),
                r.state = {
                    displayAliasWindow: !1,
                    aliasSelected: void 0,
                    displayAlert: !1,
                    alertMessage: "",
                    displayConfirm: !1
                },
                r.isEditing = !1,
                r.isReachLimit = r.isReachLimit.bind(ee(r)),
                r.setDisplayAliasWindow = r.setDisplayAliasWindow.bind(ee(r)),
                r.setDisplayAlert = r.setDisplayAlert.bind(ee(r)),
                r.setDisplayConfirm = r.setDisplayConfirm.bind(ee(r)),
                r.handleAddBtnClick = r.handleAddBtnClick.bind(ee(r)),
                r.handleEditBtnClick = r.handleEditBtnClick.bind(ee(r)),
                r.handleDeleteBtnClick = r.handleDeleteBtnClick.bind(ee(r)),
                r.handleDeleteAlias = r.handleDeleteAlias.bind(ee(r)),
                r.handleSaveAlias = r.handleSaveAlias.bind(ee(r)),
                r.renderToolBar = r.renderToolBar.bind(ee(r)),
                r.renderDetails = r.renderDetails.bind(ee(r)),
                r.renderDefaultLabel = r.renderDefaultLabel.bind(ee(r)),
                r.renderdisplayAlert = r.renderdisplayAlert.bind(ee(r)),
                r.renderdisplayConfirm = r.renderdisplayConfirm.bind(ee(r)),
                r.renderdisplayAlias = r.renderdisplayAlias.bind(ee(r)),
                r
            }
            return function(e, t, n) {
                t && z(e.prototype, t),
                n && z(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "setDisplayAliasWindow",
                value: function(e) {
                    this.setState({
                        displayAliasWindow: e
                    })
                }
            }, {
                key: "setDisplayAlert",
                value: function(e) {
                    var t = e.displayAlert
                      , n = e.alertMessage;
                    this.setState({
                        displayAlert: t,
                        alertMessage: n
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
                key: "isReachLimit",
                value: function() {
                    var e = this.props
                      , t = e.list
                      , n = e.severConfig.limit;
                    return t.length >= n
                }
            }, {
                key: "handleAddBtnClick",
                value: function() {
                    this.isReachLimit() || (this.isEditing = !1,
                    this.setDisplayAliasWindow(!0))
                }
            }, {
                key: "handleEditBtnClick",
                value: function() {
                    this.isEditing = !0,
                    this.setDisplayAliasWindow(!0)
                }
            }, {
                key: "handleDeleteBtnClick",
                value: function() {
                    this.setDisplayConfirm(!0)
                }
            }, {
                key: "handleDeleteAlias",
                value: function() {
                    var e = this.props.onDelete
                      , t = this.state.aliasSelected;
                    e([null === t || void 0 === t ? void 0 : t.id]),
                    this.setState({
                        aliasSelected: void 0
                    }),
                    this.setDisplayConfirm(!1)
                }
            }, {
                key: "handleSaveAlias",
                value: function(e) {
                    var t = this;
                    (0,
                    this.props.onSave)(e, this.isEditing, {
                        successFn: function() {
                            t.setDisplayAliasWindow(!1)
                        },
                        errorFn: function(e) {
                            var n = e.data
                              , r = n.code
                              , a = n.message
                              , o = void 0 === a ? {} : a
                              , i = (0,
                            l.t)("settings.mail.ALIAS_WARNING_NEED_VERIFY");
                            if ("INTERNAL_ERROR" === r) {
                                var s = o.key;
                                "mail.alias.alreadyExists" === s || "mail.alias.alreadyTaken" === s ? i = (0,
                                l.t)("settings.mail.ALIAS_WARNING_EXIST") : "mail.alias.domainNotAllowed" === s ? i = (0,
                                l.t)("settings.mail.ALIAS_WARNING_DOMAIN_NOT_ALLOWED") : "service.quotaExceeded" === s && (i = (0,
                                l.t)("settings.mail.ALIAS_LIMIT_EXCEEDED"))
                            }
                            t.setDisplayAlert({
                                displayAlert: !0,
                                alertMessage: i
                            })
                        }
                    })
                }
            }, {
                key: "renderToolBar",
                value: function() {
                    var e = this.state.aliasSelected;
                    return r.createElement("div", {
                        className: "ow-settingsDetail-toolbar"
                    }, r.createElement(s.Z.Button, {
                        className: "ow-settings-button ow-button-primary",
                        onClick: this.handleAddBtnClick,
                        disabled: this.isReachLimit(),
                        role: E.HB.BUTTON,
                        "aria-label": (0,
                        l.t)("settings.mail.ALIAS_ADD_NEW_TITLE"),
                        "aria-disabled": this.isReachLimit(),
                        onKeyDown: function(e) {
                            e.key === E.BY.ENTERKEY && (0,
                            K.Mb)()
                        }
                    }, r.createElement("span", {
                        className: "ow-settingsDetail-addAlias"
                    }, (0,
                    l.t)("settings.mail.ALIAS_ADD_NEW_TITLE")), r.createElement("span", {
                        className: "ow-icon-plus",
                        role: E.HB.BUTTON,
                        "aria-disabled": this.isReachLimit(),
                        "aria-label": (0,
                        l.t)("settings.mail.ALIAS_ADD_NEW_TITLE")
                    })), ne ? null : r.createElement(s.Z.Button, {
                        className: "ow-settings-button ow-settingsButton-default",
                        iconName: "edit",
                        disabled: !e,
                        onClick: this.handleEditBtnClick,
                        role: E.HB.BUTTON,
                        "aria-label": (0,
                        l.t)("settings.mail.ALIAS_EDIT_WINDOW_TITLE"),
                        "aria-disabled": !e
                    }, (0,
                    l.t)("common.EDIT")), ne ? null : r.createElement(s.Z.Button, {
                        className: "ow-settings-button ow-settingsButton-default",
                        iconName: "trash",
                        disabled: !e,
                        onClick: this.handleDeleteBtnClick,
                        role: E.HB.BUTTON,
                        "aria-label": (0,
                        l.t)("settings.mail.ALIAS_CONFIRM_DELETE_TITLE"),
                        "aria-disabled": !e
                    }, (0,
                    l.t)("common.DELETE")))
                }
            }, {
                key: "renderDetails",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.list
                      , a = (q(t, Y),
                    this.state.aliasSelected);
                    return r.createElement(d.Z, {
                        className: "ow-settingsDetail-list",
                        data: n,
                        defaultSelected: [a],
                        selectedStatus: function(t) {
                            return !(!a || a.id !== t.id) && (e.setState({
                                aliasSelected: t
                            }),
                            !0)
                        },
                        renderItem: function(t) {
                            return r.createElement("div", {
                                className: "ow-settingsDetail-list-item"
                            }, r.createElement("div", {
                                className: "ow-settingsDetail-list-item-name",
                                "aria-label": t.preferredName
                            }, t.preferredName), r.createElement("div", {
                                className: "ow-settingsDetail-list-item-email",
                                "aria-label": t.name
                            }, t.name), t.defaultAlias ? r.createElement("div", {
                                className: "ow-settingsDetail-defaultAlias-text"
                            }, r.createElement(c.Z, {
                                name: "bullet",
                                role: E.HB.BUTTON,
                                "aria-label": (0,
                                l.t)("settings.mail.ALIAS_SETTING_DEFAULT_ALIAS_HINT")
                            }), r.createElement("div", null, (0,
                            l.t)("settings.mail.ALIAS_SETTING_DEFAULT_ALIAS_HINT"))) : r.createElement(c.Z, {
                                name: "&"
                            }), ne ? r.createElement("div", {
                                className: "ow-settingsDetail-list-item-control"
                            }, r.createElement(c.Z, {
                                name: "edit",
                                alt: "{t('common.EDIT')}",
                                onClick: e.handleEditBtnClick,
                                role: E.HB.BUTTON,
                                "aria-label": (0,
                                l.t)("common.EDIT"),
                                tabIndex: 0,
                                onKeyDown: function(t) {
                                    t.key === E.BY.ENTERKEY && e.handleEditBtnClick(),
                                    (0,
                                    K.Mb)()
                                }
                            }), r.createElement(c.Z, {
                                name: "trash",
                                alt: "{t('common.DELETE')}",
                                onClick: e.handleDeleteBtnClick,
                                role: E.HB.BUTTON,
                                "aria-label": (0,
                                l.t)("common.DELETE"),
                                onKeyDown: function(t) {
                                    t.key === E.BY.ENTERKEY && e.handleDeleteBtnClick(),
                                    (0,
                                    K.Mb)()
                                },
                                tabIndex: 0
                            }), " ") : null)
                        },
                        onSelectedChange: function(t) {
                            e.setState({
                                aliasSelected: t[0]
                            })
                        }
                    })
                }
            }, {
                key: "renderDefaultLabel",
                value: function() {
                    return r.createElement("p", {
                        className: "ow-settingsDetail-list-item ow-mailAlias-default-label"
                    }, r.createElement(c.Z, {
                        name: "bullet"
                    }), r.createElement("div", null, (0,
                    l.t)("settings.mail.ALIAS_SETTING_DEFAULT_ALIAS_HINT")))
                }
            }, {
                key: "renderdisplayAlias",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.accountInfo
                      , a = (q(t, V),
                    this.state.aliasSelected);
                    return r.createElement(H, {
                        show: !0,
                        isNew: !this.isEditing,
                        data: this.isEditing ? a : void 0,
                        accountInfo: n,
                        onCancel: function() {
                            return e.setDisplayAliasWindow(!1)
                        },
                        onSave: function(t) {
                            return e.handleSaveAlias(t)
                        },
                        allowedDomains: this.props.allowedDomains
                    })
                }
            }, {
                key: "renderdisplayConfirm",
                value: function() {
                    var e = this;
                    return r.createElement(f.Z, {
                        show: !0,
                        title: (0,
                        l.t)("settings.mail.ALIAS_CONFIRM_DELETE_TITLE"),
                        message: (0,
                        l.t)("settings.mail.ALIAS_CONFIRM_DELETE"),
                        onYes: this.handleDeleteAlias,
                        onNo: function() {
                            return e.setDisplayConfirm(!1)
                        },
                        onDismiss: function() {
                            return e.setDisplayConfirm(!1)
                        }
                    })
                }
            }, {
                key: "renderdisplayAlert",
                value: function() {
                    var e = this
                      , t = this.state.alertMessage;
                    return r.createElement(u.Z, {
                        show: !0,
                        title: (0,
                        l.t)("common.ERROR"),
                        message: t,
                        onHide: function() {
                            return e.setDisplayAlert(!1)
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.list,
                    e.accountInfo,
                    q(e, W))
                      , n = this.state
                      , a = n.displayAliasWindow
                      , o = n.displayAlert
                      , s = n.displayConfirm;
                    return r.createElement(i.Z, J({}, t, {
                        className: "ow-settingsMailAliases",
                        title: (0,
                        l.t)("settings.aliases.TITLE"),
                        desc: (0,
                        l.t)("settings.aliases.DESC"),
                        enableSave: !1,
                        enableCancel: !1
                    }), r.createElement(w(), null, r.createElement(O(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, this.renderToolBar())), r.createElement(w(), null, r.createElement(O(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, this.renderDetails())), a && this.renderdisplayAlias(), o && this.renderdisplayAlert(), s && this.renderdisplayConfirm())
                }
            }]),
            n
        }();
        re.defaultProps = {
            accountInfo: {
                email: ""
            },
            list: [],
            allowedDomains: [],
            severConfig: {
                limit: void 0
            },
            onSave: function() {},
            onDelete: function() {},
            onLoad: function() {}
        },
        re.propTypes = {
            accountInfo: o().shape({
                email: o().string
            }),
            list: o().arrayOf(o().shape({
                id: o().string,
                preferredName: o().string,
                name: o().string,
                defaultAlias: o().bool
            })),
            severConfig: o().shape({
                limit: o().number
            }),
            onSave: o().func,
            onDelete: o().func,
            onLoad: o().func,
            allowedDomains: o().arrayOf(o().string)
        }
    },
    86285: function(e, t, n) {
        "use strict";
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(16969)
          , l = n(35369)
          , s = n(54075)
          , c = n(92176)
          , u = n(84987)
          , f = n(4446)
          , d = n(70293)
          , p = n.n(d)
          , m = n(38868)
          , h = n.n(m);
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
        var b = ["data", "onSave", "onFormChange"];
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
        function S(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, E(r.key), r)
            }
        }
        function E(e) {
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
        function C(e, t) {
            return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    return _(e)
                }(this, n)
            }
        }
        function _(e) {
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
        var D = f.UhU.isDesktop
          , T = {
            data: o().shape({
                disabled: o().bool,
                enabled: o().bool,
                address: o().array,
                keepCopy: o().bool
            }),
            currentAccount: o().shape({}),
            onLoad: o().func,
            onSave: o().func,
            onFormChange: o().func
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
                t && C(e, t)
            }(n, r.Component);
            var t = O(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    formDisable: !e.data.enabled,
                    displayAlert: !1
                },
                r.onChangeFormDisable = r.onChangeFormDisable.bind(_(r)),
                r.handleValidate = r.handleValidate.bind(_(r)),
                r.hideDisplayAlert = r.hideDisplayAlert.bind(_(r)),
                r
            }
            return function(e, t, n) {
                t && S(e.prototype, t),
                n && S(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    (0,
                    this.props.onLoad)()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this.props.data;
                    t && e.data && t.enabled !== e.data.enabled && this.onChangeFormDisable(e.data.enabled)
                }
            }, {
                key: "onChangeFormDisable",
                value: function(e) {
                    this.setState({
                        formDisable: !e
                    })
                }
            }, {
                key: "handleValidate",
                value: function(e) {
                    var t = this.props.currentAccount;
                    e.address.toLowerCase() === t.email.toLowerCase() && this.setState({
                        displayAlert: !0
                    })
                }
            }, {
                key: "hideDisplayAlert",
                value: function() {
                    this.setState({
                        displayAlert: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , a = n.enabled
                      , o = n.addresses
                      , f = n.keepCopy
                      , d = t.onSave
                      , m = t.onFormChange
                      , y = g(t, b)
                      , S = this.state
                      , E = S.formDisable
                      , C = S.displayAlert
                      , O = o && o.map(function(e) {
                        return {
                            name: e,
                            address: e
                        }
                    })
                      , _ = JSON.stringify(O);
                    return r.createElement(i.Z, v({}, y, {
                        title: (0,
                        u.t)("settings.mailForward.TITLE"),
                        desc: (0,
                        u.t)("settings.mailForward.DESC"),
                        onSave: d,
                        enableCancel: D
                    }), r.createElement(l.l0, {
                        className: "ow-settingsAutoForward-form ow-formatting-settings-options",
                        onChange: function(t, n) {
                            e.onChangeFormDisable(t.enabled),
                            m(n)
                        }
                    }, r.createElement(h(), null, r.createElement(p(), {
                        lg: "12",
                        md: "12"
                    }, r.createElement(l.hE, {
                        label: (0,
                        u.t)("settings.mailForward.FORWARD_DESC"),
                        name: "enabled",
                        value: a
                    })), r.createElement(p(), {
                        lg: "12",
                        md: "12"
                    }, r.createElement(l.hE, {
                        label: (0,
                        u.t)("settings.mailForward.KEEP_COPY_DESC"),
                        name: "keepCopy",
                        value: f,
                        disabled: E
                    }))), r.createElement(h(), null, r.createElement(p(), {
                        lg: "6",
                        md: "7",
                        xs: "12"
                    }, r.createElement(c.Z, {
                        innerRef: function(t) {
                            e.contactsLabelFieldRef = t
                        },
                        className: "ow-settingsAutoForward-form ow-settingsAutoForward-destination",
                        labelClassName: "ow-settingsAutoForward-form-label",
                        name: "addresses",
                        value: _,
                        label: (0,
                        u.t)("settings.mailForward.DESTINATION"),
                        title: (0,
                        u.t)("settings.mailForward.DESTINATION"),
                        disabled: E,
                        allowSelf: !1,
                        onValidate: this.handleValidate,
                        "aria-required": !0,
                        validations: {
                            customRegexp: function(t, n) {
                                var r = JSON.parse(n);
                                return t.enabled && !r.length ? (0,
                                u.t)("common.errorMessage.REQUIRED") : !(e.contactsLabelFieldRef && !e.contactsLabelFieldRef.isValuesValid())
                            }
                        },
                        autoFocus: !1
                    }))), C && r.createElement(s.Z, {
                        show: !0,
                        title: (0,
                        u.t)("common.ERROR"),
                        message: (0,
                        u.t)("settings.errorMessage.FORWARD_NOT_BE_SELF"),
                        onHide: function() {
                            return e.hideDisplayAlert()
                        }
                    })))
                }
            }]),
            n
        }();
        P.propTypes = T,
        P.defaultProps = {
            data: {
                enabled: !1,
                address: [],
                keepCopy: !1,
                disable: !1
            },
            currentAccount: {},
            onLoad: function() {},
            onSave: function() {},
            onFormChange: function() {}
        },
        t.Z = P
    },
    37069: function(e, t, n) {
        "use strict";
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(32022)
          , l = n.n(i)
          , s = n(69934)
          , c = n.n(s)
          , u = n(68725)
          , f = n(60274)
          , d = n(16969)
          , p = n(35369)
          , m = n(84987)
          , h = n(4446)
          , y = n(83416)
          , b = n(90656);
        function v(e) {
            "@babel/helpers - typeof";
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var g = ["data", "dateFormat", "onSaveForCPMS", "onFormChange"];
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
        function E(e, t) {
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
                t % 2 ? E(Object(n), !0).forEach(function(t) {
                    O(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function O(e, t, n) {
            return (t = D(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function _(e, t) {
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
        function w(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, D(r.key), r)
            }
        }
        function D(e) {
            var t = function(e, t) {
                if ("object" !== v(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== v(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === v(t) ? t : String(t)
        }
        function T(e, t) {
            return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function P(e) {
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
                var n, r = A(e);
                if (t) {
                    var a = A(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === v(t) || "function" == typeof t))
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
        function A(e) {
            return (A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var N = h.UhU.isDesktop
          , R = {
            data: o().shape({
                enabled: o().bool,
                startDate: o().string,
                endDate: o().string,
                message: o().string,
                original: o().bool
            }),
            dateFormat: o().string,
            isCPMSServer: o().bool,
            onLoad: o().func,
            onSave: o().func,
            onSaveForCPMS: o().func,
            onFormChange: o().func
        }
          , I = function(e) {
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
            var t = P(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    enabled: void 0,
                    startDate: void 0,
                    vacationMode: void 0,
                    intervalEnabled: void 0,
                    altDomains: void 0
                },
                r
            }
            return function(e, t, n) {
                t && w(e.prototype, t),
                n && w(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    this.props.onLoad()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , a = t.dateFormat
                      , o = t.onSaveForCPMS
                      , i = t.onFormChange
                      , s = _(t, g)
                      , h = this.state
                      , v = h.enabled
                      , E = h.startDate
                      , O = h.vacationMode
                      , w = h.intervalEnabled
                      , D = h.altDomains
                      , T = c()(v) ? n.enabled : v
                      , P = c()(O) ? n.vacationMode : O
                      , A = c()(w) ? n.intervalEnabled : w
                      , R = c()(D) ? n.altDomains : D
                      , I = l()(E || n.startDate)
                      , M = (0,
                    y.Z)("mail.autoReplyMaxLength");
                    return r.createElement(d.Z, S({
                        className: "ow-settingsAutoReply"
                    }, s, {
                        title: (0,
                        m.t)("settings.autoReply.TITLE"),
                        desc: (0,
                        m.t)("settings.autoReply.DESC"),
                        onSave: function(e) {
                            var t = 0;
                            P || (t = w ? e.interval : void 0);
                            var n = C(C({}, e), {}, {
                                interval: t,
                                altDomains: R ? e.altDomains : ""
                            });
                            o(n)
                        },
                        enableCancel: N
                    }), r.createElement(p.l0, {
                        className: "ow-settingsAutoReply-form ow-formatting-settings-options",
                        onChange: function(t, n) {
                            e.setState({
                                enabled: t.enabled,
                                vacationMode: t.vacationMode,
                                intervalEnabled: t.intervalEnabled,
                                altDomains: t.altDomains
                            }),
                            i(n)
                        },
                        data: n
                    }, r.createElement(p.bM, {
                        name: "enabled",
                        value: n.enabled,
                        label: (0,
                        m.t)("settings.autoReply.AUTO_REPLY_DESC_MX")
                    }), r.createElement(p.UP, {
                        type: "date",
                        name: "startDate",
                        value: n.startDate ? l()(n.startDate).format("YYYYMMDD") : l()().format("YYYYMMDD"),
                        label: (0,
                        m.t)("settings.autoReply.START_DATE"),
                        minDate: l()(),
                        onChange: function(t) {
                            return e.setState({
                                startDate: t
                            })
                        },
                        disabled: !T,
                        required: !0,
                        validations: {
                            afterCurrent: function(e) {
                                return e.startDate >= l()().format("YYYYMMDD") || (0,
                                m.t)("settings.errorMessage.AUTOREPLY_START_DATE_MUST_AFTER", l()().format(a))
                            }
                        },
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            m.t)("common.errorMessage.REQUIRED")
                        },
                        dateToStringFormat: "YYYYMMDD",
                        dateFormat: a,
                        readOnly: !0
                    }), r.createElement(p.UP, {
                        type: "date",
                        name: "endDate",
                        value: n.endDate ? l()(n.endDate).format("YYYYMMDD") : l()().add(1, "days").format("YYYYMMDD"),
                        label: (0,
                        m.t)("settings.autoReply.END_DATE"),
                        minDate: I > l()() ? I : l()(),
                        disabled: !T,
                        validations: {
                            afterStartDate: function(e) {
                                return !(e.startDate && !(e.endDate && e.startDate <= e.endDate)) || (0,
                                m.t)("settings.mail.END_DATE_AFTER_START_DATE")
                            }
                        },
                        autoReplyErrorDisplay: UXConfig.mail.autoReplyErrorDisplay,
                        dateToStringFormat: "YYYYMMDD",
                        dateFormat: a,
                        readOnly: !0
                    }), r.createElement(p.UP, {
                        name: "message",
                        type: "textarea",
                        className: "ow-inputField-vertical",
                        value: n.message,
                        label: (0,
                        m.t)("settings.autoReply.MESSAGE"),
                        disabled: !T,
                        required: !0,
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            m.t)("common.errorMessage.REQUIRED")
                        },
                        popperPlacement: "bottom"
                    }), r.createElement(p.bM, {
                        name: "vacationMode",
                        value: n.vacationMode,
                        label: (0,
                        m.t)("settings.autoReply.REPLY_ONCE_DESC"),
                        disabled: !T
                    }), r.createElement(p.bM, {
                        name: "attachOriginalMessageToReply",
                        value: n.attachOriginalMessageToReply,
                        label: (0,
                        m.t)("settings.autoReply.ORIGINAL_DESC"),
                        disabled: !T
                    }), r.createElement("div", {
                        className: "ow-settings-intervalField"
                    }, r.createElement(p.bM, {
                        name: "intervalEnabled",
                        className: "ow-settings-intervalEnabled",
                        value: n.intervalEnabled,
                        label: (0,
                        m.t)("settings.autoReply.REPLY_INTERVAL_DESC"),
                        disabled: !T || P
                    }), r.createElement(p.UP, {
                        name: "interval",
                        type: "number",
                        className: "ow-settings-interval",
                        value: n.interval,
                        label: (0,
                        m.t)("settings.autoReply.REPLY_INTERVAL_UNIT"),
                        disabled: !T || P || !A,
                        popperPlacement: "bottom"
                    })), r.createElement(f.Z, null, (0,
                    m.t)("settings.autoReply.REPLY_DIFFERENT_DOMAIN")), r.createElement(p.UP, {
                        name: "altDomains",
                        type: "input",
                        className: "ow-inputField-vertical ow-settings-altDomains",
                        value: n.altDomains,
                        label: (0,
                        m.t)("settings.autoReply.REPLY_DOMAIN"),
                        disabled: !T,
                        validations: {
                            emailValidation: function(e, t) {
                                return !t || void 0 === t.split(",").find(function(e) {
                                    return !u.Z.is("emailDomain", e.trim())
                                })
                            }
                        },
                        validationErrors: {
                            emailValidation: (0,
                            m.t)("common.INVALIDDOMAINS")
                        },
                        popperPlacement: "bottom"
                    }), r.createElement(p.UP, {
                        name: "altMessage",
                        type: "textarea",
                        className: "ow-inputField-vertical",
                        value: n.altMessage,
                        label: (0,
                        m.t)("settings.autoReply.MESSAGE"),
                        disabled: !T || !R,
                        required: !!R,
                        validations: {
                            customValidation: function(e, t) {
                                return !(t.length > M) || (0,
                                b.WU)((0,
                                m.t)("settings.autoReply.MAX-LENGTH"), M)
                            }
                        },
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            m.t)("common.errorMessage.REQUIRED")
                        },
                        popperPlacement: "bottom"
                    })))
                }
            }]),
            n
        }();
        I.propTypes = R,
        I.defaultProps = {
            data: {},
            dateFormat: "",
            isCPMSServer: !1,
            onLoad: function() {},
            onSave: function() {},
            onSaveForCPMS: function() {},
            onFormChange: function() {}
        },
        t.Z = I
    },
    43427: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return j
            }
        });
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(16969)
          , l = n(84987)
          , s = n(90656)
          , c = n(40329)
          , u = n(94165)
          , f = n(35369)
          , d = n(54075)
          , p = n(83416)
          , m = n(70293)
          , h = n.n(m)
          , y = n(38868)
          , b = n.n(y);
        function v(e) {
            "@babel/helpers - typeof";
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var g = ["data", "quota", "onSave", "onFormChange"]
          , S = ["data", "onSave", "onFormChange"]
          , E = ["data", "onSave", "onFormChange"];
        function C() {
            return (C = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function O(e, t) {
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
        function _(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, w(r.key), r)
            }
        }
        function w(e) {
            var t = function(e, t) {
                if ("object" !== v(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== v(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === v(t) ? t : String(t)
        }
        function D(e, t) {
            return (D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, r = A(e);
                if (t) {
                    var a = A(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === v(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return P(e)
                }(this, n)
            }
        }
        function P(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function A(e) {
            return (A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var N = u.PG.AUTO_CHECK_INTERVAL
          , R = (u.PG.SHOW_AVATAR,
        u.PG.SAVE_OUTGOING_MESSAGES)
          , I = u.PG.EMPTY_TRASH_ON_LOGOUT
          , M = u.PG.REPLY_QUOTING
          , L = u.PG.PREFER_PLAIN_TEXT_EDITOR
          , j = function(e) {
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
                t && D(e, t)
            }(n, r.PureComponent);
            var t = T(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    replyPrefixSelectHidden: !(e.data && e.data[M]),
                    showAlert: !1
                },
                e.onLoadQuota(),
                r.setReplyPrefixSelectHidden = r.setReplyPrefixSelectHidden.bind(P(r)),
                r.setShowAlert = r.setShowAlert.bind(P(r)),
                r.autoCheckIntervalOpts = r.getAutoCheckIntervalOpts(),
                r.autoSaveToDraftsIntervalOpts = r.getAutoSaveToDraftsIntervalOpts(),
                r.renderMailItemsList = r.renderMailItemsList.bind(P(r)),
                r.displayQuotaDetails = r.displayQuotaDetails.bind(P(r)),
                r.renderMailGeneralDesc = r.renderMailGeneralDesc.bind(P(r)),
                r
            }
            return function(e, t, n) {
                t && _(e.prototype, t),
                n && _(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.props.data[M] !== e.data[M] && this.setReplyPrefixSelectHidden(e.data[M])
                }
            }, {
                key: "getAutoCheckIntervalOpts",
                value: function() {
                    return [{
                        value: 0
                    }, {
                        value: 60
                    }, {
                        value: 300
                    }, {
                        value: 900
                    }, {
                        value: 1800
                    }, {
                        value: 3600
                    }].map(function(e) {
                        var t = e.value;
                        return {
                            label: (0,
                            l.t)("settings.mail.AUTOCHECK_".concat(t)),
                            value: t
                        }
                    })
                }
            }, {
                key: "getAutoSaveToDraftsIntervalOpts",
                value: function() {
                    return u.sw.autoSaveToDraftsInterval.available.map(function(e) {
                        var t = e.value;
                        return {
                            label: (0,
                            l.t)("settings.mail.AUTOCHECK_".concat(t)),
                            value: "".concat(t)
                        }
                    })
                }
            }, {
                key: "setReplyPrefixSelectHidden",
                value: function(e) {
                    this.setState({
                        replyPrefixSelectHidden: !e
                    })
                }
            }, {
                key: "setShowAlert",
                value: function(e) {
                    this.setState({
                        showAlert: e
                    })
                }
            }, {
                key: "isMessageCategoriesEnabled",
                value: function() {
                    var e = this.props.account.mail;
                    return (void 0 === e ? {} : e).enableMessageCategories
                }
            }, {
                key: "displayQuotaDetails",
                value: function() {
                    var e = this.props
                      , t = (e.data,
                    e.quota)
                      , n = t.usedBytes
                      , a = t.limitBytes
                      , o = (e.onSave,
                    e.onFormChange,
                    O(e, g),
                    (0,
                    l.t)("settings.mail.STORAGE_USAGE_UNLIMIT"));
                    return a && (o = (0,
                    s.WU)((0,
                    l.t)("settings.mail.STORAGE_USAGE_DESC"), (0,
                    c.QM)(n, 0), parseInt(Math.round(100 * n / a).toFixed((0,
                    p.Z)("mail.quotaPercentageFactor"))), (0,
                    c.QM)(a, 0))),
                    r.createElement("div", {
                        className: "ow-settingsMailGeneral-quota"
                    }, r.createElement("p", null, o))
                }
            }, {
                key: "renderMailGeneralDesc",
                value: function() {
                    return r.createElement("div", {
                        className: "ow-settingsMailGeneral-formField-explanation"
                    }, (0,
                    l.t)("settings.mail.MESSAGE_CATEGORIZATION_DESC"), r.createElement("div", {
                        className: "ow-settingsMailGeneral-formField-warning"
                    }, (0,
                    l.t)("settings.mail.MESSAGE_CATEGORIZATION_WARNING")))
                }
            }, {
                key: "renderMailItemsList",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , a = (t.onSave,
                    t.onFormChange)
                      , o = (O(t, S),
                    this.state.replyPrefixSelectHidden);
                    return r.createElement(f.l0, {
                        ref: function(t) {
                            e.formRef = t
                        },
                        onChange: function(t, n) {
                            e.setReplyPrefixSelectHidden(t[M]),
                            a(n)
                        }
                    }, r.createElement(b(), null, r.createElement(h(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, r.createElement(f.Hi, {
                        name: N,
                        label: (0,
                        l.t)("settings.mail.AUTO_CHECK"),
                        options: this.autoCheckIntervalOpts,
                        value: null != n[N] ? n[N] : u.sw.autoCheckInterval.defaultValue
                    }))), r.createElement(b(), {
                        className: "ow-row-bottom-iconCheckbox"
                    }, r.createElement(h(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, r.createElement(f.Hi, {
                        label: (0,
                        l.t)("settings.mail.AUTO_SAVE_INTERVAL"),
                        name: u.sw.autoSaveToDraftsInterval.key,
                        value: n[u.sw.autoSaveToDraftsInterval.key],
                        options: this.autoSaveToDraftsIntervalOpts
                    }))), r.createElement(b(), null, r.createElement(h(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, r.createElement(f.hE, {
                        label: (0,
                        l.t)("settings.mail.SEND_EMAIL_DESC"),
                        name: R,
                        value: n[R]
                    })), r.createElement(h(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, r.createElement(f.hE, {
                        label: (0,
                        l.t)("settings.mail.TIME_DISPLAY_FORMAT"),
                        name: u.sw.timeDisplayFormat.key,
                        value: n[u.sw.timeDisplayFormat.key],
                        checkedValue: "long",
                        uncheckedValue: "short"
                    }))), r.createElement(b(), null, r.createElement(h(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, r.createElement(f.hE, {
                        label: (0,
                        l.t)("settings.mail.ADDITIONAL_ACTIONS_DESC"),
                        name: u.sw.reloadOnDelete.key,
                        value: n[u.sw.reloadOnDelete.key],
                        checkedValue: "true",
                        uncheckedValue: "false"
                    })), r.createElement(h(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, r.createElement(f.hE, {
                        label: (0,
                        l.t)("settings.mail.EMPTY_TRASH_DESC"),
                        name: I,
                        value: n[I]
                    }))), r.createElement(b(), null, r.createElement(h(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, r.createElement(f.hE, {
                        label: (0,
                        l.t)("settings.mail.REPLY_DESC"),
                        name: M,
                        value: n[M],
                        onChange: this.setReplyPrefixSelectHidden
                    })), r.createElement(h(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, r.createElement(f.hE, {
                        label: (0,
                        l.t)("settings.mail.DEFAULT_FORMAT_DESC"),
                        name: L,
                        checkedValue: !1,
                        uncheckedValue: !0,
                        value: !!n[L]
                    }))), r.createElement(b(), null, !o && r.createElement(h(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, r.createElement(f.Hi, {
                        label: (0,
                        l.t)("settings.mail.REPLY_QUOTING_SELECTION_LABEL"),
                        name: u.sw.replyPrefix.key,
                        value: n[u.sw.replyPrefix.key],
                        options: [{
                            value: "",
                            label: (0,
                            l.t)("settings.mail.AUTOSAVE_INDENT_WITHOUT_PREIX")
                        }, {
                            value: ">",
                            label: (0,
                            l.t)("settings.mail.AUTOSAVE_INDENT_WITH_GREATER")
                        }, {
                            value: "-",
                            label: (0,
                            l.t)("settings.mail.AUTOSAVE_INDENT_WITHOUT_MINUS")
                        }]
                    }))), r.createElement(b(), null, r.createElement(h(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, r.createElement(f.hE, {
                        label: (0,
                        l.t)("settings.mail.READ_FIRST_MAIL"),
                        name: u.sw.readFirstMail.key,
                        value: n[u.sw.readFirstMail.key],
                        checkedValue: "true",
                        uncheckedValue: "false"
                    })), (0,
                    p.Z)("mail.avatar.enabled") && r.createElement(h(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, r.createElement(f.hE, {
                        label: (0,
                        l.t)("settings.mail.SHOW_AVATAR"),
                        name: u.sw.showAvatar.key,
                        value: n[u.sw.showAvatar.key],
                        checkedValue: "true",
                        uncheckedValue: "false"
                    }))), r.createElement(b(), {
                        className: "ow-row-top-iconCheckbox"
                    }, r.createElement("div", {
                        className: "ow-settingsDetail-formField-inline ow-settingsMailGeneral-category ".concat(this.isMessageCategoriesEnabled() ? "" : "hide")
                    }, r.createElement(h(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, r.createElement(f.hE, {
                        label: (0,
                        l.t)("settings.mail.MESSAGE_CATEGORIZATION"),
                        name: u.sw.messageCategories.key,
                        value: n[u.sw.messageCategories.key],
                        checkedValue: "true",
                        uncheckedValue: "false",
                        onChange: function(t) {
                            return e.setShowAlert("true" === t)
                        }
                    })), r.createElement(h(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, this.renderMailGeneralDesc()))), r.createElement(b(), null, r.createElement(h(), {
                        lg: "4",
                        md: "5",
                        xs: "12"
                    }, this.displayQuotaDetails())))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = (t.data,
                    t.onSave)
                      , a = (t.onFormChange,
                    O(t, E))
                      , o = this.state.showAlert;
                    return r.createElement(i.Z, C({}, a, {
                        className: "ow-settingsMailGeneral",
                        title: (0,
                        l.t)("settings.mail.SUB_TITLE"),
                        desc: (0,
                        l.t)("settings.mail.DESC"),
                        onSave: n
                    }), this.renderMailItemsList(), r.createElement(d.Z, {
                        show: o && (0,
                        p.Z)("mail.conversation.enable"),
                        title: (0,
                        l.t)("common.WARNING"),
                        message: (0,
                        l.t)("mail.warningMessage.INBOX_SORTING_CHECKED_WARNING"),
                        onHide: function() {
                            return e.setShowAlert(!1)
                        }
                    }))
                }
            }]),
            n
        }();
        j.defaultProps = {
            account: {},
            data: {},
            quota: {
                usedBytes: 0,
                limitBytes: 0
            },
            onLoadQuota: function() {},
            onSave: function() {},
            onFormChange: function() {}
        },
        j.propTypes = {
            account: o().object,
            data: o().object,
            quota: o().shape({
                usedBytes: o().number,
                limitBytes: o().number
            }),
            onLoadQuota: o().func,
            onSave: o().func,
            onFormChange: o().func
        }
    },
    32883: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return ee
            }
        });
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(16969)
          , l = n(4446)
          , s = n(35369)
          , c = n(10091)
          , u = n(32081)
          , f = n(54075)
          , d = n(13536)
          , p = n(76081)
          , m = n(70224)
          , h = n(50328)
          , y = n(84987)
          , b = n(90656)
          , v = n(40329)
          , g = n(94165)
          , S = n(83416);
        function E(e) {
            "@babel/helpers - typeof";
            return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var C = ["isNew", "textFormat", "data", "onSave"];
        function O() {
            return (O = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function _(e, t) {
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
                t % 2 ? _(Object(n), !0).forEach(function(t) {
                    D(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function D(e, t, n) {
            return (t = A(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function T(e, t) {
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
        function P(e, t) {
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
                if ("object" !== E(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== E(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === E(t) ? t : String(t)
        }
        function N(e, t) {
            return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function R(e) {
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
                    var a = I(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === E(t) || "function" == typeof t))
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
        function I(e) {
            return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var M = function(e) {
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
            }(n, r.PureComponent);
            var t = R(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && P(e.prototype, t),
                n && P(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.isNew
                      , n = e.textFormat
                      , a = e.data
                      , o = e.onSave
                      , i = T(e, C)
                      , l = a.contentType || n;
                    return r.createElement(h.Z, O({}, i, {
                        className: "ow-SettingsMailSignature-window",
                        title: (0,
                        y.t)("settings.mail.".concat(t ? "SIGNATURE_ADD_TITLE" : "SIGNATURE_EDIT_TITLE")),
                        desc: (0,
                        y.t)("settings.mail.SIGNATURE_WIN_TITLE_DESC"),
                        onSave: function(e) {
                            return o(w(w({}, a), e))
                        }
                    }), r.createElement(s.l0, null, r.createElement(s.hE, {
                        label: (0,
                        y.t)("settings.mail.SIGNATURE_DEFAULT"),
                        name: "default",
                        value: a.default
                    }), r.createElement(s.UP, {
                        label: (0,
                        y.t)("settings.mail.SIGNATURE_NAME"),
                        name: "label",
                        value: a.label,
                        required: !0,
                        "aria-label": (0,
                        b.WU)("".concat((0,
                        y.t)("settings.mail.SIGNATURE_TEXT"), " ").concat((0,
                        y.t)("settings.mail.SIGNATURE_NAME"))),
                        "aria-required": !0,
                        validations: {
                            maxLength: (0,
                            S.Z)("mail.signature.maxLabelSize")
                        },
                        validationErrors: {
                            maxLength: (0,
                            b.WU)((0,
                            y.t)("settings.profile.maxLengthText"), (0,
                            S.Z)("mail.signature.maxLabelSize")),
                            isDefaultRequiredValue: (0,
                            y.t)("common.errorMessage.REQUIRED")
                        }
                    }), r.createElement(s.Hi, {
                        className: "hide",
                        label: (0,
                        y.t)("mail.compose.FORMAT"),
                        name: "contentType",
                        value: l,
                        options: [{
                            label: (0,
                            y.t)("mail.compose.FORMAT_PLAIN"),
                            value: g.kf.PLAIN
                        }, {
                            label: (0,
                            y.t)("mail.compose.FORMAT_RICH"),
                            value: g.kf.RICH
                        }],
                        onChange: this.setTExtFormat
                    }), l === g.kf.PLAIN ? r.createElement(s.UP, {
                        className: "ow-settings-editField",
                        label: (0,
                        y.t)("settings.mail.SIGNATURE_TEXT"),
                        name: "text",
                        value: a.text,
                        type: "textarea",
                        validations: {
                            maxLength: (0,
                            S.Z)("mail.signature.maxContentSize")
                        },
                        validationErrors: {
                            maxLength: (0,
                            b.WU)((0,
                            y.t)("settings.profile.maxLengthText"), (0,
                            S.Z)("mail.signature.maxContentSize"))
                        }
                    }) : (0,
                    S.Z)("mail.ckEditor.enabled") ? r.createElement(s.z7, {
                        className: "ow-settings-editField",
                        label: (0,
                        y.t)("settings.mail.SIGNATURE_TEXT"),
                        name: "text",
                        value: a.text,
                        showRichToolbar: !1,
                        disableFont: window.UXConfig.common.SignatureWindow.disableFont.disableFont,
                        disableList: !0,
                        disableIndent: !0,
                        compact: !0,
                        validations: {
                            maxLength: (0,
                            S.Z)("mail.signature.maxContentSize")
                        },
                        validationErrors: {
                            maxLength: (0,
                            b.WU)((0,
                            y.t)("settings.mail.SIGNATURE_WARNING_MSG_LENGTH"), (0,
                            v.QM)((0,
                            S.Z)("mail.signature.maxContentSize"), 0))
                        }
                    }) : r.createElement(s.Sv, {
                        className: "ow-settings-editField",
                        label: (0,
                        y.t)("settings.mail.SIGNATURE_TEXT"),
                        name: "text",
                        value: a.text,
                        showRichToolbar: !1,
                        disableFont: window.UXConfig.common.SignatureWindow.disableFont.disableFont,
                        disableList: !0,
                        disableIndent: !0,
                        compact: !0,
                        validations: {
                            maxLength: (0,
                            S.Z)("mail.signature.maxContentSize")
                        },
                        validationErrors: {
                            maxLength: (0,
                            b.WU)((0,
                            y.t)("settings.mail.SIGNATURE_WARNING_MSG_LENGTH"), (0,
                            v.QM)((0,
                            S.Z)("mail.signature.maxContentSize"), 0))
                        }
                    })))
                }
            }]),
            n
        }();
        M.defaultProps = {
            show: !1,
            isNew: !0,
            textFormat: g.kf.PLAIN,
            data: {
                label: "",
                default: !1,
                contentType: "",
                text: ""
            },
            onSave: function() {}
        },
        M.propTypes = {
            show: o().bool,
            isNew: o().string,
            textFormat: o().string,
            data: o().shape({
                label: o().string,
                isDefault: o().bool,
                contentType: o().string,
                text: o().string
            }),
            onSave: o().func
        };
        var L = n(70293)
          , j = n.n(L)
          , B = n(38868)
          , k = n.n(B)
          , F = n(44910);
        function U(e) {
            "@babel/helpers - typeof";
            return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var x = ["data"]
          , G = ["data", "list", "onSaveSettings"]
          , H = ["data", "list", "onSaveSettings"]
          , K = ["data", "list", "onSaveSettings"];
        function Z() {
            return (Z = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Y(e, t) {
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
        function V(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, W(r.key), r)
            }
        }
        function W(e) {
            var t = function(e, t) {
                if ("object" !== U(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== U(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === U(t) ? t : String(t)
        }
        function J(e, t) {
            return (J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function q(e) {
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
                var n, r = Q(e);
                if (t) {
                    var a = Q(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === U(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return z(e)
                }(this, n)
            }
        }
        function z(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Q(e) {
            return (Q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var X = l.PGx.AUTO_INSERT_SIGNATURE
          , $ = (0,
        S.Z)("settings.showDeleteIconPerItem")
          , ee = function(e) {
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
                t && J(e, t)
            }(n, r.PureComponent);
            var t = q(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).props.onLoad(),
                r.state = {
                    enableSignaturePosition: e.data[X] || !1,
                    displaySignatureWindow: !1,
                    signatureSelected: void 0,
                    displayAlert: !1,
                    displayConfirm: !1
                },
                r.isEditing = !1,
                r.textFormat = void 0,
                r.setSignaturePosition = r.setSignaturePosition.bind(z(r)),
                r.setDisplaySignatureWindow = r.setDisplaySignatureWindow.bind(z(r)),
                r.setDisplayAlert = r.setDisplayAlert.bind(z(r)),
                r.setDisplayConfirm = r.setDisplayConfirm.bind(z(r)),
                r.handleAddBtnClick = r.handleAddBtnClick.bind(z(r)),
                r.handleEditBtnClick = r.handleEditBtnClick.bind(z(r)),
                r.handleDeleteBtnClick = r.handleDeleteBtnClick.bind(z(r)),
                r.handleDeleteSignature = r.handleDeleteSignature.bind(z(r)),
                r.handleSaveSignature = r.handleSaveSignature.bind(z(r)),
                r.displaySignatureForm = r.displaySignatureForm.bind(z(r)),
                r.displayButtons = r.displayButtons.bind(z(r)),
                r.displayAlert = r.displayAlert.bind(z(r)),
                r.displayConfirm = r.displayConfirm.bind(z(r)),
                r.displaySignatureWindow = r.displaySignatureWindow.bind(z(r)),
                r.displayDefaultSignature = r.displayDefaultSignature.bind(z(r)),
                r
            }
            return function(e, t, n) {
                t && V(e.prototype, t),
                n && V(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "setSignaturePosition",
                value: function(e) {
                    this.setState({
                        enableSignaturePosition: e
                    })
                }
            }, {
                key: "setDisplaySignatureWindow",
                value: function(e) {
                    this.setState({
                        displaySignatureWindow: e
                    })
                }
            }, {
                key: "setDisplayAlert",
                value: function(e) {
                    this.setState({
                        displayAlert: e
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
                key: "handleAddBtnClick",
                value: function(e) {
                    var t = this.props.list
                      , n = (0,
                    S.Z)("mail.signature.limit");
                    t.length >= n ? this.setDisplayAlert(!0) : (this.isEditing = !1,
                    this.textFormat = e,
                    this.setDisplaySignatureWindow(!0))
                }
            }, {
                key: "handleEditBtnClick",
                value: function() {
                    this.isEditing = !0,
                    this.textFormat = void 0,
                    this.setDisplaySignatureWindow(!0)
                }
            }, {
                key: "handleDeleteBtnClick",
                value: function() {
                    this.setDisplayConfirm(!0)
                }
            }, {
                key: "handleDeleteSignature",
                value: function() {
                    (0,
                    this.props.onDelete)([this.state.signatureSelected.id]),
                    this.setState({
                        signatureSelected: void 0
                    }),
                    this.setDisplayConfirm(!1)
                }
            }, {
                key: "handleSaveSignature",
                value: function(e) {
                    var t = this.props.onSave;
                    e.text = e.text.replace(/;;/g, ";").replace(/(family:\s*)"|"(; font)/g, "$1$2").replace(/";"/g, ';"').replace(/";/g, ";").replace(/&nbsp;/g, ""),
                    t(e, this.isEditing),
                    this.setDisplaySignatureWindow(!1)
                }
            }, {
                key: "displaySignatureForm",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , a = (Y(t, x),
                    this.state.enableSignaturePosition);
                    return r.createElement(s.l0, {
                        ref: function(t) {
                            e.formRef = t
                        }
                    }, r.createElement(k(), null, r.createElement(j(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, r.createElement(s.hE, {
                        label: (0,
                        l.t)("settings.mail.SIGNATURE_AUTOINSERT"),
                        name: X,
                        value: n[X],
                        onChange: this.setSignaturePosition
                    })), r.createElement(j(), {
                        lg: "5",
                        md: "5",
                        xs: "12"
                    }, r.createElement(s.Hi, {
                        label: (0,
                        l.t)("settings.mail.SIGNATURE_POSITION_TITLE"),
                        "aria-label": (0,
                        l.t)("settings.mail.SIGNATURE_POSITION_TITLE"),
                        name: g.sw.signaturePosition.key,
                        value: n[g.sw.signaturePosition.key],
                        disabled: !a,
                        tabIndex: a ? 0 : -1,
                        options: [{
                            value: "below",
                            label: (0,
                            l.t)("settings.mail.SIGNATURE_POSITION_BELOW")
                        }, {
                            value: "above",
                            label: (0,
                            l.t)("settings.mail.SIGNATURE_POSITION_ABOVE")
                        }]
                    }))))
                }
            }, {
                key: "displayButtons",
                value: function() {
                    var e = this.props
                      , t = (e.data,
                    e.list,
                    e.onSaveSettings,
                    Y(e, G),
                    this.state.signatureSelected);
                    return r.createElement(k(), {
                        className: "ow-row-button-top"
                    }, r.createElement(j(), {
                        lg: "7",
                        md: "7",
                        xs: "12"
                    }, r.createElement(c.Z, null, r.createElement("div", {
                        className: "ow-settingsDetail-toolbar"
                    }, r.createElement(c.Z.Dropdown, {
                        className: "ow-settings-button ow-button-primary ow-mail-forward-dropdown",
                        title: r.createElement("div", null, r.createElement("span", {
                            onClick: this.handleForward,
                            role: g.HB.BUTTON,
                            "aria-label": (0,
                            l.t)("settings.mail.SIGNATURE_ADD_TITLE")
                        }, (0,
                        l.t)("settings.mail.SIGNATURE_ADD_TITLE")), r.createElement("span", {
                            className: "ow-icon-plus"
                        }))
                    }, r.createElement(m.Z, {
                        eventKey: g.kf.PLAIN,
                        onSelect: this.handleAddBtnClick,
                        onKeyDown: function(e) {
                            var t;
                            e.key === g.BY.ENTERKEY && (null === e || void 0 === e || null === (t = e.target) || void 0 === t || t.click()),
                            (0,
                            F.Mb)()
                        }
                    }, (0,
                    l.t)("mail.compose.FORMAT_PLAIN")), r.createElement(m.Z, {
                        eventKey: g.kf.RICH,
                        onSelect: this.handleAddBtnClick,
                        onKeyDown: function(e) {
                            var t;
                            e.key === g.BY.ENTERKEY && (null === e || void 0 === e || null === (t = e.target) || void 0 === t || t.click()),
                            (0,
                            F.Mb)()
                        }
                    }, (0,
                    l.t)("mail.compose.FORMAT_RICH"))), $ ? null : r.createElement(c.Z.Button, {
                        className: "ow-settings-button ow-settingsButton-default",
                        iconName: "edit",
                        disabled: !t,
                        onClick: this.handleEditBtnClick,
                        "aria-label": format("".concat((0,
                        l.t)("common.EDIT"), " ").concat((0,
                        l.t)("settings.MODULE_DESC.SIGNATURE"))),
                        "aria-disabled": !t
                    }, (0,
                    l.t)("common.EDIT")), $ ? null : r.createElement(c.Z.Button, {
                        className: "ow-settings-button ow-settingsButton-default",
                        iconName: "trash",
                        disabled: !t,
                        onClick: this.handleDeleteBtnClick,
                        "aria-label": format("".concat((0,
                        l.t)("common.DELETE"), " ").concat((0,
                        l.t)("settings.MODULE_DESC.SIGNATURE"))),
                        "aria-disabled": !t
                    }, (0,
                    l.t)("common.DELETE"))))))
                }
            }, {
                key: "displaySignatureWindow",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = (t.data,
                    t.list,
                    t.onSaveSettings,
                    Y(t, H),
                    this.state.signatureSelected);
                    return r.createElement(M, {
                        show: !0,
                        isNew: !this.isEditing,
                        data: this.isEditing ? n : void 0,
                        textFormat: this.textFormat,
                        onCancel: function() {
                            return e.setDisplaySignatureWindow(!1)
                        },
                        onSave: function(t) {
                            return e.handleSaveSignature(t)
                        }
                    })
                }
            }, {
                key: "displayAlert",
                value: function() {
                    var e = this;
                    return r.createElement(f.Z, {
                        show: !0,
                        title: (0,
                        l.t)("common.ERROR"),
                        message: (0,
                        l.t)("settings.mail.SIGNATURE_WARNING_MSG_LIMITED"),
                        onHide: function() {
                            return e.setDisplayAlert(!1)
                        }
                    })
                }
            }, {
                key: "displayConfirm",
                value: function() {
                    var e = this;
                    return r.createElement(d.Z, {
                        show: !0,
                        title: (0,
                        l.t)("settings.mail.SIGNATURE_DELETE_WARNING_TITLE"),
                        message: (0,
                        l.t)("settings.mail.SIGNATURE_DELETE_WARNING"),
                        onYes: this.handleDeleteSignature,
                        onNo: function() {
                            return e.setDisplayConfirm(!1)
                        },
                        onDismiss: function() {
                            return e.setDisplayConfirm(!1)
                        }
                    })
                }
            }, {
                key: "displayDefaultSignature",
                value: function() {
                    return r.createElement("p", {
                        className: "ow-settingsDetail-list-item ow-mailSignature-default-label"
                    }, r.createElement(u.Z, {
                        name: "bullet"
                    }), r.createElement("div", null, (0,
                    l.t)("settings.mail.SIGNATURE_DEFAULT_ICON_DESC")))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = (t.data,
                    t.list)
                      , a = t.onSaveSettings
                      , o = Y(t, K)
                      , s = this.state
                      , c = s.displaySignatureWindow
                      , f = s.displayAlert
                      , d = s.displayConfirm
                      , m = s.signatureSelected;
                    return r.createElement(i.Z, Z({}, o, {
                        className: "ow-settingsMailSignature",
                        title: (0,
                        l.t)("settings.signature.TITLE"),
                        desc: (0,
                        l.t)("settings.signature.DESC"),
                        onSave: a,
                        onCancel: function(t) {
                            return e.setSignaturePosition(t[X])
                        }
                    }), this.displaySignatureForm(), this.displayButtons(), r.createElement(k(), null, r.createElement(j(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, r.createElement(p.Z, {
                        className: "ow-settingsDetail-list",
                        data: n,
                        enableCheckable: !$,
                        defaultSelected: [m],
                        selectedStatus: function(t) {
                            return !(!m || m.id !== t.id) && (e.setState({
                                signatureSelected: t
                            }),
                            !0)
                        },
                        renderItem: function(t) {
                            return r.createElement("div", {
                                className: "ow-settingsDetail-list-item"
                            }, r.createElement("div", {
                                className: "ow-settingsDetail-list-item-label",
                                "aria-label": t.label
                            }, t.label), t.default ? r.createElement("div", {
                                className: "ow-settingsDetail-defaultSignature-label",
                                "aria-label": (0,
                                l.t)("settings.mail.SIGNATURE_DEFAULT_ICON_DESC")
                            }, r.createElement(u.Z, {
                                name: "bullet"
                            }), r.createElement("div", null, (0,
                            l.t)("settings.mail.SIGNATURE_DEFAULT_ICON_DESC"))) : r.createElement("span", null), $ ? r.createElement("div", {
                                className: "ow-settingsDetail-list-item-control"
                            }, r.createElement(u.Z, {
                                name: "edit",
                                alt: "{t('common.EDIT')}",
                                onClick: e.handleEditBtnClick,
                                role: g.HB.BUTTON,
                                "aria-label": (0,
                                l.t)("common.EDIT"),
                                tabIndex: 0,
                                onKeyDown: function(t) {
                                    t.key === g.BY.ENTERKEY && e.handleEditBtnClick(),
                                    (0,
                                    F.Mb)()
                                }
                            }), r.createElement(u.Z, {
                                name: "trash",
                                alt: "{t('common.DELETE')}",
                                onClick: e.handleDeleteBtnClick,
                                role: g.HB.BUTTON,
                                "aria-label": (0,
                                l.t)("common.DELETE"),
                                tabIndex: 0,
                                onKeyDown: function(t) {
                                    t.key === g.BY.ENTERKEY && e.handleDeleteBtnClick(),
                                    (0,
                                    F.Mb)()
                                }
                            }), " ") : null)
                        },
                        onSelectedChange: function(t) {
                            e.setState({
                                signatureSelected: t[0]
                            })
                        }
                    }))), c && this.displaySignatureWindow(), f && this.displayAlert(), d && this.displayConfirm())
                }
            }]),
            n
        }();
        ee.defaultProps = {
            data: {},
            list: [],
            onSaveSettings: function() {},
            onSave: function() {},
            onDelete: function() {},
            onLoad: function() {}
        },
        ee.propTypes = {
            data: o().object,
            list: o().array,
            onSaveSettings: o().func,
            onSave: o().func,
            onDelete: o().func,
            onLoad: o().func
        }
    },
    95885: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return at
            }
        });
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(77545)
          , l = n(59524)
          , s = n(67064)
          , c = n.n(s)
          , u = n(90473)
          , f = n(54075)
          , d = n(96646)
          , p = n(87492)
          , m = n(40944)
          , h = n(84987)
          , y = n(83416);
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
        function S(e, t) {
            return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, r = O(e);
                if (t) {
                    var a = O(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === b(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return C(e)
                }(this, n)
            }
        }
        function C(e) {
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
        var _ = function(e) {
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
                t && S(e, t)
            }(n, r.Component);
            var t = E(n);
            function n(e) {
                var r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                r = t.call(this, e);
                var a = e.hasPhoto
                  , o = e.onGetAvatar;
                return r.state = {
                    imgSrc: a ? "".concat(o(), "&d=").concat(Date.now()) : "",
                    hasPhoto: a,
                    showAlert: !1,
                    errorMsg: "",
                    avatarEditorUrl: "",
                    displayProgress: !1,
                    uploadProgress: 0
                },
                r.handleHideAlert = r.handleHideAlert.bind(C(r)),
                r.handleDelete = r.handleDelete.bind(C(r)),
                r.handleChange = r.handleChange.bind(C(r)),
                r.handleAvatarEditorSave = r.handleAvatarEditorSave.bind(C(r)),
                r.handleAvatarEditorCancel = r.handleAvatarEditorCancel.bind(C(r)),
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
                    var t = e.hasPhoto
                      , n = e.avatarStatus
                      , r = e.isAvatarChanged;
                    if (t !== this.props.hasPhoto || n !== this.props.avatarStatus || r && r !== this.props.isAvatarChanged) {
                        var a = this.state.imgSrc;
                        this.setState({
                            hasPhoto: t,
                            imgSrc: t ? a.replace(/&d=.*$/, "&d=".concat(Date.now())) : ""
                        })
                    }
                    t && t !== this.state.hasPhoto && this.setState({
                        imgSrc: "".concat(this.props.onGetAvatar(), "&d=").concat(Date.now())
                    })
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return this.state.hasPhoto !== t.hasPhoto || this.state.imgSrc !== t.imgSrc || this.state.showAlert !== t.showAlert || this.state.avatarEditorUrl !== t.avatarEditorUrl || this.state.displayProgress !== t.displayProgress || this.state.uploadProgress !== t.uploadProgress || this.props.avatarUrl !== e.avatarUrl
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
                    m.tc)(t);
                    n.errorMsg ? this.setState({
                        showAlert: !0,
                        errorMsg: n.errorMsg
                    }) : (this.setState({
                        showAlert: !1,
                        errorMsg: "",
                        avatarEditorUrl: URL.createObjectURL(t),
                        hasPhoto: !0
                    }),
                    this.props.setPhotoId(),
                    this.uploadAvatar(t))
                }
            }, {
                key: "handleAvatarEditorSave",
                value: function(e) {
                    this.setState({
                        imgSrc: URL.createObjectURL(e),
                        hasPhoto: !0
                    }),
                    this.props.setPhotoId(),
                    this.uploadAvatar(e)
                }
            }, {
                key: "uploadAvatar",
                value: function(e) {
                    var t = this
                      , n = (0,
                    y.Z)("mail.timeoutInline")
                      , r = new FormData;
                    r.append("fileToUpload", e, "IMG_Avatar.png"),
                    this.props.uploadAvatar("userProfilePhoto".concat(Date.now()), r, n, {
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
                      , o = e.avatarUrl
                      , i = this.state
                      , l = i.imgSrc
                      , s = i.hasPhoto
                      , m = i.avatarEditorUrl
                      , y = i.showAlert
                      , b = i.errorMsg
                      , v = i.displayProgress
                      , g = i.uploadProgress
                      , S = o || l;
                    return r.createElement("div", {
                        className: c()("ow-contacts-contactAvatar", t)
                    }, r.createElement(u.Z, {
                        editBtnDisplayed: n,
                        imgSrc: S,
                        hasPhoto: s,
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
                    }), m ? r.createElement(p.Z, {
                        imageURL: m,
                        onCancel: this.handleAvatarEditorCancel,
                        onSave: this.handleAvatarEditorSave
                    }) : void 0, v && r.createElement(d.Z, {
                        show: !0,
                        title: (0,
                        h.t)("contacts.editPanel.message.UPLOADING_PHOTO"),
                        progress: g
                    }), y && r.createElement(f.Z, {
                        show: !0,
                        title: (0,
                        h.t)("common.ERROR"),
                        message: b,
                        onHide: this.handleHideAlert
                    }))
                }
            }]),
            n
        }();
        _.propTypes = {
            className: o().string,
            hasPhoto: o().bool,
            acceptFileTypes: o().string,
            editBtnDisplayed: o().bool,
            avatarUrl: o().string,
            avatarStatus: o().string,
            onChange: o().func,
            onGetAvatar: o().func,
            uploadAvatar: o().func,
            isAvatarChanged: o().bool,
            setPhotoId: o().func
        },
        _.defaultProps = {
            className: "",
            acceptFileTypes: "image/pjpeg,image/jpeg,image/x-png,image/png,image/gif",
            hasPhoto: !1,
            editBtnDisplayed: !1,
            avatarUrl: "",
            avatarStatus: "",
            onChange: function() {},
            onGetAvatar: function() {},
            uploadAvatar: function() {},
            isAvatarChanged: !1,
            setPhotoId: function() {}
        };
        var w = _
          , D = function(e) {
            var t = e.hasPhoto
              , n = e.displayName
              , a = e.additionalFields
              , o = e.onGetAvatar
              , i = e.isAvatarChanged
              , s = e.avatarUrl;
            return r.createElement("div", {
                className: "ow-settings-ProfilePreviewHeader ow-contacts-ContactPreviewHeader"
            }, r.createElement("div", {
                className: "ow-settings-ProfilePreviewHeader-avatar ow-contacts-ContactPreviewHeader-avatar"
            }, r.createElement(w, {
                editBtnDisplayed: !1,
                hasPhoto: t,
                onGetAvatar: o,
                isAvatarChanged: i,
                avatarUrl: s
            })), r.createElement("div", {
                className: "ow-settings-ProfilePreviewHeader-fields ow-contacts-ContactPreviewHeader-fields"
            }, r.createElement("div", {
                className: "ow-settings-ProfilePreviewHeader-fields-text-wrapper ow-contacts-ContactPreviewHeader-fields-text-wrapper"
            }, n ? r.createElement("span", {
                className: "ow-settings-ProfilePreviewHeader-displayName ow-contacts-ContactPreviewHeader-displayName"
            }, n) : void 0, a.length ? r.createElement("div", {
                className: "ow-settings-ProfilePreviewHeader-fields-additional ow-contacts-ContactPreviewHeader-fields-additional"
            }, a.map(function(e) {
                var t = e.label
                  , n = e.value;
                return r.createElement(l.Z, {
                    key: t,
                    label: t,
                    value: n
                })
            })) : void 0)))
        };
        D.defaultProps = {
            hasPhoto: !1,
            displayName: "",
            avatarUrl: "",
            additionalFields: [],
            onGetAvatar: function() {},
            isAvatarChanged: !1
        },
        D.propTypes = {
            hasPhoto: o().bool,
            displayName: o().string,
            avatarUrl: o().string,
            additionalFields: o().arrayOf(o().shape({
                type: o().string,
                label: o().string,
                value: o().string,
                showLabel: o().bool,
                clickable: o().bool
            })),
            onGetAvatar: o().func,
            isAvatarChanged: o().bool
        };
        var T = D
          , P = n(27982)
          , A = function(e) {
            var t = e.data
              , n = e.onGetAvatar
              , a = e.onComposeMail
              , o = e.isAvatarChanged
              , i = e.avatarUrl
              , l = t.header
              , s = void 0 === l ? {} : l
              , c = t.sections
              , u = void 0 === c ? [] : c
              , f = t.isGroup
              , d = s.hasPhoto
              , p = s.displayName
              , m = s.additionalFields;
            return r.createElement("div", {
                className: "ow-settings-profile-preview"
            }, r.createElement("div", {
                className: "ow-settings-profile-preview-header"
            }, r.createElement(T, {
                hasPhoto: d,
                displayName: p,
                additionalFields: m,
                onGetAvatar: n,
                isAvatarChanged: o,
                avatarUrl: i
            })), r.createElement("div", {
                className: "ow-settings-profile-preview-sections"
            }, u.map(function(e) {
                var t = e.title
                  , n = e.fields;
                return r.createElement(P.Z, {
                    key: t,
                    title: t,
                    fields: n,
                    name: p,
                    isGroup: f,
                    onComposeMail: a
                })
            })))
        }
          , N = {
            type: o().string,
            label: o().string,
            value: o().string,
            showLabel: o().bool,
            clickable: o().bool
        };
        A.defaultProps = {
            data: {},
            avatarUrl: "",
            onComposeMail: function() {},
            onGetAvatar: function() {},
            isAvatarChanged: !1
        },
        A.propTypes = {
            data: o().shape({
                id: o().string,
                autoCollected: o().bool,
                isGroup: o().bool,
                email: o().string,
                header: o().shape({
                    hasPhoto: o().bool,
                    displayName: o().string,
                    additionalFields: o().arrayOf(o().shape(N))
                }),
                sections: o().arrayOf(o().shape({
                    title: o().string,
                    fields: o().arrayOf(o().shape(N))
                }))
            }),
            avatarUrl: o().string,
            onGetAvatar: o().func,
            onComposeMail: o().func,
            isAvatarChanged: o().bool
        };
        var R = A
          , I = n(24655)
          , M = n(13536)
          , L = n(44910)
          , j = n(94165)
          , B = function(e) {
            var t = e.onSave
              , n = e.onCancel
              , a = e.disableSave
              , o = e.title;
            return r.createElement("div", {
                className: "ow-settings-profileFormToolbar-container ow-contacts-ContactFormToolbar-container"
            }, r.createElement("div", {
                className: "ow-settings-profileFormToolbar-title ow-contacts-ContactFormToolbar-title",
                role: j.HB.HEADING,
                "aria-level": j.DU.H2,
                "aria-label": o
            }, o), r.createElement("div", {
                className: "ow-settings-profileFormToolbar ow-contacts-ContactFormToolbar"
            }, r.createElement(i.Z, {
                className: " ow-settings-button ow-button-primary",
                onClick: function(e) {
                    e.preventDefault(),
                    t()
                },
                disabled: a,
                role: j.HB.BUTTON,
                "aria-label": (0,
                h.t)("contacts.toolBar.SAVE_CONTACT"),
                "aria-disabled": a
            }, (0,
            h.t)("contacts.toolBar.SAVE_CONTACT")), r.createElement(i.Z, {
                className: "ow-settings-profileFormCancelBtn ow-contacts-ContactFormCancelBtn ",
                role: j.HB.BUTTON,
                "aria-label": (0,
                h.t)("contacts.toolBar.CANCEL_EDIT"),
                onClick: function(e) {
                    e.preventDefault(),
                    n()
                },
                onKeyDown: function(e) {
                    return e.key === j.BY.TABKEY && (0,
                    L.kW)(".ow-Avatar-imgContainer-pointer")
                }
            }, (0,
            h.t)("contacts.toolBar.CANCEL_EDIT"))))
        };
        B.defaultProps = {
            title: "",
            onSave: function() {},
            onCancel: function() {},
            disableSave: !1
        },
        B.propTypes = {
            title: a.string,
            onSave: a.func,
            onCancel: a.func,
            disableSave: a.bool
        };
        var k = B
          , F = n(58574)
          , U = n.n(F)
          , x = n(27542)
          , G = n.n(x)
          , H = n(97186)
          , K = n.n(H)
          , Z = n(64143)
          , Y = n.n(Z)
          , V = n(60782)
          , W = n.n(V)
          , J = n(45239)
          , q = n.n(J)
          , z = n(78295)
          , Q = n.n(z)
          , X = n(22747)
          , $ = n(70293)
          , ee = n.n($)
          , te = n(38868)
          , ne = n.n(te);
        function re(e) {
            "@babel/helpers - typeof";
            return (re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ae() {
            return (ae = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function oe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, ie(r.key), r)
            }
        }
        function ie(e) {
            var t = function(e, t) {
                if ("object" !== re(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== re(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === re(t) ? t : String(t)
        }
        function le(e, t) {
            return (le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function se(e) {
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
                var n, r = ce(e);
                if (t) {
                    var a = ce(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === re(t) || "function" == typeof t))
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
        function ce(e) {
            return (ce = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ue = function(e) {
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
                t && le(e, t)
            }(n, r.PureComponent);
            var t = se(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && oe(e.prototype, t),
                n && oe(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.fields
                      , n = e.displayLabels
                      , a = e.onInputChange
                      , o = e.editBtnDisplayed
                      , i = e.hasPhoto
                      , l = e.onImgChange
                      , s = e.onInputBlur
                      , c = e.onGetAvatar
                      , u = e.uploadAvatar
                      , f = e.setPhotoId
                      , d = n.map(function(e, n) {
                        return r.createElement(ee(), {
                            lg: "6",
                            md: "6",
                            xs: "12"
                        }, r.createElement("div", {
                            className: "ow-contacts-ContactHeaderSection-field",
                            "aria-label": null === e || void 0 === e ? void 0 : e.label
                        }, r.createElement("span", {
                            className: "ow-contacts-header-text-field-line-label"
                        }, e.label), r.createElement(X.Z, ae({
                            key: e.labelType,
                            type: t[e.labelType].type,
                            onChange: function(t) {
                                return a(n, t, e.labelType)
                            },
                            onBlur: function(t) {
                                return s(n, t, e.labelType)
                            }
                        }, e))))
                    });
                    return r.createElement(Q(), {
                        className: "ow-settings-profileHeaderSection ow-contacts-ContactHeaderSection"
                    }, r.createElement(w, {
                        editBtnDisplayed: o,
                        hasPhoto: i,
                        onChange: l,
                        onGetAvatar: c,
                        uploadAvatar: u,
                        setPhotoId: f
                    }), r.createElement(ne(), null, r.createElement(ee(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, r.createElement("div", {
                        className: "ow-contacts-ContactEditForm-section-title",
                        role: j.HB.HEADING,
                        "aria-level": j.DU.H3,
                        "aria-label": (0,
                        h.t)("contacts.editPanel.header")
                    }, r.createElement("span", null, (0,
                    h.t)("contacts.editPanel.header"))))), r.createElement(ne(), null, r.createElement("div", {
                        className: "ow-settings-profileHeaderSection-fields ow-contacts-ContactHeaderSection-fields"
                    }, d)))
                }
            }]),
            n
        }();
        ue.propTypes = {
            fields: o().object,
            displayLabels: o().arrayOf(o().shape({
                labelType: o().string
            })),
            onInputChange: o().func,
            contactId: o().string,
            editBtnDisplayed: o().bool,
            hasPhoto: o().bool,
            onImgChange: o().func,
            onInputBlur: o().func,
            onGetAvatar: o().func,
            uploadAvatar: o().func,
            setPhotoId: o().func
        },
        ue.defaultProps = {
            fields: {},
            displayLabels: [],
            onInputChange: function() {},
            contactId: "",
            editBtnDisplayed: !1,
            hasPhoto: !1,
            onImgChange: function() {},
            onInputBlur: function() {},
            onGetAvatar: function() {},
            uploadAvatar: function() {},
            setPhotoId: function() {}
        };
        var fe = n(8379)
          , de = n(54427)
          , pe = n(12790)
          , me = n(90088);
        function he(e) {
            "@babel/helpers - typeof";
            return (he = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ye() {
            return (ye = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function be(e) {
            return function(e) {
                if (Array.isArray(e))
                    return ve(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return ve(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return ve(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ve(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
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
        function Se(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ge(Object(n), !0).forEach(function(t) {
                    Ee(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function Ee(e, t, n) {
            return (t = Oe(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Ce(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Oe(r.key), r)
            }
        }
        function Oe(e) {
            var t = function(e, t) {
                if ("object" !== he(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== he(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === he(t) ? t : String(t)
        }
        function _e(e, t) {
            return (_e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function we(e) {
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
                var n, r = Te(e);
                if (t) {
                    var a = Te(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === he(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return De(e)
                }(this, n)
            }
        }
        function De(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Te(e) {
            return (Te = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Pe = "contacts.detailEdit.label"
          , Ae = function(e) {
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
                t && _e(e, t)
            }(n, r.Component);
            var t = we(n);
            function n(e) {
                var r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                r = t.call(this, e);
                var a = (0,
                m.HK)(e.config);
                return r.state = {
                    showAlert: !1,
                    errorMsg: "",
                    baseFields: a,
                    pristineData: e.pristineData,
                    fields: (0,
                    m.Oi)(a, e.data)
                },
                r.handleSelectOtherFields = r.handleSelectOtherFields.bind(De(r)),
                r.reset = r.reset.bind(De(r)),
                r.getFormData = r.getFormData.bind(De(r)),
                r.handleHideAlert = r.handleHideAlert.bind(De(r)),
                r.handleChange = r.handleChange.bind(De(r)),
                r.handleChange(),
                r
            }
            return function(e, t, n) {
                t && Ce(e.prototype, t),
                n && Ce(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = e.pristineData
                      , n = e.data;
                    G()(t, this.props.pristineData) || this.setState({
                        pristineData: t
                    }, this.handleChange),
                    G()(n, this.props.data) || this.setState({
                        fields: (0,
                        m.Oi)(this.state.baseFields, n)
                    }, this.handleChange)
                }
            }, {
                key: "getOptions",
                value: function(e, t) {
                    var n = this.state.fields[e]
                      , r = n.allowDuplicates
                      , a = n.labels
                      , o = n.displayLabels;
                    return r ? a.map(function(e) {
                        return {
                            text: (0,
                            m.ss)(e, Pe),
                            value: e
                        }
                    }) : U()(a, U()(Y()(o, "labelType"), [t])).map(function(e) {
                        return {
                            text: (0,
                            m.ss)(e, Pe),
                            value: e
                        }
                    })
                }
            }, {
                key: "getFormData",
                value: function() {
                    var e = this.state.fields
                      , t = this.props.data.defaultAccount
                      , n = (0,
                    m.m5)(e, t)
                      , r = n.message
                      , a = r.isInvalid
                      , o = r.hasRequiredFields;
                    return r.duplicateEmail ? (this.setState({
                        showAlert: !0,
                        errorMsg: (0,
                        h.t)("settings.profile.DUPLICATE_EMAIL")
                    }),
                    null) : a || o ? (this.setState({
                        showAlert: !0,
                        errorMsg: (0,
                        m.ss)(o ? "NEED_REQUIRED_FIELDS" : "INVALID_FIELD", "contacts.editPanel.message")
                    }),
                    null) : n
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
                                var a, o = e.fields[t], i = o.labels, l = o.displayLabels, s = U()(i, Y()(l, "labelType"));
                                return {
                                    fields: Se(Se({}, e.fields), {}, (a = {},
                                    Ee(a, t, Se(Se({}, e.fields[t]), {}, {
                                        displayLabels: [].concat(be(l), be(s.map(function(e) {
                                            return Se(Se({}, (0,
                                            m.XW)(e, Pe)), {}, {
                                                value: ""
                                            })
                                        })))
                                    })),
                                    Ee(a, "additionalFields", r.filter(function(e) {
                                        return e.type !== t
                                    })),
                                    a))
                                }
                            }
                            return {
                                fields: Se(Se({}, e.fields), {}, (n = {},
                                Ee(n, t, Se(Se({}, e.fields[t]), {}, {
                                    display: !0
                                })),
                                Ee(n, "additionalFields", r.filter(function(e) {
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
                        m.Oi)(this.state.baseFields, {})
                    })
                }
            }, {
                key: "handleImgChange",
                value: function(e, t) {
                    this.setState(function(n) {
                        return {
                            fields: Se(Se({}, n.fields), {}, Ee({}, e, Se(Se({}, n.fields[e]), {}, {
                                photo: Se(Se({}, n.fields[e].photo), {}, {
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
                    this.setState(function(a) {
                        var o = a.fields[e]
                          , i = o.displayLabels
                          , l = o.hasMultiInputs
                          , s = o.validator
                          , c = (0,
                        m.cd)(n, (0,
                        m.X)(s, e, r));
                        return l ? {
                            fields: Se(Se({}, a.fields), {}, Ee({}, e, Se(Se({}, a.fields[e]), {}, {
                                displayLabels: i.map(function(e, n) {
                                    return t === n ? Se(Se({}, e), {}, {
                                        fields2Value: Se(Se({}, e.fields2Value), {}, Ee({}, r, Se(Se({}, e.fields2Value[r]), c)))
                                    }) : e
                                })
                            })))
                        } : {
                            fields: Se(Se({}, a.fields), {}, Ee({}, e, Se(Se({}, a.fields[e]), {}, {
                                displayLabels: i.map(function(e, n) {
                                    return t === n ? Se(Se({}, e), c) : e
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
                      , a = t.displayLabels;
                    return !!n || !!U()(r, Y()(a, "labelType")).length
                }
            }, {
                key: "addField",
                value: function(e) {
                    this.setState(function(t) {
                        var n = t.fields[e]
                          , r = n.hasMultiInputs
                          , a = n.allowDuplicates
                          , o = n.labels
                          , i = n.displayLabels
                          , l = n.fields
                          , s = n.labelCustomized
                          , c = Y()(i, "labelType");
                        if (r) {
                            var u = a ? o[0] : U()(o, c)[0]
                              , f = {};
                            return Object.values(l[u]).forEach(function(e) {
                                f[e.name] = {
                                    value: "",
                                    placeholder: e.placeholder
                                }
                            }),
                            {
                                fields: Se(Se({}, t.fields), {}, Ee({}, e, Se(Se({}, t.fields[e]), {}, {
                                    displayLabels: [].concat(be(i), [Se(Se({}, (0,
                                    m.XW)(u, Pe)), {}, {
                                        fields2Value: f
                                    })])
                                })))
                            }
                        }
                        var d = a ? o[0] : U()(o, c)[0]
                          , p = Se(Se({}, (0,
                        m.XW)(d, Pe)), {}, s ? {
                            labelValue: "",
                            value: ""
                        } : {
                            value: ""
                        });
                        return {
                            fields: Se(Se({}, t.fields), {}, Ee({}, e, Se(Se({}, t.fields[e]), {}, {
                                displayLabels: [].concat(be(i), [p])
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
                            fields: Se(Se({}, n.fields), {}, Ee({}, e, Se(Se({}, n.fields[e]), {}, {
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
                        var a = r.fields[e].displayLabels;
                        return {
                            fields: Se(Se({}, r.fields), {}, Ee({}, e, Se(Se({}, r.fields[e]), {}, {
                                displayLabels: a.map(function(e, r) {
                                    return t === r ? Se(Se({}, e), (0,
                                    m.XW)(n, Pe)) : e
                                })
                            })))
                        }
                    }, this.handleChange)
                }
            }, {
                key: "handleInputChange",
                value: function(e, t, n, r) {
                    this.setState(function(a) {
                        var o = a.fields[e]
                          , i = o.displayLabels
                          , l = o.hasMultiInputs
                          , s = o.validator
                          , c = "email" !== s ? (0,
                        m.X)(s, e, r) : ""
                          , u = (0,
                        m.Hv)(n, c);
                        return l ? {
                            fields: Se(Se({}, a.fields), {}, Ee({}, e, Se(Se({}, a.fields[e]), {}, {
                                displayLabels: i.map(function(e, a) {
                                    return t === a ? Se(Se({}, e), {}, {
                                        fields2Value: Se(Se({}, e.fields2Value), {}, Ee({}, r, Se(Se({}, e.fields2Value[r]), {}, {
                                            value: n
                                        }, u)))
                                    }) : e
                                })
                            })))
                        } : {
                            fields: Se(Se({}, a.fields), {}, Ee({}, e, Se(Se({}, a.fields[e]), {}, {
                                displayLabels: i.map(function(e, r) {
                                    return t === r ? Se(Se({}, e), {}, {
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
                        var a = r.fields[e].displayLabels
                          , o = (0,
                        m.AJ)(n);
                        return {
                            fields: Se(Se({}, r.fields), {}, Ee({}, e, Se(Se({}, r.fields[e]), {}, {
                                displayLabels: a.map(function(e, r) {
                                    return t === r ? Se(Se({}, e), {}, {
                                        labelValue: n
                                    }, o) : e
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
                      , a = (0,
                    m.m5)(r)
                      , o = a.data
                      , i = a.message
                      , l = i.photoId
                      , s = i.photoRemoved
                      , c = !1;
                    K()(n) ? (!K()(o.firstName) || !K()(o.lastName) || o.fields.length > 1) && (c = !0) : (!G()(n.firstName, o.firstName) || !G()(n.lastName, o.lastName) || l || s || n.fields.length !== o.fields.length || W()(n.fields, o.fields, function(e, t) {
                        return e.type === t.type && e.label === t.label && !!(e.value && t.value && G()(e.value, t.value) || e.values && t.values && G()(e.values, t.values))
                    }).length) && (c = !0),
                    e(c, o)
                }
            }, {
                key: "renderHeaderSection",
                value: function(e, t, n, a) {
                    var o = this
                      , i = this.props
                      , l = i.data
                      , s = i.onGetAvatar
                      , c = i.uploadAvatar
                      , u = i.setPhotoId;
                    return r.createElement(ue, ye({
                        key: e,
                        ref: a,
                        contactId: l.id,
                        editBtnDisplayed: n,
                        onInputChange: function(t, n, r) {
                            return o.handleInputChange(e, t, n, r)
                        },
                        onInputBlur: function(t, n, r) {
                            return o.handleInputBlur(e, t, n, r)
                        },
                        onImgChange: function(t) {
                            return o.handleImgChange(e, t)
                        },
                        hasPhoto: t.photo.has,
                        onGetAvatar: s,
                        uploadAvatar: c,
                        setPhotoId: u
                    }, t))
                }
            }, {
                key: "renderSelectGroupField",
                value: function(e, t, n) {
                    var a = this;
                    return r.createElement(de.Z, ye({
                        key: e,
                        ref: n,
                        getOptions: function(t) {
                            return a.getOptions(e, t)
                        },
                        isShowAddBtn: function() {
                            return a.isShowAddBtn(e)
                        },
                        addField: function() {
                            return a.addField(e)
                        },
                        removeField: function(t) {
                            a.removeField(e, t)
                        },
                        onSelectChange: function(t, n) {
                            return a.handleSelectChange(e, t, n)
                        },
                        onInputChange: function(t, n, r) {
                            return a.handleInputChange(e, t, n, r)
                        },
                        onInputBlur: function(t, n, r) {
                            return a.handleInputBlur(e, t, n, r)
                        }
                    }, t))
                }
            }, {
                key: "renderSelectField",
                value: function(e, t, n) {
                    var a = this;
                    return r.createElement(fe.Z, ye({
                        key: e,
                        ref: n,
                        getOptions: function(t) {
                            return a.getOptions(e, t)
                        },
                        isShowAddBtn: function() {
                            return a.isShowAddBtn(e)
                        },
                        addField: function() {
                            return a.addField(e)
                        },
                        removeField: function(t) {
                            a.removeField(e, t)
                        },
                        onSelectChange: function(t, n) {
                            return a.handleSelectChange(e, t, n)
                        },
                        onInputChange: function(t, n) {
                            return a.handleInputChange(e, t, n)
                        },
                        onInputBlur: function(t, n) {
                            return a.handleInputBlur(e, t, n)
                        }
                    }, t))
                }
            }, {
                key: "renderTextField",
                value: function(e, t, n) {
                    var a = this;
                    return r.createElement(pe.Z, ye({
                        key: e,
                        ref: n,
                        isShowAddBtn: function() {
                            return a.isShowAddBtn(e)
                        },
                        addField: function() {
                            return a.addField(e)
                        },
                        removeField: function(t) {
                            a.removeField(e, t)
                        },
                        onInputChange: function(t, n) {
                            return a.handleInputChange(e, t, n)
                        },
                        onLabelChange: function(t, n) {
                            return a.handleLabelChange(e, t, n)
                        },
                        onInputBlur: function(t, n) {
                            return a.handleInputBlur(e, t, n)
                        }
                    }, t))
                }
            }, {
                key: "renderAdditionalFields",
                value: function() {
                    var e = this
                      , t = this.state.fields.additionalFields
                      , n = this.context.isRtl
                      , a = t.map(function(e) {
                        return {
                            label: e.label,
                            value: e.type
                        }
                    });
                    return t.length ? r.createElement(ee(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, r.createElement(ne(), null, r.createElement("div", {
                        className: "ow-contacts-ContactEditForm-section"
                    }, r.createElement("div", {
                        class: "ow-contacts-ContactEditForm-section-title",
                        role: j.HB.HEADING,
                        "aria-level": j.DU.H3,
                        "aria-label": (0,
                        h.t)("contacts.detailEdit.label.OTHER")
                    }, r.createElement("span", null, (0,
                    h.t)("contacts.detailEdit.label.OTHER"))), r.createElement("div", {
                        className: "ow-settings-ProfileEditForm-optionsFields ow-contacts-editForm-optionsFields"
                    }, r.createElement("span", {
                        className: "control-label ow-labelField-childLabel",
                        "aria-label": (0,
                        h.t)("contacts.editPanel.ADD_FIELD_BUTTON_LABEL")
                    }, (0,
                    h.t)("contacts.editPanel.ADD_FIELD_BUTTON_LABEL")), r.createElement(me.Z, {
                        rtl: n,
                        onChange: function(t) {
                            return e.handleSelectOtherFields(t)
                        },
                        options: a,
                        placeholder: (0,
                        h.t)("contacts.editPanel.ADD_FIELD_PLACEHOLDER"),
                        clearable: !1,
                        searchable: !1
                    }))))) : void 0
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.editBtnDisplayed
                      , n = this.state
                      , a = n.fields
                      , o = n.showAlert
                      , i = n.errorMsg
                      , l = [];
                    return Object.keys(a).forEach(function(n) {
                        var r = a[n]
                          , o = (0,
                        m.pL)(n);
                        r.display && (r.isHeader ? l.push(e.renderHeaderSection(n, r, t, o)) : r.hasMultiInputs ? l.push(e.renderSelectGroupField(n, r, o)) : 1 === Object.keys(r.fields).length ? l.push(e.renderTextField(n, r, o)) : l.push(e.renderSelectField(n, r, o)))
                    }),
                    l.sort(function(e, t) {
                        return e.ref > t.ref ? 1 : -1
                    }),
                    r.createElement("div", {
                        className: "ow-settings-ProfileEditForm-Wrapper"
                    }, r.createElement("div", {
                        className: "ow-settings-ProfileEditForm ow-contacts-ContactEditForm"
                    }, r.createElement(f.Z, {
                        show: o,
                        message: i,
                        onHide: this.handleHideAlert
                    }), r.createElement("div", {
                        className: "ow-settings-ProfileEditForm-body ow-contacts-ContactEditForm-body"
                    }, r.createElement(q(), {
                        horizontal: !0
                    }, l, r.createElement(ne(), null, r.createElement(ee(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, this.renderAdditionalFields()))))))
                }
            }]),
            n
        }();
        Ae.contextTypes = {
            isRtl: o().bool
        },
        Ae.propTypes = {
            config: o().object.isRequired,
            pristineData: o().object.isRequired,
            data: o().object.isRequired,
            editBtnDisplayed: o().bool,
            onChange: o().func,
            onGetAvatar: o().func,
            uploadAvatar: o().func,
            setPhotoId: o().func
        },
        Ae.defaultProps = {
            editBtnDisplayed: !0,
            onChange: function() {},
            onGetAvatar: function() {},
            uploadAvatar: function() {},
            setPhotoId: function() {}
        };
        var Ne = n(4446);
        function Re(e) {
            "@babel/helpers - typeof";
            return (Re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ie(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Me(r.key), r)
            }
        }
        function Me(e) {
            var t = function(e, t) {
                if ("object" !== Re(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Re(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Re(t) ? t : String(t)
        }
        function Le(e, t) {
            return (Le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function je(e) {
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
                var n, r = ke(e);
                if (t) {
                    var a = ke(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Re(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Be(e)
                }(this, n)
            }
        }
        function Be(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ke(e) {
            return (ke = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Fe = Ne.UhU.isMobile
          , Ue = Ne.UhU.isTablet
          , xe = function(e) {
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
                t && Le(e, t)
            }(n, r.PureComponent);
            var t = je(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    isFormChanged: !1,
                    displayConfirm: !1
                },
                r.handleFormChange = r.handleFormChange.bind(Be(r)),
                r.handleSave = r.handleSave.bind(Be(r)),
                r.handleCancel = r.handleCancel.bind(Be(r)),
                r.handleConfirmYes = r.handleConfirmYes.bind(Be(r)),
                r.handleConfirmNo = r.handleConfirmNo.bind(Be(r)),
                r.handleConfirmCancel = r.handleConfirmCancel.bind(Be(r)),
                r.renderProfileForm = r.renderProfileForm.bind(Be(r)),
                r.renderConfirmModal = r.renderConfirmModal.bind(Be(r)),
                r.handleKeyPress = r.handleKeyPress.bind(Be(r)),
                r
            }
            return function(e, t, n) {
                t && Ie(e.prototype, t),
                n && Ie(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    document.addEventListener("keydown", this.handleKeyPress)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("keydown", this.handleKeyPress)
                }
            }, {
                key: "handleKeyPress",
                value: function(e) {
                    e.key === j.BY.ESCAPEKEY && this.handleCancel()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.props.displayConfirm !== e.displayConfirm && this.setDisplayConfirm(e.displayConfirm)
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
                key: "handleFormChange",
                value: function(e) {
                    (0,
                    this.props.onFormChange)(e),
                    this.setIsFormChanged(e)
                }
            }, {
                key: "handleSave",
                value: function() {
                    var e = this.props.onSave
                      , t = this.form.getFormData();
                    if (t) {
                        var n = t.data
                          , r = t.message;
                        e({
                            data: n,
                            photoId: r.photoId,
                            photoRemoved: r.photoRemoved
                        }),
                        this.setIsFormChanged(!1)
                    }
                }
            }, {
                key: "handleCancel",
                value: function() {
                    var e = this.props.onCancel;
                    this.state.isFormChanged ? this.setDisplayConfirm(!0) : e(),
                    (0,
                    L.kW)("#ow-settings-profile-editBtn")
                }
            }, {
                key: "handleConfirmYes",
                value: function() {
                    var e = this.props
                      , t = e.onConfirmYes
                      , n = e.onCancel;
                    this.setIsFormChanged(!1),
                    this.setDisplayConfirm(!1),
                    this.handleSave(),
                    t(),
                    n()
                }
            }, {
                key: "handleConfirmNo",
                value: function() {
                    var e = this.props
                      , t = e.onConfirmNo
                      , n = e.onCancel;
                    this.setIsFormChanged(!1),
                    this.setDisplayConfirm(!1),
                    t(),
                    n()
                }
            }, {
                key: "handleConfirmCancel",
                value: function() {
                    var e = this.props.onConfirmCancel;
                    this.setDisplayConfirm(!1),
                    e()
                }
            }, {
                key: "renderProfileForm",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , a = t.onGetAvatar
                      , o = t.uploadAvatar
                      , i = t.setPhotoId
                      , l = this.state.isFormChanged
                      , s = r.createElement(k, {
                        title: Fe || Ue ? (0,
                        h.t)("settings.profile.DESC") : "",
                        onSave: this.handleSave,
                        onCancel: this.handleCancel,
                        disableSave: !l
                    });
                    return r.createElement("div", {
                        className: "ow-settings-detail ow-settings-profile-form"
                    }, r.createElement("div", {
                        className: "ow-settingsDetail-body"
                    }, Fe || Ue ? null : r.createElement("div", {
                        className: "ow-settingsDetail-header"
                    }, r.createElement("div", {
                        className: "ow-settingsDetail-header-title",
                        role: j.HB.HEADING,
                        "aria-level": j.DU.H2,
                        "aria-label": (0,
                        h.t)("settings.profile.DESC")
                    }, (0,
                    h.t)("settings.profile.DESC"))), Fe || Ue ? s : null, r.createElement(Ae, {
                        ref: function(t) {
                            e.form = t
                        },
                        data: n,
                        pristineData: n,
                        onChange: this.handleFormChange,
                        onGetAvatar: a,
                        uploadAvatar: o,
                        setPhotoId: i
                    }), Fe || Ue ? null : s))
                }
            }, {
                key: "renderConfirmModal",
                value: function() {
                    return r.createElement(M.Z, {
                        show: !0,
                        buttonConfig: ["yes", "no"],
                        title: (0,
                        h.t)("common.MESSAGE"),
                        message: (0,
                        h.t)("app.message.CONFIRM_CANCEL_EDIT"),
                        onYes: this.handleConfirmYes,
                        onNo: this.handleConfirmNo,
                        onDismiss: this.handleConfirmCancel
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.show
                      , t = this.state.displayConfirm;
                    return r.createElement(I.Z, {
                        className: "ow-settings-profileForm-overlayWrapper",
                        show: e,
                        onHide: this.handleCancel
                    }, this.renderProfileForm(), t && this.renderConfirmModal())
                }
            }]),
            n
        }()
          , Ge = {
            id: o().string,
            isGroup: o().bool,
            firstName: o().string,
            lastName: o().string,
            email: o().string,
            displayName: o().string,
            addressBookId: o().string,
            fields: o().arrayOf(o().shape({
                type: o().string,
                label: o().string,
                value: o().string
            }))
        };
        xe.propTypes = {
            show: o().bool,
            data: o().shape(Ge),
            displayConfirm: o().bool,
            onSave: o().func,
            onCancel: o().func,
            onGetAvatar: o().func,
            uploadAvatar: o().func,
            onFormChange: o().func,
            onConfirmYes: o().func,
            onConfirmNo: o().func,
            onConfirmCancel: o().func,
            setPhotoId: o().func
        },
        xe.defaultProps = {
            show: !1,
            data: {},
            displayConfirm: !1,
            onSave: function() {},
            onCancel: function() {},
            onGetAvatar: function() {},
            uploadAvatar: function() {},
            onFormChange: function() {},
            onConfirmYes: function() {},
            onConfirmNo: function() {},
            onConfirmCancel: function() {},
            setPhotoId: function() {}
        };
        var He = xe
          , Ke = n(90656);
        function Ze(e) {
            "@babel/helpers - typeof";
            return (Ze = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Ye = ["data", "contactSort", "onSave", "onCancel", "onGetAvatar", "avatarUrl"]
          , Ve = ["data", "contactSort", "onSave", "onCancel", "onGetAvatar", "uploadAvatar", "avatarUrl", "setPhotoId"];
        function We() {
            return (We = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Je(e, t) {
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
        function qe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, ze(r.key), r)
            }
        }
        function ze(e) {
            var t = function(e, t) {
                if ("object" !== Ze(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Ze(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Ze(t) ? t : String(t)
        }
        function Qe(e, t) {
            return (Qe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Xe(e) {
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
                var n, r = et(e);
                if (t) {
                    var a = et(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Ze(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return $e(e)
                }(this, n)
            }
        }
        function $e(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function et(e) {
            return (et = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var tt = j.sH.SORT_FIRSTNAME_ASC
          , nt = j.sH.SORT_LASTNAME_ASC
          , rt = function(e) {
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
                t && Qe(e, t)
            }(n, r.PureComponent);
            var t = Xe(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                r = t.call(this, e),
                e.onLoad(),
                r.state = {
                    displayFormEditor: !1
                },
                r.isAvatarChanged = !1,
                r.setDisplayFormEditor = r.setDisplayFormEditor.bind($e(r)),
                r.handleSave = r.handleSave.bind($e(r)),
                r.handleCancel = r.handleCancel.bind($e(r)),
                r.renderSettingsHeader = r.renderSettingsHeader.bind($e(r)),
                r.renderSettingsContent = r.renderSettingsContent.bind($e(r)),
                r.renderProfileForm = r.renderProfileForm.bind($e(r)),
                r.profileDetail = r.profileDetail.bind($e(r)),
                r
            }
            return function(e, t, n) {
                t && qe(e.prototype, t),
                n && qe(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "profileDetail",
                value: function(e) {
                    var t;
                    e && (null === e || void 0 === e || null === (t = e.querySelector(".ow-settings-profile-editBtn")) || void 0 === t || t.focus())
                }
            }, {
                key: "setDisplayFormEditor",
                value: function(e) {
                    this.setState({
                        displayFormEditor: e
                    })
                }
            }, {
                key: "handleSave",
                value: function(e) {
                    (0,
                    this.props.onSave)(e),
                    this.isAvatarChanged = e.photoId,
                    this.setDisplayFormEditor(!1)
                }
            }, {
                key: "handleCancel",
                value: function() {
                    (0,
                    this.props.onCancel)(),
                    this.setDisplayFormEditor(!1)
                }
            }, {
                key: "renderSettingsHeader",
                value: function() {
                    return r.createElement("div", {
                        className: "ow-settingsDetail-header"
                    }, r.createElement("div", {
                        className: "ow-settingsDetail-header-title",
                        role: j.HB.HEADING,
                        "aria-level": j.DU.H2,
                        "aria-label": (0,
                        h.t)("settings.profile.TITLE")
                    }, (0,
                    h.t)("settings.profile.TITLE")))
                }
            }, {
                key: "renderSettingsContent",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , a = t.contactSort
                      , o = (t.onSave,
                    t.onCancel,
                    t.onGetAvatar)
                      , l = t.avatarUrl;
                    Je(t, Ye);
                    return r.createElement("div", {
                        className: "ow-settingsDetail-body",
                        tabIndex: 0
                    }, this.renderSettingsHeader(), r.createElement("div", {
                        className: "ow-settingsDetail-toolbar"
                    }, r.createElement(i.Z, {
                        className: "ow-settings-button ow-settings-profile-editBtn ow-button-primary",
                        onClick: function() {
                            return e.setDisplayFormEditor(!0)
                        },
                        id: "ow-settings-profile-editBtn",
                        "aria-label": (0,
                        Ke.WU)("".concat((0,
                        h.t)("common.EDIT"), " ").concat((0,
                        h.t)("settings.MODULE_DESC.PROFILE")))
                    }, (0,
                    h.t)("common.EDIT"))), r.createElement(R, {
                        data: (0,
                        m.Tx)(n, {
                            sort: a
                        }),
                        onGetAvatar: o,
                        isAvatarChanged: this.isAvatarChanged,
                        avatarUrl: l
                    }))
                }
            }, {
                key: "renderProfileForm",
                value: function() {
                    var e = this.props
                      , t = e.data
                      , n = (e.contactSort,
                    e.onSave,
                    e.onCancel,
                    e.onGetAvatar)
                      , a = e.uploadAvatar
                      , o = (e.avatarUrl,
                    e.setPhotoId)
                      , i = Je(e, Ve)
                      , l = this.state.displayFormEditor;
                    return r.createElement(He, We({
                        show: l,
                        data: t,
                        onSave: this.handleSave,
                        onCancel: this.handleCancel,
                        onGetAvatar: n,
                        uploadAvatar: a,
                        setPhotoId: o
                    }, i))
                }
            }, {
                key: "render",
                value: function() {
                    return r.createElement("div", {
                        className: "ow-settings-detail ow-settings-profile",
                        ref: this.profileDetail
                    }, this.renderSettingsContent(), this.renderProfileForm())
                }
            }]),
            n
        }();
        rt.propTypes = {
            data: o().object,
            contactSort: o().oneOf([nt, tt]),
            onLoad: o().func,
            onSave: o().func,
            onCancel: o().func,
            onGetAvatar: o().func,
            uploadAvatar: o().func,
            avatarUrl: o().string,
            setPhotoId: o().func
        },
        rt.defaultProps = {
            data: {},
            contactSort: nt,
            onLoad: function() {},
            onSave: function() {},
            onCancel: function() {},
            onGetAvatar: function() {},
            uploadAvatar: function() {},
            avatarUrl: "",
            setPhotoId: function() {}
        };
        var at = rt
    },
    88014: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return A
            }
        });
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(16969)
          , l = n(35369)
          , s = n(84987)
          , c = n(90656)
          , u = n(4446)
          , f = n(83416)
          , d = n(94165)
          , p = n(29610)
          , m = n(70293)
          , h = n.n(m)
          , y = n(38868)
          , b = n.n(y);
        function v(e) {
            "@babel/helpers - typeof";
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var g = ["data", "accountInfo", "loginHistoryEnabled"];
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
        function E(e, t) {
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
        function C(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, O(r.key), r)
            }
        }
        function O(e) {
            var t = function(e, t) {
                if ("object" !== v(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== v(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === v(t) ? t : String(t)
        }
        function _(e, t) {
            return (_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, r = T(e);
                if (t) {
                    var a = T(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === v(t) || "function" == typeof t))
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
        function T(e) {
            return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var P = u.UhU.isMobile
          , A = function(e) {
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
                t && _(e, t)
            }(n, r.PureComponent);
            var t = w(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).handleSave = r.handleSave.bind(D(r)),
                r
            }
            return function(e, t, n) {
                t && C(e.prototype, t),
                n && C(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleSave",
                value: function(e) {
                    var t = this
                      , n = e.oldPassCode
                      , r = e.newPassCode;
                    (0,
                    this.props.onSave)(n, r, {
                        successFn: function() {
                            if (t.formRef) {
                                var e = t.formRef.getPristineValues();
                                t.formRef.reset(e),
                                t.formRef.inputs.forEach(function(e) {
                                    e.setState({
                                        isPristine: !0
                                    })
                                })
                            }
                        }
                    })
                }
            }, {
                key: "renderPasscodeChange",
                value: function() {
                    var e = this
                      , t = this.props.data;
                    return r.createElement(l.l0, {
                        ref: function(t) {
                            e.formRef = t
                        }
                    }, r.createElement("div", {
                        className: "ow-settings-detail ow-settings-security-header",
                        id: "ow-settings-security-password"
                    }, r.createElement("div", {
                        id: ""
                    }, r.createElement("div", {
                        className: "ow-settingsDetails-sub-header"
                    }, r.createElement("div", {
                        className: "ow-settingsDetail-header-title",
                        role: d.HB.HEADING,
                        "aria-level": d.DU.H3,
                        "aria-label": (0,
                        s.t)("settings.MODULE_DESC.CHANGE_PASSCODE")
                    }, (0,
                    s.t)("settings.MODULE_DESC.CHANGE_PASSCODE"))), r.createElement("div", {
                        class: "ow-settings-security-content ow-settings-security-content-form"
                    }, r.createElement(b(), null, r.createElement(h(), {
                        lg: "4",
                        md: "4",
                        xs: "4"
                    }, r.createElement(l.UP, {
                        type: "password",
                        label: (0,
                        s.t)("settings.password.OLD_PASSCODE"),
                        name: "oldPassCode",
                        value: t.oldPassCode,
                        "aria-label": (0,
                        s.t)("settings.password.OLD_PASSCODE"),
                        required: !0,
                        validations: {
                            maxLength: d.k0
                        },
                        validationErrors: {
                            maxLength: (0,
                            c.WU)((0,
                            s.t)("settings.profile.maxLengthText"), d.k0),
                            isDefaultRequiredValue: (0,
                            s.t)("settings.password.INVALID_PASSCODE_WARNING")
                        },
                        "aria-required": "true"
                    })), r.createElement(h(), {
                        lg: "4",
                        md: "4",
                        xs: "4"
                    }, r.createElement(l.UP, {
                        type: "password",
                        label: (0,
                        s.t)("settings.password.NEW_PASSCODE"),
                        name: "newPassCode",
                        value: t.newPassCode,
                        "aria-label": (0,
                        s.t)("settings.password.NEW_PASSCODE"),
                        required: !0,
                        validations: {
                            maxLength: d.k0
                        },
                        validationErrors: {
                            maxLength: (0,
                            c.WU)((0,
                            s.t)("settings.profile.maxLengthText"), d.k0),
                            isDefaultRequiredValue: (0,
                            s.t)("settings.password.INVALID_PASSCODE_WARNING")
                        }
                    })), r.createElement(h(), {
                        lg: "4",
                        md: "4",
                        xs: "4"
                    }, r.createElement(l.UP, {
                        type: "password",
                        label: (0,
                        s.t)("settings.password.CONFIRM_PASSCODE"),
                        name: "confirmPassCode",
                        value: t.confirmPassCode,
                        "aria-label": (0,
                        s.t)("settings.password.CONFIRM_PASSCODE"),
                        required: !0,
                        validations: {
                            equalsField: "newPassCode",
                            maxLength: d.k0
                        },
                        validationErrors: {
                            equalsField: (0,
                            s.t)("settings.password.CONFIRM_PASSCODE_NOT_ACCORD"),
                            maxLength: (0,
                            c.WU)((0,
                            s.t)("settings.profile.maxLengthText"), d.k0),
                            isDefaultRequiredValue: (0,
                            s.t)("settings.password.INVALID_PASSCODE_WARNING")
                        }
                    })))))))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.data,
                    e.accountInfo)
                      , n = e.loginHistoryEnabled
                      , a = E(e, g);
                    return (0,
                    f.Z)("mail.loginHistory.enabled") && n && n.enabled ? (0,
                    p.j)("DLH", "show_dlh_info", {
                        record: [t && t.email, "show_dlh_info", !0]
                    }) : (0,
                    p.j)("DLH", "show_dlh_info", {
                        record: [t && t.email, "show_dlh_info", !1]
                    }),
                    r.createElement(i.Z, S({}, a, {
                        className: "ow-settingsPassword",
                        title: (0,
                        s.t)("settings.MODULE_DESC.SECURITY"),
                        desc: (0,
                        s.t)("settings.MODULE_DESC.SECURITY_SUB_HEAD"),
                        onSave: this.handleSave,
                        onCancel: this.handleCancel,
                        enableBack: P,
                        enableCancel: !P,
                        isSecurity: !0
                    }), this.renderPasscodeChange())
                }
            }]),
            n
        }();
        A.defaultProps = {
            data: {
                oldPassCode: "",
                newPassCode: "",
                confirmPassCode: ""
            },
            onSave: function() {},
            onCancel: function() {}
        },
        A.propTypes = {
            data: o().shape({
                oldPassCode: o().string,
                newPassCode: o().string,
                confirmPassCode: o().string,
                activeTab: o().string.isRequired,
                label: o().string.isRequired,
                onClick: o().func.isRequired
            }),
            onSave: o().func,
            onCancel: o().func
        }
    },
    83228: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return E
            }
        });
        var r = n(16083)
          , a = n(70039)
          , o = (0,
        r.$j)(function(e) {
            return {
                selectedSetting: (0,
                a.Ci)(e),
                deviceList: (0,
                a.PG)(e),
                loginHistoryEnabled: (0,
                a.n8)(e)
            }
        })
          , i = n(87401)
          , l = n(23398)
          , s = n.n(l)
          , c = n(6671)
          , u = n(94165)
          , f = n(4446);
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
        var p = ["selectedSetting", "components", "getSelectedSetting", "getSettingDetailCmp"];
        function m(e, t) {
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
        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, y(r.key), r)
            }
        }
        function y(e) {
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
        function b(e, t) {
            return (b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, n)
            }
        }
        function g(e) {
            return (g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
            }(n, i.PureComponent);
            var t = v(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && h(e.prototype, t),
                n && h(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e, t = this.props, n = t.selectedSetting, r = t.components, a = t.getSelectedSetting, o = t.getSettingDetailCmp, l = m(t, p);
                    f.UhU.isDesktop ? e = a(n === u.lG ? "Password" : n) : e = a(n);
                    var s = o(e, r);
                    return s ? i.createElement(s, l) : i.createElement("div", null, "Please add the ".concat(e, " detail panel."))
                }
            }]),
            n
        }();
        S.defaultProps = {
            selectedSetting: "",
            components: c.Z,
            getSelectedSetting: function(e) {
                var t = e.split("#");
                return t[t.length - 1]
            },
            getSettingDetailCmp: function(e, t) {
                return t["".concat(e, "Cntr")]
            }
        },
        S.propTypes = {
            selectedSetting: s().string,
            components: s().object,
            getSelectedSetting: s().func,
            getSettingDetailCmp: s().func
        };
        var E = o(S)
    },
    2711: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var r = n(16083)
          , a = n(9224)
          , o = n(45857)
          , i = n(70039)
          , l = n(7031)
          , s = (0,
        r.$j)(function(e) {
            return {
                selected: (0,
                i.Ci)(e),
                routerLocation: (0,
                l.X)(e),
                account: (0,
                o.bk)(e)
            }
        }, function(e, t) {
            return {
                onSelectedChange: function(n) {
                    e((0,
                    a.C9)(n)),
                    t.onSelectedChange && t.onSelectedChange(n)
                }
            }
        })(n(16768).Z)
    },
    46169: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return jl
            }
        });
        var r = n(60085)
          , a = n(16083)
          , o = n(46095)
          , i = n(63482)
          , l = n(54806)
          , s = n(45857)
          , c = n(79819)
          , u = n(93279)
          , f = n(61684)
          , d = n(27093)
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
        function h(e, t) {
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
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach(function(t) {
                    b(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function b(e, t, n) {
            return (t = function(e) {
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
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function v(e) {
            return function(e) {
                if (Array.isArray(e))
                    return g(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return g(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return g(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var S = p.ob.TYPE_CONTACT
          , E = (0,
        a.$j)(function(e) {
            var t, n, r = (0,
            i.af)(e) || {}, a = (0,
            s.hL)(e) || {}, o = (0,
            l.d)(e), u = {
                label: "other",
                type: "lzEmail",
                value: a.email,
                primary: !0
            }, f = o.fields, d = o.lzEmail.fields;
            return 0 == d.length ? (t = [].concat(v(f), [u]),
            n = [].concat(v(d), [u])) : (t = v(f),
            n = v(d)),
            u.disabled = !0,
            {
                data: y(y({
                    "@type": S,
                    firstName: r[p.sw.firstName.key],
                    lastName: r[p.sw.lastName.key]
                }, o), {}, {
                    fields: t,
                    lzEmail: {
                        fields: n
                    },
                    defaultAccount: a.email
                }),
                avatarUrl: (0,
                l.p1)(e),
                displayConfirm: (0,
                c.J)(e),
                contactSort: (0,
                i.Mk)(e)
            }
        }, function(e, t) {
            return {
                onLoad: function() {
                    e((0,
                    f.D5)())
                },
                onSave: function(t) {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)(!1)),
                    e((0,
                    f.hy)(t))
                },
                onCancel: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e(d.appSetPendingCancel.apply(void 0, arguments))
                },
                onGetAvatar: (0,
                o.DE)(u.getUserProfileAvatar, e),
                uploadAvatar: (0,
                o.DE)(u.resourceUpload, e),
                setPhotoId: function(t) {
                    return e((0,
                    f.V3)(t))
                },
                onFormChange: function(n) {
                    e((0,
                    d.appSetFormDirty)(n)),
                    t.onFormChange && t.onFormChange(n)
                },
                onConfirmYes: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)())
                },
                onConfirmNo: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)())
                },
                onConfirmCancel: function() {
                    e((0,
                    d.appSetPendingCancel)())
                }
            }
        })(r.Z)
          , C = n(30965)
          , O = n(51402)
          , _ = n(25678)
          , w = n(69437)
          , D = n(175)
          , T = n(83416)
          , P = ["timezone"];
        function A(e) {
            "@babel/helpers - typeof";
            return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function N(e, t) {
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
        function R(e, t) {
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
        function I(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? R(Object(n), !0).forEach(function(t) {
                    M(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function M(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== A(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== A(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === A(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var L = (0,
        T.Z)("settings.preference")
          , j = (0,
        a.$j)(function(e) {
            var t = ((0,
            O.s5)(e) || {}).id;
            return {
                data: I(I({}, (0,
                i.af)(e)), {}, {
                    timezone: t
                }),
                timezoneIdList: (0,
                O.HQ)(e),
                timezoneOptions: (0,
                O.up)(e),
                displayConfirm: (0,
                c.J)(e)
            }
        }, function(e, t) {
            return {
                onLoadTimezoneList: function() {
                    return e((0,
                    _.Hh)())
                },
                onSave: function(t) {
                    var n = t.timezone
                      , r = N(t, P);
                    Object.keys(r).length && (L.localeLanguage.key in r ? e((0,
                    w.T)(r, {
                        successCallback: function() {
                            (0,
                            D.i_)(r[L.localeLanguage.key], function(e) {
                                window.ux.reRender({
                                    direction: e
                                })
                            })
                        }
                    })) : e((0,
                    w.T)(r), {
                        successCallback: function() {
                            window.ux.reRender()
                        }
                    })),
                    n && e((0,
                    _.Np)(n, Object.keys(r).length > 0))
                },
                onFormChange: function(n) {
                    e((0,
                    d.appSetFormDirty)(n)),
                    t.onFormChange && t.onFormChange(n)
                },
                onConfirmYes: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)(!1))
                },
                onConfirmNo: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)(!1))
                },
                onConfirmCancel: function() {
                    e((0,
                    d.appSetPendingCancel)())
                }
            }
        })(C.Z)
          , B = n(87401)
          , k = n(23398)
          , F = n.n(k)
          , U = n(16969)
          , x = n(35369)
          , G = n(84987)
          , H = n(90656)
          , K = n(4446);
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
        var Y = ["data"];
        function V() {
            return (V = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function W(e, t) {
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
        function J(e, t) {
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
        function z(e, t) {
            return (z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Q(e) {
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
                var n, r = $(e);
                if (t) {
                    var a = $(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Z(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return X(e)
                }(this, n)
            }
        }
        function X(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function $(e) {
            return ($ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ee = K.UhU.isMobile
          , te = function(e) {
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
            }(n, B.PureComponent);
            var t = Q(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).handleSave = r.handleSave.bind(X(r)),
                r
            }
            return function(e, t, n) {
                t && J(e.prototype, t),
                n && J(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleSave",
                value: function(e) {
                    var t = this
                      , n = e.oldPassCode
                      , r = e.newPassCode;
                    (0,
                    this.props.onSave)(n, r, {
                        successFn: function() {
                            var e = t.formRef.getPristineValues();
                            t.formRef.reset(e),
                            t.formRef.inputs.forEach(function(e) {
                                e.setState({
                                    isPristine: !0
                                })
                            })
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , r = W(t, Y);
                    return B.createElement(U.Z, V({}, r, {
                        className: "ow-settingsPassword",
                        title: (0,
                        G.t)("settings.MODULE_DESC.SECURITY"),
                        desc: (0,
                        G.t)("settings.password.DESC"),
                        onSave: this.handleSave,
                        enableBack: ee,
                        enableCancel: !ee
                    }), B.createElement(x.l0, {
                        ref: function(t) {
                            e.formRef = t
                        },
                        id: "ow-settings-security-form"
                    }, B.createElement(x.UP, {
                        type: "password",
                        label: (0,
                        G.t)("settings.password.OLD_PASSCODE"),
                        name: "oldPassCode",
                        value: n.oldPassCode,
                        required: !0,
                        "aria-required": "true",
                        validations: {
                            maxLength: p.k0
                        },
                        validationErrors: {
                            maxLength: (0,
                            H.WU)((0,
                            G.t)("settings.profile.maxLengthText"), p.k0),
                            isDefaultRequiredValue: (0,
                            G.t)("settings.password.INVALID_PASSCODE_WARNING")
                        }
                    }), B.createElement(x.UP, {
                        type: "password",
                        label: (0,
                        G.t)("settings.password.NEW_PASSCODE"),
                        name: "newPassCode",
                        value: n.newPassCode,
                        required: !0,
                        "aria-required": "true",
                        validations: {
                            maxLength: p.k0
                        },
                        validationErrors: {
                            maxLength: (0,
                            H.WU)((0,
                            G.t)("settings.profile.maxLengthText"), p.k0),
                            isDefaultRequiredValue: (0,
                            G.t)("settings.password.INVALID_PASSCODE_WARNING")
                        }
                    }), B.createElement(x.UP, {
                        type: "password",
                        label: (0,
                        G.t)("settings.password.CONFIRM_PASSCODE"),
                        name: "confirmPassCode",
                        value: n.confirmPassCode,
                        required: !0,
                        "aria-required": "true",
                        validations: {
                            equalsField: "newPassCode",
                            maxLength: p.k0
                        },
                        validationErrors: {
                            equalsField: (0,
                            G.t)("settings.password.CONFIRM_PASSCODE_NOT_ACCORD"),
                            maxLength: (0,
                            H.WU)((0,
                            G.t)("settings.profile.maxLengthText"), p.k0),
                            isDefaultRequiredValue: (0,
                            G.t)("settings.password.INVALID_PASSCODE_WARNING")
                        }
                    })))
                }
            }]),
            n
        }();
        te.defaultProps = {
            data: {
                oldPassCode: "",
                newPassCode: "",
                confirmPassCode: ""
            },
            onSave: function() {}
        },
        te.propTypes = {
            data: F().shape({
                oldPassCode: F().string,
                newPassCode: F().string,
                confirmPassCode: F().string
            }),
            onSave: F().func
        };
        var ne = n(76578)
          , re = n(32932)
          , ae = (0,
        a.$j)(function(e) {
            return {
                displayConfirm: (0,
                c.J)(e),
                accountInfo: (0,
                s.hL)(e) || {}
            }
        }, function(e, t) {
            return {
                onSave: function() {
                    e(re.changePassword.apply(void 0, arguments))
                },
                onFormChange: function(n) {
                    e((0,
                    d.appSetFormDirty)(n)),
                    t.onFormChange && t.onFormChange(n)
                },
                onConfirmYes: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)(!1))
                },
                onConfirmNo: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)(!1))
                },
                onConfirmCancel: function() {
                    e((0,
                    d.appSetPendingCancel)())
                }
            }
        })
          , oe = K.UhU.isDesktop ? ae(ne.Z) : ae(te)
          , ie = n(41550)
          , le = (0,
        n(9122).Z)(ie.Z)
          , se = n(71703)
          , ce = n(17048)
          , ue = n(70039)
          , fe = n(9224)
          , de = n(312);
        function pe(e) {
            "@babel/helpers - typeof";
            return (pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var me = ["selectedSettings"]
          , he = ["onBack"];
        function ye(e, t) {
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
        function be(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ye(Object(n), !0).forEach(function(t) {
                    ve(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function ve(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== pe(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== pe(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === pe(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function ge(e, t) {
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
        var Se = (0,
        a.$j)(function(e) {
            return {
                selectedSettings: (0,
                ue.Ci)(e),
                list: (0,
                ce.a)(e),
                accountInfo: (0,
                s.hL)(e),
                severConfig: (0,
                s.Mg)(e),
                allowedDomains: (0,
                s.dd)(e)
            }
        }, function(e, t) {
            var n = t.onBack;
            return {
                onBack: function(t) {
                    e((0,
                    fe.tC)(t)),
                    n && n(t)
                },
                onLoad: function() {
                    return e((0,
                    de.tp)())
                },
                onSave: function() {
                    return e(de.hx.apply(void 0, arguments))
                },
                onDelete: function(t) {
                    return e((0,
                    de.gG)(t))
                }
            }
        }, function(e, t, n) {
            var r = e.selectedSettings
              , a = ge(e, me)
              , o = t.onBack
              , i = ge(t, he);
            return be(be(be(be({}, n), a), i), {}, {
                onBack: function() {
                    o(r.split("#")[0])
                }
            })
        })(se.Z)
          , Ee = n(32022)
          , Ce = n.n(Ee)
          , Oe = n(70293)
          , _e = n.n(Oe)
          , we = n(38868)
          , De = n.n(we);
        function Te(e) {
            "@babel/helpers - typeof";
            return (Te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Pe = ["data", "dateFormat", "onSave", "onFormChange"];
        function Ae() {
            return (Ae = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Ne(e, t) {
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
        function Re(e, t) {
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
        function Ie(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Re(Object(n), !0).forEach(function(t) {
                    Me(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function Me(e, t, n) {
            return (t = je(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Le(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, je(r.key), r)
            }
        }
        function je(e) {
            var t = function(e, t) {
                if ("object" !== Te(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Te(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Te(t) ? t : String(t)
        }
        function Be(e, t) {
            return (Be = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function ke(e) {
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
                var n, r = Ue(e);
                if (t) {
                    var a = Ue(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Te(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Fe(e)
                }(this, n)
            }
        }
        function Fe(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Ue(e) {
            return (Ue = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var xe = K.UhU.isDesktop
          , Ge = {
            data: F().shape({
                enabled: F().bool,
                startDate: F().string,
                endDate: F().string,
                ariaLabel: F().string,
                message: F().string,
                original: F().bool
            }),
            dateFormat: F().string,
            isCPMSServer: F().bool,
            onLoad: F().func,
            onSave: F().func,
            onSaveForCPMS: F().func,
            onFormChange: F().func
        }
          , He = function(e) {
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
                t && Be(e, t)
            }(n, B.PureComponent);
            var t = ke(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    enabled: void 0,
                    startDate: void 0,
                    endDate: void 0,
                    enableStart: r.props.data.enabled,
                    enableEnd: !1
                },
                r.toggleStartCheckbox = r.toggleStartCheckbox.bind(Fe(r)),
                r.toggleEndCheckbox = r.toggleEndCheckbox.bind(Fe(r)),
                r.handleChangeStartTime = r.handleChangeStartTime.bind(Fe(r)),
                r.handleChangeEndTime = r.handleChangeEndTime.bind(Fe(r)),
                r.handleEnableChange = r.handleEnableChange.bind(Fe(r)),
                r
            }
            return function(e, t, n) {
                t && Le(e.prototype, t),
                n && Le(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    this.props.onLoad()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.data.endDate && this.setState({
                        enableEnd: !0,
                        endTime: e.data.endDate
                    }),
                    e.data.startDate && this.setState({
                        enableStart: !0,
                        startTime: e.data.startDate
                    })
                }
            }, {
                key: "toggleStartCheckbox",
                value: function(e) {
                    this.setState({
                        enableStart: e
                    })
                }
            }, {
                key: "toggleEndCheckbox",
                value: function(e) {
                    this.setState({
                        enableEnd: e
                    })
                }
            }, {
                key: "handleChangeStartTime",
                value: function(e) {
                    var t = this.props.data;
                    window.TimeUtil.getShortTime(e) !== window.TimeUtil.getShortTime(t.startDate) && Ce()(e).format("YYYYMMDD") !== Ce()(t.startDate).format("YYYYMMDD") ? this.setState({
                        startDate: e,
                        startTime: e
                    }) : window.TimeUtil.getShortTime(e) !== window.TimeUtil.getShortTime(this.state.startDate) && Ce()(e).format("YYYYMMDD") === Ce()(t.startDate).format("YYYYMMDD") ? this.setState({
                        startDate: e
                    }) : this.setState({
                        startTime: e
                    })
                }
            }, {
                key: "handleChangeEndTime",
                value: function(e) {
                    var t = this.props.data;
                    window.TimeUtil.getShortTime(e) !== window.TimeUtil.getShortTime(t.endDate) && Ce()(e).format("YYYYMMDD") !== Ce()(t.endDate).format("YYYYMMDD") ? this.setState({
                        endDate: e,
                        endTime: e
                    }) : window.TimeUtil.getShortTime(e) !== window.TimeUtil.getShortTime(this.state.endDate) && Ce()(e).format("YYYYMMDD") === Ce()(t.endDate).format("YYYYMMDD") ? this.setState({
                        endDate: e
                    }) : this.setState({
                        endTime: e
                    })
                }
            }, {
                key: "handleEnableChange",
                value: function(e) {
                    this.setState(function(t) {
                        return Ie(Ie({}, t), {}, {
                            enableStart: e
                        })
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , r = t.dateFormat
                      , a = t.onSave
                      , o = t.onFormChange
                      , i = Ne(t, Pe)
                      , l = this.state
                      , s = l.enabled
                      , c = l.startDate
                      , u = l.enableStart
                      , f = l.enableEnd
                      , d = void 0 === s ? n.enabled : s
                      , p = Ce()(c || n.startDate)
                      , m = this.state.startTime ? Ce()(this.state.startTime) : n.startDate ? Ce()(n.startDate) : Ce()()
                      , h = this.state.endTime ? Ce()(this.state.endTime) : n.endDate ? Ce()(n.endDate) : Ce()().add(1, "days")
                      , y = (0,
                    T.Z)("mail.autoReplyMaxLength");
                    return B.createElement(U.Z, Ae({
                        className: "ow-settingsAutoReply"
                    }, i, {
                        title: (0,
                        G.t)("settings.autoReply.TITLE"),
                        desc: (0,
                        G.t)("settings.autoReply.DESC"),
                        onSave: a,
                        enableCancel: xe
                    }), B.createElement(x.l0, {
                        className: "ow-settingsAutoReply-form ow-formatting-settings-options",
                        onChange: function(t, n) {
                            e.setState({
                                enabled: t.enabled
                            }),
                            o(n)
                        },
                        data: n
                    }, B.createElement(De(), null, B.createElement(_e(), {
                        lg: "12",
                        md: "12"
                    }, B.createElement(x.hE, {
                        classIcon: "ow-settingsAutoReply-checkbox-icon",
                        classLabel: "ow-settingsAutoReply-checkbox-label",
                        name: "enabled",
                        value: n.enabled,
                        onChange: this.handleEnableChange,
                        label: (0,
                        G.t)("settings.autoReply.AUTO_REPLY_DESC_MX"),
                        "aria-label": (0,
                        G.t)("settings.autoReply.AUTO_REPLY_DESC_MX")
                    }))), B.createElement(De(), null, B.createElement(_e(), {
                        lg: "4",
                        md: "4",
                        xs: "12"
                    }, B.createElement("div", {
                        className: "ow-settingsAutoreply-startDateContainer"
                    }, B.createElement(x.bM, {
                        name: "startDateCheckbox",
                        onChange: this.toggleStartCheckbox,
                        value: this.state.enableStart,
                        disabled: !0,
                        label: (0,
                        G.t)("settings.autoReply.START_DATE")
                    }), B.createElement(x.UP, {
                        type: "date",
                        name: "startDate",
                        value: u ? n.startDate ? Ce()(n.startDate).format("YYYYMMDD") : Ce()().format("YYYYMMDD") : "",
                        label: (0,
                        G.t)("settings.autoReply.START_DATE"),
                        minDate: n.startDate ? Ce()(n.startDate).format("YYYYMMDD") > Ce()().format("YYYYMMDD") ? Ce()() : n.startDate : Ce()(),
                        onChange: function(t) {
                            return e.handleChangeStartTime(t)
                        },
                        disabled: !d,
                        validations: {
                            afterCurrent: function(e) {
                                return !e.enabled || (!("" != e.startDate && !e.startDate) || (0,
                                G.t)("settings.errorMessage.AUTOREPLY_START_DATE_MUST_AFTER", Ce()().format(r)))
                            }
                        },
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            G.t)("common.errorMessage.REQUIRED")
                        },
                        dateToStringFormat: "YYYYMMDD",
                        dateFormat: r,
                        readOnly: !0
                    }), u && d && B.createElement(x.k3, {
                        name: "startTime",
                        ariaLabel: (0,
                        G.t)("calendar.editorView.LABEL_START_TIME"),
                        className: "ow-autoreply-timeStamp",
                        value: m.valueOf(),
                        onChange: function(t) {
                            return e.handleChangeStartTime(t)
                        }
                    })))), B.createElement(De(), null, B.createElement(_e(), {
                        lg: "4",
                        md: "4",
                        xs: "12"
                    }, B.createElement("div", {
                        className: "ow-settingsAutoreply-startDateContainer"
                    }, B.createElement(x.bM, {
                        name: "endDateCheckbox",
                        value: !!n.endDate,
                        onChange: this.toggleEndCheckbox,
                        disabled: !d,
                        label: (0,
                        G.t)("settings.autoReply.END_DATE")
                    }), B.createElement(x.UP, {
                        type: "date",
                        name: "endDate",
                        value: f ? n.endDate ? Ce()(n.endDate).format("YYYYMMDD") : Ce()().add(1, "days").format("YYYYMMDD") : "",
                        label: (0,
                        G.t)("settings.autoReply.END_DATE"),
                        minDate: n.endDate ? Ce()(n.startDate).format("YYYYMMDD") > Ce()().format("YYYYMMDD") ? Ce()() : n.endDate : Ce()(p).format("YYYYMMDD") > Ce()() ? Ce()(p).format("YYYYMMDD") : "" == n.endDate ? "" : Ce()(),
                        disabled: !d,
                        onChange: function(t) {
                            return e.handleChangeEndTime(t)
                        },
                        validations: {
                            afterStartDate: function(e) {
                                return !(e.startDate && !(e.endDate && e.startDate <= e.endDate) && "" != e.startDate && "" != e.endDate) || (0,
                                G.t)("settings.mail.END_DATE_AFTER_START_DATE")
                            }
                        },
                        autoReplyErrorDisplay: UXConfig.mail.autoReplyErrorDisplay,
                        dateToStringFormat: "YYYYMMDD",
                        dateFormat: r,
                        readOnly: !0
                    }), f && d && B.createElement(x.k3, {
                        name: "endTime",
                        ariaLabel: (0,
                        G.t)("calendar.editorView.LABEL_END_TIME"),
                        className: "ow-autoreply-timeStamp",
                        value: h.valueOf(),
                        onChange: function(t) {
                            return e.handleChangeEndTime(t)
                        }
                    })))), B.createElement(De(), null, B.createElement(_e(), {
                        lg: "8",
                        md: "8",
                        xs: "12"
                    }, B.createElement(x.UP, {
                        name: "message",
                        type: "textarea",
                        className: "ow-inputField-vertical ow-settings-autoreply-text",
                        value: n.message,
                        label: (0,
                        G.t)("settings.autoReply.MESSAGE"),
                        disabled: !d,
                        required: this.state.enabled,
                        validations: {
                            customValidation: function(e, t) {
                                return !(t.length > y) || (0,
                                H.WU)((0,
                                G.t)("settings.autoReply.MAX-LENGTH"), y)
                            }
                        },
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            G.t)("common.errorMessage.REQUIRED")
                        },
                        popperPlacement: "bottom",
                        placeholder: (0,
                        G.t)("settings.MODULE_DESC.PLACEHOLDER"),
                        "aria-label": n.message ? n.message : (0,
                        G.t)("settings.MODULE_DESC.PLACEHOLDER"),
                        "aria-required": !0
                    })))))
                }
            }]),
            n
        }();
        He.propTypes = Ge,
        He.defaultProps = {
            data: {},
            dateFormat: "",
            isCPMSServer: !1,
            onLoad: function() {},
            onSave: function() {},
            onSaveForCPMS: function() {},
            onFormChange: function() {},
            ariaLabel: ""
        };
        var Ke = He
          , Ze = n(37069)
          , Ye = function(e) {
            return e.isCPMSServer ? B.createElement(Ze.Z, e) : B.createElement(Ke, e)
        };
        Ye.propTypes = {
            isCPMSServer: F().bool
        },
        Ye.defaultProps = {
            isCPMSServer: !1
        };
        var Ve = Ye
          , We = n(72325);
        function Je(e) {
            "@babel/helpers - typeof";
            return (Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var qe = ["selectedSettings"]
          , ze = ["onBack"];
        function Qe(e, t) {
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
        function Xe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Qe(Object(n), !0).forEach(function(t) {
                    $e(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qe(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function $e(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Je(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Je(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Je(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function et(e, t) {
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
        var tt = (0,
        a.$j)(function(e) {
            return {
                selectedSettings: (0,
                ue.Ci)(e),
                data: e.settings.mailSettings.autoReply,
                dateFormat: (0,
                i.Ox)(e),
                displayConfirm: (0,
                c.J)(e),
                isCPMSServer: "CPMS" === (0,
                s.j2)(e)
            }
        }, function(e, t) {
            var n = t.onBack;
            return {
                onLoad: function() {
                    return e((0,
                    We.kf)())
                },
                onBack: function(t) {
                    e((0,
                    fe.tC)(t)),
                    n && n(t)
                },
                onSave: function(t) {
                    return e((0,
                    We.Oc)(t))
                },
                onFormChange: function(t) {
                    return e((0,
                    d.appSetFormDirty)(t))
                },
                onConfirmYes: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)())
                },
                onConfirmNo: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)())
                },
                onConfirmCancel: function() {
                    e((0,
                    d.appSetPendingCancel)())
                },
                onSaveForCPMS: function(t) {
                    return e((0,
                    We.GJ)(t))
                }
            }
        }, function(e, t, n) {
            var r = e.selectedSettings
              , a = et(e, qe)
              , o = t.onBack
              , i = et(t, ze);
            return Xe(Xe(Xe(Xe({}, n), a), i), {}, {
                onBack: function() {
                    o(r.split("#")[0])
                }
            })
        })(Ve)
          , nt = n(19021);
        function rt(e) {
            "@babel/helpers - typeof";
            return (rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var at = ["selectedSettings"]
          , ot = ["onBack"];
        function it(e, t) {
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
        function lt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? it(Object(n), !0).forEach(function(t) {
                    st(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : it(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function st(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== rt(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== rt(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === rt(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function ct(e, t) {
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
        var ut = (0,
        a.$j)(function(e) {
            return {
                selectedSettings: (0,
                ue.Ci)(e),
                data: e.settings.mailSettings.autoForward,
                displayConfirm: (0,
                c.J)(e),
                currentAccount: (0,
                s.hL)(e)
            }
        }, function(e, t) {
            var n = t.onBack;
            return {
                onLoad: function() {
                    return e((0,
                    We.rP)())
                },
                onBack: function(t) {
                    e((0,
                    fe.tC)(t)),
                    n && n(t)
                },
                onSave: function(t) {
                    return e((0,
                    We.LV)(t))
                },
                onFormChange: function(t) {
                    return e((0,
                    d.appSetFormDirty)(t))
                },
                onConfirmYes: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)())
                },
                onConfirmNo: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)())
                },
                onConfirmCancel: function() {
                    e((0,
                    d.appSetPendingCancel)())
                }
            }
        }, function(e, t, n) {
            var r = e.selectedSettings
              , a = ct(e, at)
              , o = t.onBack
              , i = ct(t, ot);
            return lt(lt(lt(lt({}, n), a), i), {}, {
                onBack: function() {
                    o(r.split("#")[0])
                }
            })
        })(nt.Z)
          , ft = n(32081)
          , dt = n(76081)
          , pt = n(10091)
          , mt = n(13536)
          , ht = n(91066)
          , yt = n(80110)
          , bt = n(77545)
          , vt = n(44910);
        function gt(e) {
            "@babel/helpers - typeof";
            return (gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var St = ["data"]
          , Et = ["folderList", "mailFilter", "accountInfo"]
          , Ct = ["data", "folderList", "mailFilter", "accountInfo", "isFetching"];
        function Ot() {
            return (Ot = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function _t(e, t) {
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
        function wt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Dt(r.key), r)
            }
        }
        function Dt(e) {
            var t = function(e, t) {
                if ("object" !== gt(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== gt(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === gt(t) ? t : String(t)
        }
        function Tt(e, t) {
            return (Tt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Pt(e) {
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
                var n, r = Nt(e);
                if (t) {
                    var a = Nt(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === gt(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return At(e)
                }(this, n)
            }
        }
        function At(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Nt(e) {
            return (Nt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Rt = function(e) {
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
                t && Tt(e, t)
            }(n, B.PureComponent);
            var t = Pt(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).props.onLoad(),
                r.state = {
                    ruleSelected: void 0,
                    displayConfirm: !1,
                    displayWindow: !1,
                    displaySpinner: !0
                },
                r.isEditing = !1,
                r.setDisplayConfirm = r.setDisplayConfirm.bind(At(r)),
                r.setDisplayWindow = r.setDisplayWindow.bind(At(r)),
                r.handleAddBtnClick = r.handleAddBtnClick.bind(At(r)),
                r.handleEditBtnClick = r.handleEditBtnClick.bind(At(r)),
                r.handleUpBtnClick = r.handleUpBtnClick.bind(At(r)),
                r.handleDownBtnClick = r.handleDownBtnClick.bind(At(r)),
                r.handleDeleteBtnClick = r.handleDeleteBtnClick.bind(At(r)),
                r.handleConfirmYes = r.handleConfirmYes.bind(At(r)),
                r.handleSaveRule = r.handleSaveRule.bind(At(r)),
                r.displayToolbar = r.displayToolbar.bind(At(r)),
                r.displayConfirm = r.displayConfirm.bind(At(r)),
                r.displayAlert = r.displayAlert.bind(At(r)),
                r
            }
            return function(e, t, n) {
                t && wt(e.prototype, t),
                n && wt(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        displaySpinner: !0
                    })
                }
            }, {
                key: "componentWillReceiveProps",
                value: function() {
                    this.setState({
                        displaySpinner: !1
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
                key: "setDisplayWindow",
                value: function(e) {
                    this.setState({
                        displayWindow: e
                    })
                }
            }, {
                key: "handleAddBtnClick",
                value: function() {
                    this.isEditing = !1,
                    this.setDisplayWindow(!0)
                }
            }, {
                key: "handleEditBtnClick",
                value: function() {
                    this.isEditing = !0,
                    this.setDisplayWindow(!0)
                }
            }, {
                key: "handleUpBtnClick",
                value: function(e) {
                    (0,
                    this.props.onSave)(void 0, {
                        selected: e,
                        action: "up"
                    })
                }
            }, {
                key: "handleDownBtnClick",
                value: function(e) {
                    (0,
                    this.props.onSave)(void 0, {
                        selected: e,
                        action: "down"
                    })
                }
            }, {
                key: "handleDeleteBtnClick",
                value: function() {
                    this.setDisplayConfirm(!0)
                }
            }, {
                key: "handleConfirmYes",
                value: function() {
                    var e = this.props.onSave
                      , t = this.state.ruleSelected;
                    this.setDisplayConfirm(!1),
                    this.setState({
                        ruleSelected: void 0
                    }),
                    e(void 0, {
                        selected: t,
                        action: "delete"
                    })
                }
            }, {
                key: "handleSaveRule",
                value: function(e) {
                    (0,
                    this.props.onSave)(e, {
                        selected: this.state.ruleSelected,
                        action: this.isEditing ? "edit" : "add"
                    }),
                    this.setDisplayWindow(!1)
                }
            }, {
                key: "displayToolbar",
                value: function() {
                    var e = this.props;
                    e.data,
                    _t(e, St),
                    this.state.ruleSelected;
                    return B.createElement("div", {
                        className: "ow-settingsDetail-toolbar"
                    }, B.createElement(pt.Z.Button, {
                        className: "ow-settings-button ow-button-primary",
                        onClick: this.handleAddBtnClick,
                        role: p.HB.BUTTON,
                        "aria-label": (0,
                        H.WU)("".concat((0,
                        G.t)("common.ADD"), " ").concat((0,
                        G.t)("settings.MODULE_DESC.RULES"))),
                        onKeyDown: function(e) {
                            return e.key === p.BY.ENTERKEY && (0,
                            vt.Mb)()
                        }
                    }, B.createElement("span", null, (0,
                    G.t)("common.ADD")), B.createElement("span", {
                        className: "ow-icon-plus",
                        role: p.HB.BUTTON,
                        "aria-label": (0,
                        G.t)("common.ADD")
                    })))
                }
            }, {
                key: "displayConfirm",
                value: function() {
                    var e = this;
                    return B.createElement(mt.Z, {
                        show: !0,
                        title: (0,
                        G.t)("mail.action.DELETE"),
                        message: (0,
                        G.t)("settings.rules.RULE_CONFIRM_DELETE"),
                        onYes: this.handleConfirmYes,
                        onNo: function() {
                            return e.setDisplayConfirm(!1)
                        },
                        onDismiss: function() {
                            return e.setDisplayConfirm(!1)
                        }
                    })
                }
            }, {
                key: "displayAlert",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.folderList
                      , r = t.mailFilter
                      , a = t.accountInfo
                      , o = (_t(t, Et),
                    this.state.ruleSelected);
                    return B.createElement(ht.Z, {
                        show: !0,
                        isNew: !this.isEditing,
                        data: this.isEditing ? o : void 0,
                        mailFilter: r,
                        folderList: n,
                        accountInfo: a,
                        onSave: this.handleSaveRule,
                        onCancel: function() {
                            return e.setDisplayWindow(!1)
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , r = (t.folderList,
                    t.mailFilter,
                    t.accountInfo,
                    t.isFetching)
                      , a = _t(t, Ct)
                      , o = this.state
                      , i = o.ruleSelected
                      , l = o.displayConfirm
                      , s = o.displayWindow;
                    return B.createElement(U.Z, Ot({}, a, {
                        className: "ow-settingsMailRule",
                        title: (0,
                        G.t)("settings.rules.TITLE"),
                        desc: (0,
                        G.t)("settings.rules.DESC"),
                        enableSave: !1,
                        enableCancel: !1
                    }), this.displayToolbar(), this.state.displaySpinner && 0 === r && B.createElement(yt.Z, {
                        className: "ow-adv-spinner"
                    }), B.createElement(dt.Z, {
                        className: "ow-settingsDetail-list",
                        data: n,
                        defaultSelected: [i],
                        selectedStatus: function(t) {
                            return !(!i || t.id !== i.id) && (e.setState({
                                ruleSelected: t
                            }),
                            !0)
                        },
                        renderItem: function(t) {
                            return B.createElement("div", {
                                className: "ow-settingsDetail-list-item"
                            }, B.createElement("div", {
                                className: "ow-settingsDetail-listItem-label",
                                "aria-label": t.name
                            }, t.name), B.createElement("div", {
                                className: "ow-settingsDetail-list-item-control"
                            }, t.enabled ? B.createElement("div", {
                                className: "ow-settingsDetail-enabled-rule",
                                "aria-label": (0,
                                G.t)("settings.rules.rule_detail.ACTIVE")
                            }, (0,
                            G.t)("settings.rules.rule_detail.ACTIVE")) : B.createElement(ft.Z, {
                                name: "&"
                            }), B.createElement(bt.Z, {
                                className: "ow-settings-button ow-settingsButton-default",
                                iconName: "down-open",
                                disabled: !t || n.indexOf(t) === n.length - 1,
                                onClick: function() {
                                    e.handleDownBtnClick(t)
                                },
                                role: p.HB.BUTTON,
                                "aria-label": (0,
                                G.t)("aria.label.down"),
                                "aria-disabled": !t || (null === n || void 0 === n ? void 0 : n.indexOf(t)) === (null === n || void 0 === n ? void 0 : n.length) - 1
                            }), B.createElement(bt.Z, {
                                className: "ow-settings-button ow-settingsButton-default",
                                iconName: "up-open",
                                disabled: !t || 0 === n.indexOf(t),
                                onClick: function() {
                                    e.handleUpBtnClick(t)
                                },
                                role: p.HB.BUTTON,
                                "aria-label": (0,
                                G.t)("aria.label.up"),
                                "aria-disabled": !t || 0 === n.indexOf(t)
                            }), B.createElement(bt.Z, {
                                className: "ow-settings-button ow-settingsButton-default",
                                iconName: "edit-mail",
                                disabled: !t,
                                onClick: e.handleEditBtnClick,
                                role: p.HB.BUTTON,
                                "aria-label": (0,
                                G.t)("contacts.toolBar.toolTips.EDIT_CONTACT"),
                                "aria-disabled": !t,
                                onKeyDown: function(e) {
                                    return e.key === p.BY.ENTERKEY && (0,
                                    vt.Mb)()
                                }
                            }), B.createElement(bt.Z, {
                                className: "ow-settings-button ow-settingsButton-default",
                                iconName: "trash",
                                disabled: !t,
                                onClick: e.handleDeleteBtnClick,
                                role: p.HB.BUTTON,
                                "aria-label": (0,
                                G.t)("contacts.catalogView.DELETE"),
                                "aria-disabled": !t,
                                onKeyDown: function(e) {
                                    return e.key === p.BY.ENTERKEY && (0,
                                    vt.Mb)()
                                }
                            })))
                        },
                        onSelectedChange: function(t) {
                            e.setState({
                                ruleSelected: t[0]
                            })
                        }
                    }), l && this.displayConfirm(), s && this.displayAlert())
                }
            }]),
            n
        }();
        Rt.defaultProps = {
            data: [],
            folderList: [],
            mailFilter: {
                filterConditionInputs: "",
                filterActions: ""
            },
            accountInfo: {},
            onLoad: function() {},
            onSave: function() {}
        },
        Rt.propTypes = {
            data: F().array,
            folderList: F().array,
            mailFilter: F().shape({
                filterConditionInputs: F().string,
                filterActions: F().string
            }),
            accountInfo: F().shape({}),
            onLoad: F().func,
            onSave: F().func
        };
        var It = n(93610)
          , Mt = n(96744)
          , Lt = n(63205);
        function jt(e) {
            "@babel/helpers - typeof";
            return (jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Bt = ["selectedSettings"]
          , kt = ["onBack"];
        function Ft(e, t) {
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
        function Ut(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ft(Object(n), !0).forEach(function(t) {
                    xt(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ft(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function xt(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== jt(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== jt(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === jt(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Gt(e, t) {
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
        var Ht = (0,
        a.$j)(function(e) {
            return {
                selectedSettings: (0,
                ue.Ci)(e),
                data: (0,
                It.B)(e),
                mailFilter: (0,
                s.BI)(e),
                folderList: (0,
                Mt.ed)(e),
                accountInfo: (0,
                s.hL)(e),
                isFetching: (0,
                It.Y)(e)
            }
        }, function(e, t) {
            var n = t.onBack;
            return {
                onLoad: function() {
                    return e((0,
                    Lt.Yo)())
                },
                onSave: function() {
                    return e(Lt.lF.apply(void 0, arguments))
                },
                onBack: function(t) {
                    e((0,
                    fe.tC)(t)),
                    n && n(t)
                }
            }
        }, function(e, t, n) {
            var r = e.selectedSettings
              , a = Gt(e, Bt)
              , o = t.onBack
              , i = Gt(t, kt);
            return Ut(Ut(Ut(Ut({}, n), a), i), {}, {
                onBack: function() {
                    o(r.split("#")[0])
                }
            })
        })(Rt)
          , Kt = n(62383)
          , Zt = n(97186)
          , Yt = n.n(Zt)
          , Vt = n(93549)
          , Wt = n.n(Vt)
          , Jt = n(31989)
          , qt = n(96409)
          , zt = n(78828)
          , Qt = n(15196)
          , Xt = ["selectedSettings"]
          , $t = ["onBack"];
        function en(e) {
            "@babel/helpers - typeof";
            return (en = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function tn(e, t) {
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
        function nn(e, t) {
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
        function rn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? nn(Object(n), !0).forEach(function(t) {
                    an(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nn(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function an(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== en(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== en(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === en(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var on = (0,
        a.$j)(function(e) {
            return {
                selectedSettings: (0,
                ue.Ci)(e),
                data: rn(rn({}, (0,
                i.af)(e)), (0,
                Jt.L)(e)),
                list: (0,
                qt.o)(e),
                displayConfirm: (0,
                c.J)(e)
            }
        }, function(e, t) {
            var n = t.onBack;
            return {
                onSaveSettings: function(t) {
                    var n = {};
                    Object.keys(p.PG).forEach(function(e) {
                        var r = p.PG[e];
                        r in t && (n[r] = t[r])
                    });
                    var r = Wt()(t, Object.keys(n));
                    Yt()(n) || e((0,
                    zt.Mk)(n, {
                        needMsg: Yt()(r)
                    })),
                    Yt()(r) || e((0,
                    w.T)(r))
                },
                onBack: function(t) {
                    e((0,
                    fe.tC)(t)),
                    n && n(t)
                },
                onFormChange: function(t) {
                    return e((0,
                    d.appSetFormDirty)(t))
                },
                onConfirmYes: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)(!1))
                },
                onConfirmNo: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)(!1))
                },
                onConfirmCancel: function() {
                    e((0,
                    d.appSetPendingCancel)())
                },
                onLoad: function() {
                    return e((0,
                    Qt.kp)())
                },
                onSave: function() {
                    return e(Qt.mX.apply(void 0, arguments))
                },
                onDelete: function(t) {
                    return e((0,
                    Qt.K1)(t))
                }
            }
        }, function(e, t, n) {
            var r = e.selectedSettings
              , a = tn(e, Xt)
              , o = t.onBack
              , i = tn(t, $t);
            return rn(rn(rn(rn({}, n), a), i), {}, {
                onBack: function() {
                    o(r.split("#")[0])
                }
            })
        })(Kt.Z);
        function ln(e) {
            "@babel/helpers - typeof";
            return (ln = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var sn = ["data"]
          , cn = ["data", "onSave"];
        function un() {
            return (un = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function fn(e, t) {
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
        function dn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, pn(r.key), r)
            }
        }
        function pn(e) {
            var t = function(e, t) {
                if ("object" !== ln(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== ln(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === ln(t) ? t : String(t)
        }
        function mn(e, t) {
            return (mn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function hn(e) {
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
                var n, r = bn(e);
                if (t) {
                    var a = bn(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ln(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return yn(e)
                }(this, n)
            }
        }
        function yn(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function bn(e) {
            return (bn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var vn = K.UhU.isMobile
          , gn = {
            data: F().object,
            onSave: F().func
        }
          , Sn = function(e) {
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
                t && mn(e, t)
            }(n, B.PureComponent);
            var t = hn(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).renderCheckBox = r.renderCheckBox.bind(yn(r)),
                r
            }
            return function(e, t, n) {
                t && dn(e.prototype, t),
                n && dn(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "renderCheckBox",
                value: function() {
                    var e = this.props
                      , t = e.data
                      , n = (fn(e, sn),
                    p.sw.contactsEnableNickname)
                      , r = p.sw.contactsEnableAutoCompleteSearch
                      , a = p.sw.contactsAutoSuggestCL.key
                      , o = "true" === t[a] || !0 === t[a]
                      , i = "true" === t[n.key] || !0 === t[n.key]
                      , l = "true" === t[r.key] || !0 === t[r.key]
                      , s = "true" === t[p.sw.autoCreateContact.key] || !0 === t[p.sw.autoCreateContact.key]
                      , c = (0,
                    T.Z)("settings.autoCompleteSearchBySort.enabled");
                    return B.createElement("div", null, B.createElement(De(), null, B.createElement(_e(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, B.createElement(x.hE, {
                        label: (0,
                        G.t)("settings.mail.NEW_RECIPIENTS_DESC"),
                        name: p.sw.autoCreateContact.key,
                        value: s
                    }))), B.createElement(De(), null, B.createElement(_e(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, B.createElement(x.hE, {
                        label: (0,
                        G.t)("settings.contacts.autosuggest.LABEL"),
                        name: "enabledAutoSuggest",
                        value: o
                    }))), B.createElement(De(), null, B.createElement(_e(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, B.createElement(x.hE, {
                        label: (0,
                        G.t)("settings.contacts.NICKNAME.LABEL"),
                        name: "enabledNickname",
                        value: i
                    }))), c && B.createElement(De(), null, B.createElement(_e(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, B.createElement(x.hE, {
                        label: (0,
                        G.t)("settings.contacts.AutoComplete.LABEL"),
                        name: "enabledAutoCompleteSearch",
                        value: l
                    }))))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.data,
                    e.onSave)
                      , n = fn(e, cn);
                    return B.createElement(U.Z, un({}, n, {
                        className: "ow-settingsContacts",
                        title: (0,
                        G.t)("settings.contacts.TITLE"),
                        desc: (0,
                        G.t)("settings.contacts.DESC"),
                        onSave: t,
                        enableBack: vn
                    }), B.createElement(x.l0, null, this.renderCheckBox()))
                }
            }]),
            n
        }();
        Sn.propTypes = gn,
        Sn.defaultProps = {
            data: {},
            onSave: function() {}
        };
        var En = Sn
          , Cn = (0,
        a.$j)(function(e) {
            return {
                data: (0,
                i.af)(e),
                displayConfirm: (0,
                c.J)(e)
            }
        }, function(e, t) {
            return {
                onSave: function(t) {
                    var n = {};
                    void 0 !== t.enabledAutoSuggest && void 0 !== t.autoCreateContact ? n = {
                        "contacts.autoSuggestCL": t.enabledAutoSuggest,
                        autoCreateContact: t.autoCreateContact
                    } : void 0 !== t.enabledAutoSuggest ? n = {
                        "contacts.autoSuggestCL": t.enabledAutoSuggest
                    } : void 0 !== t.autoCreateContact ? n = {
                        autoCreateContact: t.autoCreateContact
                    } : void 0 !== t.enabledNickname ? n = {
                        enabledNickname: t.enabledNickname
                    } : void 0 !== t.enabledAutoCompleteSearch && (n = {
                        enabledAutoCompleteSearch: t.enabledAutoCompleteSearch
                    }),
                    e((0,
                    w.T)(n))
                },
                onFormChange: function(n) {
                    e((0,
                    d.appSetFormDirty)(n)),
                    t.onFormChange && t.onFormChange(n)
                },
                onConfirmYes: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)(!1))
                },
                onConfirmNo: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)(!1))
                },
                onConfirmCancel: function() {
                    e((0,
                    d.appSetPendingCancel)())
                }
            }
        })(En)
          , On = n(57440)
          , _n = (0,
        a.$j)(function(e) {
            return {
                enabled: (0,
                On.R5)(e)
            }
        }, function(e) {
            return {
                onRemove: function() {
                    return e((0,
                    fe.Qo)(!0))
                },
                onAdd: function() {
                    return e((0,
                    fe.Qo)(!1))
                }
            }
        });
        function wn(e) {
            "@babel/helpers - typeof";
            return (wn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Dn = ["enabled", "onRemove", "onAdd"]
          , Tn = ["enabled", "onRemove", "onAdd"];
        function Pn() {
            return (Pn = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function An(e, t) {
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
        function Nn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Rn(r.key), r)
            }
        }
        function Rn(e) {
            var t = function(e, t) {
                if ("object" !== wn(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== wn(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === wn(t) ? t : String(t)
        }
        function In(e, t) {
            return (In = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Mn(e) {
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
                var n, r = jn(e);
                if (t) {
                    var a = jn(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === wn(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Ln(e)
                }(this, n)
            }
        }
        function Ln(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function jn(e) {
            return (jn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Bn = K.UhU.isMobile
          , kn = {
            enabled: F().bool,
            onRemove: F().func,
            onAdd: F().func
        }
          , Fn = function(e) {
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
                t && In(e, t)
            }(n, B.PureComponent);
            var t = Mn(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).renderCloudPanel = r.renderCloudPanel.bind(Ln(r)),
                r
            }
            return function(e, t, n) {
                t && Nn(e.prototype, t),
                n && Nn(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "renderCloudPanel",
                value: function() {
                    var e = this.props
                      , t = e.enabled
                      , n = e.onRemove
                      , r = e.onAdd
                      , a = (An(e, Dn),
                    t ? n : r)
                      , o = t ? (0,
                    K.t)("settings.cloud.REMOVECLOUDBTN_TEXT") : (0,
                    K.t)("settings.cloud.ADDCLOUDBTN_TEXT");
                    return B.createElement("div", {
                        className: "ow-settings-cloudPanel"
                    }, B.createElement(bt.Z, {
                        onClick: a,
                        role: p.HB.BUTTON,
                        "aria-label": o
                    }, o))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.enabled,
                    e.onRemove,
                    e.onAdd,
                    An(e, Tn));
                    return B.createElement(U.Z, Pn({
                        className: "ow-settingsCloud"
                    }, t, {
                        enableSave: !1,
                        enableCancel: !1,
                        enableBack: Bn,
                        title: (0,
                        K.t)("settings.cloud.TITLE"),
                        desc: (0,
                        K.t)("settings.cloud.DESC")
                    }), this.renderCloudPanel())
                }
            }]),
            n
        }();
        Fn.propTypes = kn,
        Fn.defaultProps = {
            enabled: !1,
            onRemove: function() {},
            onAdd: function() {}
        };
        var Un = _n(Fn)
          , xn = n(96312);
        function Gn(e) {
            "@babel/helpers - typeof";
            return (Gn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Hn = ["selectedSettings"]
          , Kn = ["onBack"];
        function Zn(e, t) {
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
        function Yn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Zn(Object(n), !0).forEach(function(t) {
                    Vn(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zn(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function Vn(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Gn(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Gn(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Gn(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Wn(e, t) {
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
        var Jn = (0,
        a.$j)(function(e) {
            return {
                selectedSettings: (0,
                ue.Ci)(e),
                data: (0,
                xn.$x)(e),
                userControlSettings: (0,
                s.E9)(e),
                displayConfirm: (0,
                c.J)(e)
            }
        }, function(e, t) {
            var n = t.onBack
              , r = t.onFormChange;
            return {
                onBack: function(t) {
                    e((0,
                    fe.tC)(t)),
                    n && n(t)
                },
                onLoad: function(t) {
                    e((0,
                    fe.xF)(t)),
                    e((0,
                    fe.n8)())
                },
                onAdd: function(t) {
                    return e((0,
                    fe.Ft)(!0, t.toLowerCase()))
                },
                onDelete: function(t) {
                    return e((0,
                    fe.Ft)(!1, t))
                },
                onSave: function(t) {
                    return e((0,
                    fe.xb)(t))
                },
                onFormChange: function(t) {
                    e((0,
                    d.appSetFormDirty)(t)),
                    r && r(t)
                },
                onConfirmYes: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)())
                },
                onConfirmNo: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)())
                },
                onConfirmCancel: function() {
                    e((0,
                    d.appSetPendingCancel)())
                }
            }
        }, function(e, t, n) {
            var r = e.selectedSettings
              , a = Wn(e, Hn)
              , o = t.onBack
              , i = Wn(t, Kn);
            return Yn(Yn(Yn(Yn({}, n), a), i), {}, {
                onBack: function() {
                    o(r.split("#")[0])
                }
            })
        })
          , qn = n(60274)
          , zn = n(68725);
        function Qn(e) {
            "@babel/helpers - typeof";
            return (Qn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Xn = ["data"]
          , $n = ["data", "onAdd", "onDelete", "onSave"]
          , er = ["data", "onAdd", "onDelete"]
          , tr = ["onAdd", "onDelete", "onSave"];
        function nr() {
            return (nr = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function rr(e, t) {
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
        function ar(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, or(r.key), r)
            }
        }
        function or(e) {
            var t = function(e, t) {
                if ("object" !== Qn(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Qn(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Qn(t) ? t : String(t)
        }
        function ir(e, t) {
            return (ir = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function lr(e) {
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
                var n, r = cr(e);
                if (t) {
                    var a = cr(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Qn(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return sr(e)
                }(this, n)
            }
        }
        function sr(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function cr(e) {
            return (cr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ur = {
            data: F().shape({
                onlyAllow: F().bool,
                list: F().arrayOf(F().string)
            }),
            userControlSettings: F().shape({
                supportedControls: F().string
            }),
            onAdd: F().func,
            onDelete: F().func,
            onLoad: F().func,
            onSave: F().func
        }
          , fr = (0,
        T.Z)("settings.showDeleteIconPerItem")
          , dr = function(e) {
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
                t && ir(e, t)
            }(n, B.Component);
            var t = lr(n);
            function n(e) {
                var r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                r = t.call(this, e);
                var a = e.userControlSettings.supportedControls
                  , o = (0,
                T.Z)("mail").whitelisting
                  , i = void 0 !== o && o
                  , l = a && a.split(",").includes("contacts")
                  , s = i && l;
                return r.state = {
                    selected: [],
                    enableWhiteList: s,
                    displayConfirmation: !1
                },
                r.onSelectedChange = r.onSelectedChange.bind(sr(r)),
                r.handleDelete = r.handleDelete.bind(sr(r)),
                r.refresh = r.refresh.bind(sr(r)),
                r.renderWhiteList = r.renderWhiteList.bind(sr(r)),
                r.renderWhiteListDetails = r.renderWhiteListDetails.bind(sr(r)),
                r.renderSafeSenderToolbar = r.renderSafeSenderToolbar.bind(sr(r)),
                r.handleDeleteBtnClick = r.handleDeleteBtnClick.bind(sr(r)),
                r.setDisplayConfirm = r.setDisplayConfirm.bind(sr(r)),
                r.displayConfirm = r.displayConfirm.bind(sr(r)),
                r
            }
            return function(e, t, n) {
                t && ar(e.prototype, t),
                n && ar(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    this.props.onLoad(this.state.enableWhiteList)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this.props.data.list
                      , n = void 0 === t ? [] : t
                      , r = e.data.list
                      , a = void 0 === r ? [] : r;
                    n.length !== a.length && this.setState({
                        selected: []
                    })
                }
            }, {
                key: "onSelectedChange",
                value: function(e) {
                    this.setState({
                        selected: e
                    })
                }
            }, {
                key: "setDisplayConfirm",
                value: function(e) {
                    this.setState({
                        displayConfirmation: e
                    })
                }
            }, {
                key: "handleDeleteBtnClick",
                value: function() {
                    this.setDisplayConfirm(!0)
                }
            }, {
                key: "handleDelete",
                value: function() {
                    (0,
                    this.props.onDelete)(this.state.selected),
                    this.setDisplayConfirm(!1)
                }
            }, {
                key: "refresh",
                value: function() {
                    (0,
                    this.props.onLoad)(),
                    this.setState({
                        selected: []
                    })
                }
            }, {
                key: "displayConfirm",
                value: function() {
                    var e = this;
                    return B.createElement(mt.Z, {
                        show: !0,
                        title: (0,
                        G.t)("settings.whiteList.SAFE_SENDER_CONFIRM_DELETE_TITLE"),
                        message: (0,
                        G.t)("settings.whiteList.SAFE_SENDER_CONFIRM_DELETE"),
                        onYes: this.handleDelete,
                        onNo: function() {
                            return e.setDisplayConfirm(!1)
                        },
                        onDismiss: function() {
                            return e.setDisplayConfirm(!1)
                        }
                    })
                }
            }, {
                key: "renderWhiteList",
                value: function() {
                    var e = this.props
                      , t = e.data.onlyAllow
                      , n = (rr(e, Xn),
                    this.state.enableWhiteList);
                    return B.createElement(x.l0, {
                        style: {
                            display: n ? "block" : "none"
                        }
                    }, B.createElement(x.bM, {
                        label: "Only allow mail from know senders",
                        name: "onlyAllow",
                        value: t
                    }))
                }
            }, {
                key: "renderSafeSenderToolbar",
                value: function() {
                    var e = this.props
                      , t = (e.data.list,
                    e.onAdd,
                    e.onDelete,
                    e.onSave,
                    rr(e, $n),
                    this.state.selected.length > 0);
                    return B.createElement("div", {
                        className: "ow-setting-safe-sender-list-toolbar"
                    }, fr ? null : B.createElement(pt.Z.Button, {
                        disabled: !t,
                        onClick: this.handleDelete,
                        iconName: "trash",
                        "aria-label": (0,
                        G.t)("common.DELETE"),
                        role: p.HB.BUTTON,
                        "aria-disabled": !t
                    }, (0,
                    G.t)("common.DELETE")), B.createElement(pt.Z.Button, {
                        onClick: this.refresh,
                        iconName: "refresh",
                        "aria-label": (0,
                        G.t)("common.SYNC"),
                        role: p.HB.BUTTON
                    }, (0,
                    G.t)("common.SYNC")))
                }
            }, {
                key: "renderWhiteListDetails",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data.list
                      , r = t.onAdd
                      , a = (t.onDelete,
                    rr(t, er),
                    this.state.selected);
                    return B.createElement("div", null, B.createElement(x.l0, {
                        className: "ow-settingsDetail-form ow-settings-whiteList-form ow-whiteList-additional-style"
                    }, B.createElement("div", {
                        className: "ow-settingsToolbar"
                    }, B.createElement(x.N$, {
                        label: (0,
                        G.t)("settings.mail.TITLE"),
                        name: "email",
                        btnText: (0,
                        G.t)("common.ADD"),
                        onBtnClick: r,
                        validations: {
                            emailValidation: function(e, t) {
                                return t && (zn.Z.is("email", t) || zn.Z.is("emailDomain", t))
                            }
                        },
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            G.t)("common.errorMessage.REQUIRED"),
                            emailValidation: (0,
                            G.t)("settings.whiteList.MATH_ERROR")
                        },
                        onPressEnter: r,
                        required: !0,
                        "aria-required": !0
                    }), this.renderSafeSenderToolbar()), B.createElement(qn.Z, {
                        "aria-label": (0,
                        G.t)("settings.whiteList.SUB_DESC")
                    }, (0,
                    G.t)("settings.whiteList.SUB_DESC")), B.createElement(dt.Z, {
                        className: "ow-settingsDetail-list",
                        data: n,
                        enableCheckable: !fr,
                        renderItem: function(t) {
                            return B.createElement("div", {
                                className: "ow-settingsDetail-list-item"
                            }, B.createElement("div", {
                                className: "ow-settingsDetail-list-item-label",
                                "aria-label": t
                            }, t), fr ? B.createElement(ft.Z, {
                                name: "trash",
                                onClick: e.handleDeleteBtnClick,
                                "aria-label": (0,
                                G.t)("common.DELETE"),
                                role: p.HB.BUTTON,
                                tabIndex: 0,
                                onKeyDown: function(t) {
                                    t.key === p.BY.ENTERKEY && e.handleDeleteBtnClick(),
                                    (0,
                                    vt.Mb)()
                                }
                            }) : null)
                        },
                        onSelectedChange: this.onSelectedChange,
                        ref: function(t) {
                            e.mailList = t
                        },
                        defaultSelected: a
                    })))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.onAdd,
                    e.onDelete,
                    e.onSave)
                      , n = rr(e, tr)
                      , r = this.state
                      , a = r.enableWhiteList
                      , o = r.displayConfirmation;
                    return B.createElement(U.Z, nr({}, n, {
                        className: "ow-settings-safe-sender-detail",
                        title: (0,
                        G.t)("settings.whiteList.TITLE"),
                        desc: (0,
                        G.t)("settings.whiteList.DESC"),
                        onSave: function(e) {
                            var n = e.onlyAllow ? ["contacts"] : [];
                            t(n)
                        },
                        enableSave: a,
                        enableCancel: a
                    }), this.renderWhiteList(), this.renderWhiteListDetails(), o && this.displayConfirm())
                }
            }]),
            n
        }();
        dr.propTypes = ur,
        dr.defaultProps = {
            data: {
                onlyAllow: !1,
                list: []
            },
            userControlSettings: {
                supportedControls: ""
            },
            onAdd: function() {},
            onDelete: function() {},
            onLoad: function() {},
            onSave: function() {}
        };
        var pr = Jn(dr);
        function mr(e) {
            "@babel/helpers - typeof";
            return (mr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var hr = ["selectedSettings"]
          , yr = ["onBack"];
        function br(e, t) {
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
        function vr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? br(Object(n), !0).forEach(function(t) {
                    gr(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : br(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function gr(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== mr(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== mr(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === mr(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Sr(e, t) {
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
        var Er = (0,
        a.$j)(function(e) {
            return {
                selectedSettings: (0,
                ue.Ci)(e),
                hasSelected: (0,
                xn.yK)(e).length > 0,
                senders: (0,
                xn.t4)(e),
                selected: (0,
                xn.yK)(e)
            }
        }, function(e, t) {
            var n = t.onBack;
            return {
                onBack: function(t) {
                    e((0,
                    fe.tC)(t)),
                    n && n(t)
                },
                onAdd: function(t) {
                    return e((0,
                    fe.pH)(!0, t.toLowerCase()))
                },
                onDelete: function(t) {
                    return e((0,
                    fe.pH)(!1, t))
                },
                onLoad: function() {
                    e((0,
                    fe.n8)()),
                    e((0,
                    fe.xF)())
                },
                onSelectedChange: function(t) {
                    return e((0,
                    fe.RG)({
                        selected: t
                    }))
                },
                onItemClick: function(t) {
                    return e((0,
                    fe.RG)({
                        address: t,
                        reset: !0,
                        selected: !0
                    }))
                }
            }
        }, function(e, t, n) {
            var r = e.selectedSettings
              , a = Sr(e, hr)
              , o = t.onBack
              , i = Sr(t, yr);
            return vr(vr(vr(vr({}, n), a), i), {}, {
                onBack: function() {
                    o(r.split("#")[0])
                }
            })
        });
        function Cr(e) {
            "@babel/helpers - typeof";
            return (Cr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Or = ["onAdd"]
          , _r = ["senders", "selected", "onSelectedChange", "onDelete"]
          , wr = ["senders", "selected", "hasSelected", "onAdd", "onDelete", "onLoad", "onSelectedChange"];
        function Dr() {
            return (Dr = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Tr(e, t) {
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
        function Pr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Ar(r.key), r)
            }
        }
        function Ar(e) {
            var t = function(e, t) {
                if ("object" !== Cr(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Cr(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Cr(t) ? t : String(t)
        }
        function Nr(e, t) {
            return (Nr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Rr(e) {
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
                var n, r = Mr(e);
                if (t) {
                    var a = Mr(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Cr(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Ir(e)
                }(this, n)
            }
        }
        function Ir(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Mr(e) {
            return (Mr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Lr = {
            senders: F().array,
            selected: F().object,
            hasSelected: F().bool,
            onAdd: F().func,
            onDelete: F().func,
            onLoad: F().func,
            onSelectedChange: F().func
        }
          , jr = (0,
        T.Z)("settings.showDeleteIconPerItem")
          , Br = function(e) {
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
                t && Nr(e, t)
            }(n, B.PureComponent);
            var t = Rr(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    displayConfirmation: !1
                },
                r.renderSettingDetailsToolBar = r.renderSettingDetailsToolBar.bind(Ir(r)),
                r.renderInputButton = r.renderInputButton.bind(Ir(r)),
                r.renderHelpBlock = r.renderHelpBlock.bind(Ir(r)),
                r.renderListItems = r.renderListItems.bind(Ir(r)),
                r.handleDelete = r.handleDelete.bind(Ir(r)),
                r.handleDeleteBtnClick = r.handleDeleteBtnClick.bind(Ir(r)),
                r.setDisplayConfirm = r.setDisplayConfirm.bind(Ir(r)),
                r.displayConfirm = r.displayConfirm.bind(Ir(r)),
                r
            }
            return function(e, t, n) {
                t && Pr(e.prototype, t),
                n && Pr(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    this.props.onLoad()
                }
            }, {
                key: "setDisplayConfirm",
                value: function(e) {
                    this.setState({
                        displayConfirmation: e
                    })
                }
            }, {
                key: "handleDeleteBtnClick",
                value: function() {
                    this.setDisplayConfirm(!0)
                }
            }, {
                key: "handleDelete",
                value: function() {
                    (0,
                    this.props.onDelete)(),
                    this.setDisplayConfirm(!1)
                }
            }, {
                key: "displayConfirm",
                value: function() {
                    var e = this;
                    return B.createElement(mt.Z, {
                        show: !0,
                        title: (0,
                        G.t)("settings.blockedSenders.BLOCKED_SENDER_CONFIRM_DELETE_TITLE"),
                        message: (0,
                        G.t)("settings.blockedSenders.BLOCKED_SENDER_CONFIRM_DELETE"),
                        onYes: this.handleDelete,
                        onNo: function() {
                            return e.setDisplayConfirm(!1)
                        },
                        onDismiss: function() {
                            return e.setDisplayConfirm(!1)
                        }
                    })
                }
            }, {
                key: "renderInputButton",
                value: function() {
                    var e = this.props
                      , t = e.onAdd;
                    Tr(e, Or);
                    return B.createElement(x.N$, {
                        label: (0,
                        G.t)("settings.mail.TITLE"),
                        name: "email",
                        btnText: (0,
                        G.t)("common.ADD"),
                        onBtnClick: t,
                        validations: {
                            emailValidation: function(e, t) {
                                return t && (zn.Z.is("email", t) || zn.Z.is("emailDomain", t))
                            }
                        },
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            G.t)("common.errorMessage.REQUIRED"),
                            emailValidation: (0,
                            G.t)("settings.whiteList.MATH_ERROR")
                        },
                        onPressEnter: t,
                        required: !0,
                        "aria-required": !0
                    })
                }
            }, {
                key: "renderHelpBlock",
                value: function() {
                    return B.createElement(qn.Z, {
                        "aria-label": (0,
                        G.t)("settings.blockedSenders.SUB_DESC")
                    }, (0,
                    G.t)("settings.blockedSenders.SUB_DESC"))
                }
            }, {
                key: "renderListItems",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.senders
                      , r = t.selected
                      , a = t.onSelectedChange;
                    t.onDelete,
                    Tr(t, _r);
                    return B.createElement(dt.Z, {
                        className: "ow-settingsDetail-list",
                        data: n,
                        enableCheckable: !jr,
                        renderItem: function(t) {
                            return B.createElement("div", {
                                className: "ow-settingsDetail-list-item"
                            }, B.createElement("div", {
                                className: "ow-settingsDetail-list-item-label",
                                "aria-label": t
                            }, t), jr ? B.createElement(ft.Z, {
                                name: "trash",
                                tabIndex: 0,
                                alt: (0,
                                G.t)("common.DELETE"),
                                role: p.HB.BUTTON,
                                "aria-label": "".concat(t, " ").concat((0,
                                G.t)("common.DELETE")),
                                onClick: e.handleDeleteBtnClick,
                                onKeyDown: function(t) {
                                    t.key === p.BY.ENTERKEY && e.handleDeleteBtnClick(),
                                    (0,
                                    vt.Mb)()
                                }
                            }) : null)
                        },
                        onSelectedChange: function(e) {
                            a(e)
                        },
                        ref: function(t) {
                            e.mailList = t
                        },
                        defaultSelected: r
                    })
                }
            }, {
                key: "renderSettingDetailsToolBar",
                value: function() {
                    var e = this.props
                      , t = e.hasSelected
                      , n = e.onDelete
                      , r = e.onLoad;
                    return B.createElement("div", {
                        className: "ow-settingsDetail-toolbar"
                    }, jr ? null : B.createElement(pt.Z.Button, {
                        disabled: !t,
                        onClick: function() {
                            n()
                        },
                        iconName: "trash",
                        role: p.HB.BUTTON,
                        "aria-label": (0,
                        H.WU)("".concat((0,
                        G.t)("common.DELETE"), " ").concat((0,
                        G.t)("settings.MODULE_DESC.BLOCKED_SENDERS"))),
                        "aria-disabled": !t
                    }, (0,
                    G.t)("common.DELETE")), B.createElement(pt.Z.Button, {
                        iconName: "refresh",
                        onClick: function() {
                            r()
                        },
                        role: "button",
                        "aria-label": (0,
                        G.t)("common.SYNC")
                    }, (0,
                    G.t)("common.SYNC")))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.senders,
                    e.selected,
                    e.hasSelected,
                    e.onAdd,
                    e.onDelete,
                    e.onLoad,
                    e.onSelectedChange,
                    Tr(e, wr))
                      , n = this.state.displayConfirmation;
                    return B.createElement(U.Z, Dr({}, t, {
                        enableSave: !1,
                        enableCancel: !1,
                        title: (0,
                        G.t)("settings.blockedSenders.TITLE"),
                        desc: (0,
                        G.t)("settings.blockedSenders.DESC")
                    }), B.createElement("div", null, B.createElement(x.l0, {
                        className: "ow-settingsBlockSender-form"
                    }, B.createElement("div", {
                        className: "ow-settingsToolbar"
                    }, this.renderInputButton(), this.renderSettingDetailsToolBar()), this.renderHelpBlock(), this.renderListItems(), n && this.displayConfirm())))
                }
            }]),
            n
        }();
        Br.propTypes = Lr,
        Br.defaultProps = {
            senders: [],
            selected: {},
            hasSelected: !1,
            onAdd: function() {},
            onDelete: function() {},
            onLoad: function() {},
            onSelectedChange: function() {}
        };
        var kr = Er(Br)
          , Fr = n(12027);
        function Ur(e) {
            "@babel/helpers - typeof";
            return (Ur = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var xr = ["selectedSettings"]
          , Gr = ["onBack"];
        function Hr(e, t) {
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
        function Kr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Hr(Object(n), !0).forEach(function(t) {
                    Zr(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hr(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function Zr(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Ur(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Ur(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Ur(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Yr(e, t) {
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
        var Vr = (0,
        a.$j)(function(e) {
            return {
                selectedSettings: (0,
                ue.Ci)(e),
                data: (0,
                Jt.L)(e).imageBlockerOption,
                displayConfirm: (0,
                c.J)(e)
            }
        }, function(e, t) {
            var n = t.onBack;
            return {
                onBack: function(t) {
                    e((0,
                    fe.tC)(t)),
                    n && n(t)
                },
                onSave: function(t) {
                    return e((0,
                    zt.Mk)(t, {
                        needMsg: !0
                    }))
                },
                onChange: function(t) {
                    return e((0,
                    fe.NU)({
                        selected: t
                    }))
                },
                onFormChange: function(t) {
                    return e((0,
                    d.appSetFormDirty)(t))
                },
                onConfirmYes: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)())
                },
                onConfirmNo: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)())
                },
                onConfirmCancel: function() {
                    e((0,
                    d.appSetPendingCancel)())
                }
            }
        }, function(e, t, n) {
            var r = e.selectedSettings
              , a = Yr(e, xr)
              , o = t.onBack
              , i = Yr(t, Gr);
            return Kr(Kr(Kr(Kr({}, n), a), i), {}, {
                onBack: function() {
                    o(r.split("#")[0])
                }
            })
        })(Fr.Z)
          , Wr = n(45889)
          , Jr = n(12588)
          , qr = n(47369);
        function zr(e) {
            "@babel/helpers - typeof";
            return (zr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Qr = ["selectedSettings"]
          , Xr = ["onBack"];
        function $r(e, t) {
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
        function ea(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? $r(Object(n), !0).forEach(function(t) {
                    ta(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function ta(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== zr(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== zr(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === zr(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function na(e, t) {
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
        var ra = (0,
        a.$j)(function(e) {
            return {
                selectedSettings: (0,
                ue.Ci)(e),
                list: (0,
                Jr.Ow)(e),
                selected: (0,
                xn.dW)(e),
                currentAccount: (0,
                s.hL)(e),
                hasSelected: (0,
                xn.V1)(e),
                showModal: (0,
                xn.Yk)(e),
                modalType: (0,
                xn.OD)(e),
                showConfirm: (0,
                xn._i)(e),
                showAlert: (0,
                xn.fl)(e),
                messageTitle: (0,
                xn.wA)(e),
                message: (0,
                xn.yf)(e),
                isLoading: (0,
                xn.BY)(e),
                errorType: (0,
                xn.oG)(e),
                errorMessage: (0,
                xn.Sy)(e),
                advancedSetting: (0,
                xn.iy)(e),
                externalAccountDetail: (0,
                s.WS)(e),
                supportedOAuth2Servlets: (0,
                s.CR)(e)
            }
        }, function(e, t) {
            var n = t.onBack;
            return {
                onBack: function(t) {
                    e((0,
                    fe.tC)(t)),
                    n && n(t)
                },
                onShowModal: function(t, n) {
                    return e((0,
                    fe.iB)(t, n))
                },
                onSelectedChange: function(t) {
                    return e((0,
                    fe.us)(t))
                },
                onAdd: function(t, n) {
                    return e((0,
                    Wr.IO)({
                        object: t
                    }, n))
                },
                onDelete: function() {
                    return e((0,
                    Wr.vi)({}))
                },
                onUpdate: function(t, n, r) {
                    return e((0,
                    Wr.$e)({
                        object: t
                    }, n, r))
                },
                onCancel: function() {
                    return e((0,
                    fe.iB)(!1))
                },
                onDeleteYes: function() {
                    return e((0,
                    fe.F)("OK"))
                },
                onDeleteNo: function() {
                    return e((0,
                    fe.F)("NO"))
                },
                onAlertHide: function() {
                    return e((0,
                    fe.K7)(qr.bd, !1))
                }
            }
        }, function(e, t, n) {
            var r = e.selectedSettings
              , a = na(e, Qr)
              , o = t.onBack
              , i = na(t, Xr);
            return ea(ea(ea(ea({}, n), a), i), {}, {
                onBack: function() {
                    o(r.split("#")[0])
                }
            })
        })
          , aa = n(37200);
        function oa(e) {
            "@babel/helpers - typeof";
            return (oa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var ia = ["list", "hasSelected", "selected", "onShowModal", "showModal", "modalType", "isLoading", "errorType", "onSelectedChange", "onAdd", "onUpdate", "onDelete", "onCancel"]
          , la = ["list", "selected", "onSelectedChange", "onDelete", "onShowModal", "currentAccount"]
          , sa = ["selected", "showModal", "modalType", "isLoading", "errorType", "errorMessage", "onAdd", "onUpdate", "onCancel", "advancedSetting", "externalAccountDetail"]
          , ca = ["list", "hasSelected", "selected", "onShowModal", "showModal", "modalType", "isLoading", "errorType", "onSelectedChange", "onAdd", "onUpdate", "onDelete", "onCancel"];
        function ua() {
            return (ua = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function fa(e, t) {
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
        function da(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, pa(r.key), r)
            }
        }
        function pa(e) {
            var t = function(e, t) {
                if ("object" !== oa(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== oa(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === oa(t) ? t : String(t)
        }
        function ma(e, t) {
            return (ma = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function ha(e) {
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
                var n, r = ba(e);
                if (t) {
                    var a = ba(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === oa(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return ya(e)
                }(this, n)
            }
        }
        function ya(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ba(e) {
            return (ba = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var va = (0,
        T.Z)("settings.showDeleteIconPerItem")
          , ga = {
            list: F().array,
            hasSelected: F().bool,
            selected: F().object,
            onShowModal: F().func,
            showModal: F().bool,
            modalType: F().oneOf(["new", "edit"]),
            isLoading: F().bool,
            errorType: F().string,
            errorMessage: F().string,
            onSelectedChange: F().func,
            onAdd: F().func,
            onUpdate: F().func,
            onDelete: F().func,
            onCancel: F().func
        }
          , Sa = function(e) {
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
                t && ma(e, t)
            }(n, B.PureComponent);
            var t = ha(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    enableEditDelete: !0
                },
                r.renderToolBarDetails = r.renderToolBarDetails.bind(ya(r)),
                r.renderSimpleList = r.renderSimpleList.bind(ya(r)),
                r.renderAccountModal = r.renderAccountModal.bind(ya(r)),
                r.handleEditDeleteButton = r.handleEditDeleteButton.bind(ya(r)),
                r
            }
            return function(e, t, n) {
                t && da(e.prototype, t),
                n && da(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "renderToolBarDetails",
                value: function() {
                    var e = this.props
                      , t = (e.list,
                    e.hasSelected)
                      , n = (e.selected,
                    e.onShowModal)
                      , r = (e.showModal,
                    e.modalType,
                    e.isLoading,
                    e.errorType,
                    e.onSelectedChange,
                    e.onAdd,
                    e.onUpdate,
                    e.onDelete);
                    e.onCancel,
                    fa(e, ia);
                    return this.handleEditDeleteButton(),
                    B.createElement("div", {
                        className: "ow-settingsDetail-toolbar"
                    }, B.createElement(pt.Z.Button, {
                        className: "ow-settings-button ow-button-primary",
                        onClick: function() {
                            return n(!0, "new")
                        },
                        role: p.HB.BUTTON,
                        "aria-label": (0,
                        K.t)("settings.mail.ACCOUNT_ADD_WINDOW_TITLE"),
                        onKeyDown: function(e) {
                            return e.key === p.BY.ENTERKEY && (0,
                            vt.Mb)()
                        }
                    }, B.createElement("span", null, (0,
                    K.t)("common.ADD")), B.createElement("span", {
                        className: "ow-icon-plus",
                        role: p.HB.BUTTON,
                        "aria-label": (0,
                        K.t)("settings.mail.ACCOUNT_ADD_WINDOW_TITLE")
                    })), va ? null : B.createElement(pt.Z.Button, {
                        disabled: !t || !this.state.enableEditDelete,
                        iconName: "edit",
                        onClick: function() {
                            return n(!0, "edit")
                        },
                        role: p.HB.BUTTON,
                        "aria-label": (0,
                        K.t)("settings.mail.ACCOUNT_EDIT_WINDOW_TITLE")
                    }, (0,
                    K.t)("common.EDIT")), va ? null : B.createElement(pt.Z.Button, {
                        disabled: !t || !this.state.enableEditDelete,
                        iconName: "trash",
                        onClick: r,
                        role: p.HB.BUTTON,
                        "aria-disabled": !t || !this.state.enableEditDelete,
                        "aria-label": (0,
                        K.t)("settings.mail.ACCOUNT_CONFIRM_DELETE_TITLE")
                    }, (0,
                    K.t)("common.DELETE")))
                }
            }, {
                key: "renderSimpleList",
                value: function() {
                    var e = this.props
                      , t = e.list
                      , n = e.selected
                      , r = e.onSelectedChange
                      , a = e.onDelete
                      , o = e.onShowModal
                      , i = e.currentAccount;
                    fa(e, la);
                    return B.createElement(dt.Z, {
                        className: "ow-settingsDetail-list",
                        data: t,
                        enableCheckable: !va,
                        renderItem: function(e) {
                            return B.createElement("div", {
                                className: "ow-settingsDetail-list-item"
                            }, B.createElement("div", {
                                className: "ow-settingsDetail-listItem-label"
                            }, e.displayName || e.accountName), B.createElement("div", {
                                className: "ow-settingsDetail-list-item-control"
                            }, va ? B.createElement("div", {
                                className: "ow-settingsDetail-list-item-icons"
                            }, i.email === e.email ? null : B.createElement("div", null, B.createElement(bt.Z, {
                                iconName: "edit-mail",
                                onClick: function() {
                                    o(!0, "edit")
                                },
                                role: p.HB.BUTTON,
                                "aria-label": (0,
                                K.t)("common.EDIT")
                            }), B.createElement(bt.Z, {
                                iconName: "trash",
                                onClick: function() {
                                    a()
                                },
                                role: p.HB.BUTTON,
                                "aria-label": (0,
                                K.t)("common.DELETE")
                            }))) : null))
                        },
                        defaultSelected: [n],
                        onSelectedChange: r
                    })
                }
            }, {
                key: "handleEditDeleteButton",
                value: function() {
                    var e = this.props
                      , t = e.list
                      , n = e.currentAccount;
                    1 == t.length && t[0].id === n.id ? this.setState({
                        enableEditDelete: !1
                    }) : this.setState({
                        enableEditDelete: !0
                    })
                }
            }, {
                key: "renderAccountModal",
                value: function() {
                    var e = this.props
                      , t = e.selected
                      , n = e.showModal
                      , r = e.modalType
                      , a = e.isLoading
                      , o = e.errorType
                      , i = e.errorMessage
                      , l = e.onAdd
                      , s = e.onUpdate
                      , c = e.onCancel
                      , u = e.advancedSetting
                      , f = e.externalAccountDetail
                      , d = (fa(e, sa),
                    r);
                    if (n || (d = ""),
                    n || "new" !== r)
                        return B.createElement(aa.Z, {
                            show: n,
                            advancedSetting: u,
                            type: r,
                            data: "new" === d ? {} : t,
                            onAdd: l,
                            onUpdate: s,
                            onCancel: c,
                            errorType: o,
                            errorMessage: i,
                            isLoading: a,
                            externalAccountDetail: f
                        })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.list,
                    e.hasSelected,
                    e.selected,
                    e.onShowModal,
                    e.showModal,
                    e.modalType,
                    e.isLoading,
                    e.errorType,
                    e.onSelectedChange,
                    e.onAdd,
                    e.onUpdate,
                    e.onDelete,
                    e.onCancel,
                    fa(e, ca));
                    return B.createElement(U.Z, ua({}, t, {
                        className: "ow-settingsMailAccounts",
                        title: (0,
                        K.t)("settings.accounts.TITLE"),
                        desc: (0,
                        K.t)("settings.accounts.DESC"),
                        enableSave: !1,
                        enableCancel: !1
                    }), this.renderToolBarDetails(), this.renderSimpleList(), this.renderAccountModal())
                }
            }]),
            n
        }();
        Sa.propTypes = ga,
        Sa.defaultProps = {
            list: [],
            hasSelected: !1,
            selected: {},
            onShowModal: function() {},
            showModal: !1,
            modalType: "new",
            isLoading: !1,
            errorType: "",
            errorMessage: "",
            onSelectedChange: function() {},
            onAdd: function() {},
            onUpdate: function() {},
            onDelete: function() {},
            onCancel: function() {}
        };
        var Ea = ra(Sa)
          , Ca = n(93176)
          , Oa = n(55529)
          , _a = n(74233)
          , wa = (0,
        a.$j)(function(e) {
            return {
                data: (0,
                Oa.fx)(e),
                isHour24: (0,
                i.jm)(e),
                displayConfirm: (0,
                c.J)(e)
            }
        }, function(e, t) {
            return {
                onLoadCalendarPreference: function() {
                    return e((0,
                    _a.QT)())
                },
                onSave: function(t) {
                    e((0,
                    _a.jI)(t))
                },
                onFormChange: function(n) {
                    e((0,
                    d.appSetFormDirty)(n)),
                    t.onFormChange && t.onFormChange(n)
                },
                onConfirmYes: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)(!1))
                },
                onConfirmNo: function() {
                    e((0,
                    d.appSetFormDirty)(!1)),
                    e((0,
                    d.appSetPendingOver)(!1))
                },
                onConfirmCancel: function() {
                    e((0,
                    d.appSetPendingCancel)())
                }
            }
        })(Ca.Z)
          , Da = n(19745)
          , Ta = n.n(Da)
          , Pa = n(76707)
          , Aa = n.n(Pa)
          , Na = n(15292)
          , Ra = n.n(Na)
          , Ia = n(92520)
          , Ma = n(5613);
        function La(e) {
            "@babel/helpers - typeof";
            return (La = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ja(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Ba(r.key), r)
            }
        }
        function Ba(e) {
            var t = function(e, t) {
                if ("object" !== La(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== La(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === La(t) ? t : String(t)
        }
        function ka(e, t) {
            return (ka = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Fa(e) {
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
                var n, r = xa(e);
                if (t) {
                    var a = xa(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === La(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Ua(e)
                }(this, n)
            }
        }
        function Ua(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function xa(e) {
            return (xa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Ga = (0,
        Ia.Z)(pt.Z.Dropdown)
          , Ha = {
            timeUtil: {
                getDateTimePatterns: function() {}
            },
            folderData: F().arrayOf(F().object),
            closeSearchBox: F().func,
            advanceSearch: F().func
        }
          , Ka = {
            timeUtil: F().shape({
                getDateTimePatterns: F().func
            }),
            folderData: [],
            closeSearchBox: function() {},
            advanceSearch: function() {}
        }
          , Za = function(e) {
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
                t && ka(e, t)
            }(n, B.PureComponent);
            var t = Fa(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    recipient: "",
                    sender: "",
                    subject: "",
                    body: "",
                    startDate: null,
                    endDate: null,
                    selectedFolder: "",
                    folderTitle: (0,
                    G.t)("settings.messageCleanUp.FOLDER_TITLE")
                },
                r.onChangeRecipient = r.onChangeRecipient.bind(Ua(r)),
                r.onChangeSender = r.onChangeSender.bind(Ua(r)),
                r.onChangeSubject = r.onChangeSubject.bind(Ua(r)),
                r.onChangeBody = r.onChangeBody.bind(Ua(r)),
                r.onChangeStartDate = r.onChangeStartDate.bind(Ua(r)),
                r.onChangeEndDate = r.onChangeEndDate.bind(Ua(r)),
                r.onSelectFolder = r.onSelectFolder.bind(Ua(r)),
                r.onHandleAdvanceSearch = r.onHandleAdvanceSearch.bind(Ua(r)),
                r.isValidSearch = r.isValidSearch.bind(Ua(r)),
                r
            }
            return function(e, t, n) {
                t && ja(e.prototype, t),
                n && ja(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "onSelectFolder",
                value: function(e) {
                    var t = this.props.folderData.find(function(t) {
                        return t.name === e
                    })
                      , n = void 0 !== t ? (0,
                    G.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(t.type)) : ""
                      , r = "" === n ? (0,
                    G.t)("settings.messageCleanUp.FOLDER_TITLE") : n;
                    e.includes("/") ? r = e.substring(e.lastIndexOf("/") + 1, e.length) : "" !== e && "" === n && (r = e),
                    this.setState({
                        selectedFolder: e,
                        folderTitle: r
                    })
                }
            }, {
                key: "onChangeSender",
                value: function(e) {
                    this.setState({
                        sender: e
                    })
                }
            }, {
                key: "onChangeSubject",
                value: function(e) {
                    this.setState({
                        subject: e
                    })
                }
            }, {
                key: "onChangeBody",
                value: function(e) {
                    this.setState({
                        body: e
                    })
                }
            }, {
                key: "onChangeRecipient",
                value: function(e) {
                    this.setState({
                        recipient: e
                    })
                }
            }, {
                key: "onChangeStartDate",
                value: function(e) {
                    null !== e && void 0 !== e && e.isAfter(this.state.endDate) ? this.setState({
                        startDate: Ce()(this.state.endDate),
                        endDate: e
                    }) : this.setState({
                        startDate: e
                    })
                }
            }, {
                key: "onChangeEndDate",
                value: function(e) {
                    null !== e && void 0 !== e && e.isBefore(this.state.startDate) ? this.setState({
                        startDate: e,
                        endDate: Ce()(this.state.startDate)
                    }) : this.setState({
                        endDate: e
                    })
                }
            }, {
                key: "onHandleAdvanceSearch",
                value: function() {
                    for (var e = this.props, t = e.advanceSearch, n = e.closeSearchBox, r = this.state, a = r.recipient, o = r.sender, i = r.subject, l = r.body, s = r.startDate, c = r.endDate, u = r.selectedFolder, f = {
                        recipient: a,
                        sender: o,
                        subject: i,
                        body: l,
                        searchText: r.searchText,
                        folderPaths: "" === u ? [] : ["".concat(u)],
                        after: Ce()(s).endOf("day").valueOf(),
                        before: Ce()(c).endOf("day").valueOf()
                    }, d = {}, p = Object.keys(f), m = 0; m < p.length; m += 1) {
                        var h = p[m];
                        f[h] && (d[h] = f[h])
                    }
                    n(),
                    t(d)
                }
            }, {
                key: "isValidSearch",
                value: function() {
                    var e = this.state
                      , t = e.recipient
                      , n = e.sender
                      , r = e.subject
                      , a = e.body
                      , o = e.startDate
                      , i = e.endDate
                      , l = e.selectedFolder;
                    return "" !== t || "" !== n || "" !== r || "" !== a || null !== o || null !== i || "" !== l
                }
            }, {
                key: "render",
                value: function() {
                    if (!window.TimeUtil)
                        return null;
                    var e = this.props
                      , t = (e.timeUtil,
                    e.folderData)
                      , n = e.dateFormat;
                    return B.createElement(x.l0, null, B.createElement(x.UP, {
                        name: "recipient",
                        label: (0,
                        G.t)("mail.search.RECIPIENT"),
                        className: "ow-settings-message-cleanup-input",
                        type: "text",
                        value: this.state.recipient,
                        onChange: this.onChangeRecipient
                    }), B.createElement(x.UP, {
                        name: "sender",
                        label: (0,
                        G.t)("mail.search.SENDER"),
                        className: "ow-settings-message-cleanup-input",
                        type: "text",
                        value: this.state.sender,
                        onChange: this.onChangeSender
                    }), B.createElement(x.UP, {
                        name: "subject",
                        label: (0,
                        G.t)("mail.search.SUBJECT"),
                        className: "ow-settings-message-cleanup-input",
                        type: "text",
                        value: this.state.subject,
                        onChange: this.onChangeSubject
                    }), B.createElement(x.UP, {
                        name: "body",
                        label: (0,
                        G.t)("mail.search.BODY"),
                        className: "ow-settings-message-cleanup-input",
                        type: "text",
                        value: this.state.body,
                        onChange: this.onChangeBody
                    }), B.createElement("div", {
                        className: "ow-settings-message-cleanup-folderInput"
                    }, B.createElement("div", {
                        className: "ow-settings-message-cleanup-folderLabel"
                    }, (0,
                    G.t)("mail.search.FOLDER")), B.createElement(Ga, {
                        folderData: t,
                        disabled: 0 === t.length,
                        title: this.state.folderTitle,
                        selectedPath: this.state.selectedFolder,
                        onSelectFolder: this.onSelectFolder
                    })), B.createElement("span", {
                        className: "ow-mail-message-cleanup-date-header"
                    }, " ", (0,
                    G.t)("calendar.editorView.FIELD_TYPE_SELECTED_TEXT.DATE"), " "), B.createElement(_e(), {
                        className: "ow-settings-message-cleanup-dateInput"
                    }, B.createElement("div", {
                        className: "ow-settings-message-cleanup-dateInput-position"
                    }, B.createElement("label", {
                        className: "ow-icon-ico-calendar-datepicker"
                    }, B.createElement(Ma.Z, {
                        name: "afterDate",
                        dateFormat: n,
                        placeholderText: (0,
                        G.t)("mail.search.FROM_DATE"),
                        className: "ow-mail-message-cleanup-from",
                        selected: this.state.startDate,
                        selectsStart: !0,
                        startDate: this.state.startDate,
                        endDate: this.state.endDate,
                        onChange: this.onChangeStartDate,
                        maxDate: Ce()(),
                        ref: function(e) {
                            e && (e.onInputClick = function() {}
                            )
                        }
                    }))), B.createElement("span", {
                        className: "ow-mail-message-cleanup-dates-seperator"
                    }, " - "), B.createElement("div", {
                        className: "ow-settings-message-cleanup-dateInput-position"
                    }, B.createElement("label", {
                        className: "ow-icon-ico-calendar-datepicker"
                    }, B.createElement(Ma.Z, {
                        name: "beforeDate",
                        dateFormat: n,
                        placeholderText: (0,
                        G.t)("mail.search.TO_DATE"),
                        className: "ow-mail-message-cleanup-to",
                        selected: this.state.endDate,
                        selectsEnd: !0,
                        startDate: this.state.startDate,
                        endDate: this.state.endDate,
                        onChange: this.onChangeEndDate,
                        maxDate: Ce()(),
                        popperClassName: "ow-react-datepicker-popper-alignment",
                        ref: function(e) {
                            e && (e.onInputClick = function() {}
                            )
                        }
                    })))), B.createElement("hr", null), B.createElement("div", {
                        className: "ow-settings-message-cleanup-search"
                    }, B.createElement(bt.Z, {
                        className: "ow-button-primary btn btn-default",
                        disabled: !this.isValidSearch(),
                        onClick: this.onHandleAdvanceSearch,
                        role: p.HB.BUTTON,
                        "aria-label": (0,
                        G.t)("mail.search.SEARCH"),
                        "aria-disabled": !this.isValidSearch()
                    }, (0,
                    G.t)("mail.search.SEARCH"))))
                }
            }]),
            n
        }();
        Za.propTypes = Ha,
        Za.defaultProps = Ka;
        var Ya = Za
          , Va = (0,
        Ia.Z)(pt.Z.Dropdown);
        function Wa(e) {
            "@babel/helpers - typeof";
            return (Wa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ja(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, qa(r.key), r)
            }
        }
        function qa(e) {
            var t = function(e, t) {
                if ("object" !== Wa(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Wa(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Wa(t) ? t : String(t)
        }
        function za(e, t) {
            return (za = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Qa(e) {
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
                var n, r = $a(e);
                if (t) {
                    var a = $a(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Wa(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Xa(e)
                }(this, n)
            }
        }
        function Xa(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function $a(e) {
            return ($a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var eo = {
            folderData: F().arrayOf(F().object),
            timeUtil: F().shape({
                getDateTimePatterns: F().func
            }),
            closeSearchBox: F().func,
            onAttachmentSearch: F().func
        }
          , to = function(e) {
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
                t && za(e, t)
            }(n, B.PureComponent);
            var t = Qa(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    selectedFolder: "INBOX",
                    folderTitle: (0,
                    G.t)("settings.messageCleanUp.INBOX")
                },
                r.onSelectFolder = r.onSelectFolder.bind(Xa(r)),
                r.onHandleSearch = r.onHandleSearch.bind(Xa(r)),
                r
            }
            return function(e, t, n) {
                t && Ja(e.prototype, t),
                n && Ja(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "onSelectFolder",
                value: function(e) {
                    var t = this.props.folderData.find(function(t) {
                        return t.name === e
                    })
                      , n = void 0 !== t ? (0,
                    G.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(t.type)) : ""
                      , r = "" === n ? (0,
                    G.t)("settings.messageCleanUp.FOLDER_TITLE") : n;
                    e.includes("/") ? r = e.substring(e.lastIndexOf("/") + 1, e.length) : "" !== e && "" === n && (r = e),
                    this.setState({
                        selectedFolder: e,
                        folderTitle: r
                    })
                }
            }, {
                key: "onHandleSearch",
                value: function() {
                    var e = this.props
                      , t = e.onAttachmentSearch
                      , n = e.closeSearchBox
                      , r = {
                        folderPath: this.state.selectedFolder
                    };
                    n(),
                    t(r)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.folderData;
                    return B.createElement(x.l0, null, B.createElement("div", {
                        className: "ow-settings-message-cleanup-folderInput"
                    }, B.createElement("div", {
                        className: "ow-settings-message-cleanup-folderLabel",
                        "aria-label": (0,
                        G.t)("mail.search.FOLDER")
                    }, (0,
                    G.t)("mail.search.FOLDER")), B.createElement(Va, {
                        folderData: e,
                        disabled: 0 === e.length,
                        title: this.state.folderTitle,
                        selectedPath: this.state.selectedFolder,
                        onSelectFolder: this.onSelectFolder
                    })), B.createElement("hr", null), B.createElement("div", {
                        className: "ow-settings-message-cleanup-search"
                    }, B.createElement(bt.Z, {
                        className: "ow-button-primary btn btn-default",
                        onClick: this.onHandleSearch,
                        role: p.HB.BUTTON,
                        "aria-label": (0,
                        G.t)("mail.search.SEARCH")
                    }, (0,
                    G.t)("mail.search.SEARCH"))))
                }
            }]),
            n
        }();
        to.propTypes = eo,
        to.defaultProps = {
            folderData: [],
            timeUtil: {
                getDateTimePatterns: function() {}
            },
            closeSearchBox: function() {},
            onAttachmentSearch: function() {}
        };
        var no = to;
        function ro(e) {
            "@babel/helpers - typeof";
            return (ro = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
        function oo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ao(Object(n), !0).forEach(function(t) {
                    io(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ao(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function io(e, t, n) {
            return (t = so(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function lo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, so(r.key), r)
            }
        }
        function so(e) {
            var t = function(e, t) {
                if ("object" !== ro(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== ro(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === ro(t) ? t : String(t)
        }
        function co(e, t) {
            return (co = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function uo(e) {
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
                var n, r = po(e);
                if (t) {
                    var a = po(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ro(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return fo(e)
                }(this, n)
            }
        }
        function fo(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function po(e) {
            return (po = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var mo = {
            folderData: F().arrayOf(F().object),
            closeSearchBox: F().func,
            onFlaggedSearch: F().func
        }
          , ho = function(e) {
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
                t && co(e, t)
            }(n, B.PureComponent);
            var t = uo(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    selectedFolder: "",
                    folderTitle: (0,
                    G.t)("settings.messageCleanUp.FOLDER_TITLE"),
                    flags: {
                        seen: !1,
                        flagged: !1
                    }
                },
                r.onHandleSearch = r.onHandleSearch.bind(fo(r)),
                r.onChangeFlag = r.onChangeFlag.bind(fo(r)),
                r.onSelectFolder = r.onSelectFolder.bind(fo(r)),
                r
            }
            return function(e, t, n) {
                t && lo(e.prototype, t),
                n && lo(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "onHandleSearch",
                value: function() {
                    var e = this.props
                      , t = e.onFlaggedSearch
                      , n = e.closeSearchBox
                      , r = this.state
                      , a = r.flags
                      , o = a.seen
                      , i = a.flagged
                      , l = r.selectedFolder
                      , s = []
                      , c = [];
                    o ? s.push("seen") : c.push("seen"),
                    i ? s.push("flagged") : c.push("flagged");
                    var u = {
                        folderPaths: "" === l ? [] : [l],
                        setFlags: s,
                        unsetFlags: c
                    };
                    n(),
                    t(u)
                }
            }, {
                key: "onSelectFolder",
                value: function(e) {
                    var t = this.props.folderData.find(function(t) {
                        return t.name === e
                    })
                      , n = void 0 !== t ? (0,
                    G.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(t.type)) : ""
                      , r = "" === n ? (0,
                    G.t)("settings.messageCleanUp.FOLDER_TITLE") : n;
                    e.includes("/") ? r = e.substring(e.lastIndexOf("/") + 1, e.length) : "" !== e && "" === n && (r = e),
                    this.setState({
                        selectedFolder: e,
                        folderTitle: r
                    })
                }
            }, {
                key: "onChangeFlag",
                value: function(e, t) {
                    var n = this.state.flags;
                    this.setState({
                        flags: oo(oo({}, n), {}, io({}, e, t))
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.folderData;
                    return B.createElement(x.l0, null, B.createElement("div", {
                        className: "ow-settings-message-cleanup-folderInput"
                    }, B.createElement("div", {
                        className: "ow-settings-message-cleanup-folderLabel",
                        "aria-label": (0,
                        G.t)("mail.search.FOLDER")
                    }, (0,
                    G.t)("mail.search.FOLDER")), B.createElement(Va, {
                        folderData: t,
                        disabled: 0 === t.length,
                        title: this.state.folderTitle,
                        selectedPath: this.state.selectedFolder,
                        onSelectFolder: this.onSelectFolder
                    })), B.createElement("fieldset", {
                        className: "ow-settings-message-cleanup-fieldset"
                    }, B.createElement("p", null, B.createElement(x.bM, {
                        name: "seenFlag",
                        className: "ow-settings-message-cleanup-iconCheckbox",
                        value: this.state.flags.seen,
                        label: (0,
                        G.t)("settings.messageCleanUp.READ"),
                        onChange: function(t) {
                            return e.onChangeFlag("seen", t)
                        }
                    })), B.createElement("p", null, B.createElement(x.bM, {
                        name: "flagged",
                        className: "ow-settings-message-cleanup-iconCheckbox",
                        value: this.state.flags.flagged,
                        label: (0,
                        G.t)("settings.messageCleanUp.FLAGGED"),
                        onChange: function(t) {
                            return e.onChangeFlag("flagged", t)
                        }
                    }))), B.createElement("hr", null), B.createElement("div", {
                        className: "ow-settings-message-cleanup-search"
                    }, B.createElement(bt.Z, {
                        className: "ow-button-primary btn btn-default",
                        onClick: this.onHandleSearch,
                        role: p.HB.BUTTON,
                        "aria-label": (0,
                        G.t)("mail.search.SEARCH")
                    }, (0,
                    G.t)("mail.search.SEARCH"))))
                }
            }]),
            n
        }();
        ho.propTypes = mo,
        ho.defaultProps = {
            folderData: [],
            closeSearchBox: function() {},
            onFlaggedSearch: function() {}
        };
        var yo = ho;
        function bo(e) {
            "@babel/helpers - typeof";
            return (bo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function vo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, go(r.key), r)
            }
        }
        function go(e) {
            var t = function(e, t) {
                if ("object" !== bo(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== bo(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === bo(t) ? t : String(t)
        }
        function So(e, t) {
            return (So = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Eo(e) {
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
                var n, r = Oo(e);
                if (t) {
                    var a = Oo(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === bo(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Co(e)
                }(this, n)
            }
        }
        function Co(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Oo(e) {
            return (Oo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var _o = {
            folderData: F().arrayOf(F().object),
            searchMail: F().func,
            searchAttachment: F().func,
            searchFlagged: F().func
        }
          , wo = function(e) {
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
                t && So(e, t)
            }(n, B.PureComponent);
            var t = Eo(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    showSearchBox: !1,
                    searchText: "",
                    searchOption: "advance"
                },
                r.onActiveSearchBox = r.onActiveSearchBox.bind(Co(r)),
                r.closeSearchBox = r.closeSearchBox.bind(Co(r)),
                r.onSimpleSearch = r.onSimpleSearch.bind(Co(r)),
                r.onChangeSearchText = r.onChangeSearchText.bind(Co(r)),
                r.onClearText = r.onClearText.bind(Co(r)),
                r.handleEnterKey = r.handleEnterKey.bind(Co(r)),
                r.onChangeOption = r.onChangeOption.bind(Co(r)),
                r
            }
            return function(e, t, n) {
                t && vo(e.prototype, t),
                n && vo(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "onActiveSearchBox",
                value: function() {
                    this.setState(function(e) {
                        return {
                            showSearchBox: !e.showSearchBox
                        }
                    }),
                    this.state.showSearchBox ? document.getElementsByClassName("ow-settings-cleanup")[0].style.overflow = "hidden" : document.getElementsByClassName("ow-settings-cleanup")[0].style.overflow = "auto"
                }
            }, {
                key: "onSimpleSearch",
                value: function() {
                    var e = this.props.searchMail
                      , t = this.state.searchText;
                    t && t.trim() && e(this.state.searchText)
                }
            }, {
                key: "onChangeSearchText",
                value: function(e) {
                    this.setState({
                        searchText: e
                    })
                }
            }, {
                key: "onClearText",
                value: function() {
                    this.setState({
                        searchText: ""
                    })
                }
            }, {
                key: "onChangeOption",
                value: function(e) {
                    this.setState({
                        searchOption: e
                    })
                }
            }, {
                key: "closeSearchBox",
                value: function(e) {
                    e && e.target.blockRootClose || this.setState({
                        showSearchBox: !1,
                        searchText: ""
                    })
                }
            }, {
                key: "handleEnterKey",
                value: function() {
                    this.onSimpleSearch()
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this, n = window.TimeUtil;
                    if (!n)
                        return null;
                    var r = this.props
                      , a = r.folderData
                      , o = r.searchMail
                      , i = r.searchAttachment
                      , l = r.searchFlagged
                      , s = r.dateFormat
                      , c = this.state
                      , u = c.searchOption
                      , f = c.searchText
                      , d = a.filter(function(e) {
                        var t = e.path;
                        return void 0 !== e.type || "" !== t
                    });
                    return B.createElement("div", {
                        className: "ow-settings-cleanup-searchBox"
                    }, B.createElement(x.l0, {
                        className: "ow-settings-cleanup-searchBox-quickField"
                    }, B.createElement("div", {
                        className: "ow-settings-cleanup-searchBox-input"
                    }, B.createElement(x.UP, {
                        name: "searchKey",
                        className: "ow-settings-cleanup-searchBox-input-text",
                        type: "text",
                        value: this.state.searchText,
                        placeholder: (0,
                        G.t)("settings.messageCleanUp.CLEAN_UP_SEARCH"),
                        "aria-label": this.state.searchText || (0,
                        G.t)("settings.messageCleanUp.CLEAN_UP_SEARCH"),
                        onChange: this.onChangeSearchText,
                        onKeyDown: function(e) {
                            return 13 === e.keyCode ? t.handleEnterKey() : ""
                        }
                    }), B.createElement(B.Fragment, null, f.length > 0 && B.createElement(ft.Z, {
                        name: "close",
                        className: "ow-settings-cleanup-searchBox-input-clear",
                        onClick: this.onClearText,
                        role: p.HB.BUTTON,
                        "aria-label": (0,
                        G.t)("common.CLOSE"),
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === p.BY.ENTERKEY && t.onClearText()
                        }
                    }), B.createElement(ft.Z, {
                        name: "search-active",
                        className: "ow-settings-cleanup-searchBox-input-search",
                        onClick: this.onSimpleSearch,
                        role: p.HB.BUTTON,
                        "aria-label": (0,
                        G.t)("mail.search.SEARCH"),
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === p.BY.ENTERKEY && t.onSimpleSearch()
                        }
                    }))), B.createElement("div", {
                        className: "ow-settings-cleanup-searchToolbar"
                    }, B.createElement(bt.Z, {
                        onClick: this.onActiveSearchBox,
                        className: "ow-settings-cleanup-searchBox-arrow",
                        title: (0,
                        G.t)("common.SHOW_ADVANCED_TOOLTIP"),
                        "aria-label": null !== this && void 0 !== this && null !== (e = this.state) && void 0 !== e && e.showSearchBox ? (0,
                        G.t)("aria.label.EXPAND") : (0,
                        G.t)("aria.label.COLLAPSE")
                    }, B.createElement("span", {
                        className: "caret"
                    })))), B.createElement(Aa(), {
                        show: this.state.showSearchBox,
                        container: this,
                        target: this,
                        placement: "bottom",
                        rootClose: !0,
                        animation: !1,
                        onHide: this.closeSearchBox
                    }, B.createElement("div", {
                        className: "ow-settings-message-cleanup-overlay"
                    }, B.createElement(Ra(), null, B.createElement("div", {
                        className: "ow-settings-message-cleanup-searchOption",
                        role: p.HB.RADIO,
                        "aria-label": this.state.searchOption,
                        tabIndex: 0
                    }, B.createElement("span", {
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === p.BY.ENTERKEY && t.onChangeOption("advance")
                        }
                    }, (0,
                    G.t)("settings.messageCleanUp.ADVANCED_SEARCH"), B.createElement(ft.Z, {
                        onClick: function() {
                            return t.onChangeOption("advance")
                        },
                        name: "advance" === this.state.searchOption ? "radio-on" : "radio-off"
                    })), B.createElement("span", {
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === p.BY.ENTERKEY && t.onChangeOption("attachments")
                        }
                    }, (0,
                    G.t)("settings.messageCleanUp.ATTACHMENTS"), B.createElement(ft.Z, {
                        onClick: function() {
                            return t.onChangeOption("attachments")
                        },
                        name: "attachments" === this.state.searchOption ? "radio-on" : "radio-off"
                    })), B.createElement("span", {
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === p.BY.ENTERKEY && t.onChangeOption("flagged")
                        }
                    }, (0,
                    G.t)("settings.messageCleanUp.FLAGGED"), B.createElement(ft.Z, {
                        onClick: function() {
                            return t.onChangeOption("flagged")
                        },
                        name: "flagged" === this.state.searchOption ? "radio-on" : "radio-off"
                    }))), "advance" === u && B.createElement(Ya, {
                        timeUtil: n,
                        folderData: a,
                        closeSearchBox: this.closeSearchBox,
                        advanceSearch: o,
                        dateFormat: s
                    }), "attachments" === u && B.createElement(no, {
                        timeUtil: n,
                        folderData: d,
                        closeSearchBox: this.closeSearchBox,
                        onAttachmentSearch: i
                    }), "flagged" === u && B.createElement(yo, {
                        folderData: a,
                        closeSearchBox: this.closeSearchBox,
                        onFlaggedSearch: l
                    })))))
                }
            }]),
            n
        }();
        wo.propTypes = _o,
        wo.defaultProps = {
            folderData: [],
            searchMail: function() {},
            searchAttachment: function() {},
            searchFlagged: function() {}
        };
        var Do = wo
          , To = n(73918)
          , Po = n.n(To)
          , Ao = n(42583)
          , No = n.n(Ao)
          , Ro = n(96072)
          , Io = n.n(Ro)
          , Mo = n(43779)
          , Lo = n.n(Mo)
          , jo = n(24083)
          , Bo = n(55086)
          , ko = n(72278)
          , Fo = n(7179)
          , Uo = ["uidfolderPath"];
        function xo(e) {
            "@babel/helpers - typeof";
            return (xo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Go(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Yo(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || Zo(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Ho(e, t) {
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
        function Ko(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, a, o, i, l = [], s = !0, c = !1;
                    try {
                        if (o = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            s = !1
                        } else
                            for (; !(s = (r = o.call(n)).done) && (l.push(r.value),
                            l.length !== t); s = !0)
                                ;
                    } catch (e) {
                        c = !0,
                        a = e
                    } finally {
                        try {
                            if (!s && null != n.return && (i = n.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (c)
                                throw a
                        }
                    }
                    return l
                }
            }(e, t) || Zo(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Zo(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return Yo(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Yo(e, t) : void 0
            }
        }
        function Yo(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function Vo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Wo(r.key), r)
            }
        }
        function Wo(e) {
            var t = function(e, t) {
                if ("object" !== xo(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== xo(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === xo(t) ? t : String(t)
        }
        function Jo(e, t) {
            return (Jo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function qo(e) {
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
                var n, r = Qo(e);
                if (t) {
                    var a = Qo(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === xo(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return zo(e)
                }(this, n)
            }
        }
        function zo(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Qo(e) {
            return (Qo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Xo = p.u0.SORT_DATE_ASC
          , $o = p.u0.SORT_DATE_DESC
          , ei = p.u0.SORT_FROM_ASC
          , ti = p.u0.SORT_FROM_DESC
          , ni = p.u0.SORT_SUBJECT_ASC
          , ri = p.u0.SORT_SUBJECT_DESC
          , ai = p.u0.SORT_PRIORITY_ASC
          , oi = p.u0.SORT_PRIORITY_DESC
          , ii = p.u0.SORT_FLAG_ASC
          , li = p.u0.SORT_FLAG_DESC
          , si = p.u0.SORT_SIZE_DESC
          , ci = p.u0.SORT_SIZE_ASC
          , ui = p.u0.SORT_TO_ASC
          , fi = p.u0.SORT_TO_DESC
          , di = {
            searchMode: F().bool.isRequired,
            useLongTime: F().bool,
            use24HrFormat: F().bool,
            folderData: F().arrayOf(F().object),
            data: F().shape({
                rows: F().arrayOf(F().object),
                totalHeight: F().number,
                itemTotalCount: F().number,
                entryCount: F().number
            }),
            headerHeight: F().number,
            isFetching: F().bool,
            categoryEnabled: F().bool,
            showFolder: F().bool,
            paginationForCleanup: F().shape({
                searchParams: F().object,
                offset: F().number,
                totalCount: F().number,
                scrollTop: F().number,
                updating: F().bool
            }),
            onSelectChange: F().func,
            searchByPaginationForCleanup: F().func,
            onSortChange: F().func,
            folderDisplay: F().func,
            searchMail: F().func,
            onHandlePreview: F().func
        }
          , pi = (0,
        T.Z)("mail.cleanup.FETCH_SIZE_IN_MESSAGE_CLEANUP")
          , mi = function(e) {
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
                t && Jo(e, t)
            }(n, B.PureComponent);
            var t = qo(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    tableHeight: 0,
                    listWidth: 0,
                    fetchAll: !1,
                    selectedList: [],
                    sort: si,
                    prevSelected: {}
                },
                r.getColumnConfig = r.getColumnConfig.bind(zo(r)),
                r.onTableResize = r.onTableResize.bind(zo(r)),
                r.handleScroll = r.handleScroll.bind(zo(r)),
                r.onSelectChange = r.onSelectChange.bind(zo(r)),
                r.fetchNextPage = r.fetchNextPage.bind(zo(r)),
                r.onSelectAll = r.onSelectAll.bind(zo(r)),
                r.handleSortChange = r.handleSortChange.bind(zo(r)),
                r
            }
            return function(e, t, n) {
                t && Vo(e.prototype, t),
                n && Vo(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    (0,
                    this.props.searchMail)()
                }
            }, {
                key: "getSnapshotBeforeUpdate",
                value: function() {
                    return this.tableElement && this.tableElement.scrollTop
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t, n) {
                    var r = this.state
                      , a = r.fetchAll
                      , o = r.selectedList
                      , i = this.props
                      , l = i.data
                      , s = l.rows
                      , c = l.entryCount
                      , u = i.isFetching
                      , f = i.paginationForCleanup
                      , d = f.updating
                      , p = f.searchParams.virtualFolderId
                      , m = i.onSelectChange
                      , h = document.getElementsByClassName("ow-VirtualizedList-cleanup-container");
                    if (h.length > 0) {
                        var y = Ko(h, 1);
                        this.tableElement = y[0],
                        this.tableElement.addEventListener("scroll", this.handleScroll);
                        var b = this.tableElement
                          , v = b.scrollHeight
                          , g = b.clientHeight;
                        if (u || d || a || g !== v || this.fetchNextPage(),
                        void 0 !== n && this.tableElement.scrollHeight > 0 && (this.tableElement.scrollTop = n - 3),
                        m(o),
                        e.paginationForCleanup.searchParams.virtualFolderId !== p && this.setState({
                            selectedList: []
                        }),
                        c !== e.data.entryCount) {
                            var S = o.filter(function(e) {
                                var t = e.uid
                                  , n = e.folderPath;
                                return void 0 !== s.find(function(e) {
                                    return e.data.uid === t && e.data.folderPath === n
                                })
                            });
                            this.setState({
                                selectedList: S
                            })
                        }
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.tableElement && this.tableElement.removeEventListener("scroll", this.handleScroll)
                }
            }, {
                key: "onTableResize",
                value: function(e) {
                    var t = e.height
                      , n = e.width
                      , r = this.props.headerHeight;
                    this.setState({
                        tableHeight: t - r,
                        listWidth: n
                    })
                }
            }, {
                key: "onSelectChange",
                value: function(e, t) {
                    var n = this
                      , r = this.props.onHandlePreview;
                    if (e) {
                        var a = e.data
                          , o = a.uid
                          , i = a.folderPath
                          , l = t.trigger
                          , s = t.shiftKey
                          , c = this.props.data.rows;
                        if (l === p.rW.CHECK) {
                            var u = [];
                            this.setState(function(t) {
                                var r = t.selectedList;
                                if (n.setState({
                                    prevSelected: e
                                }),
                                s) {
                                    var a = ""
                                      , l = "";
                                    n.state.prevSelected.index < e.index ? (a = n.state.prevSelected.index,
                                    l = e.index) : (a = e.index,
                                    l = n.state.prevSelected.index);
                                    for (var f = a; f <= l; f++) {
                                        var d = {};
                                        d.uid = c[f].data.uid,
                                        d.folderPath = c[f].data.folderPath,
                                        u.push(d)
                                    }
                                }
                                if (void 0 !== r.find(function(e) {
                                    return e.uid === o && e.folderPath === i
                                })) {
                                    var p = r.filter(function(e) {
                                        return e.uid === o
                                    }).length;
                                    return p > 1 && (r.forEach(function(e) {
                                        e.uidfolderPath = e.uid + e.folderPath
                                    }),
                                    r = r.filter(function(e) {
                                        return e.uidfolderPath !== o + i
                                    })),
                                    {
                                        selectedList: p > 1 ? r.map(function(e) {
                                            e.uidfolderPath;
                                            return Ho(e, Uo)
                                        }) : r.filter(function(e) {
                                            return e.uid !== o
                                        })
                                    }
                                }
                                if (u.length > 0) {
                                    u.forEach(function(e) {
                                        e.uidfolderPath = e.uid + e.folderPath
                                    }),
                                    r.forEach(function(e) {
                                        e.uidfolderPath = e.uid + e.folderPath
                                    });
                                    var m = u.concat(r)
                                      , h = new Set;
                                    return {
                                        selectedList: Go(r = m.filter(function(e) {
                                            var t = h.has(e.uidfolderPath);
                                            return h.add(e.uidfolderPath),
                                            !t
                                        }))
                                    }
                                }
                                return {
                                    selectedList: [].concat(Go(r), [{
                                        uid: o,
                                        folderPath: i
                                    }])
                                }
                            })
                        } else
                            l === p.rW.CLICK && (this.setState({
                                selectedList: [{
                                    uid: o,
                                    folderPath: i
                                }]
                            }),
                            r({
                                uid: o,
                                folderPath: i
                            }))
                    }
                }
            }, {
                key: "onSelectAll",
                value: function() {
                    var e = this.props.data.rows
                      , t = this.state.selectedList;
                    this.setState({
                        selectedList: t.length === e.length ? [] : e.map(function(e) {
                            var t = e.data;
                            return {
                                uid: t.uid,
                                folderPath: t.folderPath
                            }
                        })
                    })
                }
            }, {
                key: "getColumnConfig",
                value: function() {
                    var e = this
                      , t = this.state.selectedList
                      , n = this.props
                      , r = n.categoryEnabled
                      , a = n.showFolder
                      , o = n.folderDisplay
                      , i = n.useLongTime
                      , l = n.use24HrFormat
                      , s = n.folderData;
                    return [{
                        renderHeaderContent: function() {
                            return B.createElement("div", {
                                className: "ow-selectable-item-checkbox-container"
                            })
                        },
                        width: 40,
                        renderCellContent: function(n) {
                            var r = n.data
                              , a = r.uid
                              , o = r.folderPath
                              , i = r.subject
                              , l = void 0 !== t.find(function(e) {
                                return e.uid === a && e.folderPath === o
                            });
                            return B.createElement(ft.Z, {
                                name: l ? "checkbox-selected" : "checkbox-unselected",
                                tabIndex: K.UhU.isDesktop ? 0 : -1,
                                onFocus: function(e) {
                                    return (0,
                                    vt.yJ)(e)
                                },
                                role: p.HB.CHECKBOX,
                                "aria-checked": l,
                                "aria-label": i || (0,
                                G.t)("mail.listView.EMPTY_SUBJECT"),
                                onBlur: function(t) {
                                    var n;
                                    (0,
                                    vt.yJ)(t),
                                    (0,
                                    vt.np)(t, null === (n = e.tableComponent) || void 0 === n ? void 0 : n.wrappedList)
                                },
                                onKeyDown: function(t) {
                                    var r, a;
                                    K.UhU.isDesktop && (t.altKey && t.key === p.BY.ENTERKEY ? (t.stopPropagation(),
                                    null === (r = e.tableComponent) || void 0 === r || null === (a = r.wrappedList) || void 0 === a || a.handleItemClick(n, t)) : t.key === p.BY.ENTERKEY && (t.stopPropagation(),
                                    e.tableComponent.handleCheckChange(n, t),
                                    setTimeout(function() {
                                        var e, t, r, a;
                                        null === (e = document.querySelector(".ow-VirtualizedList-wrapper")) || void 0 === e || null === (t = e.children[null === n || void 0 === n ? void 0 : n.index]) || void 0 === t || null === (r = t.children[0]) || void 0 === r || null === (a = r.childNodes[0]) || void 0 === a || a.focus()
                                    }, 0)))
                                },
                                onClick: function(t) {
                                    t.stopPropagation(),
                                    e.tableComponent.handleCheckChange(n, t)
                                }
                            })
                        }
                    }, {
                        headerClass: "ow-mail-MailSummaryTable-header-from",
                        width: 200,
                        minWidth: 100,
                        resizable: !1,
                        renderHeaderContent: function() {
                            return e.sortableHeader({
                                ascKey: ei,
                                descKey: ti,
                                text: (0,
                                G.t)("mail.listView.HEADER_SENDER"),
                                defaultDirection: "asc"
                            })
                        },
                        renderCellContent: function(t) {
                            var n = t.data;
                            if (n) {
                                var a = n.from
                                  , o = n.flags
                                  , i = o.seen
                                  , l = o.userFlags
                                  , s = a && (a.name || a.address)
                                  , c = r && l && Lo()(l, "suspicious");
                                return e.textContent(s, !!i, c)
                            }
                            return e.emptyContent()
                        }
                    }, {
                        headerClass: "ow-mail-MailSummaryTable-header-to",
                        width: 200,
                        minWidth: 100,
                        resizable: !1,
                        renderHeaderContent: function() {
                            return e.sortableHeader({
                                ascKey: ui,
                                descKey: fi,
                                text: (0,
                                G.t)("mail.listView.HEADER_RECIPIENT"),
                                defaultDirection: "asc"
                            })
                        },
                        renderCellContent: function(t) {
                            var n = t.data;
                            if (n) {
                                var a = n.from
                                  , o = n.flags
                                  , i = o.seen
                                  , l = o.userFlags
                                  , s = a && (a.name || a.address)
                                  , c = r && l && Lo()(l, "suspicious")
                                  , u = n.recipients;
                                if (u.to)
                                    s = u.to.map(function(e) {
                                        return e.address
                                    }).join("; ");
                                return e.textContent(s, !!i, c)
                            }
                            return e.emptyContent()
                        }
                    }, {
                        headerClass: "ow-mail-MailSummaryTable-header-subject",
                        flex: 1,
                        minWidth: 100,
                        resizable: !1,
                        renderHeaderContent: function() {
                            return e.sortableHeader({
                                ascKey: ni,
                                descKey: ri,
                                text: (0,
                                G.t)("mail.listView.HEADER_SUBJECT"),
                                defaultDirection: "asc"
                            })
                        },
                        renderCellContent: function(t) {
                            var n = t.data;
                            if (n) {
                                var r = n.subject
                                  , i = n.flags.seen
                                  , l = n.messagePreview
                                  , s = n.folderPath
                                  , c = r || (0,
                                G.t)("mail.listView.EMPTY_SUBJECT")
                                  , u = "";
                                l && (u = l.body ? (0,
                                Fo.Mc)(l.body) : (0,
                                G.t)("mail.NO_MESSAGE_PREVIEW"));
                                var f = B.createElement("span", null, " ", c, " ", u ? B.createElement("span", {
                                    className: "ow-mail-MailSummaryTable-bodyPreview"
                                }, " - ".concat(u)) : "");
                                return e.textContent(f, !!i, null, a, o, s, !0)
                            }
                            return e.emptyContent()
                        }
                    }, {
                        headerClass: "ow-mail-header-folder",
                        width: 70,
                        minWidth: 70,
                        resizable: !1,
                        text: (0,
                        G.t)("mail.listView.HEADER_FOLDER"),
                        renderHeaderContent: function(e) {
                            var t = e.text;
                            return B.createElement("div", {
                                role: p.HB.PRESENTATION,
                                className: "ow-mail-MailSummaryTable-header"
                            }, B.createElement("span", {
                                className: "ow-mail-MailSummaryTable-header-text",
                                title: t,
                                "aria-label": (0,
                                G.t)("mail.listView.HEADER_FOLDER")
                            }, (0,
                            G.t)("mail.listView.HEADER_FOLDER")))
                        },
                        renderCellContent: function(e) {
                            var t = e.data.folderPath
                              , n = (s.find(function(e) {
                                return e.path === t
                            }) || {}).type
                              , r = void 0 === n ? "" : n
                              , a = (0,
                            G.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(r)) || t;
                            return B.createElement("div", {
                                className: "ow-mail-header-folder"
                            }, B.createElement("span", {
                                className: "ow-mail-MailSummaryTable-cell-text",
                                title: a
                            }, r && (0,
                            G.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(r)) || t))
                        }
                    }, {
                        headerClass: "ow-mail-MailSummaryTable-header-date",
                        width: 110,
                        minWidth: 90,
                        resizable: !1,
                        renderHeaderContent: function() {
                            return e.sortableHeader({
                                ascKey: Xo,
                                descKey: $o,
                                text: (0,
                                G.t)("mail.listView.HEADER_DATE"),
                                defaultDirection: "desc"
                            })
                        },
                        renderCellContent: function(t) {
                            var n = t.data;
                            if (n) {
                                var r = n.receivedDate
                                  , a = n.flags.seen
                                  , o = !l && i ? "".concat(window.TimeUtil.getShortDate(r || sendDate || sentDate), " ").concat(TimeUtil.getTimeParseInt24to12(window.TimeUtil.getShortTime(r || sendDate || sentDate))) : TimeUtil.getTimeParseInt24to12(window.TimeUtil.getCalendarDateTime(r));
                                return e.textContent(o, !!a, null)
                            }
                            return e.emptyContent()
                        }
                    }, {
                        headerClass: "ow-mail-MailSummaryTable-header-size",
                        width: 100,
                        minWidth: 70,
                        resizable: !1,
                        renderHeaderContent: function() {
                            return e.sortableHeader({
                                ascKey: ci,
                                descKey: si,
                                text: (0,
                                G.t)("settings.messageCleanUp.SORTBY_SIZE"),
                                defaultDirection: "desc"
                            })
                        },
                        renderCellContent: function(t) {
                            var n = t.data;
                            return n ? n.size : e.emptyContent()
                        }
                    }, {
                        renderHeaderContent: function() {
                            return e.sortableHeader({
                                ascKey: ii,
                                descKey: li,
                                text: B.createElement(ft.Z, {
                                    name: "flag-mail",
                                    "aria-label": (0,
                                    G.t)("mail.listView.HEADER_FLAG")
                                }),
                                defaultDirection: "desc"
                            })
                        },
                        headerClass: "ow-mail-MailSummaryTable-header-flag",
                        width: 30,
                        renderCellContent: function(t) {
                            var n = t.data;
                            return n ? n.flags.flagged && B.createElement(ft.Z, {
                                name: "flag-mail"
                            }) : e.emptyContent()
                        }
                    }, {
                        renderHeaderContent: function() {
                            return B.createElement(ft.Z, {
                                name: "attachment-mail",
                                title: (0,
                                G.t)("mail.listView.HEADER_ATTACHMENT"),
                                "aria-label": (0,
                                G.t)("mail.listView.HEADER_ATTACHMENT")
                            })
                        },
                        width: 30,
                        renderCellContent: function(t) {
                            var n = t.data;
                            return n ? n.attachmentCount > 0 && B.createElement(ft.Z, {
                                name: "attachment-mail"
                            }) : e.emptyContent()
                        }
                    }, {
                        headerClass: "ow-mail-MailSummaryTable-header-priority",
                        width: 30,
                        renderHeaderContent: function() {
                            return e.sortableHeader({
                                ascKey: ai,
                                descKey: oi,
                                text: B.createElement(ft.Z, {
                                    name: "exclamation",
                                    "aria-label": (0,
                                    G.t)("mail.listView.HEADER_PRIORITY")
                                }),
                                defaultDirection: "desc"
                            })
                        },
                        renderCellContent: function(t) {
                            var n = t.data;
                            if (n) {
                                var r = n.priority;
                                return B.createElement(ko.Z, {
                                    level: r
                                })
                            }
                            return e.emptyContent()
                        }
                    }].filter(function(e) {
                        return null !== e
                    })
                }
            }, {
                key: "handleScroll",
                value: function(e) {
                    var t = e.target
                      , n = t.scrollTop
                      , r = t.clientHeight
                      , a = t.scrollHeight
                      , o = this.props
                      , i = o.paginationForCleanup
                      , l = i.searchParams
                      , s = i.offset
                      , c = i.updating
                      , u = o.searchByPaginationForCleanup;
                    a > 0 && n + r + 10 >= a && (this.state.fetchAll || c || u({
                        searchParams: l,
                        offset: s + pi,
                        size: pi
                    }))
                }
            }, {
                key: "handleSortChange",
                value: function(e) {
                    var t = this.props.onSortChange;
                    this.setState({
                        sort: e
                    }),
                    t(e)
                }
            }, {
                key: "getUpDownArrow",
                value: function(e, t) {
                    return e && B.createElement(ft.Z, {
                        name: "up-thin",
                        className: "mail-MailSummaryListSortBtn-asc"
                    }) || t && B.createElement(ft.Z, {
                        name: "down-thin",
                        className: "mail-MailSummaryListSortBtn-desc"
                    })
                }
            }, {
                key: "sortableHeader",
                value: function(e) {
                    var t, n = this, r = e.ascKey, a = e.optionalAscKey, o = e.descKey, i = e.optionalDescKey, l = e.text, s = e.defaultDirection, c = this.state.sort, u = this.props.isFetching, f = this.props.defaultSizeSortInTable, d = c === r || c === a, m = c === o || c === i, h = d && o || m && r || ("asc" === s ? r : o);
                    return f && "Size(bytes)" == l ? (m = !0,
                    t = this.getUpDownArrow(d, m)) : f && "Size(bytes)" != l ? (m = !1,
                    d = !1,
                    t = this.getUpDownArrow(d, m)) : t = this.getUpDownArrow(d, m),
                    B.createElement("div", {
                        role: p.HB.PRESENTATION,
                        className: "ow-mail-MailSummaryTable-header"
                    }, B.createElement("span", {
                        className: u ? "ow-mail-MailSummaryTable-header-text-disable" : "ow-mail-MailSummaryTable-header-text",
                        title: "object" === xo(l) ? l.props.name : l,
                        onClick: function() {
                            return n.handleSortChange(h)
                        },
                        "aria-label": l
                    }, l, t))
                }
            }, {
                key: "textContent",
                value: function(e, t, n, r, a, o, i) {
                    return B.createElement("div", null, B.createElement("div", {
                        className: "ow-mail-MailSummaryTable-cell"
                    }, n && B.createElement(Io(), {
                        className: "ow-mail-MailSummaryTable-cell-suspicious"
                    }, B.createElement(Po(), {
                        placement: "bottom",
                        overlay: B.createElement(No(), {
                            id: "tooltip-bottom"
                        }, B.createElement("span", {
                            className: "ow-mail-MailSummaryListItem-row-suspicious-tooltip",
                            "aria-label": (0,
                            G.t)("mail.listView.tooltips.SUSPICIOUS_MESSAGE")
                        }, (0,
                        G.t)("mail.listView.tooltips.SUSPICIOUS_MESSAGE")))
                    }, B.createElement("span", {
                        className: "ow-icon-mail-suspicious"
                    }))), B.createElement("span", {
                        className: "ow-mail-MailSummaryTable-cell-text".concat(t ? "" : " ow-mail-MailSummaryTable-cell-bold-text"),
                        title: "object" === xo(e) ? e.props.children[1] : e,
                        "aria-label": e
                    }, e)), r && i ? B.createElement("div", {
                        className: "ow-mail-header-folder"
                    }, B.createElement("span", {
                        className: "ow-mail-MailSummaryListItem-folder",
                        title: a(o)
                    }, a(o))) : null)
                }
            }, {
                key: "emptyContent",
                value: function() {
                    return ""
                }
            }, {
                key: "fetchNextPage",
                value: function() {
                    var e = this.props
                      , t = e.paginationForCleanup;
                    (0,
                    e.searchByPaginationForCleanup)({
                        searchParams: t.searchParams,
                        offset: t.offset + pi,
                        size: pi
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , r = t.isFetching
                      , a = t.headerHeight
                      , o = t.location
                      , i = (0,
                    jo.h4)(jo.JZ, {})
                      , l = n.rows
                      , s = n.entryCount
                      , c = this.state.selectedList
                      , u = this.context.isRtl
                      , f = 0 == c.length ? "ow-icon  ow-icon-checkbox-unselected select-all-header" : c.length == s ? "ow-icon  ow-icon-checkbox-selected select-all-header" : c.length > 0 ? "ow-icon  ow-icon-checkbox-selected-one select-all-header" : "ow-icon  ow-icon-checkbox-unselected select-all-header";
                    return B.createElement(B.Fragment, null, r ? B.createElement("div", {
                        className: "ow-settings-spinner-container"
                    }, B.createElement(yt.Z, null), " ") : null, B.createElement("div", {
                        className: "ow-settings-cleanup-list-info"
                    }, u ? B.createElement("div", {
                        className: "ow-selectable-item-checkbox-container format-rtl"
                    }, B.createElement("span", {
                        className: f,
                        onClick: this.onSelectAll
                    }, (c.length,
                    " ")), B.createElement("span", {
                        className: "select-total-setting"
                    }, "".concat(c.length), " ", (0,
                    G.t)("mail.listView.OF_TOTAL"), " ", "".concat(s))) : B.createElement("div", {
                        className: "ow-selectable-item-checkbox-container"
                    }, B.createElement("span", {
                        className: f,
                        onClick: this.onSelectAll,
                        tabIndex: 0,
                        onKeyDown: function(t) {
                            return t.key === p.BY.ENTERKEY && e.onSelectAll()
                        },
                        role: p.HB.CHECKBOX,
                        "aria-checked": (null === c || void 0 === c ? void 0 : c.length) > 0,
                        "aria-label": (0,
                        G.t)("mail.listView.tooltips.SELECT_IN_VIEW")
                    }, (c.length,
                    " ")), B.createElement("span", {
                        className: "select-total-setting"
                    }, "".concat(c.length), " ", (0,
                    G.t)("mail.listView.OF_TOTAL"), " ", "".concat(s)))), B.createElement(Bo.Z, {
                        className: "ow-mail-AutoSizer",
                        onResize: this.onTableResize
                    }, function(t) {
                        var r = t.height;
                        return B.createElement(i, {
                            columnConfig: e.getColumnConfig(),
                            location: o,
                            className: "ow-mail-MailSummaryTable",
                            renderRowExtra: e.renderRowExtra,
                            itemWrapperClass: e.itemWrapperClass,
                            tableHeight: r,
                            headerHeight: a,
                            listHeight: e.state.tableHeight,
                            listWidth: e.state.listWidth,
                            ref: function(t) {
                                e.tableComponent = t
                            },
                            data: n,
                            scrollTop: 0,
                            visibleStartIndex: "0",
                            visibleEndIndex: n.rows.length - 1,
                            viewportStartIndex: "0",
                            viewportEndIndex: n.rows.length - 1,
                            onSelectChange: e.onSelectChange,
                            selectedInfo: e.state.selectedList
                        })
                    }), r || 0 !== n.itemTotalCount ? null : B.createElement("div", {
                        className: "ow-mail-MailSummaryList-tooltip",
                        role: p.HB.ALERT,
                        "aria-live": p.HO.ASSERTIVE
                    }, B.createElement("span", null, (0,
                    G.t)("mail.listView.EMPTY_MAIL_LIST"))), B.createElement("div", {
                        className: "sr-only",
                        role: p.HB.STATUS,
                        "aria-live": (null === l || void 0 === l ? void 0 : l.length) > 0 ? p.HO.ASSERTIVE : p.HO.OFF,
                        "aria-label": (0,
                        H.WU)((0,
                        G.t)("aria.label.NUMBER_OF_MAILS"), null === l || void 0 === l ? void 0 : l.length)
                    }))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e) {
                    var t = e.data
                      , n = t.rows
                      , r = t.entryCount;
                    return n.length === r ? {
                        fetchAll: !0
                    } : {
                        fetchAll: !1
                    }
                }
            }]),
            n
        }();
        mi.contextTypes = {
            isRtl: F().bool
        },
        mi.propTypes = di,
        mi.defaultProps = {
            useLongTime: !1,
            use24HrFormat: !1,
            folderData: [],
            data: {
                rows: [],
                sections: [],
                totalHeight: 0,
                pinLen: 0,
                itemTotalCount: 0,
                expanded: !1,
                collapsing: !1,
                dataSignature: 0,
                entryCount: 0
            },
            headerHeight: 69,
            isFetching: !1,
            categoryEnabled: !1,
            showFolder: !1,
            paginationForCleanup: {
                searchParams: {},
                offset: 0,
                totalCount: 0,
                scrollTop: 0,
                updating: !1
            },
            searchByPaginationForCleanup: function() {},
            onSelectChange: function() {},
            onSortChange: function() {},
            folderDisplay: function() {},
            searchMail: function() {},
            onHandlePreview: function() {}
        };
        var hi = mi
          , yi = n(92915)
          , bi = {
            subject: F().string,
            detail: F().shape({
                body: F().string
            }),
            isFetching: F().bool.isRequired,
            exitPreview: F().func,
            getEvents: F().func,
            manageCleanupView: F().bool
        }
          , vi = function(e) {
            var t = e.detail
              , n = e.subject
              , r = (e.exitPreview,
            e.isFetching)
              , a = e.getEvents
              , o = e.manageCleanupView;
            return B.createElement("div", null, B.createElement("div", {
                class: "ow-mail-MailPreview-cleanup-subject-wrapper"
            }, B.createElement("span", {
                class: "ow-mail-MailPreview-cleanup-subject"
            }, n)), r ? B.createElement("div", {
                className: "ow-settings-spinner-container"
            }, B.createElement(yt.Z, null), " ") : null, B.createElement(yi.Z, {
                detail: t,
                getEvents: a,
                manageCleanupView: o
            }))
        };
        vi.propTypes = bi,
        vi.defaultProps = {
            subject: "",
            detail: null,
            exitPreview: function() {},
            getEvents: function() {},
            manageCleanupView: !0
        };
        var gi = vi
          , Si = n(21453);
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
        function Ci(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Oi(r.key), r)
            }
        }
        function Oi(e) {
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
        function _i(e, t) {
            return (_i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function wi(e) {
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
                var n, r = Ti(e);
                if (t) {
                    var a = Ti(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Ei(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Di(e)
                }(this, n)
            }
        }
        function Di(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Ti(e) {
            return (Ti = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Pi = {
            data: F().shape({
                rows: F().arrayOf(F().object),
                collapsing: F().bool,
                expanded: F().bool,
                itemTotalCount: F().number,
                pinLen: F().number,
                totalHeight: F().number
            }),
            viewMode: F().string.isRequired,
            searchMode: F().bool.isRequired,
            isFetching: F().bool,
            folderData: F().arrayOf(F().object),
            previewInfo: F().shape({
                subject: F().string
            }),
            paginationForCleanup: F().shape({
                searchParams: F().object,
                offset: F().number,
                totalCount: F().number
            }),
            searchByPaginationForCleanup: F().func,
            searchMail: F().func,
            searchAttachment: F().func,
            searchFlagged: F().func,
            deleteMail: F().func,
            selectedFolderPath: F().func,
            folderDisplay: F().func,
            previewMail: F().func,
            exitPreview: F().func.isRequired,
            onSortChange: F().func,
            getEvents: F().func
        }
          , Ai = function(e) {
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
                t && _i(e, t)
            }(n, B.PureComponent);
            var t = wi(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    selectedListInTable: [],
                    displayConfirm: !1,
                    defaultSizeSortInTable: !1
                },
                r.onSelectChange = r.onSelectChange.bind(Di(r)),
                r.onDelete = r.onDelete.bind(Di(r)),
                r.showConfirmation = r.showConfirmation.bind(Di(r)),
                r.hideConfirmation = r.hideConfirmation.bind(Di(r)),
                r.onHandlePreview = r.onHandlePreview.bind(Di(r)),
                r.exitPreview = r.exitPreview.bind(Di(r)),
                r.handleSortChange = r.handleSortChange.bind(Di(r)),
                r.onExitSearchMode = r.onExitSearchMode.bind(Di(r)),
                r
            }
            return function(e, t, n) {
                t && Ci(e.prototype, t),
                n && Ci(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "onSelectChange",
                value: function(e) {
                    this.setState({
                        selectedListInTable: e
                    })
                }
            }, {
                key: "onHandlePreview",
                value: function(e) {
                    var t = e.uid
                      , n = e.folderPath;
                    (0,
                    this.props.previewMail)({
                        uid: t,
                        folderPath: n
                    })
                }
            }, {
                key: "onDelete",
                value: function() {
                    var e = this.props
                      , t = e.deleteMail
                      , n = e.paginationForCleanup.searchParams.virtualFolderId;
                    t({
                        selection: this.state.selectedListInTable,
                        virtualFolderId: n
                    }),
                    this.setState({
                        displayConfirm: !1
                    })
                }
            }, {
                key: "showConfirmation",
                value: function() {
                    this.setState({
                        displayConfirm: !0
                    })
                }
            }, {
                key: "onExitSearchMode",
                value: function() {
                    var e = this.props
                      , t = e.searchMail
                      , n = e.exitPreview;
                    "preview" == e.viewMode ? n() : (t(),
                    this.setState({
                        defaultSizeSortInTable: !0
                    }))
                }
            }, {
                key: "hideConfirmation",
                value: function() {
                    this.setState({
                        displayConfirm: !1
                    })
                }
            }, {
                key: "handleSortChange",
                value: function(e) {
                    var t = this.props.onSortChange;
                    this.setState({
                        defaultSizeSortInTable: !1
                    }),
                    t({
                        sort: e
                    })
                }
            }, {
                key: "exitPreview",
                value: function() {
                    var e = this.props.exitPreview;
                    e()
                }
            }, {
                key: "renderToolBar",
                value: function() {
                    var e = this.props
                      , t = e.viewMode
                      , n = e.searchMode
                      , r = e.isFetching
                      , a = e.folderData
                      , o = e.searchMail
                      , i = e.searchAttachment
                      , l = e.searchFlagged
                      , s = e.selectedFolderPath
                      , c = e.folderDisplay
                      , u = e.dateFormat
                      , f = this.state.selectedListInTable
                      , d = "preview" === t
                      , m = n && !r || d
                      , h = this.context.isRtl
                      , y = B.createElement(bt.Z, {
                        className: "cleanup-button-rtl",
                        onClick: this.onExitSearchMode,
                        disabled: !m
                    }, B.createElement(ft.Z, {
                        name: "exit"
                    }), (0,
                    G.t)("mail.search.EXIT_SEARCH"))
                      , b = B.createElement(bt.Z, {
                        className: "ow-manage-storage",
                        onClick: this.onExitSearchMode,
                        disabled: !m
                    }, B.createElement(ft.Z, {
                        name: "exit"
                    }), (0,
                    G.t)("mail.search.EXIT_SEARCH"))
                      , v = B.createElement("div", null, B.createElement(bt.Z, {
                        className: "cleanup-button-rtl",
                        onClick: this.showConfirmation,
                        disabled: 0 === f.length
                    }, B.createElement(ft.Z, {
                        name: "trash-mail"
                    }), (0,
                    G.t)("contacts.catalogView.DELETE")))
                      , g = B.createElement("div", null, B.createElement(bt.Z, {
                        onClick: this.showConfirmation,
                        disabled: 0 === f.length
                    }, B.createElement(ft.Z, {
                        name: "trash-mail"
                    }), (0,
                    G.t)("contacts.catalogView.DELETE")));
                    return B.createElement("div", {
                        className: "ow-settings-cleanup-toolbar"
                    }, B.createElement("div", {
                        className: "ow-settings-cleanup-operation"
                    }, h ? d ? y : B.createElement(Si.Z, {
                        to: "/mail",
                        location: location,
                        className: "cleanup-button-rtl"
                    }, B.createElement(Ta(), {
                        eventKey: "mail"
                    }, B.createElement(ft.Z, {
                        name: "exit"
                    }), B.createElement("fragment", {
                        className: "ow-message-cleanup-link"
                    }, (0,
                    G.t)("mail.search.EXIT_SEARCH")))) : d ? b : B.createElement(Si.Z, {
                        to: "/mail",
                        location: location,
                        className: "ow-manage-storage",
                        onKeyDown: function(e) {
                            e.key === p.BY.ENTERKEY && setTimeout(function() {
                                (0,
                                vt.kW)(".ow-message-cleanup-link")
                            }, 100)
                        }
                    }, B.createElement(Ta(), {
                        eventKey: "mail"
                    }, B.createElement(ft.Z, {
                        name: "exit"
                    }), B.createElement("fragment", {
                        className: "ow-message-cleanup-link"
                    }, (0,
                    G.t)("mail.search.EXIT_SEARCH")))), B.createElement(Do, {
                        searchMail: o,
                        searchAttachment: i,
                        searchFlagged: l,
                        folderData: a,
                        selectedFolderPath: s,
                        folderDisplay: c,
                        dateFormat: u
                    }), h ? v : g))
                }
            }, {
                key: "renderDetails",
                value: function() {
                    var e = this.props
                      , t = e.data
                      , n = e.viewMode
                      , r = e.searchMode
                      , a = e.isFetching
                      , o = e.paginationForCleanup
                      , i = e.folderData
                      , l = e.searchMail
                      , s = e.searchByPaginationForCleanup
                      , c = e.previewInfo
                      , u = e.getEvents
                      , f = e.location
                      , d = this.state
                      , p = d.displayConfirm
                      , m = d.defaultSizeSortInTable
                      , h = (c || {}).subject
                      , y = "preview" === n;
                    return B.createElement("div", {
                        className: "ow-settings-cleanup-wrapper"
                    }, B.createElement("div", {
                        className: "ow-settings-cleanup-list ".concat(y ? "ow-settings-cleanup-hidden" : "ow-settings-cleanup-show")
                    }, B.createElement(hi, {
                        searchMode: r,
                        searchMail: l,
                        data: t,
                        folderData: i,
                        isFetching: a,
                        location: f,
                        defaultSizeSortInTable: m,
                        searchByPaginationForCleanup: s,
                        paginationForCleanup: o,
                        onSortChange: this.handleSortChange,
                        onSelectChange: this.onSelectChange,
                        onHandlePreview: this.onHandlePreview
                    })), y && B.createElement("div", {
                        className: "ow-settings-message-cleanup-preview ".concat(y ? "ow-settings-cleanup-show" : "ow-settings-cleanup-hidden")
                    }, B.createElement(gi, {
                        detail: c,
                        isFetching: a,
                        exitPreview: this.exitPreview,
                        subject: h,
                        getEvents: u
                    })), p && B.createElement(mt.Z, {
                        show: p,
                        buttonConfig: ["yes", "no"],
                        title: (0,
                        G.t)("common.MESSAGE"),
                        message: (0,
                        G.t)("app.message.CONFIRM_MESSAGE_CLEANUP_DELETE"),
                        onYes: this.onDelete,
                        onNo: this.hideConfirmation,
                        onDismiss: this.hideConfirmation
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    return B.createElement(U.Z, {
                        className: "ow-settings-cleanup",
                        title: (0,
                        G.t)("settings.mail.MESSAGE_CLEANUP_TOOL"),
                        enableSave: !1,
                        enableCancel: !1
                    }, this.renderToolBar(), this.renderDetails())
                }
            }]),
            n
        }();
        Ai.contextTypes = {
            isRtl: F().bool
        },
        Ai.propTypes = Pi,
        Ai.defaultProps = {
            data: {
                rows: [],
                collapsing: !1,
                expanded: !1,
                itemTotalCount: 0,
                pinLen: 0,
                totalHeight: 0
            },
            isFetching: !1,
            folderData: [],
            previewInfo: {
                subject: ""
            },
            paginationForCleanup: {
                searchParams: {},
                offset: 0,
                totalCount: 0
            },
            searchByPaginationForCleanup: function() {},
            searchMail: function() {},
            searchAttachment: function() {},
            searchFlagged: function() {},
            deleteMail: function() {},
            selectedFolderPath: function() {},
            folderDisplay: function() {},
            previewMail: function() {},
            onSortChange: function() {},
            getEvents: function() {}
        };
        var Ni = Ai
          , Ri = n(12154)
          , Ii = n(79965)
          , Mi = n(98138)
          , Li = n(36003)
          , ji = n(23893);
        function Bi(e) {
            return function(e) {
                if (Array.isArray(e))
                    return ki(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return ki(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return ki(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ki(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var Fi = (0,
        a.$j)(function(e) {
            var t = (0,
            Mt.xC)(e)
              , n = (0,
            Mt.ku)(e)
              , r = t && t.path || n
              , a = (0,
            i.Ox)(e, !0)
              , o = (0,
            Ri.k$)(e)
              , l = [{
                name: (0,
                G.t)("mail.search.ALL_FOLDER"),
                path: ""
            }].concat(Bi((0,
            Mt.Gt)(e)));
            return {
                selectedInfo: {},
                data: (0,
                Mi.vZ)(e),
                viewMode: (0,
                Mi.TJ)(e),
                searchMode: (0,
                Mi.gj)(e),
                isFetching: (0,
                Mi.pT)(e),
                paginationForCleanup: (0,
                Mi.B$)(e),
                previewInfo: (0,
                Mi.O$)(e),
                folderData: l,
                selectedFolderPath: r,
                folderDisplay: function(t) {
                    var n = (0,
                    Mt.hD)(t)(e);
                    return n && (0,
                    G.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(n)) || t || (0,
                    G.t)("mail.search.ALL_FOLDER")
                },
                getEvents: function(t, n) {
                    var r = (0,
                    Li.wS)(e);
                    return (0,
                    ji.rj)(t, n, r)(e)
                },
                dateFormat: a,
                location: o
            }
        }, function(e) {
            return {
                searchMail: function(t) {
                    return e((0,
                    Ii.SC)(t))
                },
                senderSearch: function(t) {
                    var n = t.terms;
                    return e((0,
                    Ii.SC)(n))
                },
                searchByPaginationForCleanup: function(t) {
                    return e((0,
                    Ii.$Z)(t))
                },
                deleteMail: function(t) {
                    return e((0,
                    Ii.l2)(t))
                },
                searchAttachment: function(t) {
                    return e((0,
                    Ii.Fm)(t))
                },
                searchFlagged: function(t) {
                    return e((0,
                    Ii.do)(t))
                },
                previewMail: function(t) {
                    return e((0,
                    Ii.Sx)(t))
                },
                exitPreview: function() {
                    return e((0,
                    Ii.UD)())
                },
                onSortChange: function(t) {
                    return e((0,
                    Ii.oe)(t))
                }
            }
        })(Ni)
          , Ui = function(e) {
            return e.conLogin
        }
          , xi = n(88422)
          , Gi = n(72644)
          , Hi = (0,
        T.Z)("mail.loginHistory.enabled")
          , Ki = (0,
        T.Z)("common.concurrentLogin.enabled")
          , Zi = (0,
        a.$j)(function(e) {
            return {
                selectedSetting: (0,
                ue.Ci)(e),
                deviceList: (0,
                ue.PG)(e),
                loginHistoryEnabled: (0,
                ue.n8)(e),
                conList: Ui(e),
                accountInfo: (0,
                s.hL)(e) || {},
                getUserProfile: (0,
                s.zx)(e),
                getAuthDetails: (0,
                xi._)(e)
            }
        }, function(e) {
            return {
                onLoad: function() {
                    K.UhU.isDesktop && Hi && !Ki ? e((0,
                    We.SR)()) : K.UhU.isDesktop && !Hi && Ki ? e((0,
                    Gi.eO)()) : K.UhU.isDesktop && Hi && Ki ? (e((0,
                    We.SR)()),
                    e((0,
                    Gi.eO)())) : !K.UhU.isDesktop && Ki && e((0,
                    Gi.eO)())
                }
            }
        })
          , Yi = n(29829)
          , Vi = n(8764)
          , Wi = n.n(Vi)
          , Ji = n(98401)
          , qi = n(98960)
          , zi = n(29610)
          , Qi = n(78350);
        function Xi(e) {
            "@babel/helpers - typeof";
            return (Xi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function $i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, el(r.key), r)
            }
        }
        function el(e) {
            var t = function(e, t) {
                if ("object" !== Xi(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Xi(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Xi(t) ? t : String(t)
        }
        function tl(e, t) {
            return (tl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function nl(e) {
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
                var n, r = al(e);
                if (t) {
                    var a = al(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Xi(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return rl(e)
                }(this, n)
            }
        }
        function rl(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function al(e) {
            return (al = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ol = function(e) {
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
                t && tl(e, t)
            }(n, B.PureComponent);
            var t = nl(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    SubmitButtonState: !0,
                    showCancelAlert: !1,
                    showSubmitAlert: !1,
                    sessionsToBeDeleted: [],
                    passcode: "",
                    isFormChanged: !1,
                    isFormValid: !1,
                    showcurrentSessionDeletionPopup: !1,
                    displaySpinner: !0
                },
                r.handleFormChange = r.handleFormChange.bind(rl(r)),
                r.handleClose = r.handleClose.bind(rl(r)),
                r.handleHideAlert = r.handleHideAlert.bind(rl(r)),
                r.fireLogoutEvent = r.fireLogoutEvent.bind(rl(r)),
                r.handleDeleteDevice = r.handleDeleteDevice.bind(rl(r)),
                r.handleSubmit = r.handleSubmit.bind(rl(r)),
                r.handleFormInvalid = r.handleFormInvalid.bind(rl(r)),
                r.handleFormValid = r.handleFormValid.bind(rl(r)),
                r.handleHideSubmitAlert = r.handleHideSubmitAlert.bind(rl(r)),
                r.handleSessionDeletion = r.handleSessionDeletion.bind(rl(r)),
                r.removeDeviceFromState = r.removeDeviceFromState.bind(rl(r)),
                r.handleCurrentSessionDeltionAlert = r.handleCurrentSessionDeltionAlert.bind(rl(r)),
                r.handleCurrentUserDeletionAndLogout = r.handleCurrentUserDeletionAndLogout.bind(rl(r)),
                r.handleRouting = r.handleRouting.bind(rl(r)),
                r
            }
            return function(e, t, n) {
                t && $i(e.prototype, t),
                n && $i(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        displaySpinner: !0
                    })
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.setState({
                        displaySpinner: !1,
                        showSubmitAlert: e.data.showSubmitAlert
                    })
                }
            }, {
                key: "handleFormValid",
                value: function() {
                    this.setState({
                        isFormValid: !0
                    })
                }
            }, {
                key: "handleFormInvalid",
                value: function() {
                    this.setState({
                        isFormValid: !1
                    })
                }
            }, {
                key: "handleFormChange",
                value: function(e) {
                    this.setState({
                        isFormChanged: e
                    })
                }
            }, {
                key: "handleSubmit",
                value: function(e, t) {
                    this.handleDeleteDevice(e, t),
                    this.setState({
                        showSubmitAlert: !0
                    })
                }
            }, {
                key: "handleClose",
                value: function() {
                    (0,
                    T.Z)("common.concurrentLogin.securityRedirectPopup") ? this.setState({
                        showCancelAlert: !0
                    }) : this.props.handleMailRouting && this.props.handleMailRouting()
                }
            }, {
                key: "handleHideSubmitAlert",
                value: function() {
                    this.setState({
                        showSubmitAlert: !1,
                        isFormChanged: !1
                    })
                }
            }, {
                key: "handleHideAlert",
                value: function() {
                    this.setState({
                        showCancelAlert: !1
                    })
                }
            }, {
                key: "handleCurrentSessionDeltionAlert",
                value: function() {
                    this.setState({
                        showcurrentSessionDeletionPopup: !1
                    })
                }
            }, {
                key: "fireLogoutEvent",
                value: function() {
                    if ((0,
                    zi.j)("CCL", "ccl_window_close_and_logout", {
                        record: ["close_window", !0]
                    }),
                    window.uxLocalStorage && window.uxLocalStorage.setItem("concurrentPopupShow", !1),
                    K.UhU.isDesktop) {
                        var e = document.createEvent("CustomEvent");
                        e.initCustomEvent("cancellogOut", !1, !1, {}),
                        window.dispatchEvent(e)
                    } else
                        this.context.onExit && this.context.onExit(),
                        this.props.logout && this.props.logout()
                }
            }, {
                key: "removeDeviceFromState",
                value: function(e, t, n) {
                    for (var r = e.length; r--; )
                        e[r] && e[r].hasOwnProperty(t) && arguments.length > 2 && e[r][t] === n && e.splice(r, 1);
                    return e
                }
            }, {
                key: "handleDeleteDevice",
                value: function(e, t) {
                    if (document.getElementById(t.fingerprint).innerHTML === (0,
                    G.t)("common.concurrentLogin.REVOKE_DEVICE")) {
                        var n = this.removeDeviceFromState(this.state.sessionsToBeDeleted, "fingerprint", t.fingerprint);
                        this.setState({
                            sessionsToBeDeleted: n
                        })
                    } else {
                        0 === this.state.sessionsToBeDeleted.filter(function(e) {
                            return e.fingerprint === t.fingerprint
                        }).length && this.state.sessionsToBeDeleted.push(t)
                    }
                    0 === this.state.sessionsToBeDeleted.length ? this.setState({
                        SubmitButtonState: !0
                    }) : this.setState({
                        SubmitButtonState: !1
                    })
                }
            }, {
                key: "deleteListFromUI",
                value: function() {
                    this.state.sessionsToBeDeleted.pop(),
                    0 === this.state.sessionsToBeDeleted.length ? this.setState({
                        SubmitButtonState: !0
                    }) : this.setState({
                        SubmitButtonState: !1
                    })
                }
            }, {
                key: "deleteSessionFromStore",
                value: function() {
                    return function(e, t) {
                        return e.filter(function(e) {
                            var n = JSON.stringify(e);
                            return !t.find(function(e) {
                                return n === JSON.stringify(e)
                            })
                        })
                    }(this.props.data.data, this.state.sessionsToBeDeleted)
                }
            }, {
                key: "handleRouting",
                value: function(e) {
                    if (e === p.I5.DELETION_SUCCESS)
                        if (0 !== this.state.sessionsToBeDeleted.filter(function(e) {
                            return e.currentDevice && !0 === e.currentDevice
                        }).length)
                            this.fireLogoutEvent && this.fireLogoutEvent();
                        else {
                            this.deleteListFromUI();
                            for (var t = document.getElementsByClassName("ow-con-login-action-revoke btn btn-default").length - 1; t >= 0; t--)
                                document.getElementsByClassName("ow-con-login-action-revoke btn btn-default").length >= 0 && (document.getElementsByClassName("ow-con-login-action-revoke btn btn-default")[t].className = "ow-con-login-action-delete btn btn-default");
                            for (var n = document.getElementsByClassName("ow-con-login-action-delete btn btn-default").length - 1; n >= 0; n--)
                                document.getElementsByClassName("ow-con-login-action-delete btn btn-default").length >= 0 && (document.getElementsByClassName("ow-con-login-action-delete btn btn-default")[n].innerHTML = (0,
                                G.t)("common.concurrentLogin.REMOVE_DEVICE"));
                            this.props.handleMailRouting && this.props.handleMailRouting()
                        }
                    else
                        p.I5.AUTHENTICATION_FAILURE
                }
            }, {
                key: "handleCurrentUserDeletionAndLogout",
                value: function() {
                    var e = this;
                    this.setState({
                        showcurrentSessionDeletionPopup: !1,
                        showSubmitAlert: !1
                    });
                    var t = document.getElementById("ow-con-login-password").value
                      , n = this.deleteSessionFromStore();
                    this.setState({
                        passcode: t
                    }, function() {
                        e.props.conLoginSessionDelete && e.props.conLoginSessionDelete(e.state.sessionsToBeDeleted, e.state.passcode, e.handleRouting, n)
                    })
                }
            }, {
                key: "handleSessionDeletion",
                value: function() {
                    var e = this;
                    if (0 !== this.state.sessionsToBeDeleted.filter(function(e) {
                        return e.currentDevice && !0 === e.currentDevice
                    }).length)
                        this.setState({
                            showcurrentSessionDeletionPopup: !0
                        }),
                        this.handleCurrentUserDeletionAndLogout();
                    else {
                        var t = document.getElementById("ow-con-login-password").value
                          , n = this.deleteSessionFromStore();
                        this.setState({
                            passcode: t
                        }, function() {
                            e.setState({
                                showSubmitAlert: !1
                            }),
                            e.props.conLoginSessionDelete && e.props.conLoginSessionDelete(e.state.sessionsToBeDeleted, e.state.passcode, e.handleRouting, n)
                        })
                    }
                }
            }, {
                key: "renderColumn",
                value: function(e) {
                    var t = this
                      , n = e && e.data && 0 === e.data.length;
                    return this.state.displaySpinner && n ? B.createElement(yt.Z, {
                        className: "ow-adv-spinner"
                    }) : e.data.map(function(e, n) {
                        return B.createElement("tr", {
                            className: "ow-con-login-tr-".concat(n),
                            tabIndex: 0
                        }, B.createElement("td", null, B.createElement("div", {
                            className: "ow-con-login-device-name",
                            name: e.platform
                        }, e.platform ? e.platform : (0,
                        G.t)("rtc.common.UNKNOWN"))), B.createElement("td", null, B.createElement("div", {
                            className: "ow-con-login-time",
                            name: e.timestamp
                        }, e.timestamp ? "".concat(window.TimeUtil.getShortDate(e.timestamp), " ").concat(window.TimeUtil.getShortTime(e.timestamp)) : (0,
                        G.t)("rtc.common.UNKNOWN"))), B.createElement("td", null, B.createElement("div", {
                            className: "ow-con-login-geo-location",
                            name: e.isoCode
                        }, e.isoCode ? Yi.rZ(e.isoCode.split("-")[0]) : (0,
                        G.t)("rtc.common.UNKNOWN"))), B.createElement("td", null, 0 !== Object.keys(e).length && B.createElement(Wi(), {
                            className: "ow-con-login-action-delete",
                            onClick: function(n) {
                                return t.handleSubmit(n, e)
                            },
                            id: e.fingerprint,
                            disabled: !1,
                            tabIndex: 0,
                            role: p.HB.BUTTON,
                            "aria-label": (0,
                            G.t)("common.concurrentLogin.REMOVE_DEVICE"),
                            onKeyDown: function(e) {
                                return e.key === p.BY.ENTERKEY && (0,
                                vt.Mb)()
                            }
                        }, (0,
                        G.t)("common.concurrentLogin.REMOVE_DEVICE"))))
                    })
                }
            }, {
                key: "renderPasswordPopup",
                value: function(e, t, n) {
                    var r = this;
                    return B.createElement(Ji.Z, {
                        show: this.state.showSubmitAlert,
                        dialogClassName: "ow-con-login-remove-device-modal",
                        onHide: this.handleHideSubmitAlert,
                        onKeyDown: function(e) {
                            e.key === p.BY.ENTERKEY && (r.handleHideSubmitAlert(),
                            (0,
                            vt.kW)(".ow-con-login-action-delete"))
                        }
                    }, B.createElement(Ji.Z.Header, {
                        closeButton: !0
                    }, B.createElement(Ji.Z.Title, {
                        id: "ow-con-login-remove-device-modal-dialog"
                    }, (0,
                    G.t)("common.concurrentLogin.REMOVE_DEVICE"))), B.createElement(Ji.Z.Body, null, B.createElement("p", null, (0,
                    G.t)("common.concurrentLogin.POPUP_MESSAGE")), B.createElement(x.l0, {
                        className: "ow-con-login-password",
                        onChange: this.handleFormChange,
                        onValid: this.handleFormValid,
                        onInvalid: this.handleFormInvalid,
                        onValidSubmit: this.handleSessionDeletion,
                        ref: function(e) {
                            r.form = e
                        }
                    }, B.createElement(x.UP, {
                        id: "ow-con-login-password",
                        type: "password",
                        label: (0,
                        G.t)("common.concurrentLogin.PASSWORD"),
                        name: "password",
                        value: n && n.name || "",
                        required: !0,
                        autoFocus: !0,
                        "aria-required": !0
                    }))), B.createElement(Ji.Z.Footer, null, B.createElement(Wi(), {
                        className: "ow-con-login-password-saveBtn ow-button-primary",
                        onClick: this.handleSessionDeletion,
                        onKeyDown: function(e) {
                            return e.key === p.BY.ENTERKEY && r.handleSessionDeletion()
                        },
                        disabled: !(e && t),
                        role: p.HB.BUTTON,
                        "aria-label": (0,
                        G.t)("common.SUBMIT"),
                        "aria-disabled": !(e && t)
                    }, (0,
                    G.t)("common.SUBMIT")), B.createElement(Wi(), {
                        className: "ow-con-login-password-cancelBtn",
                        onClick: this.handleHideSubmitAlert,
                        role: p.HB.BUTTON,
                        "aria-label": (0,
                        G.t)("common.CANCEL"),
                        onKeyDown: function(e) {
                            e.key === p.BY.ENTERKEY && (r.handleHideSubmitAlert(),
                            (0,
                            vt.kW)(".ow-con-login-action-delete"))
                        }
                    }, (0,
                    G.t)("common.CANCEL"))))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.data
                      , n = e.editingItem
                      , r = e.accountInfo
                      , a = this.state
                      , o = a.isFormChanged
                      , i = a.isFormValid;
                    return (0,
                    zi.j)("CCL", "ccl_action_window_shown", {
                        record: [r && r.email, "window_shown", !0]
                    }),
                    B.createElement("div", {
                        className: "ow-con-login"
                    }, B.createElement("div", null, B.createElement("p", {
                        className: "ow-con-login-recent-device"
                    }, (0,
                    G.t)("common.concurrentLogin.RECENT_DEVICE")), B.createElement(B.Fragment, null, B.createElement("div", {
                        className: "ow-con-login-content"
                    }, B.createElement("table", {
                        className: "ow-con-login-table"
                    }, B.createElement("thead", null, B.createElement("tr", null, B.createElement("th", null, B.createElement("div", {
                        className: "ow-device"
                    }, (0,
                    G.t)("common.concurrentLogin.DEVICE_NAME"))), B.createElement("th", null, B.createElement("div", {
                        className: "ow-time"
                    }, (0,
                    G.t)("common.concurrentLogin.TIME"))), B.createElement("th", null, B.createElement("div", {
                        className: "ow-geo-location"
                    }, (0,
                    G.t)("common.concurrentLogin.GEO_LOCATION"))), B.createElement("th", null, B.createElement("div", {
                        className: "ow-action"
                    }, (0,
                    G.t)("common.concurrentLogin.ACTION"))))), B.createElement("tbody", null, this.renderColumn(t))))), this.state.showSubmitAlert && this.renderPasswordPopup(o, i, n)))
                }
            }]),
            n
        }();
        ol.contextTypes = {
            isRtl: k.PropTypes.bool
        },
        ol.defaultProps = {
            data: "",
            accountInfo: {},
            editingItem: {},
            conLoginSessionDelete: function() {},
            handleMailRouting: function() {}
        },
        ol.contextTypes = {
            onExit: k.PropTypes.func
        },
        ol.propTypes = {
            data: k.PropTypes.string,
            accountInfo: {},
            editingItem: (0,
            k.shape)({
                id: k.string,
                name: k.string
            }),
            conLoginSessionDelete: k.PropTypes.func,
            logout: k.PropTypes.func.isRequired,
            handleMailRouting: k.PropTypes.func
        };
        var il = (0,
        a.$j)(function(e) {
            return {
                data: Ui(e),
                accountInfo: (0,
                Qi.hL)(e) || {}
            }
        }, function(e) {
            return {
                logout: function() {
                    return e((0,
                    qi.logout)())
                },
                loginByToken: qi.loginByToken,
                conLoginSessionDelete: function(t, n, r, a) {
                    return e((0,
                    Gi.N6)(t, n, r, a))
                }
            }
        })(ol)
          , ll = n(75904)
          , sl = n.n(ll)
          , cl = n(78355)
          , ul = n.n(cl);
        function fl(e) {
            "@babel/helpers - typeof";
            return (fl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var dl = ["data", "accountInfo", "loginHistoryEnabled", "getAuthDetails"]
          , pl = ["enabled", "accountInfo", "loginHistoryEnabled"];
        function ml() {
            return (ml = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function hl(e, t) {
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
        function yl(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, bl(r.key), r)
            }
        }
        function bl(e) {
            var t = function(e, t) {
                if ("object" !== fl(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== fl(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === fl(t) ? t : String(t)
        }
        function vl(e, t) {
            return (vl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function gl(e) {
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
                    var a = Sl(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === fl(t) || "function" == typeof t))
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
        function Sl(e) {
            return (Sl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var El = K.UhU.isMobile
          , Cl = {
            enabled: F().bool,
            onLoad: F().func
        }
          , Ol = function(e) {
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
                t && vl(e, t)
            }(n, B.PureComponent);
            var t = gl(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).props.onLoad(),
                r.state = {
                    displaySpinner: !0
                },
                r
            }
            return function(e, t, n) {
                t && yl(e.prototype, t),
                n && yl(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        displaySpinner: !0
                    })
                }
            }, {
                key: "componentWillReceiveProps",
                value: function() {
                    this.setState({
                        displaySpinner: !1
                    })
                }
            }, {
                key: "renderDeviceList",
                value: function() {
                    var e = this.props.deviceList.devices
                      , t = e && 0 === e.length;
                    return this.state.displaySpinner && t ? B.createElement(yt.Z, {
                        className: "ow-adv-spinner"
                    }) : B.createElement("div", {
                        className: "ow-settings-detail ow-settings-security-header ow-setting-last-login",
                        tabIndex: 0
                    }, B.createElement("div", {
                        id: "ow-settings-security"
                    }, B.createElement("div", {
                        class: "ow-settings-security-content"
                    }, B.createElement("div", {
                        class: "ow-settings-security-device-sub-head"
                    }, (0,
                    K.t)("settings.MODULE_DESC.RECENT_HISTORY")), B.createElement("div", {
                        class: "ow-device "
                    }, e.map(function(e) {
                        return B.createElement("div", {
                            class: "ow-setting-security-device-list",
                            tabIndex: 0
                        }, B.createElement("div", {
                            class: "ow-device-name"
                        }, e.platform ? e.platform : (0,
                        K.t)("rtc.common.UNKNOWN")), B.createElement("div", null, (0,
                        K.t)("settings.MODULE_DESC.MODEL"), " : ", e.model ? e.model : (0,
                        K.t)("rtc.common.UNKNOWN")), B.createElement("div", null, (0,
                        K.t)("settings.MODULE_DESC.PROTOCOL"), " : ", e.protocol ? e.protocol : (0,
                        K.t)("rtc.common.UNKNOWN")), B.createElement("div", null, (0,
                        K.t)("settings.MODULE_DESC.BROWSER"), " : ", e.userAgent ? e.userAgent : (0,
                        K.t)("rtc.common.UNKNOWN")), B.createElement("div", null, (0,
                        K.t)("settings.MODULE_DESC.IP"), " : ", e.ipAddress ? e.ipAddress : (0,
                        K.t)("rtc.common.UNKNOWN")), B.createElement("div", null, e.isoCode ? Yi.rZ(e.isoCode.split("-")[0]) : (0,
                        K.t)("rtc.common.UNKNOWN"), e.timestamp ? ", ".concat(window.TimeUtil.getShortDate(e.timestamp), " ").concat(TimeUtil.getTimeParseInt24to12(window.TimeUtil.getShortTime(e.timestamp))) : ""))
                    })))))
                }
            }, {
                key: "renderTabStructure",
                value: function() {
                    var e = this.props
                      , t = (e.data,
                    e.accountInfo)
                      , n = e.loginHistoryEnabled
                      , r = (e.getAuthDetails,
                    hl(e, dl),
                    (0,
                    T.Z)("common.concurrentLogin.enabled"))
                      , a = (0,
                    T.Z)("mail.loginHistory.enabled")
                      , o = r && !a ? 2 : 1
                      , i = a && n && n.enabled;
                    return i ? (0,
                    zi.j)("DLH", "show_dlh_info", {
                        record: [t && t.email, "show_dlh_info", !0]
                    }) : (0,
                    zi.j)("DLH", "show_dlh_info", {
                        record: [t && t.email, "show_dlh_info", !1]
                    }),
                    B.createElement("div", {
                        className: "ow-settingsDetails-sub-header"
                    }, B.createElement(ul(), {
                        defaultActiveKey: o
                    }, a ? B.createElement(sl(), {
                        eventKey: 1,
                        title: (0,
                        K.t)("settings.MODULE_DESC.DEVICES")
                    }, i ? this.renderDeviceList() : "") : "", r ? B.createElement(sl(), {
                        eventKey: 2,
                        title: (0,
                        K.t)("settings.MODULE_DESC.CONCURRENT_LOGIN")
                    }, B.createElement(il, null)) : ""))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.enabled,
                    e.accountInfo,
                    e.loginHistoryEnabled,
                    hl(e, pl));
                    return B.createElement(U.Z, ml({
                        className: "ow-settingsLastLoginDetails"
                    }, t, {
                        enableSave: !1,
                        enableCancel: !1,
                        enableBack: El,
                        title: (0,
                        K.t)("settings.MODULE_DESC.LAST_LOGIN_DETAILS"),
                        desc: (0,
                        K.t)("settings.MODULE_DESC.SECURITY_SUB_HEAD")
                    }), this.renderTabStructure())
                }
            }]),
            n
        }();
        Ol.propTypes = Cl,
        Ol.defaultProps = {
            enabled: !1,
            onLoad: function() {}
        };
        var _l = Ol;
        function wl(e) {
            "@babel/helpers - typeof";
            return (wl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Dl() {
            return (Dl = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Tl(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Pl(r.key), r)
            }
        }
        function Pl(e) {
            var t = function(e, t) {
                if ("object" !== wl(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== wl(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === wl(t) ? t : String(t)
        }
        function Al(e, t) {
            return (Al = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Nl(e) {
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
                var n, r = Rl(e);
                if (t) {
                    var a = Rl(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === wl(t) || "function" == typeof t))
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
        function Rl(e) {
            return (Rl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Il = K.UhU.isMobile
          , Ml = K.UhU.isTablet
          , Ll = function(e) {
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
                t && Al(e, t)
            }(n, B.PureComponent);
            var t = Nl(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).props.onLoad(),
                r
            }
            return function(e, t, n) {
                t && Tl(e.prototype, t),
                n && Tl(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e = Object.assign({}, (function(e) {
                        if (null == e)
                            throw new TypeError("Cannot destructure " + e)
                    }(this.props),
                    this.props));
                    return B.createElement(U.Z, Dl({
                        className: "ow-settings-ConLastLoginDetails"
                    }, e, {
                        enableSave: !1,
                        enableCancel: !1,
                        enableBack: Il || Ml,
                        title: (0,
                        K.t)("settings.MODULE_DESC.LAST_LOGIN_DETAILS"),
                        desc: (0,
                        K.t)("settings.MODULE_DESC.SECURITY_SUB_HEAD")
                    }), B.createElement("div", {
                        className: "ow-settingsDetails-sub-header"
                    }, B.createElement(il, null)))
                }
            }]),
            n
        }()
          , jl = {
            ProfileCntr: E,
            LanguageTimeDateCntr: j,
            PasswordCntr: oe,
            MailGeneralCntr: le,
            MailAliasesCntr: Se,
            AutoReplyCntr: tt,
            MailRulesCntr: Ht,
            MailSignaturesCntr: on,
            ContactsCntr: Cn,
            AutoForwardCntr: ut,
            CloudCntr: Un,
            SafeSendersCntr: pr,
            BlockedSendersCntr: kr,
            BlockImageCntr: Vr,
            AccountsCntr: Ea,
            CalendarPreferenceCntr: wa,
            MessageCleanupCntr: Fi,
            LastLoginDetailsCntr: K.UhU.isDesktop ? Zi(_l) : Zi(Ll)
        }
    },
    95159: function(e) {
        "use strict";
        e.exports = JSON.parse('["AF","AX","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BQ","BA","BW","BV","BR","IO","BN","BG","BF","BI","CV","KH","CM","CA","KY","CF","TD","CL","CN","CX","CC","CO","KM","CD","CG","CK","CR","CI","HR","CU","CW","CY","CZ","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","SZ","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","NC","NZ","NI","NE","NG","NU","NF","MK","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RW","BL","SH","KN","LC","MF","PM","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","GS","SS","ES","LK","SD","SR","SJ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","UM","US","UY","UZ","VU","VE","VN","VG","VI","WF","EH","YE","ZM","ZW"]')
    },
    47491: function(e) {
        "use strict";
        e.exports = JSON.parse('{"AF":"AFG","AX":"ALA","AL":"ALB","DZ":"DZA","AS":"ASM","AD":"AND","AO":"AGO","AI":"AIA","AQ":"ATA","AG":"ATG","AR":"ARG","AM":"ARM","AW":"ABW","AU":"AUS","AT":"AUT","AZ":"AZE","BS":"BHS","BH":"BHR","BD":"BGD","BB":"BRB","BY":"BLR","BE":"BEL","BZ":"BLZ","BJ":"BEN","BM":"BMU","BT":"BTN","BO":"BOL","BQ":"BES","BA":"BIH","BW":"BWA","BV":"BVT","BR":"BRA","IO":"IOT","BN":"BRN","BG":"BGR","BF":"BFA","BI":"BDI","CV":"CPV","KH":"KHM","CM":"CMR","CA":"CAN","KY":"CYM","CF":"CAF","TD":"TCD","CL":"CHL","CN":"CHN","CX":"CXR","CC":"CCK","CO":"COL","KM":"COM","CD":"COD","CG":"COG","CK":"COK","CR":"CRI","CI":"CIV","HR":"HRV","CU":"CUB","CW":"CUW","CY":"CYP","CZ":"CZE","DK":"DNK","DJ":"DJI","DM":"DMA","DO":"DOM","EC":"ECU","EG":"EGY","SV":"SLV","GQ":"GNQ","ER":"ERI","EE":"EST","SZ":"SWZ","ET":"ETH","FK":"FLK","FO":"FRO","FJ":"FJI","FI":"FIN","FR":"FRA","GF":"GUF","PF":"PYF","TF":"ATF","GA":"GAB","GM":"GMB","GE":"GEO","DE":"DEU","GH":"GHA","GI":"GIB","GR":"GRC","GL":"GRL","GD":"GRD","GP":"GLP","GU":"GUM","GT":"GTM","GG":"GGY","GN":"GIN","GW":"GNB","GY":"GUY","HT":"HTI","HM":"HMD","VA":"VAT","HN":"HND","HK":"HKG","HU":"HUN","IS":"ISL","IN":"IND","ID":"IDN","IR":"IRN","IQ":"IRQ","IE":"IRL","IM":"IMN","IL":"ISR","IT":"ITA","JM":"JAM","JP":"JPN","JE":"JEY","JO":"JOR","KZ":"KAZ","KE":"KEN","KI":"KIR","KP":"PRK","KR":"KOR","KW":"KWT","KG":"KGZ","LA":"LAO","LV":"LVA","LB":"LBN","LS":"LSO","LR":"LBR","LY":"LBY","LI":"LIE","LT":"LTU","LU":"LUX","MO":"MAC","MG":"MDG","MW":"MWI","MY":"MYS","MV":"MDV","ML":"MLI","MT":"MLT","MH":"MHL","MQ":"MTQ","MR":"MRT","MU":"MUS","YT":"MYT","MX":"MEX","FM":"FSM","MD":"MDA","MC":"MCO","MN":"MNG","ME":"MNE","MS":"MSR","MA":"MAR","MZ":"MOZ","MM":"MMR","NA":"NAM","NR":"NRU","NP":"NPL","NL":"NLD","NC":"NCL","NZ":"NZL","NI":"NIC","NE":"NER","NG":"NGA","NU":"NIU","NF":"NFK","MK":"MKD","MP":"MNP","NO":"NOR","OM":"OMN","PK":"PAK","PW":"PLW","PS":"PSE","PA":"PAN","PG":"PNG","PY":"PRY","PE":"PER","PH":"PHL","PN":"PCN","PL":"POL","PT":"PRT","PR":"PRI","QA":"QAT","RE":"REU","RO":"ROU","RU":"RUS","RW":"RWA","BL":"BLM","SH":"SHN","KN":"KNA","LC":"LCA","MF":"MAF","PM":"SPM","VC":"VCT","WS":"WSM","SM":"SMR","ST":"STP","SA":"SAU","SN":"SEN","RS":"SRB","SC":"SYC","SL":"SLE","SG":"SGP","SX":"SXM","SK":"SVK","SI":"SVN","SB":"SLB","SO":"SOM","ZA":"ZAF","GS":"SGS","SS":"SSD","ES":"ESP","LK":"LKA","SD":"SDN","SR":"SUR","SJ":"SJM","SE":"SWE","CH":"CHE","SY":"SYR","TW":"TWN","TJ":"TJK","TZ":"TZA","TH":"THA","TL":"TLS","TG":"TGO","TK":"TKL","TO":"TON","TT":"TTO","TN":"TUN","TR":"TUR","TM":"TKM","TC":"TCA","TV":"TUV","UG":"UGA","UA":"UKR","AE":"ARE","GB":"GBR","UM":"UMI","US":"USA","UY":"URY","UZ":"UZB","VU":"VUT","VE":"VEN","VN":"VNM","VG":"VGB","VI":"VIR","WF":"WLF","EH":"ESH","YE":"YEM","ZM":"ZMB","ZW":"ZWE"}')
    },
    89140: function(e) {
        "use strict";
        e.exports = JSON.parse('{"AF":"Afghanistan","AX":"Åland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia (Plurinational State of)","BQ":"Bonaire, Sint Eustatius and Saba","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","CV":"Cabo Verde","KH":"Cambodia","CM":"Cameroon","CA":"Canada","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CD":"Congo (the Democratic Republic of the)","CG":"Congo","CK":"Cook Islands","CR":"Costa Rica","CI":"Côte d\'Ivoire","HR":"Croatia","CU":"Cuba","CW":"Curaçao","CY":"Cyprus","CZ":"Czechia","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","SZ":"Eswatini","ET":"Ethiopia","FK":"Falkland Islands [Malvinas]","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard Island and McDonald Islands","VA":"Holy See","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran (Islamic Republic of)","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"Korea (the Democratic People\'s Republic of)","KR":"Korea (the Republic of)","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\'s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia (Federated States of)","MD":"Moldova (the Republic of)","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MK":"North Macedonia","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestine, State of","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Réunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","BL":"Saint Barthélemy","SH":"Saint Helena, Ascension and Tristan da Cunha","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","MF":"Saint Martin (French part)","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten (Dutch part)","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan (Province of China)","TJ":"Tajikistan","TZ":"Tanzania, the United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom of Great Britain and Northern Ireland","UM":"United States Minor Outlying Islands","US":"United States of America","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela (Bolivarian Republic of)","VN":"Viet Nam","VG":"Virgin Islands (British)","VI":"Virgin Islands (U.S.)","WF":"Wallis and Futuna","EH":"Western Sahara*","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"}')
    },
    89642: function(e) {
        "use strict";
        e.exports = JSON.parse('["AFG","ALA","ALB","DZA","ASM","AND","AGO","AIA","ATA","ATG","ARG","ARM","ABW","AUS","AUT","AZE","BHS","BHR","BGD","BRB","BLR","BEL","BLZ","BEN","BMU","BTN","BOL","BES","BIH","BWA","BVT","BRA","IOT","BRN","BGR","BFA","BDI","CPV","KHM","CMR","CAN","CYM","CAF","TCD","CHL","CHN","CXR","CCK","COL","COM","COD","COG","COK","CRI","CIV","HRV","CUB","CUW","CYP","CZE","DNK","DJI","DMA","DOM","ECU","EGY","SLV","GNQ","ERI","EST","SWZ","ETH","FLK","FRO","FJI","FIN","FRA","GUF","PYF","ATF","GAB","GMB","GEO","DEU","GHA","GIB","GRC","GRL","GRD","GLP","GUM","GTM","GGY","GIN","GNB","GUY","HTI","HMD","VAT","HND","HKG","HUN","ISL","IND","IDN","IRN","IRQ","IRL","IMN","ISR","ITA","JAM","JPN","JEY","JOR","KAZ","KEN","KIR","PRK","KOR","KWT","KGZ","LAO","LVA","LBN","LSO","LBR","LBY","LIE","LTU","LUX","MAC","MDG","MWI","MYS","MDV","MLI","MLT","MHL","MTQ","MRT","MUS","MYT","MEX","FSM","MDA","MCO","MNG","MNE","MSR","MAR","MOZ","MMR","NAM","NRU","NPL","NLD","NCL","NZL","NIC","NER","NGA","NIU","NFK","MKD","MNP","NOR","OMN","PAK","PLW","PSE","PAN","PNG","PRY","PER","PHL","PCN","POL","PRT","PRI","QAT","REU","ROU","RUS","RWA","BLM","SHN","KNA","LCA","MAF","SPM","VCT","WSM","SMR","STP","SAU","SEN","SRB","SYC","SLE","SGP","SXM","SVK","SVN","SLB","SOM","ZAF","SGS","SSD","ESP","LKA","SDN","SUR","SJM","SWE","CHE","SYR","TWN","TJK","TZA","THA","TLS","TGO","TKL","TON","TTO","TUN","TUR","TKM","TCA","TUV","UGA","UKR","ARE","GBR","UMI","USA","URY","UZB","VUT","VEN","VNM","VGB","VIR","WLF","ESH","YEM","ZMB","ZWE"]')
    },
    52576: function(e) {
        "use strict";
        e.exports = JSON.parse('{"AFG":"AF","ALA":"AX","ALB":"AL","DZA":"DZ","ASM":"AS","AND":"AD","AGO":"AO","AIA":"AI","ATA":"AQ","ATG":"AG","ARG":"AR","ARM":"AM","ABW":"AW","AUS":"AU","AUT":"AT","AZE":"AZ","BHS":"BS","BHR":"BH","BGD":"BD","BRB":"BB","BLR":"BY","BEL":"BE","BLZ":"BZ","BEN":"BJ","BMU":"BM","BTN":"BT","BOL":"BO","BES":"BQ","BIH":"BA","BWA":"BW","BVT":"BV","BRA":"BR","IOT":"IO","BRN":"BN","BGR":"BG","BFA":"BF","BDI":"BI","CPV":"CV","KHM":"KH","CMR":"CM","CAN":"CA","CYM":"KY","CAF":"CF","TCD":"TD","CHL":"CL","CHN":"CN","CXR":"CX","CCK":"CC","COL":"CO","COM":"KM","COD":"CD","COG":"CG","COK":"CK","CRI":"CR","CIV":"CI","HRV":"HR","CUB":"CU","CUW":"CW","CYP":"CY","CZE":"CZ","DNK":"DK","DJI":"DJ","DMA":"DM","DOM":"DO","ECU":"EC","EGY":"EG","SLV":"SV","GNQ":"GQ","ERI":"ER","EST":"EE","SWZ":"SZ","ETH":"ET","FLK":"FK","FRO":"FO","FJI":"FJ","FIN":"FI","FRA":"FR","GUF":"GF","PYF":"PF","ATF":"TF","GAB":"GA","GMB":"GM","GEO":"GE","DEU":"DE","GHA":"GH","GIB":"GI","GRC":"GR","GRL":"GL","GRD":"GD","GLP":"GP","GUM":"GU","GTM":"GT","GGY":"GG","GIN":"GN","GNB":"GW","GUY":"GY","HTI":"HT","HMD":"HM","VAT":"VA","HND":"HN","HKG":"HK","HUN":"HU","ISL":"IS","IND":"IN","IDN":"ID","IRN":"IR","IRQ":"IQ","IRL":"IE","IMN":"IM","ISR":"IL","ITA":"IT","JAM":"JM","JPN":"JP","JEY":"JE","JOR":"JO","KAZ":"KZ","KEN":"KE","KIR":"KI","PRK":"KP","KOR":"KR","KWT":"KW","KGZ":"KG","LAO":"LA","LVA":"LV","LBN":"LB","LSO":"LS","LBR":"LR","LBY":"LY","LIE":"LI","LTU":"LT","LUX":"LU","MAC":"MO","MDG":"MG","MWI":"MW","MYS":"MY","MDV":"MV","MLI":"ML","MLT":"MT","MHL":"MH","MTQ":"MQ","MRT":"MR","MUS":"MU","MYT":"YT","MEX":"MX","FSM":"FM","MDA":"MD","MCO":"MC","MNG":"MN","MNE":"ME","MSR":"MS","MAR":"MA","MOZ":"MZ","MMR":"MM","NAM":"NA","NRU":"NR","NPL":"NP","NLD":"NL","NCL":"NC","NZL":"NZ","NIC":"NI","NER":"NE","NGA":"NG","NIU":"NU","NFK":"NF","MKD":"MK","MNP":"MP","NOR":"NO","OMN":"OM","PAK":"PK","PLW":"PW","PSE":"PS","PAN":"PA","PNG":"PG","PRY":"PY","PER":"PE","PHL":"PH","PCN":"PN","POL":"PL","PRT":"PT","PRI":"PR","QAT":"QA","REU":"RE","ROU":"RO","RUS":"RU","RWA":"RW","BLM":"BL","SHN":"SH","KNA":"KN","LCA":"LC","MAF":"MF","SPM":"PM","VCT":"VC","WSM":"WS","SMR":"SM","STP":"ST","SAU":"SA","SEN":"SN","SRB":"RS","SYC":"SC","SLE":"SL","SGP":"SG","SXM":"SX","SVK":"SK","SVN":"SI","SLB":"SB","SOM":"SO","ZAF":"ZA","SGS":"GS","SSD":"SS","ESP":"ES","LKA":"LK","SDN":"SD","SUR":"SR","SJM":"SJ","SWE":"SE","CHE":"CH","SYR":"SY","TWN":"TW","TJK":"TJ","TZA":"TZ","THA":"TH","TLS":"TL","TGO":"TG","TKL":"TK","TON":"TO","TTO":"TT","TUN":"TN","TUR":"TR","TKM":"TM","TCA":"TC","TUV":"TV","UGA":"UG","UKR":"UA","ARE":"AE","GBR":"GB","UMI":"UM","USA":"US","URY":"UY","UZB":"UZ","VUT":"VU","VEN":"VE","VNM":"VN","VGB":"VG","VIR":"VI","WLF":"WF","ESH":"EH","YEM":"YE","ZMB":"ZM","ZWE":"ZW"}')
    },
    1551: function(e) {
        "use strict";
        e.exports = JSON.parse('{"AFG":"Afghanistan","ALA":"Åland Islands","ALB":"Albania","DZA":"Algeria","ASM":"American Samoa","AND":"Andorra","AGO":"Angola","AIA":"Anguilla","ATA":"Antarctica","ATG":"Antigua and Barbuda","ARG":"Argentina","ARM":"Armenia","ABW":"Aruba","AUS":"Australia","AUT":"Austria","AZE":"Azerbaijan","BHS":"Bahamas (the)","BHR":"Bahrain","BGD":"Bangladesh","BRB":"Barbados","BLR":"Belarus","BEL":"Belgium","BLZ":"Belize","BEN":"Benin","BMU":"Bermuda","BTN":"Bhutan","BOL":"Bolivia (Plurinational State of)","BES":"Bonaire, Sint Eustatius and Saba","BIH":"Bosnia and Herzegovina","BWA":"Botswana","BVT":"Bouvet Island","BRA":"Brazil","IOT":"British Indian Ocean Territory (the)","BRN":"Brunei Darussalam","BGR":"Bulgaria","BFA":"Burkina Faso","BDI":"Burundi","CPV":"Cabo Verde","KHM":"Cambodia","CMR":"Cameroon","CAN":"Canada","CYM":"Cayman Islands (the)","CAF":"Central African Republic (the)","TCD":"Chad","CHL":"Chile","CHN":"China","CXR":"Christmas Island","CCK":"Cocos (Keeling) Islands (the)","COL":"Colombia","COM":"Comoros (the)","COD":"Congo (the Democratic Republic of the)","COG":"Congo (the)","COK":"Cook Islands (the)","CRI":"Costa Rica","CIV":"Côte d\'Ivoire","HRV":"Croatia","CUB":"Cuba","CUW":"Curaçao","CYP":"Cyprus","CZE":"Czechia","DNK":"Denmark","DJI":"Djibouti","DMA":"Dominica","DOM":"Dominican Republic (the)","ECU":"Ecuador","EGY":"Egypt","SLV":"El Salvador","GNQ":"Equatorial Guinea","ERI":"Eritrea","EST":"Estonia","SWZ":"Eswatini","ETH":"Ethiopia","FLK":"Falkland Islands (the) [Malvinas]","FRO":"Faroe Islands (the)","FJI":"Fiji","FIN":"Finland","FRA":"France","GUF":"French Guiana","PYF":"French Polynesia","ATF":"French Southern Territories (the)","GAB":"Gabon","GMB":"Gambia (the)","GEO":"Georgia","DEU":"Germany","GHA":"Ghana","GIB":"Gibraltar","GRC":"Greece","GRL":"Greenland","GRD":"Grenada","GLP":"Guadeloupe","GUM":"Guam","GTM":"Guatemala","GGY":"Guernsey","GIN":"Guinea","GNB":"Guinea-Bissau","GUY":"Guyana","HTI":"Haiti","HMD":"Heard Island and McDonald Islands","VAT":"Holy See (the)","HND":"Honduras","HKG":"Hong Kong","HUN":"Hungary","ISL":"Iceland","IND":"India","IDN":"Indonesia","IRN":"Iran (Islamic Republic of)","IRQ":"Iraq","IRL":"Ireland","IMN":"Isle of Man","ISR":"Israel","ITA":"Italy","JAM":"Jamaica","JPN":"Japan","JEY":"Jersey","JOR":"Jordan","KAZ":"Kazakhstan","KEN":"Kenya","KIR":"Kiribati","PRK":"Korea (the Democratic People\'s Republic of)","KOR":"Korea (the Republic of)","KWT":"Kuwait","KGZ":"Kyrgyzstan","LAO":"Lao People\'s Democratic Republic (the)","LVA":"Latvia","LBN":"Lebanon","LSO":"Lesotho","LBR":"Liberia","LBY":"Libya","LIE":"Liechtenstein","LTU":"Lithuania","LUX":"Luxembourg","MAC":"Macao","MDG":"Madagascar","MWI":"Malawi","MYS":"Malaysia","MDV":"Maldives","MLI":"Mali","MLT":"Malta","MHL":"Marshall Islands (the)","MTQ":"Martinique","MRT":"Mauritania","MUS":"Mauritius","MYT":"Mayotte","MEX":"Mexico","FSM":"Micronesia (Federated States of)","MDA":"Moldova (the Republic of)","MCO":"Monaco","MNG":"Mongolia","MNE":"Montenegro","MSR":"Montserrat","MAR":"Morocco","MOZ":"Mozambique","MMR":"Myanmar","NAM":"Namibia","NRU":"Nauru","NPL":"Nepal","NLD":"Netherlands (the)","NCL":"New Caledonia","NZL":"New Zealand","NIC":"Nicaragua","NER":"Niger (the)","NGA":"Nigeria","NIU":"Niue","NFK":"Norfolk Island","MKD":"North Macedonia","MNP":"Northern Mariana Islands (the)","NOR":"Norway","OMN":"Oman","PAK":"Pakistan","PLW":"Palau","PSE":"Palestine, State of","PAN":"Panama","PNG":"Papua New Guinea","PRY":"Paraguay","PER":"Peru","PHL":"Philippines (the)","PCN":"Pitcairn","POL":"Poland","PRT":"Portugal","PRI":"Puerto Rico","QAT":"Qatar","REU":"Réunion","ROU":"Romania","RUS":"Russian Federation (the)","RWA":"Rwanda","BLM":"Saint Barthélemy","SHN":"Saint Helena, Ascension and Tristan da Cunha","KNA":"Saint Kitts and Nevis","LCA":"Saint Lucia","MAF":"Saint Martin (French part)","SPM":"Saint Pierre and Miquelon","VCT":"Saint Vincent and the Grenadines","WSM":"Samoa","SMR":"San Marino","STP":"Sao Tome and Principe","SAU":"Saudi Arabia","SEN":"Senegal","SRB":"Serbia","SYC":"Seychelles","SLE":"Sierra Leone","SGP":"Singapore","SXM":"Sint Maarten (Dutch part)","SVK":"Slovakia","SVN":"Slovenia","SLB":"Solomon Islands","SOM":"Somalia","ZAF":"South Africa","SGS":"South Georgia and the South Sandwich Islands","SSD":"South Sudan","ESP":"Spain","LKA":"Sri Lanka","SDN":"Sudan (the)","SUR":"Suriname","SJM":"Svalbard and Jan Mayen","SWE":"Sweden","CHE":"Switzerland","SYR":"Syrian Arab Republic (the)","TWN":"Taiwan (Province of China)","TJK":"Tajikistan","TZA":"Tanzania, the United Republic of","THA":"Thailand","TLS":"Timor-Leste","TGO":"Togo","TKL":"Tokelau","TON":"Tonga","TTO":"Trinidad and Tobago","TUN":"Tunisia","TUR":"Turkey","TKM":"Turkmenistan","TCA":"Turks and Caicos Islands (the)","TUV":"Tuvalu","UGA":"Uganda","UKR":"Ukraine","ARE":"United Arab Emirates (the)","GBR":"United Kingdom of Great Britain and Northern Ireland (the)","UMI":"United States Minor Outlying Islands (the)","USA":"United States of America (the)","URY":"Uruguay","UZB":"Uzbekistan","VUT":"Vanuatu","VEN":"Venezuela (Bolivarian Republic of)","VNM":"Viet Nam","VGB":"Virgin Islands (British)","VIR":"Virgin Islands (U.S.)","WLF":"Wallis and Futuna","ESH":"Western Sahara*","YEM":"Yemen","ZMB":"Zambia","ZWE":"Zimbabwe"}')
    },
    73089: function(e) {
        "use strict";
        e.exports = JSON.parse('[{"country_name_en":"Afghanistan","country_name_fr":"Afghanistan (l\')","alpha2":"AF","alpha3":"AFG","number":"004"},{"country_name_en":"Åland Islands","country_name_fr":"Åland(les Îles)","alpha2":"AX","alpha3":"ALA","number":"248"},{"country_name_en":"Albania","country_name_fr":"Albanie (l\')","alpha2":"AL","alpha3":"ALB","number":"008"},{"country_name_en":"Algeria","country_name_fr":"Algérie (l\')","alpha2":"DZ","alpha3":"DZA","number":"012"},{"country_name_en":"American Samoa","country_name_fr":"Samoa américaines (les)","alpha2":"AS","alpha3":"ASM","number":"016"},{"country_name_en":"Andorra","country_name_fr":"Andorre (l\')","alpha2":"AD","alpha3":"AND","number":"020"},{"country_name_en":"Angola","country_name_fr":"Angola (l\')","alpha2":"AO","alpha3":"AGO","number":"024"},{"country_name_en":"Anguilla","country_name_fr":"Anguilla","alpha2":"AI","alpha3":"AIA","number":"660"},{"country_name_en":"Antarctica","country_name_fr":"Antarctique (l\')","alpha2":"AQ","alpha3":"ATA","number":"010"},{"country_name_en":"Antigua and Barbuda","country_name_fr":"Antigua-et-Barbuda","alpha2":"AG","alpha3":"ATG","number":"028"},{"country_name_en":"Argentina","country_name_fr":"Argentine (l\')","alpha2":"AR","alpha3":"ARG","number":"032"},{"country_name_en":"Armenia","country_name_fr":"Arménie (l\')","alpha2":"AM","alpha3":"ARM","number":"051"},{"country_name_en":"Aruba","country_name_fr":"Aruba","alpha2":"AW","alpha3":"ABW","number":"533"},{"country_name_en":"Australia","country_name_fr":"Australie (l\')","alpha2":"AU","alpha3":"AUS","number":"036"},{"country_name_en":"Austria","country_name_fr":"Autriche (l\')","alpha2":"AT","alpha3":"AUT","number":"040"},{"country_name_en":"Azerbaijan","country_name_fr":"Azerbaïdjan (l\')","alpha2":"AZ","alpha3":"AZE","number":"031"},{"country_name_en":"Bahamas (the)","country_name_fr":"Bahamas (les)","alpha2":"BS","alpha3":"BHS","number":"044"},{"country_name_en":"Bahrain","country_name_fr":"Bahreïn","alpha2":"BH","alpha3":"BHR","number":"048"},{"country_name_en":"Bangladesh","country_name_fr":"Bangladesh (le)","alpha2":"BD","alpha3":"BGD","number":"050"},{"country_name_en":"Barbados","country_name_fr":"Barbade (la)","alpha2":"BB","alpha3":"BRB","number":"052"},{"country_name_en":"Belarus","country_name_fr":"Bélarus (le)","alpha2":"BY","alpha3":"BLR","number":"112"},{"country_name_en":"Belgium","country_name_fr":"Belgique (la)","alpha2":"BE","alpha3":"BEL","number":"056"},{"country_name_en":"Belize","country_name_fr":"Belize (le)","alpha2":"BZ","alpha3":"BLZ","number":"084"},{"country_name_en":"Benin","country_name_fr":"Bénin (le)","alpha2":"BJ","alpha3":"BEN","number":"204"},{"country_name_en":"Bermuda","country_name_fr":"Bermudes (les)","alpha2":"BM","alpha3":"BMU","number":"060"},{"country_name_en":"Bhutan","country_name_fr":"Bhoutan (le)","alpha2":"BT","alpha3":"BTN","number":"064"},{"country_name_en":"Bolivia (Plurinational State of)","country_name_fr":"Bolivie (État plurinational de)","alpha2":"BO","alpha3":"BOL","number":"068"},{"country_name_en":"Bonaire, Sint Eustatius and Saba","country_name_fr":"Bonaire, Saint-Eustache et Saba","alpha2":"BQ","alpha3":"BES","number":"535"},{"country_name_en":"Bosnia and Herzegovina","country_name_fr":"Bosnie-Herzégovine (la)","alpha2":"BA","alpha3":"BIH","number":"070"},{"country_name_en":"Botswana","country_name_fr":"Botswana (le)","alpha2":"BW","alpha3":"BWA","number":"072"},{"country_name_en":"Bouvet Island","country_name_fr":"Bouvet (l\'Île)","alpha2":"BV","alpha3":"BVT","number":"074"},{"country_name_en":"Brazil","country_name_fr":"Brésil (le)","alpha2":"BR","alpha3":"BRA","number":"076"},{"country_name_en":"British Indian Ocean Territory (the)","country_name_fr":"Indien (le Territoire britannique de l\'océan)","alpha2":"IO","alpha3":"IOT","number":"086"},{"country_name_en":"Brunei Darussalam","country_name_fr":"Brunéi Darussalam (le)","alpha2":"BN","alpha3":"BRN","number":"096"},{"country_name_en":"Bulgaria","country_name_fr":"Bulgarie (la)","alpha2":"BG","alpha3":"BGR","number":"100"},{"country_name_en":"Burkina Faso","country_name_fr":"Burkina Faso (le)","alpha2":"BF","alpha3":"BFA","number":"854"},{"country_name_en":"Burundi","country_name_fr":"Burundi (le)","alpha2":"BI","alpha3":"BDI","number":"108"},{"country_name_en":"Cabo Verde","country_name_fr":"Cabo Verde","alpha2":"CV","alpha3":"CPV","number":"132"},{"country_name_en":"Cambodia","country_name_fr":"Cambodge (le)","alpha2":"KH","alpha3":"KHM","number":"116"},{"country_name_en":"Cameroon","country_name_fr":"Cameroun (le)","alpha2":"CM","alpha3":"CMR","number":"120"},{"country_name_en":"Canada","country_name_fr":"Canada (le)","alpha2":"CA","alpha3":"CAN","number":"124"},{"country_name_en":"Cayman Islands (the)","country_name_fr":"Caïmans (les Îles)","alpha2":"KY","alpha3":"CYM","number":"136"},{"country_name_en":"Central African Republic (the)","country_name_fr":"République centrafricaine (la)","alpha2":"CF","alpha3":"CAF","number":"140"},{"country_name_en":"Chad","country_name_fr":"Tchad (le)","alpha2":"TD","alpha3":"TCD","number":"148"},{"country_name_en":"Chile","country_name_fr":"Chili (le)","alpha2":"CL","alpha3":"CHL","number":"152"},{"country_name_en":"China","country_name_fr":"Chine (la)","alpha2":"CN","alpha3":"CHN","number":"156"},{"country_name_en":"Christmas Island","country_name_fr":"Christmas (l\'Île)","alpha2":"CX","alpha3":"CXR","number":"162"},{"country_name_en":"Cocos (Keeling) Islands (the)","country_name_fr":"Cocos (les Îles)/ Keeling (les Îles)","alpha2":"CC","alpha3":"CCK","number":"166"},{"country_name_en":"Colombia","country_name_fr":"Colombie (la)","alpha2":"CO","alpha3":"COL","number":"170"},{"country_name_en":"Comoros (the)","country_name_fr":"Comores (les)","alpha2":"KM","alpha3":"COM","number":"174"},{"country_name_en":"Congo (the Democratic Republic of the)","country_name_fr":"Congo (la République démocratique du)","alpha2":"CD","alpha3":"COD","number":"180"},{"country_name_en":"Congo (the)","country_name_fr":"Congo (le)","alpha2":"CG","alpha3":"COG","number":"178"},{"country_name_en":"Cook Islands (the)","country_name_fr":"Cook (les Îles)","alpha2":"CK","alpha3":"COK","number":"184"},{"country_name_en":"Costa Rica","country_name_fr":"Costa Rica (le)","alpha2":"CR","alpha3":"CRI","number":"188"},{"country_name_en":"Côte d\'Ivoire","country_name_fr":"Côte d\'Ivoire (la)","alpha2":"CI","alpha3":"CIV","number":"384"},{"country_name_en":"Croatia","country_name_fr":"Croatie (la)","alpha2":"HR","alpha3":"HRV","number":"191"},{"country_name_en":"Cuba","country_name_fr":"Cuba","alpha2":"CU","alpha3":"CUB","number":"192"},{"country_name_en":"Curaçao","country_name_fr":"Curaçao","alpha2":"CW","alpha3":"CUW","number":"531"},{"country_name_en":"Cyprus","country_name_fr":"Chypre","alpha2":"CY","alpha3":"CYP","number":"196"},{"country_name_en":"Czechia","country_name_fr":"Tchéquie (la)","alpha2":"CZ","alpha3":"CZE","number":"203"},{"country_name_en":"Denmark","country_name_fr":"Danemark (le)","alpha2":"DK","alpha3":"DNK","number":"208"},{"country_name_en":"Djibouti","country_name_fr":"Djibouti","alpha2":"DJ","alpha3":"DJI","number":"262"},{"country_name_en":"Dominica","country_name_fr":"Dominique (la)","alpha2":"DM","alpha3":"DMA","number":"212"},{"country_name_en":"Dominican Republic (the)","country_name_fr":"dominicaine (la République)","alpha2":"DO","alpha3":"DOM","number":"214"},{"country_name_en":"Ecuador","country_name_fr":"Équateur (l\')","alpha2":"EC","alpha3":"ECU","number":"218"},{"country_name_en":"Egypt","country_name_fr":"Égypte (l\')","alpha2":"EG","alpha3":"EGY","number":"818"},{"country_name_en":"El Salvador","country_name_fr":"El Salvador","alpha2":"SV","alpha3":"SLV","number":"222"},{"country_name_en":"Equatorial Guinea","country_name_fr":"Guinée équatoriale (la)","alpha2":"GQ","alpha3":"GNQ","number":"226"},{"country_name_en":"Eritrea","country_name_fr":"Érythrée (l\')","alpha2":"ER","alpha3":"ERI","number":"232"},{"country_name_en":"Estonia","country_name_fr":"Estonie (l\')","alpha2":"EE","alpha3":"EST","number":"233"},{"country_name_en":"Eswatini","country_name_fr":"Eswatini (l\')","alpha2":"SZ","alpha3":"SWZ","number":"748"},{"country_name_en":"Ethiopia","country_name_fr":"Éthiopie (l\')","alpha2":"ET","alpha3":"ETH","number":"231"},{"country_name_en":"Falkland Islands (the) [Malvinas]","country_name_fr":"Falkland (les Îles)/Malouines (les Îles)","alpha2":"FK","alpha3":"FLK","number":"238"},{"country_name_en":"Faroe Islands (the)","country_name_fr":"Féroé (les Îles)","alpha2":"FO","alpha3":"FRO","number":"234"},{"country_name_en":"Fiji","country_name_fr":"Fidji (les)","alpha2":"FJ","alpha3":"FJI","number":"242"},{"country_name_en":"Finland","country_name_fr":"Finlande (la)","alpha2":"FI","alpha3":"FIN","number":"246"},{"country_name_en":"France","country_name_fr":"France (la)","alpha2":"FR","alpha3":"FRA","number":"250"},{"country_name_en":"French Guiana","country_name_fr":"Guyane française (la )","alpha2":"GF","alpha3":"GUF","number":"254"},{"country_name_en":"French Polynesia","country_name_fr":"Polynésie française (la)","alpha2":"PF","alpha3":"PYF","number":"258"},{"country_name_en":"French Southern Territories (the)","country_name_fr":"Terres australes françaises (les)","alpha2":"TF","alpha3":"ATF","number":"260"},{"country_name_en":"Gabon","country_name_fr":"Gabon (le)","alpha2":"GA","alpha3":"GAB","number":"266"},{"country_name_en":"Gambia (the)","country_name_fr":"Gambie (la)","alpha2":"GM","alpha3":"GMB","number":"270"},{"country_name_en":"Georgia","country_name_fr":"Géorgie (la)","alpha2":"GE","alpha3":"GEO","number":"268"},{"country_name_en":"Germany","country_name_fr":"Allemagne (l\')","alpha2":"DE","alpha3":"DEU","number":"276"},{"country_name_en":"Ghana","country_name_fr":"Ghana (le)","alpha2":"GH","alpha3":"GHA","number":"288"},{"country_name_en":"Gibraltar","country_name_fr":"Gibraltar","alpha2":"GI","alpha3":"GIB","number":"292"},{"country_name_en":"Greece","country_name_fr":"Grèce (la)","alpha2":"GR","alpha3":"GRC","number":"300"},{"country_name_en":"Greenland","country_name_fr":"Groenland (le)","alpha2":"GL","alpha3":"GRL","number":"304"},{"country_name_en":"Grenada","country_name_fr":"Grenade (la)","alpha2":"GD","alpha3":"GRD","number":"308"},{"country_name_en":"Guadeloupe","country_name_fr":"Guadeloupe (la)","alpha2":"GP","alpha3":"GLP","number":"312"},{"country_name_en":"Guam","country_name_fr":"Guam","alpha2":"GU","alpha3":"GUM","number":"316"},{"country_name_en":"Guatemala","country_name_fr":"Guatemala (le)","alpha2":"GT","alpha3":"GTM","number":"320"},{"country_name_en":"Guernsey","country_name_fr":"Guernesey","alpha2":"GG","alpha3":"GGY","number":"831"},{"country_name_en":"Guinea","country_name_fr":"Guinée (la)","alpha2":"GN","alpha3":"GIN","number":"324"},{"country_name_en":"Guinea-Bissau","country_name_fr":"Guinée-Bissau (la)","alpha2":"GW","alpha3":"GNB","number":"624"},{"country_name_en":"Guyana","country_name_fr":"Guyana (le)","alpha2":"GY","alpha3":"GUY","number":"328"},{"country_name_en":"Haiti","country_name_fr":"Haïti","alpha2":"HT","alpha3":"HTI","number":"332"},{"country_name_en":"Heard Island and McDonald Islands","country_name_fr":"Heard-et-Îles MacDonald (l\'Île)","alpha2":"HM","alpha3":"HMD","number":"334"},{"country_name_en":"Holy See (the)","country_name_fr":"Saint-Siège (le)","alpha2":"VA","alpha3":"VAT","number":"336"},{"country_name_en":"Honduras","country_name_fr":"Honduras (le)","alpha2":"HN","alpha3":"HND","number":"340"},{"country_name_en":"Hong Kong","country_name_fr":"Hong Kong","alpha2":"HK","alpha3":"HKG","number":"344"},{"country_name_en":"Hungary","country_name_fr":"Hongrie (la)","alpha2":"HU","alpha3":"HUN","number":"348"},{"country_name_en":"Iceland","country_name_fr":"Islande (l\')","alpha2":"IS","alpha3":"ISL","number":"352"},{"country_name_en":"India","country_name_fr":"Inde (l\')","alpha2":"IN","alpha3":"IND","number":"356"},{"country_name_en":"Indonesia","country_name_fr":"Indonésie (l\')","alpha2":"ID","alpha3":"IDN","number":"360"},{"country_name_en":"Iran (Islamic Republic of)","country_name_fr":"Iran (République Islamique d\')","alpha2":"IR","alpha3":"IRN","number":"364"},{"country_name_en":"Iraq","country_name_fr":"Iraq (l\')","alpha2":"IQ","alpha3":"IRQ","number":"368"},{"country_name_en":"Ireland","country_name_fr":"Irlande (l\')","alpha2":"IE","alpha3":"IRL","number":"372"},{"country_name_en":"Isle of Man","country_name_fr":"Île de Man","alpha2":"IM","alpha3":"IMN","number":"833"},{"country_name_en":"Israel","country_name_fr":"Israël","alpha2":"IL","alpha3":"ISR","number":"376"},{"country_name_en":"Italy","country_name_fr":"Italie (l\')","alpha2":"IT","alpha3":"ITA","number":"380"},{"country_name_en":"Jamaica","country_name_fr":"Jamaïque (la)","alpha2":"JM","alpha3":"JAM","number":"388"},{"country_name_en":"Japan","country_name_fr":"Japon (le)","alpha2":"JP","alpha3":"JPN","number":"392"},{"country_name_en":"Jersey","country_name_fr":"Jersey","alpha2":"JE","alpha3":"JEY","number":"832"},{"country_name_en":"Jordan","country_name_fr":"Jordanie (la)","alpha2":"JO","alpha3":"JOR","number":"400"},{"country_name_en":"Kazakhstan","country_name_fr":"Kazakhstan (le)","alpha2":"KZ","alpha3":"KAZ","number":"398"},{"country_name_en":"Kenya","country_name_fr":"Kenya (le)","alpha2":"KE","alpha3":"KEN","number":"404"},{"country_name_en":"Kiribati","country_name_fr":"Kiribati","alpha2":"KI","alpha3":"KIR","number":"296"},{"country_name_en":"Korea (the Democratic People\'s Republic of)","country_name_fr":"Corée (la République populaire démocratique de)","alpha2":"KP","alpha3":"PRK","number":"408"},{"country_name_en":"Korea (the Republic of)","country_name_fr":"Corée (la République de)","alpha2":"KR","alpha3":"KOR","number":"410"},{"country_name_en":"Kuwait","country_name_fr":"Koweït (le)","alpha2":"KW","alpha3":"KWT","number":"414"},{"country_name_en":"Kyrgyzstan","country_name_fr":"Kirghizistan (le)","alpha2":"KG","alpha3":"KGZ","number":"417"},{"country_name_en":"Lao People\'s Democratic Republic (the)","country_name_fr":"Lao (la République démocratique populaire)","alpha2":"LA","alpha3":"LAO","number":"418"},{"country_name_en":"Latvia","country_name_fr":"Lettonie (la)","alpha2":"LV","alpha3":"LVA","number":"428"},{"country_name_en":"Lebanon","country_name_fr":"Liban (le)","alpha2":"LB","alpha3":"LBN","number":"422"},{"country_name_en":"Lesotho","country_name_fr":"Lesotho (le)","alpha2":"LS","alpha3":"LSO","number":"426"},{"country_name_en":"Liberia","country_name_fr":"Libéria (le)","alpha2":"LR","alpha3":"LBR","number":"430"},{"country_name_en":"Libya","country_name_fr":"Libye (la)","alpha2":"LY","alpha3":"LBY","number":"434"},{"country_name_en":"Liechtenstein","country_name_fr":"Liechtenstein (le)","alpha2":"LI","alpha3":"LIE","number":"438"},{"country_name_en":"Lithuania","country_name_fr":"Lituanie (la)","alpha2":"LT","alpha3":"LTU","number":"440"},{"country_name_en":"Luxembourg","country_name_fr":"Luxembourg (le)","alpha2":"LU","alpha3":"LUX","number":"442"},{"country_name_en":"Macao","country_name_fr":"Macao","alpha2":"MO","alpha3":"MAC","number":"446"},{"country_name_en":"Madagascar","country_name_fr":"Madagascar","alpha2":"MG","alpha3":"MDG","number":"450"},{"country_name_en":"Malawi","country_name_fr":"Malawi (le)","alpha2":"MW","alpha3":"MWI","number":"454"},{"country_name_en":"Malaysia","country_name_fr":"Malaisie (la)","alpha2":"MY","alpha3":"MYS","number":"458"},{"country_name_en":"Maldives","country_name_fr":"Maldives (les)","alpha2":"MV","alpha3":"MDV","number":"462"},{"country_name_en":"Mali","country_name_fr":"Mali (le)","alpha2":"ML","alpha3":"MLI","number":"466"},{"country_name_en":"Malta","country_name_fr":"Malte","alpha2":"MT","alpha3":"MLT","number":"470"},{"country_name_en":"Marshall Islands (the)","country_name_fr":"Marshall (les Îles)","alpha2":"MH","alpha3":"MHL","number":"584"},{"country_name_en":"Martinique","country_name_fr":"Martinique (la)","alpha2":"MQ","alpha3":"MTQ","number":"474"},{"country_name_en":"Mauritania","country_name_fr":"Mauritanie (la)","alpha2":"MR","alpha3":"MRT","number":"478"},{"country_name_en":"Mauritius","country_name_fr":"Maurice","alpha2":"MU","alpha3":"MUS","number":"480"},{"country_name_en":"Mayotte","country_name_fr":"Mayotte","alpha2":"YT","alpha3":"MYT","number":"175"},{"country_name_en":"Mexico","country_name_fr":"Mexique (le)","alpha2":"MX","alpha3":"MEX","number":"484"},{"country_name_en":"Micronesia (Federated States of)","country_name_fr":"Micronésie (États fédérés de)","alpha2":"FM","alpha3":"FSM","number":"583"},{"country_name_en":"Moldova (the Republic of)","country_name_fr":"Moldova (la République de)","alpha2":"MD","alpha3":"MDA","number":"498"},{"country_name_en":"Monaco","country_name_fr":"Monaco","alpha2":"MC","alpha3":"MCO","number":"492"},{"country_name_en":"Mongolia","country_name_fr":"Mongolie (la)","alpha2":"MN","alpha3":"MNG","number":"496"},{"country_name_en":"Montenegro","country_name_fr":"Monténégro (le)","alpha2":"ME","alpha3":"MNE","number":"499"},{"country_name_en":"Montserrat","country_name_fr":"Montserrat","alpha2":"MS","alpha3":"MSR","number":"500"},{"country_name_en":"Morocco","country_name_fr":"Maroc (le)","alpha2":"MA","alpha3":"MAR","number":"504"},{"country_name_en":"Mozambique","country_name_fr":"Mozambique (le)","alpha2":"MZ","alpha3":"MOZ","number":"508"},{"country_name_en":"Myanmar","country_name_fr":"Myanmar (le)","alpha2":"MM","alpha3":"MMR","number":"104"},{"country_name_en":"Namibia","country_name_fr":"Namibie (la)","alpha2":"NA","alpha3":"NAM","number":"516"},{"country_name_en":"Nauru","country_name_fr":"Nauru","alpha2":"NR","alpha3":"NRU","number":"520"},{"country_name_en":"Nepal","country_name_fr":"Népal (le)","alpha2":"NP","alpha3":"NPL","number":"524"},{"country_name_en":"Netherlands (the)","country_name_fr":"Pays-Bas (les)","alpha2":"NL","alpha3":"NLD","number":"528"},{"country_name_en":"New Caledonia","country_name_fr":"Nouvelle-Calédonie (la)","alpha2":"NC","alpha3":"NCL","number":"540"},{"country_name_en":"New Zealand","country_name_fr":"Nouvelle-Zélande (la)","alpha2":"NZ","alpha3":"NZL","number":"554"},{"country_name_en":"Nicaragua","country_name_fr":"Nicaragua (le)","alpha2":"NI","alpha3":"NIC","number":"558"},{"country_name_en":"Niger (the)","country_name_fr":"Niger (le)","alpha2":"NE","alpha3":"NER","number":"562"},{"country_name_en":"Nigeria","country_name_fr":"Nigéria (le)","alpha2":"NG","alpha3":"NGA","number":"566"},{"country_name_en":"Niue","country_name_fr":"Niue","alpha2":"NU","alpha3":"NIU","number":"570"},{"country_name_en":"Norfolk Island","country_name_fr":"Norfolk (l\'Île)","alpha2":"NF","alpha3":"NFK","number":"574"},{"country_name_en":"North Macedonia","country_name_fr":"Macédoine du Nord (la)","alpha2":"MK","alpha3":"MKD","number":"807"},{"country_name_en":"Northern Mariana Islands (the)","country_name_fr":"Mariannes du Nord (les Îles)","alpha2":"MP","alpha3":"MNP","number":"580"},{"country_name_en":"Norway","country_name_fr":"Norvège (la)","alpha2":"NO","alpha3":"NOR","number":"578"},{"country_name_en":"Oman","country_name_fr":"Oman","alpha2":"OM","alpha3":"OMN","number":"512"},{"country_name_en":"Pakistan","country_name_fr":"Pakistan (le)","alpha2":"PK","alpha3":"PAK","number":"586"},{"country_name_en":"Palau","country_name_fr":"Palaos (les)","alpha2":"PW","alpha3":"PLW","number":"585"},{"country_name_en":"Palestine, State of","country_name_fr":"Palestine, État de","alpha2":"PS","alpha3":"PSE","number":"275"},{"country_name_en":"Panama","country_name_fr":"Panama (le)","alpha2":"PA","alpha3":"PAN","number":"591"},{"country_name_en":"Papua New Guinea","country_name_fr":"Papouasie-Nouvelle-Guinée (la)","alpha2":"PG","alpha3":"PNG","number":"598"},{"country_name_en":"Paraguay","country_name_fr":"Paraguay (le)","alpha2":"PY","alpha3":"PRY","number":"600"},{"country_name_en":"Peru","country_name_fr":"Pérou (le)","alpha2":"PE","alpha3":"PER","number":"604"},{"country_name_en":"Philippines (the)","country_name_fr":"Philippines (les)","alpha2":"PH","alpha3":"PHL","number":"608"},{"country_name_en":"Pitcairn","country_name_fr":"Pitcairn","alpha2":"PN","alpha3":"PCN","number":"612"},{"country_name_en":"Poland","country_name_fr":"Pologne (la)","alpha2":"PL","alpha3":"POL","number":"616"},{"country_name_en":"Portugal","country_name_fr":"Portugal (le)","alpha2":"PT","alpha3":"PRT","number":"620"},{"country_name_en":"Puerto Rico","country_name_fr":"Porto Rico","alpha2":"PR","alpha3":"PRI","number":"630"},{"country_name_en":"Qatar","country_name_fr":"Qatar (le)","alpha2":"QA","alpha3":"QAT","number":"634"},{"country_name_en":"Réunion","country_name_fr":"Réunion (La)","alpha2":"RE","alpha3":"REU","number":"638"},{"country_name_en":"Romania","country_name_fr":"Roumanie (la)","alpha2":"RO","alpha3":"ROU","number":"642"},{"country_name_en":"Russian Federation (the)","country_name_fr":"Russie (la Fédération de)","alpha2":"RU","alpha3":"RUS","number":"643"},{"country_name_en":"Rwanda","country_name_fr":"Rwanda (le)","alpha2":"RW","alpha3":"RWA","number":"646"},{"country_name_en":"Saint Barthélemy","country_name_fr":"Saint-Barthélemy","alpha2":"BL","alpha3":"BLM","number":"652"},{"country_name_en":"Saint Helena, Ascension and Tristan da Cunha","country_name_fr":"Sainte-Hélène, Ascension et Tristan da Cunha","alpha2":"SH","alpha3":"SHN","number":"654"},{"country_name_en":"Saint Kitts and Nevis","country_name_fr":"Saint-Kitts-et-Nevis","alpha2":"KN","alpha3":"KNA","number":"659"},{"country_name_en":"Saint Lucia","country_name_fr":"Sainte-Lucie","alpha2":"LC","alpha3":"LCA","number":"662"},{"country_name_en":"Saint Martin (French part)","country_name_fr":"Saint-Martin (partie française)","alpha2":"MF","alpha3":"MAF","number":"663"},{"country_name_en":"Saint Pierre and Miquelon","country_name_fr":"Saint-Pierre-et-Miquelon","alpha2":"PM","alpha3":"SPM","number":"666"},{"country_name_en":"Saint Vincent and the Grenadines","country_name_fr":"Saint-Vincent-et-les Grenadines","alpha2":"VC","alpha3":"VCT","number":"670"},{"country_name_en":"Samoa","country_name_fr":"Samoa (le)","alpha2":"WS","alpha3":"WSM","number":"882"},{"country_name_en":"San Marino","country_name_fr":"Saint-Marin","alpha2":"SM","alpha3":"SMR","number":"674"},{"country_name_en":"Sao Tome and Principe","country_name_fr":"Sao Tomé-et-Principe","alpha2":"ST","alpha3":"STP","number":"678"},{"country_name_en":"Saudi Arabia","country_name_fr":"Arabie saoudite (l\')","alpha2":"SA","alpha3":"SAU","number":"682"},{"country_name_en":"Senegal","country_name_fr":"Sénégal (le)","alpha2":"SN","alpha3":"SEN","number":"686"},{"country_name_en":"Serbia","country_name_fr":"Serbie (la)","alpha2":"RS","alpha3":"SRB","number":"688"},{"country_name_en":"Seychelles","country_name_fr":"Seychelles (les)","alpha2":"SC","alpha3":"SYC","number":"690"},{"country_name_en":"Sierra Leone","country_name_fr":"Sierra Leone (la)","alpha2":"SL","alpha3":"SLE","number":"694"},{"country_name_en":"Singapore","country_name_fr":"Singapour","alpha2":"SG","alpha3":"SGP","number":"702"},{"country_name_en":"Sint Maarten (Dutch part)","country_name_fr":"Saint-Martin (partie néerlandaise)","alpha2":"SX","alpha3":"SXM","number":"534"},{"country_name_en":"Slovakia","country_name_fr":"Slovaquie (la)","alpha2":"SK","alpha3":"SVK","number":"703"},{"country_name_en":"Slovenia","country_name_fr":"Slovénie (la)","alpha2":"SI","alpha3":"SVN","number":"705"},{"country_name_en":"Solomon Islands","country_name_fr":"Salomon (les Îles)","alpha2":"SB","alpha3":"SLB","number":"090"},{"country_name_en":"Somalia","country_name_fr":"Somalie (la)","alpha2":"SO","alpha3":"SOM","number":"706"},{"country_name_en":"South Africa","country_name_fr":"Afrique du Sud (l\')","alpha2":"ZA","alpha3":"ZAF","number":"710"},{"country_name_en":"South Georgia and the South Sandwich Islands","country_name_fr":"Géorgie du Sud-et-les Îles Sandwich du Sud (la)","alpha2":"GS","alpha3":"SGS","number":"239"},{"country_name_en":"South Sudan","country_name_fr":"Soudan du Sud (le)","alpha2":"SS","alpha3":"SSD","number":"728"},{"country_name_en":"Spain","country_name_fr":"Espagne (l\')","alpha2":"ES","alpha3":"ESP","number":"724"},{"country_name_en":"Sri Lanka","country_name_fr":"Sri Lanka","alpha2":"LK","alpha3":"LKA","number":"144"},{"country_name_en":"Sudan (the)","country_name_fr":"Soudan (le)","alpha2":"SD","alpha3":"SDN","number":"729"},{"country_name_en":"Suriname","country_name_fr":"Suriname (le)","alpha2":"SR","alpha3":"SUR","number":"740"},{"country_name_en":"Svalbard and Jan Mayen","country_name_fr":"Svalbard et l\'Île Jan Mayen (le)","alpha2":"SJ","alpha3":"SJM","number":"744"},{"country_name_en":"Sweden","country_name_fr":"Suède (la)","alpha2":"SE","alpha3":"SWE","number":"752"},{"country_name_en":"Switzerland","country_name_fr":"Suisse (la)","alpha2":"CH","alpha3":"CHE","number":"756"},{"country_name_en":"Syrian Arab Republic (the)","country_name_fr":"République arabe syrienne (la)","alpha2":"SY","alpha3":"SYR","number":"760"},{"country_name_en":"Taiwan (Province of China)","country_name_fr":"Taïwan (Province de Chine)","alpha2":"TW","alpha3":"TWN","number":"158"},{"country_name_en":"Tajikistan","country_name_fr":"Tadjikistan (le)","alpha2":"TJ","alpha3":"TJK","number":"762"},{"country_name_en":"Tanzania, the United Republic of","country_name_fr":"Tanzanie (la République-Unie de)","alpha2":"TZ","alpha3":"TZA","number":"834"},{"country_name_en":"Thailand","country_name_fr":"Thaïlande (la)","alpha2":"TH","alpha3":"THA","number":"764"},{"country_name_en":"Timor-Leste","country_name_fr":"Timor-Leste (le)","alpha2":"TL","alpha3":"TLS","number":"626"},{"country_name_en":"Togo","country_name_fr":"Togo (le)","alpha2":"TG","alpha3":"TGO","number":"768"},{"country_name_en":"Tokelau","country_name_fr":"Tokelau (les)","alpha2":"TK","alpha3":"TKL","number":"772"},{"country_name_en":"Tonga","country_name_fr":"Tonga (les)","alpha2":"TO","alpha3":"TON","number":"776"},{"country_name_en":"Trinidad and Tobago","country_name_fr":"Trinité-et-Tobago (la)","alpha2":"TT","alpha3":"TTO","number":"780"},{"country_name_en":"Tunisia","country_name_fr":"Tunisie (la)","alpha2":"TN","alpha3":"TUN","number":"788"},{"country_name_en":"Turkey","country_name_fr":"Turquie (la)","alpha2":"TR","alpha3":"TUR","number":"792"},{"country_name_en":"Turkmenistan","country_name_fr":"Turkménistan (le)","alpha2":"TM","alpha3":"TKM","number":"795"},{"country_name_en":"Turks and Caicos Islands (the)","country_name_fr":"Turks-et-Caïcos (les Îles)","alpha2":"TC","alpha3":"TCA","number":"796"},{"country_name_en":"Tuvalu","country_name_fr":"Tuvalu (les)","alpha2":"TV","alpha3":"TUV","number":"798"},{"country_name_en":"Uganda","country_name_fr":"Ouganda (l\')","alpha2":"UG","alpha3":"UGA","number":"800"},{"country_name_en":"Ukraine","country_name_fr":"Ukraine (l\')","alpha2":"UA","alpha3":"UKR","number":"804"},{"country_name_en":"United Arab Emirates (the)","country_name_fr":"Émirats arabes unis (les)","alpha2":"AE","alpha3":"ARE","number":"784"},{"country_name_en":"United Kingdom of Great Britain and Northern Ireland (the)","country_name_fr":"Royaume-Uni de Grande-Bretagne et d\'Irlande du Nord (le)","alpha2":"GB","alpha3":"GBR","number":"826"},{"country_name_en":"United States Minor Outlying Islands (the)","country_name_fr":"Îles mineures éloignées des États-Unis (les)","alpha2":"UM","alpha3":"UMI","number":"581"},{"country_name_en":"United States of America (the)","country_name_fr":"États-Unis d\'Amérique (les)","alpha2":"US","alpha3":"USA","number":"840"},{"country_name_en":"Uruguay","country_name_fr":"Uruguay (l\')","alpha2":"UY","alpha3":"URY","number":"858"},{"country_name_en":"Uzbekistan","country_name_fr":"Ouzbékistan (l\')","alpha2":"UZ","alpha3":"UZB","number":"860"},{"country_name_en":"Vanuatu","country_name_fr":"Vanuatu (le)","alpha2":"VU","alpha3":"VUT","number":"548"},{"country_name_en":"Venezuela (Bolivarian Republic of)","country_name_fr":"Venezuela (République bolivarienne du)","alpha2":"VE","alpha3":"VEN","number":"862"},{"country_name_en":"Viet Nam","country_name_fr":"Viet Nam (le)","alpha2":"VN","alpha3":"VNM","number":"704"},{"country_name_en":"Virgin Islands (British)","country_name_fr":"Vierges britanniques (les Îles)","alpha2":"VG","alpha3":"VGB","number":"092"},{"country_name_en":"Virgin Islands (U.S.)","country_name_fr":"Vierges des États-Unis (les Îles)","alpha2":"VI","alpha3":"VIR","number":"850"},{"country_name_en":"Wallis and Futuna","country_name_fr":"Wallis-et-Futuna","alpha2":"WF","alpha3":"WLF","number":"876"},{"country_name_en":"Western Sahara*","country_name_fr":"Sahara occidental (le)*","alpha2":"EH","alpha3":"ESH","number":"732"},{"country_name_en":"Yemen","country_name_fr":"Yémen (le)","alpha2":"YE","alpha3":"YEM","number":"887"},{"country_name_en":"Zambia","country_name_fr":"Zambie (la)","alpha2":"ZM","alpha3":"ZMB","number":"894"},{"country_name_en":"Zimbabwe","country_name_fr":"Zimbabwe (le)","alpha2":"ZW","alpha3":"ZWE","number":"716"}]')
    }
}]);
