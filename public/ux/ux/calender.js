/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[548], {
    35788: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return H
            }
        });
        var n = a(15671)
          , r = a(43144)
          , c = a(60136)
          , l = a(82963)
          , o = a(61120)
          , s = a(87401)
          , i = a(23398)
          , d = a.n(i)
          , u = a(55046)
          , m = a.n(u)
          , E = a(80357)
          , h = a.n(E)
          , f = a(8764)
          , v = a.n(f)
          , p = a(76707)
          , w = a.n(p)
          , C = a(45239)
          , y = a.n(C)
          , N = a(78295)
          , T = a.n(N)
          , S = a(55594)
          , b = a.n(S)
          , B = a(70293)
          , A = a.n(B)
          , R = a(15292)
          , k = a.n(R)
          , O = a(5613)
          , Z = a(70224)
          , g = a(32081)
          , P = a(94165)
          , x = a(44910)
          , D = a(84987);
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
                var a, n = (0,
                o.Z)(e);
                if (t) {
                    var r = (0,
                    o.Z)(this).constructor;
                    a = Reflect.construct(n, arguments, r)
                } else
                    a = n.apply(this, arguments);
                return (0,
                l.Z)(this, a)
            }
        }
        var H = function(e) {
            (0,
            c.Z)(a, e);
            var t = I(a);
            function a() {
                return (0,
                n.Z)(this, a),
                t.apply(this, arguments)
            }
            return (0,
            r.Z)(a, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.state.isAdvancedSearchShow
                      , a = this.props
                      , n = a.searchSelected
                      , r = a.allCalendars
                      , c = a.categories
                      , l = a.dateFormat;
                    if (r.length < 1)
                        return null;
                    var o = (r.filter(function(t) {
                        return t.id === e.state.calendarId
                    })[0] || r[0]).name
                      , i = this.state.text || this.state.startTime || this.state.endTime || this.state.category || this.state.calendarId || this.state.alarmsOnly
                      , d = (0,
                    D.t)("calendar.search.SEARCH_FIELD_BLANK");
                    return s.createElement("div", {
                        className: "ow-calendar-CalendarSearch".concat(n ? " ow-calendar-CalendarSearch-selected" : ""),
                        tabIndex: 0,
                        role: P.HB.SEARCH
                    }, s.createElement("div", {
                        ref: function(t) {
                            e.topBorder = t
                        }
                    }), s.createElement(m(), {
                        className: "ow-calendar-CalendarSearch-input-group"
                    }, this.renderInputField({
                        placeHolderText: d,
                        showClearButton: n,
                        value: this.state.text,
                        fieldName: "text"
                    }), s.createElement(m().Button, null, s.createElement(v(), {
                        onClick: this.handleAdvanceBtnClick,
                        title: (0,
                        D.t)("common.SHOW_ADVANCED_TOOLTIP"),
                        "aria-label": t ? (0,
                        D.t)("aria.label.EXPAND") : (0,
                        D.t)("aria.label.COLLAPSE"),
                        id: "CalendarSearch-caret-btn"
                    }, s.createElement("span", {
                        className: "caret"
                    })))), s.createElement(w(), {
                        show: t,
                        container: this,
                        target: this.topBorder,
                        placement: "bottom",
                        rootClose: !0,
                        onHide: function() {
                            e.setState({
                                isAdvancedSearchShow: !1
                            })
                        }
                    }, s.createElement("div", {
                        className: "ow-calendar-CalendarSearch-overlay",
                        onKeyDown: function(e) {
                            e.key === P.BY.ESCAPEKEY && (0,
                            x.kW)("#CalendarSearch-caret-btn")
                        }
                    }, s.createElement(k(), null, s.createElement(y(), {
                        horizontal: !0
                    }, s.createElement(T(), {
                        controlId: "text",
                        bsSize: ""
                    }, s.createElement(A(), {
                        componentClass: b(),
                        sm: 2,
                        xs: 2,
                        "aria-label": (0,
                        D.t)("calendar.search.CONTENT")
                    }, (0,
                    D.t)("calendar.search.CONTENT"), ":"), s.createElement(A(), {
                        sm: 9,
                        xs: 9
                    }, this.renderInputField({
                        value: this.state.text,
                        fieldName: "text"
                    }))), s.createElement(T(), {
                        controlId: "category",
                        bsSize: ""
                    }, s.createElement(A(), {
                        componentClass: b(),
                        sm: 2,
                        xs: 2,
                        "aria-label": (0,
                        D.t)("calendar.search.CATEGORY")
                    }, (0,
                    D.t)("calendar.search.CATEGORY"), ":"), s.createElement(A(), {
                        sm: 9,
                        xs: 9
                    }, s.createElement(h(), {
                        id: "calendar-search-category-dropdown",
                        onSelect: function(t) {
                            return e.setState({
                                category: t
                            })
                        }
                    }, s.createElement(h().Toggle, {
                        noCaret: !0,
                        "aria-label": (0,
                        D.t)("calendar.search.CATEGORY")
                    }, this.state.category && s.createElement(g.Z, {
                        name: "calendar-".concat(this.state.category.toLowerCase())
                    }), s.createElement("div", {
                        className: "ow-calendar-CalendarSearch-categoryTitle"
                    }, c.filter(function(t) {
                        return t.key === e.state.category
                    })[0].name), s.createElement("span", {
                        className: "caret"
                    })), s.createElement(h().Menu, {
                        className: "ow-calendar-search-category-menu"
                    }, c.map(function(e) {
                        var t = e.name
                          , a = e.key;
                        return s.createElement(Z.Z, {
                            eventKey: a
                        }, s.createElement(g.Z, {
                            name: "calendar-".concat(t.toLowerCase())
                        }), "" == a ? (0,
                        D.t)("calendar.search.ALL_CATEGORY") : (0,
                        D.t)("calendar.editorView.".concat(t.toUpperCase())))
                    }))))), s.createElement(T(), {
                        controlId: "calendars",
                        bsSize: ""
                    }, s.createElement(A(), {
                        componentClass: b(),
                        sm: 2,
                        xs: 2,
                        "aria-label": (0,
                        D.t)("calendar.search.CALENDAR")
                    }, (0,
                    D.t)("calendar.search.CALENDAR"), ":"), s.createElement(A(), {
                        sm: 9,
                        xs: 9
                    }, s.createElement(h(), {
                        id: "calendar-search-calendar-dropdown",
                        onSelect: function(t) {
                            return e.setState({
                                calendarId: t
                            })
                        }
                    }, s.createElement(h().Toggle, {
                        noCaret: !0,
                        "aria-label": (0,
                        D.t)("calendar.search.CALENDAR")
                    }, s.createElement("div", {
                        className: "ow-calendar-CalendarSearch-calendarsTitle",
                        "aria-label": o
                    }, o), s.createElement("span", {
                        className: "caret"
                    })), s.createElement(h().Menu, {
                        className: "ow-calendar-search-calendars-menu"
                    }, r.map(function(e) {
                        return s.createElement(Z.Z, {
                            eventKey: e.id,
                            title: e.name,
                            "aria-label": e.name
                        }, e.name)
                    }))))), s.createElement(T(), {
                        controlId: "fromDate",
                        bsSize: ""
                    }, s.createElement(A(), {
                        componentClass: b(),
                        sm: 2,
                        xs: 2
                    }, (0,
                    D.t)("calendar.editorView.FIELD_TYPE_SELECTED_TEXT.DATE"), ":"), s.createElement(A(), {
                        className: "ow-calendar-CalendarSearch-dates",
                        sm: 9,
                        xs: 9
                    }, s.createElement("div", {
                        style: {
                            position: "relative"
                        }
                    }, s.createElement(O.Z, {
                        id: "after",
                        placeholderText: (0,
                        D.t)("mail.search.FROM_DATE"),
                        "aria-label": (0,
                        D.t)("mail.search.FROM_DATE"),
                        className: "ow-calendar-CalendarSearch-from",
                        selected: this.state.startTime,
                        dateFormat: l,
                        selectsStart: !0,
                        startDate: this.state.startTime,
                        endDate: this.state.endTime,
                        onChange: this.handleChangeStart,
                        ref: function(e) {
                            e && (e.onInputClick = function() {}
                            )
                        }
                    })), s.createElement("span", {
                        className: "ow-calendar-CalendarSearch-dates-seperator"
                    }, "  "), s.createElement("div", {
                        style: {
                            position: "relative"
                        }
                    }, s.createElement(O.Z, {
                        placeholderText: (0,
                        D.t)("mail.search.TO_DATE"),
                        "aria-label": (0,
                        D.t)("mail.search.TO_DATE"),
                        className: "ow-calendar-CalendarSearch-to",
                        selected: this.state.endTime,
                        dateFormat: l,
                        selectsEnd: !0,
                        startDate: this.state.startTime,
                        endDate: this.state.endTime,
                        onChange: this.handleChangeEnd,
                        ref: function(e) {
                            e && (e.onInputClick = function() {}
                            )
                        },
                        popperClassName: "ow-react-datepicker-popper-alignment"
                    })))), s.createElement(T(), {
                        controlId: "reminder",
                        bsSize: ""
                    }, s.createElement(A(), {
                        componentClass: b(),
                        sm: 2,
                        xs: 2
                    }), s.createElement(A(), {
                        sm: 9,
                        xs: 9
                    }, s.createElement("div", {
                        role: P.HB.PRESENTATION,
                        className: "ow-calendar-CalendarSearch-reminder",
                        onClick: function() {
                            return e.setState({
                                alarmsOnly: !e.state.alarmsOnly
                            })
                        },
                        onKeyDown: function(t) {
                            t.key === P.BY.ENTERKEY ? e.setState({
                                alarmsOnly: !e.state.alarmsOnly
                            }) : i || t.key !== P.BY.TABKEY || (0,
                            x.kW)("#CalendarSearch-caret-btn")
                        }
                    }, s.createElement(g.Z, {
                        name: this.state.alarmsOnly ? "square-selected" : "squared-unchecked",
                        role: P.HB.CHECKBOX,
                        "aria-label": (0,
                        D.t)("calendar.search.WITH_REMINDER"),
                        "aria-checked": this.state.alarmsOnly,
                        tabIndex: 0
                    }), s.createElement("span", null, (0,
                    D.t)("calendar.search.WITH_REMINDER"))))), s.createElement("div", {
                        className: "ow-calendar-CalendarSearch-searchBtn-wrapper"
                    }, s.createElement(v(), {
                        className: "ow-button-primary btn btn-default",
                        onClick: this.handleAdvSearch,
                        disabled: !i,
                        role: P.HB.BUTTON,
                        "aria-label": (0,
                        D.t)("calendar.search.BTN_SEARCH"),
                        "aria-disabled": !i,
                        onKeyDown: function(t) {
                            if (t.key !== P.BY.TABKEY) {
                                if (t.key !== P.BY.ENTERKEY)
                                    return;
                                e.handleAdvSearch()
                            }
                            t.shiftKey ? ((0,
                            x.kW)(".ow-calendar-CalendarSearch-reminder .ow-icon"),
                            t.preventDefault()) : ((0,
                            x.kW)(".ow-calendar-CalendarSearch-input-group button"),
                            t.preventDefault())
                        }
                    }, (0,
                    D.t)("calendar.search.BTN_SEARCH"))))))))
                }
            }]),
            a
        }(a(2786).Z);
        H.defaultProps = {
            allCalendars: [],
            categories: [],
            searchSelected: !1,
            onExitSearch: function() {},
            onSearch: function() {},
            onAdvancedSearch: function() {}
        },
        H.propTypes = {
            allCalendars: d().arrayOf(d().object),
            categories: d().arrayOf(d().object),
            searchSelected: d().bool,
            onExitSearch: d().func,
            onSearch: d().func,
            onAdvancedSearch: d().func
        }
    },
    10861: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return w
            }
        });
        var n = a(93433)
          , r = a(71002)
          , c = a(15671)
          , l = a(43144)
          , o = a(60136)
          , s = a(82963)
          , i = a(61120)
          , d = a(87401)
          , u = (a(23398),
        a(55086))
          , m = a(10091)
          , E = (a(77545),
        a(84987))
          , h = a(83416)
          , f = a(94165)
          , v = a(44910);
        function p(e) {
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
                    var r = (0,
                    i.Z)(this).constructor;
                    a = Reflect.construct(n, arguments, r)
                } else
                    a = n.apply(this, arguments);
                return (0,
                s.Z)(this, a)
            }
        }
        var w = function(e) {
            (0,
            o.Z)(a, e);
            var t = p(a);
            function a() {
                return (0,
                c.Z)(this, a),
                t.apply(this, arguments)
            }
            return (0,
            l.Z)(a, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , a = t.onRefresh
                      , c = t.onCreateEvent
                      , l = t.onCreateCalendar
                      , o = t.onPrintCalendar
                      , s = t.onImportEvent
                      , i = t.onExportEvent
                      , E = t.onSubscrib
                      , f = t.onExitSearch
                      , v = t.enableCalendarSearch
                      , p = []
                      , w = [];
                    (0,
                    h.Z)("calendar.listToolbar").map(function(e) {
                        if ("object" === (0,
                        r.Z)(e)) {
                            var t = Object.keys(e)
                              , a = Object.values(e);
                            "more" === t[0] ? (w = [],
                            w = (0,
                            n.Z)(a[0]),
                            p.push(t[0])) : p.push(t[0])
                        } else
                            p.push(e)
                    });
                    var C = {
                        printCalendar: this.renderPrintCal(o),
                        importEvents: this.renderimportEvents(s),
                        exportEvents: this.renderexportEvents(i),
                        subscribeCal: this.renderSubscribeCal(E)
                    }
                      , y = {
                        refresh: this.renderRefresh(a),
                        newEvent: this.renderNewEvent(c),
                        addCalendar: this.renderAddCalendar(l),
                        more: this.renderMore(w, C)
                    };
                    return d.createElement(u.Z, {
                        className: "ow-calendar-CalendarToolbar-AutoSizer",
                        disableHeight: !0
                    }, function(t) {
                        var a = t.width;
                        return d.createElement(m.Z, {
                            enableResponsive: !0,
                            width: a > 5e3 ? 5e3 : a,
                            ref: function(t) {
                                e.toolbar = t
                            }
                        }, p.includes("btnBackToCalendar") && v ? e.renderSearchExit(f) : "", !v && d.createElement(d.Fragment, null, p.map(function(e) {
                            return y[e]
                        })))
                    })
                }
            }, {
                key: "renderNewEvent",
                value: function(e) {
                    return d.createElement(m.Z.Button, {
                        onClick: function() {
                            return e()
                        },
                        iconName: "plus",
                        role: "button",
                        "aria-label": (0,
                        E.t)("calendar.editorView.NEW_EVENT"),
                        id: "calendarToolbarNewEventBtn",
                        onKeyDown: function(e) {
                            return e.key === f.BY.ENTERKEY && setTimeout(function() {
                                (0,
                                v.kW)(".ow-calendar-EventEditor-panel-upper")
                            }, 50)
                        }
                    }, (0,
                    E.t)("calendar.toolbar.BUTTON_NEW"))
                }
            }]),
            a
        }(a(69765).Z)
    },
    91597: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return p
            }
        });
        var n = a(15671)
          , r = a(43144)
          , c = a(60136)
          , l = a(82963)
          , o = a(61120)
          , s = a(87401)
          , i = (a(12674),
        a(76707))
          , d = a.n(i)
          , u = (a(23398),
        a(10091),
        a(32081))
          , m = a(4446)
          , E = (a(76634),
        a(84987),
        a(83416))
          , h = a(94165)
          , f = a(7179);
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
                var a, n = (0,
                o.Z)(e);
                if (t) {
                    var r = (0,
                    o.Z)(this).constructor;
                    a = Reflect.construct(n, arguments, r)
                } else
                    a = n.apply(this, arguments);
                return (0,
                l.Z)(this, a)
            }
        }
        var p = function(e) {
            (0,
            c.Z)(a, e);
            var t = v(a);
            function a() {
                return (0,
                n.Z)(this, a),
                t.apply(this, arguments)
            }
            return (0,
            r.Z)(a, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , a = t.event
                      , n = t.timeInfo
                      , r = t.color
                      , c = t.placement
                      , l = a || {}
                      , o = l.summary
                      , i = l.description
                      , v = this.state
                      , p = v.overlayX
                      , w = v.overlayY
                      , C = !(0,
                    m.EmB)()
                      , y = (0,
                    m.i7g)() || (0,
                    m.G6W)() ? "ellipsis-overflow" : "scroll-overflow"
                      , N = (0,
                    E.Z)("calendar.CATEGORY_OPTIONS")
                      , T = a && a.categories && N.find(function(e) {
                        return e.toUpperCase() === a.categories
                    });
                    return s.createElement("div", {
                        className: "ow-calendar-EventPreview-target",
                        style: {
                            top: "".concat(w, "px"),
                            left: "".concat(p, "px"),
                            visibility: a ? "visible" : "hidden"
                        },
                        ref: function(t) {
                            e.container = t
                        }
                    }, a && s.createElement(d(), {
                        className: "ow-calendar-EventPreview-overlay",
                        show: !0,
                        shouldUpdatePosition: !0,
                        target: this.container,
                        container: this.container,
                        placement: c,
                        rootClose: C,
                        onHide: function() {
                            e.handleHide()
                        },
                        onEnter: function() {
                            e.updatePosition()
                        },
                        ref: function(t) {
                            e.overlay = t
                        }
                    }, s.createElement("div", {
                        className: "ow-calendar-EventPreview",
                        ref: function(t) {
                            e.arrowParent = t
                        },
                        role: h.HB.DOCUMENT
                    }, s.createElement("div", {
                        className: "ow-arrow-left",
                        ref: function(t) {
                            e.arrow = t
                        }
                    }, s.createElement("div", {
                        className: "ow-arrow-inner"
                    })), s.createElement("div", {
                        className: "ow-calendar-EventPreview-inner",
                        onKeyDown: function(t) {
                            t.key === h.BY.ESCAPEKEY && (t.preventDefault(),
                            e.handleHide(),
                            setFocus("#calendarToolbarNewEventBtn"))
                        }
                    }, s.createElement("div", {
                        className: "ow-calendar-EventPreview-header",
                        style: {
                            backgroundColor: r
                        }
                    }, s.createElement("span", {
                        role: h.HB.PRESENTATION,
                        className: "ow-calendar-EventPreview-headerInfo",
                        onClick: function() {
                            return e.handleEdit()
                        }
                    }, o), s.createElement(u.Z, {
                        name: "close",
                        id: "ow-calendar-preview-close",
                        role: h.HB.BUTTON,
                        "aria-label": "close",
                        onClick: function() {
                            return e.handleHide()
                        },
                        onKeyDown: function(t) {
                            if (1 !== document.querySelectorAll(".ow-calendar-EventPreview-toolbar button:not([disabled])").length || t.key !== h.BY.TABKEY)
                                return t.key !== h.BY.TABKEY ? t.key === h.BY.ENTERKEY ? (e.handleHide(),
                                void setFocus("#calendarToolbarNewEventBtn")) : void 0 : void (t.shiftKey ? (t.preventDefault(),
                                setFocus(".ow-calendar-EventPreview-toolbar .ow-calendar-EventPreview-delete")) : t.stopPropagation());
                            t.preventDefault()
                        }
                    })), s.createElement("div", {
                        className: "ow-calendar-EventPreview-content",
                        role: h.HB.REGION
                    }, s.createElement("div", {
                        className: "ow-calendar-EventPreview-content-title"
                    }, s.createElement(u.Z, {
                        className: "ow-calendar-EventPreview-category",
                        name: a.categories ? "calendar-".concat(a.categories.toLowerCase()) : "",
                        title: T || ""
                    }), s.createElement("div", {
                        className: "ow-calendar-EventPreview-content-desc"
                    }, s.createElement("div", {
                        className: "ow-calendar-EventPreview-content-desc-summary"
                    }, s.createElement("span", {
                        role: h.HB.PRESENTATION,
                        onClick: function() {
                            return e.handleEdit()
                        },
                        className: "ow-calendar-EventPreview-summary"
                    }, n)), s.createElement("div", {
                        role: h.HB.PRESENTATION,
                        onClick: function() {
                            return e.handleEdit()
                        },
                        className: "ow-calendar-EventPreview-desc ".concat(y)
                    }, i && i.split("\r").map(function(e) {
                        return s.createElement("span", {
                            dangerouslySetInnerHTML: {
                                __html: (0,
                                f.hG)(e)
                            }
                        })
                    })))), this.renderInfo()), this.renderToolbar()))))
                }
            }]),
            a
        }(a(5480).Z)
    }
}]);
