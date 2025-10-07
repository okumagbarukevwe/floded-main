/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[998], {
    54645: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return U
            }
        });
        var n = a(15671)
          , s = a(43144)
          , i = a(60136)
          , r = a(82963)
          , o = a(61120)
          , l = a(87401)
          , c = (a(23398),
        a(32022))
          , u = a.n(c)
          , m = a(35369)
          , T = a(44621)
          , d = a(84987)
          , E = a(94165)
          , k = a(90656)
          , I = a(83416)
          , f = a(44910)
          , v = a(64661);
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
                var a, n = (0,
                o.Z)(e);
                if (t) {
                    var s = (0,
                    o.Z)(this).constructor;
                    a = Reflect.construct(n, arguments, s)
                } else
                    a = n.apply(this, arguments);
                return (0,
                r.Z)(this, a)
            }
        }
        var p = (0,
        I.Z)("calendar").reminder
          , h = (0,
        I.Z)("tasks")
          , R = h.toDoNameSize
          , D = h.toDoDescriptionSize
          , w = h.toDoStructure
          , L = E.ye.TASKS_GROUP_OTHERS
          , S = E.ye.TASKS_GROUP_SCHEDULED
          , N = E.hw.PRIORITY_NONE
          , A = E.hw.PRIORITY_LOW
          , y = E.hw.PRIORITY_MEDIUM
          , O = E.hw.PRIORITY_HIGH
          , b = E.HH.STATUS_NOT_STARTED
          , g = E.HH.STATUS_IN_PROGRESS
          , B = E.HH.STATUS_DONE
          , H = E.HH.STATUS_WAITING
          , U = function(e) {
            (0,
            i.Z)(a, e);
            var t = _(a);
            function a() {
                return (0,
                n.Z)(this, a),
                t.apply(this, arguments)
            }
            return (0,
            s.Z)(a, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.groupList
                      , a = e.currentGroupId
                      , n = e.editingItem
                      , s = e.dateFormat
                      , i = e.timeFormatFlag
                      , r = e.onChange
                      , o = e.onValid
                      , c = e.onInvalid
                      , I = e.onValidSubmit
                      , v = this.state
                      , _ = v.enableDue
                      , h = v.enableStart
                      , U = (v.startInMoment,
                    n.summary)
                      , Z = n.priority
                      , V = n.status
                      , P = n.description
                      , C = n.url
                      , F = n.alarm
                      , M = n.xproperties
                      , Y = n.startMillis
                      , x = n.dueMillis
                      , G = (n.recurrence,
                    n.hasStartTime)
                      , K = n.hasDueTime
                      , W = window.TimeUtil;
                    return l.createElement(m.l0, {
                        onChange: r,
                        onValid: o,
                        onInvalid: c,
                        onValidSubmit: I,
                        ref: this.setFormsyRef,
                        onKeyDown: function(e) {
                            e.key === E.BY.TABKEY && e.shiftKey && e.stopPropagation()
                        }
                    }, l.createElement("div", {
                        className: "ow-tasks-TasksToDoEditForm-body-upper"
                    }, l.createElement(m.UP, {
                        type: "text",
                        label: (0,
                        d.t)("tasks.editView.LABEL_TITLE"),
                        "aria-label": (0,
                        d.t)("tasks.editView.LABEL_TITLE"),
                        "aria-required": "true",
                        name: w.summary,
                        value: U || "",
                        validations: {
                            customValidation: function(e, t) {
                                return "" !== t.trim() || (0,
                                d.t)("calendar.warningMessage.WARNING_TITLE_NO_BLANK")
                            },
                            maxLength: R
                        },
                        validationErrors: {
                            maxLength: (0,
                            k.WU)((0,
                            d.t)("calendar.warningMessage.WARNING_TITLE_TOO_LONG"), R),
                            isDefaultRequiredValue: (0,
                            d.t)("calendar.warningMessage.WARNING_TITLE_NO_BLANK")
                        },
                        required: !0
                    }), l.createElement(m.Hi, {
                        label: (0,
                        d.t)("tasks.editView.LABEL_GROUP"),
                        name: w.group,
                        value: a && a !== S ? a : M && M["X-CP-TASKLIST"] || L,
                        options: t
                    }), l.createElement(m.Hi, {
                        label: (0,
                        d.t)("tasks.editView.LABEL_PRIORITY"),
                        name: w.priority,
                        value: Z || N,
                        options: [{
                            label: (0,
                            d.t)("tasks.editView.PRIORITY_NONE"),
                            value: N
                        }, {
                            label: (0,
                            d.t)("tasks.editView.PRIORITY_LOW"),
                            value: A
                        }, {
                            label: (0,
                            d.t)("tasks.editView.PRIORITY_MEDIUM"),
                            value: y
                        }, {
                            label: (0,
                            d.t)("tasks.editView.PRIORITY_HIGH"),
                            value: O
                        }]
                    }), l.createElement(m.Hi, {
                        label: (0,
                        d.t)("tasks.editView.LABEL_STATUS"),
                        name: w.status,
                        value: V || g,
                        options: [{
                            label: (0,
                            d.t)("tasks.editView.STATUS_LABEL_NOT_STARTED"),
                            value: b
                        }, {
                            label: (0,
                            d.t)("tasks.editView.STATUS_LABEL_IN_PROGRESS"),
                            value: g
                        }, {
                            label: (0,
                            d.t)("tasks.editView.STATUS_LABEL_DONE"),
                            value: B
                        }, {
                            label: (0,
                            d.t)("tasks.editView.STATUS_LABEL_WAITING"),
                            value: H
                        }]
                    })), l.createElement("div", {
                        className: "ow-tasks-TasksToDoEditForm-start-section ow-tasks-TasksToDoEditForm-formField-inline"
                    }, l.createElement(m.hE, {
                        label: (0,
                        d.t)("tasks.editView.LABEL_START_DATE"),
                        name: w.start.hasStartTime,
                        value: !!Y || G,
                        onChange: this.handleStartCheckboxChange,
                        className: "ow-tasks-start-date",
                        enableStart: h
                    }), l.createElement("div", {
                        className: "ow-task-EventEditor-times"
                    }, l.createElement(m.UP, {
                        className: "ow-tasks-TasksToDoEditForm-Date",
                        type: "date",
                        label: (0,
                        d.t)("calendar.editorView.FIELD_TYPE_SELECTED_TEXT.DATE"),
                        name: w.start.date,
                        value: Y ? W.getShortDate(Y) : u()().format(s),
                        dateFormat: s,
                        dateToStringFormat: s,
                        onChange: this.handleStartDateChange,
                        disabled: !h,
                        tabIndex: h ? 0 : -1,
                        validations: {
                            customValidation: function(e, t) {
                                var a = W.parseTimeZoneMoment(t, s)
                                  , n = e.dueDate
                                  , i = W.parseTimeZoneMoment(n, s);
                                return !(h && _ && a.isAfter(i)) || (0,
                                d.t)("calendar.warningMessage.WARNING_START_DATE_LATER_THAN_DUE_DATE")
                            }
                        }
                    }), l.createElement(m.Hi, {
                        "aria-label": (0,
                        d.t)("tasks.editView.LABEL_START_TIME"),
                        name: w.start.time,
                        value: Y ? W.getShortTime(Y) : (0,
                        T.oB)(i),
                        options: i ? (0,
                        T.X9)() : (0,
                        T.iG)(),
                        disabled: !h,
                        tabIndex: h ? 0 : -1,
                        validations: {
                            customValidation: function(e, t) {
                                var a = e.startDate
                                  , n = e.dueDate
                                  , r = e.dueTime
                                  , o = u()("".concat(n, " ").concat(r), "".concat(s, " ").concat(i ? "HH:mm" : "hh:mm A"))
                                  , l = u()("".concat(a, " ").concat(t), "".concat(s, " ").concat(i ? "HH:mm" : "hh:mm A"));
                                return !(h && _ && l.isAfter(o)) || (0,
                                d.t)("calendar.warningMessage.WARNING_START_TIME_LATER_THAN_DUE_TIME")
                            }
                        }
                    }))), l.createElement("div", {
                        className: "ow-tasks-TasksToDoEditForm-body-middle ow-tasks-TasksToDoEditForm-formField-inline"
                    }, l.createElement(m.hE, {
                        label: (0,
                        d.t)("tasks.editView.LABEL_DUE_DATE"),
                        name: w.due.hasDueTime,
                        value: !!x || K,
                        onChange: this.handleDueCheckboxChange,
                        className: "ow-tasks-due-date",
                        enableDue: _
                    }), l.createElement("div", {
                        className: "ow-task-EventEditor-times"
                    }, l.createElement(m.UP, {
                        type: "date",
                        label: (0,
                        d.t)("calendar.editorView.FIELD_TYPE_SELECTED_TEXT.DATE"),
                        name: w.due.date,
                        value: x ? W.getShortDate(x) : u()().format(s),
                        dateFormat: s,
                        dateToStringFormat: s,
                        disabled: !_,
                        tabIndex: _ ? 0 : -1,
                        validations: {
                            customValidation: function(e, t) {
                                var a = e.startDate
                                  , n = W.parseTimeZoneMoment(a, s)
                                  , i = W.parseTimeZoneMoment(t, s);
                                return !(h && _ && i.isBefore(n)) || (0,
                                d.t)("calendar.warningMessage.WARNING_DUE_DATE_EARLIER_THAN_START_DATE")
                            }
                        }
                    }), l.createElement(m.Hi, {
                        name: w.due.time,
                        "aria-label": (0,
                        d.t)("tasks.editView.LABEL_DUE_TIME"),
                        value: x ? W.getShortTime(x) : (0,
                        T.oB)(i),
                        options: i ? (0,
                        T.X9)() : (0,
                        T.iG)(),
                        disabled: !_,
                        tabIndex: _ ? 0 : -1,
                        validations: {
                            customValidation: function(e, t) {
                                var a = e.startDate
                                  , n = e.startTime
                                  , r = e.dueDate
                                  , o = u()("".concat(r, " ").concat(t), "".concat(s, " ").concat(i ? "HH:mm" : "hh:mm A"))
                                  , l = u()("".concat(a, " ").concat(n), "".concat(s, " ").concat(i ? "HH:mm" : "hh:mm A"));
                                return !(h && _ && (o.isBefore(l) || _ && o.isBefore(l))) || (0,
                                d.t)("calendar.warningMessage.WARNING_DUE_TIME_EARLIER_THAN_START_TIME")
                            }
                        }
                    })), l.createElement(m.Hi, {
                        className: "ow-tasks-TasksToDoEditForm-reminder",
                        label: (0,
                        d.t)("tasks.editView.LABEL_REMINDER"),
                        name: w.due.reminder,
                        value: F ? F.offsetMinutes : 1e3,
                        options: p.options.map(function(e, t) {
                            return {
                                value: e,
                                label: (0,
                                d.t)("calendar.editorView.reminder.options")[t]
                            }
                        }),
                        disabled: !_,
                        tabIndex: _ ? 0 : -1
                    })), l.createElement("div", {
                        className: "ow-tasks-TasksToDoEditForm-body-lower"
                    }, l.createElement(m.UP, {
                        type: "text",
                        label: (0,
                        d.t)("tasks.editView.LABEL_URL"),
                        "aria-label": (0,
                        d.t)("tasks.editView.LABEL_URL"),
                        name: w.url,
                        value: C || "",
                        validations: "isUrl",
                        validationError: (0,
                        d.t)("tasks.editView.message.INVALID_URL")
                    }), l.createElement(m.UP, {
                        type: "textarea",
                        label: (0,
                        d.t)("tasks.editView.LABEL_DESCRIPTION"),
                        "aria-label": (0,
                        d.t)("tasks.editView.LABEL_DESCRIPTION"),
                        name: w.description,
                        value: P || "",
                        validations: {
                            maxLength: D
                        },
                        validationErrors: {
                            maxLength: (0,
                            k.WU)((0,
                            d.t)("calendar.warningMessage.WARNING_NOTES_TOO_LONG"), D)
                        },
                        onKeyDown: function(e) {
                            e.key === E.BY.TABKEY && (e.shiftKey || (0,
                            f.kW)(".ow-tasks-TasksToDoCancelBtn"))
                        }
                    })))
                }
            }]),
            a
        }(v.Z)
    },
    64134: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return w
            }
        });
        var n = a(15671)
          , s = a(43144)
          , i = a(60136)
          , r = a(82963)
          , o = a(61120)
          , l = a(87401)
          , c = a(67064)
          , u = a.n(c)
          , m = a(32022)
          , T = a.n(m)
          , d = a(32081)
          , E = a(10091)
          , k = a(94165)
          , I = a(84987)
          , f = a(4446)
          , v = a(20220);
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
                var a, n = (0,
                o.Z)(e);
                if (t) {
                    var s = (0,
                    o.Z)(this).constructor;
                    a = Reflect.construct(n, arguments, s)
                } else
                    a = n.apply(this, arguments);
                return (0,
                r.Z)(this, a)
            }
        }
        k.hw.PRIORITY_NONE;
        var p = k.hw.PRIORITY_LOW
          , h = k.hw.PRIORITY_MEDIUM
          , R = k.hw.PRIORITY_HIGH
          , D = k.HH.STATUS_DONE
          , w = function(e) {
            (0,
            i.Z)(a, e);
            var t = _(a);
            function a() {
                return (0,
                n.Z)(this, a),
                t.apply(this, arguments)
            }
            return (0,
            s.Z)(a, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , a = t.rowData
                      , n = t.statusItems
                      , s = a.data;
                    if (s) {
                        var i = s.summary
                          , r = s.priority
                          , o = s.status
                          , c = s.dueMillis
                          , m = s.alarm
                          , v = s.description
                          , _ = o === D && "done"
                          , w = (void 0 === v || "" === v) && "summaryOnly"
                          , L = c < T()().valueOf() && "overdue";
                        return l.createElement("div", {
                            role: k.HB.LIST,
                            className: "ow-tasks-TasksToDoListItem",
                            ref: function(t) {
                                e.innerDom = t
                            },
                            onClick: this.handleListItemClick,
                            tabIndex: f.UhU.isDesktop ? 0 : -1,
                            onFocus: function(e) {
                                return handleFocusInOut(e)
                            },
                            onBlur: function(t) {
                                handleFocusInOut(t),
                                scrollFocusRemoval(t, e.props.list)
                            },
                            "aria-label": i,
                            onKeyDown: function(t) {
                                f.UhU.isDesktop && (t.key === Key_Event.ENTERKEY ? e.handleListItemClick(t) : e.props.isItemSelected(a) && t.key === Key_Event.Right_Arrow && setFocus(".ow-tasks-TasksToDoPreviewToolbar .ow-BasicToolbar"))
                            }
                        }, l.createElement("div", {
                            className: "ow-tasks-TasksToDoListItem-layout-left"
                        }, l.createElement("div", {
                            className: "ow-tasks-TasksToDoListItem-status"
                        }, l.createElement(E.Z.Dropdown, {
                            "data-id": "tasksToDoListItemStatus",
                            onToggle: this.handleDropdownToggle,
                            onSelect: this.handleMenuitemClick,
                            title: l.createElement(d.Z, {
                                name: this.genIconName()
                            }),
                            "aria-label": "".concat(i, " ").concat((0,
                            I.t)("aria.label.STATUS")),
                            noCaret: !0,
                            tabIndex: -1
                        }, n.map(function(e) {
                            var t = e.value
                              , a = e.label;
                            return l.createElement(E.Z.Button, {
                                key: t,
                                eventKey: t,
                                active: t === o,
                                isImplicit: !0,
                                "aria-label": a
                            }, l.createElement("span", null, a))
                        })))), l.createElement("div", {
                            className: "ow-tasks-TasksToDoListItem-layout-middle"
                        }, l.createElement("div", {
                            className: u()("ow-tasks-TasksToDoListItem-summary", _, w),
                            "aria-label": i
                        }, l.createElement("span", null, i)), l.createElement("div", {
                            className: "ow-tasks-TasksToDoListItem-description",
                            role: k.HB.CONTENTINFO,
                            "aria-label": v
                        }, l.createElement("span", null, v))), l.createElement("div", {
                            className: "ow-tasks-TasksToDoListItem-layout-right"
                        }, l.createElement("div", {
                            className: "ow-tasks-TasksToDoListItem-layout-right-upper"
                        }, l.createElement("div", {
                            className: u()("ow-tasks-TasksToDoListItem-due", L)
                        }, c ? l.createElement(l.Fragment, null, l.createElement("span", null, TimeUtil.getTimeParseInt24to12(window.TimeUtil.getShortDate(c))), "  ", l.createElement("span", null, TimeUtil.getTimeParseInt24to12(window.TimeUtil.getShortTime(c)))) : void 0)), l.createElement("div", {
                            className: "ow-tasks-TasksToDoListItem-layout-right-lower"
                        }, l.createElement("div", {
                            className: "ow-tasks-TasksToDoListItem-alarm"
                        }, m && l.createElement(d.Z, {
                            name: "reminder-tasks-TasksToDoListItem"
                        })), r === R && l.createElement("div", {
                            className: "ow-tasks-TasksToDoListItem-priority"
                        }, l.createElement(d.Z, {
                            name: "priority-high"
                        })), r === h && l.createElement("div", {
                            className: "ow-tasks-TasksToDoListItem-priority"
                        }, l.createElement(d.Z, {
                            name: "priority-medium"
                        })), r === p && l.createElement("div", {
                            className: "ow-tasks-TasksToDoListItem-priority"
                        }, l.createElement(d.Z, {
                            name: "priority-low"
                        })))))
                    }
                    return l.createElement("div", {
                        className: "ow-tasks-TasksToDoListItem-blank"
                    }, l.createElement("div", {
                        className: "ow-tasks-TasksToDoListItem-blank-row"
                    }), l.createElement("div", {
                        className: "ow-tasks-TasksToDoListItem-blank-row"
                    }))
                }
            }]),
            a
        }(v.Z)
    },
    9961: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return v
            }
        });
        var n = a(15671)
          , s = a(43144)
          , i = a(60136)
          , r = a(82963)
          , o = a(61120)
          , l = a(87401)
          , c = (a(23398),
        a(10091))
          , u = a(80419)
          , m = a(84987)
          , T = a(4446)
          , d = a(44910)
          , E = a(94165);
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
                o.Z)(e);
                if (t) {
                    var s = (0,
                    o.Z)(this).constructor;
                    a = Reflect.construct(n, arguments, s)
                } else
                    a = n.apply(this, arguments);
                return (0,
                r.Z)(this, a)
            }
        }
        var I = T.UhU.isMobile
          , f = T.UhU.isTablet
          , v = function(e) {
            (0,
            i.Z)(a, e);
            var t = k(a);
            function a() {
                return (0,
                n.Z)(this, a),
                t.apply(this, arguments)
            }
            return (0,
            s.Z)(a, [{
                key: "render",
                value: function() {
                    return l.createElement(c.Z.Button, {
                        className: "ow-tasks-TasksToDoAddBtn",
                        iconName: "add-tasks-TasksToDoAddBtn",
                        onClick: this.handleClick,
                        role: E.HB.BUTTON,
                        "aria-label": (0,
                        m.t)("tasks.editView.NEW_TASK_LABEL"),
                        onKeyDown: function(e) {
                            return e.key === E.BY.ENTERKEY && setTimeout(function() {
                                (0,
                                d.kW)(".ow-tasks-TasksToDoEdit-panel-upper")
                            }, 50)
                        }
                    }, I || f ? "" : (0,
                    m.t)("common.NEW_LABEL"))
                }
            }]),
            a
        }(u.Z)
    },
    31206: function(e, t, a) {
        var n = a(71002)
          , s = a(87401)
          , i = a(23398)
          , r = a(10091)
          , o = a(84987)
          , l = a(94165)
          , c = a(83416)
          , u = l.HH.ORDER_ASC
          , m = l.HH.ORDER_DESC
          , T = l.HH.SORT_DUE
          , d = l.HH.SORT_START
          , E = l.HH.SORT_STATUS
          , k = l.HH.SORT_PRIORITY
          , I = l.HH.SORT_TITLE
          , f = function(e, t) {
            var a = {
                sortTitle: s.createElement(r.Z.Button, {
                    header: !0,
                    isImplicit: !0,
                    "aria-label": (0,
                    o.t)("tasks.tasklist.menu.SORT_TITLE"),
                    "aria-level": l.DU.H6
                }, (0,
                o.t)("tasks.tasklist.menu.SORT_TITLE")),
                sortFields: function(e, t) {
                    return e.map(function(e) {
                        var a = e.id
                          , n = e.text;
                        return s.createElement(r.Z.Button, {
                            key: a,
                            eventKey: a,
                            active: a === t,
                            isImplicit: !0,
                            role: l.HB.BUTTON,
                            "aria-label": "".concat((0,
                            o.t)("tasks.tasklist.menu.SORT_TITLE"), "  ").concat(n),
                            "aria-current": a === t ? "true" : void 0
                        }, n)
                    })
                }(e, t)
            };
            return ["sortTitle", "sortFields"].map(function(e) {
                return a[e]
            })
        }
          , v = function(e, t) {
            var a = {
                orderTitle: s.createElement(r.Z.Button, {
                    header: !0,
                    isImplicit: !0,
                    "aria-level": l.DU.H6,
                    "aria-label": (0,
                    o.t)("tasks.tasklist.menu.SORT_ORDER")
                }, (0,
                o.t)("tasks.tasklist.menu.SORT_ORDER")),
                orderFields: function(e, t) {
                    return e.map(function(e) {
                        var a = e.id
                          , n = e.text;
                        return s.createElement(r.Z.Button, {
                            key: a,
                            eventKey: a,
                            active: a === t,
                            isImplicit: !0,
                            role: l.HB.BUTTON,
                            "aria-label": "".concat((0,
                            o.t)("tasks.tasklist.menu.SORT_ORDER"), "  ").concat(n),
                            "aria-current": a === t ? "true" : void 0
                        }, n)
                    })
                }(e, t)
            };
            return ["orderTitle", "orderFields"].map(function(e) {
                return a[e]
            })
        }
          , _ = function(e) {
            var t = e.orderItems
              , a = e.sortItems
              , i = e.order
              , l = e.sort
              , u = e.onChange
              , m = [];
            (0,
            c.Z)("tasks.sortFields").map(function(e) {
                if ("object" === (0,
                n.Z)(e)) {
                    var t = Object.keys(e);
                    m.push(t[0])
                } else
                    m.push(e)
            });
            var T = {
                sort: f(a, l),
                divider: s.createElement(r.Z.Button, {
                    divider: !0,
                    isImplicit: !0
                }),
                order: v(t, i)
            };
            return s.createElement(r.Z.Dropdown, {
                pullRight: !0,
                id: "tasksToDoListSort",
                title: (0,
                o.t)("tasks.tasklist.SORT_BY_TITLE"),
                "aria-label": (0,
                o.t)("tasks.tasklist.SORT_BY_TITLE"),
                onSelect: function(e) {
                    a.map(function(e) {
                        return e.id
                    }).includes(e) && e !== l ? u(e, i) : t.map(function(e) {
                        return e.id
                    }).includes(e) && e !== i && u(l, e)
                }
            }, m.map(function(e) {
                return T[e]
            }))
        };
        _.defaultProps = {
            orderItems: [],
            sortItems: [],
            order: m,
            sort: T,
            onChange: function() {}
        },
        _.propTypes = {
            orderItems: (0,
            i.arrayOf)((0,
            i.shape)({
                id: i.string,
                text: i.string
            })),
            sortItems: (0,
            i.arrayOf)((0,
            i.shape)({
                id: i.string,
                text: i.string
            })),
            order: (0,
            i.oneOf)([u, m]),
            sort: (0,
            i.oneOf)([T, d, k, E, I]),
            onChange: i.func
        },
        t.Z = _
    }
}]);
