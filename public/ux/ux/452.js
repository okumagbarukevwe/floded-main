/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[452], {
    14452: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return R
            }
        });
        var n = a(15671)
          , r = a(43144)
          , l = a(60136)
          , o = a(82963)
          , i = a(61120)
          , d = a(87401)
          , c = (a(12674),
        a(32022),
        a(76707))
          , s = a.n(c)
          , E = (a(23398),
        a(32081))
          , m = a(10091)
          , u = a(49771)
          , v = a(54686)
          , w = a(71850)
          , h = a(88307)
          , f = a(13536)
          , N = a(35369)
          , L = a(64364)
          , A = a(90656)
          , p = a(84987)
          , T = a(44910)
          , b = a(76634)
          , g = a(94165)
          , D = a(19125)
          , C = a(80110);
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
                i.Z)(e);
                if (t) {
                    var r = (0,
                    i.Z)(this).constructor;
                    a = Reflect.construct(n, arguments, r)
                } else
                    a = n.apply(this, arguments);
                return (0,
                o.Z)(this, a)
            }
        }
        var R = function(e) {
            (0,
            l.Z)(a, e);
            var t = _(a);
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
                      , t = window.TimeUtil;
                    if (!t)
                        return null;
                    var a = this.props
                      , n = a.show
                      , r = a.event
                      , l = a.reminderOptions
                      , o = a.calendars
                      , i = a.colors
                      , c = a.categories
                      , _ = a.user
                      , R = a.invited
                      , B = a.readOnly
                      , V = a.attendeeStatus;
                    n || (this.initByProps = !0);
                    var I = "";
                    if (r && r.categories && c) {
                        var y = Object.keys(c).find(function(e) {
                            var t = c[e].label;
                            if ("".concat(t.toLowerCase()) === "".concat(r.categories.toLowerCase()))
                                return c[e].value
                        });
                        I = c[y] ? c[y].value : r.categories
                    }
                    if (!r)
                        return null;
                    var S = (r.organizer || {}).address
                      , O = (0,
                    b.hh)(this.state.recurrence, this.state.startTimeM)
                      , k = this.state.attendees;
                    null === k && (k = []);
                    var M = r.uid ? (0,
                    p.t)("calendar.editorView.EDIT_EVENT") : (0,
                    p.t)("calendar.editorView.NEW_EVENT");
                    return d.createElement("div", {
                        className: "ow-calendar-EventEditor-container",
                        role: g.HB.DIALOG,
                        "aria-label": M
                    }, d.createElement("div", {
                        className: "ow-calendar-EventEditor-target",
                        ref: function(t) {
                            e.target = t
                        }
                    }), d.createElement(s(), {
                        className: "ow-calendar-EventEditor-overlay",
                        show: n,
                        shouldUpdatePosition: !0,
                        target: this.target,
                        container: this,
                        placement: "right",
                        rootClose: !0,
                        onHide: function(t) {
                            e.handleHide(t)
                        },
                        onEntering: function() {
                            e.handleEntering()
                        },
                        onEntered: function() {
                            e.handleEntered()
                        }
                    }, d.createElement("div", {
                        className: "ow-calendar-EventEditor-formContainer"
                    }, d.createElement("div", {
                        className: "ow-calendar-EventEditorFormToolbar-container"
                    }, d.createElement("div", {
                        className: "ow-calendar-EventEditorFormToolbar-title",
                        role: "heading",
                        "aria-level": "2",
                        "aria-label": M
                    }, M), d.createElement(m.Z, {
                        className: "ow-calendar-EventEditor-toolbar",
                        ref: function(t) {
                            e.toolbar = t
                        }
                    }, R && d.createElement(m.Z.Button, {
                        className: "ow-calendar-attendStatus ow-calendar-attendStatus-accept".concat("accepted" === V ? " ow-calendar-attendStatus-selected" : ""),
                        iconName: "accepted",
                        onClick: function() {
                            return e.handleRSVP("accepted")
                        }
                    }, "accepted" === V ? (0,
                    p.t)("calendar.editorView.attendee.status.accepted") : (0,
                    p.t)("calendar.editorView.attendee.status.accept")), R && d.createElement(m.Z.Button, {
                        className: "ow-calendar-attendStatus ow-calendar-attendStatus-tentative".concat("tentative" === V ? " ow-calendar-attendStatus-selected" : ""),
                        iconName: "tentative",
                        onClick: function() {
                            return e.handleRSVP("tentative")
                        }
                    }, (0,
                    p.t)("calendar.editorView.attendee.status.tentative")), R && d.createElement(m.Z.Button, {
                        className: "ow-calendar-attendStatus ow-calendar-attendStatus-decline".concat("declined" === V ? " ow-calendar-attendStatus-selected" : ""),
                        iconName: "declined",
                        onClick: function() {
                            return e.handleRSVP("declined")
                        }
                    }, "declined" === V ? (0,
                    p.t)("calendar.editorView.attendee.status.declined") : (0,
                    p.t)("calendar.editorView.attendee.status.decline")), R && d.createElement("span", {
                        className: "ow-separator"
                    }), !B && d.createElement(m.Z.Button, {
                        className: "ow-calendar-EventEditor-save",
                        iconName: "ow-new-event-form-save",
                        onClick: function() {
                            e.handleSave()
                        },
                        disabled: !this.state.formChanged,
                        role: g.HB.BUTTON,
                        "aria-label": !R && this.state.attendees && this.state.attendees.length > 0 ? (0,
                        p.t)("calendar.editorView.SAVE_SEND_EMAIL") : (0,
                        p.t)("common.SAVE"),
                        "aria-disabled": !this.state.formChanged,
                        onKeyDown: function(e) {
                            e.key === g.BY.TABKEY && e.shiftKey && (0,
                            T.kW)(".ow-calendar-EventEditor-panel-upper")
                        }
                    }, !R && this.state.attendees && this.state.attendees.length > 0 ? (0,
                    p.t)("calendar.editorView.SAVE_SEND_EMAIL") : (0,
                    p.t)("common.SAVE")), !B && r.uid && d.createElement(m.Z.Button, {
                        className: "ow-calendar-EventEditor-delete",
                        iconName: "ow-new-event-form-trash",
                        role: g.HB.BUTTON,
                        "aria-label": (0,
                        p.t)("common.DELETE"),
                        onClick: function() {
                            return e.handleDelete()
                        }
                    }, (0,
                    p.t)("common.DELETE")), d.createElement(m.Z.Button, {
                        className: "ow-calendar-EventEditor-close",
                        onClick: function(t) {
                            return e.handleHide(t)
                        },
                        role: g.HB.BUTTON,
                        "aria-label": (0,
                        p.t)("common.CANCEL"),
                        iconName: "ow-new-event-form-close",
                        onKeyDown: function(t) {
                            if (t.key !== g.BY.TABKEY) {
                                if (t.key !== g.BY.ENTERKEY)
                                    return;
                                e.handleHide(t),
                                setTimeout(function() {
                                    (0,
                                    T.kW)("#calendarToolbarNewEventBtn")
                                }, 0)
                            }
                            t.shiftKey && e.state.formChanged && (0,
                            T.kW)(".ow-calendar-EventEditor-save")
                        }
                    }, (0,
                    p.t)("common.CANCEL")))), d.createElement("div", {
                        className: "ow-calendar-EventEditor-content",
                        ref: function(t) {
                            e.formView = t
                        }
                    }, d.createElement(N.l0, {
                        className: "ow-calendar-EventEditor-form",
                        onChange: this.handleFormChanged,
                        onValidSubmit: this.handleEventSubmit,
                        ref: function(t) {
                            e.eventForm = t
                        }
                    }, d.createElement(N.UP, {
                        ref: function(t) {
                            e.summaryField = t
                        },
                        label: (0,
                        p.t)("calendar.editorView.LABEL_SUMMARY"),
                        "aria-required": "true",
                        name: "summary",
                        "aria-label": (0,
                        p.t)("calendar.editorView.LABEL_SUMMARY"),
                        value: r.summary,
                        required: !0,
                        disabled: R || B,
                        validations: {
                            customRegexp: function(e, t) {
                                return !(!t || "" === t.trim()) || (0,
                                p.t)("common.errorMessage.REQUIRED")
                            },
                            maxLength: g.mx
                        },
                        validationErrors: {
                            maxLength: (0,
                            A.WU)((0,
                            p.t)("calendar.warningMessage.WARNING_TITLE_TOO_LONG"), g.mx),
                            isDefaultRequiredValue: (0,
                            p.t)("common.errorMessage.REQUIRED")
                        }
                    }), d.createElement("div", {
                        className: "ow-calendar-EventEditor-times ow-calendar-EventEditor-times-start"
                    }, d.createElement(N.bJ, {
                        ref: function(t) {
                            e.startDateInput = t
                        },
                        name: "startTimeM",
                        label: (0,
                        p.t)("calendar.editorView.LABEL_WHEN"),
                        "aria-label": (0,
                        p.t)("calendar.editorView.LABEL_WHEN"),
                        className: "ow-calendar-EventEditor-start".concat(R ? " disabled" : ""),
                        value: this.state.startTimeM.valueOf(),
                        dateFormat: t.getDateTimePatterns().ShortDate,
                        onChange: function(a) {
                            return e.handleChangeStart(t.getTimeZoneMomentForRui(a))
                        },
                        disabled: R || B
                    }), !this.state.allDay && d.createElement(N.k3, {
                        ref: function(t) {
                            e.startTimeInput = t
                        },
                        name: "startTime",
                        "aria-label": (0,
                        p.t)("calendar.editorView.LABEL_START_TIME"),
                        className: "ow-calendar-EventEditor-startTime ".concat(this.props.is24Hours ? "ow-calendar-EventEditor-24times" : ""),
                        value: this.state.startTimeM.valueOf(),
                        onChange: function(a) {
                            return e.handleChangeStart(t.getTimeZoneMomentForRui(a))
                        },
                        disabled: R || B
                    }), d.createElement("div", {
                        className: "ow-spacing"
                    }), !R && !B && d.createElement(N.bM, {
                        name: "allDay",
                        className: "ow-calendar-EventEditor-allDay",
                        "aria-label": (0,
                        p.t)("calendar.editorView.LABEL_ALLDAY"),
                        value: r.allDay,
                        onChange: function(t) {
                            return e.handleChangeAllDay(t)
                        },
                        label: (0,
                        p.t)("calendar.editorView.LABEL_ALLDAY"),
                        disabled: R
                    })), this.state.spinner ? d.createElement(C.Z, {
                        className: "ow-adv-spinner"
                    }) : "", d.createElement("div", {
                        className: "ow-calendar-EventEditor-times"
                    }, d.createElement(N.bJ, {
                        ref: function(t) {
                            e.endDateInput = t
                        },
                        name: "endTimeM",
                        label: (0,
                        p.t)("calendar.editorView.LABEL_TO"),
                        className: "ow-calendar-EventEditor-end".concat(R ? " disabled" : ""),
                        value: this.state.endTimeM.valueOf(),
                        dateFormat: t.getDateTimePatterns().ShortDate,
                        onChange: function(a) {
                            return e.handleChangeEnd(t.getTimeZoneMomentForRui(a))
                        },
                        disabled: R || B
                    }), !this.state.allDay && d.createElement(N.k3, {
                        ref: function(t) {
                            e.endTimeInput = t
                        },
                        name: "endTime",
                        "aria-label": (0,
                        p.t)("calendar.editorView.LABEL_END_TIME"),
                        className: "ow-calendar-EventEditor-endTime ".concat(this.props.is24Hours ? "ow-calendar-EventEditor-24times" : ""),
                        value: this.state.endTimeM.valueOf(),
                        onChange: function(a) {
                            return e.handleChangeEnd(t.getTimeZoneMomentForRui(a))
                        },
                        disabled: R || B
                    })), (!R && !B || "none" !== this.state.eventRecurenceValue) && d.createElement(N.Hi, {
                        ref: function(t) {
                            e.recurrenceField = t
                        },
                        name: "recurrenceFrequency",
                        className: "ow-calendar-EventEditor-repeat",
                        options: O,
                        value: this.state.eventRecurenceValue,
                        label: (0,
                        p.t)("calendar.editorView.LABEL_REPEAT"),
                        "aria-label": (0,
                        p.t)("calendar.editorView.LABEL_REPEAT"),
                        onChange: function(t) {
                            return e.handleRecurrenceChange(t)
                        },
                        disabled: R || B
                    }), this.renderRecurrenceDetail(), r.alarm && d.createElement(N.Hi, {
                        name: "alarm",
                        className: "ow-calendar-EventEditor-reminder",
                        options: l,
                        onChange: function(e) {
                            return (0,
                            D.p)(g.$Z, e)
                        },
                        label: (0,
                        p.t)("calendar.editorView.LABEL_REMINDER"),
                        "aria-label": (0,
                        p.t)("calendar.editorView.LABEL_REMINDER"),
                        value: r.summary || !(0,
                        D.c)(g.$Z) ? r.alarm && r.alarm.offsetMinutes : (0,
                        D.c)(g.$Z),
                        disabled: B,
                        validations: {
                            customValidation: function(e) {
                                return !(e.startTimeM < Date.now() + 6e4 * Math.abs(e.alarm) && 1e3 !== e.alarm) || (0,
                                p.t)("calendar.warningMessage.WARNING_FOR_INVALID_REMINDER_MODEL")
                            }
                        }
                    }), d.createElement(N.Hi, {
                        name: "categories",
                        className: "ow-calendar-EventEditor-category",
                        options: c,
                        label: (0,
                        p.t)("calendar.editorView.LABEL_TYPE"),
                        "aria-label": (0,
                        p.t)("calendar.editorView.LABEL_TYPE"),
                        value: I,
                        optionComponent: v.Z,
                        valueComponent: u.Z,
                        disabled: B
                    }), d.createElement(L.Z, {
                        calendars: o,
                        colors: i,
                        name: "calendarId",
                        label: (0,
                        p.t)("calendar.editorView.LABEL_CALENDAR"),
                        "aria-label": (0,
                        p.t)("calendar.editorView.LABEL_CALENDAR"),
                        value: r.calendarId,
                        disabled: R || B
                    }), (!R && !B || r.location) && d.createElement(N.UP, {
                        label: (0,
                        p.t)("calendar.editorView.LABEL_LOCATION"),
                        "aria-label": (0,
                        p.t)("calendar.editorView.LABEL_LOCATION"),
                        name: "location",
                        value: r.location,
                        validations: {
                            maxLength: g.R
                        },
                        validationErrors: {
                            maxLength: (0,
                            A.WU)((0,
                            p.t)("calendar.warningMessage.WARNING_TOO_LONG"), (0,
                            p.t)("calendar.editorView.LABEL_LOCATION"), g.R)
                        },
                        disabled: R || B
                    }), (!R && !B || r.description) && d.createElement(N.UP, {
                        className: "ow-calendar-EventEditor-note",
                        type: "textarea",
                        label: (0,
                        p.t)("calendar.editorView.LABEL_NOTE"),
                        "aria-label": (0,
                        p.t)("calendar.editorView.LABEL_NOTE"),
                        name: "description",
                        value: r.description || "",
                        validations: {
                            maxLength: g._l
                        },
                        validationErrors: {
                            maxLength: (0,
                            A.WU)((0,
                            p.t)("calendar.warningMessage.WARNING_TOO_LONG"), (0,
                            p.t)("calendar.editorView.LABEL_NOTE"), g._l)
                        },
                        disabled: R
                    })), d.createElement("div", {
                        className: "ow-calendar-EventEditor-header"
                    }, d.createElement("div", {
                        className: "ow-calendar-EventEditor-headerAttendees",
                        role: g.HB.HEADING,
                        "aria-level": g.DU.H3,
                        "aria-label": (0,
                        p.t)("calendar.editorView.LABEL_ATTENDEES")
                    }, (0,
                    p.t)("calendar.editorView.LABEL_ATTENDEES"))), d.createElement("div", {
                        className: "ow-calendaar-EventEditor-attendeesWrapper"
                    }, !R && !B && d.createElement("div", {
                        className: "ow-calendaar-EventEditor-attendees-add"
                    }, d.createElement("div", {
                        className: "ow-calendar-EventEditor-attendees-inputTitle"
                    }, d.createElement("div", {
                        className: "ow-calendar-EventEditor-attendees-inputTitle-label"
                    }, (0,
                    p.t)("calendar.editorView.attendee.LABEL_SEARCH_CONTACTS")), d.createElement("span", null, (0,
                    p.t)("contacts.editPanel.message.GROUP_ADD_MEMBER_TIP"))), d.createElement("div", {
                        className: "ow-calendaar-EventEditor-addAttendee",
                        role: g.HB.CONTENTINFO,
                        "aria-label": (0,
                        p.t)("calendar.editorView.attendee.PLACE_HOLDER_ADD_INVITEE")
                    }, d.createElement(w.Z, {
                        autoInputRef: function(t) {
                            e.autoSuggestInput = t
                        },
                        onAdd: function(t) {
                            return e.handleAddAttendee(t)
                        },
                        onUpdate: function(t) {
                            return e.handleAddAttendee(t)
                        },
                        onSelect: this.handlePickerSelect,
                        placeholder: (0,
                        p.t)("calendar.editorView.attendee.PLACE_HOLDER_ADD_INVITEE")
                    }), d.createElement(E.Z, {
                        name: "plus",
                        onClick: this.handlePickerOpen,
                        tabIndex: 0,
                        role: "button",
                        "aria-label": (0,
                        p.t)("common.ADD"),
                        onKeyDown: function(t) {
                            t.key === g.BY.ENTERKEY && (e.handlePickerOpen(),
                            setTimeout(function() {
                                var e, t;
                                null === (e = document.querySelector(".ow-contacts-picker .ow-icon-close")) || void 0 === e || null === (t = e.closest("button")) || void 0 === t || t.focus()
                            }, 50))
                        }
                    }))), d.createElement("div", {
                        className: "ow-calendar-EventEditor-attendeeListWrapper"
                    }, d.createElement("div", {
                        className: "ow-calendar-EventEditor-attendeeItem organizer",
                        tabIndex: 0
                    }, d.createElement("div", {
                        className: "ow-calendar-EventEditor-attendeeItemLeft",
                        tabIndex: 0
                    }, d.createElement("span", {
                        className: "ow-calendar-EventEditor-attendeeName",
                        "aria-label": S || (null === _ || void 0 === _ ? void 0 : _.displayName)
                    }, S || _.displayName)), d.createElement("span", {
                        className: "ow-calendar-EventEditor-attendeeStatus-sr-only"
                    }), d.createElement("span", {
                        className: "ow-calendar-EventEditor-attendeeStatus",
                        "aria-label": (0,
                        b.hT)("organizer"),
                        tabIndex: 0,
                        onKeyDown: function(t) {
                            if (t.key === g.BY.TABKEY)
                                if (t.shiftKey)
                                    t.preventDefault(),
                                    (0,
                                    T.kW)(".ow-calendar-EventEditor-attendeeItemLeft");
                                else {
                                    var a, n;
                                    if ((null === (a = e.state) || void 0 === a ? void 0 : null === (n = a.attendees) || void 0 === n ? void 0 : n.length) > 0)
                                        return;
                                    t.preventDefault(),
                                    (0,
                                    T.R8)(".ow-icon-ow-new-event-form-close", "button")
                                }
                        }
                    }, (0,
                    b.hT)("organizer"))), k.map(function(t, a) {
                        var n = t.commonName
                          , r = t.address
                          , l = t.status
                          , o = t.isNew;
                        return d.createElement("div", {
                            className: "ow-calendar-EventEditor-attendeeItem",
                            tabIndex: 0
                        }, d.createElement("div", {
                            className: "ow-calendar-EventEditor-attendeeItemLeft",
                            tabIndex: 0
                        }, d.createElement("span", {
                            className: "ow-calendar-EventEditor-attendeeName",
                            title: n,
                            "aria-label": n
                        }, n), d.createElement("span", {
                            className: "ow-calendar-EventEditor-attendeeAddress",
                            title: r,
                            "aria-label": r
                        }, r)), d.createElement("span", {
                            className: "ow-calendar-EventEditor-attendeeStatus"
                        }, o ? "" : e.getAttendeeStatus(l)), d.createElement("div", {
                            className: "sr-only",
                            "aria-live": g.HO.POLITE,
                            ref: e.liveRegionRef,
                            "aria-label": (0,
                            p.t)("aria.label.ATTENDEE_ADD")
                        }), !R && d.createElement(E.Z, {
                            className: e.state.showAnnouncement ? "sr-only" : "sr-only-annonce",
                            role: g.HB.BUTTON,
                            name: "close",
                            "aria-live": g.HO.OFF,
                            "aria-label": (0,
                            p.t)("calendar.editorView.REMOVE_ATTENDEE"),
                            onClick: function(t) {
                                t.preventDefault(),
                                e.handleRemoveAttendee(a)
                            },
                            tabIndex: 0,
                            onKeyDown: function(t) {
                                var n, r;
                                t.key === g.BY.TABKEY ? t.shiftKey ? (0,
                                T.kW)("ow-calendar-EventEditor-attendeeItem .ow-calendar-EventEditor-attendeeItemLeft") : (null === (n = e.state) || void 0 === n ? void 0 : null === (r = n.attendees) || void 0 === r ? void 0 : r.length) > 1 ? ((0,
                                T.kW)("ow-calendar-EventEditor-attendeeItem .ow-calendar-EventEditor-attendeeItemLeft"),
                                setTimeout(function() {
                                    var e;
                                    document.activeElement.children[3] === document.querySelectorAll(".ow-icon-close")[null === (e = document.querySelectorAll(".ow-icon-close")) || void 0 === e ? void 0 : e.length] && (t.preventDefault(),
                                    (0,
                                    T.R8)(".ow-icon-ow-new-event-form-close", "button"))
                                }, 100)) : (t.preventDefault(),
                                (0,
                                T.R8)(".ow-icon-ow-new-event-form-close", "button")) : t.key === g.BY.ENTERKEY && (e.handleRemoveAttendee(a),
                                (0,
                                T.kW)(".ow-calendaar-EventEditor-addAttendee .ow-combox-input"))
                            }
                        }))
                    })))))), this.state.displayConfirm && d.createElement(f.Z, {
                        show: !0,
                        buttonConfig: ["yes", "no", "cancel"],
                        title: (0,
                        p.t)("common.MESSAGE"),
                        message: (0,
                        p.t)("app.message.CONFIRM_CANCEL_EDIT"),
                        onYes: this.handleSave,
                        onNo: this.handleCancel,
                        onCancel: this.hideConfirm,
                        onDismiss: this.hideConfirm
                    }), this.state.openContactPicker && d.createElement(h.Z, {
                        className: "ow-calendar-EventEditor-picker",
                        onSelect: this.handlePickerSelect,
                        onCancel: this.handlePickerCancel,
                        enableMultiSelect: !0
                    }))
                }
            }]),
            a
        }(a(642).Z)
    }
}]);
