/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[967], {
    45600: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return C
            }
        });
        var a = n(87401)
          , r = n(23398)
          , i = n.n(r)
          , o = n(12674)
          , l = n(96072)
          , c = n.n(l)
          , s = n(8764)
          , u = n.n(s)
          , m = n(32081)
          , d = n(80110)
          , h = n(46749)
          , p = n(84987)
          , f = n(92915)
          , v = n(94165);
        function w(e) {
            var t = e.uid
              , n = e.summary
              , r = e.handleClickHeader
              , i = e.use24HrFormat;
            if (!n)
                return a.createElement("div", {
                    className: "ow-mail-MailPreviewSummaryHeader"
                }, a.createElement("span", {
                    className: "ow-mail-MailPreviewSummaryHeader-avatar"
                }), a.createElement("div", {
                    className: "ow-mail-MailPreviewSummaryHeader-right"
                }, a.createElement("div", {
                    className: "ow-mail-MailPreview-empty"
                }), a.createElement("div", {
                    className: "ow-mail-MailPreview-empty"
                })));
            var o = n.flags.seen
              , l = n.from
              , c = n.messagePreview
              , s = n.receivedDate
              , u = n.attachmentCount
              , d = void 0 === u ? 0 : u
              , h = "";
            c && (h = c.body ? c.body : (0,
            p.t)("mail.NO_MESSAGE_PREVIEW"));
            var f = "";
            return l && (f = l.name ? "".concat(l.name, " <").concat(l.address, ">") : "".concat(l.address)),
            a.createElement("div", {
                role: v.HB.PRESENTATION,
                className: "ow-mail-MailPreviewSummaryHeader",
                onClick: function() {
                    return r(n)
                },
                key: "".concat(t, "_").concat(n ? n.folderPath : ""),
                tabIndex: 0
            }, a.createElement("span", {
                className: "ow-mail-MailPreviewSummaryHeader-avatar"
            }), a.createElement("div", {
                className: "ow-mail-MailPreviewSummaryHeader-right"
            }, a.createElement("div", {
                className: "ow-mail-MailPreviewSummaryHeader-from-row"
            }, a.createElement("div", {
                className: "ow-mail-MailPreviewSummaryHeader-from".concat(o ? "" : " ow-mail-MailPreview-unread")
            }, f), a.createElement("div", {
                className: "ow-mail-MailPreviewSummaryHeader-date"
            }, i ? TimeUtil.getTimeParseInt24to12(window.TimeUtil.getCalendarDateTime(s)) : "".concat(window.TimeUtil.getShortDate(s), " ").concat(TimeUtil.getTimeParseInt24to12(window.TimeUtil.getShortTime(s))))), a.createElement("div", {
                className: "ow-mail-MailPreviewSummaryHeader-preview-row"
            }, a.createElement("div", {
                className: "ow-mail-MailPreviewSummaryHeader-preview"
            }, h), d > 0 && a.createElement(m.Z, {
                name: "attachment-mail"
            }), d > 0 && a.createElement("span", {
                className: "ow-mail-MailPreviewSummaryHeader-attachCount"
            }, d))))
        }
        w.defaultProps = {
            uid: null,
            summary: null,
            handleClickHeader: function() {}
        },
        w.propTypes = {
            uid: i().number,
            summary: i().shape({}),
            handleClickHeader: i().func
        };
        var y = w
          , g = n(4446)
          , P = n(83416)
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
        function A() {
            return (A = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function T(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, N(a.key), a)
            }
        }
        function N(e) {
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
        function M(e, t) {
            return (M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, a = I(e);
                if (t) {
                    var r = I(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === E(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return O(e)
                }(this, n)
            }
        }
        function O(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function I(e) {
            return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                t && M(e, t)
            }(n, a.PureComponent);
            var t = S(n);
            function n(e) {
                var a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (a = t.call(this, e)).handleTouchMove = a.handleTouchMove.bind(O(a)),
                a.handleTouchStart = a.handleTouchStart.bind(O(a)),
                a.handleViewPort = a.handleViewPort.bind(O(a)),
                a.goBackForEMLPreview = a.goBackForEMLPreview.bind(O(a)),
                a.renderPreviewSubject = a.renderPreviewSubject.bind(O(a)),
                a.renderPreviewList = a.renderPreviewList.bind(O(a)),
                a.handleDeleteTag = a.handleDeleteTag.bind(O(a)),
                a
            }
            return function(e, t, n) {
                t && T(e.prototype, t),
                n && T(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleTouchMove",
                value: function(e) {
                    var t = e.touches[0] && e.touches[0].pageY
                      , n = t < this._currentPageY;
                    this._startAtTop && this._startAtBottom || this._startAtTop && !n || this._startAtBottom && n || e.stopPropagation(),
                    this._currentPageY = t
                }
            }, {
                key: "handleTouchStart",
                value: function(e) {
                    this._currentPageY = e.touches[0].pageY;
                    var t = this.container
                      , n = t.scrollHeight
                      , a = t.clientHeight
                      , r = t.scrollTop;
                    this._startAtTop = 0 === r,
                    this._startAtBottom = n - r === a
                }
            }, {
                key: "handleDeleteTag",
                value: function(e, t) {
                    var n, a = this.props.items[0], r = a.folderPath, i = a.uid, o = a.summary;
                    if ((null === o || void 0 === o ? void 0 : null === (n = o.tagids) || void 0 === n ? void 0 : n.length) > 0) {
                        var l = {
                            uidInfo: {
                                folderPath: r,
                                uid: i
                            },
                            mailTagIds: o.tagids.filter(function(e) {
                                return e.id !== (null === t || void 0 === t ? void 0 : t.id)
                            })
                        };
                        this.props.deleteTagInMail(l, {
                            modalType: "confirm",
                            modalProps: {
                                title: (0,
                                p.t)("mail.tags.tagsEditor.REMOVE_TAG"),
                                message: (0,
                                p.t)("mail.tags.tagsEditor.REMOVE_TAG_FROM_EMAIL_CONFIRMATION")
                            }
                        }, this.props.previewInstance)
                    }
                }
            }, {
                key: "handleViewPort",
                value: function(e, t) {
                    var n = e.attachmentCollapsed
                      , a = (0,
                    o.findDOMNode)(this.previewList)
                      , r = a.children[t]
                      , i = a.parentElement
                      , l = r.getBoundingClientRect().y
                      , c = i.getBoundingClientRect().y
                      , s = i.scrollTop;
                    n && s + l > 0 && (i.scrollTop = s + l - c)
                }
            }, {
                key: "goBackForEMLPreview",
                value: function() {
                    var e = this.props
                      , t = e.handlePreviewUpdate
                      , n = e.items[0];
                    t({
                        uid: n.uid,
                        folderPath: n.folderPath
                    })
                }
            }, {
                key: "renderPreviewSubject",
                value: function() {
                    var e, t, n = this, r = this.props, i = r.subject, o = r.items, l = r.tagList, s = r.isThreadEnabled, d = r.accountId, h = !(0,
                    g.nIE)() && o[0] && o[0].isEml, f = null === (e = o[0]) || void 0 === e ? void 0 : null === (t = e.summary) || void 0 === t ? void 0 : t.tagids, w = (0,
                    P.Z)("mail.tags.enabled") && !s && "" === d;
                    return a.createElement("div", {
                        className: "ow-mail-MailPreview-thread-subject-wrapper"
                    }, h && a.createElement(c(), {
                        className: "pull-left"
                    }, a.createElement(u(), {
                        onClick: this.goBackForEMLPreview,
                        className: "ow-mail-MailPreview-goBack"
                    }, a.createElement(m.Z, {
                        name: "left"
                    }))), a.createElement("span", {
                        className: "ow-mail-MailPreview-thread-subject",
                        tabIndex: 0,
                        role: v.HB.ROWHEADER,
                        "aria-label": i || (0,
                        p.t)("mail.preview.EMPTY_SUBJECT"),
                        onKeyDown: function(e) {
                            e.key === v.BY.Left_Arrow && (0,
                            b.kW)(".ow-icon-checkbox-selected"),
                            e.shiftKey && e.preventDefault()
                        }
                    }, i || (0,
                    p.t)("mail.preview.EMPTY_SUBJECT")), w && a.createElement("span", {
                        className: "ow-tags-detail"
                    }, f && f.map(function(e, t) {
                        return l.map(function(r) {
                            if ((null === r || void 0 === r ? void 0 : r.id) === (null === e || void 0 === e ? void 0 : e.id))
                                return a.createElement("span", {
                                    className: "ow-mail-tags-detail",
                                    key: t,
                                    style: {
                                        background: "".concat(r.color)
                                    }
                                }, " ", r.name, a.createElement(u(), {
                                    onClick: function(t) {
                                        return n.handleDeleteTag(t, e)
                                    }
                                }, a.createElement(m.Z, {
                                    name: "remove-mail"
                                })))
                        })
                    })))
                }
            }, {
                key: "renderPreviewList",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.items
                      , r = t.showMore
                      , i = t.handleThreadShowMore;
                    return a.createElement("div", {
                        className: "ow-mail-MailPreview-list",
                        ref: function(t) {
                            e.previewList = t
                        }
                    }, n.map(function(t, n) {
                        return t.collapsed ? a.createElement(y, A({
                            key: t.uid
                        }, e.props, t)) : a.createElement(f.Z, A({
                            key: t.uid
                        }, e.props, t, {
                            onViewPort: function(a) {
                                return e.handleViewPort(a, n, t)
                            }
                        }))
                    }), n && n.length <= 0 ? a.createElement(d.Z, null) : "", r && a.createElement("a", {
                        role: v.HB.PRESENTATION,
                        className: "ow-mail-MailPreview-more",
                        onClick: function() {
                            return i()
                        }
                    }, (0,
                    p.t)("common.MORE_TEXT")))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.selectedCount
                      , r = t.isThreadEnabled;
                    if (1 !== n) {
                        var i = "mail.notifyMessage.".concat(r ? "CONVERSATION_SELECTED" : "MESSAGE_SELECTED");
                        return a.createElement(h.Z, {
                            icon: "mail-PreviewPrompt",
                            message: n > 0 ? "".concat(n, " ").concat((0,
                            p.t)(i)) : (0,
                            p.t)("mail.detailView.EMPTY")
                        })
                    }
                    return !(0,
                    P.Z)("mail.preview.previousAndNextBtnLocalize") ? a.createElement("div", {
                        className: "ow-mail-MailPreview",
                        ref: function(t) {
                            e.container = t
                        },
                        onTouchMove: function(t) {
                            return e.handleTouchMove(t)
                        },
                        onTouchStart: function(t) {
                            return e.handleTouchStart(t)
                        }
                    }, this.renderPreviewSubject(), this.renderPreviewList()) : a.createElement("div", {
                        className: "ow-mail-MailPreview",
                        ref: function(t) {
                            e.container = t
                        },
                        onTouchMove: function(t) {
                            return e.handleTouchMove(t)
                        },
                        onTouchStart: function(t) {
                            return e.handleTouchStart(t)
                        }
                    }, a.createElement("div", {
                        className: "ow-mail-MailPreview-Header-text"
                    }, this.renderPreviewSubject()), this.renderPreviewList())
                }
            }]),
            n
        }();
        C.defaultProps = {
            previewInstance: "",
            subject: "",
            items: [],
            selectedCount: 0,
            isThreadEnabled: !0,
            showMore: !1,
            generateAttachmentThumbnail: function() {},
            handleClickHeader: function() {},
            handleClickRecipients: function() {},
            handleClickAddress: function() {},
            handleShowImage: function() {},
            handleDownloadAttachment: function() {},
            handleDowanloadAllAsZip: function() {},
            handleThreadShowMore: function() {},
            handlePreviewUpdate: function() {}
        },
        C.propTypes = {
            previewInstance: i().string,
            subject: i().string,
            items: i().arrayOf(i().object),
            selectedCount: i().number,
            isThreadEnabled: i().bool,
            showMore: i().bool,
            generateAttachmentThumbnail: i().func,
            handleClickHeader: i().func,
            handleClickRecipients: i().func,
            handleClickAddress: i().func,
            handleShowImage: i().func,
            handleDownloadAttachment: i().func,
            handleDowanloadAllAsZip: i().func,
            handleThreadShowMore: i().func,
            handlePreviewUpdate: i().func
        }
    },
    26152: function(e, t, n) {
        n.d(t, {
            Dx: function() {
                return R
            },
            K: function() {
                return j
            },
            QI: function() {
                return B
            },
            ZS: function() {
                return _
            },
            dG: function() {
                return H
            }
        });
        var a = n(16083)
          , r = n(93549)
          , i = n.n(r)
          , o = n(96744)
          , l = n(36003)
          , c = n(23893)
          , s = n(63482)
          , u = n(45857)
          , m = n(57440)
          , d = n(85608)
          , h = n(79351)
          , p = n(97517)
          , f = n(59559)
          , v = n(27093)
          , w = n(35329)
          , y = n(93279)
          , g = n(8394)
          , P = n(99688)
          , b = n(89083)
          , E = n(94165)
          , A = n(4446)
          , T = n(58864)
          , N = n(85391);
        function M(e) {
            "@babel/helpers - typeof";
            return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function S(e, t) {
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
        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? S(Object(n), !0).forEach(function(t) {
                    I(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function I(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== M(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var a = n.call(e, t || "default");
                        if ("object" !== M(a))
                            return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === M(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var C = A.UhU.isMobile
          , D = A.UhU.isTablet
          , k = E.DJ.ATTACHMENT_VIEW;
        function U(e) {
            if (e) {
                var t = e.filename
                  , n = e.folderPath
                  , a = e.uid
                  , r = e.part
                  , i = e.accountId;
                if ((0,
                A.wg9)(t)) {
                    return T.hi.service("resource.download", {
                        descriptor: {
                            "@resolver": "Mail",
                            folder: n,
                            uid: a,
                            part: r,
                            accountId: i
                        },
                        inline: !0,
                        dataUri: !1,
                        dimensions: {
                            width: 120,
                            height: 120
                        }
                    }, {
                        method: "URI"
                    })
                }
            }
        }
        var j = function(e, t) {
            var n, a = t.previewInstance, r = void 0 === a ? "" : a, i = (0,
            o.YQ)(e) === E.DJ.ATTACHMENT_VIEW, d = ((C || D) && (0,
            o.wR)(e)) === k, h = i ? (0,
            o.AV)(e).length : (0,
            o.sE)(e).length, p = (0,
            u.F9)(e), f = (0,
            o.qI)(r)(e), v = (0,
            o.MR)(r)(e), w = (0,
            o.Rh)(r)(e), y = (0,
            o.SF)(r)(e), g = (0,
            o.x5)(r)(e), P = (0,
            o.D7)(r)(e);
            n = i ? (0,
            o.lc)(e) : (0,
            o.HF)(e);
            var b = (0,
            o.JX)(r)(e);
            if (b) {
                var M = (0,
                o.zi)(b)(e);
                b = b.filter(function(e) {
                    return e.part || M.find(function(t) {
                        return t.uid === e.uid
                    })
                });
                var S = (0,
                o.qs)(b)(e);
                b = b.map(function(t, n) {
                    var a = O({}, t);
                    a.summary = M[n] || S[n];
                    var r = S[n];
                    if (a.detail = r,
                    a.summary && a.summary.from) {
                        var i = a.summary.from.address;
                        a.imgSrc = function(e) {
                            return T.hi.service("resource.download", {
                                descriptor: {
                                    "@resolver": "contactphoto",
                                    email: e
                                },
                                inline: !0
                            }, {
                                method: "URI"
                            })
                        }(i)
                    }
                    if (r) {
                        a.attachMap = {},
                        r.folderType = (0,
                        o.hD)(r.folderPath)(e);
                        var l = r.attachments
                          , c = r.body.blockedImages
                          , s = r.additionalMetadata;
                        if (s) {
                            var u = s.map(function(e) {
                                return (0,
                                A.l2P)(e)
                            });
                            a.securityLevel = u
                        }
                        var m = l.some(function(e) {
                            return U(e)
                        })
                          , d = c || r.body.imageDisplayOption === E.WQ.NONE && m;
                        a.blockedImages = d,
                        l.forEach(function(e, t) {
                            e.thumbnailSrc = d ? void 0 : U(e),
                            e.fileIcon = (0,
                            A.cFe)(e.filename),
                            e.fileType = (0,
                            A.cFe)(e.filename),
                            a.attachMap[e.part] = t
                        })
                    }
                    return a
                })
            }
            var I = (0,
            s.bt)(e)
              , j = (0,
            o.dn)(r)(e)
              , _ = (0,
            o.oV)(r)(e)
              , H = (0,
            u.hL)(e)
              , R = (0,
            l.vx)(e)
              , B = (0,
            l.so)(e)
              , L = (0,
            o.EM)(e)
              , V = (0,
            o.f1)(e)
              , Z = (0,
            o.Gw)(e)
              , W = (0,
            N.iX)(e)
              , x = (0,
            N.gQ)(e);
            return {
                user: H,
                accountId: p,
                pdfFormat: g,
                supported: P,
                isAttachmentView: i,
                isTuiAttachmentView: d,
                subject: j,
                items: b,
                showMore: _,
                selectedCount: h,
                opened: f,
                messagePreviewDisplay: v,
                attachmentPreviewDisplay: w,
                previewedAttachment: y,
                getEvents: function(t, n) {
                    var a = (0,
                    l.wS)(e);
                    return (0,
                    c.rj)(t, n, a)(e)
                },
                calColors: R,
                calendarId: B,
                lastNextInfo: n,
                cancelSendInProgress: L,
                isThreadEnabled: (0,
                s.KQ)(e),
                canSaveToCloud: (0,
                m.R5)(e),
                associationMode: (0,
                m.o3)(e),
                showAvatar: I,
                avatarData: V,
                selectedMailId: Z,
                selectedTag: W,
                tagList: x
            }
        }
          , _ = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
            ;
            return function(t, n) {
                var a = n.previewInstance
                  , r = a.length > 1 ? a : void 0;
                return {
                    dispatch: t,
                    handleFormatChange: function(e) {
                        var n = e.pdfFormat;
                        t((0,
                        p.previewAttachmentUpdate)(a, {
                            pdfFormat: n
                        }))
                    },
                    handleCloseAttachmentPreview: function() {
                        t("_" === a ? (0,
                        p.updateMailDetailPreview)({
                            opened: !1
                        }, a) : (0,
                        p.updateMailDetailPreview)({
                            attachmentPreviewDisplay: !1,
                            messagePreviewDisplay: !0
                        }, a))
                    },
                    handleUpdatePreview: function(e) {
                        var n = e.messagePreviewDisplay
                          , r = e.attachmentPreviewDisplay;
                        t((0,
                        p.updateMailDetailPreview)({
                            messagePreviewDisplay: n,
                            attachmentPreviewDisplay: r
                        }, a))
                    },
                    handleClickHeader: function(e) {
                        t((0,
                        p.previewMailDetail)(e, a))
                    },
                    handleClickRecipients: function(e) {
                        t((0,
                        p.toggleMailDetailRecipients)(e, a))
                    },
                    handleClickAddress: function(e) {
                        t((0,
                        f.lY)({
                            filter: e
                        }))
                    },
                    handleEditDraft: function(e) {
                        t((0,
                        p.openDraft)(e, r)),
                        C && t((0,
                        p.navigateMailSummaryList)({
                            collapsing: !0
                        }))
                    },
                    handleShowImage: function(e, n, a) {
                        t((0,
                        p.showMailDetailBlockedImage)(e, n, a))
                    },
                    handleThreadShowMore: function() {
                        t((0,
                        p.showMoreThreadMessages)(a))
                    },
                    handleDownloadAttachment: function(e) {
                        t((0,
                        y.downloadAttachment)(e))
                    },
                    handlePopup: function() {
                        t((0,
                        p.previewPopup)(a, e()))
                    },
                    handleRSVP: function(e, n, r) {
                        t((0,
                        p.invitationRSVP)({
                            uidInfo: e,
                            event: n,
                            status: r,
                            previewInstance: a
                        }))
                    },
                    handleExternalDomainInvite: function(e, n, a, r) {
                        t((0,
                        p.externalInviteRSVP)({
                            evt: e,
                            detail: n,
                            status: a,
                            previewInstance: r
                        }))
                    },
                    handleGetEvents: function(e, n) {
                        t((0,
                        d.mL)({
                            start: e,
                            end: n
                        }))
                    },
                    addSharedCalendar: function(e) {
                        t((0,
                        w.xx)(e))
                    },
                    removeSharedCalendar: function(e) {
                        t((0,
                        w.U4)(e))
                    },
                    goToCalendar: function() {
                        t((0,
                        v.switchApp)(E.lw.CALENDAR))
                    },
                    onClickSaveToCloud: function() {
                        return t(g.cloudGetFolderAndQuota.apply(void 0, arguments))
                    },
                    addToContact: function(e) {
                        return t((0,
                        h.Az)(e))
                    },
                    handleAddToCalendarAttachment: function(e, n, a) {
                        t((0,
                        d._O)({
                            calendarId: e,
                            resource: n,
                            accountId: a
                        }))
                    },
                    handleClickPreviewAddress: function(e) {
                        t((0,
                        P.mH)({
                            recipients: {
                                to: [{
                                    address: e
                                }]
                            }
                        }))
                    },
                    handlePreviewUpdate: function(e) {
                        return t((0,
                        p.previewMailNewInstance)(e, null, ""))
                    },
                    onModalClose: function() {
                        return t((0,
                        g.cloudGetPaginationSize)())
                    },
                    onGetAvatar: function() {
                        return t((0,
                        y.getContactAvatar)())
                    },
                    deleteTagInMail: function(e, n, a) {
                        return t((0,
                        b.a4)(e, n, a))
                    }
                }
            }
        }
          , H = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
            ;
            return function(t, n, a) {
                var r = t.accountId
                  , o = t.isAttachmentView
                  , l = n.dispatch
                  , c = a.previewInstance
                  , s = O(O({}, i()(n, ["dispatch"])), {}, {
                    handleNavigatePreview: function(e, t) {
                        l(o ? (0,
                        p.updateMailAttachmentListSelection)(null, {
                            trigger: E.rW.PREVIEW_NAV,
                            keyCode: e > 0 ? 40 : 38,
                            index: t
                        }) : (0,
                        p.updateMailSummaryListSelection)(null, {
                            trigger: E.rW.KEYBOARD,
                            keyCode: e > 0 ? 40 : 38,
                            index: t
                        }))
                    },
                    handleLastNextMessage: function(e, t) {
                        l(o ? (0,
                        p.updateMailAttachmentLastNext)(e, t) : (0,
                        p.updateMailSummaryLastNext)(e, t))
                    },
                    handleNavigateAttachment: function(e, t, n) {
                        l((0,
                        p.navigateAttachment)({
                            attachment: e,
                            direction: t,
                            currentIndex: n
                        }, c))
                    },
                    handleClosePreview: function() {
                        l(o ? (0,
                        p.navigateMailAttachmentList)({
                            fullOpenSelected: !1
                        }) : (0,
                        p.navigateMailSummaryList)({
                            fullOpenSelected: !1
                        }))
                    },
                    handlePreviewAttachment: function(t) {
                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                          , a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                          , r = t.contentType;
                        if ((0,
                        A._yR)(r))
                            l((0,
                            p.previewEMLAttachment)({
                                attachment: t,
                                accountId: "",
                                special: !0
                            }, e()));
                        else {
                            "" === c && l((0,
                            p.previewMailViaCopy)({
                                attachment: t,
                                fromInstance: "",
                                toInstance: "_"
                            }));
                            var i = "_" !== c && "" !== c ? c : "_";
                            l((0,
                            p.previewAttachment)({
                                attachment: t,
                                accountId: "",
                                opened: !0,
                                attachmentPreviewDisplay: n,
                                messagePreviewDisplay: a
                            }, i))
                        }
                    },
                    handleDowanloadAllAsZip: function(e) {
                        var t = e.uid
                          , n = e.folderPath;
                        l((0,
                        y.downloadAttachment)({
                            uid: t,
                            folderPath: n,
                            part: "*",
                            accountId: r
                        }))
                    },
                    onSaveToCloud: function(e, t) {
                        l((0,
                        g.cloudSaveToRequest)(e, t, r))
                    }
                });
                return Object.assign({}, a, t, s)
            }
        }
          , R = function(e) {
            return (0,
            a.$j)(j, _(e), H(e))
        }
          , B = function(e) {
            return (0,
            a.$j)(j, _(e), H(e))
        }
    },
    68115: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return ne
            }
        });
        var a = n(87401)
          , r = n(23398)
          , i = n.n(r)
          , o = n(55665)
          , l = n.n(o)
          , c = n(77545)
          , s = n(32081)
          , u = n(84987)
          , m = n(67064)
          , d = n.n(m)
          , h = n(65066)
          , p = n.n(h)
          , f = n(80110)
          , v = n(55086)
          , w = n(90656)
          , y = n(40329)
          , g = n(4446)
          , P = n(76634)
          , b = n(7179)
          , E = n(83416)
          , A = n(94165)
          , T = n(44910);
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
        var M = ["messagePreviewDisplay", "isTuiAttachmentView", "handlePopup"]
          , S = ["handleNavigateAttachment", "previewedAttachment"]
          , O = ["handleCloseAttachmentPreview", "handleUpdatePreview", "handleNavigateAttachment", "opened", "pdfFormat", "isTuiAttachmentView", "supported", "previewedAttachment", "messagePreviewDisplay", "onClose", "className"]
          , I = ["opened", "previewedAttachment", "onClose", "className"];
        function C(e, t) {
            if (null == e)
                return {};
            var n, a, r = function(e, t) {
                if (null == e)
                    return {};
                var n, a, r = {}, i = Object.keys(e);
                for (a = 0; a < i.length; a++)
                    n = i[a],
                    t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    n = i[a],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
            }
            return r
        }
        function D(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, k(a.key), a)
            }
        }
        function k(e) {
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
        }
        function U(e, t) {
            return (U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, a = H(e);
                if (t) {
                    var r = H(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === N(t) || "function" == typeof t))
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
        function H(e) {
            return (H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var R = {
            className: i().string,
            previewInstance: i().string,
            handleCloseAttachmentPreview: i().func,
            handleUpdatePreview: i().func,
            handleNavigateAttachment: i().func,
            handleFormatChange: i().func,
            opened: i().func,
            pdfFormat: i().bool,
            isTuiAttachmentView: i().bool,
            supported: i().func,
            previewedAttachment: i().shape({
                document: i().object,
                contentType: i().string,
                filename: i().string,
                part: i().string,
                uid: i().string,
                folderPath: i().string
            }),
            messagePreviewDisplay: i().func,
            handlePopup: i().func,
            onChangeAnimation: i().func,
            onClose: i().func
        }
          , B = function(e) {
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
                t && U(e, t)
            }(n, a.PureComponent);
            var t = j(n);
            function n(e) {
                var a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (a = t.call(this, e)).state = {
                    loading: !1
                },
                a.handleScroll = a.handleScroll.bind(_(a)),
                a.handleBackToMessage = a.handleBackToMessage.bind(_(a)),
                a.updateImageUrl = a.updateImageUrl.bind(_(a)),
                a.renderInvitationAttachmentPreviewDoc = a.renderInvitationAttachmentPreviewDoc.bind(_(a)),
                a.handleImageLoad = a.handleImageLoad.bind(_(a)),
                a.delayUpdateImageUrl = a.delayUpdateImageUrl.bind(_(a)),
                a.renderDownloadAttachmentIcon = a.renderDownloadAttachmentIcon.bind(_(a)),
                a.renderAsImageOrPDFButtons = a.renderAsImageOrPDFButtons.bind(_(a)),
                a.renderHandleBackToMessage = a.renderHandleBackToMessage.bind(_(a)),
                a.renderHandleCloseButton = a.renderHandleCloseButton.bind(_(a)),
                a.renderHandleNavigateAttachment = a.renderHandleNavigateAttachment.bind(_(a)),
                a.renderAutoSizer = a.renderAutoSizer.bind(_(a)),
                a
            }
            return function(e, t, n) {
                t && D(e.prototype, t),
                n && D(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidUpdate",
                value: function() {
                    this.updateImageUrl()
                }
            }, {
                key: "handleScroll",
                value: function() {
                    this.delayUpdateImageUrl()
                }
            }, {
                key: "handleImageLoad",
                value: function(e) {
                    e.loaded = !0,
                    this.updateImageUrl(!0)
                }
            }, {
                key: "handleBackToMessage",
                value: function() {
                    var e = this.props
                      , t = e.handleUpdatePreview
                      , n = e.onChangeAnimation;
                    g.UhU.isMobile && n(),
                    t({
                        messagePreviewDisplay: !0,
                        attachmentPreviewDisplay: !g.UhU.isMobile
                    })
                }
            }, {
                key: "delayUpdateImageUrl",
                value: function() {
                    clearInterval(this.delayTimer),
                    this.delayTimer = setTimeout(this.updateImageUrl, 300)
                }
            }, {
                key: "updateImageUrl",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.scrollEle) {
                        var t = this.scrollEle.scrollTop
                          , n = this.pagesEle.children
                          , a = this.props.previewedAttachment
                          , r = (void 0 === a ? {} : a).document;
                        if (r) {
                            var i = "_" !== this.props.previewInstance
                              , o = r.pages
                              , l = this.scrollEle.clientHeight
                              , c = !1
                              , s = this.scrollEle.clientWidth
                              , u = "";
                            if (window && window.opener && window.opener.contextPath) {
                                var m = (0,
                                g.VG2)();
                                u = m.length && "/" !== m[m.length - 1] ? "".concat(m, "/") : m
                            }
                            for (var d = 0; d < o.length; d += 1)
                                s = Math.max(s, o[d].width + 10),
                                o[d].loaded && (o[d].loaded = !o[d].loaded),
                                !o[d].loaded && n[d].src.endsWith("#") && n[d].offsetTop < t + l && n[d].offsetTop + o[d].height > t && (n[d].src = (i ? u : "") + o[d].url,
                                c = !0);
                            this.state.loading !== c && (e || c) && this.setState({
                                loading: c
                            }),
                            this.pagesEle.style.width = "".concat(s, "px")
                        }
                    }
                }
            }, {
                key: "renderInvitationAttachmentPreviewDoc",
                value: function(e) {
                    var t = e.attachment
                      , n = e.wrapperStyle
                      , r = t.smartObject;
                    if (!r)
                        return null;
                    var i = window.TimeUtil
                      , o = i.getTimeZoneMoment(r.startMillis)
                      , l = i.getTimeZoneMoment(r.endMillis)
                      , c = i.getSelectTimezone().name
                      , s = r.organizer
                      , m = r.xproperties;
                    return a.createElement("div", {
                        className: "ow-mail-MailAttachmentPreview-document-wrapper",
                        style: n
                    }, a.createElement("div", {
                        className: "ow-mail-MailAttachmentPreview-document-pages"
                    }, a.createElement("div", {
                        className: "page-text",
                        style: {
                            minHeight: n.height - (g.UhU.isMobile ? 30 : 40)
                        }
                    }, a.createElement("div", {
                        className: "ow-mail-Invitation-info"
                    }, a.createElement("div", {
                        className: "ow-mail-Invitation-summary"
                    }, r.summary), a.createElement("div", {
                        className: "ow-mail-Invitation-date"
                    }, a.createElement("span", {
                        className: "ow-mail-Invitation-left"
                    }, (0,
                    u.t)("mail.invitationTemplate.DATE")), a.createElement("div", {
                        className: "ow-mail-Invitation-right"
                    }, i.getShortDate(o))), a.createElement("div", {
                        className: "ow-mail-Invitation-time"
                    }, a.createElement("span", {
                        className: "ow-mail-Invitation-left"
                    }, (0,
                    u.t)("mail.invitationTemplate.TIME")), a.createElement("div", {
                        className: "ow-mail-Invitation-right"
                    }, r.allDay ? (0,
                    u.t)("calendar.common.LABEL_ALLDAY") : "".concat(i.getShortTime(o), " - ").concat(i.getShortTime(l), " ").concat(c), r.recurrence && a.createElement("br", null), r.recurrence && (0,
                    P.tK)(r.recurrence, o).label)), r.location && a.createElement("div", {
                        className: "ow-mail-Invitation-location"
                    }, a.createElement("span", {
                        className: "ow-mail-Invitation-left"
                    }, (0,
                    u.t)("mail.invitationTemplate.LOCATION")), a.createElement("div", {
                        className: "ow-mail-Invitation-right"
                    }, r.location)), a.createElement("div", {
                        className: "ow-mail-Invitation-participants"
                    }, a.createElement("span", {
                        className: "ow-mail-Invitation-left"
                    }, (0,
                    u.t)("mail.invitationTemplate.PARTICIPANTS")), a.createElement("div", {
                        className: "ow-mail-Invitation-right"
                    }, m && (m["X-OWNER-NAME"] || m["X-OWNER-ID"]) && a.createElement("span", null, "".concat(m["X-OWNER-NAME"] || m["X-OWNER-ID"], " - ").concat((0,
                    u.t)("calendar.editorView.attendee.status.owner"))), s && a.createElement("span", null, "".concat(s.commonName || s.address, " - ").concat((0,
                    u.t)("calendar.editorView.attendee.status.organizer"))), r.attendees && r.attendees.map(function(e) {
                        return a.createElement("span", null, "".concat(e.commonName || e.address, " - ").concat((0,
                        u.t)("calendar.editorView.attendee.status")[e.status]))
                    }))), r.description && a.createElement("div", {
                        className: "ow-mail-Invitation-desc"
                    }, a.createElement("span", {
                        className: "ow-mail-Invitation-left"
                    }, (0,
                    u.t)("mail.invitationTemplate.DESCRIPTION")), a.createElement("div", {
                        className: "ow-mail-Invitation-right",
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            b.hG)((0,
                            g.iTC)(r.description))
                        }
                    }))))))
                }
            }, {
                key: "renderDownloadAttachmentIcon",
                value: function() {
                    var e = this
                      , t = Object.assign({}, (function(e) {
                        if (null == e)
                            throw new TypeError("Cannot destructure " + e)
                    }(this.props),
                    this.props)).handleDownloadAttachment;
                    return a.createElement(c.Z, {
                        className: "ow-mail-MailAttachmentPreview-attachment-download",
                        onClick: function() {
                            return t(e.props.previewedAttachment)
                        },
                        title: (0,
                        u.t)("mail.detailView.ATTACHMENT_DOWNLOAD")
                    }, a.createElement(s.Z, {
                        name: "download"
                    }))
                }
            }, {
                key: "renderAsImageOrPDFButtons",
                value: function() {
                    var e = this.props
                      , t = e.pdfFormat
                      , n = e.handleFormatChange;
                    return e.previewedAttachment.document.pdfUrl && a.createElement("div", {
                        className: "ow-mail-MailAttachmentPreview-btns"
                    }, a.createElement("span", {
                        role: A.HB.PRESENTATION,
                        className: "ow-mail-MailAttachmentPreview-image-btn".concat(t ? "" : " selected"),
                        onClick: function() {
                            return t && n({
                                pdfFormat: !1
                            })
                        }
                    }, "As Image"), a.createElement("span", {
                        className: "ow-mail-MailAttachmentPreview-seperator"
                    }), a.createElement("span", {
                        role: A.HB.PRESENTATION,
                        className: "ow-mail-MailAttachmentPreview-pdf-btn".concat(t ? " selected" : ""),
                        onClick: function() {
                            return !t && n({
                                pdfFormat: !0
                            })
                        }
                    }, "PDF"))
                }
            }, {
                key: "renderHandleBackToMessage",
                value: function() {
                    var e = this.props
                      , t = e.messagePreviewDisplay
                      , n = e.isTuiAttachmentView;
                    return !t && (!g.UhU.isMobile || n) && a.createElement(c.Z, {
                        className: "ow-mail-MailAttachmentPreview-message-show",
                        onClick: this.handleBackToMessage,
                        title: (0,
                        u.t)("mail.detailView.OPEN_MESSAGE")
                    }, a.createElement(s.Z, {
                        name: "left"
                    }))
                }
            }, {
                key: "renderHandleMessagePop",
                value: function() {
                    var e = this.props
                      , t = e.messagePreviewDisplay
                      , n = (e.isTuiAttachmentView,
                    e.handlePopup)
                      , r = "_" !== C(e, M).previewInstance
                      , i = (0,
                    E.Z)("mail.compose.detachWindow");
                    return g.UhU.isDesktop && !t && !r && i && a.createElement(c.Z, {
                        className: "ow-mail-MailAttachmentPreview-message-pop",
                        onClick: function() {
                            n()
                        },
                        title: (0,
                        u.t)("mail.detailView.POPUP_WINDOW")
                    }, a.createElement(s.Z, {
                        name: "popup"
                    }))
                }
            }, {
                key: "renderHandleCloseButton",
                value: function() {
                    var e = this.props.handleCloseAttachmentPreview;
                    return a.createElement(c.Z, {
                        className: "ow-mail-MailAttachmentPreview-attachment-close",
                        onClick: function() {
                            return e()
                        },
                        onKeyDown: function(t) {
                            t.key === A.BY.ENTERKEY && (e(),
                            (0,
                            T.R8)(".ow-mail-MailPreviewDetailHeader-from .ow-icon", "button"))
                        },
                        title: (0,
                        u.t)("common.CLOSE")
                    }, a.createElement(s.Z, {
                        name: "close"
                    }))
                }
            }, {
                key: "renderHandleNavigateAttachment",
                value: function() {
                    var e = this.props
                      , t = e.handleNavigateAttachment
                      , n = e.previewedAttachment
                      , r = n.part
                      , i = n.uid
                      , o = n.folderPath
                      , l = C(e, S).items
                      , c = l && l.filter(function(e) {
                        return e.uid === i && e.folderPath === o
                    })[0]
                      , m = c && c.detail ? c.detail.attachments : []
                      , d = c.attachMap[r];
                    (void 0 === d || Number.isNaN(d)) && (d = 0);
                    var h = c.part;
                    return a.createElement("div", {
                        className: "ow-mail-MailAttachmentPreview-attachment-bottom"
                    }, a.createElement("div", {
                        className: "ow-mail-spacing"
                    }), a.createElement(s.Z, {
                        name: "left",
                        className: "ow-mail-attachment-left",
                        disabled: 0 === d,
                        onClick: function() {
                            0 !== d && t({
                                uid: i,
                                folderPath: o,
                                part: h
                            }, -1, d)
                        }
                    }), a.createElement("span", {
                        className: "ow-mail-attachment-bottom-text"
                    }, (0,
                    w.WU)((0,
                    u.t)("mail.preview.ATTACHMENT_NAVIGATION"), d + 1, m.length)), a.createElement(s.Z, {
                        name: "right",
                        disabled: d + 1 === m.length,
                        className: "ow-mail-attachment-right",
                        onClick: function() {
                            d + 1 !== m.length && t({
                                uid: i,
                                folderPath: o,
                                part: h
                            }, 1, d)
                        }
                    }), a.createElement("div", {
                        className: "ow-mail-spacing"
                    }))
                }
            }, {
                key: "renderAutoSizer",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = (t.handleCloseAttachmentPreview,
                    t.handleUpdatePreview,
                    t.handleNavigateAttachment,
                    t.opened,
                    t.pdfFormat)
                      , r = (t.isTuiAttachmentView,
                    t.supported)
                      , i = t.previewedAttachment
                      , o = i.contentType
                      , l = i.filename
                      , c = i.document
                      , m = (t.messagePreviewDisplay,
                    t.onClose,
                    t.className,
                    C(t, O))
                      , d = c.pages
                      , h = c.pdfUrl
                      , w = m.handlePreviewAttachment
                      , g = "";
                    if (n) {
                        var P = c.pdfUrl.indexOf("?");
                        g = h.substring(0, P) + "/" + encodeURIComponent(l) + h.substring(P, h.length)
                    }
                    var b = (0,
                    y._y)(o)
                      , T = l && l.toLowerCase().endsWith(".ics")
                      , N = (0,
                    E.Z)("mail.compose.detachWindow");
                    return a.createElement("div", {
                        className: "ow-mail-document-AutoSizer-container"
                    }, a.createElement(v.Z, {
                        className: "ow-mail-document-AutoSizer",
                        onResize: function() {
                            return e.delayUpdateImageUrl()
                        }
                    }, function(t) {
                        var i = t.width
                          , o = t.height;
                        return r ? b ? a.createElement("div", {
                            className: "ow-mail-MailAttachmentPreview-desc"
                        }, a.createElement(s.Z, {
                            name: "eml"
                        }), a.createElement("a", {
                            className: N ? "" : "ow-disabled-link",
                            role: A.HB.PRESENTATION,
                            onClick: function() {
                                return N && w(e.props.previewedAttachment)
                            }
                        }, (0,
                        u.t)("mail.notifyMessage.PREVIEW_EML_IN_POPUP"))) : n ? a.createElement("iframe", {
                            title: "pdfiframe",
                            frameBorder: "0",
                            id: "iframeWrapper-1357",
                            src: g || h,
                            style: {
                                width: i,
                                height: o
                            }
                        }) : T ? e.renderInvitationAttachmentPreviewDoc({
                            attachment: e.props.previewedAttachment,
                            wrapperStyle: {
                                width: i,
                                height: o
                            }
                        }) : d ? a.createElement("div", {
                            className: "ow-mail-MailAttachmentPreview-document-wrapper",
                            style: {
                                width: i,
                                height: o
                            },
                            onScroll: e.handleScroll,
                            ref: function(t) {
                                e.scrollEle = t
                            }
                        }, a.createElement("div", {
                            className: "ow-mail-MailAttachmentPreview-document-pages",
                            ref: function(t) {
                                e.pagesEle = t
                            }
                        }, d && (1 === d.length ? a.createElement(p(), {
                            src: d[0].url,
                            onLoad: function() {
                                return e.handleImageLoad(d[0])
                            }
                        }) : d.map(function(t) {
                            return a.createElement("img", {
                                key: "key_".concat(t.i),
                                alt: "Page ".concat(t.i),
                                src: "#",
                                onLoad: function() {
                                    return e.handleImageLoad(t)
                                },
                                style: {
                                    top: t.top,
                                    width: t.width,
                                    height: t.height
                                }
                            })
                        }))), e.state.loading && a.createElement(f.Z, {
                            ref: function(t) {
                                e.spinner = t
                            }
                        })) : a.createElement(f.Z, null) : a.createElement("span", {
                            className: "ow-mail-MailAttachmentPreview-desc"
                        }, (0,
                        u.t)("mail.warningMessage.NOSUPPORT_PREVIEW"))
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.opened
                      , r = t.previewedAttachment
                      , i = r.filename
                      , o = r.uid
                      , l = r.folderPath
                      , c = r.document
                      , s = t.onClose
                      , u = t.className
                      , m = C(t, I);
                    if (!c)
                        return null;
                    var h = m.items
                      , p = h && h.filter(function(e) {
                        return e.uid === o && e.folderPath === l
                    })[0];
                    return p && p.detail ? !n && s ? (s(),
                    null) : a.createElement("div", {
                        className: d()("ow-mail-MailAttachmentPreview-attachment", u),
                        ref: function(t) {
                            e.container = t
                        }
                    }, a.createElement("div", {
                        className: "ow-mail-MailAttachmentPreview-attachment-toolbar btn-toolbar",
                        ref: function(t) {
                            e.toolbarEle = t
                        }
                    }, this.renderDownloadAttachmentIcon(), this.renderAsImageOrPDFButtons(), a.createElement("span", {
                        className: "ow-mail-MailAttachmentPreview-spacing"
                    }), a.createElement("span", {
                        className: "ow-mail-MailAttachmentPreview-filename"
                    }, i), this.renderHandleBackToMessage(), this.renderHandleMessagePop(), this.renderHandleCloseButton()), this.renderAutoSizer(), this.renderHandleNavigateAttachment()) : null
                }
            }]),
            n
        }();
        B.propTypes = R,
        B.defaultProps = {
            className: "",
            previewInstance: "_",
            handleCloseAttachmentPreview: function() {},
            handleUpdatePreview: function() {},
            handleNavigateAttachment: function() {},
            handleFormatChange: function() {},
            opened: function() {},
            pdfFormat: !1,
            isTuiAttachmentView: !1,
            supported: function() {},
            previewedAttachment: {
                document: {},
                contentType: "",
                filename: "",
                part: "",
                uid: "",
                folderPath: ""
            },
            messagePreviewDisplay: function() {},
            handlePopup: function() {},
            onChangeAnimation: function() {},
            onClose: function() {}
        };
        var L = B
          , V = n(44461)
          , Z = n(45600);
        function W(e) {
            "@babel/helpers - typeof";
            return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var x = ["messagePreviewDisplay", "handlePopup", "handleCloseAttachmentPreview"]
          , F = ["messagePreviewDisplay", "attachmentPreviewDisplay", "opened", "onClose"];
        function G(e, t) {
            if (null == e)
                return {};
            var n, a, r = function(e, t) {
                if (null == e)
                    return {};
                var n, a, r = {}, i = Object.keys(e);
                for (a = 0; a < i.length; a++)
                    n = i[a],
                    t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    n = i[a],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
            }
            return r
        }
        function z() {
            return (z = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, K(a.key), a)
            }
        }
        function K(e) {
            var t = function(e, t) {
                if ("object" !== W(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, t || "default");
                    if ("object" !== W(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === W(t) ? t : String(t)
        }
        function Q(e, t) {
            return (Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, a = q(e);
                if (t) {
                    var r = q(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === W(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return J(e)
                }(this, n)
            }
        }
        function J(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function q(e) {
            return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var $ = function(e) {
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
                t && Q(e, t)
            }(n, a.PureComponent);
            var t = X(n);
            function n(e) {
                var a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (a = t.call(this, e)).handleBackToAttachment = a.handleBackToAttachment.bind(J(a)),
                a.handleChangeAnimation = a.handleChangeAnimation.bind(J(a)),
                a.renderHandleAnimation = a.renderHandleAnimation.bind(J(a)),
                a.renderWhenNotPopup = a.renderWhenNotPopup.bind(J(a)),
                a.renderWhenPopup = a.renderWhenPopup.bind(J(a)),
                g.UhU.isMobile ? (a.animationShowCls = "ow-mail-showAttachmentPreview",
                a.animationHideCls = "ow-mail-hideAttachmentPreview") : (a.animationShowCls = "",
                a.animationHideCls = "ow-mail-hideAttachmentPreview"),
                a
            }
            return function(e, t, n) {
                t && Y(e.prototype, t),
                n && Y(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleChangeAnimation",
                value: function() {
                    g.UhU.isMobile && (this.animationShowCls = "ow-mail-showAttachmentPreview",
                    this.animationHideCls = "ow-mail-hideAttachmentPreview")
                }
            }, {
                key: "handleBackToAttachment",
                value: function() {
                    g.UhU.isMobile && (this.animationShowCls = "ow-mail-showAttachmentPreview-slideRight",
                    this.animationHideCls = "ow-mail-hideAttachmentPreview-slideRight"),
                    this.props.handleUpdatePreview({
                        messagePreviewDisplay: !1,
                        attachmentPreviewDisplay: !0
                    })
                }
            }, {
                key: "renderHandleAnimation",
                value: function() {
                    var e = this.props.attachmentPreviewDisplay;
                    return a.createElement("div", {
                        className: "ow-mail-MailAttachmentPreview-attachment ".concat(e ? this.animationShowCls : this.animationHideCls)
                    }, a.createElement(V.Z, null, a.createElement(L, z({
                        onChangeAnimation: this.handleChangeAnimation
                    }, this.props))))
                }
            }, {
                key: "renderWhenNotPopup",
                value: function() {
                    var e = this.props
                      , t = e.messagePreviewDisplay
                      , n = e.handlePopup
                      , r = e.handleCloseAttachmentPreview
                      , i = "_" !== G(e, x).previewInstance
                      , o = (0,
                    E.Z)("mail.compose.detachWindow");
                    return a.createElement("div", {
                        className: "ow-mail-MailAttachmentPreview-message-toolbar btn-toolbar"
                    }, a.createElement(c.Z, {
                        className: "ow-mail-MailAttachmentPreview-message-hide",
                        onClick: this.handleBackToAttachment,
                        title: (0,
                        u.t)("mail.detailView.HIDE_MESSAGE"),
                        role: A.HB.BUTTON,
                        "aria-label": (0,
                        u.t)("mail.detailView.HIDE_MESSAGE")
                    }, a.createElement(s.Z, {
                        name: "right"
                    })), a.createElement("span", {
                        className: "ow-mail-MailAttachmentPreview-spacing"
                    }), g.UhU.isDesktop && t && !i && o && a.createElement(c.Z, {
                        className: "ow-mail-MailAttachmentPreview-message-pop",
                        title: (0,
                        u.t)("mail.detailView.POPUP_WINDOW"),
                        onClick: function() {
                            n()
                        },
                        role: A.HB.BUTTON,
                        "aria-label": (0,
                        u.t)("mail.detailView.POPUP_WINDOW")
                    }, a.createElement(s.Z, {
                        name: "popup"
                    })), g.UhU.isMobile && a.createElement(c.Z, {
                        className: "ow-mail-MailAttachmentPreview-attachment-close",
                        onClick: function() {
                            return r()
                        },
                        title: (0,
                        u.t)("common.CLOSE"),
                        role: A.HB.BUTTON,
                        "aria-label": (0,
                        u.t)("common.CLOSE")
                    }, a.createElement(s.Z, {
                        name: "close"
                    })))
                }
            }, {
                key: "renderWhenPopup",
                value: function() {
                    var e = this.props.onClose;
                    return a.createElement(c.Z, {
                        onClick: function() {
                            return e()
                        },
                        title: (0,
                        u.t)("common.CLOSE"),
                        className: "ow-mail-MailAttachmentPreview-popup-close",
                        role: A.HB.BUTTON,
                        "aria-label": (0,
                        u.t)("common.CLOSE")
                    }, a.createElement(s.Z, {
                        name: "close"
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.messagePreviewDisplay
                      , n = e.attachmentPreviewDisplay
                      , r = e.opened
                      , i = e.onClose
                      , o = G(e, F)
                      , c = o.items
                      , s = "_" !== o.previewInstance;
                    if (!c)
                        return null;
                    if (!r && i)
                        return i(),
                        null;
                    var u = "100%";
                    n && t ? u = "38%" : n && (u = "0%");
                    var m = s || g.UhU.isMobile ? "" : {
                        maxWidth: "60%"
                    };
                    return a.createElement(l(), {
                        primary: "second",
                        className: "ow-mail-MailAttachmentPreview-SplitPane",
                        defaultSize: u,
                        pane2Style: m
                    }, this.renderHandleAnimation(), a.createElement("div", {
                        className: "ow-mail-MailAttachmentPreview-message ".concat(t ? this.animationShowCls : this.animationHideCls)
                    }, !s && this.renderWhenNotPopup(), s && (g.UhU.isMobile || g.UhU.isTablet) && this.renderWhenPopup(), a.createElement(V.Z, null, a.createElement(Z.Z, z({}, this.props, {
                        selectedCount: 1
                    })))))
                }
            }]),
            n
        }();
        $.defaultProps = {
            previewInstance: "_",
            handlePopup: function() {},
            onClose: function() {},
            handleUpdatePreview: function() {},
            handleCloseAttachmentPreview: function() {},
            messagePreviewDisplay: !0,
            attachmentPreviewDisplay: !0,
            isTuiAttachmentView: !1,
            opened: !1
        },
        $.propTypes = {
            previewInstance: i().string,
            handlePopup: i().func,
            onClose: i().func,
            handleUpdatePreview: i().func,
            handleCloseAttachmentPreview: i().func,
            messagePreviewDisplay: i().bool,
            attachmentPreviewDisplay: i().bool,
            isTuiAttachmentView: i().bool,
            opened: i().bool
        };
        var ee = $
          , te = (0,
        n(91437).QI)(function() {
            return te
        })(ee)
          , ne = te
    }
}]);
