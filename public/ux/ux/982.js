/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[982], {
    74646: function(e, t, n) {
        var a = n(17343)
          , l = n(82569);
        t.__esModule = !0,
        t.default = void 0;
        var r = l(n(66660))
          , o = l(n(50914))
          , i = l(n(69471))
          , c = l(n(67064))
          , s = a(n(87401))
          , u = l(n(29653))
          , f = l(n(54116))
          , d = n(88378)
          , p = l(n(63523))
          , m = {
            componentClass: u.default
        };
        var v = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return (0,
            i.default)(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.children
                  , n = e.componentClass
                  , a = void 0 === n ? function(e) {
                    return e ? p.default.some(e, function(e) {
                        return e.type !== f.default || e.props.href || e.props.onClick
                    }) ? "div" : "ul" : "div"
                }(t) : n
                  , l = e.className
                  , i = (0,
                o.default)(e, ["children", "componentClass", "className"])
                  , u = (0,
                d.splitBsProps)(i)
                  , m = u[0]
                  , v = u[1]
                  , b = (0,
                d.getClassSet)(m)
                  , w = "ul" === a && p.default.every(t, function(e) {
                    return e.type === f.default
                });
                return s.default.createElement(a, (0,
                r.default)({}, v, {
                    className: (0,
                    c.default)(l, b)
                }), w ? p.default.map(t, function(e) {
                    return (0,
                    s.cloneElement)(e, {
                        listItem: !0
                    })
                }) : t)
            }
            ,
            t
        }(s.default.Component);
        v.propTypes = m;
        var b = (0,
        d.bsClass)("list-group", v);
        t.default = b,
        e.exports = t.default
    },
    54116: function(e, t, n) {
        var a = n(17343)
          , l = n(82569);
        t.__esModule = !0,
        t.default = void 0;
        var r = l(n(18433))
          , o = l(n(66660))
          , i = l(n(50914))
          , c = l(n(69471))
          , s = l(n(67064))
          , u = a(n(87401))
          , f = l(n(23398))
          , d = n(88378)
          , p = n(96467)
          , m = {
            active: f.default.any,
            disabled: f.default.any,
            header: f.default.node,
            listItem: f.default.bool,
            onClick: f.default.func,
            href: f.default.string,
            type: f.default.string
        }
          , v = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            (0,
            c.default)(t, e);
            var n = t.prototype;
            return n.renderHeader = function(e, t) {
                return u.default.isValidElement(e) ? (0,
                u.cloneElement)(e, {
                    className: (0,
                    s.default)(e.props.className, t)
                }) : u.default.createElement("h4", {
                    className: t
                }, e)
            }
            ,
            n.render = function() {
                var e, t = this.props, n = t.active, a = t.disabled, l = t.className, r = t.header, c = t.listItem, f = t.children, p = (0,
                i.default)(t, ["active", "disabled", "className", "header", "listItem", "children"]), m = (0,
                d.splitBsProps)(p), v = m[0], b = m[1], w = (0,
                o.default)({}, (0,
                d.getClassSet)(v), {
                    active: n,
                    disabled: a
                });
                return b.href ? e = "a" : b.onClick ? (e = "button",
                b.type = b.type || "button") : e = c ? "li" : "span",
                b.className = (0,
                s.default)(l, w),
                r ? u.default.createElement(e, b, this.renderHeader(r, (0,
                d.prefix)(v, "heading")), u.default.createElement("p", {
                    className: (0,
                    d.prefix)(v, "text")
                }, f)) : u.default.createElement(e, b, f)
            }
            ,
            t
        }(u.default.Component);
        v.propTypes = m,
        v.defaultProps = {
            listItem: !1
        };
        var b = (0,
        d.bsClass)("list-group-item", (0,
        d.bsStyles)((0,
        r.default)(p.State), v));
        t.default = b,
        e.exports = t.default
    },
    27982: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return x
            }
        });
        var a = n(87401)
          , l = n(23398)
          , r = n.n(l)
          , o = n(32022)
          , i = n.n(o)
          , c = n(74646)
          , s = n.n(c)
          , u = n(59524)
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
        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, m(a.key), a)
            }
        }
        function m(e) {
            var t = function(e, t) {
                if ("object" !== d(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== d(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === d(t) ? t : String(t)
        }
        function v(e, t) {
            return (v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function b(e) {
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
                var n, a = y(e);
                if (t) {
                    var l = y(this).constructor;
                    n = Reflect.construct(a, arguments, l)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === d(t) || "function" == typeof t))
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
        function y(e) {
            return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                t && v(e, t)
            }(n, a.PureComponent);
            var t = b(n);
            function n(e) {
                var a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (a = t.call(this, e)).handleEmailClick = a.handleEmailClick.bind(w(a)),
                a
            }
            return function(e, t, n) {
                t && p(e.prototype, t),
                n && p(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleEmailClick",
                value: function() {
                    var e = this.props
                      , t = e.name
                      , n = e.value;
                    (0,
                    e.onComposeMail)({
                        recipients: {
                            to: [{
                                name: t,
                                address: n
                            }],
                            cc: [],
                            bcc: []
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.label
                      , n = e.value;
                    return a.createElement("div", {
                        className: "ow-contacts-ContactPreviewField-container"
                    }, a.createElement("div", {
                        className: "ow-contacts-ContactPreviewField"
                    }, a.createElement("div", {
                        className: "ow-contacts-ContactPreviewField-label",
                        "aria-label": "".concat(t)
                    }, a.createElement("span", null, "".concat(t, ":"))), a.createElement("div", {
                        className: "ow-contacts-ContactPreviewField-value"
                    }, a.createElement("a", {
                        role: f.HB.PRESENTATION,
                        onClick: this.handleEmailClick
                    }, n))))
                }
            }]),
            n
        }();
        h.defaultProps = {
            label: "",
            value: "",
            name: "",
            onComposeMail: function() {}
        },
        h.propTypes = {
            label: l.string,
            value: l.string,
            name: l.string,
            onComposeMail: l.func
        };
        var E = h
          , C = n(83416)
          , P = n(44910)
          , g = (0,
        C.Z)("contacts.mapUrl")
          , N = function(e) {
            var t = e.label
              , n = e.value
              , l = e.isAddress
              , r = e.isPhone;
            return a.createElement("div", {
                className: "ow-contacts-ContactPreviewField-container"
            }, a.createElement("div", {
                className: "ow-contacts-ContactPreviewField"
            }, a.createElement("div", {
                className: "ow-contacts-ContactPreviewField-label",
                "aria-label": "".concat(t)
            }, a.createElement("span", null, "".concat(t, ":"))), a.createElement("div", {
                className: "ow-contacts-ContactPreviewField-value"
            }, r ? a.createElement("a", {
                href: "tel:".concat(n)
            }, n) : !l && (0,
            P.on)(n) ? a.createElement("a", {
                href: l ? "".concat(g).concat(encodeURIComponent(n)) : n,
                target: "_blank",
                rel: "noopener noreferrer"
            }, n) : n)))
        };
        N.defaultProps = {
            label: "",
            value: "",
            isAddress: !1,
            isPhone: !1
        },
        N.propTypes = {
            label: r().string,
            value: r().string,
            isAddress: r().bool,
            isPhone: r().bool
        };
        var S = N
          , O = n(40944)
          , k = function(e) {
            var t = e.title
              , n = e.name
              , l = e.fields
              , r = e.isGroup
              , o = e.onComposeMail
              , c = e.index
              , d = e.length;
            return a.createElement("div", {
                className: "ow-contacts-ContactPreviewSection"
            }, r ? function(e, t, n, l, r) {
                return 0 === l ? a.createElement("div", {
                    className: "ow-contacts-ContactPreviewSection-title",
                    role: f.HB.HEADING,
                    "aria-level": f.DU.H3,
                    "aria-label": e
                }, a.createElement("span", null, e, " ", t && "(".concat(r, ")"))) : a.createElement("div", null)
            }(t, r, 0, c, d) : function(e, t, n, l) {
                return a.createElement("div", {
                    className: "ow-contacts-ContactPreviewSection-title",
                    role: f.HB.HEADING,
                    "aria-level": f.DU.H3,
                    "aria-label": e
                }, a.createElement("span", null, e, " ", t && "(".concat(l, ")")))
            }(t, r, 0, d), a.createElement("div", {
                className: "ow-contacts-ContactPreviewSection-fields"
            }, r ? a.createElement(s(), {
                className: "list-group"
            }, l.map(function(e) {
                var t, n, l = e.email, r = e.title, o = e.value;
                return l ? (l.indexOf("<") > -1 ? (t = l.substr(0, l.indexOf("<")),
                n = l.substring(l.lastIndexOf("<") + 1, l.lastIndexOf(">"))) : n = l,
                a.createElement("div", {
                    className: "ow-contacts-ContactPreviewSection-InGroupContact"
                }, a.createElement("div", {
                    className: "ow-contacts-ContactPreviewSection-InGroupContact-title"
                }, a.createElement("span", null, t)), a.createElement("div", {
                    className: "ow-contacts-ContactPreviewSection-InGroupContact-value"
                }, a.createElement("span", null, n)))) : a.createElement("div", {
                    className: "ow-contacts-ContactPreviewSection-InGroupContact"
                }, a.createElement("div", {
                    className: "ow-contacts-ContactPreviewSection-InGroupContact-title"
                }, a.createElement("span", null, r)), a.createElement("div", {
                    className: "ow-contacts-ContactPreviewSection-InGroupContact-value"
                }, a.createElement("span", null, o)))
            })) : l.map(function(e) {
                var t = e.type
                  , l = e.label
                  , r = e.value
                  , c = e.showLabel;
                if (e.clickable)
                    switch (t) {
                    case "lzEmail":
                        var s, f;
                        if ((null === (s = r) || void 0 === s ? void 0 : s.indexOf("~TimeStamp")) >= 0 || (null === (f = r) || void 0 === f ? void 0 : f.indexOf("-TimeStamp")) >= 0)
                            r = (0,
                            O.sx)(r).email;
                        return a.createElement(E, {
                            label: l,
                            value: r,
                            name: n,
                            onComposeMail: o
                        });
                    case "lzAddress":
                        return a.createElement(S, {
                            label: l,
                            value: r,
                            isAddress: !0
                        });
                    case "lzPhone":
                    case "lzPhone_mobile":
                        return a.createElement(S, {
                            label: l,
                            value: r,
                            isPhone: !0
                        });
                    case "lzWeb":
                        return a.createElement(S, {
                            label: l,
                            value: r
                        })
                    }
                return "lzPersonal" === t ? a.createElement(u.Z, {
                    label: l,
                    value: i()(r).format(TimeUtil.getDateTimePatterns().ShortDate),
                    showLabel: c
                }) : a.createElement(u.Z, {
                    label: l,
                    value: r,
                    showLabel: c
                })
            })))
        };
        k.defaultProps = {
            title: "",
            name: "",
            fields: [],
            isGroup: !1,
            onComposeMail: function() {},
            index: ""
        },
        k.propTypes = {
            title: l.string,
            name: l.string,
            index: l.string,
            fields: (0,
            l.oneOfType)([(0,
            l.arrayOf)((0,
            l.shape)({
                type: l.string,
                label: l.string,
                value: l.string,
                showLabel: l.bool,
                clickable: l.bool
            })), (0,
            l.arrayOf)((0,
            l.shape)({
                id: l.string,
                title: l.string,
                value: l.string,
                isGroup: l.bool,
                fields: (0,
                l.shape)({
                    email: l.string,
                    mobile: l.string,
                    phone: l.string,
                    address: l.string
                })
            }))]),
            isGroup: l.bool,
            onComposeMail: l.func
        };
        var x = k
    },
    59524: function(e, t, n) {
        var a = n(87401)
          , l = n(23398)
          , r = n.n(l)
          , o = function(e) {
            var t = e.label
              , n = e.value
              , l = e.showLabel;
            return a.createElement("div", {
                className: "ow-contacts-ContactPreviewField-container"
            }, a.createElement("div", {
                className: "ow-contacts-ContactPreviewField"
            }, l ? a.createElement("div", {
                className: "ow-contacts-ContactPreviewField-label",
                "aria-label": "".concat(t)
            }, a.createElement("span", null, "".concat(t, ":"))) : void 0, a.createElement("div", {
                className: "ow-contacts-ContactPreviewField-value",
                "arai-label": n
            }, a.createElement("span", null, n))))
        };
        o.defaultProps = {
            label: "",
            value: "",
            showLabel: !1
        },
        o.propTypes = {
            label: r().string,
            value: r().string,
            showLabel: r().bool
        },
        t.Z = o
    }
}]);
