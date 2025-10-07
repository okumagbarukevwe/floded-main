/*! Synchronoss Messaging 2018 */
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[8], {
    39775: function(e, t, n) {
        var a = n(47311);
        e.exports = function(e, t) {
            return a(t, function(t) {
                return e[t]
            })
        }
    },
    27969: function(e, t, n) {
        var a = n(53058)
          , i = 1 / 0;
        e.exports = function(e) {
            return null != e && e.length ? a(e, i) : []
        }
    },
    43779: function(e, t, n) {
        var a = n(73204)
          , i = n(57214)
          , r = n(55658)
          , o = n(90114)
          , l = n(89370)
          , c = Math.max;
        e.exports = function(e, t, n, s) {
            e = i(e) ? e : l(e),
            n = n && !s ? o(n) : 0;
            var d = e.length;
            return n < 0 && (n = c(d + n, 0)),
            r(e) ? n <= d && e.indexOf(t, n) > -1 : !!d && a(e, t, n) > -1
        }
    },
    89370: function(e, t, n) {
        var a = n(39775)
          , i = n(7661);
        e.exports = function(e) {
            return null == e ? [] : a(e, i(e))
        }
    },
    65066: function(e, t, n) {
        "use strict";
        var a = n(82569);
        t.__esModule = !0,
        t.default = void 0;
        var i = a(n(66660))
          , r = a(n(50914))
          , o = a(n(69471))
          , l = a(n(67064))
          , c = a(n(87401))
          , s = a(n(23398))
          , d = n(88378)
          , u = {
            responsive: s.default.bool,
            rounded: s.default.bool,
            circle: s.default.bool,
            thumbnail: s.default.bool
        }
          , m = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return (0,
            o.default)(t, e),
            t.prototype.render = function() {
                var e, t = this.props, n = t.responsive, a = t.rounded, o = t.circle, s = t.thumbnail, u = t.className, m = (0,
                r.default)(t, ["responsive", "rounded", "circle", "thumbnail", "className"]), f = (0,
                d.splitBsProps)(m), p = f[0], h = f[1], v = ((e = {})[(0,
                d.prefix)(p, "responsive")] = n,
                e[(0,
                d.prefix)(p, "rounded")] = a,
                e[(0,
                d.prefix)(p, "circle")] = o,
                e[(0,
                d.prefix)(p, "thumbnail")] = s,
                e);
                return c.default.createElement("img", (0,
                i.default)({}, h, {
                    className: (0,
                    l.default)(u, v)
                }))
            }
            ,
            t
        }(c.default.Component);
        m.propTypes = u,
        m.defaultProps = {
            responsive: !1,
            rounded: !1,
            circle: !1,
            thumbnail: !1
        };
        var f = (0,
        d.bsClass)("img", m);
        t.default = f,
        e.exports = t.default
    },
    14137: function(e, t, n) {
        "use strict";
        var a = n(87401)
          , i = n(23398)
          , r = n.n(i)
          , o = n(65066)
          , l = n.n(o)
          , c = n(32081)
          , s = n(84987)
          , d = n(4446);
        function u(e) {
            var t = e.thumbnailSrc
              , n = e.contentRfc
              , i = e.fileIcon
              , r = e.filename
              , o = e.handleClickImage
              , u = e.className
              , m = e.children
              , f = e.childrenLeft
              , p = e.childrenDragSource
              , h = e.empty
              , v = e.options
              , y = (0,
            d.XbW)(r, n);
            return h ? a.createElement("div", {
                className: "ow-fileView ".concat(u)
            }, a.createElement("div", {
                className: "ow-fileView-left"
            }, a.createElement("div", {
                className: "ow-mail-fileView-empty-left"
            })), a.createElement("div", {
                className: "ow-fileView-mid"
            }, a.createElement("div", {
                className: "ow-mail-fileView-empty-mid"
            })), a.createElement("div", {
                className: "ow-fileView-right"
            }, a.createElement("div", {
                className: "ow-mail-fileView-empty-right-row0"
            }), a.createElement("div", {
                className: "ow-mail-fileView-empty-right-row1"
            }), a.createElement("div", {
                className: "ow-mail-fileView-empty-right-row2"
            }))) : a.createElement("div", {
                className: "ow-fileView ".concat(u)
            }, a.createElement("div", {
                className: "ow-fileView-left"
            }, f, a.createElement(c.Z, {
                name: "attachment"
            })), a.createElement("div", {
                className: "ow-fileView-mid"
            }, t ? a.createElement(l(), {
                onClick: function(e) {
                    return o(e)
                },
                src: t,
                title: "default" === i ? "" : r,
                responsive: !0
            }) : a.createElement(c.Z, {
                name: i,
                title: y ? r : (0,
                s.t)("mail.compose.FILE_SUPPORT"),
                onClick: function(e) {
                    return y ? o(e) : null
                }
            })), a.createElement("div", {
                className: "ow-fileView-right"
            }, m), a.createElement("div", {
                className: "ow-fileView-dropdown-list"
            }, v), p)
        }
        u.defaultProps = {
            thumbnailSrc: "",
            filename: "",
            fileIcon: "",
            className: "",
            empty: !1,
            handleClickImage: function() {},
            options: void 0,
            children: void 0,
            childrenLeft: void 0,
            childrenDragSource: void 0
        },
        u.propTypes = {
            empty: r().bool,
            thumbnailSrc: r().string,
            filename: r().string,
            fileIcon: r().string,
            className: r().string,
            handleClickImage: r().func,
            options: r().element,
            children: r().element,
            childrenLeft: r().element,
            childrenDragSource: r().element
        },
        t.Z = u
    },
    92520: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return y
            }
        });
        var a = n(87401)
          , i = n(23398)
          , r = n.n(i)
          , o = n(77926)
          , l = n(70224)
          , c = n(84987)
          , s = n(94165);
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
        var u = ["folderData", "folderPaths", "onSelectFolder", "title", "disabled", "isImplicit", "overlayContainer"]
          , m = ["data", "disabledPaths", "onSelectFolder", "overlayContainer"];
        function f(e, t) {
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
        function p(e, t, n) {
            return (t = function(e) {
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
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function h() {
            return (h = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function v(e, t) {
            if (null == e)
                return {};
            var n, a, i = function(e, t) {
                if (null == e)
                    return {};
                var n, a, i = {}, r = Object.keys(e);
                for (a = 0; a < r.length; a++)
                    n = r[a],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (a = 0; a < r.length; a++)
                    n = r[a],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var y = function(e) {
            function t(t) {
                var n = t.folderData
                  , i = t.folderPaths
                  , r = t.onSelectFolder
                  , o = t.title
                  , l = t.disabled
                  , c = t.isImplicit
                  , s = t.overlayContainer
                  , d = v(t, u);
                return a.createElement(e, {
                    title: o,
                    disabled: l,
                    isImplicit: c,
                    overlayContainer: s,
                    "aria-label": o,
                    "aria-disabled": l
                }, n.map(function(e) {
                    return a.createElement(b, h({
                        key: "key_".concat(e.path + e.name),
                        data: e,
                        disabledPaths: i,
                        onSelectFolder: r,
                        overlayContainer: s
                    }, d))
                }))
            }
            return t.propTypes = {
                isImplicit: r().bool,
                onSelectFolder: r().func,
                folderPaths: r().arrayOf(r().string),
                folderData: r().arrayOf(r().object),
                title: r().string,
                selectedPath: r().string,
                disabled: r().bool,
                overlayContainer: r().element.isRequired
            },
            t.defaultProps = {
                isImplicit: !1,
                onSelectFolder: function() {},
                folderPaths: [],
                folderData: [],
                title: "",
                selectedPath: null,
                disabled: !1
            },
            t
        };
        function b(e) {
            var t = e.data
              , n = e.disabledPaths
              , i = e.onSelectFolder
              , r = e.overlayContainer
              , d = v(e, m)
              , u = d.selectedPath
              , y = d.onSelect
              , E = t.name
              , w = t.subfolders
              , g = t.path
              , C = t.type
              , S = E;
            C && (S = C === s.S.VIRTUAL ? (0,
            c.t)("mail.folder.DEFAULT_FOLDERLIST_TITLE") : (0,
            c.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(C)));
            var A = C === (s.S.VIRTUAL && !w) || n.includes(g);
            return w && w.length ? a.createElement(o.Z, h({}, d, {
                eventKey: g,
                key: "key_".concat(E),
                onSelect: function(e, t) {
                    if (t.target === t.currentTarget && e && i(e),
                    !A)
                        return !1;
                    y(e, t)
                },
                title: S,
                disabled: A,
                active: g === u,
                showSubWhenDisabled: "true",
                overlayContainer: r,
                className: "ow-MailFolderMenuTree-item",
                "aria-label": S,
                "aria-disabled": A
            }), w.map(function(e) {
                return b(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? f(Object(n), !0).forEach(function(t) {
                            p(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({
                    data: e,
                    disabledPaths: n,
                    onSelectFolder: i,
                    overlayContainer: r
                }, d))
            })) : (S != (0,
            c.t)("mail.folder.DEFAULT_FOLDERLIST_TITLE") || !w || 0 != w.length) && a.createElement(l.Z, h({}, d, {
                eventKey: g,
                key: "key_".concat(E),
                active: g === u,
                disabled: A,
                onSelect: function(e, t) {
                    i(g),
                    y(e, t)
                },
                "aria-label": S,
                "aria-disabled": A
            }), S)
        }
        b.propTypes = {
            onSelectFolder: r().func,
            disabledPaths: r().arrayOf(r().string),
            data: r().shape(r().object),
            overlayContainer: r().element
        },
        b.defaultProps = {
            onSelectFolder: function() {},
            disabledPaths: [],
            data: {},
            overlayContainer: void 0
        },
        t.Z = y
    },
    92915: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return pt
            }
        });
        var a = n(87401)
          , i = n(12674)
          , r = n(23398)
          , o = n.n(r)
          , l = n(80991)
          , c = n.n(l)
          , s = n(43779)
          , d = n.n(s)
          , u = n(32081)
          , m = n(80110)
          , f = n(43178)
          , p = n(41977)
          , h = n(16083)
          , v = n(47957)
          , y = n.n(v)
          , b = n(23586)
          , E = n(99688)
          , w = n(85608)
          , g = n(74494)
          , C = n(96744)
          , S = n(45857)
          , A = n(93610)
          , O = n(63205)
          , T = n(9224)
          , P = n(94165)
          , I = n(69218)
          , k = n(83416);
        function N(e) {
            "@babel/helpers - typeof";
            return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function R(e, t) {
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
        function D(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? R(Object(n), !0).forEach(function(t) {
                    _(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function _(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== N(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var a = n.call(e, t || "default");
                        if ("object" !== N(a))
                            return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === N(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var M = (0,
        h.$j)(function(e, t) {
            var n = (0,
            C.DU)(e)[0]
              , a = t.mailSummary;
            if (!a)
                return {};
            var i = a.part
              , r = a.uid
              , o = a.folderPath
              , l = a.flags && a.flags.seen
              , c = a.flags && a.flags.junk || "junk" === (0,
            C.wP)(a.folderPath)(e)
              , s = (0,
            C.YQ)(e)
              , d = a.flags && a.flags.flagged
              , u = (0,
            g.edp)(e)
              , m = (0,
            C.Gt)(e)
              , f = [a.folderPath]
              , p = (0,
            g.$_Z)(e)
              , h = (0,
            S.hL)(e)
              , v = h.email
              , b = (0,
            g.Ix2)(P.PG.MAIL_FORWARD_TYPE)(e) || P.Sv.INLINE
              , E = a.from && a.from.address === h.email
              , w = !("" === (0,
            S.F9)(e))
              , O = [{
                uid: r,
                folderPath: o
            }]
              , T = (0,
            C.qs)(O)(e)[0]
              , N = !1
              , R = void 0;
            return T && (0,
            k.Z)("mail.checkCertificateInfo.enabled") && (N = !0 === (null === T || void 0 === T ? void 0 : T.certmailReceipt) || !0 === (null === T || void 0 === T ? void 0 : T.certmailTransport)) && (R = null === T || void 0 === T ? void 0 : T.signInfo),
            {
                part: i,
                junk: c,
                read: l,
                flagged: d,
                isSelf: E,
                folderData: u,
                folderPaths: f,
                forwardType: b,
                currentCategory: p,
                accountEmail: v,
                isExternalAccount: w,
                cancelSendInProgress: (0,
                g.EMs)(e),
                disbleEmailOperations: !y()(a, "from.address", ""),
                selectedMailId: (0,
                I.Gw)(e),
                accountInfo: h,
                mailFilter: (0,
                S.BI)(e),
                data: (0,
                A.B)(e),
                layout: s,
                index: n,
                isCertmail: N,
                signInfo: R,
                moveTofolderData: m
            }
        }, function(e, t) {
            var n = t.previewInstance
              , a = n.length > 1 ? n : void 0;
            return {
                onMarkAsSpam: function() {
                    e((0,
                    b.XLE)([t.mailSummary], !0, n))
                },
                onMarkAsPhishing: function() {
                    e((0,
                    b.chr)([t.mailSummary], !0, n))
                },
                onMarkAsNotSpam: function() {
                    e((0,
                    b.XLE)([t.mailSummary], !1, n))
                },
                onMarkAsRead: function() {
                    e((0,
                    b.t8d)([t.mailSummary], !0))
                },
                onMarkAsUnread: function() {
                    e((0,
                    b.t8d)([t.mailSummary], !1))
                },
                onMarkAsFlag: function() {
                    e((0,
                    b.W5e)([t.mailSummary], !0))
                },
                onClearFlag: function() {
                    e((0,
                    b.W5e)([t.mailSummary], !1))
                },
                onViewSource: function(n) {
                    return e((0,
                    b.tBo)(t.mailSummary, n))
                },
                onDelete: function(a) {
                    e((0,
                    b.xwH)({
                        summaries: [t.mailSummary],
                        previewInstance: n,
                        actionSource: P.FX.PREVIEW_DROPDOWN
                    }, a))
                },
                onRefresh: function() {
                    e((0,
                    b.jKf)())
                },
                onCreateGroup: function() {
                    return e((0,
                    b.sSU)(t.mailSummary))
                },
                onPrintMail: function(n) {
                    e((0,
                    b.gmz)([t.mailSummary], n))
                },
                onSaveEMLFile: function() {
                    return e((0,
                    b.smg)(t.mailSummary, n))
                },
                onInviteToEvent: function(n) {
                    var a = []
                      , i = t.mailSummary.recipients
                      , r = i.to
                      , o = void 0 === r ? [] : r
                      , l = i.cc
                      , c = void 0 === l ? [] : l
                      , s = t.mailSummary.from
                      , d = o.concat(c);
                    d.push(s),
                    (d = d.filter(function(e) {
                        return e.address !== n
                    })).map(function(e) {
                        var t = e.name
                          , n = e.address;
                        return a.push({
                            commonName: t,
                            address: n,
                            status: "needsAction",
                            type: "internal"
                        }),
                        {}
                    }),
                    e((0,
                    w.yM)(void 0, void 0, a))
                },
                onSelectFolder: function(a) {
                    var i = t.mailSummary
                      , r = i.uid
                      , o = i.folderPath;
                    e((0,
                    b.CjM)({
                        uidInfo: [{
                            uid: r,
                            folderPath: o
                        }],
                        folderPath: a
                    }, n))
                },
                onMoveCategory: function(n) {
                    e((0,
                    b.OSr)([t.mailSummary], n))
                },
                onReply: function() {
                    e((0,
                    E.U4)(t.mailSummary, a))
                },
                onReplyAll: function() {
                    e((0,
                    E.B$)(t.mailSummary, a))
                },
                onForward: function() {
                    e((0,
                    E.Gi)(t.mailSummary, a))
                },
                onForwardInline: function() {
                    e((0,
                    E.Gi)(t.mailSummary, a))
                },
                onForwardAttachment: function() {
                    e((0,
                    E.ED)(t.mailSummary, a))
                },
                onSafeSender: function() {
                    e((0,
                    b.fe0)([t.mailSummary.from.address], n))
                },
                onBlockSender: function() {
                    e((0,
                    b.tBq)([t.mailSummary.from.address], n))
                },
                onBlockDomain: function() {
                    e((0,
                    b.H__)([t.mailSummary.from.address], n))
                },
                onBlockSenderAndMarkAsSpam: function() {
                    e((0,
                    b.uhO)([t.mailSummary], !0, n, [t.mailSummary.from.address]))
                },
                onBlockDomainAndMarkAsSpam: function() {
                    e((0,
                    b.mIj)([t.mailSummary], !0, n, [t.mailSummary.from.address]))
                },
                onSafesenderAndMarkAsNotSpam: function() {
                    e((0,
                    b.WfM)([t.mailSummary], !1, n, [t.mailSummary.from.address]))
                },
                onSave: function() {
                    return e(O.lF.apply(void 0, arguments))
                },
                onBack: function(e) {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }
                    ,
                    t
                }(function(t) {
                    e((0,
                    T.tC)(t)),
                    onBack && onBack(t)
                })
            }
        }, function(e, t, n) {
            var a = t.onBack
              , i = D(D({}, t), {}, {
                onBack: function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }
                    ,
                    t
                }(function() {
                    a(selectedSettings.split("#")[0])
                })
            });
            return Object.assign({}, n, e, i)
        })(p.Z)
          , L = n(67064)
          , j = n.n(L)
          , F = n(10091)
          , x = n(70224)
          , B = n(54726)
          , Z = n(88307)
          , V = n(83853)
          , W = n(84987)
          , U = n(40944)
          , H = n(4446);
        function K(e) {
            "@babel/helpers - typeof";
            return (K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function G(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, z(a.key), a)
            }
        }
        function z(e) {
            var t = function(e, t) {
                if ("object" !== K(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== K(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === K(t) ? t : String(t)
        }
        function Y(e, t) {
            return (Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, a = Q(e);
                if (t) {
                    var i = Q(this).constructor;
                    n = Reflect.construct(a, arguments, i)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === K(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return q(e)
                }(this, n)
            }
        }
        function q(e) {
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
        var J = P.Kf.GET
          , $ = P.Kf.NEW
          , ee = P.Kf.VISIT
          , te = P.Kf.COPY
          , ne = P.Kf.ADD_TO
          , ae = P.sH.REQUIRED_FIELD_DEFAULT
          , ie = P.sH.TYPE_FILTER_CONTACT
          , re = P.sH.SORT_FIRSTNAME_ASC
          , oe = P.sH.SORT_LASTNAME_ASC
          , le = function(e) {
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
            }(n, a.PureComponent);
            var t = X(n);
            function n(e) {
                var a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (a = t.call(this, e)).state = {
                    showContactPicker: !1
                },
                a.handleClick = a.handleClick.bind(q(a)),
                a.handleClickForCopy = a.handleClickForCopy.bind(q(a)),
                a.handleSelect = a.handleSelect.bind(q(a)),
                a.handlePickerSelect = a.handlePickerSelect.bind(q(a)),
                a.handlePickerCancel = a.handlePickerCancel.bind(q(a)),
                a
            }
            return function(e, t, n) {
                t && G(e.prototype, t),
                n && G(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleClickForCopy",
                value: function(e, t) {
                    t && t.preventDefault();
                    var n = this.props
                      , a = n.email
                      , i = n.onClick;
                    try {
                        var r = document.createElement("input");
                        r.value = a,
                        document.body.appendChild(r),
                        r.select(),
                        document.execCommand("copy"),
                        document.body.removeChild(r),
                        i()
                    } catch (e) {
                        i()
                    }
                }
            }, {
                key: "handleClick",
                value: function(e) {
                    e.stopPropagation(),
                    e.preventDefault(),
                    this.props.onClick()
                }
            }, {
                key: "handleSelect",
                value: function(e) {
                    var t = this.props
                      , n = t.email
                      , a = t.onSelect
                      , i = t.onSwitchApp;
                    e === J ? this.setState({
                        showContactPicker: !0
                    }) : e === $ ? (i(P.lw.CONTACTS),
                    a(e, n)) : (i(P.lw.CONTACTS),
                    a(ee, n, e))
                }
            }, {
                key: "handlePickerSelect",
                value: function(e) {
                    this.setState({
                        showContactPicker: !1
                    });
                    var t = this.props
                      , n = t.email
                      , a = t.onPickerSelect
                      , i = t.onSwitchApp;
                    e.length && (i(P.lw.CONTACTS),
                    a(ne, n, e))
                }
            }, {
                key: "handlePickerCancel",
                value: function() {
                    this.setState({
                        showContactPicker: !1
                    })
                }
            }, {
                key: "renderLoadingItems",
                value: function() {
                    return this.props.isFetchingData ? a.createElement(x.Z, {
                        className: "ow-contacts-lookup-spinner"
                    }, a.createElement(m.Z, null)) : null
                }
            }, {
                key: "renderDataItems",
                value: function() {
                    var e = this
                      , t = this.props.data.map(function(t) {
                        return a.createElement(x.Z, {
                            eventKey: t,
                            onSelect: e.handleSelect,
                            onClick: e.handleClick
                        }, a.createElement("div", {
                            className: "ow-contacts-lookup-item"
                        }, a.createElement(V.Z, {
                            className: "ow-contacts-lookup-item-avatar",
                            addressBookId: t.addressBookId,
                            contactId: t.id,
                            hasPhoto: t.hasPhoto,
                            editBtnDisplayed: !1
                        }), a.createElement("div", {
                            className: "ow-contacts-lookup-item-title"
                        }, (0,
                        U._t)(t).title || t.displayName)))
                    });
                    return t.length ? t : null
                }
            }, {
                key: "renderDivider",
                value: function() {
                    var e = this.props
                      , t = e.isFetchingData;
                    return e.data.length || t ? a.createElement(x.Z, {
                        divider: !0
                    }) : null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.contactSort
                      , i = t.windowId
                      , r = t.previewInstance
                      , o = this.state.showContactPicker;
                    return [a.createElement(B.Z, {
                        className: "ow-contacts-lookup"
                    }, this.renderLoadingItems(), this.renderDataItems(), this.renderDivider(), a.createElement(x.Z, {
                        onSelect: this.handleSelect,
                        onClick: this.handleClick,
                        onKeyDown: function(t) {
                            t.key === P.BY.ENTERKEY && (e.handleClick,
                            setTimeout(function() {
                                (0,
                                H.kWv)(".ow-contacts-ContactForm-panel-upper")
                            }, 100))
                        },
                        eventKey: $
                    }, (0,
                    W.t)("mail.recipient.ADD_NEW_CONTACTS")), a.createElement(x.Z, {
                        onSelect: this.handleSelect,
                        onClick: this.handleClick,
                        onKeyDown: function(t) {
                            t.key === P.BY.ENTERKEY && (e.handleClick,
                            setTimeout(function() {
                                (0,
                                H.R8V)(".ow-contacts-picker .ow-icon-close", "button")
                            }, 50))
                        },
                        eventKey: J
                    }, (0,
                    W.t)("mail.recipient.ADD_TO_CONTACT")), a.createElement(x.Z, {
                        onSelect: this.handleClickForCopy,
                        onClick: this.handleClickForCopy,
                        eventKey: te
                    }, (0,
                    W.t)("mail.recipient.COPY_EMAIL_ADDRESS"))), o && a.createElement(Z.Z, {
                        windowId: i || r,
                        onSelect: this.handlePickerSelect,
                        onCancel: this.handlePickerCancel,
                        requiredField: ae,
                        typeFilter: ie,
                        enableSubList: !1,
                        renderItem: function(e) {
                            return a.createElement("div", {
                                className: "ow-contacts-picker-listItem"
                            }, a.createElement("div", null, (0,
                            U._t)(e, {
                                sort: n
                            }).title || e.displayName))
                        }
                    })]
                }
            }]),
            n
        }();
        le.defaultProps = {
            email: "",
            data: [],
            isFetchingData: !1,
            contactSort: oe,
            onSelect: function() {},
            onClick: function() {},
            onPickerSelect: function() {},
            onSwitchApp: function() {}
        },
        le.propTypes = {
            email: r.string,
            data: (0,
            r.arrayOf)((0,
            r.shape)({})),
            isFetchingData: r.bool,
            contactSort: (0,
            r.oneOf)([re, oe]),
            onSelect: r.func,
            onClick: r.func,
            onPickerSelect: r.func,
            onSwitchApp: r.func
        };
        var ce = le
          , se = n(46095)
          , de = n(27093)
          , ue = n(79351)
          , me = n(81793)
          , fe = n(63482)
          , pe = (0,
        h.$j)(function(e) {
            return {
                data: (0,
                me.qo)(e),
                isFetchingData: (0,
                me.M3)(e),
                contactSort: (0,
                fe.Mk)(e)
            }
        }, function(e) {
            return {
                onSelect: (0,
                se.DE)(ue.Ve, e),
                onPickerSelect: (0,
                se.DE)(ue.Ve, e),
                onSwitchApp: (0,
                se.DE)(de.switchApp, e)
            }
        })(ce);
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
        function ve(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, ye(a.key), a)
            }
        }
        function ye(e) {
            var t = function(e, t) {
                if ("object" !== he(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== he(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === he(t) ? t : String(t)
        }
        function be(e, t) {
            return (be = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ee(e) {
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
                var n, a = ge(e);
                if (t) {
                    var i = ge(this).constructor;
                    n = Reflect.construct(a, arguments, i)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === he(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return we(e)
                }(this, n)
            }
        }
        function we(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ge(e) {
            return (ge = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                t && be(e, t)
            }(n, a.Component);
            var t = Ee(n);
            function n(e) {
                var a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (a = t.call(this, e)).state = {
                    open: !1
                },
                a.handleToggle = a.handleToggle.bind(we(a)),
                a
            }
            return function(e, t, n) {
                t && ve(e.prototype, t),
                n && ve(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleToggle",
                value: function(e) {
                    var t = this.props
                      , n = t.address
                      , a = t.onMailAddressClick;
                    this.setState({
                        open: e
                    }),
                    e && a(n)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.displayName
                      , i = t.className
                      , r = t.address
                      , o = this.state.open;
                    return a.createElement("div", {
                        role: P.HB.PRESENTATION,
                        className: j()(i, "ow-MailPreviewAddress"),
                        onClick: function(e) {
                            e.stopPropagation()
                        }
                    }, a.createElement(F.Z.Dropdown, {
                        open: o,
                        title: a.createElement("span", null, n, a.createElement(u.Z, {
                            name: "mailAddress-add"
                        })),
                        "aria-label": n,
                        noCaret: !0,
                        onClick: function(e) {
                            e.stopPropagation()
                        },
                        onToggle: this.handleToggle
                    }, a.createElement(pe, {
                        previewInstance: this.props.previewInstance,
                        email: r,
                        onClick: function() {
                            return e.handleToggle(!1)
                        }
                    })))
                }
            }]),
            n
        }();
        Ce.propTypes = {
            displayName: o().string,
            address: o().string,
            onMailAddressClick: o().func,
            className: o().string
        },
        Ce.defaultProps = {
            displayName: "",
            address: "",
            className: "",
            onMailAddressClick: function() {}
        };
        var Se = n(55086)
          , Ae = n(76634)
          , Oe = n(90656)
          , Te = n(7179);
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
        function Ie(e) {
            return function(e) {
                if (Array.isArray(e))
                    return ke(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return ke(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return ke(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ke(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function Ne(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, Re(a.key), a)
            }
        }
        function Re(e) {
            var t = function(e, t) {
                if ("object" !== Pe(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== Pe(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Pe(t) ? t : String(t)
        }
        function De(e, t) {
            return (De = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function _e(e) {
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
                var n, a = Le(e);
                if (t) {
                    var i = Le(this).constructor;
                    n = Reflect.construct(a, arguments, i)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Pe(t) || "function" == typeof t))
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
        function Le(e) {
            return (Le = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var je = function(e) {
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
            }(n, a.PureComponent);
            var t = _e(n);
            function n(e) {
                var a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (a = t.call(this, e)).handleRSVP = a.handleRSVP.bind(Me(a)),
                a.drawDayTime = a.drawDayTime.bind(Me(a)),
                a.arrangeEventsLayout = a.arrangeEventsLayout.bind(Me(a)),
                a.getEventPosition = a.getEventPosition.bind(Me(a)),
                a.renderInvitationHeader = a.renderInvitationHeader.bind(Me(a)),
                a.renderInvitationTime = a.renderInvitationTime.bind(Me(a)),
                a.renderInvitationLocation = a.renderInvitationLocation.bind(Me(a)),
                a.renderInvitationParticipants = a.renderInvitationParticipants.bind(Me(a)),
                a.renderEvtDesc = a.renderEvtDesc.bind(Me(a)),
                a.renderInvitationToolbar = a.renderInvitationToolbar.bind(Me(a)),
                a.renderCancelEvtOpts = a.renderCancelEvtOpts.bind(Me(a)),
                a.renderInvitationEventSlot = a.renderInvitationEventSlot.bind(Me(a)),
                a.renderInvitationScheduleAllDay = a.renderInvitationScheduleAllDay.bind(Me(a)),
                a.state = {
                    displaySpinner: !1,
                    updateCanvas: !1
                },
                a
            }
            return function(e, t, n) {
                t && Ne(e.prototype, t),
                n && Ne(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.detail.attachments
                      , n = e.handleGetEvents
                      , a = this.props.detail["X-CP-Cal-Notification"]
                      , i = t.map(function(e) {
                        return e.smartObject
                    }).find(function(e) {
                        return "Event" === e["@type"]
                    })
                      , r = window.TimeUtil.parseInTimezone(i.startMillis)
                      , o = window.TimeUtil.parseInTimezone(i.endMillis);
                    a && n(r, o),
                    this.drawDayTime()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function() {
                    this.setState({
                        displaySpinner: !1
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.drawDayTime()
                }
            }, {
                key: "getEventPosition",
                value: function(e) {
                    var t = window.TimeUtil
                      , n = t.getTimeZoneMoment(e.startMillis)
                      , a = t.parseInTimezone(e.endMillis)
                      , i = .5 * (60 * n.hours() + n.minutes());
                    return n.isSame(a, "day") ? {
                        x: 60,
                        y: i,
                        h: .5 * (60 * a.hours() + a.minutes()) - i
                    } : {
                        x: 60,
                        y: i,
                        h: 719.5 - i
                    }
                }
            }, {
                key: "getDisplayTime",
                value: function(e, t, n) {
                    var a = window.TimeUtil;
                    return e.isSame(t, "day") ? "".concat(TimeUtil.getTimeParseInt24to12(a.getShortTime(e)), " - ").concat(TimeUtil.getTimeParseInt24to12(a.getShortTime(t)), " ").concat(n) : "".concat(TimeUtil.getTimeParseInt24to12(TimeUtil.getTimeParseInt24to12(a.getShortDateTime(e))), " - ").concat(TimeUtil.getTimeParseInt24to12(TimeUtil.getTimeParseInt24to12(a.getShortDateTime(t))), " ").concat(n)
                }
            }, {
                key: "drawDayTime",
                value: function() {
                    if (this.canvas) {
                        var e = this.context.isRtl
                          , t = this.props.detail.attachments.map(function(e) {
                            return e.smartObject
                        }).find(function(e) {
                            return "Event" === e["@type"]
                        })
                          , n = this.canvas.getContext("2d");
                        n.restore(),
                        n.clearRect(0, 0, this.canvas.width, this.canvas.height),
                        n.beginPath();
                        var a = this.canvas.width;
                        n.lineWidth = 1,
                        n.fillStyle = "#cccccc",
                        n.font = "12px Arial";
                        var i = window.TimeUtil.getTimeZoneMoment();
                        i.startOf("hour");
                        for (var r = 1; r < 25; r += 1) {
                            var o = .5 * r * 60;
                            n.fillText(window.TimeUtil.getShortTime(i.hours(r)), e ? a - 5 : 5, o),
                            n.moveTo(e ? 0 : 50, o),
                            n.lineTo(e ? a - 50 : a, o)
                        }
                        if (n.strokeStyle = "#f4f5f6",
                        n.stroke(),
                        this.setState({
                            updateCanvas: !0
                        }),
                        !t.allDay) {
                            var l = this.getEventPosition(t).y;
                            this.schedule.scrollTop = Math.max(0, l - 100)
                        }
                    }
                }
            }, {
                key: "arrangeEventsLayout",
                value: function(e) {
                    for (var t = this, n = [], a = function() {
                        for (var a = e[i], r = t.getEventPosition(a), o = r.x, l = r.y, c = r.h, s = 0, d = 0, u = 0; u < n.length; u += 1) {
                            var m = n[u].filter(function(e) {
                                return e.y + e.h > l && l + c > e.y
                            });
                            if (m.forEach(function(e) {
                                e.conflicts += 1
                            }),
                            0 === m.length)
                                break;
                            d += 1,
                            s = u + 1
                        }
                        n.length === s && n.push([]),
                        n[s].push({
                            x: o,
                            y: l,
                            h: c,
                            ev: a,
                            column: s,
                            conflicts: d,
                            cross: 1
                        })
                    }, i = 0; i < e.length; i += 1)
                        a();
                    for (var r = function(e) {
                        for (var t = n[e], a = function(a) {
                            var i = n[a];
                            t.forEach(function(t) {
                                0 === i.filter(function(e) {
                                    return e.y + e.h > t.y && t.y + t.h > e.y
                                }).length && a - e === t.cross && (t.cross += 1)
                            })
                        }, i = e + 1; i < n.length; i += 1)
                            a(i)
                    }, o = 0; o < n.length; o += 1)
                        r(o);
                    return n
                }
            }, {
                key: "handleRSVP",
                value: function(e, t) {
                    var n = this
                      , a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                      , i = this.props
                      , r = i.detail
                      , o = i.handleRSVP
                      , l = i.handleExternalDomainInvite;
                    a ? o(r, e, t) : l(e, r, t),
                    setTimeout(function() {
                        n.setState({
                            displaySpinner: !0
                        })
                    }, 10)
                }
            }, {
                key: "renderInvitationHeader",
                value: function() {
                    var e = window.TimeUtil
                      , t = this.props.detail.attachments.map(function(e) {
                        return e.smartObject
                    }).find(function(e) {
                        return "Event" === e["@type"]
                    })
                      , n = e.getTimeZoneMoment(t.startMillis);
                    return a.createElement("div", {
                        className: "ow-mail-Invitation-header"
                    }, a.createElement(u.Z, {
                        name: "calendar"
                    }), a.createElement("span", {
                        className: "ow-mail-Invitation-headerText"
                    }, a.createElement("span", {
                        className: "ow-mail-Invitation-date"
                    }, e.getShortDate(n)), a.createElement("span", {
                        className: "ow-mail-Invitation-weekday"
                    }, n.format("dddd"))))
                }
            }, {
                key: "renderInvitationTime",
                value: function() {
                    var e = this.props.detail.attachments.map(function(e) {
                        return e.smartObject
                    }).find(function(e) {
                        return "Event" === e["@type"]
                    })
                      , t = window.TimeUtil
                      , n = t.getTimeZoneMoment(e.startMillis)
                      , i = t.getTimeZoneMoment(e.endMillis)
                      , r = t.getSelectTimezone().name;
                    return a.createElement("div", {
                        className: "ow-mail-Invitation-time"
                    }, a.createElement("span", {
                        className: "ow-mail-Invitation-left"
                    }, (0,
                    W.t)("mail.invitationTemplate.TIME")), a.createElement("div", {
                        className: "ow-mail-Invitation-right"
                    }, e.allDay ? (0,
                    W.t)("calendar.common.LABEL_ALLDAY") : this.getDisplayTime(n, i, r), e.recurrence && a.createElement("br", null), e.recurrence && (0,
                    Ae.tK)(e.recurrence, n).label))
                }
            }, {
                key: "renderInvitationLocation",
                value: function() {
                    var e = this.props.detail.attachments.map(function(e) {
                        return e.smartObject
                    }).find(function(e) {
                        return "Event" === e["@type"]
                    });
                    return e.location && a.createElement("div", {
                        className: "ow-mail-Invitation-location"
                    }, a.createElement("span", {
                        className: "ow-mail-Invitation-left"
                    }, (0,
                    W.t)("mail.invitationTemplate.LOCATION")), a.createElement("div", {
                        className: "ow-mail-Invitation-right"
                    }, e.location))
                }
            }, {
                key: "renderInvitationParticipants",
                value: function() {
                    var e = this.props.detail.attachments.map(function(e) {
                        return e.smartObject
                    }).find(function(e) {
                        return "Event" === e["@type"]
                    })
                      , t = e.organizer
                      , n = e.xproperties;
                    return a.createElement("div", {
                        className: "ow-mail-Invitation-participants"
                    }, a.createElement("span", {
                        className: "ow-mail-Invitation-left"
                    }, (0,
                    W.t)("mail.invitationTemplate.PARTICIPANTS")), a.createElement("div", {
                        className: "ow-mail-Invitation-right"
                    }, n && (n["X-OWNER-NAME"] || n["X-OWNER-ID"]) && a.createElement("span", null, "".concat(n["X-OWNER-NAME"] || n["X-OWNER-ID"], " - ").concat((0,
                    W.t)("calendar.editorView.attendee.status.owner"))), t && a.createElement("span", null, "".concat(t.commonName || t.address, " - ").concat((0,
                    W.t)("calendar.editorView.attendee.status.organizer"))), e.attendees && e.attendees.map(function(e) {
                        return a.createElement("span", null, "".concat(e.commonName || e.address, " - ").concat((0,
                        W.t)("calendar.editorView.attendee.status")[e.status]))
                    })))
                }
            }, {
                key: "renderEvtDesc",
                value: function() {
                    var e = this.props.detail
                      , t = e.attachments
                      , n = e.body
                      , i = t.map(function(e) {
                        return e.smartObject
                    }).find(function(e) {
                        return "Event" === e["@type"]
                    })
                      , r = i.xproperties
                      , o = "";
                    if (!!r && Object.keys(r).filter(function(e) {
                        return "X-MICROSOFT-LOCATIONDISPLAYNAME" === e
                    }) && "html" === (null === n || void 0 === n ? void 0 : n.format)) {
                        var l = n.content.split('<div class="WordSection1">')[1];
                        o = l ? '<div class="WordSection1">'.concat(l) : null === n || void 0 === n ? void 0 : n.content
                    } else
                        o = (0,
                        Te.hG)(i.description);
                    return a.createElement("div", {
                        className: "ow-mail-Invitation-desc"
                    }, a.createElement("span", {
                        className: "ow-mail-Invitation-left"
                    }, (0,
                    W.t)("mail.invitationTemplate.DESCRIPTION")), a.createElement("div", {
                        className: "ow-mail-Invitation-right",
                        dangerouslySetInnerHTML: {
                            __html: o
                        }
                    }))
                }
            }, {
                key: "renderInvitationToolbar",
                value: function(e) {
                    var t = this
                      , n = this.props
                      , i = n.detail
                      , r = n.user
                      , o = i.attachments.map(function(e) {
                        return e.smartObject
                    }).find(function(e) {
                        return "Event" === e["@type"]
                    })
                      , l = o.attendees && o.attendees.find(function(e) {
                        return e.address === r.email
                    })
                      , c = l && l.status;
                    return a.createElement(F.Z, {
                        className: "ow-calendar-Invitation-toolbar"
                    }, a.createElement(F.Z.Button, {
                        className: "ow-attendeeStatus-button ow-calendar-attendStatus-accept".concat("accepted" === c ? " ow-calendar-attendStatus-selected" : ""),
                        iconName: "accepted",
                        onClick: function() {
                            return t.handleRSVP(o, "accepted", e)
                        }
                    }, a.createElement("span", {
                        className: "ow-button-text"
                    }, "accepted" === c ? (0,
                    W.t)("calendar.editorView.attendee.status.accepted") : (0,
                    W.t)("calendar.editorView.attendee.status.accept"))), a.createElement(F.Z.Button, {
                        className: "ow-attendeeStatus-button ow-calendar-attendStatus-tentative".concat("tentative" === c ? " ow-calendar-attendStatus-selected" : ""),
                        iconName: "tentative",
                        onClick: function() {
                            return t.handleRSVP(o, "tentative", e)
                        }
                    }, a.createElement("span", {
                        className: "ow-button-text"
                    }, (0,
                    W.t)("calendar.editorView.attendee.status.tentative"))), a.createElement(F.Z.Button, {
                        className: "ow-attendeeStatus-button ow-calendar-attendStatus-decline".concat("declined" === c ? " ow-calendar-attendStatus-selected" : ""),
                        iconName: "declined",
                        onClick: function() {
                            return t.handleRSVP(o, "declined", e)
                        }
                    }, a.createElement("span", {
                        className: "ow-button-text"
                    }, "declined" === c ? (0,
                    W.t)("calendar.editorView.attendee.status.declined") : (0,
                    W.t)("calendar.editorView.attendee.status.decline"))))
                }
            }, {
                key: "renderCancelEvtOpts",
                value: function() {
                    var e = this
                      , t = this.props.detail.attachments.map(function(e) {
                        return e.smartObject
                    }).find(function(e) {
                        return "Event" === e["@type"]
                    });
                    return a.createElement("div", {
                        className: "ow-mail-Invitation-cancel-event-opts"
                    }, a.createElement("span", {
                        className: "ow-mail-Invitation-left"
                    }, (0,
                    W.t)("mail.invitationTemplate.DELETE_COPY")), a.createElement("div", {
                        className: "ow-mail-Invitation-right"
                    }, a.createElement("span", null, a.createElement("a", {
                        role: P.HB.PRESENTATION,
                        className: "ow-mail-Invitation-delete-cancel-event-btn",
                        onClick: function() {
                            return e.handleRSVP(t, "declined")
                        }
                    }, (0,
                    W.t)("mail.invitationTemplate.DELETE")))))
                }
            }, {
                key: "renderInvitationEventSlot",
                value: function(e) {
                    var t = this.props.detail.attachments.map(function(e) {
                        return e.smartObject
                    }).find(function(e) {
                        return "Event" === e["@type"]
                    })
                      , n = this.getEventPosition(t)
                      , i = this.context.isRtl;
                    return a.createElement("div", {
                        className: "ow-mail-Invitation-event-slot",
                        style: {
                            position: "absolute",
                            left: i ? "auto" : "".concat(n.x - 2, "px"),
                            right: i ? "".concat(n.x - 2, "px") : "auto",
                            top: "".concat(n.y - 2, "px"),
                            height: "".concat(n.h + 4, "px"),
                            width: "".concat(e - 60 - 12, "px")
                        }
                    })
                }
            }, {
                key: "renderInvitationScheduleAllDay",
                value: function() {
                    var e = this.props
                      , t = e.detail
                      , n = e.getEvents
                      , i = e.calColors
                      , r = t.attachments.map(function(e) {
                        return e.smartObject
                    }).find(function(e) {
                        return "Event" === e["@type"]
                    })
                      , o = window.TimeUtil
                      , l = n(o.getTimeZoneMoment(r.startMillis), o.getTimeZoneMoment(r.endMillis));
                    return a.createElement("div", {
                        className: "ow-mail-Invitation-schedule-allday"
                    }, a.createElement("span", {
                        className: "ow-mail-Invitation-allday-text"
                    }, (0,
                    W.t)("calendar.editorView.LABEL_ALLDAY")), a.createElement("div", {
                        className: "ow-mail-Invitation-allday-events"
                    }, r.allDay && a.createElement("div", {
                        className: "ow-mail-Invitation-allDay-slot"
                    }), l.filter(function(e) {
                        return e.allDay
                    }).map(function(e) {
                        return a.createElement("div", {
                            className: "ow-mail-Invitation-allday-event",
                            style: {
                                backgroundColor: i[e.calendarId]
                            }
                        }, e.summary)
                    })))
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n = this, i = this.props, r = i.detail, o = i.getEvents, l = i.calColors, c = r.attachments, s = r.from.address, d = !!r["X-CP-Cal-Notification"], u = null === (e = r["X-CP-Cal-Notification"]) || void 0 === e ? void 0 : e.includes("type=CANCEL_EVENT");
                    !u && c && (u = c.some(function(e) {
                        var t, n;
                        return (null === e || void 0 === e ? void 0 : null === (t = e.contentType) || void 0 === t ? void 0 : null === (n = t.toLowerCase()) || void 0 === n ? void 0 : n.indexOf("cancel")) > -1
                    }));
                    var f = c && c.some(function(e) {
                        var t, n, a;
                        return (null === e || void 0 === e ? void 0 : null === (t = e.contentType) || void 0 === t ? void 0 : t.indexOf("REQUEST")) > -1 || (!d && ((null === e || void 0 === e ? void 0 : null === (n = e.contentType) || void 0 === n ? void 0 : n.indexOf("REPLY")) > -1 || null === e || void 0 === e || null === (a = e.contentType) || void 0 === a || a.indexOf("CANCEL")),
                        !1)
                    })
                      , p = f || u
                      , h = !(!p || !r["X-CP-Cal-Notification"])
                      , v = c.map(function(e) {
                        return e.smartObject
                    }).find(function(e) {
                        return "Event" === e["@type"]
                    })
                      , b = window.TimeUtil
                      , E = b.getTimeZoneMoment(v.startMillis)
                      , w = b.getTimeZoneMoment(v.endMillis)
                      , g = o(E, w)
                      , C = this.arrangeEventsLayout(g.filter(function(e) {
                        return !e.allDay
                    }))
                      , S = C.length
                      , A = (t = []).concat.apply(t, Ie(C))
                      , O = v.attendees && v.attendees.find(function(e) {
                        return e.address === s
                    })
                      , T = this.context.isRtl;
                    return a.createElement("div", {
                        className: "ow-mail-Invitation-wrapper"
                    }, a.createElement(Se.Z, {
                        className: "ow-mail-Invitation-autoSizer",
                        disableHeight: !0,
                        onResize: function() {
                            n.drawDayTime()
                        }
                    }, function(e) {
                        var t = e.width
                          , i = (t > 800 ? 400 : t - 30) - 10
                          , r = Math.floor((i - 60 - 14) / S);
                        return a.createElement("div", {
                            className: "ow-mail-Invitation-content",
                            style: {
                                width: t
                            }
                        }, a.createElement("div", {
                            className: "ow-mail-Invitation-inner"
                        }, n.renderInvitationHeader(), a.createElement("div", {
                            className: "ow-mail-Invitation-body ".concat(t > 800 ? "ow-mail-Invitation-horizontal" : "ow-mail-Invitation-vertical")
                        }, a.createElement("div", {
                            className: "ow-mail-Invitation-info"
                        }, !p && O && !f && a.createElement("div", {
                            className: "ow-mail-Invitation-accepted-desc",
                            title: y()(O, "address", " ")
                        }, (0,
                        Oe.WU)((0,
                        W.t)("mail.invitationTemplate.rsvp_desc")[O.status], O.commonName || O.address)), a.createElement("div", {
                            className: "ow-mail-Invitation-summary"
                        }, v.summary), n.renderInvitationTime(), n.renderInvitationLocation(), n.renderInvitationParticipants(), v.description && n.renderEvtDesc(), u && n.renderCancelEvtOpts(), p && !u && a.createElement("div", {
                            className: "ow-mail-Invitation-going"
                        }, "RSVP:"), p && !u && n.renderInvitationToolbar(h)), p && !u && a.createElement("div", {
                            className: "ow-mail-Invitation-schedule"
                        }, a.createElement("div", {
                            className: "ow-mail-Invitation-schedule-header"
                        }, "".concat((0,
                        W.t)("app.CALENDAR"), " - ").concat(window.TimeUtil.getShortDate(E))), n.renderInvitationScheduleAllDay(), a.createElement("div", {
                            className: "ow-mail-Invitation-schedule-time",
                            ref: function(e) {
                                n.schedule = e
                            }
                        }, a.createElement("canvas", {
                            ref: function(e) {
                                n.canvas = e
                            },
                            width: i,
                            height: 720
                        }), A.map(function(e) {
                            return a.createElement("div", {
                                className: "ow-mail-Invitation-schedule-event",
                                style: {
                                    position: "absolute",
                                    left: T ? "auto" : "".concat(e.x + e.column * r, "px"),
                                    top: "".concat(e.y, "px"),
                                    right: T ? "".concat(e.x + e.column * r, "px") : "auto",
                                    height: "".concat(e.h, "px"),
                                    width: "".concat(e.cross * r - 2, "px"),
                                    backgroundColor: l[e.ev.calendarId]
                                }
                            }, e.ev.summary)
                        }), !v.allDay && n.renderInvitationEventSlot(i))))))
                    }), this.state.displaySpinner && a.createElement(m.Z, null))
                }
            }]),
            n
        }();
        je.contextTypes = {
            isRtl: o().bool
        },
        je.defaultProps = {
            detail: null,
            user: null,
            getEvents: function() {},
            calColors: null,
            handleGetEvents: function() {},
            handleRSVP: function() {}
        },
        je.propTypes = {
            detail: o().shape({}),
            user: o().shape({}),
            getEvents: o().func,
            calColors: o().shape({}),
            handleGetEvents: o().func,
            handleRSVP: o().func
        };
        var Fe = n(77545);
        function xe(e) {
            "@babel/helpers - typeof";
            return (xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Be(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, Ze(a.key), a)
            }
        }
        function Ze(e) {
            var t = function(e, t) {
                if ("object" !== xe(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== xe(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === xe(t) ? t : String(t)
        }
        function Ve(e, t) {
            return (Ve = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function We(e) {
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
                var n, a = He(e);
                if (t) {
                    var i = He(this).constructor;
                    n = Reflect.construct(a, arguments, i)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === xe(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Ue(e)
                }(this, n)
            }
        }
        function Ue(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function He(e) {
            return (He = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Ke = function(e) {
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
                t && Ve(e, t)
            }(n, a.PureComponent);
            var t = We(n);
            function n(e) {
                var a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (a = t.call(this, e)).parseCalendarInfo = a.parseCalendarInfo.bind(Ue(a)),
                a.handleAddCalendar = a.handleAddCalendar.bind(Ue(a)),
                a.renderCalendarSharingDisplay = a.renderCalendarSharingDisplay.bind(Ue(a)),
                a.renderAddCalendarAndRemoveCalendar = a.renderAddCalendarAndRemoveCalendar.bind(Ue(a)),
                a.renderGoToCalendar = a.renderGoToCalendar.bind(Ue(a)),
                a.renderCalendarDesc = a.renderCalendarDesc.bind(Ue(a)),
                a.state = {
                    displaySpinner: !1
                },
                a
            }
            return function(e, t, n) {
                t && Be(e.prototype, t),
                n && Be(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function() {
                    this.setState({
                        displaySpinner: !1
                    })
                }
            }, {
                key: "handleAddCalendar",
                value: function(e) {
                    var t = this;
                    (0,
                    this.props.addSharedCalendar)(e),
                    setTimeout(function() {
                        t.setState({
                            displaySpinner: !0
                        })
                    }, 10)
                }
            }, {
                key: "handleRemoveCalendar",
                value: function(e) {
                    var t = this;
                    (0,
                    this.props.removeSharedCalendar)(e),
                    setTimeout(function() {
                        t.setState({
                            displaySpinner: !0
                        })
                    }, 10)
                }
            }, {
                key: "parseCalendarInfo",
                value: function(e) {
                    return e.split(";").reduce(function(e, t) {
                        var n = t.split("=");
                        return 1 === n.length ? e.notification = n[0] : e[n[0]] = n[1],
                        e
                    }, {})
                }
            }, {
                key: "renderCalendarSharingDisplay",
                value: function() {
                    var e = this.props.detail
                      , t = this.parseCalendarInfo(e["X-CP-Cal-Notification"])
                      , n = t.ownername
                      , i = t.name;
                    return i = i && decodeURI(i).replace(/\+/g, " ").replace(/%2B/gm, "+"),
                    a.createElement("div", {
                        className: "ow-mail-CalendarSharing-header"
                    }, a.createElement(u.Z, {
                        name: "add-cal"
                    }), a.createElement("span", {
                        className: "ow-mail-CalendarSharing-headerText"
                    }, a.createElement("span", {
                        className: "ow-mail-CalendarSharing-name"
                    }, unescape(i)), a.createElement("span", {
                        className: "ow-mail-CalendarSharing-owner"
                    }, (0,
                    Oe.WU)((0,
                    W.t)("mail.shareCalendarTemplate.SHARED_BY"), n))))
                }
            }, {
                key: "renderAddCalendarAndRemoveCalendar",
                value: function() {
                    var e, t, n = this, i = this.props.detail, r = this.parseCalendarInfo(i["X-CP-Cal-Notification"]), o = r.calid, l = r.name, c = r.type;
                    return l = l && decodeURI(l).replace(/\+/g, " ").replace(/%2B/gm, "+"),
                    "NORMAL" === (c ? c.toUpperCase() : "") ? a.createElement(Fe.Z, {
                        disabled: this.state.displaySpinner,
                        className: "ow-calendar-CalendarSharing-add ow-button-primary",
                        onClick: function() {
                            n.handleAddCalendar({
                                calid: o,
                                name: l
                            })
                        },
                        "aria-label": (0,
                        W.t)("mail.shareCalendarTemplate.ADD_CALENDAR"),
                        "aria-disabled": null === this || void 0 === this ? void 0 : null === (e = this.state) || void 0 === e ? void 0 : e.displaySpinner
                    }, (0,
                    W.t)("mail.shareCalendarTemplate.ADD_CALENDAR")) : a.createElement(Fe.Z, {
                        disabled: this.state.displaySpinner,
                        className: "ow-calendar-CalendarSharing-add ow-button-primary",
                        onClick: function() {
                            n.handleRemoveCalendar({
                                calid: o,
                                name: l
                            })
                        },
                        "aria-label": (0,
                        W.t)("mail.shareCalendarTemplate.REMOVE_CALENDAR"),
                        "aria-disabled": null === this || void 0 === this ? void 0 : null === (t = this.state) || void 0 === t ? void 0 : t.displaySpinner
                    }, (0,
                    W.t)("mail.shareCalendarTemplate.REMOVE_CALENDAR"))
                }
            }, {
                key: "renderGoToCalendar",
                value: function() {
                    var e = this.props.goToCalendar;
                    return a.createElement("a", {
                        role: P.HB.PRESENTATION,
                        className: "ow-calendar-CalendarSharing-go",
                        onClick: function() {
                            e()
                        },
                        "aria-label": (0,
                        W.t)("mail.shareCalendarTemplate.GO_TO_CALENDAR")
                    }, (0,
                    W.t)("mail.shareCalendarTemplate.GO_TO_CALENDAR"))
                }
            }, {
                key: "renderCalendarDesc",
                value: function() {
                    var e = this.props.detail
                      , t = this.parseCalendarInfo(e["X-CP-Cal-Notification"])
                      , n = t.ownername
                      , i = t.type
                      , r = i ? i.toUpperCase() : "";
                    return a.createElement("div", {
                        className: "ow-mail-CalendarSharing-desc"
                    }, "NORMAL" === r ? (0,
                    Oe.WU)((0,
                    W.t)("mail.shareCalendarTemplate.SHARING_CALENDAR"), n) : (0,
                    Oe.WU)((0,
                    W.t)("mail.shareCalendarTemplate.CANCEL_SHARING_CALENDAR"), n))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.detail;
                    if (!e)
                        return null;
                    var t = this.parseCalendarInfo(e["X-CP-Cal-Notification"]).name;
                    return t = t && decodeURI(t).replace(/\+/g, " ").replace(/%2B/gm, "+"),
                    a.createElement("div", {
                        className: "ow-mail-CalendarSharing-wrapper"
                    }, this.renderCalendarSharingDisplay(), a.createElement("div", {
                        className: "ow-mail-CalendarSharing-content"
                    }, this.renderCalendarDesc(), this.renderAddCalendarAndRemoveCalendar(), this.renderGoToCalendar()), this.state.displaySpinner && a.createElement(m.Z, null))
                }
            }]),
            n
        }();
        Ke.defaultProps = {
            detail: null,
            addSharedCalendar: function() {},
            removeSharedCalendar: function() {},
            goToCalendar: function() {}
        },
        Ke.propTypes = {
            detail: o().shape({}),
            addSharedCalendar: o().func,
            removeSharedCalendar: o().func,
            goToCalendar: o().func
        };
        var Ge = n(44461)
          , ze = n(44910)
          , Ye = n(13536)
          , Xe = n(21453)
          , qe = n(19745)
          , Qe = n.n(qe)
          , Je = n(54057)
          , $e = n(14137);
        function et(e) {
            "@babel/helpers - typeof";
            return (et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function tt(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return nt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return nt(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var a = 0
                      , i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, o = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return o = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    r = e
                },
                f: function() {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw r
                    }
                }
            }
        }
        function nt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function at(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, it(a.key), a)
            }
        }
        function it(e) {
            var t = function(e, t) {
                if ("object" !== et(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== et(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === et(t) ? t : String(t)
        }
        function rt(e, t) {
            return (rt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function ot(e) {
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
                var n, a = ct(e);
                if (t) {
                    var i = ct(this).constructor;
                    n = Reflect.construct(a, arguments, i)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === et(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return lt(e)
                }(this, n)
            }
        }
        function lt(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ct(e) {
            return (ct = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var st = (0,
        k.Z)("calendar.enabled")
          , dt = (0,
        k.Z)("mail.avatar.enabled")
          , ut = (0,
        k.Z)("mail.message.rfc822")
          , mt = (0,
        k.Z)("mail.scanMailContentLinks.enabled")
          , ft = function(e) {
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
                t && rt(e, t)
            }(n, a.PureComponent);
            var t = ot(n);
            function n(e) {
                var i;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (i = t.call(this, e)).state = {
                    showCloudFileBrowser: !1,
                    showCloudMsg: !1,
                    showMoreAttachment: !0,
                    attachmentCollapsed: !0,
                    avatarLoaded: !1,
                    showOrignalMsg: !1,
                    makeImgApiCall: !1,
                    avatarImgSrc: "",
                    spinner: !1
                },
                i.attachmentsWillToSave = void 0,
                i.renderExpandedRecipients = i.renderExpandedRecipients.bind(lt(i)),
                i.renderExpandedRecipientsToOrCc = i.renderExpandedRecipientsToOrCc.bind(lt(i)),
                i.renderAttachmentsArea = i.renderAttachmentsArea.bind(lt(i)),
                i.renderPreviewIconButton = i.renderPreviewIconButton.bind(lt(i)),
                i.updateAttachmentArea = i.updateAttachmentArea.bind(lt(i)),
                i.handleClickPreviewBody = i.handleClickPreviewBody.bind(lt(i)),
                i.handleSignUpCloud = i.handleSignUpCloud.bind(lt(i)),
                i.avatarLoaded = i.avatarLoaded.bind(lt(i)),
                i.mailAttachmentListRef = a.createRef(),
                i.mailContentForImgExcceptions = a.createRef(),
                i.getUserColor = i.getUserColor.bind(lt(i)),
                i.handleEditCompose = i.handleEditCompose.bind(lt(i)),
                i.handleEditAndMinimize = i.handleEditAndMinimize.bind(lt(i)),
                i.handleEditCallBack = i.handleEditCallBack.bind(lt(i)),
                i.handleBodyContentOfCertMail = i.handleBodyContentOfCertMail.bind(lt(i)),
                i
            }
            return function(e, t, n) {
                t && at(e.prototype, t),
                n && at(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.updateAttachmentArea();
                    var t = (0,
                    i.findDOMNode)(this.icon)
                      , n = this.state.avatarImgSrc;
                    t && n && (n.onload = function() {
                        !e.state.avatarLoaded && e.avatarLoaded()
                    }
                    ,
                    n.onerror = function() {
                        e.setState({
                            avatarLoaded: !1
                        })
                    }
                    ,
                    t.appendChild(n))
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.updateAttachmentArea()
                }
            }, {
                key: "getUserColor",
                value: function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3, n = 0, a = 0; a < e.length; a++)
                        n = (n << 5) - n + e.charCodeAt(a),
                        n &= n;
                    return P.LR[Math.round(t * Math.abs(n) / 2147483648) % P.LR.length]
                }
            }, {
                key: "handleSignUpCloud",
                value: function() {
                    this.setState({
                        showCloudMsg: !1
                    }, function() {
                        return setTimeout(function() {
                            return window.open((0,
                            k.Z)("cloud.trialURL"))
                        }, 100)
                    })
                }
            }, {
                key: "clickMoreAttachment",
                value: function() {
                    var e = !this.state.attachmentCollapsed;
                    this.setState({
                        attachmentCollapsed: e
                    }),
                    (0,
                    this.props.onViewPort)({
                        attachmentCollapsed: e
                    })
                }
            }, {
                key: "handleClickPreviewBody",
                value: function(e) {
                    var t = e.target
                      , n = e.target
                      , a = n.className
                      , i = n.nodeName;
                    if ("wt_Email" === a && "SPAN" === (void 0 === i ? "" : i).toUpperCase()) {
                        var r = t.innerText || t.textContent;
                        this.props.handleClickPreviewAddress(r)
                    }
                }
            }, {
                key: "avatarLoaded",
                value: function() {
                    this.setState({
                        avatarLoaded: !0
                    })
                }
            }, {
                key: "handleEditCompose",
                value: function(e, t, n, a, i) {
                    e.stopPropagation(),
                    n ? (this.setState({
                        spinner: !0
                    }),
                    this.props.handleShowImage(a, i, this.handleEditCallBack)) : this.props.handleEditDraft(t)
                }
            }, {
                key: "handleEditAndMinimize",
                value: function(e, t, n, a, i) {
                    var r = this.props.selectedMailId;
                    if (r && 0 !== r) {
                        var o = document.createEvent("CustomEvent");
                        o.initCustomEvent("savecloseCompose", !1, !1, {
                            maximize: !0,
                            onMinimize: this.handleEditCompose(e, t, n, a, i)
                        }),
                        window.dispatchEvent(o)
                    } else
                        this.handleEditCompose(e, t, n, a, i)
                }
            }, {
                key: "handleEditCallBack",
                value: function() {
                    this.props.handleEditDraft(this.props.summary),
                    this.setState({
                        spinner: !1
                    })
                }
            }, {
                key: "updateAttachmentArea",
                value: function() {
                    var e = this;
                    if (this.mailContentForImgExcceptions && this.mailContentForImgExcceptions.current) {
                        if (document.location.host.indexOf("localhost:") > -1 && -1 == document.location.href.indexOf("kiwi-uxlab")) {
                            var t = this.mailContentForImgExcceptions.current.querySelectorAll('img[src*="mail.message.attachment.getPart"]');
                            if (t.length > 1) {
                                var n, a = tt(t);
                                try {
                                    for (a.s(); !(n = a.n()).done; ) {
                                        var r = n.value;
                                        r.src = r.src.replace(/kiwi-uxlab\//g, "")
                                    }
                                } catch (e) {
                                    a.e(e)
                                } finally {
                                    a.f()
                                }
                            } else
                                t && t[0] && (t[0].src = t[0].src.replace(/kiwi-uxlab\//g, ""))
                        }
                        if ("https:" === document.location.protocol) {
                            var o = this.mailContentForImgExcceptions.current.querySelectorAll("img");
                            if (o && o.length) {
                                var l, c = tt(o);
                                try {
                                    var s = function() {
                                        var e = l.value
                                          , t = new Image;
                                        t.onerror = function() {
                                            e.style.display = "none"
                                        }
                                        ,
                                        t.src = e.src
                                    };
                                    for (c.s(); !(l = c.n()).done; )
                                        s()
                                } catch (e) {
                                    c.e(e)
                                } finally {
                                    c.f()
                                }
                            }
                        }
                    }
                    if (this.fileContainer) {
                        var d = (0,
                        i.findDOMNode)(this.fileContainer)
                          , u = d.childElementCount
                          , m = d.parentElement.getBoundingClientRect().width
                          , f = d.getBoundingClientRect()
                          , p = f.left
                          , h = f.top
                          , v = d.firstElementChild.getBoundingClientRect()
                          , y = v.left
                          , b = v.top
                          , E = v.height
                          , w = v.width;
                        if (E || w) {
                            var g = u
                              , C = w * u > m
                              , S = y - p
                              , A = b - h;
                            d.style.height = this.state.attachmentCollapsed ? "".concat(E + 2 * A, "px") : "".concat((E + 2 * S) * g, "px"),
                            this.state.showMoreAttachment !== C && (clearTimeout(this.attachUpdateTimeoutObj),
                            this.attachUpdateTimeoutObj = setTimeout(function() {
                                e.setState({
                                    showMoreAttachment: C
                                })
                            }, 100))
                        }
                    }
                }
            }, {
                key: "renderExpandedRecipients",
                value: function() {
                    var e = this.props
                      , t = e.summary
                      , n = e.detail
                      , i = e.recipientsExpanded
                      , r = e.handleClickRecipients
                      , o = (n || t).recipients
                      , l = o && o.to || []
                      , c = o && o.cc || []
                      , s = o && o.bcc || [];
                    return a.createElement("div", {
                        className: "ow-mail-MailPreviewDetailRecipients"
                    }, a.createElement(Ge.Z, null, i ? a.createElement("div", {
                        className: "ow-mail-MailPrevieDetailRecipients-expanded"
                    }, l.length > 0 && this.renderExpandedRecipientsToOrCc("to", "".concat((0,
                    W.t)("mail.receipt.TO"), ":"), l), c.length > 0 && this.renderExpandedRecipientsToOrCc("cc", "".concat((0,
                    W.t)("mail.receipt.CC"), ":"), c), s.length > 0 && this.renderExpandedRecipientsToOrCc("cc", "".concat((0,
                    W.t)("mail.receipt.BCC"), ":"), s)) : a.createElement("div", {
                        role: P.HB.PRESENTATION,
                        className: "ow-mail-MailPrevieDetailRecipients-collapsed",
                        onClick: function(e) {
                            e.stopPropagation(),
                            r(t)
                        }
                    }, a.createElement("span", {
                        className: "ow-mail-MailPrevieDetailRecipients-to"
                    }, "".concat((0,
                    W.t)("mail.receipt.TO"), ": ")), "".concat(l.map(function(e) {
                        return e.name || e.address
                    }).join("; "), ";"))))
                }
            }, {
                key: "renderExpandedRecipientsToOrCc",
                value: function(e, t, n) {
                    var i = this
                      , r = this.props.handleClickAddress;
                    return a.createElement("div", {
                        className: "ow-mail-MailPrevieDetailRecipients-expanded-".concat(e)
                    }, a.createElement(Ge.Z, null, a.createElement("span", {
                        className: "ow-mail-MailPreviewDetailRecipients-label"
                    }, t), a.createElement("div", {
                        className: "ow-mail-MailPreviewDetailRecipients-addresses"
                    }, n.map(function(e) {
                        return a.createElement(Ce, {
                            key: e.address,
                            className: "ow-mail-MailPrevieRecipients-address",
                            displayName: e.name ? "".concat(e.name, " <").concat(e.address, ">") : "".concat(e.address),
                            address: e.address,
                            onMailAddressClick: r,
                            previewInstance: i.props.previewInstance
                        })
                    }))))
                }
            }, {
                key: "renderPreviewIconButton",
                value: function(e) {
                    var t = e.iconName
                      , n = e.text
                      , i = e.clickHandler
                      , r = e.seperator;
                    return a.createElement("div", {
                        role: P.HB.PRESENTATION,
                        className: "ow-mail-mailPreviewIconButton ".concat(r ? "ow-mail-rightBorderAsSeperator" : ""),
                        onClick: function(e) {
                            i && i(e)
                        }
                    }, a.createElement(u.Z, {
                        name: t
                    }), a.createElement("a", {
                        className: "ow-mail-mailPreviewIconButton-text"
                    }, n))
                }
            }, {
                key: "renderAttachmentsArea",
                value: function(e) {
                    var t = this
                      , n = this.props
                      , i = n.handleDowanloadAllAsZip
                      , r = n.handlePreviewAttachment
                      , o = n.handleDownloadAttachment
                      , l = n.handleAddToCalendarAttachment
                      , s = n.canSaveToCloud
                      , d = n.associationMode
                      , m = n.onClickSaveToCloud
                      , p = n.onSaveToCloud
                      , h = n.summary
                      , v = n.calendarId
                      , y = n.accountId
                      , b = n.previewEMLAttachment
                      , E = n.addToContact
                      , w = e.length
                      , g = w > 1 && !b
                      , C = this.state
                      , S = C.showCloudFileBrowser
                      , A = C.showCloudMsg
                      , O = (0,
                    k.Z)("cloud.presetEnable")
                      , T = (0,
                    k.Z)("cloud.trialURL")
                      , I = (0,
                    k.Z)("mail.addToContact.enabled") && (0,
                    H.nIE)()
                      , N = (0,
                    W.t)("mail.detailView.ALL_ATTACHMENTS");
                    this.attachmentsWillToSave && !c()(this.attachmentsWillToSave) && (N = this.attachmentsWillToSave.filename);
                    var R = (0,
                    k.Z)("mail.compose.detachWindow");
                    return a.createElement("div", {
                        className: "ow-mail-mailAttachmentList",
                        ref: this.mailAttachmentListRef
                    }, a.createElement(Ge.Z, null, a.createElement(Ge.Z, null, a.createElement(f.Z, {
                        show: S,
                        title: (0,
                        W.t)("cloud.browser.directory.TITLE"),
                        subTitle: N,
                        addBtnLabel: (0,
                        W.t)("cloud.browser.directory.ADD"),
                        okBtnLabel: (0,
                        W.t)("cloud.browser.directory.CONFIRM_BUTTON"),
                        cancelBtnLabel: (0,
                        W.t)("common.CANCEL"),
                        displayFolderOnly: !0,
                        onSelectFolder: function(e) {
                            p(t.attachmentsWillToSave, e),
                            t.setState({
                                showCloudFileBrowser: !1
                            }),
                            t.attachmentsWillToSave = void 0
                        },
                        onHide: function() {
                            return t.setState({
                                showCloudFileBrowser: !1
                            })
                        }
                    })), a.createElement(Ge.Z, null, a.createElement(Ye.Z, {
                        container: document.body,
                        show: A,
                        buttonConfig: T ? ["signup", "cancel"] : ["cancel"],
                        message: (0,
                        W.t)("cloud.CLOUD_PRESET_HINT"),
                        tips: T ? "" : (0,
                        W.t)("cloud.CLOUD_TRIAL_NOURL_TIPS"),
                        onSignup: this.handleSignUpCloud,
                        onCancel: function() {
                            return t.setState({
                                showCloudMsg: !1
                            })
                        },
                        onDismiss: function() {
                            return t.setState({
                                showCloudMsg: !1
                            })
                        }
                    })), a.createElement("div", {
                        className: "ow-mail-mailAttachmentList-file-container",
                        ref: function(e) {
                            t.fileContainer = e
                        }
                    }, e.map(function(e) {
                        var n = e.filename
                          , i = e.estimatedSize
                          , c = e.thumbnailSrc
                          , f = e.fileIcon
                          , p = e.contentType
                          , h = e.fileType
                          , b = function(e, t) {
                            return !(0,
                            k.Z)("mail.message.extensionType").includes(t) || e
                        }(R, h)
                          , w = (0,
                        H.XbW)(n, ut)
                          , g = (0,
                        H.hRF)(h)
                          , C = a.createElement(F.Z.Dropdown, {
                            pullRight: !0,
                            className: "ow-fileView-dropdown",
                            title: a.createElement(u.Z, {
                                name: "options"
                            }),
                            noCaret: !0
                        }, a.createElement(x.Z, {
                            key: "download",
                            eventKey: "download",
                            onClick: function() {
                                return o(e)
                            },
                            "aria-label": (0,
                            W.t)("mail.preview.DOWNLOAD")
                        }, (0,
                        W.t)("mail.preview.DOWNLOAD")), "ics" === h && st ? a.createElement(x.Z, {
                            key: "calendar",
                            eventKey: "calendar",
                            onClick: function() {
                                return l(v, e, y)
                            },
                            "aria-label": (0,
                            W.t)("mail.preview.ADD_TO_CALENDAR")
                        }, (0,
                        W.t)("mail.preview.ADD_TO_CALENDAR")) : null, a.createElement(x.Z, {
                            key: "preview",
                            eventKey: "preview",
                            disabled: !w || !b,
                            onClick: function() {
                                ("default" !== f || w) && r(e, !0, !H.UhU.isMobile)
                            },
                            onKeyDown: function(t) {
                                t.key === P.BY.ENTERKEY && ("default" !== f || w) && (r(e, !0, !H.UhU.isMobile),
                                (0,
                                ze.kW)(".ow-mail-MailAttachmentPreview-attachment-download"))
                            },
                            "aria-label": (0,
                            W.t)("mail.preview.PREVIEW"),
                            "aria-disabled": !w || !b
                        }, (0,
                        W.t)("mail.preview.PREVIEW")), (s || O) && a.createElement(x.Z, {
                            key: "saveToCloud",
                            eventKey: "saveToCloud",
                            onClick: function() {
                                t.attachmentsWillToSave = e,
                                s ? (t.props.onModalClose(),
                                t.setState({
                                    showCloudFileBrowser: !0
                                })) : O && "manual" === d && (t.props.onModalClose(),
                                t.setState({
                                    showCloudMsg: !0
                                })),
                                "auto" === d && (t.props.onModalClose(),
                                t.setState({
                                    showCloudFileBrowser: !0,
                                    showCloudMsg: !1
                                })),
                                m("", "", P.K6.MODAL_TYPE)
                            },
                            "aria-label": (0,
                            W.t)("mail.preview.SAVE_TO_CLOUD")
                        }, (0,
                        W.t)("mail.preview.SAVE_TO_CLOUD")), I && a.createElement(x.Z, {
                            key: "addToContact",
                            eventKey: "addToContact",
                            disabled: !g,
                            onClick: function() {
                                ("default" !== f || g) && E(e)
                            },
                            "aria-label": (0,
                            W.t)("mail.preview.ADD_TO_CONTACT"),
                            "aria-disabled": !g
                        }, (0,
                        W.t)("mail.preview.ADD_TO_CONTACT")));
                        return a.createElement($e.Z, {
                            key: e.filename + e.part,
                            a: e,
                            options: C,
                            filename: n,
                            contentRfc: p,
                            fileIcon: f,
                            handleClickImage: function() {
                                r(e, !0, !H.UhU.isMobile)
                            },
                            thumbnailSrc: c,
                            canSaveToCloud: s,
                            onClickSaveToCloud: function() {
                                t.attachmentsWillToSave = e,
                                t.setState({
                                    showCloudFileBrowser: !0
                                }),
                                m("", "", P.K6.MODAL_TYPE)
                            }
                        }, a.createElement("a", {
                            role: P.HB.PRESENTATION,
                            onClick: function() {
                                return o(e)
                            },
                            className: "ow-fileView-file-name",
                            title: n,
                            "aria-label": n
                        }, n), a.createElement("div", {
                            className: "ow-fileView-size"
                        }, (0,
                        ze.RD)(i)))
                    })), a.createElement("div", {
                        className: "ow-mail-mailAttachmentList-options"
                    }, a.createElement("span", {
                        className: "ow-mail-mailAttachmentList-options-line"
                    }, this.state.showMoreAttachment ? a.createElement("a", {
                        role: P.HB.PRESENTATION,
                        className: "ow-mail-mailAttachmentList-attachments ".concat(s ? "ow-mail-rightBorderAsSeperator" : ""),
                        onClick: function() {
                            return t.clickMoreAttachment()
                        },
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === P.BY.ENTERKEY && t.clickMoreAttachment()
                        }
                    }, " ", this.state.attachmentCollapsed ? a.createElement(u.Z, {
                        name: "double-down"
                    }) : a.createElement(u.Z, {
                        name: "double-up"
                    }), (0,
                    Oe.WU)((0,
                    W.t)("mail.detailView.SHOW_ALL_ATTACHMENTS"), w)) : a.createElement("a", {
                        className: "ow-mail-mailAttachmentList-attachments-disabled ".concat(s && e.length > 1 ? "ow-mail-rightBorderAsSeperator" : "")
                    }, " ", (0,
                    Oe.WU)(w > 1 ? (0,
                    W.t)("mail.detailView.SHOW_ATTACHMENTS") : (0,
                    W.t)("mail.detailView.SHOW_ATTACHMENT"), w)), g && a.createElement("a", {
                        role: P.HB.PRESENTATION,
                        className: "ow-mail-mailAttachmentList-download-zip ".concat(g ? "ow-mail-rightBorderAsSeperator" : ""),
                        onClick: function() {
                            return i(h)
                        },
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            "Enter" === e.key && i(h)
                        }
                    }, a.createElement(u.Z, {
                        name: "ico-download",
                        role: P.HB.BUTTON,
                        "aria-label": (0,
                        W.t)("mail.detailView.SAVE_ALL_AS_ZIP")
                    }), (0,
                    W.t)("mail.detailView.SAVE_ALL_AS_ZIP"))), a.createElement("span", null, e.length > 1 && (s || O) && a.createElement("a", {
                        role: P.HB.PRESENTATION,
                        className: "ow-mail-mailAttachmentList-save-cloud",
                        onClick: function() {
                            t.attachmentsWillToSave = e,
                            s ? t.setState({
                                showCloudFileBrowser: !0
                            }) : O && t.setState({
                                showCloudMsg: !0
                            }),
                            m("", "", P.K6.MODAL_TYPE)
                        },
                        "aria-label": (0,
                        W.t)("mail.detailView.SAVE_ALL_TO_CLOUD"),
                        tabIndex: 0
                    }, (0,
                    W.t)("mail.detailView.SAVE_ALL_TO_CLOUD"))))))
                }
            }, {
                key: "handleBodyContentOfCertMail",
                value: function(e) {
                    var t, n = this.props.detail, a = (t = n ? !0 === e ? n.wrappedMessageBody : n.body : {}).content, i = n ? t.originalFormat : void 0;
                    return i && ("plaintext" === i ? a = (0,
                    Te.hG)((0,
                    Te.Mc)((0,
                    Te.MF)(a)).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")) : (a = (0,
                    H.nIE)() ? (0,
                    Je.bt)(a) : a,
                    (0,
                    k.Z)("mail.linkfiyText") && (a = (0,
                    Te.N1)(a)))),
                    a
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this, n = this.props, i = n.user, r = n.uid, o = n.summary, l = n.detail, c = n.handleShowImage, s = n.handleClickRecipients, d = n.handleClickHeader, f = n.handlePreviewAttachment, p = n.handleClickAddress, h = n.previewInstance, v = n.addSharedCalendar, y = n.removeSharedCalendar, b = n.goToCalendar, E = n.handleRSVP, w = n.handleExternalDomainInvite, g = n.handleGetEvents, C = n.getEvents, S = n.calColors, A = n.blockedImages, O = n.imgSrc, T = n.securityLevel, I = n.previewEMLAttachment, N = n.showAvatar, R = n.accountId;
                    if (!o && !l)
                        return null;
                    var D = l || o
                      , _ = D.from
                      , L = D.receivedDate
                      , j = D.sentDate
                      , F = D.sendDate
                      , x = D.attachmentCount
                      , B = D.attachments
                      , Z = D.recipients
                      , V = D.flags
                      , U = D.priority
                      , K = D.folderType
                      , G = D.certmailTransport
                      , z = l && l.invitation
                      , Y = l && l["X-CP-Cal-Notification"] && l["X-CP-Cal-Notification"].startsWith(P.mL)
                      , X = B ? B.length : x
                      , q = Z && Z.to || []
                      , Q = Z && Z.cc || []
                      , J = Z && Z.bcc || []
                      , $ = q.length + Q.length + J.length
                      , ee = (l ? l.body : {}).content
                      , te = l ? l.body.originalFormat : void 0
                      , ne = !!l && (null === l || void 0 === l ? void 0 : null === (e = l.body) || void 0 === e ? void 0 : e.isPhishing)
                      , ae = "";
                    te && ("plaintext" === te ? (ae = "plain ".concat(I ? "emlClass" : ""),
                    ee = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(ee) ? (0,
                    Te.hG)((0,
                    Te.Mc)((0,
                    Te.MF)(ee)).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")) : (0,
                    Te.Mc)((0,
                    Te.MF)(ee)).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")) : (ae = "rich",
                    ee = (0,
                    H.nIE)() ? (0,
                    Je.bt)(ee) : ee,
                    (0,
                    k.Z)("mail.linkfiyText") && (ee = (0,
                    Te.N1)(ee)),
                    ee.indexOf('src="blocked"') > -1 && (ee = (ee = ee.replace(/ow-meida-inline-img/g, "")).replace(/src="blocked"/g, 'src="data:image/svg;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA8CAYAAADxJz2MAAAFdElEQVR4Ae2c6UszPxDH+x/7RlS8QMX7VhAv9IVt1WqL9wXeBwjifZ+F1qroC60nXvPwDcw2LfX5bXfb9dc+CcRkdyfTzaeTmSS71ub1egNOpzPo8XiC/f39Kutg0NfXFwQzn88XsHV3d9Po6ChdXFzQyckJnZ6eqvwfDLxer2DW1dVFNtC8vLwklWIjEAgEqKenJ2jDsIXVIX1/f8em5R+WPjs7I7ALA/gP84i56zA6BTBmbKEGCmCIhaGaAmgIW6iRAhhiYaimABrCFmqkAIZYGKopgIawhRopgCEWhmoKoCFsoUYKYIiFoZplAH97fY3PT8Q9WAIwUTcfq8l8fX3FHaIlALmjHx8f9P7+Tp+fn4TOoEx0xmfiMzjF2wotAQhYi4uLVFdXR7W1tSKjbkWur6+nmpoaGhoaotfX1+S0wKenJyopKcHGIy0tLdHCwoIACqhW5MHBQSosLKSjoyM2xLiVlljgw8MDFRcX0/n5edxuPBZFt7e34gs8PDyMpZkuWcsAVlZW0v7+vq6bircQvriysjI6Pj6Ot2rx3CjhG6rBYJAqKipod3c37h3QozAlAJaXl2sA5WlNZFTka1zqAcQ64Gt9Pp+I8HJ7ACwtLRVPG/Xoi0XGkiEMC4wEiMiMjPT4+EhTU1Pk9/vFMTqPazKEnzoly4yNjYmhurW1JcRZf8oCRC+fn5+ps7OT0tLSqLq6mm5ubjRWMmTt5F8qiPDt7e2apQEuUkoCRMcAr62tTVjN+vq6qGOoXV9fa5gYgnYiSoVBQxZzPSTUU84C9/b2tO4DHqyloKBAi4739/diko2IiQfWepMMS27D8JPeAuHj5CgMK4HlAR6csJzu7u7EykGGCBAMQ5aNrP8kkxIAAQTv3WAt3NraKlYGeAeHE4YbAwBE+EMMZw4skOPr3CZaycNWvpb0ABGFsSZdXl4mu90uViUMD1A4yxCxemhsbKSioqKwoBAN4vz8PI2Pj8vMwuopARBWh/UwFvZXV1dhHcQBQ5QvYF7X0tJCeXl5mp+UIUN2ZmZGXM/OziaPx6MFDtkSUwJgQ0MDIctDUoYl12WYCDbNzc2Un5+vWSLLAl5mZqbYnNjc3BQyeE0PW1hIbK1JD5CDCKYqehIDZCt6eXkRfhMQAQMJwzYjI4MmJiY0ldCfm5tLTqdTs0RcTHqA2I1BEOHdELYMredRKpCRhysgwhKxKTE8PCzcgQyPVcgQ2RLxChoCUmTE5zZmyl9Zyum54WiQMf3p6Oig9PR0crlcmhq2WD6xsbFB8IkOh0Oc4u0sDlwsF4/yfwtQ7pwMCBDh5xCQdnZ2NDFZBicBMScnhwYGBujg4EBM0JN6O0veTNB6rbPCcNgn4hjWlZWVJUDJaiDDcnAZmAZVVVVRU1NTcg9heSUid1hvnSGiREIJSwTEtbU1TQ3Os+/DSVgd/CYgJrUPRBDhHWkZhtE6E8PEHP4uMsJDL6ft7W0x5JPWByIKw2fxFIQ7Fq9ycnJSrKtXV1ejqsQmBaIwzwKiChk8aVkQwRDG/1PMzc3FJWMSPTs7SysrKzQ9PS2GKPwdnsBFfobb7Q5bEhpkFbWZJQAxnLAOxnoYmVclRkqsj5HRFs+VoQ/zQwQVZASLSL2QwW7129tbVAhmTloCMPIGjfo9uR104liebPN1voZjrotKAv78CsAE9OPXVCqAJtErgAqgSQImmysLVABNEjDZXFmgAmiSgMnmygIVQJMETDZXFmgSIJ63uN1u9S//RjlqAEER5qhSbATATFhgb2+v+tmT2NgJabxF5nK5gjY8jB4ZGSH8mAyowjRRqhydAfiAFZhhH9KGny+y2+3iJ59gknjzXOWfGTAjh8MR9Pv9gT+qU9sYYIwoHAAAAABJRU5ErkJggg=="'))));
                    var ie = !0 === G ? this.handleBodyContentOfCertMail(!0) : void 0
                      , re = !1;
                    "rich" === ae && ee && ee.indexOf("<blockquote") >= 0 && (re = !0);
                    var oe = "draft" === K
                      , le = ""
                      , ce = ""
                      , se = (0,
                    k.Z)("mail.compose.detachWindow")
                      , de = (((0,
                    H.unM)() || !se) && (window,
                    window.ux.getWindow(h)),
                    window !== window.ux.getWindow(h));
                    if (_)
                        if (_.name) {
                            ce = "".concat(_.name, " <").concat(_.address, ">");
                            var ue = _.name.split(" ");
                            ue.length > 1 ? (le = (0,
                            Te.xn)(ue[0].charAt(0)) ? ue[0].charAt(0).toUpperCase() : "",
                            le += (0,
                            Te.xn)(ue[1].charAt(0)) ? ue[1].charAt(0).toUpperCase() : "") : 1 == ue.length && (le = (0,
                            Te.xn)(_.name.charAt(0)) ? _.name.charAt(0).toUpperCase() : _.address.charAt(0).toUpperCase()),
                            "" == le && (le = _.address.charAt(0).toUpperCase())
                        } else {
                            ce = "".concat(_.address),
                            le = _.address.charAt(0).toUpperCase()
                        }
                    var me = this.props.cancelSendInProgress
                      , fe = this.props.manageCleanupView ? "ow-mail-ManageStorage-content" : ""
                      , pe = (0,
                    k.Z)("mail.addLinkForBlockImage")
                      , he = Object.assign({}, o);
                    return he.accountId = R,
                    a.createElement("div", {
                        className: "ow-mail-MailPreviewDetail-content ".concat(fe)
                    }, a.createElement(Ge.Z, null, a.createElement("div", {
                        role: P.HB.PRESENTATION,
                        className: "ow-mail-MailPreviewDetailHeader",
                        onClick: function() {
                            return d(o)
                        },
                        key: "".concat(r, "_").concat(o ? o.folderPath : ""),
                        tabIndex: 0
                    }, dt && N && "" === R ? a.createElement("span", {
                        ref: function(e) {
                            t.icon = e
                        },
                        className: this.state.avatarLoaded ? "ow-mail-MailPreviewSummaryHeader-avatar-loaded" : "ow-mail-MailPreviewSummaryHeader-avatar"
                    }) : "" === R && a.createElement("img", {
                        alt: "",
                        src: O || "",
                        onLoad: function() {
                            return t.avatarLoaded()
                        },
                        className: this.state.avatarLoaded ? "ow-mail-MailPreviewSummaryHeader-avatar-loaded  ow-mail-MailPreviewSummaryHeader-avatar-old" : "ow-mail-MailPreviewSummaryHeader-avatar"
                    }), "" !== R || !this.state.avatarLoaded && !N ? a.createElement("span", {
                        className: "ow-mail-MailPreviewSummaryHeader-avatar-default"
                    }) : N && _ && !this.state.avatarLoaded ? a.createElement("span", {
                        className: "ow-mail-MailPreviewSummaryHeader-avatar-custom",
                        style: {
                            background: _ && this.getUserColor(_.address)
                        }
                    }, le) : "", a.createElement("div", {
                        className: "ow-mail-MailPreviewDetailHeader-right"
                    }, a.createElement("div", {
                        className: "ow-mail-MailPreviewDetailHeader-from-row"
                    }, a.createElement(Ge.Z, null, a.createElement(Ce, {
                        className: "ow-mail-MailPreviewDetailHeader-from".concat(V.seen ? "" : " ow-mail-MailPreview-unread"),
                        displayName: ce,
                        address: _ ? _.address : "",
                        onMailAddressClick: p,
                        previewInstance: this.props.previewInstance
                    })), a.createElement(M, {
                        previewInstance: h,
                        mailSummary: o
                    })), this.renderExpandedRecipients(), a.createElement("div", {
                        className: "ow-mail-MailPreviewDetailHeader-date"
                    }, window.TimeUtil.getTimeZoneDateTime(L, F, j)), a.createElement("div", {
                        className: "ow-mail-MailPreviewDetailHeader-iconbtns-container"
                    }, X > 0 && this.renderPreviewIconButton({
                        iconName: "attachment-mail",
                        text: X,
                        clickHandler: function(e) {
                            e.stopPropagation(),
                            f(B[0], !0, !H.UhU.isMobile)
                        },
                        seperator: !0
                    }), this.renderPreviewIconButton({
                        iconName: "ico-bell-contacts",
                        text: $,
                        clickHandler: function(e) {
                            e.stopPropagation(),
                            s(o)
                        },
                        seperator: V && V.flagged || 1 === U
                    }), V && V.flagged && this.renderPreviewIconButton({
                        iconName: "flag-mail",
                        seperator: 1 === U
                    }), 1 === U && this.renderPreviewIconButton({
                        iconName: "exclamation"
                    })))), B && B.length > 0 && this.renderAttachmentsArea(B), a.createElement("div", {
                        className: "ow-mail-MailPreviewBody-buttons"
                    }, pe && !de && A && a.createElement(Xe.Z, {
                        location: location,
                        to: "/settings#Blockimages",
                        className: "ow-mail-MailPreviewHeader-showImgBtn"
                    }, a.createElement(Qe(), {
                        title: (0,
                        W.t)("settings.mail.BLOCK_IMAGES_LINK"),
                        "aria-label": (0,
                        W.t)("settings.mail.BLOCK_IMAGES_LINK"),
                        eventKey: "nav_blockimages",
                        tabIndex: -1,
                        onKeyDown: function(e) {
                            var t;
                            return e.key === P.BY.ENTERKEY && (null === e || void 0 === e ? void 0 : null === (t = e.target) || void 0 === t ? void 0 : t.click())
                        }
                    }, a.createElement("fragment", {
                        className: "ow-message-blockimage-link",
                        tabIndex: 0
                    }, (0,
                    W.t)("settings.mail.BLOCK_IMAGES_LINK")))), A && a.createElement("span", {
                        role: P.HB.BUTTON,
                        className: "ow-mail-MailPreviewHeader-showImgBtn",
                        tabIndex: 0,
                        onClick: function(e) {
                            e.stopPropagation(),
                            c(he, te)
                        },
                        "aria-label": (0,
                        W.t)("mail.detailView.SHOW_IMAGE"),
                        onKeyDown: function(e) {
                            var t;
                            return e.key === P.BY.ENTERKEY && (null === e || void 0 === e ? void 0 : null === (t = e.target) || void 0 === t ? void 0 : t.click())
                        }
                    }, "".concat((0,
                    W.t)("mail.detailView.SHOW_IMAGE"))), oe && !me && a.createElement("span", {
                        role: P.HB.PRESENTATION,
                        className: "ow-mail-MailPreviewHeader-draftBtn",
                        onClick: function(e) {
                            return t.handleEditAndMinimize(e, o, A, he, te)
                        },
                        "aria-label": "".concat((0,
                        W.t)("mail.detailView.EDIT_DRAFT"))
                    }, "".concat((0,
                    W.t)("mail.detailView.EDIT_DRAFT")))), a.createElement("div", {
                        className: "ow-mail-MailPreviewSummaryHeader-security"
                    }, T.map(function(e) {
                        var t = e.display
                          , n = e.message
                          , i = (0,
                        k.Z)("mail.securityMessageTypes");
                        return i && i.includes(n) ? a.createElement("div", {
                            className: "ow-mail-MailPreviewSummaryHeader-security-default ow-mail-MailPreviewSummaryHeader-security-".concat(t),
                            "aria-label": (0,
                            W.t)("mail.detailView.SECURE_MESSAGES")[n]
                        }, (0,
                        W.t)("mail.detailView.SECURE_MESSAGES")[n]) : null
                    })), mt && ne && a.createElement("div", {
                        className: "ow-itsphising-mail-alert"
                    }, a.createElement("div", null, a.createElement("span", {
                        className: "ow-caution-bold",
                        "aria-label": (0,
                        W.t)("mail.detailView.CAUTION")
                    }, (0,
                    W.t)("mail.detailView.CAUTION"), ":"), a.createElement("span", {
                        className: "ow-caution-text"
                    }, (0,
                    W.t)("mail.detailView.SUSPICIOUS_TEXT")))), Y && a.createElement(Ke, {
                        detail: l,
                        addSharedCalendar: v,
                        removeSharedCalendar: y,
                        goToCalendar: b
                    }), z && a.createElement(je, {
                        user: i,
                        detail: l,
                        handleRSVP: E,
                        handleExternalDomainInvite: w,
                        handleGetEvents: g,
                        getEvents: C,
                        calColors: S
                    }), !Y && !z && (l && !this.state.spinner ? a.createElement(a.Fragment, null, a.createElement("div", {
                        className: "ow-mail-MailPreviewBody ".concat(ae, " ").concat(this.state.showOrignalMsg ? "showOrignalMsg" : ""),
                        role: P.HB.PRESENTATION,
                        onClick: this.handleClickPreviewBody,
                        dangerouslySetInnerHTML: {
                            __html: ee
                        },
                        ref: this.mailContentForImgExcceptions
                    }), G && a.createElement("div", {
                        className: "ow-mail-MailPreviewWrappedCntr"
                    }, a.createElement("div", {
                        className: "ow-mail-MailPreviewWrappedHeader"
                    }, (0,
                    W.t)("certmail.message.wrappedContentHeader")), a.createElement("div", {
                        className: "ow-mail-MailPreviewWrappedBody ".concat(ae, " ").concat(this.state.showOrignalMsg ? "showOrignalMsg" : ""),
                        role: P.HB.PRESENTATION,
                        dangerouslySetInnerHTML: {
                            __html: ie
                        }
                    })), !this.state.showOrignalMsg && re && a.createElement("div", {
                        role: P.HB.PRESENTATION,
                        className: "ow-mail-MailPreviewBody-collapse-button",
                        title: (0,
                        W.t)("mail.detailView.SHOW_MAIL_HISTORY"),
                        "aria-label": (0,
                        W.t)("mail.detailView.SHOW_MAIL_HISTORY"),
                        onClick: function() {
                            t.setState({
                                showOrignalMsg: !t.state.showOrignalMsg
                            })
                        }
                    }, a.createElement(u.Z, {
                        name: "more"
                    }))) : a.createElement(m.Z, null))))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    var n = e.avatarData
                      , a = e.detail
                      , i = e.summary
                      , r = e.user
                      , o = e.imgSrc;
                    if (n && (a || i)) {
                        var l = n.avatarListImgData
                          , c = a || i
                          , s = c.from
                          , u = c.bimiLocations
                          , m = c.flags.userFlags
                          , f = m && d()(m, "bimi");
                        if (!(y()(n, "avatarListImgData.totalCount", "") && y()(s, "address", "") || f))
                            return null;
                        var p = l && l[s.address];
                        if (!p || t.makeImgApiCall) {
                            var h = u && u[0];
                            if (f && h && H.UhU.isDesktop) {
                                var v = new Image;
                                if (v.src = h,
                                !t.avatarImgSrc)
                                    return {
                                        avatarImgSrc: v
                                    }
                            }
                            return null
                        }
                        if (p && !t.makeImgApiCall) {
                            var b = r.email + "~" + s.address
                              , E = localStorage.getItem(b);
                            if (E && p) {
                                var w = new Image;
                                return w.src = "data:image/jpg;base64," + E,
                                {
                                    avatarImgSrc: w,
                                    makeImgApiCall: !0
                                }
                            }
                            var g = new Image;
                            if (g.addEventListener("load", function() {
                                (0,
                                Te.fQ)(b, g)
                            }, !1),
                            g.src = o,
                            !t.avatarImgSrc)
                                return {
                                    avatarImgSrc: g,
                                    makeImgApiCall: !0
                                }
                        }
                    }
                }
            }]),
            n
        }();
        ft.defaultProps = {
            uid: "",
            subject: "",
            previewInstance: "",
            calendarId: "",
            accountId: "",
            showAvatar: "",
            avatarData: {},
            imgSrc: "",
            summary: null,
            detail: null,
            recipientsExpanded: !1,
            previewEMLAttachment: !1,
            securityLevel: [],
            generateAttachmentThumbnail: function() {},
            handleClickHeader: function() {},
            handleClickRecipients: function() {},
            handleClickAddress: function() {},
            handleShowImage: function() {},
            handleDownloadAttachment: function() {},
            handleAddToCalendarAttachment: function() {},
            handleDowanloadAllAsZip: function() {},
            handlePreviewAttachment: function() {},
            handleEditDraft: function() {},
            handleClickPreviewAddress: function() {},
            canSaveToCloud: !1,
            associationMode: "manual",
            onClickSaveToCloud: function() {},
            onSaveToCloud: function() {},
            onViewPort: function() {},
            user: {},
            addSharedCalendar: function() {},
            removeSharedCalendar: function() {},
            goToCalendar: function() {},
            handleRSVP: function() {},
            handleExternalDomainInvite: function() {},
            handleGetEvents: function() {},
            getEvents: function() {},
            onModalClose: function() {},
            calColors: {},
            blockedImages: !1,
            cancelSendInProgress: !1,
            manageCleanupView: !1
        },
        ft.propTypes = {
            uid: o().number,
            subject: o().string,
            previewInstance: o().string,
            calendarId: o().string,
            accountId: o().string,
            imgSrc: o().string,
            summary: o().shape({}),
            detail: o().shape({}),
            recipientsExpanded: o().bool,
            previewEMLAttachment: o().bool,
            securityLevel: o().arrayOf(o().array),
            generateAttachmentThumbnail: o().func,
            handleClickHeader: o().func,
            handleClickRecipients: o().func,
            handleClickAddress: o().func,
            handleShowImage: o().func,
            handleDownloadAttachment: o().func,
            handleAddToCalendarAttachment: o().func,
            handleDowanloadAllAsZip: o().func,
            handlePreviewAttachment: o().func,
            handleEditDraft: o().func,
            canSaveToCloud: o().bool,
            associationMode: o().string,
            onClickSaveToCloud: o().func,
            onSaveToCloud: o().func,
            onViewPort: o().func,
            user: o().shape({}),
            addSharedCalendar: o().func,
            removeSharedCalendar: o().func,
            goToCalendar: o().func,
            handleRSVP: o().func,
            handleExternalDomainInvite: o().func,
            handleGetEvents: o().func,
            getEvents: o().func,
            onModalClose: o().func,
            calColors: o().shape({}),
            blockedImages: o().bool,
            cancelSendInProgress: o().bool,
            handleClickPreviewAddress: o().func,
            manageCleanupView: o().bool,
            showAvatar: o().bool,
            avatarData: o().object
        };
        var pt = ft
    },
    3269: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return z
            }
        });
        var a = n(87401)
          , i = n(23398)
          , r = n.n(i)
          , o = n(10091)
          , l = n(77926)
          , c = n(92520)
          , s = n(70224)
          , d = n(32081)
          , u = n(84987)
          , m = n(94165)
          , f = n(83416)
          , p = n(80110)
          , h = n(40757)
          , v = n(91066)
          , y = n(7179)
          , b = n(97186)
          , E = n.n(b)
          , w = n(77545)
          , g = n(98401)
          , C = n(67064)
          , S = n.n(C);
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
        function O(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, T(a.key), a)
            }
        }
        function T(e) {
            var t = function(e, t) {
                if ("object" !== A(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== A(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === A(t) ? t : String(t)
        }
        function P(e, t) {
            return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function I(e) {
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
                var n, a = N(e);
                if (t) {
                    var i = N(this).constructor;
                    n = Reflect.construct(a, arguments, i)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === A(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return k(e)
                }(this, n)
            }
        }
        function k(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function N(e) {
            return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var R = function(e) {
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
            }(n, a.PureComponent);
            var t = I(n);
            function n(e) {
                var a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (a = t.call(this, e)).handleCancel = a.handleCancel.bind(k(a)),
                a.renderSenderInfo = a.renderSenderInfo.bind(k(a)),
                a.renderCertificateInfo = a.renderCertificateInfo.bind(k(a)),
                a.renderValidityDates = a.renderValidityDates.bind(k(a)),
                a.renderValidityInfo = a.renderValidityInfo.bind(k(a)),
                a.renderCertificateProperties = a.renderCertificateProperties.bind(k(a)),
                a
            }
            return function(e, t, n) {
                t && O(e.prototype, t),
                n && O(e, n),
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
                key: "renderSenderInfo",
                value: function(e) {
                    return a.createElement("div", null, " ", !0 === e.impersonification ? (0,
                    u.t)("certmail.certificate.details.impersonificationError") : (0,
                    u.t)("certmail.certificate.details.senderOk"))
                }
            }, {
                key: "renderValidityInfo",
                value: function(e) {
                    var t = [];
                    !1 === e.chainValidated && t.push((0,
                    u.t)("certmail.certificate.details.chainInvalidatedError")),
                    !1 === e.chainBuilt && t.push((0,
                    u.t)("certmail.certificate.details.invalidChainError")),
                    !0 === e.chainRevoked && t.push((0,
                    u.t)("certmail.certificate.details.chainRevokedError")),
                    !1 === e.signatureValid && t.push((0,
                    u.t)("certmail.certificate.details.invalidSignatureError")),
                    !1 === e.signerCertificateValidAtSigningTime && t.push((0,
                    u.t)("certmail.certificate.details.invalidSigningTimeError"));
                    var n, i = (0,
                    u.t)("certmail.certificate.details.signatureCheck") + " ";
                    return 0 == t.length ? i += (0,
                    u.t)("certmail.certificate.details.signatureCheckOk") : (i += (0,
                    u.t)("certmail.certificate.details.signatureCheckNotOk"),
                    n = t.map(function(e) {
                        return a.createElement("div", null, e)
                    })),
                    a.createElement("div", null, i, n)
                }
            }, {
                key: "renderCertificateInfo",
                value: function(e) {
                    return e.split(",").map(function(e) {
                        var t = e.trim().split("=")
                          , n = "EMAILADDRESS" == t[0] ? "E" : t[0];
                        return a.createElement("div", {
                            className: "subsectionBody"
                        }, a.createElement("div", {
                            className: "label"
                        }, n), a.createElement("div", null, t[1]))
                    })
                }
            }, {
                key: "renderValidityDates",
                value: function(e) {
                    var t = e.validFrom
                      , n = e.validTo
                      , i = window.TimeUtil.getShortDateTime(t)
                      , r = window.TimeUtil.getShortDateTime(n);
                    return a.createElement("div", null, a.createElement("span", null, (0,
                    u.t)("certmail.certificate.details.certificate_valid_from") + " " + i + " " + (0,
                    u.t)("certmail.certificate.details.certificate_valid_to") + " " + r))
                }
            }, {
                key: "renderCertificateProperties",
                value: function(e) {
                    var t = e.version
                      , n = e.algorithm
                      , i = e.serial
                      , r = e.type;
                    return a.createElement("div", null, a.createElement("div", {
                        className: "subsectionBody"
                    }, a.createElement("div", {
                        className: "label"
                    }, (0,
                    u.t)("certmail.certificate.details.type")), a.createElement("div", null, r)), a.createElement("div", {
                        className: "subsectionBody"
                    }, a.createElement("div", {
                        className: "label"
                    }, (0,
                    u.t)("certmail.certificate.details.version")), a.createElement("div", null, t)), a.createElement("div", {
                        className: "subsectionBody"
                    }, a.createElement("div", {
                        className: "label"
                    }, (0,
                    u.t)("certmail.certificate.details.serial")), a.createElement("div", null, i)), a.createElement("div", {
                        className: "subsectionBody"
                    }, a.createElement("div", {
                        className: "label"
                    }, (0,
                    u.t)("certmail.certificate.details.algorithm")), a.createElement("div", null, n)))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.signInfo
                      , n = e.show;
                    return a.createElement(g.Z, {
                        show: n,
                        backdrop: "static",
                        className: S()("ow-settings-window", "ow-certificate-window"),
                        onHide: this.handleCancel
                    }, a.createElement(g.Z.Header, {
                        closeButton: !0
                    }, a.createElement("div", {
                        className: "ow-settingsWindow-header"
                    }, a.createElement("div", {
                        className: "ow-settingsWindow-header-title"
                    }, (0,
                    u.t)("certmail.certificate.details.title")))), a.createElement(g.Z.Body, null, a.createElement("div", {
                        className: "ow-certificate-subsection"
                    }, a.createElement("span", {
                        className: "title"
                    }, (0,
                    u.t)("certmail.certificate.details.sender_check_section_title")), this.renderSenderInfo(t)), a.createElement("div", {
                        className: "ow-certificate-subsection"
                    }, a.createElement("span", {
                        className: "title"
                    }, (0,
                    u.t)("certmail.certificate.details.validity_check_section_title")), this.renderValidityInfo(t)), a.createElement("div", {
                        className: "ow-certificate-subsection"
                    }, a.createElement("span", {
                        className: "title"
                    }, (0,
                    u.t)("certmail.certificate.details.certificate_subject_section_title")), this.renderCertificateInfo(t.subject)), a.createElement("div", {
                        className: "ow-certificate-subsection"
                    }, a.createElement("span", {
                        className: "title"
                    }, (0,
                    u.t)("certmail.certificate.details.certificate_issuer_section_title")), this.renderCertificateInfo(t.issuer)), a.createElement("div", {
                        className: "ow-certificate-subsection"
                    }, a.createElement("span", {
                        className: "title"
                    }, (0,
                    u.t)("certmail.certificate.details.certificate_dates_section_title")), this.renderValidityDates(t)), a.createElement("div", {
                        className: "ow-certificate-subsection"
                    }, a.createElement("span", {
                        className: "title"
                    }, (0,
                    u.t)("certmail.certificate.details.certificate_properties_section_title")), this.renderCertificateProperties(t))), a.createElement(g.Z.Footer, null, a.createElement("div", null, a.createElement(w.Z, {
                        onClick: this.handleCancel
                    }, (0,
                    u.t)("common.OK")))))
                }
            }]),
            n
        }();
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
        R.defaultProps = {
            show: !1,
            onCancel: function() {}
        },
        R.propTypes = {
            show: r().bool,
            onCancel: r().func
        };
        var _ = ["onMoveCategory", "currentCategory"];
        function M(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, L(a.key), a)
            }
        }
        function L(e) {
            var t = function(e, t) {
                if ("object" !== D(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== D(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === D(t) ? t : String(t)
        }
        function j(e, t) {
            return (j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function F(e) {
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
                var n, a = B(e);
                if (t) {
                    var i = B(this).constructor;
                    n = Reflect.construct(a, arguments, i)
                } else
                    n = a.apply(this, arguments);
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
        function B(e) {
            return (B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Z() {
            return (Z = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function V(e, t) {
            if (null == e)
                return {};
            var n, a, i = function(e, t) {
                if (null == e)
                    return {};
                var n, a, i = {}, r = Object.keys(e);
                for (a = 0; a < r.length; a++)
                    n = r[a],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (a = 0; a < r.length; a++)
                    n = r[a],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var W = (0,
        c.z)(l.Z)
          , U = function(e) {
            var t = e.onMoveCategory
              , n = e.currentCategory
              , i = V(e, _)
              , r = (n || {}).path;
            return a.createElement(l.Z, Z({
                disabled: !n,
                title: (0,
                u.t)("mail.action.MOVE_TO_CATEGORY")
            }, i), CATEGORIES.map(function(e) {
                return a.createElement(s.Z, Z({
                    key: e.path
                }, i, {
                    disabled: r === e.path,
                    onClick: function() {
                        return r !== e.path && t(e)
                    }
                }), (0,
                u.t)("mail.folder.CATEGORY_FOLDER_DISPLAY[".concat(e.name, "]")))
            }))
        }
          , H = (0,
        f.Z)("calendar.enabled")
          , K = m.DJ.ATTACHMENT_VIEW
          , G = (m.DJ.PREVIEW_RIGHT,
        m.DJ.PREVIEW_BELOW,
        m.DJ.PREVIEW_NONE,
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
                t && j(e, t)
            }(n, a.Component);
            var t = F(n);
            function n(e) {
                var i;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (i = t.call(this, e)).state = {
                    spinner: !1,
                    ruleSelected: void 0,
                    showAddRule: !1,
                    displayWindow: !1,
                    displayCertificateWindow: !1
                },
                i.refSinglePrintToast = a.createRef(),
                i.handleInviteToEvent = i.handleInviteToEvent.bind(x(i)),
                i.handleViewSource = i.handleViewSource.bind(x(i)),
                i.renderReplyAll = i.renderReplyAll.bind(x(i)),
                i.renderDropdownWhenPartEnabled = i.renderDropdownWhenPartEnabled.bind(x(i)),
                i.renderDropdownWhenPartDisabled = i.renderDropdownWhenPartDisabled.bind(x(i)),
                i.callBackForReset = i.callBackForReset.bind(x(i)),
                i.handleForwardInline = i.handleForwardInline.bind(x(i)),
                i.handleForwardAttachment = i.handleForwardAttachment.bind(x(i)),
                i.closeRunningSpinner = i.closeRunningSpinner.bind(x(i)),
                i.printToastCurrentSingle = i.printToastCurrentSingle.bind(x(i)),
                i.handleSinglePrintMail = i.handleSinglePrintMail.bind(x(i)),
                i.handleReplyExtended = i.handleReplyExtended.bind(x(i)),
                i.handleForwardInlineExtended = i.handleForwardInlineExtended.bind(x(i)),
                window.addEventListener("closeRunningSpinner", i.closeRunningSpinner),
                i.handleReply = i.handleReply.bind(x(i)),
                i.displayRulesModal = i.displayRulesModal.bind(x(i)),
                i.renderAddRule = i.renderAddRule.bind(x(i)),
                i.handleSaveRule = i.handleSaveRule.bind(x(i)),
                i.setDisplayWindow = i.setDisplayWindow.bind(x(i)),
                i.handleSaveRule = i.handleSaveRule.bind(x(i)),
                i.extractCertificateInfo = i.extractCertificateInfo.bind(x(i)),
                i.renderCertificateDetailsBtn = i.renderCertificateDetailsBtn.bind(x(i)),
                i.setDisplayCertificateWindow = i.setDisplayCertificateWindow.bind(x(i)),
                i.hideCertificateDetails = i.hideCertificateDetails.bind(x(i)),
                i.displayCertificateDetails = i.displayCertificateDetails.bind(x(i)),
                i
            }
            return function(e, t, n) {
                t && M(e.prototype, t),
                n && M(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    if (t.showAddRule && !this.state.showAddRule || !t.showAddRule && this.state.showAddRule || t.displayCertificateWindow && !this.state.displayCertificateWindow || !t.displayCertificateWindow && this.state.displayCertificateWindow || this.props.flagged !== e.flagged || this.props.read !== e.read || this.props.junk !== e.junk || this.props.signInfo !== e.signInfo)
                        return !0
                }
            }, {
                key: "printToastCurrentSingle",
                value: function() {
                    this.refSinglePrintToast.current = (0,
                    h.Am)(a.createElement("div", {
                        className: "ow-print-notification-toast",
                        id: "ow-print-Toast-id"
                    }, (0,
                    u.t)("mail.printMailNotification.MESSAGE")))
                }
            }, {
                key: "handleSinglePrintMail",
                value: function() {
                    this.printToastCurrentSingle(),
                    this.props.onPrintMail(this.refSinglePrintToast.current)
                }
            }, {
                key: "handleInviteToEvent",
                value: function() {
                    var e = this.props;
                    (0,
                    e.onInviteToEvent)(e.accountEmail)
                }
            }, {
                key: "callBackForReset",
                value: function() {
                    var e, t;
                    (UXConfig.advertisement.adBanner || UXConfig.advertisement.skyscrapper) && ((null === (e = [K]) || void 0 === e || !e.includes(null === (t = this.props) || void 0 === t ? void 0 : t.layout)) && this.props.index < UXConfig.advertisement.refreshAdCounter && this.props.onRefresh())
                }
            }, {
                key: "handleViewSource",
                value: function() {
                    (0,
                    this.props.onViewSource)(this.context.windowId)
                }
            }, {
                key: "setDisplayWindow",
                value: function(e) {
                    this.setState({
                        showAddRule: e
                    })
                }
            }, {
                key: "handleSaveRule",
                value: function(e) {
                    (0,
                    this.props.onSave)(e, {
                        selected: this.state.ruleSelected,
                        action: "add"
                    }),
                    this.setDisplayWindow(!1)
                }
            }, {
                key: "displayRulesModal",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.folderData
                      , i = t.mailFilter
                      , r = t.accountInfo
                      , o = t.mailSummary
                      , l = this.state.ruleSelected
                      , c = i.filterConditionInputs
                      , s = i.filterActions
                      , d = (0,
                    y.Nw)(l, c, s);
                    d.conditions.from[0].value = o.from.address,
                    d.conditions.subject[0].value = o.subject;
                    var u = d;
                    return a.createElement(v.Z, {
                        show: !0,
                        isNew: !0,
                        data: u,
                        mailFilter: i,
                        folderList: n,
                        accountInfo: r,
                        onSave: this.handleSaveRule,
                        onCancel: function() {
                            return e.setDisplayWindow(!1)
                        }
                    })
                }
            }, {
                key: "renderAddRule",
                value: function() {
                    this.setState({
                        showAddRule: !0
                    })
                }
            }, {
                key: "extractCertificateInfo",
                value: function(e) {
                    var t = {};
                    return t.isValid = e.signatureValid && e.signerCertificateValidAtSigningTime && !e.impersonification && e.chainBuilt && e.chainValidated && !e.chainRevoked,
                    t.isValid ? (t.iconName = "ok-circled",
                    t.clsClass = "ow-certificate-ok",
                    t.text = (0,
                    u.t)("certmail.certificate.VALID")) : (t.iconName = "attention",
                    t.clsClass = "ow-certificate-nok",
                    t.text = (0,
                    u.t)("certmail.certificate.NOT_VALID")),
                    t
                }
            }, {
                key: "renderCertificateDetailsBtn",
                value: function() {
                    var e = ""
                      , t = this.props
                      , n = t.isCertmail
                      , i = t.signInfo
                      , r = t.part;
                    return n && (e = this.extractCertificateInfo(i)),
                    n && E()(r) && a.createElement(w.Z, {
                        className: "ow-certificate-display-btn ".concat(e.clsClass),
                        onClick: this.displayCertificateDetails,
                        iconName: e.iconName
                    }, e.text)
                }
            }, {
                key: "displayCertificateDetails",
                value: function() {
                    this.setDisplayCertificateWindow(!0)
                }
            }, {
                key: "hideCertificateDetails",
                value: function() {
                    this.setDisplayCertificateWindow(!1)
                }
            }, {
                key: "setDisplayCertificateWindow",
                value: function(e) {
                    this.setState({
                        displayCertificateWindow: e
                    })
                }
            }, {
                key: "renderReplyAll",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.onReplyAll
                      , i = t.disbleEmailOperations;
                    return a.createElement(o.Z.Button, {
                        onClick: function(t) {
                            e.handleReply(t, n)
                        },
                        "aria-label": (0,
                        u.t)("mail.action.REPLY_ALL"),
                        disabled: i,
                        "aria-disabled": i
                    }, a.createElement(d.Z, {
                        name: "replyAll-mail"
                    }))
                }
            }, {
                key: "handleForwardInline",
                value: function(e) {
                    var t = this.props
                      , n = t.selectedMailId;
                    if (t.mailSummary.size > (0,
                    f.Z)("mail.maxMessageSizeForLoader") && this.setState({
                        spinner: !0
                    }),
                    n && 0 !== n) {
                        var a = document.createEvent("CustomEvent");
                        a.initCustomEvent("savecloseCompose", !1, !1, {
                            maximize: !0,
                            onMinimize: this.handleForwardInlineExtended(e)
                        }),
                        window.dispatchEvent(a)
                    } else
                        this.handleForwardInlineExtended(e)
                }
            }, {
                key: "handleForwardInlineExtended",
                value: function(e) {
                    var t = this;
                    e && (e.stopPropagation(),
                    setTimeout(function() {
                        t.props.onForwardInline(e)
                    }, 100))
                }
            }, {
                key: "handleReply",
                value: function(e, t) {
                    var n = this.props
                      , a = n.selectedMailId;
                    if (n.mailSummary.size > (0,
                    f.Z)("mail.maxMessageSizeForLoader") && this.setState({
                        spinner: !0
                    }),
                    a && 0 !== a) {
                        var i = document.createEvent("CustomEvent");
                        i.initCustomEvent("savecloseCompose", !1, !1, {
                            maximize: !0,
                            onMinimize: this.handleReplyExtended(e, t)
                        }),
                        window.dispatchEvent(i)
                    } else
                        this.handleReplyExtended(e, t)
                }
            }, {
                key: "handleReplyExtended",
                value: function(e, t) {
                    var n = this.props
                      , a = n.onReplyAll
                      , i = n.onReply;
                    setTimeout(function() {
                        return "onReply" == t.name ? i() : a()
                    }, 100)
                }
            }, {
                key: "handleForwardAttachment",
                value: function(e) {
                    if (e) {
                        e.stopPropagation();
                        var t = this.props.selectedMailId;
                        if (t && 0 !== t) {
                            var n = document.createEvent("CustomEvent");
                            n.initCustomEvent("savecloseCompose", !1, !1, {
                                maximize: !0,
                                onMinimize: this.props.onForwardAttachment(e)
                            }),
                            window.dispatchEvent(n)
                        } else
                            this.props.onForwardAttachment(e)
                    }
                }
            }, {
                key: "renderDropdownWhenPartDisabled",
                value: function() {
                    var e, t, n, i, r = this, c = this.props, d = c.junk, f = c.read, p = c.flagged, h = c.isSelf, v = c.onMarkAsSpam, y = c.onMarkAsNotSpam, b = c.onMarkAsRead, E = c.onMarkAsUnread, w = c.isExternalAccount, g = (c.folderData,
                    c.folderPaths), C = c.onMoveCategory, S = c.onSelectFolder, A = c.onSafeSender, O = c.onBlockSender, T = c.onBlockDomain, P = c.onBlockSenderAndMarkAsSpam, I = c.onBlockDomainAndMarkAsSpam, k = c.onSafesenderAndMarkAsNotSpam, N = c.onMarkAsFlag, R = c.onClearFlag, D = c.onDelete, _ = c.onReply, M = c.onForward, L = c.onCreateGroup, j = c.onSaveEMLFile, F = c.cancelSendInProgress, x = c.mailSummary, B = c.disbleEmailOperations, Z = c.currentCategory, V = c.previewInstance, K = c.onMarkAsPhishing, G = c.moveTofolderData, z = !1;
                    F && x && x.folderPath && m.YX.DRAFT === x.folderPath && (z = !0);
                    var Y = window.ux.getWindow(V)
                      , X = Y && Y.document.body;
                    return a.createElement(a.Fragment, null, a.createElement(o.Z.Dropdown, {
                        pullRight: !0,
                        title: ""
                    }, a.createElement(s.Z, {
                        disabled: B,
                        "aria-label": (0,
                        u.t)("mail.action.REPLY"),
                        "aria-disabled": B,
                        onClick: function(e) {
                            r.handleReply(e, _)
                        }
                    }, (0,
                    u.t)("mail.action.REPLY")), a.createElement(l.Z, {
                        overlayContainer: X,
                        onClick: M,
                        title: (0,
                        u.t)("mail.action.FORWARD"),
                        "aria-label": (0,
                        u.t)("mail.action.FORWARD")
                    }, a.createElement(s.Z, {
                        onClick: this.handleForwardAttachment,
                        active: /attachment/.test(x && x.forwardType),
                        "aria-label": (0,
                        u.t)("mail.action.ATTACHMENT")
                    }, (0,
                    u.t)("mail.action.ATTACHMENT")), a.createElement(s.Z, {
                        onClick: this.handleForwardInline,
                        active: /inline/.test(x && x.forwardType),
                        "aria-label": (0,
                        u.t)("mail.action.INLINE")
                    }, (0,
                    u.t)("mail.action.INLINE"))), a.createElement(s.Z, {
                        onClick: function() {
                            D(r.callBackForReset)
                        },
                        "aria-label": (0,
                        u.t)("mail.action.DELETE"),
                        disabled: z,
                        "aria-disabled": z
                    }, (0,
                    u.t)("mail.action.DELETE")), a.createElement(W, {
                        overlayContainer: X,
                        folderData: G,
                        folderPaths: g,
                        onSelectFolder: S,
                        title: (0,
                        u.t)("mail.action.MOVE_TO")
                    }, a.createElement(U, {
                        overlayContainer: X,
                        onMoveCategory: C,
                        currentCategory: Z
                    })), a.createElement(s.Z, {
                        divider: !0
                    }), !h && a.createElement(s.Z, {
                        onClick: A,
                        disabled: B,
                        "aria-label": (0,
                        u.t)("mail.action.SAFE_SENDER"),
                        "aria-disabled": B
                    }, (0,
                    u.t)("mail.action.SAFE_SENDER")), !w && !d && a.createElement(l.Z, {
                        overlayContainer: X,
                        className: "ow-mail-markasSpam-dropdown",
                        title: (0,
                        u.t)("mail.action.MARK_AS_SPAM"),
                        disabled: B,
                        "aria-label": (0,
                        u.t)("mail.action.MARK_AS_SPAM"),
                        "aria-disabled": B
                    }, a.createElement(s.Z, {
                        disabled: h || B,
                        onClick: P,
                        "aria-label": (0,
                        u.t)("mail.action.MARK_AS_SPAM_BLOCK_SENDER"),
                        "aria-disabled": h || B
                    }, (0,
                    u.t)("mail.action.MARK_AS_SPAM_BLOCK_SENDER")), a.createElement(s.Z, {
                        disabled: B,
                        onClick: I,
                        "aria-label": (0,
                        u.t)("mail.action.MARK_AS_SPAM_BLOCK_DOMAIN"),
                        "aria-disabled": B
                    }, (0,
                    u.t)("mail.action.MARK_AS_SPAM_BLOCK_DOMAIN")), a.createElement(s.Z, {
                        onClick: v,
                        "aria-label": (0,
                        u.t)("mail.action.MARK_AS_SPAM")
                    }, (0,
                    u.t)("mail.action.MARK_AS_SPAM"))), !w && !d && a.createElement(s.Z, {
                        onClick: K,
                        "aria-label": (0,
                        u.t)("mail.action.PHISHING")
                    }, (0,
                    u.t)("mail.action.PHISHING")), !w && d && a.createElement(l.Z, {
                        overlayContainer: X,
                        className: "ow-mail-markasSpam-dropdown",
                        title: (0,
                        u.t)("mail.action.MARK_AS_NOT_SPAM"),
                        "aria-label": (0,
                        u.t)("mail.action.MARK_AS_NOT_SPAM")
                    }, a.createElement(s.Z, {
                        onClick: k,
                        "aria-label": (0,
                        u.t)("mail.action.MARK_AS_NOT_SPAM_SAFE_SENDER")
                    }, (0,
                    u.t)("mail.action.MARK_AS_NOT_SPAM_SAFE_SENDER")), a.createElement(s.Z, {
                        onClick: y,
                        "aria-label": (0,
                        u.t)("mail.action.MARK_AS_NOT_SPAM")
                    }, (0,
                    u.t)("mail.action.MARK_AS_NOT_SPAM"))), !h && a.createElement(s.Z, {
                        onClick: O,
                        disabled: B,
                        "aria-label": (0,
                        u.t)("mail.action.BLOCK_SENDER"),
                        "aria-disabled": B
                    }, (0,
                    u.t)("mail.action.BLOCK_SENDER")), a.createElement(s.Z, {
                        onClick: T,
                        disabled: B,
                        "aria-label": (0,
                        u.t)("mail.action.BLOCK_DOMAIN"),
                        "aria-disabled": B
                    }, (0,
                    u.t)("mail.action.BLOCK_DOMAIN")), a.createElement(s.Z, {
                        divider: !0
                    }), f ? a.createElement(s.Z, {
                        onClick: E,
                        "aria-label": (0,
                        u.t)("mail.action.UNREAD")
                    }, (0,
                    u.t)("mail.action.UNREAD")) : a.createElement(s.Z, {
                        onClick: b,
                        "aria-label": (0,
                        u.t)("mail.action.READ")
                    }, (0,
                    u.t)("mail.action.READ")), a.createElement(l.Z, {
                        overlayContainer: X,
                        title: (0,
                        u.t)("mail.action.FLAG"),
                        "aria-label": (0,
                        u.t)("mail.action.FLAG"),
                        className: "ow-mail-markasSpam-dropdown"
                    }, a.createElement(s.Z, {
                        disabled: p,
                        onClick: N,
                        "aria-label": (0,
                        u.t)("mail.action.FLAG_FOR_FOLLOW_UP"),
                        "aria-disabled": p
                    }, (0,
                    u.t)("mail.action.FLAG_FOR_FOLLOW_UP")), a.createElement(s.Z, {
                        disabled: !p,
                        onClick: R,
                        "aria-label": (0,
                        u.t)("mail.action.CLEAR_FLAG"),
                        "aria-disabled": !p
                    }, (0,
                    u.t)("mail.action.CLEAR_FLAG"))), void 0 === this.context.windowId && a.createElement(s.Z, {
                        onClick: L,
                        disabled: B || void 0 != this.context.windowId,
                        "aria-label": (0,
                        u.t)("mail.action.CREATE_GROUP"),
                        "aria-disabled": B || void 0 != (null === this || void 0 === this ? void 0 : null === (e = this.context) || void 0 === e ? void 0 : e.windowId)
                    }, (0,
                    u.t)("mail.action.CREATE_GROUP")), a.createElement(s.Z, {
                        onClick: this.handleViewSource,
                        "aria-label": (0,
                        u.t)("mail.action.VIEW_SOURCE")
                    }, (0,
                    u.t)("mail.action.VIEW_SOURCE")), void 0 === this.context.windowId && a.createElement(s.Z, {
                        onClick: this.handleSinglePrintMail,
                        disabled: void 0 != this.context.windowId,
                        "aria-label": (0,
                        u.t)("mail.action.PRINT_EMAIL"),
                        "aria-disabled": void 0 != (null === this || void 0 === this ? void 0 : null === (t = this.context) || void 0 === t ? void 0 : t.windowId)
                    }, (0,
                    u.t)("mail.action.PRINT_EMAIL")), a.createElement(s.Z, {
                        onClick: j,
                        "aria-label": (0,
                        u.t)("mail.action.SAVEASEML_EMAIL")
                    }, (0,
                    u.t)("mail.action.SAVEASEML_EMAIL")), H && void 0 === this.context.windowId && a.createElement(s.Z, {
                        onClick: this.handleInviteToEvent,
                        disabled: B || void 0 != this.context.windowId,
                        "aria-label": (0,
                        u.t)("mail.action.INVITE_RECIPIENTS"),
                        "aria-disabled": B || void 0 != (null === this || void 0 === this ? void 0 : null === (n = this.context) || void 0 === n ? void 0 : n.windowId)
                    }, (0,
                    u.t)("mail.action.INVITE_RECIPIENTS")), void 0 === this.context.windowId && a.createElement(s.Z, {
                        onClick: function() {
                            r.renderAddRule()
                        },
                        disabled: void 0 != this.context.windowId,
                        "aria-label": (0,
                        u.t)("mail.action.ADD_RULE_FILTER"),
                        "aria-disabled": void 0 != (null === this || void 0 === this ? void 0 : null === (i = this.context) || void 0 === i ? void 0 : i.windowId)
                    }, (0,
                    u.t)("mail.action.ADD_RULE_FILTER"))), this.state.showAddRule && this.displayRulesModal())
                }
            }, {
                key: "renderDropdownWhenPartEnabled",
                value: function() {
                    var e = this.props
                      , t = e.onReply
                      , n = e.onForward
                      , i = e.onPrintMail;
                    return a.createElement(o.Z.Dropdown, {
                        pullRight: !0,
                        title: ""
                    }, a.createElement(s.Z, {
                        onClick: t,
                        "aria-label": (0,
                        u.t)("mail.action.REPLY")
                    }, (0,
                    u.t)("mail.action.REPLY")), a.createElement(s.Z, {
                        onClick: n,
                        "aria-label": (0,
                        u.t)("mail.action.FORWARD")
                    }, (0,
                    u.t)("mail.action.FORWARD")), a.createElement(s.Z, {
                        onClick: i,
                        "aria-label": (0,
                        u.t)("mail.action.PRINT_EMAIL")
                    }, (0,
                    u.t)("mail.action.PRINT_EMAIL")))
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
                    var e = this.props
                      , t = e.part
                      , n = e.signInfo
                      , i = this.state.displayCertificateWindow;
                    return a.createElement(a.Fragment, null, a.createElement(o.Z, {
                        className: "ow-mail-previewToolbar",
                        onClick: function(e) {
                            e.stopPropagation()
                        }
                    }, (0,
                    f.Z)("mail.checkCertificateInfo.enabled") && i && a.createElement(R, {
                        show: !0,
                        signInfo: n,
                        onCancel: this.hideCertificateDetails
                    }), this.renderCertificateDetailsBtn(), this.renderReplyAll(), t ? this.renderDropdownWhenPartEnabled() : this.renderDropdownWhenPartDisabled()), this.state.spinner && a.createElement(p.Z, null))
                }
            }]),
            n
        }());
        G.contextTypes = {
            windowId: r().string
        },
        G.propTypes = {
            part: r().string,
            junk: r().bool,
            read: r().bool,
            flagged: r().bool,
            isSelf: r().bool,
            isExternalAccount: r().bool,
            previewInstance: r().string,
            onMarkAsSpam: r().func,
            onMarkAsPhishing: r().func,
            onMarkAsNotSpam: r().func,
            onMarkAsRead: r().func,
            onMarkAsUnread: r().func,
            onMarkAsFlag: r().func,
            onClearFlag: r().func,
            onViewSource: r().func,
            onDelete: r().func,
            onReply: r().func,
            onReplyAll: r().func,
            onForward: r().func,
            onCreateGroup: r().func,
            onAddFilterRule: r().func,
            onPrintMail: r().func,
            onSaveEMLFile: r().func,
            onSafeSender: r().func,
            onBlockSender: r().func,
            onBlockDomain: r().func,
            onBlockSenderAndMarkAsSpam: r().func,
            onInviteToEvent: r().func,
            accountEmail: r().string,
            cancelSendInProgress: r().bool,
            showAddRule: r().bool,
            displayWindow: r().bool
        },
        G.defaultProps = {
            onMarkAsSpam: function() {},
            onMarkAsPhishing: function() {},
            onMarkAsNotSpam: function() {},
            onMarkAsRead: function() {},
            onMarkAsUnread: function() {},
            onMarkAsFlag: function() {},
            onClearFlag: function() {},
            onViewSource: function() {},
            onCreateGroup: function() {},
            onAddFilterRule: function() {},
            onPrintMail: function() {},
            onSaveEMLFile: function() {},
            onDelete: function() {},
            onReply: function() {},
            onReplyAll: function() {},
            onForward: function() {},
            onSafeSender: function() {},
            onBlockSender: function() {},
            onBlockDomain: function() {},
            onBlockSenderAndMarkAsSpam: function() {},
            junk: !1,
            read: !1,
            flagged: !1,
            isSelf: !1,
            isExternalAccount: !1,
            part: void 0,
            previewInstance: "",
            onInviteToEvent: function() {},
            accountEmail: "",
            cancelSendInProgress: !1,
            showAddRule: !1,
            displayWindow: !1
        };
        var z = G
    },
    80428: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return R
            }
        });
        var a = n(87401)
          , i = n(12674)
          , r = n(23398)
          , o = n.n(r)
          , l = n(67064)
          , c = n.n(l)
          , s = n(13401)
          , d = n.n(s)
          , u = n(35369)
          , m = n(43557)
          , f = n(10091)
          , p = n(98401)
          , h = n(13536)
          , v = n(84987)
          , y = n(94165)
          , b = n(44910);
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
        var w = ["className", "children"]
          , g = ["onCancel"]
          , C = ["className", "title", "desc", "children", "onCancel", "isLoading", "loadingMessage"];
        function S() {
            return (S = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function A(e, t) {
            if (null == e)
                return {};
            var n, a, i = function(e, t) {
                if (null == e)
                    return {};
                var n, a, i = {}, r = Object.keys(e);
                for (a = 0; a < r.length; a++)
                    n = r[a],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (a = 0; a < r.length; a++)
                    n = r[a],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        function O(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, T(a.key), a)
            }
        }
        function T(e) {
            var t = function(e, t) {
                if ("object" !== E(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== E(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === E(t) ? t : String(t)
        }
        function P(e, t) {
            return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function I(e) {
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
                var n, a = N(e);
                if (t) {
                    var i = N(this).constructor;
                    n = Reflect.construct(a, arguments, i)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === E(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return k(e)
                }(this, n)
            }
        }
        function k(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function N(e) {
            return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var R = function(e) {
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
            }(n, a.PureComponent);
            var t = I(n);
            function n(e) {
                var a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (a = t.call(this, e)).state = {
                    isFormChanged: !1,
                    displayConfirm: !1,
                    disableSave: !1
                },
                a.handleFormChange = a.handleFormChange.bind(k(a)),
                a.handleFormValidSubmit = a.handleFormValidSubmit.bind(k(a)),
                a.handleSave = a.handleSave.bind(k(a)),
                a.handleCancel = a.handleCancel.bind(k(a)),
                a.handleReset = a.handleReset.bind(k(a)),
                a.setDisplayConfirm = a.setDisplayConfirm.bind(k(a)),
                a.renderSettingsHeader = a.renderSettingsHeader.bind(k(a)),
                a.renderSettingsContent = a.renderSettingsContent.bind(k(a)),
                a.renderConfirmModal = a.renderConfirmModal.bind(k(a)),
                a
            }
            return function(e, t, n) {
                t && O(e.prototype, t),
                n && O(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this.props.show;
                    t && e.show !== t && this.setState({
                        isFormChanged: !1,
                        displayConfirm: !1
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props
                      , n = t.advancedSetting
                      , a = t.isLoading;
                    if (e.advancedSetting !== n && this.scrollContainer && !a) {
                        var r = i.findDOMNode(this.scrollContainer);
                        r.scrollTop = r.scrollHeight
                    }
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
                value: function(e, t) {
                    var n = this.props
                      , a = n.isFormChangedFn
                      , i = n.onValueChanged
                      , r = t;
                    d()(a) && (r = a(e)),
                    this.setState({
                        isFormChanged: r
                    }),
                    i(e, this.form && this.form.getPristineValues(), r)
                }
            }, {
                key: "handleFormValidSubmit",
                value: function(e, t, n) {
                    var a = this.props
                      , i = a.onSave
                      , r = a.advancedSetting
                      , o = a.needtestConnection;
                    i(this.form.getCurrentValues(), r, o)
                }
            }, {
                key: "handleSave",
                value: function() {
                    var e = this;
                    this.setState({
                        displayConfirm: !1
                    }),
                    this.form.submit(),
                    this.setState({
                        disableSave: !0
                    }),
                    setTimeout(function() {
                        e.setState(function() {
                            return {
                                disableSave: !1
                            }
                        })
                    }, 1e3)
                }
            }, {
                key: "handleCancel",
                value: function() {
                    var e = this.props
                      , t = e.onCancel
                      , n = e.needConfirm;
                    if (this.state.isFormChanged && n)
                        return this.setDisplayConfirm(!0),
                        void (0,
                        b.kW)(".ow-confirmDialog .ow-icon-close");
                    t()
                }
            }, {
                key: "handleReset",
                value: function() {
                    this.props.onCancel(),
                    setTimeout(function() {
                        var e, t;
                        null === (e = document.querySelector(".ow-icon-plus")) || void 0 === e || null === (t = e.closest("button")) || void 0 === t || t.focus()
                    }, 50)
                }
            }, {
                key: "renderToolbar",
                value: function() {
                    var e = this.state.isFormChanged
                      , t = this.state.disableSave;
                    return a.createElement("div", {
                        className: "ow-settingsWindow-toolbar"
                    }, a.createElement(f.Z.Button, {
                        className: "ow-settings-button ow-button-primary",
                        disabled: !e || t,
                        onClick: this.handleSave,
                        role: y.HB.BUTTON,
                        "aria-label": (0,
                        v.t)("common.SAVE"),
                        "aria-disabled": !e || t
                    }, (0,
                    v.t)("common.SAVE")), a.createElement(f.Z.Button, {
                        className: "ow-settings-button ow-settingsButton-default",
                        onClick: this.handleCancel,
                        role: y.HB.BUTTON,
                        "aria-label": (0,
                        v.t)("common.CANCEL")
                    }, (0,
                    v.t)("common.CANCEL")))
                }
            }, {
                key: "renderSettingsHeader",
                value: function() {
                    var e = this.props
                      , t = e.title
                      , n = e.desc;
                    return a.createElement("div", {
                        className: "ow-settingsWindow-header"
                    }, a.createElement("div", {
                        className: "ow-settingsWindow-header-title",
                        role: y.HB.HEADING,
                        "aria-level": y.DU.H2,
                        "aria-label": t
                    }, t), a.createElement("div", {
                        className: "ow-settingsWindow-header-desc",
                        "aria-label": n
                    }, n))
                }
            }, {
                key: "renderSettingsContent",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = (t.className,
                    t.children);
                    A(t, w);
                    return a.createElement("div", {
                        className: "ow-settingsWindow-content"
                    }, a.Children.map(n, function(t) {
                        return t && t.type === u.l0 ? a.cloneElement(t, {
                            className: c()("ow-settingsWindow-form", t.props.className),
                            onChange: function() {
                                var n;
                                e.handleFormChange.apply(e, arguments),
                                t.props.onChange && (n = t.props).onChange.apply(n, arguments)
                            },
                            onValidSubmit: function() {
                                var n;
                                e.handleFormValidSubmit.apply(e, arguments),
                                t.props.onValidSubmit && (n = t.props).onValidSubmit.apply(n, arguments)
                            },
                            ref: function(n) {
                                e.form = n,
                                t.ref && t.ref(n)
                            }
                        }) : t
                    }))
                }
            }, {
                key: "renderConfirmModal",
                value: function() {
                    var e = this
                      , t = this.props;
                    t.onCancel,
                    A(t, g);
                    return a.createElement(h.Z, {
                        show: !0,
                        buttonConfig: ["yes", "no"],
                        title: (0,
                        v.t)("common.MESSAGE"),
                        message: (0,
                        v.t)("app.message.CONFIRM_CANCEL_EDIT"),
                        onYes: this.handleSave,
                        onNo: this.handleReset,
                        onDismiss: function() {
                            return e.setDisplayConfirm(!1)
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , i = t.title
                      , r = (t.desc,
                    t.children,
                    t.onCancel,
                    t.isLoading)
                      , o = t.loadingMessage
                      , l = A(t, C)
                      , s = this.state.displayConfirm;
                    return a.createElement(p.Z, S({
                        backdrop: "static",
                        enforceFocus: !1,
                        className: c()("ow-settings-window", n),
                        onHide: this.handleCancel
                    }, l, {
                        "aria-labelledby": "".concat(c()("ow-settings-window", n), "-dialog"),
                        "aria-label": i
                    }), a.createElement(m.Z, {
                        isShown: r,
                        message: o
                    }), a.createElement(p.Z.Header, {
                        closeButton: !0,
                        id: "".concat(c()("ow-settings-window", n), "-dialog")
                    }, this.renderSettingsHeader()), a.createElement(p.Z.Body, {
                        ref: function(t) {
                            e.scrollContainer = t
                        }
                    }, this.renderSettingsContent()), a.createElement(p.Z.Footer, null, this.renderToolbar()), s && this.renderConfirmModal())
                }
            }]),
            n
        }();
        R.defaultProps = {
            className: "",
            show: !1,
            title: "",
            desc: "",
            needConfirm: !0,
            isLoading: !1,
            loadingMessage: "",
            isFormChangedFn: void 0,
            onSave: function() {},
            onCancel: function() {},
            onValueChanged: function() {},
            children: null,
            advancedSetting: !1
        },
        R.propTypes = {
            className: o().string,
            show: o().bool,
            title: o().string,
            desc: o().string,
            needConfirm: o().bool,
            isLoading: o().bool,
            loadingMessage: o().string,
            isFormChangedFn: o().func,
            onSave: o().func,
            onCancel: o().func,
            onValueChanged: o().func,
            children: o().node,
            advancedSetting: o().bool
        }
    },
    92176: function(e, t, n) {
        "use strict";
        var a = n(87401)
          , i = n(23398)
          , r = n(67064)
          , o = n.n(r)
          , l = n(35536)
          , c = n(55594)
          , s = n.n(c)
          , d = n(42583)
          , u = n.n(d)
          , m = n(76707)
          , f = n.n(m)
          , p = n(40944)
          , h = n(88307)
          , v = n(71850)
          , y = n(94165);
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
        var E = ["label", "disabled", "labelClassName"]
          , w = ["errorPlacement", "getErrorMessage"]
          , g = ["disabled", "showTooltip", "errorPlacement", "onValidate", "getValue", "getErrorMessage"]
          , C = ["className", "label", "getValue", "getErrorMessage", "disabled", "showTooltip", "errorPlacement", "onValidate"];
        function S() {
            return (S = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function A(e, t) {
            if (null == e)
                return {};
            var n, a, i = function(e, t) {
                if (null == e)
                    return {};
                var n, a, i = {}, r = Object.keys(e);
                for (a = 0; a < r.length; a++)
                    n = r[a],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (a = 0; a < r.length; a++)
                    n = r[a],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        function O(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, T(a.key), a)
            }
        }
        function T(e) {
            var t = function(e, t) {
                if ("object" !== b(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== b(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === b(t) ? t : String(t)
        }
        function P(e, t) {
            return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function I(e) {
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
                var n, a = N(e);
                if (t) {
                    var i = N(this).constructor;
                    n = Reflect.construct(a, arguments, i)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === b(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return k(e)
                }(this, n)
            }
        }
        function k(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function N(e) {
            return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var R = {
            className: i.string,
            labelClassName: i.string,
            label: i.string,
            errorPlacement: i.string,
            disabled: i.bool,
            showTooltip: i.bool,
            isFormSubmitted: i.func,
            getErrorMessage: i.func,
            onChange: i.func,
            onValidate: i.func,
            setValue: i.func,
            getValue: i.func
        }
          , D = function(e) {
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
            }(n, a.Component);
            var t = I(n);
            function n(e) {
                var a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (a = t.call(this, e)).state = {
                    allowError: !1,
                    showContactPicker: !1
                },
                a.isFormSubmitted = void 0,
                a.onChangeAddress = a.onChangeAddress.bind(k(a)),
                a.handlePickerSelect = a.handlePickerSelect.bind(k(a)),
                a.handlePickerCancel = a.handlePickerCancel.bind(k(a)),
                a.handlePickerOpen = a.handlePickerOpen.bind(k(a)),
                a.renderContactLabel = a.renderContactLabel.bind(k(a)),
                a.renderContactFields = a.renderContactFields.bind(k(a)),
                a.renderToolTip = a.renderToolTip.bind(k(a)),
                a
            }
            return function(e, t, n) {
                t && O(e.prototype, t),
                n && O(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = e.isFormSubmitted;
                    (t = t()) !== this.isFormSubmitted && (this.setState({
                        allowError: t
                    }),
                    this.isFormSubmitted = t)
                }
            }, {
                key: "onChangeAddress",
                value: function() {
                    var e = this.props
                      , t = e.setValue
                      , a = e.onChange
                      , i = n.convertToString(this.autoInputRef.getValues());
                    t(i),
                    a(i),
                    this.displayError(!0)
                }
            }, {
                key: "displayError",
                value: function(e) {
                    this.setState({
                        allowError: e
                    })
                }
            }, {
                key: "isValuesValid",
                value: function() {
                    return this.autoInputRef && this.autoInputRef.isValuesValid()
                }
            }, {
                key: "handlePickerSelect",
                value: function(e) {
                    var t = this.props
                      , a = t.setValue
                      , i = t.onChange
                      , r = this.autoInputRef.getValues();
                    if (e.length > 0) {
                        e.forEach(function(e) {
                            r.push({
                                name: (0,
                                p._t)(e).title || e.displayName,
                                address: e.email
                            })
                        });
                        var o = n.convertToString(r);
                        a(o),
                        i(o),
                        this.displayError(!0)
                    }
                    this.setState({
                        showContactPicker: !1
                    })
                }
            }, {
                key: "handlePickerCancel",
                value: function() {
                    this.setState({
                        showContactPicker: !1
                    })
                }
            }, {
                key: "handlePickerOpen",
                value: function() {
                    this.props.disabled || this.setState({
                        showContactPicker: !0
                    })
                }
            }, {
                key: "renderContactLabel",
                value: function() {
                    var e = this.props
                      , t = e.label
                      , n = e.disabled
                      , i = e.labelClassName;
                    A(e, E);
                    return a.createElement("div", {
                        className: i || "ow-formField-labelWrapper ow-contactsLabelField-labelWrapper"
                    }, a.createElement(s(), {
                        onClick: this.handlePickerOpen,
                        disabled: n,
                        "aria-label": t
                    }, t))
                }
            }, {
                key: "renderToolTip",
                value: function() {
                    var e = this.props
                      , t = e.errorPlacement
                      , n = e.getErrorMessage
                      , i = (A(e, w),
                    this.state.allowError && (n() || ""));
                    return a.createElement(u(), {
                        className: "ow-ErrorTooltip",
                        placement: t
                    }, i)
                }
            }, {
                key: "renderContactFields",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.disabled
                      , i = t.showTooltip
                      , r = t.errorPlacement
                      , o = t.onValidate
                      , l = t.getValue
                      , c = t.getErrorMessage
                      , s = A(t, g)
                      , d = this.state.allowError && (c() || "")
                      , u = l() && JSON.parse(l());
                    return a.createElement("div", {
                        className: "ow-formField-contentWrapper ow-contactsLabelField-inputWrapper"
                    }, a.createElement(v.Z, S({}, s, {
                        autoInputRef: function(t) {
                            e.autoInputRef = t
                        },
                        values: u,
                        onAdd: function(t) {
                            e.onChangeAddress(),
                            o(t)
                        },
                        onDelete: this.onChangeAddress,
                        onUpdate: o,
                        onChange: function() {},
                        onBlur: this.onChangeAddress,
                        disabled: n
                    })), d && a.createElement(f(), {
                        show: i,
                        placement: r,
                        container: document.body,
                        target: this.autoInputRef,
                        rootClose: !0
                    }, this.renderToolTip()))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = (e.label,
                    e.getValue,
                    e.getErrorMessage)
                      , i = (e.disabled,
                    e.showTooltip,
                    e.errorPlacement,
                    e.onValidate,
                    A(e, C),
                    this.state.showContactPicker)
                      , r = this.state.allowError && (n() || "");
                    return [a.createElement("div", {
                        className: o()("ow-formField ow-contactsLabelField", r ? "invalid" : "", t),
                        "aria-live": r ? y.HO.POLITE : y.HO.OFF,
                        "aria-label": r
                    }, this.renderContactLabel(), this.renderContactFields()), i && a.createElement(h.Z, {
                        onSelect: this.handlePickerSelect,
                        onCancel: this.handlePickerCancel
                    })]
                }
            }], [{
                key: "convertToJSON",
                value: function(e) {
                    return e && JSON.parse(e)
                }
            }, {
                key: "convertToString",
                value: function(e) {
                    return e && JSON.stringify(e)
                }
            }]),
            n
        }();
        D.propTypes = R,
        D.defaultProps = {
            className: "",
            labelClassName: "",
            label: "",
            errorPlacement: "top",
            disabled: !1,
            showTooltip: !0,
            getErrorMessage: function() {},
            isFormSubmitted: function() {},
            onChange: function() {},
            onValidate: function() {},
            setValue: function() {},
            getValue: function() {}
        },
        t.Z = (0,
        l.pd)(D)
    },
    91890: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return Z
            }
        });
        var a = n(87401)
          , i = n(23398)
          , r = n.n(i)
          , o = n(65487)
          , l = n.n(o)
          , c = n(27542)
          , s = n.n(c)
          , d = n(47957)
          , u = n.n(d)
          , m = n(27969)
          , f = n.n(m)
          , p = n(50328)
          , h = n(92176)
          , v = n(35369)
          , y = n(77545)
          , b = n(84987)
          , E = n(90656)
          , w = n(7179)
          , g = n(70293)
          , C = n.n(g)
          , S = n(38868)
          , A = n.n(S)
          , O = n(83416)
          , T = n(68777)
          , P = n(94165);
        function I(e) {
            "@babel/helpers - typeof";
            return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var k = ["isNew", "onSave"];
        function N(e, t) {
            if (null == e)
                return {};
            var n, a, i = function(e, t) {
                if (null == e)
                    return {};
                var n, a, i = {}, r = Object.keys(e);
                for (a = 0; a < r.length; a++)
                    n = r[a],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (a = 0; a < r.length; a++)
                    n = r[a],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        function R() {
            return (R = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function D(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, _(a.key), a)
            }
        }
        function _(e) {
            var t = function(e, t) {
                if ("object" !== I(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== I(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === I(t) ? t : String(t)
        }
        function M(e, t) {
            return (M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function L(e) {
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
                var n, a = F(e);
                if (t) {
                    var i = F(this).constructor;
                    n = Reflect.construct(a, arguments, i)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === I(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return j(e)
                }(this, n)
            }
        }
        function j(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function F(e) {
            return (F = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var x = (0,
        O.Z)("settings.rulesBodyConditionSize.enabled")
          , B = x ? (0,
        O.Z)("settings.rulesBodyConditionSize.maxBodySizeString") : 255
          , Z = function(e) {
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
                t && M(e, t)
            }(n, a.PureComponent);
            var t = L(n);
            function n(e) {
                var a;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                a = t.call(this, e);
                var i = e.mailFilter
                  , r = i.filterConditionInputs
                  , o = i.filterActions
                  , c = i.filterConditionOverrides
                  , s = null !== c && void 0 !== c && c.domain && null !== c && void 0 !== c && c.mailreport ? r.concat(",mailreport,domain") : r
                  , d = (0,
                w.Nw)(e.data, s, o);
                return a.state = {
                    initialData: l()({}, d),
                    data: d,
                    currentAction: (0,
                    w.qd)(d.actions),
                    anyOrAll: "",
                    formOrDomain: "from"
                },
                a.setCurrentAction = a.setCurrentAction.bind(j(a)),
                a.renderConditionFields = a.renderConditionFields.bind(j(a)),
                a.renderActionField = a.renderActionField.bind(j(a)),
                a.toggleRadioFromOrDomain = a.toggleRadioFromOrDomain.bind(j(a)),
                a.renderDropdDownOptions = a.renderDropdDownOptions.bind(j(a)),
                a.saveFromData = a.saveFromData.bind(j(a)),
                a
            }
            return function(e, t, n) {
                t && D(e.prototype, t),
                n && D(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillMount",
                value: function() {
                    var e, t, n, a, i, r = this.state.data.conditions;
                    null !== (e = this.props) && void 0 !== e && e.isNew || !((null === r || void 0 === r ? void 0 : null === (t = r.domain) || void 0 === t ? void 0 : t.length) > 1 || 1 === (null === r || void 0 === r ? void 0 : null === (n = r.domain) || void 0 === n ? void 0 : n.length) && "" !== (null === r || void 0 === r ? void 0 : null === (a = r.domain) || void 0 === a ? void 0 : null === (i = a[0]) || void 0 === i ? void 0 : i.value)) || this.setState({
                        formOrDomain: "domain"
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    document.querySelectorAll(".Select-value").forEach(function(e) {
                        e.removeAttribute("ROLE", "listbox")
                    })
                }
            }, {
                key: "getActionOptions",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w.LZ.actions
                      , t = this.props.mailFilter.filterActions.split(",").map(function(t) {
                        var n;
                        return {
                            label: (0,
                            b.t)("settings.rules.rule_detail.ACTIONS.".concat(t)),
                            value: null === (n = e[t]) || void 0 === n ? void 0 : n.key
                        }
                    }).filter(function(e) {
                        return void 0 !== (null === e || void 0 === e ? void 0 : e.value)
                    });
                    return t.unshift({
                        label: (0,
                        b.t)("settings.rules.rule_detail.PLEASE_SELECT"),
                        value: "",
                        disabled: !0
                    }),
                    t
                }
            }, {
                key: "getFolderOptions",
                value: function() {
                    var e = []
                      , t = this.props.folderList;
                    return this.getFolderPath(t, e),
                    e.unshift({
                        label: (0,
                        b.t)("settings.rules.rule_detail.PLEASE_SELECT"),
                        value: "",
                        disabled: !0
                    }),
                    e
                }
            }, {
                key: "getFolderPath",
                value: function(e, t) {
                    var n = this;
                    e.forEach(function(e) {
                        t.push({
                            label: e.type ? (0,
                            b.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(e.type)) : e.path,
                            value: e.path
                        }),
                        e.subfolders && n.getFolderPath(e.subfolders, t)
                    })
                }
            }, {
                key: "setCurrentAction",
                value: function(e) {
                    this.setState({
                        currentAction: e
                    })
                }
            }, {
                key: "getActionField",
                value: function(e) {
                    var t = this
                      , n = this.state.data
                      , i = this.getFolderOptions()
                      , r = this.props.mailFilter.allowedWriteHeaders
                      , o = this.props.accountInfo;
                    switch (e) {
                    case "moveToFolder":
                    case "copyToFolder":
                        return function(t) {
                            return a.createElement(v.Hi, R({}, t, {
                                options: i,
                                value: n.actions[e] ? n.actions[e] : i[0],
                                onChange: function(t) {
                                    n.actions[e] = t || null
                                },
                                validations: {
                                    customRegexp: function(e, t) {
                                        return !(!t || t === i[0]) || (0,
                                        b.t)("common.errorMessage.REQUIRED")
                                    }
                                }
                            }))
                        }
                        ;
                    case "forwardToEmail":
                        return function(i) {
                            var r = i.value && i.value.split(",").map(function(e) {
                                return {
                                    name: e,
                                    address: e
                                }
                            }) || [];
                            return a.createElement(h.Z, R({}, i, {
                                dropdownProps: {
                                    dropup: !0,
                                    pullRight: !0
                                },
                                innerRef: function(e) {
                                    t.contactsAutoSuggestRef = e
                                },
                                autoFocus: !1,
                                onChange: function(t) {
                                    n.actions[e] = JSON.parse(t).map(function(e) {
                                        return e.address
                                    }).join(",")
                                },
                                allowSelf: !1,
                                value: JSON.stringify(r),
                                validations: {
                                    customRegexp: function(e, n) {
                                        var a = JSON.parse(n);
                                        return a.length ? a.some(function(e) {
                                            return e.address === o.email
                                        }) ? (0,
                                        b.t)("settings.errorMessage.RULE_ADDSELF_ERROR") : !(t.contactsAutoSuggestRef && !t.contactsAutoSuggestRef.isValuesValid()) : (0,
                                        b.t)("common.errorMessage.REQUIRED")
                                    }
                                }
                            }))
                        }
                        ;
                    case "markAsRead":
                    case "discard":
                        return void (n.actions[e] = !0);
                    case "writeHeaders":
                        var l, c, s = u()(n, "actions[".concat(e, "][0]"), "");
                        s && r && !r.includes(s) && (null === (l = r) || void 0 === l ? void 0 : null === (c = l.split(",")) || void 0 === c ? void 0 : c.length) > 1 && (r = "".concat(r, ",").concat(null === n || void 0 === n ? void 0 : n.actions[e][0]));
                        var d = r && r.split(",").map(function(e) {
                            return {
                                label: e,
                                value: e
                            }
                        }) || null;
                        return null === d || void 0 === d || d.unshift({
                            label: (0,
                            b.t)("settings.rules.rule_detail.PLEASE_SELECT"),
                            value: (0,
                            b.t)("settings.rules.rule_detail.PLEASE_SELECT"),
                            disabled: !0
                        }),
                        function(t) {
                            return d && d.length > 1 ? a.createElement(v.Hi, R({}, t, {
                                options: d,
                                value: n.actions[e] ? n.actions[e][0] : i[0],
                                onChange: function(t) {
                                    n.actions[e] = [t]
                                },
                                validations: {
                                    customRegexp: function(e, t) {
                                        return !(!t || t === i[0]) || (0,
                                        b.t)("common.errorMessage.REQUIRED")
                                    }
                                }
                            })) : a.createElement(v.UP, {
                                name: "writeHeader",
                                value: n.actions[e] ? n.actions[e][0] : "",
                                className: "ow-settingsDetail-formField-labelHidden",
                                onChange: function(t) {
                                    n.actions[e] = [t]
                                },
                                validations: {
                                    customRegexp: function(e, t) {
                                        return t.length < 1 ? (0,
                                        b.t)("common.errorMessage.REQUIRED") : /[’/`~!#*$@_%+=.,^&(){}[\]|;”<>?\\]/g.test(t) ? (0,
                                        b.t)("settings.rules.rule_detail.WRITEHEADER_NOT_SUPPORTED_CHARS_ERROR") : /^(X-)/.test(t) ? /^X-[a-zA-Z0-9_]*[a-zA-Z0-9]+( *:\s *[ a-zA-Z0-9_]*[a-zA-Z0-9]+)$/.test(t) ? !(t.length > B) || (0,
                                        E.WU)((0,
                                        b.t)("settings.profile.maxLengthText"), B) : (0,
                                        b.t)("settings.rules.rule_detail.WRITEHEADER_KEY_VALUE_SEPERATION_ERROR") : (0,
                                        b.t)("settings.rules.rule_detail.WRITEHEADER_BEGIN_WITH_ERROR")
                                    }
                                }
                            })
                        }
                        ;
                    default:
                        return null
                    }
                }
            }, {
                key: "toggleRadioFromOrDomain",
                value: function(e, t) {
                    var n = this
                      , i = this.state.formOrDomain;
                    return ("domain" === e.header || "from" === e.header) && a.createElement("div", {
                        className: "ow-settingsMailRuleWindow-Domain_From"
                    }, a.createElement(T.Z, {
                        name: "fromOrDomainOption",
                        value: i,
                        alignText: "right",
                        list: [{
                            value: "from",
                            text: (0,
                            b.t)("settings.rules.rule_detail.TITLE.from")
                        }, {
                            value: "domain",
                            text: (0,
                            b.t)("settings.rules.rule_detail.TITLE.domain")
                        }],
                        onChange: function(e) {
                            n.setState({
                                formOrDomain: e
                            })
                        }
                    }))
                }
            }, {
                key: "renderDropdDownOptions",
                value: function(e) {
                    switch (e.header) {
                    case "domain":
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w.LZ.conditionMatchTypeDomain;
                            return Object.keys(e).map(function(t) {
                                return {
                                    label: (0,
                                    b.t)("settings.rules.rule_detail.CONDITION_MATCHES.".concat(t)),
                                    value: e[t]
                                }
                            })
                        }();
                    case "body":
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w.LZ.conditionMatchTypeBody;
                            return Object.keys(e).map(function(t) {
                                return {
                                    label: (0,
                                    b.t)("settings.rules.rule_detail.CONDITION_MATCHES.".concat(t)),
                                    value: e[t]
                                }
                            })
                        }();
                    default:
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w.LZ.conditionMatchType;
                            return Object.keys(e).map(function(t) {
                                return {
                                    label: (0,
                                    b.t)("settings.rules.rule_detail.CONDITION_MATCHES.".concat(t)),
                                    value: e[t]
                                }
                            })
                        }()
                    }
                }
            }, {
                key: "saveFromData",
                value: function(e, t) {
                    var n, a, i = e.conditions, r = i.from, o = i.domain;
                    "from" === t && ((null === o || void 0 === o ? void 0 : o.length) > 1 || 1 === (null === o || void 0 === o ? void 0 : o.length) && "" !== (null === o || void 0 === o ? void 0 : null === (n = o[0]) || void 0 === n ? void 0 : n.value)) ? (o.splice(1),
                    o[0].value = "") : "domain" === t && ((null === r || void 0 === r ? void 0 : r.length) > 1 || 1 === (null === r || void 0 === r ? void 0 : r.length) && "" !== (null === r || void 0 === r ? void 0 : null === (a = r[0]) || void 0 === a ? void 0 : a.value)) && (r.splice(1),
                    r[0].value = "")
                }
            }, {
                key: "renderConditionField",
                value: function(e, t, n, i, r) {
                    var o = this;
                    return e.map(function(i, l) {
                        return a.createElement("div", {
                            className: "ow-settingsMailRuleWindow-conditions ow-settingsDetail-formField-inline"
                        }, a.createElement(A(), {
                            className: "ow-row-bottom"
                        }, a.createElement(C(), {
                            lg: "6",
                            md: "6",
                            xs: "6"
                        }, a.createElement(v.Hi, {
                            ref: function(e) {
                                o["".concat(i.header, "SelectRef").concat(l)] = e
                            },
                            label: "domain" === i.header || "from" === i.header ? o.toggleRadioFromOrDomain(i, e) : (0,
                            b.t)("settings.rules.rule_detail.TITLE.".concat("toOrCc" === i.header ? "toCc" : i.header)),
                            "aria-label": (0,
                            b.t)("settings.rules.rule_detail.TITLE.".concat("toOrCc" === i.header ? "toCc" : i.header)),
                            className: "ow-settingsMailRuleWindow-".concat(i.header, "SelectField ").concat(l > 0 ? "ow-settingsDetail-formField-invisibility" : ""),
                            name: "".concat(i.header, ".operation"),
                            value: i.operation,
                            options: o.renderDropdDownOptions(i),
                            onChange: function(t) {
                                e.forEach(function(e) {
                                    e.operation = t
                                }),
                                o.forceUpdate()
                            }
                        })), a.createElement(C(), {
                            lg: "4",
                            md: "4",
                            xs: "4"
                        }, a.createElement(v.UP, {
                            ref: function(e) {
                                o["".concat(i.header, "InputRef").concat(l)] = e
                            },
                            inputRef: function(e) {
                                o["".concat(i.header, "InputDomRef").concat(l)] = e
                            },
                            className: "ow-settingsMailRuleWindow-".concat(i.header, "InputField ow-settingsDetail-formField-labelHidden ").concat(l > 0 ? "ow-settingsDetail-formField-secondField  ow-".concat(i.header, "-formsecondField") : ""),
                            name: "".concat(i.header, ".value.").concat(l),
                            value: i.value,
                            "aria-label": (0,
                            b.t)("settings.rules.rule_detail.TITLE.".concat("toOrCc" === i.header ? "toCc" : i.header)),
                            "aria-required": "true",
                            onChange: function(e) {
                                i.value = e,
                                o.forceUpdate()
                            },
                            validations: {
                                customRegexp: function(e, a) {
                                    return !(!t && !a && !f()(Object.values(n)).filter(function(e) {
                                        return "" !== e.value.trim()
                                    }).length || l > 0 && !a || f()(Object.values(r)).filter(function(e) {
                                        return "mailreport" !== e.header && "" !== e.value.trim()
                                    }).length < 1)
                                },
                                customRegexpAll: function(e, t) {
                                    return !0
                                },
                                maxLength: x && "body" === i.header ? B : 255,
                                customValidation: function() {
                                    return !(x && "body" === i.header && function(e) {
                                        return new Blob([e]).size
                                    }(i.value) > B) || (0,
                                    E.WU)((0,
                                    b.t)("settings.profile.maxLengthText"), B)
                                }
                            },
                            validationErrors: {
                                customRegexp: (0,
                                b.t)("settings.rules.rule_detail.CONDITION_NOCHOOOSE_ERROR"),
                                maxLength: (0,
                                E.WU)((0,
                                b.t)("settings.profile.maxLengthText"), x && "body" === i.header ? B : 255)
                            }
                        })), 0 === l && a.createElement(C(), {
                            lg: "2",
                            md: "2",
                            xs: "2"
                        }, a.createElement(y.Z, {
                            className: "ow-settings-button ow-button-primary ow-settingsMailRuleWindow-addBtn ow-".concat(i.header, "addBtn"),
                            disabled: !i.value,
                            iconName: "plus",
                            "aria-label": (0,
                            b.t)("common.ADD"),
                            role: P.HB.BUTTON,
                            onClick: function() {
                                var t = o["".concat(i.header, "InputRef0")];
                                t && t.isValid() && (e.unshift((0,
                                w.z$)(i.header, {
                                    operation: i.operation
                                })),
                                o.forceUpdate(function() {
                                    o["".concat(i.header, "InputDomRef0")].focus()
                                }))
                            }
                        })), l > 0 && a.createElement(C(), {
                            lg: "2",
                            md: "2",
                            xs: "2"
                        }, a.createElement(y.Z, {
                            className: "ow-settings-button ow-settingsButton-default ow-settingsMailRuleWindow-deleteBtn",
                            iconName: "trash",
                            "aria-label": (0,
                            b.t)("common.DELETE"),
                            role: P.HB.BUTTON,
                            onClick: function() {
                                e.splice(l, 1);
                                var t = o.formRef;
                                o.forceUpdate(t.validate(o["".concat(i.header, "InputRef").concat(l)]))
                            }
                        }, (0,
                        b.t)("common.DELETE")))))
                    })
                }
            }, {
                key: "renderConditionFields",
                value: function() {
                    var e = this
                      , t = this.state.data
                      , n = t.conditions
                      , i = t.anyOrAll
                      , r = Object.values(n).filter(function(e) {
                        return "from" != e[0].header && "domain" != e[0].header && "mailreport" != e[0].header
                    })
                      , o = Object.values(n).filter(function(t) {
                        return t[0].header === e.state.formOrDomain
                    });
                    return a.createElement("div", {
                        className: "ow-settingsMailRuleWindow-conditions"
                    }, Object.keys(r).map(function(t) {
                        return e.renderConditionField(r[t], "subject" !== t, r, i, n)
                    }), Object.keys(o).map(function(t) {
                        return e.renderConditionField(o[t], "subject" !== t, o, i, n)
                    }))
                }
            }, {
                key: "renderActionField",
                value: function() {
                    var e = this
                      , t = this.props.mailFilter.filterActions
                      , n = this.state
                      , i = n.data
                      , r = n.currentAction
                      , o = this.getActionField(r)
                      , c = this.getActionOptions();
                    return a.createElement("div", {
                        className: "ow-settingsMailRuleWindow-actions"
                    }, a.createElement(A(), null, a.createElement("div", {
                        className: "ow-settingsDetail-formField-inline"
                    }, a.createElement(C(), {
                        lg: "6",
                        md: "6",
                        xs: "6"
                    }, a.createElement(v.Hi, {
                        className: "ow-settings-requiredActionField",
                        label: (0,
                        b.t)("settings.rules.rule_detail.ACTION"),
                        "aria-label": (0,
                        b.t)("settings.rules.rule_detail.ACTION"),
                        name: "action",
                        value: r || c[0],
                        options: c,
                        onChange: function(n) {
                            if (n && n !== r) {
                                var a = (0,
                                w.U5)(t, !1);
                                i.actions = l()(i.actions, a)
                            }
                            e.setCurrentAction(n)
                        },
                        validations: {
                            customRegexp: function(e, t) {
                                return !(!t || t === c[0] || t !== r) || (0,
                                b.t)("common.errorMessage.REQUIRED")
                            }
                        }
                    })), a.createElement(C(), {
                        lg: "6",
                        md: "6",
                        xs: "6"
                    }, o && a.createElement(o, {
                        className: "ow-settingsDetail-formField-labelHidden",
                        name: r,
                        value: i.actions[r]
                    })))), a.createElement(A(), null, a.createElement(C(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, a.createElement(v.hE, {
                        label: (0,
                        b.t)("settings.rules.rule_detail.STOP"),
                        "aria-label": (0,
                        b.t)("settings.rules.rule_detail.STOP"),
                        name: "stop",
                        value: i.actions.stop,
                        onChange: function(e) {
                            i.actions.stop = e
                        }
                    }))))
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n = this, i = this.props, r = i.isNew, o = i.onSave, l = N(i, k), c = this.state, d = c.data, u = c.initialData, m = c.formOrDomain;
                    return a.createElement(p.Z, R({}, l, {
                        className: "ow-settingsMailRule-window",
                        title: (0,
                        b.t)("settings.rules.rule_detail.".concat(r ? "ADD_TITLE" : "EDIT_TITLE")),
                        onSave: function() {
                            n.saveFromData(d, m),
                            o(d)
                        },
                        isFormChangedFn: function() {
                            return !s()(d, u)
                        }
                    }), a.createElement(v.l0, {
                        ref: function(e) {
                            n.formRef = e
                        }
                    }, a.createElement("div", {
                        className: "ow-rule_detail-titledesc",
                        "aria-label": (0,
                        b.t)("settings.rules.rule_detail.TITLE_DESC")
                    }, (0,
                    b.t)("settings.rules.rule_detail.TITLE_DESC")), a.createElement(A(), null, a.createElement(C(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, a.createElement(v.UP, {
                        className: "ow-settingsMailRuleWindow-nameField",
                        name: "name",
                        label: (0,
                        b.t)("settings.rules.rule_detail.NAME"),
                        "aria-label": (0,
                        b.t)("settings.rules.rule_detail.NAME"),
                        placeholder: (0,
                        b.t)("settings.rules.rule_detail.NAME"),
                        value: d.name,
                        onChange: function(e) {
                            d.name = e
                        },
                        required: !0,
                        validations: {
                            maxLength: 255
                        },
                        validationErrors: {
                            maxLength: (0,
                            E.WU)((0,
                            b.t)("settings.profile.maxLengthText"), 255),
                            isDefaultRequiredValue: (0,
                            b.t)("common.errorMessage.REQUIRED")
                        },
                        "aria-required": "true"
                    }))), a.createElement(A(), null, a.createElement(C(), {
                        lg: "12",
                        md: "12",
                        xs: "12"
                    }, a.createElement(v.hE, {
                        name: "enabled",
                        label: (0,
                        b.t)("settings.rules.rule_detail.ACTIVE"),
                        "aria-label": (0,
                        b.t)("settings.rules.rule_detail.ACTIVE"),
                        value: d.enabled,
                        onChange: function(e) {
                            d.enabled = e
                        }
                    }))), a.createElement("div", {
                        className: "ow-settingsMailRuleWindow-field-title",
                        "aria-label": (0,
                        b.t)("settings.rules.rule_detail.STEP1_TITLE")
                    }, (0,
                    b.t)("settings.rules.rule_detail.STEP1_TITLE")), a.createElement("div", {
                        className: "ow-settingsMailRuleWindow-mailReport-wrapper"
                    }, a.createElement(v.hE, {
                        name: "mailreport",
                        label: (0,
                        b.t)("settings.rules.rule_detail.RECEIPT"),
                        "aria-label": (0,
                        b.t)("settings.rules.rule_detail.RECEIPT"),
                        value: !(null === d || void 0 === d || null === (e = d.conditions) || void 0 === e || null === (t = e.mailreport[0]) || void 0 === t || !t.value),
                        onChange: function(e) {
                            d.conditions.mailreport[0].value = !1 === e ? "" : "multipart/report"
                        }
                    })), a.createElement("div", {
                        className: "ow-settingsMailRuleWindow-anyOrAll-wrapper"
                    }, a.createElement(T.Z, {
                        name: "anyOrAllOption",
                        value: d.anyOrAll ? d.anyOrAll : this.props.anyOrAll,
                        alignText: "right",
                        list: [{
                            value: "any",
                            text: (0,
                            b.t)("settings.rules.rule_detail.CONDITION_OPTION_ANY")
                        }, {
                            value: "all",
                            text: (0,
                            b.t)("settings.rules.rule_detail.CONDITION_OPTION_ALL")
                        }],
                        onChange: function(e) {
                            d.anyOrAll = e,
                            n.setState({
                                anyOrAll: e
                            })
                        }
                    })), this.renderConditionFields(), a.createElement("div", {
                        className: "ow-settingsMailRuleWindow-field-title",
                        "aria-label": (0,
                        b.t)("settings.rules.rule_detail.STEP2_TITLE")
                    }, (0,
                    b.t)("settings.rules.rule_detail.STEP2_TITLE")), this.renderActionField()))
                }
            }]),
            n
        }();
        Z.defaultProps = {
            isNew: !0,
            anyOrAll: "any",
            data: {},
            mailFilter: {
                filterConditionInputs: "",
                filterActions: ""
            },
            folderList: [],
            accountInfo: {},
            onSave: function() {}
        },
        Z.propTypes = {
            isNew: r().bool,
            anyOrAll: r().string,
            data: r().object,
            mailFilter: r().shape({
                filterConditionInputs: r().string,
                filterActions: r().string
            }),
            folderList: r().array,
            accountInfo: r().shape({}),
            onSave: r().func
        }
    }
}]);
