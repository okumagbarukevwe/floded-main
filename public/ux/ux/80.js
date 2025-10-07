/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[80], {
    96244: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return C
            }
        });
        var a = n(29439)
          , l = n(87462)
          , r = n(45987)
          , o = n(15671)
          , c = n(43144)
          , i = n(60136)
          , s = n(82963)
          , u = n(61120)
          , m = n(87401)
          , d = n(23398)
          , p = n.n(d)
          , f = n(32022)
          , E = n.n(f)
          , v = n(90088)
          , h = n(22747)
          , b = (n(84987),
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
                    var l = (0,
                    u.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, l)
                } else
                    n = a.apply(this, arguments);
                return (0,
                s.Z)(this, n)
            }
        }
        var C = function(e) {
            (0,
            i.Z)(n, e);
            var t = y(n);
            function n() {
                return (0,
                o.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            c.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.options
                      , n = e.defaultOption
                      , o = e.onSelectChange
                      , c = e.inputType
                      , i = e.inputValue
                      , s = e.onInputChange
                      , u = e.onInputBlur
                      , d = e.disabled
                      , p = (e.maxDate,
                    e.primary)
                      , f = e.reverseOrder
                      , y = e.mainLabel
                      , C = (0,
                    r.Z)(e, b)
                      , g = this.context.isRtl
                      , N = m.createElement("div", {
                        className: "ow-selectInput-labelCmp"
                    }, m.createElement(v.Z, {
                        rtl: g,
                        "aria-label": "".concat(y),
                        onChange: o,
                        value: n,
                        options: t,
                        labelKey: "text",
                        clearable: !1,
                        searchable: !1,
                        disabled: d
                    }))
                      , Z = m.createElement("div", {
                        className: "ow-selectInput-inputCmp"
                    }, m.createElement(h.Z, (0,
                    l.Z)({}, C, {
                        type: c,
                        value: i,
                        onChange: s,
                        onBlur: u,
                        disabled: d || p,
                        maxDate: E()(),
                        placeholder: "",
                        handleHide: this.handleHide
                    })))
                      , w = y ? m.createElement("div", {
                        className: "ow-selectInput-mainLabel",
                        "aria-label": y
                    }, y) : null
                      , I = f ? [w, Z, N] : [w, N, Z]
                      , O = (0,
                    a.Z)(I, 3)
                      , R = O[0]
                      , T = O[1]
                      , B = O[2];
                    return m.createElement("div", {
                        className: "ow-selectInput ow-selectInput-dynamic-order"
                    }, R, T, B)
                }
            }]),
            n
        }(n(31017).Z);
        C.contextTypes = {
            isRtl: p().bool
        },
        C.propTypes = {
            options: p().arrayOf(p().shape({
                value: p().string,
                text: p().string
            })),
            defaultOption: p().string,
            disabled: p().bool,
            onSelectChange: p().func,
            inputType: p().string,
            inputValue: p().string,
            onInputChange: p().func,
            onInputBlur: p().func,
            maxDate: p().string,
            fieldType: p().string
        },
        C.defaultProps = {
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
                return v
            }
        });
        var a = n(29439)
          , l = n(87462)
          , r = n(15671)
          , o = n(43144)
          , c = n(60136)
          , i = n(82963)
          , s = n(61120)
          , u = n(87401)
          , m = n(23398)
          , d = n.n(m)
          , p = n(90088)
          , f = n(22747);
        n(84987);
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
                    var l = (0,
                    s.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, l)
                } else
                    n = a.apply(this, arguments);
                return (0,
                i.Z)(this, n)
            }
        }
        var v = function(e) {
            (0,
            c.Z)(n, e);
            var t = E(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            o.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.options
                      , n = e.defaultOption
                      , r = e.onSelectChange
                      , o = e.fields
                      , c = e.fields2Value
                      , i = e.onInputChange
                      , s = e.onInputBlur
                      , m = e.reverseOrder
                      , d = e.mainLabel
                      , E = this.context.isRtl
                      , v = o.map(function(e) {
                        return u.createElement("div", {
                            className: "ow-selectMultiInputs-inputCmp-field"
                        }, u.createElement("span", {
                            className: "ow-selectInput-mainLabel"
                        }, e.placeholder), u.createElement(f.Z, (0,
                        l.Z)({
                            key: e.name,
                            "aria-label": e.name,
                            type: e.type,
                            value: c[e.name].value,
                            onChange: function(t) {
                                return i(t, e.name)
                            },
                            onBlur: function(t) {
                                return s(t, e.name)
                            }
                        }, c[e.name], {
                            placeholder: ""
                        })))
                    })
                      , h = u.createElement("div", {
                        className: "ow-selectMultiInputs-labelCmp"
                    }, u.createElement(p.Z, {
                        rtl: E,
                        "aria-label": "".concat(d),
                        value: n,
                        options: t,
                        onChange: r,
                        labelKey: "text",
                        clearable: !1,
                        searchable: !1
                    }))
                      , b = u.createElement("div", {
                        className: "ow-selectMultiInputs-inputCmp"
                    }, v)
                      , y = d ? u.createElement("div", {
                        className: "ow-selectInput-mainLabel"
                    }, d) : null
                      , C = m ? [y, b, h] : [y, h, b]
                      , g = (0,
                    a.Z)(C, 3)
                      , N = g[0]
                      , Z = g[1]
                      , w = g[2];
                    return u.createElement("div", {
                        className: "ow-selectMultiInputs"
                    }, N, Z, w)
                }
            }]),
            n
        }(n(52454).Z);
        v.contextTypes = {
            isRtl: d().bool
        }
    },
    94185: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return h
            }
        });
        var a = n(87462)
          , l = n(45987)
          , r = n(15671)
          , o = n(43144)
          , c = n(60136)
          , i = n(82963)
          , s = n(61120)
          , u = n(87401)
          , m = (n(23398),
        n(22747))
          , d = n(55594)
          , p = n.n(d)
          , f = n(84987)
          , E = ["label", "inputType", "inputValue", "onLabelChange", "onInputChange", "onInputBlur", "labelCustomized", "labelValue", "labelErrorMsg"];
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
                var n, a = (0,
                s.Z)(e);
                if (t) {
                    var l = (0,
                    s.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, l)
                } else
                    n = a.apply(this, arguments);
                return (0,
                i.Z)(this, n)
            }
        }
        var h = function(e) {
            (0,
            c.Z)(n, e);
            var t = v(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            o.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.label
                      , n = e.inputType
                      , r = e.inputValue
                      , o = e.onLabelChange
                      , c = e.onInputChange
                      , i = e.onInputBlur
                      , s = e.labelCustomized
                      , d = e.labelValue
                      , v = e.labelErrorMsg
                      , h = (0,
                    l.Z)(e, E);
                    return u.createElement("div", {
                        className: "ow-textInput"
                    }, u.createElement("div", {
                        className: "ow-textInput-labelCmp"
                    }, s ? u.createElement(p(), {
                        "aria-label": (0,
                        f.t)("contacts.editPanel.OTHER_FIELD_LABEL")
                    }, (0,
                    f.t)("contacts.editPanel.OTHER_FIELD_LABEL")) : u.createElement(p(), {
                        "aria-label": t
                    }, t)), u.createElement("div", {
                        className: "ow-textInput-inputCmp"
                    }, u.createElement(m.Z, (0,
                    a.Z)({
                        type: n,
                        value: r,
                        onChange: c,
                        onBlur: i
                    }, h, {
                        placeholder: ""
                    }))), s && u.createElement("div", {
                        className: "ow-textInput-inputCmp-label"
                    }, u.createElement(m.Z, {
                        value: d,
                        placeholder: t,
                        errorMsg: v,
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
                return m
            },
            m: function() {
                return d
            }
        });
        var a = n(87462)
          , l = n(45987)
          , r = n(87401)
          , o = n(23398)
          , c = n(77545)
          , i = n(84987)
          , s = n(94165)
          , u = ["onClick", "btnCls"]
          , m = function(e) {
            var t = e.onClick
              , n = e.btnCls
              , a = e.type;
            return r.createElement("div", {
                containerCls: "ow-contacts-field-addBtn-container"
            }, r.createElement(c.Z, {
                className: ["ow-contacts-field-addBtn", n].join(" "),
                title: (0,
                i.t)("contacts.editPanel.toolTips.ADD_FIELD"),
                onClick: t,
                iconName: "add-contact-form",
                "aria-label": a ? (0,
                i.t)("contacts.editPanel.add.".concat(a)) : (0,
                i.t)("contacts.editPanel.add.lzOther"),
                role: s.HB.BUTTON
            }, a ? (0,
            i.t)("contacts.editPanel.add.".concat(a)) : (0,
            i.t)("contacts.editPanel.add.lzOther")))
        };
        m.propTypes = {
            onClick: o.func,
            btnCls: o.string
        },
        m.defaultProps = {
            onClick: function() {},
            btnCls: ""
        };
        var d = function(e) {
            var t = e.onClick
              , n = e.btnCls
              , o = (0,
            l.Z)(e, u);
            return r.createElement("div", {
                containerCls: "ow-contacts-field-removeBtn-container"
            }, r.createElement(c.Z, (0,
            a.Z)({
                title: (0,
                i.t)("contacts.editPanel.toolTips.REMOVE_FIELD"),
                className: ["ow-contacts-field-removeBtn", n].join(" "),
                onClick: t,
                role: s.HB.BUTTON,
                "aria-label": (0,
                i.t)("contacts.editPanel.toolTips.REMOVE_FIELD"),
                iconName: "remove-contact-form"
            }, o)))
        };
        d.propTypes = {
            onClick: o.func,
            btnCls: o.string
        },
        d.defaultProps = {
            onClick: function() {},
            btnCls: ""
        }
    },
    97230: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return h
            }
        });
        var a = n(87462)
          , l = n(15671)
          , r = n(43144)
          , o = n(60136)
          , c = n(82963)
          , i = n(61120)
          , s = n(87401)
          , u = (n(23398),
        n(78295))
          , m = n.n(u)
          , d = n(83853)
          , p = n(22747)
          , f = n(84987)
          , E = n(94165);
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
                var n, a = (0,
                i.Z)(e);
                if (t) {
                    var l = (0,
                    i.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, l)
                } else
                    n = a.apply(this, arguments);
                return (0,
                c.Z)(this, n)
            }
        }
        var h = function(e) {
            (0,
            o.Z)(n, e);
            var t = v(n);
            function n() {
                return (0,
                l.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            r.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.fields
                      , n = e.displayLabels
                      , l = e.onInputChange
                      , r = e.editBtnDisplayed
                      , o = e.hasPhoto
                      , c = e.onImgChange
                      , i = e.onInputBlur
                      , u = e.contactId
                      , v = n.map(function(e, n) {
                        return s.createElement("div", {
                            className: "ow-contacts-ContactHeaderSection-field",
                            "aria-label": null === e || void 0 === e ? void 0 : e.label
                        }, s.createElement("span", {
                            className: "ow-contacts-header-text-field-line-label"
                        }, e.label), s.createElement(p.Z, (0,
                        a.Z)({
                            "aria-label": e.label,
                            key: e.labelType,
                            type: t[e.labelType].type,
                            onChange: function(t) {
                                return l(n, t, e.labelType)
                            },
                            onBlur: function(t) {
                                return i(n, t, e.labelType)
                            }
                        }, e, {
                            placeholder: ""
                        })))
                    });
                    return s.createElement(m(), {
                        className: "ow-contacts-ContactHeaderSection"
                    }, s.createElement(d.Z, {
                        contactId: u,
                        editBtnDisplayed: r,
                        hasPhoto: o,
                        onChange: c
                    }), s.createElement("div", {
                        className: "ow-contacts-ContactEditForm-section-title",
                        role: E.HB.HEADING,
                        "aria-level": E.DU.H3,
                        "aria-label": (0,
                        f.t)("contacts.editPanel.header")
                    }, s.createElement("span", null, (0,
                    f.t)("contacts.editPanel.header"))), s.createElement("div", {
                        className: "ow-contacts-ContactHeaderSection-fields"
                    }, v))
                }
            }]),
            n
        }(n(41619).Z)
    },
    58184: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return O
            }
        });
        var a = n(87462)
          , l = n(93433)
          , r = n(15671)
          , o = n(43144)
          , c = n(60136)
          , i = n(82963)
          , s = n(61120)
          , u = n(87401)
          , m = n(35369)
          , d = n(74238)
          , p = n(32081)
          , f = n(84987)
          , E = n(90656)
          , v = n(40944)
          , h = n(94165)
          , b = n(83416)
          , y = (n(44910),
        n(95093));
        function C(e) {
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
                    var l = (0,
                    s.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, l)
                } else
                    n = a.apply(this, arguments);
                return (0,
                i.Z)(this, n)
            }
        }
        h.sH.SORT_FIRSTNAME_ASC,
        h.sH.SORT_LASTNAME_ASC;
        var g = (0,
        b.Z)("contacts")
          , N = g.regexp.folderNameInvalidChars
          , Z = g.group
          , w = Z.max
          , I = Z.allowDuplicateName
          , O = function(e) {
            (0,
            c.Z)(n, e);
            var t = C(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            o.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , r = n.id
                      , o = n.groupName
                      , c = t.groupNames
                      , i = (t.contactList,
                    t.contactSort)
                      , s = t.shouldMask
                      , b = t.onSearch
                      , y = t.onValid
                      , C = t.onInvalid
                      , g = t.onValidSubmit
                      , Z = this.state
                      , O = Z.currentEmails
                      , R = Z.currentMembers
                      , T = Z.currentMemberIds;
                    return u.createElement("div", {
                        className: "ow-contacts-GroupEditForm"
                    }, u.createElement("div", {
                        className: "ow-contacts-GroupEditForm-body"
                    }, u.createElement("div", {
                        className: "ow-contacts-GroupEditForm-editor-name"
                    }, u.createElement(m.l0, {
                        onChange: this.handleFormChange,
                        onValid: y,
                        onInvalid: C,
                        onValidSubmit: g,
                        ref: this.setFormsyRef
                    }, u.createElement(m.UP, {
                        type: "text",
                        label: (0,
                        f.t)("contacts.catalogView.ADD_GROUP_LABEL"),
                        "aria-label": (0,
                        f.t)("contacts.catalogView.ADD_GROUP_LABEL"),
                        placeholder: "",
                        name: "name",
                        value: o || "",
                        validations: {
                            customValidation: function(e, t) {
                                return "" === t.trim() ? (0,
                                f.t)("contacts.catalogView.controlDialog.errorMessage.BLANK_NAME") : N.test(t) ? (0,
                                E.WU)((0,
                                f.t)("contacts.catalogView.controlDialog.errorMessage.INVALIDATE_NAME"), (0,
                                E.iC)(N)) : !(!r && !I && -1 !== c.indexOf(t.trim())) || (0,
                                E.WU)((0,
                                f.t)("contacts.catalogView.controlDialog.errorMessage.DUP_NAME"), t)
                            },
                            maxLength: w
                        },
                        validationErrors: {
                            maxLength: (0,
                            E.WU)((0,
                            f.t)("contacts.catalogView.message.maxLengthText"), w),
                            isDefaultRequiredValue: (0,
                            f.t)("contacts.catalogView.controlDialog.errorMessage.BLANK_NAME")
                        },
                        required: !0,
                        "aria-required": !0
                    }))), u.createElement("div", {
                        className: "ow-contacts-GroupEditForm-editor-members"
                    }, u.createElement("div", {
                        className: "ow-contacts-GroupEditForm-editor-members-autoInput"
                    }, u.createElement("div", {
                        className: "ow-contacts-GroupEditForm-editor-members-inputTitle"
                    }, u.createElement("div", {
                        className: "ow-contacts-GroupEditForm-editor-members-inputTitle-label",
                        "aria-label": (0,
                        f.t)("calendar.editorView.attendee.LABEL_SEARCH_CONTACTS")
                    }, (0,
                    f.t)("calendar.editorView.attendee.LABEL_SEARCH_CONTACTS")), u.createElement("span", null, (0,
                    f.t)("contacts.editPanel.message.GROUP_ADD_MEMBER_TIP"))), u.createElement(d.Z, (0,
                    a.Z)({
                        placeholder: (0,
                        f.t)("contacts.editPanel.GROUP_ADD_MEMBER_PLACEHOLDER"),
                        title: (0,
                        f.t)("contacts.editPanel.GROUP_ADD_MEMBER_PLACEHOLDER"),
                        options: this.getOptionsList(this.props.contactList, i),
                        getOptions: b,
                        onAdd: this.handleAddMembersOrEmails,
                        handleFocus: this.handleFocusOnEnabledSave,
                        groupMembers: [].concat((0,
                        l.Z)(T), (0,
                        l.Z)(O)),
                        ref: function(t) {
                            e.autoInput = t
                        },
                        labelKey: "title",
                        valueKey: "value",
                        showMask: s,
                        autoSuggest: !0,
                        optionRender: function(e, t, n) {
                            return u.createElement("div", {
                                className: "ow-combox-menuitem-option"
                            }, u.createElement("div", {
                                title: n[e]
                            }, n[e]), u.createElement("div", {
                                title: n[t]
                            }, n[t]))
                        },
                        getValueToEdit: function(e, t, n) {
                            var a = e[t]
                              , l = e[n];
                            return -1 !== l.lastIndexOf("<") || -1 !== l.lastIndexOf(">") ? "".concat(a).concat(l) : a ? "".concat(a, "<").concat(l, ">") : l
                        },
                        setEditValue: function(e, t, n, a) {
                            -1 !== a.lastIndexOf("<") && a.lastIndexOf(">") === a.length - 1 ? (e[t] = a.slice(0, a.lastIndexOf("<")),
                            e[n] = a.slice(a.lastIndexOf("<") + 1, -1)) : (e[t] = "",
                            e[n] = a)
                        },
                        validate: this.handleValidateContact
                    }, this.props))), u.createElement("div", {
                        className: "ow-contacts-GroupEditForm-section"
                    }, u.createElement("div", {
                        className: "ow-contacts-GroupEditForm-section-title",
                        "aria-label": (0,
                        f.t)("contacts.detailEdit.label.CONTACT_LIST")
                    }, u.createElement("span", null, (0,
                    f.t)("contacts.detailEdit.label.CONTACT_LIST"), " ", "(".concat(T.length + O.length, ")"))), u.createElement("div", {
                        className: "ow-contacts-GroupEditForm-section-members"
                    }, T.map(function(t, n) {
                        var a = (0,
                        v._t)(R[t], {
                            sort: i
                        })
                          , r = a.title
                          , o = a.value
                          , c = [].concat((0,
                        l.Z)(T), (0,
                        l.Z)(O));
                        return u.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member",
                            tabIndex: 0
                        }, u.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member-content"
                        }, u.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member-title",
                            title: r,
                            "aria-label": r
                        }, u.createElement("span", null, r)), u.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member-value",
                            title: o,
                            "aria-label": o
                        }, u.createElement("span", null, o))), u.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member-control"
                        }, u.createElement(p.Z, {
                            name: "trash",
                            onClick: function() {
                                return e.handleRemoveMembersOrEmails(t, {
                                    isContact: !0
                                })
                            },
                            role: h.HB.BUTTON,
                            "aria-label": (0,
                            f.t)("common.DELETE"),
                            tabIndex: 0,
                            onKeyDown: function(a) {
                                if (a.key !== h.BY.TABKEY) {
                                    if (a.key !== h.BY.ENTERKEY)
                                        return;
                                    e.handleRemoveMembersOrEmails(t, {
                                        isContact: !0
                                    })
                                }
                                a.shiftKey || n !== (null === c || void 0 === c ? void 0 : c.length) - 1 || e.handleFocusOnEnabledSave()
                            }
                        })))
                    })), u.createElement("div", {
                        className: "ow-contacts-GroupEditForm-section-emails"
                    }, O.map(function(t, n) {
                        return u.createElement("div", {
                            className: "ow-contacts-GroupEditForm-email",
                            tabIndex: 0
                        }, u.createElement("div", {
                            className: "ow-contacts-GroupEditForm-email-content"
                        }, t.indexOf("<") > -1 ? u.createElement("div", null, u.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member-title"
                        }, u.createElement("span", null, u.createElement("b", null, t.substr(0, t.indexOf("<"))))), u.createElement("div", {
                            className: "ow-contacts-GroupEditForm-member-value",
                            title: t,
                            "aria-label": t
                        }, u.createElement("span", null, t.substring(t.lastIndexOf("<") + 1, t.lastIndexOf(">"))))) : u.createElement("div", {
                            className: "ow-contacts-GroupEditForm-email-content"
                        }, u.createElement("div", {
                            className: "ow-contacts-GroupEditForm-email-title",
                            title: t,
                            "aria-label": t
                        }, u.createElement("span", null, t)))), u.createElement("div", {
                            className: "ow-contacts-GroupEditForm-email-control"
                        }, u.createElement(p.Z, {
                            name: "trash",
                            role: h.HB.BUTTON,
                            "aria-label": (0,
                            f.t)("common.DELETE"),
                            onClick: function() {
                                return e.handleRemoveMembersOrEmails(t)
                            },
                            tabIndex: 0,
                            onKeyDown: function(a) {
                                if (a.key !== h.BY.TABKEY) {
                                    if (a.key !== h.BY.ENTERKEY)
                                        return;
                                    e.handleRemoveMembersOrEmails(t)
                                }
                                a.shiftKey || n !== (null === O || void 0 === O ? void 0 : O.length) - 1 || e.handleFocusOnEnabledSave()
                            }
                        })))
                    }))))))
                }
            }]),
            n
        }(y.Z)
    }
}]);
