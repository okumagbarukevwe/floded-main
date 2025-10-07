/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[983], {
    1989: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return v
            }
        });
        var a = n(45987)
          , r = n(15671)
          , o = n(43144)
          , l = n(60136)
          , i = n(82963)
          , c = n(61120)
          , u = n(87401)
          , s = n(51756)
          , d = n(80861)
          , m = n(4446)
          , f = n(83416)
          , p = n(47957)
          , h = n.n(p)
          , E = (n(77545),
        n(94165),
        n(44910),
        ["selectDefaultAccountId", "selectExternalAccountList", "changeMailAccount", "selectMailAccountId", "selectAccountInfo", "onShowModal", "isFolderScrollRequired"]);
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
                i.Z)(this, n)
            }
        }
        var v = function(e) {
            (0,
            l.Z)(n, e);
            var t = y(n);
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
                      , t = e.selectDefaultAccountId
                      , n = e.selectExternalAccountList
                      , r = void 0 === n ? [] : n
                      , o = e.changeMailAccount
                      , l = e.selectMailAccountId
                      , i = e.selectAccountInfo
                      , c = (e.onShowModal,
                    e.isFolderScrollRequired)
                      , p = ((0,
                    a.Z)(e, E),
                    (0,
                    f.Z)("mail.addAccountLink"))
                      , y = "ow-mail-accounts";
                    c && (y = "ow-mail-accounts ow-mail-accounts-expanded");
                    r.length;
                    return u.createElement("div", {
                        className: p ? y : "".concat(y, " ow-mail-accounts-remove-add-link")
                    }, u.createElement(d.Z, {
                        active: l,
                        onFocus: o
                    }, u.createElement(d.i, {
                        id: t
                    }, u.createElement("div", {
                        title: h()(i, "email", " ")
                    }, (0,
                    m.t)("app.MY_ACCOUNT"), (0,
                    f.Z)("mail.displayEmailIdInMail") && i && i.email ? " : " + i.email : ""), u.createElement(s.Z, {
                        accountId: t
                    })), r.length && r.map(function(e) {
                        return u.createElement(d.i, {
                            id: e.id,
                            key: e.id
                        }, u.createElement("div", null, e.accountName), u.createElement(s.Z, {
                            accountId: e.id
                        }))
                    })))
                }
            }]),
            n
        }(n(82565).Z)
    },
    46594: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return w
            }
        });
        var a = n(15671)
          , r = n(43144)
          , o = n(60136)
          , l = n(82963)
          , i = n(61120)
          , c = n(87462)
          , u = n(45987)
          , s = n(87401)
          , d = (n(23398),
        n(55086))
          , m = n(10091)
          , f = n(70224)
          , p = n(77926)
          , h = n(32081)
          , E = n(92520)
          , y = n(84987)
          , v = n(94165)
          , g = n(83416)
          , b = n(90540)
          , A = ["onMoveCategory", "currentCategory"];
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
                i.Z)(e);
                if (t) {
                    var r = (0,
                    i.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                l.Z)(this, n)
            }
        }
        var T = (0,
        g.Z)("calendar.enabled")
          , R = function(e) {
            var t = e.onMoveCategory
              , n = e.currentCategory
              , a = (0,
            u.Z)(e, A)
              , r = (n || {}).path;
            return s.createElement(p.Z, (0,
            c.Z)({
                title: (0,
                y.t)("mail.action.MOVE_TO_CATEGORY")
            }, a), v.aA.map(function(e) {
                return s.createElement(f.Z, (0,
                c.Z)({}, a, {
                    disabled: r === e.path,
                    onClick: function() {
                        return r !== e.path && t(e)
                    }
                }), (0,
                y.t)("mail.folder.CATEGORY_FOLDER_DISPLAY[".concat(e.name, "]")))
            }))
        }
          , w = function(e) {
            (0,
            o.Z)(n, e);
            var t = S(n);
            function n() {
                return (0,
                a.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            r.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.onMarkAsSpam
                      , a = t.onMarkAsNotSpam
                      , r = t.onReply
                      , o = t.onReplyAll
                      , l = t.onDelete
                      , i = t.onCreateGroup
                      , c = t.onSaveEMLFile
                      , u = t.onMarkAsFlag
                      , p = t.onClearFlag
                      , g = t.onViewSource
                      , b = t.onMarkAsUnread
                      , A = t.onMarkAsRead
                      , S = (t.onSafeSender,
                    t.onBlockSender)
                      , w = t.onBlockDomain
                      , C = t.onBlockSenderAndMarkAsSpam
                      , Z = t.onCreateFolder
                      , N = t.junk
                      , O = t.read
                      , M = t.unread
                      , k = t.flagged
                      , I = t.unflagged
                      , P = t.notSelf
                      , L = t.isExternalAccount
                      , D = t.selectedCount
                      , _ = t.folderData
                      , F = t.folderPaths
                      , V = t.onMoveToFolder
                      , j = t.onMoveCategory
                      , B = t.currentCategory
                      , W = t.show
                      , x = t.disbleEmailOperations
                      , U = t.onMarkAsPhishing
                      , G = t.onUpdateState
                      , H = this.state.forwardType;
                    return W ? s.createElement(d.Z, {
                        className: "ow-mail-MailToolbar-AutoSizer  ow-mail-MailToolbar-tablet",
                        disableHeight: !0
                    }, function(t) {
                        var d = t.width;
                        return s.createElement("div", {
                            className: "ow-mail-MailToolbar-wrapper"
                        }, s.createElement(m.Z, {
                            enableResponsive: !0,
                            width: d
                        }, s.createElement("span", {
                            className: "ow-spacing"
                        }), s.createElement(m.Z.Dropdown, {
                            className: "ow-mail-reply-dropdown",
                            title: s.createElement(h.Z, {
                                name: "reply-mail"
                            }),
                            pullRight: !0,
                            noCaret: !0
                        }, s.createElement(f.Z, {
                            onClick: r,
                            iconName: "reply-mail",
                            disabled: 1 !== D || x
                        }, (0,
                        y.t)("mail.action.REPLY")), s.createElement(f.Z, {
                            onClick: o,
                            iconName: "replyAll-mail",
                            disabled: 1 !== D || x
                        }, (0,
                        y.t)("mail.action.REPLY_ALL")), s.createElement(f.Z, {
                            onClick: e.handleForwardInline,
                            iconName: "forward-mail",
                            disabled: 1 !== D
                        }, (0,
                        y.t)("mail.action.FORWARD")), s.createElement(f.Z, {
                            onClick: e.handleForwardAttachment,
                            iconName: "forward-mail",
                            disabled: 1 !== D,
                            active: /attachment/.test(H)
                        }, (0,
                        y.t)("mail.action.FORWARD_IN_ATTACHMENT"))), s.createElement(m.Z.Button, {
                            iconName: "trash-mail",
                            disabled: !D,
                            onClick: function() {
                                return l(e.callBackForReset)
                            }
                        }), s.createElement(m.Z.Button, {
                            onClick: e.showFolderSelector,
                            iconName: "folder",
                            disabled: !D
                        }), s.createElement(m.Z.Dropdown, {
                            className: "ow-icon-more-dropdown",
                            title: s.createElement(h.Z, {
                                name: "more"
                            }),
                            pullRight: !0,
                            noCaret: !0
                        }, P && s.createElement(f.Z, {
                            onClick: S,
                            disabled: !D || x
                        }, (0,
                        y.t)("mail.action.BLOCK_SENDER")), s.createElement(f.Z, {
                            onClick: w,
                            disabled: !D || x
                        }, (0,
                        y.t)("mail.action.BLOCK_DOMAIN")), !L && P && s.createElement(f.Z, {
                            onClick: C,
                            iconName: "reply-mail",
                            disabled: !D || x
                        }, (0,
                        y.t)("mail.action.BLOCK_SENDER_SPAM")), s.createElement(R, {
                            disabled: !B || 0 === F.length,
                            onMoveCategory: j,
                            currentCategory: B
                        }), s.createElement(f.Z, {
                            onClick: O ? null : A,
                            disabled: O,
                            iconName: "reply-mail"
                        }, (0,
                        y.t)("mail.action.READ")), s.createElement(f.Z, {
                            onClick: M ? null : b,
                            disabled: M,
                            iconName: "reply-mail"
                        }, (0,
                        y.t)("mail.action.UNREAD")), s.createElement(f.Z, {
                            disabled: !D || k,
                            onSelect: k ? null : u
                        }, (0,
                        y.t)("mail.action.FLAG_FOR_FOLLOW_UP")), s.createElement(f.Z, {
                            disabled: !D || I,
                            onSelect: I ? null : p
                        }, (0,
                        y.t)("mail.action.CLEAR_FLAG")), !L && D && N ? s.createElement(f.Z, {
                            onClick: a,
                            iconName: "reply-mail"
                        }, (0,
                        y.t)("mail.action.NOT_JUNK")) : null, L || !D || N ? null : s.createElement(f.Z, {
                            onClick: n,
                            iconName: "reply-mail"
                        }, (0,
                        y.t)("mail.action.JUNK")), L || !D || N ? null : s.createElement(f.Z, {
                            onClick: U,
                            iconName: "reply-mail"
                        }, (0,
                        y.t)("mail.action.PHISHING")), s.createElement(f.Z, {
                            disabled: 0 === D || x,
                            onClick: i,
                            iconName: "reply-mail"
                        }, (0,
                        y.t)("mail.action.CREATE_GROUP")), s.createElement(f.Z, {
                            disabled: 1 !== D,
                            onClick: g,
                            iconName: "reply-mail"
                        }, (0,
                        y.t)("mail.action.VIEW_SOURCE")), s.createElement(f.Z, {
                            disabled: 1 !== D,
                            onClick: c,
                            iconName: "reply-mail"
                        }, (0,
                        y.t)("mail.action.SAVEASEML_EMAIL")), T && s.createElement(f.Z, {
                            disabled: 1 !== D || x,
                            onClick: e.handleInviteToEvent,
                            iconName: "reply-mail"
                        }, (0,
                        y.t)("mail.action.INVITE_RECIPIENTS")))), s.createElement(E.Z, {
                            folders: _,
                            isAddEnabled: !0,
                            show: e.state.showFolderSelector,
                            onHide: function() {
                                e.hideFolderSelector()
                            },
                            selectedFolderPath: 1 === F.length ? F[0] : void 0,
                            onSelectFolder: function(t) {
                                var n = t.type
                                  , a = t.path;
                                n !== v.S.VIRTUAL && (1 === F.length && F.includes(a) ? e.hideFolderSelector() : (V(a),
                                e.hideFolderSelector()))
                            },
                            onCreateFolder: Z,
                            onUpdateState: function(e) {
                                G(e)
                            }
                        }))
                    }) : null
                }
            }]),
            n
        }(b.Z)
    },
    68151: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return b
            }
        });
        var a = n(93433)
          , r = n(71002)
          , o = n(15671)
          , l = n(43144)
          , i = n(60136)
          , c = n(82963)
          , u = n(61120)
          , s = n(87401)
          , d = n(55086)
          , m = n(10091)
          , f = (n(70224),
        n(32081),
        n(84987))
          , p = n(94165)
          , h = n(83416)
          , E = n(80110)
          , y = n(41285);
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
        var g = p.DJ.ATTACHMENT_VIEW
          , b = function(e) {
            (0,
            i.Z)(n, e);
            var t = v(n);
            function n() {
                return (0,
                o.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            l.Z)(n, [{
                key: "renderForward",
                value: function(e, t, n) {
                    return s.createElement(m.Z.Button, {
                        onClick: this.handleForwardInline,
                        iconName: "forward-mail",
                        title: (0,
                        f.t)("mail.action.FORWARD"),
                        "aria-disabled": 1 !== n,
                        disabled: 1 !== n,
                        role: "button",
                        "aria-label": (0,
                        f.t)("mail.action.FORWARD")
                    })
                }
            }, {
                key: "renderMarkAsNotSpam",
                value: function() {
                    var e = this.props
                      , t = e.onMarkAsNotSpam
                      , n = e.junk
                      , a = e.isExternalAccount
                      , r = e.selectedCount;
                    return !a && r && n ? s.createElement(m.Z.Button, {
                        onClick: t,
                        iconName: "mail-folder-not-junk",
                        role: "button",
                        "aria-label": (0,
                        f.t)("mail.action.NOT_JUNK"),
                        title: (0,
                        f.t)("mail.action.NOT_JUNK")
                    }) : null
                }
            }, {
                key: "renderMarkAsSpam",
                value: function() {
                    var e = this.props
                      , t = e.onMarkAsSpam
                      , n = e.junk
                      , a = e.isExternalAccount
                      , r = e.selectedCount;
                    return a || !r || n ? null : s.createElement(m.Z.Button, {
                        onClick: t,
                        iconName: "mail-folder-junk",
                        role: "button",
                        "aria-label": (0,
                        f.t)("mail.action.JUNK"),
                        title: (0,
                        f.t)("mail.action.JUNK")
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.onReply
                      , o = t.onReplyAll
                      , l = t.onDelete
                      , i = t.onRefresh
                      , c = t.selectedCount
                      , u = t.folderPaths
                      , f = t.onMoveToFolder
                      , y = t.forwardType
                      , v = t.summaries
                      , b = t.cancelSendInProgress
                      , A = t.externalFolders
                      , S = t.accountId
                      , T = t.disbleEmailOperations
                      , R = t.tagsList
                      , w = !1
                      , C = this.props.folderData;
                    A && (A.find(function(e) {
                        e.id === S && (w = !!e.protocol.match(p.p6))
                    }),
                    w && (C = C && C.filter(function(e) {
                        return e.type.toLowerCase().match(p.S.INBOX)
                    })));
                    var Z = !1;
                    (b && v && v.length > 0 && p.YX.DRAFT === v[0].folderPath || !c || this.state.disableDelete) && (Z = !0);
                    var N = []
                      , O = []
                      , M = []
                      , k = {};
                    (0,
                    h.Z)("mail.toolbar").map(function(e) {
                        if ("object" === (0,
                        r.Z)(e)) {
                            var t = Object.keys(e)
                              , n = Object.values(e);
                            if (k[t[0]] = n[0],
                            "forward" === t[0])
                                O = [],
                                O = (0,
                                a.Z)(n[0].menu),
                                N.push(t[0]);
                            else if ("more" === t[0])
                                M = [],
                                M = (0,
                                a.Z)(n[0]);
                            else {
                                if (!(0,
                                h.Z)("mail.tags.enabled") && "tags" === t[0])
                                    return !1;
                                N.push(n)
                            }
                        } else
                            N.push(e)
                    });
                    var I = {
                        refresh: this.renderRefresh(i, k.refresh),
                        compose: this.renderCompose(k.compose),
                        reply: this.renderReply(n, c, T, k.reply),
                        replyAll: this.renderReplyAll(o, c, T, k.replyAll),
                        delete: this.renderDelete(l, Z, k.delete),
                        forward: this.renderForward(O, y, c, k.forward),
                        move: this.renderMoveTo(C, u, f),
                        tags: this.renderTags(R),
                        category: this.renderCategory(),
                        blockSender: this.renderBlockSender(),
                        blockDomain: this.renderBlockDomain(),
                        read: this.renderRead(),
                        unread: this.renderUnread(),
                        inviteEvent: this.renderInviteEvent(),
                        createGroup: this.renderCreateGroup(),
                        viewSource: this.renderViewSource(),
                        print: this.renderPrint(),
                        saveEML: this.renderSaveEML(),
                        flag: this.renderFlag(),
                        markAsSpam: this.renderMarkAsSpam(),
                        markAsPhishing: this.renderMarkAsPhishing(),
                        markNotAsSpam: this.renderMarkAsNotSpam()
                    };
                    return s.createElement(d.Z, {
                        className: "ow-mail-MailToolbar-AutoSizer",
                        disableHeight: !0
                    }, function(t) {
                        var n = t.width;
                        return s.createElement("div", {
                            className: "ow-mail-MailToolbar-wrapper"
                        }, s.createElement(m.Z, {
                            enableResponsive: !0,
                            width: n > 550 ? 550 : n,
                            selectedCount: e.props.selectedCount
                        }, N.map(function(t) {
                            if (e.props.layout !== g || "delete" !== t) {
                                var n = "forward" === t ? t : t[0].menuName;
                                return I[n]
                            }
                        }), M.map(function(e) {
                            return I[e]
                        })), e.state.spinner && s.createElement(E.Z, null))
                    })
                }
            }]),
            n
        }(y.Z)
    },
    51304: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return m
            }
        });
        var a = n(15671)
          , r = n(43144)
          , o = n(11752)
          , l = n(60136)
          , i = n(82963)
          , c = n(61120)
          , u = (n(87401),
        n(6136))
          , s = (n(84987),
        n(94165));
        function d(e) {
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
                i.Z)(this, n)
            }
        }
        s.u0.SORT_SUBJECT_ASC,
        s.u0.SORT_SUBJECT_DESC;
        var m = function(e) {
            (0,
            l.Z)(n, e);
            var t = d(n);
            function n() {
                return (0,
                a.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            r.Z)(n, [{
                key: "getColumnConfig",
                value: function() {
                    var e = this.props;
                    e.showFolder,
                    e.folderDisplay;
                    return (0,
                    o.Z)((0,
                    c.Z)(n.prototype), "getColumnConfig", this).call(this).filter(function(e) {
                        return null !== e
                    })
                }
            }]),
            n
        }(u.Z)
    },
    91437: function(e, t, n) {
        n.d(t, {
            Dx: function() {
                return l.Dx
            },
            QI: function() {
                return l.QI
            },
            rP: function() {
                return u
            }
        });
        var a = n(4942)
          , r = n(16083)
          , o = (n(97517),
        n(41254))
          , l = n(26152);
        function i(e, t) {
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
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var u = function(e) {
            return (0,
            r.$j)(l.K, function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                ;
                return function(t, n) {
                    return c(c({}, (0,
                    l.ZS)(e)(t, n)), {}, {
                        handleClickRecipientsTo: function(e) {
                            t((0,
                            o.wJ)(e))
                        },
                        handleClickRecipientsCc: function(e) {
                            t((0,
                            o.OJ)(e))
                        }
                    })
                }
            }(e), (0,
            l.dG)(e))
        }
    },
    37848: function(e, t, n) {
        n.d(t, {
            I: function() {
                return S
            },
            s: function() {
                return T
            }
        });
        var a = n(4942)
          , r = n(16083)
          , o = n(97517)
          , l = n(96744)
          , i = n(45857)
          , c = n(63482)
          , u = n(19251)
          , s = n(85391)
          , d = n(84987)
          , m = n(94165)
          , f = n(4446);
        function p(e, t) {
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
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var E = f.UhU.isMobile
          , y = f.UhU.isTablet
          , v = m.DJ.ATTACHMENT_VIEW
          , g = function(e) {
            var t, n, a, r = (E || y) && (0,
            l.wR)(e), o = r === v ? (0,
            l.AV)(e) : (0,
            l.sE)(e), f = (0,
            l.ku)(e), p = (0,
            l.$_)(e), h = (0,
            l.xC)(e), g = h && h.path, b = (0,
            l.s2)(e), A = (0,
            i.H_)(e), S = (0,
            c.af)(e), T = (0,
            s.iX)(e), R = "true" === S.enableMessageCategories && A.enableMessageCategories;
            if (null !== f) {
                var w = (0,
                l.hD)(f)(e)
                  , C = w ? (0,
                d.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(w)) : f || (0,
                d.t)("mail.search.ALL_FOLDER");
                t = "".concat((0,
                d.t)("mail.search.SEARCH_IN"), " ").concat(C),
                a = w && (0,
                d.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(w)),
                n = !0
            } else if (null !== T && void 0 !== T && T.id) {
                var Z = (0,
                d.t)("mail.tags.tagsEditor.TAGS_HEADING");
                t = Z,
                a = Z,
                n = !1
            } else if (h) {
                var N = h.type ? (0,
                d.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(h.type)) : h.name;
                t = N,
                a = N,
                n = !1
            }
            var O = (0,
            l.a_)(e) || (0,
            l.ku)(e) || m.S.INBOX.toUpperCase()
              , M = r === v ? (0,
            l.X4)(e) : (0,
            l.b7)(e)
              , k = M.renderData
              , I = M.selectMode
              , P = E && 1 === o.length && !I
              , L = (0,
            l.qI)("_")(e)
              , D = (k || {}).collapsing
              , _ = (0,
            l.Zt)(e)
              , F = (0,
            l.uf)(e)
              , V = (0,
            l.U5)(e)
              , j = (0,
            l.Ez)(e)
              , B = (0,
            l.YQ)(e)
              , W = (0,
            c.zo)(e)
              , x = (0,
            i.F9)(e)
              , U = (0,
            c.a0)(e)
              , G = m.bF === (0,
            l.Rr)(e)
              , H = (0,
            u.iZ)(e)
              , J = (0,
            i.GK)(e);
            return {
                title: t,
                showExit: n,
                tuiSearch: _,
                sort: F,
                mobileViewMode: r,
                expanded: P,
                collapsing: D,
                previewOpen: L,
                selectMode: I,
                selectedFolderPath: O,
                selectedCategory: p,
                selectedLayout: B,
                selectedMailMode: W,
                enableMessageCategories: R,
                searchMode: b,
                selectedCount: o.length,
                attachmentSortType: V,
                attachmentFilterType: j,
                accountId: x,
                fromFolderPath: g,
                selectedFolderName: a,
                categoryEnabled: U,
                isFetching: G,
                folderSelectPathType: H,
                isDefaultAccount: J,
                selectedTag: T
            }
        }
          , b = function(e) {
            return {
                onCategory: function(t) {
                    return e((0,
                    o.changeMailSummaryCategory)(t))
                },
                onSelectViewPort: function(t) {
                    e(t === v ? (0,
                    o.selectMailAttachmentListViewPort)() : (0,
                    o.selectMailSummaryListViewPort)())
                },
                onSearch: function(t, n) {
                    return e((0,
                    o.searchMailSummary)(t, n))
                },
                onSearchAttachment: function(t) {
                    return e((0,
                    o.searchMailAttachment)(t))
                },
                onSort: function() {
                    return e(o.sortMailSummaryList.apply(void 0, arguments))
                },
                onViewMode: function(t) {
                    return e((0,
                    o.selectMailMobileViewMode)(t))
                },
                onThreadToggle: function(t, n) {
                    return e((0,
                    o.toggleMailThread)(t, n))
                },
                toggleSelectMode: function(t) {
                    e((0,
                    o.mailSummaryToggleSelectMode)(t))
                },
                toggleSearch: function(t) {
                    e((0,
                    o.toggleMailTuiSearch)(t))
                },
                onChangeAttachmentSort: function(t) {
                    return e((0,
                    o.sortMailAttachmentList)(t))
                },
                onChangeAttachmentFilter: function(t) {
                    return e((0,
                    o.filterMailAttachmentList)(t))
                },
                onSelectFolder: function(t, n) {
                    return e((0,
                    o.selectFolder)(t, [n]))
                },
                onChange: function() {
                    return e(o.sortMailSummaryList.apply(void 0, arguments))
                }
            }
        }
          , A = function(e, t, n) {
            return h(h(h(h({}, e), t), n), {}, {
                onSort: function() {
                    for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
                        a[r] = arguments[r];
                    return t.onSort.apply(t, a.concat([e.accountId]))
                },
                onChange: function() {
                    for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
                        a[r] = arguments[r];
                    return t.onChange.apply(t, a.concat([e.accountId]))
                }
            })
        }
          , S = (0,
        r.$j)(g, b, A)
          , T = (0,
        r.$j)(g, b, A)
    },
    52114: function(e, t, n) {
        var a = n(87401)
          , r = n(16083)
          , o = n(23398)
          , l = n.n(o)
          , i = n(81530)
          , c = n(19251)
          , u = n(52566)
          , s = n(45857)
          , d = n(84987)
          , m = n(90656)
          , f = function(e) {
            var t = e.folderName
              , n = e.unreadCount
              , r = (e.accountName,
            function(e, t, n) {
                return "".concat((0,
                m.WU)((0,
                d.t)("app.title.EMAIL"), e, t))
            }(t, n));
            return a.createElement(i.Z, {
                title: r
            })
        };
        f.propTypes = {
            folderName: l().string.isRequired,
            unreadCount: l().number.isRequired,
            accountName: l().string.isRequired
        },
        f.defaultPropTypes = {
            folderType: "",
            unreadCount: 0,
            accountName: ""
        };
        t.Z = (0,
        r.$j)(function(e) {
            var t = (0,
            c.a_)(e) || (0,
            u.ku)(e)
              , n = (0,
            c.wP)(t)(e)
              , a = (0,
            s.hL)(e)
              , r = (0,
            c.B5)(e);
            return {
                folderName: n ? (0,
                d.t)("mail.folder.SPECIAL_FOLDER_DISPLAY.".concat(n)) : t,
                unreadCount: r[t] && r[t].status && r[t].status.unreadMessageCount,
                accountName: a && a.username ? a.username : ""
            }
        })(f)
    },
    90872: function(e, t, n) {
        var a = n(15671)
          , r = n(43144)
          , o = n(97326)
          , l = n(60136)
          , i = n(82963)
          , c = n(61120)
          , u = n(87401)
          , s = n(23398)
          , d = n.n(s)
          , m = n(13279)
          , f = n.n(m)
          , p = n(20040)
          , h = n.n(p)
          , E = n(94165)
          , y = n(84987)
          , v = n(83416)
          , g = n(32081)
          , b = n(44910)
          , A = n(63505);
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
                i.Z)(this, n)
            }
        }
        var T = E.DJ.PREVIEW_RIGHT
          , R = E.DJ.PREVIEW_BELOW
          , w = E.DJ.PREVIEW_NONE
          , C = E.DJ.ATTACHMENT_VIEW
          , Z = function(e) {
            var t = e.icon
              , n = e.text;
            return u.createElement("span", {
                className: "ow-mail-MailModeSwitcher-item-wrapper",
                "aria-label": n
            }, u.createElement("span", {
                className: "ow-mail-MailModeSwitcher-item-icon"
            }, t), u.createElement("span", null, n))
        };
        Z.propTypes = {
            icon: d().element.isRequired,
            text: d().string.isRequired
        };
        var N = function(e) {
            (0,
            l.Z)(n, e);
            var t = S(n);
            function n(e) {
                var r;
                return (0,
                a.Z)(this, n),
                (r = t.call(this, e)).state = {
                    showTooltip: !1,
                    selectedViewLayout: null,
                    announcement: ""
                },
                r.handleLayoutSelect = r.handleLayoutSelect.bind((0,
                o.Z)(r)),
                r.handleThreadToggle = r.handleThreadToggle.bind((0,
                o.Z)(r)),
                r.handleCategoryToggle = r.handleCategoryToggle.bind((0,
                o.Z)(r)),
                r
            }
            return (0,
            r.Z)(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this.props
                      , n = t.isDefaultAccount
                      , a = t.onThreadToggle;
                    if (n !== e.isDefaultAccount) {
                        var r = (0,
                        v.Z)("mail.conversation.enable") ? "show" : "hide";
                        e.isDefaultAccount || "show" !== r || a(void 0, !0)
                    }
                }
            }, {
                key: "handleLayoutSelect",
                value: function(e, t) {
                    var n = this.props
                      , a = n.selectedLayout
                      , r = n.enableThread
                      , o = n.onLayoutChange
                      , l = n.onThreadToggle;
                    this.setState({
                        selectedViewLayout: e
                    });
                    var i = t.find(function(t) {
                        return (null === t || void 0 === t ? void 0 : t.id) === e
                    });
                    "THREAD" !== e && e !== a && (e === C && r && l(!1),
                    o(e),
                    this.setState({
                        announcement: "".concat((0,
                        y.t)("aria.label.VIEW_CHANGE"), " ").concat(null === i || void 0 === i ? void 0 : i.text)
                    }))
                }
            }, {
                key: "handleThreadToggle",
                value: function(e) {
                    var t = this.props
                      , n = t.enableThread;
                    (0,
                    t.onThreadToggle)(!n),
                    "THREAD" !== e || n || this.setState({
                        announcement: "".concat((0,
                        y.t)("aria.label.VIEW_CHANGE"), " ").concat((0,
                        y.t)("mail.layout.PREVIEW_CONVERSATION"))
                    })
                }
            }, {
                key: "handleCategoryToggle",
                value: function() {
                    var e = this.props
                      , t = e.categoryEnabled;
                    (0,
                    e.onCategoryToggle)(!t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.selectedLayout
                      , a = t.enableThread
                      , r = t.categoryEnabled
                      , o = t.isDefaultAccount
                      , l = (t.onThreadToggle,
                    t.selectedMsgCount)
                      , i = this.state.announcement
                      , c = n
                      , s = [{
                        id: T,
                        text: (0,
                        y.t)("mail.layout.PREVIEW_RIGHT"),
                        icon: u.createElement(g.Z, {
                            name: "previewRight"
                        })
                    }, {
                        id: R,
                        text: (0,
                        y.t)("mail.layout.PREVIEW_BELOW"),
                        icon: u.createElement(g.Z, {
                            name: "previewBelow"
                        })
                    }, {
                        id: w,
                        text: (0,
                        y.t)("mail.layout.PREVIEW_NO"),
                        icon: u.createElement(g.Z, {
                            name: "previewNone"
                        })
                    }]
                      , d = s.filter(function(e) {
                        return e.id === n
                    })[0];
                    d || (c = T);
                    var m = (0,
                    v.Z)("mail.conversation.enable") ? "show" : "hide";
                    return u.createElement("div", null, u.createElement("div", {
                        className: "sr-only",
                        "aria-live": E.HO.POLITE,
                        "aria-atomic": "true"
                    }, i && u.createElement("span", null, i)), u.createElement(f(), {
                        pullRight: !0,
                        className: "ow-mail-MailModeSwitcher",
                        onKeyDown: function(e) {
                            e.key === E.BY.TABKEY && e.shiftKey && (l > 0 ? setTimeout(function() {
                                var e;
                                document.activeElement.blur();
                                var t = document.querySelector(".ow-mail-MailToolbar-wrapper .btn-toolbar").children.length;
                                document.querySelector(".ow-mail-MailToolbar-wrapper .btn-toolbar").children[t - 1].childNodes[0].tabIndex = 0,
                                null === (e = document.querySelector(".ow-mail-MailToolbar-wrapper .btn-toolbar").children[t - 1].childNodes[0]) || void 0 === e || e.focus()
                            }, 50) : (0,
                            b.R8)(".ow-mail-MailToolbar-wrapper .ow-icon-compose-mail-Toolbar", "button.ow-button"))
                        },
                        title: u.createElement(Z, {
                            icon: d && d.icon,
                            text: (0,
                            y.t)("mail.layout.LAYOUT")
                        }),
                        "aria-label": (0,
                        y.t)("mail.layout.LAYOUT"),
                        onSelect: function(t) {
                            return e.handleLayoutSelect(t, s)
                        }
                    }, u.createElement(h(), {
                        header: !0,
                        className: "ow-mail-MailModeSwitcher-item",
                        "aria-label": (0,
                        y.t)("mail.layout.PREVIEW_TITLE")
                    }, (0,
                    y.t)("mail.layout.PREVIEW_TITLE"), ":"), s.map(function(e) {
                        var t = e.id
                          , n = e.text
                          , a = e.icon;
                        return u.createElement(h(), {
                            className: "ow-mail-MailModeSwitcher-item",
                            key: t,
                            eventKey: t,
                            disabled: t === C && !o,
                            active: t === c,
                            "aria-label": n,
                            "aria-disabled": t === C && !o,
                            "aria-current": t === c
                        }, u.createElement(Z, {
                            icon: a,
                            text: n
                        }))
                    }), u.createElement(h(), {
                        divider: !0,
                        className: m
                    }), r && this.state.showTooltip && u.createElement("div", {
                        role: "tooltip",
                        className: "fade in ow-ErrorTooltip tooltip top ".concat(m)
                    }, u.createElement("div", {
                        className: "tooltip-arrow"
                    }), u.createElement("div", {
                        className: "tooltip-inner",
                        "aria-atomic": "true",
                        "aria-live": E.HO.POLITE,
                        "aria-label": (0,
                        y.t)("settings.mail.MESSAGE_CATEGORIZATION_WARNING")
                    }, (0,
                    y.t)("settings.mail.MESSAGE_CATEGORIZATION_WARNING"))), u.createElement(h(), {
                        header: !0,
                        className: "ow-mail-MailModeSwitcher-item ".concat(m, " "),
                        "aria-label": (0,
                        y.t)("mail.layout.PREVIEW_OPTIONS")
                    }, (0,
                    y.t)("mail.layout.PREVIEW_OPTIONS"), ":"), u.createElement(h(), {
                        className: "ow-mail-MailModeSwitcher-item ".concat(m),
                        key: "THREAD",
                        eventKey: "THREAD",
                        active: a,
                        disabled: c === C || r || !o,
                        onSelect: this.handleThreadToggle,
                        onMouseOver: function() {
                            e.setState({
                                showTooltip: !0
                            })
                        },
                        onFocus: function() {},
                        onMouseLeave: function() {
                            e.setState({
                                showTooltip: !1
                            })
                        },
                        "aria-disabled": c === C || r || !o,
                        "aria-current": a
                    }, u.createElement(Z, {
                        icon: u.createElement(g.Z, {
                            name: "conversationMode"
                        }),
                        text: (0,
                        y.t)("mail.layout.PREVIEW_CONVERSATION"),
                        "aria-label": (0,
                        y.t)("mail.layout.PREVIEW_CONVERSATION")
                    }))))
                }
            }]),
            n
        }(u.PureComponent);
        N.defaultProps = {
            selectedLayout: T,
            enableThread: !1,
            categoryEnabled: !1,
            isDefaultAccount: !0,
            onCategoryToggle: function() {},
            onLayoutChange: function() {},
            onThreadToggle: function() {}
        },
        N.propTypes = {
            selectedLayout: d().oneOf([T, R, w, C]).isRequired,
            categoryEnabled: d().bool.isRequired,
            isDefaultAccount: d().bool.isRequired,
            enableThread: d().bool.isRequired,
            onCategoryToggle: d().func,
            onLayoutChange: d().func,
            onThreadToggle: d().func
        },
        t.Z = (0,
        A.Z)(N)
    }
}]);
