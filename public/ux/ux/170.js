/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[170], {
    94571: function(e, t, n) {
        var o = n(82569);
        t.__esModule = !0,
        t.default = void 0;
        var r = o(n(18433))
          , a = o(n(66660))
          , i = o(n(50914))
          , c = o(n(69471))
          , l = o(n(67064))
          , s = o(n(87401))
          , u = n(88378)
          , d = n(96467)
          , f = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            (0,
            c.default)(t, e);
            var n = t.prototype;
            return n.hasContent = function(e) {
                var t = !1;
                return s.default.Children.forEach(e, function(e) {
                    t || (e || 0 === e) && (t = !0)
                }),
                t
            }
            ,
            n.render = function() {
                var e = this.props
                  , t = e.className
                  , n = e.children
                  , o = (0,
                i.default)(e, ["className", "children"])
                  , r = (0,
                u.splitBsProps)(o)
                  , c = r[0]
                  , d = r[1]
                  , f = (0,
                a.default)({}, (0,
                u.getClassSet)(c), {
                    hidden: !this.hasContent(n)
                });
                return s.default.createElement("span", (0,
                a.default)({}, d, {
                    className: (0,
                    l.default)(t, f)
                }), n)
            }
            ,
            t
        }(s.default.Component)
          , p = (0,
        u.bsClass)("label", (0,
        u.bsStyles)((0,
        r.default)(d.State).concat([d.Style.DEFAULT, d.Style.PRIMARY]), d.Style.DEFAULT, f));
        t.default = p,
        e.exports = t.default
    },
    82461: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return mc
            }
        });
        var o = n(87401)
          , r = n(16083)
          , a = n(55665)
          , i = n.n(a)
          , c = n(40757)
          , l = n(23398)
          , s = n.n(l)
          , u = n(23586)
          , d = n(45792)
          , f = n(10091)
          , p = n(84987)
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
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, v(o.key), o)
            }
        }
        function v(e) {
            var t = function(e, t) {
                if ("object" !== y(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== y(o))
                        return o;
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
                var n, o = w(e);
                if (t) {
                    var r = w(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === y(t) || "function" == typeof t))
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
        function w(e) {
            return (w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
            }(n, o.PureComponent);
            var t = E(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).handleAddAddressBook = o.handleAddAddressBook.bind(C(o)),
                o
            }
            return function(e, t, n) {
                t && b(e.prototype, t),
                n && b(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleAddAddressBook",
                value: function() {
                    (0,
                    this.props.onAddAddressBook)({
                        modalType: "alert",
                        modalProps: {
                            title: (0,
                            p.t)("common.WARNING"),
                            message: (0,
                            p.t)("contacts.errorMessage.ADDRESS_BOOK_LIMIT_REACHED")
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return o.createElement("div", {
                        className: "ow-contacts-ContactAddressBookToolbar-wrapper"
                    }, o.createElement("span", {
                        className: "ow-contacts-ContactAddressBookToolbar-title",
                        role: m.HB.HEADING,
                        "aria-level": m.DU.H2,
                        "aria-label": (0,
                        p.t)("app.MY_CONTACTS"),
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === m.BY.TABKEY && e.shiftKey && (e.preventDefault(),
                            (0,
                            h.kW)(".ow-contacts-ContactListSearch-dropdown-toggle"))
                        }
                    }, (0,
                    p.t)("app.MY_CONTACTS")), o.createElement(f.Z, {
                        className: "ow-contacts-ContactAddressBookToolbar"
                    }, o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.ADD_ADDRESSBOOK"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.ADD_ADDRESSBOOK"),
                        role: m.HB.BUTTON,
                        iconName: "add-contacts",
                        onClick: this.handleAddAddressBook,
                        onKeyDown: function(e) {
                            return e.key === m.BY.ENTERKEY && (0,
                            h.Mb)()
                        }
                    })))
                }
            }]),
            n
        }();
        O.defaultProps = {
            onAddAddressBook: function() {}
        },
        O.propTypes = {
            onAddAddressBook: l.func
        };
        var T = O
          , S = n(30112)
          , P = (0,
        r.$j)(null, function(e) {
            return {
                onAddAddressBook: function(t) {
                    return e((0,
                    S.Tj)(t))
                }
            }
        })(T)
          , k = n(77545)
          , N = n(98401)
          , A = n(35369)
          , _ = n(90656)
          , I = n(83416);
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
        function B(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, o)
            }
            return n
        }
        function j(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? B(Object(n), !0).forEach(function(t) {
                    R(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function R(e, t, n) {
            return (t = L(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function M(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, L(o.key), o)
            }
        }
        function L(e) {
            var t = function(e, t) {
                if ("object" !== D(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== D(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === D(t) ? t : String(t)
        }
        function x(e, t) {
            return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function H(e) {
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
                var n, o = U(e);
                if (t) {
                    var r = U(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === D(t) || "function" == typeof t))
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
        function U(e) {
            return (U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var G = (0,
        I.Z)("contacts")
          , Z = G.regexp.folderNameInvalidChars
          , V = G.addressBook.maxNameSize
          , K = function(e) {
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
                t && x(e, t)
            }(n, o.PureComponent);
            var t = H(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).state = {
                    isFormChanged: !1,
                    isFormValid: !1
                },
                o.handleFormChange = o.handleFormChange.bind(F(o)),
                o.handleFormValid = o.handleFormValid.bind(F(o)),
                o.handleFormInvalid = o.handleFormInvalid.bind(F(o)),
                o.handleFormValidSubmit = o.handleFormValidSubmit.bind(F(o)),
                o.handleCancel = o.handleCancel.bind(F(o)),
                o.handleSave = o.handleSave.bind(F(o)),
                o
            }
            return function(e, t, n) {
                t && M(e.prototype, t),
                n && M(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleFormChange",
                value: function(e, t) {
                    this.setState({
                        isFormChanged: t
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
                key: "handleFormValidSubmit",
                value: function() {
                    var e = this.props
                      , t = e.addressBook
                      , n = e.onSave
                      , o = this.form.getCurrentValues()
                      , r = this.form.props.data || this.form.getPristineValues();
                    t && t.id ? n(j(j(j({}, t), r), o)) : n(j({}, o))
                }
            }, {
                key: "handleCancel",
                value: function() {
                    var e = this.props.onCancel;
                    this.setState({
                        isFormChanged: !1
                    }),
                    e()
                }
            }, {
                key: "handleSave",
                value: function() {
                    this.form.submit(),
                    this.setState({
                        isFormChanged: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n, r, a, i, c = this, l = this.props, s = l.show, u = l.addressBook, d = l.addressBookNames, f = this.state, h = f.isFormChanged, y = f.isFormValid, b = u.id ? (0,
                    p.t)("contacts.catalogView.EDIT_ADDRESSBOOK") : (0,
                    p.t)("contacts.catalogView.ADD_ADDRESSBOOK_TITLE");
                    return o.createElement(N.Z, {
                        show: s,
                        onHide: this.handleCancel,
                        backdrop: "static"
                    }, o.createElement(N.Z.Header, {
                        closeButton: !0
                    }, o.createElement(N.Z.Title, {
                        id: "ow-contacts-editpnl-dialog",
                        role: m.HB.HEADING,
                        "aria-level": m.DU.H2,
                        "aria-label": b
                    }, b)), o.createElement(N.Z.Body, null, o.createElement(A.l0, {
                        className: "ow-contacts-ContactAddressBookEditor",
                        onChange: this.handleFormChange,
                        onValid: this.handleFormValid,
                        onInvalid: this.handleFormInvalid,
                        onValidSubmit: this.handleFormValidSubmit,
                        ref: function(e) {
                            c.form = e
                        }
                    }, o.createElement(A.UP, {
                        type: "text",
                        label: (0,
                        p.t)("contacts.catalogView.ADD_ADDRESSBOOK_LABEL"),
                        name: "name",
                        value: u && u.name || "",
                        validations: {
                            customValidation: function(e, t) {
                                var n, o, r, a, i, l, s = t.trim().toLowerCase(), f = u && u.name;
                                if ("" === s && !y)
                                    return (0,
                                    p.t)("contacts.catalogView.controlDialog.errorMessage.BLANK_ADDRESSBOOK_NAME");
                                if ("" === (null === (n = c.form) || void 0 === n ? void 0 : null === (o = n.getCurrentValues()) || void 0 === o ? void 0 : null === (r = o.name) || void 0 === r ? void 0 : r.trim()) && "" == (null === (a = c.form) || void 0 === a ? void 0 : null === (i = a.getPristineValues()) || void 0 === i ? void 0 : null === (l = i.name) || void 0 === l ? void 0 : l.trim()))
                                    return !1;
                                if (Z.test(t))
                                    return (0,
                                    _.WU)((0,
                                    p.t)("contacts.catalogView.controlDialog.errorMessage.INVALIDATE_ADDRESSBOOK_NAME"), (0,
                                    _.iC)(Z));
                                if (-1 !== d.indexOf(s)) {
                                    if (!f)
                                        return (0,
                                        _.WU)((0,
                                        p.t)("contacts.catalogView.controlDialog.errorMessage.DUP_ADDRESS_BOOK_NAME"), t);
                                    if (f.toLowerCase() !== s)
                                        return (0,
                                        _.WU)((0,
                                        p.t)("contacts.catalogView.controlDialog.errorMessage.DUP_ADDRESS_BOOK_NAME"), t)
                                }
                                return !0
                            },
                            maxLength: V
                        },
                        validationErrors: {
                            maxLength: (0,
                            _.WU)((0,
                            p.t)("contacts.catalogView.message.maxLengthText"), V),
                            isDefaultRequiredValue: "" === (null === (e = this.form) || void 0 === e ? void 0 : null === (t = e.getCurrentValues()) || void 0 === t ? void 0 : null === (n = t.name) || void 0 === n ? void 0 : n.trim()) && "" == (null === (r = this.form) || void 0 === r ? void 0 : null === (a = r.getPristineValues()) || void 0 === a ? void 0 : null === (i = a.name) || void 0 === i ? void 0 : i.trim()) && (0,
                            p.t)("contacts.catalogView.controlDialog.errorMessage.BLANK_ADDRESSBOOK_NAME")
                        },
                        required: !0,
                        "aria-required": "true"
                    }))), o.createElement(N.Z.Footer, null, o.createElement(k.Z, {
                        className: "ow-contacts-ContactAddressBookEditor-saveBtn ow-button-primary",
                        onClick: this.handleSave,
                        disabled: !(h && y),
                        "aria-label": (0,
                        p.t)("common.SAVE"),
                        role: m.HB.BUTTON,
                        "aria-disabled": !(h && y)
                    }, (0,
                    p.t)("common.SAVE")), o.createElement(k.Z, {
                        className: "ow-contacts-ContactAddressBookEditor-cancelBtn",
                        onClick: this.handleCancel,
                        "aria-label": (0,
                        p.t)("common.CANCEL"),
                        role: m.HB.BUTTON
                    }, (0,
                    p.t)("common.CANCEL"))))
                }
            }]),
            n
        }();
        K.defaultProps = {
            show: !1,
            addressBook: {},
            addressBookNames: [],
            onSave: function() {},
            onCancel: function() {}
        },
        K.propTypes = {
            show: l.bool,
            addressBook: (0,
            l.shape)({
                id: l.string,
                name: l.string
            }),
            addressBookNames: (0,
            l.arrayOf)(l.string),
            onSave: l.func,
            onCancel: l.func
        };
        var Y = K
          , z = n(46095)
          , W = n(46141)
          , X = n(63499)
          , $ = (0,
        r.$j)(function(e) {
            return {
                show: (0,
                X.SL)(e),
                addressBook: (0,
                W.$V)(e),
                addressBookNames: (0,
                W.jW)(e)
            }
        }, function(e) {
            return {
                onSave: (0,
                z.DE)(S.nw, e),
                onCancel: (0,
                z.DE)(S.Xz, e)
            }
        })(Y)
          , q = n(76081)
          , J = n(62347)
          , Q = n(32081)
          , ee = n(70224);
        function te(e) {
            "@babel/helpers - typeof";
            return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ne(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, oe(o.key), o)
            }
        }
        function oe(e) {
            var t = function(e, t) {
                if ("object" !== te(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== te(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === te(t) ? t : String(t)
        }
        function re(e, t) {
            return (re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, o = ce(e);
                if (t) {
                    var r = ce(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === te(t) || "function" == typeof t))
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
        function ce(e) {
            return (ce = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var le = function(e) {
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
                t && re(e, t)
            }(n, o.PureComponent);
            var t = ae(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).handleEditAddressBook = o.handleEditAddressBook.bind(ie(o)),
                o.handleDeleteAddressBook = o.handleDeleteAddressBook.bind(ie(o)),
                o.handleEmptyTrash = o.handleEmptyTrash.bind(ie(o)),
                o
            }
            return function(e, t, n) {
                t && ne(e.prototype, t),
                n && ne(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleEditAddressBook",
                value: function(e) {
                    e.stopPropagation();
                    var t = this.props
                      , n = t.data;
                    (0,
                    t.onEditAddressBook)(n)
                }
            }, {
                key: "handleDeleteAddressBook",
                value: function(e) {
                    e.stopPropagation();
                    var t = this.props
                      , n = t.data
                      , o = n.id
                      , r = n.name;
                    (0,
                    t.onDeleteAddressBook)(o, r, {
                        modalType: "confirm",
                        modalProps: {
                            title: (0,
                            p.t)("contacts.catalogView.DELETE_ADDRESS_BOOK"),
                            message: (0,
                            _.WU)((0,
                            p.t)("contacts.catalogView.message.CONFIRM_DELETE_NAMED_ADDRESS_BOOK"), r)
                        }
                    })
                }
            }, {
                key: "handleEmptyTrash",
                value: function(e) {
                    e.stopPropagation(),
                    (0,
                    this.props.onEmptyTrash)({
                        modalType: "confirm",
                        modalProps: {
                            title: (0,
                            p.t)("contacts.catalogView.EMPTY_TRASH_ADDRESS_BOOK"),
                            message: (0,
                            p.t)("contacts.catalogView.message.CONFIRM_EMPTY_TRASH_ADDRESS_BOOK")
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.mobile
                      , n = e.data.properties
                      , r = n.default
                      , a = n.trash
                      , i = n.collected
                      , c = "true" !== r && "true" !== a && "true" !== i
                      , l = "true" === a;
                    return t ? "true" === r || "true" === i ? null : o.createElement(f.Z.Dropdown, {
                        className: "ow-dropdown-options",
                        title: o.createElement(Q.Z, {
                            name: "options"
                        }),
                        pullRight: !0,
                        noCaret: !0
                    }, c && o.createElement(ee.Z, {
                        key: "edit",
                        eventKey: "edit",
                        onClick: this.handleEditAddressBook
                    }, (0,
                    p.t)("contacts.catalogView.EDIT_ADDRESSBOOK")), c && o.createElement(ee.Z, {
                        key: "delete",
                        eventKey: "delete",
                        onClick: this.handleDeleteAddressBook
                    }, (0,
                    p.t)("contacts.catalogView.DELETE_ADDRESSBOOK")), l && o.createElement(ee.Z, {
                        key: "emptyTrash",
                        eventKey: "emptyTrash",
                        onClick: this.handleEmptyTrash
                    }, (0,
                    p.t)("contacts.catalogView.EMPTY_TRASH_ADDRESS_BOOK"))) : o.createElement(f.Z, {
                        className: "ow-contacts-ContactAddressBookItemToolbar"
                    }, c && o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.catalogView.RENAME"),
                        iconName: "edit-contacts",
                        onClick: this.handleEditAddressBook,
                        role: m.HB.BUTTON,
                        "aria-label": (0,
                        p.t)("contacts.catalogView.RENAME"),
                        "aria-hidden": "true"
                    }), c && o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.catalogView.actions.DELETE_HINT_TEXT"),
                        iconName: "delete-contacts",
                        onClick: this.handleDeleteAddressBook,
                        role: m.HB.BUTTON,
                        "aria-label": (0,
                        p.t)("contacts.catalogView.actions.DELETE_HINT_TEXT"),
                        "aria-hidden": "true"
                    }), l && o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.catalogView.actions.TRASH_HINT_TEXT"),
                        iconName: "trash-contacts",
                        onClick: this.handleEmptyTrash,
                        role: m.HB.BUTTON,
                        "aria-label": (0,
                        p.t)("contacts.catalogView.actions.TRASH_HINT_TEXT"),
                        "aria-hidden": "true"
                    }))
                }
            }]),
            n
        }();
        le.defaultProps = {
            mobile: !1,
            data: {
                properties: {}
            },
            onEditAddressBook: function() {},
            onDeleteAddressBook: function() {},
            onEmptyTrash: function() {}
        },
        le.propTypes = {
            mobile: l.bool,
            data: (0,
            l.shape)({
                id: l.string,
                name: l.string,
                type: l.string,
                properties: (0,
                l.shape)({
                    default: l.string,
                    collected: l.string,
                    trash: l.string,
                    size: (0,
                    l.oneOfType)([l.string, l.number])
                })
            }),
            onEditAddressBook: l.func,
            onDeleteAddressBook: l.func,
            onEmptyTrash: l.func
        };
        var se = le
          , ue = n(67064)
          , de = n.n(ue)
          , fe = n(1972)
          , pe = n(17702)
          , me = n(79351)
          , he = (0,
        r.$j)(function(e) {
            return {
                sourceAddressBookId: (0,
                W.am)(e),
                selectedIds: (0,
                pe.pU)(e),
                currentGroups: (0,
                pe.EF)(e)
            }
        }, function(e) {
            return {
                onMoveContacts: function() {
                    return e(me.XW.apply(void 0, arguments))
                }
            }
        })
          , ye = function(e) {
            var t = e.connectDropTarget
              , n = e.children
              , r = e.className
              , a = e.canDrop
              , i = e.isOver;
            return t(o.createElement("div", {
                className: "".concat(r, " ").concat(i && a && "dragOver")
            }, n))
        };
        ye.defaultProps = {
            children: null,
            className: "",
            canDrop: !0,
            isOver: !1,
            connectDropTarget: function() {}
        },
        ye.propTypes = {
            children: s().node,
            className: s().string,
            canDrop: s().func,
            isOver: s().bool,
            connectDropTarget: s().func
        };
        var be = ye
          , ve = m.ZV.CONTACTS;
        var ge = he((0,
        fe.GR)(ve, {
            drop: function(e) {
                var t = e.onMoveContacts
                  , n = e.currentId
                  , o = e.sourceAddressBookId;
                t(e.selectedIds, n, o)
            },
            canDrop: function(e) {
                var t = e.currentId
                  , n = e.sourceAddressBookId
                  , o = e.selectedIds
                  , r = e.currentGroups
                  , a = e.disableDrop
                  , i = [];
                return r && r.forEach(function(e) {
                    var t = e.id;
                    o.includes(t) && i.push(t)
                }),
                n !== t && !a && !i.length
            }
        }, function(e, t) {
            return {
                connectDropTarget: e.dropTarget(),
                canDrop: t.canDrop(),
                isOver: t.isOver()
            }
        })(be));
        function Ee(e) {
            "@babel/helpers - typeof";
            return (Ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ce(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, we(o.key), o)
            }
        }
        function we(e) {
            var t = function(e, t) {
                if ("object" !== Ee(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Ee(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Ee(t) ? t : String(t)
        }
        function Oe(e, t) {
            return (Oe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Te(e) {
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
                var n, o = Se(e);
                if (t) {
                    var r = Se(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Ee(t) || "function" == typeof t))
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
        function Se(e) {
            return (Se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Pe = function(e) {
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
            }(n, o.PureComponent);
            var t = Te(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && Ce(e.prototype, t),
                n && Ce(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.id
                      , n = e.displayCount
                      , r = e.tooltip
                      , a = e.iconName
                      , i = e.name
                      , c = e.size
                      , l = e.alwaysShowSize
                      , s = e.children
                      , u = e.disableDrop;
                    return o.createElement(ge, {
                        className: "ow-contacts-ContactAddressBookDropTarget",
                        currentId: t,
                        disableDrop: u
                    }, o.createElement("div", {
                        className: "ow-contacts-ContactAddressBookItem",
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            var t;
                            e.key === m.BY.ENTERKEY && (null === e || void 0 === e || null === (t = e.target) || void 0 === t || t.click())
                        },
                        title: n ? r : ""
                    }, o.createElement(Q.Z, {
                        name: a
                    }), o.createElement("div", {
                        className: "ow-contacts-ContactAddressBookItem-name",
                        "aria-label": i
                    }, o.createElement("span", null, i)), s, n && o.createElement("div", {
                        className: de()("ow-contacts-ContactAddressBookItem-size", l && "alwaysOn")
                    }, o.createElement("span", null, c > 99 ? "99+" : c))))
                }
            }]),
            n
        }();
        Pe.defaultProps = {
            id: "",
            displayCount: !0,
            tooltip: "",
            iconName: "",
            name: "",
            size: "",
            alwaysShowSize: !1,
            children: void 0,
            disableDrop: !1
        },
        Pe.propTypes = {
            id: l.string,
            displayCount: l.bool,
            tooltip: l.string,
            iconName: l.string,
            name: l.string,
            size: (0,
            l.oneOfType)(l.string, l.number),
            alwaysShowSize: l.bool,
            children: l.node,
            disableDrop: l.bool
        };
        var ke = n(4446);
        function Ne(e) {
            "@babel/helpers - typeof";
            return (Ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ae() {
            return (Ae = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function _e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Ie(o.key), o)
            }
        }
        function Ie(e) {
            var t = function(e, t) {
                if ("object" !== Ne(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Ne(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Ne(t) ? t : String(t)
        }
        function De(e, t) {
            return (De = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Be(e) {
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
                var n, o = Re(e);
                if (t) {
                    var r = Re(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Ne(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return je(e)
                }(this, n)
            }
        }
        function je(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Re(e) {
            return (Re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Me = ke.UhU.isMobile
          , Le = ke.UhU.isTablet
          , xe = (0,
        I.Z)("contacts.addressBook")
          , He = xe.enableTrash
          , Fe = xe.displayCount
          , Ue = xe.maxCollectedEmails
          , Ge = function(e) {
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
                t && De(e, t)
            }(n, o.Component);
            var t = Be(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).handleSelectedChange = o.handleSelectedChange.bind(je(o)),
                o.renderItem = o.renderItem.bind(je(o)),
                o
            }
            return function(e, t, n) {
                t && _e(e.prototype, t),
                n && _e(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "getDisplayInfo",
                value: function(e) {
                    var t = e.name
                      , n = e.properties
                      , o = n.default
                      , r = n.trash
                      , a = n.collected
                      , i = n.size
                      , c = "folder-contacts"
                      , l = t;
                    return "true" === o ? (c = "addressbook-contacts",
                    l = (0,
                    p.t)("contacts.DEFAULT_ADDRESSBOOK_LABEL")) : "true" === r ? (c = "trash-contacts",
                    l = (0,
                    p.t)("contacts.TRASH")) : "true" === a && (l = (0,
                    p.t)("contacts.AUTO_COMPLETE_LABEL"),
                    c = i >= Ue ? "autocomplete-exceed-contacts" : "autocomplete-contacts"),
                    {
                        displayName: l,
                        iconName: c
                    }
                }
            }, {
                key: "getTooltipInfo",
                value: function(e) {
                    return e <= 0 || isNaN(e) ? void 0 : (0,
                    _.WU)((0,
                    p.t)("contacts.catalogView.COUNT_TOOLTIP"), e)
                }
            }, {
                key: "getSizeInfo",
                value: function(e, t) {
                    return t || void 0 === t ? "" === e ? this.props.defaultAutocollected : e : e > 0 ? e : ""
                }
            }, {
                key: "handleSelectedChange",
                value: function(e) {
                    (0,
                    this.props.onSelectAddressBook)(e[0].id)
                }
            }, {
                key: "renderItem",
                value: function(e) {
                    var t = this.props
                      , n = t.onEditAddressBook
                      , r = t.onDeleteAddressBook
                      , a = t.onEmptyTrash
                      , i = e.id
                      , c = e.properties
                      , l = c.default
                      , s = c.trash
                      , u = c.collected
                      , d = c.size
                      , f = void 0 === d ? 0 : d;
                    if (He || "true" !== s) {
                        var p = {
                            onEditAddressBook: n,
                            onDeleteAddressBook: r,
                            onEmptyTrash: a
                        }
                          , m = this.getDisplayInfo(e)
                          , h = m.displayName
                          , y = m.iconName
                          , b = this.getTooltipInfo(f)
                          , v = this.getSizeInfo(f, u);
                        return o.createElement(Pe, {
                            id: i,
                            displayCount: Fe,
                            tooltip: b,
                            iconName: y,
                            name: h,
                            size: v,
                            alwaysShowSize: "true" === u || "true" === l,
                            disableDrop: "true" === u || "true" === s
                        }, Me || Le ? o.createElement(se, Ae({
                            mobile: !0,
                            data: e
                        }, p)) : o.createElement(J.Z, {
                            className: "ow-contacts-ContactAddressBookItem-hoverToolbar",
                            enableHover: !0
                        }, o.createElement(se, Ae({
                            data: e
                        }, p))))
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.data
                      , n = e.defaultSelected;
                    return o.createElement("div", {
                        className: "ow-contacts-ContactAddressBookList-container"
                    }, o.createElement(q.Z, {
                        className: "ow-contacts-ContactAddressBookList",
                        data: t,
                        defaultSelected: [t.find(function(e) {
                            return e.id === n
                        })],
                        renderItem: this.renderItem,
                        onSelectedChange: this.handleSelectedChange
                    }))
                }
            }]),
            n
        }();
        Ge.defaultProps = {
            data: [],
            defaultSelected: "",
            onSelectAddressBook: function() {},
            onEditAddressBook: function() {},
            onDeleteAddressBook: function() {},
            onEmptyTrash: function() {}
        },
        Ge.propTypes = {
            data: (0,
            l.arrayOf)((0,
            l.shape)({
                id: l.string,
                name: l.string,
                type: l.string,
                properties: (0,
                l.shape)({
                    default: l.string,
                    collected: l.string,
                    trash: l.string,
                    size: (0,
                    l.oneOfType)([l.string, l.number])
                })
            })),
            defaultSelected: l.string,
            onSelectAddressBook: l.func,
            onEditAddressBook: l.func,
            onDeleteAddressBook: l.func,
            onEmptyTrash: l.func
        };
        var Ze = Ge
          , Ve = n(3052)
          , Ke = (0,
        r.$j)(function(e) {
            return {
                data: (0,
                W.j7)(e),
                defaultSelected: (0,
                W.am)(e),
                defaultAutocollected: (0,
                Ve.i1)(e)
            }
        }, function(e, t) {
            return {
                onSelectAddressBook: function(n) {
                    e((0,
                    S.lL)(n)),
                    t.onSelectAddressBook && t.onSelectAddressBook()
                },
                onEditAddressBook: function(t) {
                    return e((0,
                    S.JP)(t))
                },
                onDeleteAddressBook: function(t, n, o) {
                    return e((0,
                    S.sV)(t, n, o))
                },
                onEmptyTrash: function(t) {
                    return e((0,
                    S.Wr)(t))
                }
            }
        })(Ze)
          , Ye = n(43557)
          , ze = (0,
        r.$j)(function(e) {
            return {
                isShown: (0,
                W.S_)(e)
            }
        })(Ye.Z)
          , We = n(44461);
        function Xe(e) {
            "@babel/helpers - typeof";
            return (Xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function $e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, qe(o.key), o)
            }
        }
        function qe(e) {
            var t = function(e, t) {
                if ("object" !== Xe(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Xe(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Xe(t) ? t : String(t)
        }
        function Je(e, t) {
            return (Je = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Qe(e) {
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
                var n, o = et(e);
                if (t) {
                    var r = et(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Xe(t) || "function" == typeof t))
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
        function et(e) {
            return (et = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var tt = function(e) {
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
                t && Je(e, t)
            }(n, o.PureComponent);
            var t = Qe(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && $e(e.prototype, t),
                n && $e(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e = this.props.onSelectAddressBook;
                    return o.createElement("div", {
                        className: "ow-contacts-ContactAddressBookPanel"
                    }, o.createElement("div", {
                        className: "ow-contacts-ContactAddressBookPanel-header"
                    }, o.createElement(We.Z, null, o.createElement(P, null))), o.createElement("div", {
                        className: "ow-contacts-ContactAddressBookPanel-body"
                    }, o.createElement(We.Z, null, o.createElement(ze, null)), o.createElement(We.Z, null, o.createElement(Ke, {
                        onSelectAddressBook: e
                    }))), o.createElement(We.Z, null, o.createElement($, null)))
                }
            }]),
            n
        }();
        tt.defaultProps = {
            onSelectAddressBook: function() {}
        },
        tt.propTypes = {
            onSelectAddressBook: s().func
        };
        var nt = tt
          , ot = n(49758)
          , rt = n.n(ot)
          , at = n(94571)
          , it = n.n(at)
          , ct = m.sH.SORT_FIRSTNAME_ASC
          , lt = m.sH.SORT_LASTNAME_ASC
          , st = m.sH.SORT_NICKNAME_ASC
          , ut = m.sH.TYPE_FILTER_GROUP
          , dt = function(e) {
            var t = e.disabled
              , n = e.sortItems
              , r = e.sortType
              , a = e.onSort
              , i = e.onGroupEnable
              , c = e.isGroupSelected;
            return o.createElement("div", {
                className: "ow-contacts-ContactListSort"
            }, o.createElement(f.Z.Dropdown, {
                pullRight: !0,
                id: "contactListSort",
                onSelect: function(e) {
                    e !== r && a(e)
                },
                disabled: t,
                title: o.createElement(Q.Z, {
                    name: "sort",
                    title: (0,
                    p.t)("mail.listView.SORT")
                }),
                "aria-label": (0,
                p.t)("mail.listView.SORT"),
                noCaret: !0
            }, o.createElement(f.Z.Button, {
                header: !0,
                isImplicit: !0,
                "aria-level": "6",
                "aria-label": (0,
                p.t)("contacts.list.sort.SORT_TITLE")
            }, (0,
            p.t)("contacts.list.sort.SORT_TITLE")), n.map(function(e) {
                var t = e.id
                  , n = e.text;
                return o.createElement(f.Z.Button, {
                    key: t,
                    eventKey: t,
                    active: t === r,
                    isImplicit: !0
                }, n)
            })), o.createElement(k.Z, {
                className: "ow-group-contact-filter",
                onClick: function(e) {
                    e.target.classList.contains("ow-icon-contact-group") ? i(ut) : i()
                },
                onKeyDown: function(e) {
                    var t, n, o, r;
                    e.key === m.BY.ENTERKEY && ("ow-contact-group-blue" === (null === (t = document.activeElement) || void 0 === t ? void 0 : null === (n = t.childNodes[1]) || void 0 === n ? void 0 : n.id) ? (e.preventDefault(),
                    i()) : "ow-contact-group" === (null === (o = document.activeElement) || void 0 === o ? void 0 : null === (r = o.childNodes[1]) || void 0 === r ? void 0 : r.id) && (e.preventDefault(),
                    i(ut)))
                },
                "aria-label": (0,
                p.t)("contacts.CONTACT_GROUP_LABEL"),
                role: m.HB.BUTTON,
                disabled: t,
                title: (0,
                p.t)("contacts.CONTACT_GROUP_LABEL"),
                "aria-disabled": t
            }, c ? o.createElement(Q.Z, {
                name: "contact-group-blue",
                id: "ow-contact-group-blue"
            }) : o.createElement(Q.Z, {
                name: "contact-group",
                id: "ow-contact-group"
            })))
        };
        dt.defaultProps = {
            disabled: !1,
            sortItems: [],
            sortType: lt,
            onSort: function() {}
        },
        dt.propTypes = {
            disabled: l.bool,
            sortItems: (0,
            l.arrayOf)((0,
            l.shape)({
                id: l.string.isRequired,
                text: l.string.isRequired
            })),
            sortType: (0,
            l.oneOf)([ct, lt, st]),
            onSort: l.func
        };
        var ft = dt
          , pt = n(77424)
          , mt = n(63482)
          , ht = n(3203)
          , yt = m.$B.CONTACT_ADDRESSBOOK_AUTOCOLLECTED
          , bt = m.sH.SORT_FIRSTNAME_ASC
          , vt = m.sH.SORT_LASTNAME_ASC
          , gt = m.sH.SORT_NICKNAME_ASC
          , Et = (0,
        r.$j)(function(e) {
            var t = (0,
            W.mo)(e) || {}
              , n = t.id
              , o = t.properties
              , r = (void 0 === o ? {} : o).size
              , a = (0,
            mt.Mk)(e)
              , i = (0,
            pe.d7)(e)
              , c = (0,
            I.Z)("contacts.sortFields")
              , l = (0,
            ht.ok)(e)
              , s = {
                nickname: {
                    id: gt,
                    text: (0,
                    p.t)("contacts.list.sort.NICK_NAME")
                }
            }
              , u = {
                firstName: {
                    id: bt,
                    text: (0,
                    p.t)("contacts.list.sort.FIRST_NAME")
                },
                lastName: {
                    id: vt,
                    text: (0,
                    p.t)("contacts.list.sort.LAST_NAME")
                }
            };
            u = l ? Object.assign(u, s) : u;
            var d = [];
            return c.map(function(e) {
                u[e] && d.push(u[e])
            }),
            {
                disabled: n === yt || "0" === r,
                sortItems: d,
                sortType: a,
                isGroupSelected: i
            }
        }, function(e) {
            return {
                onSort: function(t) {
                    return e((0,
                    pt._$)(t))
                },
                onGroupEnable: function(t) {
                    return e((0,
                    pt.AU)(t))
                }
            }
        })(ft);
        function Ct(e) {
            "@babel/helpers - typeof";
            return (Ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function wt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Ot(o.key), o)
            }
        }
        function Ot(e) {
            var t = function(e, t) {
                if ("object" !== Ct(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Ct(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Ct(t) ? t : String(t)
        }
        function Tt(e, t) {
            return (Tt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function St(e) {
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
                var n, o = kt(e);
                if (t) {
                    var r = kt(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Ct(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Pt(e)
                }(this, n)
            }
        }
        function Pt(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function kt(e) {
            return (kt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Nt = function(e) {
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
            }(n, o.PureComponent);
            var t = St(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).handleBadgeClick = o.handleBadgeClick.bind(Pt(o)),
                o.getDisplayInfo = o.getDisplayInfo.bind(Pt(o)),
                o
            }
            return function(e, t, n) {
                t && wt(e.prototype, t),
                n && wt(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleBadgeClick",
                value: function() {
                    (0,
                    this.props.onSelectVisible)()
                }
            }, {
                key: "getDisplayInfo",
                value: function(e) {
                    var t = e.name
                      , n = e.properties
                      , o = n.default
                      , r = n.trash
                      , a = n.collected
                      , i = t;
                    return "true" === o ? i = (0,
                    p.t)("contacts.DEFAULT_ADDRESSBOOK_LABEL") : "true" === r ? i = (0,
                    p.t)("contacts.TRASH") : "true" === a && (i = (0,
                    p.t)("contacts.AUTO_COMPLETE_LABEL")),
                    i
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.selectionCount
                      , r = t.searchCount
                      , a = t.selectedAddressBook
                      , i = a && this.getDisplayInfo(a);
                    return o.createElement("div", {
                        className: "ow-contacts-ContactListHeader"
                    }, o.createElement("div", {
                        className: "ow-contacts-ContactListHeader-badge-wrapper"
                    }, o.createElement(rt(), {
                        className: "ow-contacts-ContactListHeader-badge",
                        onClick: this.handleBadgeClick,
                        title: (0,
                        p.t)("contacts.list.tooltips.SELECT_IN_VIEW"),
                        onKeyDown: function(t) {
                            return t.key === m.BY.ENTERKEY && e.handleBadgeClick()
                        },
                        tabIndex: 0,
                        role: m.HB.CHECKBOX,
                        "aria-label": 0 !== n ? "".concat(n, " ").concat((0,
                        p.t)("aria.label.SELECT")) : (0,
                        p.t)("contacts.list.tooltips.SELECT_IN_VIEW"),
                        "aria-checked": 0 !== n
                    }, n > 0 ? n : "")), null !== r && o.createElement("div", {
                        className: "ow-contacts-ContactListHeader-label-wrapper"
                    }, o.createElement(it(), null, (0,
                    _.WU)((0,
                    p.t)("contacts.list.SEARCH_RESULTS"), r))), null === r && o.createElement("span", {
                        className: "ow-contacts-ContactListHeader-title",
                        title: i,
                        "aria-label": i,
                        role: m.HB.HEADING,
                        "aria-level": m.DU.H3
                    }, i), o.createElement("div", {
                        className: "ow-contacts-ContactListHeader-sort-wrapper"
                    }, o.createElement(Et, null)))
                }
            }]),
            n
        }();
        Nt.defaultProps = {
            selectionCount: 0,
            searchCount: null,
            onSelectVisible: function() {}
        },
        Nt.propTypes = {
            selectionCount: l.number,
            searchCount: l.number,
            onSelectVisible: l.func
        };
        var At = Nt
          , _t = (0,
        r.$j)(function(e) {
            var t = (0,
            W.mo)(e)
              , n = (0,
            pe.u0)(e)
              , o = n.selectedInfo
              , r = n.renderData.collapsing
              , a = (0,
            pe.lT)(e)
              , i = (0,
            pe.mS)(e)
              , c = o.length
              , l = (0,
            pe.iH)(e);
            return {
                selectedAddressBook: t,
                collapsing: r,
                searchCount: l && l.result ? l.result.totalCount : null,
                selectionCount: c,
                touchSearchMode: a,
                touchSelectMode: i
            }
        }, function(e) {
            return {
                onSelectVisible: function() {
                    return e((0,
                    pt.hF)())
                },
                onToggleTouchSearchMode: function(t) {
                    return e((0,
                    pt.Jp)(t))
                }
            }
        })(At)
          , It = n(76555)
          , Dt = n(55086)
          , Bt = n(47093)
          , jt = n(10283)
          , Rt = n(13154)
          , Mt = n(76707)
          , Lt = n.n(Mt)
          , xt = function(e) {
            var t = e.active
              , n = e.index
              , r = e.item
              , a = e.onSelectedChange
              , i = r.count
              , c = r.prefix
              , l = 0 === i && "empty"
              , s = t && "active";
            return o.createElement("div", {
                role: m.HB.PRESENTATION,
                className: de()("ow-contacts-ContactListIndexItem", l, s),
                onClick: function() {
                    a(n)
                }
            }, o.createElement("span", null, c))
        };
        xt.defaultProps = {
            active: !1,
            index: 0,
            item: {},
            onSelectedChange: function() {}
        },
        xt.propTypes = {
            active: l.bool,
            index: l.number,
            item: (0,
            l.shape)({
                count: l.number,
                prefix: l.string
            }),
            onSelectedChange: l.func
        };
        var Ht = xt;
        function Ft(e) {
            "@babel/helpers - typeof";
            return (Ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ut(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Gt(o.key), o)
            }
        }
        function Gt(e) {
            var t = function(e, t) {
                if ("object" !== Ft(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Ft(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Ft(t) ? t : String(t)
        }
        function Zt(e, t) {
            return (Zt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Vt(e) {
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
                var n, o = Yt(e);
                if (t) {
                    var r = Yt(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Ft(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Kt(e)
                }(this, n)
            }
        }
        function Kt(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Yt(e) {
            return (Yt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var zt = function(e) {
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
                t && Zt(e, t)
            }(n, o.PureComponent);
            var t = Vt(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).handleSelectedChange = o.handleSelectedChange.bind(Kt(o)),
                o
            }
            return function(e, t, n) {
                t && Ut(e.prototype, t),
                n && Ut(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillUnmount",
                value: function() {
                    (0,
                    this.props.onUnmount)()
                }
            }, {
                key: "handleSelectedChange",
                value: function(e) {
                    var t = this.props
                      , n = t.indexList
                      , o = t.listData
                      , r = t.prefixIndex
                      , a = t.onClick
                      , i = o.sections;
                    n[e] && 0 !== n[e].count && e !== r && a({
                        scrollTop: i[e - n.slice(0, e).filter(function(e) {
                            return 0 === e.count
                        }).length].top
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.indexList
                      , r = t.prefixIndex;
                    return o.createElement("div", {
                        className: "ow-contacts-ContactListIndexPanel"
                    }, n.map(function(t, a) {
                        var i = t.prefix;
                        return o.createElement(Ht, {
                            key: i,
                            active: r === a,
                            index: a,
                            item: n[a],
                            onSelectedChange: e.handleSelectedChange
                        })
                    }))
                }
            }]),
            n
        }();
        zt.defaultProps = {
            indexList: [],
            listData: {},
            prefixIndex: 0,
            onClick: function() {},
            onUnmount: function() {}
        },
        zt.propTypes = {
            indexList: (0,
            l.arrayOf)((0,
            l.shape)({
                count: l.number,
                prefix: l.string
            })),
            listData: (0,
            l.shape)({
                rows: (0,
                l.arrayOf)(l.object),
                sections: (0,
                l.arrayOf)(l.object),
                totalHeight: l.number,
                itemTotalCount: l.number
            }),
            prefixIndex: l.number,
            onClick: l.func,
            onUnmount: l.func
        };
        var Wt = zt
          , Xt = (0,
        r.$j)(function(e) {
            var t = (0,
            pe.jw)(e)
              , n = (0,
            pe.u0)(e);
            return {
                indexList: t,
                listData: n.renderData,
                prefixIndex: n.prefixIndex
            }
        }, function(e, t) {
            return {
                onClick: function(t) {
                    return e((0,
                    pt.PS)(t))
                },
                onUnmount: function() {
                    t.onUnmountIndexPanel()
                }
            }
        })(Wt);
        function $t(e) {
            "@babel/helpers - typeof";
            return ($t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function qt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Jt(o.key), o)
            }
        }
        function Jt(e) {
            var t = function(e, t) {
                if ("object" !== $t(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== $t(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === $t(t) ? t : String(t)
        }
        function Qt(e, t) {
            return (Qt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function en(e) {
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
                var n, o = nn(e);
                if (t) {
                    var r = nn(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === $t(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return tn(e)
                }(this, n)
            }
        }
        function tn(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function nn(e) {
            return (nn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var on = function(e) {
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
                t && Qt(e, t)
            }(n, o.PureComponent);
            var t = en(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).state = {
                    show: !1,
                    target: null
                },
                o.wrapper = null,
                o.zIndex = void 0,
                o.handleClick = o.handleClick.bind(tn(o)),
                o.handleOverlayHide = o.handleOverlayHide.bind(tn(o)),
                o
            }
            return function(e, t, n) {
                t && qt(e.prototype, t),
                n && qt(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    this.wrapper = this.innerDom.parentElement,
                    this.zIndex = this.wrapper.style.zIndex
                }
            }, {
                key: "handleClick",
                value: function(e) {
                    this.wrapper.style.zIndex = 1e4;
                    var t = e.target
                      , n = this.state.show;
                    this.setState({
                        show: !n,
                        target: t
                    })
                }
            }, {
                key: "handleOverlayHide",
                value: function() {
                    this.wrapper.style.zIndex = this.zIndex,
                    this.setState({
                        show: !1,
                        target: null
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.section.label
                      , n = this.state
                      , r = n.show
                      , a = n.target;
                    return o.createElement("div", {
                        className: "ow-contacts-ContactListSectionHeader",
                        ref: function(t) {
                            e.innerDom = t
                        }
                    }, o.createElement("div", {
                        className: "ow-contacts-ContactListSectionHeader-labelWrapper"
                    }, o.createElement("div", {
                        role: m.HB.PRESENTATION,
                        className: "ow-contacts-ContactListSectionHeader-label",
                        onClick: this.handleClick
                    }, o.createElement(Lt(), {
                        show: r,
                        target: a,
                        placement: "right",
                        container: this,
                        onHide: this.handleOverlayHide,
                        animation: !1,
                        rootClose: !0
                    }, o.createElement(Xt, {
                        onUnmountIndexPanel: this.handleOverlayHide
                    })), o.createElement("span", null, t))))
                }
            }]),
            n
        }();
        on.defaultProps = {
            section: {}
        },
        on.propTypes = {
            section: (0,
            l.shape)({
                height: l.number,
                top: l.number,
                label: l.string
            })
        };
        var rn = on;
        function an(e) {
            "@babel/helpers - typeof";
            return (an = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function cn() {
            return (cn = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ln(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, o)
            }
            return n
        }
        function sn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ln(Object(n), !0).forEach(function(t) {
                    un(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ln(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function un(e, t, n) {
            return (t = fn(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function dn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, fn(o.key), o)
            }
        }
        function fn(e) {
            var t = function(e, t) {
                if ("object" !== an(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== an(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === an(t) ? t : String(t)
        }
        function pn(e, t) {
            return (pn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function mn(e) {
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
                var n, o = yn(e);
                if (t) {
                    var r = yn(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === an(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return hn(e)
                }(this, n)
            }
        }
        function hn(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function yn(e) {
            return (yn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var bn = ke.UhU.isMobile
          , vn = ke.UhU.isTablet
          , gn = m.$B.CONTACT_ADDRESSBOOK_AUTOCOLLECTED
          , En = m.sH.TUI_SELECT_MODE_OFF
          , Cn = m.sH.TUI_SELECT_MODE_ON
          , wn = m.RI.SEARCH_STATUS_STANDBY
          , On = m.RI.SEARCH_STATUS_SEARCHING
          , Tn = function(e) {
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
                t && pn(e, t)
            }(n, o.PureComponent);
            var t = mn(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).renderItem = o.renderItem.bind(hn(o)),
                o.renderSection = o.renderSection.bind(hn(o)),
                o.getWrapperClass = o.getWrapperClass.bind(hn(o)),
                o.handleResize = o.handleResize.bind(hn(o)),
                o.getItemKey = o.getItemKey.bind(hn(o)),
                o.getMotionStyles = o.getMotionStyles.bind(hn(o)),
                o.getDefaultStyles = o.getDefaultStyles.bind(hn(o)),
                o.getLeaveMotionStyle = o.getLeaveMotionStyle.bind(hn(o)),
                o
            }
            return function(e, t, n) {
                t && dn(e.prototype, t),
                n && dn(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.bufferCount
                      , n = e.itemHeight
                      , o = e.sectionHeaderHeight
                      , r = e.scrollTop;
                    (0,
                    e.onNavigationUpdate)({
                        bufferCount: t,
                        itemHeight: n,
                        sectionHeaderHeight: o,
                        scrollTop: r
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t, n, o, r, a = this.props.data.itemTotalCount, i = (null === (t = this.props) || void 0 === t ? void 0 : null === (n = t.selectedAddressBook) || void 0 === n ? void 0 : n.name) !== (null === e || void 0 === e ? void 0 : null === (o = e.selectedAddressBook) || void 0 === o ? void 0 : o.name);
                    a < (null === e || void 0 === e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : r.itemTotalCount) && void 0 !== a && ke.UhU.isDesktop && !i && null != this.listComponent && (0,
                    h.we)("[class*=ow-icon]", a, this.listComponent, null)
                }
            }, {
                key: "getWrapperClass",
                value: function(e) {
                    return (0,
                    this.props.isItemSelected)(e) ? "ow-VirtualizedList-item-selected" : ""
                }
            }, {
                key: "getCollapseSectionY",
                value: function(e, t) {
                    var n = e.top
                      , o = t.expandedHeight
                      , r = t.collapsedHeight
                      , a = t.expandedTop
                      , i = void 0 === a ? 0 : a
                      , c = t.collapsingExpanded
                      , l = t.deltaY
                      , s = this.props
                      , u = s.scrollTop
                      , d = s.motionConfig
                      , f = s.data
                      , p = f.expanded
                      , m = f.collapsing
                      , h = sn(sn({}, d), {}, {
                        precision: .5
                    });
                    if (!p && !m)
                        return n;
                    if (!p || m)
                        return (0,
                        It.ST)(n, h);
                    var y = 0;
                    return y = l > 0 ? Math.round((o - r) * Math.abs(l) / (i - u)) : Math.round((o - r) * Math.abs(l) / (o - r - (i - u))),
                    c ? n < i ? n : n - y : n <= i ? n : (0,
                    It.ST)(n - y, h)
                }
            }, {
                key: "getCollapseY",
                value: function(e, t) {
                    var n = e.index
                      , o = e.clientRect
                      , r = o.top
                      , a = o.height
                      , i = o.collapsedHeight
                      , c = o.expandedHeight
                      , l = t.expandedIndex
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
                      , E = m.data
                      , C = E.collapsing
                      , w = E.expanded
                      , O = sn(sn({}, g), {}, {
                        precision: .5
                    });
                    if (!w && !C)
                        return n < h || n > y ? r : (0,
                        It.ST)(r, O);
                    if (!w || C)
                        return n < h || n > y ? r : (0,
                        It.ST)(r, O);
                    var T = 0;
                    return T = d > 0 ? Math.round((c - i) * Math.abs(d)) / (u - b) : Math.round((c - i) * Math.abs(d)) / (c - i - u + b),
                    f ? n <= l ? r : r - T : n <= l ? r : p ? n > l + Math.ceil((v - (u - b)) / a) ? r : (0,
                    It.ST)(r, O) : n > l + Math.ceil((v - (u - b)) / a) ? r - T : (0,
                    It.ST)(r - T, O)
                }
            }, {
                key: "getCollapseScrollTop",
                value: function(e, t) {
                    var n = t.expandedTop
                      , o = t.deltaY
                      , r = t.collapsingExpanded
                      , a = t.expanded
                      , i = this.props
                      , c = i.scrollTop
                      , l = i.motionConfig
                      , s = i.listHeight
                      , u = i.data
                      , d = u.collapsing
                      , f = u.expanded
                      , p = u.collapsedHeight
                      , m = sn(sn({}, l), {}, {
                        precision: .01
                    });
                    if (!f || d)
                        return d ? (0,
                        It.ST)(c, m) : c;
                    var h = 0;
                    if (o > 0)
                        h = n - Math.abs(o);
                    else {
                        var y = n - c;
                        h = Math.round(n - y * (Math.abs(o) / (s - y - p)))
                    }
                    if (r)
                        return h;
                    var b = a ? n : c;
                    return (0,
                    It.ST)(b, m)
                }
            }, {
                key: "getCollapseHeight",
                value: function(e, t) {
                    var n = e.expanded
                      , o = e.clientRect
                      , r = o.height
                      , a = o.collapsedHeight
                      , i = o.expandedHeight
                      , c = t.collapsingPercentage
                      , l = t.collapsingExpanded
                      , s = t.expanded
                      , u = this.props
                      , d = u.motionConfig
                      , f = u.data.collapsing
                      , p = sn(sn({}, d), {}, {
                        precision: .5
                    })
                      , m = Math.round((i - a) * c);
                    return l ? n ? m + a : r : n ? (0,
                    It.ST)(s && !f ? i : a, p) : r
                }
            }, {
                key: "getCollapseShadow",
                value: function(e, t) {
                    var n = e.expanded
                      , o = t.collapsingPercentage
                      , r = t.collapsingExpanded
                      , a = t.expanded
                      , i = sn(sn({}, this.props.motionConfig), {}, {
                        precision: .5
                    });
                    return r ? n ? o : 0 : n ? (0,
                    It.ST)(a ? 0 : 1, i) : 1
                }
            }, {
                key: "getCollapseOpacity",
                value: function(e, t) {
                    var n = t.collapsingPercentage
                      , o = t.collapsingExpanded
                      , r = t.expanded
                      , a = this.props
                      , i = a.motionConfig
                      , c = a.data.collapsing;
                    if (!r)
                        return 0;
                    var l = sn(sn({}, i), {}, {
                        precision: .5
                    });
                    return o ? n : c ? (0,
                    It.ST)(0, l) : (0,
                    It.ST)(1, l)
                }
            }, {
                key: "getDefaultStyles",
                value: function(e, t, n) {
                    return this.getMotionStyles(e, t, n, !0)
                }
            }, {
                key: "getMotionStyles",
                value: function(e, t, n) {
                    var o = this
                      , r = n.expanded
                      , a = n.collapsingExpanded
                      , i = n.deltaY
                      , c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , l = this.props
                      , s = l.scrollTop
                      , u = l.data
                      , d = l.motionConfig
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
                          , l = void 0 === n ? 0 : n
                          , u = t.left
                          , f = void 0 === u ? 0 : u
                          , h = t.height;
                        return {
                            key: o.getItemKey(e),
                            data: e,
                            style: {
                                ty: l,
                                th: h,
                                x: c || a ? f : (0,
                                It.ST)(f, d),
                                y: c ? l : o.getCollapseY(e, {
                                    expandedIndex: p,
                                    expandedTop: m,
                                    deltaY: i,
                                    expanded: r,
                                    collapsingExpanded: a
                                }),
                                height: c ? h : o.getCollapseHeight(e, {
                                    collapsingPercentage: v,
                                    collapsingExpanded: a,
                                    expanded: r,
                                    deltaY: i,
                                    expandedTop: m
                                }),
                                opacity: c ? 1 : o.getCollapseOpacity(e, {
                                    collapsingPercentage: v,
                                    collapsingExpanded: a,
                                    expanded: r
                                }),
                                shadow: c ? 100 : o.getCollapseShadow(e, {
                                    collapsingPercentage: v,
                                    collapsingExpanded: a,
                                    expanded: r
                                }),
                                scrollTop: c ? s : o.getCollapseScrollTop(e, {
                                    expandedTop: m,
                                    deltaY: i,
                                    collapsingExpanded: a,
                                    expanded: r
                                })
                            }
                        }
                    })
                      , E = b.map(function(e) {
                        var t = e.top
                          , n = void 0 === t ? 0 : t
                          , l = e.left
                          , s = void 0 === l ? 0 : l
                          , u = e.height
                          , f = e.index;
                        return {
                            key: "sec_".concat(f),
                            data: e,
                            style: {
                                ty: n,
                                x: c || a ? s : (0,
                                It.ST)(s, d),
                                y: c ? n : o.getCollapseSectionY(e, {
                                    expandedHeight: h,
                                    collapsedHeight: y,
                                    expandedTop: m,
                                    deltaY: i,
                                    collapsingPercentage: v
                                }),
                                height: u,
                                opacity: c ? 1 : o.getCollapseOpacity(e, {
                                    collapsingPercentage: v,
                                    collapsingExpanded: a,
                                    expanded: r
                                })
                            }
                        }
                    });
                    return g.concat(E)
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
                      , o = t.data
                      , r = t.clientRect
                      , a = r.height
                      , i = r.top
                      , c = this.props
                      , l = c.motionConfig
                      , s = c.viewportStartIndex
                      , u = c.viewportEndIndex;
                    return !o || n < s || n > u ? null : {
                        x: 0,
                        y: i,
                        height: a,
                        shadow: 100,
                        scrollTop: 0,
                        opacity: o && n >= s && n <= u ? (0,
                        It.ST)(.2, l) : 0,
                        leaving: 1
                    }
                }
            }, {
                key: "getItemKey",
                value: function(e) {
                    var t = e.index
                      , n = e.data;
                    return n ? n.id.toString() : "iw_".concat(t)
                }
            }, {
                key: "handleResize",
                value: function(e) {
                    var t = e.height;
                    (0,
                    this.props.onNavigationUpdate)({
                        listHeight: t
                    }, {
                        resizing: !0
                    })
                }
            }, {
                key: "renderItem",
                value: function(e, t) {
                    var n = this.props
                      , r = n.availableGroups
                      , a = n.selectedAddressBook.id
                      , i = e.data
                      , c = [];
                    if (i) {
                        var l = i.id;
                        c = r.filter(function(e) {
                            return !e.contacts.items[l]
                        })
                    }
                    var s = sn(sn({}, this.props), {}, {
                        rowData: e,
                        list: t
                    });
                    return o.createElement(Rt.Z, cn({
                        disableDragging: a === gn,
                        hasAddibleGroups: !!c.length
                    }, s))
                }
            }, {
                key: "renderSection",
                value: function(e) {
                    return this.props.selectedAddressBook.currentAddressBookId === gn ? null : o.createElement(rn, {
                        section: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , r = n.itemTotalCount
                      , a = n.expanded
                      , i = t.listFetchStatus
                      , c = t.searchStatus
                      , l = t.onNavigationUpdate
                      , s = t.onSelectionUpdate
                      , u = t.onReload
                      , d = i === m.bF
                      , f = i === m.uP;
                    return o.createElement(Dt.Z, {
                        className: "ow-contacts-ContactList-AutoSizer",
                        onResize: this.handleResize,
                        disableWidth: !0
                    }, function(t) {
                        return 0 === t.height ? o.createElement("div", null) : f && !r ? [o.createElement("div", {
                            className: "ow-contacts-ContactList-prompt",
                            ref: function(t) {
                                e.emptyList = t
                            }
                        }, o.createElement("span", null, c === wn ? o.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: bn || vn ? (0,
                                p.t)("contacts.list.EMPTY_TEXT") : (0,
                                p.t)("contacts.listView.EMPTY_CONTACTS")
                            }
                        }) : (0,
                        p.t)("contacts.listView.QUICK_SEARCH_EMPTY"))), o.createElement(Bt.Z, {
                            show: d,
                            onSwipeEnd: function() {
                                u()
                            },
                            list: function() {
                                return a ? null : e.emptyList
                            }
                        })] : [o.createElement(jt.Z, cn({
                            className: "ow-contacts-ContactList",
                            renderItem: e.renderItem,
                            renderSection: e.renderSection,
                            itemWrapperClass: e.getWrapperClass,
                            getMotionStyles: e.getMotionStyles,
                            getDefaultStyles: e.getDefaultStyles,
                            getItemKey: e.getItemKey,
                            updatePagination: l,
                            onSelectChange: s,
                            ref: function(t) {
                                e.listComponent = t
                            },
                            animation: !0
                        }, e.props)), o.createElement(Bt.Z, {
                            show: d,
                            onSwipeEnd: function() {
                                u()
                            },
                            list: function() {
                                return a ? null : e.listComponent && e.listComponent.scrollContainer
                            }
                        })]
                    })
                }
            }]),
            n
        }();
        Tn.defaultProps = {
            data: {
                rows: [],
                sections: [],
                totalHeight: 0,
                itemTotalCount: 0,
                expanded: !1,
                expandedIndex: void 0,
                expandedTop: 0,
                expandedHeight: 0,
                collapsedHeight: 0,
                collapsing: !1
            },
            scrollTop: 0,
            itemHeight: 64,
            listHeight: 0,
            sectionHeaderHeight: 30,
            bufferCount: 40,
            visibleStartIndex: 0,
            visibleEndIndex: 0,
            viewportStartIndex: 0,
            viewportEndIndex: 0,
            selectedInfo: [],
            onNavigationUpdate: function() {},
            onSelectionUpdate: function() {},
            onBeginCollapsing: function() {},
            onFinishedCollapsing: function() {},
            shouldComponentUpdateOverwrite: function() {},
            availableGroups: [],
            selectedAddressBook: {
                properties: {}
            },
            listFetchStatus: m.t3,
            searchStatus: wn,
            touchSelectMode: En,
            isItemSelected: function() {},
            onReload: function() {},
            onDeleteContacts: function() {},
            onComposeMail: function() {},
            onAddToGroup: function() {},
            onInviteToEvent: function() {},
            onToggleTouchSelectMode: function() {},
            motionConfig: {
                stiffness: 250,
                damping: 25,
                precision: .5
            }
        },
        Tn.propTypes = {
            data: (0,
            l.shape)({
                rows: (0,
                l.arrayOf)(l.object),
                sections: (0,
                l.arrayOf)(l.object),
                totalHeight: l.number,
                itemTotalCount: l.number,
                expanded: l.bool,
                expandedIndex: l.number,
                expandedTop: l.number,
                expandedHeight: l.number,
                collapsedHeight: l.number,
                collapsing: l.bool
            }),
            scrollTop: l.number,
            itemHeight: l.number,
            listHeight: l.number,
            sectionHeaderHeight: l.number,
            bufferCount: l.number,
            visibleStartIndex: l.number,
            visibleEndIndex: l.number,
            viewportStartIndex: l.number,
            viewportEndIndex: l.number,
            selectedInfo: (0,
            l.arrayOf)(l.string),
            onNavigationUpdate: l.func,
            onSelectionUpdate: l.func,
            onBeginCollapsing: l.func,
            onFinishedCollapsing: l.func,
            shouldComponentUpdateOverwrite: l.func,
            availableGroups: (0,
            l.arrayOf)((0,
            l.shape)({
                id: l.string,
                addressBookId: l.string,
                contacts: (0,
                l.shape)({
                    items: (0,
                    l.shape)({}),
                    totalCount: l.number
                }),
                groupName: l.string
            })),
            selectedAddressBook: (0,
            l.shape)({
                id: l.string,
                name: l.string,
                type: l.string,
                properties: (0,
                l.shape)({
                    default: l.string,
                    collected: l.string,
                    trash: l.string,
                    size: (0,
                    l.oneOfType)([l.string, l.number])
                })
            }),
            listFetchStatus: (0,
            l.oneOf)([m.t3, m.bF, m.uP, m.iZ]),
            searchStatus: (0,
            l.oneOf)([wn, On]),
            touchSelectMode: (0,
            l.oneOf)([En, Cn]),
            isItemSelected: l.func,
            onReload: l.func,
            onDeleteContacts: l.func,
            onComposeMail: l.func,
            onAddToGroup: l.func,
            onInviteToEvent: l.func,
            onToggleTouchSelectMode: l.func,
            motionConfig: (0,
            l.shape)({
                stiffness: l.number,
                damping: l.number,
                precision: l.number
            })
        };
        var Sn = Tn
          , Pn = n(99688)
          , kn = n(85608)
          , Nn = n(69218)
          , An = m.rW.MOBILE_SWIPE_VERTICAL
          , _n = ke.UhU.isMobile
          , In = (0,
        r.$j)(function(e) {
            var t = (0,
            pe.EF)(e)
              , n = (0,
            W.mo)(e)
              , o = (0,
            pe.iT)(e)
              , r = (0,
            pe.wP)(e)
              , a = (0,
            pe.mS)(e)
              , i = (0,
            ht.ok)(e)
              , c = (0,
            ht.pL)(e)
              , l = (0,
            X.SL)(e)
              , s = (0,
            X.nO)(e)
              , u = s.show
              , d = s.isGroup
              , f = (0,
            Nn.n$)(e)
              , p = (0,
            pe.Xr)(e)
              , m = (0,
            pe.u0)(e)
              , h = m.listHeight
              , y = m.renderData
              , b = m.scrollTop
              , v = m.visibleStartIndex
              , g = m.visibleEndIndex
              , E = m.viewportStartIndex
              , C = m.viewportEndIndex
              , w = (0,
            pe.pU)(e);
            return {
                availableGroups: t,
                selectedAddressBook: n,
                listFetchStatus: o,
                searchStatus: r,
                selectedInfo: w,
                listHeight: h,
                data: y,
                scrollTop: b,
                visibleStartIndex: v,
                visibleEndIndex: g,
                viewportStartIndex: E,
                viewportEndIndex: C,
                isItemSelected: function(e) {
                    return !(!e || !e.data) && w.filter(function(t) {
                        return e.data.id === t
                    }).length > 0
                },
                touchSelectMode: a,
                enableNickname: i,
                enableAutoCompleteSearch: c,
                shouldComponentUpdateOverwrite: function(e, t) {
                    var n = e.renderedStart
                      , o = e.renderedEnd;
                    return !!(e.availableGroups !== t.availableGroups || e.availableAddressBooks !== t.availableAddressBooks || e.visibleStartIndex !== t.visibleStartIndex || e.visibleEndIndex !== t.visibleEndIndex || t.viewportStartIndex >= 0 && t.viewportStartIndex < n || o >= 0 && t.viewportEndIndex > o || e.touchSelectMode !== t.touchSelectMode || !_n && e.listHeight !== t.listHeight || e.listWidth !== t.listWidth || e.selectedInfo.length !== t.selectedInfo.length || e.listFetchStatus !== t.listFetchStatus || !e.selectedInfo.every(function(e, n) {
                        return e === t.selectedInfo[n]
                    }) || e.data && (!1 === e.data.expanded && !0 === t.data.expanded || e.data.rows.length !== t.data.rows.length || e.data.timeStamp !== t.data.timeStamp || e.data.collapsing !== t.data.collapsing))
                },
                openAddressBookForm: l,
                openContactForm: u,
                isComposeOpen: f,
                groupFormOpen: d,
                contactSearchFilter: p
            }
        }, function(e) {
            return {
                onNavigationUpdate: function(t, n) {
                    return e((0,
                    pt.PS)(t, n))
                },
                onSelectionUpdate: function(t, n) {
                    return e((0,
                    pt.jT)(t, n))
                },
                onFinishedCollapsing: function() {
                    return e((0,
                    pt.jT)([], {
                        trigger: An
                    }))
                },
                onBeginCollapsing: function() {
                    return e((0,
                    pt.PS)(void 0, {
                        collapsing: !0
                    }))
                },
                onReload: function() {
                    return e((0,
                    pt.rK)())
                },
                onToggleTouchSelectMode: function(t) {
                    return e((0,
                    pt.Sq)(t))
                },
                onDeleteContacts: function(t, n, o, r) {
                    return e((0,
                    me.GR)(t, n, o, r))
                },
                onComposeMail: function(t) {
                    return e((0,
                    Pn.mH)(t))
                },
                onAddToGroup: function(t) {
                    return e((0,
                    me.v9)(t))
                },
                onInviteToEvent: function(t, n, o) {
                    return e((0,
                    kn.yM)(t, n, o))
                }
            }
        })(Sn)
          , Dn = function(e) {
            return o.createElement("div", {
                className: "ow-contacts-ContactListPanel"
            }, o.createElement("div", {
                className: "ow-contacts-ContactListPanel-upper"
            }, o.createElement(_t, e)), o.createElement("div", {
                className: "ow-contacts-ContactListPanel-lower"
            }, o.createElement(In, null)))
        }
          , Bn = n(13279)
          , jn = n.n(Bn)
          , Rn = n(59883)
          , Mn = n.n(Rn)
          , Ln = n(55046)
          , xn = n.n(Ln)
          , Hn = n(54075)
          , Fn = n(29610);
        function Un(e) {
            "@babel/helpers - typeof";
            return (Un = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Gn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Zn(o.key), o)
            }
        }
        function Zn(e) {
            var t = function(e, t) {
                if ("object" !== Un(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Un(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Un(t) ? t : String(t)
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
                var n, o = zn(e);
                if (t) {
                    var r = zn(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Un(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Yn(e)
                }(this, n)
            }
        }
        function Yn(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function zn(e) {
            return (zn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Wn = m.sH.SEARCH_FIELD_EMAIL
          , Xn = m.sH.SEARCH_FIELD_FIRSTNAME
          , $n = m.sH.SEARCH_FIELD_NICKNAME
          , qn = m.sH.SEARCH_FIELD_LASTNAME
          , Jn = m.sH.SEARCH_FIELD_MOBILE
          , Qn = m.sH.SEARCH_FIELD_PHONE
          , eo = m.RI.SEARCH_STATUS_SEARCHING
          , to = ke.UhU.isMobile
          , no = ke.UhU.isTablet
          , oo = ke.UhU.isDesktop
          , ro = function(e) {
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
            }(n, o.PureComponent);
            var t = Kn(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).state = {
                    fields: [{
                        id: Xn,
                        text: (0,
                        p.t)("contacts.advancedSearch.firstName"),
                        checked: !0
                    }, {
                        id: qn,
                        text: (0,
                        p.t)("contacts.advancedSearch.lastName"),
                        checked: !0
                    }, {
                        id: $n,
                        text: (0,
                        p.t)("contacts.advancedSearch.nickname"),
                        checked: !0
                    }, {
                        id: Wn,
                        text: (0,
                        p.t)("contacts.advancedSearch.lzEmail"),
                        checked: !0
                    }, {
                        id: Qn,
                        text: (0,
                        p.t)("contacts.advancedSearch.lzPhone"),
                        checked: !0
                    }, {
                        id: Jn,
                        text: (0,
                        p.t)("contacts.advancedSearch.lzPhone_mobile"),
                        checked: !0
                    }],
                    showAlert: !1
                },
                o.handleCancelIconClick = o.handleCancelIconClick.bind(Yn(o)),
                o.handleSearchIconClick = o.handleSearchIconClick.bind(Yn(o)),
                o.handleDropdownToggle = o.handleDropdownToggle.bind(Yn(o)),
                o.handleInputChange = o.handleInputChange.bind(Yn(o)),
                o.handleInputKeyDown = o.handleInputKeyDown.bind(Yn(o)),
                o.handleSearchFieldChange = o.handleSearchFieldChange.bind(Yn(o)),
                o.handleHideAlert = o.handleHideAlert.bind(Yn(o)),
                o
            }
            return function(e, t, n) {
                t && Gn(e.prototype, t),
                n && Gn(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleCancelIconClick",
                value: function() {
                    var e = this.props
                      , t = e.searchFilter
                      , n = e.onSetContactListSearchFilter
                      , o = e.collectedAddressSearchFilter
                      , r = e.isAutoCollectedAddr
                      , a = e.onFilterContactList;
                    r && o ? (n(""),
                    a()) : t && n(""),
                    (0,
                    Fn.j)("contacts", "clear_search")
                }
            }, {
                key: "handleSearchIconClick",
                value: function() {
                    var e = this.props
                      , t = e.onSetContactListSearchStatus
                      , n = e.searchFilter
                      , o = e.collectedAddressSearchFilter
                      , r = e.isAutoCollectedAddr
                      , a = e.onFilterContactList;
                    if (r && o && o.trim())
                        a();
                    else if (n && n.trim().length) {
                        if (!this.state.fields.some(function(e) {
                            return !0 === e.checked
                        }))
                            return void this.setState({
                                showAlert: !0
                            });
                        t(eo)
                    }
                }
            }, {
                key: "handleDropdownToggle",
                value: function(e) {
                    e || (0,
                    this.props.onSetContactListSearchFields)(this.state.fields.filter(function(e) {
                        return !0 === e.checked
                    }).map(function(e) {
                        return e.id
                    }))
                }
            }, {
                key: "handleInputChange",
                value: function(e) {
                    var t = e.target.value;
                    (0,
                    this.props.onSetContactListSearchFilter)(t)
                }
            }, {
                key: "handleInputKeyDown",
                value: function(e) {
                    13 === e.keyCode && this.handleSearchIconClick(),
                    e.key === m.BY.TABKEY && (e.shiftKey || (e.preventDefault(),
                    this.props.searchFilter || this.props.collectedAddressSearchFilter ? (0,
                    h.kW)(".ow-contacts-ContactListSearch-clear") : (0,
                    h.kW)(".ow-contacts-ContactListSearch-search")))
                }
            }, {
                key: "handleSearchFieldChange",
                value: function(e, t) {
                    var n = t.target.classList
                      , o = this.state.fields.slice();
                    o.find(function(t) {
                        return t.id === e
                    }).checked = !n.contains("ow-icon-checkbox-selected"),
                    this.setState({
                        fields: o
                    })
                }
            }, {
                key: "handleHideAlert",
                value: function() {
                    this.setState({
                        showAlert: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.searchFilter
                      , r = t.collectedAddressSearchFilter
                      , a = t.isAutoCollectedAddr
                      , i = t.enableNickname
                      , c = this.state
                      , l = c.fields
                      , s = c.showAlert
                      , u = l.findIndex(function(e) {
                        return "SEARCH_FIELD_NICKNAME" === e.id
                    });
                    return !i && u > 0 && l.splice(u, 1),
                    o.createElement("div", {
                        className: "ow-contacts-ContactListSearch",
                        tabIndex: 0,
                        role: m.HB.SEARCH
                    }, o.createElement(xn(), {
                        className: "ow-contacts-ContactListSearch-input-group"
                    }, o.createElement(Mn(), {
                        type: "text",
                        value: a ? r : n,
                        className: "ow-contacts-ContactListSearch-input",
                        placeholder: (0,
                        p.t)("contacts.mainView.SEARCH_HINT_FOR_CONTACTS"),
                        "aria-label": (0,
                        p.t)("contacts.mainView.SEARCH_HINT_FOR_CONTACTS"),
                        onChange: this.handleInputChange,
                        onKeyDown: this.handleInputKeyDown
                    }), o.createElement(jn(), {
                        bsRole: "toggle",
                        role: m.HB.BUTTON,
                        "aria-label": (0,
                        p.t)("common.SHOW_ADVANCED_TOOLTIP"),
                        className: "ow-contacts-ContactListSearch-dropdown-toggle",
                        Title: (0,
                        p.t)("common.SHOW_ADVANCED_TOOLTIP"),
                        componentClass: xn().Button,
                        id: "contactListSearch",
                        pullRight: !0,
                        onToggle: this.handleDropdownToggle,
                        disabled: a,
                        tabIndex: -1,
                        onKeyDown: function(e) {
                            e.key === m.BY.TABKEY && (e.shiftKey ? (e.preventDefault(),
                            (0,
                            h.kW)(".ow-contacts-ContactListSearch-search")) : (e.preventDefault(),
                            (0,
                            h.kW)(".ow-contacts-ContactAddressBookToolbar-title")))
                        }
                    }, o.createElement("div", {
                        bsRole: m.HB.MENU,
                        className: "ow-contacts-ContactListSearch-dropdown-menu"
                    }, l.map(function(t) {
                        var n = t.id
                          , r = t.text
                          , a = t.checked;
                        return o.createElement("div", {
                            className: "ow-contacts-ContactListSearch-dropdown-menu-item",
                            "aria-label": r,
                            "aria-labelledby": "contactsearchdropdownoption",
                            tabIndex: 0
                        }, o.createElement(Q.Z, {
                            name: a ? "checkbox-selected" : "checkbox-unselected",
                            onClick: function(t) {
                                return e.handleSearchFieldChange(n, t)
                            },
                            role: m.HB.CHECKBOX,
                            "aria-label": r,
                            "aria-checked": a,
                            tabIndex: -1,
                            onKeyDown: function(t) {
                                if (t.key !== m.BY.TABKEY)
                                    return t.key === m.BY.ENTERKEY ? void e.handleSearchFieldChange(n, t) : void 0;
                                t.shiftKey ? ((0,
                                h.kW)(".ow-contacts-ContactListSearch-search"),
                                t.preventDefault()) : ((0,
                                h.kW)(".ow-contacts-ContactAddressBookToolbar-title"),
                                t.preventDefault())
                            }
                        }), o.createElement("span", null, r))
                    }))), (to || no) && o.createElement(k.Z, {
                        className: "ow-contacts-ContactListSearch-search",
                        iconName: "search",
                        onClick: this.handleSearchIconClick
                    }), o.createElement(o.Fragment, null, (n || r) && o.createElement(Q.Z, {
                        name: "close",
                        className: "ow-contacts-ContactListSearch-clear",
                        onClick: function() {
                            return e.handleCancelIconClick()
                        },
                        role: m.HB.BUTTON,
                        "aria-label": (0,
                        p.t)("common.CANCEL"),
                        tabIndex: 0,
                        onKeyDown: function(t) {
                            t.key === m.BY.TABKEY ? t.shiftKey && (t.preventDefault(),
                            (0,
                            h.kW)(".ow-contacts-ContactListSearch-input")) : t.key === m.BY.ENTERKEY && e.handleCancelIconClick()
                        }
                    }), oo && o.createElement(Q.Z, {
                        name: "search-active",
                        className: "ow-contacts-ContactListSearch-search",
                        onClick: function() {
                            return e.handleSearchIconClick()
                        },
                        role: m.HB.BUTTON,
                        "aria-label": (0,
                        p.t)("mail.search.SEARCH"),
                        tabIndex: 0,
                        onKeyDown: function(t) {
                            t.key === m.BY.TABKEY ? t.shiftKey ? (t.preventDefault(),
                            n || r ? (0,
                            h.kW)(".ow-contacts-ContactListSearch-clear") : (0,
                            h.kW)(".ow-contacts-ContactListSearch-input")) : (t.preventDefault(),
                            (0,
                            h.kW)(".ow-contacts-ContactListSearch-dropdown-toggle")) : t.key === m.BY.ENTERKEY && e.handleSearchIconClick()
                        }
                    }))), o.createElement(Hn.Z, {
                        show: s,
                        message: (0,
                        p.t)("contacts.list.message.SEARCH_CONTACTS_UNCHECK_FIELD"),
                        onHide: this.handleHideAlert
                    }))
                }
            }]),
            n
        }();
        ro.defaultProps = {
            searchFilter: "",
            collectedAddressSearchFilter: "",
            onSetContactListSearchFields: function() {},
            onSetContactListSearchFilter: function() {},
            onSetContactListSearchStatus: function() {},
            onFilterContactList: function() {},
            isAutoCollectedAddr: !1
        },
        ro.propTypes = {
            searchFilter: l.string,
            collectedAddressSearchFilter: l.string,
            onSetContactListSearchFields: l.func,
            onSetContactListSearchFilter: l.func,
            onSetContactListSearchStatus: l.func,
            onFilterContactList: l.func,
            isAutoCollectedAddr: l.bool
        };
        var ao = ro
          , io = n(93549)
          , co = n.n(io);
        function lo(e) {
            "@babel/helpers - typeof";
            return (lo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function so(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, o)
            }
            return n
        }
        function uo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? so(Object(n), !0).forEach(function(t) {
                    fo(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : so(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function fo(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== lo(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" !== lo(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === lo(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var po = m.$B.CONTACT_ADDRESSBOOK_AUTOCOLLECTED
          , mo = (0,
        r.$j)(function(e) {
            var t = (0,
            W.am)(e)
              , n = (0,
            pe.Xr)(e)
              , o = (0,
            Ve.Lm)(e)
              , r = (0,
            ht.ok)(e);
            return {
                searchFilter: n,
                collectedAddressSearchFilter: o,
                isAutoCollectedAddr: t === po,
                enableNickname: r
            }
        }, function(e) {
            return {
                dispatch: e,
                onSetContactListSearchFields: function(t) {
                    return e((0,
                    pt.wz)(t))
                },
                onSetContactListSearchStatus: function(t) {
                    return e((0,
                    pt.S8)(t))
                },
                onFilterContactList: function() {
                    return e((0,
                    pt.PS)({
                        scrollTop: 0
                    }))
                }
            }
        }, function(e, t, n) {
            var o = e.isAutoCollectedAddr
              , r = e.collectedAddressSearchFilter
              , a = e.searchFilter
              , i = t.dispatch
              , c = uo(uo({}, co()(t, ["dispatch"])), {}, {
                onSetContactListSearchFilter: function(e) {
                    o && e.trim() !== r.trim() ? i((0,
                    pt.Av)(e)) : e !== a && i((0,
                    pt.R2)(e))
                }
            });
            return Object.assign({}, n, e, c)
        })(ao)
          , ho = n(59524)
          , yo = n(83853)
          , bo = function(e) {
            var t = e.id
              , n = e.hasPhoto
              , r = e.displayName
              , a = e.additionalFields;
            return o.createElement("div", {
                className: "ow-contacts-ContactPreviewHeader"
            }, o.createElement("div", {
                className: "ow-contacts-ContactPreviewHeader-avatar"
            }, o.createElement(yo.Z, {
                contactId: t,
                editBtnDisplayed: !1,
                hasPhoto: n
            })), o.createElement("div", {
                className: "ow-contacts-ContactPreviewHeader-fields"
            }, o.createElement("div", {
                className: "ow-contacts-ContactPreviewHeader-fields-text-wrapper",
                "aria-label": r
            }, r ? o.createElement("span", {
                className: "ow-contacts-ContactPreviewHeader-displayName"
            }, r) : void 0, a.length ? o.createElement("div", {
                className: "ow-contacts-ContactPreviewHeader-fields-additional"
            }, a.map(function(e) {
                var t = e.label
                  , n = e.value;
                return o.createElement(ho.Z, {
                    key: t,
                    label: t,
                    value: n
                })
            })) : void 0)))
        };
        bo.defaultProps = {
            id: "",
            hasPhoto: !1,
            displayName: "",
            additionalFields: []
        },
        bo.propTypes = {
            id: s().string,
            hasPhoto: s().bool,
            displayName: s().string,
            additionalFields: s().arrayOf(s().shape({
                type: s().string,
                label: s().string,
                value: s().string,
                showLabel: s().bool,
                clickable: s().bool
            }))
        };
        var vo = bo
          , go = n(27982)
          , Eo = n(62595)
          , Co = n(15559)
          , wo = n.n(Co)
          , Oo = n(32022)
          , To = n.n(Oo)
          , So = n(7179)
          , Po = "#404040"
          , ko = "#999"
          , No = '"Open Sans",sans-serif'
          , Ao = "18px"
          , _o = "22px"
          , Io = "ow-fieldName"
          , Do = "ow-labelName"
          , Bo = "ow-singleFieldRows"
          , jo = "ow-singleFieldValues"
          , Ro = "ow-fieldRows"
          , Mo = "ow-fieldValues";
        function Lo(e) {
            return function(e) {
                if (Array.isArray(e))
                    return xo(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return xo(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return xo(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function xo(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        var Ho = function(e, t, n, o, r) {
            var a = function(e) {
                var t = [];
                return e.forEach(function(e) {
                    var n = t.filter(function(t) {
                        return t.label === e.label
                    });
                    if (n.length) {
                        var o = t.indexOf(n[0]);
                        t[o].value = t[o].value.concat(", ", e.value)
                    } else
                        "string" == typeof e.value ? t.push(e) : function(e, t) {
                            for (var n = e.values[0], o = [], r = 0, a = [m.Ug.STREET, m.Ug.CITY, m.Ug.STATE, m.Ug.ZIP, m.Ug.COUNTRY]; r < a.length; r++) {
                                var i = a[r];
                                void 0 !== n[i] && o.push(n[i])
                            }
                            e.value = o.toString();
                            var c = /addressHome/.test(e.label) ? "home" : e.label
                              , l = /addressWork/.test(e.label) ? "work" : e.label
                              , s = /addressOther/.test(e.label) ? "other" : e.label;
                            e.label = e.label === m.Ug.ADDRESS_HOME ? c : e.label === m.Ug.ADDRESS_WORK ? l : s,
                            t.push(e)
                        }(e, t)
                }),
                function(e) {
                    e.forEach(function(e) {
                        var t = e.label && e.label.toUpperCase()
                          , n = Object.keys((0,
                        p.t)("contacts.detailEdit.label")).filter(function(e) {
                            return e === t
                        });
                        "lzNote" !== e.type && "lzOther" !== e.type ? (e.value = "lzPersonal" === e.type && "" !== e.value ? To()(e.value).format(TimeUtil.getDateTimePatterns().ShortDate) : e.value,
                        e.label = 1 === (null === n || void 0 === n ? void 0 : n.length) ? (0,
                        p.t)("contacts.detailEdit.label.".concat(n[0])) : "") : e.label = ""
                    })
                }(t),
                t.map(function(e) {
                    return (0,
                    So.MF)(e.value).concat("" !== e.label ? " -  <span class=".concat(Do, "> ").concat(e.label, "</span>") : "") + "<br>"
                }).join("")
            }
              , i = function(e, t) {
                return e.map(function(n) {
                    var o, r, i, c = !1 === n.isGroup, l = e.length > 1;
                    if (c)
                        if (l)
                            r = [{
                                name: (0,
                                p.t)("contacts.detailEdit.label.EMAIL"),
                                value: a(wo()(n.lzEmail.fields))
                            }, {
                                name: (0,
                                p.t)("contacts.detailEdit.label.MOBILE"),
                                value: a(wo()(n.lzPhone_mobile.fields))
                            }, {
                                name: (0,
                                p.t)("contacts.detailEdit.label.PHONE"),
                                value: a(wo()(n.lzPhone.fields))
                            }].map(function(e) {
                                return e.value.length > 0 ? "<tr><td  class=".concat(Ro, ">").concat(e.name, ":</td><td class=").concat(Mo, ">").concat(JSON.parse(JSON.stringify(e.value)), "</td></tr>") : ""
                            });
                        else {
                            var s = [].concat(Lo(n.lzAddress_home.fields), Lo(n.lzAddress_work.fields), Lo(n.lzAddress_other.fields))
                              , u = n.lzHeader.fields.filter(function(e) {
                                return "title" === (null === e || void 0 === e ? void 0 : e.label) || "department" === e.label || "company" === e.label
                            });
                            i = [{
                                name: (0,
                                p.t)("contacts.detailEdit.label.WORKINFO"),
                                value: a(wo()(u))
                            }, {
                                name: (0,
                                p.t)("contacts.detailEdit.label.EMAIL"),
                                value: a(wo()(n.lzEmail.fields))
                            }, {
                                name: (0,
                                p.t)("contacts.detailEdit.label.MOBILE"),
                                value: a(wo()(n.lzPhone_mobile.fields))
                            }, {
                                name: (0,
                                p.t)("contacts.detailEdit.label.PHONE"),
                                value: a(wo()(n.lzPhone.fields))
                            }, {
                                name: (0,
                                p.t)("contacts.detailEdit.label.ADDRESS"),
                                value: a(wo()(s))
                            }, {
                                name: (0,
                                p.t)("contacts.detailEdit.label.PERSONAL"),
                                value: a(wo()(n.lzPersonal.fields))
                            }, {
                                name: (0,
                                p.t)("contacts.detailEdit.label.FAX"),
                                value: a(wo()(n.lzPhone_fax.fields))
                            }, {
                                name: (0,
                                p.t)("contacts.detailEdit.label.PAGER"),
                                value: a(wo()(n.lzPhone_pager.fields))
                            }, {
                                name: (0,
                                p.t)("contacts.detailEdit.label.IM"),
                                value: a(wo()(n.lzIM.fields))
                            }, {
                                name: (0,
                                p.t)("contacts.detailEdit.label.WEBSITE"),
                                value: a(wo()(n.lzWeb.fields))
                            }, {
                                name: (0,
                                p.t)("contacts.detailEdit.label.NOTES"),
                                value: a(wo()(n.lzNote.fields))
                            }, {
                                name: (0,
                                p.t)("contacts.detailEdit.label.OTHER"),
                                value: a(wo()(n.lzOther.fields))
                            }].map(function(e) {
                                return e.value.length > 0 ? "<tr><td  class=".concat(Bo, ">").concat(e.name, ":</td><td class=").concat(jo, ">").concat(JSON.parse(JSON.stringify(e.value)), "</td></tr>") : ""
                            })
                        }
                    o = "".concat(l ? "border:0px solid #d0d0d0; border-width: 1px;" : "border:0px solid #fff;");
                    var d = n.fields.filter(function(e) {
                        return "nickname" === (null === e || void 0 === e ? void 0 : e.label)
                    });
                    return function(e, t, n) {
                        return ["<!DOCTYPE html>\n            <html>\n            <head>", '<style type="text/css">\n            * {\n             margin: 0;\n             padding: 0;\n            }\n            .ow-labelName {\n                color: '.concat(ko, "; \n                -webkit-print-color-adjust: exact; \n                color-adjust: exact; \n                text-transform: capitalize;\n                white-space: nowrap;\n                word-break: break-all;\n            }\n            .ow-fieldName {\n                font-size:").concat(_o, "; \n                font-family: ").concat(No, "; \n                font-weight: 700; \n                padding-top: 18px; \n                padding-bottom: 15px; \n                color: ").concat(Po, ";\n                white-space: pre-line;\n                word-break: break-all;\n            }\n            .ow-fieldRows, .ow-singleFieldRows {\n                font-size: ").concat(Ao, ";\n                font-family: ").concat(No, ";\n                font-weight: 600; \n                padding-bottom: 13px; \n                vertical-align: top; \n                color: ").concat(Po, ";\n            }\n            .ow-fieldValues {\n                font-size: ").concat(Ao, "; \n                font-family: ").concat(No, "; \n                padding-left: 20px; \n                padding-bottom: 13px; \n                vertical-align: top; \n                color: ").concat(Po, ";\n                width: 525px;\n                white-space: pre-line;\n                word-break: break-all;\n            }\n            .ow-singleFieldValues {\n              font-size: ").concat(Ao, "; \n              font-family: ").concat(No, "; \n              padding-left: 20px; \n              padding-bottom: 13px; \n              vertical-align: top; \n              color: ").concat(Po, ";\n              width: 510px;\n              white-space: pre-line;\n              word-break: break-all;\n            }\n            .ow-hr-tag {\n              ").concat(e, "\n            }\n           </style>\n           </head>"), "<body>\n           <p class=".concat(Io, ">").concat((0,
                        So.MF)(t), "</p>\n           <table>\n           <tbody>\n           ").concat(n, '\n           </tbody>\n           </table>\n           <hr class="ow-hr-tag"/>\n           </body>\n           </html>')].join("")
                    }(o, "".concat(l ? JSON.parse(JSON.stringify(n.contactName)) : function(e, t, n) {
                        return t && t.header && "" !== t.header.displayName ? JSON.parse(JSON.stringify(t.header.displayName)) : n && n.contactName && "" !== n.contactName ? JSON.parse(JSON.stringify(n.contactName)) : 1 === e.length ? JSON.parse(JSON.stringify(e[0].value)) : ""
                    }(d, t, n)), "".concat(l ? r.join("") : i.join("")))
                })
            }
              , c = function(e, t) {
                var n = i(e.filter(function(e) {
                    return e["@type"] === m.ob.TYPE_CONTACT
                }), t).map(function(e) {
                    return e
                }).join("");
                if ((0,
                ke.G6W)()) {
                    var o = window.open("", "_blank", "width=1,height=1");
                    o.addEventListener("afterprint", function() {
                        o.close()
                    }),
                    o.document.head.innerHTML = document.head.innerHTML,
                    o.document.body.innerHTML = n,
                    setTimeout(function() {
                        o.print(),
                        setTimeout(function() {
                            o.close()
                        })
                    })
                } else {
                    var r = document.createElement("iframe");
                    r.width = "0",
                    r.height = "0",
                    r.id = "pdfIframe",
                    document.body.appendChild(r),
                    r.contentDocument.write(n),
                    r.contentWindow.print(),
                    document.body.removeChild(r)
                }
            };
            return r && !o.length ? c(n, t) : c(e, t)
        };
        function Fo(e) {
            "@babel/helpers - typeof";
            return (Fo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Uo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Go(o.key), o)
            }
        }
        function Go(e) {
            var t = function(e, t) {
                if ("object" !== Fo(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Fo(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Fo(t) ? t : String(t)
        }
        function Zo(e, t) {
            return (Zo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Vo(e) {
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
                var n, o = Yo(e);
                if (t) {
                    var r = Yo(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Fo(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Ko(e)
                }(this, n)
            }
        }
        function Ko(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Yo(e) {
            return (Yo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var zo = (0,
        I.Z)("calendar.enabled")
          , Wo = function(e) {
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
                t && Zo(e, t)
            }(n, o.PureComponent);
            var t = Vo(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).state = {
                    inviting: !1,
                    showEmailList: !1
                },
                o.handleComposeMail = o.handleComposeMail.bind(Ko(o)),
                o.handleEditContact = o.handleEditContact.bind(Ko(o)),
                o.handleDeleteContacts = o.handleDeleteContacts.bind(Ko(o)),
                o.handleSendAsVCard = o.handleSendAsVCard.bind(Ko(o)),
                o.handleInviteToEvent = o.handleInviteToEvent.bind(Ko(o)),
                o.handleAddToGroup = o.handleAddToGroup.bind(Ko(o)),
                o.handlePreviewPrint = o.handlePreviewPrint.bind(Ko(o)),
                o.handleHideEmailList = o.handleHideEmailList.bind(Ko(o)),
                o.renderCompose = o.renderCompose.bind(Ko(o)),
                o.renderEdit = o.renderEdit.bind(Ko(o)),
                o.renderDelete = o.renderDelete.bind(Ko(o)),
                o.renderAddToGroup = o.renderAddToGroup.bind(Ko(o)),
                o.renderPrintPreviewContact = o.renderPrintPreviewContact.bind(Ko(o)),
                o.renderSendVCard = o.renderSendVCard.bind(Ko(o)),
                o.renderInviteEvent = o.renderInviteEvent.bind(Ko(o)),
                o
            }
            return function(e, t, n) {
                t && Uo(e.prototype, t),
                n && Uo(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    var e, t = document.querySelector(".ow-ResponsiveToolbar"), n = null === (e = this.props.contact) || void 0 === e ? void 0 : e.autoCollected;
                    t && n && t.setAttribute("tabIndex", -1)
                }
            }, {
                key: "handleComposeMail",
                value: function() {
                    var e = this.props
                      , t = e.contact
                      , n = t.isGroup
                      , o = t.email
                      , r = t.header.displayName
                      , a = t.contactEmails
                      , i = t.groupEmails
                      , c = e.onComposeMail
                      , l = {
                        recipients: {
                            to: [{
                                name: r,
                                address: o
                            }],
                            cc: [],
                            bcc: []
                        }
                    };
                    n ? (l.recipients.to = i.map(function(e) {
                        var t, n;
                        return e.address && e.address.indexOf("<") > -1 ? (t = e.address.substr(0, e.address.indexOf("<")),
                        n = e.address.substring(e.address.lastIndexOf("<") + 1, e.address.lastIndexOf(">"))) : (t = e.recipientName ? e.recipientName : e.name,
                        n = e.address),
                        {
                            name: t,
                            address: n
                        }
                    }),
                    c(l),
                    (0,
                    Fn.j)("contacts", "compose_group", {
                        record: l
                    })) : a.length > 1 ? this.setState({
                        showEmailList: !0
                    }) : (c(l),
                    (0,
                    Fn.j)("contacts", "send_mail", {
                        record: l
                    }))
                }
            }, {
                key: "handleEditContact",
                value: function() {
                    var e = this.props
                      , t = e.contact.isGroup;
                    (0,
                    e.onEditContact)({
                        isGroup: t
                    })
                }
            }, {
                key: "handleDeleteContacts",
                value: function() {
                    var e = this.props
                      , t = e.contact
                      , n = t.id
                      , o = t.isGroup
                      , r = e.inTrash
                      , a = e.onDeleteContacts;
                    o ? a(void 0, [n], {
                        modalType: "confirm",
                        modalProps: {
                            title: (0,
                            p.t)("contacts.catalogView.DELETE_GROUP"),
                            message: r ? (0,
                            p.t)("contacts.catalogView.message.CONFIRM_DELETE_GROUPS_FROM_TRASH") : (0,
                            p.t)("contacts.catalogView.message.CONFIRM_DELETE_GROUPS")
                        }
                    }) : a([n], void 0, {
                        modalType: "confirm",
                        modalProps: {
                            title: (0,
                            p.t)("contacts.list.DELETE_CONTACT"),
                            message: r ? (0,
                            p.t)("contacts.list.message.CONFIRM_DELETE_CONTACTS_FROM_TRASH") : (0,
                            p.t)("contacts.list.message.CONFIRM_DELETE_CONTACTS")
                        }
                    })
                }
            }, {
                key: "handleAddToGroup",
                value: function() {
                    var e = this.props
                      , t = e.contact.id;
                    (0,
                    e.onAddToGroup)(t)
                }
            }, {
                key: "handlePreviewPrint",
                value: function(e) {
                    var t = this.props.contact;
                    Ho(e, t)
                }
            }, {
                key: "handleSendAsVCard",
                value: function() {
                    var e = this.props
                      , t = e.contact
                      , n = t.id
                      , o = t.email
                      , r = t.header.displayName;
                    (0,
                    e.onSendAsVCard)([{
                        name: r || o,
                        id: n
                    }])
                }
            }, {
                key: "handleInviteToEvent",
                value: function() {
                    var e = this.props
                      , t = e.contact
                      , n = t.email
                      , o = t.header.displayName
                      , r = t.contactEmails
                      , a = e.onInviteToEvent;
                    r.length > 1 ? this.setState({
                        inviting: !0,
                        showEmailList: !0
                    }) : a(void 0, void 0, [{
                        commonName: o,
                        address: n,
                        type: "internal"
                    }]);
                    (0,
                    Fn.j)("mail", "invite_to_event")
                }
            }, {
                key: "handleHideEmailList",
                value: function() {
                    this.setState({
                        inviting: !1,
                        showEmailList: !1
                    })
                }
            }, {
                key: "renderCompose",
                value: function() {
                    var e = this.props.contact
                      , t = e.email
                      , n = e.isGroup
                      , r = e.groupEmails;
                    return (!!t || n && 0 !== r.length) && o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.SEND_MAIL"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.SEND_MAIL"),
                        iconName: "mail-contacts",
                        onClick: this.handleComposeMail
                    }, (0,
                    p.t)("contacts.toolBar.SEND_MAIL"))
                }
            }, {
                key: "renderEdit",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.contact.autoCollected
                      , r = t.inTrash;
                    return !n && !r && o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.EDIT_CONTACT"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.EDIT_CONTACT"),
                        iconName: "edit-contacts",
                        onClick: this.handleEditContact,
                        onKeyDown: function(t) {
                            t.key === m.BY.ENTERKEY && (e.handleEditContact(),
                            (0,
                            h.kW)(".ow-contacts-ContactForm-panel-upper"))
                        }
                    }, (0,
                    p.t)("contacts.toolBar.EDIT_CONTACT"))
                }
            }, {
                key: "renderDelete",
                value: function() {
                    return o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.DELETE_CONTACT"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.DELETE_CONTACT"),
                        iconName: "trash-contacts",
                        onClick: this.handleDeleteContacts,
                        onKeyDown: function(e) {
                            return e.key === m.BY.ENTERKEY && (0,
                            h.Mb)()
                        }
                    }, (0,
                    p.t)("contacts.toolBar.DELETE_CONTACT"))
                }
            }, {
                key: "renderAddToGroup",
                value: function() {
                    var e = this.props
                      , t = e.contact
                      , n = t.autoCollected
                      , r = t.isGroup
                      , a = e.hasAddibleGroups
                      , i = e.inTrash;
                    return !r && !n && !i && a && o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.ADD_TO_GROUP"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.ADD_TO_GROUP"),
                        iconName: "group-contacts",
                        onClick: this.handleAddToGroup,
                        onKeyDown: function(e) {
                            return e.key === m.BY.ENTERKEY && (0,
                            h.Mb)()
                        }
                    }, (0,
                    p.t)("contacts.toolBar.ADD_TO_GROUP"))
                }
            }, {
                key: "renderPrintPreviewContact",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.contact
                      , r = n.autoCollected
                      , a = n.isGroup
                      , i = t.inTrash
                      , c = t.selectedPreviewContact;
                    return !r && !i && !a && c.length && o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.PRINT_CONTACT"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.PRINT_CONTACT"),
                        iconName: "print-contact",
                        onClick: function() {
                            e.handlePreviewPrint(c)
                        }
                    }, (0,
                    p.t)("contacts.toolBar.PRINT_CONTACT"))
                }
            }, {
                key: "renderSendVCard",
                value: function() {
                    var e = this.props
                      , t = e.contact.autoCollected
                      , n = e.inTrash;
                    return !t && !n && o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.SEND_VCARD"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.SEND_VCARD"),
                        iconName: "addressbook-contacts",
                        onClick: this.handleSendAsVCard
                    }, (0,
                    p.t)("contacts.toolBar.SEND_VCARD"))
                }
            }, {
                key: "renderInviteEvent",
                value: function() {
                    return !!this.props.contact.email && zo && o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.INVITE_TO_EVENT"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.INVITE_TO_EVENT"),
                        iconName: "invite-event",
                        onClick: this.handleInviteToEvent
                    }, (0,
                    p.t)("contacts.detailEdit.action.INVITE_TO_EVENT"))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.contact.contactEmails
                      , n = e.onComposeMail
                      , r = e.onInviteToEvent
                      , a = this.state
                      , i = a.inviting
                      , c = a.showEmailList
                      , l = (0,
                    I.Z)("contacts.previewToolbar")
                      , s = {
                        compose: this.renderCompose(),
                        edit: this.renderEdit(),
                        delete: this.renderDelete(),
                        addToGroup: this.renderAddToGroup(),
                        printPreviewContact: this.renderPrintPreviewContact(),
                        sendvCard: this.renderSendVCard(),
                        inviteEvent: this.renderInviteEvent()
                    };
                    return o.createElement("div", {
                        className: "ow-contacts-ContactPreviewToolbar"
                    }, o.createElement(Dt.Z, {
                        disableHeight: !0
                    }, function(e) {
                        var t = e.width;
                        return o.createElement(f.Z, {
                            enableResponsive: !0,
                            width: t
                        }, l.map(function(e) {
                            return s[e]
                        }))
                    }), o.createElement(Eo.Z, {
                        show: c,
                        inviting: i,
                        data: t,
                        onComposeMail: n,
                        onInviteToEvent: r,
                        onCancel: this.handleHideEmailList
                    }))
                }
            }]),
            n
        }()
          , Xo = {
            type: l.string,
            label: l.string,
            value: l.string,
            showLabel: l.bool,
            clickable: l.bool
        };
        Wo.defaultProps = {
            contact: {},
            hasAddibleGroups: !1,
            inTrash: !1,
            onEditContact: function() {},
            onDeleteContacts: function() {},
            onComposeMail: function() {},
            onAddToGroup: function() {},
            onInviteToEvent: function() {},
            onSendAsVCard: function() {}
        },
        Wo.propTypes = {
            contact: (0,
            l.oneOfType)([(0,
            l.shape)({
                id: l.string,
                autoCollected: l.bool,
                isGroup: l.bool,
                email: l.string,
                header: (0,
                l.shape)({
                    hasPhoto: l.bool,
                    displayName: l.string,
                    additionalFields: (0,
                    l.arrayOf)((0,
                    l.shape)(Xo))
                }),
                sections: (0,
                l.arrayOf)((0,
                l.shape)({
                    title: l.string,
                    fields: (0,
                    l.arrayOf)((0,
                    l.shape)(Xo))
                })),
                contactEmails: (0,
                l.arrayOf)((0,
                l.shape)({
                    name: l.string,
                    address: l.string
                })),
                groupEmails: (0,
                l.arrayOf)((0,
                l.shape)({
                    name: l.string,
                    address: l.string
                }))
            }), (0,
            l.shape)({
                id: l.string,
                autoCollected: l.bool,
                isGroup: l.bool,
                email: l.string,
                header: (0,
                l.shape)({
                    hasPhoto: l.bool,
                    displayName: l.string,
                    additionalFields: (0,
                    l.arrayOf)((0,
                    l.shape)(Xo))
                }),
                sections: (0,
                l.arrayOf)((0,
                l.shape)({
                    title: l.string,
                    fields: (0,
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
                    }))
                })),
                contactEmails: (0,
                l.arrayOf)((0,
                l.shape)({
                    name: l.string,
                    address: l.string
                })),
                groupEmails: (0,
                l.arrayOf)((0,
                l.shape)({
                    name: l.string,
                    address: l.string
                }))
            })]),
            hasAddibleGroups: l.bool,
            inTrash: l.bool,
            onEditContact: l.func,
            onDeleteContacts: l.func,
            onComposeMail: l.func,
            onAddToGroup: l.func,
            onInviteToEvent: l.func,
            onSendAsVCard: l.func
        };
        var $o = Wo
          , qo = n(46749);
        function Jo() {
            return (Jo = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var Qo = function(e) {
            var t = e.selectedAddressBook.properties.trash
              , n = e.previewedContact
              , r = e.selectedContactIds
              , a = e.showToolbar
              , i = e.availableGroups
              , c = e.selectedPreviewContact
              , l = e.onEditContact
              , s = e.onDeleteContacts
              , u = e.onComposeMail
              , d = e.onAddToGroup
              , f = e.onInviteToEvent
              , m = e.onSendAsVCard
              , h = n.id
              , y = n.header
              , b = void 0 === y ? {} : y
              , v = n.sections
              , g = void 0 === v ? [] : v
              , E = n.isGroup
              , C = b.hasPhoto
              , w = b.displayName
              , O = b.additionalFields
              , T = r.length
              , S = i.filter(function(e) {
                return !e.contacts.items[h]
            })
              , P = {
                onEditContact: l,
                onDeleteContacts: s,
                onComposeMail: u,
                onAddToGroup: d,
                onInviteToEvent: f,
                onSendAsVCard: m
            }
              , k = 0;
            return E && g.map(function(e) {
                return e && e.fields && (k += e.fields.length),
                k
            }),
            o.createElement("div", {
                className: "ow-contacts-ContactPreview-panel"
            }, a && o.createElement("div", {
                className: "ow-contacts-ContactPreview-panel-upper"
            }, (1 === T || h) && o.createElement($o, Jo({
                contact: n,
                selectedPreviewContact: c,
                hasAddibleGroups: !!S.length,
                inTrash: "true" === t
            }, P))), o.createElement("div", {
                className: de()("ow-contacts-ContactPreview-panel-lower", a ? "expand" : "")
            }, 1 === T || h ? o.createElement("div", {
                className: "ow-contacts-ContactPreview"
            }, o.createElement("div", {
                className: "ow-contacts-ContactPreview-header"
            }, o.createElement(vo, {
                id: h,
                hasPhoto: C,
                displayName: w,
                additionalFields: O
            })), o.createElement("div", {
                className: "ow-contacts-ContactPreview-sections"
            }, o.createElement(We.Z, null, g.map(function(e, t) {
                var n = e.title
                  , r = e.fields;
                return o.createElement(go.Z, {
                    key: n,
                    index: t,
                    title: E ? (0,
                    p.t)("contacts.detailEdit.label.CONTACT_LIST") : n,
                    fields: r,
                    name: w,
                    isGroup: E,
                    onComposeMail: u,
                    length: k
                })
            })))) : o.createElement(qo.Z, {
                icon: "contact-PreviewPrompt",
                message: 0 === T ? (0,
                p.t)("contacts.detailView.previewEmptyMessage") : "".concat(T, " ").concat((0,
                p.t)("contacts.detailView.CONTACTS_SELECTED"))
            })))
        }
          , er = {
            type: l.string,
            label: l.string,
            value: l.string,
            showLabel: l.bool,
            clickable: l.bool
        };
        Qo.defaultProps = {
            selectedAddressBook: {
                properties: {}
            },
            previewedContact: {},
            selectedContactIds: [],
            availableGroups: [],
            showToolbar: !0,
            onEditContact: function() {},
            onDeleteContacts: function() {},
            onComposeMail: function() {},
            onAddToGroup: function() {},
            onInviteToEvent: function() {},
            onSendAsVCard: function() {}
        },
        Qo.propTypes = {
            selectedAddressBook: (0,
            l.shape)({
                id: l.string,
                name: l.string,
                type: l.string,
                properties: (0,
                l.shape)({
                    default: l.string,
                    collected: l.string,
                    trash: l.string,
                    size: (0,
                    l.oneOfType)([l.string, l.number])
                })
            }),
            previewedContact: (0,
            l.oneOfType)([(0,
            l.shape)({
                id: l.string,
                autoCollected: l.bool,
                isGroup: l.bool,
                email: l.string,
                header: (0,
                l.shape)({
                    hasPhoto: l.bool,
                    displayName: l.string,
                    additionalFields: (0,
                    l.arrayOf)((0,
                    l.shape)(er))
                }),
                sections: (0,
                l.arrayOf)((0,
                l.shape)({
                    title: l.string,
                    fields: (0,
                    l.arrayOf)((0,
                    l.shape)(er))
                })),
                contactEmails: (0,
                l.arrayOf)((0,
                l.shape)({
                    name: l.string,
                    address: l.string
                })),
                groupEmails: (0,
                l.arrayOf)((0,
                l.shape)({
                    name: l.string,
                    address: l.string
                }))
            }), (0,
            l.shape)({
                id: l.string,
                autoCollected: l.bool,
                isGroup: l.bool,
                email: l.string,
                header: (0,
                l.shape)({
                    hasPhoto: l.bool,
                    displayName: l.string,
                    additionalFields: (0,
                    l.arrayOf)((0,
                    l.shape)(er))
                }),
                sections: (0,
                l.arrayOf)((0,
                l.shape)({
                    title: l.string,
                    fields: (0,
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
                    }))
                })),
                contactEmails: (0,
                l.arrayOf)((0,
                l.shape)({
                    name: l.string,
                    address: l.string
                })),
                groupEmails: (0,
                l.arrayOf)((0,
                l.shape)({
                    name: l.string,
                    address: l.string
                }))
            })]),
            selectedContactIds: (0,
            l.arrayOf)(l.string),
            availableGroups: (0,
            l.arrayOf)((0,
            l.shape)({
                id: l.string,
                addressBookId: l.string,
                contacts: (0,
                l.shape)({
                    items: (0,
                    l.shape)({}),
                    totalCount: l.number
                }),
                groupName: l.string
            })),
            showToolbar: l.bool,
            onEditContact: l.func,
            onDeleteContacts: l.func,
            onComposeMail: l.func,
            onAddToGroup: l.func,
            onInviteToEvent: l.func,
            onSendAsVCard: l.func
        };
        var tr = Qo
          , nr = (0,
        r.$j)(function(e) {
            return {
                selectedAddressBook: (0,
                W.mo)(e),
                previewedContact: (0,
                pe.jZ)(e),
                selectedPreviewContact: (0,
                pe.YV)(e),
                selectedContactIds: (0,
                pe.pU)(e),
                availableGroups: (0,
                pe.EF)(e)
            }
        }, function(e) {
            return {
                onEditContact: function(t) {
                    return e((0,
                    me.ls)(t))
                },
                onDeleteContacts: function(t, n, o, r) {
                    return e((0,
                    me.GR)(t, n, o, r))
                },
                onComposeMail: function(t) {
                    return e((0,
                    Pn.mH)(t))
                },
                onAddToGroup: function(t) {
                    return e((0,
                    me.v9)(t))
                },
                onInviteToEvent: function(t, n, o) {
                    return e((0,
                    kn.yM)(t, n, o))
                },
                onSendAsVCard: function(t) {
                    return e((0,
                    me.OY)(t))
                }
            }
        })(tr)
          , or = n(40944);
        function rr(e) {
            return function(e) {
                if (Array.isArray(e))
                    return ar(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return ar(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return ar(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ar(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function ir(e) {
            "@babel/helpers - typeof";
            return (ir = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function cr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, lr(o.key), o)
            }
        }
        function lr(e) {
            var t = function(e, t) {
                if ("object" !== ir(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== ir(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === ir(t) ? t : String(t)
        }
        function sr(e, t) {
            return (sr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function ur(e) {
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
                var n, o = fr(e);
                if (t) {
                    var r = fr(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ir(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return dr(e)
                }(this, n)
            }
        }
        function dr(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function fr(e) {
            return (fr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var pr = m.ob.TYPE_CONTACT
          , mr = m.ob.TYPE_GROUP
          , hr = m.sH.SORT_FIRSTNAME_ASC
          , yr = m.sH.SORT_LASTNAME_ASC
          , br = m.sH.SORT_NICKNAME_ASC
          , vr = (0,
        I.Z)("contacts.list")
          , gr = vr.enableMove
          , Er = vr.enableMergeAndDedup
          , Cr = function(e) {
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
                t && sr(e, t)
            }(n, o.PureComponent);
            var t = ur(n);
            function n(e) {
                var o, r;
                ((function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, n),
                (o = t.call(this, e)).handleAddGroup = o.handleAddGroup.bind(dr(o)),
                o.handleSendAsVCard = o.handleSendAsVCard.bind(dr(o)),
                o.handleExportContacts = o.handleExportContacts.bind(dr(o)),
                o.handleCheckDuplicates = o.handleCheckDuplicates.bind(dr(o)),
                o.handleDeleteContacts = o.handleDeleteContacts.bind(dr(o)),
                o.handleComposeMail = o.handleComposeMail.bind(dr(o)),
                o.handlePrintContact = o.handlePrintContact.bind(dr(o)),
                o.handlePrintShowHide = o.handlePrintShowHide.bind(dr(o)),
                o.renderRefresh = o.renderRefresh.bind(dr(o)),
                o.renderNewOptions = o.renderNewOptions.bind(dr(o)),
                o.renderMore = o.renderMore.bind(dr(o)),
                o.renderNewContact = o.renderNewContact.bind(dr(o)),
                o.renderNewGroup = o.renderNewGroup.bind(dr(o)),
                o.renderSendvcard = o.renderSendvcard.bind(dr(o)),
                o.renderImportContacts = o.renderImportContacts.bind(dr(o)),
                o.renderExportContacts = o.renderExportContacts.bind(dr(o)),
                o.renderDuplicates = o.renderDuplicates.bind(dr(o)),
                o.renderMerge = o.renderMerge.bind(dr(o)),
                o.renderDivider = o.renderDivider.bind(dr(o)),
                o.renderDeleteContacts = o.renderDeleteContacts.bind(dr(o)),
                o.renderSendMail = o.renderSendMail.bind(dr(o)),
                o.renderMoveTo = o.renderMoveTo.bind(dr(o)),
                o.renderContactPrint = o.renderContactPrint.bind(dr(o)),
                o.handleKeyPress = o.handleKeyPress.bind(dr(o)),
                null !== ke.UhU && void 0 !== ke.UhU && ke.UhU.isDesktop && (0,
                I.Z)("common.ScrollKeysEnabled")) && (null === (r = window) || void 0 === r || r.addEventListener("keydown", o.handleKeyPress));
                return o
            }
            return function(e, t, n) {
                t && cr(e.prototype, t),
                n && cr(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleKeyPress",
                value: function(e) {
                    var t, n, o, r, a, i, c, l = this.props.selectedContactIds, s = (null === (t = document) || void 0 === t ? void 0 : null === (n = t.activeElement) || void 0 === n ? void 0 : null === (o = n.className) || void 0 === o ? void 0 : o.includes("ow-VirtualizedList-wrapper")) && !(null !== (r = document) && void 0 !== r && null !== (a = r.getElementsByClassName("ow-app-header-settings-link-active active")) && void 0 !== a && a[0]);
                    "Delete" === (null === e || void 0 === e ? void 0 : e.key) && 1 !== (null === (i = this.props) || void 0 === i ? void 0 : null === (c = i.isComposeOpen) || void 0 === c ? void 0 : c.length) && (null === l || void 0 === l ? void 0 : l.length) >= 1 && s && this.handleDeleteContacts()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e;
                    null !== ke.UhU && void 0 !== ke.UhU && ke.UhU.isDesktop && (0,
                    I.Z)("common.ScrollKeysEnabled") && (null === (e = window) || void 0 === e || e.removeEventListener("keydown", this.handleKeyPress))
                }
            }, {
                key: "handleAddGroup",
                value: function() {
                    (0,
                    this.props.onAddGroup)({
                        isGroup: !0
                    }, {
                        modalType: "alert",
                        modalProps: {
                            title: (0,
                            p.t)("common.WARNING"),
                            message: (0,
                            p.t)("contacts.errorMessage.GROUP_LIMIT_REACHED")
                        }
                    })
                }
            }, {
                key: "handleSendAsVCard",
                value: function() {
                    var e = this.props
                      , t = e.onSendAsVCard
                      , n = e.selectedContacts
                      , o = e.contactSort
                      , r = [];
                    n.forEach(function(e) {
                        var t = (0,
                        or.Tx)(e, {
                            sort: o
                        })
                          , n = t.id
                          , a = t.email
                          , i = t.header.displayName;
                        r.push({
                            id: n,
                            name: i || a
                        })
                    }),
                    t(r)
                }
            }, {
                key: "handleExportContacts",
                value: function() {
                    var e = this.props
                      , t = e.selectedContactIds.length
                      , n = e.currentListTotalCount;
                    (0,
                    e.onExportContacts)({
                        modalType: "confirm",
                        modalProps: {
                            title: (0,
                            p.t)("contacts.exportContacts.EXPORT_CONTACTS_TITLE"),
                            message: t && t !== n ? (0,
                            _.WU)((0,
                            p.t)("contacts.list.message.CONFIRM_EXPORT_SELECTED"), t) : (0,
                            p.t)("contacts.list.message.CONFIRM_EXPORT_ALL_FROM_ADDRESSBOOK")
                        }
                    })
                }
            }, {
                key: "handleCheckDuplicates",
                value: function() {
                    (0,
                    this.props.onCheckDuplicates)({
                        modalType: "alert",
                        modalProps: {
                            title: (0,
                            p.t)("contacts.deduplicatePanel.DUPLICATE_CONTACTS_TITLE"),
                            message: (0,
                            p.t)("contacts.deduplicatePanel.errorMessage.NO_DUPLICATE_CONTACTS")
                        }
                    })
                }
            }, {
                key: "handleDeleteContacts",
                value: function() {
                    var e = this.props
                      , t = e.selectedAddressBook.properties.trash
                      , n = e.selectedContacts
                      , o = e.onDeleteContacts
                      , r = []
                      , a = []
                      , i = "true" === t;
                    n.forEach(function(e) {
                        var t = e.id;
                        e.groupName ? a.push(t) : r.push(t)
                    }),
                    a.length ? r.length ? o(r, a, {
                        modalType: "confirm",
                        modalProps: {
                            title: (0,
                            p.t)("contacts.list.DELETE_CONTACT_AND_GROUP"),
                            message: i ? (0,
                            p.t)("contacts.list.message.CONFIRM_DELETE_CONTACTS_AND_GROUPS_FROM_TRASH") : (0,
                            p.t)("contacts.list.message.CONFIRM_DELETE_CONTACTS_AND_GROUPS")
                        }
                    }) : o(void 0, a, {
                        modalType: "confirm",
                        modalProps: {
                            title: (0,
                            p.t)("contacts.catalogView.DELETE_GROUP"),
                            message: i ? (0,
                            p.t)("contacts.catalogView.message.CONFIRM_DELETE_GROUPS_FROM_TRASH") : (0,
                            p.t)("contacts.catalogView.message.CONFIRM_DELETE_GROUPS")
                        }
                    }) : o(r, void 0, {
                        modalType: "confirm",
                        modalProps: {
                            title: (0,
                            p.t)("contacts.list.DELETE_CONTACT"),
                            message: i ? (0,
                            p.t)("contacts.list.message.CONFIRM_DELETE_CONTACTS_FROM_TRASH") : (0,
                            p.t)("contacts.list.message.CONFIRM_DELETE_CONTACTS")
                        }
                    })
                }
            }, {
                key: "handleComposeMail",
                value: function() {
                    (0,
                    this.props.onComposeMail)()
                }
            }, {
                key: "handlePrintContact",
                value: function(e, t, n, o) {
                    var r = this.props.previewedContact
                      , a = o.filter(function(e) {
                        return t.find(function(t) {
                            return t.id === e.id
                        })
                    });
                    Ho(a, r, o, n, e)
                }
            }, {
                key: "handlePrintShowHide",
                value: function(e, t, n, o, r) {
                    return e || t.length || n.every(function(e) {
                        return e["@type"] === mr
                    }),
                    t.length ? n.every(function(e) {
                        return e["@type"] === mr
                    }) : !r.result && !t.length || o && o.every(function(e) {
                        return e["@type"] === mr
                    })
                }
            }, {
                key: "renderRefresh",
                value: function(e) {
                    return o.createElement(f.Z.Button, {
                        iconName: "refresh",
                        role: m.HB.BUTTON,
                        "aria-label": (0,
                        p.t)("aria.label.Refresh"),
                        onClick: e
                    })
                }
            }, {
                key: "renderNewContact",
                value: function() {
                    var e = this.props.onAddContact;
                    return o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.ADD_CONTACT"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.ADD_CONTACT"),
                        onClick: e,
                        isImplicit: !0,
                        onKeyDown: function(e) {
                            return e.key === m.BY.ENTERKEY && setTimeout(function() {
                                (0,
                                h.kW)(".ow-contacts-ContactForm-panel-upper")
                            }, 50)
                        }
                    }, (0,
                    p.t)("contacts.toolBar.ADD_CONTACT"))
                }
            }, {
                key: "renderNewGroup",
                value: function() {
                    return o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.ADD_CONTACT_GROUP"),
                        onClick: this.handleAddGroup,
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.ADD_CONTACT_GROUP"),
                        isImplicit: !0,
                        onKeyDown: function(e) {
                            return e.key === m.BY.ENTERKEY && setTimeout(function() {
                                (0,
                                h.kW)(".ow-contacts-ContactForm-panel-upper")
                            }, 50)
                        }
                    }, (0,
                    p.t)("contacts.toolBar.ADD_CONTACT_GROUP"))
                }
            }, {
                key: "renderNewOptions",
                value: function(e, t, n) {
                    return n && o.createElement(f.Z.Dropdown, {
                        id: "contactListToolbarNew",
                        title: o.createElement("div", {
                            className: "ow-contacts-contactsToolbar-label",
                            "aria-label": (0,
                            p.t)("contacts.NEW_CONTACT_LABEL")
                        }, o.createElement(Q.Z, {
                            name: "plus",
                            className: "ow-contacts-contactsToolbar-plus-icon"
                        }), (0,
                        p.t)("contacts.NEW_CONTACT_LABEL"))
                    }, e.map(function(e) {
                        return t[e]
                    }))
                }
            }, {
                key: "renderSendvcard",
                value: function() {
                    var e = this.props
                      , t = e.selectedContactIds;
                    return !("true" == e.selectedAddressBook.properties.trash) && o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.SEND_VCARD"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.SEND_VCARD"),
                        onClick: this.handleSendAsVCard,
                        disabled: !t.length,
                        "aria-disabled": !(null !== t && void 0 !== t && t.length),
                        isImplicit: !0
                    }, (0,
                    p.t)("contacts.toolBar.SEND_VCARD"))
                }
            }, {
                key: "renderImportContacts",
                value: function(e, t) {
                    return t ? o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.list.action.toolTips.IMPORT_CONTACTS"),
                        "aria-label": (0,
                        p.t)("contacts.list.action.toolTips.IMPORT_CONTACTS"),
                        onClick: e,
                        isImplicit: !0,
                        onKeyDown: function(e) {
                            return e.key === m.BY.ENTERKEY && (0,
                            h.Mb)()
                        }
                    }, (0,
                    p.t)("contacts.list.action.IMPORT_CONTACTS")) : null
                }
            }, {
                key: "renderExportContacts",
                value: function(e, t) {
                    return t ? o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.list.action.toolTips.EXPORT_CONTACTS"),
                        "aria-label": (0,
                        p.t)("contacts.list.action.toolTips.EXPORT_CONTACTS"),
                        disabled: 0 === e,
                        "aria-disabled": 0 === e,
                        onClick: this.handleExportContacts,
                        isImplicit: !0,
                        onKeyDown: function(e) {
                            return e.key === m.BY.ENTERKEY && (0,
                            h.Mb)()
                        }
                    }, (0,
                    p.t)("contacts.list.action.EXPORT_CONTACTS")) : null
                }
            }, {
                key: "renderDuplicates",
                value: function(e) {
                    return Er && e ? o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.CHECK_DUPLICATE_CONTACTS"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.CHECK_DUPLICATE_CONTACTS"),
                        onClick: this.handleCheckDuplicates,
                        isImplicit: !0
                    }, (0,
                    p.t)("contacts.toolBar.CHECK_DUPLICATE_CONTACTS")) : null
                }
            }, {
                key: "renderMerge",
                value: function(e) {
                    var t = this.props
                      , n = t.selectedContactIds
                      , r = t.selectedContacts
                      , a = t.onMergeDuplicates;
                    return Er && e && n.length > 1 ? o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.MERGE_CONTACTS"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.MERGE_CONTACTS"),
                        disabled: !r.every(function(e) {
                            return e["@type"] === pr
                        }),
                        "aria-disabled": !(null !== r && void 0 !== r && r.every(function(e) {
                            return e["@type"] === pr
                        })),
                        onClick: a,
                        isImplicit: !0
                    }, (0,
                    p.t)("contacts.toolBar.MERGE_CONTACTS")) : null
                }
            }, {
                key: "renderDivider",
                value: function(e) {
                    return o.createElement(ee.Z, {
                        className: "".concat(e ? "" : "hide"),
                        divider: !0
                    })
                }
            }, {
                key: "renderDeleteContacts",
                value: function(e) {
                    return o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.DELETE_CONTACT"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.DELETE_CONTACT"),
                        disabled: !e.length,
                        "aria-disabled": !(null !== e && void 0 !== e && e.length),
                        onClick: this.handleDeleteContacts,
                        isImplicit: !0,
                        onKeyDown: function(e) {
                            return e.key === m.BY.ENTERKEY && (0,
                            h.Mb)()
                        }
                    }, (0,
                    p.t)("contacts.toolBar.DELETE_CONTACT"))
                }
            }, {
                key: "renderSendMail",
                value: function(e, t) {
                    return e ? o.createElement(f.Z.Button, {
                        title: (0,
                        p.t)("contacts.toolBar.toolTips.SEND_MAIL"),
                        "aria-label": (0,
                        p.t)("contacts.toolBar.toolTips.SEND_MAIL"),
                        disabled: !t.length,
                        "aria-disabled": !(null !== t && void 0 !== t && t.length),
                        onClick: this.handleComposeMail,
                        isImplicit: !0
                    }, (0,
                    p.t)("contacts.toolBar.SEND_MAIL")) : null
                }
            }, {
                key: "renderMoveTo",
                value: function() {
                    var e = this.props
                      , t = e.selectedAddressBook.properties.collected
                      , n = e.selectedContactIds
                      , r = e.selectedContacts
                      , a = e.onMoveContacts
                      , i = e.moveableAddressBooks;
                    return gr ? o.createElement(f.Z.Button, {
                        disabled: "true" !== t ? !n.length || !r.every(function(e) {
                            return e["@type"] === pr
                        }) || 0 === i.length : !n.length,
                        onClick: a,
                        isImplicit: !0,
                        "aria-label": "true" === t ? (0,
                        p.t)("contacts.toolBar.COPY_TO_FOLDER") : (0,
                        p.t)("contacts.toolBar.MOVE_TO_FOLDER"),
                        "aria-disabled": "true" !== t ? !(null !== n && void 0 !== n && n.length && null !== r && void 0 !== r && r.every(function(e) {
                            return e["@type"] === pr
                        }) && 0 !== (null === i || void 0 === i ? void 0 : i.length)) : !(null !== n && void 0 !== n && n.length),
                        onKeyDown: function(e) {
                            return e.key === m.BY.ENTERKEY && (0,
                            h.Mb)()
                        }
                    }, "true" === t ? (0,
                    p.t)("contacts.toolBar.COPY_TO_FOLDER") : (0,
                    p.t)("contacts.toolBar.MOVE_TO_FOLDER")) : null
                }
            }, {
                key: "renderContactPrint",
                value: function() {
                    var e, t = this, n = this.props, r = n.selectedAddressBook.properties, a = r.trash, i = r.collected, c = n.selectedContactIds, l = n.selectedContacts, s = n.searchList, u = n.searchPrintContactItems, d = "true" !== a && "true" !== i, y = (null === (e = s.result) || void 0 === e ? void 0 : e.totalCount) > 0;
                    return d ? o.createElement(f.Z.Button, {
                        disabled: this.handlePrintShowHide(y, c, l, u, s),
                        onClick: function() {
                            t.handlePrintContact(y, l, c, u)
                        },
                        isImplicit: !0,
                        "aria-label": (0,
                        p.t)("contacts.toolBar.PRINT_CONTACT"),
                        "aria-disabled": this.handlePrintShowHide(y, c, l, u, s),
                        onKeyDown: function(e) {
                            return e.key === m.BY.ENTERKEY && (0,
                            h.Mb)()
                        }
                    }, (0,
                    p.t)("contacts.toolBar.PRINT_CONTACT")) : null
                }
            }, {
                key: "renderMore",
                value: function(e, t) {
                    return o.createElement(f.Z.Dropdown, {
                        id: "contactListToolbarMore",
                        title: (0,
                        p.t)("common.MORE_LABEL"),
                        "aria-label": (0,
                        p.t)("common.MORE_LABEL"),
                        "aria-describedby": "contactListToolbarMoreOptions"
                    }, e.map(function(e) {
                        return t[e]
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.selectedAddressBook.properties
                      , n = t.trash
                      , r = t.collected
                      , a = e.selectedContactIds
                      , i = e.currentListTotalCount
                      , c = e.recipients
                      , l = e.onImportContacts
                      , s = e.onReload
                      , u = "true" !== n && "true" !== r
                      , d = []
                      , p = []
                      , h = [];
                    (0,
                    I.Z)("contacts.listToolbar").map(function(e) {
                        if ("object" === ir(e)) {
                            var t = Object.keys(e)
                              , n = Object.values(e);
                            "new" === t[0] ? (p = [],
                            p = rr(n[0]),
                            d.push(t[0])) : "more" === t[0] ? (h = [],
                            h = rr(n[0]),
                            d.push(t[0])) : d.push(t[0])
                        } else
                            d.push(e)
                    });
                    var y = {
                        sendvCard: this.renderSendvcard(),
                        importContacts: this.renderImportContacts(l, u),
                        exportContacts: this.renderExportContacts(i, u),
                        checkDuplicates: this.renderDuplicates(u),
                        merge: this.renderMerge(u),
                        divider: this.renderDivider(u),
                        deleteContact: this.renderDeleteContacts(a),
                        sendMail: this.renderSendMail(u, c),
                        moveToFolder: this.renderMoveTo(),
                        contactPrint: this.renderContactPrint()
                    }
                      , b = {
                        newContact: this.renderNewContact(),
                        newGroup: this.renderNewGroup()
                    }
                      , v = {
                        refresh: this.renderRefresh(s),
                        new: this.renderNewOptions(p, b, u),
                        more: this.renderMore(h, y)
                    };
                    return o.createElement("div", {
                        className: "ow-contacts-ContactToolbar-container",
                        tabIndex: 0,
                        role: m.HB.LIST
                    }, o.createElement(f.Z, null, d.map(function(e) {
                        return v[e]
                    })))
                }
            }]),
            n
        }()
          , wr = {
            id: l.string,
            isGroup: l.bool,
            firstName: l.string,
            lastName: l.string,
            email: l.string,
            displayName: l.string,
            addressBookId: l.string,
            fields: (0,
            l.arrayOf)((0,
            l.shape)({
                type: l.string,
                label: l.string,
                value: l.string
            }))
        };
        Cr.propTypes = {
            selectedAddressBook: (0,
            l.shape)({
                id: l.string,
                name: l.string,
                type: l.string,
                properties: (0,
                l.shape)({
                    default: l.string,
                    collected: l.string,
                    trash: l.string,
                    size: (0,
                    l.oneOfType)([l.string, l.number])
                })
            }),
            selectedContactIds: (0,
            l.arrayOf)(l.string),
            selectedContacts: (0,
            l.oneOfType)([(0,
            l.arrayOf)((0,
            l.shape)(wr)), (0,
            l.arrayOf)((0,
            l.shape)({
                id: l.string,
                isGroup: l.bool,
                groupName: l.string,
                emails: (0,
                l.arrayOf)(l.string),
                displayName: l.string,
                addressBookId: l.string,
                fields: (0,
                l.arrayOf)((0,
                l.shape)({
                    type: l.string,
                    label: l.string,
                    value: l.string
                })),
                contacts: (0,
                l.arrayOf)((0,
                l.shape)(wr))
            }))]),
            currentListTotalCount: l.number,
            recipients: (0,
            l.arrayOf)((0,
            l.shape)({
                name: l.string,
                address: l.string
            })),
            contactSort: (0,
            l.oneOf)([hr, yr, br]),
            onAddContact: l.func,
            onAddGroup: l.func,
            onMoveContacts: l.func,
            onDeleteContacts: l.func,
            onImportContacts: l.func,
            onExportContacts: l.func,
            onCheckDuplicates: l.func,
            onMergeDuplicates: l.func,
            onComposeMail: l.func,
            onSendAsVCard: l.func,
            onReload: l.func
        },
        Cr.defaultProps = {
            selectedAddressBook: {
                properties: {}
            },
            selectedContactIds: [],
            selectedContacts: [],
            currentListTotalCount: 0,
            recipients: [],
            contactSort: yr,
            onAddContact: function() {},
            onAddGroup: function() {},
            onMoveContacts: function() {},
            onDeleteContacts: function() {},
            onImportContacts: function() {},
            onExportContacts: function() {},
            onCheckDuplicates: function() {},
            onMergeDuplicates: function() {},
            onComposeMail: function() {},
            onSendAsVCard: function() {},
            onReload: function() {}
        };
        var Or = Cr
          , Tr = n(19077)
          , Sr = n(89835);
        function Pr(e) {
            "@babel/helpers - typeof";
            return (Pr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, o)
            }
            return n
        }
        function Nr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? kr(Object(n), !0).forEach(function(t) {
                    Ar(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kr(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function Ar(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Pr(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" !== Pr(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Pr(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var _r = (0,
        r.$j)(function(e) {
            var t = (0,
            W.mo)(e)
              , n = (0,
            pe.pU)(e)
              , o = (0,
            pe.YV)(e)
              , r = (0,
            pe.iH)(e)
              , a = (0,
            pe.jT)(e)
              , i = (0,
            pe.jZ)(e)
              , c = (0,
            pe.Kz)(e)
              , l = (0,
            pe.wP)(e)
              , s = (0,
            pe.mS)(e)
              , u = (0,
            W.f7)(e)
              , d = (0,
            X.nO)(e).show
              , f = (0,
            Nn.n$)(e)
              , p = (0,
            pe.u0)(e).renderData
              , m = void 0 === p ? {} : p
              , h = m.expanded
              , y = m.collapsing
              , b = (0,
            pe.EF)(e)
              , v = (0,
            mt.Mk)(e)
              , g = [];
            if (1 === o.length && !o[0].isGroup && !o[0].autoCollected) {
                var E = o[0].lzEmail.fields;
                E.length && E.forEach(function(e) {
                    var t = (0,
                    or.Tx)(o[0], {
                        sort: v
                    }).header.displayName;
                    g.push({
                        name: t,
                        address: e.value
                    })
                })
            }
            return {
                selectedAddressBook: t,
                selectedContactIds: n,
                selectedContacts: o,
                searchList: r,
                previewedContact: i,
                searchPrintContactItems: a,
                currentListTotalCount: c,
                expanded: h,
                collapsing: y,
                moveableAddressBooks: u,
                isComposeOpen: f,
                availableGroups: b,
                hideToolbar: d,
                searchStatus: l,
                touchSelectMode: s,
                contactSort: v,
                emailList: g
            }
        }, function(e) {
            return {
                dispatch: e,
                onAddContact: function() {
                    return e((0,
                    me.Zc)())
                },
                onAddGroup: function(t, n) {
                    return e((0,
                    me.Zc)(t, n))
                },
                onMoveContacts: function() {
                    return e((0,
                    me.cw)())
                },
                onDeleteContacts: function(t, n, o, r) {
                    return e((0,
                    me.GR)(t, n, o, r))
                },
                onInviteToEvent: function(t, n, o) {
                    return e((0,
                    kn.yM)(t, n, o))
                },
                onImportContacts: function() {
                    return e((0,
                    me.JS)())
                },
                onExportContacts: function(t, n) {
                    return e((0,
                    me.$q)(t, n))
                },
                onCheckDuplicates: function(t) {
                    return e((0,
                    Tr.g5)(t))
                },
                onMergeDuplicates: function() {
                    return e((0,
                    Sr.Vq)())
                },
                onSendAsVCard: function(t) {
                    return e((0,
                    me.OY)(t))
                },
                onReload: function() {
                    return e((0,
                    pt.rK)())
                },
                onEditContact: function(t) {
                    return e((0,
                    me.ls)(t))
                },
                onBeginCollapsing: function() {
                    return e((0,
                    pt.PS)(void 0, {
                        collapsing: !0
                    }))
                },
                onToggleTouchSelectMode: function(t) {
                    return e((0,
                    pt.Sq)(t))
                },
                onToggleTouchSearchMode: function(t) {
                    return e((0,
                    pt.Jp)(t))
                },
                onAddToGroup: function(t) {
                    return e((0,
                    me.v9)(t))
                }
            }
        }, function(e, t, n) {
            var o = e.selectedContacts
              , r = e.contactSort
              , a = t.dispatch
              , i = co()(t, ["dispatch"])
              , c = []
              , l = o.filter(function(e) {
                return !e.isGroup && e.email
            })
              , s = o.filter(function(e) {
                return e.isGroup
            });
            l.length && l.forEach(function(e) {
                var t = e.email
                  , n = e.displayName;
                c.push({
                    name: n,
                    address: t
                })
            }),
            s.length && s.forEach(function(e) {
                var t = e.contacts
                  , n = t.items
                  , o = t.totalCount
                  , a = e.emails;
                o && Object.values(n).forEach(function(e) {
                    var t = (0,
                    or.Tx)(e, {
                        sort: r
                    })
                      , n = t.header.displayName
                      , o = t.email;
                    o && c.push({
                        name: n,
                        address: o
                    })
                }),
                a.length && a.forEach(function(e) {
                    c.push({
                        name: e,
                        address: e
                    })
                })
            });
            var u = Nr(Nr({}, i), {}, {
                recipients: c,
                onComposeMail: function(e) {
                    a(e ? (0,
                    Pn.mH)(e) : (0,
                    Pn.mH)({
                        recipients: {
                            to: c,
                            cc: [],
                            bcc: []
                        }
                    }))
                }
            });
            return Object.assign({}, n, e, u)
        })(Or)
          , Ir = n(86956)
          , Dr = n(98664)
          , Br = n.n(Dr)
          , jr = n(19745)
          , Rr = n.n(jr)
          , Mr = function(e) {
            var t = e.show
              , n = e.data
              , r = e.defaultSelected
              , a = e.renderItem
              , i = e.onSelectedChange;
            return o.createElement("div", {
                className: "ow-contacts-ContactMergeList-container ".concat(t ? "" : "hide")
            }, o.createElement("div", {
                className: "ow-contact-ContactMergeListHeader",
                tabIndex: 0,
                role: m.HB.HEADING,
                "aria-level": m.DU.H3
            }, (0,
            p.t)("contacts.deduplicatePanel.CONTACTS"), " ", o.createElement("span", null, "(", n && n.length > 0 ? n.length : "0", ")")), o.createElement(q.Z, {
                className: "ow-contacts-ContactMergeList",
                data: n,
                defaultSelected: r,
                renderItem: a,
                onSelectedChange: i
            }))
        }
          , Lr = (0,
        l.oneOfType)([(0,
        l.arrayOf)((0,
        l.shape)({
            firstName: l.string,
            lastName: l.string,
            fields: (0,
            l.arrayOf)((0,
            l.shape)({
                type: l.string,
                label: l.string,
                value: l.string
            }))
        })), (0,
        l.arrayOf)((0,
        l.shape)({
            duplicatedString: l.string,
            contacts: (0,
            l.arrayOf)(l.string)
        }))]);
        Mr.defaultProps = {
            show: !0,
            data: [],
            defaultSelected: [],
            renderItem: function() {},
            onSelectedChange: function() {}
        },
        Mr.propTypes = {
            show: l.bool,
            data: Lr,
            defaultSelected: Lr,
            renderItem: l.func,
            onSelectedChange: l.func
        };
        var xr = Mr
          , Hr = n(74222);
        function Fr(e) {
            "@babel/helpers - typeof";
            return (Fr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ur(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Gr(o.key), o)
            }
        }
        function Gr(e) {
            var t = function(e, t) {
                if ("object" !== Fr(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Fr(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Fr(t) ? t : String(t)
        }
        function Zr(e, t) {
            return (Zr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Vr(e) {
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
                var n, o = Yr(e);
                if (t) {
                    var r = Yr(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Fr(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Kr(e)
                }(this, n)
            }
        }
        function Kr(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Yr(e) {
            return (Yr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var zr = function(e) {
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
                t && Zr(e, t)
            }(n, o.Component);
            var t = Vr(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).state = {
                    checked: !0
                },
                o.onChange = o.onChange.bind(Kr(o)),
                o.handleKeyDown = o.handleKeyDown.bind(Kr(o)),
                o
            }
            return function(e, t, n) {
                t && Ur(e.prototype, t),
                n && Ur(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "onChange",
                value: function() {
                    var e = !this.state.checked;
                    this.setState({
                        checked: e
                    }),
                    this.props.handleCheck(e)
                }
            }, {
                key: "handleKeyDown",
                value: function(e) {
                    e.key === ke.BYb.ENTERKEY && this.onChange()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.contact
                      , n = e.onComposeMail
                      , r = this.state.checked;
                    return o.createElement("div", {
                        className: "ow-contacts-ContactPreviewMergeItem"
                    }, o.createElement("div", {
                        className: "ow-contacts-ContactPreviewMergeItem-icon",
                        tabIndex: 0,
                        onKeyDown: this.handleKeyDown
                    }, o.createElement(Q.Z, {
                        onClick: this.onChange,
                        name: r ? "checkbox-selected" : "checkbox-unselected",
                        role: ke.HBu.CHECKBOX,
                        "aria-label": r ? (0,
                        p.t)("aria.label.SELECT") : (0,
                        p.t)("aria.label.UNSELECT"),
                        "aria-checked": r
                    })), o.createElement(tr, {
                        previewedContact: t,
                        selectedContactIds: [t.id],
                        displayCreateContactForm: {
                            show: !1,
                            isGroup: !1
                        },
                        showToolbar: !1,
                        onComposeMail: n
                    }))
                }
            }]),
            n
        }()
          , Wr = {
            type: s().string,
            label: s().string,
            value: s().string,
            showLabel: s().bool,
            clickable: s().bool
        };
        function Xr(e) {
            "@babel/helpers - typeof";
            return (Xr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function $r(e) {
            return function(e) {
                if (Array.isArray(e))
                    return qr(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return qr(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return qr(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function qr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function Jr(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, o)
            }
            return n
        }
        function Qr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Jr(Object(n), !0).forEach(function(t) {
                    ea(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jr(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function ea(e, t, n) {
            return (t = na(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function ta(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, na(o.key), o)
            }
        }
        function na(e) {
            var t = function(e, t) {
                if ("object" !== Xr(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Xr(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Xr(t) ? t : String(t)
        }
        function oa(e, t) {
            return (oa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function ra(e) {
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
                var n, o = aa(e);
                if (t) {
                    var r = aa(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Xr(t) || "function" == typeof t))
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
        function aa(e) {
            return (aa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        zr.defaultProps = {
            contact: {},
            handleCheck: function() {},
            onComposeMail: function() {}
        },
        zr.propTypes = {
            contact: s().shape({
                id: s().string,
                header: s().shape({
                    hasPhoto: s().bool,
                    displayName: s().string,
                    additionalFields: s().arrayOf(s().shape(Wr))
                }),
                sections: s().arrayOf(s().shape({
                    title: s().string,
                    fields: s().arrayOf(s().shape(Wr))
                }))
            }),
            handleCheck: s().func,
            onComposeMail: s().func
        };
        var ia = m.sH.SORT_FIRSTNAME_ASC
          , ca = m.sH.SORT_LASTNAME_ASC
          , la = function(e) {
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
                t && oa(e, t)
            }(n, o.PureComponent);
            var t = ra(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && ta(e.prototype, t),
                n && ta(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidUpdate",
                value: function() {
                    this.listContainer.scrollLeft = 0,
                    this.formContainer.scrollTop = 0
                }
            }, {
                key: "getFormData",
                value: function() {
                    var e = this.props.formData
                      , t = this.editForm.getFormData();
                    if (!t)
                        return !1;
                    var n = t.data
                      , o = t.message
                      , r = o.photoId
                      , a = o.photoRemoved;
                    return {
                        data: Qr(Qr({}, e), {}, {
                            firstName: n.firstName,
                            lastName: n.lastName,
                            fields: $r(n.fields)
                        }),
                        photoId: r,
                        photoRemoved: a
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.show
                      , r = t.previewData
                      , a = t.formData
                      , i = t.contactSort
                      , c = t.onComposeMail
                      , l = t.onPreviewItemCheck;
                    return o.createElement("div", {
                        className: "ow-contacts-ContactPreviewMerge ".concat(n ? "" : "hide"),
                        tabIndex: 0
                    }, o.createElement("div", {
                        className: "ow-contacts-ContactPreviewMerge-list",
                        ref: function(t) {
                            e.listContainer = t
                        }
                    }, r.map(function(e) {
                        return o.createElement(zr, {
                            key: e.id,
                            contact: (0,
                            or.Tx)(e, {
                                sort: i
                            }),
                            onComposeMail: c,
                            handleCheck: function(t) {
                                return l(t, e)
                            }
                        })
                    })), o.createElement("div", {
                        className: "ow-contacts-ContactPreviewMerge-form",
                        ref: function(t) {
                            e.formContainer = t
                        }
                    }, o.createElement(Hr.Z, {
                        ref: function(t) {
                            e.editForm = t
                        },
                        data: a,
                        editMode: !0,
                        editBtnDisplayed: !0
                    })))
                }
            }]),
            n
        }();
        la.defaultProps = {
            show: !1,
            previewData: [],
            formData: {},
            contactSort: ca,
            onPreviewItemCheck: function() {},
            onComposeMail: function() {}
        },
        la.propTypes = {
            show: l.bool,
            previewData: (0,
            l.arrayOf)((0,
            l.shape)({
                firstName: l.string,
                lastName: l.string,
                fields: l.array
            })),
            formData: (0,
            l.shape)({
                firstName: l.string,
                lastName: l.string,
                fields: l.array
            }),
            contactSort: (0,
            l.oneOf)([ia, ca]),
            onPreviewItemCheck: l.func,
            onComposeMail: l.func
        };
        var sa = la
          , ua = (0,
        r.$j)(function(e) {
            return {
                contactSort: (0,
                mt.Mk)(e)
            }
        }, null, null, {
            withRef: !0
        })(sa);
        function da(e) {
            "@babel/helpers - typeof";
            return (da = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function fa(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, pa(o.key), o)
            }
        }
        function pa(e) {
            var t = function(e, t) {
                if ("object" !== da(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== da(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === da(t) ? t : String(t)
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
                var n, o = ya(e);
                if (t) {
                    var r = ya(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === da(t) || "function" == typeof t))
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
        function ya(e) {
            return (ya = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ba = function(e) {
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
            }(n, o.PureComponent);
            var t = ha(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && fa(e.prototype, t),
                n && fa(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.hidePrevBtn
                      , n = e.hideNextBtn
                      , r = e.hideMergeBtn
                      , a = e.disablePrevBtn
                      , i = e.disableNextBtn
                      , c = e.disableMergeBtn
                      , l = e.onPrevBtnClick
                      , s = e.onNextBtnClick
                      , u = e.onMergeBtnClick
                      , d = e.onCancelBtnClick;
                    return o.createElement(f.Z, {
                        className: "ow-contacts-ContactMergeToolbar"
                    }, o.createElement(f.Z.Button, {
                        className: "ow-contacts-ContactMergeToolbar-prevBtn ".concat(t ? "hide" : ""),
                        disabled: a,
                        onClick: l
                    }, (0,
                    p.t)("wizard.PREVIOUS")), o.createElement(f.Z.Button, {
                        className: "ow-contacts-ContactMergeToolbar-nextBtn ".concat(n ? "hide" : ""),
                        disabled: i,
                        onClick: s
                    }, (0,
                    p.t)("wizard.NEXT")), o.createElement(f.Z.Button, {
                        className: "ow-contacts-ContactMergeToolbar-mergeBtn ".concat(r ? "hide" : ""),
                        disabled: c,
                        onClick: u
                    }, (0,
                    p.t)("contacts.deduplicatePanel.MERGE")), o.createElement(f.Z.Button, {
                        className: "ow-contacts-ContactMergeToolbar-cancelBtn",
                        onClick: d,
                        onKeyDown: function(e) {
                            return e.key === m.BY.ENTERKEY && setTimeout(function() {
                                (0,
                                h.kW)("#contactListToolbarMore")
                            }, 10)
                        }
                    }, (0,
                    p.t)("common.CANCEL")))
                }
            }]),
            n
        }();
        ba.defaultProps = {
            hidePrevBtn: !1,
            hideNextBtn: !1,
            hideMergeBtn: !1,
            disablePrevBtn: !1,
            disableNextBtn: !1,
            disableMergeBtn: !1,
            onPrevBtnClick: function() {},
            onNextBtnClick: function() {},
            onMergeBtnClick: function() {},
            onCancelBtnClick: function() {}
        },
        ba.propTypes = {
            hidePrevBtn: l.bool,
            hideNextBtn: l.bool,
            hideMergeBtn: l.bool,
            disablePrevBtn: l.bool,
            disableNextBtn: l.bool,
            disableMergeBtn: l.bool,
            onPrevBtnClick: l.func,
            onNextBtnClick: l.func,
            onMergeBtnClick: l.func,
            onCancelBtnClick: l.func
        };
        var va = n(43685)
          , ga = (0,
        r.$j)(function(e) {
            return {
                isShown: (0,
                va.g9)(e)
            }
        })(Ye.Z);
        function Ea(e) {
            "@babel/helpers - typeof";
            return (Ea = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ca(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, o)
            }
            return n
        }
        function wa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ca(Object(n), !0).forEach(function(t) {
                    Oa(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ca(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function Oa(e, t, n) {
            return (t = Sa(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Ta(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Sa(o.key), o)
            }
        }
        function Sa(e) {
            var t = function(e, t) {
                if ("object" !== Ea(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Ea(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Ea(t) ? t : String(t)
        }
        function Pa(e, t) {
            return (Pa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function ka(e) {
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
                var n, o = Aa(e);
                if (t) {
                    var r = Aa(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Ea(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Na(e)
                }(this, n)
            }
        }
        function Na(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Aa(e) {
            return (Aa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var _a = function(e) {
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
                t && Pa(e, t)
            }(n, o.PureComponent);
            var t = ka(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    activeTab: "1"
                },
                r.focusMergeDupRef = o.createRef(),
                r.handleSelectTab = r.handleSelectTab.bind(Na(r)),
                r.handlePrevBtnClick = r.handlePrevBtnClick.bind(Na(r)),
                r.handleNextBtnClick = r.handleNextBtnClick.bind(Na(r)),
                r.handleMergeBtnClick = r.handleMergeBtnClick.bind(Na(r)),
                r.handleCancelBtnClick = r.handleCancelBtnClick.bind(Na(r)),
                r.handleListSelectedChange = r.handleListSelectedChange.bind(Na(r)),
                r.handlePreviewItemCheck = r.handlePreviewItemCheck.bind(Na(r)),
                r.handleKeyDown = r.handleKeyDown.bind(Na(r)),
                r.setTabIndex = r.setTabIndex.bind(Na(r)),
                r
            }
            return function(e, t, n) {
                t && Ta(e.prototype, t),
                n && Ta(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.show && this.props.show !== e.show && this.setState({
                        activeTab: "1"
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e, t;
                    this.setTabIndex(),
                    null === (e = this.focusMergeDupRef) || void 0 === e || null === (t = e.current) || void 0 === t || t.focus()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e, t;
                    this.setTabIndex(),
                    null === (e = this.focusMergeDupRef) || void 0 === e || null === (t = e.current) || void 0 === t || t.focus()
                }
            }, {
                key: "setTabIndex",
                value: function() {
                    document.querySelectorAll(".nav-tabs > li").forEach(function(e) {
                        e.tabIndex = 0
                    })
                }
            }, {
                key: "handleKeyDown",
                value: function(e) {
                    if (e.key === m.BY.ENTERKEY) {
                        var t, n = document.activeElement.closest("li");
                        if (n)
                            document.querySelectorAll(".nav-tabs > li").forEach(function(e, o) {
                                e === n && (t = o + 1),
                                e.classList.remove("active")
                            }),
                            n.classList.add("active"),
                            this.handleSelectTab(t.toString())
                    }
                }
            }, {
                key: "handleSelectTab",
                value: function(e) {
                    this.setState({
                        activeTab: e
                    })
                }
            }, {
                key: "handlePrevBtnClick",
                value: function(e) {
                    this.props.onListSelectedChange(e - 1)
                }
            }, {
                key: "handleNextBtnClick",
                value: function(e) {
                    this.props.onListSelectedChange(e + 1)
                }
            }, {
                key: "handleMergeBtnClick",
                value: function() {
                    var e = this.props
                      , t = e.onMergeBtnClick
                      , n = e.toMergeContactIds;
                    if (this.duplicateMerge) {
                        var o = this.duplicateMerge.getWrappedInstance().getFormData();
                        o && t(wa(wa({}, o), {}, {
                            contactIdsToDelete: n.filter(function(e) {
                                return e !== o.data.id
                            }),
                            handlePreviewNextDuplicate: !0
                        }))
                    }
                }
            }, {
                key: "handleCancelBtnClick",
                value: function() {
                    this.props.onCancelBtnClick(!1)
                }
            }, {
                key: "handleListSelectedChange",
                value: function(e) {
                    var t = this.props.onListSelectedChange;
                    this.handleSelectTab("2"),
                    t(e[0].duplicatedString)
                }
            }, {
                key: "handlePreviewItemCheck",
                value: function(e, t) {
                    this.props.onPreviewItemCheck(e, t.id)
                }
            }, {
                key: "renderListItem",
                value: function(e) {
                    return o.createElement("div", {
                        className: "ow-contacts-ContactMergeListItem duplicate",
                        tabIndex: 0
                    }, o.createElement("div", {
                        className: "ow-contacts-ContactMergeListItem-textWrapper"
                    }, o.createElement("span", null, e.duplicatedString), o.createElement("span", null, "(".concat(e.contacts.length, ")"))))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.show
                      , r = t.listData
                      , a = t.previewData
                      , i = t.selectedItem
                      , c = t.selectedIndex
                      , l = t.formData
                      , s = t.toMergeContactIds
                      , u = t.onComposeMail
                      , d = this.state.activeTab
                      , f = "1" === d;
                    return n ? o.createElement("div", {
                        className: "ow-contacts-ContactDuplicatePanel"
                    }, o.createElement(ga, {
                        message: (0,
                        p.t)("contacts.deduplicatePanel.message.LOAD_MERGE_CONTACTS")
                    }), o.createElement("div", {
                        className: "ow-contacts-ContactDuplicatePanel-header",
                        ref: this.focusMergeDupRef,
                        tabIndex: 0,
                        "aria-label": (0,
                        p.t)("contacts.deduplicatePanel.DUPLICATE_CONTACTS_TITLE")
                    }, o.createElement("div", {
                        className: "ow-contacts-ContactDuplicatePanel-nav"
                    }, o.createElement(Br(), {
                        bsStyle: "tabs",
                        activeKey: d,
                        onSelect: this.handleSelectTab,
                        onKeyDown: this.handleKeyDown
                    }, o.createElement(Rr(), {
                        eventKey: "1",
                        tabIndex: -1
                    }, o.createElement("span", null, (0,
                    p.t)("contacts.deduplicatePanel.DUPLICATE_CONTACTS_TITLE"))), o.createElement(Rr(), {
                        eventKey: "2",
                        tabIndex: -1
                    }, (0,
                    p.t)("contacts.deduplicatePanel.MERGED_CONTACT")))), o.createElement(ba, {
                        hidePrevBtn: f,
                        hideNextBtn: f,
                        hideMergeBtn: f,
                        disablePrevBtn: 0 === c,
                        disableNextBtn: c === r.length - 1,
                        disableMergeBtn: s.length < 2,
                        onPrevBtnClick: function() {
                            return e.handlePrevBtnClick(c)
                        },
                        onNextBtnClick: function() {
                            return e.handleNextBtnClick(c)
                        },
                        onMergeBtnClick: this.handleMergeBtnClick,
                        onCancelBtnClick: this.handleCancelBtnClick
                    })), o.createElement("div", {
                        className: "ow-contacts-ContactDuplicatePanel-content"
                    }, o.createElement(xr, {
                        show: f,
                        data: r,
                        renderItem: this.renderListItem,
                        defaultSelected: [r.find(function(e) {
                            return e.duplicatedString === i.duplicatedString
                        })],
                        onSelectedChange: this.handleListSelectedChange
                    }), o.createElement(ua, {
                        ref: function(t) {
                            e.duplicateMerge = t
                        },
                        show: !f,
                        previewData: a,
                        formData: l,
                        onPreviewItemCheck: this.handlePreviewItemCheck,
                        onComposeMail: u
                    }))) : null
                }
            }]),
            n
        }();
        _a.defaultProps = {
            show: !1,
            listData: [],
            selectedItem: {},
            selectedIndex: 0,
            previewData: [],
            formData: {},
            toMergeContactIds: [],
            onListSelectedChange: function() {},
            onPreviewItemCheck: function() {},
            onMergeBtnClick: function() {},
            onCancelBtnClick: function() {},
            onComposeMail: function() {}
        },
        _a.propTypes = {
            show: l.bool,
            listData: (0,
            l.arrayOf)((0,
            l.shape)({
                duplicatedString: l.string,
                contacts: (0,
                l.arrayOf)(l.string)
            })),
            selectedItem: (0,
            l.shape)({
                duplicatedString: l.string,
                contacts: (0,
                l.arrayOf)(l.string)
            }),
            selectedIndex: l.number,
            previewData: (0,
            l.arrayOf)((0,
            l.shape)({
                firstName: l.string,
                lastName: l.string,
                fields: (0,
                l.arrayOf)((0,
                l.shape)({
                    type: l.string,
                    label: l.string,
                    value: l.string
                }))
            })),
            formData: (0,
            l.shape)({
                firstName: l.string,
                lastName: l.string,
                fields: (0,
                l.arrayOf)((0,
                l.shape)({
                    type: l.string,
                    label: l.string,
                    value: l.string
                }))
            }),
            toMergeContactIds: (0,
            l.arrayOf)(l.string),
            onListSelectedChange: l.func,
            onPreviewItemCheck: l.func,
            onMergeBtnClick: l.func,
            onCancelBtnClick: l.func,
            onComposeMail: l.func
        };
        var Ia = _a
          , Da = n(8023)
          , Ba = (0,
        r.$j)(function(e) {
            return {
                show: (0,
                X.z2)(e),
                listData: (0,
                Da.oy)(e),
                selectedItem: (0,
                Da.b)(e),
                selectedIndex: (0,
                Da.gk)(e),
                previewData: (0,
                va.sS)(e),
                formData: (0,
                va.Ly)(e),
                toMergeContactIds: (0,
                va.q8)(e)
            }
        }, function(e) {
            return {
                onListSelectedChange: (0,
                z.DE)(Tr.Xy, e),
                onMergeBtnClick: (0,
                z.DE)(Tr.pB, e),
                onPreviewItemCheck: (0,
                z.DE)(Sr.zB, e),
                onComposeMail: (0,
                z.DE)(Pn.mH, e),
                onCancelBtnClick: (0,
                z.DE)(Tr.Sh, e)
            }
        })(Ia);
        function ja(e) {
            "@babel/helpers - typeof";
            return (ja = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Ra = ["isShown", "message"];
        function Ma() {
            return (Ma = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function La(e, t) {
            if (null == e)
                return {};
            var n, o, r = function(e, t) {
                if (null == e)
                    return {};
                var n, o, r = {}, a = Object.keys(e);
                for (o = 0; o < a.length; o++)
                    n = a[o],
                    t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (o = 0; o < a.length; o++)
                    n = a[o],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
            }
            return r
        }
        function xa(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Ha(o.key), o)
            }
        }
        function Ha(e) {
            var t = function(e, t) {
                if ("object" !== ja(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== ja(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === ja(t) ? t : String(t)
        }
        function Fa(e, t) {
            return (Fa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ua(e) {
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
                var n, o = Ga(e);
                if (t) {
                    var r = Ga(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ja(t) || "function" == typeof t))
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
        function Ga(e) {
            return (Ga = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Za = function(e) {
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
                t && Fa(e, t)
            }(n, o.PureComponent);
            var t = Ua(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && xa(e.prototype, t),
                n && xa(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.isShown
                      , n = e.message
                      , r = La(e, Ra);
                    return o.createElement(Ye.Z, Ma({
                        isShown: t,
                        message: n
                    }, r))
                }
            }]),
            n
        }();
        Za.defaultProps = {
            isShown: !1,
            message: (0,
            p.t)("contacts.deduplicatePanel.message.CHECKING_DUPLICATE_CONTACTS")
        },
        Za.propTypes = {
            isShown: l.bool,
            message: l.string
        };
        var Va = Za
          , Ka = (0,
        r.$j)(function(e) {
            return {
                isShown: (0,
                Da.uM)(e)
            }
        })(Va);
        function Ya(e) {
            "@babel/helpers - typeof";
            return (Ya = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function za(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, o)
            }
            return n
        }
        function Wa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? za(Object(n), !0).forEach(function(t) {
                    Xa(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : za(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function Xa(e, t, n) {
            return (t = qa(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function $a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, qa(o.key), o)
            }
        }
        function qa(e) {
            var t = function(e, t) {
                if ("object" !== Ya(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Ya(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Ya(t) ? t : String(t)
        }
        function Ja(e, t) {
            return (Ja = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, o = ti(e);
                if (t) {
                    var r = ti(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Ya(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return ei(e)
                }(this, n)
            }
        }
        function ei(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ti(e) {
            return (ti = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ni = m.sH.SORT_FIRSTNAME_ASC
          , oi = m.sH.SORT_LASTNAME_ASC
          , ri = function(e) {
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
                t && Ja(e, t)
            }(n, o.PureComponent);
            var t = Qa(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).state = {
                    activeTab: "2"
                },
                o.handleSelectTab = o.handleSelectTab.bind(ei(o)),
                o.handleMergeBtnClick = o.handleMergeBtnClick.bind(ei(o)),
                o.handleCancelBtnClick = o.handleCancelBtnClick.bind(ei(o)),
                o.handlePreviewItemCheck = o.handlePreviewItemCheck.bind(ei(o)),
                o
            }
            return function(e, t, n) {
                t && $a(e.prototype, t),
                n && $a(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this.props
                      , n = t.show
                      , o = t.data;
                    e.show && n !== e.show && o.length > 0 && this.setState({
                        activeTab: "2"
                    })
                }
            }, {
                key: "handleSelectTab",
                value: function(e) {
                    this.setState({
                        activeTab: e
                    })
                }
            }, {
                key: "handleMergeBtnClick",
                value: function() {
                    var e = this.props
                      , t = e.onMergeBtnClick
                      , n = e.toMergeContactIds;
                    if (this.merge) {
                        var o = this.merge.getWrappedInstance().getFormData();
                        o && t(Wa(Wa({}, o), {}, {
                            contactIdsToDelete: n.filter(function(e) {
                                return e !== o.data.id
                            })
                        }))
                    }
                }
            }, {
                key: "handleCancelBtnClick",
                value: function() {
                    this.props.onCancelBtnClick()
                }
            }, {
                key: "handlePreviewItemCheck",
                value: function(e, t) {
                    this.props.onPreviewItemCheck(e, t.id)
                }
            }, {
                key: "renderListItem",
                value: function(e) {
                    return o.createElement("div", {
                        className: "ow-contacts-ContactMergeListItem"
                    }, o.createElement("div", {
                        className: "ow-contacts-ContactMergeListItem-title"
                    }, o.createElement("span", null, e.title)), o.createElement("div", {
                        className: "ow-contacts-ContactMergeListItem-value"
                    }, o.createElement("span", null, e.value)))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.show
                      , r = t.data
                      , a = t.formData
                      , i = t.toMergeContactIds
                      , c = t.contactSort
                      , l = this.state.activeTab
                      , s = "1" === l;
                    return n ? o.createElement("div", {
                        className: "ow-contacts-ContactMergePanel"
                    }, o.createElement("div", {
                        className: "ow-contacts-ContactMergePanel-header"
                    }, o.createElement("div", {
                        className: "ow-contacts-ContactMergePanel-nav"
                    }, o.createElement(Br(), {
                        bsStyle: "tabs",
                        activeKey: l,
                        onSelect: this.handleSelectTab
                    }, o.createElement(Rr(), {
                        eventKey: "1"
                    }, o.createElement("span", null, (0,
                    p.t)("contacts.deduplicatePanel.MERGE_CONTACTS_TITLE"))), o.createElement(Rr(), {
                        eventKey: "2"
                    }, (0,
                    p.t)("contacts.deduplicatePanel.MERGED_CONTACT")))), o.createElement(ba, {
                        hidePrevBtn: !0,
                        hideNextBtn: !0,
                        hideMergeBtn: s,
                        disablePrevBtn: !0,
                        disableNextBtn: !0,
                        disableMergeBtn: i.length < 2,
                        onMergeBtnClick: this.handleMergeBtnClick,
                        onCancelBtnClick: this.handleCancelBtnClick
                    })), o.createElement("div", {
                        className: "ow-contacts-ContactMergePanel-content"
                    }, o.createElement(xr, {
                        show: s,
                        data: r.map(function(e) {
                            return (0,
                            or._t)(e, {
                                sort: c
                            })
                        }),
                        renderItem: this.renderListItem,
                        itemHeight: 60
                    }), o.createElement(ua, {
                        ref: function(t) {
                            e.merge = t
                        },
                        show: !s,
                        previewData: r,
                        formData: a,
                        onPreviewItemCheck: this.handlePreviewItemCheck
                    }))) : null
                }
            }]),
            n
        }();
        ri.defaultProps = {
            show: !1,
            data: [],
            formData: {},
            toMergeContactIds: [],
            contactSort: oi,
            onPreviewItemCheck: function() {},
            onMergeBtnClick: function() {},
            onCancelBtnClick: function() {}
        },
        ri.propTypes = {
            show: l.bool,
            data: (0,
            l.oneOfType)([(0,
            l.arrayOf)((0,
            l.shape)({
                firstName: l.string,
                lastName: l.string,
                fields: (0,
                l.arrayOf)((0,
                l.shape)({
                    type: l.string,
                    label: l.string,
                    value: l.string
                }))
            }))]),
            formData: (0,
            l.shape)({
                firstName: l.string,
                lastName: l.string,
                fields: (0,
                l.arrayOf)((0,
                l.shape)({
                    type: l.string,
                    label: l.string,
                    value: l.string
                }))
            }),
            toMergeContactIds: (0,
            l.arrayOf)(l.string),
            contactSort: (0,
            l.oneOf)([ni, oi]),
            onPreviewItemCheck: l.func,
            onMergeBtnClick: l.func,
            onCancelBtnClick: l.func
        };
        var ai = ri
          , ii = (0,
        r.$j)(function(e) {
            return {
                show: (0,
                X.TT)(e),
                data: (0,
                va.sS)(e),
                formData: (0,
                va.Ly)(e),
                toMergeContactIds: (0,
                va.q8)(e),
                contactSort: (0,
                mt.Mk)(e)
            }
        }, function(e) {
            return {
                onMergeBtnClick: (0,
                z.DE)(Sr.Pt, e),
                onPreviewItemCheck: (0,
                z.DE)(Sr.zB, e),
                onCancelBtnClick: (0,
                z.DE)(Sr.dY, e)
            }
        })(ai)
          , ci = n(12079);
        function li(e) {
            "@babel/helpers - typeof";
            return (li = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function si(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, ui(o.key), o)
            }
        }
        function ui(e) {
            var t = function(e, t) {
                if ("object" !== li(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== li(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === li(t) ? t : String(t)
        }
        function di(e, t) {
            return (di = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function fi(e) {
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
                var n, o = mi(e);
                if (t) {
                    var r = mi(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === li(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return pi(e)
                }(this, n)
            }
        }
        function pi(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function mi(e) {
            return (mi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var hi = function(e) {
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
                t && di(e, t)
            }(n, o.PureComponent);
            var t = fi(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).state = {
                    errorMsg: "",
                    file: void 0
                },
                o.handleUpload = o.handleUpload.bind(pi(o)),
                o.handleCancel = o.handleCancel.bind(pi(o)),
                o.handleChange = o.handleChange.bind(pi(o)),
                o.handleHideAlert = o.handleHideAlert.bind(pi(o)),
                o
            }
            return function(e, t, n) {
                t && si(e.prototype, t),
                n && si(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    !e.show && this.inputEl && (this.inputEl.value = "",
                    this.setState({
                        errorMsg: "",
                        file: void 0
                    }))
                }
            }, {
                key: "handleHideAlert",
                value: function() {
                    this.setState({
                        errorMsg: ""
                    })
                }
            }, {
                key: "handleUpload",
                value: function() {
                    var e = this.props.onUpload
                      , t = this.state.file
                      , n = (0,
                    or.Xh)(t.source.name).errorMsg;
                    n ? this.setState({
                        errorMsg: n
                    }) : e(t, {
                        modalType: "progress",
                        modalProps: {
                            title: (0,
                            p.t)("contacts.importContacts.message.IMPORTING_CONTACTS")
                        }
                    })
                }
            }, {
                key: "handleCancel",
                value: function() {
                    this.props.onCancel()
                }
            }, {
                key: "handleChange",
                value: function(e) {
                    var t = e[0]
                      , n = (0,
                    or.Xh)(t.source.name).errorMsg;
                    n ? this.setState({
                        errorMsg: n
                    }) : this.setState({
                        file: t
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.show
                      , r = t.acceptTypes
                      , a = this.state
                      , i = a.errorMsg
                      , c = a.file
                      , l = r.map(function(e) {
                        return ".".concat(e)
                    }).join(",");
                    return o.createElement(N.Z, {
                        className: "ow-contacts-import",
                        show: n,
                        onHide: this.handleCancel,
                        backdrop: "static",
                        "aria-label": (0,
                        p.t)("contacts.importContacts.form.IMPORT_CONTACTS_TITLE")
                    }, o.createElement(N.Z.Header, {
                        closeButton: !0
                    }, o.createElement(N.Z.Title, {
                        className: "ow-contacts-import-title",
                        id: "ow-contacts-import-dialog",
                        role: m.HB.HEADING,
                        "aria-level": m.DU.H2
                    }, (0,
                    p.t)("contacts.importContacts.form.IMPORT_CONTACTS_TITLE"))), o.createElement(N.Z.Body, {
                        className: "ow-contacts-import-body"
                    }, o.createElement("label", {
                        className: "ow-contacts-importBody-label",
                        "aria-label": (0,
                        p.t)("contacts.importContacts.form.FILE_MESSAGE")
                    }, " ", (0,
                    p.t)("contacts.importContacts.form.FILE_MESSAGE")), o.createElement(ci.Z, {
                        inputRef: function(t) {
                            e.inputEl = t
                        },
                        accept: l,
                        onChange: this.handleChange
                    }, o.createElement(k.Z, {
                        className: "ow-contact-importBody-fileBtn",
                        role: m.HB.BUTTON,
                        "aria-label": (0,
                        p.t)("contacts.importContacts.form.SELECTFILE_BUTTON_TEXT")
                    }, (0,
                    p.t)("contacts.importContacts.form.SELECTFILE_BUTTON_TEXT")), o.createElement("label", {
                        className: "ow-contact-importBody-fileName",
                        onClick: function(e) {
                            return e.stopPropagation()
                        },
                        "aria-label": c ? c.source.name : (0,
                        p.t)("contacts.importContacts.form.FILENAME_LABEL")
                    }, c ? c.source.name : (0,
                    p.t)("contacts.importContacts.form.FILENAME_LABEL")))), o.createElement(N.Z.Footer, null, o.createElement(k.Z, {
                        className: "ow-button-primary btn btn-default",
                        onClick: this.handleUpload,
                        "aria-label": (0,
                        p.t)("contacts.importContacts.form.UPLOAD_BUTTON_TEXT"),
                        disabled: !c,
                        "aria-disabled": !c
                    }, (0,
                    p.t)("contacts.importContacts.form.UPLOAD_BUTTON_TEXT")), o.createElement(k.Z, {
                        className: "ow-button btn btn-default",
                        onClick: this.handleCancel,
                        "aria-label": (0,
                        p.t)("common.CANCEL")
                    }, (0,
                    p.t)("common.CANCEL"))), o.createElement(Hn.Z, {
                        show: i,
                        message: i,
                        onHide: this.handleHideAlert
                    }))
                }
            }]),
            n
        }();
        hi.defaultProps = {
            show: !1,
            acceptTypes: ["csv", "vcf"],
            onUpload: function() {},
            onCancel: function() {}
        },
        hi.propTypes = {
            show: l.bool,
            acceptTypes: (0,
            l.arrayOf)(l.string),
            onUpload: l.func,
            onCancel: l.func
        };
        var yi = hi
          , bi = (0,
        r.$j)(function(e) {
            return {
                show: (0,
                X.Id)(e)
            }
        }, function(e) {
            return {
                onUpload: (0,
                z.DE)(me.zi, e),
                onCancel: (0,
                z.DE)(me.DI, e)
            }
        })(yi)
          , vi = n(16955)
          , gi = n.n(vi);
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
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, wi(o.key), o)
            }
        }
        function wi(e) {
            var t = function(e, t) {
                if ("object" !== Ei(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Ei(o))
                        return o;
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
        function Ti(e) {
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
                var n, o = Pi(e);
                if (t) {
                    var r = Pi(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Ei(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Si(e)
                }(this, n)
            }
        }
        function Si(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Pi(e) {
            return (Pi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ki = (0,
        I.Z)("contacts").regexp.folderNameInvalidChars
          , Ni = function(e) {
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
            }(n, o.PureComponent);
            var t = Ti(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).state = {
                    isFormChanged: !1,
                    isFormValid: !0
                },
                o.handleFormChange = o.handleFormChange.bind(Si(o)),
                o.handleFormValid = o.handleFormValid.bind(Si(o)),
                o.handleSubmit = o.handleSubmit.bind(Si(o)),
                o.handleReset = o.handleReset.bind(Si(o)),
                o.handleCancel = o.handleCancel.bind(Si(o)),
                o.handleFormInvalid = o.handleFormInvalid.bind(Si(o)),
                o
            }
            return function(e, t, n) {
                t && Ci(e.prototype, t),
                n && Ci(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleCancel",
                value: function() {
                    var e = this.props.onCancel;
                    this.handleReset(),
                    e()
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
                value: function(e, t) {
                    this.setState({
                        isFormChanged: t
                    })
                }
            }, {
                key: "handleReset",
                value: function() {
                    var e = this.form.getPristineValues();
                    this.setState({
                        isFormChanged: !1,
                        isFormValid: !0
                    }),
                    this.form.reset(e)
                }
            }, {
                key: "handleSubmit",
                value: function() {
                    var e = this.props.onSubmit
                      , t = this.state.isFormValid
                      , n = this.form.getCurrentValues();
                    t && e(n)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.show
                      , r = t.onCancel
                      , a = this.state
                      , i = a.errorMsg
                      , c = a.isFormChanged
                      , l = a.isFormValid;
                    return o.createElement(N.Z, {
                        className: "ow-contacts-export",
                        show: n,
                        onHide: this.handleCancel,
                        backdrop: "static"
                    }, o.createElement(N.Z.Header, {
                        closeButton: !0
                    }, o.createElement(N.Z.Title, {
                        className: "ow-contacts-export-title",
                        id: "ow-contacts-export-dialog",
                        role: m.HB.HEADING,
                        "aria-level": m.DU.H2
                    }, (0,
                    p.t)("contacts.exportContacts.EXPORT_CONTACTS_TITLE"))), o.createElement(N.Z.Body, {
                        className: "ow-contacts-export-body"
                    }, o.createElement(A.l0, {
                        className: "ow-contacts-export-form",
                        onChange: this.handleFormChange,
                        onValid: this.handleFormValid,
                        onInvalid: this.handleFormInvalid,
                        ref: function(t) {
                            e.form = t
                        }
                    }, o.createElement(A.UP, {
                        type: "text",
                        label: (0,
                        p.t)("contacts.exportContacts.form.FILENAME_LABEL"),
                        name: "fileName",
                        required: !0,
                        "aria-required": !0,
                        placeholder: (0,
                        p.t)("contacts.exportContacts.form.FILE_NAME_DEFAULT"),
                        validations: {
                            maxLength: 255,
                            customRegexp: function(e, t) {
                                return "" !== gi()(t) && !ki.test(t) || (0,
                                p.t)("contacts.exportContacts.WARNING_INVALID_FILENAME")
                            }
                        },
                        validationErrors: {
                            maxLength: (0,
                            p.t)("contacts.exportContacts.WARNING_INVALID_FILENAME"),
                            isDefaultRequiredValue: (0,
                            p.t)("contacts.exportContacts.WARNING_INVALID_FILENAME")
                        }
                    }), o.createElement("div", {
                        className: "ow-contacts-export-radio"
                    }, o.createElement("label", {
                        className: "ow-contacts-export-radio-label",
                        "aria-label": (0,
                        p.t)("contacts.exportContacts.form.EXPORTTYPE_LABEL")
                    }, (0,
                    p.t)("contacts.exportContacts.form.EXPORTTYPE_LABEL")), o.createElement(A.OF, {
                        name: "fileType",
                        value: "csv",
                        list: [{
                            value: "csv",
                            text: (0,
                            p.t)("contacts.exportContacts.form.EXPORTTYPES.csv")
                        }, {
                            value: "vcard",
                            text: (0,
                            p.t)("contacts.exportContacts.form.EXPORTTYPES.vcard")
                        }],
                        onChange: this.handleChange
                    })))), o.createElement(N.Z.Footer, null, o.createElement(k.Z, {
                        onClick: this.handleReset,
                        role: m.HB.BUTTON,
                        "aria-label": (0,
                        p.t)("common.RESET")
                    }, (0,
                    p.t)("common.RESET")), o.createElement(k.Z, {
                        onClick: this.handleSubmit,
                        disabled: !c || !l,
                        role: m.HB.BUTTON,
                        "aria-label": (0,
                        p.t)("common.SUBMIT"),
                        "aria-disabled": !c || !l
                    }, (0,
                    p.t)("common.SUBMIT")), o.createElement(k.Z, {
                        onClick: r,
                        role: m.HB.BUTTON,
                        "aria-label": (0,
                        p.t)("common.CANCEL")
                    }, (0,
                    p.t)("common.CANCEL"))), o.createElement(Hn.Z, {
                        show: i,
                        message: i,
                        onHide: this.handleHideAlert
                    }))
                }
            }]),
            n
        }();
        Ni.defaultProps = {
            show: !0,
            onCancel: function() {},
            onSubmit: function() {}
        },
        Ni.propTypes = {
            show: l.bool,
            onCancel: l.func,
            onSubmit: l.func
        };
        var Ai = Ni
          , _i = (0,
        r.$j)(function(e) {
            return {
                show: (0,
                X.fr)(e),
                selectedContactIds: (0,
                pe.pU)(e)
            }
        }, function(e) {
            return {
                onSubmit: function(t) {
                    e((0,
                    me.Gu)(t))
                },
                onCancel: (0,
                z.DE)(me.fW, e)
            }
        })(Ai)
          , Ii = (0,
        r.$j)(function(e) {
            return {
                contactAddGroupModal: (0,
                X.ZT)(e),
                groups: (0,
                pe.EF)(e),
                addressBookId: (0,
                W.am)(e)
            }
        }, function(e) {
            return {
                onItemClick: function(t, n, o, r) {
                    return e((0,
                    me.e1)(t, n, o, r))
                },
                onCancel: function() {
                    return e((0,
                    me.O1)())
                }
            }
        });
        function Di(e) {
            "@babel/helpers - typeof";
            return (Di = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Bi(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, ji(o.key), o)
            }
        }
        function ji(e) {
            var t = function(e, t) {
                if ("object" !== Di(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Di(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Di(t) ? t : String(t)
        }
        function Ri(e, t) {
            return (Ri = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Mi(e) {
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
                var n, o = xi(e);
                if (t) {
                    var r = xi(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Di(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Li(e)
                }(this, n)
            }
        }
        function Li(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function xi(e) {
            return (xi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                t && Ri(e, t)
            }(n, o.PureComponent);
            var t = Mi(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).handleCancel = o.handleCancel.bind(Li(o)),
                o.handleItemClick = o.handleItemClick.bind(Li(o)),
                o
            }
            return function(e, t, n) {
                t && Bi(e.prototype, t),
                n && Bi(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleCancel",
                value: function() {
                    (0,
                    this.props.onCancel)()
                }
            }, {
                key: "handleItemClick",
                value: function(e) {
                    var t = this.props
                      , n = t.addressBookId
                      , o = t.contactAddGroupModal.id
                      , r = t.onItemClick
                      , a = t.onCancel;
                    r(e.groupId, [o], n, e.name),
                    a()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.contactAddGroupModal
                      , n = t.show
                      , r = t.id
                      , a = e.groups
                      , i = e.onCancel
                      , c = a && a.filter(function(e) {
                        return !e.contacts.items[r]
                    }).map(function(e) {
                        return {
                            groupId: e.id,
                            name: e.groupName
                        }
                    });
                    return o.createElement(N.Z, {
                        className: "ow-contacts-addToGroup",
                        show: n,
                        onHide: i,
                        backdrop: "static"
                    }, o.createElement(N.Z.Header, {
                        closeButton: !0
                    }, o.createElement(N.Z.Title, {
                        className: "ow-contacts-addToGroup-title",
                        id: "ow-contacts-addToGroup-dialog",
                        role: m.HB.HEADING,
                        "aria-level": m.DU.H2
                    }, (0,
                    p.t)("contacts.CONTACT_GROUP_LABEL"))), o.createElement(N.Z.Body, {
                        className: "ow-contacts-addToGroup-body"
                    }, o.createElement(q.Z, {
                        className: "ow-contactGroup-list",
                        data: c,
                        renderItem: function(e) {
                            return o.createElement("div", {
                                className: "ow-contactGroup-list-item",
                                tabIndex: 0
                            }, o.createElement("div", null, e.name))
                        },
                        onItemClick: this.handleItemClick
                    })))
                }
            }]),
            n
        }();
        Hi.defaultProps = {
            contactAddGroupModal: {
                show: !1,
                id: ""
            },
            addressBookId: "",
            groups: [],
            onCancel: function() {},
            onItemClick: function() {}
        },
        Hi.propTypes = {
            contactAddGroupModal: (0,
            l.shape)({
                id: l.string,
                show: l.bool
            }),
            addressBookId: l.string,
            groups: (0,
            l.arrayOf)((0,
            l.shape)({})),
            onCancel: l.func,
            onItemClick: l.func
        };
        var Fi = Ii(Hi)
          , Ui = (0,
        r.$j)(function(e) {
            return {
                selectedAddressBookId: (0,
                W.am)(e),
                moveableAddressBooks: (0,
                W.f7)(e),
                selectedContactIds: (0,
                pe.pU)(e),
                showMoveableAddressBooksPanel: (0,
                X.KS)(e)
            }
        }, function(e) {
            return {
                onConfirmMoveContacts: function(t, n, o) {
                    return e((0,
                    me.XW)(t, n, o))
                },
                onCancelMoveContacts: function() {
                    return e((0,
                    me.Mw)())
                }
            }
        });
        function Gi(e) {
            "@babel/helpers - typeof";
            return (Gi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Zi(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Vi(o.key), o)
            }
        }
        function Vi(e) {
            var t = function(e, t) {
                if ("object" !== Gi(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Gi(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Gi(t) ? t : String(t)
        }
        function Ki(e, t) {
            return (Ki = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Yi(e) {
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
                var n, o = Wi(e);
                if (t) {
                    var r = Wi(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Gi(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return zi(e)
                }(this, n)
            }
        }
        function zi(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Wi(e) {
            return (Wi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Xi = function(e) {
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
                t && Ki(e, t)
            }(n, o.PureComponent);
            var t = Yi(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).handelCancelMoveContacts = o.handelCancelMoveContacts.bind(zi(o)),
                o.handleConfirmMoveContacts = o.handleConfirmMoveContacts.bind(zi(o)),
                o.renderItem = o.renderItem.bind(zi(o)),
                o
            }
            return function(e, t, n) {
                t && Zi(e.prototype, t),
                n && Zi(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handelCancelMoveContacts",
                value: function() {
                    (0,
                    this.props.onCancelMoveContacts)()
                }
            }, {
                key: "handleConfirmMoveContacts",
                value: function(e) {
                    var t = e.id
                      , n = this.props
                      , o = n.onConfirmMoveContacts
                      , r = n.onCancelMoveContacts
                      , a = n.selectedAddressBookId;
                    o(n.selectedContactIds, t, a),
                    r()
                }
            }, {
                key: "renderItem",
                value: function(e) {
                    var t = e.displayName;
                    return o.createElement("div", {
                        className: "ow-contacts-ContactMoveableAddressBooks-list-item",
                        title: t,
                        tabIndex: 0
                    }, o.createElement("div", null, t))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.showMoveableAddressBooksPanel
                      , n = e.moveableAddressBooks
                      , r = e.onCancelMoveContacts
                      , a = n.map(function(e) {
                        var t = e.id
                          , n = e.name
                          , o = e.properties
                          , r = o.default
                          , a = o.collected
                          , i = n;
                        return "true" === r ? i = (0,
                        p.t)("contacts.DEFAULT_ADDRESSBOOK_LABEL") : "true" === a && (i = (0,
                        p.t)("contacts.AUTO_COMPLETE_LABEL")),
                        {
                            displayName: i,
                            id: t
                        }
                    });
                    return o.createElement(N.Z, {
                        className: "ow-contacts-ContactMoveableAddressBooks",
                        show: t,
                        onHide: r,
                        backdrop: "static"
                    }, o.createElement(N.Z.Header, {
                        closeButton: !0
                    }, o.createElement(N.Z.Title, {
                        id: "ow-contacts-ContactMoveableAddressBooks-dialog",
                        role: m.HB.HEADING,
                        "aria-level": m.DU.H2
                    }, (0,
                    p.t)("contacts.ADDRESSBOOK_LABEL"))), o.createElement(N.Z.Body, null, o.createElement(q.Z, {
                        className: "ow-contacts-ContactMoveableAddressBooks-list",
                        data: a,
                        renderItem: this.renderItem,
                        onItemClick: this.handleConfirmMoveContacts
                    })))
                }
            }]),
            n
        }();
        Xi.defaultProps = {
            selectedAddressBookId: "",
            moveableAddressBooks: [],
            selectedContactIds: [],
            showMoveableAddressBooksPanel: !1,
            onConfirmMoveContacts: function() {},
            onCancelMoveContacts: function() {}
        },
        Xi.propTypes = {
            selectedAddressBookId: l.string,
            moveableAddressBooks: (0,
            l.arrayOf)((0,
            l.shape)({
                id: l.string,
                name: l.string,
                type: l.string,
                properties: (0,
                l.shape)({
                    default: l.string,
                    collected: l.string,
                    trash: l.string,
                    size: (0,
                    l.oneOfType)([l.string, l.number])
                })
            })),
            selectedContactIds: (0,
            l.arrayOf)(l.string),
            showMoveableAddressBooksPanel: l.bool,
            onConfirmMoveContacts: l.func,
            onCancelMoveContacts: l.func
        };
        var $i = Ui(Xi)
          , qi = n(54015)
          , Ji = n(38881)
          , Qi = n(52396)
          , ec = n(61123)
          , tc = n(45857)
          , nc = n(88422)
          , oc = n(74494)
          , rc = n(9631)
          , ac = n(96312);
        function ic(e) {
            "@babel/helpers - typeof";
            return (ic = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function cc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, lc(o.key), o)
            }
        }
        function lc(e) {
            var t = function(e, t) {
                if ("object" !== ic(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== ic(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === ic(t) ? t : String(t)
        }
        function sc(e, t) {
            return (sc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function uc(e) {
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
                var n, o = fc(e);
                if (t) {
                    var r = fc(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ic(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return dc(e)
                }(this, n)
            }
        }
        function dc(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function fc(e) {
            return (fc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var pc = function(e) {
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
                t && sc(e, t)
            }(n, o.Component);
            var t = uc(n);
            function n(e) {
                var o;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                o = t.call(this, e);
                var r = window.uxLocalStorage && JSON.parse(window.uxLocalStorage.getItem("concurrentPopupShow"));
                return o.state = {
                    concurrentLoginShow: r
                },
                o.handleCancelToast = o.handleCancelToast.bind(dc(o)),
                o.reOpenAllToast = o.reOpenAllToast.bind(dc(o)),
                o.errorToastOpener = o.errorToastOpener.bind(dc(o)),
                window.addEventListener("toastOpener", o.handleCancelToast),
                o
            }
            return function(e, t, n) {
                t && cc(e.prototype, t),
                n && cc(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillUnmount",
                value: function() {
                    window && window.removeEventListener("toastOpener", this.handleCancelToast)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    !0 !== window.securityNotification && (0,
                    ke.nIE)() && e.securityTrackingList.filter(function(e) {
                        return "mail.vacationMessage2.save" !== e
                    }).map(function(t, n) {
                        window.securityNotification = !0,
                        (0,
                        c.Am)(o.createElement(rc.Z, {
                            key: n,
                            toastId: t,
                            message: t,
                            id: n,
                            autoforwardAddress: e.autoforwardAddress.addresses,
                            addressEnabled: 0 === e.autoforwardAddress.addresses.length && "mail.forwarding.save" === t ? m.Q1.ENABLED : m.Q1.TEXT
                        }), {
                            autoClose: (0,
                            I.Z)("securityNotification.toastInterval"),
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
                key: "errorToastOpener",
                value: function(e) {
                    var t = e.detail.errorMessage;
                    (0,
                    c.Am)(o.createElement(ec.Z, {
                        errorMessage: t
                    }))
                }
            }, {
                key: "handleCancelToast",
                value: function(e) {
                    var t = e.detail
                      , n = t.id
                      , r = t.onSendMail;
                    window.addEventListener(n, this.reOpenAllToast),
                    window.addEventListener("".concat(n, "error"), this.errorToastOpener),
                    (0,
                    c.Am)(o.createElement(Qi.Z, {
                        key: n,
                        id: n,
                        onSendMail: r,
                        onCancelSend: this.props.saveMessage
                    })),
                    this.props.addToastAccociatedIds(n)
                }
            }, {
                key: "reOpenAllToast",
                value: function(e) {
                    var t = this
                      , n = e.detail
                      , r = n.id
                      , a = n.timer;
                    window.ux.logout || setTimeout(function() {
                        (0,
                        c.Am)(o.createElement(Qi.Z, {
                            key: r,
                            id: r,
                            timer: a - 1,
                            onSendMail: t.props.sendMessage,
                            onCancelSend: t.props.saveMessage
                        }))
                    }, 1e3)
                }
            }, {
                key: "render",
                value: function() {
                    return o.createElement("div", {
                        className: "ow-appLayout-hbox ow-appLayout-contacts",
                        role: m.HB.HEADING,
                        "aria-label": (0,
                        p.t)("app.CONTACTS"),
                        "aria-level": m.DU.H1,
                        tabIndex: 0
                    }, o.createElement(We.Z, null, o.createElement("div", {
                        className: "ow-appLayout-hbox ow-appLayout-flex"
                    }, o.createElement(i(), {
                        size: m.mW.SIZE,
                        maxSize: m.mW.MAXSIZE,
                        minSize: m.mW.MINSIZE
                    }, o.createElement("div", {
                        className: "ow-appLayout-left"
                    }, o.createElement("div", {
                        className: "ow-appLayout-vbox"
                    }, o.createElement("div", {
                        className: "ow-appLayout-top"
                    }, o.createElement(mo, null)), o.createElement("div", {
                        className: "ow-appLayout-flex"
                    }, o.createElement(nt, null)), (0,
                    I.Z)("advertisement.adBanner") && o.createElement(d.$t, {
                        title: "bottomAd",
                        className: "ow-advertisement-bottom",
                        url: (0,
                        I.Z)("advertisement.adBannerUrl")
                    }))), o.createElement("div", {
                        className: "ow-appLayout-middle ow-appLayout-hbox"
                    }, o.createElement(i(), {
                        minSize: 350,
                        size: 452,
                        maxSize: 500
                    }, o.createElement("div", {
                        className: "ow-appLayout-vbox listPanel"
                    }, o.createElement("div", {
                        className: "ow-appLayout-top"
                    }, o.createElement(We.Z, null, o.createElement(_r, null))), o.createElement("div", {
                        className: "ow-appLayout-flex"
                    }, o.createElement(Dn, null))), o.createElement("div", {
                        className: "ow-appLayout-vbox previewEditPanel"
                    }, o.createElement(We.Z, null, o.createElement(nr, null)))))), o.createElement(We.Z, null, o.createElement(Ir.Z, null)), o.createElement(We.Z, null, o.createElement(Ba, null)), o.createElement(We.Z, null, o.createElement(Ka, null)), o.createElement(We.Z, null, o.createElement(ii, null)), o.createElement(We.Z, null, o.createElement(bi, null)), o.createElement(We.Z, null, o.createElement(_i, null)), o.createElement(We.Z, null, o.createElement(Fi, null)), o.createElement(We.Z, null, o.createElement($i, null)), o.createElement(We.Z, null, o.createElement(qi.Z, null)), o.createElement(We.Z, null, o.createElement(Ji.Z, null))), (0,
                    I.Z)("advertisement.skyscrapper") && o.createElement(d.Nv, {
                        title: "ad",
                        className: "ow-advertisement-right",
                        url: (0,
                        I.Z)("advertisement.skyscrapperUrl")
                    })))
                }
            }], [{
                key: "name",
                get: function() {
                    return m.lw.CONTACTS
                }
            }]),
            n
        }();
        pc.defaultProps = {
            addToastAccociatedIds: function() {},
            sendMessage: function() {},
            saveMessage: function() {},
            securityTrackingList: [],
            autoforwardAddress: []
        },
        pc.propTypes = {
            addToastAccociatedIds: s().func,
            sendMessage: s().func,
            saveMessage: s().func,
            getUserProfile: s().string.isRequired,
            getAuthDetails: s().string.isRequired,
            securityTrackingList: s().arrayOf(s().string),
            autoforwardAddress: s().arrayOf(s().string)
        };
        var mc = (0,
        r.$j)(function(e) {
            var t = (0,
            oc.YqX)(e)
              , n = (0,
            ac.PK)(e);
            return {
                getUserProfile: (0,
                tc.zx)(e),
                getAuthDetails: (0,
                nc._)(e),
                securityTrackingList: t,
                autoforwardAddress: n
            }
        }, function(e) {
            return {
                addToastAccociatedIds: function(t) {
                    return e((0,
                    u.Sy9)(t))
                },
                sendMessage: function(t, n, o, r) {
                    return e((0,
                    u.bG5)(t, n, o, r))
                },
                saveMessage: function(t, n, o) {
                    return e((0,
                    u.zEV)(t, n, o))
                }
            }
        })(pc)
    },
    62595: function(e, t, n) {
        var o = n(87401)
          , r = n(23398)
          , a = n(98401)
          , i = n(76081)
          , c = n(84987)
          , l = n(77545)
          , s = n(94165);
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
        function d(e) {
            return function(e) {
                if (Array.isArray(e))
                    return f(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return f(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, m(o.key), o)
            }
        }
        function m(e) {
            var t = function(e, t) {
                if ("object" !== u(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== u(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === u(t) ? t : String(t)
        }
        function h(e, t) {
            return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function y(e) {
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
                var n, o = v(e);
                if (t) {
                    var r = v(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === u(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return b(e)
                }(this, n)
            }
        }
        function b(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function v(e) {
            return (v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var g = function(e) {
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
            }(n, o.PureComponent);
            var t = y(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).state = {
                    selectedEmailList: []
                },
                o.handleItemClick = o.handleItemClick.bind(b(o)),
                o.handleSend = o.handleSend.bind(b(o)),
                o.handleCancel = o.handleCancel.bind(b(o)),
                o
            }
            return function(e, t, n) {
                t && p(e.prototype, t),
                n && p(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleItemClick",
                value: function(e, t) {
                    t.stopPropagation();
                    var n = e.address
                      , o = this.state.selectedEmailList;
                    t.shiftKey || t.ctrlKey ? o.includes(n) ? this.setState({
                        selectedEmailList: o.filter(function(e) {
                            return e !== n
                        })
                    }) : this.setState({
                        selectedEmailList: [].concat(d(o), [n])
                    }) : this.setState({
                        selectedEmailList: [n]
                    })
                }
            }, {
                key: "handleSend",
                value: function(e) {
                    var t = this.state.selectedEmailList
                      , n = this.props
                      , o = n.inviting
                      , r = n.onComposeMail
                      , a = n.onInviteToEvent;
                    if (o) {
                        var i = [];
                        t.forEach(function(e) {
                            i.push({
                                commonName: e,
                                address: e,
                                type: "internal"
                            })
                        }),
                        a(void 0, void 0, i)
                    } else {
                        var c = [];
                        t.forEach(function(e) {
                            c.push({
                                name: e,
                                address: e
                            })
                        }),
                        r({
                            recipients: {
                                to: c,
                                cc: [],
                                bcc: []
                            }
                        })
                    }
                    this.handleCancel(e)
                }
            }, {
                key: "handleCancel",
                value: function(e) {
                    null === e || void 0 === e || e.stopPropagation();
                    var t = this.props.onCancel;
                    this.setState({
                        selectedEmailList: []
                    }),
                    t && t()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.show
                      , n = e.data
                      , r = this.state.selectedEmailList;
                    return o.createElement(a.Z, {
                        className: "ow-contacts-emailList",
                        show: t,
                        onHide: this.handleCancel,
                        backdrop: "static"
                    }, o.createElement(a.Z.Header, {
                        closeButton: !0
                    }, o.createElement(a.Z.Title, {
                        className: "ow-contacts-emailList-title",
                        id: "ow-contacts-emailList-dialog",
                        role: s.HB.HEADING,
                        "aria-level": s.DU.H2
                    }, (0,
                    c.t)("contacts.list.EMAIL_FIELD_PICKER_TITLE"))), o.createElement(a.Z.Body, {
                        className: "ow-contacts-emailList-body"
                    }, o.createElement(i.Z, {
                        className: "ow-contacts-emailList-list",
                        data: n,
                        renderItem: function(e) {
                            return o.createElement("div", {
                                className: "ow-contacts-emailList-list-item ".concat(r.includes(e.address) ? "active" : ""),
                                "aria-label": null === e || void 0 === e ? void 0 : e.address,
                                tabIndex: 0
                            }, o.createElement("div", null, e.address))
                        },
                        onItemClick: this.handleItemClick
                    })), o.createElement(a.Z.Footer, null, o.createElement(l.Z, {
                        disabled: !this.state.selectedEmailList.length,
                        className: "ow-contacts-emailList-send ow-button-primary",
                        onClick: this.handleSend,
                        role: s.HB.BUTTON,
                        "aria-label": (0,
                        c.t)("contacts.addressSelector.SEND")
                    }, (0,
                    c.t)("contacts.addressSelector.SEND")), o.createElement(l.Z, {
                        className: "ow-contacts-emailList-cancel",
                        onClick: this.handleCancel,
                        role: s.HB.BUTTON,
                        "aria-label": (0,
                        c.t)("common.CANCEL")
                    }, (0,
                    c.t)("common.CANCEL"))))
                }
            }]),
            n
        }();
        g.defaultProps = {
            show: !1,
            inviting: !1,
            data: [],
            onComposeMail: function() {},
            onInviteToEvent: function() {},
            onCancel: function() {}
        },
        g.propTypes = {
            show: r.bool,
            inviting: r.bool,
            data: (0,
            r.arrayOf)((0,
            r.shape)({
                name: r.string,
                address: r.string
            })),
            onComposeMail: r.func,
            onInviteToEvent: r.func,
            onCancel: r.func
        },
        t.Z = g
    },
    27593: function(e, t, n) {
        var o = n(87401)
          , r = n(23398)
          , a = n(47052)
          , i = n(18733)
          , c = n(62347)
          , l = n(32081)
          , s = n(44910)
          , u = n(94165)
          , d = n(4446);
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
        function p() {
            return (p = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function m(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, h(o.key), o)
            }
        }
        function h(e) {
            var t = function(e, t) {
                if ("object" !== f(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== f(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === f(t) ? t : String(t)
        }
        function y(e, t) {
            return (y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, o = g(e);
                if (t) {
                    var r = g(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === f(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return v(e)
                }(this, n)
            }
        }
        function v(e) {
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
        var E = u.rW.DRAG
          , C = function(e) {
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
                t && y(e, t)
            }(n, o.PureComponent);
            var t = b(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).handleDragSourceBeginDrag = o.handleDragSourceBeginDrag.bind(v(o)),
                o.handleItemClick = o.handleItemClick.bind(v(o)),
                o.handleCheckChange = o.handleCheckChange.bind(v(o)),
                o
            }
            return function(e, t, n) {
                t && m(e.prototype, t),
                n && m(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidUpdate",
                value: function() {
                    var e, t, n, o, r;
                    null !== (e = document.activeElement) && void 0 !== e && null !== (t = e.classList) && void 0 !== t && t.contains("ow-icon-squared-unchecked") && (null === (n = document.activeElement) || void 0 === n || null === (o = n.closest("[class*=ow-contacts-ContactListItemDragSource]")) || void 0 === o || null === (r = o.parentNode) || void 0 === r || r.classList.add("ow-VirtualizedList-item-tabFocus"))
                }
            }, {
                key: "handleDragSourceBeginDrag",
                value: function() {
                    var e = this.props
                      , t = e.rowData;
                    e.list.willUpdateSelection(t, E, {})
                }
            }, {
                key: "handleItemClick",
                value: function(e) {
                    var t = this.props
                      , n = t.rowData;
                    t.list.handleItemClick(n, e),
                    e.stopPropagation()
                }
            }, {
                key: "handleCheckChange",
                value: function(e) {
                    var t = this.props
                      , n = t.rowData;
                    t.list.handleCheckChange(n, e),
                    null === e || void 0 === e || e.stopPropagation()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.selectedAddressBook.properties.trash
                      , r = t.disableDragging
                      , f = t.hasAddibleGroups
                      , m = t.rowData
                      , h = t.isItemSelected
                      , y = t.onDeleteContacts
                      , b = t.onComposeMail
                      , v = t.onAddToGroup
                      , g = t.onInviteToEvent
                      , E = t.enableNickname
                      , C = t.selectedInfo
                      , w = t.list
                      , O = m.data;
                    if (O) {
                        var T = O.id
                          , S = O.title
                          , P = O.value
                          , k = O.fields
                          , N = O.isGroup
                          , A = O.contactEmails
                          , _ = O.groupEmails
                          , I = {
                            onDeleteContacts: y,
                            onComposeMail: b,
                            onAddToGroup: v,
                            onInviteToEvent: g
                        };
                        return o.createElement(i.Z, {
                            className: "ow-contacts-ContactListItemDragSource",
                            currentId: T,
                            disable: r,
                            onBeginDrag: this.handleDragSourceBeginDrag
                        }, o.createElement("div", {
                            className: "ow-contacts-ContactListItem",
                            role: u.HB.PRESENTATION,
                            onClick: this.handleItemClick,
                            ref: function(t) {
                                e.innerDom = t
                            }
                        }, o.createElement("div", {
                            className: "ow-selectable-item-checkbox-container",
                            role: u.HB.CHECKBOX,
                            "aria-label": S || P,
                            "aria-checked": h(m)
                        }, o.createElement(l.Z, {
                            name: h(m) ? "square-selected" : "squared-unchecked",
                            onClick: this.handleCheckChange,
                            tabIndex: d.UhU.isDesktop ? 0 : -1,
                            onFocus: function(e) {
                                return (0,
                                s.yJ)(e)
                            },
                            role: u.HB.CHECKBOX,
                            "aria-label": S || P,
                            "aria-checked": h(m),
                            onBlur: function(t) {
                                (0,
                                s.yJ)(t),
                                (0,
                                s.np)(t, e.props.list)
                            },
                            onKeyDown: function(e) {
                                (0,
                                s.OG)(e, ".ow-ResponsiveToolbar", C, w.handleCheckChange, m, h(m), w.handleItemClick)
                            }
                        })), o.createElement("div", {
                            className: "ow-contacts-ContactListItem-detail"
                        }, o.createElement("div", {
                            className: "ow-contacts-ContactListItem-detail-title",
                            role: u.HB.HEADING,
                            "aria-level": u.DU.H4,
                            "aria-label": S
                        }, o.createElement("span", null, S)), E && k && o.createElement("div", {
                            className: "ow-contacts-ContactListItem-detail-nickname",
                            "aria-label": null === k || void 0 === k ? void 0 : k.nickname
                        }, o.createElement("span", null, k.nickname)), o.createElement("div", {
                            className: "ow-contacts-ContactListItem-detail-value"
                        }, o.createElement("span", {
                            className: N ? "value-group" : "value-contact"
                        }, P))), o.createElement(c.Z, {
                            className: "ow-contacts-ContactListItem-hoverToolbar",
                            enableHover: !0
                        }, o.createElement(a.Z, p({
                            id: T,
                            name: S,
                            isGroup: N,
                            hasAddibleGroups: f,
                            groupEmails: _,
                            contactEmails: A,
                            fields: k,
                            inTrash: "true" === n
                        }, I)))))
                    }
                    return o.createElement("div", {
                        className: "ow-contacts-ContactListItem-blank"
                    }, o.createElement("div", {
                        className: "ow-contacts-ContactListItem-blank-row"
                    }), o.createElement("div", {
                        className: "ow-contacts-ContactListItem-blank-row"
                    }))
                }
            }]),
            n
        }();
        C.defaultProps = {
            selectedAddressBook: {
                properties: {}
            },
            disableDragging: !1,
            hasAddibleGroups: !1,
            rowData: {},
            isItemSelected: function() {},
            list: {},
            onDeleteContacts: function() {},
            onComposeMail: function() {},
            onAddToGroup: function() {},
            onInviteToEvent: function() {}
        },
        C.propTypes = {
            selectedAddressBook: (0,
            r.shape)({
                id: r.string,
                name: r.string,
                type: r.string,
                properties: (0,
                r.shape)({
                    default: r.string,
                    collected: r.string,
                    trash: r.string,
                    size: (0,
                    r.oneOfType)([r.string, r.number])
                })
            }),
            disableDragging: r.bool,
            hasAddibleGroups: r.bool,
            rowData: (0,
            r.shape)({
                index: r.number,
                data: (0,
                r.oneOfType)([(0,
                r.shape)({
                    id: r.string,
                    title: r.string,
                    value: r.string,
                    isGroup: r.bool,
                    fields: (0,
                    r.shape)({
                        email: r.string,
                        mobile: r.string,
                        phone: r.string,
                        address: r.string
                    }),
                    contactEmails: (0,
                    r.arrayOf)((0,
                    r.shape)({
                        name: r.string,
                        address: r.string
                    }))
                }), (0,
                r.shape)({
                    id: r.string,
                    title: r.string,
                    value: r.string,
                    isGroup: r.bool,
                    groupEmails: (0,
                    r.arrayOf)((0,
                    r.shape)({
                        name: r.string,
                        address: r.string
                    }))
                }), (0,
                r.shape)({
                    id: r.string,
                    title: r.string,
                    autoCollected: r.bool
                })]),
                clientRect: (0,
                r.shape)({
                    top: r.number,
                    bottom: r.number,
                    height: r.number
                })
            }),
            isItemSelected: r.func,
            list: (0,
            r.shape)({}),
            onDeleteContacts: r.func,
            onComposeMail: r.func,
            onAddToGroup: r.func,
            onInviteToEvent: r.func
        },
        t.Z = C
    },
    47052: function(e, t, n) {
        var o = n(87401)
          , r = n(23398)
          , a = n(97186)
          , i = n.n(a)
          , c = n(10091)
          , l = n(62595)
          , s = n(84987)
          , u = n(83416)
          , d = n(29610)
          , f = n(94165);
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
        function m(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, h(o.key), o)
            }
        }
        function h(e) {
            var t = function(e, t) {
                if ("object" !== p(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== p(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === p(t) ? t : String(t)
        }
        function y(e, t) {
            return (y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, o = g(e);
                if (t) {
                    var r = g(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === p(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return v(e)
                }(this, n)
            }
        }
        function v(e) {
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
        var E = (0,
        u.Z)("contacts.mapUrl")
          , C = (0,
        u.Z)("calendar.enabled")
          , w = function(e) {
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
                t && y(e, t)
            }(n, o.PureComponent);
            var t = b(n);
            function n(e) {
                var o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (o = t.call(this, e)).state = {
                    inviting: !1,
                    showEmailList: !1
                },
                o.handleComposeMail = o.handleComposeMail.bind(v(o)),
                o.handleInviteToEvent = o.handleInviteToEvent.bind(v(o)),
                o.handleAddressClick = o.handleAddressClick.bind(v(o)),
                o.handleDeleteContacts = o.handleDeleteContacts.bind(v(o)),
                o.handleAddToGroup = o.handleAddToGroup.bind(v(o)),
                o.handleHideEmailList = o.handleHideEmailList.bind(v(o)),
                o
            }
            return function(e, t, n) {
                t && m(e.prototype, t),
                n && m(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleComposeMail",
                value: function(e) {
                    e.stopPropagation();
                    var t = this.props
                      , n = t.name
                      , o = t.fields
                      , r = t.onComposeMail
                      , a = t.isGroup
                      , i = t.groupEmails
                      , c = t.contactEmails
                      , l = {
                        recipients: {
                            to: [{
                                name: n,
                                address: o.email
                            }],
                            cc: [],
                            bcc: []
                        }
                    };
                    a ? (l.recipients.to = i.map(function(e) {
                        return {
                            name: e.name,
                            address: e.address
                        }
                    }),
                    r(l),
                    (0,
                    d.j)("contacts", "send_mail", {
                        record: l
                    })) : c.length > 1 ? this.setState({
                        showEmailList: !0
                    }) : (r(l),
                    (0,
                    d.j)("contacts", "mail_contact", {
                        record: l
                    }))
                }
            }, {
                key: "handleInviteToEvent",
                value: function(e) {
                    e.stopPropagation();
                    var t = this.props
                      , n = t.fields.email
                      , o = t.name
                      , r = t.contactEmails
                      , a = t.onInviteToEvent;
                    r.length > 1 ? this.setState({
                        inviting: !0,
                        showEmailList: !0
                    }) : a(void 0, void 0, [{
                        commonName: o,
                        address: n,
                        type: "internal"
                    }])
                }
            }, {
                key: "handleAddToGroup",
                value: function(e) {
                    e.stopPropagation();
                    var t = this.props
                      , n = t.id;
                    (0,
                    t.onAddToGroup)(n)
                }
            }, {
                key: "handleAddressClick",
                value: function(e) {
                    e.stopPropagation();
                    var t = this.props.fields.address;
                    window.open("".concat(E).concat(encodeURIComponent(t))),
                    (0,
                    d.j)("contacts", "show_location", {
                        record: t
                    })
                }
            }, {
                key: "handleDeleteContacts",
                value: function(e) {
                    e.stopPropagation();
                    var t = this.props
                      , n = t.id
                      , o = t.isGroup
                      , r = t.inTrash
                      , a = t.onDeleteContacts;
                    o ? a(void 0, [n], {
                        modalType: "confirm",
                        modalProps: {
                            title: (0,
                            s.t)("contacts.catalogView.DELETE_GROUP"),
                            message: r ? (0,
                            s.t)("contacts.catalogView.message.CONFIRM_DELETE_GROUPS_FROM_TRASH") : (0,
                            s.t)("contacts.catalogView.message.CONFIRM_DELETE_GROUPS")
                        }
                    }) : a([n], void 0, {
                        modalType: "confirm",
                        modalProps: {
                            title: (0,
                            s.t)("contacts.list.DELETE_CONTACT"),
                            message: r ? (0,
                            s.t)("contacts.list.message.CONFIRM_DELETE_CONTACTS_FROM_TRASH") : (0,
                            s.t)("contacts.list.message.CONFIRM_DELETE_CONTACTS")
                        }
                    })
                }
            }, {
                key: "handleHideEmailList",
                value: function() {
                    this.setState({
                        inviting: !1,
                        showEmailList: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.fields
                      , n = e.isGroup
                      , r = e.groupEmails
                      , a = e.contactEmails
                      , u = e.hasAddibleGroups
                      , d = e.onComposeMail
                      , p = e.onInviteToEvent
                      , m = e.inTrash
                      , h = t.email
                      , y = t.address
                      , b = this.state
                      , v = b.inviting
                      , g = b.showEmailList;
                    return o.createElement(c.Z, {
                        className: "ow-contacts-ContactListItemToolbar"
                    }, (!!h || n && r.length > 0) && o.createElement(c.Z.Button, {
                        title: (0,
                        s.t)("contacts.toolBar.toolTips.SEND_MAIL"),
                        iconName: "mail-contacts",
                        onClick: this.handleComposeMail,
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        s.t)("contacts.toolBar.toolTips.SEND_MAIL"),
                        "aria-hidden": "true"
                    }), !!h && C && o.createElement(c.Z.Button, {
                        title: (0,
                        s.t)("contacts.toolBar.toolTips.INVITE_TO_EVENT"),
                        iconName: "invite-event",
                        onClick: this.handleInviteToEvent,
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        s.t)("contacts.toolBar.toolTips.INVITE_TO_EVENT"),
                        "aria-hidden": "true"
                    }), y && o.createElement(c.Z.Button, {
                        className: "ow-contacts-ToolbarBtn-location",
                        title: (0,
                        s.t)("contacts.detailEdit.action.SHOW_LOCATION"),
                        iconName: "location-contacts",
                        onClick: this.handleAddressClick,
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        s.t)("contacts.detailEdit.action.SHOW_LOCATION"),
                        "aria-hidden": "true"
                    }), !n && !i()(t) && u && !m && o.createElement(c.Z.Button, {
                        className: "ow-contacts-ToolbarBtn-addToGroup",
                        title: (0,
                        s.t)("contacts.detailEdit.action.ADD_TO_GROUP"),
                        iconName: "group-contacts",
                        onClick: this.handleAddToGroup,
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        s.t)("contacts.detailEdit.action.ADD_TO_GROUP"),
                        "aria-hidden": "true"
                    }), o.createElement(c.Z.Button, {
                        title: (0,
                        s.t)("contacts.toolBar.toolTips.DELETE_CONTACT"),
                        iconName: "trash-contacts",
                        onClick: this.handleDeleteContacts,
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        s.t)("contacts.toolBar.toolTips.DELETE_CONTACT"),
                        "aria-hidden": "true"
                    }), o.createElement(l.Z, {
                        show: g,
                        inviting: v,
                        data: a,
                        onComposeMail: d,
                        onInviteToEvent: p,
                        onCancel: this.handleHideEmailList
                    }))
                }
            }]),
            n
        }();
        w.defaultProps = {
            id: "",
            name: "",
            isGroup: !1,
            hasAddibleGroups: !1,
            inTrash: !1,
            groupEmails: [],
            contactEmails: [],
            fields: {},
            onDeleteContacts: function() {},
            onComposeMail: function() {},
            onAddToGroup: function() {},
            onInviteToEvent: function() {}
        },
        w.propTypes = {
            id: r.string,
            name: r.string,
            isGroup: r.bool,
            hasAddibleGroups: r.bool,
            inTrash: r.bool,
            groupEmails: (0,
            r.arrayOf)((0,
            r.shape)({
                name: r.string,
                address: r.string
            })),
            contactEmails: (0,
            r.arrayOf)((0,
            r.shape)({
                name: r.string,
                address: r.string
            })),
            fields: (0,
            r.shape)({
                email: r.string,
                mobile: r.string,
                phone: r.string,
                address: r.string
            }),
            onDeleteContacts: r.func,
            onComposeMail: r.func,
            onAddToGroup: r.func,
            onInviteToEvent: r.func
        },
        t.Z = w
    },
    18733: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return w
            }
        });
        var o = n(1972)
          , r = n(94165)
          , a = n(16083)
          , i = n(17702)
          , c = n(77424)
          , l = (0,
        a.$j)(function(e) {
            return {
                selectedIds: (0,
                i.pU)(e),
                currentGroups: (0,
                i.EF)(e)
            }
        }, function(e) {
            return {
                onSelect: function(t) {
                    return e((0,
                    c.Af)(t))
                }
            }
        })
          , s = n(87401)
          , u = n(23398)
          , d = n(88762);
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
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, m(o.key), o)
            }
        }
        function m(e) {
            var t = function(e, t) {
                if ("object" !== f(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== f(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === f(t) ? t : String(t)
        }
        function h(e, t) {
            return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function y(e) {
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
                var n, o = b(e);
                if (t) {
                    var r = b(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === f(t) || "function" == typeof t))
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
        function b(e) {
            return (b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var v = function(e) {
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
            }(n, s.PureComponent);
            var t = y(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && p(e.prototype, t),
                n && p(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    this.props.connectDragPreview((0,
                    d.rX)(), {
                        captureDraggingState: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.connectDragSource
                      , n = e.isDragging
                      , o = e.className
                      , a = e.children;
                    return t(s.createElement("div", {
                        role: r.HB.PRESENTATION,
                        className: "".concat(o, " ").concat(n && "ow-contacts-ContactListItemDragSource-dragging"),
                        onMouseDown: function(e) {
                            e.stopPropagation()
                        }
                    }, a))
                }
            }]),
            n
        }();
        v.defaultProps = {
            connectDragSource: function() {},
            connectDragPreview: function() {},
            isDragging: !1,
            className: "",
            children: null
        },
        v.propTypes = {
            connectDragSource: u.func,
            connectDragPreview: u.func,
            isDragging: u.bool,
            className: u.string,
            children: u.node
        };
        var g = v
          , E = r.ZV.CONTACTS
          , C = {
            beginDrag: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.currentId
                  , n = e.currentGroups
                  , o = e.selectedIds
                  , r = e.onBeginDrag
                  , a = e.onSelect;
                o.length && o.includes(t) || (a([t]),
                r && r());
                var i = o.includes(t) ? o : [t]
                  , c = [];
                return n && n.forEach(function(e) {
                    var t = e.id;
                    i.includes(t) && c.push(t)
                }),
                {
                    selected: i,
                    selectedGroups: c
                }
            },
            canDrag: function() {
                return !(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).disable
            }
        };
        var w = l((0,
        o.Ej)(E, C, function(e, t) {
            return {
                connectDragSource: e.dragSource(),
                connectDragPreview: e.dragPreview(),
                isDragging: t.isDragging()
            }
        })(g))
    }
}]);
