/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[421], {
    13154: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return b
            }
        });
        var n = a(87462)
          , c = a(15671)
          , o = a(43144)
          , l = a(60136)
          , r = a(82963)
          , i = a(61120)
          , s = a(87401)
          , u = (a(23398),
        a(47052))
          , m = a(18733)
          , d = a(62347)
          , f = a(32081)
          , h = a(94165)
          , p = a(67064)
          , v = a.n(p)
          , C = a(4446)
          , E = a(44910);
        function k(e) {
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
                var a, n = (0,
                i.Z)(e);
                if (t) {
                    var c = (0,
                    i.Z)(this).constructor;
                    a = Reflect.construct(n, arguments, c)
                } else
                    a = n.apply(this, arguments);
                return (0,
                r.Z)(this, a)
            }
        }
        var b = function(e) {
            (0,
            l.Z)(a, e);
            var t = k(a);
            function a() {
                return (0,
                c.Z)(this, a),
                t.apply(this, arguments)
            }
            return (0,
            o.Z)(a, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , a = t.selectedAddressBook.properties.trash
                      , c = t.disableDragging
                      , o = t.hasAddibleGroups
                      , l = t.rowData
                      , r = t.isItemSelected
                      , i = t.onDeleteContacts
                      , p = t.onComposeMail
                      , k = t.onAddToGroup
                      , b = t.onInviteToEvent
                      , w = t.enableNickname
                      , I = t.selectedInfo
                      , N = t.list
                      , g = l.data;
                    if (g) {
                        var D = g.id
                          , Z = g.title
                          , y = g.value
                          , B = g.fields
                          , L = g.isGroup
                          , H = g.contactEmails
                          , T = g.groupEmails
                          , G = {
                            onDeleteContacts: i,
                            onComposeMail: p,
                            onAddToGroup: k,
                            onInviteToEvent: b
                        }
                          , A = (void 0 === y || "" === y) && "titleOnly";
                        return s.createElement(m.Z, {
                            className: "ow-contacts-ContactListItemDragSource",
                            currentId: D,
                            disable: c,
                            onBeginDrag: this.handleDragSourceBeginDrag
                        }, s.createElement("div", {
                            className: "ow-contacts-ContactListItem",
                            role: h.HB.PRESENTATION,
                            onClick: this.handleItemClick,
                            ref: function(t) {
                                e.innerDom = t
                            }
                        }, s.createElement("div", {
                            className: "ow-selectable-item-checkbox-container",
                            role: h.HB.CHECKBOX,
                            "aria-label": Z || y,
                            "aria-checked": r(l)
                        }, s.createElement(f.Z, {
                            name: r(l) ? "square-selected" : "squared-unchecked",
                            onClick: this.handleCheckChange,
                            tabIndex: C.UhU.isDesktop ? 0 : -1,
                            onFocus: function(e) {
                                return (0,
                                E.yJ)(e)
                            },
                            role: h.HB.CHECKBOX,
                            "aria-label": Z || y,
                            "aria-checked": r(l),
                            onBlur: function(t) {
                                (0,
                                E.yJ)(t),
                                (0,
                                E.np)(t, e.props.list)
                            },
                            onKeyDown: function(e) {
                                (0,
                                E.OG)(e, ".ow-ResponsiveToolbar", I, N.handleCheckChange, l, r(l), N.handleItemClick)
                            }
                        })), s.createElement("div", {
                            className: "ow-contacts-ContactListItem-detail"
                        }, s.createElement("div", {
                            className: v()("ow-contacts-ContactListItem-detail-title", A),
                            role: h.HB.HEADING,
                            "aria-level": h.DU.H4,
                            "aria-label": Z
                        }, s.createElement("span", null, Z)), w && B && s.createElement("div", {
                            className: "ow-contacts-ContactListItem-detail-nickname",
                            "aria-label": null === B || void 0 === B ? void 0 : B.nickname
                        }, s.createElement("span", null, B.nickname)), s.createElement("div", {
                            className: "ow-contacts-ContactListItem-detail-value"
                        }, s.createElement("span", {
                            className: L ? "value-group" : "value-contact"
                        }, y))), s.createElement(d.Z, {
                            className: "ow-contacts-ContactListItem-hoverToolbar",
                            enableHover: !0
                        }, s.createElement(u.Z, (0,
                        n.Z)({
                            id: D,
                            name: Z,
                            isGroup: L,
                            hasAddibleGroups: o,
                            groupEmails: T,
                            contactEmails: H,
                            fields: B,
                            inTrash: "true" === a
                        }, G)))))
                    }
                    return s.createElement("div", {
                        className: "ow-contacts-ContactListItem-blank"
                    }, s.createElement("div", {
                        className: "ow-contacts-ContactListItem-blank-row"
                    }), s.createElement("div", {
                        className: "ow-contacts-ContactListItem-blank-row"
                    }))
                }
            }]),
            a
        }(a(27593).Z)
    }
}]);
