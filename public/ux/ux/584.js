/*! Synchronoss Messaging 2018 */
"use strict";
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[584], {
    64364: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return v
            }
        });
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(67064)
          , c = n.n(i)
          , l = n(32081)
          , s = n(35369);
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
        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, f(r.key), r)
            }
        }
        function f(e) {
            var t = function(e, t) {
                if ("object" !== u(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== u(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === u(t) ? t : String(t)
        }
        function m(e, t) {
            return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
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
                var n, r = p(e);
                if (t) {
                    var a = p(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === u(t) || "function" == typeof t))
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
        function p(e) {
            return (p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                t && m(e, t)
            }(n, r.Component);
            var t = h(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && d(e.prototype, t),
                n && d(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "getOptions",
                value: function(e) {
                    var t = []
                      , n = this.props.colors;
                    return e.forEach(function(e) {
                        var r = e.color
                          , a = e.name
                          , o = e.id
                          , i = e.visible
                          , c = {
                            color: "".concat(n[r || 0])
                        };
                        t.push({
                            value: o,
                            label: a,
                            iconName: i ? "checkbox-selected" : "checkbox-unselected",
                            iconStyle: c
                        })
                    }),
                    t
                }
            }, {
                key: "valueRender",
                value: function(e) {
                    var t = e.iconName
                      , n = e.iconStyle
                      , a = e.label;
                    return r.createElement("div", {
                        className: "ow-calendar-select-value"
                    }, t && r.createElement(l.Z, {
                        name: t,
                        style: n
                    }), r.createElement("span", {
                        className: "ow-select-text",
                        "aria-label": a
                    }, a))
                }
            }, {
                key: "optionRender",
                value: function(e) {
                    var t = e.iconName
                      , n = e.iconStyle
                      , a = e.label;
                    return r.createElement("div", {
                        className: "ow-calendar-select-value"
                    }, t && r.createElement(l.Z, {
                        name: t,
                        style: n
                    }), r.createElement("span", {
                        className: "ow-select-text",
                        "aria-label": a
                    }, a))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.label
                      , n = e.value
                      , a = e.className
                      , o = e.calendars
                      , i = e.onSelectChange
                      , l = e.name
                      , u = this.getOptions(o);
                    return r.createElement(s.Hi, {
                        name: l,
                        label: t,
                        className: c()("ow-calendar-select", a),
                        options: u,
                        valueRenderer: this.valueRender,
                        optionRenderer: this.optionRender,
                        value: n,
                        onChange: function(e) {
                            i(e)
                        }
                    })
                }
            }]),
            n
        }();
        v.contextTypes = {
            isRtl: o().bool
        },
        v.defaultProps = {
            className: "",
            label: "",
            name: "calendar",
            value: {},
            calendars: [],
            colors: [],
            onSelectChange: function() {}
        },
        v.propTypes = {
            className: o().string,
            name: o().string,
            onSelectChange: o().func,
            label: o().string,
            colors: o().arrayOf(o().string),
            value: {
                id: o().string,
                name: o().string,
                color: o().string,
                visible: o().bool
            },
            calendars: o().arrayOf(o().shape({
                id: o().string,
                name: o().string,
                color: o().string
            }))
        }
    },
    642: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return x
            }
        });
        var r = n(87401)
          , a = n(12674)
          , o = n(32022)
          , i = n.n(o)
          , c = n(76707)
          , l = n.n(c)
          , s = n(23398)
          , u = n.n(s)
          , d = n(32081)
          , f = n(10091)
          , m = n(49771)
          , h = n(54686)
          , p = n(71850)
          , v = n(88307)
          , E = n(13536)
          , y = n(80110)
          , b = n(35369)
          , w = n(64364)
          , g = n(90656)
          , O = n(84987)
          , S = n(44910)
          , N = n(76634)
          , T = n(94165)
          , C = n(19125)
          , D = ["isNew"];
        function R(e) {
            "@babel/helpers - typeof";
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function P(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function A(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? P(Object(n), !0).forEach(function(t) {
                    k(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function k(e, t, n) {
            return (t = I(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function L(e, t) {
            if (null == e)
                return {};
            var n, r, a = function(e, t) {
                if (null == e)
                    return {};
                var n, r, a = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        function M(e) {
            return function(e) {
                if (Array.isArray(e))
                    return V(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return V(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return V(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function V(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function _(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, I(r.key), r)
            }
        }
        function I(e) {
            var t = function(e, t) {
                if ("object" !== R(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== R(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === R(t) ? t : String(t)
        }
        function j(e, t) {
            return (j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function B(e) {
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
                var n, r = U(e);
                if (t) {
                    var a = U(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === R(t) || "function" == typeof t))
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
        var x = function(e) {
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
            }(n, r.Component);
            var t = B(n);
            function n(e) {
                var a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (a = t.call(this, e)).handleHide = a.handleHide.bind(F(a)),
                a.handleWeekdayClicked = a.handleWeekdayClicked.bind(F(a)),
                a.getMonthlyOnOptions = a.getMonthlyOnOptions.bind(F(a)),
                a.getRecurrenceDefaultValues = a.getRecurrenceDefaultValues.bind(F(a)),
                a.handleFormChanged = a.handleFormChanged.bind(F(a)),
                a.handleAddAttendee = a.handleAddAttendee.bind(F(a)),
                a.handleRecurrenceOverlayUpdatePosition = a.handleRecurrenceOverlayUpdatePosition.bind(F(a)),
                a.handleRecurrenceDone = a.handleRecurrenceDone.bind(F(a)),
                a.handleRecurrenceCancel = a.handleRecurrenceCancel.bind(F(a)),
                a.handleEndOptionChange = a.handleEndOptionChange.bind(F(a)),
                a.handleChangeStart = a.handleChangeStart.bind(F(a)),
                a.handleChangeEnd = a.handleChangeEnd.bind(F(a)),
                a.handleSave = a.handleSave.bind(F(a)),
                a.handleCancel = a.handleCancel.bind(F(a)),
                a.hideConfirm = a.hideConfirm.bind(F(a)),
                a.handleEntered = a.handleEntered.bind(F(a)),
                a.handleEntering = a.handleEntering.bind(F(a)),
                a.handleDelete = a.handleDelete.bind(F(a)),
                a.handleChangeAllDay = a.handleChangeAllDay.bind(F(a)),
                a.handleRSVP = a.handleRSVP.bind(F(a)),
                a.handlePickerSelect = a.handlePickerSelect.bind(F(a)),
                a.handlePickerCancel = a.handlePickerCancel.bind(F(a)),
                a.handlePickerOpen = a.handlePickerOpen.bind(F(a)),
                a.handleEventSubmit = a.handleEventSubmit.bind(F(a)),
                a.resetSpinner = a.resetSpinner.bind(F(a)),
                a.triggerSpinner = a.triggerSpinner.bind(F(a)),
                a.liveRegionRef = r.createRef(),
                a.state = {
                    allDay: !1,
                    recurrence: null,
                    showRecurrenceDetail: !1,
                    statusCancel: !1,
                    endOptionFieldValue: "never",
                    attendees: null,
                    formChanged: !1,
                    displayConfirm: !1,
                    startTimeM: i()(),
                    endTimeM: i()(),
                    openContactPicker: !1,
                    spinner: !1,
                    showAnnouncement: !1
                },
                a.initByProps = !0,
                a
            }
            return function(e, t, n) {
                t && _(e.prototype, t),
                n && _(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = e.event
                      , n = e.eventRecurenceValue
                      , r = e.appPending
                      , a = void 0 !== r && r
                      , o = e.show
                      , i = e.errorModal;
                    if (this.props.show === o || o) {
                        if (t) {
                            var c = t.startTime
                              , l = t.endTime
                              , s = t.recurrence
                              , u = t.attendees
                              , d = window.TimeUtil
                              , f = d.parseInTimezoneForRui(c)
                              , m = d.parseInTimezoneForRui(l);
                            this.initByProps && this.setState({
                                startTimeM: f,
                                endTimeM: m
                            });
                            var h = this.isInputChanged();
                            this.setState({
                                recurrence: this.state.statusCancel ? s : this.state.recurrence || s,
                                attendees: this.state.attendees || M(u),
                                eventRecurenceValue: n,
                                endOptionFieldValue: (s.count ? "after" : s.until && "on") || "never",
                                displayConfirm: a,
                                formChanged: i || h
                            }),
                            this.initByProps = !1
                        }
                    } else
                        this.setState({
                            attendees: null,
                            recurrence: null
                        })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.handleCancel(),
                    this.resetSpinner()
                }
            }, {
                key: "getAttendeeStatus",
                value: function(e) {
                    var t = (0,
                    N.r8)(e);
                    return t ? r.createElement(d.Z, {
                        name: t
                    }) : (0,
                    N.hT)(e)
                }
            }, {
                key: "getMonthlyOnOptions",
                value: function() {
                    if (!this.props.event)
                        return [];
                    var e = Math.floor(this.state.startTimeM.date() / 7);
                    if (3 === e) {
                        var t = this.state.startTimeM.day();
                        e = i()(this.state.startTimeM).day(t + 7).month() === this.state.startTimeM.month() ? 3 : 4
                    }
                    return [{
                        value: 0,
                        label: (0,
                        g.WU)((0,
                        O.t)("calendar.editorView.recurrence.intervalDesc.monthlyOnDay"), this.state.startTimeM.date())
                    }, {
                        value: 1,
                        label: (0,
                        g.WU)((0,
                        O.t)("calendar.editorView.recurrence.intervalDesc.monthly"), "".concat((0,
                        O.t)("calendar.editorView.recurrence.repeatPos")[e], " ").concat(this.state.startTimeM.format("dddd")))
                    }]
                }
            }, {
                key: "getRecurrenceDefaultValues",
                value: function() {
                    if (!this.state.recurrence)
                        return {};
                    var e = this.state.recurrence
                      , t = e.setPos
                      , n = e.dayList
                      , r = e.monthDayList
                      , a = this.state.recurrence
                      , o = a.frequency
                      , c = a.count
                      , l = i()(this.state.startTimeM)
                      , s = 1
                      , u = l
                      , d = 0;
                    return "daily" === o || "none" === o ? (o = "daily",
                    s = 30,
                    u = l.add(30, "days")) : "weekly" === o ? (s = 13,
                    u = l.add(13, "weeks"),
                    0 === n.length && n.push((0,
                    N.lo)(this.state.startTimeM))) : "monthly" === o ? (s = 12,
                    u = l.add(12, "months"),
                    d = void 0 !== t ? 1 : 0) : "yearly" === o && (s = 5,
                    u = l.add(5, "years")),
                    {
                        count: c = c || s,
                        until: u,
                        frequency: o,
                        monthlyOn: d,
                        setPos: t,
                        dayList: n,
                        monthDayList: r,
                        interval: this.state.recurrence.interval
                    }
                }
            }, {
                key: "handleRSVP",
                value: function(e) {
                    var t = this.props
                      , n = t.event;
                    (0,
                    t.updateRSVP)(n, e)
                }
            }, {
                key: "handleEventSubmit",
                value: function() {
                    var e = this.props
                      , t = e.onSave
                      , n = e.event
                      , r = this.eventForm.getModel();
                    r.attendees = this.state.attendees.map(function(e) {
                        e.isNew;
                        return L(e, D)
                    }),
                    r.alarm = r.alarm <= 0 ? {
                        offsetMinutes: r.alarm
                    } : void 0;
                    var a = "custom0" === r.recurrenceFrequency ? this.state.recurrence : (0,
                    N.w8)(this.state.startTimeM, r.recurrenceFrequency);
                    r.recurrence = A(A({}, a), {}, {
                        until: "object" === R(a.until) ? a.until.valueOf() : a.until
                    }),
                    t(n, r, this.resetSpinner),
                    this.triggerSpinner(),
                    this.setState({
                        attendees: null,
                        recurrence: null
                    })
                }
            }, {
                key: "handleSave",
                value: function() {
                    this.eventForm.submit(),
                    setTimeout(function() {
                        (0,
                        S.kW)("#calendarToolbarNewEventBtn")
                    }, 50)
                }
            }, {
                key: "handleDelete",
                value: function() {
                    var e = this.props
                      , t = e.event;
                    (0,
                    e.onDelete)(t, this.resetSpinner),
                    this.triggerSpinner()
                }
            }, {
                key: "handleAddAttendee",
                value: function(e) {
                    var t = e.address
                      , n = e.name
                      , r = e.isGroup;
                    if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(t)) {
                        this.autoSuggestInput.setState({
                            values: []
                        });
                        var a = this.props
                          , o = a.user
                          , i = a.onToast;
                        if (o.email.toUpperCase() === t.toUpperCase() || this.state.attendees && this.state.attendees.some(function(e) {
                            return e.address.toUpperCase() === t.toUpperCase()
                        }))
                            i({
                                type: "failure",
                                message: (0,
                                O.t)("calendar.editorView.ATTENDEE_EXISTED")
                            });
                        else {
                            this.autoSuggestInput.setState({
                                values: []
                            }),
                            this.state.attendees.push({
                                commonName: n,
                                address: t,
                                status: "needsAction",
                                type: "internal",
                                isNew: !0
                            });
                            var c = this.isInputChanged();
                            this.setState({
                                attendees: M(this.state.attendees),
                                formChanged: c
                            }),
                            (0,
                            this.props.onFormChange)(c)
                        }
                    } else
                        r && this.autoSuggestInput.setState({
                            values: []
                        })
                }
            }, {
                key: "handleRemoveAttendee",
                value: function(e) {
                    var t = this
                      , n = this.state.attendees[e];
                    this.state.attendees.splice(e, 1);
                    var r = this.isInputChanged();
                    this.setState({
                        attendees: M(this.state.attendees),
                        formChanged: r
                    }, function() {
                        var e = "".concat((0,
                        O.t)("aria.label.MAIL_ADDRESS_REMOVE"), " ").concat(n.address);
                        t.announce(e)
                    }),
                    (0,
                    this.props.onFormChange)(r)
                }
            }, {
                key: "announce",
                value: function(e) {
                    var t = this
                      , n = document.querySelector(".ow-calendar-EventEditor-attendeeStatus-sr-only");
                    n && (n.setAttribute("aria-live", T.HO.ASSERTIVE),
                    n.innerText = e,
                    this.setState({
                        showAnnouncement: !0
                    }),
                    setTimeout(function() {
                        n.setAttribute("aria-live", T.HO.OFF),
                        n.innerText = " ",
                        t.setState({
                            showAnnouncement: !1
                        })
                    }))
                }
            }, {
                key: "isInputChanged",
                value: function() {
                    var e = this.props.event;
                    return !!e && (!(!this.eventForm || !this.eventForm.isChanged()) || (i()(e.startTime).format(T.EO) !== this.state.startTimeM.format(T.EO) || i()(e.endTime).format(T.EO) !== this.state.endTimeM.format(T.EO) || e.allDay !== this.state.allDay || (JSON.stringify(e.attendees) !== JSON.stringify(this.state.attendees) || this.isRecurrenceChanged(e.recurrence, this.state.recurrence))))
                }
            }, {
                key: "isRecurrenceChanged",
                value: function(e, t) {
                    if (e.frequency === t.frequency) {
                        if ("none" === t.frequency)
                            return !1;
                        var n = i().isMoment(t.until) ? t.until.valueOf() : t.until;
                        return e.interval !== t.interval || e.count !== t.count || e.until !== n
                    }
                    return !0
                }
            }, {
                key: "handleFormChanged",
                value: function(e, t) {
                    if (t !== this.state.formChanged) {
                        var n = this.isInputChanged()
                          , r = {
                            formChanged: n
                        };
                        this.setState(r),
                        (0,
                        this.props.onFormChange)(n)
                    }
                }
            }, {
                key: "handleRecurrenceChange",
                value: function(e) {
                    this.setState({
                        showRecurrenceDetail: "custom" === e,
                        statusCancel: !0
                    }),
                    "custom" === e && setTimeout(function() {
                        (0,
                        S.kW)(".ow-calendar-EventEditor-recurrenceDetail")
                    }, 50)
                }
            }, {
                key: "handleWeekdayClicked",
                value: function(e) {
                    this.state.recurrence.dayList = this.state.recurrence.dayList.includes(e) ? this.state.recurrence.dayList.filter(function(t) {
                        return t !== e
                    }) : this.state.recurrence.dayList.push(e) && this.state.recurrence.dayList;
                    var t = window.UXConfig;
                    this.state.recurrence.dayList.sort(function(e, n) {
                        return t.calendar.recurrence.dayList.indexOf(e) - t.calendar.recurrence.dayList.indexOf(n)
                    }),
                    this.setState({
                        recurrence: A({}, this.state.recurrence)
                    })
                }
            }, {
                key: "handleChangeAllDay",
                value: function(e) {
                    var t = this.props.event
                      , n = this.isInputChanged() || t.allDay !== e;
                    this.setState({
                        allDay: e,
                        formChanged: n
                    }),
                    (0,
                    this.props.onFormChange)(n)
                }
            }, {
                key: "updateRecurrenceByStartTime",
                value: function(e) {
                    var t = this.state.recurrence
                      , n = t.dayList
                      , r = t.monthDayList;
                    return 1 === n.length && (t.dayList[0] = (0,
                    N.lo)(e)),
                    1 === r.length && (t.monthDayList[0] = e.date()),
                    A({}, t)
                }
            }, {
                key: "handleChangeStart",
                value: function(e) {
                    var t = this.updateRecurrenceByStartTime(e);
                    this.state.allDay && e.isSame(this.state.endTimeM) ? this.setState({
                        startTimeM: e,
                        recurrence: t,
                        formChanged: !e.isSame(this.state.startTimeM)
                    }) : e.isBefore(this.state.endTimeM) ? this.setState({
                        startTimeM: e,
                        endTimeM: i()(this.state.endTimeM),
                        recurrence: t,
                        formChanged: !e.isSame(this.state.startTimeM)
                    }) : this.setState({
                        startTimeM: e,
                        endTimeM: i()(e),
                        recurrence: t
                    })
                }
            }, {
                key: "handleChangeEnd",
                value: function(e) {
                    if (this.state.allDay && e.isSame(this.state.startTimeM))
                        this.setState({
                            endTimeM: e,
                            formChanged: !e.isSame(this.state.endTimeM)
                        });
                    else if (e.isAfter(this.state.startTimeM))
                        this.setState({
                            endTimeM: e,
                            formChanged: !e.isSame(this.state.endTimeM)
                        });
                    else {
                        var t = i()(e)
                          , n = this.updateRecurrenceByStartTime(t);
                        this.setState({
                            startTimeM: t,
                            endTimeM: e,
                            recurrence: n
                        })
                    }
                }
            }, {
                key: "hideConfirm",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        e.setState({
                            displayConfirm: !1
                        }),
                        (0,
                        S.kW)(".ow-calendar-EventEditor-close")
                    }, 10);
                    var t = this.props
                      , n = t.appPending
                      , r = t.onPendingCancel;
                    n && r()
                }
            }, {
                key: "handleCancel",
                value: function() {
                    var e = this.props
                      , t = e.onCancel
                      , n = e.onPendingOver
                      , r = e.errorData;
                    this.handleRecurrenceCancel(),
                    t(r),
                    n(),
                    this.setState({
                        attendees: null,
                        recurrence: null
                    }, function() {
                        (0,
                        S.kW)("#calendarToolbarNewEventBtn")
                    })
                }
            }, {
                key: "handleEntering",
                value: function() {
                    var e = this.props.event;
                    this.setState({
                        allDay: e && e.allDay
                    })
                }
            }, {
                key: "handleEntered",
                value: function() {
                    this.autoSuggestInput && this.autoSuggestInput.setState({
                        values: []
                    });
                    var e = (0,
                    a.findDOMNode)(this.summaryField).querySelector("input");
                    e.setSelectionRange(1e3, 1e3),
                    e.focus()
                }
            }, {
                key: "handleHide",
                value: function(e) {
                    if (!e.target.closest(".modal-dialog") && !this.state.openContactPicker)
                        return this.isInputChanged() ? (this.setState({
                            displayConfirm: !0
                        }),
                        void setTimeout(function() {
                            var e, t;
                            null === (e = document.querySelector(".ow-confirmDialog .ow-icon-close")) || void 0 === e || null === (t = e.closest("button")) || void 0 === t || t.focus()
                        }, 70)) : void this.handleCancel()
                }
            }, {
                key: "handleEndOptionChange",
                value: function(e) {
                    this.setState({
                        endOptionFieldValue: e
                    })
                }
            }, {
                key: "handleRecurrenceCancel",
                value: function() {
                    this.recurrenceField && this.recurrenceField.resetValue(),
                    this.setState({
                        showRecurrenceDetail: !1,
                        statusCancel: !0
                    })
                }
            }, {
                key: "handleRecurrenceDone",
                value: function() {
                    var e = this.recurrenceOverlayForm.getModel()
                      , t = e.endOption
                      , n = e.frequency
                      , r = e.recurrenceCount
                      , a = e.recurrenceInterval
                      , o = e.recurrenceUntil
                      , i = e.monthlyOn
                      , c = this.state.recurrence
                      , l = c.dayList
                      , s = c.monthDayList
                      , u = "on" === t ? o : void 0
                      , d = "after" === t ? r : void 0;
                    if (a <= T.zk.MAX_VALUE && a >= T.zk.MIN_VALUE && r <= T.zk.MAX_VALUE && r >= T.zk.MIN_VALUE) {
                        var f = {
                            frequency: n,
                            interval: Number(a),
                            count: d,
                            until: u,
                            dayList: "weekly" === n ? l : [],
                            monthDayList: "monthly" === n && 0 === i ? s : [],
                            setPos: "monthly" === n && 1 === i ? (0,
                            N.wh)(this.state.startTimeM) : void 0,
                            monthlyOn: i
                        }
                          , m = (0,
                        N.tK)(f, this.state.startTimeM);
                        this.setState({
                            showRecurrenceDetail: !1,
                            statusCancel: !1,
                            recurrence: A({}, f)
                        }),
                        this.recurrenceField.setValue(m.value)
                    }
                }
            }, {
                key: "handleRecurrenceOverlayUpdatePosition",
                value: function() {
                    var e = (0,
                    a.findDOMNode)(this.recurrenceField).querySelector(".Select").getBoundingClientRect()
                      , t = e.bottom
                      , n = e.left
                      , r = (0,
                    a.findDOMNode)(this.recurrenceOverlayForm)
                      , o = r.closest(".ow-calendar-EventEditor-container").getBoundingClientRect()
                      , i = o.x
                      , c = o.y;
                    r.style.top = "".concat(t - c, "px"),
                    r.style.left = "".concat(n + 10 - i, "px")
                }
            }, {
                key: "handlePickerSelect",
                value: function(e) {
                    var t = this
                      , n = this.props
                      , r = n.onToast
                      , a = n.user;
                    if (e.length > 0) {
                        var o = !1;
                        if (e.forEach(function(e) {
                            var n = e && e.email ? e.email : e.address
                              , i = e && e.displayName ? e.displayName : e.name;
                            if ((null === a || void 0 === a ? void 0 : a.email) === n)
                                return r({
                                    type: "failure",
                                    message: (0,
                                    O.t)("calendar.editorView.ATTENDEE_EXISTED")
                                }),
                                void t.setState({
                                    openContactPicker: !1
                                });
                            var c = !1;
                            n && (t.state.attendees && t.state.attendees.some(function(e) {
                                return e.address.toUpperCase() === n.toUpperCase()
                            }) && (o = !0,
                            c = !0),
                            c || t.state.attendees.push({
                                commonName: i,
                                address: n,
                                status: "needsAction",
                                type: "internal",
                                isNew: !0
                            }))
                        }),
                        o)
                            return r({
                                type: "failure",
                                message: (0,
                                O.t)("calendar.editorView.DUPLICATE_ATTENDEE")
                            }),
                            void this.setState({
                                openContactPicker: !1
                            });
                        this.setState({
                            attendees: M(this.state.attendees),
                            formChanged: this.isInputChanged()
                        })
                    }
                    this.setState({
                        openContactPicker: !1
                    })
                }
            }, {
                key: "handlePickerCancel",
                value: function() {
                    this.setState({
                        openContactPicker: !1
                    })
                }
            }, {
                key: "handlePickerOpen",
                value: function() {
                    this.setState({
                        openContactPicker: !0
                    })
                }
            }, {
                key: "triggerSpinner",
                value: function() {
                    this.setState({
                        spinner: !0
                    })
                }
            }, {
                key: "resetSpinner",
                value: function() {
                    this.setState({
                        spinner: !1
                    })
                }
            }, {
                key: "renderRecurrenceDetail",
                value: function() {
                    var e = this;
                    if (!this.props.event || !this.state.recurrence)
                        return null;
                    var t = this.getRecurrenceDefaultValues()
                      , n = t.count
                      , a = t.until
                      , o = t.frequency
                      , i = t.monthlyOn
                      , c = t.dayList
                      , s = window.UXConfig
                      , u = this.state.recurrence.interval
                      , d = (this.state.recurrence.count ? "after" : this.state.recurrence.until && "on") || "never"
                      , f = s.calendar.recurrence.frequencyOptions.map(function(e) {
                        return {
                            value: e,
                            label: (0,
                            N.C5)(e)
                        }
                    })
                      , m = ["e", "+", "-", "."];
                    return r.createElement(l(), {
                        show: this.state.showRecurrenceDetail,
                        container: this.formView,
                        target: this.recurrenceField,
                        placement: "bottom",
                        rootClose: !0,
                        onEntering: function() {
                            e.handleRecurrenceOverlayUpdatePosition()
                        },
                        onHide: function() {
                            e.handleRecurrenceCancel()
                        }
                    }, r.createElement(b.l0, {
                        className: "ow-calendar-EventEditor-recurrenceDetail",
                        ref: function(t) {
                            e.recurrenceOverlayForm = t
                        }
                    }, r.createElement("div", {
                        className: "ow-calendar-EventEditor-intervalsWrapper"
                    }, r.createElement(b.UP, {
                        className: "ow-calendar-EventEditor-numberPicker",
                        label: (0,
                        O.t)("calendar.editorView.recurrence.repeatEvery"),
                        "aria-label": (0,
                        O.t)("calendar.editorView.recurrence.repeatEvery"),
                        restrictCharacters: m,
                        name: "recurrenceInterval",
                        value: u,
                        type: "number",
                        min: "1",
                        max: "1000",
                        validations: {
                            customValidation: function(e, t) {
                                return !(t > T.zk.MAX_VALUE || t < T.zk.MIN_VALUE) || (0,
                                O.t)("calendar.warningMessage.WARNING_FOR_REPEATEVERY_INTERVAL_AND_OCCURENCES")
                            }
                        },
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            O.t)("common.errorMessage.REQUIRED")
                        }
                    }), r.createElement(b.Hi, {
                        name: "frequency",
                        className: "ow-calendar-EventEditor-intervals",
                        options: f,
                        value: o,
                        onChange: function(t) {
                            e.state.recurrence.frequency = t,
                            e.setState({
                                recurrence: A({}, e.state.recurrence)
                            })
                        }
                    })), "monthly" === this.state.recurrence.frequency && r.createElement(b.Hi, {
                        name: "monthlyOn",
                        className: "ow-calendar-EventEditor-monthlyOn",
                        options: this.getMonthlyOnOptions(),
                        value: i
                    }), "weekly" === this.state.recurrence.frequency && r.createElement("div", {
                        className: "ow-calendar-EventEditor-weekdaysWrapper"
                    }, r.createElement("span", null, (0,
                    O.t)("calendar.editorView.recurrence.repeatOn")), r.createElement("div", {
                        className: "ow-calendar-EventEditor-weekdays"
                    }, s.calendar.recurrence.dayList.map(function(t) {
                        return r.createElement("span", {
                            role: T.HB.PRESENTATION,
                            className: "ow-calendar-EventEditor-weekday ".concat(c.includes(t) ? "selected" : ""),
                            onClick: function() {
                                return e.handleWeekdayClicked(t)
                            },
                            tabIndex: 0,
                            onKeyDown: function(n) {
                                return n.key === T.BY.ENTERKEY && e.handleWeekdayClicked(t)
                            }
                        }, (0,
                        N.ql)(t))
                    }))), r.createElement("div", {
                        className: "ow-calendar-EventEditor-ends"
                    }, (0,
                    O.t)("calendar.editorView.recurrence.ends")), r.createElement("div", {
                        className: "ow-calendar-EventEditor-endOptionsWrapper"
                    }, r.createElement(b.OF, {
                        name: "endOption",
                        className: "ow-calendar-EventEditor-endOptions",
                        value: d,
                        alignText: "right",
                        onChange: function(t) {
                            e.handleEndOptionChange(t)
                        },
                        list: [{
                            value: "never",
                            text: (0,
                            O.t)("calendar.editorView.recurrence.endTypes.never")
                        }, {
                            value: "on",
                            text: (0,
                            O.t)("calendar.editorView.recurrence.endTypes.on")
                        }, {
                            value: "after",
                            text: (0,
                            O.t)("calendar.editorView.recurrence.endTypes.after")
                        }]
                    }), r.createElement("div", {
                        className: "ow-calendar-EventEditor-endOptionsRight"
                    }, r.createElement(b.bJ, {
                        name: "recurrenceUntil",
                        className: "ow-calendar-EventEditor-endOnDate",
                        disabled: "on" !== this.state.endOptionFieldValue,
                        value: a,
                        dateFormat: window.TimeUtil.getDateTimePatterns().MonthDayYear
                    }), r.createElement(b.UP, {
                        className: "ow-calendar-EventEditor-numberPicker",
                        label: (0,
                        O.t)("calendar.editorView.recurrence.occurrences"),
                        "aria-label": (0,
                        O.t)("calendar.editorView.recurrence.occurrences"),
                        name: "recurrenceCount",
                        disabled: "after" !== this.state.endOptionFieldValue,
                        restrictCharacters: m,
                        value: n,
                        type: "number",
                        min: "1",
                        max: "1000",
                        validations: {
                            customValidation: function(e, t) {
                                return !(t > T.zk.MAX_VALUE || t < T.zk.MIN_VALUE) || (0,
                                O.t)("calendar.warningMessage.WARNING_FOR_REPEATEVERY_INTERVAL_AND_OCCURENCES")
                            }
                        },
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            O.t)("common.errorMessage.REQUIRED")
                        }
                    }))), r.createElement("div", {
                        className: "ow-calendar-EventEditor-recurrenceDetailFooter"
                    }, r.createElement("span", {
                        role: T.HB.PRESENTATION,
                        onClick: function() {
                            return e.handleRecurrenceCancel()
                        },
                        "aria-label": (0,
                        O.t)("common.CANCEL"),
                        onKeyDown: function(t) {
                            return t.key === T.BY.ENTERKEY && e.handleRecurrenceCancel()
                        },
                        tabIndex: 0
                    }, (0,
                    O.t)("common.CANCEL")), r.createElement("span", {
                        role: T.HB.PRESENTATION,
                        onClick: function() {
                            return e.handleRecurrenceDone()
                        },
                        className: "done",
                        "aria-label": (0,
                        O.t)("common.DONE"),
                        tabIndex: 0,
                        onKeyDown: function(t) {
                            if (t.key !== T.BY.TABKEY) {
                                if (t.key !== T.BY.ENTERKEY)
                                    return;
                                e.handleRecurrenceDone()
                            }
                            var n, r;
                            t.shiftKey ? (null === (n = document.querySelector(".ow-calendar-EventEditor-recurrenceDetailFooter")) || void 0 === n || null === (r = n.childNodes[0]) || void 0 === r || r.focus(),
                            t.preventDefault()) : ((0,
                            S.kW)(".ow-calendar-EventEditor-recurrenceDetail"),
                            t.preventDefault())
                        }
                    }, (0,
                    O.t)("common.DONE")))))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = window.TimeUtil;
                    if (!t)
                        return null;
                    var n = this.props
                      , a = n.show
                      , o = n.event
                      , i = n.reminderOptions
                      , c = n.calendars
                      , s = n.colors
                      , u = n.categories
                      , D = n.user
                      , R = n.invited
                      , P = n.readOnly
                      , A = n.attendeeStatus;
                    a || (this.initByProps = !0);
                    var k = "";
                    if (o && o.categories && u) {
                        var L = Object.keys(u).find(function(e) {
                            var t = u[e].label;
                            if ("".concat(t.toLowerCase()) === "".concat(o.categories.toLowerCase()))
                                return u[e].value
                        });
                        k = u[L] ? u[L].value : o.categories
                    }
                    if (!o)
                        return null;
                    var M = o.uid ? (0,
                    O.t)("calendar.editorView.EDIT_EVENT") : (0,
                    O.t)("calendar.editorView.NEW_EVENT")
                      , V = (o.organizer || {}).address
                      , _ = (0,
                    N.hh)(this.state.recurrence, this.state.startTimeM)
                      , I = this.state.attendees;
                    return null === I && (I = []),
                    r.createElement("div", {
                        className: "ow-calendar-EventEditor-container",
                        role: T.HB.DIALOG,
                        "aria-label": M
                    }, r.createElement("div", {
                        className: "ow-calendar-EventEditor-target",
                        ref: function(t) {
                            e.target = t
                        }
                    }), r.createElement(l(), {
                        className: "ow-calendar-EventEditor-overlay",
                        show: a,
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
                    }, r.createElement("div", {
                        className: "ow-calendar-EventEditor-formContainer"
                    }, r.createElement("div", {
                        className: "ow-calendar-EventEditor-panel-upper",
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === T.BY.TABKEY && e.shiftKey && e.preventDefault()
                        }
                    }, r.createElement("div", {
                        className: "ow-calendar-EventEditor-toolbar-container"
                    }, r.createElement(f.Z, {
                        className: "ow-calendar-EventEditor-toolbar",
                        ref: function(t) {
                            e.toolbar = t
                        }
                    }, !P && r.createElement(f.Z.Button, {
                        className: "ow-calendar-EventEditor-save",
                        iconName: "ow-new-event-form-save",
                        onClick: function() {
                            e.handleSave()
                        },
                        disabled: !this.state.formChanged,
                        role: T.HB.BUTTON,
                        "aria-label": !R && this.state.attendees && this.state.attendees.length > 0 ? (0,
                        O.t)("calendar.editorView.SAVE_SEND_EMAIL") : (0,
                        O.t)("common.SAVE"),
                        "aria-disabled": !this.state.formChanged,
                        onKeyDown: function(e) {
                            e.key === T.BY.TABKEY && e.shiftKey && (0,
                            S.kW)(".ow-calendar-EventEditor-panel-upper")
                        }
                    }, !R && this.state.attendees && this.state.attendees.length > 0 ? (0,
                    O.t)("calendar.editorView.SAVE_SEND_EMAIL") : (0,
                    O.t)("common.SAVE")), r.createElement(f.Z.Button, {
                        className: "ow-calendar-EventEditor-close",
                        onClick: function(t) {
                            return e.handleHide(t)
                        },
                        role: T.HB.BUTTON,
                        "aria-label": (0,
                        O.t)("common.CANCEL"),
                        iconName: "ow-new-event-form-close",
                        onKeyDown: function(t) {
                            if (t.key !== T.BY.TABKEY) {
                                if (t.key !== T.BY.ENTERKEY)
                                    return;
                                e.handleHide(t),
                                setTimeout(function() {
                                    (0,
                                    S.kW)("#calendarToolbarNewEventBtn")
                                }, 0)
                            }
                            t.shiftKey ? (e.state.formChanged ? (0,
                            S.kW)(".ow-calendar-EventEditor-save") : (0,
                            S.kW)(".ow-calendar-EventEditor-panel-upper"),
                            t.preventDefault()) : ((0,
                            S.kW)(".ow-calendar-EventEditor-panel-lower"),
                            t.preventDefault())
                        }
                    }, (0,
                    O.t)("common.CANCEL")), !P && o.uid && r.createElement(f.Z.Button, {
                        className: "ow-calendar-EventEditor-delete",
                        iconName: "ow-new-event-form-trash",
                        role: T.HB.BUTTON,
                        "aria-label": (0,
                        O.t)("common.DELETE"),
                        onClick: function() {
                            return e.handleDelete()
                        }
                    }, (0,
                    O.t)("common.DELETE")), R && r.createElement("span", {
                        className: "ow-separator"
                    }), R && r.createElement(f.Z.Button, {
                        className: "ow-calendar-attendStatus ow-calendar-attendStatus-accept".concat("accepted" === A ? " ow-calendar-attendStatus-selected" : ""),
                        iconName: "accepted",
                        onClick: function() {
                            return e.handleRSVP("accepted")
                        }
                    }, "accepted" === A ? (0,
                    O.t)("calendar.editorView.attendee.status.accepted") : (0,
                    O.t)("calendar.editorView.attendee.status.accept")), R && r.createElement(f.Z.Button, {
                        className: "ow-calendar-attendStatus ow-calendar-attendStatus-tentative".concat("tentative" === A ? " ow-calendar-attendStatus-selected" : ""),
                        iconName: "tentative",
                        onClick: function() {
                            return e.handleRSVP("tentative")
                        }
                    }, (0,
                    O.t)("calendar.editorView.attendee.status.tentative")), R && r.createElement(f.Z.Button, {
                        className: "ow-calendar-attendStatus ow-calendar-attendStatus-decline".concat("declined" === A ? " ow-calendar-attendStatus-selected" : ""),
                        iconName: "declined",
                        onClick: function() {
                            return e.handleRSVP("declined")
                        }
                    }, "declined" === A ? (0,
                    O.t)("calendar.editorView.attendee.status.declined") : (0,
                    O.t)("calendar.editorView.attendee.status.decline"))), r.createElement("div", {
                        className: "ow-calendar-EventEditor-toolbar-title",
                        role: T.HB.HEADING,
                        "aria-level": T.DU.H2,
                        "aria-label": M
                    }, M))), r.createElement("div", {
                        className: "ow-calendar-EventEditor-panel-lower",
                        tabIndex: 0
                    }, r.createElement("div", {
                        className: "ow-calendar-EventEditor-header"
                    }, r.createElement("div", {
                        className: "ow-calendar-EventEditor-headerDetails",
                        "aria-label": (0,
                        O.t)("calendar.editorView.TITLE_DETAILS")
                    }, (0,
                    O.t)("calendar.editorView.TITLE_DETAILS")), r.createElement("div", {
                        className: "ow-calendar-EventEditor-headerAttendees",
                        role: T.HB.HEADING,
                        "aria-level": T.DU.H3,
                        "aria-label": (0,
                        O.t)("calendar.editorView.LABEL_ATTENDEES")
                    }, (0,
                    O.t)("calendar.editorView.LABEL_ATTENDEES"))), r.createElement("div", {
                        className: "ow-calendar-EventEditor-content",
                        ref: function(t) {
                            e.formView = t
                        }
                    }, r.createElement(b.l0, {
                        className: "ow-calendar-EventEditor-form",
                        onChange: this.handleFormChanged,
                        onValidSubmit: this.handleEventSubmit,
                        ref: function(t) {
                            e.eventForm = t
                        }
                    }, r.createElement(b.UP, {
                        ref: function(t) {
                            e.summaryField = t
                        },
                        label: (0,
                        O.t)("calendar.editorView.LABEL_SUMMARY"),
                        "aria-required": "true",
                        name: "summary",
                        "aria-label": (0,
                        O.t)("calendar.editorView.LABEL_SUMMARY"),
                        placeholder: (0,
                        O.t)("calendar.editorView.LABEL_SUMMARY"),
                        value: o.summary,
                        required: !0,
                        disabled: R || P,
                        validations: {
                            customRegexp: function(e, t) {
                                return !(!t || "" === t.trim()) || (0,
                                O.t)("common.errorMessage.REQUIRED")
                            },
                            maxLength: T.mx
                        },
                        validationErrors: {
                            maxLength: (0,
                            g.WU)((0,
                            O.t)("calendar.warningMessage.WARNING_TITLE_TOO_LONG"), T.mx),
                            isDefaultRequiredValue: (0,
                            O.t)("common.errorMessage.REQUIRED")
                        }
                    }), r.createElement("div", {
                        className: "ow-calendar-EventEditor-times"
                    }, r.createElement(b.bJ, {
                        ref: function(t) {
                            e.startDateInput = t
                        },
                        name: "startTimeM",
                        label: (0,
                        O.t)("calendar.editorView.LABEL_WHEN"),
                        "aria-label": (0,
                        O.t)("calendar.editorView.LABEL_WHEN"),
                        className: "ow-calendar-EventEditor-start".concat(R ? " disabled" : ""),
                        value: this.state.startTimeM.valueOf(),
                        dateFormat: t.getDateTimePatterns().ShortDate,
                        onChange: function(n) {
                            return e.handleChangeStart(t.getTimeZoneMomentForRui(n))
                        },
                        disabled: R || P
                    }), !this.state.allDay && r.createElement(b.k3, {
                        ref: function(t) {
                            e.startTimeInput = t
                        },
                        name: "startTime",
                        "aria-label": (0,
                        O.t)("calendar.editorView.LABEL_START_TIME"),
                        className: "ow-calendar-EventEditor-startTime ".concat(this.props.is24Hours ? "ow-calendar-EventEditor-24times" : ""),
                        value: this.state.startTimeM.valueOf(),
                        onChange: function(n) {
                            return e.handleChangeStart(t.getTimeZoneMomentForRui(n))
                        },
                        disabled: R || P
                    }), r.createElement("span", {
                        className: "ow-calendar-EventEditor-to",
                        "aria-label": (0,
                        O.t)("calendar.editorView.LABEL_TO")
                    }, (0,
                    O.t)("calendar.editorView.LABEL_TO")), !this.state.allDay && r.createElement(b.k3, {
                        ref: function(t) {
                            e.endTimeInput = t
                        },
                        name: "endTime",
                        "aria-label": (0,
                        O.t)("calendar.editorView.LABEL_END_TIME"),
                        className: "ow-calendar-EventEditor-endTime ".concat(this.props.is24Hours ? "ow-calendar-EventEditor-24times" : ""),
                        value: this.state.endTimeM.valueOf(),
                        onChange: function(n) {
                            return e.handleChangeEnd(t.getTimeZoneMomentForRui(n))
                        },
                        disabled: R || P
                    }), this.state.spinner ? r.createElement(y.Z, {
                        className: "ow-adv-spinner"
                    }) : "", r.createElement(b.bJ, {
                        ref: function(t) {
                            e.endDateInput = t
                        },
                        name: "endTimeM",
                        className: "ow-calendar-EventEditor-end".concat(R ? " disabled" : ""),
                        value: this.state.endTimeM.valueOf(),
                        dateFormat: t.getDateTimePatterns().ShortDate,
                        onChange: function(n) {
                            return e.handleChangeEnd(t.getTimeZoneMomentForRui(n))
                        },
                        disabled: R || P
                    }), r.createElement("div", {
                        className: "ow-spacing"
                    }), !R && !P && r.createElement(b.bM, {
                        name: "allDay",
                        className: "ow-calendar-EventEditor-allDay",
                        value: o.allDay,
                        onChange: function(t) {
                            return e.handleChangeAllDay(t)
                        },
                        label: (0,
                        O.t)("calendar.editorView.LABEL_ALLDAY"),
                        "aria-label": (0,
                        O.t)("calendar.editorView.LABEL_ALLDAY"),
                        disabled: R
                    })), (!R && !P || "none" !== this.state.eventRecurenceValue) && r.createElement(b.Hi, {
                        ref: function(t) {
                            e.recurrenceField = t
                        },
                        name: "recurrenceFrequency",
                        className: "ow-calendar-EventEditor-repeat",
                        options: _,
                        value: this.state.eventRecurenceValue,
                        label: (0,
                        O.t)("calendar.editorView.LABEL_REPEAT"),
                        "aria-label": (0,
                        O.t)("calendar.editorView.LABEL_REPEAT"),
                        onChange: function(t) {
                            return e.handleRecurrenceChange(t)
                        },
                        disabled: R || P
                    }), this.renderRecurrenceDetail(), o.alarm && r.createElement(b.Hi, {
                        name: "alarm",
                        className: "ow-calendar-EventEditor-reminder",
                        options: i,
                        onChange: function(e) {
                            return (0,
                            C.p)(T.$Z, e)
                        },
                        label: (0,
                        O.t)("calendar.editorView.LABEL_REMINDER"),
                        "aria-label": (0,
                        O.t)("calendar.editorView.LABEL_REMINDER"),
                        value: o.summary || !(0,
                        C.c)(T.$Z) ? o.alarm && o.alarm.offsetMinutes : i[0],
                        disabled: P,
                        validations: {
                            customValidation: function(e) {
                                return !(e.startTimeM < Date.now() + 6e4 * Math.abs(e.alarm) && 1e3 !== e.alarm) || (0,
                                O.t)("calendar.warningMessage.WARNING_FOR_INVALID_REMINDER_MODEL")
                            }
                        }
                    }), r.createElement(b.Hi, {
                        name: "categories",
                        className: "ow-calendar-EventEditor-category",
                        options: u,
                        label: (0,
                        O.t)("calendar.editorView.LABEL_TYPE"),
                        "aria-label": (0,
                        O.t)("calendar.editorView.LABEL_TYPE"),
                        value: k,
                        optionComponent: h.Z,
                        valueComponent: m.Z,
                        disabled: P
                    }), r.createElement(w.Z, {
                        calendars: c,
                        colors: s,
                        name: "calendarId",
                        label: (0,
                        O.t)("calendar.editorView.LABEL_CALENDAR"),
                        "aria-label": (0,
                        O.t)("calendar.editorView.LABEL_CALENDAR"),
                        value: o.calendarId,
                        disabled: R || P
                    }), (!R && !P || o.location) && r.createElement(b.UP, {
                        label: (0,
                        O.t)("calendar.editorView.LABEL_LOCATION"),
                        "aria-label": (0,
                        O.t)("calendar.editorView.LABEL_LOCATION"),
                        name: "location",
                        placeholder: (0,
                        O.t)("calendar.editorView.LOCATION_PLACEHOLDER"),
                        value: o.location,
                        validations: {
                            maxLength: T.R
                        },
                        validationErrors: {
                            maxLength: (0,
                            g.WU)((0,
                            O.t)("calendar.warningMessage.WARNING_TOO_LONG"), (0,
                            O.t)("calendar.editorView.LABEL_LOCATION"), T.R)
                        },
                        disabled: R || P
                    }), (!R && !P || o.description) && r.createElement(b.UP, {
                        className: "ow-calendar-EventEditor-note",
                        type: "textarea",
                        label: (0,
                        O.t)("calendar.editorView.LABEL_NOTE"),
                        "aria-label": (0,
                        O.t)("calendar.editorView.LABEL_NOTE"),
                        name: "description",
                        placeholder: (0,
                        O.t)("calendar.editorView.DESCRIPTION_PLACEHOLDER"),
                        value: o.description || "",
                        validations: {
                            maxLength: T._l
                        },
                        validationErrors: {
                            maxLength: (0,
                            g.WU)((0,
                            O.t)("calendar.warningMessage.WARNING_TOO_LONG"), (0,
                            O.t)("calendar.editorView.LABEL_NOTE"), T._l)
                        },
                        disabled: R
                    })), r.createElement("div", {
                        className: "ow-calendaar-EventEditor-attendeesWrapper"
                    }, !R && !P && r.createElement("div", {
                        className: "ow-calendaar-EventEditor-addAttendee",
                        role: T.HB.CONTENTINFO,
                        "aria-label": (0,
                        O.t)("calendar.editorView.attendee.PLACE_HOLDER_ADD_INVITEE")
                    }, r.createElement(p.Z, {
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
                        O.t)("calendar.editorView.attendee.PLACE_HOLDER_ADD_INVITEE")
                    }), r.createElement(d.Z, {
                        name: "add-from-addressbook",
                        onClick: this.handlePickerOpen,
                        tabIndex: 0,
                        onKeyDown: function(t) {
                            t.key === T.BY.ENTERKEY && (e.handlePickerOpen(),
                            setTimeout(function() {
                                var e, t;
                                null === (e = document.querySelector(".ow-contacts-picker .ow-icon-close")) || void 0 === e || null === (t = e.closest("button")) || void 0 === t || t.focus()
                            }, 50))
                        }
                    })), r.createElement("div", {
                        className: "ow-calendar-EventEditor-attendeeListWrapper"
                    }, r.createElement("div", {
                        className: "ow-calendar-EventEditor-attendeeItem organizer",
                        tabIndex: 0
                    }, r.createElement("div", {
                        className: "ow-calendar-EventEditor-attendeeItemLeft",
                        tabIndex: 0
                    }, r.createElement("span", {
                        className: "ow-calendar-EventEditor-attendeeName",
                        "aria-label": V || (null === D || void 0 === D ? void 0 : D.displayName)
                    }, V || D.displayName)), r.createElement("span", {
                        className: "ow-calendar-EventEditor-attendeeStatus-sr-only"
                    }), r.createElement("span", {
                        className: "ow-calendar-EventEditor-attendeeStatus",
                        "aria-label": (0,
                        N.hT)("organizer"),
                        tabIndex: 0,
                        onKeyDown: function(t) {
                            if (t.key === T.BY.TABKEY)
                                if (t.shiftKey)
                                    t.preventDefault(),
                                    (0,
                                    S.kW)(".ow-calendar-EventEditor-attendeeItemLeft");
                                else {
                                    var n, r;
                                    if ((null === (n = e.state) || void 0 === n ? void 0 : null === (r = n.attendees) || void 0 === r ? void 0 : r.length) > 0)
                                        return;
                                    t.preventDefault(),
                                    (0,
                                    S.R8)(".ow-icon-ow-new-event-form-close", "button")
                                }
                        }
                    }, (0,
                    N.hT)("organizer"))), I.map(function(t, n) {
                        var a = t.commonName
                          , o = t.address
                          , i = t.status
                          , c = t.isNew;
                        return r.createElement("div", {
                            className: "ow-calendar-EventEditor-attendeeItem",
                            tabIndex: 0
                        }, r.createElement("div", {
                            className: "ow-calendar-EventEditor-attendeeItemLeft",
                            tabIndex: 0
                        }, r.createElement("span", {
                            className: "ow-calendar-EventEditor-attendeeName",
                            title: a,
                            "aria-label": a
                        }, a), r.createElement("span", {
                            className: "ow-calendar-EventEditor-attendeeAddress",
                            title: o,
                            "aria-label": o
                        }, o)), r.createElement("span", {
                            className: "ow-calendar-EventEditor-attendeeStatus"
                        }, c ? "" : e.getAttendeeStatus(i)), r.createElement("div", {
                            className: "sr-only",
                            "aria-live": T.HO.POLITE,
                            ref: e.liveRegionRef,
                            "aria-label": (0,
                            O.t)("aria.label.ATTENDEE_ADD")
                        }), !R && r.createElement(d.Z, {
                            className: e.state.showAnnouncement ? "sr-only" : "sr-only-annonce",
                            role: T.HB.BUTTON,
                            name: "close",
                            "aria-live": T.HO.OFF,
                            "aria-label": (0,
                            O.t)("aria.label.REMOVE_ADDRESS"),
                            onClick: function(t) {
                                t.preventDefault(),
                                e.handleRemoveAttendee(n)
                            },
                            tabIndex: 0,
                            onKeyDown: function(t) {
                                var r, a;
                                t.key === T.BY.TABKEY ? t.shiftKey ? (0,
                                S.kW)("ow-calendar-EventEditor-attendeeItem .ow-calendar-EventEditor-attendeeItemLeft") : (null === (r = e.state) || void 0 === r ? void 0 : null === (a = r.attendees) || void 0 === a ? void 0 : a.length) > 1 ? ((0,
                                S.kW)("ow-calendar-EventEditor-attendeeItem .ow-calendar-EventEditor-attendeeItemLeft"),
                                setTimeout(function() {
                                    var e;
                                    document.activeElement.children[3] === document.querySelectorAll(".ow-icon-close")[null === (e = document.querySelectorAll(".ow-icon-close")) || void 0 === e ? void 0 : e.length] && (t.preventDefault(),
                                    (0,
                                    S.R8)(".ow-icon-ow-new-event-form-close", "button"))
                                }, 100)) : (t.preventDefault(),
                                (0,
                                S.R8)(".ow-icon-ow-new-event-form-close", "button")) : t.key === T.BY.ENTERKEY && (e.handleRemoveAttendee(n),
                                (0,
                                S.kW)(".ow-calendaar-EventEditor-addAttendee .ow-combox-input"))
                            }
                        }))
                    }))))))), this.state.displayConfirm && r.createElement(E.Z, {
                        show: !0,
                        buttonConfig: ["yes", "no"],
                        title: (0,
                        O.t)("common.MESSAGE"),
                        message: (0,
                        O.t)("app.message.CONFIRM_CANCEL_EDIT"),
                        onYes: this.handleSave,
                        onNo: this.handleCancel,
                        onDismiss: this.hideConfirm
                    }), this.state.openContactPicker && r.createElement(v.Z, {
                        className: "ow-calendar-EventEditor-picker",
                        onSelect: this.handlePickerSelect,
                        onCancel: this.handlePickerCancel,
                        enableMultiSelect: !0
                    }))
                }
            }]),
            n
        }();
        x.defaultProps = {
            event: void 0,
            eventRecurenceValue: void 0,
            reminderOptions: [],
            calendars: [],
            colors: [],
            categories: [],
            organizer: {},
            show: !1,
            user: void 0,
            invited: !1,
            readOnly: !1,
            attendeeStatus: "",
            appPending: !1,
            onSave: function() {},
            onDelete: function() {},
            onCancel: function() {},
            updateRSVP: function() {},
            onFormChange: function() {},
            onPendingCancel: function() {},
            onPendingOver: function() {},
            onToast: function() {}
        },
        x.propTypes = {
            event: u().shape({
                summary: u().string,
                startTime: u().string,
                endTime: u().string,
                allDay: u().bool
            }),
            eventRecurenceValue: u().string,
            reminderOptions: u().arrayOf(u().object),
            calendars: u().arrayOf(u().object),
            colors: u().arrayOf(u().string),
            categories: u().arrayOf(u().object),
            organizer: u().arrayOf(u().object),
            show: u().bool,
            user: u().arrayOf(u().object),
            invited: u().bool,
            readOnly: u().bool,
            attendeeStatus: u().string,
            appPending: u().bool,
            onSave: u().func,
            onDelete: u().func,
            onCancel: u().func,
            updateRSVP: u().func,
            onFormChange: u().func,
            onPendingCancel: u().func,
            onPendingOver: u().func,
            onToast: u().func
        }
    },
    54686: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return h
            }
        });
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(32081);
        function c(e) {
            "@babel/helpers - typeof";
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, s(r.key), r)
            }
        }
        function s(e) {
            var t = function(e, t) {
                if ("object" !== c(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== c(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === c(t) ? t : String(t)
        }
        function u(e, t) {
            return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
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
                var n, r = m(e);
                if (t) {
                    var a = m(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === c(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return f(e)
                }(this, n)
            }
        }
        function f(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function m(e) {
            return (m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var h = function(e) {
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
                t && u(e, t)
            }(n, r.Component);
            var t = d(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).handleMouseDown = r.handleMouseDown.bind(f(r)),
                r.handleMouseEnter = r.handleMouseEnter.bind(f(r)),
                r.handleMouseMove = r.handleMouseMove.bind(f(r)),
                r
            }
            return function(e, t, n) {
                t && l(e.prototype, t),
                n && l(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleMouseDown",
                value: function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    this.props.onSelect(this.props.option, e)
                }
            }, {
                key: "handleMouseEnter",
                value: function(e) {
                    this.props.onFocus(this.props.option, e)
                }
            }, {
                key: "handleMouseMove",
                value: function(e) {
                    this.props.isFocused || this.props.onFocus(this.props.option, e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.children
                      , a = this.props.option || {}
                      , o = a.iconName
                      , c = a.iconStyle
                      , l = void 0 === c ? {} : c
                      , s = a.title;
                    return r.createElement("div", {
                        className: "ow-iconSelectOption ".concat(t),
                        onMouseDown: this.handleMouseDown,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseMove: this.handleMouseMove,
                        title: s
                    }, o && r.createElement(i.Z, {
                        name: o,
                        style: l
                    }), n)
                }
            }]),
            n
        }();
        h.defaultProps = {
            isFocused: !1,
            className: "",
            children: "",
            option: {},
            isSelected: !1,
            onSelect: function() {},
            onFocus: function() {}
        },
        h.propTypes = {
            children: o().node,
            className: o().string,
            isFocused: o().bool,
            onFocus: o().func,
            onSelect: o().func,
            option: {
                title: o().string,
                iconStyle: o().string,
                iconName: o().string
            }
        }
    },
    49771: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return m
            }
        });
        var r = n(87401)
          , a = n(23398)
          , o = n.n(a)
          , i = n(32081);
        function c(e) {
            "@babel/helpers - typeof";
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, s(r.key), r)
            }
        }
        function s(e) {
            var t = function(e, t) {
                if ("object" !== c(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== c(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === c(t) ? t : String(t)
        }
        function u(e, t) {
            return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
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
                var n, r = f(e);
                if (t) {
                    var a = f(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === c(t) || "function" == typeof t))
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
        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var m = function(e) {
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
                t && u(e, t)
            }(n, r.PureComponent);
            var t = d(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && l(e.prototype, t),
                n && l(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e = this.props.value || {}
                      , t = e.title
                      , n = void 0 === t ? "" : t
                      , a = e.iconStyle
                      , o = void 0 === a ? {} : a
                      , c = e.iconName
                      , l = e.onlyIcon;
                    return r.createElement("div", {
                        className: "Select-value",
                        title: n,
                        "aria-label": n
                    }, r.createElement("span", {
                        className: "Select-value-label"
                    }, c && r.createElement(i.Z, {
                        name: c,
                        style: o
                    }), !l && this.props.children))
                }
            }]),
            n
        }();
        m.defaultProps = {
            children: "",
            value: {
                onlyIcon: !1
            }
        },
        m.propTypes = {
            children: o().node,
            value: {
                title: o().string,
                iconStyle: o().string,
                iconName: o().string,
                onlyIcon: o().bool
            }
        }
    },
    38881: function(e, t, n) {
        var r = n(16083)
          , a = n(14452)
          , o = n(85608)
          , i = n(22557)
          , c = n(61805)
          , l = n(45857)
          , s = n(79819)
          , u = n(27093)
          , d = n(83416)
          , f = n(84987)
          , m = n(4446)
          , h = n(76634)
          , p = n(63482);
        function v(e) {
            "@babel/helpers - typeof";
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function E(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? E(Object(n), !0).forEach(function(t) {
                    b(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function b(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== v(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== v(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === v(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        t.Z = (0,
        r.$j)(function(e) {
            var t = (0,
            c.l6)(e);
            if (!t)
                return {
                    show: !1
                };
            var n = (0,
            d.Z)("calendar.reminder.options").map(function(e, t) {
                return {
                    value: e,
                    label: (0,
                    f.t)("calendar.editorView.reminder.options")[t]
                }
            })
              , r = (0,
            d.Z)("calendar.CATEGORY_OPTIONS").map(function(e) {
                return {
                    label: (0,
                    f.t)("calendar.editorView.".concat(e.toUpperCase())),
                    value: e.toUpperCase(),
                    iconName: "calendar-".concat(e.toLowerCase())
                }
            })
              , a = (0,
            d.Z)("calendar.calendarColors").map(function(e) {
                return "#".concat(e)
            })
              , o = (0,
            h.tK)(t.recurrence, window.TimeUtil.parseInTimezoneForRui(t.startTime)).value
              , i = y({}, (0,
            c.ah)(e))
              , u = (0,
            c.jW)(e)
              , v = (0,
            l.hL)(e)
              , E = t.xproperties && !!t.xproperties["X-EVENT-ID"]
              , b = t.attendees && t.attendees.find(function(e) {
                return e.address === v.email
            })
              , w = E && b && b.status
              , g = (0,
            c.d2)(t.calendarId)(e)
              , O = g && g.readOnly
              , S = (0,
            s.J)(e)
              , N = (0,
            c.vW)(e)
              , T = (0,
            p.jm)(e)
              , C = (0,
            c._)(e)
              , D = !1;
            return (0,
            m.nIE)() && C && C && C.open && (t.eventErrorId = C.id,
            D = !0),
            {
                show: !0,
                readOnly: O,
                event: y(y(y({}, i), t), {}, {
                    recurrence: y(y({}, i.recurrence), t.recurrence)
                }),
                invited: E,
                attendeeStatus: w,
                colors: a,
                isSaving: N,
                calendars: O ? (0,
                c.Si)(e) : (0,
                c.oZ)(e),
                getRegularRecurrence: h.w8,
                eventRecurenceValue: o,
                reminderOptions: n,
                categories: r,
                confirmDisplayed: u,
                user: v,
                appPending: S,
                is24Hours: T,
                errorModal: D,
                errorData: C
            }
        }, function(e) {
            return {
                onToast: function(t) {
                    e((0,
                    i.oh)(t))
                },
                onSave: function(t, n, r) {
                    e((0,
                    o.ry)(t, n, r))
                },
                onDelete: function(t, n) {
                    e((0,
                    o.Bt)(t, n))
                },
                onCancel: function(t) {
                    e((0,
                    o.uF)(t))
                },
                updateRSVP: function(t, n, r) {
                    e((0,
                    o.I_)(t, n, r))
                },
                onFormChange: function(t) {
                    e((0,
                    u.appSetFormDirty)(t))
                },
                onPendingOver: function() {
                    e((0,
                    u.appSetFormDirty)(!1)),
                    e((0,
                    u.appSetPendingOver)(!1))
                },
                onPendingCancel: function() {
                    e((0,
                    u.appSetPendingCancel)())
                }
            }
        })(a.Z)
    }
}]);
