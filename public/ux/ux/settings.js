/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[571], {
    96244: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return b
            }
        });
        var a = n(29439)
          , r = n(87462)
          , i = n(45987)
          , o = n(15671)
          , l = n(43144)
          , s = n(60136)
          , c = n(82963)
          , u = n(61120)
          , d = n(87401)
          , f = n(23398)
          , m = n.n(f)
          , p = n(32022)
          , h = n.n(p)
          , E = n(90088)
          , v = n(22747)
          , g = (n(84987),
        ["options", "defaultOption", "onSelectChange", "inputType", "inputValue", "onInputChange", "onInputBlur", "disabled", "maxDate", "primary", "reverseOrder", "mainLabel"]);
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
                var n, a = (0,
                u.Z)(e);
                if (t) {
                    var r = (0,
                    u.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                c.Z)(this, n)
            }
        }
        var b = function(e) {
            (0,
            s.Z)(n, e);
            var t = y(n);
            function n() {
                return (0,
                o.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            l.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.options
                      , n = e.defaultOption
                      , o = e.onSelectChange
                      , l = e.inputType
                      , s = e.inputValue
                      , c = e.onInputChange
                      , u = e.onInputBlur
                      , f = e.disabled
                      , m = (e.maxDate,
                    e.primary)
                      , p = e.reverseOrder
                      , y = e.mainLabel
                      , b = (0,
                    i.Z)(e, g)
                      , S = this.context.isRtl
                      , D = d.createElement("div", {
                        className: "ow-selectInput-labelCmp"
                    }, d.createElement(E.Z, {
                        rtl: S,
                        "aria-label": "".concat(y),
                        onChange: o,
                        value: n,
                        options: t,
                        labelKey: "text",
                        clearable: !1,
                        searchable: !1,
                        disabled: f
                    }))
                      , C = d.createElement("div", {
                        className: "ow-selectInput-inputCmp"
                    }, d.createElement(v.Z, (0,
                    r.Z)({}, b, {
                        type: l,
                        value: s,
                        onChange: c,
                        onBlur: u,
                        disabled: f || m,
                        maxDate: h()(),
                        placeholder: "",
                        handleHide: this.handleHide
                    })))
                      , T = y ? d.createElement("div", {
                        className: "ow-selectInput-mainLabel",
                        "aria-label": y
                    }, y) : null
                      , O = p ? [T, C, D] : [T, D, C]
                      , R = (0,
                    a.Z)(O, 3)
                      , Z = R[0]
                      , I = R[1]
                      , A = R[2];
                    return d.createElement("div", {
                        className: "ow-selectInput ow-selectInput-dynamic-order"
                    }, Z, I, A)
                }
            }]),
            n
        }(n(31017).Z);
        b.contextTypes = {
            isRtl: m().bool
        },
        b.propTypes = {
            options: m().arrayOf(m().shape({
                value: m().string,
                text: m().string
            })),
            defaultOption: m().string,
            disabled: m().bool,
            onSelectChange: m().func,
            inputType: m().string,
            inputValue: m().string,
            onInputChange: m().func,
            onInputBlur: m().func,
            maxDate: m().string,
            fieldType: m().string
        },
        b.defaultProps = {
            options: [],
            defaultOption: "",
            disabled: !1,
            onSelectChange: function() {},
            inputType: "text",
            inputValue: "",
            onInputChange: function() {},
            onInputBlur: function() {},
            maxDate: null,
            fieldType: ""
        }
    },
    83081: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return E
            }
        });
        var a = n(29439)
          , r = n(87462)
          , i = n(15671)
          , o = n(43144)
          , l = n(60136)
          , s = n(82963)
          , c = n(61120)
          , u = n(87401)
          , d = n(23398)
          , f = n.n(d)
          , m = n(90088)
          , p = n(22747);
        n(84987);
        function h(e) {
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
                var n, a = (0,
                c.Z)(e);
                if (t) {
                    var r = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                s.Z)(this, n)
            }
        }
        var E = function(e) {
            (0,
            l.Z)(n, e);
            var t = h(n);
            function n() {
                return (0,
                i.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            o.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.options
                      , n = e.defaultOption
                      , i = e.onSelectChange
                      , o = e.fields
                      , l = e.fields2Value
                      , s = e.onInputChange
                      , c = e.onInputBlur
                      , d = e.reverseOrder
                      , f = e.mainLabel
                      , h = this.context.isRtl
                      , E = o.map(function(e) {
                        return u.createElement("div", {
                            className: "ow-selectMultiInputs-inputCmp-field"
                        }, u.createElement("span", {
                            className: "ow-selectInput-mainLabel"
                        }, e.placeholder), u.createElement(p.Z, (0,
                        r.Z)({
                            key: e.name,
                            "aria-label": e.name,
                            type: e.type,
                            value: l[e.name].value,
                            onChange: function(t) {
                                return s(t, e.name)
                            },
                            onBlur: function(t) {
                                return c(t, e.name)
                            }
                        }, l[e.name], {
                            placeholder: ""
                        })))
                    })
                      , v = u.createElement("div", {
                        className: "ow-selectMultiInputs-labelCmp"
                    }, u.createElement(m.Z, {
                        rtl: h,
                        "aria-label": "".concat(f),
                        value: n,
                        options: t,
                        onChange: i,
                        labelKey: "text",
                        clearable: !1,
                        searchable: !1
                    }))
                      , g = u.createElement("div", {
                        className: "ow-selectMultiInputs-inputCmp"
                    }, E)
                      , y = f ? u.createElement("div", {
                        className: "ow-selectInput-mainLabel"
                    }, f) : null
                      , b = d ? [y, g, v] : [y, v, g]
                      , S = (0,
                    a.Z)(b, 3)
                      , D = S[0]
                      , C = S[1]
                      , T = S[2];
                    return u.createElement("div", {
                        className: "ow-selectMultiInputs"
                    }, D, C, T)
                }
            }]),
            n
        }(n(52454).Z);
        E.contextTypes = {
            isRtl: f().bool
        }
    },
    94185: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return v
            }
        });
        var a = n(87462)
          , r = n(45987)
          , i = n(15671)
          , o = n(43144)
          , l = n(60136)
          , s = n(82963)
          , c = n(61120)
          , u = n(87401)
          , d = (n(23398),
        n(22747))
          , f = n(55594)
          , m = n.n(f)
          , p = n(84987)
          , h = ["label", "inputType", "inputValue", "onLabelChange", "onInputChange", "onInputBlur", "labelCustomized", "labelValue", "labelErrorMsg"];
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
                var n, a = (0,
                c.Z)(e);
                if (t) {
                    var r = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                s.Z)(this, n)
            }
        }
        var v = function(e) {
            (0,
            l.Z)(n, e);
            var t = E(n);
            function n() {
                return (0,
                i.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            o.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.label
                      , n = e.inputType
                      , i = e.inputValue
                      , o = e.onLabelChange
                      , l = e.onInputChange
                      , s = e.onInputBlur
                      , c = e.labelCustomized
                      , f = e.labelValue
                      , E = e.labelErrorMsg
                      , v = (0,
                    r.Z)(e, h);
                    return u.createElement("div", {
                        className: "ow-textInput"
                    }, u.createElement("div", {
                        className: "ow-textInput-labelCmp"
                    }, c ? u.createElement(m(), {
                        "aria-label": (0,
                        p.t)("contacts.editPanel.OTHER_FIELD_LABEL")
                    }, (0,
                    p.t)("contacts.editPanel.OTHER_FIELD_LABEL")) : u.createElement(m(), {
                        "aria-label": t
                    }, t)), u.createElement("div", {
                        className: "ow-textInput-inputCmp"
                    }, u.createElement(d.Z, (0,
                    a.Z)({
                        type: n,
                        value: i,
                        onChange: l,
                        onBlur: s
                    }, v, {
                        placeholder: ""
                    }))), c && u.createElement("div", {
                        className: "ow-textInput-inputCmp-label"
                    }, u.createElement(d.Z, {
                        value: f,
                        placeholder: t,
                        errorMsg: E,
                        onChange: o
                    })))
                }
            }]),
            n
        }(n(83061).Z)
    },
    29925: function(e, t, n) {
        n.d(t, {
            D: function() {
                return d
            },
            m: function() {
                return f
            }
        });
        var a = n(87462)
          , r = n(45987)
          , i = n(87401)
          , o = n(23398)
          , l = n(77545)
          , s = n(84987)
          , c = n(94165)
          , u = ["onClick", "btnCls"]
          , d = function(e) {
            var t = e.onClick
              , n = e.btnCls
              , a = e.type;
            return i.createElement("div", {
                containerCls: "ow-contacts-field-addBtn-container"
            }, i.createElement(l.Z, {
                className: ["ow-contacts-field-addBtn", n].join(" "),
                title: (0,
                s.t)("contacts.editPanel.toolTips.ADD_FIELD"),
                onClick: t,
                iconName: "add-contact-form",
                "aria-label": a ? (0,
                s.t)("contacts.editPanel.add.".concat(a)) : (0,
                s.t)("contacts.editPanel.add.lzOther"),
                role: c.HB.BUTTON
            }, a ? (0,
            s.t)("contacts.editPanel.add.".concat(a)) : (0,
            s.t)("contacts.editPanel.add.lzOther")))
        };
        d.propTypes = {
            onClick: o.func,
            btnCls: o.string
        },
        d.defaultProps = {
            onClick: function() {},
            btnCls: ""
        };
        var f = function(e) {
            var t = e.onClick
              , n = e.btnCls
              , o = (0,
            r.Z)(e, u);
            return i.createElement("div", {
                containerCls: "ow-contacts-field-removeBtn-container"
            }, i.createElement(l.Z, (0,
            a.Z)({
                title: (0,
                s.t)("contacts.editPanel.toolTips.REMOVE_FIELD"),
                className: ["ow-contacts-field-removeBtn", n].join(" "),
                onClick: t,
                role: c.HB.BUTTON,
                "aria-label": (0,
                s.t)("contacts.editPanel.toolTips.REMOVE_FIELD"),
                iconName: "remove-contact-form"
            }, o)))
        };
        f.propTypes = {
            onClick: o.func,
            btnCls: o.string
        },
        f.defaultProps = {
            onClick: function() {},
            btnCls: ""
        }
    },
    16969: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return b
            }
        });
        var a = n(15671)
          , r = n(43144)
          , i = n(60136)
          , o = n(82963)
          , l = n(61120)
          , s = n(87401)
          , c = (n(23398),
        n(67064))
          , u = n.n(c)
          , d = n(35369)
          , f = n(13536)
          , m = n(54075)
          , p = n(77545)
          , h = n(84987)
          , E = n(4446)
          , v = n(94165)
          , g = n(44910);
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
                var n, a = (0,
                l.Z)(e);
                if (t) {
                    var r = (0,
                    l.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                o.Z)(this, n)
            }
        }
        var b = function(e) {
            (0,
            i.Z)(n, e);
            var t = y(n);
            function n() {
                return (0,
                a.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            r.Z)(n, [{
                key: "renderHeader",
                value: function() {
                    var e = this.props
                      , t = e.title
                      , n = e.desc;
                    return s.createElement("div", {
                        className: "ow-settingsDetail-header",
                        tabIndex: 0
                    }, s.createElement("div", {
                        className: "ow-settingsDetail-header-title",
                        role: v.HB.HEADING,
                        "aria-level": v.DU.H2,
                        "aria-label": t
                    }, t), ("Détails des dernières connexions" == t || "Last login details" == t) && s.createElement("div", {
                        className: "ow-settingsDetail-header-desc",
                        "aria-label": n
                    }, n))
                }
            }, {
                key: "renderSettingsBody",
                value: function() {
                    return s.createElement("div", {
                        className: "ow-settingsDetail-body",
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            var t;
                            e.key === v.BY.TABKEY && (e.shiftKey && ("ow-settingsDetail-body" === (null === (t = document.activeElement) || void 0 === t ? void 0 : t.className) ? setFocus(".ow-collapse-tab-active") : e.stopPropagation()))
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
                      , r = t.className;
                    return s.createElement("div", {
                        className: "ow-settingsDetail-content",
                        id: a ? "ow-main-security" : r,
                        tabIndex: 0
                    }, s.Children.map(n, function(t) {
                        return t && t.type === d.l0 ? s.cloneElement(t, {
                            className: u()("ow-settingsDetail-form", t.props.className),
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
                        return s.createElement("div", {
                            className: "ow-settingsDetail-toolbar"
                        }, n && s.createElement(p.Z, {
                            className: "ow-settings-button ow-button-primary",
                            disabled: !a,
                            onClick: this.handleCancel,
                            role: v.HB.BUTTON,
                            "aria-label": (0,
                            h.t)("common.CANCEL"),
                            "aria-disabled": !a,
                            tabIndex: 0,
                            onKeyDown: function(e) {
                                e.key === v.BY.ENTERKEY && (0,
                                g.Mb)()
                            }
                        }, (0,
                        h.t)("common.CANCEL")), t && s.createElement(p.Z, {
                            className: "ow-settings-button ow-settingsButton-default",
                            disabled: !a,
                            onClick: this.handleSave,
                            role: v.HB.BUTTON,
                            "aria-label": (0,
                            h.t)("common.SAVE"),
                            "aria-disabled": !a,
                            tabIndex: 0
                        }, (0,
                        h.t)("common.SAVE")))
                }
            }, {
                key: "renderConfirmModal",
                value: function() {
                    return s.createElement(f.Z, {
                        show: !0,
                        buttonConfig: ["yes", "no", "cancel"],
                        title: (0,
                        h.t)("settings.saveSettings.TITLE"),
                        message: (0,
                        h.t)("settings.saveSettings.DESC"),
                        onYes: this.handleConfirmYes,
                        onNo: this.handleConfirmNo,
                        onCancel: this.handleConfirmCancel,
                        onDismiss: this.handleConfirmCancel
                    })
                }
            }, {
                key: "renderAlertModal",
                value: function() {
                    var e = this;
                    return s.createElement(m.Z, {
                        show: !0,
                        title: (0,
                        h.t)("common.ERROR"),
                        message: (0,
                        h.t)("app.errorMessage.INVALID_INPUT_DATA"),
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
                      , r = a.displayConfirm
                      , i = a.displayAlert;
                    return s.createElement("div", {
                        className: u()("ow-settings-detail", t),
                        ref: this.settingsDetail
                    }, s.createElement("div", {
                        className: "ow-settings-empty-topbar"
                    }), E.UhU.isDesktop && n ? this.renderSettingsSecurityBody() : this.renderSettingsBody(), r && this.renderConfirmModal(), i && this.renderAlertModal())
                }
            }]),
            n
        }(n(22326).Z)
    },
    16768: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return E
            }
        });
        var a = n(15671)
          , r = n(43144)
          , i = n(60136)
          , o = n(82963)
          , l = n(61120)
          , s = n(87401)
          , c = n(46262)
          , u = n(83416)
          , d = n(80861)
          , f = n(84987)
          , m = (n(44461),
        n(7179))
          , p = n(94165);
        function h(e) {
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
                var n, a = (0,
                l.Z)(e);
                if (t) {
                    var r = (0,
                    l.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                o.Z)(this, n)
            }
        }
        var E = function(e) {
            (0,
            i.Z)(n, e);
            var t = h(n);
            function n() {
                return (0,
                a.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            r.Z)(n, [{
                key: "getData",
                value: function() {
                    var e = this.props.account
                      , t = e.mailAlias || {}
                      , n = t.enabled
                      , a = t.limit
                      , r = (e.passwordSettings || {}).enabled
                      , i = (0,
                    u.Z)("common.concurrentLogin.enabled")
                      , o = (0,
                    u.Z)("mail.loginHistory.enabled")
                      , l = i || o
                      , s = "MX" === (0,
                    m.sO)();
                    return (0,
                    c.uR)({
                        cloudEnabled: (0,
                        u.Z)("cloud.enabled"),
                        aliasEnabled: n && a && (0,
                        u.Z)("mail.alias.enabled"),
                        calendarEnabled: (0,
                        u.Z)("calendar.enabled"),
                        safeSendersEnabled: (0,
                        u.Z)("mail.safeSenders.enabled"),
                        passwordSettingsEnabled: r,
                        cleanupEnabled: (0,
                        u.Z)("mail.cleanup.enabled"),
                        configDeviceLoginHistoryEnabled: o,
                        configConcurrentLoginEnabled: i,
                        loginDetailEnabled: l,
                        isMX: s
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.onSelectedChange
                      , a = t.selected
                      , r = this.getData();
                    return s.createElement("div", {
                        className: "ow-appLayout-left"
                    }, s.createElement("div", {
                        className: "ow-appLayout-vbox"
                    }, s.createElement("div", {
                        className: "ow-appLayout-top"
                    }, s.createElement("div", {
                        className: "ow-settings-top-header"
                    }, s.createElement("div", {
                        className: "ow-settingsDetail-header-title",
                        role: p.HB.HEADING,
                        "aria-label": (0,
                        f.t)("app.SETTINGS"),
                        "aria-level": p.DU.H2
                    }, (0,
                    f.t)("app.SETTINGS")))), s.createElement("div", {
                        className: "ow-settings-list"
                    }, s.createElement(d.Z, {
                        onFocus: n,
                        active: a
                    }, r.map(function(t) {
                        return e.renderItem(t)
                    })))))
                }
            }]),
            n
        }(n(36447).Z)
    },
    12027: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return p
            }
        });
        var a = n(45987)
          , r = n(15671)
          , i = n(43144)
          , o = n(60136)
          , l = n(82963)
          , s = n(61120)
          , c = n(87401)
          , u = (n(23398),
        n(84987))
          , d = n(68777)
          , f = ["data", "onChange"];
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
                var n, a = (0,
                s.Z)(e);
                if (t) {
                    var r = (0,
                    s.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                l.Z)(this, n)
            }
        }
        var p = function(e) {
            (0,
            o.Z)(n, e);
            var t = m(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n, [{
                key: "renderRadioButton",
                value: function() {
                    var e = this.props
                      , t = e.data
                      , n = e.onChange;
                    (0,
                    a.Z)(e, f);
                    return c.createElement(d.Z, {
                        name: "imageBlockerOption",
                        value: t,
                        alignText: "right",
                        list: [{
                            value: "alwaysAllow",
                            text: (0,
                            u.t)("settings.blockImage.CHOICE[0]")
                        }, {
                            value: "alwaysBlock",
                            text: (0,
                            u.t)("settings.blockImage.CHOICE[1]")
                        }, {
                            value: "allowFromContacts",
                            text: (0,
                            u.t)("settings.blockImage.CHOICE[2]")
                        }],
                        onChange: n
                    })
                }
            }]),
            n
        }(n(67462).Z)
    },
    93176: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return R
            }
        });
        var a = n(87462)
          , r = n(45987)
          , i = n(15671)
          , o = n(43144)
          , l = n(60136)
          , s = n(82963)
          , c = n(61120)
          , u = n(87401)
          , d = (n(23398),
        n(13643),
        n(35369))
          , f = n(16969)
          , m = n(84987)
          , p = n(83416)
          , h = n(4446)
          , E = n(98568)
          , v = ["data", "isHour24", "onSave"];
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
                var n, a = (0,
                c.Z)(e);
                if (t) {
                    var r = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                s.Z)(this, n)
            }
        }
        var y = h.UhU.isMobile
          , b = h.UhU.isDesktop
          , S = (0,
        p.Z)("calendar.TRASH_SUPPORT").trashSupport
          , D = void 0 !== S && S
          , C = (0,
        p.Z)("calendar.SMS_SUPPORT").SMSSupport
          , T = void 0 !== C && C
          , O = [{
            label: "5 minutes",
            value: "5"
        }, {
            label: "15 minutes",
            value: "15"
        }, {
            label: "30 minutes",
            value: "30"
        }, {
            label: "45 minutes",
            value: "45"
        }, {
            label: "1 hour",
            value: "60"
        }, {
            label: "3 hours",
            value: "180"
        }, {
            label: "6 hours",
            value: "360"
        }, {
            label: "12 hours",
            value: "720"
        }, {
            label: "24 hours",
            value: "1440"
        }]
          , R = function(e) {
            (0,
            l.Z)(n, e);
            var t = g(n);
            function n() {
                return (0,
                i.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            o.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.data
                      , n = e.isHour24
                      , i = e.onSave
                      , o = (0,
                    r.Z)(e, v);
                    return u.createElement(f.Z, (0,
                    a.Z)({}, o, {
                        className: "ow-settingsCalendar",
                        title: (0,
                        m.t)("settings.calendar.TITLE"),
                        desc: (0,
                        m.t)("settings.calendar.DESC"),
                        onSave: i,
                        enableBack: y,
                        enableCancel: !y
                    }), u.createElement(d.l0, null, D && u.createElement(d.bM, {
                        label: (0,
                        m.t)("settings.calendar.AUTO_EMPTY_TRASH_LOGOUT"),
                        name: "autoEmptyTrashLogout",
                        value: t.autoEmptyTrashBeforeLogout,
                        checkedValue: "true",
                        uncheckedValue: "false"
                    }), b && u.createElement(d.Hi, {
                        label: (0,
                        m.t)("settings.calendar.VIEW"),
                        name: "defaultView",
                        value: t.defaultView,
                        isValidNewOption: !1,
                        options: this.getDefaultOptions()
                    }), u.createElement(d.Hi, {
                        label: (0,
                        m.t)("settings.calendar.DAY_START"),
                        name: "dayStart",
                        value: t.dayStart,
                        options: this.getTimeOptions(n),
                        validations: {
                            customRegexp: function(e) {
                                var t = e.dayEnd
                                  , n = e.dayStart;
                                return !(t && +n >= +t) || (0,
                                m.t)("calendar.warningMessage.DATE_VALIDATION_MESSAGE")
                            }
                        }
                    }), u.createElement(d.Hi, {
                        label: (0,
                        m.t)("settings.calendar.DAY_END"),
                        name: "dayEnd",
                        value: t.dayEnd,
                        options: this.getTimeOptions(n),
                        validations: {
                            customRegexp: function(e) {
                                var t = e.dayEnd
                                  , n = e.dayStart;
                                return !(n && +n >= +t) || (0,
                                m.t)("calendar.warningMessage.DATE_VALIDATION_MESSAGE")
                            }
                        }
                    }), u.createElement(d.Hi, {
                        label: (0,
                        m.t)("settings.calendar.WEEK_START"),
                        name: "weekStart",
                        value: "7" === t.weekStart ? "0" : t.weekStart,
                        options: this.weekStartOptions()
                    }), u.createElement(d.Hi, {
                        label: (0,
                        m.t)("settings.calendar.EVENT_DURATION"),
                        name: "eventDurationTime",
                        value: t.eventDurationTime,
                        options: O
                    }), T && u.createElement(d.bM, {
                        label: (0,
                        m.t)("settings.calendar.AUTO_EMPTY_TRASH_LOGOUT"),
                        name: "SMSReminder",
                        value: t.SMSReminder,
                        checkedValue: "true",
                        uncheckedValue: "false"
                    }), D && u.createElement(d.Hi, {
                        label: (0,
                        m.t)("settings.calendar.AUTO_EMPTY_TRASH"),
                        name: "autoEmptyTrash",
                        value: t.autoEmptyTrash,
                        options: autoEmptyTrashOptions
                    })))
                }
            }]),
            n
        }(E.Z)
    },
    30965: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return T
            }
        });
        var a = n(87462)
          , r = n(45987)
          , i = n(15671)
          , o = n(43144)
          , l = n(60136)
          , s = n(82963)
          , c = n(61120)
          , u = n(87401)
          , d = (n(23398),
        n(90966),
        n(59186))
          , f = n.n(d)
          , m = (n(48306),
        n(82e3),
        n(35369))
          , p = n(16969)
          , h = n(84987)
          , E = n(4446)
          , v = n(94165)
          , g = n(83416)
          , y = n(95551)
          , b = ["data"]
          , S = ["data", "timezoneOptions"];
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
                var n, a = (0,
                c.Z)(e);
                if (t) {
                    var r = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                s.Z)(this, n)
            }
        }
        (0,
        g.Z)("settings.preference");
        var C = E.UhU.isMobile
          , T = function(e) {
            (0,
            l.Z)(n, e);
            var t = D(n);
            function n() {
                return (0,
                i.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            o.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.data
                      , n = (0,
                    r.Z)(e, b);
                    return u.createElement(p.Z, (0,
                    a.Z)({}, n, {
                        className: "ow-settingsLocale",
                        title: (0,
                        h.t)("settings.languageTimeDate.TITLE"),
                        "aria-label": (0,
                        h.t)("settings.languageTimeDate.TITLE"),
                        desc: (0,
                        h.t)("settings.languageTimeDate.DESC"),
                        enableBack: C,
                        enableCancel: !C,
                        onSave: this.handleSave,
                        onCancel: this.setDisableTimezoneSelect
                    }), u.createElement(m.l0, {
                        data: t
                    }, this.renderLanguageField(), this.renderTimeZoneFields(), this.renderDateFormatField(), this.renderTimeFormatField(), u.createElement("div", {
                        className: "ow-settingsLocale-timezone"
                    }, u.createElement(m.bM, {
                        label: (0,
                        h.t)("settings.general.DEVICE_TIME_ZONE"),
                        "aria-label": (0,
                        h.t)("settings.general.DEVICE_TIME_ZONE"),
                        name: v.sw.useDeviceTimeZone.key,
                        value: t[v.sw.useDeviceTimeZone.key],
                        checkedValue: "true",
                        uncheckedValue: "false",
                        onChange: this.handleCheckboxChange
                    }))))
                }
            }, {
                key: "renderTimeZoneFields",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , a = t.timezoneOptions
                      , i = ((0,
                    r.Z)(t, S),
                    this.state.disableTimezoneSelect)
                      , o = i ? this.getZoneOfSystem() : n.timezone;
                    return u.createElement("div", {
                        className: "ow-settingsLocale-timezone"
                    }, i && u.createElement(m.Hi, {
                        label: (0,
                        h.t)("settings.languageTimeDate.TIME_ZONE"),
                        "aria-label": (0,
                        h.t)("settings.languageTimeDate.TIME_ZONE"),
                        name: "ignoredName",
                        disabled: !0,
                        value: "",
                        options: [{
                            name: f()((0,
                            h.t)("settings.general.DEVICE_TIME_ZONE")),
                            value: ""
                        }],
                        labelKey: "name",
                        valueKey: "value"
                    }), u.createElement(m.Hi, {
                        className: "".concat(i ? "hide" : ""),
                        ref: function(t) {
                            e.timezoneRef = t
                        },
                        label: (0,
                        h.t)("settings.languageTimeDate.TIME_ZONE"),
                        "aria-label": (0,
                        h.t)("settings.languageTimeDate.TIME_ZONE"),
                        name: "timezone",
                        disabled: i,
                        value: o,
                        options: a,
                        labelKey: "name",
                        valueKey: "value",
                        placeholder: (0,
                        h.t)("settings.languageTimeDate.SELECT")
                    }))
                }
            }]),
            n
        }(y.Z)
    },
    71703: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return v
            }
        });
        var a = n(15671)
          , r = n(43144)
          , i = n(60136)
          , o = n(82963)
          , l = n(61120)
          , s = n(87401)
          , c = (n(23398),
        n(16969),
        n(4446))
          , u = n(10091)
          , d = (n(32081),
        n(76081),
        n(77545),
        n(83416))
          , f = n(94165)
          , m = n(44910)
          , p = n(53796);
        function h(e) {
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
                var n, a = (0,
                l.Z)(e);
                if (t) {
                    var r = (0,
                    l.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                o.Z)(this, n)
            }
        }
        var E = (0,
        d.Z)("settings.showDeleteIconPerItem")
          , v = function(e) {
            (0,
            i.Z)(n, e);
            var t = h(n);
            function n() {
                return (0,
                a.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            r.Z)(n, [{
                key: "renderToolBar",
                value: function() {
                    var e = this.state.aliasSelected;
                    return s.createElement("div", {
                        className: "ow-settingsDetail-toolbar"
                    }, s.createElement(u.Z.Button, {
                        className: "ow-settings-button ow-button-primary",
                        onClick: this.handleAddBtnClick,
                        disabled: this.isReachLimit(),
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        c.t)("settings.mail.ALIAS_ADD_NEW_TITLE"),
                        "aria-disabled": this.isReachLimit(),
                        onKeyDown: function(e) {
                            e.key === f.BY.ENTERKEY && (0,
                            m.Mb)()
                        }
                    }, s.createElement("span", {
                        className: "ow-settingsDetail-addAlias"
                    }, (0,
                    c.t)("settings.mail.ALIAS_ADD_NEW_TITLE")), s.createElement("span", {
                        className: "ow-icon-plus",
                        role: f.HB.BUTTON,
                        "aria-disabled": this.isReachLimit(),
                        "aria-label": (0,
                        c.t)("settings.mail.ALIAS_ADD_NEW_TITLE")
                    })), E ? null : s.createElement(u.Z.Button, {
                        className: "ow-settings-button ow-settingsButton-default",
                        iconName: "edit",
                        disabled: !e,
                        onClick: this.handleEditBtnClick,
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        c.t)("settings.mail.ALIAS_EDIT_WINDOW_TITLE"),
                        "aria-disabled": !e
                    }, (0,
                    c.t)("common.EDIT")), E ? null : s.createElement(u.Z.Button, {
                        className: "ow-settings-button ow-settingsButton-default",
                        iconName: "trash",
                        disabled: !e,
                        onClick: this.handleDeleteBtnClick,
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        c.t)("settings.mail.ALIAS_CONFIRM_DELETE_TITLE"),
                        "aria-disabled": !e
                    }, (0,
                    c.t)("common.DELETE")))
                }
            }]),
            n
        }(p.Z)
    },
    19021: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return S
            }
        });
        var a = n(87462)
          , r = n(45987)
          , i = n(15671)
          , o = n(43144)
          , l = n(60136)
          , s = n(82963)
          , c = n(61120)
          , u = n(87401)
          , d = (n(23398),
        n(16969))
          , f = n(35369)
          , m = n(54075)
          , p = n(92176)
          , h = n(84987)
          , E = n(4446)
          , v = n(86285)
          , g = ["data", "onSave", "onFormChange"];
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
                var n, a = (0,
                c.Z)(e);
                if (t) {
                    var r = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                s.Z)(this, n)
            }
        }
        var b = E.UhU.isDesktop
          , S = function(e) {
            (0,
            l.Z)(n, e);
            var t = y(n);
            function n() {
                return (0,
                i.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            o.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , i = n.enabled
                      , o = n.addresses
                      , l = n.keepCopy
                      , s = t.onSave
                      , c = t.onFormChange
                      , E = (0,
                    r.Z)(t, g)
                      , v = this.state
                      , y = v.formDisable
                      , S = v.displayAlert
                      , D = o && o.map(function(e) {
                        return {
                            name: e,
                            address: e
                        }
                    })
                      , C = JSON.stringify(D);
                    return u.createElement(d.Z, (0,
                    a.Z)({}, E, {
                        title: (0,
                        h.t)("settings.mailForward.TITLE"),
                        desc: (0,
                        h.t)("settings.mailForward.DESC"),
                        onSave: s,
                        enableCancel: b
                    }), u.createElement(f.l0, {
                        className: "ow-settingsAutoForward-form ow-formatting-settings-options",
                        onChange: function(t, n) {
                            e.onChangeFormDisable(t.enabled),
                            c(n)
                        }
                    }, u.createElement(f.hE, {
                        name: "enabled",
                        value: i,
                        label: (0,
                        h.t)("settings.mailForward.FORWARD_DESC")
                    }), u.createElement(f.hE, {
                        name: "keepCopy",
                        value: l,
                        label: (0,
                        h.t)("settings.mailForward.KEEP_COPY_DESC"),
                        disabled: y
                    }), u.createElement(p.Z, {
                        innerRef: function(t) {
                            e.contactsLabelFieldRef = t
                        },
                        className: "ow-settingsAutoForward-form ow-settingsAutoForward-destination",
                        labelClassName: "ow-settingsAutoForward-form-label",
                        name: "addresses",
                        value: C,
                        label: (0,
                        h.t)("settings.mailForward.DESTINATION"),
                        title: (0,
                        h.t)("settings.mailForward.DESTINATION"),
                        disabled: y,
                        allowSelf: !1,
                        onValidate: this.handleValidate,
                        "aria-required": !0,
                        validations: {
                            customRegexp: function(t, n) {
                                var a = JSON.parse(n);
                                return t.enabled && !a.length ? (0,
                                h.t)("common.errorMessage.REQUIRED") : !(e.contactsLabelFieldRef && !e.contactsLabelFieldRef.isValuesValid())
                            }
                        },
                        autoFocus: !1
                    }), S && u.createElement(m.Z, {
                        show: !0,
                        title: (0,
                        h.t)("common.ERROR"),
                        message: (0,
                        h.t)("settings.errorMessage.FORWARD_NOT_BE_SELF"),
                        onHide: function() {
                            return e.hideDisplayAlert()
                        }
                    })))
                }
            }]),
            n
        }(v.Z)
    },
    41550: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return D
            }
        });
        var a = n(45987)
          , r = n(15671)
          , i = n(43144)
          , o = n(60136)
          , l = n(82963)
          , s = n(61120)
          , c = n(87401)
          , u = (n(23398),
        n(84987))
          , d = n(83416)
          , f = n(35369)
          , m = n(94165)
          , p = n(43427)
          , h = ["data", "onSave", "onFormChange"];
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
                var n, a = (0,
                s.Z)(e);
                if (t) {
                    var r = (0,
                    s.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                l.Z)(this, n)
            }
        }
        var v = m.PG.AUTO_CHECK_INTERVAL
          , g = (m.PG.SHOW_AVATAR,
        m.PG.SAVE_OUTGOING_MESSAGES)
          , y = m.PG.EMPTY_TRASH_ON_LOGOUT
          , b = m.PG.REPLY_QUOTING
          , S = m.PG.PREFER_PLAIN_TEXT_EDITOR
          , D = function(e) {
            (0,
            o.Z)(n, e);
            var t = E(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n, [{
                key: "getAutoCheckIntervalOpts",
                value: function() {
                    return m.zW.autoCheckInterval.available.map(function(e) {
                        var t = e.value;
                        return {
                            label: (0,
                            u.t)("settings.mail.AUTOCHECK_".concat(t)),
                            value: t
                        }
                    })
                }
            }, {
                key: "getAutoSaveToDraftsIntervalOpts",
                value: function() {
                    return m.zW.autoSaveToDraftsInterval.available.map(function(e) {
                        var t = e.value;
                        return {
                            label: (0,
                            u.t)("settings.mail.AUTOCHECK_".concat(t)),
                            value: "".concat(t)
                        }
                    })
                }
            }, {
                key: "renderMailItemsList",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , r = (t.onSave,
                    t.onFormChange)
                      , i = ((0,
                    a.Z)(t, h),
                    this.state.replyPrefixSelectHidden);
                    return c.createElement(f.l0, {
                        ref: function(t) {
                            e.formRef = t
                        },
                        onChange: function(t, n) {
                            e.setReplyPrefixSelectHidden(t[b]),
                            r(n)
                        }
                    }, c.createElement(f.Hi, {
                        name: v,
                        label: (0,
                        u.t)("settings.mail.AUTO_CHECK"),
                        options: this.autoCheckIntervalOpts,
                        value: null != n[v] ? n[v] : m.zW.autoCheckInterval.defaultValue
                    }), c.createElement(f.Hi, {
                        label: (0,
                        u.t)("settings.mail.AUTO_SAVE_INTERVAL"),
                        name: m.zW.autoSaveToDraftsInterval.key,
                        value: n[m.zW.autoSaveToDraftsInterval.key],
                        options: this.autoSaveToDraftsIntervalOpts
                    }), c.createElement(f.Hi, {
                        label: (0,
                        u.t)("settings.mail.REPLY_QUOTING_SELECTION_LABEL"),
                        name: m.zW.replyPrefix.key,
                        value: n[m.zW.replyPrefix.key],
                        className: i ? "hide" : "",
                        options: [{
                            value: "",
                            label: (0,
                            u.t)("settings.mail.AUTOSAVE_INDENT_WITHOUT_PREIX")
                        }, {
                            value: ">",
                            label: (0,
                            u.t)("settings.mail.AUTOSAVE_INDENT_WITH_GREATER")
                        }, {
                            value: "-",
                            label: (0,
                            u.t)("settings.mail.AUTOSAVE_INDENT_WITHOUT_MINUS")
                        }]
                    }), (0,
                    d.Z)("mail.avatar.enabled") ? c.createElement(f.hE, {
                        label: (0,
                        u.t)("settings.mail.SHOW_AVATAR"),
                        name: m.zW.showAvatar.key,
                        value: n[m.zW.showAvatar.key],
                        checkedValue: "true",
                        uncheckedValue: "false"
                    }) : "", c.createElement(f.hE, {
                        label: (0,
                        u.t)("settings.mail.SEND_EMAIL_DESC"),
                        name: g,
                        value: n[g]
                    }), c.createElement(f.hE, {
                        label: (0,
                        u.t)("settings.mail.TIME_DISPLAY_FORMAT"),
                        name: m.zW.timeDisplayFormat.key,
                        value: n[m.zW.timeDisplayFormat.key],
                        checkedValue: "long",
                        uncheckedValue: "short"
                    }), c.createElement(f.hE, {
                        label: (0,
                        u.t)("settings.mail.ADDITIONAL_ACTIONS_DESC"),
                        name: m.zW.reloadOnDelete.key,
                        value: n[m.zW.reloadOnDelete.key],
                        checkedValue: "true",
                        uncheckedValue: "false"
                    }), c.createElement(f.hE, {
                        label: (0,
                        u.t)("settings.mail.EMPTY_TRASH_DESC"),
                        name: y,
                        value: n[y]
                    }), c.createElement(f.hE, {
                        label: (0,
                        u.t)("settings.mail.REPLY_DESC"),
                        name: b,
                        value: n[b],
                        onChange: this.setReplyPrefixSelectHidden
                    }), c.createElement(f.hE, {
                        label: (0,
                        u.t)("settings.mail.DEFAULT_FORMAT_DESC"),
                        name: S,
                        checkedValue: !1,
                        uncheckedValue: !0,
                        value: !!n[S]
                    }), c.createElement(f.hE, {
                        label: (0,
                        u.t)("settings.mail.READ_FIRST_MAIL"),
                        name: m.zW.readFirstMail.key,
                        value: n[m.zW.readFirstMail.key],
                        checkedValue: "true",
                        uncheckedValue: "false"
                    }), this.displayQuotaDetails())
                }
            }]),
            n
        }(p.Z)
    },
    62383: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return I
            }
        });
        var a = n(87462)
          , r = n(45987)
          , i = n(15671)
          , o = n(43144)
          , l = n(60136)
          , s = n(82963)
          , c = n(61120)
          , u = n(87401)
          , d = (n(23398),
        n(16969))
          , f = n(4446)
          , m = n(35369)
          , p = n(10091)
          , h = n(32081)
          , E = n(76081)
          , v = n(70224)
          , g = n(44910)
          , y = n(94165)
          , b = n(83416)
          , S = n(32883)
          , D = ["data"]
          , C = ["data", "list", "onSaveSettings"]
          , T = ["data", "list", "onSaveSettings"];
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
                var n, a = (0,
                c.Z)(e);
                if (t) {
                    var r = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                s.Z)(this, n)
            }
        }
        var R = f.PGx.AUTO_INSERT_SIGNATURE
          , Z = (0,
        b.Z)("settings.showDeleteIconPerItem")
          , I = function(e) {
            (0,
            l.Z)(n, e);
            var t = O(n);
            function n() {
                return (0,
                i.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            o.Z)(n, [{
                key: "displaySignatureForm",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , a = ((0,
                    r.Z)(t, D),
                    this.state.enableSignaturePosition);
                    return u.createElement(m.l0, {
                        ref: function(t) {
                            e.formRef = t
                        }
                    }, u.createElement(m.hE, {
                        label: (0,
                        f.t)("settings.mail.SIGNATURE_AUTOINSERT"),
                        name: R,
                        value: n[R],
                        onChange: this.setSignaturePosition
                    }), u.createElement(m.Hi, {
                        label: (0,
                        f.t)("settings.mail.SIGNATURE_POSITION_TITLE"),
                        "aria-label": (0,
                        f.t)("settings.mail.SIGNATURE_POSITION_TITLE"),
                        name: y.sw.signaturePosition.key,
                        value: n[y.sw.signaturePosition.key],
                        disabled: !a,
                        tabIndex: a ? 0 : -1,
                        options: [{
                            value: "below",
                            label: (0,
                            f.t)("settings.mail.SIGNATURE_POSITION_BELOW")
                        }, {
                            value: "above",
                            label: (0,
                            f.t)("settings.mail.SIGNATURE_POSITION_ABOVE")
                        }]
                    }))
                }
            }, {
                key: "displayButtons",
                value: function() {
                    var e = this.props
                      , t = (e.data,
                    e.list,
                    e.onSaveSettings,
                    (0,
                    r.Z)(e, C),
                    this.state.signatureSelected);
                    return u.createElement(p.Z, null, u.createElement("div", {
                        className: "ow-settingsDetail-toolbar"
                    }, u.createElement(p.Z.Dropdown, {
                        className: "ow-settings-button ow-button-primary ow-mail-forward-dropdown",
                        title: u.createElement("div", null, u.createElement("span", {
                            onClick: this.handleForward,
                            role: y.HB.BUTTON,
                            "aria-label": (0,
                            f.t)("settings.mail.SIGNATURE_ADD")
                        }, (0,
                        f.t)("settings.mail.SIGNATURE_ADD")), u.createElement("span", {
                            className: "caret"
                        }))
                    }, u.createElement(v.Z, {
                        eventKey: y.kf.PLAIN,
                        onSelect: this.handleAddBtnClick,
                        onKeyDown: function(e) {
                            var t;
                            e.key === y.BY.ENTERKEY && (null === e || void 0 === e || null === (t = e.target) || void 0 === t || t.click()),
                            (0,
                            g.Mb)()
                        }
                    }, (0,
                    f.t)("mail.compose.FORMAT_PLAIN")), u.createElement(v.Z, {
                        eventKey: y.kf.RICH,
                        onSelect: this.handleAddBtnClick,
                        onKeyDown: function(e) {
                            var t;
                            e.key === y.BY.ENTERKEY && (null === e || void 0 === e || null === (t = e.target) || void 0 === t || t.click()),
                            (0,
                            g.Mb)()
                        }
                    }, (0,
                    f.t)("mail.compose.FORMAT_RICH"))), Z ? null : u.createElement(p.Z.Button, {
                        className: "ow-settings-button ow-settingsButton-default",
                        iconName: "edit",
                        disabled: !t,
                        onClick: this.handleEditBtnClick,
                        "aria-label": format("".concat((0,
                        f.t)("common.EDIT"), " ").concat((0,
                        f.t)("settings.MODULE_DESC.SIGNATURE"))),
                        "aria-disabled": !t
                    }, (0,
                    f.t)("common.EDIT")), Z ? null : u.createElement(p.Z.Button, {
                        className: "ow-settings-button ow-settingsButton-default",
                        iconName: "trash",
                        disabled: !t,
                        onClick: this.handleDeleteBtnClick,
                        "aria-label": format("".concat((0,
                        f.t)("common.DELETE"), " ").concat((0,
                        f.t)("settings.MODULE_DESC.SIGNATURE"))),
                        "aria-disabled": !t
                    }, (0,
                    f.t)("common.DELETE"))))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = (t.data,
                    t.list)
                      , i = t.onSaveSettings
                      , o = (0,
                    r.Z)(t, T)
                      , l = this.state
                      , s = l.displaySignatureWindow
                      , c = l.displayAlert
                      , m = l.displayConfirm
                      , p = l.signatureSelected;
                    return u.createElement(d.Z, (0,
                    a.Z)({}, o, {
                        className: "ow-settingsMailSignature",
                        title: (0,
                        f.t)("settings.signature.TITLE"),
                        desc: (0,
                        f.t)("settings.signature.DESC"),
                        onSave: i,
                        onCancel: function(t) {
                            return e.setSignaturePosition(t[R])
                        }
                    }), this.displayButtons(), this.displaySignatureForm(), u.createElement(E.Z, {
                        className: "ow-settingsDetail-list",
                        data: n,
                        enableCheckable: !Z,
                        defaultSelected: [p],
                        selectedStatus: function(t) {
                            return !(!p || p.id !== t.id) && (e.setState({
                                signatureSelected: t
                            }),
                            !0)
                        },
                        renderItem: function(t) {
                            return u.createElement("div", {
                                className: "ow-settingsDetail-list-item"
                            }, u.createElement("div", {
                                className: "ow-settingsDetail-list-item-label"
                            }, t.label), t.default ? u.createElement("div", {
                                className: "ow-settingsDetail-defaultSignature-label"
                            }, u.createElement(h.Z, {
                                name: "bullet"
                            }), u.createElement("div", null, (0,
                            f.t)("settings.mail.SIGNATURE_DEFAULT_ICON_DESC"))) : u.createElement("span", null), Z ? u.createElement("div", {
                                className: "ow-settingsDetail-list-item-control"
                            }, u.createElement(h.Z, {
                                name: "edit",
                                alt: "{t('common.EDIT')}",
                                onClick: e.handleEditBtnClick,
                                role: y.HB.BUTTON,
                                "aria-label": (0,
                                f.t)("common.EDIT"),
                                tabIndex: 0,
                                onKeyDown: function(t) {
                                    t.key === y.BY.ENTERKEY && e.handleEditBtnClick(),
                                    (0,
                                    g.Mb)()
                                }
                            }), u.createElement(h.Z, {
                                name: "trash",
                                alt: "{t('common.DELETE')}",
                                onClick: e.handleDeleteBtnClick,
                                role: y.HB.BUTTON,
                                "aria-label": (0,
                                f.t)("common.DELETE"),
                                tabIndex: 0,
                                onKeyDown: function(t) {
                                    t.key === y.BY.ENTERKEY && e.handleDeleteBtnClick(),
                                    (0,
                                    g.Mb)()
                                }
                            }), " ") : null)
                        },
                        onSelectedChange: function(t) {
                            e.setState({
                                signatureSelected: t[0]
                            })
                        }
                    }), s && this.displaySignatureWindow(), c && this.displayAlert(), m && this.displayConfirm())
                }
            }]),
            n
        }(S.Z)
    },
    60085: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return u
            }
        });
        var a = n(15671)
          , r = n(43144)
          , i = n(60136)
          , o = n(82963)
          , l = n(61120)
          , s = n(87401);
        n(23398);
        function c(e) {
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
                var n, a = (0,
                l.Z)(e);
                if (t) {
                    var r = (0,
                    l.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                o.Z)(this, n)
            }
        }
        var u = function(e) {
            (0,
            i.Z)(n, e);
            var t = c(n);
            function n() {
                return (0,
                a.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            r.Z)(n, [{
                key: "render",
                value: function() {
                    return s.createElement("div", {
                        className: "ow-settings-detail ow-settings-profile",
                        ref: this.profileDetail
                    }, s.createElement("div", {
                        className: "ow-settings-empty-topbar"
                    }), this.renderSettingsHeader(), this.renderSettingsContent(), this.renderProfileForm())
                }
            }]),
            n
        }(n(95885).Z)
    },
    76578: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return C
            }
        });
        var a = n(87462)
          , r = n(45987)
          , i = n(15671)
          , o = n(43144)
          , l = n(60136)
          , s = n(82963)
          , c = n(61120)
          , u = n(87401)
          , d = (n(23398),
        n(16969))
          , f = n(35369)
          , m = n(84987)
          , p = n(90656)
          , h = n(4446)
          , E = n(83416)
          , v = (n(29829),
        n(94165))
          , g = n(29610)
          , y = n(88014)
          , b = ["data", "accountInfo", "loginHistoryEnabled"];
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
                var n, a = (0,
                c.Z)(e);
                if (t) {
                    var r = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                s.Z)(this, n)
            }
        }
        var D = h.UhU.isMobile
          , C = function(e) {
            (0,
            l.Z)(n, e);
            var t = S(n);
            function n() {
                return (0,
                i.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            o.Z)(n, [{
                key: "renderPasscodeChange",
                value: function() {
                    var e = this
                      , t = this.props.data;
                    return u.createElement(f.l0, {
                        ref: function(t) {
                            e.formRef = t
                        }
                    }, u.createElement(f.UP, {
                        type: "password",
                        label: (0,
                        m.t)("settings.password.OLD_PASSCODE"),
                        name: "oldPassCode",
                        value: t.oldPassCode,
                        "aria-label": (0,
                        m.t)("settings.password.OLD_PASSCODE"),
                        required: !0,
                        validations: {
                            maxLength: v.k0
                        },
                        validationErrors: {
                            maxLength: (0,
                            p.WU)((0,
                            m.t)("settings.profile.maxLengthText"), v.k0),
                            isDefaultRequiredValue: (0,
                            m.t)("settings.password.INVALID_PASSCODE_WARNING")
                        },
                        "aria-required": "true"
                    }), u.createElement(f.UP, {
                        type: "password",
                        label: (0,
                        m.t)("settings.password.NEW_PASSCODE"),
                        name: "newPassCode",
                        value: t.newPassCode,
                        "aria-label": (0,
                        m.t)("settings.password.NEW_PASSCODE"),
                        required: !0,
                        validations: {
                            maxLength: v.k0
                        },
                        validationErrors: {
                            maxLength: (0,
                            p.WU)((0,
                            m.t)("settings.profile.maxLengthText"), v.k0),
                            isDefaultRequiredValue: (0,
                            m.t)("settings.password.INVALID_PASSCODE_WARNING")
                        }
                    }), u.createElement(f.UP, {
                        type: "password",
                        label: (0,
                        m.t)("settings.password.CONFIRM_PASSCODE"),
                        name: "confirmPassCode",
                        value: t.confirmPassCode,
                        "aria-label": (0,
                        m.t)("settings.password.CONFIRM_PASSCODE"),
                        required: !0,
                        validations: {
                            equalsField: "newPassCode",
                            maxLength: v.k0
                        },
                        validationErrors: {
                            equalsField: (0,
                            m.t)("settings.password.CONFIRM_PASSCODE_NOT_ACCORD"),
                            maxLength: (0,
                            p.WU)((0,
                            m.t)("settings.profile.maxLengthText"), v.k0),
                            isDefaultRequiredValue: (0,
                            m.t)("settings.password.INVALID_PASSCODE_WARNING")
                        }
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.data,
                    e.accountInfo)
                      , n = e.loginHistoryEnabled
                      , i = (0,
                    r.Z)(e, b);
                    return (0,
                    E.Z)("mail.loginHistory.enabled") && n && n.enabled ? (0,
                    g.j)("DLH", "show_dlh_info", {
                        record: [t && t.email, "show_dlh_info", !0]
                    }) : (0,
                    g.j)("DLH", "show_dlh_info", {
                        record: [t && t.email, "show_dlh_info", !1]
                    }),
                    u.createElement(d.Z, (0,
                    a.Z)({}, i, {
                        className: "ow-settingsPassword",
                        title: (0,
                        m.t)("settings.MODULE_DESC.SECURITY"),
                        desc: (0,
                        m.t)("settings.password.DESC"),
                        onSave: this.handleSave,
                        onCancel: this.handleCancel,
                        enableBack: D,
                        enableCancel: !D
                    }), this.renderPasscodeChange())
                }
            }]),
            n
        }(y.Z)
    },
    46262: function(e, t, n) {
        n.d(t, {
            Lj: function() {
                return u
            },
            uR: function() {
                return c
            }
        });
        var a = n(56590)
          , r = n.n(a)
          , i = n(18956)
          , o = n.n(i)
          , l = n(4446)
          , s = n(94165)
          , c = function(e) {
            var t = e.cloudEnabled
              , n = e.calendarEnabled
              , a = (e.safeSendersEnabled,
            e.passwordSettingsEnabled)
              , i = (e.configDeviceLoginHistoryEnabled,
            e.configConcurrentLoginEnabled,
            e.loginDetailEnabled)
              , c = e.isMX
              , u = !!l.UhU.isDesktop && i
              , d = [{
                name: "LanguageTimeDate",
                desc: "LANGUAGE_TIME_DATE"
            }, {
                name: "MailGeneral",
                desc: "MAIL",
                children: function(e) {
                    var t = e.aliasEnabled
                      , n = e.safeSendersEnabled
                      , a = (e.cleanupEnabled,
                    e.passwordSettingsEnabled)
                      , i = [{
                        name: "MailSignatures",
                        desc: "SIGNATURE"
                    }, {
                        name: "AutoReply",
                        desc: "AUTO_REPLY"
                    }, {
                        name: "AutoForward",
                        desc: "AUTO_FORWARD"
                    }, {
                        name: "MailRules",
                        desc: "RULES"
                    }, {
                        name: "BlockedSenders",
                        desc: "BLOCKED_SENDERS"
                    }, n ? {
                        name: "SafeSenders",
                        desc: "SAFE_SENDERS"
                    } : null, t && a ? {
                        name: "MailAliases",
                        desc: "ALIASES"
                    } : null, {
                        name: "BlockImage",
                        desc: "BLOCK_IMAGE"
                    }];
                    return r()(i, o()),
                    i
                }(e)
            }, n ? {
                name: "CalendarPreference",
                desc: "CALENDAR"
            } : null, t ? {
                name: "Cloud",
                desc: "CLOUD"
            } : null, {
                name: "Contacts",
                desc: "CONTACTS"
            }, {
                name: "Profile",
                desc: "PROFILE"
            }, a ? {
                name: "SECURITY",
                desc: "SECURITY"
            } : null, u && c ? {
                name: "LastLoginDetails",
                desc: s.cF
            } : null];
            return r()(d, o()),
            d
        }
          , u = {
            LanguageTimeDate: "ico-location",
            MailGeneral: "ico-mail",
            CalendarPreference: "ico-calendar",
            Contacts: "ico-contacts",
            Profile: "ico-profile",
            Cloud: "ico-cloud-filled",
            SECURITY: "ico-security",
            LastLoginDetails: "ico-login-details"
        }
    },
    9122: function(e, t, n) {
        var a = n(4942)
          , r = n(16083)
          , i = n(97186)
          , o = n.n(i)
          , l = n(93549)
          , s = n.n(l)
          , c = n(79819)
          , u = n(45857)
          , d = n(63482)
          , f = n(31989)
          , m = n(79156)
          , p = n(70039)
          , h = n(27093)
          , E = n(69437)
          , v = n(78828)
          , g = n(86673)
          , y = n(9224)
          , b = n(94165)
          , S = n(96192);
        function D(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function C(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? D(Object(n), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        t.Z = (0,
        r.$j)(function(e) {
            return {
                account: (0,
                u.bk)(e),
                data: C(C({}, (0,
                d.af)(e)), (0,
                f.L)(e)),
                quota: (0,
                m.S)(e),
                selectedSettings: (0,
                p.Ci)(e),
                displayConfirm: (0,
                c.J)(e),
                passwordSettings: (0,
                S.T)(e)
            }
        }, function(e, t) {
            return {
                onLoadQuota: function() {
                    return e((0,
                    g.MM)())
                },
                onSave: function(t) {
                    var n = {};
                    Object.keys(b.PG).forEach(function(e) {
                        var a = b.PG[e];
                        a in t && (n[a] = t[a])
                    });
                    var a = s()(t, Object.keys(n));
                    o()(n) || e((0,
                    v.Mk)(n, {
                        needMsg: o()(a)
                    })),
                    o()(a) || e((0,
                    E.T)(a))
                },
                onNext: function(n) {
                    e((0,
                    y.tC)(n)),
                    t.onNext && t.onNext(n)
                },
                onFormChange: function(n) {
                    e((0,
                    h.appSetFormDirty)(n)),
                    t.onFormChange && t.onFormChange(n)
                },
                onConfirmYes: function() {
                    e((0,
                    h.appSetFormDirty)(!1)),
                    e((0,
                    h.appSetPendingOver)(!1))
                },
                onConfirmNo: function() {
                    e((0,
                    h.appSetFormDirty)(!1)),
                    e((0,
                    h.appSetPendingOver)(!1))
                },
                onConfirmCancel: function() {
                    e((0,
                    h.appSetPendingCancel)())
                }
            }
        })
    },
    6671: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return de
            }
        });
        var a = n(4942)
          , r = n(46169)
          , i = n(87401)
          , o = n(23398)
          , l = n.n(o)
          , s = n(87462)
          , c = n(45987)
          , u = n(15671)
          , d = n(43144)
          , f = n(97326)
          , m = n(60136)
          , p = n(82963)
          , h = n(61120)
          , E = n(32022)
          , v = n.n(E)
          , g = n(16969)
          , y = n(35369)
          , b = n(84987)
          , S = n(4446)
          , D = n(83416)
          , C = n(90656)
          , T = n(68777)
          , O = ["data", "dateFormat", "onSave", "onFormChange", "onChange"];
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
                var n, a = (0,
                h.Z)(e);
                if (t) {
                    var r = (0,
                    h.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                p.Z)(this, n)
            }
        }
        var Z = S.UhU.isDesktop
          , I = {
            data: l().shape({
                enabled: l().bool,
                startDate: l().string,
                endDate: l().string,
                ariaLabel: l().string,
                message: l().string,
                original: l().bool,
                mode: l().string
            }),
            dateFormat: l().string,
            isCPMSServer: l().bool,
            onLoad: l().func,
            onSave: l().func,
            onSaveForCPMS: l().func,
            onFormChange: l().func
        }
          , A = [{
            value: "none"
        }, {
            value: "reply"
        }, {
            value: "echo"
        }, {
            value: "vacation"
        }]
          , w = function(e) {
            (0,
            m.Z)(n, e);
            var t = R(n);
            function n(e) {
                var a;
                return (0,
                u.Z)(this, n),
                (a = t.call(this, e)).state = {
                    enabled: void 0,
                    startDate: void 0,
                    endDate: void 0,
                    enableStart: !1,
                    enableEnd: !1,
                    mode: void 0
                },
                a.toggleStartCheckbox = a.toggleStartCheckbox.bind((0,
                f.Z)(a)),
                a.toggleEndCheckbox = a.toggleEndCheckbox.bind((0,
                f.Z)(a)),
                a.handleChangeStartTime = a.handleChangeStartTime.bind((0,
                f.Z)(a)),
                a.handleChangeEndTime = a.handleChangeEndTime.bind((0,
                f.Z)(a)),
                a
            }
            return (0,
            d.Z)(n, [{
                key: "componentDidMount",
                value: function() {
                    this.props.onLoad()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this.state;
                    t.enabled,
                    t.enableStart,
                    t.enableEnd,
                    t.mode;
                    e.data.endDate && this.setState({
                        enableEnd: !0
                    }),
                    e.data.startDate && this.setState({
                        enableStart: !0
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
                    window.TimeUtil.getShortTime(e) !== window.TimeUtil.getShortTime(t.startDate) && v()(e).format("YYYYMMDD") !== v()(t.startDate).format("YYYYMMDD") ? this.setState({
                        startDate: e,
                        startTime: e
                    }) : window.TimeUtil.getShortTime(e) !== window.TimeUtil.getShortTime(this.state.startDate) && v()(e).format("YYYYMMDD") === v()(t.startDate).format("YYYYMMDD") ? this.setState({
                        startDate: e
                    }) : this.setState({
                        startTime: e
                    })
                }
            }, {
                key: "handleChangeEndTime",
                value: function(e) {
                    var t = this.props.data;
                    window.TimeUtil.getShortTime(e) !== window.TimeUtil.getShortTime(t.endDate) && v()(e).format("YYYYMMDD") !== v()(t.endDate).format("YYYYMMDD") ? this.setState({
                        endDate: e,
                        endTime: e
                    }) : window.TimeUtil.getShortTime(e) !== window.TimeUtil.getShortTime(this.state.endDate) ? this.setState({
                        endDate: e,
                        endTime: this.state.startDate
                    }) : this.setState({
                        endTime: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , a = t.dateFormat
                      , r = t.onSave
                      , o = t.onFormChange
                      , l = t.onChange
                      , u = (0,
                    c.Z)(t, O)
                      , d = this.state
                      , f = d.enabled
                      , m = d.startDate
                      , p = d.enableStart
                      , h = d.enableEnd
                      , E = void 0 === f ? n.enabled : f
                      , S = v()(m || n.startDate)
                      , R = this.state.startTime ? v()(this.state.startTime) : n.startDate ? v()(n.startDate) : v()()
                      , I = this.state.endTime ? v()(this.state.endTime) : n.endDate ? v()(n.endDate) : v()().add(1, "days")
                      , w = (0,
                    D.Z)("mail.autoReplyMaxLength");
                    return i.createElement(g.Z, (0,
                    s.Z)({
                        className: "ow-settingsAutoReply"
                    }, u, {
                        title: (0,
                        b.t)("settings.autoReply.TITLE"),
                        desc: (0,
                        b.t)("settings.autoReply.DESC"),
                        onSave: r,
                        enableCancel: Z
                    }), i.createElement(y.l0, {
                        className: "ow-settingsAutoReply-form ow-formatting-settings-options",
                        onChange: function(t, n) {
                            "none" === t.mode ? e.setState({
                                enabled: !1
                            }) : e.setState({
                                enabled: !0
                            }),
                            o(n)
                        },
                        data: n
                    }, i.createElement(T.Z, {
                        name: "mode",
                        value: n.mode,
                        alignText: "right",
                        list: [{
                            value: A[0].value,
                            text: (0,
                            b.t)("settings.autoReply.AUTO_REPLY_DESC_MX")
                        }, {
                            value: A[1].value,
                            text: (0,
                            b.t)("settings.autoReply.AUTO_REPLY_OPTION_REPLY_EVERY_TIME")
                        }, {
                            value: A[2].value,
                            text: (0,
                            b.t)("settings.autoReply.AUTO_REPLY_OPTION_REPLY_EVERY_TIME_AND_ORIGINAL")
                        }, {
                            value: A[3].value,
                            text: (0,
                            b.t)("settings.autoReply.AUTO_REPLY_OPTION_ONCE_EACH_SENDER")
                        }],
                        onChange: l
                    }), i.createElement("div", {
                        className: "ow-settingsAutoreply-startDateContainer"
                    }, i.createElement(y.bM, {
                        name: "startDateCheckbox",
                        onChange: this.toggleStartCheckbox,
                        value: !!n.startDate,
                        disabled: !E
                    }), i.createElement(y.UP, {
                        type: "date",
                        name: "startDate",
                        value: p ? n.startDate ? v()(n.startDate).format("YYYYMMDD") : v()().format("YYYYMMDD") : "",
                        label: (0,
                        b.t)("settings.autoReply.START_DATE"),
                        minDate: n.startDate ? v()(n.startDate).format("YYYYMMDD") > v()().format("YYYYMMDD") ? v()() : n.startDate : v()(),
                        onChange: function(t) {
                            return e.handleChangeStartTime(t)
                        },
                        disabled: !E,
                        validations: {
                            afterCurrent: function(e) {
                                return !e.enabled || (!("" != e.startDate && !e.startDate) || (0,
                                b.t)("settings.errorMessage.AUTOREPLY_START_DATE_MUST_AFTER", v()().format(a)))
                            }
                        },
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            b.t)("common.errorMessage.REQUIRED")
                        },
                        dateToStringFormat: "YYYYMMDD",
                        dateFormat: a,
                        readOnly: !0
                    }), p && E && i.createElement(y.k3, {
                        name: "startTime",
                        ariaLabel: (0,
                        b.t)("calendar.editorView.LABEL_START_TIME"),
                        className: "ow-autoreply-timeStamp",
                        value: R.valueOf(),
                        onChange: function(t) {
                            return e.handleChangeStartTime(t)
                        }
                    })), i.createElement("div", {
                        className: "ow-settingsAutoreply-startDateContainer"
                    }, i.createElement(y.bM, {
                        name: "endDateCheckbox",
                        value: !!n.endDate,
                        onChange: this.toggleEndCheckbox,
                        disabled: !E
                    }), i.createElement(y.UP, {
                        type: "date",
                        name: "endDate",
                        value: h ? n.endDate ? v()(n.endDate).format("YYYYMMDD") : v()().add(1, "days").format("YYYYMMDD") : "",
                        label: (0,
                        b.t)("settings.autoReply.END_DATE"),
                        minDate: n.endDate ? v()(n.startDate).format("YYYYMMDD") > v()().format("YYYYMMDD") ? v()() : n.endDate : v()(S).format("YYYYMMDD") > v()() ? v()(S).format("YYYYMMDD") : "" == n.endDate ? "" : v()(),
                        disabled: !E,
                        onChange: function(t) {
                            return e.handleChangeEndTime(t)
                        },
                        validations: {
                            afterStartDate: function(e) {
                                return !(e.startDate && !(e.endDate && e.startDate <= e.endDate) && "" != e.startDate && "" != e.endDate) || (0,
                                b.t)("settings.mail.END_DATE_AFTER_START_DATE")
                            }
                        },
                        autoReplyErrorDisplay: UXConfig.mail.autoReplyErrorDisplay,
                        dateToStringFormat: "YYYYMMDD",
                        dateFormat: a,
                        readOnly: !0
                    }), h && E && i.createElement(y.k3, {
                        name: "endTime",
                        ariaLabel: (0,
                        b.t)("calendar.editorView.LABEL_END_TIME"),
                        className: "ow-autoreply-timeStamp",
                        value: I.valueOf(),
                        onChange: function(t) {
                            return e.handleChangeEndTime(t)
                        }
                    })), i.createElement(y.UP, {
                        name: "message",
                        type: "textarea",
                        className: "ow-inputField-vertical ow-settings-autoreply-text",
                        value: n.message,
                        label: (0,
                        b.t)("settings.autoReply.MESSAGE"),
                        disabled: !E,
                        required: this.state.enabled,
                        validations: {
                            customValidation: function(e, t) {
                                return !(t.length > w) || (0,
                                C.WU)((0,
                                b.t)("settings.autoReply.MAX-LENGTH"), w)
                            }
                        },
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            b.t)("common.errorMessage.REQUIRED")
                        },
                        popperPlacement: "bottom",
                        placeholder: "",
                        "aria-label": n.message ? n.message : (0,
                        b.t)("settings.MODULE_DESC.PLACEHOLDER"),
                        "aria-required": !0
                    })))
                }
            }]),
            n
        }(i.PureComponent);
        w.propTypes = I,
        w.defaultProps = {
            data: {},
            dateFormat: "",
            isCPMSServer: !1,
            onLoad: function() {},
            onSave: function() {},
            onSaveForCPMS: function() {},
            onFormChange: function() {},
            ariaLabel: ""
        };
        var N = w
          , _ = n(37069)
          , k = function(e) {
            return e.isCPMSServer ? i.createElement(_.Z, e) : i.createElement(N, e)
        };
        k.propTypes = {
            isCPMSServer: l().bool
        },
        k.defaultProps = {
            isCPMSServer: !1
        };
        var P = k
          , L = n(16083)
          , M = n(27093)
          , B = n(72325)
          , Y = n(9224)
          , U = n(70039)
          , F = n(63482)
          , x = n(79819)
          , V = n(45857)
          , H = ["selectedSettings"]
          , j = ["onBack"];
        function G(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function W(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? G(Object(n), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var K = (0,
        L.$j)(function(e) {
            return {
                selectedSettings: (0,
                U.Ci)(e),
                data: e.settings.mailSettings.autoReply,
                dateFormat: (0,
                F.Ox)(e),
                displayConfirm: (0,
                x.J)(e),
                isCPMSServer: "CPMS" === (0,
                V.j2)(e)
            }
        }, function(e, t) {
            var n = t.onBack;
            return {
                onLoad: function() {
                    return e((0,
                    B.kf)())
                },
                onBack: function(t) {
                    e((0,
                    Y.tC)(t)),
                    n && n(t)
                },
                onSave: function(t) {
                    return e((0,
                    B.Oc)(t))
                },
                onFormChange: function(t) {
                    return e((0,
                    M.appSetFormDirty)(t))
                },
                onConfirmYes: function() {
                    e((0,
                    M.appSetFormDirty)(!1)),
                    e((0,
                    M.appSetPendingOver)())
                },
                onConfirmNo: function() {
                    e((0,
                    M.appSetFormDirty)(!1)),
                    e((0,
                    M.appSetPendingOver)())
                },
                onConfirmCancel: function() {
                    e((0,
                    M.appSetPendingCancel)())
                },
                onSaveForCPMS: function(t) {
                    return e((0,
                    B.GJ)(t))
                }
            }
        }, function(e, t, n) {
            var a = e.selectedSettings
              , r = (0,
            c.Z)(e, H)
              , i = t.onBack
              , o = (0,
            c.Z)(t, j);
            return W(W(W(W({}, n), r), o), {}, {
                onBack: function() {
                    i(a.split("#")[0])
                }
            })
        })(P)
          , z = n(55594)
          , q = n.n(z)
          , X = n(97186)
          , J = n.n(X)
          , Q = ["data", "onLoad", "onSave", "onFormChange", "onChange"];
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
                var n, a = (0,
                h.Z)(e);
                if (t) {
                    var r = (0,
                    h.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                p.Z)(this, n)
            }
        }
        var ee = S.UhU.isDesktop
          , te = {
            data: l().shape({
                spamAction: l().string,
                spamVirus: l().string
            }),
            onLoad: l().func,
            onSave: l().func,
            onFormChange: l().func
        }
          , ne = function(e) {
            (0,
            m.Z)(n, e);
            var t = $(n);
            function n(e) {
                var a;
                return (0,
                u.Z)(this, n),
                (a = t.call(this, e)).state = {
                    displayAlert: !1
                },
                a.handleSave = a.handleSave.bind((0,
                f.Z)(a)),
                a
            }
            return (0,
            d.Z)(n, [{
                key: "componentDidMount",
                value: function() {
                    (0,
                    this.props.onLoad)()
                }
            }, {
                key: "handleSave",
                value: function(e) {
                    var t = this.props
                      , n = t.onSave
                      , a = t.initialData;
                    J()(e.spamAction) && (e.spamAction = a.spamAction),
                    J()(e.virusAction) && (e.virusAction = a.virusAction),
                    n(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.data
                      , n = t.spamAction
                      , a = t.virusAction
                      , r = (e.onLoad,
                    e.onSave,
                    e.onFormChange)
                      , o = e.onChange
                      , l = (0,
                    c.Z)(e, Q);
                    return i.createElement(g.Z, (0,
                    s.Z)({}, l, {
                        title: (0,
                        b.t)("settings.security.TITLE"),
                        desc: (0,
                        b.t)("settings.security.DESC"),
                        onSave: this.handleSave,
                        enableCancel: ee
                    }), i.createElement(y.l0, {
                        className: "ow-settings-security-form",
                        onChange: function(e, t) {
                            r(t)
                        }
                    }, i.createElement("div", {
                        class: "ow-settingsDetail-content-section",
                        id: "",
                        tabindex: "0"
                    }, i.createElement("div", {
                        className: "ow-formField-labelWrapper ow-contactsLabelField-labelWrapper"
                    }, i.createElement(q(), null, (0,
                    b.t)("settings.security.SPAM_TITLE"))), i.createElement(T.Z, {
                        name: "spamAction",
                        value: n,
                        alignText: "right",
                        list: [{
                            value: "folder",
                            text: (0,
                            b.t)("settings.security.SPAM_CHOICE[0]")
                        }, {
                            value: "discard",
                            text: (0,
                            b.t)("settings.security.SPAM_CHOICE[1]")
                        }, {
                            value: "subject",
                            text: (0,
                            b.t)("settings.security.SPAM_CHOICE[2]")
                        }, {
                            value: "none",
                            text: (0,
                            b.t)("settings.security.SPAM_CHOICE[3]")
                        }],
                        onChange: o
                    })), i.createElement("div", {
                        class: "ow-settingsDetail-content-section",
                        id: "",
                        tabindex: "0"
                    }, i.createElement("div", {
                        className: "ow-formField-labelWrapper ow-contactsLabelField-labelWrapper"
                    }, i.createElement(q(), null, (0,
                    b.t)("settings.security.VIRUS_TITLE"))), i.createElement(T.Z, {
                        name: "virusAction",
                        value: a,
                        alignText: "right",
                        list: [{
                            value: "discard",
                            text: (0,
                            b.t)("settings.security.VIRUS_CHOICE[0]")
                        }, {
                            value: "subject",
                            text: (0,
                            b.t)("settings.security.VIRUS_CHOICE[1]")
                        }, {
                            value: "none",
                            text: (0,
                            b.t)("settings.security.VIRUS_CHOICE[2]")
                        }],
                        onChange: o
                    }))))
                }
            }]),
            n
        }(i.Component);
        ne.propTypes = te,
        ne.defaultProps = {
            data: {
                spamAction: "discard",
                virusAction: "discard"
            },
            currentAccount: {},
            onLoad: function() {},
            onSave: function() {},
            onFormChange: function() {}
        };
        var ae = ne
          , re = ["selectedSettings"]
          , ie = ["onBack"];
        function oe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function le(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? oe(Object(n), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oe(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var se = (0,
        L.$j)(function(e) {
            return {
                selectedSettings: (0,
                U.Ci)(e),
                data: e.settings.mailSettings.spamAction,
                initialData: e.settings.mailSettings.spamAction,
                displayConfirm: (0,
                x.J)(e),
                currentAccount: (0,
                V.hL)(e)
            }
        }, function(e, t) {
            var n = t.onBack;
            return {
                onLoad: function() {
                    return e((0,
                    B.P3)())
                },
                onBack: function(t) {
                    e((0,
                    Y.tC)(t)),
                    n && n(t)
                },
                onSave: function(t) {
                    return e((0,
                    B.SJ)(t))
                },
                onFormChange: function(t) {
                    return e((0,
                    M.appSetFormDirty)(t))
                },
                onConfirmYes: function() {
                    e((0,
                    M.appSetFormDirty)(!1)),
                    e((0,
                    M.appSetPendingOver)())
                },
                onConfirmNo: function() {
                    e((0,
                    M.appSetFormDirty)(!1)),
                    e((0,
                    M.appSetPendingOver)())
                },
                onConfirmCancel: function() {
                    e((0,
                    M.appSetPendingCancel)())
                }
            }
        }, function(e, t, n) {
            var a = e.selectedSettings
              , r = (0,
            c.Z)(e, re)
              , i = t.onBack
              , o = (0,
            c.Z)(t, ie);
            return le(le(le(le({}, n), r), o), {}, {
                onBack: function() {
                    i(a.split("#")[0])
                }
            })
        })(ae);
        function ce(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function ue(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ce(Object(n), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ce(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var de = ue(ue({}, r.Z), {}, {
            AutoReplyCntr: K,
            BellSecurityCntr: se
        })
    }
}]);
