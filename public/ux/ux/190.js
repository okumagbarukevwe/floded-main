/*! Synchronoss Messaging 2018 */
(self.webpackChunkkiwi = self.webpackChunkkiwi || []).push([[190], {
    50522: function(e, t, n) {
        "use strict";
        function r(e) {
            "@babel/helpers - typeof";
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function o(e) {
            var t, n, a = "";
            if ("string" == typeof e || "number" == typeof e)
                a += e;
            else if ("object" == r(e))
                if (Array.isArray(e))
                    for (t = 0; t < e.length; t++)
                        e[t] && (n = o(e[t])) && (a && (a += " "),
                        a += n);
                else
                    for (t in e)
                        e[t] && (a && (a += " "),
                        a += t);
            return a
        }
        function a() {
            for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) && (t = o(e)) && (r && (r += " "),
                r += t);
            return r
        }
        n.r(t),
        n.d(t, {
            clsx: function() {
                return a
            }
        }),
        t.default = a
    },
    61501: function(e, t, n) {
        var r, o;
        function a(e) {
            "@babel/helpers - typeof";
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        !function(i, l) {
            "object" == a(t) ? e.exports = l() : void 0 === (o = "function" == typeof (r = l) ? r.call(t, n, t, e) : r) || (e.exports = o)
        }(0, function() {
            "use strict";
            return function(e, t, n) {
                t.prototype.isBetween = function(e, t, r, o) {
                    var a = n(e)
                      , i = n(t)
                      , l = "(" === (o = o || "()")[0]
                      , s = ")" === o[1];
                    return (l ? this.isAfter(a, r) : !this.isBefore(a, r)) && (s ? this.isBefore(i, r) : !this.isAfter(i, r)) || (l ? this.isBefore(a, r) : !this.isAfter(a, r)) && (s ? this.isAfter(i, r) : !this.isBefore(i, r))
                }
            }
        })
    },
    33655: function(e, t, n) {
        var r, o;
        function a(e) {
            "@babel/helpers - typeof";
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        !function(i, l) {
            "object" == a(t) ? e.exports = l() : void 0 === (o = "function" == typeof (r = l) ? r.call(t, n, t, e) : r) || (e.exports = o)
        }(0, function() {
            "use strict";
            return function(e, t) {
                t.prototype.isSameOrAfter = function(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }
            }
        })
    },
    59362: function(e, t, n) {
        var r, o;
        function a(e) {
            "@babel/helpers - typeof";
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        !function(i, l) {
            "object" == a(t) ? e.exports = l() : void 0 === (o = "function" == typeof (r = l) ? r.call(t, n, t, e) : r) || (e.exports = o)
        }(0, function() {
            "use strict";
            return function(e, t) {
                t.prototype.isSameOrBefore = function(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }
            }
        })
    },
    83612: function(e, t, n) {
        var r, o;
        function a(e) {
            "@babel/helpers - typeof";
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        !function(i, l) {
            "object" == a(t) ? e.exports = l() : void 0 === (o = "function" == typeof (r = l) ? r.call(t, n, t, e) : r) || (e.exports = o)
        }(0, function() {
            "use strict";
            return function(e, t, n) {
                var r = function(e) {
                    return e && (e.indexOf ? e : e.s)
                }
                  , o = function(e, t, n, o, a) {
                    var i = e.name ? e : e.$locale()
                      , l = r(i[t])
                      , s = r(i[n])
                      , c = l || s.map(function(e) {
                        return e.slice(0, o)
                    });
                    if (!a)
                        return c;
                    var u = i.weekStart;
                    return c.map(function(e, t) {
                        return c[(t + (u || 0)) % 7]
                    })
                }
                  , a = function() {
                    return n.Ls[n.locale()]
                }
                  , i = function(e, t) {
                    return e.formats[t] || function(e) {
                        return e.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e, t, n) {
                            return t || n.slice(1)
                        })
                    }(e.formats[t.toUpperCase()])
                };
                t.prototype.localeData = function() {
                    return function() {
                        var e = this;
                        return {
                            months: function(t) {
                                return t ? t.format("MMMM") : o(e, "months")
                            },
                            monthsShort: function(t) {
                                return t ? t.format("MMM") : o(e, "monthsShort", "months", 3)
                            },
                            firstDayOfWeek: function() {
                                return e.$locale().weekStart || 0
                            },
                            weekdays: function(t) {
                                return t ? t.format("dddd") : o(e, "weekdays")
                            },
                            weekdaysMin: function(t) {
                                return t ? t.format("dd") : o(e, "weekdaysMin", "weekdays", 2)
                            },
                            weekdaysShort: function(t) {
                                return t ? t.format("ddd") : o(e, "weekdaysShort", "weekdays", 3)
                            },
                            longDateFormat: function(t) {
                                return i(e.$locale(), t)
                            },
                            meridiem: this.$locale().meridiem,
                            ordinal: this.$locale().ordinal
                        }
                    }
                    .bind(this)()
                }
                ,
                n.localeData = function() {
                    var e = a();
                    return {
                        firstDayOfWeek: function() {
                            return e.weekStart || 0
                        },
                        weekdays: function() {
                            return n.weekdays()
                        },
                        weekdaysShort: function() {
                            return n.weekdaysShort()
                        },
                        weekdaysMin: function() {
                            return n.weekdaysMin()
                        },
                        months: function() {
                            return n.months()
                        },
                        monthsShort: function() {
                            return n.monthsShort()
                        },
                        longDateFormat: function(t) {
                            return i(e, t)
                        },
                        meridiem: e.meridiem,
                        ordinal: e.ordinal
                    }
                }
                ,
                n.months = function() {
                    return o(a(), "months")
                }
                ,
                n.monthsShort = function() {
                    return o(a(), "monthsShort", "months", 3)
                }
                ,
                n.weekdays = function(e) {
                    return o(a(), "weekdays", null, null, e)
                }
                ,
                n.weekdaysShort = function(e) {
                    return o(a(), "weekdaysShort", "weekdays", 3, e)
                }
                ,
                n.weekdaysMin = function(e) {
                    return o(a(), "weekdaysMin", "weekdays", 2, e)
                }
            }
        })
    },
    48362: function(e, t, n) {
        var r, o;
        function a(e) {
            "@babel/helpers - typeof";
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        !function(i, l) {
            "object" == a(t) ? e.exports = l() : void 0 === (o = "function" == typeof (r = l) ? r.call(t, n, t, e) : r) || (e.exports = o)
        }(0, function() {
            "use strict";
            var e = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            };
            return function(t, n, r) {
                var o = n.prototype
                  , a = o.format;
                r.en.formats = e,
                o.format = function(t) {
                    void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
                    var n = this.$locale().formats
                      , r = function(t, n) {
                        return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t, r, o) {
                            var a = o && o.toUpperCase();
                            return r || n[o] || e[o] || n[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e, t, n) {
                                return t || n.slice(1)
                            })
                        })
                    }(t, void 0 === n ? {} : n);
                    return a.call(this, r)
                }
            }
        })
    },
    89684: function(e, t, n) {
        var r, o;
        function a(e) {
            "@babel/helpers - typeof";
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        !function(i, l) {
            "object" == a(t) ? e.exports = l() : void 0 === (o = "function" == typeof (r = l) ? r.call(t, n, t, e) : r) || (e.exports = o)
        }(0, function() {
            "use strict";
            return function(e, t, n) {
                var r = function(e, t) {
                    if (!t || !t.length || !t[0] || 1 === t.length && !t[0].length)
                        return null;
                    var n;
                    1 === t.length && t[0].length > 0 && (t = t[0]),
                    n = t[0];
                    for (var r = 1; r < t.length; r += 1)
                        t[r].isValid() && !t[r][e](n) || (n = t[r]);
                    return n
                };
                n.max = function() {
                    var e = [].slice.call(arguments, 0);
                    return r("isAfter", e)
                }
                ,
                n.min = function() {
                    var e = [].slice.call(arguments, 0);
                    return r("isBefore", e)
                }
            }
        })
    },
    63810: function(e, t, n) {
        var r, o;
        function a(e) {
            "@babel/helpers - typeof";
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        !function(i, l) {
            "object" == a(t) ? e.exports = l() : void 0 === (o = "function" == typeof (r = l) ? r.call(t, n, t, e) : r) || (e.exports = o)
        }(0, function() {
            "use strict";
            var e = "minute"
              , t = /[+-]\d\d(?::?\d\d)?/g
              , n = /([+-]|\d\d)/g;
            return function(r, o, a) {
                var i = o.prototype;
                a.utc = function(e) {
                    return new o({
                        date: e,
                        utc: !0,
                        args: arguments
                    })
                }
                ,
                i.utc = function(t) {
                    var n = a(this.toDate(), {
                        locale: this.$L,
                        utc: !0
                    });
                    return t ? n.add(this.utcOffset(), e) : n
                }
                ,
                i.local = function() {
                    return a(this.toDate(), {
                        locale: this.$L,
                        utc: !1
                    })
                }
                ;
                var l = i.parse;
                i.parse = function(e) {
                    e.utc && (this.$u = !0),
                    this.$utils().u(e.$offset) || (this.$offset = e.$offset),
                    l.call(this, e)
                }
                ;
                var s = i.init;
                i.init = function() {
                    if (this.$u) {
                        var e = this.$d;
                        this.$y = e.getUTCFullYear(),
                        this.$M = e.getUTCMonth(),
                        this.$D = e.getUTCDate(),
                        this.$W = e.getUTCDay(),
                        this.$H = e.getUTCHours(),
                        this.$m = e.getUTCMinutes(),
                        this.$s = e.getUTCSeconds(),
                        this.$ms = e.getUTCMilliseconds()
                    } else
                        s.call(this)
                }
                ;
                var c = i.utcOffset;
                i.utcOffset = function(r, o) {
                    var a = this.$utils().u;
                    if (a(r))
                        return this.$u ? 0 : a(this.$offset) ? c.call(this) : this.$offset;
                    if ("string" == typeof r && null === (r = function(e) {
                        void 0 === e && (e = "");
                        var r = e.match(t);
                        if (!r)
                            return null;
                        var o = ("" + r[0]).match(n) || ["-", 0, 0]
                          , a = o[0]
                          , i = 60 * +o[1] + +o[2];
                        return 0 === i ? 0 : "+" === a ? i : -i
                    }(r)))
                        return this;
                    var i = Math.abs(r) <= 16 ? 60 * r : r
                      , l = this;
                    if (o)
                        return l.$offset = i,
                        l.$u = 0 === r,
                        l;
                    if (0 !== r) {
                        var s = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                        (l = this.local().add(i + s, e)).$offset = i,
                        l.$x.$localOffset = s
                    } else
                        l = this.utc();
                    return l
                }
                ;
                var u = i.format;
                i.format = function(e) {
                    var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                    return u.call(this, t)
                }
                ,
                i.valueOf = function() {
                    var e = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                    return this.$d.valueOf() - 6e4 * e
                }
                ,
                i.isUTC = function() {
                    return !!this.$u
                }
                ,
                i.toISOString = function() {
                    return this.toDate().toISOString()
                }
                ,
                i.toString = function() {
                    return this.toDate().toUTCString()
                }
                ;
                var d = i.toDate;
                i.toDate = function(e) {
                    return "s" === e && this.$offset ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : d.call(this)
                }
                ;
                var f = i.diff;
                i.diff = function(e, t, n) {
                    if (e && this.$u === e.$u)
                        return f.call(this, e, t, n);
                    var r = this.local()
                      , o = a(e).local();
                    return f.call(r, o, t, n)
                }
            }
        })
    },
    79106: function(e, t, n) {
        "use strict";
        var r = n(87859);
        function o() {}
        function a() {}
        a.resetWarningCache = o,
        e.exports = function() {
            function e(e, t, n, o, a, i) {
                if (i !== r) {
                    var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw l.name = "Invariant Violation",
                    l
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: a,
                resetWarningCache: o
            };
            return n.PropTypes = n,
            n
        }
    },
    2834: function(e, t, n) {
        e.exports = n(79106)()
    },
    87859: function(e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    21415: function(e) {
        "use strict";
        var t = function() {};
        e.exports = t
    },
    65771: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t.default = function(e, t) {
            return n(e.querySelectorAll(t))
        }
        ;
        var n = Function.prototype.bind.call(Function.prototype.call, [].slice);
        e.exports = t.default
    },
    10206: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(17915);
        function o(e, t) {
            e.classList ? e.classList.add(t) : (0,
            r.Z)(e, t) || ("string" == typeof e.className ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
        }
    },
    21021: function(e, t, n) {
        "use strict";
        var r = n(14503)
          , o = !1
          , a = !1;
        try {
            var i = {
                get passive() {
                    return o = !0
                },
                get once() {
                    return a = o = !0
                }
            };
            r.Z && (window.addEventListener("test", i, i),
            window.removeEventListener("test", i, !0))
        } catch (e) {}
        t.ZP = function(e, t, n, r) {
            if (r && "boolean" != typeof r && !a) {
                var i = r.once
                  , l = r.capture
                  , s = n;
                !a && i && (s = n.__once || function e(r) {
                    this.removeEventListener(t, e, l),
                    n.call(this, r)
                }
                ,
                n.__once = s),
                e.addEventListener(t, s, o ? r : l)
            }
            e.addEventListener(t, n, r)
        }
    },
    64680: function(e, t, n) {
        "use strict";
        n.d(t, {
            W: function() {
                return c
            },
            a: function() {
                return s
            }
        });
        var r = n(14503)
          , o = (new Date).getTime();
        var a = "clearTimeout"
          , i = function(e) {
            var t = (new Date).getTime()
              , n = Math.max(0, 16 - (t - o))
              , r = setTimeout(e, n);
            return o = t,
            r
        }
          , l = function(e, t) {
            return e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
        };
        r.Z && ["", "webkit", "moz", "o", "ms"].some(function(e) {
            var t = l(e, "request");
            return t in window && (a = l(e, "cancel"),
            i = function(e) {
                return window[t](e)
            }
            ),
            !!i
        });
        var s = function(e) {
            "function" == typeof window[a] && window[a](e)
        }
          , c = i
    },
    14503: function(e, t) {
        "use strict";
        t.Z = !("undefined" == typeof window || !window.document || !window.document.createElement)
    },
    59706: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return o
            }
        });
        var r = n(38588);
        function o(e, t, n) {
            e.closest && !n && e.closest(t);
            var o = e;
            do {
                if ((0,
                r.Z)(o, t))
                    return o;
                o = o.parentElement
            } while (o && o !== n && o.nodeType === document.ELEMENT_NODE);
            return null
        }
    },
    16319: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return e.contains ? e.contains(t) : e.compareDocumentPosition ? e === t || !!(16 & e.compareDocumentPosition(t)) : void 0
        }
        n.r(t),
        n.d(t, {
            default: function() {
                return r
            }
        })
    },
    66356: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var r = n(17661)
          , o = n(31482)
          , a = /^ms-/;
        function i(e) {
            return (0,
            o.Z)(e).replace(a, "-ms-")
        }
        var l = n(21942);
        var s = function(e, t) {
            var n = ""
              , o = "";
            if ("string" == typeof t)
                return e.style.getPropertyValue(i(t)) || (0,
                r.Z)(e).getPropertyValue(i(t));
            Object.keys(t).forEach(function(r) {
                var a = t[r];
                a || 0 === a ? (0,
                l.Z)(r) ? o += r + "(" + a + ") " : n += i(r) + ": " + a + ";" : e.style.removeProperty(i(r))
            }),
            o && (n += "transform: " + o + ";"),
            e.style.cssText += ";" + n
        }
    },
    17661: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(24770);
        function o(e, t) {
            return (0,
            r.Z)(e).getComputedStyle(e, t)
        }
    },
    71730: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(12451);
        function o(e) {
            var t = "pageXOffset" === e ? "scrollLeft" : "scrollTop";
            return function(n, o) {
                var a = (0,
                r.Z)(n);
                if (void 0 === o)
                    return a ? a[e] : n[t];
                a ? a.scrollTo(a[e], o) : n[t] = o
            }
        }
    },
    17915: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    92721: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var r = n(12451)
          , o = n(38612);
        function a(e, t) {
            var n = (0,
            r.Z)(e);
            return n ? n.innerHeight : t ? e.clientHeight : (0,
            o.Z)(e).height
        }
    },
    31482: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = /([A-Z])/g;
        function o(e) {
            return e.replace(r, "-$1").toLowerCase()
        }
    },
    38093: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            activeElement: function() {
                return o
            },
            addClass: function() {
                return a.Z
            },
            addEventListener: function() {
                return i.ZP
            },
            animate: function() {
                return v
            },
            attribute: function() {
                return y
            },
            cancelAnimationFrame: function() {
                return h.a
            },
            childElements: function() {
                return b
            },
            childNodes: function() {
                return O
            },
            clear: function() {
                return g
            },
            closest: function() {
                return E.default
            },
            contains: function() {
                return w.default
            },
            default: function() {
                return ae
            },
            filter: function() {
                return C
            },
            getComputedStyle: function() {
                return D.Z
            },
            hasClass: function() {
                return k.Z
            },
            height: function() {
                return N.Z
            },
            insertAfter: function() {
                return P
            },
            isInput: function() {
                return _
            },
            isVisible: function() {
                return M
            },
            listen: function() {
                return u.default
            },
            matches: function() {
                return R.Z
            },
            nextUntil: function() {
                return I
            },
            offset: function() {
                return L.Z
            },
            offsetParent: function() {
                return j.Z
            },
            ownerDocument: function() {
                return r.Z
            },
            ownerWindow: function() {
                return Z.Z
            },
            parents: function() {
                return B
            },
            position: function() {
                return H.Z
            },
            prepend: function() {
                return F
            },
            querySelectorAll: function() {
                return T.Z
            },
            remove: function() {
                return U
            },
            removeClass: function() {
                return z.Z
            },
            removeEventListener: function() {
                return Y.Z
            },
            requestAnimationFrame: function() {
                return h.W
            },
            scrollLeft: function() {
                return V.Z
            },
            scrollParent: function() {
                return X
            },
            scrollTo: function() {
                return G
            },
            scrollTop: function() {
                return $.Z
            },
            scrollbarSize: function() {
                return W.Z
            },
            siblings: function() {
                return Q
            },
            style: function() {
                return l.Z
            },
            text: function() {
                return ne
            },
            toggleClass: function() {
                return re
            },
            transitionEnd: function() {
                return f
            },
            triggerEvent: function() {
                return d
            },
            width: function() {
                return oe.Z
            }
        });
        var r = n(51713);
        function o(e) {
            void 0 === e && (e = (0,
            r.Z)());
            try {
                var t = e.activeElement;
                return t && t.nodeName ? t : null
            } catch (t) {
                return e.body
            }
        }
        var a = n(10206)
          , i = n(21021)
          , l = n(66356)
          , s = n(31482)
          , c = n(21942)
          , u = n(18037);
        function d(e, t, n, r) {
            if (void 0 === n && (n = !1),
            void 0 === r && (r = !0),
            e) {
                var o = document.createEvent("HTMLEvents");
                o.initEvent(t, n, r),
                e.dispatchEvent(o)
            }
        }
        function f(e, t, n, r) {
            null == n && (n = function(e) {
                var t = (0,
                l.Z)(e, "transitionDuration") || ""
                  , n = -1 === t.indexOf("ms") ? 1e3 : 1;
                return parseFloat(t) * n
            }(e) || 0);
            var o = function(e, t, n) {
                void 0 === n && (n = 5);
                var r = !1
                  , o = setTimeout(function() {
                    r || d(e, "transitionend", !0)
                }, t + n)
                  , a = (0,
                u.default)(e, "transitionend", function() {
                    r = !0
                }, {
                    once: !0
                });
                return function() {
                    clearTimeout(o),
                    a()
                }
            }(e, n, r)
              , a = (0,
            u.default)(e, "transitionend", t);
            return function() {
                o(),
                a()
            }
        }
        var p = {
            transition: "",
            "transition-duration": "",
            "transition-delay": "",
            "transition-timing-function": ""
        };
        function m(e) {
            var t = e.node
              , n = e.properties
              , r = e.duration
              , o = void 0 === r ? 200 : r
              , a = e.easing
              , i = e.callback
              , u = []
              , d = {}
              , m = "";
            Object.keys(n).forEach(function(e) {
                var t = n[e];
                (0,
                c.Z)(e) ? m += e + "(" + t + ") " : (d[e] = t,
                u.push((0,
                s.Z)(e)))
            }),
            m && (d.transform = m,
            u.push("transform")),
            o > 0 && (d.transition = u.join(", "),
            d["transition-duration"] = o / 1e3 + "s",
            d["transition-delay"] = "0s",
            d["transition-timing-function"] = a || "linear");
            var v = f(t, function(e) {
                e.target === e.currentTarget && ((0,
                l.Z)(t, p),
                i && i.call(this, e))
            }, o);
            return t.clientLeft,
            (0,
            l.Z)(t, d),
            {
                cancel: function() {
                    v(),
                    (0,
                    l.Z)(t, p)
                }
            }
        }
        var v = function(e, t, n, r, o) {
            if (!("nodeType"in e))
                return m(e);
            if (!t)
                throw new Error("must include properties to animate");
            return "function" == typeof r && (o = r,
            r = ""),
            m({
                node: e,
                properties: t,
                duration: n,
                easing: r,
                callback: o
            })
        }
          , h = n(64680);
        function y(e, t, n) {
            if (e) {
                if (void 0 === n)
                    return e.getAttribute(t);
                n || "" === n ? e.setAttribute(t, String(n)) : e.removeAttribute(t)
            }
        }
        function b(e) {
            return e ? Array.from(e.children) : []
        }
        function g(e) {
            if (e) {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                return e
            }
            return null
        }
        var E = n(59706)
          , w = n(16319)
          , S = Function.prototype.bind.call(Function.prototype.call, [].slice);
        function O(e) {
            return e ? S(e.childNodes) : []
        }
        var T = n(89455);
        function C(e, t) {
            return function(n) {
                var r = n.currentTarget
                  , o = n.target;
                (0,
                T.Z)(r, e).some(function(e) {
                    return (0,
                    w.default)(e, o)
                }) && t.call(this, n)
            }
        }
        var D = n(17661)
          , k = n(17915)
          , N = n(92721);
        function P(e, t) {
            return e && t && t.parentNode ? (t.nextSibling ? t.parentNode.insertBefore(e, t.nextSibling) : t.parentNode.appendChild(e),
            e) : null
        }
        var x = /^(?:input|select|textarea|button)$/i;
        function _(e) {
            return !!e && x.test(e.nodeName)
        }
        function M(e) {
            return !!e && !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        var R = n(38588);
        function A(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = null);
            for (var r = []; e; e = e.nextElementSibling)
                if (e !== t) {
                    if (n && (0,
                    R.Z)(e, n))
                        break;
                    r.push(e)
                }
            return r
        }
        function I(e, t) {
            return A(e, e, t)
        }
        var L = n(38612)
          , j = n(50242)
          , Z = n(24770);
        function B(e) {
            return function(e, t) {
                var n = null
                  , r = [];
                for (n = e ? e[t] : null; n && 9 !== n.nodeType; )
                    r.push(n),
                    n = n[t] || null;
                return r
            }(e, "parentElement")
        }
        var H = n(22735);
        function F(e, t) {
            return e && t ? (t.firstElementChild ? t.insertBefore(e, t.firstElementChild) : t.appendChild(e),
            e) : null
        }
        function U(e) {
            return e && e.parentNode ? (e.parentNode.removeChild(e),
            e) : null
        }
        var z = n(57615)
          , Y = n(27080)
          , W = n(43814)
          , V = n(31670)
          , K = n(19715);
        function X(e, t) {
            var n = (0,
            l.Z)(e, "position")
              , r = "absolute" === n
              , o = e.ownerDocument;
            if ("fixed" === n)
                return o || document;
            for (; (e = e.parentNode) && !(0,
            K.Z)(e); ) {
                var a = r && "static" === (0,
                l.Z)(e, "position")
                  , i = ((0,
                l.Z)(e, "overflow") || "") + ((0,
                l.Z)(e, "overflow-y") || "") + (0,
                l.Z)(e, "overflow-x");
                if (!a && (/(auto|scroll)/.test(i) && (t || (0,
                N.Z)(e) < e.scrollHeight)))
                    return e
            }
            return o || document
        }
        var q = n(12451)
          , $ = n(13999);
        function G(e, t) {
            var n = (0,
            L.Z)(e)
              , r = {
                top: 0,
                left: 0
            };
            if (e) {
                var o = t || X(e)
                  , a = (0,
                q.Z)(o)
                  , i = (0,
                $.Z)(o)
                  , l = (0,
                N.Z)(o, !0);
                a || (r = (0,
                L.Z)(o));
                var s = (n = {
                    top: n.top - r.top,
                    left: n.left - r.left,
                    height: n.height,
                    width: n.width
                }).height
                  , c = n.top + (a ? 0 : i)
                  , u = c + s;
                i = i > c ? c : u > i + l ? u - l : i;
                var d = (0,
                h.W)(function() {
                    return (0,
                    $.Z)(o, i)
                });
                return function() {
                    return (0,
                    h.a)(d)
                }
            }
        }
        function Q(e) {
            return A(e && e.parentElement ? e.parentElement.firstElementChild : null, e)
        }
        var J = /&nbsp;/gi
          , ee = /\xA0/g
          , te = /\s+([^\s])/gm;
        function ne(e, t, n) {
            void 0 === t && (t = !0),
            void 0 === n && (n = !0);
            var r = "";
            return e && (r = (e.textContent || "").replace(J, " ").replace(ee, " "),
            t && (r = r.trim()),
            n && (r = r.replace(te, " $1"))),
            r
        }
        function re(e, t) {
            e.classList ? e.classList.toggle(t) : (0,
            k.Z)(e, t) ? (0,
            z.Z)(e, t) : (0,
            a.Z)(e, t)
        }
        var oe = n(71728)
          , ae = {
            addEventListener: i.ZP,
            removeEventListener: Y.Z,
            triggerEvent: d,
            animate: v,
            filter: C,
            listen: u.default,
            style: l.Z,
            getComputedStyle: D.Z,
            attribute: y,
            activeElement: o,
            ownerDocument: r.Z,
            ownerWindow: Z.Z,
            requestAnimationFrame: h.W,
            cancelAnimationFrame: h.a,
            matches: R.Z,
            height: N.Z,
            width: oe.Z,
            offset: L.Z,
            offsetParent: j.Z,
            position: H.Z,
            contains: w.default,
            scrollbarSize: W.Z,
            scrollLeft: V.Z,
            scrollParent: X,
            scrollTo: G,
            scrollTop: $.Z,
            querySelectorAll: T.Z,
            closest: E.default,
            addClass: a.Z,
            removeClass: z.Z,
            hasClass: k.Z,
            toggleClass: re,
            transitionEnd: f,
            childNodes: O,
            childElements: b,
            nextUntil: I,
            parents: B,
            siblings: Q,
            clear: g,
            insertAfter: P,
            isInput: _,
            isVisible: M,
            prepend: F,
            remove: U,
            text: ne
        }
    },
    19715: function(e, t, n) {
        "use strict";
        function r(e) {
            return "nodeType"in e && e.nodeType === document.DOCUMENT_NODE
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    21942: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
        function o(e) {
            return !(!e || !r.test(e))
        }
    },
    12451: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(19715);
        function o(e) {
            return "window"in e && e.window === e ? e : (0,
            r.Z)(e) && e.defaultView || !1
        }
    },
    18037: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(21021)
          , o = n(27080);
        t.default = function(e, t, n, a) {
            return (0,
            r.ZP)(e, t, n, a),
            function() {
                (0,
                o.Z)(e, t, n, a)
            }
        }
    },
    38588: function(e, t, n) {
        "use strict";
        var r;
        function o(e, t) {
            if (!r) {
                var n = document.body
                  , o = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
                r = function(e, t) {
                    return o.call(e, t)
                }
            }
            return r(e, t)
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    38612: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var r = n(16319)
          , o = n(51713)
          , a = n(31670)
          , i = n(13999);
        function l(e) {
            var t = (0,
            o.Z)(e)
              , n = {
                top: 0,
                left: 0,
                height: 0,
                width: 0
            }
              , l = t && t.documentElement;
            return l && (0,
            r.default)(l, e) ? (void 0 !== e.getBoundingClientRect && (n = e.getBoundingClientRect()),
            n = {
                top: n.top + (0,
                i.Z)(l) - (l.clientTop || 0),
                left: n.left + (0,
                a.Z)(l) - (l.clientLeft || 0),
                width: n.width,
                height: n.height
            }) : n
        }
    },
    50242: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(66356)
          , o = n(51713)
          , a = function(e) {
            return !!e && "offsetParent"in e
        };
        function i(e) {
            for (var t = (0,
            o.Z)(e), n = e && e.offsetParent; a(n) && "HTML" !== n.nodeName && "static" === (0,
            r.Z)(n, "position"); )
                n = n.offsetParent;
            return n || t.documentElement
        }
    },
    51713: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.ownerDocument || document
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    24770: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(51713);
        function o(e) {
            var t = (0,
            r.Z)(e);
            return t && t.defaultView || window
        }
    },
    22735: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return u
            }
        });
        var r = n(87462)
          , o = n(66356)
          , a = n(38612)
          , i = n(50242)
          , l = n(31670)
          , s = n(13999)
          , c = function(e) {
            return e.nodeName && e.nodeName.toLowerCase()
        };
        function u(e, t) {
            var n, u = {
                top: 0,
                left: 0
            };
            if ("fixed" === (0,
            o.Z)(e, "position"))
                n = e.getBoundingClientRect();
            else {
                var d = t || (0,
                i.Z)(e);
                n = (0,
                a.Z)(e),
                "html" !== c(d) && (u = (0,
                a.Z)(d));
                var f = String((0,
                o.Z)(d, "borderTopWidth") || 0);
                u.top += parseInt(f, 10) - (0,
                s.Z)(d) || 0;
                var p = String((0,
                o.Z)(d, "borderLeftWidth") || 0);
                u.left += parseInt(p, 10) - (0,
                l.Z)(d) || 0
            }
            var m = String((0,
            o.Z)(e, "marginTop") || 0)
              , v = String((0,
            o.Z)(e, "marginLeft") || 0);
            return (0,
            r.Z)({}, n, {
                top: n.top - u.top - (parseInt(m, 10) || 0),
                left: n.left - u.left - (parseInt(v, 10) || 0)
            })
        }
    },
    89455: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = Function.prototype.bind.call(Function.prototype.call, [].slice);
        function o(e, t) {
            return r(e.querySelectorAll(t))
        }
    },
    57615: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)","g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
        }
        function o(e, t) {
            e.classList ? e.classList.remove(t) : "string" == typeof e.className ? e.className = r(e.className, t) : e.setAttribute("class", r(e.className && e.className.baseVal || "", t))
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    27080: function(e, t) {
        "use strict";
        t.Z = function(e, t, n, r) {
            var o = r && "boolean" != typeof r ? r.capture : r;
            e.removeEventListener(t, n, o),
            n.__once && e.removeEventListener(t, n.__once, o)
        }
    },
    31670: function(e, t, n) {
        "use strict";
        var r = n(71730);
        t.Z = (0,
        r.Z)("pageXOffset")
    },
    13999: function(e, t, n) {
        "use strict";
        var r = n(71730);
        t.Z = (0,
        r.Z)("pageYOffset")
    },
    43814: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var r, o = n(14503);
        function a(e) {
            if ((!r && 0 !== r || e) && o.Z) {
                var t = document.createElement("div");
                t.style.position = "absolute",
                t.style.top = "-9999px",
                t.style.width = "50px",
                t.style.height = "50px",
                t.style.overflow = "scroll",
                document.body.appendChild(t),
                r = t.offsetWidth - t.clientWidth,
                document.body.removeChild(t)
            }
            return r
        }
    },
    71728: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var r = n(12451)
          , o = n(38612);
        function a(e, t) {
            var n = (0,
            r.Z)(e);
            return n ? n.innerWidth : t ? e.clientWidth : (0,
            o.Z)(e).width
        }
    },
    80850: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = r(n(42122))
          , a = r(n(70215))
          , i = r(n(56690))
          , l = r(n(89728))
          , s = r(n(61655))
          , c = r(n(26389))
          , u = r(n(87401))
          , d = r(n(50522))
          , f = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"]
          , p = function(e) {
            (0,
            s.default)(n, e);
            var t = (0,
            c.default)(n);
            function n() {
                return (0,
                i.default)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            l.default)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.style
                      , n = e.className
                      , r = e.event
                      , i = e.selected
                      , l = e.isAllDay
                      , s = e.onSelect
                      , c = e.onDoubleClick
                      , p = e.onKeyPress
                      , m = e.localizer
                      , v = e.continuesPrior
                      , h = e.continuesAfter
                      , y = e.accessors
                      , b = e.getters
                      , g = e.children
                      , E = e.components
                      , w = E.event
                      , S = E.eventWrapper
                      , O = e.slotStart
                      , T = e.slotEnd
                      , C = (0,
                    a.default)(e, f);
                    delete C.resizable;
                    var D = y.title(r)
                      , k = y.tooltip(r)
                      , N = y.end(r)
                      , P = y.start(r)
                      , x = y.allDay(r)
                      , _ = l || x || m.diff(P, m.ceil(N, "day"), "day") > 1
                      , M = b.eventProp(r, P, N, i)
                      , R = u.default.createElement("div", {
                        className: "rbc-event-content",
                        title: k || void 0
                    }, w ? u.default.createElement(w, {
                        event: r,
                        continuesPrior: v,
                        continuesAfter: h,
                        title: D,
                        isAllDay: x,
                        localizer: m,
                        slotStart: O,
                        slotEnd: T
                    }) : D);
                    return u.default.createElement(S, Object.assign({}, this.props, {
                        type: "date"
                    }), u.default.createElement("div", Object.assign({}, C, {
                        tabIndex: 0,
                        style: (0,
                        o.default)((0,
                        o.default)({}, M.style), t),
                        className: (0,
                        d.default)("rbc-event", n, M.className, {
                            "rbc-selected": i,
                            "rbc-event-allday": _,
                            "rbc-event-continues-prior": v,
                            "rbc-event-continues-after": h
                        }),
                        onClick: function(e) {
                            return s && s(r, e)
                        },
                        onDoubleClick: function(e) {
                            return c && c(r, e)
                        },
                        onKeyPress: function(e) {
                            return p && p(r, e)
                        }
                    }), "function" == typeof g ? g(R) : R))
                }
            }]),
            n
        }(u.default.Component);
        t.default = p
    },
    30567: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = r(n(42122))
          , a = r(n(56690))
          , i = r(n(89728))
          , l = r(n(61655))
          , s = r(n(26389))
          , c = r(n(50522))
          , u = r(n(87401))
          , d = r(n(64457))
          , f = function(e) {
            (0,
            l.default)(n, e);
            var t = (0,
            s.default)(n);
            function n() {
                return (0,
                a.default)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.default)(n, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.segments
                      , r = t.slotMetrics.slots
                      , o = t.className
                      , a = 1;
                    return u.default.createElement("div", {
                        className: (0,
                        c.default)(o, "rbc-row")
                    }, n.reduce(function(t, n, o) {
                        var i = n.event
                          , l = n.left
                          , s = n.right
                          , c = n.span
                          , u = "_lvl_" + o
                          , f = l - a
                          , p = d.default.renderEvent(e.props, i);
                        return f && t.push(d.default.renderSpan(r, f, "".concat(u, "_gap"))),
                        t.push(d.default.renderSpan(r, c, u, p)),
                        a = s + 1,
                        t
                    }, []))
                }
            }]),
            n
        }(u.default.Component);
        f.defaultProps = (0,
        o.default)({}, d.default.defaultProps);
        var p = f;
        t.default = p
    },
    64457: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = r(n(95435))
          , a = r(n(87401))
          , i = r(n(80850))
          , l = n(81016)
          , s = {
            propTypes: {
                slotMetrics: o.default.object.isRequired,
                selected: o.default.object,
                isAllDay: o.default.bool,
                accessors: o.default.object.isRequired,
                localizer: o.default.object.isRequired,
                components: o.default.object.isRequired,
                getters: o.default.object.isRequired,
                onSelect: o.default.func,
                onDoubleClick: o.default.func,
                onKeyPress: o.default.func
            },
            defaultProps: {
                segments: [],
                selected: {}
            },
            renderEvent: function(e, t) {
                var n = e.selected
                  , r = (e.isAllDay,
                e.accessors)
                  , o = e.getters
                  , s = e.onSelect
                  , c = e.onDoubleClick
                  , u = e.onKeyPress
                  , d = e.localizer
                  , f = e.slotMetrics
                  , p = e.components
                  , m = e.resizable
                  , v = f.continuesPrior(t)
                  , h = f.continuesAfter(t);
                return a.default.createElement(i.default, {
                    event: t,
                    getters: o,
                    localizer: d,
                    accessors: r,
                    components: p,
                    onSelect: s,
                    onDoubleClick: c,
                    onKeyPress: u,
                    continuesPrior: v,
                    continuesAfter: h,
                    slotStart: f.first,
                    slotEnd: f.last,
                    selected: (0,
                    l.isSelected)(t, n),
                    resizable: m
                })
            },
            renderSpan: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : " "
                  , o = Math.abs(t) / e * 100 + "%";
                return a.default.createElement("div", {
                    key: n,
                    className: "rbc-row-segment",
                    style: {
                        WebkitFlexBasis: o,
                        flexBasis: o,
                        maxWidth: o
                    }
                }, r)
            }
        };
        t.default = s
    },
    66789: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        t.getBoundsForNode = v,
        t.getEventNodeFromPoint = d,
        t.getShowMoreNodeFromPoint = f,
        t.isEvent = function(e, t) {
            return !!d(e, t)
        }
        ,
        t.isShowMore = function(e, t) {
            return !!f(e, t)
        }
        ,
        t.objectsCollide = m;
        var o = r(n(18698))
          , a = r(n(56690))
          , i = r(n(89728))
          , l = r(n(16319))
          , s = r(n(59706))
          , c = r(n(18037));
        function u(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
            return (0,
            c.default)(n, e, t, {
                passive: !1
            })
        }
        function d(e, t) {
            var n = t.clientX
              , r = t.clientY
              , o = document.elementFromPoint(n, r);
            return (0,
            s.default)(o, ".rbc-event", e)
        }
        function f(e, t) {
            var n = t.clientX
              , r = t.clientY
              , o = document.elementFromPoint(n, r);
            return (0,
            s.default)(o, ".rbc-show-more", e)
        }
        function p(e) {
            var t = e;
            return e.touches && e.touches.length && (t = e.touches[0]),
            {
                clientX: t.clientX,
                clientY: t.clientY,
                pageX: t.pageX,
                pageY: t.pageY
            }
        }
        function m(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , r = v(e)
              , o = r.top
              , a = r.left
              , i = r.right
              , l = void 0 === i ? a : i
              , s = r.bottom
              , c = void 0 === s ? o : s
              , u = v(t)
              , d = u.top
              , f = u.left
              , p = u.right
              , m = void 0 === p ? f : p
              , h = u.bottom;
            return !(c - n < d || o + n > (void 0 === h ? d : h) || l - n < f || a + n > m)
        }
        function v(e) {
            if (!e.getBoundingClientRect)
                return e;
            var t = e.getBoundingClientRect()
              , n = t.left + h("left")
              , r = t.top + h("top");
            return {
                top: r,
                left: n,
                right: (e.offsetWidth || 0) + n,
                bottom: (e.offsetHeight || 0) + r
            }
        }
        function h(e) {
            return "left" === e ? window.pageXOffset || document.body.scrollLeft || 0 : "top" === e ? window.pageYOffset || document.body.scrollTop || 0 : void 0
        }
        var y = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = n.global
                  , o = void 0 !== r && r
                  , i = n.longPressThreshold
                  , l = void 0 === i ? 250 : i
                  , s = n.validContainers
                  , c = void 0 === s ? [] : s;
                (0,
                a.default)(this, e),
                this.isDetached = !1,
                this.container = t,
                this.globalMouse = !t || o,
                this.longPressThreshold = l,
                this.validContainers = c,
                this._listeners = Object.create(null),
                this._handleInitialEvent = this._handleInitialEvent.bind(this),
                this._handleMoveEvent = this._handleMoveEvent.bind(this),
                this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this),
                this._keyListener = this._keyListener.bind(this),
                this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this),
                this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this),
                this._removeTouchMoveWindowListener = u("touchmove", function() {}, window),
                this._removeKeyDownListener = u("keydown", this._keyListener),
                this._removeKeyUpListener = u("keyup", this._keyListener),
                this._removeDropFromOutsideListener = u("drop", this._dropFromOutsideListener),
                this._removeDragOverFromOutsideListener = u("dragover", this._dragOverFromOutsideListener),
                this._addInitialEventListener()
            }
            return (0,
            i.default)(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this._listeners[e] || (this._listeners[e] = []);
                    return n.push(t),
                    {
                        remove: function() {
                            var e = n.indexOf(t);
                            -1 !== e && n.splice(e, 1)
                        }
                    }
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    var o;
                    return (this._listeners[e] || []).forEach(function(e) {
                        void 0 === o && (o = e.apply(void 0, n))
                    }),
                    o
                }
            }, {
                key: "teardown",
                value: function() {
                    this.isDetached = !0,
                    this._listeners = Object.create(null),
                    this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener(),
                    this._removeInitialEventListener && this._removeInitialEventListener(),
                    this._removeEndListener && this._removeEndListener(),
                    this._onEscListener && this._onEscListener(),
                    this._removeMoveListener && this._removeMoveListener(),
                    this._removeKeyUpListener && this._removeKeyUpListener(),
                    this._removeKeyDownListener && this._removeKeyDownListener(),
                    this._removeDropFromOutsideListener && this._removeDropFromOutsideListener(),
                    this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener()
                }
            }, {
                key: "isSelected",
                value: function(e) {
                    var t = this._selectRect;
                    return !(!t || !this.selecting) && m(t, v(e))
                }
            }, {
                key: "filter",
                value: function(e) {
                    return this._selectRect && this.selecting ? e.filter(this.isSelected, this) : []
                }
            }, {
                key: "_addLongPressListener",
                value: function(e, t) {
                    var n = this
                      , r = null
                      , o = null
                      , a = null
                      , i = function(t) {
                        r = setTimeout(function() {
                            s(),
                            e(t)
                        }, n.longPressThreshold),
                        o = u("touchmove", function() {
                            return s()
                        }),
                        a = u("touchend", function() {
                            return s()
                        })
                    }
                      , l = u("touchstart", i)
                      , s = function() {
                        r && clearTimeout(r),
                        o && o(),
                        a && a(),
                        r = null,
                        o = null,
                        a = null
                    };
                    return t && i(t),
                    function() {
                        s(),
                        l()
                    }
                }
            }, {
                key: "_addInitialEventListener",
                value: function() {
                    var e = this
                      , t = u("mousedown", function(t) {
                        e._removeInitialEventListener(),
                        e._handleInitialEvent(t),
                        e._removeInitialEventListener = u("mousedown", e._handleInitialEvent)
                    })
                      , n = u("touchstart", function(t) {
                        e._removeInitialEventListener(),
                        e._removeInitialEventListener = e._addLongPressListener(e._handleInitialEvent, t)
                    });
                    this._removeInitialEventListener = function() {
                        t(),
                        n()
                    }
                }
            }, {
                key: "_dropFromOutsideListener",
                value: function(e) {
                    var t = p(e)
                      , n = t.pageX
                      , r = t.pageY
                      , o = t.clientX
                      , a = t.clientY;
                    this.emit("dropFromOutside", {
                        x: n,
                        y: r,
                        clientX: o,
                        clientY: a
                    }),
                    e.preventDefault()
                }
            }, {
                key: "_dragOverFromOutsideListener",
                value: function(e) {
                    var t = p(e)
                      , n = t.pageX
                      , r = t.pageY
                      , o = t.clientX
                      , a = t.clientY;
                    this.emit("dragOverFromOutside", {
                        x: n,
                        y: r,
                        clientX: o,
                        clientY: a
                    }),
                    e.preventDefault()
                }
            }, {
                key: "_handleInitialEvent",
                value: function(e) {
                    if (!this.isDetached) {
                        var t, n = p(e), r = n.clientX, a = n.clientY, i = n.pageX, s = n.pageY, c = this.container();
                        if (3 !== e.which && 2 !== e.button && function(e, t, n) {
                            return !e || (0,
                            l.default)(e, document.elementFromPoint(t, n))
                        }(c, r, a)) {
                            if (!this.globalMouse && c && !(0,
                            l.default)(c, e.target)) {
                                var d = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                    "object" !== (0,
                                    o.default)(e) && (e = {
                                        top: e,
                                        left: e,
                                        right: e,
                                        bottom: e
                                    });
                                    return e
                                }(0)
                                  , f = d.top
                                  , h = d.left
                                  , y = d.bottom
                                  , b = d.right;
                                if (!m({
                                    top: (t = v(c)).top - f,
                                    left: t.left - h,
                                    bottom: t.bottom + y,
                                    right: t.right + b
                                }, {
                                    top: s,
                                    left: i
                                }))
                                    return
                            }
                            if (!1 !== this.emit("beforeSelect", this._initialEventData = {
                                isTouch: /^touch/.test(e.type),
                                x: i,
                                y: s,
                                clientX: r,
                                clientY: a
                            }))
                                switch (e.type) {
                                case "mousedown":
                                    this._removeEndListener = u("mouseup", this._handleTerminatingEvent),
                                    this._onEscListener = u("keydown", this._handleTerminatingEvent),
                                    this._removeMoveListener = u("mousemove", this._handleMoveEvent);
                                    break;
                                case "touchstart":
                                    this._handleMoveEvent(e),
                                    this._removeEndListener = u("touchend", this._handleTerminatingEvent),
                                    this._removeMoveListener = u("touchmove", this._handleMoveEvent)
                                }
                        }
                    }
                }
            }, {
                key: "_isWithinValidContainer",
                value: function(e) {
                    var t = e.target
                      , n = this.validContainers;
                    return !(n && n.length && t) || n.some(function(e) {
                        return !!t.closest(e)
                    })
                }
            }, {
                key: "_handleTerminatingEvent",
                value: function(e) {
                    var t = p(e)
                      , n = t.pageX
                      , r = t.pageY;
                    if (this.selecting = !1,
                    this._removeEndListener && this._removeEndListener(),
                    this._removeMoveListener && this._removeMoveListener(),
                    this._initialEventData) {
                        var o = !this.container || (0,
                        l.default)(this.container(), e.target)
                          , a = this._isWithinValidContainer(e)
                          , i = this._selectRect
                          , s = this.isClick(n, r);
                        return this._initialEventData = null,
                        "Escape" !== e.key && a ? s && o ? this._handleClickEvent(e) : s ? this.emit("reset") : this.emit("select", i) : this.emit("reset")
                    }
                }
            }, {
                key: "_handleClickEvent",
                value: function(e) {
                    var t = p(e)
                      , n = t.pageX
                      , r = t.pageY
                      , o = t.clientX
                      , a = t.clientY
                      , i = (new Date).getTime();
                    return this._lastClickData && i - this._lastClickData.timestamp < 250 ? (this._lastClickData = null,
                    this.emit("doubleClick", {
                        x: n,
                        y: r,
                        clientX: o,
                        clientY: a
                    })) : (this._lastClickData = {
                        timestamp: i
                    },
                    this.emit("click", {
                        x: n,
                        y: r,
                        clientX: o,
                        clientY: a
                    }))
                }
            }, {
                key: "_handleMoveEvent",
                value: function(e) {
                    if (null !== this._initialEventData && !this.isDetached) {
                        var t = this._initialEventData
                          , n = t.x
                          , r = t.y
                          , o = p(e)
                          , a = o.pageX
                          , i = o.pageY
                          , l = Math.abs(n - a)
                          , s = Math.abs(r - i)
                          , c = Math.min(a, n)
                          , u = Math.min(i, r)
                          , d = this.selecting;
                        (!this.isClick(a, i) || d || l || s) && (this.selecting = !0,
                        this._selectRect = {
                            top: u,
                            left: c,
                            x: a,
                            y: i,
                            right: c + l,
                            bottom: u + s
                        },
                        d || this.emit("selectStart", this._initialEventData),
                        this.isClick(a, i) || this.emit("selecting", this._selectRect),
                        e.preventDefault())
                    }
                }
            }, {
                key: "_keyListener",
                value: function(e) {
                    this.ctrl = e.metaKey || e.ctrlKey
                }
            }, {
                key: "isClick",
                value: function(e, t) {
                    var n = this._initialEventData
                      , r = n.x
                      , o = n.y;
                    return !n.isTouch && Math.abs(e - r) <= 5 && Math.abs(t - o) <= 5
                }
            }]),
            e
        }();
        t.default = y
    },
    95741: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = r(n(38416))
          , a = r(n(42122))
          , i = r(n(50522))
          , l = r(n(87401));
        function s(e) {
            return "string" == typeof e ? e : e + "%"
        }
        var c = function(e) {
            var t = e.style
              , n = e.className
              , r = e.event
              , c = e.accessors
              , u = e.rtl
              , d = e.selected
              , f = e.label
              , p = e.continuesPrior
              , m = e.continuesAfter
              , v = e.getters
              , h = e.onClick
              , y = e.onDoubleClick
              , b = e.isBackgroundEvent
              , g = e.onKeyPress
              , E = e.components
              , w = E.event
              , S = E.eventWrapper
              , O = c.title(r)
              , T = c.tooltip(r)
              , C = c.end(r)
              , D = c.start(r)
              , k = v.eventProp(r, D, C, d)
              , N = t.height
              , P = t.top
              , x = t.width
              , _ = t.xOffset
              , M = [l.default.createElement("div", {
                key: "1",
                className: "rbc-event-label"
            }, f), l.default.createElement("div", {
                key: "2",
                className: "rbc-event-content"
            }, w ? l.default.createElement(w, {
                event: r,
                title: O
            }) : O)]
              , R = b ? (0,
            a.default)((0,
            a.default)({}, k.style), {}, (0,
            o.default)({
                top: s(P),
                height: s(N),
                width: "calc(".concat(x, " + 10px)")
            }, u ? "right" : "left", s(Math.max(0, _)))) : (0,
            a.default)((0,
            a.default)({}, k.style), {}, (0,
            o.default)({
                top: s(P),
                width: s(x),
                height: s(N)
            }, u ? "right" : "left", s(_)));
            return l.default.createElement(S, Object.assign({
                type: "time"
            }, e), l.default.createElement("div", {
                onClick: h,
                onDoubleClick: y,
                style: R,
                onKeyPress: g,
                title: T ? ("string" == typeof f ? f + ": " : "") + T : void 0,
                className: (0,
                i.default)(b ? "rbc-background-event" : "rbc-event", n, k.className, {
                    "rbc-selected": d,
                    "rbc-event-continues-earlier": p,
                    "rbc-event-continues-later": m
                })
            }, M))
        };
        t.default = c
    },
    36171: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.DnDContext = void 0;
        var o = r(n(87401)).default.createContext();
        t.DnDContext = o
    },
    1986: function(e, t, n) {
        "use strict";
        var r = n(75263).default
          , o = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var a = o(n(42122))
          , i = o(n(56690))
          , l = o(n(89728))
          , s = o(n(61655))
          , c = o(n(26389))
          , u = o(n(87401))
          , d = n(36171)
          , f = n(38093)
          , p = o(n(65771))
          , m = r(n(66789))
          , v = o(n(95741))
          , h = n(16586)
          , y = function(e) {
            (0,
            s.default)(n, e);
            var t = (0,
            c.default)(n);
            function n() {
                var e;
                (0,
                i.default)(this, n);
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                    o[a] = arguments[a];
                return (e = t.call.apply(t, [this].concat(o))).handleMove = function(t, n) {
                    if (!(0,
                    h.pointInColumn)(n, t))
                        return e.reset();
                    var r = e.context.draggable.dragAndDropAction.event
                      , o = e.props
                      , a = o.accessors
                      , i = o.slotMetrics
                      , l = i.closestSlotFromPoint({
                        y: t.y - e.eventOffsetTop,
                        x: t.x
                    }, n)
                      , s = (0,
                    h.eventTimes)(r, a, e.props.localizer).duration
                      , c = e.props.localizer.add(l, s, "milliseconds");
                    e.update(r, i.getRange(l, c, !1, !0))
                }
                ,
                e.handleDropFromOutside = function(t, n) {
                    var r = e.props
                      , o = r.slotMetrics
                      , a = r.resource
                      , i = o.closestSlotFromPoint({
                        y: t.y,
                        x: t.x
                    }, n);
                    e.context.draggable.onDropFromOutside({
                        start: i,
                        end: o.nextSlot(i),
                        allDay: !1,
                        resource: a
                    })
                }
                ,
                e.updateParentScroll = function(e, t) {
                    setTimeout(function() {
                        var n = (0,
                        p.default)(t, ".rbc-addons-dnd-drag-preview")[0];
                        n && (n.offsetTop < e.scrollTop ? (0,
                        f.scrollTop)(e, Math.max(n.offsetTop, 0)) : n.offsetTop + n.offsetHeight > e.scrollTop + e.clientHeight && (0,
                        f.scrollTop)(e, Math.min(n.offsetTop - e.offsetHeight + n.offsetHeight, e.scrollHeight)))
                    })
                }
                ,
                e._selectable = function() {
                    var t = e.ref.current
                      , n = t.children[0]
                      , r = !1
                      , o = e._selector = new m.default(function() {
                        return t.closest(".rbc-time-view")
                    }
                    )
                      , a = (0,
                    f.scrollParent)(t);
                    o.on("beforeSelect", function(t) {
                        var r = e.context.draggable.dragAndDropAction;
                        if (!r.action)
                            return !1;
                        if ("resize" === r.action)
                            return (0,
                            h.pointInColumn)((0,
                            m.getBoundsForNode)(n), t);
                        var o = (0,
                        m.getEventNodeFromPoint)(n, t);
                        if (!o)
                            return !1;
                        e.eventOffsetTop = t.y - (0,
                        m.getBoundsForNode)(o).top
                    }),
                    o.on("selecting", function(t) {
                        var r = (0,
                        m.getBoundsForNode)(n)
                          , o = e.context.draggable.dragAndDropAction;
                        "move" === o.action && (e.updateParentScroll(a, n),
                        e.handleMove(t, r)),
                        "resize" === o.action && (e.updateParentScroll(a, n),
                        e.handleResize(t, r))
                    }),
                    o.on("dropFromOutside", function(t) {
                        if (e.context.draggable.onDropFromOutside) {
                            var r = (0,
                            m.getBoundsForNode)(n);
                            (0,
                            h.pointInColumn)(r, t) && e.handleDropFromOutside(t, r)
                        }
                    }),
                    o.on("dragOver", function(t) {
                        if (e.context.draggable.dragFromOutsideItem) {
                            var r = (0,
                            m.getBoundsForNode)(n);
                            e.handleDropFromOutside(t, r)
                        }
                    }),
                    o.on("selectStart", function() {
                        r = !0,
                        e.context.draggable.onStart()
                    }),
                    o.on("select", function(t) {
                        var o = (0,
                        m.getBoundsForNode)(n);
                        if (r = !1,
                        "resize" === e.context.draggable.dragAndDropAction.action)
                            e.handleInteractionEnd();
                        else {
                            if (!e.state.event || !(0,
                            h.pointInColumn)(o, t))
                                return;
                            e.handleInteractionEnd()
                        }
                    }),
                    o.on("click", function() {
                        r && e.reset(),
                        e.context.draggable.onEnd(null)
                    }),
                    o.on("reset", function() {
                        e.reset(),
                        e.context.draggable.onEnd(null)
                    })
                }
                ,
                e.handleInteractionEnd = function() {
                    var t = e.props.resource
                      , n = e.state.event;
                    e.reset(),
                    e.context.draggable.onEnd({
                        start: n.start,
                        end: n.end,
                        resourceId: t
                    })
                }
                ,
                e._teardownSelectable = function() {
                    e._selector && (e._selector.teardown(),
                    e._selector = null)
                }
                ,
                e.state = {},
                e.ref = u.default.createRef(),
                e
            }
            return (0,
            l.default)(n, [{
                key: "componentDidMount",
                value: function() {
                    this._selectable()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._teardownSelectable()
                }
            }, {
                key: "reset",
                value: function() {
                    this.state.event && this.setState({
                        event: null,
                        top: null,
                        height: null
                    })
                }
            }, {
                key: "update",
                value: function(e, t) {
                    var n = t.startDate
                      , r = t.endDate
                      , o = t.top
                      , i = t.height
                      , l = this.state.event;
                    l && n === l.start && r === l.end || this.setState({
                        top: o,
                        height: i,
                        event: (0,
                        a.default)((0,
                        a.default)({}, e), {}, {
                            start: n,
                            end: r
                        })
                    })
                }
            }, {
                key: "handleResize",
                value: function(e, t) {
                    var n, r = this.props, o = r.accessors, i = r.slotMetrics, l = r.localizer, s = this.context.draggable.dragAndDropAction, c = s.event, u = s.direction, d = i.closestSlotFromPoint(e, t), f = (0,
                    h.eventTimes)(c, o, l), p = f.start, m = f.end;
                    if ("UP" === u) {
                        var v = l.min(d, i.closestSlotFromDate(m, -1));
                        n = i.getRange(v, m),
                        n = (0,
                        a.default)((0,
                        a.default)({}, n), {}, {
                            endDate: m
                        })
                    } else if ("DOWN" === u) {
                        var y = l.max(d, i.closestSlotFromDate(p));
                        n = i.getRange(p, y),
                        n = (0,
                        a.default)((0,
                        a.default)({}, n), {}, {
                            startDate: p
                        })
                    }
                    this.update(c, n)
                }
            }, {
                key: "renderContent",
                value: function() {
                    var e = this.props
                      , t = e.children
                      , n = e.accessors
                      , r = e.components
                      , o = e.getters
                      , i = e.slotMetrics
                      , l = e.localizer
                      , s = this.state
                      , c = s.event
                      , d = s.top
                      , f = s.height;
                    if (!c)
                        return t;
                    var p, m = t.props.children, y = c.start, b = c.end, g = "eventTimeRangeFormat", E = i.startsBeforeDay(y), w = i.startsAfterDay(b);
                    return E ? g = "eventTimeRangeEndFormat" : w && (g = "eventTimeRangeStartFormat"),
                    p = E && w ? l.messages.allDay : l.format({
                        start: y,
                        end: b
                    }, g),
                    u.default.cloneElement(t, {
                        children: u.default.createElement(u.default.Fragment, null, m, c && u.default.createElement(v.default, {
                            event: c,
                            label: p,
                            className: "rbc-addons-dnd-drag-preview",
                            style: {
                                top: d,
                                height: f,
                                width: 100
                            },
                            getters: o,
                            components: r,
                            accessors: (0,
                            a.default)((0,
                            a.default)({}, n), h.dragAccessors),
                            continuesPrior: E,
                            continuesAfter: w
                        }))
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return u.default.createElement("div", {
                        ref: this.ref
                    }, this.renderContent())
                }
            }]),
            n
        }(u.default.Component);
        y.contextType = d.DnDContext;
        var b = y;
        t.default = b
    },
    56924: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = r(n(56690))
          , a = r(n(89728))
          , i = r(n(61655))
          , l = r(n(26389))
          , s = r(n(87401))
          , c = r(n(50522))
          , u = n(6517)
          , d = n(36171)
          , f = function(e) {
            (0,
            i.default)(n, e);
            var t = (0,
            l.default)(n);
            function n() {
                var e;
                (0,
                o.default)(this, n);
                for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
                    a[i] = arguments[i];
                return (e = t.call.apply(t, [this].concat(a))).handleResizeUp = function(t) {
                    0 === t.button && e.context.draggable.onBeginAction(e.props.event, "resize", "UP")
                }
                ,
                e.handleResizeDown = function(t) {
                    0 === t.button && e.context.draggable.onBeginAction(e.props.event, "resize", "DOWN")
                }
                ,
                e.handleResizeLeft = function(t) {
                    0 === t.button && e.context.draggable.onBeginAction(e.props.event, "resize", "LEFT")
                }
                ,
                e.handleResizeRight = function(t) {
                    0 === t.button && e.context.draggable.onBeginAction(e.props.event, "resize", "RIGHT")
                }
                ,
                e.handleStartDragging = function(t) {
                    var n;
                    0 === t.button && ((null === (n = t.target.getAttribute("class")) || void 0 === n ? void 0 : n.includes("rbc-addons-dnd-resize")) || (e.props.event.sourceResource = e.props.resource,
                    e.context.draggable.onBeginAction(e.props.event, "move")))
                }
                ,
                e
            }
            return (0,
            a.default)(n, [{
                key: "renderAnchor",
                value: function(e) {
                    var t = "Up" === e || "Down" === e ? "ns" : "ew";
                    return s.default.createElement("div", {
                        className: "rbc-addons-dnd-resize-".concat(t, "-anchor"),
                        onMouseDown: this["handleResize".concat(e)]
                    }, s.default.createElement("div", {
                        className: "rbc-addons-dnd-resize-".concat(t, "-icon")
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.event
                      , n = e.type
                      , r = e.continuesPrior
                      , o = e.continuesAfter
                      , a = e.resizable
                      , i = this.props.children;
                    if (t.__isPreview)
                        return s.default.cloneElement(i, {
                            className: (0,
                            c.default)(i.props.className, "rbc-addons-dnd-drag-preview")
                        });
                    var l = this.context.draggable
                      , d = l.draggableAccessor
                      , f = l.resizableAccessor
                      , p = !d || !!(0,
                    u.accessor)(t, d);
                    if (!p)
                        return i;
                    var m = a && (!f || !!(0,
                    u.accessor)(t, f));
                    if (m || p) {
                        var v = {
                            onMouseDown: this.handleStartDragging,
                            onTouchStart: this.handleStartDragging
                        };
                        if (m) {
                            var h = null
                              , y = null;
                            "date" === n ? (h = !r && this.renderAnchor("Left"),
                            y = !o && this.renderAnchor("Right")) : (h = !r && this.renderAnchor("Up"),
                            y = !o && this.renderAnchor("Down")),
                            v.children = s.default.createElement("div", {
                                className: "rbc-addons-dnd-resizable"
                            }, h, i.props.children, y)
                        }
                        l.dragAndDropAction.interacting && l.dragAndDropAction.event === t && (v.className = (0,
                        c.default)(i.props.className, "rbc-addons-dnd-dragged-event")),
                        i = s.default.cloneElement(i, v)
                    }
                    return i
                }
            }]),
            n
        }(s.default.Component);
        f.contextType = d.DnDContext;
        var p = f;
        t.default = p
    },
    80770: function(e, t, n) {
        "use strict";
        var r = n(75263).default
          , o = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var a = o(n(42122))
          , i = o(n(861))
          , l = o(n(56690))
          , s = o(n(89728))
          , c = o(n(61655))
          , u = o(n(26389))
          , d = o(n(87401))
          , f = o(n(30567))
          , p = r(n(66789))
          , m = n(41321)
          , v = n(81016)
          , h = n(16586)
          , y = n(36171)
          , b = function(e) {
            (0,
            c.default)(n, e);
            var t = (0,
            u.default)(n);
            function n() {
                var e;
                (0,
                l.default)(this, n);
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                    o[a] = arguments[a];
                return (e = t.call.apply(t, [this].concat(o))).handleMove = function(t, n, r) {
                    if (!(0,
                    v.pointInBox)(n, t))
                        return e.reset();
                    var o = e.context.draggable.dragAndDropAction.event || r
                      , a = e.props
                      , i = a.accessors
                      , l = a.slotMetrics
                      , s = a.rtl
                      , c = a.localizer
                      , u = (0,
                    v.getSlotAtX)(n, t.x, s, l.slots)
                      , d = l.getDateForSlot(u)
                      , f = (0,
                    h.eventTimes)(o, i, c)
                      , p = f.start
                      , m = f.duration;
                    p = c.merge(d, p);
                    var y = c.add(p, m, "milliseconds");
                    e.update(o, p, y)
                }
                ,
                e.handleDropFromOutside = function(t, n) {
                    if (e.context.draggable.onDropFromOutside) {
                        var r = e.props
                          , o = r.slotMetrics
                          , a = r.rtl
                          , i = r.localizer
                          , l = (0,
                        v.getSlotAtX)(n, t.x, a, o.slots)
                          , s = o.getDateForSlot(l);
                        e.context.draggable.onDropFromOutside({
                            start: s,
                            end: i.add(s, 1, "day"),
                            allDay: !1
                        })
                    }
                }
                ,
                e.handleDragOverFromOutside = function(t, n) {
                    e.context.draggable.dragFromOutsideItem && e.handleMove(t, n, e.context.draggable.dragFromOutsideItem())
                }
                ,
                e._selectable = function() {
                    var t = e.ref.current.closest(".rbc-month-row, .rbc-allday-cell")
                      , n = t.closest(".rbc-month-view, .rbc-time-view")
                      , r = t.classList.contains("rbc-month-row")
                      , o = e._selector = new p.default(function() {
                        return n
                    }
                    ,{
                        validContainers: (0,
                        i.default)(r ? [] : [".rbc-day-slot", ".rbc-allday-cell"])
                    });
                    o.on("beforeSelect", function(n) {
                        var r = e.props.isAllDay
                          , o = e.context.draggable.dragAndDropAction.action
                          , a = (0,
                        p.getBoundsForNode)(t)
                          , i = (0,
                        v.pointInBox)(a, n);
                        return "move" === o || "resize" === o && (!r || i)
                    }),
                    o.on("selecting", function(n) {
                        var r = (0,
                        p.getBoundsForNode)(t)
                          , o = e.context.draggable.dragAndDropAction;
                        "move" === o.action && e.handleMove(n, r),
                        "resize" === o.action && e.handleResize(n, r)
                    }),
                    o.on("selectStart", function() {
                        return e.context.draggable.onStart()
                    }),
                    o.on("select", function(n) {
                        var r = (0,
                        p.getBoundsForNode)(t);
                        e.state.segment && ((0,
                        v.pointInBox)(r, n) ? e.handleInteractionEnd() : e.reset())
                    }),
                    o.on("dropFromOutside", function(n) {
                        if (e.context.draggable.onDropFromOutside) {
                            var r = (0,
                            p.getBoundsForNode)(t);
                            (0,
                            v.pointInBox)(r, n) && e.handleDropFromOutside(n, r)
                        }
                    }),
                    o.on("dragOverFromOutside", function(n) {
                        if (e.context.draggable.dragFromOutsideItem) {
                            var r = (0,
                            p.getBoundsForNode)(t);
                            e.handleDragOverFromOutside(n, r)
                        }
                    }),
                    o.on("click", function() {
                        return e.context.draggable.onEnd(null)
                    }),
                    o.on("reset", function() {
                        e.reset(),
                        e.context.draggable.onEnd(null)
                    })
                }
                ,
                e.handleInteractionEnd = function() {
                    var t = e.props
                      , n = t.resourceId
                      , r = t.isAllDay
                      , o = e.state.segment.event;
                    e.reset(),
                    e.context.draggable.onEnd({
                        start: o.start,
                        end: o.end,
                        resourceId: n,
                        isAllDay: r
                    })
                }
                ,
                e._teardownSelectable = function() {
                    e._selector && (e._selector.teardown(),
                    e._selector = null)
                }
                ,
                e.state = {},
                e.ref = d.default.createRef(),
                e
            }
            return (0,
            s.default)(n, [{
                key: "componentDidMount",
                value: function() {
                    this._selectable()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._teardownSelectable()
                }
            }, {
                key: "reset",
                value: function() {
                    this.state.segment && this.setState({
                        segment: null
                    })
                }
            }, {
                key: "update",
                value: function(e, t, n) {
                    var r = (0,
                    m.eventSegments)((0,
                    a.default)((0,
                    a.default)({}, e), {}, {
                        end: n,
                        start: t,
                        __isPreview: !0
                    }), this.props.slotMetrics.range, h.dragAccessors, this.props.localizer)
                      , o = this.state.segment;
                    o && r.span === o.span && r.left === o.left && r.right === o.right || this.setState({
                        segment: r
                    })
                }
            }, {
                key: "handleResize",
                value: function(e, t) {
                    var n = this.context.draggable.dragAndDropAction
                      , r = n.event
                      , o = n.direction
                      , a = this.props
                      , i = a.accessors
                      , l = a.slotMetrics
                      , s = a.rtl
                      , c = a.localizer
                      , u = (0,
                    h.eventTimes)(r, i, c)
                      , d = u.start
                      , f = u.end
                      , p = (0,
                    v.getSlotAtX)(t, e.x, s, l.slots)
                      , m = l.getDateForSlot(p)
                      , y = (0,
                    v.pointInBox)(t, e);
                    if ("RIGHT" === o) {
                        if (y) {
                            if (l.last < d)
                                return this.reset();
                            f = c.eq(c.startOf(f, "day"), f) ? c.add(m, 1, "day") : m
                        } else {
                            if (!(c.inRange(d, l.first, l.last) || t.bottom < e.y && +l.first > +d))
                                return void this.setState({
                                    segment: null
                                });
                            f = c.add(l.last, 1, "milliseconds")
                        }
                        var b = i.end(r);
                        f = c.merge(f, b),
                        c.lt(f, d) && (f = b)
                    } else if ("LEFT" === o) {
                        if (y) {
                            if (l.first > f)
                                return this.reset();
                            d = m
                        } else {
                            if (!(c.inRange(f, l.first, l.last) || t.top > e.y && c.lt(l.last, f)))
                                return void this.reset();
                            d = c.add(l.first, -1, "milliseconds")
                        }
                        var g = i.start(r);
                        d = c.merge(d, g),
                        c.gt(d, f) && (d = g)
                    }
                    this.update(r, d, f)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.children
                      , n = e.accessors
                      , r = this.state.segment;
                    return d.default.createElement("div", {
                        ref: this.ref,
                        className: "rbc-addons-dnd-row-body"
                    }, t, r && d.default.createElement(f.default, Object.assign({}, this.props, {
                        selected: null,
                        className: "rbc-addons-dnd-drag-row",
                        segments: [r],
                        accessors: (0,
                        a.default)((0,
                        a.default)({}, n), h.dragAccessors)
                    })))
                }
            }]),
            n
        }(d.default.Component);
        b.contextType = y.DnDContext;
        var g = b;
        t.default = g
    },
    16586: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.dragAccessors = void 0,
        t.eventTimes = function(e, t, n) {
            var r = t.start(e)
              , o = t.end(e);
            n.eq(r, o, "minutes") && 0 === n.diff(r, o, "minutes") && (o = n.add(o, 1, "day"));
            var a = n.diff(r, o, "milliseconds");
            return {
                start: r,
                end: o,
                duration: a
            }
        }
        ,
        t.mergeComponents = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0
              , n = Object.keys(t)
              , r = (0,
            o.default)({}, e);
            return n.forEach(function(n) {
                r[n] = e[n] ? function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    var r = t.filter(Boolean).map(l.createFactory);
                    return function(e) {
                        var t = e.children
                          , n = (0,
                        a.default)(e, s);
                        return r.reduceRight(function(e, t) {
                            return t(n, e)
                        }, t)
                    }
                }(e[n], t[n]) : t[n]
            }),
            r
        }
        ,
        t.pointInColumn = function(e, t) {
            var n = e.left
              , r = e.right
              , o = e.top
              , a = t.x
              , i = t.y;
            return a < r + 10 && a > n && i > o
        }
        ;
        var o = r(n(42122))
          , a = r(n(70215))
          , i = n(6517)
          , l = n(87401)
          , s = ["children"]
          , c = {
            start: (0,
            i.wrapAccessor)(function(e) {
                return e.start
            }),
            end: (0,
            i.wrapAccessor)(function(e) {
                return e.end
            })
        };
        t.dragAccessors = c
    },
    15694: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        t.Z = void 0;
        var o = r(n(36710)).default;
        t.Z = o
    },
    36710: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = function(t) {
                (0,
                s.default)(r, t);
                var n = (0,
                c.default)(r);
                function r() {
                    var e;
                    (0,
                    i.default)(this, r);
                    for (var t = arguments.length, o = new Array(t), a = 0; a < t; a++)
                        o[a] = arguments[a];
                    (e = n.call.apply(n, [this].concat(o))).defaultOnDragOver = function(e) {
                        e.preventDefault()
                    }
                    ,
                    e.handleBeginAction = function(t, n, r) {
                        e.setState({
                            event: t,
                            action: n,
                            direction: r
                        });
                        var o = e.props.onDragStart;
                        o && o({
                            event: t,
                            action: n,
                            direction: r
                        })
                    }
                    ,
                    e.handleInteractionStart = function() {
                        !1 === e.state.interacting && e.setState({
                            interacting: !0
                        })
                    }
                    ,
                    e.handleInteractionEnd = function(t) {
                        var n = e.state
                          , r = n.action
                          , o = n.event;
                        if (r && (e.setState({
                            action: null,
                            event: null,
                            interacting: !1,
                            direction: null
                        }),
                        null != t)) {
                            t.event = o;
                            var a = e.props
                              , i = a.onEventDrop
                              , l = a.onEventResize;
                            "move" === r && i && i(t),
                            "resize" === r && l && l(t)
                        }
                    }
                    ;
                    var l = e.props.components;
                    return e.components = (0,
                    v.mergeComponents)(l, {
                        eventWrapper: f.default,
                        eventContainerWrapper: p.default,
                        weekWrapper: m.default
                    }),
                    e.state = {
                        interacting: !1
                    },
                    e
                }
                return (0,
                l.default)(r, [{
                    key: "getDnDContextValue",
                    value: function() {
                        return {
                            draggable: {
                                onStart: this.handleInteractionStart,
                                onEnd: this.handleInteractionEnd,
                                onBeginAction: this.handleBeginAction,
                                onDropFromOutside: this.props.onDropFromOutside,
                                dragFromOutsideItem: this.props.dragFromOutsideItem,
                                draggableAccessor: this.props.draggableAccessor,
                                resizableAccessor: this.props.resizableAccessor,
                                dragAndDropAction: this.state
                            }
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props
                          , n = t.selectable
                          , r = t.elementProps
                          , i = (0,
                        a.default)(t, y)
                          , l = this.state.interacting;
                        delete i.onEventDrop,
                        delete i.onEventResize,
                        i.selectable = !!n && "ignoreEvents";
                        var s = this.props.onDropFromOutside ? (0,
                        o.default)((0,
                        o.default)({}, r), {}, {
                            onDragOver: this.props.onDragOver || this.defaultOnDragOver
                        }) : r;
                        i.className = (0,
                        d.default)(i.className, "rbc-addons-dnd", !!l && "rbc-addons-dnd-is-dragging");
                        var c = this.getDnDContextValue();
                        return u.default.createElement(h.DnDContext.Provider, {
                            value: c
                        }, u.default.createElement(e, Object.assign({}, i, {
                            elementProps: s,
                            components: this.components
                        })))
                    }
                }]),
                r
            }(u.default.Component);
            return t.defaultProps = (0,
            o.default)((0,
            o.default)({}, e.defaultProps), {}, {
                draggableAccessor: null,
                resizableAccessor: null,
                resizable: !0
            }),
            t
        }
        ;
        var o = r(n(42122))
          , a = r(n(70215))
          , i = r(n(56690))
          , l = r(n(89728))
          , s = r(n(61655))
          , c = r(n(26389))
          , u = r(n(87401))
          , d = r(n(50522))
          , f = (n(19847),
        r(n(56924)))
          , p = r(n(1986))
          , m = r(n(80770))
          , v = n(16586)
          , h = n(36171)
          , y = ["selectable", "elementProps"]
    },
    6517: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.accessor = a,
        t.wrapAccessor = void 0;
        var o = r(n(18698));
        function a(e, t) {
            var n = null;
            return "function" == typeof t ? n = t(e) : "string" == typeof t && "object" === (0,
            o.default)(e) && null != e && t in e && (n = e[t]),
            n
        }
        t.wrapAccessor = function(e) {
            return function(t) {
                return a(t, e)
            }
        }
    },
    39235: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.views = t.navigate = void 0;
        t.navigate = {
            PREVIOUS: "PREV",
            NEXT: "NEXT",
            TODAY: "TODAY",
            DATE: "DATE"
        };
        t.views = {
            MONTH: "month",
            WEEK: "week",
            WORK_WEEK: "work_week",
            DAY: "day",
            AGENDA: "agenda"
        }
    },
    41321: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.endOfRange = a,
        t.eventLevels = function(e) {
            var t, n, r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0, a = [], l = [];
            for (t = 0; t < e.length; t++) {
                for (r = e[t],
                n = 0; n < a.length && i(r, a[n]); n++)
                    ;
                n >= o ? l.push(r) : (a[n] || (a[n] = [])).push(r)
            }
            for (t = 0; t < a.length; t++)
                a[t].sort(function(e, t) {
                    return e.left - t.left
                });
            return {
                levels: a,
                extra: l
            }
        }
        ,
        t.eventSegments = function(e, t, n, r) {
            var i = a({
                dateRange: t,
                localizer: r
            })
              , l = i.first
              , s = i.last
              , c = r.diff(l, s, "day")
              , u = r.max(r.startOf(n.start(e), "day"), l)
              , d = r.min(r.ceil(n.end(e), "day"), s)
              , f = (0,
            o.default)(t, function(e) {
                return r.isSameDate(e, u)
            })
              , p = r.diff(u, d, "day");
            return p = Math.min(p, c),
            p = Math.max(p - r.segmentOffset, 1),
            {
                event: e,
                span: p,
                left: f + 1,
                right: Math.max(f + p, 1)
            }
        }
        ,
        t.inRange = function(e, t, n, r, o) {
            var a = {
                start: r.start(e),
                end: r.end(e)
            }
              , i = {
                start: t,
                end: n
            };
            return o.inEventRange({
                event: a,
                range: i
            })
        }
        ,
        t.segsOverlap = i,
        t.sortEvents = function(e, t, n, r) {
            var o = {
                start: n.start(e),
                end: n.end(e),
                allDay: n.allDay(e)
            }
              , a = {
                start: n.start(t),
                end: n.end(t),
                allDay: n.allDay(t)
            };
            return r.sortEvents({
                evtA: o,
                evtB: a
            })
        }
        ;
        var o = r(n(86352));
        function a(e) {
            var t = e.dateRange
              , n = e.unit
              , r = void 0 === n ? "day" : n
              , o = e.localizer;
            return {
                first: t[0],
                last: o.add(t[t.length - 1], 1, r)
            }
        }
        function i(e, t) {
            return t.some(function(t) {
                return t.left <= e.right && t.right >= e.left
            })
        }
    },
    19847: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.views = t.dateRangeFormat = t.dateFormat = t.accessor = t.DayLayoutAlgorithmPropType = void 0;
        var o = r(n(95435))
          , a = n(39235)
          , i = Object.keys(a.views).map(function(e) {
            return a.views[e]
        })
          , l = o.default.oneOfType([o.default.string, o.default.func]);
        t.accessor = l;
        var s = o.default.any;
        t.dateFormat = s;
        var c = o.default.func;
        t.dateRangeFormat = c;
        var u = o.default.oneOfType([o.default.arrayOf(o.default.oneOf(i)), o.default.objectOf(function(e, t) {
            if (-1 !== i.indexOf(t) && "boolean" == typeof e[t])
                return null;
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
                r[a - 2] = arguments[a];
            return o.default.elementType.apply(o.default, [e, t].concat(r))
        })]);
        t.views = u;
        var d = o.default.oneOfType([o.default.oneOf(["overlap", "no-overlap"]), o.default.func]);
        t.DayLayoutAlgorithmPropType = d
    },
    81016: function(e, t, n) {
        "use strict";
        var r = n(64836).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.dateCellSelection = function(e, t, n, r, o) {
            var l = -1
              , s = -1
              , c = r - 1
              , u = a(t, r)
              , d = i(t, n.x, o, r)
              , f = t.top < n.y && t.bottom > n.y
              , p = t.top < e.y && t.bottom > e.y
              , m = e.y > t.bottom
              , v = t.top > e.y;
            n.top < t.top && n.bottom > t.bottom && (l = 0,
            s = c);
            f && (v ? (l = 0,
            s = d) : m && (l = d,
            s = c));
            p && (l = s = o ? c - Math.floor((e.x - t.left) / u) : Math.floor((e.x - t.left) / u),
            f ? d < l ? l = d : s = d : e.y < n.y ? s = c : l = 0);
            return {
                startIdx: l,
                endIdx: s
            }
        }
        ,
        t.getSlotAtX = i,
        t.isSelected = function(e, t) {
            return !(!e || null == t) && (0,
            o.default)(e, t)
        }
        ,
        t.pointInBox = function(e, t) {
            var n = t.x
              , r = t.y;
            return r >= e.top && r <= e.bottom && n >= e.left && n <= e.right
        }
        ,
        t.slotWidth = a;
        var o = r(n(27542));
        function a(e, t) {
            return (e.right - e.left) / t
        }
        function i(e, t, n, r) {
            var o = a(e, r);
            return n ? r - 1 - Math.floor((t - e.left) / o) : Math.floor((t - e.left) / o)
        }
    },
    3389: function(e, t, n) {
        "use strict";
        var r = n(22011);
        function o() {}
        function a() {}
        a.resetWarningCache = o,
        e.exports = function() {
            function e(e, t, n, o, a, i) {
                if (i !== r) {
                    var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw l.name = "Invariant Violation",
                    l
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: a,
                resetWarningCache: o
            };
            return n.PropTypes = n,
            n
        }
    },
    95435: function(e, t, n) {
        e.exports = n(3389)()
    },
    22011: function(e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    60613: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return Zu
            }
        });
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(16083)
          , l = n(55665)
          , s = n.n(l)
          , c = n(40757)
          , u = n(32022)
          , d = n.n(u)
          , f = n(12674)
          , p = n(1413)
          , m = n(45987)
          , v = n(71002)
          , h = n(15671)
          , y = n(43144)
          , b = n(60136)
          , g = n(61120);
        var E = n(82963);
        function w(e) {
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
                var n, r = (0,
                g.Z)(e);
                if (t) {
                    var o = (0,
                    g.Z)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                E.Z)(this, n)
            }
        }
        var S = n(29439)
          , O = n(10414)
          , T = n(50522)
          , C = n(95435)
          , D = n.n(C)
          , k = n(26888)
          , N = n.n(k)
          , P = "milliseconds"
          , x = "seconds"
          , _ = "minutes"
          , M = "hours"
          , R = "day"
          , A = "week"
          , I = "month"
          , L = "year"
          , j = "decade"
          , Z = "century"
          , B = {
            milliseconds: 1,
            seconds: 1e3,
            minutes: 6e4,
            hours: 36e5,
            day: 864e5,
            week: 6048e5
        }
          , H = {
            month: 1,
            year: 12,
            decade: 120,
            century: 1200
        };
        function F(e, t, n) {
            switch (e = new Date(e),
            n) {
            case P:
            case x:
            case _:
            case M:
            case R:
            case A:
                return function(e, t) {
                    var n = new Date(+e + t);
                    return function(e, t) {
                        var n = e.getTimezoneOffset()
                          , r = t.getTimezoneOffset();
                        return new Date(+t + (r - n) * B.minutes)
                    }(e, n)
                }(e, t * B[n]);
            case I:
            case L:
            case j:
            case Z:
                return function(e, t) {
                    var n = e.getFullYear()
                      , r = e.getMonth()
                      , o = e.getDate()
                      , a = 12 * n + r + t
                      , i = Math.trunc(a / 12)
                      , l = a % 12
                      , s = Math.min(o, function(e) {
                        return [31, function(e) {
                            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 29 : 28
                        }(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
                    }(i)[l])
                      , c = new Date(e);
                    return c.setFullYear(i),
                    c.setDate(1),
                    c.setMonth(l),
                    c.setDate(s),
                    c
                }(e, t * H[n])
            }
            throw new TypeError('Invalid units: "' + n + '"')
        }
        function U(e, t, n) {
            return F(e, -t, n)
        }
        function z(e, t, n) {
            switch (e = new Date(e),
            t) {
            case Z:
            case j:
            case L:
                e = ie(e, 0);
            case I:
                e = ae(e, 1);
            case A:
            case R:
                e = re(e, 0);
            case M:
                e = ne(e, 0);
            case _:
                e = te(e, 0);
            case x:
                e = ee(e, 0)
            }
            return t === j && (e = U(e, le(e) % 10, "year")),
            t === Z && (e = U(e, le(e) % 100, "year")),
            t === A && (e = function(e, t, n) {
                var r = (oe(e) + 7 - (n || 0)) % 7;
                return void 0 === t ? r : F(e, t - r, R)
            }(e, 0, n)),
            e
        }
        function Y(e, t, n) {
            switch (e = z(e = new Date(e), t, n),
            t) {
            case Z:
            case j:
            case L:
            case I:
            case A:
                (e = U(e = F(e, 1, t), 1, R)).setHours(23, 59, 59, 999);
                break;
            case R:
                e.setHours(23, 59, 59, 999);
                break;
            case M:
            case _:
            case x:
                e = U(e = F(e, 1, t), 1, P)
            }
            return e
        }
        var W = ce(function(e, t) {
            return e === t
        })
          , V = ce(function(e, t) {
            return e !== t
        })
          , K = ce(function(e, t) {
            return e > t
        })
          , X = ce(function(e, t) {
            return e >= t
        })
          , q = ce(function(e, t) {
            return e < t
        })
          , $ = ce(function(e, t) {
            return e <= t
        });
        function G() {
            return new Date(Math.min.apply(Math, arguments))
        }
        function Q() {
            return new Date(Math.max.apply(Math, arguments))
        }
        function J(e, t, n, r) {
            return r = r || "day",
            (!t || X(e, t, r)) && (!n || $(e, n, r))
        }
        var ee = se("Milliseconds")
          , te = se("Seconds")
          , ne = se("Minutes")
          , re = se("Hours")
          , oe = se("Day")
          , ae = se("Date")
          , ie = se("Month")
          , le = se("FullYear");
        function se(e) {
            var t = function(e) {
                switch (e) {
                case "Milliseconds":
                    return 36e5;
                case "Seconds":
                    return 3600;
                case "Minutes":
                    return 60;
                case "Hours":
                    return 1;
                default:
                    return null
                }
            }(e);
            return function(n, r) {
                if (void 0 === r)
                    return n["get" + e]();
                var o = new Date(n);
                return o["set" + e](r),
                t && o["get" + e]() != r && ("Hours" === e || r >= t && o.getHours() - n.getHours() < Math.floor(r / t)) && o["set" + e](r + t),
                o
            }
        }
        function ce(e) {
            return function(t, n, r) {
                return e(+z(t, r), +z(n, r))
            }
        }
        var ue = n(4942)
          , de = n(93433)
          , fe = n(92061)
          , pe = n(67189)
          , me = n(16633)
          , ve = 1 / 0
          , he = 1.7976931348623157e308;
        var ye = function(e) {
            return e ? (e = (0,
            me.Z)(e)) === ve || e === -ve ? (e < 0 ? -1 : 1) * he : e == e ? e : 0 : 0 === e ? e : 0
        };
        var be = function(e) {
            var t = ye(e)
              , n = t % 1;
            return t == t ? n ? t - n : t : 0
        }
          , ge = Math.ceil
          , Ee = Math.max;
        var we = function(e, t, n) {
            t = (n ? (0,
            pe.Z)(e, t, n) : void 0 === t) ? 1 : Ee(be(t), 0);
            var r = null == e ? 0 : e.length;
            if (!r || t < 1)
                return [];
            for (var o = 0, a = 0, i = Array(ge(r / t)); o < r; )
                i[a++] = (0,
                fe.Z)(e, o, o += t);
            return i
        }
          , Se = n(22735)
          , Oe = n(64680)
          , Te = n(87462)
          , Ce = n(63366)
          , De = n(2834)
          , ke = n.n(De);
        function Ne() {
            return (0,
            r.useState)(null)
        }
        var Pe = function(e) {
            return e && "function" != typeof e ? function(t) {
                e.current = t
            }
            : e
        };
        var xe = function(e, t) {
            return (0,
            r.useMemo)(function() {
                return function(e, t) {
                    var n = Pe(e)
                      , r = Pe(t);
                    return function(e) {
                        n && n(e),
                        r && r(e)
                    }
                }(e, t)
            }, [e, t])
        }
          , _e = "top"
          , Me = "bottom"
          , Re = "right"
          , Ae = "left"
          , Ie = "auto"
          , Le = [_e, Me, Re, Ae]
          , je = "start"
          , Ze = "end"
          , Be = "clippingParents"
          , He = "viewport"
          , Fe = "popper"
          , Ue = "reference"
          , ze = Le.reduce(function(e, t) {
            return e.concat([t + "-" + je, t + "-" + Ze])
        }, [])
          , Ye = [].concat(Le, [Ie]).reduce(function(e, t) {
            return e.concat([t, t + "-" + je, t + "-" + Ze])
        }, [])
          , We = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
        var Ve = function(e) {
            var t = function() {
                var e = (0,
                r.useRef)(!0)
                  , t = (0,
                r.useRef)(function() {
                    return e.current
                });
                return (0,
                r.useEffect)(function() {
                    return e.current = !0,
                    function() {
                        e.current = !1
                    }
                }, []),
                t.current
            }();
            return [e[0], (0,
            r.useCallback)(function(n) {
                if (t())
                    return e[1](n)
            }, [t, e[1]])]
        };
        function Ke(e) {
            return e.split("-")[0]
        }
        function Xe(e) {
            if (null == e)
                return window;
            if ("[object Window]" !== e.toString()) {
                var t = e.ownerDocument;
                return t && t.defaultView || window
            }
            return e
        }
        function qe(e) {
            return e instanceof Xe(e).Element || e instanceof Element
        }
        function $e(e) {
            return e instanceof Xe(e).HTMLElement || e instanceof HTMLElement
        }
        function Ge(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof Xe(e).ShadowRoot || e instanceof ShadowRoot)
        }
        var Qe = Math.max
          , Je = Math.min
          , et = Math.round;
        function tt() {
            var e = navigator.userAgentData;
            return null != e && e.brands ? e.brands.map(function(e) {
                return e.brand + "/" + e.version
            }).join(" ") : navigator.userAgent
        }
        function nt() {
            return !/^((?!chrome|android).)*safari/i.test(tt())
        }
        function rt(e, t, n) {
            void 0 === t && (t = !1),
            void 0 === n && (n = !1);
            var r = e.getBoundingClientRect()
              , o = 1
              , a = 1;
            t && $e(e) && (o = e.offsetWidth > 0 && et(r.width) / e.offsetWidth || 1,
            a = e.offsetHeight > 0 && et(r.height) / e.offsetHeight || 1);
            var i = (qe(e) ? Xe(e) : window).visualViewport
              , l = !nt() && n
              , s = (r.left + (l && i ? i.offsetLeft : 0)) / o
              , c = (r.top + (l && i ? i.offsetTop : 0)) / a
              , u = r.width / o
              , d = r.height / a;
            return {
                width: u,
                height: d,
                top: c,
                right: s + u,
                bottom: c + d,
                left: s,
                x: s,
                y: c
            }
        }
        function ot(e) {
            var t = rt(e)
              , n = e.offsetWidth
              , r = e.offsetHeight;
            return Math.abs(t.width - n) <= 1 && (n = t.width),
            Math.abs(t.height - r) <= 1 && (r = t.height),
            {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: n,
                height: r
            }
        }
        function at(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t))
                return !0;
            if (n && Ge(n)) {
                var r = t;
                do {
                    if (r && e.isSameNode(r))
                        return !0;
                    r = r.parentNode || r.host
                } while (r)
            }
            return !1
        }
        function it(e) {
            return e ? (e.nodeName || "").toLowerCase() : null
        }
        function lt(e) {
            return Xe(e).getComputedStyle(e)
        }
        function st(e) {
            return ["table", "td", "th"].indexOf(it(e)) >= 0
        }
        function ct(e) {
            return ((qe(e) ? e.ownerDocument : e.document) || window.document).documentElement
        }
        function ut(e) {
            return "html" === it(e) ? e : e.assignedSlot || e.parentNode || (Ge(e) ? e.host : null) || ct(e)
        }
        function dt(e) {
            return $e(e) && "fixed" !== lt(e).position ? e.offsetParent : null
        }
        function ft(e) {
            for (var t = Xe(e), n = dt(e); n && st(n) && "static" === lt(n).position; )
                n = dt(n);
            return n && ("html" === it(n) || "body" === it(n) && "static" === lt(n).position) ? t : n || function(e) {
                var t = /firefox/i.test(tt());
                if (/Trident/i.test(tt()) && $e(e) && "fixed" === lt(e).position)
                    return null;
                var n = ut(e);
                for (Ge(n) && (n = n.host); $e(n) && ["html", "body"].indexOf(it(n)) < 0; ) {
                    var r = lt(n);
                    if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter)
                        return n;
                    n = n.parentNode
                }
                return null
            }(e) || t
        }
        function pt(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
        }
        function mt(e, t, n) {
            return Qe(e, Je(t, n))
        }
        function vt(e) {
            return Object.assign({}, {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, e)
        }
        function ht(e, t) {
            return t.reduce(function(t, n) {
                return t[n] = e,
                t
            }, {})
        }
        var yt = function(e, t) {
            return vt("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                placement: t.placement
            })) : e) ? e : ht(e, Le))
        };
        function bt(e) {
            return e.split("-")[1]
        }
        var gt = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function Et(e) {
            var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = i.x, p = void 0 === f ? 0 : f, m = i.y, v = void 0 === m ? 0 : m, h = "function" == typeof u ? u({
                x: p,
                y: v
            }) : {
                x: p,
                y: v
            };
            p = h.x,
            v = h.y;
            var y = i.hasOwnProperty("x")
              , b = i.hasOwnProperty("y")
              , g = Ae
              , E = _e
              , w = window;
            if (c) {
                var S = ft(n)
                  , O = "clientHeight"
                  , T = "clientWidth";
                if (S === Xe(n) && "static" !== lt(S = ct(n)).position && "absolute" === l && (O = "scrollHeight",
                T = "scrollWidth"),
                S = S,
                o === _e || (o === Ae || o === Re) && a === Ze)
                    E = Me,
                    v -= (d && S === w && w.visualViewport ? w.visualViewport.height : S[O]) - r.height,
                    v *= s ? 1 : -1;
                if (o === Ae || (o === _e || o === Me) && a === Ze)
                    g = Re,
                    p -= (d && S === w && w.visualViewport ? w.visualViewport.width : S[T]) - r.width,
                    p *= s ? 1 : -1
            }
            var C, D = Object.assign({
                position: l
            }, c && gt), k = !0 === u ? function(e) {
                var t = e.x
                  , n = e.y
                  , r = window.devicePixelRatio || 1;
                return {
                    x: et(t * r) / r || 0,
                    y: et(n * r) / r || 0
                }
            }({
                x: p,
                y: v
            }) : {
                x: p,
                y: v
            };
            return p = k.x,
            v = k.y,
            s ? Object.assign({}, D, ((C = {})[E] = b ? "0" : "",
            C[g] = y ? "0" : "",
            C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)" : "translate3d(" + p + "px, " + v + "px, 0)",
            C)) : Object.assign({}, D, ((t = {})[E] = b ? v + "px" : "",
            t[g] = y ? p + "px" : "",
            t.transform = "",
            t))
        }
        var wt = {
            passive: !0
        };
        var St = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        function Ot(e) {
            return e.replace(/left|right|bottom|top/g, function(e) {
                return St[e]
            })
        }
        var Tt = {
            start: "end",
            end: "start"
        };
        function Ct(e) {
            return e.replace(/start|end/g, function(e) {
                return Tt[e]
            })
        }
        function Dt(e) {
            var t = Xe(e);
            return {
                scrollLeft: t.pageXOffset,
                scrollTop: t.pageYOffset
            }
        }
        function kt(e) {
            return rt(ct(e)).left + Dt(e).scrollLeft
        }
        function Nt(e) {
            var t = lt(e)
              , n = t.overflow
              , r = t.overflowX
              , o = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + o + r)
        }
        function Pt(e, t) {
            var n;
            void 0 === t && (t = []);
            var r = function e(t) {
                return ["html", "body", "#document"].indexOf(it(t)) >= 0 ? t.ownerDocument.body : $e(t) && Nt(t) ? t : e(ut(t))
            }(e)
              , o = r === (null == (n = e.ownerDocument) ? void 0 : n.body)
              , a = Xe(r)
              , i = o ? [a].concat(a.visualViewport || [], Nt(r) ? r : []) : r
              , l = t.concat(i);
            return o ? l : l.concat(Pt(ut(i)))
        }
        function xt(e) {
            return Object.assign({}, e, {
                left: e.x,
                top: e.y,
                right: e.x + e.width,
                bottom: e.y + e.height
            })
        }
        function _t(e, t, n) {
            return t === He ? xt(function(e, t) {
                var n = Xe(e)
                  , r = ct(e)
                  , o = n.visualViewport
                  , a = r.clientWidth
                  , i = r.clientHeight
                  , l = 0
                  , s = 0;
                if (o) {
                    a = o.width,
                    i = o.height;
                    var c = nt();
                    (c || !c && "fixed" === t) && (l = o.offsetLeft,
                    s = o.offsetTop)
                }
                return {
                    width: a,
                    height: i,
                    x: l + kt(e),
                    y: s
                }
            }(e, n)) : qe(t) ? function(e, t) {
                var n = rt(e, !1, "fixed" === t);
                return n.top = n.top + e.clientTop,
                n.left = n.left + e.clientLeft,
                n.bottom = n.top + e.clientHeight,
                n.right = n.left + e.clientWidth,
                n.width = e.clientWidth,
                n.height = e.clientHeight,
                n.x = n.left,
                n.y = n.top,
                n
            }(t, n) : xt(function(e) {
                var t, n = ct(e), r = Dt(e), o = null == (t = e.ownerDocument) ? void 0 : t.body, a = Qe(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Qe(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + kt(e), s = -r.scrollTop;
                return "rtl" === lt(o || n).direction && (l += Qe(n.clientWidth, o ? o.clientWidth : 0) - a),
                {
                    width: a,
                    height: i,
                    x: l,
                    y: s
                }
            }(ct(e)))
        }
        function Mt(e, t, n, r) {
            var o = "clippingParents" === t ? function(e) {
                var t = Pt(ut(e))
                  , n = ["absolute", "fixed"].indexOf(lt(e).position) >= 0 && $e(e) ? ft(e) : e;
                return qe(n) ? t.filter(function(e) {
                    return qe(e) && at(e, n) && "body" !== it(e)
                }) : []
            }(e) : [].concat(t)
              , a = [].concat(o, [n])
              , i = a[0]
              , l = a.reduce(function(t, n) {
                var o = _t(e, n, r);
                return t.top = Qe(o.top, t.top),
                t.right = Je(o.right, t.right),
                t.bottom = Je(o.bottom, t.bottom),
                t.left = Qe(o.left, t.left),
                t
            }, _t(e, i, r));
            return l.width = l.right - l.left,
            l.height = l.bottom - l.top,
            l.x = l.left,
            l.y = l.top,
            l
        }
        function Rt(e) {
            var t, n = e.reference, r = e.element, o = e.placement, a = o ? Ke(o) : null, i = o ? bt(o) : null, l = n.x + n.width / 2 - r.width / 2, s = n.y + n.height / 2 - r.height / 2;
            switch (a) {
            case _e:
                t = {
                    x: l,
                    y: n.y - r.height
                };
                break;
            case Me:
                t = {
                    x: l,
                    y: n.y + n.height
                };
                break;
            case Re:
                t = {
                    x: n.x + n.width,
                    y: s
                };
                break;
            case Ae:
                t = {
                    x: n.x - r.width,
                    y: s
                };
                break;
            default:
                t = {
                    x: n.x,
                    y: n.y
                }
            }
            var c = a ? pt(a) : null;
            if (null != c) {
                var u = "y" === c ? "height" : "width";
                switch (i) {
                case je:
                    t[c] = t[c] - (n[u] / 2 - r[u] / 2);
                    break;
                case Ze:
                    t[c] = t[c] + (n[u] / 2 - r[u] / 2)
                }
            }
            return t
        }
        function At(e, t) {
            void 0 === t && (t = {});
            var n = t
              , r = n.placement
              , o = void 0 === r ? e.placement : r
              , a = n.strategy
              , i = void 0 === a ? e.strategy : a
              , l = n.boundary
              , s = void 0 === l ? Be : l
              , c = n.rootBoundary
              , u = void 0 === c ? He : c
              , d = n.elementContext
              , f = void 0 === d ? Fe : d
              , p = n.altBoundary
              , m = void 0 !== p && p
              , v = n.padding
              , h = void 0 === v ? 0 : v
              , y = vt("number" != typeof h ? h : ht(h, Le))
              , b = f === Fe ? Ue : Fe
              , g = e.rects.popper
              , E = e.elements[m ? b : f]
              , w = Mt(qe(E) ? E : E.contextElement || ct(e.elements.popper), s, u, i)
              , S = rt(e.elements.reference)
              , O = Rt({
                reference: S,
                element: g,
                strategy: "absolute",
                placement: o
            })
              , T = xt(Object.assign({}, g, O))
              , C = f === Fe ? T : S
              , D = {
                top: w.top - C.top + y.top,
                bottom: C.bottom - w.bottom + y.bottom,
                left: w.left - C.left + y.left,
                right: C.right - w.right + y.right
            }
              , k = e.modifiersData.offset;
            if (f === Fe && k) {
                var N = k[o];
                Object.keys(D).forEach(function(e) {
                    var t = [Re, Me].indexOf(e) >= 0 ? 1 : -1
                      , n = [_e, Me].indexOf(e) >= 0 ? "y" : "x";
                    D[e] += N[n] * t
                })
            }
            return D
        }
        function It(e, t, n) {
            return void 0 === n && (n = {
                x: 0,
                y: 0
            }),
            {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x
            }
        }
        function Lt(e) {
            return [_e, Re, Me, Ae].some(function(t) {
                return e[t] >= 0
            })
        }
        function jt(e, t, n) {
            void 0 === n && (n = !1);
            var r = $e(t)
              , o = $e(t) && function(e) {
                var t = e.getBoundingClientRect()
                  , n = et(t.width) / e.offsetWidth || 1
                  , r = et(t.height) / e.offsetHeight || 1;
                return 1 !== n || 1 !== r
            }(t)
              , a = ct(t)
              , i = rt(e, o, n)
              , l = {
                scrollLeft: 0,
                scrollTop: 0
            }
              , s = {
                x: 0,
                y: 0
            };
            return (r || !r && !n) && (("body" !== it(t) || Nt(a)) && (l = function(e) {
                return e !== Xe(e) && $e(e) ? function(e) {
                    return {
                        scrollLeft: e.scrollLeft,
                        scrollTop: e.scrollTop
                    }
                }(e) : Dt(e)
            }(t)),
            $e(t) ? ((s = rt(t, !0)).x += t.clientLeft,
            s.y += t.clientTop) : a && (s.x = kt(a))),
            {
                x: i.left + l.scrollLeft - s.x,
                y: i.top + l.scrollTop - s.y,
                width: i.width,
                height: i.height
            }
        }
        function Zt(e) {
            var t = new Map
              , n = new Set
              , r = [];
            return e.forEach(function(e) {
                t.set(e.name, e)
            }),
            e.forEach(function(e) {
                n.has(e.name) || function e(o) {
                    n.add(o.name),
                    [].concat(o.requires || [], o.requiresIfExists || []).forEach(function(r) {
                        if (!n.has(r)) {
                            var o = t.get(r);
                            o && e(o)
                        }
                    }),
                    r.push(o)
                }(e)
            }),
            r
        }
        var Bt = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function Ht() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return !t.some(function(e) {
                return !(e && "function" == typeof e.getBoundingClientRect)
            })
        }
        function Ft(e) {
            void 0 === e && (e = {});
            var t = e
              , n = t.defaultModifiers
              , r = void 0 === n ? [] : n
              , o = t.defaultOptions
              , a = void 0 === o ? Bt : o;
            return function(e, t, n) {
                void 0 === n && (n = a);
                var o = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, Bt, a),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                }
                  , i = []
                  , l = !1
                  , s = {
                    state: o,
                    setOptions: function(n) {
                        var l = "function" == typeof n ? n(o.options) : n;
                        c(),
                        o.options = Object.assign({}, a, o.options, l),
                        o.scrollParents = {
                            reference: qe(e) ? Pt(e) : e.contextElement ? Pt(e.contextElement) : [],
                            popper: Pt(t)
                        };
                        var u = function(e) {
                            var t = Zt(e);
                            return We.reduce(function(e, n) {
                                return e.concat(t.filter(function(e) {
                                    return e.phase === n
                                }))
                            }, [])
                        }(function(e) {
                            var t = e.reduce(function(e, t) {
                                var n = e[t.name];
                                return e[t.name] = n ? Object.assign({}, n, t, {
                                    options: Object.assign({}, n.options, t.options),
                                    data: Object.assign({}, n.data, t.data)
                                }) : t,
                                e
                            }, {});
                            return Object.keys(t).map(function(e) {
                                return t[e]
                            })
                        }([].concat(r, o.options.modifiers)));
                        return o.orderedModifiers = u.filter(function(e) {
                            return e.enabled
                        }),
                        o.orderedModifiers.forEach(function(e) {
                            var t = e.name
                              , n = e.options
                              , r = void 0 === n ? {} : n
                              , a = e.effect;
                            if ("function" == typeof a) {
                                var l = a({
                                    state: o,
                                    name: t,
                                    instance: s,
                                    options: r
                                });
                                i.push(l || function() {}
                                )
                            }
                        }),
                        s.update()
                    },
                    forceUpdate: function() {
                        if (!l) {
                            var e = o.elements
                              , t = e.reference
                              , n = e.popper;
                            if (Ht(t, n)) {
                                o.rects = {
                                    reference: jt(t, ft(n), "fixed" === o.options.strategy),
                                    popper: ot(n)
                                },
                                o.reset = !1,
                                o.placement = o.options.placement,
                                o.orderedModifiers.forEach(function(e) {
                                    return o.modifiersData[e.name] = Object.assign({}, e.data)
                                });
                                for (var r = 0; r < o.orderedModifiers.length; r++)
                                    if (!0 !== o.reset) {
                                        var a = o.orderedModifiers[r]
                                          , i = a.fn
                                          , c = a.options
                                          , u = void 0 === c ? {} : c
                                          , d = a.name;
                                        "function" == typeof i && (o = i({
                                            state: o,
                                            options: u,
                                            name: d,
                                            instance: s
                                        }) || o)
                                    } else
                                        o.reset = !1,
                                        r = -1
                            }
                        }
                    },
                    update: function(e) {
                        var t;
                        return function() {
                            return t || (t = new Promise(function(n) {
                                Promise.resolve().then(function() {
                                    t = void 0,
                                    n(e())
                                })
                            }
                            )),
                            t
                        }
                    }(function() {
                        return new Promise(function(e) {
                            s.forceUpdate(),
                            e(o)
                        }
                        )
                    }),
                    destroy: function() {
                        c(),
                        l = !0
                    }
                };
                if (!Ht(e, t))
                    return s;
                function c() {
                    i.forEach(function(e) {
                        return e()
                    }),
                    i = []
                }
                return s.setOptions(n).then(function(e) {
                    !l && n.onFirstUpdate && n.onFirstUpdate(e)
                }),
                s
            }
        }
        var Ut = Ft({
            defaultModifiers: [{
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function(e) {
                    var t = e.state
                      , n = e.name
                      , r = t.rects.reference
                      , o = t.rects.popper
                      , a = t.modifiersData.preventOverflow
                      , i = At(t, {
                        elementContext: "reference"
                    })
                      , l = At(t, {
                        altBoundary: !0
                    })
                      , s = It(i, r)
                      , c = It(l, o, a)
                      , u = Lt(s)
                      , d = Lt(c);
                    t.modifiersData[n] = {
                        referenceClippingOffsets: s,
                        popperEscapeOffsets: c,
                        isReferenceHidden: u,
                        hasPopperEscaped: d
                    },
                    t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-reference-hidden": u,
                        "data-popper-escaped": d
                    })
                }
            }, {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function(e) {
                    var t = e.state
                      , n = e.name;
                    t.modifiersData[n] = Rt({
                        reference: t.rects.reference,
                        element: t.rects.popper,
                        strategy: "absolute",
                        placement: t.placement
                    })
                },
                data: {}
            }, {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function(e) {
                    var t = e.state
                      , n = e.options
                      , r = n.gpuAcceleration
                      , o = void 0 === r || r
                      , a = n.adaptive
                      , i = void 0 === a || a
                      , l = n.roundOffsets
                      , s = void 0 === l || l
                      , c = {
                        placement: Ke(t.placement),
                        variation: bt(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: o,
                        isFixed: "fixed" === t.options.strategy
                    };
                    null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Et(Object.assign({}, c, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: i,
                        roundOffsets: s
                    })))),
                    null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Et(Object.assign({}, c, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: s
                    })))),
                    t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-placement": t.placement
                    })
                },
                data: {}
            }, {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(e) {
                    var t = e.state
                      , n = e.instance
                      , r = e.options
                      , o = r.scroll
                      , a = void 0 === o || o
                      , i = r.resize
                      , l = void 0 === i || i
                      , s = Xe(t.elements.popper)
                      , c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return a && c.forEach(function(e) {
                        e.addEventListener("scroll", n.update, wt)
                    }),
                    l && s.addEventListener("resize", n.update, wt),
                    function() {
                        a && c.forEach(function(e) {
                            e.removeEventListener("scroll", n.update, wt)
                        }),
                        l && s.removeEventListener("resize", n.update, wt)
                    }
                },
                data: {}
            }, {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state
                      , n = e.options
                      , r = e.name
                      , o = n.offset
                      , a = void 0 === o ? [0, 0] : o
                      , i = Ye.reduce(function(e, n) {
                        return e[n] = function(e, t, n) {
                            var r = Ke(e)
                              , o = [Ae, _e].indexOf(r) >= 0 ? -1 : 1
                              , a = "function" == typeof n ? n(Object.assign({}, t, {
                                placement: e
                            })) : n
                              , i = a[0]
                              , l = a[1];
                            return i = i || 0,
                            l = (l || 0) * o,
                            [Ae, Re].indexOf(r) >= 0 ? {
                                x: l,
                                y: i
                            } : {
                                x: i,
                                y: l
                            }
                        }(n, t.rects, a),
                        e
                    }, {})
                      , l = i[t.placement]
                      , s = l.x
                      , c = l.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += s,
                    t.modifiersData.popperOffsets.y += c),
                    t.modifiersData[r] = i
                }
            }, {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state
                      , n = e.options
                      , r = e.name;
                    if (!t.modifiersData[r]._skip) {
                        for (var o = n.mainAxis, a = void 0 === o || o, i = n.altAxis, l = void 0 === i || i, s = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = void 0 === p || p, v = n.allowedAutoPlacements, h = t.options.placement, y = Ke(h), b = s || (y !== h && m ? function(e) {
                            if (Ke(e) === Ie)
                                return [];
                            var t = Ot(e);
                            return [Ct(e), t, Ct(t)]
                        }(h) : [Ot(h)]), g = [h].concat(b).reduce(function(e, n) {
                            return e.concat(Ke(n) === Ie ? function(e, t) {
                                void 0 === t && (t = {});
                                var n = t
                                  , r = n.placement
                                  , o = n.boundary
                                  , a = n.rootBoundary
                                  , i = n.padding
                                  , l = n.flipVariations
                                  , s = n.allowedAutoPlacements
                                  , c = void 0 === s ? Ye : s
                                  , u = bt(r)
                                  , d = u ? l ? ze : ze.filter(function(e) {
                                    return bt(e) === u
                                }) : Le
                                  , f = d.filter(function(e) {
                                    return c.indexOf(e) >= 0
                                });
                                0 === f.length && (f = d);
                                var p = f.reduce(function(t, n) {
                                    return t[n] = At(e, {
                                        placement: n,
                                        boundary: o,
                                        rootBoundary: a,
                                        padding: i
                                    })[Ke(n)],
                                    t
                                }, {});
                                return Object.keys(p).sort(function(e, t) {
                                    return p[e] - p[t]
                                })
                            }(t, {
                                placement: n,
                                boundary: u,
                                rootBoundary: d,
                                padding: c,
                                flipVariations: m,
                                allowedAutoPlacements: v
                            }) : n)
                        }, []), E = t.rects.reference, w = t.rects.popper, S = new Map, O = !0, T = g[0], C = 0; C < g.length; C++) {
                            var D = g[C]
                              , k = Ke(D)
                              , N = bt(D) === je
                              , P = [_e, Me].indexOf(k) >= 0
                              , x = P ? "width" : "height"
                              , _ = At(t, {
                                placement: D,
                                boundary: u,
                                rootBoundary: d,
                                altBoundary: f,
                                padding: c
                            })
                              , M = P ? N ? Re : Ae : N ? Me : _e;
                            E[x] > w[x] && (M = Ot(M));
                            var R = Ot(M)
                              , A = [];
                            if (a && A.push(_[k] <= 0),
                            l && A.push(_[M] <= 0, _[R] <= 0),
                            A.every(function(e) {
                                return e
                            })) {
                                T = D,
                                O = !1;
                                break
                            }
                            S.set(D, A)
                        }
                        if (O)
                            for (var I = function(e) {
                                var t = g.find(function(t) {
                                    var n = S.get(t);
                                    if (n)
                                        return n.slice(0, e).every(function(e) {
                                            return e
                                        })
                                });
                                if (t)
                                    return T = t,
                                    "break"
                            }, L = m ? 3 : 1; L > 0 && "break" !== I(L); L--)
                                ;
                        t.placement !== T && (t.modifiersData[r]._skip = !0,
                        t.placement = T,
                        t.reset = !0)
                    }
                },
                requiresIfExists: ["offset"],
                data: {
                    _skip: !1
                }
            }, {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state
                      , n = e.options
                      , r = e.name
                      , o = n.mainAxis
                      , a = void 0 === o || o
                      , i = n.altAxis
                      , l = void 0 !== i && i
                      , s = n.boundary
                      , c = n.rootBoundary
                      , u = n.altBoundary
                      , d = n.padding
                      , f = n.tether
                      , p = void 0 === f || f
                      , m = n.tetherOffset
                      , v = void 0 === m ? 0 : m
                      , h = At(t, {
                        boundary: s,
                        rootBoundary: c,
                        padding: d,
                        altBoundary: u
                    })
                      , y = Ke(t.placement)
                      , b = bt(t.placement)
                      , g = !b
                      , E = pt(y)
                      , w = function(e) {
                        return "x" === e ? "y" : "x"
                    }(E)
                      , S = t.modifiersData.popperOffsets
                      , O = t.rects.reference
                      , T = t.rects.popper
                      , C = "function" == typeof v ? v(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : v
                      , D = "number" == typeof C ? {
                        mainAxis: C,
                        altAxis: C
                    } : Object.assign({
                        mainAxis: 0,
                        altAxis: 0
                    }, C)
                      , k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
                      , N = {
                        x: 0,
                        y: 0
                    };
                    if (S) {
                        if (a) {
                            var P, x = "y" === E ? _e : Ae, _ = "y" === E ? Me : Re, M = "y" === E ? "height" : "width", R = S[E], A = R + h[x], I = R - h[_], L = p ? -T[M] / 2 : 0, j = b === je ? O[M] : T[M], Z = b === je ? -T[M] : -O[M], B = t.elements.arrow, H = p && B ? ot(B) : {
                                width: 0,
                                height: 0
                            }, F = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }, U = F[x], z = F[_], Y = mt(0, O[M], H[M]), W = g ? O[M] / 2 - L - Y - U - D.mainAxis : j - Y - U - D.mainAxis, V = g ? -O[M] / 2 + L + Y + z + D.mainAxis : Z + Y + z + D.mainAxis, K = t.elements.arrow && ft(t.elements.arrow), X = K ? "y" === E ? K.clientTop || 0 : K.clientLeft || 0 : 0, q = null != (P = null == k ? void 0 : k[E]) ? P : 0, $ = R + V - q, G = mt(p ? Je(A, R + W - q - X) : A, R, p ? Qe(I, $) : I);
                            S[E] = G,
                            N[E] = G - R
                        }
                        if (l) {
                            var Q, J = "x" === E ? _e : Ae, ee = "x" === E ? Me : Re, te = S[w], ne = "y" === w ? "height" : "width", re = te + h[J], oe = te - h[ee], ae = -1 !== [_e, Ae].indexOf(y), ie = null != (Q = null == k ? void 0 : k[w]) ? Q : 0, le = ae ? re : te - O[ne] - T[ne] - ie + D.altAxis, se = ae ? te + O[ne] + T[ne] - ie - D.altAxis : oe, ce = p && ae ? function(e, t, n) {
                                var r = mt(e, t, n);
                                return r > n ? n : r
                            }(le, te, se) : mt(p ? le : re, te, p ? se : oe);
                            S[w] = ce,
                            N[w] = ce - te
                        }
                        t.modifiersData[r] = N
                    }
                },
                requiresIfExists: ["offset"]
            }, {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, i = n.modifiersData.popperOffsets, l = Ke(n.placement), s = pt(l), c = [Ae, Re].indexOf(l) >= 0 ? "height" : "width";
                    if (a && i) {
                        var u = yt(o.padding, n)
                          , d = ot(a)
                          , f = "y" === s ? _e : Ae
                          , p = "y" === s ? Me : Re
                          , m = n.rects.reference[c] + n.rects.reference[s] - i[s] - n.rects.popper[c]
                          , v = i[s] - n.rects.reference[s]
                          , h = ft(a)
                          , y = h ? "y" === s ? h.clientHeight || 0 : h.clientWidth || 0 : 0
                          , b = m / 2 - v / 2
                          , g = u[f]
                          , E = y - d[c] - u[p]
                          , w = y / 2 - d[c] / 2 + b
                          , S = mt(g, w, E)
                          , O = s;
                        n.modifiersData[r] = ((t = {})[O] = S,
                        t.centerOffset = S - w,
                        t)
                    }
                },
                effect: function(e) {
                    var t = e.state
                      , n = e.options.element
                      , r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && at(t.elements.popper, r) && (t.elements.arrow = r)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            }]
        })
          , zt = function(e) {
            return {
                position: e,
                top: "0",
                left: "0",
                opacity: "0",
                pointerEvents: "none"
            }
        }
          , Yt = {
            name: "applyStyles",
            enabled: !1
        }
          , Wt = {
            name: "ariaDescribedBy",
            enabled: !0,
            phase: "afterWrite",
            effect: function(e) {
                var t = e.state;
                return function() {
                    var e = t.elements
                      , n = e.reference
                      , r = e.popper;
                    if ("removeAttribute"in n) {
                        var o = (n.getAttribute("aria-describedby") || "").split(",").filter(function(e) {
                            return e.trim() !== r.id
                        });
                        o.length ? n.setAttribute("aria-describedby", o.join(",")) : n.removeAttribute("aria-describedby")
                    }
                }
            },
            fn: function(e) {
                var t, n = e.state.elements, r = n.popper, o = n.reference, a = null == (t = r.getAttribute("role")) ? void 0 : t.toLowerCase();
                if (r.id && "tooltip" === a && "setAttribute"in o) {
                    var i = o.getAttribute("aria-describedby");
                    if (i && -1 !== i.split(",").indexOf(r.id))
                        return;
                    o.setAttribute("aria-describedby", i ? i + "," + r.id : r.id)
                }
            }
        }
          , Vt = [];
        var Kt = function(e, t, n) {
            var o = void 0 === n ? {} : n
              , a = o.enabled
              , i = void 0 === a || a
              , l = o.placement
              , s = void 0 === l ? "bottom" : l
              , c = o.strategy
              , u = void 0 === c ? "absolute" : c
              , d = o.modifiers
              , f = void 0 === d ? Vt : d
              , p = (0,
            Ce.Z)(o, ["enabled", "placement", "strategy", "modifiers"])
              , m = (0,
            r.useRef)()
              , v = (0,
            r.useCallback)(function() {
                var e;
                null == (e = m.current) || e.update()
            }, [])
              , h = (0,
            r.useCallback)(function() {
                var e;
                null == (e = m.current) || e.forceUpdate()
            }, [])
              , y = Ve((0,
            r.useState)({
                placement: s,
                update: v,
                forceUpdate: h,
                attributes: {},
                styles: {
                    popper: zt(u),
                    arrow: {}
                }
            }))
              , b = y[0]
              , g = y[1]
              , E = (0,
            r.useMemo)(function() {
                return {
                    name: "updateStateModifier",
                    enabled: !0,
                    phase: "write",
                    requires: ["computeStyles"],
                    fn: function(e) {
                        var t = e.state
                          , n = {}
                          , r = {};
                        Object.keys(t.elements).forEach(function(e) {
                            n[e] = t.styles[e],
                            r[e] = t.attributes[e]
                        }),
                        g({
                            state: t,
                            styles: n,
                            attributes: r,
                            update: v,
                            forceUpdate: h,
                            placement: t.placement
                        })
                    }
                }
            }, [v, h, g]);
            return (0,
            r.useEffect)(function() {
                m.current && i && m.current.setOptions({
                    placement: s,
                    strategy: u,
                    modifiers: [].concat(f, [E, Yt])
                })
            }, [u, s, E, i]),
            (0,
            r.useEffect)(function() {
                if (i && null != e && null != t)
                    return m.current = Ut(e, t, (0,
                    Te.Z)({}, p, {
                        placement: s,
                        strategy: u,
                        modifiers: [].concat(f, [Wt, E])
                    })),
                    function() {
                        null != m.current && (m.current.destroy(),
                        m.current = void 0,
                        g(function(e) {
                            return (0,
                            Te.Z)({}, e, {
                                attributes: {},
                                styles: {
                                    popper: zt(u)
                                }
                            })
                        }))
                    }
            }, [i, e, t]),
            b
        };
        var Xt = !("undefined" == typeof window || !window.document || !window.document.createElement)
          , qt = !1
          , $t = !1;
        try {
            var Gt = {
                get passive() {
                    return qt = !0
                },
                get once() {
                    return $t = qt = !0
                }
            };
            Xt && (window.addEventListener("test", Gt, Gt),
            window.removeEventListener("test", Gt, !0))
        } catch (e) {}
        var Qt = function(e, t, n, r) {
            if (r && "boolean" != typeof r && !$t) {
                var o = r.once
                  , a = r.capture
                  , i = n;
                !$t && o && (i = n.__once || function e(r) {
                    this.removeEventListener(t, e, a),
                    n.call(this, r)
                }
                ,
                n.__once = i),
                e.addEventListener(t, i, qt ? r : a)
            }
            e.addEventListener(t, n, r)
        };
        var Jt = function(e, t, n, r) {
            var o = r && "boolean" != typeof r ? r.capture : r;
            e.removeEventListener(t, n, o),
            n.__once && e.removeEventListener(t, n.__once, o)
        };
        var en = function(e, t, n, r) {
            return Qt(e, t, n, r),
            function() {
                Jt(e, t, n, r)
            }
        };
        var tn = function(e) {
            var t = (0,
            r.useRef)(e);
            return (0,
            r.useEffect)(function() {
                t.current = e
            }, [e]),
            t
        };
        function nn(e) {
            var t = tn(e);
            return (0,
            r.useCallback)(function() {
                return t.current && t.current.apply(t, arguments)
            }, [t])
        }
        var rn = n(21415)
          , on = n.n(rn);
        function an(e) {
            return e && e.ownerDocument || document
        }
        var ln = function(e) {
            return an(function(e) {
                return e && "setState"in e ? f.findDOMNode(e) : null != e ? e : null
            }(e))
        }
          , sn = 27
          , cn = function() {};
        var un = function(e) {
            return e && ("current"in e ? e.current : e)
        };
        var dn = function(e, t, n) {
            var o = void 0 === n ? {} : n
              , a = o.disabled
              , i = o.clickTrigger
              , l = void 0 === i ? "click" : i
              , s = (0,
            r.useRef)(!1)
              , c = t || cn
              , u = (0,
            r.useCallback)(function(t) {
                var n, r = un(e);
                on()(!!r, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),
                s.current = !r || function(e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                }(t) || !function(e) {
                    return 0 === e.button
                }(t) || !!function(e, t) {
                    return e.contains ? e.contains(t) : e.compareDocumentPosition ? e === t || !!(16 & e.compareDocumentPosition(t)) : void 0
                }(r, null != (n = null == t.composedPath ? void 0 : t.composedPath()[0]) ? n : t.target)
            }, [e])
              , d = nn(function(e) {
                s.current || c(e)
            })
              , f = nn(function(e) {
                e.keyCode === sn && c(e)
            });
            (0,
            r.useEffect)(function() {
                if (!a && null != e) {
                    var t = window.event
                      , n = ln(un(e))
                      , r = en(n, l, u, !0)
                      , o = en(n, l, function(e) {
                        e !== t ? d(e) : t = void 0
                    })
                      , i = en(n, "keyup", function(e) {
                        e !== t ? f(e) : t = void 0
                    })
                      , s = [];
                    return "ontouchstart"in n.documentElement && (s = [].slice.call(n.body.children).map(function(e) {
                        return en(e, "mousemove", cn)
                    })),
                    function() {
                        r(),
                        o(),
                        i(),
                        s.forEach(function(e) {
                            return e()
                        })
                    }
                }
            }, [e, a, l, u, d, f])
        }
          , fn = function(e) {
            var t;
            return "undefined" == typeof document ? null : null == e ? an().body : ("function" == typeof e && (e = e()),
            e && "current"in e && (e = e.current),
            null != (t = e) && t.nodeType && e || null)
        };
        function pn(e, t) {
            var n = (0,
            r.useState)(function() {
                return fn(e)
            })
              , o = n[0]
              , a = n[1];
            if (!o) {
                var i = fn(e);
                i && a(i)
            }
            return (0,
            r.useEffect)(function() {
                t && o && t(o)
            }, [t, o]),
            (0,
            r.useEffect)(function() {
                var t = fn(e);
                t !== o && a(t)
            }, [e, o]),
            o
        }
        function mn(e) {
            var t, n, r, o, a = e.enabled, i = e.enableEvents, l = e.placement, s = e.flip, c = e.offset, u = e.fixed, d = e.containerPadding, f = e.arrowElement, p = e.popperConfig, m = void 0 === p ? {} : p, v = function(e) {
                var t = {};
                return Array.isArray(e) ? (null == e || e.forEach(function(e) {
                    t[e.name] = e
                }),
                t) : e || t
            }(m.modifiers);
            return (0,
            Te.Z)({}, m, {
                placement: l,
                enabled: a,
                strategy: u ? "fixed" : m.strategy,
                modifiers: function(e) {
                    return void 0 === e && (e = {}),
                    Array.isArray(e) ? e : Object.keys(e).map(function(t) {
                        return e[t].name = t,
                        e[t]
                    })
                }((0,
                Te.Z)({}, v, {
                    eventListeners: {
                        enabled: i
                    },
                    preventOverflow: (0,
                    Te.Z)({}, v.preventOverflow, {
                        options: d ? (0,
                        Te.Z)({
                            padding: d
                        }, null == (t = v.preventOverflow) ? void 0 : t.options) : null == (n = v.preventOverflow) ? void 0 : n.options
                    }),
                    offset: {
                        options: (0,
                        Te.Z)({
                            offset: c
                        }, null == (r = v.offset) ? void 0 : r.options)
                    },
                    arrow: (0,
                    Te.Z)({}, v.arrow, {
                        enabled: !!f,
                        options: (0,
                        Te.Z)({}, null == (o = v.arrow) ? void 0 : o.options, {
                            element: f
                        })
                    }),
                    flip: (0,
                    Te.Z)({
                        enabled: !!s
                    }, v.flip)
                }))
            })
        }
        var vn = r.forwardRef(function(e, t) {
            var n = e.flip
              , o = e.offset
              , a = e.placement
              , i = e.containerPadding
              , l = void 0 === i ? 5 : i
              , s = e.popperConfig
              , c = void 0 === s ? {} : s
              , u = e.transition
              , d = Ne()
              , p = d[0]
              , m = d[1]
              , v = Ne()
              , h = v[0]
              , y = v[1]
              , b = xe(m, t)
              , g = pn(e.container)
              , E = pn(e.target)
              , w = (0,
            r.useState)(!e.show)
              , S = w[0]
              , O = w[1]
              , T = Kt(E, p, mn({
                placement: a,
                enableEvents: !!e.show,
                containerPadding: l || 5,
                flip: n,
                offset: o,
                arrowElement: h,
                popperConfig: c
            }))
              , C = T.styles
              , D = T.attributes
              , k = (0,
            Ce.Z)(T, ["styles", "attributes"]);
            e.show ? S && O(!1) : e.transition || S || O(!0);
            var N = e.show || u && !S;
            if (dn(p, e.onHide, {
                disabled: !e.rootClose || e.rootCloseDisabled,
                clickTrigger: e.rootCloseEvent
            }),
            !N)
                return null;
            var P = e.children((0,
            Te.Z)({}, k, {
                show: !!e.show,
                props: (0,
                Te.Z)({}, D.popper, {
                    style: C.popper,
                    ref: b
                }),
                arrowProps: (0,
                Te.Z)({}, D.arrow, {
                    style: C.arrow,
                    ref: y
                })
            }));
            if (u) {
                var x = e.onExit
                  , _ = e.onExiting
                  , M = e.onEnter
                  , R = e.onEntering
                  , A = e.onEntered;
                P = r.createElement(u, {
                    in: e.show,
                    appear: !0,
                    onExit: x,
                    onExiting: _,
                    onExited: function() {
                        O(!0),
                        e.onExited && e.onExited.apply(e, arguments)
                    },
                    onEnter: M,
                    onEntering: R,
                    onEntered: A
                }, P)
            }
            return g ? f.createPortal(P, g) : null
        });
        vn.displayName = "Overlay",
        vn.propTypes = {
            show: ke().bool,
            placement: ke().oneOf(Ye),
            target: ke().any,
            container: ke().any,
            flip: ke().bool,
            children: ke().func.isRequired,
            containerPadding: ke().number,
            popperConfig: ke().object,
            rootClose: ke().bool,
            rootCloseEvent: ke().oneOf(["click", "mousedown"]),
            rootCloseDisabled: ke().bool,
            onHide: function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                var o;
                return e.rootClose ? (o = ke().func).isRequired.apply(o, [e].concat(n)) : ke().func.apply(ke(), [e].concat(n))
            },
            transition: ke().elementType,
            onEnter: ke().func,
            onEntering: ke().func,
            onEntered: ke().func,
            onExit: ke().func,
            onExiting: ke().func,
            onExited: ke().func
        };
        var hn = vn
          , yn = n(38612)
          , bn = n(52242)
          , gn = n(92721)
          , En = n(89455)
          , wn = n(16319)
          , Sn = n(59706)
          , On = n(18037);
        var Tn = function(e, t, n, r) {
            for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
                if (t(e[a], a, e))
                    return a;
            return -1
        }
          , Cn = n(3886)
          , Dn = Math.max;
        var kn = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r)
                return -1;
            var o = null == n ? 0 : be(n);
            return o < 0 && (o = Dn(r + o, 0)),
            Tn(e, (0,
            Cn.Z)(t, 3), o)
        }
          , Nn = Math.ceil
          , Pn = Math.max;
        var xn = function(e, t, n, r) {
            for (var o = -1, a = Pn(Nn((t - e) / (n || 1)), 0), i = Array(a); a--; )
                i[r ? a : ++o] = e,
                e += n;
            return i
        };
        var _n = function(e) {
            return function(t, n, r) {
                return r && "number" != typeof r && (0,
                pe.Z)(t, n, r) && (n = r = void 0),
                t = ye(t),
                void 0 === n ? (n = t,
                t = 0) : n = ye(n),
                r = void 0 === r ? t < n ? 1 : -1 : ye(r),
                xn(t, n, r, e)
            }
        }()
          , Mn = Number.isNaN || function(e) {
            return "number" == typeof e && e != e
        }
        ;
        function Rn(e, t) {
            return e === t || !(!Mn(e) || !Mn(t))
        }
        function An(e, t) {
            if (e.length !== t.length)
                return !1;
            for (var n = 0; n < e.length; n++)
                if (!Rn(e[n], t[n]))
                    return !1;
            return !0
        }
        function In(e, t) {
            void 0 === t && (t = An);
            var n = null;
            function r() {
                for (var r = [], o = 0; o < arguments.length; o++)
                    r[o] = arguments[o];
                if (n && n.lastThis === this && t(r, n.lastArgs))
                    return n.lastResult;
                var a = e.apply(this, r);
                return n = {
                    lastResult: a,
                    lastArgs: r,
                    lastThis: this
                },
                a
            }
            return r.clear = function() {
                n = null
            }
            ,
            r
        }
        var Ln = n(97326)
          , jn = n(2200)
          , Zn = n(39103)
          , Bn = n(58666)
          , Hn = n(57978)
          , Fn = Zn.Z ? Zn.Z.isConcatSpreadable : void 0;
        var Un = function(e) {
            return (0,
            Hn.Z)(e) || (0,
            Bn.Z)(e) || !!(Fn && e && e[Fn])
        };
        var zn = function e(t, n, r, o, a) {
            var i = -1
              , l = t.length;
            for (r || (r = Un),
            a || (a = []); ++i < l; ) {
                var s = t[i];
                n > 0 && r(s) ? n > 1 ? e(s, n - 1, r, o, a) : (0,
                jn.Z)(a, s) : o || (a[a.length] = s)
            }
            return a
        }
          , Yn = n(846)
          , Wn = n(10943)
          , Vn = n(5783);
        var Kn = function(e, t) {
            var n = e.length;
            for (e.sort(t); n--; )
                e[n] = e[n].value;
            return e
        }
          , Xn = n(80461)
          , qn = n(29054);
        var $n = function(e, t) {
            if (e !== t) {
                var n = void 0 !== e
                  , r = null === e
                  , o = e == e
                  , a = (0,
                qn.Z)(e)
                  , i = void 0 !== t
                  , l = null === t
                  , s = t == t
                  , c = (0,
                qn.Z)(t);
                if (!l && !c && !a && e > t || a && i && s && !l && !c || r && i && s || !n && s || !o)
                    return 1;
                if (!r && !a && !c && e < t || c && n && o && !r && !a || l && n && o || !i && o || !s)
                    return -1
            }
            return 0
        };
        var Gn = function(e, t, n) {
            for (var r = -1, o = e.criteria, a = t.criteria, i = o.length, l = n.length; ++r < i; ) {
                var s = $n(o[r], a[r]);
                if (s)
                    return r >= l ? s : s * ("desc" == n[r] ? -1 : 1)
            }
            return e.index - t.index
        }
          , Qn = n(71693);
        var Jn = function(e, t, n) {
            t = t.length ? (0,
            Yn.Z)(t, function(e) {
                return (0,
                Hn.Z)(e) ? function(t) {
                    return (0,
                    Wn.Z)(t, 1 === e.length ? e[0] : e)
                }
                : e
            }) : [Qn.Z];
            var r = -1;
            t = (0,
            Yn.Z)(t, (0,
            Xn.Z)(Cn.Z));
            var o = (0,
            Vn.Z)(e, function(e, n, o) {
                return {
                    criteria: (0,
                    Yn.Z)(t, function(t) {
                        return t(e)
                    }),
                    index: ++r,
                    value: e
                }
            });
            return Kn(o, function(e, t) {
                return Gn(e, t, n)
            })
        }
          , er = n(65756)
          , tr = (0,
        er.Z)(function(e, t) {
            if (null == e)
                return [];
            var n = t.length;
            return n > 1 && (0,
            pe.Z)(e, t[0], t[1]) ? t = [] : n > 2 && (0,
            pe.Z)(t[0], t[1], t[2]) && (t = [t[0]]),
            Jn(e, zn(t, 1), [])
        })
          , nr = n(43814)
          , rr = n(71728)
          , or = n(83878)
          , ar = n(59199)
          , ir = n(40181)
          , lr = n(25267);
        function sr(e) {
            return (0,
            or.Z)(e) || (0,
            ar.Z)(e) || (0,
            ir.Z)(e) || (0,
            lr.Z)()
        }
        var cr = n(10206)
          , ur = n(57615)
          , dr = n(43330)
          , fr = n(60605)
          , pr = n(21257)
          , mr = n(21603)
          , vr = n(96495);
        var hr = function(e) {
            return (0,
            vr.Z)(e) ? void 0 : e
        };
        var yr = function(e) {
            return null != e && e.length ? zn(e, 1) : []
        }
          , br = n(97253)
          , gr = n(1960);
        var Er = function(e) {
            return (0,
            gr.Z)((0,
            br.Z)(e, void 0, yr), e + "")
        }
          , wr = n(44970)
          , Sr = Er(function(e, t) {
            var n = {};
            if (null == e)
                return n;
            var r = !1;
            t = (0,
            Yn.Z)(t, function(t) {
                return t = (0,
                pr.Z)(t, e),
                r || (r = t.length > 1),
                t
            }),
            (0,
            mr.Z)(e, (0,
            wr.Z)(e), n),
            r && (n = (0,
            dr.Z)(n, 7, hr));
            for (var o = t.length; o--; )
                (0,
                fr.Z)(n, t[o]);
            return n
        })
          , Or = n(92624)
          , Tr = n(5199)
          , Cr = Object.prototype
          , Dr = Cr.hasOwnProperty
          , kr = (0,
        er.Z)(function(e, t) {
            e = Object(e);
            var n = -1
              , r = t.length
              , o = r > 2 ? t[2] : void 0;
            for (o && (0,
            pe.Z)(t[0], t[1], o) && (r = 1); ++n < r; )
                for (var a = t[n], i = (0,
                Tr.Z)(a), l = -1, s = i.length; ++l < s; ) {
                    var c = i[l]
                      , u = e[c];
                    (void 0 === u || (0,
                    Or.Z)(u, Cr[c]) && !Dr.call(e, c)) && (e[c] = a[c])
                }
            return e
        })
          , Nr = n(10375)
          , Pr = n(36296)
          , xr = n(53293)
          , _r = n(46640)
          , Mr = n(38298)
          , Rr = n(25615)
          , Ar = n(56445)
          , Ir = n(62623);
        var Lr = function(e, t, n) {
            var r = (0,
            Hn.Z)(e)
              , o = r || (0,
            Mr.Z)(e) || (0,
            Ir.Z)(e);
            if (t = (0,
            Cn.Z)(t, 4),
            null == n) {
                var a = e && e.constructor;
                n = o ? r ? new a : [] : (0,
                Ar.Z)(e) && (0,
                Rr.Z)(a) ? (0,
                Pr.Z)((0,
                _r.Z)(e)) : {}
            }
            return (o ? Nr.Z : xr.Z)(e, function(e, r, o) {
                return t(n, e, r, o)
            }),
            n
        }
          , jr = n(8742);
        n(61501),
        n(33655),
        n(59362),
        n(83612),
        n(48362),
        n(89684),
        n(63810);
        function Zr(e) {
            return e.children
        }
        var Br = {
            PREVIOUS: "PREV",
            NEXT: "NEXT",
            TODAY: "TODAY",
            DATE: "DATE"
        }
          , Hr = {
            MONTH: "month",
            WEEK: "week",
            WORK_WEEK: "work_week",
            DAY: "day",
            AGENDA: "agenda"
        }
          , Fr = Object.keys(Hr).map(function(e) {
            return Hr[e]
        });
        function Ur(e, t) {
            e && e.apply(null, [].concat(t))
        }
        D().oneOfType([D().string, D().func]),
        D().any,
        D().func,
        D().oneOfType([D().arrayOf(D().oneOf(Fr)), D().objectOf(function(e, t) {
            if (-1 !== Fr.indexOf(t) && "boolean" == typeof e[t])
                return null;
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
                r[o - 2] = arguments[o];
            return D().elementType.apply(D(), [e, t].concat(r))
        })]),
        D().oneOfType([D().oneOf(["overlap", "no-overlap"]), D().func]);
        var zr = {
            seconds: 1e3,
            minutes: 6e4,
            hours: 36e5,
            day: 864e5
        };
        function Yr(e, t) {
            return z(z(e, "month"), "week", t.startOfWeek())
        }
        function Wr(e, t) {
            return Y(Y(e, "month"), "week", t.startOfWeek())
        }
        function Vr(e, t) {
            for (var n = Yr(e, t), r = Wr(e, t), o = []; $(n, r, "day"); )
                o.push(n),
                n = F(n, 1, "day");
            return o
        }
        function Kr(e, t) {
            var n = z(e, t);
            return W(n, e) ? n : F(n, 1, t)
        }
        function Xr(e, t) {
            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "day", r = e, o = []; $(r, t, n); )
                o.push(r),
                r = F(r, 1, n);
            return o
        }
        function qr(e, t) {
            return null == t && null == e ? null : (null == t && (t = new Date),
            null == e && (e = new Date),
            e = z(e, "day"),
            e = re(e, re(t)),
            e = ne(e, ne(t)),
            e = te(e, te(t)),
            ee(e, ee(t)))
        }
        function $r(e) {
            return 0 === re(e) && 0 === ne(e) && 0 === te(e) && 0 === ee(e)
        }
        function Gr(e, t, n) {
            return n && "milliseconds" !== n ? Math.round(Math.abs(+z(e, n) / zr[n] - +z(t, n) / zr[n])) : Math.abs(+e - +t)
        }
        var Qr = D().oneOfType([D().string, D().func]);
        function Jr(e, t, n) {
            return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,t + n,0,0)
        }
        function eo(e, t) {
            return e.getTimezoneOffset() - t.getTimezoneOffset()
        }
        function to(e, t) {
            return Gr(e, t, "minutes") + eo(e, t)
        }
        function no(e) {
            var t = z(e, "day");
            return Gr(t, e, "minutes") + eo(t, e)
        }
        function ro(e, t) {
            return q(e, t, "day")
        }
        function oo(e, t, n) {
            return W(e, t, "minutes") ? X(t, n, "minutes") : K(t, n, "minutes")
        }
        function ao(e) {
            var t = e.evtA
              , n = t.start
              , r = t.end
              , o = t.allDay
              , a = e.evtB
              , i = a.start
              , l = a.end
              , s = a.allDay
              , c = +z(n, "day") - +z(i, "day")
              , u = Gr(n, Kr(r, "day"), "day")
              , d = Gr(i, Kr(l, "day"), "day");
            return c || Math.max(d, 1) - Math.max(u, 1) || !!s - !!o || +n - +i || +r - +l
        }
        function io(e) {
            var t = e.event
              , n = t.start
              , r = t.end
              , o = e.range
              , a = o.start
              , i = o.end
              , l = z(n, "day")
              , s = $(l, i, "day")
              , c = V(l, r, "minutes") ? K(r, a, "minutes") : X(r, a, "minutes");
            return s && c
        }
        function lo(e, t) {
            return W(e, t, "day")
        }
        function so(e, t) {
            return $r(e) && $r(t)
        }
        var co = (0,
        y.Z)(function e(t) {
            var n = this;
            (0,
            h.Z)(this, e),
            N()("function" == typeof t.format, "date localizer `format(..)` must be a function"),
            N()("function" == typeof t.firstOfWeek, "date localizer `firstOfWeek(..)` must be a function"),
            this.propType = t.propType || Qr,
            this.formats = t.formats,
            this.format = function() {
                for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
                    r[o] = arguments[o];
                return function(e, t, n, r, o) {
                    var a = "function" == typeof r ? r(n, o, e) : t.call(e, n, r, o);
                    return N()(null == a || "string" == typeof a, "`localizer format(..)` must return a string, null, or undefined"),
                    a
                }
                .apply(void 0, [n, t.format].concat(r))
            }
            ,
            this.startOfWeek = t.firstOfWeek,
            this.merge = t.merge || qr,
            this.inRange = t.inRange || J,
            this.lt = t.lt || q,
            this.lte = t.lte || $,
            this.gt = t.gt || K,
            this.gte = t.gte || X,
            this.eq = t.eq || W,
            this.neq = t.neq || V,
            this.startOf = t.startOf || z,
            this.endOf = t.endOf || Y,
            this.add = t.add || F,
            this.range = t.range || Xr,
            this.diff = t.diff || Gr,
            this.ceil = t.ceil || Kr,
            this.min = t.min || G,
            this.max = t.max || Q,
            this.minutes = t.minutes || ne,
            this.firstVisibleDay = t.firstVisibleDay || Yr,
            this.lastVisibleDay = t.lastVisibleDay || Wr,
            this.visibleDays = t.visibleDays || Vr,
            this.getSlotDate = t.getSlotDate || Jr,
            this.getTimezoneOffset = t.getTimezoneOffset || function(e) {
                return e.getTimezoneOffset()
            }
            ,
            this.getDstOffset = t.getDstOffset || eo,
            this.getTotalMin = t.getTotalMin || to,
            this.getMinutesFromMidnight = t.getMinutesFromMidnight || no,
            this.continuesPrior = t.continuesPrior || ro,
            this.continuesAfter = t.continuesAfter || oo,
            this.sortEvents = t.sortEvents || ao,
            this.inEventRange = t.inEventRange || io,
            this.isSameDate = t.isSameDate || lo,
            this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || so,
            this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0
        });
        var uo = {
            date: "Date",
            time: "Time",
            event: "Event",
            allDay: "All Day",
            week: "Week",
            work_week: "Work Week",
            day: "Day",
            month: "Month",
            previous: "Back",
            next: "Next",
            yesterday: "Yesterday",
            tomorrow: "Tomorrow",
            today: "Today",
            agenda: "Agenda",
            noEventsInRange: "There are no events in this range.",
            showMore: function(e) {
                return "+".concat(e, " more")
            }
        };
        var fo = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"]
          , po = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n() {
                return (0,
                h.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            y.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.style
                      , n = e.className
                      , o = e.event
                      , a = e.selected
                      , i = e.isAllDay
                      , l = e.onSelect
                      , s = e.onDoubleClick
                      , c = e.onKeyPress
                      , u = e.localizer
                      , d = e.continuesPrior
                      , f = e.continuesAfter
                      , v = e.accessors
                      , h = e.getters
                      , y = e.children
                      , b = e.components
                      , g = b.event
                      , E = b.eventWrapper
                      , w = e.slotStart
                      , S = e.slotEnd
                      , O = (0,
                    m.Z)(e, fo);
                    delete O.resizable;
                    var C = v.title(o)
                      , D = v.tooltip(o)
                      , k = v.end(o)
                      , N = v.start(o)
                      , P = v.allDay(o)
                      , x = i || P || u.diff(N, u.ceil(k, "day"), "day") > 1
                      , _ = h.eventProp(o, N, k, a)
                      , M = r.createElement("div", {
                        className: "rbc-event-content",
                        title: D || void 0
                    }, g ? r.createElement(g, {
                        event: o,
                        continuesPrior: d,
                        continuesAfter: f,
                        title: C,
                        isAllDay: P,
                        localizer: u,
                        slotStart: w,
                        slotEnd: S
                    }) : C);
                    return r.createElement(E, Object.assign({}, this.props, {
                        type: "date"
                    }), r.createElement("div", Object.assign({}, O, {
                        tabIndex: 0,
                        style: (0,
                        p.Z)((0,
                        p.Z)({}, _.style), t),
                        className: (0,
                        T.default)("rbc-event", n, _.className, {
                            "rbc-selected": a,
                            "rbc-event-allday": x,
                            "rbc-event-continues-prior": d,
                            "rbc-event-continues-after": f
                        }),
                        onClick: function(e) {
                            return l && l(o, e)
                        },
                        onDoubleClick: function(e) {
                            return s && s(o, e)
                        },
                        onKeyPress: function(e) {
                            return c && c(o, e)
                        }
                    }), "function" == typeof y ? y(M) : M))
                }
            }]),
            n
        }(r.Component);
        function mo(e, t) {
            return !(!e || null == t) && (0,
            bn.Z)(e, t)
        }
        function vo(e, t) {
            return (e.right - e.left) / t
        }
        function ho(e, t, n, r) {
            var o = vo(e, r);
            return n ? r - 1 - Math.floor((t - e.left) / o) : Math.floor((t - e.left) / o)
        }
        function yo(e) {
            var t = e.containerRef
              , n = e.accessors
              , o = e.getters
              , a = e.selected
              , i = e.components
              , l = e.localizer
              , s = e.position
              , c = e.show
              , u = e.events
              , d = e.slotStart
              , f = e.slotEnd
              , p = e.onSelect
              , m = e.onDoubleClick
              , v = e.onKeyPress
              , h = e.handleDragStart
              , y = e.popperRef
              , b = e.target
              , g = e.offset;
            !function(e) {
                var t = e.ref
                  , n = e.callback;
                (0,
                r.useEffect)(function() {
                    var e = function(e) {
                        t.current && !t.current.contains(e.target) && n()
                    };
                    return document.addEventListener("mousedown", e),
                    function() {
                        document.removeEventListener("mousedown", e)
                    }
                }, [t, n])
            }({
                ref: y,
                callback: c
            }),
            (0,
            r.useLayoutEffect)(function() {
                var e = function(e) {
                    var t = e.target
                      , n = e.offset
                      , r = e.container
                      , o = e.box
                      , a = (0,
                    yn.Z)(t)
                      , i = a.top
                      , l = a.left
                      , s = a.width
                      , c = a.height
                      , u = (0,
                    yn.Z)(r)
                      , d = u.top
                      , f = u.left
                      , p = u.width
                      , m = u.height
                      , v = (0,
                    yn.Z)(o)
                      , h = v.width
                      , y = v.height
                      , b = d + m
                      , g = f + p
                      , E = i + y
                      , w = l + h
                      , S = n.x
                      , O = n.y;
                    return {
                        topOffset: E > b ? i - y - O : i + O + c,
                        leftOffset: w > g ? l + S - h + s : l + S
                    }
                }({
                    target: b,
                    offset: g,
                    container: t.current,
                    box: y.current
                })
                  , n = e.topOffset
                  , r = e.leftOffset;
                y.current.style.top = "".concat(n, "px"),
                y.current.style.left = "".concat(r, "px")
            }, [g.x, g.y, b]);
            var E = s.width
              , w = {
                minWidth: E + E / 2
            };
            return r.createElement("div", {
                style: w,
                className: "rbc-overlay",
                ref: y
            }, r.createElement("div", {
                className: "rbc-overlay-header"
            }, l.format(d, "dayHeaderFormat")), u.map(function(e, t) {
                return r.createElement(po, {
                    key: t,
                    type: "popup",
                    localizer: l,
                    event: e,
                    getters: o,
                    onSelect: p,
                    accessors: n,
                    components: i,
                    onDoubleClick: m,
                    onKeyPress: v,
                    continuesPrior: l.lt(n.end(e), d, "day"),
                    continuesAfter: l.gte(n.start(e), f, "day"),
                    slotStart: d,
                    slotEnd: f,
                    selected: mo(e, a),
                    draggable: !0,
                    onDragStart: function() {
                        return h(e)
                    },
                    onDragEnd: function() {
                        return c()
                    }
                })
            }))
        }
        var bo = r.forwardRef(function(e, t) {
            return r.createElement(yo, Object.assign({}, e, {
                popperRef: t
            }))
        });
        function go(e) {
            var t = e.containerRef
              , n = e.popupOffset
              , o = void 0 === n ? 5 : n
              , a = e.overlay
              , i = e.accessors
              , l = e.localizer
              , s = e.components
              , c = e.getters
              , u = e.selected
              , d = e.handleSelectEvent
              , f = e.handleDoubleClickEvent
              , p = e.handleKeyPressEvent
              , m = e.handleDragStart
              , v = e.onHide
              , h = e.overlayDisplay
              , y = (0,
            r.useRef)(null);
            if (!a.position)
                return null;
            var b = o;
            isNaN(o) || (b = {
                x: o,
                y: o
            });
            var g = a.position
              , E = a.events
              , w = a.date
              , S = a.end;
            return r.createElement(hn, {
                rootClose: !0,
                flip: !0,
                show: !0,
                placement: "bottom",
                onHide: v,
                target: a.target
            }, function(e) {
                var n = e.props;
                return r.createElement(bo, Object.assign({}, n, {
                    containerRef: t,
                    ref: y,
                    target: a.target,
                    offset: b,
                    accessors: i,
                    getters: c,
                    selected: u,
                    components: s,
                    localizer: l,
                    position: g,
                    show: h,
                    events: E,
                    slotStart: w,
                    slotEnd: S,
                    onSelect: d,
                    onDoubleClick: f,
                    onKeyPress: p,
                    handleDragStart: m
                }))
            })
        }
        bo.propTypes = {
            accessors: D().object.isRequired,
            getters: D().object.isRequired,
            selected: D().object,
            components: D().object.isRequired,
            localizer: D().object.isRequired,
            position: D().object.isRequired,
            show: D().func.isRequired,
            events: D().array.isRequired,
            slotStart: D().instanceOf(Date).isRequired,
            slotEnd: D().instanceOf(Date),
            onSelect: D().func,
            onDoubleClick: D().func,
            onKeyPress: D().func,
            handleDragStart: D().func,
            style: D().object,
            offset: D().shape({
                x: D().number,
                y: D().number
            })
        };
        var Eo = r.forwardRef(function(e, t) {
            return r.createElement(go, Object.assign({}, e, {
                containerRef: t
            }))
        });
        function wo(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
            return (0,
            On.default)(n, e, t, {
                passive: !1
            })
        }
        function So(e, t) {
            return !!function(e, t) {
                var n = t.clientX
                  , r = t.clientY
                  , o = document.elementFromPoint(n, r);
                return (0,
                Sn.default)(o, ".rbc-event", e)
            }(e, t)
        }
        function Oo(e, t) {
            return !!function(e, t) {
                var n = t.clientX
                  , r = t.clientY
                  , o = document.elementFromPoint(n, r);
                return (0,
                Sn.default)(o, ".rbc-show-more", e)
            }(e, t)
        }
        function To(e) {
            var t = e;
            return e.touches && e.touches.length && (t = e.touches[0]),
            {
                clientX: t.clientX,
                clientY: t.clientY,
                pageX: t.pageX,
                pageY: t.pageY
            }
        }
        Eo.propTypes = {
            popupOffset: D().oneOfType([D().number, D().shape({
                x: D().number,
                y: D().number
            })]),
            overlay: D().shape({
                position: D().object,
                events: D().array,
                date: D().instanceOf(Date),
                end: D().instanceOf(Date)
            }),
            accessors: D().object.isRequired,
            localizer: D().object.isRequired,
            components: D().object.isRequired,
            getters: D().object.isRequired,
            selected: D().object,
            handleSelectEvent: D().func,
            handleDoubleClickEvent: D().func,
            handleKeyPressEvent: D().func,
            handleDragStart: D().func,
            onHide: D().func,
            overlayDisplay: D().func
        };
        var Co = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = n.global
                  , o = void 0 !== r && r
                  , a = n.longPressThreshold
                  , i = void 0 === a ? 250 : a
                  , l = n.validContainers
                  , s = void 0 === l ? [] : l;
                (0,
                h.Z)(this, e),
                this.isDetached = !1,
                this.container = t,
                this.globalMouse = !t || o,
                this.longPressThreshold = i,
                this.validContainers = s,
                this._listeners = Object.create(null),
                this._handleInitialEvent = this._handleInitialEvent.bind(this),
                this._handleMoveEvent = this._handleMoveEvent.bind(this),
                this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this),
                this._keyListener = this._keyListener.bind(this),
                this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this),
                this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this),
                this._removeTouchMoveWindowListener = wo("touchmove", function() {}, window),
                this._removeKeyDownListener = wo("keydown", this._keyListener),
                this._removeKeyUpListener = wo("keyup", this._keyListener),
                this._removeDropFromOutsideListener = wo("drop", this._dropFromOutsideListener),
                this._removeDragOverFromOutsideListener = wo("dragover", this._dragOverFromOutsideListener),
                this._addInitialEventListener()
            }
            return (0,
            y.Z)(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this._listeners[e] || (this._listeners[e] = []);
                    return n.push(t),
                    {
                        remove: function() {
                            var e = n.indexOf(t);
                            -1 !== e && n.splice(e, 1)
                        }
                    }
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    var o;
                    return (this._listeners[e] || []).forEach(function(e) {
                        void 0 === o && (o = e.apply(void 0, n))
                    }),
                    o
                }
            }, {
                key: "teardown",
                value: function() {
                    this.isDetached = !0,
                    this._listeners = Object.create(null),
                    this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener(),
                    this._removeInitialEventListener && this._removeInitialEventListener(),
                    this._removeEndListener && this._removeEndListener(),
                    this._onEscListener && this._onEscListener(),
                    this._removeMoveListener && this._removeMoveListener(),
                    this._removeKeyUpListener && this._removeKeyUpListener(),
                    this._removeKeyDownListener && this._removeKeyDownListener(),
                    this._removeDropFromOutsideListener && this._removeDropFromOutsideListener(),
                    this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener()
                }
            }, {
                key: "isSelected",
                value: function(e) {
                    var t = this._selectRect;
                    return !(!t || !this.selecting) && Do(t, ko(e))
                }
            }, {
                key: "filter",
                value: function(e) {
                    return this._selectRect && this.selecting ? e.filter(this.isSelected, this) : []
                }
            }, {
                key: "_addLongPressListener",
                value: function(e, t) {
                    var n = this
                      , r = null
                      , o = null
                      , a = null
                      , i = function(t) {
                        r = setTimeout(function() {
                            s(),
                            e(t)
                        }, n.longPressThreshold),
                        o = wo("touchmove", function() {
                            return s()
                        }),
                        a = wo("touchend", function() {
                            return s()
                        })
                    }
                      , l = wo("touchstart", i)
                      , s = function() {
                        r && clearTimeout(r),
                        o && o(),
                        a && a(),
                        r = null,
                        o = null,
                        a = null
                    };
                    return t && i(t),
                    function() {
                        s(),
                        l()
                    }
                }
            }, {
                key: "_addInitialEventListener",
                value: function() {
                    var e = this
                      , t = wo("mousedown", function(t) {
                        e._removeInitialEventListener(),
                        e._handleInitialEvent(t),
                        e._removeInitialEventListener = wo("mousedown", e._handleInitialEvent)
                    })
                      , n = wo("touchstart", function(t) {
                        e._removeInitialEventListener(),
                        e._removeInitialEventListener = e._addLongPressListener(e._handleInitialEvent, t)
                    });
                    this._removeInitialEventListener = function() {
                        t(),
                        n()
                    }
                }
            }, {
                key: "_dropFromOutsideListener",
                value: function(e) {
                    var t = To(e)
                      , n = t.pageX
                      , r = t.pageY
                      , o = t.clientX
                      , a = t.clientY;
                    this.emit("dropFromOutside", {
                        x: n,
                        y: r,
                        clientX: o,
                        clientY: a
                    }),
                    e.preventDefault()
                }
            }, {
                key: "_dragOverFromOutsideListener",
                value: function(e) {
                    var t = To(e)
                      , n = t.pageX
                      , r = t.pageY
                      , o = t.clientX
                      , a = t.clientY;
                    this.emit("dragOverFromOutside", {
                        x: n,
                        y: r,
                        clientX: o,
                        clientY: a
                    }),
                    e.preventDefault()
                }
            }, {
                key: "_handleInitialEvent",
                value: function(e) {
                    if (!this.isDetached) {
                        var t, n = To(e), r = n.clientX, o = n.clientY, a = n.pageX, i = n.pageY, l = this.container();
                        if (3 !== e.which && 2 !== e.button && function(e, t, n) {
                            return !e || (0,
                            wn.default)(e, document.elementFromPoint(t, n))
                        }(l, r, o)) {
                            if (!this.globalMouse && l && !(0,
                            wn.default)(l, e.target)) {
                                var s = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                    "object" !== (0,
                                    v.Z)(e) && (e = {
                                        top: e,
                                        left: e,
                                        right: e,
                                        bottom: e
                                    });
                                    return e
                                }(0)
                                  , c = s.top
                                  , u = s.left
                                  , d = s.bottom
                                  , f = s.right;
                                if (!Do({
                                    top: (t = ko(l)).top - c,
                                    left: t.left - u,
                                    bottom: t.bottom + d,
                                    right: t.right + f
                                }, {
                                    top: i,
                                    left: a
                                }))
                                    return
                            }
                            if (!1 !== this.emit("beforeSelect", this._initialEventData = {
                                isTouch: /^touch/.test(e.type),
                                x: a,
                                y: i,
                                clientX: r,
                                clientY: o
                            }))
                                switch (e.type) {
                                case "mousedown":
                                    this._removeEndListener = wo("mouseup", this._handleTerminatingEvent),
                                    this._onEscListener = wo("keydown", this._handleTerminatingEvent),
                                    this._removeMoveListener = wo("mousemove", this._handleMoveEvent);
                                    break;
                                case "touchstart":
                                    this._handleMoveEvent(e),
                                    this._removeEndListener = wo("touchend", this._handleTerminatingEvent),
                                    this._removeMoveListener = wo("touchmove", this._handleMoveEvent)
                                }
                        }
                    }
                }
            }, {
                key: "_isWithinValidContainer",
                value: function(e) {
                    var t = e.target
                      , n = this.validContainers;
                    return !(n && n.length && t) || n.some(function(e) {
                        return !!t.closest(e)
                    })
                }
            }, {
                key: "_handleTerminatingEvent",
                value: function(e) {
                    var t = To(e)
                      , n = t.pageX
                      , r = t.pageY;
                    if (this.selecting = !1,
                    this._removeEndListener && this._removeEndListener(),
                    this._removeMoveListener && this._removeMoveListener(),
                    this._initialEventData) {
                        var o = !this.container || (0,
                        wn.default)(this.container(), e.target)
                          , a = this._isWithinValidContainer(e)
                          , i = this._selectRect
                          , l = this.isClick(n, r);
                        return this._initialEventData = null,
                        "Escape" !== e.key && a ? l && o ? this._handleClickEvent(e) : l ? this.emit("reset") : this.emit("select", i) : this.emit("reset")
                    }
                }
            }, {
                key: "_handleClickEvent",
                value: function(e) {
                    var t = To(e)
                      , n = t.pageX
                      , r = t.pageY
                      , o = t.clientX
                      , a = t.clientY
                      , i = (new Date).getTime();
                    return this._lastClickData && i - this._lastClickData.timestamp < 250 ? (this._lastClickData = null,
                    this.emit("doubleClick", {
                        x: n,
                        y: r,
                        clientX: o,
                        clientY: a
                    })) : (this._lastClickData = {
                        timestamp: i
                    },
                    this.emit("click", {
                        x: n,
                        y: r,
                        clientX: o,
                        clientY: a
                    }))
                }
            }, {
                key: "_handleMoveEvent",
                value: function(e) {
                    if (null !== this._initialEventData && !this.isDetached) {
                        var t = this._initialEventData
                          , n = t.x
                          , r = t.y
                          , o = To(e)
                          , a = o.pageX
                          , i = o.pageY
                          , l = Math.abs(n - a)
                          , s = Math.abs(r - i)
                          , c = Math.min(a, n)
                          , u = Math.min(i, r)
                          , d = this.selecting;
                        (!this.isClick(a, i) || d || l || s) && (this.selecting = !0,
                        this._selectRect = {
                            top: u,
                            left: c,
                            x: a,
                            y: i,
                            right: c + l,
                            bottom: u + s
                        },
                        d || this.emit("selectStart", this._initialEventData),
                        this.isClick(a, i) || this.emit("selecting", this._selectRect),
                        e.preventDefault())
                    }
                }
            }, {
                key: "_keyListener",
                value: function(e) {
                    this.ctrl = e.metaKey || e.ctrlKey
                }
            }, {
                key: "isClick",
                value: function(e, t) {
                    var n = this._initialEventData
                      , r = n.x
                      , o = n.y;
                    return !n.isTouch && Math.abs(e - r) <= 5 && Math.abs(t - o) <= 5
                }
            }]),
            e
        }();
        function Do(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , r = ko(e)
              , o = r.top
              , a = r.left
              , i = r.right
              , l = void 0 === i ? a : i
              , s = r.bottom
              , c = void 0 === s ? o : s
              , u = ko(t)
              , d = u.top
              , f = u.left
              , p = u.right
              , m = void 0 === p ? f : p
              , v = u.bottom;
            return !(c - n < d || o + n > (void 0 === v ? d : v) || l - n < f || a + n > m)
        }
        function ko(e) {
            if (!e.getBoundingClientRect)
                return e;
            var t = e.getBoundingClientRect()
              , n = t.left + No("left")
              , r = t.top + No("top");
            return {
                top: r,
                left: n,
                right: (e.offsetWidth || 0) + n,
                bottom: (e.offsetHeight || 0) + r
            }
        }
        function No(e) {
            return "left" === e ? window.pageXOffset || document.body.scrollLeft || 0 : "top" === e ? window.pageYOffset || document.body.scrollTop || 0 : void 0
        }
        var Po = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n(e, o) {
                var a;
                return (0,
                h.Z)(this, n),
                (a = t.call(this, e, o)).state = {
                    selecting: !1
                },
                a.containerRef = (0,
                r.createRef)(),
                a
            }
            return (0,
            y.Z)(n, [{
                key: "componentDidMount",
                value: function() {
                    this.props.selectable && this._selectable()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._teardownSelectable()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    !e.selectable && this.props.selectable && this._selectable(),
                    e.selectable && !this.props.selectable && this._teardownSelectable()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.range
                      , n = e.getNow
                      , o = e.getters
                      , a = e.date
                      , i = e.components.dateCellWrapper
                      , l = e.localizer
                      , s = this.state
                      , c = s.selecting
                      , u = s.startIdx
                      , d = s.endIdx
                      , f = n();
                    return r.createElement("div", {
                        className: "rbc-row-bg",
                        ref: this.containerRef
                    }, t.map(function(e, n) {
                        var s = c && n >= u && n <= d
                          , p = o.dayProp(e)
                          , m = p.className
                          , v = p.style;
                        return r.createElement(i, {
                            key: n,
                            value: e,
                            range: t
                        }, r.createElement("div", {
                            style: v,
                            className: (0,
                            T.default)("rbc-day-bg", m, s && "rbc-selected-cell", l.isSameDate(e, f) && "rbc-today", a && l.neq(a, e, "month") && "rbc-off-range-bg")
                        }))
                    }))
                }
            }, {
                key: "_selectable",
                value: function() {
                    var e = this
                      , t = this.containerRef.current
                      , n = this._selector = new Co(this.props.container,{
                        longPressThreshold: this.props.longPressThreshold
                    })
                      , r = function(n, r) {
                        if (!So(t, n) && !Oo(t, n)) {
                            var o = ko(t)
                              , a = e.props
                              , i = a.range
                              , l = a.rtl;
                            if (function(e, t) {
                                var n = t.x
                                  , r = t.y;
                                return r >= e.top && r <= e.bottom && n >= e.left && n <= e.right
                            }(o, n)) {
                                var s = ho(o, n.x, l, i.length);
                                e._selectSlot({
                                    startIdx: s,
                                    endIdx: s,
                                    action: r,
                                    box: n
                                })
                            }
                        }
                        e._initial = {},
                        e.setState({
                            selecting: !1
                        })
                    };
                    n.on("selecting", function(r) {
                        var o = e.props
                          , a = o.range
                          , i = o.rtl
                          , l = -1
                          , s = -1;
                        if (e.state.selecting || (Ur(e.props.onSelectStart, [r]),
                        e._initial = {
                            x: r.x,
                            y: r.y
                        }),
                        n.isSelected(t)) {
                            var c = ko(t)
                              , u = function(e, t, n, r, o) {
                                var a = -1
                                  , i = -1
                                  , l = r - 1
                                  , s = vo(t, r)
                                  , c = ho(t, n.x, o, r)
                                  , u = t.top < n.y && t.bottom > n.y
                                  , d = t.top < e.y && t.bottom > e.y
                                  , f = e.y > t.bottom
                                  , p = t.top > e.y;
                                return n.top < t.top && n.bottom > t.bottom && (a = 0,
                                i = l),
                                u && (p ? (a = 0,
                                i = c) : f && (a = c,
                                i = l)),
                                d && (a = i = o ? l - Math.floor((e.x - t.left) / s) : Math.floor((e.x - t.left) / s),
                                u ? c < a ? a = c : i = c : e.y < n.y ? i = l : a = 0),
                                {
                                    startIdx: a,
                                    endIdx: i
                                }
                            }(e._initial, c, r, a.length, i);
                            l = u.startIdx,
                            s = u.endIdx
                        }
                        e.setState({
                            selecting: !0,
                            startIdx: l,
                            endIdx: s
                        })
                    }),
                    n.on("beforeSelect", function(t) {
                        if ("ignoreEvents" === e.props.selectable)
                            return !So(e.containerRef.current, t)
                    }),
                    n.on("click", function(e) {
                        return r(e, "click")
                    }),
                    n.on("doubleClick", function(e) {
                        return r(e, "doubleClick")
                    }),
                    n.on("select", function(t) {
                        e._selectSlot((0,
                        p.Z)((0,
                        p.Z)({}, e.state), {}, {
                            action: "select",
                            bounds: t
                        })),
                        e._initial = {},
                        e.setState({
                            selecting: !1
                        }),
                        Ur(e.props.onSelectEnd, [e.state])
                    })
                }
            }, {
                key: "_teardownSelectable",
                value: function() {
                    this._selector && (this._selector.teardown(),
                    this._selector = null)
                }
            }, {
                key: "_selectSlot",
                value: function(e) {
                    var t = e.endIdx
                      , n = e.startIdx
                      , r = e.action
                      , o = e.bounds
                      , a = e.box;
                    -1 !== t && -1 !== n && this.props.onSelectSlot && this.props.onSelectSlot({
                        start: n,
                        end: t,
                        action: r,
                        bounds: o,
                        box: a,
                        resourceId: this.props.resourceId
                    })
                }
            }]),
            n
        }(r.Component)
          , xo = (D().object.isRequired,
        D().object,
        D().bool,
        D().object.isRequired,
        D().object.isRequired,
        D().object.isRequired,
        D().object.isRequired,
        D().func,
        D().func,
        D().func,
        {
            segments: [],
            selected: {}
        })
          , _o = function(e, t) {
            var n = e.selected;
            e.isAllDay;
            var o = e.accessors
              , a = e.getters
              , i = e.onSelect
              , l = e.onDoubleClick
              , s = e.onKeyPress
              , c = e.localizer
              , u = e.slotMetrics
              , d = e.components
              , f = e.resizable
              , p = u.continuesPrior(t)
              , m = u.continuesAfter(t);
            return r.createElement(po, {
                event: t,
                getters: a,
                localizer: c,
                accessors: o,
                components: d,
                onSelect: i,
                onDoubleClick: l,
                onKeyPress: s,
                continuesPrior: p,
                continuesAfter: m,
                slotStart: u.first,
                slotEnd: u.last,
                selected: mo(t, n),
                resizable: f
            })
        }
          , Mo = function(e, t, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : " "
              , a = Math.abs(t) / e * 100 + "%";
            return r.createElement("div", {
                key: n,
                className: "rbc-row-segment",
                style: {
                    WebkitFlexBasis: a,
                    flexBasis: a,
                    maxWidth: a
                }
            }, o)
        }
          , Ro = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n() {
                return (0,
                h.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            y.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.segments
                      , o = t.slotMetrics.slots
                      , a = t.className
                      , i = 1;
                    return r.createElement("div", {
                        className: (0,
                        T.default)(a, "rbc-row")
                    }, n.reduce(function(t, n, r) {
                        var a = n.event
                          , l = n.left
                          , s = n.right
                          , c = n.span
                          , u = "_lvl_" + r
                          , d = l - i
                          , f = _o(e.props, a);
                        return d && t.push(Mo(o, d, "".concat(u, "_gap"))),
                        t.push(Mo(o, c, u, f)),
                        i = s + 1,
                        t
                    }, []))
                }
            }]),
            n
        }(r.Component);
        function Ao(e) {
            var t = e.dateRange
              , n = e.unit
              , r = void 0 === n ? "day" : n
              , o = e.localizer;
            return {
                first: t[0],
                last: o.add(t[t.length - 1], 1, r)
            }
        }
        function Io(e) {
            var t, n, r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0, a = [], i = [];
            for (t = 0; t < e.length; t++) {
                for (r = e[t],
                n = 0; n < a.length && jo(r, a[n]); n++)
                    ;
                n >= o ? i.push(r) : (a[n] || (a[n] = [])).push(r)
            }
            for (t = 0; t < a.length; t++)
                a[t].sort(function(e, t) {
                    return e.left - t.left
                });
            return {
                levels: a,
                extra: i
            }
        }
        function Lo(e, t, n, r, o) {
            var a = {
                start: r.start(e),
                end: r.end(e)
            }
              , i = {
                start: t,
                end: n
            };
            return o.inEventRange({
                event: a,
                range: i
            })
        }
        function jo(e, t) {
            return t.some(function(t) {
                return t.left <= e.right && t.right >= e.left
            })
        }
        function Zo(e, t, n, r) {
            var o = {
                start: n.start(e),
                end: n.end(e),
                allDay: n.allDay(e)
            }
              , a = {
                start: n.start(t),
                end: n.end(t),
                allDay: n.allDay(t)
            };
            return r.sortEvents({
                evtA: o,
                evtB: a
            })
        }
        Ro.defaultProps = (0,
        p.Z)({}, xo);
        var Bo = function(e, t) {
            return e.left <= t && e.right >= t
        }
          , Ho = function(e, t) {
            return e.filter(function(e) {
                return Bo(e, t)
            }).length
        }
          , Fo = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n() {
                return (0,
                h.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            y.Z)(n, [{
                key: "render",
                value: function() {
                    for (var e = this.props, t = e.segments, n = e.slotMetrics.slots, o = Io(t).levels[0], a = 1, i = 1, l = []; a <= n; ) {
                        var s = "_lvl_" + a
                          , c = o.filter(function(e) {
                            return Bo(e, a)
                        })[0] || {}
                          , u = c.event
                          , d = c.left
                          , f = c.right
                          , p = c.span;
                        if (u) {
                            var m = Math.max(0, d - i);
                            if (this.canRenderSlotEvent(d, p)) {
                                var v = _o(this.props, u);
                                m && l.push(Mo(n, m, s + "_gap")),
                                l.push(Mo(n, p, s, v)),
                                i = a = f + 1
                            } else
                                m && l.push(Mo(n, m, s + "_gap")),
                                l.push(Mo(n, 1, s, this.renderShowMore(t, a))),
                                i = a += 1
                        } else
                            a++
                    }
                    return r.createElement("div", {
                        className: "rbc-row"
                    }, l)
                }
            }, {
                key: "canRenderSlotEvent",
                value: function(e, t) {
                    var n = this.props.segments;
                    return _n(e, e + t).every(function(e) {
                        return 1 === Ho(n, e)
                    })
                }
            }, {
                key: "renderShowMore",
                value: function(e, t) {
                    var n = this
                      , o = this.props.localizer
                      , a = Ho(e, t);
                    return !!a && r.createElement("button", {
                        type: "button",
                        key: "sm_" + t,
                        className: (0,
                        T.default)("rbc-button-link", "rbc-show-more"),
                        onClick: function(e) {
                            return n.showMore(t, e)
                        }
                    }, o.messages.showMore(a))
                }
            }, {
                key: "showMore",
                value: function(e, t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    this.props.onShowMore(e, t.target)
                }
            }]),
            n
        }(r.Component);
        Fo.defaultProps = (0,
        p.Z)({}, xo);
        var Uo = function(e) {
            var t = e.children;
            return r.createElement("div", {
                className: "rbc-row-content-scroll-container"
            }, t)
        }
          , zo = function(e, t) {
            return e.left <= t && e.right >= t
        }
          , Yo = function(e, t) {
            return e[0].range === t[0].range && e[0].events === t[0].events
        };
        function Wo() {
            return In(function(e) {
                for (var t = e.range, n = e.events, r = e.maxRows, o = e.minRows, a = e.accessors, i = e.localizer, l = Ao({
                    dateRange: t,
                    localizer: i
                }), s = l.first, c = l.last, u = n.map(function(e) {
                    return function(e, t, n, r) {
                        var o = Ao({
                            dateRange: t,
                            localizer: r
                        })
                          , a = o.first
                          , i = o.last
                          , l = r.diff(a, i, "day")
                          , s = r.max(r.startOf(n.start(e), "day"), a)
                          , c = r.min(r.ceil(n.end(e), "day"), i)
                          , u = kn(t, function(e) {
                            return r.isSameDate(e, s)
                        })
                          , d = r.diff(s, c, "day");
                        return d = Math.min(d, l),
                        {
                            event: e,
                            span: d = Math.max(d - r.segmentOffset, 1),
                            left: u + 1,
                            right: Math.max(u + d, 1)
                        }
                    }(e, t, a, i)
                }), d = Io(u, Math.max(r - 1, 1)), f = d.levels, m = d.extra, v = m.length > 0 ? o - 1 : o; f.length < v; )
                    f.push([]);
                return {
                    first: s,
                    last: c,
                    levels: f,
                    extra: m,
                    range: t,
                    slots: t.length,
                    clone: function(t) {
                        return Wo()((0,
                        p.Z)((0,
                        p.Z)({}, e), t))
                    },
                    getDateForSlot: function(e) {
                        return t[e]
                    },
                    getSlotForDate: function(e) {
                        return t.find(function(t) {
                            return i.isSameDate(t, e)
                        })
                    },
                    getEventsForSlot: function(e) {
                        return u.filter(function(t) {
                            return zo(t, e)
                        }).map(function(e) {
                            return e.event
                        })
                    },
                    continuesPrior: function(e) {
                        return i.continuesPrior(a.start(e), s)
                    },
                    continuesAfter: function(e) {
                        var t = a.start(e)
                          , n = a.end(e);
                        return i.continuesAfter(t, n, c)
                    }
                }
            }, Yo)
        }
        var Vo = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n() {
                var e;
                (0,
                h.Z)(this, n);
                for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
                    a[i] = arguments[i];
                return (e = t.call.apply(t, [this].concat(a))).handleSelectSlot = function(t) {
                    var n = e.props
                      , r = n.range;
                    (0,
                    n.onSelectSlot)(r.slice(t.start, t.end + 1), t)
                }
                ,
                e.handleShowMore = function(t, n) {
                    var r, o = e.props, a = o.range, i = o.onShowMore, l = e.slotMetrics(e.props), s = (0,
                    En.Z)(e.containerRef.current, ".rbc-row-bg")[0];
                    s && (r = s.children[t - 1]),
                    i(l.getEventsForSlot(t), a[t - 1], r, t, n)
                }
                ,
                e.getContainer = function() {
                    var t = e.props.container;
                    return t ? t() : e.containerRef.current
                }
                ,
                e.renderHeadingCell = function(t, n) {
                    var r = e.props
                      , o = r.renderHeader
                      , a = r.getNow
                      , i = r.localizer;
                    return o({
                        date: t,
                        key: "header_".concat(n),
                        className: (0,
                        T.default)("rbc-date-cell", i.isSameDate(t, a()) && "rbc-now")
                    })
                }
                ,
                e.renderDummy = function() {
                    var t = e.props
                      , n = t.className
                      , o = t.range
                      , a = t.renderHeader
                      , i = t.showAllEvents;
                    return r.createElement("div", {
                        className: n,
                        ref: e.containerRef
                    }, r.createElement("div", {
                        className: (0,
                        T.default)("rbc-row-content", i && "rbc-row-content-scrollable")
                    }, a && r.createElement("div", {
                        className: "rbc-row",
                        ref: e.headingRowRef
                    }, o.map(e.renderHeadingCell)), r.createElement("div", {
                        className: "rbc-row",
                        ref: e.eventRowRef
                    }, r.createElement("div", {
                        className: "rbc-row-segment"
                    }, r.createElement("div", {
                        className: "rbc-event"
                    }, r.createElement("div", {
                        className: "rbc-event-content"
                    }, " "))))))
                }
                ,
                e.containerRef = (0,
                r.createRef)(),
                e.headingRowRef = (0,
                r.createRef)(),
                e.eventRowRef = (0,
                r.createRef)(),
                e.slotMetrics = Wo(),
                e
            }
            return (0,
            y.Z)(n, [{
                key: "getRowLimit",
                value: function() {
                    var e, t = (0,
                    gn.Z)(this.eventRowRef.current), n = null !== (e = this.headingRowRef) && void 0 !== e && e.current ? (0,
                    gn.Z)(this.headingRowRef.current) : 0, r = (0,
                    gn.Z)(this.containerRef.current) - n;
                    return Math.max(Math.floor(r / t), 1)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.date
                      , n = e.rtl
                      , o = e.range
                      , a = e.className
                      , i = e.selected
                      , l = e.selectable
                      , s = e.renderForMeasure
                      , c = e.accessors
                      , u = e.getters
                      , d = e.components
                      , f = e.getNow
                      , p = e.renderHeader
                      , m = e.onSelect
                      , v = e.localizer
                      , h = e.onSelectStart
                      , y = e.onSelectEnd
                      , b = e.onDoubleClick
                      , g = e.onKeyPress
                      , E = e.resourceId
                      , w = e.longPressThreshold
                      , S = e.isAllDay
                      , O = e.resizable
                      , C = e.showAllEvents;
                    if (s)
                        return this.renderDummy();
                    var D = this.slotMetrics(this.props)
                      , k = D.levels
                      , N = D.extra
                      , P = C ? Uo : Zr
                      , x = d.weekWrapper
                      , _ = {
                        selected: i,
                        accessors: c,
                        getters: u,
                        localizer: v,
                        components: d,
                        onSelect: m,
                        onDoubleClick: b,
                        onKeyPress: g,
                        resourceId: E,
                        slotMetrics: D,
                        resizable: O
                    };
                    return r.createElement("div", {
                        className: a,
                        role: "rowgroup",
                        ref: this.containerRef
                    }, r.createElement(Po, {
                        localizer: v,
                        date: t,
                        getNow: f,
                        rtl: n,
                        range: o,
                        selectable: l,
                        container: this.getContainer,
                        getters: u,
                        onSelectStart: h,
                        onSelectEnd: y,
                        onSelectSlot: this.handleSelectSlot,
                        components: d,
                        longPressThreshold: w,
                        resourceId: E
                    }), r.createElement("div", {
                        className: (0,
                        T.default)("rbc-row-content", C && "rbc-row-content-scrollable"),
                        role: "row"
                    }, p && r.createElement("div", {
                        className: "rbc-row ",
                        ref: this.headingRowRef
                    }, o.map(this.renderHeadingCell)), r.createElement(P, null, r.createElement(x, Object.assign({
                        isAllDay: S
                    }, _, {
                        rtl: this.props.rtl
                    }), k.map(function(e, t) {
                        return r.createElement(Ro, Object.assign({
                            key: t,
                            segments: e
                        }, _))
                    }), !!N.length && r.createElement(Fo, Object.assign({
                        segments: N,
                        onShowMore: this.handleShowMore
                    }, _))))))
                }
            }]),
            n
        }(r.Component);
        Vo.defaultProps = {
            minRows: 0,
            maxRows: 1 / 0
        };
        var Ko = function(e) {
            var t = e.label;
            return r.createElement("span", {
                role: "columnheader",
                "aria-sort": "none"
            }, t)
        }
          , Xo = function(e) {
            var t = e.label
              , n = e.drilldownView
              , o = e.onDrillDown;
            return n ? r.createElement("button", {
                type: "button",
                className: "rbc-button-link",
                onClick: o,
                role: "cell"
            }, t) : r.createElement("span", null, t)
        }
          , qo = ["date", "className"]
          , $o = function(e, t, n, r, o) {
            return e.filter(function(e) {
                return Lo(e, t, n, r, o)
            })
        }
          , Go = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n() {
                var e;
                (0,
                h.Z)(this, n);
                for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
                    a[i] = arguments[i];
                return (e = t.call.apply(t, [this].concat(a))).getContainer = function() {
                    return e.containerRef.current
                }
                ,
                e.renderWeek = function(t, n) {
                    var o = e.props
                      , a = o.events
                      , i = o.components
                      , l = o.selectable
                      , s = o.getNow
                      , c = o.selected
                      , u = o.date
                      , d = o.localizer
                      , f = o.longPressThreshold
                      , p = o.accessors
                      , m = o.getters
                      , v = o.showAllEvents
                      , h = e.state
                      , y = h.needLimitMeasure
                      , b = h.rowLimit
                      , g = $o((0,
                    de.Z)(a), t[0], t[t.length - 1], p, d);
                    return g.sort(function(e, t) {
                        return Zo(e, t, p, d)
                    }),
                    r.createElement(Vo, {
                        key: n,
                        ref: 0 === n ? e.slotRowRef : void 0,
                        container: e.getContainer,
                        className: "rbc-month-row",
                        getNow: s,
                        date: u,
                        range: t,
                        events: g,
                        maxRows: v ? 1 / 0 : b,
                        selected: c,
                        selectable: l,
                        components: i,
                        accessors: p,
                        getters: m,
                        localizer: d,
                        renderHeader: e.readerDateHeading,
                        renderForMeasure: y,
                        onShowMore: e.handleShowMore,
                        onSelect: e.handleSelectEvent,
                        onDoubleClick: e.handleDoubleClickEvent,
                        onKeyPress: e.handleKeyPressEvent,
                        onSelectSlot: e.handleSelectSlot,
                        longPressThreshold: f,
                        rtl: e.props.rtl,
                        resizable: e.props.resizable,
                        showAllEvents: v
                    })
                }
                ,
                e.readerDateHeading = function(t) {
                    var n = t.date
                      , o = t.className
                      , a = (0,
                    m.Z)(t, qo)
                      , i = e.props
                      , l = i.date
                      , s = i.getDrilldownView
                      , c = i.localizer
                      , u = c.neq(n, l, "month")
                      , d = c.isSameDate(n, l)
                      , f = s(n)
                      , p = c.format(n, "dateFormat")
                      , v = e.props.components.dateHeader || Xo;
                    return r.createElement("div", Object.assign({}, a, {
                        className: (0,
                        T.default)(o, u && "rbc-off-range", d && "rbc-current"),
                        role: "cell"
                    }), r.createElement(v, {
                        label: p,
                        date: n,
                        drilldownView: f,
                        isOffRange: u,
                        onDrillDown: function(t) {
                            return e.handleHeadingClick(n, f, t)
                        }
                    }))
                }
                ,
                e.handleSelectSlot = function(t, n) {
                    e._pendingSelection = e._pendingSelection.concat(t),
                    clearTimeout(e._selectTimer),
                    e._selectTimer = setTimeout(function() {
                        return e.selectDates(n)
                    })
                }
                ,
                e.handleHeadingClick = function(t, n, r) {
                    r.preventDefault(),
                    e.clearSelection(),
                    Ur(e.props.onDrillDown, [t, n])
                }
                ,
                e.handleSelectEvent = function() {
                    e.clearSelection();
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    Ur(e.props.onSelectEvent, n)
                }
                ,
                e.handleDoubleClickEvent = function() {
                    e.clearSelection();
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    Ur(e.props.onDoubleClickEvent, n)
                }
                ,
                e.handleKeyPressEvent = function() {
                    e.clearSelection();
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    Ur(e.props.onKeyPressEvent, n)
                }
                ,
                e.handleShowMore = function(t, n, r, o, a) {
                    var i = e.props
                      , l = i.popup
                      , s = i.onDrillDown
                      , c = i.onShowMore
                      , u = i.getDrilldownView
                      , d = i.doShowMoreDrillDown;
                    if (e.clearSelection(),
                    l) {
                        var f = (0,
                        Se.Z)(r, e.containerRef.current);
                        e.setState({
                            overlay: {
                                date: n,
                                events: t,
                                position: f,
                                target: a
                            }
                        })
                    } else
                        d && Ur(s, [n, u(n) || Hr.DAY]);
                    Ur(c, [t, n, o])
                }
                ,
                e.overlayDisplay = function() {
                    e.setState({
                        overlay: null
                    })
                }
                ,
                e.state = {
                    rowLimit: 5,
                    needLimitMeasure: !0,
                    date: null
                },
                e.containerRef = (0,
                r.createRef)(),
                e.slotRowRef = (0,
                r.createRef)(),
                e._bgRows = [],
                e._pendingSelection = [],
                e
            }
            return (0,
            y.Z)(n, [{
                key: "componentDidMount",
                value: function() {
                    var e, t = this;
                    this.state.needLimitMeasure && this.measureRowLimit(this.props),
                    window.addEventListener("resize", this._resizeListener = function() {
                        e || Oe.W(function() {
                            e = !1,
                            t.setState({
                                needLimitMeasure: !0
                            })
                        })
                    }
                    , !1)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.state.needLimitMeasure && this.measureRowLimit(this.props)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("resize", this._resizeListener, !1)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.date
                      , n = e.localizer
                      , o = e.className
                      , a = n.visibleDays(t, n)
                      , i = we(a, 7);
                    return this._weekCount = i.length,
                    r.createElement("div", {
                        className: (0,
                        T.default)("rbc-month-view", o),
                        role: "table",
                        "aria-label": "Month View",
                        ref: this.containerRef
                    }, r.createElement("div", {
                        className: "rbc-row rbc-month-header",
                        role: "row"
                    }, this.renderHeaders(i[0])), i.map(this.renderWeek), this.props.popup && this.renderOverlay())
                }
            }, {
                key: "renderHeaders",
                value: function(e) {
                    var t = this.props
                      , n = t.localizer
                      , o = t.components
                      , a = e[0]
                      , i = e[e.length - 1]
                      , l = o.header || Ko;
                    return n.range(a, i, "day").map(function(e, t) {
                        return r.createElement("div", {
                            key: "header_" + t,
                            className: "rbc-header"
                        }, r.createElement(l, {
                            date: e,
                            localizer: n,
                            label: n.format(e, "weekdayFormat")
                        }))
                    })
                }
            }, {
                key: "renderOverlay",
                value: function() {
                    var e, t, n = this, o = null !== (e = null === (t = this.state) || void 0 === t ? void 0 : t.overlay) && void 0 !== e ? e : {}, a = this.props, i = a.accessors, l = a.localizer, s = a.components, c = a.getters, u = a.selected, d = a.popupOffset, f = a.handleDragStart;
                    return r.createElement(Eo, {
                        overlay: o,
                        accessors: i,
                        localizer: l,
                        components: s,
                        getters: c,
                        selected: u,
                        popupOffset: d,
                        ref: this.containerRef,
                        handleKeyPressEvent: this.handleKeyPressEvent,
                        handleSelectEvent: this.handleSelectEvent,
                        handleDoubleClickEvent: this.handleDoubleClickEvent,
                        handleDragStart: f,
                        show: !!o.position,
                        overlayDisplay: this.overlayDisplay,
                        onHide: function() {
                            return n.setState({
                                overlay: null
                            })
                        }
                    })
                }
            }, {
                key: "measureRowLimit",
                value: function() {
                    this.setState({
                        needLimitMeasure: !1,
                        rowLimit: this.slotRowRef.current.getRowLimit()
                    })
                }
            }, {
                key: "selectDates",
                value: function(e) {
                    var t = this._pendingSelection.slice();
                    this._pendingSelection = [],
                    t.sort(function(e, t) {
                        return +e - +t
                    });
                    var n = new Date(t[0])
                      , r = new Date(t[t.length - 1]);
                    r.setDate(t[t.length - 1].getDate() + 1),
                    Ur(this.props.onSelectSlot, {
                        slots: t,
                        start: n,
                        end: r,
                        action: e.action,
                        bounds: e.bounds,
                        box: e.box
                    })
                }
            }, {
                key: "clearSelection",
                value: function() {
                    clearTimeout(this._selectTimer),
                    this._pendingSelection = []
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    var n = e.date;
                    return {
                        date: n,
                        needLimitMeasure: e.localizer.neq(n, t.date, "month")
                    }
                }
            }]),
            n
        }(r.Component);
        Go.range = function(e, t) {
            var n = t.localizer;
            return {
                start: n.firstVisibleDay(e, n),
                end: n.lastVisibleDay(e, n)
            }
        }
        ,
        Go.navigate = function(e, t, n) {
            var r = n.localizer;
            switch (t) {
            case Br.PREVIOUS:
                return r.add(e, -1, "month");
            case Br.NEXT:
                return r.add(e, 1, "month");
            default:
                return e
            }
        }
        ,
        Go.title = function(e, t) {
            return t.localizer.format(e, "monthHeaderFormat")
        }
        ;
        var Qo = function(e) {
            var t = e.min
              , n = e.max
              , r = e.step
              , o = e.slots
              , a = e.localizer;
            return "".concat(+a.startOf(t, "minutes")) + "".concat(+a.startOf(n, "minutes")) + "".concat(r, "-").concat(o)
        };
        function Jo(e) {
            for (var t = e.min, n = e.max, r = e.step, o = e.timeslots, a = e.localizer, i = Qo({
                start: t,
                end: n,
                step: r,
                timeslots: o,
                localizer: a
            }), l = 1 + a.getTotalMin(t, n), s = a.getMinutesFromMidnight(t), c = Math.ceil((l - 1) / (r * o)), u = c * o, d = new Array(c), f = new Array(u), p = 0; p < c; p++) {
                d[p] = new Array(o);
                for (var m = 0; m < o; m++) {
                    var v = p * o + m
                      , h = v * r;
                    f[v] = d[p][m] = a.getSlotDate(t, s, h)
                }
            }
            var y = f.length * r;
            function b(e) {
                var n = a.diff(t, e, "minutes") + a.getDstOffset(t, e);
                return Math.min(n, l)
            }
            return f.push(a.getSlotDate(t, s, y)),
            {
                groups: d,
                update: function(e) {
                    return Qo(e) !== i ? Jo(e) : this
                },
                dateIsInGroup: function(e, t) {
                    var r = d[t + 1];
                    return a.inRange(e, d[t][0], r ? r[0] : n, "minutes")
                },
                nextSlot: function(e) {
                    var t = f[Math.min(f.indexOf(e) + 1, f.length - 1)];
                    return t === e && (t = a.add(e, r, "minutes")),
                    t
                },
                closestSlotToPosition: function(e) {
                    var t = Math.min(f.length - 1, Math.max(0, Math.floor(e * u)));
                    return f[t]
                },
                closestSlotFromPoint: function(e, t) {
                    var n = Math.abs(t.top - t.bottom);
                    return this.closestSlotToPosition((e.y - t.top) / n)
                },
                closestSlotFromDate: function(e) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (a.lt(e, t, "minutes"))
                        return f[0];
                    if (a.gt(e, n, "minutes"))
                        return f[f.length - 1];
                    var i = a.diff(t, e, "minutes");
                    return f[(i - i % r) / r + o]
                },
                startsBeforeDay: function(e) {
                    return a.lt(e, t, "day")
                },
                startsAfterDay: function(e) {
                    return a.gt(e, n, "day")
                },
                startsBefore: function(e) {
                    return a.lt(a.merge(t, e), t, "minutes")
                },
                startsAfter: function(e) {
                    return a.gt(a.merge(n, e), n, "minutes")
                },
                getRange: function(e, o, i, l) {
                    i || (e = a.min(n, a.max(t, e))),
                    l || (o = a.min(n, a.max(t, o)));
                    var s = b(e)
                      , c = b(o)
                      , d = c > r * u && !a.eq(n, o) ? (s - r) / (r * u) * 100 : s / (r * u) * 100;
                    return {
                        top: d,
                        height: c / (r * u) * 100 - d,
                        start: b(e),
                        startDate: e,
                        end: b(o),
                        endDate: o
                    }
                },
                getCurrentTimePosition: function(e) {
                    return b(e) / (r * u) * 100
                }
            }
        }
        var ea = function() {
            function e(t, n) {
                var r = n.accessors
                  , o = n.slotMetrics;
                (0,
                h.Z)(this, e);
                var a = o.getRange(r.start(t), r.end(t))
                  , i = a.start
                  , l = a.startDate
                  , s = a.end
                  , c = a.endDate
                  , u = a.top
                  , d = a.height;
                this.start = i,
                this.end = s,
                this.startMs = +l,
                this.endMs = +c,
                this.top = u,
                this.height = d,
                this.data = t
            }
            return (0,
            y.Z)(e, [{
                key: "_width",
                get: function() {
                    return this.rows ? 100 / (this.rows.reduce(function(e, t) {
                        return Math.max(e, t.leaves.length + 1)
                    }, 0) + 1) : this.leaves ? (100 - this.container._width) / (this.leaves.length + 1) : this.row._width
                }
            }, {
                key: "width",
                get: function() {
                    var e = this._width
                      , t = Math.min(100, 1.7 * this._width);
                    if (this.rows)
                        return t;
                    if (this.leaves)
                        return this.leaves.length > 0 ? t : e;
                    var n = this.row.leaves;
                    return n.indexOf(this) === n.length - 1 ? e : t
                }
            }, {
                key: "xOffset",
                get: function() {
                    if (this.rows)
                        return 0;
                    if (this.leaves)
                        return this.container._width;
                    var e = this.row
                      , t = e.leaves
                      , n = e.xOffset
                      , r = e._width;
                    return n + (t.indexOf(this) + 1) * r
                }
            }]),
            e
        }();
        function ta(e, t, n) {
            return Math.abs(t.start - e.start) < n || t.start > e.start && t.start < e.end
        }
        function na(e) {
            for (var t = e.events, n = e.minimumStartDifference, r = e.slotMetrics, o = e.accessors, a = function(e) {
                for (var t = tr(e, ["startMs", function(e) {
                    return -e.endMs
                }
                ]), n = []; t.length > 0; ) {
                    var r = t.shift();
                    n.push(r);
                    for (var o = 0; o < t.length; o++) {
                        var a = t[o];
                        if (!(r.endMs > a.startMs)) {
                            if (o > 0) {
                                var i = t.splice(o, 1)[0];
                                n.push(i)
                            }
                            break
                        }
                    }
                }
                return n
            }(t.map(function(e) {
                return new ea(e,{
                    slotMetrics: r,
                    accessors: o
                })
            })), i = [], l = function() {
                var e = a[s]
                  , t = i.find(function(t) {
                    return t.end > e.start || Math.abs(e.start - t.start) < n
                });
                if (!t)
                    return e.rows = [],
                    i.push(e),
                    "continue";
                e.container = t;
                for (var r = null, o = t.rows.length - 1; !r && o >= 0; o--)
                    ta(t.rows[o], e, n) && (r = t.rows[o]);
                r ? (r.leaves.push(e),
                e.row = r) : (e.leaves = [],
                t.rows.push(e))
            }, s = 0; s < a.length; s++)
                l();
            return a.map(function(e) {
                return {
                    event: e.data,
                    style: {
                        top: e.top,
                        height: e.height,
                        width: e.width,
                        xOffset: Math.max(0, e.xOffset)
                    }
                }
            })
        }
        function ra(e, t, n) {
            for (var r = 0; r < e.friends.length; ++r)
                if (!(n.indexOf(e.friends[r]) > -1)) {
                    t = t > e.friends[r].idx ? t : e.friends[r].idx,
                    n.push(e.friends[r]);
                    var o = ra(e.friends[r], t, n);
                    t = t > o ? t : o
                }
            return t
        }
        var oa = {
            overlap: na,
            "no-overlap": function(e) {
                var t = na({
                    events: e.events,
                    minimumStartDifference: e.minimumStartDifference,
                    slotMetrics: e.slotMetrics,
                    accessors: e.accessors
                });
                t.sort(function(e, t) {
                    return e = e.style,
                    t = t.style,
                    e.top !== t.top ? e.top > t.top ? 1 : -1 : e.top + e.height < t.top + t.height ? 1 : -1
                });
                for (var n = 0; n < t.length; ++n)
                    t[n].friends = [],
                    delete t[n].style.left,
                    delete t[n].style.left,
                    delete t[n].idx,
                    delete t[n].size;
                for (var r = 0; r < t.length - 1; ++r)
                    for (var o = t[r], a = o.style.top, i = o.style.top + o.style.height, l = r + 1; l < t.length; ++l) {
                        var s = t[l]
                          , c = s.style.top
                          , u = s.style.top + s.style.height;
                        (c >= a && u <= i || u > a && u <= i || c >= a && c < i) && (o.friends.push(s),
                        s.friends.push(o))
                    }
                for (var d = 0; d < t.length; ++d) {
                    for (var f = t[d], p = [], m = 0; m < 100; ++m)
                        p.push(1);
                    for (var v = 0; v < f.friends.length; ++v)
                        void 0 !== f.friends[v].idx && (p[f.friends[v].idx] = 0);
                    f.idx = p.indexOf(1)
                }
                for (var h = 0; h < t.length; ++h) {
                    var y;
                    if (!t[h].size) {
                        var b = [];
                        y = 100 / (ra(t[h], 0, b) + 1),
                        t[h].size = y;
                        for (var g = 0; g < b.length; ++g)
                            b[g].size = y
                    }
                }
                for (var E = 0; E < t.length; ++E) {
                    var w = t[E];
                    w.style.left = w.idx * w.size;
                    for (var S = 0, O = 0; O < w.friends.length; ++O) {
                        var T = w.friends[O].idx;
                        S = S > T ? S : T
                    }
                    S <= w.idx && (w.size = 100 - w.idx * w.size);
                    var C = 0 === w.idx ? 0 : 3;
                    w.style.width = "calc(".concat(w.size, "% - ").concat(C, "px)"),
                    w.style.height = "calc(".concat(w.style.height, "% - 2px)"),
                    w.style.xOffset = "calc(".concat(w.style.left, "% + ").concat(C, "px)")
                }
                return t
            }
        };
        var aa = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n() {
                return (0,
                h.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            y.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.renderSlot
                      , n = e.resource
                      , o = e.group
                      , a = e.getters
                      , i = e.components
                      , l = (void 0 === i ? {} : i).timeSlotWrapper
                      , s = void 0 === l ? Zr : l
                      , c = a ? a.slotGroupProp(o) : {};
                    return r.createElement("div", Object.assign({
                        className: "rbc-timeslot-group"
                    }, c), o.map(function(e, o) {
                        var i = a ? a.slotProp(e, n) : {};
                        return r.createElement(s, {
                            key: o,
                            value: e,
                            resource: n
                        }, r.createElement("div", Object.assign({}, i, {
                            className: (0,
                            T.default)("rbc-time-slot", i.className)
                        }), t && t(e, o)))
                    }))
                }
            }]),
            n
        }(r.Component);
        function ia(e) {
            return "string" == typeof e ? e : e + "%"
        }
        function la(e) {
            var t = e.style
              , n = e.className
              , o = e.event
              , a = e.accessors
              , i = e.rtl
              , l = e.selected
              , s = e.label
              , c = e.continuesPrior
              , u = e.continuesAfter
              , d = e.getters
              , f = e.onClick
              , m = e.onDoubleClick
              , v = e.isBackgroundEvent
              , h = e.onKeyPress
              , y = e.components
              , b = y.event
              , g = y.eventWrapper
              , E = a.title(o)
              , w = a.tooltip(o)
              , S = a.end(o)
              , O = a.start(o)
              , C = d.eventProp(o, O, S, l)
              , D = t.height
              , k = t.top
              , N = t.width
              , P = t.xOffset
              , x = [r.createElement("div", {
                key: "1",
                className: "rbc-event-label"
            }, s), r.createElement("div", {
                key: "2",
                className: "rbc-event-content"
            }, b ? r.createElement(b, {
                event: o,
                title: E
            }) : E)]
              , _ = v ? (0,
            p.Z)((0,
            p.Z)({}, C.style), {}, (0,
            ue.Z)({
                top: ia(k),
                height: ia(D),
                width: "calc(".concat(N, " + 10px)")
            }, i ? "right" : "left", ia(Math.max(0, P)))) : (0,
            p.Z)((0,
            p.Z)({}, C.style), {}, (0,
            ue.Z)({
                top: ia(k),
                width: ia(N),
                height: ia(D)
            }, i ? "right" : "left", ia(P)));
            return r.createElement(g, Object.assign({
                type: "time"
            }, e), r.createElement("div", {
                onClick: f,
                onDoubleClick: m,
                style: _,
                onKeyPress: h,
                title: w ? ("string" == typeof s ? s + ": " : "") + w : void 0,
                className: (0,
                T.default)(v ? "rbc-background-event" : "rbc-event", n, C.className, {
                    "rbc-selected": l,
                    "rbc-event-continues-earlier": c,
                    "rbc-event-continues-later": u
                })
            }, x))
        }
        var sa = function(e) {
            var t = e.children
              , n = e.className
              , o = e.style
              , a = e.innerRef;
            return r.createElement("div", {
                className: n,
                style: o,
                ref: a
            }, t)
        }
          , ca = r.forwardRef(function(e, t) {
            return r.createElement(sa, Object.assign({}, e, {
                innerRef: t
            }))
        })
          , ua = ["dayProp"]
          , da = ["eventContainerWrapper"]
          , fa = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n() {
                var e;
                (0,
                h.Z)(this, n);
                for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
                    a[i] = arguments[i];
                return (e = t.call.apply(t, [this].concat(a))).state = {
                    selecting: !1,
                    timeIndicatorPosition: null
                },
                e.intervalTriggered = !1,
                e.renderEvents = function(t) {
                    var n = t.events
                      , o = t.isBackgroundEvent
                      , a = e.props
                      , i = a.rtl
                      , l = a.selected
                      , s = a.accessors
                      , c = a.localizer
                      , u = a.getters
                      , d = a.components
                      , f = a.step
                      , m = a.timeslots
                      , v = a.dayLayoutAlgorithm
                      , h = a.resizable
                      , y = (0,
                    Ln.Z)(e).slotMetrics
                      , b = c.messages;
                    return function(e) {
                        e.events,
                        e.minimumStartDifference,
                        e.slotMetrics,
                        e.accessors;
                        var t = e.dayLayoutAlgorithm
                          , n = t;
                        return t in oa && (n = oa[t]),
                        function(e) {
                            return !!(e && e.constructor && e.call && e.apply)
                        }(n) ? n.apply(this, arguments) : []
                    }({
                        events: n,
                        accessors: s,
                        slotMetrics: y,
                        minimumStartDifference: Math.ceil(f * m / 2),
                        dayLayoutAlgorithm: v
                    }).map(function(t, n) {
                        var a, f = t.event, m = t.style, v = s.end(f), g = s.start(f), E = "eventTimeRangeFormat", w = y.startsBeforeDay(g), S = y.startsAfterDay(v);
                        w ? E = "eventTimeRangeEndFormat" : S && (E = "eventTimeRangeStartFormat"),
                        a = w && S ? b.allDay : c.format({
                            start: g,
                            end: v
                        }, E);
                        var O = w || y.startsBefore(g)
                          , T = S || y.startsAfter(v);
                        return r.createElement(la, {
                            style: m,
                            event: f,
                            label: a,
                            key: "evt_" + n,
                            getters: u,
                            rtl: i,
                            components: d,
                            continuesPrior: O,
                            continuesAfter: T,
                            accessors: s,
                            resource: e.props.resource,
                            selected: mo(f, l),
                            onClick: function(t) {
                                return e._select((0,
                                p.Z)((0,
                                p.Z)({}, f), {}, {
                                    sourceResource: e.props.resource
                                }), t)
                            },
                            onDoubleClick: function(t) {
                                return e._doubleClick(f, t)
                            },
                            isBackgroundEvent: o,
                            onKeyPress: function(t) {
                                return e._keyPress(f, t)
                            },
                            resizable: h
                        })
                    })
                }
                ,
                e._selectable = function() {
                    var t = e.containerRef.current
                      , n = e.props
                      , r = n.longPressThreshold
                      , o = n.localizer
                      , a = e._selector = new Co(function() {
                        return t
                    }
                    ,{
                        longPressThreshold: r
                    })
                      , i = function(t) {
                        var n = e.props.onSelecting
                          , r = e.state || {}
                          , a = l(t)
                          , i = a.startDate
                          , s = a.endDate;
                        n && (o.eq(r.startDate, i, "minutes") && o.eq(r.endDate, s, "minutes") || !1 === n({
                            start: i,
                            end: s,
                            resourceId: e.props.resource
                        })) || e.state.start === a.start && e.state.end === a.end && e.state.selecting === a.selecting || e.setState(a)
                    }
                      , l = function(n) {
                        var r = e.slotMetrics.closestSlotFromPoint(n, ko(t));
                        e.state.selecting || (e._initialSlot = r);
                        var a = e._initialSlot;
                        o.lte(a, r) ? r = e.slotMetrics.nextSlot(r) : o.gt(a, r) && (a = e.slotMetrics.nextSlot(a));
                        var i = e.slotMetrics.getRange(o.min(a, r), o.max(a, r));
                        return (0,
                        p.Z)((0,
                        p.Z)({}, i), {}, {
                            selecting: !0,
                            top: "".concat(i.top, "%"),
                            height: "".concat(i.height, "%")
                        })
                    }
                      , s = function(t, n) {
                        if (!So(e.containerRef.current, t)) {
                            var r = l(t)
                              , o = r.startDate
                              , a = r.endDate;
                            e._selectSlot({
                                startDate: o,
                                endDate: a,
                                action: n,
                                box: t
                            })
                        }
                        e.setState({
                            selecting: !1
                        })
                    };
                    a.on("selecting", i),
                    a.on("selectStart", i),
                    a.on("beforeSelect", function(t) {
                        if ("ignoreEvents" === e.props.selectable)
                            return !So(e.containerRef.current, t)
                    }),
                    a.on("click", function(e) {
                        return s(e, "click")
                    }),
                    a.on("doubleClick", function(e) {
                        return s(e, "doubleClick")
                    }),
                    a.on("select", function(t) {
                        e.state.selecting && (e._selectSlot((0,
                        p.Z)((0,
                        p.Z)({}, e.state), {}, {
                            action: "select",
                            bounds: t
                        })),
                        e.setState({
                            selecting: !1
                        }))
                    }),
                    a.on("reset", function() {
                        e.state.selecting && e.setState({
                            selecting: !1
                        })
                    })
                }
                ,
                e._teardownSelectable = function() {
                    e._selector && (e._selector.teardown(),
                    e._selector = null)
                }
                ,
                e._selectSlot = function(t) {
                    for (var n = t.startDate, r = t.endDate, o = t.action, a = t.bounds, i = t.box, l = n, s = []; e.props.localizer.lte(l, r); )
                        s.push(l),
                        l = new Date(+l + 60 * e.props.step * 1e3);
                    Ur(e.props.onSelectSlot, {
                        slots: s,
                        start: n,
                        end: r,
                        resourceId: e.props.resource,
                        action: o,
                        bounds: a,
                        box: i
                    })
                }
                ,
                e._select = function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    Ur(e.props.onSelectEvent, n)
                }
                ,
                e._doubleClick = function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    Ur(e.props.onDoubleClickEvent, n)
                }
                ,
                e._keyPress = function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    Ur(e.props.onKeyPressEvent, n)
                }
                ,
                e.slotMetrics = Jo(e.props),
                e.containerRef = (0,
                r.createRef)(),
                e
            }
            return (0,
            y.Z)(n, [{
                key: "componentDidMount",
                value: function() {
                    this.props.selectable && this._selectable(),
                    this.props.isNow && this.setTimeIndicatorPositionUpdateInterval()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._teardownSelectable(),
                    this.clearTimeIndicatorInterval()
                }
            }, {
                key: "UNSAFE_componentWillReceiveProps",
                value: function(e) {
                    e.selectable && !this.props.selectable && this._selectable(),
                    !e.selectable && this.props.selectable && this._teardownSelectable(),
                    this.slotMetrics = this.slotMetrics.update(e)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    var n = this.props
                      , r = n.getNow
                      , o = n.isNow
                      , a = n.localizer
                      , i = n.date
                      , l = n.min
                      , s = n.max
                      , c = a.neq(e.getNow(), r(), "minutes");
                    if (e.isNow !== o || c) {
                        if (this.clearTimeIndicatorInterval(),
                        o) {
                            var u = !c && a.eq(e.date, i, "minutes") && t.timeIndicatorPosition === this.state.timeIndicatorPosition;
                            this.setTimeIndicatorPositionUpdateInterval(u)
                        }
                    } else
                        o && (a.neq(e.min, l, "minutes") || a.neq(e.max, s, "minutes")) && this.positionTimeIndicator()
                }
            }, {
                key: "setTimeIndicatorPositionUpdateInterval",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.intervalTriggered || t || this.positionTimeIndicator(),
                    this._timeIndicatorTimeout = window.setTimeout(function() {
                        e.intervalTriggered = !0,
                        e.positionTimeIndicator(),
                        e.setTimeIndicatorPositionUpdateInterval()
                    }, 6e4)
                }
            }, {
                key: "clearTimeIndicatorInterval",
                value: function() {
                    this.intervalTriggered = !1,
                    window.clearTimeout(this._timeIndicatorTimeout)
                }
            }, {
                key: "positionTimeIndicator",
                value: function() {
                    var e = this.props
                      , t = e.min
                      , n = e.max
                      , r = (0,
                    e.getNow)();
                    if (r >= t && r <= n) {
                        var o = this.slotMetrics.getCurrentTimePosition(r);
                        this.intervalTriggered = !0,
                        this.setState({
                            timeIndicatorPosition: o
                        })
                    } else
                        this.clearTimeIndicatorInterval()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.date
                      , n = e.max
                      , o = e.rtl
                      , a = e.isNow
                      , i = e.resource
                      , l = e.accessors
                      , s = e.localizer
                      , c = e.getters
                      , u = c.dayProp
                      , d = (0,
                    m.Z)(c, ua)
                      , f = e.components
                      , p = f.eventContainerWrapper
                      , v = (0,
                    m.Z)(f, da)
                      , h = this.slotMetrics
                      , y = this.state
                      , b = y.selecting
                      , g = y.top
                      , E = y.height
                      , w = {
                        start: y.startDate,
                        end: y.endDate
                    }
                      , S = u(n)
                      , O = S.className
                      , C = S.style
                      , D = v.dayColumnWrapper || ca;
                    return r.createElement(D, {
                        ref: this.containerRef,
                        date: t,
                        style: C,
                        className: (0,
                        T.default)(O, "rbc-day-slot", "rbc-time-column", a && "rbc-now", a && "rbc-today", b && "rbc-slot-selecting"),
                        slotMetrics: h
                    }, h.groups.map(function(e, t) {
                        return r.createElement(aa, {
                            key: t,
                            group: e,
                            resource: i,
                            getters: d,
                            components: v
                        })
                    }), r.createElement(p, {
                        localizer: s,
                        resource: i,
                        accessors: l,
                        getters: d,
                        components: v,
                        slotMetrics: h
                    }, r.createElement("div", {
                        className: (0,
                        T.default)("rbc-events-container", o && "rtl")
                    }, this.renderEvents({
                        events: this.props.backgroundEvents,
                        isBackgroundEvent: !0
                    }), this.renderEvents({
                        events: this.props.events
                    }))), b && r.createElement("div", {
                        className: "rbc-slot-selection",
                        style: {
                            top: g,
                            height: E
                        }
                    }, r.createElement("span", null, s.format(w, "selectRangeFormat"))), a && this.intervalTriggered && r.createElement("div", {
                        className: "rbc-current-time-indicator",
                        style: {
                            top: "".concat(this.state.timeIndicatorPosition, "%")
                        }
                    }))
                }
            }]),
            n
        }(r.Component);
        fa.defaultProps = {
            dragThroughEvents: !0,
            timeslots: 2
        };
        var pa = function(e) {
            var t = e.min
              , n = e.max
              , o = e.timeslots
              , a = e.step
              , i = e.localizer
              , l = e.getNow
              , s = e.resource
              , c = e.components
              , u = e.getters
              , d = e.gutterRef
              , f = c.timeGutterWrapper
              , p = (0,
            r.useMemo)(function() {
                return function(e) {
                    var t = e.min
                      , n = e.max
                      , r = e.localizer;
                    return r.getTimezoneOffset(t) !== r.getTimezoneOffset(n) ? {
                        start: r.add(t, -1, "day"),
                        end: r.add(n, -1, "day")
                    } : {
                        start: t,
                        end: n
                    }
                }({
                    min: t,
                    max: n,
                    localizer: i
                })
            }, [null === t || void 0 === t ? void 0 : t.toISOString(), null === n || void 0 === n ? void 0 : n.toISOString(), i])
              , m = p.start
              , v = p.end
              , h = (0,
            r.useState)(Jo({
                min: m,
                max: v,
                timeslots: o,
                step: a,
                localizer: i
            }))
              , y = (0,
            S.Z)(h, 2)
              , b = y[0]
              , g = y[1];
            (0,
            r.useEffect)(function() {
                b && g(b.update({
                    min: m,
                    max: v,
                    timeslots: o,
                    step: a,
                    localizer: i
                }))
            }, [null === m || void 0 === m ? void 0 : m.toISOString(), null === v || void 0 === v ? void 0 : v.toISOString(), o, a]);
            var E = (0,
            r.useCallback)(function(e, t) {
                if (t)
                    return null;
                var n = b.dateIsInGroup(l(), t);
                return r.createElement("span", {
                    className: (0,
                    T.default)("rbc-label", n && "rbc-now")
                }, i.format(e, "timeGutterFormat"))
            }, [b, i, l]);
            return r.createElement(f, {
                slotMetrics: b
            }, r.createElement("div", {
                className: "rbc-time-gutter rbc-time-column",
                ref: d
            }, b.groups.map(function(e, t) {
                return r.createElement(aa, {
                    key: t,
                    group: e,
                    resource: s,
                    components: c,
                    renderSlot: E,
                    getters: u
                })
            })))
        }
          , ma = r.forwardRef(function(e, t) {
            return r.createElement(pa, Object.assign({
                gutterRef: t
            }, e))
        })
          , va = function(e) {
            var t = e.label;
            return r.createElement(r.Fragment, null, t)
        }
          , ha = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n() {
                var e;
                (0,
                h.Z)(this, n);
                for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
                    a[i] = arguments[i];
                return (e = t.call.apply(t, [this].concat(a))).handleHeaderClick = function(t, n, r) {
                    r.preventDefault(),
                    Ur(e.props.onDrillDown, [t, n])
                }
                ,
                e.renderRow = function(t) {
                    var n = e.props
                      , o = n.events
                      , a = n.rtl
                      , i = n.selectable
                      , l = n.getNow
                      , s = n.range
                      , c = n.getters
                      , u = n.localizer
                      , d = n.accessors
                      , f = n.components
                      , p = n.resizable
                      , m = d.resourceId(t)
                      , v = t ? o.filter(function(e) {
                        return d.resource(e) === m
                    }) : o;
                    return r.createElement(Vo, {
                        isAllDay: !0,
                        rtl: a,
                        getNow: l,
                        minRows: 2,
                        maxRows: e.props.allDayMaxRows + 1,
                        range: s,
                        events: v,
                        resourceId: m,
                        className: "rbc-allday-cell",
                        selectable: i,
                        selected: e.props.selected,
                        components: f,
                        accessors: d,
                        getters: c,
                        localizer: u,
                        onSelect: e.props.onSelectEvent,
                        onShowMore: e.props.onShowMore,
                        onDoubleClick: e.props.onDoubleClickEvent,
                        onKeyPress: e.props.onKeyPressEvent,
                        onSelectSlot: e.props.onSelectSlot,
                        longPressThreshold: e.props.longPressThreshold,
                        resizable: p
                    })
                }
                ,
                e
            }
            return (0,
            y.Z)(n, [{
                key: "renderHeaderCells",
                value: function(e) {
                    var t = this
                      , n = this.props
                      , o = n.localizer
                      , a = n.getDrilldownView
                      , i = n.getNow
                      , l = n.getters.dayProp
                      , s = n.components.header
                      , c = void 0 === s ? Ko : s
                      , u = i();
                    return e.map(function(e, n) {
                        var i = a(e)
                          , s = o.format(e, "dayFormat")
                          , d = l(e)
                          , f = d.className
                          , p = d.style
                          , m = r.createElement(c, {
                            date: e,
                            label: s,
                            localizer: o
                        });
                        return r.createElement("div", {
                            key: n,
                            style: p,
                            className: (0,
                            T.default)("rbc-header", f, o.isSameDate(e, u) && "rbc-today")
                        }, i ? r.createElement("button", {
                            type: "button",
                            className: "rbc-button-link",
                            onClick: function(n) {
                                return t.handleHeaderClick(e, i, n)
                            }
                        }, m) : r.createElement("span", null, m))
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.width
                      , o = t.rtl
                      , a = t.resources
                      , i = t.range
                      , l = t.events
                      , s = t.getNow
                      , c = t.accessors
                      , u = t.selectable
                      , d = t.components
                      , f = t.getters
                      , p = t.scrollRef
                      , m = t.localizer
                      , v = t.isOverflowing
                      , h = t.components
                      , y = h.timeGutterHeader
                      , b = h.resourceHeader
                      , g = void 0 === b ? va : b
                      , E = t.resizable
                      , w = {};
                    v && (w[o ? "marginLeft" : "marginRight"] = "".concat((0,
                    nr.Z)() - 1, "px"));
                    var O = a.groupEvents(l);
                    return r.createElement("div", {
                        style: w,
                        ref: p,
                        className: (0,
                        T.default)("rbc-time-header", v && "rbc-overflowing")
                    }, r.createElement("div", {
                        className: "rbc-label rbc-time-header-gutter",
                        style: {
                            width: n,
                            minWidth: n,
                            maxWidth: n
                        }
                    }, y && r.createElement(y, null)), a.map(function(t, n) {
                        var a = (0,
                        S.Z)(t, 2)
                          , l = a[0]
                          , p = a[1];
                        return r.createElement("div", {
                            className: "rbc-time-header-content",
                            key: l || n
                        }, p && r.createElement("div", {
                            className: "rbc-row rbc-row-resource",
                            key: "resource_".concat(n)
                        }, r.createElement("div", {
                            className: "rbc-header"
                        }, r.createElement(g, {
                            index: n,
                            label: c.resourceTitle(p),
                            resource: p
                        }))), r.createElement("div", {
                            className: "rbc-row rbc-time-header-cell".concat(i.length <= 1 ? " rbc-time-header-cell-single-day" : "")
                        }, e.renderHeaderCells(i)), r.createElement(Vo, {
                            isAllDay: !0,
                            rtl: o,
                            getNow: s,
                            minRows: 2,
                            maxRows: e.props.allDayMaxRows + 1,
                            range: i,
                            events: O.get(l) || [],
                            resourceId: p && l,
                            className: "rbc-allday-cell",
                            selectable: u,
                            selected: e.props.selected,
                            components: d,
                            accessors: c,
                            getters: f,
                            localizer: m,
                            onSelect: e.props.onSelectEvent,
                            onShowMore: e.props.onShowMore,
                            onDoubleClick: e.props.onDoubleClickEvent,
                            onKeyPress: e.props.onKeyPressEvent,
                            onSelectSlot: e.props.onSelectSlot,
                            longPressThreshold: e.props.longPressThreshold,
                            resizable: E
                        }))
                    }))
                }
            }]),
            n
        }(r.Component)
          , ya = {};
        var ba = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n(e) {
                var o;
                return (0,
                h.Z)(this, n),
                (o = t.call(this, e)).handleScroll = function(e) {
                    o.scrollRef.current && (o.scrollRef.current.scrollLeft = e.target.scrollLeft)
                }
                ,
                o.handleResize = function() {
                    Oe.a(o.rafHandle),
                    o.rafHandle = Oe.W(o.checkOverflow)
                }
                ,
                o.handleKeyPressEvent = function() {
                    o.clearSelection();
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    Ur(o.props.onKeyPressEvent, t)
                }
                ,
                o.handleSelectEvent = function() {
                    o.clearSelection();
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    Ur(o.props.onSelectEvent, t)
                }
                ,
                o.handleDoubleClickEvent = function() {
                    o.clearSelection();
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    Ur(o.props.onDoubleClickEvent, t)
                }
                ,
                o.handleShowMore = function(e, t, n, r, a) {
                    var i = o.props
                      , l = i.popup
                      , s = i.onDrillDown
                      , c = i.onShowMore
                      , u = i.getDrilldownView
                      , d = i.doShowMoreDrillDown;
                    if (o.clearSelection(),
                    l) {
                        var f = (0,
                        Se.Z)(n, o.containerRef.current);
                        o.setState({
                            overlay: {
                                date: t,
                                events: e,
                                position: (0,
                                p.Z)((0,
                                p.Z)({}, f), {}, {
                                    width: "200px"
                                }),
                                target: a
                            }
                        })
                    } else
                        d && Ur(s, [t, u(t) || Hr.DAY]);
                    Ur(c, [e, t, r])
                }
                ,
                o.handleSelectAllDaySlot = function(e, t) {
                    var n = o.props.onSelectSlot
                      , r = new Date(e[0])
                      , a = new Date(e[e.length - 1]);
                    a.setDate(e[e.length - 1].getDate() + 1),
                    Ur(n, {
                        slots: e,
                        start: r,
                        end: a,
                        action: t.action,
                        resourceId: t.resourceId
                    })
                }
                ,
                o.overlayDisplay = function() {
                    o.setState({
                        overlay: null
                    })
                }
                ,
                o.checkOverflow = function() {
                    if (!o._updatingOverflow) {
                        var e = o.contentRef.current
                          , t = e.scrollHeight > e.clientHeight;
                        o.state.isOverflowing !== t && (o._updatingOverflow = !0,
                        o.setState({
                            isOverflowing: t
                        }, function() {
                            o._updatingOverflow = !1
                        }))
                    }
                }
                ,
                o.memoizedResources = In(function(e, t) {
                    return function(e, t) {
                        return {
                            map: function(n) {
                                return e ? e.map(function(e, r) {
                                    return n([t.resourceId(e), e], r)
                                }) : [n([ya, null], 0)]
                            },
                            groupEvents: function(n) {
                                var r = new Map;
                                return e ? (n.forEach(function(e) {
                                    var n = t.resource(e) || ya;
                                    if (Array.isArray(n))
                                        n.forEach(function(t) {
                                            var n = r.get(t) || [];
                                            n.push(e),
                                            r.set(t, n)
                                        });
                                    else {
                                        var o = r.get(n) || [];
                                        o.push(e),
                                        r.set(n, o)
                                    }
                                }),
                                r) : (r.set(ya, n),
                                r)
                            }
                        }
                    }(e, t)
                }),
                o.state = {
                    gutterWidth: void 0,
                    isOverflowing: null
                },
                o.scrollRef = r.createRef(),
                o.contentRef = r.createRef(),
                o.containerRef = r.createRef(),
                o._scrollRatio = null,
                o.gutterRef = (0,
                r.createRef)(),
                o
            }
            return (0,
            y.Z)(n, [{
                key: "getSnapshotBeforeUpdate",
                value: function() {
                    return this.checkOverflow(),
                    null
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    null == this.props.width && this.measureGutter(),
                    this.calculateScroll(),
                    this.applyScroll(),
                    window.addEventListener("resize", this.handleResize)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("resize", this.handleResize),
                    Oe.a(this.rafHandle),
                    this.measureGutterAnimationFrameRequest && window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.applyScroll()
                }
            }, {
                key: "renderEvents",
                value: function(e, t, n, o) {
                    var a = this
                      , i = this.props
                      , l = i.min
                      , s = i.max
                      , c = i.components
                      , u = i.accessors
                      , d = i.localizer
                      , f = i.dayLayoutAlgorithm
                      , p = this.memoizedResources(this.props.resources, u)
                      , m = p.groupEvents(t)
                      , v = p.groupEvents(n);
                    return p.map(function(t, n) {
                        var i = (0,
                        S.Z)(t, 2)
                          , p = i[0]
                          , h = i[1];
                        return e.map(function(e, t) {
                            var i = (m.get(p) || []).filter(function(t) {
                                return d.inRange(e, u.start(t), u.end(t), "day")
                            })
                              , y = (v.get(p) || []).filter(function(t) {
                                return d.inRange(e, u.start(t), u.end(t), "day")
                            });
                            return r.createElement(fa, Object.assign({}, a.props, {
                                localizer: d,
                                min: d.merge(e, l),
                                max: d.merge(e, s),
                                resource: h && p,
                                components: c,
                                isNow: d.isSameDate(e, o),
                                key: n + "-" + t,
                                date: e,
                                events: i,
                                backgroundEvents: y,
                                dayLayoutAlgorithm: f
                            }))
                        })
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props, n = t.events, o = t.backgroundEvents, a = t.range, i = t.width, l = t.rtl, s = t.selected, c = t.getNow, u = t.resources, d = t.components, f = t.accessors, p = t.getters, m = t.localizer, v = t.min, h = t.max, y = t.showMultiDayTimes, b = t.longPressThreshold, g = t.resizable;
                    i = i || this.state.gutterWidth;
                    var E = a[0]
                      , w = a[a.length - 1];
                    this.slots = a.length;
                    var S = []
                      , O = []
                      , C = [];
                    return n.forEach(function(e) {
                        if (Lo(e, E, w, f, m)) {
                            var t = f.start(e)
                              , n = f.end(e);
                            f.allDay(e) || m.startAndEndAreDateOnly(t, n) || !y && !m.isSameDate(t, n) ? S.push(e) : O.push(e)
                        }
                    }),
                    o.forEach(function(e) {
                        Lo(e, E, w, f, m) && C.push(e)
                    }),
                    S.sort(function(e, t) {
                        return Zo(e, t, f, m)
                    }),
                    r.createElement("div", {
                        className: (0,
                        T.default)("rbc-time-view", u && "rbc-time-view-resources"),
                        ref: this.containerRef
                    }, r.createElement(ha, {
                        range: a,
                        events: S,
                        width: i,
                        rtl: l,
                        getNow: c,
                        localizer: m,
                        selected: s,
                        allDayMaxRows: this.props.showAllEvents ? 1 / 0 : null !== (e = this.props.allDayMaxRows) && void 0 !== e ? e : 1 / 0,
                        resources: this.memoizedResources(u, f),
                        selectable: this.props.selectable,
                        accessors: f,
                        getters: p,
                        components: d,
                        scrollRef: this.scrollRef,
                        isOverflowing: this.state.isOverflowing,
                        longPressThreshold: b,
                        onSelectSlot: this.handleSelectAllDaySlot,
                        onSelectEvent: this.handleSelectEvent,
                        onShowMore: this.handleShowMore,
                        onDoubleClickEvent: this.props.onDoubleClickEvent,
                        onKeyPressEvent: this.props.onKeyPressEvent,
                        onDrillDown: this.props.onDrillDown,
                        getDrilldownView: this.props.getDrilldownView,
                        resizable: g
                    }), this.props.popup && this.renderOverlay(), r.createElement("div", {
                        ref: this.contentRef,
                        className: "rbc-time-content",
                        onScroll: this.handleScroll
                    }, r.createElement(ma, {
                        date: E,
                        ref: this.gutterRef,
                        localizer: m,
                        min: m.merge(E, v),
                        max: m.merge(E, h),
                        step: this.props.step,
                        getNow: this.props.getNow,
                        timeslots: this.props.timeslots,
                        components: d,
                        className: "rbc-time-gutter",
                        getters: p
                    }), this.renderEvents(a, O, C, c())))
                }
            }, {
                key: "renderOverlay",
                value: function() {
                    var e, t, n = this, o = null !== (e = null === (t = this.state) || void 0 === t ? void 0 : t.overlay) && void 0 !== e ? e : {}, a = this.props, i = a.accessors, l = a.localizer, s = a.components, c = a.getters, u = a.selected, d = a.popupOffset, f = a.handleDragStart;
                    return r.createElement(Eo, {
                        overlay: o,
                        accessors: i,
                        localizer: l,
                        components: s,
                        getters: c,
                        selected: u,
                        popupOffset: d,
                        ref: this.containerRef,
                        handleKeyPressEvent: this.handleKeyPressEvent,
                        handleSelectEvent: this.handleSelectEvent,
                        handleDoubleClickEvent: this.handleDoubleClickEvent,
                        handleDragStart: f,
                        show: !!o.position,
                        overlayDisplay: this.overlayDisplay,
                        onHide: function() {
                            return n.setState({
                                overlay: null
                            })
                        }
                    })
                }
            }, {
                key: "clearSelection",
                value: function() {
                    clearTimeout(this._selectTimer),
                    this._pendingSelection = []
                }
            }, {
                key: "measureGutter",
                value: function() {
                    var e = this;
                    this.measureGutterAnimationFrameRequest && window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest),
                    this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(function() {
                        var t, n = null !== (t = e.gutterRef) && void 0 !== t && t.current ? (0,
                        rr.Z)(e.gutterRef.current) : void 0;
                        n && e.state.gutterWidth !== n && e.setState({
                            gutterWidth: n
                        })
                    })
                }
            }, {
                key: "applyScroll",
                value: function() {
                    if (null != this._scrollRatio && !0 === this.props.enableAutoScroll) {
                        var e = this.contentRef.current;
                        e.scrollTop = e.scrollHeight * this._scrollRatio,
                        this._scrollRatio = null
                    }
                }
            }, {
                key: "calculateScroll",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props
                      , t = e.min
                      , n = e.max
                      , r = e.scrollToTime
                      , o = e.localizer
                      , a = o.diff(o.merge(r, t), r, "milliseconds")
                      , i = o.diff(t, n, "milliseconds");
                    this._scrollRatio = a / i
                }
            }]),
            n
        }(r.Component);
        ba.defaultProps = {
            step: 30,
            timeslots: 2
        };
        var ga = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"]
          , Ea = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n() {
                return (0,
                h.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            y.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.date
                      , o = e.localizer
                      , a = e.min
                      , i = void 0 === a ? o.startOf(new Date, "day") : a
                      , l = e.max
                      , s = void 0 === l ? o.endOf(new Date, "day") : l
                      , c = e.scrollToTime
                      , u = void 0 === c ? o.startOf(new Date, "day") : c
                      , d = e.enableAutoScroll
                      , f = void 0 === d || d
                      , p = (0,
                    m.Z)(e, ga)
                      , v = n.range(t, {
                        localizer: o
                    });
                    return r.createElement(ba, Object.assign({}, p, {
                        range: v,
                        eventOffset: 10,
                        localizer: o,
                        min: i,
                        max: s,
                        scrollToTime: u,
                        enableAutoScroll: f
                    }))
                }
            }]),
            n
        }(r.Component);
        Ea.range = function(e, t) {
            return [t.localizer.startOf(e, "day")]
        }
        ,
        Ea.navigate = function(e, t, n) {
            var r = n.localizer;
            switch (t) {
            case Br.PREVIOUS:
                return r.add(e, -1, "day");
            case Br.NEXT:
                return r.add(e, 1, "day");
            default:
                return e
            }
        }
        ,
        Ea.title = function(e, t) {
            return t.localizer.format(e, "dayHeaderFormat")
        }
        ;
        var wa = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"]
          , Sa = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n() {
                return (0,
                h.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            y.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.date
                      , o = e.localizer
                      , a = e.min
                      , i = void 0 === a ? o.startOf(new Date, "day") : a
                      , l = e.max
                      , s = void 0 === l ? o.endOf(new Date, "day") : l
                      , c = e.scrollToTime
                      , u = void 0 === c ? o.startOf(new Date, "day") : c
                      , d = e.enableAutoScroll
                      , f = void 0 === d || d
                      , p = (0,
                    m.Z)(e, wa)
                      , v = n.range(t, this.props);
                    return r.createElement(ba, Object.assign({}, p, {
                        range: v,
                        eventOffset: 15,
                        localizer: o,
                        min: i,
                        max: s,
                        scrollToTime: u,
                        enableAutoScroll: f
                    }))
                }
            }]),
            n
        }(r.Component);
        Sa.defaultProps = ba.defaultProps,
        Sa.navigate = function(e, t, n) {
            var r = n.localizer;
            switch (t) {
            case Br.PREVIOUS:
                return r.add(e, -1, "week");
            case Br.NEXT:
                return r.add(e, 1, "week");
            default:
                return e
            }
        }
        ,
        Sa.range = function(e, t) {
            var n = t.localizer
              , r = n.startOfWeek()
              , o = n.startOf(e, "week", r)
              , a = n.endOf(e, "week", r);
            return n.range(o, a)
        }
        ,
        Sa.title = function(e, t) {
            var n = t.localizer
              , r = sr(Sa.range(e, {
                localizer: n
            }))
              , o = r[0]
              , a = r.slice(1);
            return n.format({
                start: o,
                end: a.pop()
            }, "dayRangeHeaderFormat")
        }
        ;
        var Oa = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
        function Ta(e, t) {
            return Sa.range(e, t).filter(function(e) {
                return -1 === [6, 0].indexOf(e.getDay())
            })
        }
        var Ca, Da = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n() {
                return (0,
                h.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            y.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.date
                      , n = e.localizer
                      , o = e.min
                      , a = void 0 === o ? n.startOf(new Date, "day") : o
                      , i = e.max
                      , l = void 0 === i ? n.endOf(new Date, "day") : i
                      , s = e.scrollToTime
                      , c = void 0 === s ? n.startOf(new Date, "day") : s
                      , u = e.enableAutoScroll
                      , d = void 0 === u || u
                      , f = (0,
                    m.Z)(e, Oa)
                      , p = Ta(t, this.props);
                    return r.createElement(ba, Object.assign({}, f, {
                        range: p,
                        eventOffset: 15,
                        localizer: n,
                        min: a,
                        max: l,
                        scrollToTime: c,
                        enableAutoScroll: d
                    }))
                }
            }]),
            n
        }(r.Component);
        function ka(e) {
            var t = e.accessors
              , n = e.components
              , o = e.date
              , a = e.events
              , i = e.getters
              , l = e.length
              , s = e.localizer
              , c = e.onDoubleClickEvent
              , u = e.onSelectEvent
              , d = e.selected
              , f = (0,
            r.useRef)(null)
              , p = (0,
            r.useRef)(null)
              , m = (0,
            r.useRef)(null)
              , v = (0,
            r.useRef)(null)
              , h = (0,
            r.useRef)(null);
            (0,
            r.useEffect)(function() {
                b()
            });
            var y = function(e, o) {
                var a = ""
                  , i = n.time
                  , l = s.messages.allDay
                  , c = t.end(o)
                  , u = t.start(o);
                return t.allDay(o) || (s.eq(u, c) ? l = s.format(u, "agendaTimeFormat") : s.isSameDate(u, c) ? l = s.format({
                    start: u,
                    end: c
                }, "agendaTimeRangeFormat") : s.isSameDate(e, u) ? l = s.format(u, "agendaTimeFormat") : s.isSameDate(e, c) && (l = s.format(c, "agendaTimeFormat"))),
                s.gt(e, u, "day") && (a = "rbc-continues-prior"),
                s.lt(e, c, "day") && (a += " rbc-continues-after"),
                r.createElement("span", {
                    className: a.trim()
                }, i ? r.createElement(i, {
                    event: o,
                    day: e,
                    label: l
                }) : l)
            }
              , b = function() {
                if (h.current) {
                    var e = f.current
                      , t = h.current.firstChild;
                    if (t) {
                        var n = v.current.scrollHeight > v.current.clientHeight
                          , r = []
                          , o = r;
                        r = [(0,
                        rr.Z)(t.children[0]), (0,
                        rr.Z)(t.children[1])],
                        o[0] === r[0] && o[1] === r[1] || (p.current.style.width = r[0] + "px",
                        m.current.style.width = r[1] + "px"),
                        n ? ((0,
                        cr.Z)(e, "rbc-header-overflowing"),
                        e.style.marginRight = (0,
                        nr.Z)() + "px") : (0,
                        ur.Z)(e, "rbc-header-overflowing")
                    }
                }
            }
              , g = s.messages
              , E = s.add(o, l, "day")
              , w = s.range(o, E, "day");
            return (a = a.filter(function(e) {
                return Lo(e, s.startOf(o, "day"), s.endOf(E, "day"), t, s)
            })).sort(function(e, n) {
                return +t.start(e) - +t.start(n)
            }),
            r.createElement("div", {
                className: "rbc-agenda-view"
            }, 0 !== a.length ? r.createElement(r.Fragment, null, r.createElement("table", {
                ref: f,
                className: "rbc-agenda-table"
            }, r.createElement("thead", null, r.createElement("tr", null, r.createElement("th", {
                className: "rbc-header",
                ref: p
            }, g.date), r.createElement("th", {
                className: "rbc-header",
                ref: m
            }, g.time), r.createElement("th", {
                className: "rbc-header"
            }, g.event)))), r.createElement("div", {
                className: "rbc-agenda-content",
                ref: v
            }, r.createElement("table", {
                className: "rbc-agenda-table"
            }, r.createElement("tbody", {
                ref: h
            }, w.map(function(e, o) {
                return function(e, o, a) {
                    var l = n.event
                      , f = n.date;
                    return (o = o.filter(function(n) {
                        return Lo(n, s.startOf(e, "day"), s.endOf(e, "day"), t, s)
                    })).map(function(n, p) {
                        var m = t.title(n)
                          , v = t.end(n)
                          , h = t.start(n)
                          , b = i.eventProp(n, h, v, mo(n, d))
                          , g = 0 === p && s.format(e, "agendaDateFormat")
                          , E = 0 === p && r.createElement("td", {
                            rowSpan: o.length,
                            className: "rbc-agenda-date-cell"
                        }, f ? r.createElement(f, {
                            day: e,
                            label: g
                        }) : g);
                        return r.createElement("tr", {
                            key: a + "_" + p,
                            className: b.className,
                            style: b.style
                        }, E, r.createElement("td", {
                            className: "rbc-agenda-time-cell"
                        }, y(e, n)), r.createElement("td", {
                            className: "rbc-agenda-event-cell",
                            onClick: function(e) {
                                return u && u(n, e)
                            },
                            onDoubleClick: function(e) {
                                return c && c(n, e)
                            }
                        }, l ? r.createElement(l, {
                            event: n,
                            title: m
                        }) : m))
                    }, [])
                }(e, a, o)
            }))))) : r.createElement("span", {
                className: "rbc-agenda-empty"
            }, g.noEventsInRange))
        }
        Da.defaultProps = ba.defaultProps,
        Da.range = Ta,
        Da.navigate = Sa.navigate,
        Da.title = function(e, t) {
            var n = t.localizer
              , r = sr(Ta(e, {
                localizer: n
            }))
              , o = r[0]
              , a = r.slice(1);
            return n.format({
                start: o,
                end: a.pop()
            }, "dayRangeHeaderFormat")
        }
        ,
        ka.defaultProps = {
            length: 30
        },
        ka.range = function(e, t) {
            var n = t.length
              , r = void 0 === n ? ka.defaultProps.length : n;
            return {
                start: e,
                end: t.localizer.add(e, r, "day")
            }
        }
        ,
        ka.navigate = function(e, t, n) {
            var r = n.length
              , o = void 0 === r ? ka.defaultProps.length : r
              , a = n.localizer;
            switch (t) {
            case Br.PREVIOUS:
                return a.add(e, -o, "day");
            case Br.NEXT:
                return a.add(e, o, "day");
            default:
                return e
            }
        }
        ,
        ka.title = function(e, t) {
            var n = t.length
              , r = void 0 === n ? ka.defaultProps.length : n
              , o = t.localizer
              , a = o.add(e, r, "day");
            return o.format({
                start: e,
                end: a
            }, "agendaHeaderFormat")
        }
        ;
        var Na = (Ca = {},
        (0,
        ue.Z)(Ca, Hr.MONTH, Go),
        (0,
        ue.Z)(Ca, Hr.WEEK, Sa),
        (0,
        ue.Z)(Ca, Hr.WORK_WEEK, Da),
        (0,
        ue.Z)(Ca, Hr.DAY, Ea),
        (0,
        ue.Z)(Ca, Hr.AGENDA, ka),
        Ca)
          , Pa = ["action", "date", "today"];
        var xa = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n() {
                var e;
                (0,
                h.Z)(this, n);
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                    o[a] = arguments[a];
                return (e = t.call.apply(t, [this].concat(o))).navigate = function(t) {
                    e.props.onNavigate(t)
                }
                ,
                e.view = function(t) {
                    e.props.onView(t)
                }
                ,
                e
            }
            return (0,
            y.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.localizer.messages
                      , n = e.label;
                    return r.createElement("div", {
                        className: "rbc-toolbar"
                    }, r.createElement("span", {
                        className: "rbc-btn-group"
                    }, r.createElement("button", {
                        type: "button",
                        onClick: this.navigate.bind(null, Br.TODAY)
                    }, t.today), r.createElement("button", {
                        type: "button",
                        onClick: this.navigate.bind(null, Br.PREVIOUS)
                    }, t.previous), r.createElement("button", {
                        type: "button",
                        onClick: this.navigate.bind(null, Br.NEXT)
                    }, t.next)), r.createElement("span", {
                        className: "rbc-toolbar-label"
                    }, n), r.createElement("span", {
                        className: "rbc-btn-group"
                    }, this.viewNamesGroup(t)))
                }
            }, {
                key: "viewNamesGroup",
                value: function(e) {
                    var t = this
                      , n = this.props.views
                      , o = this.props.view;
                    if (n.length > 1)
                        return n.map(function(n) {
                            return r.createElement("button", {
                                type: "button",
                                key: n,
                                className: (0,
                                T.default)({
                                    "rbc-active": o === n
                                }),
                                onClick: t.view.bind(null, n)
                            }, e[n])
                        })
                }
            }]),
            n
        }(r.Component);
        var _a = function(e) {
            return function(t) {
                return function(e, t) {
                    var n = null;
                    return "function" == typeof t ? n = t(e) : "string" == typeof t && "object" === (0,
                    v.Z)(e) && null != e && t in e && (n = e[t]),
                    n
                }(t, e)
            }
        }
          , Ma = ["view", "date", "getNow", "onNavigate"]
          , Ra = ["view", "toolbar", "events", "backgroundEvents", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "doShowMoreDrillDown", "components", "formats", "messages", "culture"];
        function Aa(e) {
            if (Array.isArray(e))
                return e;
            for (var t = [], n = 0, r = Object.entries(e); n < r.length; n++) {
                var o = (0,
                S.Z)(r[n], 2)
                  , a = o[0];
                o[1] && t.push(a)
            }
            return t
        }
        var Ia = function(e) {
            (0,
            b.Z)(n, e);
            var t = w(n);
            function n() {
                var e;
                (0,
                h.Z)(this, n);
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                    o[a] = arguments[a];
                return (e = t.call.apply(t, [this].concat(o))).getViews = function() {
                    var t = e.props.views;
                    return Array.isArray(t) ? Lr(t, function(e, t) {
                        return e[t] = Na[t]
                    }, {}) : "object" === (0,
                    v.Z)(t) ? (0,
                    jr.Z)(t, function(e, t) {
                        return !0 === e ? Na[t] : e
                    }) : Na
                }
                ,
                e.getView = function() {
                    return e.getViews()[e.props.view]
                }
                ,
                e.getDrilldownView = function(t) {
                    var n = e.props
                      , r = n.view
                      , o = n.drilldownView
                      , a = n.getDrilldownView;
                    return a ? a(t, r, Object.keys(e.getViews())) : o
                }
                ,
                e.handleRangeChange = function(t, n, r) {
                    var o = e.props
                      , a = o.onRangeChange
                      , i = o.localizer;
                    a && n.range && a(n.range(t, {
                        localizer: i
                    }), r)
                }
                ,
                e.handleNavigate = function(t, n) {
                    var r = e.props
                      , o = r.view
                      , a = r.date
                      , i = r.getNow
                      , l = r.onNavigate
                      , s = (0,
                    m.Z)(r, Ma)
                      , c = e.getView()
                      , u = i();
                    l(a = function(e, t) {
                        var n = t.action
                          , r = t.date
                          , o = t.today
                          , a = (0,
                        m.Z)(t, Pa);
                        switch (e = "string" == typeof e ? Na[e] : e,
                        n) {
                        case Br.TODAY:
                            r = o || new Date;
                            break;
                        case Br.DATE:
                            break;
                        default:
                            N()(e && "function" == typeof e.navigate, "Calendar View components must implement a static `.navigate(date, action)` method.s"),
                            r = e.navigate(r, n, a)
                        }
                        return r
                    }(c, (0,
                    p.Z)((0,
                    p.Z)({}, s), {}, {
                        action: t,
                        date: n || a || u,
                        today: u
                    })), o, t),
                    e.handleRangeChange(a, c)
                }
                ,
                e.handleViewChange = function(t) {
                    t !== e.props.view && function(e, t) {
                        return -1 !== Aa(t.views).indexOf(e)
                    }(t, e.props) && e.props.onView(t);
                    var n = e.getViews();
                    e.handleRangeChange(e.props.date || e.props.getNow(), n[t], t)
                }
                ,
                e.handleSelectEvent = function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    Ur(e.props.onSelectEvent, n)
                }
                ,
                e.handleDoubleClickEvent = function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    Ur(e.props.onDoubleClickEvent, n)
                }
                ,
                e.handleKeyPressEvent = function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    Ur(e.props.onKeyPressEvent, n)
                }
                ,
                e.handleSelectSlot = function(t) {
                    Ur(e.props.onSelectSlot, t)
                }
                ,
                e.handleDrillDown = function(t, n) {
                    var r = e.props.onDrillDown;
                    r ? r(t, n, e.drilldownView) : (n && e.handleViewChange(n),
                    e.handleNavigate(Br.DATE, t))
                }
                ,
                e.state = {
                    context: n.getContext(e.props)
                },
                e
            }
            return (0,
            y.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.view
                      , n = e.toolbar
                      , o = e.events
                      , a = e.backgroundEvents
                      , i = e.style
                      , l = e.className
                      , s = e.elementProps
                      , c = e.date
                      , u = e.getNow
                      , d = e.length
                      , f = e.showMultiDayTimes
                      , p = e.onShowMore
                      , v = e.doShowMoreDrillDown;
                    e.components,
                    e.formats,
                    e.messages,
                    e.culture;
                    var h = (0,
                    m.Z)(e, Ra);
                    c = c || u();
                    var y = this.getView()
                      , b = this.state.context
                      , g = b.accessors
                      , E = b.components
                      , w = b.getters
                      , S = b.localizer
                      , O = b.viewNames
                      , C = E.toolbar || xa
                      , D = y.title(c, {
                        localizer: S,
                        length: d
                    });
                    return r.createElement("div", Object.assign({}, s, {
                        className: (0,
                        T.default)(l, "rbc-calendar", h.rtl && "rbc-rtl"),
                        style: i
                    }), n && r.createElement(C, {
                        date: c,
                        view: t,
                        views: O,
                        label: D,
                        onView: this.handleViewChange,
                        onNavigate: this.handleNavigate,
                        localizer: S
                    }), r.createElement(y, Object.assign({}, h, {
                        events: o,
                        backgroundEvents: a,
                        date: c,
                        getNow: u,
                        length: d,
                        localizer: S,
                        getters: w,
                        components: E,
                        accessors: g,
                        showMultiDayTimes: f,
                        getDrilldownView: this.getDrilldownView,
                        onNavigate: this.handleNavigate,
                        onDrillDown: this.handleDrillDown,
                        onSelectEvent: this.handleSelectEvent,
                        onDoubleClickEvent: this.handleDoubleClickEvent,
                        onKeyPressEvent: this.handleKeyPressEvent,
                        onSelectSlot: this.handleSelectSlot,
                        onShowMore: p,
                        doShowMoreDrillDown: v
                    })))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e) {
                    return {
                        context: n.getContext(e)
                    }
                }
            }, {
                key: "getContext",
                value: function(e) {
                    var t = e.startAccessor
                      , n = e.endAccessor
                      , r = e.allDayAccessor
                      , o = e.tooltipAccessor
                      , a = e.titleAccessor
                      , i = e.resourceAccessor
                      , l = e.resourceIdAccessor
                      , s = e.resourceTitleAccessor
                      , c = e.eventPropGetter
                      , u = e.backgroundEventPropGetter
                      , d = e.slotPropGetter
                      , f = e.slotGroupPropGetter
                      , m = e.dayPropGetter
                      , v = e.view
                      , h = e.views
                      , y = e.localizer
                      , b = e.culture
                      , g = e.messages
                      , E = void 0 === g ? {} : g
                      , w = e.components
                      , S = void 0 === w ? {} : w
                      , O = e.formats
                      , T = void 0 === O ? {} : O
                      , C = Aa(h);
                    return {
                        viewNames: C,
                        localizer: function(e, t, n, r) {
                            var o = (0,
                            p.Z)((0,
                            p.Z)({}, e.formats), n);
                            return (0,
                            p.Z)((0,
                            p.Z)({}, e), {}, {
                                messages: r,
                                startOfWeek: function() {
                                    return e.startOfWeek(t)
                                },
                                format: function(n, r) {
                                    return e.format(n, o[r] || r, t)
                                }
                            })
                        }(y, b, T, function(e) {
                            return (0,
                            p.Z)((0,
                            p.Z)({}, uo), e)
                        }(E)),
                        getters: {
                            eventProp: function() {
                                return c && c.apply(void 0, arguments) || {}
                            },
                            backgroundEventProp: function() {
                                return u && u.apply(void 0, arguments) || {}
                            },
                            slotProp: function() {
                                return d && d.apply(void 0, arguments) || {}
                            },
                            slotGroupProp: function() {
                                return f && f.apply(void 0, arguments) || {}
                            },
                            dayProp: function() {
                                return m && m.apply(void 0, arguments) || {}
                            }
                        },
                        components: kr(S[v] || {}, Sr(S, C), {
                            eventWrapper: Zr,
                            backgroundEventWrapper: Zr,
                            eventContainerWrapper: Zr,
                            dateCellWrapper: Zr,
                            weekWrapper: Zr,
                            timeSlotWrapper: Zr,
                            timeGutterWrapper: Zr
                        }),
                        accessors: {
                            start: _a(t),
                            end: _a(n),
                            allDay: _a(r),
                            tooltip: _a(o),
                            title: _a(a),
                            resource: _a(i),
                            resourceId: _a(l),
                            resourceTitle: _a(s)
                        }
                    }
                }
            }]),
            n
        }(r.Component);
        Ia.defaultProps = {
            events: [],
            backgroundEvents: [],
            elementProps: {},
            popup: !1,
            toolbar: !0,
            view: Hr.MONTH,
            views: [Hr.MONTH, Hr.WEEK, Hr.DAY, Hr.AGENDA],
            step: 30,
            length: 30,
            allDayMaxRows: 1 / 0,
            doShowMoreDrillDown: !0,
            drilldownView: Hr.DAY,
            titleAccessor: "title",
            tooltipAccessor: "title",
            allDayAccessor: "allDay",
            startAccessor: "start",
            endAccessor: "end",
            resourceAccessor: "resourceId",
            resourceIdAccessor: "id",
            resourceTitleAccessor: "title",
            longPressThreshold: 250,
            getNow: function() {
                return new Date
            },
            dayLayoutAlgorithm: "overlap"
        };
        var La = (0,
        O.uncontrollable)(Ia, {
            view: "onView",
            date: "onNavigate",
            selected: "onSelectEvent"
        })
          , ja = function(e, t, n) {
            var r = e.start
              , o = e.end;
            return n.format(r, "LT", t) + " – " + n.format(o, "LT", t)
        }
          , Za = {
            dateFormat: "DD",
            dayFormat: "DD ddd",
            weekdayFormat: "ddd",
            selectRangeFormat: ja,
            eventTimeRangeFormat: ja,
            eventTimeRangeStartFormat: function(e, t, n) {
                var r = e.start;
                return n.format(r, "LT", t) + " – "
            },
            eventTimeRangeEndFormat: function(e, t, n) {
                var r = e.end;
                return " – " + n.format(r, "LT", t)
            },
            timeGutterFormat: "LT",
            monthHeaderFormat: "MMMM YYYY",
            dayHeaderFormat: "dddd MMM DD",
            dayRangeHeaderFormat: function(e, t, n) {
                var r = e.start
                  , o = e.end;
                return n.format(r, "MMMM DD", t) + " – " + n.format(o, n.eq(r, o, "month") ? "DD" : "MMMM DD", t)
            },
            agendaHeaderFormat: function(e, t, n) {
                var r = e.start
                  , o = e.end;
                return n.format(r, "L", t) + " – " + n.format(o, "L", t)
            },
            agendaDateFormat: "ddd MMM DD",
            agendaTimeFormat: "LT",
            agendaTimeRangeFormat: ja
        };
        function Ba(e) {
            var t = e ? e.toLowerCase() : e;
            return "FullYear" === t ? t = "year" : t || (t = void 0),
            t
        }
        function Ha(e) {
            function t(t, n) {
                var r, o, a = e(t).local(), i = e(n).local();
                if (!e.tz)
                    return a.toDate().getTimezoneOffset() - i.toDate().getTimezoneOffset();
                var l = null !== (r = null === a || void 0 === a ? void 0 : null === (o = a._z) || void 0 === o ? void 0 : o.name) && void 0 !== r ? r : e.tz.guess();
                return e.tz.zone(l).utcOffset(+a) - e.tz.zone(l).utcOffset(+i)
            }
            function n(t, n, r) {
                var o = Ba(r);
                return [o ? e(t).startOf(o) : e(t), o ? e(n).startOf(o) : e(n), o]
            }
            function r() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , n = Ba(arguments.length > 1 ? arguments[1] : void 0);
                return n ? e(t).startOf(n).toDate() : e(t).toDate()
            }
            function o(e, t, r) {
                var o = n(e, t, r)
                  , a = (0,
                S.Z)(o, 3)
                  , i = a[0]
                  , l = a[1]
                  , s = a[2];
                return i.isSame(l, s)
            }
            function a(e, t, r) {
                var o = n(e, t, r)
                  , a = (0,
                S.Z)(o, 3)
                  , i = a[0]
                  , l = a[1]
                  , s = a[2];
                return i.isSameOrBefore(l, s)
            }
            function i(t, n, r) {
                var o = Ba(r);
                return e(t).add(n, o).toDate()
            }
            function l(e, t) {
                var n = Ba(t)
                  , a = r(e, n);
                return o(a, e) ? a : i(a, 1, n)
            }
            function s(t, n) {
                var r = Ba(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "day")
                  , o = e(t);
                return e(n).diff(o, r)
            }
            function c(t) {
                return e(t).startOf("month").startOf("week").toDate()
            }
            function u(t) {
                return e(t).endOf("month").endOf("week").toDate()
            }
            return new co({
                formats: Za,
                firstOfWeek: function(t) {
                    var n = t ? e.localeData(t) : e.localeData();
                    return n ? n.firstDayOfWeek() : 0
                },
                firstVisibleDay: c,
                lastVisibleDay: u,
                visibleDays: function(e) {
                    for (var t = c(e), n = u(e), r = []; a(t, n); )
                        r.push(t),
                        t = i(t, 1, "d");
                    return r
                },
                format: function(t, n, r) {
                    return function(e, t) {
                        return t ? e.locale(t) : e
                    }(e(t), r).format(n)
                },
                lt: function(e, t, r) {
                    var o = n(e, t, r)
                      , a = (0,
                    S.Z)(o, 3)
                      , i = a[0]
                      , l = a[1]
                      , s = a[2];
                    return i.isBefore(l, s)
                },
                lte: a,
                gt: function(e, t, r) {
                    var o = n(e, t, r)
                      , a = (0,
                    S.Z)(o, 3)
                      , i = a[0]
                      , l = a[1]
                      , s = a[2];
                    return i.isAfter(l, s)
                },
                gte: function(e, t, r) {
                    var o = n(e, t, r)
                      , a = (0,
                    S.Z)(o, 3)
                      , i = a[0]
                      , l = a[1]
                      , s = a[2];
                    return i.isSameOrBefore(l, s)
                },
                eq: o,
                neq: function(e, t, n) {
                    return !o(e, t, n)
                },
                merge: function(t, n) {
                    if (!t && !n)
                        return null;
                    var r = e(n).format("HH:mm:ss")
                      , o = e(t).startOf("day").format("MM/DD/YYYY");
                    return e("".concat(o, " ").concat(r), "MM/DD/YYYY HH:mm:ss").toDate()
                },
                inRange: function(t, n, r) {
                    var o = Ba(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "day")
                      , a = e(t)
                      , i = e(n)
                      , l = e(r);
                    return a.isBetween(i, l, o, "[]")
                },
                startOf: r,
                endOf: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , n = Ba(arguments.length > 1 ? arguments[1] : void 0);
                    return n ? e(t).endOf(n).toDate() : e(t).toDate()
                },
                range: function(t, n) {
                    for (var r = Ba(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "day"), o = e(t).toDate(), l = []; a(o, n); )
                        l.push(o),
                        o = i(o, 1, r);
                    return l
                },
                add: i,
                diff: s,
                ceil: l,
                min: function(t, n) {
                    var r = e(t)
                      , o = e(n);
                    return e.min(r, o).toDate()
                },
                max: function(t, n) {
                    var r = e(t)
                      , o = e(n);
                    return e.max(r, o).toDate()
                },
                minutes: function(t) {
                    return e(t).minutes()
                },
                getSlotDate: function(t, n, r) {
                    return e(t).startOf("day").minute(n + r).toDate()
                },
                getTimezoneOffset: function(t) {
                    return e(t).toDate().getTimezoneOffset()
                },
                getDstOffset: t,
                getTotalMin: function(e, t) {
                    return s(e, t, "minutes")
                },
                getMinutesFromMidnight: function(n) {
                    var r = e(n).startOf("day");
                    return e(n).diff(r, "minutes") + function(n) {
                        return t(e(n).startOf("day"), n)
                    }(n)
                },
                continuesPrior: function(t, n) {
                    var r = e(t)
                      , o = e(n);
                    return r.isBefore(o, "day")
                },
                continuesAfter: function(t, n, r) {
                    var o = e(n)
                      , a = e(r);
                    return o.isSameOrAfter(a, "minutes")
                },
                sortEvents: function(e) {
                    var t = e.evtA
                      , n = t.start
                      , o = t.end
                      , a = t.allDay
                      , i = e.evtB
                      , c = i.start
                      , u = i.end
                      , d = i.allDay
                      , f = +r(n, "day") - +r(c, "day")
                      , p = s(n, l(o, "day"), "day")
                      , m = s(c, l(u, "day"), "day");
                    return f || Math.max(m, 1) - Math.max(p, 1) || !!d - !!a || +n - +c || +o - +u
                },
                inEventRange: function(t) {
                    var n = t.event
                      , r = n.start
                      , o = n.end
                      , a = t.range
                      , i = a.start
                      , l = a.end
                      , s = e(r).startOf("day")
                      , c = e(o)
                      , u = e(i)
                      , d = e(l)
                      , f = s.isSameOrBefore(d, "day")
                      , p = s.isSame(c, "minutes") ? c.isSameOrAfter(u, "minutes") : c.isAfter(u, "minutes");
                    return f && p
                },
                isSameDate: function(t, n) {
                    var r = e(t)
                      , o = e(n);
                    return r.isSame(o, "day")
                },
                browserTZOffset: function() {
                    var t = new Date
                      , n = /-/.test(t.toString()) ? "-" : ""
                      , r = t.getTimezoneOffset()
                      , o = Number("".concat(n).concat(Math.abs(r)));
                    return e().utcOffset() > o ? 1 : 0
                }
            })
        }
        var Fa = n(15694)
          , Ua = n(67064)
          , za = n.n(Ua)
          , Ya = n(71702)
          , Wa = n.n(Ya);
        function Va(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            return "function" == typeof e && e.apply(void 0, n)
        }
        function Ka(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        var Xa = "react-contextmenu"
          , qa = "react-contextmenu--visible"
          , $a = "react-contextmenu-wrapper"
          , Ga = "react-contextmenu-item"
          , Qa = "react-contextmenu-item--active"
          , Ja = "react-contextmenu-item--disabled"
          , ei = "react-contextmenu-item--divider"
          , ti = "react-contextmenu-item--selected"
          , ni = "react-contextmenu-submenu"
          , ri = {}
          , oi = Boolean("undefined" != typeof window && window.document && window.document.createElement)
          , ai = "REACT_CONTEXTMENU_SHOW"
          , ii = "REACT_CONTEXTMENU_HIDE";
        function li(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window
              , r = void 0;
            "function" == typeof window.CustomEvent ? r = new window.CustomEvent(e,{
                detail: t
            }) : (r = document.createEvent("CustomEvent")).initCustomEvent(e, !1, !0, t),
            n && (n.dispatchEvent(r),
            Wa()(ri, t))
        }
        function si() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments[1];
            li(ai, Wa()({}, e, {
                type: ai
            }), t)
        }
        function ci() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments[1];
            li(ii, Wa()({}, e, {
                type: ii
            }), t)
        }
        var ui = new function e() {
            var t = this;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.handleShowEvent = function(e) {
                for (var n in t.callbacks)
                    Ka(t.callbacks, n) && t.callbacks[n].show(e)
            }
            ,
            this.handleHideEvent = function(e) {
                for (var n in t.callbacks)
                    Ka(t.callbacks, n) && t.callbacks[n].hide(e)
            }
            ,
            this.register = function(e, n) {
                var r = Math.random().toString(36).substring(7);
                return t.callbacks[r] = {
                    show: e,
                    hide: n
                },
                r
            }
            ,
            this.unregister = function(e) {
                e && t.callbacks[e] && delete t.callbacks[e]
            }
            ,
            this.callbacks = {},
            oi && (window.addEventListener(ai, this.handleShowEvent),
            window.addEventListener(ii, this.handleHideEvent))
        }
        ;
        function di(e) {
            "@babel/helpers - typeof";
            return (di = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var fi = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , pi = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        function mi(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function vi(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== di(t) && "function" != typeof t ? e : t
        }
        var hi = function(e) {
            function t() {
                var e, n, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
                    a[i] = arguments[i];
                return n = r = vi(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))),
                r.handleClick = function(e) {
                    0 !== e.button && 1 !== e.button && e.preventDefault(),
                    r.props.disabled || r.props.divider || (Va(r.props.onClick, e, Wa()({}, r.props.data, ri.data), ri.target),
                    r.props.preventClose || ci())
                }
                ,
                vi(r, n)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + di(t));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r.Component),
            pi(t, [{
                key: "render",
                value: function() {
                    var e, t = this, n = this.props, o = n.attributes, a = n.children, i = n.className, l = n.disabled, s = n.divider, c = n.selected, u = za()(i, Ga, o.className, (mi(e = {}, za()(Ja, o.disabledClassName), l),
                    mi(e, za()(ei, o.dividerClassName), s),
                    mi(e, za()(ti, o.selectedClassName), c),
                    e));
                    return r.createElement("div", fi({}, o, {
                        className: u,
                        role: "menuitem",
                        tabIndex: "-1",
                        "aria-disabled": l ? "true" : "false",
                        "aria-orientation": s ? "horizontal" : null,
                        ref: function(e) {
                            t.ref = e
                        },
                        onMouseMove: this.props.onMouseMove,
                        onMouseLeave: this.props.onMouseLeave,
                        onTouchEnd: this.handleClick,
                        onClick: this.handleClick
                    }), s ? null : a)
                }
            }]),
            t
        }();
        hi.propTypes = {
            attributes: a().object,
            children: a().node,
            className: a().string,
            data: a().object,
            disabled: a().bool,
            divider: a().bool,
            onClick: a().func,
            onMouseLeave: a().func,
            onMouseMove: a().func,
            preventClose: a().bool,
            selected: a().bool
        },
        hi.defaultProps = {
            attributes: {},
            children: null,
            className: "",
            data: {},
            disabled: !1,
            divider: !1,
            onClick: function() {
                return null
            },
            onMouseMove: function() {
                return null
            },
            onMouseLeave: function() {
                return null
            },
            preventClose: !1,
            selected: !1
        };
        var yi = hi;
        function bi(e) {
            "@babel/helpers - typeof";
            return (bi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var gi = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== bi(t) && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return Ei.call(n),
                n.seletedItemRef = null,
                n.state = {
                    selectedItem: null,
                    forceSubMenuOpen: !1
                },
                n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + bi(t));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r.Component),
            t
        }();
        gi.propTypes = {
            children: a().node.isRequired
        };
        var Ei = function() {
            var e = this;
            this.handleKeyNavigation = function(t) {
                if (!1 !== e.state.isVisible)
                    switch (t.keyCode) {
                    case 37:
                    case 27:
                        t.preventDefault(),
                        e.hideMenu(t);
                        break;
                    case 38:
                        t.preventDefault(),
                        e.selectChildren(!0);
                        break;
                    case 40:
                        t.preventDefault(),
                        e.selectChildren(!1);
                        break;
                    case 39:
                        e.tryToOpenSubMenu(t);
                        break;
                    case 13:
                        t.preventDefault(),
                        e.tryToOpenSubMenu(t);
                        var n = e.seletedItemRef && e.seletedItemRef.props && e.seletedItemRef.props.disabled;
                        e.seletedItemRef && e.seletedItemRef.ref instanceof HTMLElement && !n ? e.seletedItemRef.ref.click() : e.hideMenu(t)
                    }
            }
            ,
            this.handleForceClose = function() {
                e.setState({
                    forceSubMenuOpen: !1
                })
            }
            ,
            this.tryToOpenSubMenu = function(t) {
                e.state.selectedItem && e.state.selectedItem.type === e.getSubMenuType() && (t.preventDefault(),
                e.setState({
                    forceSubMenuOpen: !0
                }))
            }
            ,
            this.selectChildren = function(t) {
                var n = e.state.selectedItem
                  , o = []
                  , a = 0
                  , i = {};
                if (r.Children.forEach(e.props.children, function t(n, l) {
                    n && ([yi, e.getSubMenuType()].indexOf(n.type) < 0 ? r.Children.forEach(n.props.children, t) : n.props.divider || (n.props.disabled && (++a,
                    i[l] = !0),
                    o.push(n)))
                }),
                a !== o.length) {
                    var l = function(e) {
                        var n = e;
                        do {
                            t ? --n : ++n,
                            n < 0 ? n = o.length - 1 : n >= o.length && (n = 0)
                        } while (n !== e && i[n]);
                        return n === e ? null : n
                    }(o.indexOf(n));
                    null !== l && e.setState({
                        selectedItem: o[l],
                        forceSubMenuOpen: !1
                    })
                }
            }
            ,
            this.onChildMouseMove = function(t) {
                e.state.selectedItem !== t && e.setState({
                    selectedItem: t,
                    forceSubMenuOpen: !1
                })
            }
            ,
            this.onChildMouseLeave = function() {
                e.setState({
                    selectedItem: null,
                    forceSubMenuOpen: !1
                })
            }
            ,
            this.renderChildren = function(t) {
                return r.Children.map(t, function(t) {
                    var n = {};
                    return r.isValidElement(t) ? [yi, e.getSubMenuType()].indexOf(t.type) < 0 ? (n.children = e.renderChildren(t.props.children),
                    r.cloneElement(t, n)) : (n.onMouseLeave = e.onChildMouseLeave.bind(e),
                    t.type === e.getSubMenuType() && (n.forceOpen = e.state.forceSubMenuOpen && e.state.selectedItem === t,
                    n.forceClose = e.handleForceClose,
                    n.parentKeyNavigationHandler = e.handleKeyNavigation),
                    t.props.divider || e.state.selectedItem !== t ? (n.onMouseMove = function() {
                        return e.onChildMouseMove(t)
                    }
                    ,
                    r.cloneElement(t, n)) : (n.selected = !0,
                    n.ref = function(t) {
                        e.seletedItemRef = t
                    }
                    ,
                    r.cloneElement(t, n))) : t
                })
            }
        }
          , wi = gi;
        function Si(e) {
            "@babel/helpers - typeof";
            return (Si = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Oi = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , Ti = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        function Ci(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var Di = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== Si(t) && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.getMenuPosition = function() {
                    var e = window
                      , t = e.innerWidth
                      , r = e.innerHeight
                      , o = n.subMenu.getBoundingClientRect()
                      , a = {};
                    return o.bottom > r ? a.bottom = 0 : a.top = 0,
                    o.right < t ? a.left = "100%" : a.right = "100%",
                    a
                }
                ,
                n.getRTLMenuPosition = function() {
                    var e = window.innerHeight
                      , t = n.subMenu.getBoundingClientRect()
                      , r = {};
                    return t.bottom > e ? r.bottom = 0 : r.top = 0,
                    t.left < 0 ? r.left = "100%" : r.right = "100%",
                    r
                }
                ,
                n.hideSubMenu = function(e) {
                    e.detail && e.detail.id && n.menu && e.detail.id !== n.menu.id || (n.props.forceOpen && n.props.forceClose(),
                    n.setState({
                        visible: !1,
                        selectedItem: null
                    }),
                    n.unregisterHandlers())
                }
                ,
                n.handleClick = function(e) {
                    e.preventDefault(),
                    n.props.disabled || (Va(n.props.onClick, e, Wa()({}, n.props.data, ri.data), ri.target),
                    n.props.onClick && !n.props.preventCloseOnClick && ci())
                }
                ,
                n.handleMouseEnter = function() {
                    n.closetimer && clearTimeout(n.closetimer),
                    n.props.disabled || n.state.visible || (n.opentimer = setTimeout(function() {
                        return n.setState({
                            visible: !0,
                            selectedItem: null
                        })
                    }, n.props.hoverDelay))
                }
                ,
                n.handleMouseLeave = function() {
                    n.opentimer && clearTimeout(n.opentimer),
                    n.state.visible && (n.closetimer = setTimeout(function() {
                        return n.setState({
                            visible: !1,
                            selectedItem: null
                        })
                    }, n.props.hoverDelay))
                }
                ,
                n.menuRef = function(e) {
                    n.menu = e
                }
                ,
                n.subMenuRef = function(e) {
                    n.subMenu = e
                }
                ,
                n.registerHandlers = function() {
                    document.removeEventListener("keydown", n.props.parentKeyNavigationHandler),
                    document.addEventListener("keydown", n.handleKeyNavigation)
                }
                ,
                n.unregisterHandlers = function(e) {
                    document.removeEventListener("keydown", n.handleKeyNavigation),
                    e || document.addEventListener("keydown", n.props.parentKeyNavigationHandler)
                }
                ,
                n.state = Wa()({}, n.state, {
                    visible: !1
                }),
                n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + Si(t));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, wi),
            Ti(t, [{
                key: "componentDidMount",
                value: function() {
                    this.listenId = ui.register(function() {}, this.hideSubMenu)
                }
            }, {
                key: "getSubMenuType",
                value: function() {
                    return t
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return this.isVisibilityChange = !(this.state.visible === t.visible && this.props.forceOpen === e.forceOpen || this.state.visible && e.forceOpen || this.props.forceOpen && t.visible),
                    !0
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this;
                    if (this.isVisibilityChange)
                        if (this.props.forceOpen || this.state.visible) {
                            (window.requestAnimationFrame || setTimeout)(function() {
                                var t = e.props.rtl ? e.getRTLMenuPosition() : e.getMenuPosition();
                                e.subMenu.style.removeProperty("top"),
                                e.subMenu.style.removeProperty("bottom"),
                                e.subMenu.style.removeProperty("left"),
                                e.subMenu.style.removeProperty("right"),
                                Ka(t, "top") && (e.subMenu.style.top = t.top),
                                Ka(t, "left") && (e.subMenu.style.left = t.left),
                                Ka(t, "bottom") && (e.subMenu.style.bottom = t.bottom),
                                Ka(t, "right") && (e.subMenu.style.right = t.right),
                                e.subMenu.classList.add(qa),
                                e.registerHandlers(),
                                e.setState({
                                    selectedItem: null
                                })
                            })
                        } else {
                            this.subMenu.addEventListener("transitionend", function t() {
                                e.subMenu.removeEventListener("transitionend", t),
                                e.subMenu.style.removeProperty("bottom"),
                                e.subMenu.style.removeProperty("right"),
                                e.subMenu.style.top = 0,
                                e.subMenu.style.left = "100%",
                                e.unregisterHandlers()
                            }),
                            this.subMenu.classList.remove(qa)
                        }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.listenId && ui.unregister(this.listenId),
                    this.opentimer && clearTimeout(this.opentimer),
                    this.closetimer && clearTimeout(this.closetimer),
                    this.unregisterHandlers(!0)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props, n = t.children, o = t.attributes, a = t.disabled, i = t.title, l = t.selected, s = this.state.visible, c = {
                        ref: this.menuRef,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        className: za()(Ga, ni, o.listClassName),
                        style: {
                            position: "relative"
                        }
                    }, u = {
                        className: za()(Ga, o.className, (e = {},
                        Ci(e, za()(Ja, o.disabledClassName), a),
                        Ci(e, za()(Qa, o.visibleClassName), s),
                        Ci(e, za()(ti, o.selectedClassName), l),
                        e)),
                        onMouseMove: this.props.onMouseMove,
                        onMouseOut: this.props.onMouseOut,
                        onClick: this.handleClick
                    }, d = {
                        ref: this.subMenuRef,
                        style: {
                            position: "absolute",
                            transition: "opacity 1ms",
                            top: 0,
                            left: "100%"
                        },
                        className: za()(Xa, this.props.className)
                    };
                    return r.createElement("nav", Oi({}, c, {
                        role: "menuitem",
                        tabIndex: "-1",
                        "aria-haspopup": "true"
                    }), r.createElement("div", Oi({}, o, u), i), r.createElement("nav", Oi({}, d, {
                        role: "menu",
                        tabIndex: "-1"
                    }), this.renderChildren(n)))
                }
            }]),
            t
        }();
        Di.propTypes = {
            children: a().node.isRequired,
            attributes: a().object,
            title: a().node.isRequired,
            className: a().string,
            disabled: a().bool,
            hoverDelay: a().number,
            rtl: a().bool,
            selected: a().bool,
            onMouseMove: a().func,
            onMouseOut: a().func,
            forceOpen: a().bool,
            forceClose: a().func,
            parentKeyNavigationHandler: a().func
        },
        Di.defaultProps = {
            disabled: !1,
            hoverDelay: 500,
            attributes: {},
            className: "",
            rtl: !1,
            selected: !1,
            onMouseMove: function() {
                return null
            },
            onMouseOut: function() {
                return null
            },
            forceOpen: !1,
            forceClose: function() {
                return null
            },
            parentKeyNavigationHandler: function() {
                return null
            }
        };
        var ki = Di;
        function Ni(e) {
            "@babel/helpers - typeof";
            return (Ni = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Pi = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        var xi = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== Ni(t) && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.registerHandlers = function() {
                    document.addEventListener("mousedown", n.handleOutsideClick),
                    document.addEventListener("touchstart", n.handleOutsideClick),
                    n.props.preventHideOnScroll || document.addEventListener("scroll", n.handleHide),
                    n.props.preventHideOnContextMenu || document.addEventListener("contextmenu", n.handleHide),
                    document.addEventListener("keydown", n.handleKeyNavigation),
                    n.props.preventHideOnResize || window.addEventListener("resize", n.handleHide)
                }
                ,
                n.unregisterHandlers = function() {
                    document.removeEventListener("mousedown", n.handleOutsideClick),
                    document.removeEventListener("touchstart", n.handleOutsideClick),
                    document.removeEventListener("scroll", n.handleHide),
                    document.removeEventListener("contextmenu", n.handleHide),
                    document.removeEventListener("keydown", n.handleKeyNavigation),
                    window.removeEventListener("resize", n.handleHide)
                }
                ,
                n.handleShow = function(e) {
                    if (e.detail.id === n.props.id && !n.state.isVisible) {
                        var t = e.detail.position
                          , r = t.x
                          , o = t.y;
                        n.setState({
                            isVisible: !0,
                            x: r,
                            y: o
                        }),
                        n.registerHandlers(),
                        Va(n.props.onShow, e)
                    }
                }
                ,
                n.handleHide = function(e) {
                    !n.state.isVisible || e.detail && e.detail.id && e.detail.id !== n.props.id || (n.unregisterHandlers(),
                    n.setState({
                        isVisible: !1,
                        selectedItem: null,
                        forceSubMenuOpen: !1
                    }),
                    Va(n.props.onHide, e))
                }
                ,
                n.handleOutsideClick = function(e) {
                    n.menu.contains(e.target) || ci()
                }
                ,
                n.handleMouseLeave = function(e) {
                    e.preventDefault(),
                    Va(n.props.onMouseLeave, e, Wa()({}, n.props.data, ri.data), ri.target),
                    n.props.hideOnLeave && ci()
                }
                ,
                n.handleContextMenu = function(e) {
                    e.preventDefault(),
                    n.handleHide(e)
                }
                ,
                n.hideMenu = function(e) {
                    27 !== e.keyCode && 13 !== e.keyCode || ci()
                }
                ,
                n.getMenuPosition = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , r = {
                        top: t,
                        left: e
                    };
                    if (!n.menu)
                        return r;
                    var o = window
                      , a = o.innerWidth
                      , i = o.innerHeight
                      , l = n.menu.getBoundingClientRect();
                    return t + l.height > i && (r.top -= l.height),
                    e + l.width > a && (r.left -= l.width),
                    r.top < 0 && (r.top = l.height < i ? (i - l.height) / 2 : 0),
                    r.left < 0 && (r.left = l.width < a ? (a - l.width) / 2 : 0),
                    r
                }
                ,
                n.getRTLMenuPosition = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , r = {
                        top: t,
                        left: e
                    };
                    if (!n.menu)
                        return r;
                    var o = window
                      , a = o.innerWidth
                      , i = o.innerHeight
                      , l = n.menu.getBoundingClientRect();
                    return r.left = e - l.width,
                    t + l.height > i && (r.top -= l.height),
                    r.left < 0 && (r.left += l.width),
                    r.top < 0 && (r.top = l.height < i ? (i - l.height) / 2 : 0),
                    r.left + l.width > a && (r.left = l.width < a ? (a - l.width) / 2 : 0),
                    r
                }
                ,
                n.menuRef = function(e) {
                    n.menu = e
                }
                ,
                n.state = Wa()({}, n.state, {
                    x: 0,
                    y: 0,
                    isVisible: !1
                }),
                n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + Ni(t));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, wi),
            Pi(t, [{
                key: "getSubMenuType",
                value: function() {
                    return ki
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.listenId = ui.register(this.handleShow, this.handleHide)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this
                      , t = window.requestAnimationFrame || setTimeout;
                    this.state.isVisible ? t(function() {
                        var n = e.state
                          , r = n.x
                          , o = n.y
                          , a = e.props.rtl ? e.getRTLMenuPosition(r, o) : e.getMenuPosition(r, o)
                          , i = a.top
                          , l = a.left;
                        t(function() {
                            e.menu && (e.menu.style.top = i + "px",
                            e.menu.style.left = l + "px",
                            e.menu.style.opacity = 1,
                            e.menu.style.pointerEvents = "auto")
                        })
                    }) : t(function() {
                        e.menu && (e.menu.style.opacity = 0,
                        e.menu.style.pointerEvents = "none")
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.listenId && ui.unregister(this.listenId),
                    this.unregisterHandlers()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.children
                      , n = e.className
                      , o = e.style
                      , a = this.state.isVisible
                      , i = Wa()({}, o, {
                        position: "fixed",
                        opacity: 0,
                        pointerEvents: "none"
                    })
                      , l = za()(Xa, n, function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n,
                        e
                    }({}, qa, a));
                    return r.createElement("nav", {
                        role: "menu",
                        tabIndex: "-1",
                        ref: this.menuRef,
                        style: i,
                        className: l,
                        onContextMenu: this.handleContextMenu,
                        onMouseLeave: this.handleMouseLeave
                    }, this.renderChildren(t))
                }
            }]),
            t
        }();
        xi.propTypes = {
            id: a().string.isRequired,
            children: a().node.isRequired,
            data: a().object,
            className: a().string,
            hideOnLeave: a().bool,
            rtl: a().bool,
            onHide: a().func,
            onMouseLeave: a().func,
            onShow: a().func,
            preventHideOnContextMenu: a().bool,
            preventHideOnResize: a().bool,
            preventHideOnScroll: a().bool,
            style: a().object
        },
        xi.defaultProps = {
            className: "",
            data: {},
            hideOnLeave: !1,
            rtl: !1,
            onHide: function() {
                return null
            },
            onMouseLeave: function() {
                return null
            },
            onShow: function() {
                return null
            },
            preventHideOnContextMenu: !1,
            preventHideOnResize: !1,
            preventHideOnScroll: !1,
            style: {}
        };
        var _i = xi;
        function Mi(e) {
            "@babel/helpers - typeof";
            return (Mi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Ri = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        function Ai(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== Mi(t) && "function" != typeof t ? e : t
        }
        var Ii = function(e) {
            function t() {
                var e, n, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
                    a[i] = arguments[i];
                return n = r = Ai(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))),
                r.touchHandled = !1,
                r.handleMouseDown = function(e) {
                    r.props.holdToDisplay >= 0 && 0 === e.button && (e.persist(),
                    e.stopPropagation(),
                    r.mouseDownTimeoutId = setTimeout(function() {
                        return r.handleContextClick(e)
                    }, r.props.holdToDisplay)),
                    Va(r.props.attributes.onMouseDown, e)
                }
                ,
                r.handleMouseUp = function(e) {
                    0 === e.button && clearTimeout(r.mouseDownTimeoutId),
                    Va(r.props.attributes.onMouseUp, e)
                }
                ,
                r.handleMouseOut = function(e) {
                    0 === e.button && clearTimeout(r.mouseDownTimeoutId),
                    Va(r.props.attributes.onMouseOut, e)
                }
                ,
                r.handleTouchstart = function(e) {
                    r.touchHandled = !1,
                    r.props.holdToDisplay >= 0 && (e.persist(),
                    e.stopPropagation(),
                    r.touchstartTimeoutId = setTimeout(function() {
                        r.handleContextClick(e),
                        r.touchHandled = !0
                    }, r.props.holdToDisplay)),
                    Va(r.props.attributes.onTouchStart, e)
                }
                ,
                r.handleTouchEnd = function(e) {
                    r.touchHandled && e.preventDefault(),
                    clearTimeout(r.touchstartTimeoutId),
                    Va(r.props.attributes.onTouchEnd, e)
                }
                ,
                r.handleContextMenu = function(e) {
                    e.button === r.props.mouseButton && r.handleContextClick(e),
                    Va(r.props.attributes.onContextMenu, e)
                }
                ,
                r.handleMouseClick = function(e) {
                    e.button === r.props.mouseButton && r.handleContextClick(e),
                    Va(r.props.attributes.onClick, e)
                }
                ,
                r.handleContextClick = function(e) {
                    if (!(r.props.disable || r.props.disableIfShiftIsPressed && e.shiftKey)) {
                        e.preventDefault(),
                        e.stopPropagation();
                        var t = e.clientX || e.touches && e.touches[0].pageX
                          , n = e.clientY || e.touches && e.touches[0].pageY;
                        r.props.posX && (t -= r.props.posX),
                        r.props.posY && (n -= r.props.posY),
                        ci();
                        var o = Va(r.props.collect, r.props)
                          , a = {
                            position: {
                                x: t,
                                y: n
                            },
                            target: r.elem,
                            id: r.props.id
                        };
                        o && "function" == typeof o.then ? o.then(function(t) {
                            a.data = Wa()({}, t, {
                                target: e.target
                            }),
                            si(a)
                        }) : (a.data = Wa()({}, o, {
                            target: e.target
                        }),
                        si(a))
                    }
                }
                ,
                r.elemRef = function(e) {
                    r.elem = e
                }
                ,
                Ai(r, n)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + Mi(t));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r.Component),
            Ri(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.renderTag
                      , n = e.attributes
                      , o = e.children
                      , a = Wa()({}, n, {
                        className: za()($a, n.className),
                        onContextMenu: this.handleContextMenu,
                        onClick: this.handleMouseClick,
                        onMouseDown: this.handleMouseDown,
                        onMouseUp: this.handleMouseUp,
                        onTouchStart: this.handleTouchstart,
                        onTouchEnd: this.handleTouchEnd,
                        onMouseOut: this.handleMouseOut,
                        ref: this.elemRef
                    });
                    return r.createElement(t, a, o)
                }
            }]),
            t
        }();
        Ii.propTypes = {
            id: a().string.isRequired,
            children: a().node.isRequired,
            attributes: a().object,
            collect: a().func,
            disable: a().bool,
            holdToDisplay: a().number,
            posX: a().number,
            posY: a().number,
            renderTag: a().elementType,
            mouseButton: a().number,
            disableIfShiftIsPressed: a().bool
        },
        Ii.defaultProps = {
            attributes: {},
            collect: function() {
                return null
            },
            disable: !1,
            holdToDisplay: 1e3,
            renderTag: "div",
            posX: 0,
            posY: 0,
            mouseButton: 2,
            disableIfShiftIsPressed: !1
        };
        var Li = Ii;
        function ji(e) {
            "@babel/helpers - typeof";
            return (ji = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Zi = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , Bi = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        var Hi = [].concat(function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                return n
            }
            return Array.from(e)
        }(Object.keys(Li.propTypes)), ["children"]);
        function Fi(e) {
            return function(t) {
                return function(n) {
                    function o(t) {
                        !function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, o);
                        var n = function(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== ji(t) && "function" != typeof t ? e : t
                        }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, t));
                        return n.handleShow = function(t) {
                            if (t.detail.id === e) {
                                var r = t.detail.data
                                  , o = {};
                                for (var a in r)
                                    Hi.includes(a) || (o[a] = r[a]);
                                n.setState({
                                    trigger: o
                                })
                            }
                        }
                        ,
                        n.handleHide = function() {
                            n.setState({
                                trigger: null
                            })
                        }
                        ,
                        n.state = {
                            trigger: null
                        },
                        n
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + ji(t));
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(o, r.Component),
                    Bi(o, [{
                        key: "componentDidMount",
                        value: function() {
                            this.listenId = ui.register(this.handleShow, this.handleHide)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.listenId && ui.unregister(this.listenId)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.createElement(t, Zi({}, this.props, {
                                id: e,
                                trigger: this.state.trigger
                            }))
                        }
                    }]),
                    o
                }()
            }
        }
        var Ui = n(32081)
          , zi = n(80110)
          , Yi = n(84987)
          , Wi = n(23893)
          , Vi = n(85608)
          , Ki = n(94165)
          , Xi = n(80357)
          , qi = n.n(Xi)
          , $i = n(20040)
          , Gi = n.n($i);
        function Qi(e) {
            "@babel/helpers - typeof";
            return (Qi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ji(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, el(r.key), r)
            }
        }
        function el(e) {
            var t = function(e, t) {
                if ("object" !== Qi(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Qi(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Qi(t) ? t : String(t)
        }
        function tl(e, t) {
            return (tl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function nl(e) {
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
                var n, r = ol(e);
                if (t) {
                    var o = ol(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Qi(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return rl(e)
                }(this, n)
            }
        }
        function rl(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ol(e) {
            return (ol = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var al = function(e) {
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
                t && tl(e, t)
            }(n, r.PureComponent);
            var t = nl(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).handleFieldSelect = r.handleFieldSelect.bind(rl(r)),
                r
            }
            return function(e, t, n) {
                t && Ji(e.prototype, t),
                n && Ji(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "getFieldBySortKey",
                value: function(e) {
                    return this.props.sortFields.filter(function(t) {
                        var n = t.ascKey
                          , r = t.descKey;
                        return e === n || e === r
                    })[0]
                }
            }, {
                key: "handleFieldSelect",
                value: function(e) {
                    var t = e.ascKey
                      , n = e.descKey
                      , r = e.defaultDirection
                      , o = this.props
                      , a = o.sort;
                    (0,
                    o.onChange)(t === a && n || n === a && t || ("desc" === r ? n : t))
                }
            }, {
                key: "renderMenuItems",
                value: function() {
                    var e = this.props
                      , t = e.sort;
                    return e.sortFields.map(function(e) {
                        var n = t === e.ascKey && r.createElement(Ui.Z, {
                            name: "up-thin",
                            className: "calendar-CalendarListSortBtn-asc"
                        }) || t === e.descKey && r.createElement(Ui.Z, {
                            name: "down-thin",
                            className: "Socalendar-CalendarListrtBtn-desc"
                        });
                        return r.createElement(Gi(), {
                            key: e.id,
                            eventKey: e,
                            "aria-label": e.text
                        }, n, r.createElement("span", {
                            className: "calendar-CalendarListSortBtn-item-label"
                        }, e.text))
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return r.createElement(qi(), {
                        pullRight: !0,
                        title: (0,
                        Yi.t)("mail.listView.SORT"),
                        onSelect: this.handleFieldSelect
                    }, r.createElement(qi().Toggle, {
                        noCaret: !0,
                        bsStyle: "default"
                    }, r.createElement(Ui.Z, {
                        name: "sort",
                        role: Ki.HB.BUTTON,
                        "aria-label": (0,
                        Yi.t)("mail.listView.SORT")
                    })), r.createElement(qi().Menu, {
                        className: "super-colors"
                    }, this.renderMenuItems()))
                }
            }]),
            n
        }();
        al.defaultProps = {
            sort: null,
            onChange: function() {},
            sortFields: []
        },
        al.propTypes = {
            sort: a().string,
            onChange: a().func,
            sortFields: a().arrayOf(a().object)
        };
        var il = (0,
        i.$j)(function(e) {
            var t = Ki.IB.SORT_START_TIME_DESC
              , n = Ki.IB.SORT_START_TIME_ASC
              , r = Ki.IB.SORT_SUMMARY_ASC
              , o = Ki.IB.SORT_SUMMARY_DESC
              , a = [{
                id: "SORT_START_TIME",
                ascKey: n,
                descKey: t,
                text: (0,
                Yi.t)("calendar.toolbar.sort.LABEL_DATE"),
                defaultDirection: "desc"
            }, {
                id: "SORT_SUMMARY_ASC",
                ascKey: r,
                descKey: o,
                text: (0,
                Yi.t)("calendar.editorView.LABEL_SUMMARY"),
                defaultDirection: "asc"
            }];
            return {
                sort: (0,
                Wi.eO)(e),
                sortFields: a
            }
        }, function(e) {
            return {
                onChange: function(t) {
                    return e((0,
                    Vi.h)(t))
                }
            }
        })(al);
        function ll(e) {
            "@babel/helpers - typeof";
            return (ll = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function sl(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, cl(r.key), r)
            }
        }
        function cl(e) {
            var t = function(e, t) {
                if ("object" !== ll(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== ll(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === ll(t) ? t : String(t)
        }
        function ul(e, t) {
            return (ul = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function dl(e) {
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
                var n, r = fl(e);
                if (t) {
                    var o = fl(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ll(t) || "function" == typeof t))
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
        function fl(e) {
            return (fl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var pl = function(e) {
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
                t && ul(e, t)
            }(n, r.PureComponent);
            var t = dl(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                t.apply(this, arguments)
            }
            return function(e, t, n) {
                t && sl(e.prototype, t),
                n && sl(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.dateLabel
                      , n = e.view
                      , o = e.onNavigating
                      , a = e.onToday
                      , i = e.onViewChanged
                      , l = e.currentDate
                      , s = e.onClearSelection;
                    return r.createElement("div", {
                        className: "ow-calendar-CalendarNavBar",
                        tabIndex: 0
                    }, r.createElement("div", {
                        className: "ow-calendar-CalendarNavBar-date-nav"
                    }, r.createElement(Ui.Z, {
                        title: (0,
                        Yi.t)("wizard.PREVIOUS"),
                        name: "left",
                        onClick: function() {
                            return o(-1, l)
                        },
                        role: Ki.HB.BUTTON,
                        "aria-label": (0,
                        Yi.t)("wizard.PREVIOUS"),
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            return e.key === Ki.BY.ENTERKEY && o(-1, l)
                        }
                    }), r.createElement(Ui.Z, {
                        title: (0,
                        Yi.t)("wizard.NEXT"),
                        name: "right",
                        onClick: function() {
                            return o(1, l)
                        },
                        role: Ki.HB.BUTTON,
                        "aria-label": (0,
                        Yi.t)("wizard.NEXT"),
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            return e.key === Ki.BY.ENTERKEY && o(1, l)
                        }
                    }), r.createElement("div", {
                        className: "ow-calendar-CalendarNavBar-date",
                        "aria-label": t,
                        tabIndex: 0
                    }, t), r.createElement("span", {
                        className: "ow-calendar-CalendarNavBar-today",
                        onClick: function() {
                            return a()
                        },
                        role: Ki.HB.PRESENTATION,
                        "aria-label": (0,
                        Yi.t)("calendar.toolbar.BUTTON_TODAY"),
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === Ki.BY.ENTERKEY && a()
                        }
                    }, (0,
                    Yi.t)("calendar.toolbar.BUTTON_TODAY"))), r.createElement("div", {
                        className: "ow-calendar-CalendarNavBar-btns"
                    }, r.createElement("span", {
                        className: "day" === n ? "ow-calendar-CalendarNavBar-btn-selected" : "",
                        onClick: function() {
                            i("day"),
                            s()
                        },
                        role: Ki.HB.LINK,
                        "aria-label": (0,
                        Yi.t)("calendar.toolbar.BUTTON_DAY"),
                        "aria-selected": "day" === n,
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === Ki.BY.ENTERKEY && i("day"),
                            s()
                        }
                    }, (0,
                    Yi.t)("calendar.toolbar.BUTTON_DAY")), r.createElement("span", {
                        className: "week" === n ? "ow-calendar-CalendarNavBar-btn-selected" : "",
                        onClick: function() {
                            i("week"),
                            s()
                        },
                        role: Ki.HB.LINK,
                        "aria-label": (0,
                        Yi.t)("calendar.toolbar.BUTTON_WEEK"),
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === Ki.BY.ENTERKEY && i("week"),
                            s()
                        }
                    }, (0,
                    Yi.t)("calendar.toolbar.BUTTON_WEEK")), r.createElement("span", {
                        className: "month" === n ? "ow-calendar-CalendarNavBar-btn-selected" : "",
                        onClick: function() {
                            i("month"),
                            s()
                        },
                        role: Ki.HB.LINK,
                        "aria-label": (0,
                        Yi.t)("calendar.toolbar.BUTTON_MONTH"),
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === Ki.BY.ENTERKEY && i("month"),
                            s()
                        }
                    }, (0,
                    Yi.t)("calendar.toolbar.BUTTON_MONTH")), r.createElement("div", {
                        className: "ow-calendar-CalendarNavBar-btn-list ".concat("list" === n ? "ow-calendar-CalendarNavBar-btn-selected" : ""),
                        onClick: function() {
                            i("list"),
                            s()
                        },
                        role: Ki.HB.LINK,
                        "aria-label": (0,
                        Yi.t)("calendar.toolbar.BUTTON_AGENDA"),
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === Ki.BY.ENTERKEY && i("list"),
                            s()
                        }
                    }, r.createElement("span", {
                        role: Ki.HB.PRESENTATION
                    }, (0,
                    Yi.t)("calendar.toolbar.BUTTON_AGENDA")), "list" === n && r.createElement(il, null))))
                }
            }]),
            n
        }();
        pl.defaultProps = {
            view: "month",
            dateLabel: "",
            onNavigating: function() {},
            onViewChanged: function() {},
            onToday: function() {},
            onClearSelection: function() {}
        },
        pl.propTypes = {
            view: a().string,
            dateLabel: a().string,
            onNavigating: a().func,
            onViewChanged: a().func,
            onToday: a().func,
            onClearSelection: a().func
        };
        var ml = n(61805)
          , vl = (0,
        i.$j)(function(e, t) {
            var n, r = t.onMainMenu, o = t.targetDate, a = (t.enableScroll,
            (0,
            ml.m7)(e)), i = (0,
            ml.Oj)(e), l = i.startTime, s = i.endTime, c = (0,
            ml.vo)(e);
            a && ("month" === c || "list" === c ? n = a.format("MMMM YYYY") : "week" === c ? n = l.isSame(s, "month") ? "".concat(l.format("MMMM"), " ").concat(l.format("D"), "-").concat(s.format("D"), ", ").concat(l.format("YYYY")) : "".concat(l.format("MMMM D, YYYY"), " - ").concat(s.format("MMMM D, YYYY")) : "day" === c && (n = l.format("MMMM D, YYYY")));
            var u = window.TimeUtil && window.TimeUtil.getTimeZoneMomentForRui().format("DD")
              , d = o ? o.format("YYYY") : ""
              , f = o ? o.format("MMM") : ""
              , p = a ? a.format("YYYY") : ""
              , m = window.TimeUtil ? window.TimeUtil.getTimeZoneMomentForRui().format("MMM") : "";
            return {
                yearLabel: d,
                monthLabel: f,
                todayDateLabel: u,
                dateLabel: n,
                view: c,
                onMainMenu: r,
                currentDate: window.TimeUtil && window.TimeUtil.getTimeZoneMomentForRui(a),
                currentMonth: m,
                currentDay: p
            }
        }, function(e) {
            return {
                onNavigating: function(t, n) {
                    return e((0,
                    Vi.kl)({
                        direction: t,
                        date: n
                    }))
                },
                onToday: function() {
                    e((0,
                    Vi.nT)())
                },
                onViewChanged: function(t) {
                    return e((0,
                    Vi.YF)(t))
                },
                toggleSearch: function(t) {
                    return e((0,
                    Vi.PH)(t))
                },
                onClearSelection: function() {
                    e((0,
                    Vi.$p)([]))
                }
            }
        })(pl)
          , hl = n(24083)
          , yl = n(55086)
          , bl = n(90656)
          , gl = function(e) {
            var t = e.id
              , n = e.trigger
              , o = e.isSubscribeEvent
              , a = e.isList
              , i = n || {}
              , l = i.onClickEditOfMenu
              , s = i.onClickDeleteOfMenu
              , c = i.onClickExportOfMenu
              , u = i.onClickSendOfMenu
              , d = i.onClickViewOfMenu
              , f = null;
            return a || (f = o ? r.createElement(yi, {
                onClick: d,
                className: "ow-menuitem",
                "aria-label": (0,
                Yi.t)("calendar.action.VIEW_EVENT")
            }, (0,
            Yi.t)("calendar.action.VIEW_EVENT")) : r.createElement(yi, {
                onClick: l,
                className: "ow-menuitem",
                "aria-label": (0,
                Yi.t)("common.EDIT")
            }, (0,
            Yi.t)("common.EDIT"))),
            r.createElement(_i, {
                id: t,
                className: "ow-calendar-contextmenu-container",
                role: Ki.HB.MENU
            }, n && f, n && !n.deleteDisabled && r.createElement(yi, {
                onClick: s,
                className: "ow-menuitem",
                "aria-label": (0,
                Yi.t)("common.DELETE")
            }, (0,
            Yi.t)("common.DELETE")), n && r.createElement(yi, {
                onClick: c,
                className: "ow-menuitem",
                "aria-label": (0,
                Yi.t)("calendar.action.eventsExport.BUTTON_EXPORT")
            }, (0,
            Yi.t)("calendar.action.eventsExport.BUTTON_EXPORT")), n && r.createElement(yi, {
                onClick: u,
                className: "ow-menuitem",
                "aria-label": (0,
                Yi.t)("calendar.action.SEND_AS_ATTACHMENT")
            }, (0,
            Yi.t)("calendar.action.SEND_AS_ATTACHMENT")))
        };
        gl.propTypes = {
            id: a().string.isRequired,
            className: a().string,
            trigger: a().shape({
                onClickEditOfMenu: a().func,
                onClickDeleteOfMenu: a().func,
                onClickExportOfMenu: a().func,
                onClickSendOfMenu: a().func,
                deleteDisabled: a().bool
            }),
            isSubscribeEvent: a().bool,
            isList: a().bool
        },
        gl.defaultProps = {
            className: "",
            trigger: {
                onClickEditOfMenu: function() {},
                onClickDeleteOfMenu: function() {},
                onClickExportOfMenu: function() {},
                onClickSendOfMenu: function() {},
                deleteDisabled: !1
            },
            isSubscribeEvent: !1,
            isList: !1
        };
        var El = function(e) {
            return Fi(e)(gl)
        }
          , wl = n(44910)
          , Sl = n(4446);
        function Ol(e) {
            "@babel/helpers - typeof";
            return (Ol = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Tl() {
            return (Tl = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Cl(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Dl(r.key), r)
            }
        }
        function Dl(e) {
            var t = function(e, t) {
                if ("object" !== Ol(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Ol(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Ol(t) ? t : String(t)
        }
        function kl(e, t) {
            return (kl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Nl(e) {
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
                var n, r = xl(e);
                if (t) {
                    var o = xl(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Ol(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Pl(e)
                }(this, n)
            }
        }
        function Pl(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function xl(e) {
            return (xl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var _l = El("calendar-event-list-contextmenu")
          , Ml = function(e) {
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
                t && kl(e, t)
            }(n, r.PureComponent);
            var t = Nl(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).listComponent = null,
                r.lastSelectedItem = null,
                r.renderItem = r.renderItem.bind(Pl(r)),
                r.itemWrapperClass = r.itemWrapperClass.bind(Pl(r)),
                r.onClickEditOfMenu = r.onClickEditOfMenu.bind(Pl(r)),
                r.onClickDeleteOfMenu = r.onClickDeleteOfMenu.bind(Pl(r)),
                r.onClickExportOfMenu = r.onClickExportOfMenu.bind(Pl(r)),
                r.onClickSendOfMenu = r.onClickSendOfMenu.bind(Pl(r)),
                r.onShow = r.onShow.bind(Pl(r)),
                r.onHide = r.onHide.bind(Pl(r)),
                r
            }
            return function(e, t, n) {
                t && Cl(e.prototype, t),
                n && Cl(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.itemHeight
                      , n = e.bufferCount
                      , r = e.scrollTop;
                    (0,
                    e.updatePagination)({
                        itemHeight: t,
                        bufferCount: n,
                        scrollTop: r
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t, n, r = this.props.data.itemTotalCount;
                    r < (null === e || void 0 === e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.itemTotalCount) && void 0 !== r && Sl.UhU.isDesktop && ((0,
                    wl.we)("[class*=ow-calendar-EventListItem]", r, this.listComponent, null),
                    0 === r && 1 === (null === e || void 0 === e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : n.itemTotalCount) && (0,
                    wl.kW)("#calendarToolbarNewEventBtn"))
                }
            }, {
                key: "onShow",
                value: function(e) {
                    if (e && e.detail && e.detail.target) {
                        var t = e.detail.target;
                        t && "string" == typeof t.className && (this.lastSelectedItem && (this.lastSelectedItem.className = this.lastSelectedItem.className.split(" ").filter(function(e) {
                            return "ow-VirtualizedList-item-selected" !== e
                        }).join(" ")),
                        t.className = t.className.split(" ").concat(["ow-VirtualizedList-item-selected"]).join(" "),
                        this.lastSelectedItem = t)
                    }
                }
            }, {
                key: "onHide",
                value: function() {
                    this.lastSelectedItem && (this.lastSelectedItem.className = this.lastSelectedItem.className.split(" ").filter(function(e) {
                        return "ow-VirtualizedList-item-selected" !== e
                    }).join(" "))
                }
            }, {
                key: "onClickEditOfMenu",
                value: function(e, t) {
                    var n = t.event;
                    this.props.onEdit(n)
                }
            }, {
                key: "onClickDeleteOfMenu",
                value: function(e, t) {
                    var n = t.event;
                    this.props.onDelete(n)
                }
            }, {
                key: "onClickExportOfMenu",
                value: function(e, t) {
                    var n = t.event;
                    this.props.onExport(n)
                }
            }, {
                key: "onClickSendOfMenu",
                value: function(e, t) {
                    var n = t.event;
                    this.props.onSendAsAttachment(n)
                }
            }, {
                key: "itemWrapperClass",
                value: function(e) {
                    return (0,
                    this.props.isItemSelected)(e) ? "ow-VirtualizedList-item-selected" : ""
                }
            }, {
                key: "renderSection",
                value: function(e) {
                    var t = e.value;
                    if ("string" == typeof t)
                        return r.createElement("span", {
                            className: "ow-calendar-EventListItem-section-label"
                        }, t);
                    var n = window.TimeUtil.getDateTimePatterns();
                    return r.createElement("span", {
                        className: "ow-calendar-EventListItem-section-label"
                    }, t.format(n.WeekDayShort), r.createElement("br", null), t.format(n.MonthDayYear))
                }
            }, {
                key: "renderItem",
                value: function(e) {
                    var t = this
                      , n = this.props
                      , o = n.calendarColors
                      , a = n.calendars;
                    if (!e.data)
                        return r.createElement("div", {
                            className: "ow-calendar-EventListItem-empty"
                        });
                    var i = e.data
                      , l = i.calendarId
                      , s = i.allDay
                      , c = i.startTime
                      , u = i.endTime
                      , d = i.summary
                      , f = i.recurrenceOf
                      , p = i.alarm
                      , m = i.attendees
                      , v = i.categories
                      , h = o[l]
                      , y = a[l] ? a[l] : ""
                      , b = y.personal
                      , g = y.readOnly
                      , E = window.TimeUtil
                      , w = E.getTimeParseInt24to12(E.getShortTimeForRui(E.parseInTimezoneForRui(c)))
                      , S = E.getTimeParseInt24to12(E.getShortTimeForRui(E.parseInTimezoneForRui(u)))
                      , O = "".concat(w, " - ").concat(S)
                      , T = !b && (g ? r.createElement(Ui.Z, {
                        name: "eye"
                    }) : r.createElement(Ui.Z, {
                        name: "edit"
                    }))
                      , C = {
                        onClickEditOfMenu: this.onClickEditOfMenu,
                        onClickDeleteOfMenu: this.onClickDeleteOfMenu,
                        onClickExportOfMenu: this.onClickExportOfMenu,
                        onClickSendOfMenu: this.onClickSendOfMenu,
                        deleteDisabled: g,
                        event: e.data,
                        isSubsribeEvent: g
                    };
                    return r.createElement(Li, Tl({
                        id: "calendar-event-list-contextmenu",
                        collect: function(e) {
                            return e
                        },
                        attributes: {
                            className: "ow-contextmenu-trigger-item"
                        }
                    }, C), r.createElement("div", {
                        className: "ow-calendar-EventListItem",
                        tabIndex: Sl.UhU.isDesktop ? 0 : -1,
                        role: Ki.HB.LIST,
                        "aria-label": "".concat(s ? "calendar.common.LABEL_ALLDAY" : O, " ").concat(d),
                        onKeyDown: function(n) {
                            n.key === Ki.BY.ENTERKEY && (null === Sl.UhU || void 0 === Sl.UhU ? void 0 : Sl.UhU.isDesktop) && t.listComponent.handleItemClick(e),
                            (0,
                            wl.kW)("#ow-calendar-preview-close")
                        },
                        onFocus: function(e) {
                            return (0,
                            wl.yJ)(e)
                        },
                        onBlur: function(e) {
                            (0,
                            wl.yJ)(e),
                            (0,
                            wl.np)(e, t.listComponent)
                        }
                    }, b ? r.createElement("div", {
                        className: "ow-calendar-EventListItem-bullet",
                        style: {
                            backgroundColor: h
                        }
                    }) : r.createElement(Ui.Z, {
                        name: "share",
                        style: {
                            color: h
                        },
                        title: g ? (0,
                        Yi.t)("calendar.calendarEditor.shareCalendarPermission.read") : (0,
                        Yi.t)("calendar.calendarEditor.shareCalendarPermission.readwrite")
                    }), r.createElement("div", {
                        className: "ow-calendar-EventListItem-time"
                    }, s ? (0,
                    Yi.t)("calendar.common.LABEL_ALLDAY") : O), r.createElement("div", {
                        className: "ow-calendar-EventListItem-summary"
                    }, d), r.createElement("div", {
                        className: "ow-calendar-EventListItem-icons"
                    }, f && r.createElement(Ui.Z, {
                        name: "refresh"
                    }), p && r.createElement(Ui.Z, {
                        name: "reminder"
                    }), v && r.createElement(Ui.Z, {
                        name: "calendar-".concat(v.toLowerCase())
                    }), T, m && m.length > 0 && r.createElement(Ui.Z, {
                        name: "users"
                    }))))
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this, n = this.props, o = n.data, a = n.updatePagination, i = n.isFetching;
                    return r.createElement("div", {
                        className: "ow-calendar-EventList-container"
                    }, r.createElement(yl.Z, {
                        className: "ow-calendar-EventList-AutoSizer",
                        onResize: function(e) {
                            var t = e.height
                              , n = e.width;
                            a({
                                listHeight: t,
                                listWidth: n
                            })
                        }
                    }, function(e) {
                        var n = e.height
                          , a = e.width;
                        if (0 === n || 0 === a)
                            return r.createElement("div", null);
                        if (!(i || o && 0 !== o.itemTotalCount && o.rows.filter(Boolean).length))
                            return r.createElement("div", {
                                className: "ow-calendar-EventList-tooltip",
                                role: Ki.HB.ALERT,
                                "aria-atomic": "true",
                                "aria-live": Ki.HO.ASSERTIVE
                            }, r.createElement("span", null, (0,
                            Yi.t)("calendar.common.EMPTY_TEXT")));
                        var l = r.createElement(hl.JZ, Tl({
                            className: "ow-calendar-EventList",
                            renderItem: t.renderItem,
                            itemWrapperClass: t.itemWrapperClass,
                            renderSection: t.renderSection
                        }, t.props, {
                            ref: function(e) {
                                t.listComponent = e
                            }
                        }));
                        return i ? [l] : l
                    }), r.createElement(_l, null), r.createElement("div", {
                        role: Ki.HB.STATUS,
                        "aria-live": Ki.HO.ASSERTIVE,
                        "aria-label": (0,
                        bl.WU)((0,
                        Yi.t)("calendar.notifyMessage.NUMBER_OF_EVENTS"), null === o || void 0 === o ? void 0 : null === (e = o.rows) || void 0 === e ? void 0 : e.length)
                    }))
                }
            }]),
            n
        }();
        function Rl(e) {
            "@babel/helpers - typeof";
            return (Rl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Al() {
            return (Al = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Il(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Ll(r.key), r)
            }
        }
        function Ll(e) {
            var t = function(e, t) {
                if ("object" !== Rl(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Rl(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Rl(t) ? t : String(t)
        }
        function jl(e, t) {
            return (jl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Zl(e) {
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
                var n, r = Hl(e);
                if (t) {
                    var o = Hl(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Rl(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Bl(e)
                }(this, n)
            }
        }
        function Bl(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Hl(e) {
            return (Hl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        Ml.defaultProps = {
            data: {
                rows: [],
                totalHeight: 0,
                itemTotalCount: 0
            },
            itemHeight: 46,
            listHeight: 0,
            bufferCount: 5,
            sectionHeaderHeight: 40,
            scrollTop: 0,
            selectedInfo: [],
            renderStartIndex: 0,
            renderEndIndex: 0,
            isFetching: !1,
            showFolder: !0,
            calendarColors: null,
            calendars: null,
            isItemSelected: function() {},
            onSelectChange: function() {},
            updatePagination: function() {},
            shouldComponentUpdateOverwrite: function() {},
            onEdit: function() {},
            onDelete: function() {},
            onExport: function() {},
            onSendAsAttachment: function() {}
        },
        Ml.propTypes = {
            data: a().shape({
                rows: a().arrayOf(a().object),
                totalHeight: a().number,
                itemTotalCount: a().number
            }),
            itemHeight: a().number,
            listHeight: a().number,
            bufferCount: a().number,
            scrollTop: a().number,
            sectionHeaderHeight: a().number,
            renderStartIndex: a().number,
            renderEndIndex: a().number,
            isFetching: a().bool,
            showFolder: a().bool,
            selectedInfo: a().arrayOf(a().oneOfType([a().number, a().string])),
            calendarColors: a().shape(a().object),
            calendars: a().shape(a().object),
            onSelectChange: a().func,
            isItemSelected: a().func,
            updatePagination: a().func,
            shouldComponentUpdateOverwrite: a().func,
            onEdit: a().func,
            onDelete: a().func,
            onExport: a().func,
            onSendAsAttachment: a().func
        };
        var Fl = function(e) {
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
                t && jl(e, t)
            }(n, r.Component);
            var t = Zl(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).renderItem = r.renderItem.bind(Bl(r)),
                r.itemWrapperClass = r.itemWrapperClass.bind(Bl(r)),
                r.getScrollToDate = r.getScrollToDate.bind(Bl(r)),
                r.handlScrollChanged = r.handlScrollChanged.bind(Bl(r)),
                r
            }
            return function(e, t, n) {
                t && Il(e.prototype, t),
                n && Il(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.itemHeight
                      , n = e.bufferCount
                      , r = e.scrollTop;
                    (0,
                    e.updatePagination)({
                        itemHeight: t,
                        bufferCount: n,
                        scrollTop: r
                    })
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    return (0,
                    e.shouldComponentUpdateOverwrite)(this.props, e)
                }
            }, {
                key: "getItemKey",
                value: function(e) {
                    var t = e.index
                      , n = e.label
                      , r = e.data;
                    return n || (r ? "".concat(r.uid, "-").concat(t) : "iw_".concat(t))
                }
            }, {
                key: "getScrollToDate",
                value: function() {
                    for (var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        rows: []
                    }).rows, t = arguments.length > 1 ? arguments[1] : void 0, n = e.filter(function(e) {
                        return void 0 !== e.secType
                    }), r = 0; r < n.length; r += 1) {
                        var o = n[r]
                          , a = o.clientRect
                          , i = a.top
                          , l = a.bottom
                          , s = o.value;
                        if (l > t)
                            return {
                                date: s,
                                offset: i - t
                            }
                    }
                    return {
                        date: window.TimeUtil.getTimeZoneMomentForRui().valueOf(),
                        offset: 0
                    }
                }
            }, {
                key: "itemWrapperClass",
                value: function(e) {
                    var t = this.props.isItemSelected;
                    return e.value ? "ow-VirtualizedList-section" : t(e) ? "ow-VirtualizedList-item-selected" : ""
                }
            }, {
                key: "handlScrollChanged",
                value: function(e) {
                    var t = this.props
                      , n = t.data
                      , r = t.onScrollToDate;
                    if (n) {
                        var o = n.scrollToTimeTop
                          , a = n.scrollToDate
                          , i = this.getScrollToDate(n, e).date;
                        this.lastScrollToDateValue !== i && (r(o === e ? window.TimeUtil.parseInTimezoneForRui(a, Ki.AW) : window.TimeUtil.getTimeZoneMomentForRui(i)),
                        this.lastScrollToDateValue = i)
                    }
                }
            }, {
                key: "renderSection",
                value: function(e) {
                    var t = e.label
                      , n = e.value
                      , o = e.secType
                      , a = window.TimeUtil
                      , i = a.getTimeZoneMomentForRui(n)
                      , l = a.getDateTimePatterns()
                      , s = i._locale._months;
                    if (0 === o) {
                        var c = i.month(t.substr(t.indexOf(" ")).trim()).locale(window.TimeUtil.props.lang).format("MMMM");
                        if (c && s[i.month()].toLowerCase() !== c.toLowerCase()) {
                            var u = c.toLowerCase().charAt(0).toUpperCase() + c.slice(1)
                              , f = -1 != s.indexOf(u) ? s.indexOf(u) : -1 != s.indexOf(u.toLowerCase()) ? s.indexOf(u.toLowerCase()) : s.indexOf(u.toUpperCase());
                            i.set("month", f)
                        }
                        return r.createElement("div", {
                            className: "ow-calendar-EventListItem-section-monthLabel ow-month-".concat(i.month())
                        }, i.format(l.YearMonth))
                    }
                    if (1 === o) {
                        var p = d()(i).endOf("week")
                          , m = d()(i).startOf("week");
                        return r.createElement("div", {
                            className: "ow-calendar-EventListItem-section-weekLabel"
                        }, "".concat(m.format(l.MonthDayShort), " - ").concat(p.format(l.MonthDayShort)))
                    }
                    return r.createElement("div", {
                        className: "ow-calendar-EventListItem-section-label"
                    }, r.createElement("div", {
                        className: "ow-calendar-EventListItem-section-dateLabel"
                    }, i.format("D")), r.createElement("div", {
                        className: "ow-calendar-EventListItem-section-weekDayLabel"
                    }, i.format(l.WeekDayShort)))
                }
            }, {
                key: "renderItem",
                value: function(e) {
                    if (e.value)
                        return this.renderSection(e);
                    var t = this.props
                      , n = t.calendarColors
                      , o = t.calendars;
                    if (!e.data)
                        return r.createElement("div", {
                            className: "ow-calendar-EventListItem-empty"
                        });
                    var a = e.data
                      , i = a.calendarId
                      , l = a.allDay
                      , s = a.startTime
                      , c = a.endTime
                      , u = a.summary
                      , d = a.recurrenceOf
                      , f = a.alarm
                      , p = a.categories;
                    if (o[i]) {
                        var m = n[i]
                          , v = o[i]
                          , h = v.personal
                          , y = v.readOnly
                          , b = r.createElement(Ui.Z, {
                            name: "share",
                            title: y ? (0,
                            Yi.t)("calendar.calendarEditor.shareCalendarPermission.read") : (0,
                            Yi.t)("calendar.calendarEditor.shareCalendarPermission.readwrite")
                        })
                          , g = !h && (y ? r.createElement(Ui.Z, {
                            name: "eye"
                        }) : r.createElement(Ui.Z, {
                            name: "edit"
                        }))
                          , E = window.TimeUtil;
                        return l ? r.createElement("div", {
                            className: "ow-calendar-EventListItem ow-calendar-EventListItem-allday",
                            style: {
                                backgroundColor: m
                            }
                        }, h ? null : b, r.createElement("div", {
                            className: "ow-calendar-EventListItem-summary"
                        }, u), r.createElement("div", {
                            className: "ow-calendar-EventListItem-allDayLabel"
                        }, (0,
                        Yi.t)("calendar.common.LABEL_ALLDAY")), r.createElement("div", {
                            className: "ow-calendar-EventListItem-icons"
                        }, d && r.createElement(Ui.Z, {
                            name: "refresh"
                        }), f && r.createElement(Ui.Z, {
                            name: "reminder"
                        }), p && r.createElement(Ui.Z, {
                            name: "calendar-".concat(p.toLowerCase())
                        }), g)) : r.createElement("div", {
                            className: "ow-calendar-EventListItem ow-calendar-EventListItem-time",
                            style: {
                                backgroundColor: m
                            }
                        }, r.createElement("div", {
                            className: "ow-calendar-EventListItem-top"
                        }, h ? null : b, r.createElement("div", {
                            className: "ow-calendar-EventListItem-summary"
                        }, u), r.createElement("div", {
                            className: "ow-calendar-EventListItem-icons"
                        }, d && r.createElement(Ui.Z, {
                            name: "refresh"
                        }), f && r.createElement(Ui.Z, {
                            name: "reminder"
                        }), p && r.createElement(Ui.Z, {
                            name: "calendar-".concat(p.toLowerCase())
                        }), g)), r.createElement("div", {
                            className: "ow-calendar-EventListItem-time"
                        }, "".concat(E.getTimeParseInt24to12(E.getShortTimeForRui(E.parseInTimezoneForRui(s))), " - ").concat(E.getTimeParseInt24to12(E.getShortTimeForRui(E.parseInTimezoneForRui(c))))))
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.data
                      , o = t.updatePagination
                      , a = t.isFetching;
                    return r.createElement("div", {
                        className: "ow-calendar-EventList-container"
                    }, r.createElement(yl.Z, {
                        className: "ow-calendar-EventList-AutoSizer",
                        onResize: function(e) {
                            var t = e.height
                              , n = e.width;
                            o({
                                listHeight: t,
                                listWidth: n
                            })
                        }
                    }, function(t) {
                        var o = t.height
                          , i = t.width;
                        if (0 === o || 0 === i)
                            return r.createElement("div", null);
                        if (!(a || n && 0 !== n.itemTotalCount))
                            return r.createElement("div", {
                                className: "ow-calendar-EventList-tooltip",
                                role: Ki.HB.ALERT,
                                "aria-atomic": "true",
                                "aria-live": Ki.HO.ASSERTIVE
                            }, r.createElement("span", null, (0,
                            Yi.t)("calendar.common.EMPTY_TEXT")));
                        var l = r.createElement(hl.JZ, Al({
                            className: "ow-calendar-EventList",
                            renderItem: e.renderItem,
                            itemWrapperClass: e.itemWrapperClass,
                            renderSection: e.renderSection,
                            getItemKey: e.getItemKey
                        }, e.props, {
                            ref: function(t) {
                                e.listComponent = t
                            },
                            onScrollChanged: e.handlScrollChanged,
                            onTouchMoveCallback: e.props.onTouchMoveCallback
                        }));
                        return a ? [l, r.createElement(zi.Z, {
                            className: "ow-adv-spinner"
                        })] : l
                    }))
                }
            }]),
            n
        }();
        Fl.defaultProps = {
            data: {
                rows: [],
                totalHeight: 0,
                itemTotalCount: 0
            },
            itemHeight: 46,
            listHeight: 0,
            bufferCount: 5,
            sectionHeaderHeight: 40,
            scrollTop: 0,
            selectedInfo: [],
            renderStartIndex: 0,
            renderEndIndex: 0,
            isFetching: !1,
            showFolder: !0,
            calendarColors: void 0,
            calendars: void 0,
            onScrollToDate: function() {},
            isItemSelected: function() {},
            onSelectChange: function() {},
            updatePagination: function() {},
            onTouchMoveCallback: function() {},
            shouldComponentUpdateOverwrite: function() {}
        },
        Fl.propTypes = {
            data: a().shape({
                rows: a().arrayOf(a().object),
                totalHeight: a().number,
                itemTotalCount: a().number
            }),
            itemHeight: a().number,
            listHeight: a().number,
            bufferCount: a().number,
            scrollTop: a().number,
            sectionHeaderHeight: a().number,
            renderStartIndex: a().number,
            renderEndIndex: a().number,
            isFetching: a().bool,
            showFolder: a().bool,
            selectedInfo: a().arrayOf(a().oneOfType([a().number, a().string])),
            calendarColors: a().shape(a().object),
            calendars: a().shape(a().object),
            onScrollToDate: a().func,
            onSelectChange: a().func,
            isItemSelected: a().func,
            updatePagination: a().func,
            onTouchMoveCallback: a().func,
            shouldComponentUpdateOverwrite: a().func
        };
        var Ul = n(23586)
          , zl = n(99688)
          , Yl = function(e, t) {
            return !(e.scrollTop === t.scrollTop && e.visibleStartIndex === t.visibleStartIndex && e.visibleEndIndex === t.visibleEndIndex && e.isFetching === t.isFetching && e.listHeight === t.listHeight && e.listWidth === t.listWidth && e.sort === t.sort && e.selectedInfo.length === t.selectedInfo.length && e.selectedInfo.every(function(e, n) {
                var r = e.uid
                  , o = e.folderPath;
                return r === t.selectedInfo[n].uid && o === t.selectedInfo[n].folderPath
            }) && e.data.rows.length === t.data.rows.length && e.data.dataSignature === t.data.dataSignature && e.calendarColors === t.calendarColors)
        }
          , Wl = (0,
        i.$j)(function(e) {
            var t = (0,
            ml.xT)(e)
              , n = t.scrollTop
              , r = t.listHeight
              , o = t.renderData
              , a = t.visibleStartIndex
              , i = t.visibleEndIndex
              , l = t.forceRenderingMark
              , s = (0,
            ml.vx)(e)
              , c = (0,
            ml.et)(e)
              , u = Ki.bF === (0,
            ml.Yc)(e)
              , d = (0,
            ml.Fh)(e).reduce(function(e, t) {
                return e[t.id] = t,
                e
            }, {})
              , f = (0,
            Wi.eO)(e)
              , p = (0,
            ml.pP)(e).show
              , m = (0,
            ml.US)(e).show
              , v = (0,
            ml.jW)(e)
              , h = (0,
            ml.Ni)(e)
              , y = (0,
            ml.Zb)(e);
            return {
                calendars: d,
                selectedInfo: c,
                data: o,
                scrollTop: n,
                listHeight: r,
                visibleStartIndex: a,
                visibleEndIndex: i,
                shouldComponentUpdateOverwrite: Yl,
                isFetching: u,
                forceRenderingMark: l,
                calendarColors: s,
                isItemSelected: function(e) {
                    return !(!e || !e.data) && c.filter(function(t) {
                        var n = t.uid
                          , r = t.calendarId;
                        return e.data.uid === n && e.data.calendarId === r
                    }).length > 0
                },
                sort: f,
                openAddCalendar: p,
                openShareCalendar: m,
                openScopeConfirm: v,
                openExportPanel: h,
                openImportPanel: y
            }
        }, function(e) {
            return {
                onSelectChange: function(t, n) {
                    e((0,
                    Ul.ii)(t, n))
                },
                updatePagination: function(t, n) {
                    return e((0,
                    Ul.ok9)(t, n))
                },
                onEdit: function(t) {
                    return e((0,
                    Vi.UB)(t))
                },
                onDelete: function(t) {
                    return e((0,
                    Vi.Bt)(t))
                },
                onExport: function(t) {
                    return e((0,
                    Vi.R5)(t))
                },
                onSendAsAttachment: function(t) {
                    var n = t.calendarId;
                    return e((0,
                    zl.cG)(n))
                }
            }
        })
          , Vl = (0,
        i.$j)(function(e) {
            var t = (0,
            ml.xT)(e)
              , n = t.scrollTop
              , r = t.listHeight
              , o = t.renderData
              , a = t.visibleStartIndex
              , i = t.visibleEndIndex
              , l = t.forceRenderingMark
              , s = (0,
            ml.vx)(e)
              , c = (0,
            ml.et)(e)
              , u = Ki.bF === (0,
            ml.Yc)(e)
              , d = (0,
            ml.Fh)(e).reduce(function(e, t) {
                return e[t.id] = t,
                e
            }, {})
              , f = (0,
            ml.Ex)(e).params;
            return {
                calendars: d,
                selectedInfo: c,
                data: o,
                scrollTop: n,
                listHeight: r,
                visibleStartIndex: a,
                visibleEndIndex: i,
                shouldComponentUpdateOverwrite: Yl,
                isFetching: u,
                forceRenderingMark: l,
                calendarColors: s,
                isItemSelected: function(e) {
                    return !(!e || !e.data) && c.filter(function(t) {
                        var n = t.uid
                          , r = t.calendarId;
                        return e.data.uid === n && e.data.calendarId === r
                    }).length > 0
                },
                calSearchTxt: f
            }
        }, function(e) {
            return {
                onSelectChange: function(t, n) {
                    e((0,
                    Ul.ii)(t, n))
                },
                updatePagination: function(t) {
                    return e((0,
                    Ul.ok9)(t))
                }
            }
        })
          , Kl = Wl(Ml);
        Kl.title = function() {}
        ,
        Kl.navigate = function() {}
        ;
        Wl(Fl);
        var Xl = Vl(Ml)
          , ql = n(82e3)
          , $l = n.n(ql);
        function Gl() {
            return (Gl = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Ql(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, a, i, l = [], s = !0, c = !1;
                    try {
                        if (a = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            s = !1
                        } else
                            for (; !(s = (r = a.call(n)).done) && (l.push(r.value),
                            l.length !== t); s = !0)
                                ;
                    } catch (e) {
                        c = !0,
                        o = e
                    } finally {
                        try {
                            if (!s && null != n.return && (i = n.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (c)
                                throw o
                        }
                    }
                    return l
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return Jl(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Jl(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Jl(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var es = (0,
        Fa.Z)(La)
          , ts = El("calendar-event-contextmenu")
          , ns = Ha(d())
          , rs = !1
          , os = function(e) {
            var t = e.scrollToTime
              , n = e.currentDate
              , o = e.view
              , a = e.displaySpinner
              , i = e.events
              , l = e.onSave
              , s = Ql((0,
            r.useState)(!0), 2)
              , c = s[0]
              , u = s[1]
              , p = Ql((0,
            r.useState)(t), 2)
              , m = p[0]
              , v = p[1]
              , h = Ql((0,
            r.useState)(i), 2)
              , y = h[0]
              , b = h[1]
              , g = function(t, n) {
                var r, o = e.onSelectEvent, a = e.view, i = null === (r = n.target.closest("month" === a ? ".ow-calendar-MonthEvent-wrapper" : ".ow-calendar-WeekDayEvent-wrapper")) || void 0 === r ? void 0 : r.getBoundingClientRect();
                o(t, {
                    clientX: n.clientX,
                    clientY: n.clientY,
                    targetRect: i
                }),
                (0,
                Sl.kWv)(".ow-calendar-EventPreview-header .ow-icon-close")
            }
              , E = function(e) {
                return d()(e)
            }
              , w = function(t) {
                if (!function(t) {
                    var n = e.user;
                    return n && t.attendees && t.attendees.find(function(e) {
                        return e.address === n.email
                    })
                }(t))
                    return !1;
                var n = e.user;
                return t.attendees && t.attendees.find(function(e) {
                    return e.address === n.email
                }).status
            }
              , S = function(t, n) {
                var r = n.event;
                e.onEdit(r)
            }
              , O = function(t, n) {
                var r = n.event;
                e.onDelete(r)
            }
              , T = function(t, n) {
                var r = n.event;
                e.onExport(r)
            }
              , C = function(t, n) {
                var r = n.event;
                e.onSendAsAttachment(r)
            }
              , D = function(e, t) {
                var n = t.event;
                g(null, n)
            }
              , k = function() {
                e.onDayOrWeekScroll()
            };
            (0,
            r.useEffect)(function() {
                b(i)
            }, [i]),
            (0,
            r.useEffect)(function() {
                var e = ""
                  , t = document.querySelector(".rbc-time-content");
                if (e !== t && null !== (e = t) && e.addEventListener("scroll", k),
                null !== e)
                    return e.removeEventListener("scroll", k)
            }, []),
            (0,
            r.useEffect)(function() {
                u(!0),
                "true" === window.TimeUtil.props.useMyDeviceTimeZoneSetting && window.TimeUtil.props.currentTimeZone.id && window.TimeUtil.props.currentTimeZone.id !== $l().tz.guess(!0) && !rs && (rs = !0,
                l($l().tz.guess(!0)))
            }, [y]),
            (0,
            r.useEffect)(function() {
                if (ns = Ha(d()),
                t && m) {
                    var e = t.getTime() === m.getTime() ? void 0 : t;
                    v(e)
                } else
                    v(t)
            }, [t]),
            (0,
            r.useEffect)(function() {
                !function() {
                    var e, t = document.querySelector(".rbc-time-content");
                    e !== t && (e = t) && e.addEventListener("scroll", k)
                }();
                var t = e.displaySpinner;
                c || t || u(!0)
            }, []);
            var N = {
                showMore: function(e) {
                    return "+".concat(e, " ").concat((0,
                    Yi.t)("common.MORE_TEXT"))
                },
                allDay: (0,
                Yi.t)("calendar.editorView.LABEL_ALLDAY")
            };
            if (!window.TimeUtil)
                return null;
            var P = e.dayStart
              , x = e.dayEnd
              , _ = e.evt
              , M = e.isRtl
              , R = Number(P)
              , A = Number(x) - 1
              , I = !_;
            return r.createElement(r.Fragment, null, r.createElement(es, {
                views: {
                    month: !0,
                    week: !0,
                    day: !0,
                    agenda: !1,
                    list: Kl
                },
                selectable: I,
                popup: !0,
                rtl: M,
                messages: N,
                localizer: ns,
                getNow: function() {
                    return d()(new Date)
                },
                formats: {
                    dateFormat: function(e, t, n) {
                        return 1 === d()(e).date() ? n.format(e, "D MMM", t) : n.format(e, "D", t)
                    },
                    dayFormat: function(e, t, n) {
                        return n.format(e, "dddd D", t).toUpperCase()
                    },
                    weekdayFormat: function(e, t, n) {
                        return n.format(e, "dddd", t).toUpperCase()
                    },
                    timeGutterFormat: function(e, t, n) {
                        var r = window.TimeUtil.getDateTimePatterns();
                        return n.format(e, r.ShortTime, t)
                    }
                },
                date: new Date(n),
                onNavigate: function(t) {
                    return function(t) {
                        var n = window.TimeUtil.dateToTimezoneMoment(t)
                          , r = e.view
                          , o = e.onDayView;
                        "week" === r && o(n)
                    }(t)
                },
                components: {
                    toolbar: vl
                },
                startAccessor: function(e) {
                    if (e && e.startTime)
                        return new Date(e.startTime)
                },
                endAccessor: function(e) {
                    if (e && e.endTime)
                        return new Date(e.endTime)
                },
                titleAccessor: function(t) {
                    var n = e.getCalendarColor
                      , o = e.showBgColor
                      , a = e.isTimeLongEvent
                      , i = e.view
                      , l = e.calendars
                      , s = e.preview;
                    if (l[t.calendarId] && t) {
                        var c = l[t.calendarId]
                          , u = c.personal
                          , d = c.readOnly
                          , p = "declined" === w(t)
                          , m = n(t)
                          , v = t.recurrenceOf
                          , h = t.alarm
                          , y = t.uid
                          , b = {
                            onClickEditOfMenu: S,
                            onClickDeleteOfMenu: O,
                            onClickExportOfMenu: T,
                            onClickSendOfMenu: C,
                            onClickViewOfMenu: D,
                            deleteDisabled: d,
                            isSubscribeEvent: d,
                            event: t
                        };
                        if ("month" === i) {
                            var g = "".concat(t.allDay ? "" : TimeUtil.getTimeParseInt24to12(TimeUtil.getShortTimeForRui(TimeUtil.parseInTimezoneForRui(t.startTime))), " ").concat(t.summary)
                              , E = o(t) ? m : "transparent"
                              , k = !o(t) && "black";
                            return r.createElement(Li, Gl({
                                id: "calendar-event-contextmenu",
                                collect: function(e) {
                                    return e
                                },
                                attributes: {
                                    className: "ow-contextmenu-trigger-item"
                                }
                            }, b, {
                                holdToDisplay: -1
                            }), r.createElement("div", {
                                className: "ow-calendar-MonthEvent-summary".concat(s === y ? " ow-calendar-eventPreviewing" : ""),
                                title: g,
                                ref: function(e) {
                                    var n = (0,
                                    f.findDOMNode)(e)
                                      , r = n && n.closest(".rbc-event-content");
                                    r && (r.classList.add("ow-calendar-MonthEvent-wrapper"),
                                    r.style.backgroundColor = E,
                                    u || null !== t && void 0 !== t && t.allDay || (r.style.color = k))
                                }
                            }, !t.allDay && !a(t) && (u ? r.createElement("div", {
                                className: "ow-calendar-Event-dot",
                                style: {
                                    backgroundColor: m
                                }
                            }) : r.createElement(Ui.Z, {
                                name: "share",
                                style: {
                                    color: m
                                },
                                title: d ? (0,
                                Yi.t)("calendar.calendarEditor.shareCalendarPermission.read") : (0,
                                Yi.t)("calendar.calendarEditor.shareCalendarPermission.readwrite")
                            })), r.createElement("span", {
                                className: "ow-calendar-MonthEvent-title".concat(p ? " ow-event-declined" : "")
                            }, t.allDay && !u && r.createElement(Ui.Z, {
                                name: "share",
                                style: {
                                    color: "white"
                                },
                                title: (0,
                                Yi.t)(d ? "calendar.calendarEditor.shareCalendarPermission.read" : "calendar.calendarEditor.shareCalendarPermission.readwrite")
                            }), g), r.createElement("div", {
                                className: "ow-calendar-MonthEvent-icons"
                            }, v && r.createElement(Ui.Z, {
                                name: "refresh"
                            }), h && r.createElement(Ui.Z, {
                                name: "reminder"
                            }))))
                        }
                        if ("week" === i || "day" === i) {
                            var N = TimeUtil.getTimeParseInt24to12(TimeUtil.getShortTimeForRui(TimeUtil.parseInTimezoneForRui(t.startTime)))
                              , P = TimeUtil.getTimeParseInt24to12(TimeUtil.getShortTimeForRui(TimeUtil.parseInTimezoneForRui(t.endTime)))
                              , x = t.allDay || a(t) ? "" : "".concat(N, " - ").concat(P, "\n");
                            return r.createElement(Li, Gl({
                                id: "calendar-event-contextmenu",
                                collect: function(e) {
                                    return e
                                },
                                attributes: {
                                    className: "ow-contextmenu-trigger-item"
                                }
                            }, b, {
                                holdToDisplay: -1
                            }), r.createElement("div", {
                                className: "ow-calendar-WeekDayEvent-summary",
                                ref: function(e) {
                                    var n = (0,
                                    f.findDOMNode)(e)
                                      , r = n && n.closest(".rbc-event-content");
                                    r && (r.classList.add("ow-calendar-WeekDayEvent-wrapper"),
                                    r.style.backgroundColor = m,
                                    r.title = "".concat(x, " ").concat(t.summary))
                                }
                            }, r.createElement("span", {
                                className: "ow-calendar-WeekDayEvent-title".concat(p ? " ow-event-declined" : "")
                            }, !u && r.createElement(Ui.Z, {
                                name: "share",
                                style: {
                                    color: "white"
                                },
                                title: d ? (0,
                                Yi.t)("calendar.calendarEditor.shareCalendarPermission.read") : (0,
                                Yi.t)("calendar.calendarEditor.shareCalendarPermission.readwrite")
                            }), t.summary), r.createElement("div", {
                                className: "ow-calendar-WeekDayEvent-icons"
                            }, v && r.createElement(Ui.Z, {
                                name: "refresh"
                            }), h && r.createElement(Ui.Z, {
                                name: "reminder"
                            }))))
                        }
                        return t.summary
                    }
                },
                slotPropGetter: function(e) {
                    var t = e.getHours();
                    return t <= A && t >= R ? {
                        className: "rbc-time-slot-work"
                    } : {}
                },
                events: y,
                view: o,
                defaultView: Hr.MONTH,
                scrollToTime: t,
                onSelectEvent: function(e, t) {
                    g(e, t)
                },
                onKeyPressEvent: function(e, t) {
                    t.key === Ki.BY.ENTERKEY && g(e, t)
                },
                onSelectSlot: function(t) {
                    return function(t) {
                        var n = e.onCreateEvent
                          , r = e.view
                          , o = e.preview
                          , a = e.calendarEventDuration;
                        if (!o)
                            if ("month" === r) {
                                if (t.action) {
                                    var i = d()(t.end).subtract(1, "days");
                                    t.end = i.toDate()
                                }
                                n(t, r)
                            } else {
                                if ("week" !== r && "day" !== r || t.start !== t.end || (t.allDay = !0),
                                ("week" === r || "day" === r) && "click" === t.action) {
                                    var l = d()(t.start).add(a, "minutes");
                                    t.end = l.toDate()
                                }
                                setTimeout(function() {
                                    n(t, r)
                                }, 10)
                            }
                    }(t)
                },
                onEventDrop: function(t) {
                    var n = t.event
                      , r = t.start
                      , o = t.end
                      , a = (t.isAllDay,
                    E(r).valueOf())
                      , i = E(o).valueOf();
                    (0,
                    e.onMoveEvent)(n, a, i),
                    u(!1)
                },
                resizable: !0,
                resizableAccessor: function() {
                    return "month" !== o
                },
                onEventResize: function(t) {
                    var n = t.event
                      , r = t.start
                      , o = t.end
                      , a = r && E(r).valueOf()
                      , i = o && E(o).valueOf();
                    (0,
                    e.onMoveEvent)(n, a || n.startMillis, i || n.endMillis)
                }
            }), c && !a ? r.createElement(ts, null) : null, a && r.createElement(zi.Z, {
                className: "ow-calendar-Spinner"
            }))
        }
          , as = os;
        os.defaultProps = {
            calendars: {},
            dataSignature: 0,
            events: [],
            currentDate: null,
            view: "month",
            calendarEventDuration: 30,
            onDayView: function() {},
            onEdit: function() {},
            onDelete: function() {},
            onExport: function() {},
            onSendAsAttachment: function() {},
            onDayOrWeekScroll: function() {},
            isRtl: "ltr"
        },
        os.propTypes = {
            calendars: a().arrayOf(a().shape({
                id: a().string,
                name: a().string,
                color: a().string,
                visible: a().bool,
                primary: a().bool,
                personal: a().bool,
                readOnly: a().bool,
                sharingUrl: a().string
            })),
            dataSignature: a().number,
            calendarEventDuration: a().number,
            scrollToTime: a().instanceOf("Date").isRequired,
            events: a().arrayOf(a().object),
            onMoveEvent: a().func.isRequired,
            onSelectEvent: a().func.isRequired,
            onCreateEvent: a().func.isRequired,
            getCalendarColor: a().func.isRequired,
            showBgColor: a().func.isRequired,
            isTimeLongEvent: a().func.isRequired,
            preview: a().string.isRequired,
            dayStart: a().string.isRequired,
            dayEnd: a().string.isRequired,
            displaySpinner: a().bool.isRequired,
            currentDate: a().instanceOf("moment"),
            view: a().string,
            onDayView: a().func,
            onEdit: a().func,
            onDelete: a().func,
            onExport: a().func,
            onSendAsAttachment: a().func,
            onDayOrWeekScroll: a().func,
            isRtl: a().bool
        };
        var is = n(55529)
          , ls = n(63482)
          , ss = n(45857)
          , cs = n(25678);
        function us(e) {
            "@babel/helpers - typeof";
            return (us = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ds(e, t) {
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
        function fs(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== us(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== us(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === us(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var ps = (0,
        i.$j)(function(e) {
            var t = (0,
            ml.l6)(e)
              , n = (0,
            ls.Ns)(e)
              , r = (0,
            is.rb)(e)
              , o = (0,
            ml.vo)(e)
              , a = (0,
            ml.cs)(e)
              , i = window.TimeUtil
              , l = i && a ? i.parseInTimezoneForRui(a, "YYYYMMDD") : d()()
              , s = (0,
            ml.Cx)(e)
              , c = l.toDate();
            c.setMinutes(0),
            c.setSeconds(0),
            c.setMilliseconds(0);
            var u = s.length;
            if ("day" === o || "week" === o) {
                var f = l.toDate().getTime();
                if ((s = s.filter(function(e) {
                    var t = i.parseTimeZoneMomentForRui(e && e.startTime ? e.startTime : "", "YYYYMMDDTHHmmss").startOf(o).toDate().getTime()
                      , n = i.parseTimeZoneMomentForRui(e && e.endTime ? e.endTime : "", "YYYYMMDDTHHmmss").add(-1, "seconds").endOf(o).toDate().getTime();
                    return f >= t && f <= n
                })).length) {
                    var p = s.reduce(function(e, t) {
                        var n = i.parseInTimezoneForRui(t.startTime, "YYYYMMDDTHHmmss")
                          , r = 60 * n.hour() + n.minute();
                        return r < e ? r : e
                    }, 1 / 0);
                    c.setHours(Math.max(0, Math.floor(p / 60) - 1))
                } else
                    c = void 0
            }
            var m = (0,
            ml.vx)(e)
              , v = (0,
            ml.Fh)(e).reduce(function(e, t) {
                return e[t.id] = t,
                e
            }, {})
              , h = (0,
            ml.Te)(e)
              , y = function(e) {
                var t = window.TimeUtil.parseInTimezoneForRui(e.startTime)
                  , n = window.TimeUtil.parseInTimezoneForRui(e.endTime).add(-1, "seconds");
                return !t.isSame(n, "day")
            }
              , b = (0,
            is.fx)(e)
              , g = b.dayStart
              , E = b.dayEnd
              , w = (0,
            ss.hL)(e)
              , S = (0,
            ml.QZ)(e)
              , O = (0,
            is.YE)(e);
            if (Object.keys(s).length)
                for (var T = 0; T < Object.keys(s).length; T++)
                    s[T] && (s[T].startTime = s[T].startTime && new Date(d()(s[T].startTime)),
                    s[T].endTime = s[T].endTime && new Date(d()(s[T].endTime)));
            return {
                evt: t,
                dataSignature: u,
                user: w,
                events: s.filter(Boolean),
                calendars: v,
                view: o,
                currentDate: l,
                scrollToTime: c,
                dayStart: g,
                dayEnd: E,
                lang: n,
                weekStart: r,
                displaySpinner: S,
                preview: h && h.uid,
                getCalendarColor: function(e) {
                    return m[e.calendarId]
                },
                showBgColor: function(e) {
                    return e.allDay || y(e)
                },
                isTimeLongEvent: y,
                calendarEventDuration: O,
                isRtl: "rtl" === document.dir
            }
        }, function(e) {
            return {
                onMoveEvent: function(t, n, r) {
                    void 0 !== t.xproperties ? void 0 === t.xproperties["X-EVENT-AS-ATTENDEE"] && e((0,
                    Vi.S$)(t, n, r)) : e((0,
                    Vi.S$)(t, n, r))
                },
                onSelectEvent: function(t, n) {
                    var r = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ds(Object(n), !0).forEach(function(t) {
                                fs(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ds(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({
                        calendarId: t.calendarId,
                        uid: t.uid
                    }, n);
                    e((0,
                    Vi.Yp)(r))
                },
                onCreateEvent: function(t, n) {
                    return e((0,
                    Vi.yM)(t, n))
                },
                onDayView: function(t) {
                    e((0,
                    Vi.kl)({
                        date: t
                    })),
                    e((0,
                    Vi.YF)("day"))
                },
                onEdit: function(t) {
                    return e((0,
                    Vi.UB)(t))
                },
                onDelete: function(t) {
                    return e((0,
                    Vi.Bt)(t))
                },
                onExport: function(t) {
                    return e((0,
                    Vi.R5)(t))
                },
                onSendAsAttachment: function(t) {
                    var n = t.calendarId;
                    return e((0,
                    zl.cG)(n))
                },
                onDayOrWeekScroll: function() {
                    return e((0,
                    Vi.$p)([]))
                },
                onSave: function(t) {
                    return e((0,
                    cs.Np)(t, !0))
                }
            }
        })(as)
          , ms = n(35329)
          , vs = n(5613)
          , hs = n(77545)
          , ys = n(62347)
          , bs = n(10091);
        function gs(e) {
            "@babel/helpers - typeof";
            return (gs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Es(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Cs(r.key), r)
            }
        }
        function ws(e, t) {
            return (ws = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ss(e) {
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
                var n, r = Ts(e);
                if (t) {
                    var o = Ts(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === gs(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Os(e)
                }(this, n)
            }
        }
        function Os(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Ts(e) {
            return (Ts = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Cs(e) {
            var t = function(e, t) {
                if ("object" !== gs(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== gs(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === gs(t) ? t : String(t)
        }
        var Ds = function(e) {
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
                t && ws(e, t)
            }(n, r.PureComponent);
            var t = Ss(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                function(e, t, n) {
                    (t = Cs(t))in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                }(Os(r = t.call(this, e)), "handleMonthChange", function(e) {
                    (new Date).getMonth() !== new Date(e).getMonth() && (r.setState({
                        selectedDate: null
                    }),
                    (0,
                    r.props.onNavigating)(null))
                }),
                r.renderCalendarItem = r.renderCalendarItem.bind(Os(r)),
                r.delayDatepicker = r.delayDatepicker.bind(Os(r)),
                r.selectDate = r.selectDate.bind(Os(r)),
                r.state = {
                    selectedDate: null,
                    datePickerUpdating: !1
                },
                r
            }
            return function(e, t, n) {
                t && Es(e.prototype, t),
                n && Es(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = window.TimeUtil
                      , n = e.currentDate
                      , r = void 0 === n ? t && t.parseInTimezoneForRui(this.props.currentDate) : n
                      , o = e.lang
                      , a = e.weekStart;
                    r && (r.startOf("day"),
                    t.getSelectTimezone() && t.getSelectTimezone().offset > 0 && r.add(r.utcOffset(), "minutes"),
                    this.setState({
                        selectedDate: window.TimeUtil.getTimeZoneMomentForRui(r),
                        datePickerUpdating: this.props.lang !== o || this.props.weekStart !== a
                    }))
                }
            }, {
                key: "delayDatepicker",
                value: function() {
                    var e = this;
                    this.state.datePickerUpdating && (clearTimeout(this.timeoutObj),
                    this.timeoutObj = setTimeout(function() {
                        return e.setState({
                            datePickerUpdating: !1
                        })
                    }, 3e3))
                }
            }, {
                key: "selectDate",
                value: function(e) {
                    this.setState({
                        selectedDate: e
                    }),
                    (0,
                    this.props.onNavigating)(e)
                }
            }, {
                key: "renderCalendarItem",
                value: function(e) {
                    var t = e.visible
                      , n = e.color
                      , o = e.name
                      , a = e.readOnly
                      , i = e.personal
                      , l = e.primary
                      , s = this.props
                      , c = s.colors
                      , u = s.onToggleVisibility
                      , d = s.onEditCalendar
                      , f = s.onDeleteCalendar
                      , p = s.onEditPermission
                      , m = {
                        color: "#".concat(c[n || 0])
                    };
                    return r.createElement("div", {
                        key: "_".concat(e.id),
                        className: "ow-calendar-CalendarList-item",
                        tabIndex: 0
                    }, r.createElement(Ui.Z, {
                        name: t ? "checkbox-selected" : "checkbox-unselected",
                        style: m,
                        role: Ki.HB.CHECKBOX,
                        "aria-checked": t,
                        "aria-label": "".concat(unescape(o), " is ").concat(t ? (0,
                        Yi.t)("common.CHECK") : (0,
                        Yi.t)("common.UNCHECK")),
                        onClick: function(t) {
                            t.stopPropagation(),
                            u(e)
                        },
                        title: (0,
                        Yi.t)("calendar.common.SHOW_HIDE_CALENDAR_QTIP"),
                        onKeyDown: function(t) {
                            return t.key === Ki.BY.ENTERKEY && u(e)
                        },
                        tabIndex: 0
                    }), r.createElement("span", {
                        title: unescape(o),
                        className: "ow-calendar-CalendarList-calName",
                        "aria-label": unescape(o)
                    }, unescape(o)), !i && (a ? r.createElement(Ui.Z, {
                        name: "eye",
                        title: (0,
                        Yi.t)("calendar.calendarEditor.shareCalendarPermission.read"),
                        "aria-label": (0,
                        Yi.t)("calendar.calendarEditor.shareCalendarPermission.read"),
                        "aria-hidden": "true"
                    }) : ""), r.createElement(ys.Z, {
                        className: "ow-calendar-CalendarList-inlineBar",
                        enableHover: !0
                    }, r.createElement("div", {
                        className: "ow-calendar-CalendarList-hoverToolbar"
                    }, !l && r.createElement(Ui.Z, {
                        name: "trash",
                        title: (0,
                        Yi.t)("calendar.list.tooltips.DELETE_CALENDAR"),
                        onClick: function(t) {
                            t.stopPropagation(),
                            f(e)
                        },
                        "aria-label": (0,
                        Yi.t)("calendar.list.tooltips.DELETE_CALENDAR"),
                        "aria-hidden": "true"
                    }), r.createElement(Ui.Z, {
                        name: "edit",
                        title: (0,
                        Yi.t)("calendar.list.tooltips.EDIT_CALENDAR"),
                        onClick: function(t) {
                            t.stopPropagation(),
                            d(e)
                        },
                        "aria-label": (0,
                        Yi.t)("calendar.list.tooltips.EDIT_CALENDAR"),
                        "aria-hidden": "true"
                    }), i && r.createElement(Ui.Z, {
                        name: "share",
                        title: (0,
                        Yi.t)("calendar.list.tooltips.SHARE_CALENDAR"),
                        onClick: function(t) {
                            t.stopPropagation(),
                            p(e)
                        },
                        "aria-label": (0,
                        Yi.t)("calendar.list.tooltips.SHARE_CALENDAR"),
                        "aria-hidden": "true"
                    }))))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.personalCalendars
                      , o = t.subscribedCalendars
                      , a = t.onCreateCalendar
                      , i = this.state.selectedDate
                      , l = window.TimeUtil;
                    return l && l.getSelectTimezone() ? (this.delayDatepicker(),
                    r.createElement("div", {
                        className: "ow-calendar-CalendarList-container"
                    }, r.createElement(_s, null), r.createElement("div", {
                        className: "ow-calendar-CalendarList-header"
                    }, r.createElement("div", {
                        className: "ow-calendar-CalendarList-wrapper"
                    }, r.createElement("span", {
                        className: "ow-calendar-CalendarList-title",
                        "aria-label": (0,
                        Yi.t)("calendar.PERSONAL_CALENDARS"),
                        tabIndex: 0,
                        role: Ki.HB.HEADING,
                        "aria-level": Ki.DU.H2
                    }, (0,
                    Yi.t)("calendar.PERSONAL_CALENDARS")), r.createElement(bs.Z, {
                        className: "ow-calendar-CalendarListToolbar"
                    }, r.createElement(bs.Z.Button, {
                        title: (0,
                        Yi.t)("calendar.toolbar.BUTTON_CREATE_CALENDAR"),
                        "aria-label": (0,
                        Yi.t)("calendar.toolbar.BUTTON_CREATE_CALENDAR"),
                        role: Ki.HB.BUTTON,
                        className: "ow-calendar-addCalendarBtn",
                        iconName: "plus",
                        onClick: function() {
                            return a()
                        },
                        onKeyDown: function(e) {
                            return e.key === Ki.BY.ENTERKEY && (0,
                            wl.Mb)()
                        }
                    })))), r.createElement("div", {
                        className: "ow-calendar-CalendarList-list",
                        tabIndex: 0
                    }, n.map(function(t, n) {
                        return e.renderCalendarItem(t, n)
                    }), o.length > 0 && r.createElement("div", {
                        className: "ow-calendar-CalendarList-subscribed"
                    }, r.createElement(Ui.Z, {
                        name: "share"
                    }), r.createElement("span", {
                        className: "ow-calendar-CalendarList-subscribed-label",
                        "aria-label": (0,
                        Yi.t)("calendar.SUBSCRIBED_CALENDARS")
                    }, (0,
                    Yi.t)("calendar.SUBSCRIBED_CALENDARS"))), o.map(function(t, n) {
                        return e.renderCalendarItem(t, n)
                    })), r.createElement("div", {
                        className: "ow-calendar-CalendarList-dpwrapper"
                    }, !this.state.datePickerUpdating && r.createElement(vs.Z, {
                        inline: !0,
                        todayButton: (0,
                        Yi.t)("common.TODAY_TEXT"),
                        "aria-label": (0,
                        Yi.t)("common.TODAY_TEXT"),
                        fixedHeight: !0,
                        dropdownMode: "scroll",
                        onChange: this.selectDate,
                        selected: i,
                        onMonthChange: this.handleMonthChange
                    })))) : null
                }
            }]),
            n
        }();
        Ds.defaultProps = {
            colors: [],
            lang: null,
            currentDate: null,
            weekStart: 0,
            personalCalendars: [],
            subscribedCalendars: [],
            onToggleVisibility: function() {},
            onCreateCalendar: function() {},
            onNavigating: function() {},
            onEditCalendar: function() {},
            onDeleteCalendar: function() {},
            onEditPermission: function() {}
        },
        Ds.propTypes = {
            colors: a().arrayOf(a().string),
            lang: a().string,
            currentDate: a().shape(a().object),
            weekStart: a().number,
            personalCalendars: a().arrayOf(a().shape({
                id: a().string,
                name: a().string,
                color: a().string,
                visible: a().bool,
                primary: a().bool,
                personal: a().bool,
                readOnly: a().bool,
                sharingUrl: a().string
            })),
            subscribedCalendars: a().arrayOf(a().shape({
                id: a().string,
                name: a().string,
                color: a().string,
                visible: a().bool,
                primary: a().bool,
                personal: a().bool,
                readOnly: a().bool,
                sharingUrl: a().string
            })),
            onToggleVisibility: a().func,
            onCreateCalendar: a().func,
            onNavigating: a().func,
            onEditCalendar: a().func,
            onEditPermission: a().func,
            onDeleteCalendar: a().func
        };
        var ks = (0,
        i.$j)(function(e) {
            return {
                lang: (0,
                ls.Ns)(e),
                weekStart: (0,
                is.rb)(e),
                personalCalendars: (0,
                ml.qo)(e),
                subscribedCalendars: (0,
                ml.Si)(e),
                currentDate: (0,
                ml.m7)(e),
                colors: window.UXConfig.calendar.calendarColors
            }
        }, function(e) {
            return {
                onEditCalendar: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e((0,
                    ms.mg)(t))
                },
                onDeleteCalendar: function(t) {
                    return e((0,
                    ms.q4)(t))
                },
                onNavigating: function(t) {
                    return e((0,
                    Vi.kl)({
                        date: t
                    }))
                },
                onToggleVisibility: function(t) {
                    return e((0,
                    ms.jG)(t))
                },
                onCreateCalendar: function() {
                    return e((0,
                    ms.mg)({}))
                },
                onEditPermission: function(t) {
                    return e((0,
                    ms.rS)(t))
                }
            }
        })(Ds)
          , Ns = n(35788);
        function Ps(e) {
            return function(e) {
                if (Array.isArray(e))
                    return xs(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return xs(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return xs(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function xs(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var _s = (0,
        i.$j)(function(e) {
            var t = [{
                name: (0,
                Yi.t)("calendar.search.ALL_CALENDAR"),
                id: ""
            }].concat(Ps((0,
            ml.qo)(e)), Ps((0,
            ml.Si)(e)))
              , n = window.UXConfig.calendar.CATEGORY_OPTIONS.map(function(e) {
                return {
                    name: e,
                    key: e.toLowerCase()
                }
            });
            return n.unshift({
                name: (0,
                Yi.t)("calendar.search.ALL_CATEGORY"),
                key: ""
            }),
            {
                categories: n,
                allCalendars: t,
                searchSelected: (0,
                ml.gm)(e),
                dateFormat: (0,
                ls.Ox)(e, !0)
            }
        }, function(e) {
            return {
                onSearch: function(t) {
                    return e((0,
                    Vi.Ik)(t))
                },
                onAdvancedSearch: function(t) {
                    return e((0,
                    Vi.Ik)(t))
                },
                onExitSearch: function() {
                    return e((0,
                    Vi.M6)())
                }
            }
        })(Ns.Z)
          , Ms = n(10861)
          , Rs = (0,
        i.$j)(function(e) {
            return {
                enableCalendarSearch: (0,
                ml.gm)(e)
            }
        }, function(e) {
            return {
                onRefresh: function() {
                    return e((0,
                    Vi.op)())
                },
                onCreateEvent: function() {
                    return e((0,
                    Vi.yM)())
                },
                onCreateCalendar: function() {
                    return e((0,
                    ms.mg)({}))
                },
                onPrintCalendar: function() {
                    return e((0,
                    ms.bf)())
                },
                onExportEvent: function() {
                    return e((0,
                    Vi.R5)())
                },
                onImportEvent: function() {
                    return e((0,
                    Vi.AI)())
                },
                onSubscrib: function() {
                    return e((0,
                    ms.mg)({
                        personal: !1
                    }))
                },
                onExitSearch: function() {
                    return e((0,
                    Vi.M6)())
                }
            }
        })(Ms.Z)
          , As = n(98401)
          , Is = n(35369)
          , Ls = n(54075);
        function js(e) {
            "@babel/helpers - typeof";
            return (js = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Zs(e, t) {
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
        function Bs(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Zs(Object(n), !0).forEach(function(t) {
                    Hs(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zs(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function Hs(e, t, n) {
            return (t = Us(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Fs(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Us(r.key), r)
            }
        }
        function Us(e) {
            var t = function(e, t) {
                if ("object" !== js(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== js(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === js(t) ? t : String(t)
        }
        function zs(e, t) {
            return (zs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ys(e) {
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
                var n, r = Vs(e);
                if (t) {
                    var o = Vs(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === js(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Ws(e)
                }(this, n)
            }
        }
        function Ws(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Vs(e) {
            return (Vs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Ks = function(e) {
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
                t && zs(e, t)
            }(n, r.PureComponent);
            var t = Ys(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).onFormChange = r.onFormChange.bind(Ws(r)),
                r.handleSave = r.handleSave.bind(Ws(r)),
                r.handleHide = r.handleHide.bind(Ws(r)),
                r.handleShow = r.handleShow.bind(Ws(r)),
                r.handleColorChanged = r.handleColorChanged.bind(Ws(r)),
                r.disableSaveBtn = r.disableSaveBtn.bind(Ws(r)),
                r.resetSpinner = r.resetSpinner.bind(Ws(r)),
                r.triggerSpinner = r.triggerSpinner.bind(Ws(r)),
                r.handleHideAlert = r.handleHideAlert.bind(Ws(r)),
                r.state = {
                    changed: !1,
                    canSave: !1,
                    colorIdx: -1,
                    spinner: !1,
                    clickCancel: !1,
                    deleteEnabled: !1
                },
                r
            }
            return function(e, t, n) {
                t && Fs(e.prototype, t),
                n && Fs(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillUnmount",
                value: function() {
                    this.resetSpinner()
                }
            }, {
                key: "onFormChange",
                value: function() {
                    (0,
                    f.findDOMNode)(this.nameInput).querySelector("input").value.trim() ? this.setState({
                        canSave: !0
                    }) : this.setState({
                        canSave: !1
                    }),
                    this.setState({
                        changed: this.isChanged()
                    })
                }
            }, {
                key: "triggerSpinner",
                value: function() {
                    this.setState({
                        deleteEnabled: !0,
                        spinner: !0
                    })
                }
            }, {
                key: "resetSpinner",
                value: function() {
                    this.setState({
                        spinner: !1,
                        changed: !1,
                        canSave: !1
                    })
                }
            }, {
                key: "handleColorChanged",
                value: function(e) {
                    var t = this.props.calendar;
                    if (t) {
                        var n = t.color
                          , r = void 0 === n ? 0 : n;
                        this.setState({
                            colorIdx: e,
                            changed: this.form && this.form.isChanged() || e !== Number(r)
                        }),
                        this.form.validateForm()
                    }
                }
            }, {
                key: "isChanged",
                value: function() {
                    var e = this.props.calendar;
                    if (!e)
                        return !1;
                    var t = e.color
                      , n = void 0 === t ? 0 : t
                      , r = e.name
                      , o = this.form.getModel().calendarName;
                    return this.form && this.form.isChanged() || r !== o || -1 !== this.state.colorIdx && this.state.colorIdx !== Number(n) || this.props.errorModal
                }
            }, {
                key: "handleShow",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.calendar
                      , r = t.errorModal
                      , o = void 0 !== r && r;
                    if (n) {
                        var a = n.color;
                        this.setState({
                            changed: o,
                            colorIdx: Number(a || 0),
                            clickCancel: !1,
                            deleteEnabled: !1,
                            canSave: o
                        }),
                        setTimeout(function() {
                            var t = (0,
                            f.findDOMNode)(e.nameInput).querySelector("input");
                            t.setSelectionRange(1e3, 1e3),
                            t.focus()
                        }, 300)
                    }
                }
            }, {
                key: "handleHide",
                value: function() {
                    var e = this.props
                      , t = e.onDismiss
                      , n = e.calendar;
                    this.setState({
                        changed: !1,
                        colorIdx: -1,
                        clickCancel: !0,
                        deleteEnabled: !1
                    }),
                    t(n)
                }
            }, {
                key: "disableSaveBtn",
                value: function() {
                    this.setState({
                        canSave: !1
                    })
                }
            }, {
                key: "handleSave",
                value: function() {
                    var e = this.props
                      , t = e.calendar
                      , n = e.onSaveCalendar
                      , r = e.primaryCalendarDetails
                      , o = this.form.getModel()
                      , a = o.calendarName
                      , i = o.url;
                    this.setState({
                        clickCancel: !0
                    }),
                    r && r.sharingUrl === i ? this.setState({
                        showAlert: !0
                    }) : a && (this.triggerSpinner(),
                    n(Bs(Bs({}, t), {}, {
                        color: this.state.colorIdx,
                        name: a,
                        url: i
                    }), this.resetSpinner))
                }
            }, {
                key: "handleHideAlert",
                value: function() {
                    this.setState({
                        showAlert: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.show
                      , o = t.colors
                      , a = t.calendar
                      , i = t.onDeleteCalendar
                      , l = t.canDelete
                      , s = t.calendarNameValidator
                      , c = t.primaryCalendarDetails;
                    if (!a)
                        return null;
                    var u = a.id
                      , d = a.name
                      , f = void 0 === d ? "" : d
                      , p = a.personal
                      , m = void 0 === p || p
                      , v = a.url
                      , h = void 0 === v ? "" : v
                      , y = this.state
                      , b = y.clickCancel
                      , g = y.deleteEnabled;
                    return r.createElement(As.Z, {
                        className: "ow-calendar-CalendarEditor",
                        show: n,
                        onHide: function() {
                            return e.handleHide()
                        },
                        onEntered: function() {
                            return e.handleShow()
                        },
                        backdrop: "static",
                        "aria-labelledby": "ow-calendar-CalendarEditor-dialog",
                        "aria-modal": "true"
                    }, r.createElement(As.Z.Header, {
                        closeButton: !0
                    }, r.createElement(As.Z.Title, {
                        id: "ow-calendar-CalendarEditor-dialog",
                        role: Ki.HB.HEADING,
                        "aria-level": Ki.DU.H2,
                        "aria-label": u ? (0,
                        Yi.t)("calendar.calendarEditor.TITLE_EDIT") : (0,
                        Yi.t)("calendar.calendarEditor.TITLE_ADD")
                    }, u ? (0,
                    Yi.t)("calendar.calendarEditor.TITLE_EDIT") : (0,
                    Yi.t)("calendar.calendarEditor.TITLE_ADD"))), r.createElement(As.Z.Body, {
                        style: {
                            whiteSpace: "pre-line"
                        }
                    }, c && c.sharingUrl ? r.createElement(Ls.Z, {
                        show: this.state.showAlert,
                        message: (0,
                        Yi.t)("calendar.common.SELF_ADD_ERROR"),
                        onHide: this.handleHideAlert
                    }) : null, this.state.spinner ? r.createElement(zi.Z, null) : "", r.createElement(Is.l0, {
                        ref: function(t) {
                            e.form = t
                        },
                        onValidSubmit: this.handleSave,
                        onInValid: this.disableSaveBtn,
                        onChange: this.onFormChange,
                        className: "ow-CalendarEditor-form"
                    }, r.createElement(Is.UP, {
                        ref: function(t) {
                            e.nameInput = t
                        },
                        label: "".concat((0,
                        Yi.t)("calendar.calendarEditor.LABEL_NAME"), ":"),
                        "aria-label": (0,
                        Yi.t)("calendar.calendarEditor.LABEL_NAME"),
                        "aria-required": "true",
                        name: "calendarName",
                        value: unescape(f),
                        required: !0,
                        validations: {
                            customRegexp: function(t, n) {
                                return s(n, b, g, e.disableSaveBtn)
                            }
                        }
                    }), !u && !m && r.createElement(Is.UP, {
                        label: "".concat((0,
                        Yi.t)("calendar.calendarEditor.LABEL_ICAL_ADDRESS"), ":"),
                        "aria-label": (0,
                        Yi.t)("calendar.calendarEditor.LABEL_ICAL_ADDRESS"),
                        name: "url",
                        value: h,
                        validations: {
                            customRegexp: function(e, t) {
                                return "" !== t.trim() || (0,
                                Yi.t)("common.errorMessage.REQUIRED")
                            },
                            isUrl: !0
                        },
                        validationError: (0,
                        Yi.t)("calendar.warningMessage.WARNING_ICAL_FORMAT")
                    }), r.createElement("div", {
                        className: "ow-calendar-CalendarEditor-colorField"
                    }, r.createElement("div", {
                        className: "ow-calendar-CalendarEditor-colorLabel",
                        "aria-label": "".concat((0,
                        Yi.t)("calendar.calendarEditor.LABEL_COLOR"))
                    }, "".concat((0,
                    Yi.t)("calendar.calendarEditor.LABEL_COLOR"), ":")), r.createElement("div", {
                        className: "ow-calendar-CalendarEditor-colors"
                    }, o.map(function(t, n) {
                        return r.createElement("div", {
                            className: "ow-calendar-CalendarEditor-colorsItem".concat(e.state.colorIdx === n ? " ow-calendar-CalendarEditor-colorsItem-selected" : ""),
                            style: {
                                backgroundColor: t
                            },
                            onClick: function() {
                                return e.handleColorChanged(n)
                            },
                            role: Ki.HB.RADIO,
                            "aria-label": (0,
                            Yi.t)("calendar.calendarEditor.LABEL_COLOR"),
                            tabIndex: 0,
                            onKeyDown: function(t) {
                                return t.key === Ki.BY.ENTERKEY && e.handleColorChanged(n)
                            }
                        })
                    }))))), r.createElement(As.Z.Footer, null, r.createElement(hs.Z, {
                        disabled: !this.state.changed || this.state.spinner || !this.state.canSave || this.state.validationError,
                        className: "ow-calendar-CalendarEditor-save ow-button-primary",
                        onClick: function() {
                            e.form.submit()
                        },
                        "aria-label": (0,
                        Yi.t)("common.SAVE"),
                        role: Ki.HB.BUTTON,
                        "aria-disabled": !this.state.changed || this.state.spinner || !this.state.canSave || this.state.validationError
                    }, (0,
                    Yi.t)("common.SAVE")), u && r.createElement(hs.Z, {
                        className: "ow-calendar-CalendarEditor-delete",
                        onClick: function() {
                            i(a, e.resetSpinner),
                            e.triggerSpinner()
                        },
                        disabled: !l,
                        "aria-label": (0,
                        Yi.t)("common.DELETE"),
                        role: Ki.HB.BUTTON,
                        "aria-disabled": !l
                    }, (0,
                    Yi.t)("common.DELETE")), r.createElement(hs.Z, {
                        className: "ow-calendar-CalendarEditor-cancel",
                        onClick: function() {
                            e.handleHide()
                        },
                        "aria-label": (0,
                        Yi.t)("common.CANCEL"),
                        role: Ki.HB.BUTTON
                    }, (0,
                    Yi.t)("common.CANCEL"))))
                }
            }]),
            n
        }();
        Ks.defaultProps = {
            show: !1,
            colors: [],
            calendar: void 0,
            canDelete: !1,
            onDismiss: function() {},
            onDeleteCalendar: function() {},
            onSaveCalendar: function() {},
            calendarNameValidator: function() {}
        },
        Ks.propTypes = {
            show: o.bool,
            colors: (0,
            o.arrayOf)(o.string),
            canDelete: o.bool,
            calendar: (0,
            o.shape)({
                id: o.string,
                name: o.string,
                color: o.number,
                visible: o.bool,
                primary: o.bool,
                personal: o.bool,
                readOnly: o.bool,
                sharingUrl: o.string,
                primaryCalendarDetails: o.string
            }),
            onDismiss: o.func,
            onDeleteCalendar: o.func,
            onSaveCalendar: o.func,
            calendarNameValidator: o.func
        };
        var Xs = n(36003)
          , qs = (0,
        i.$j)(function(e) {
            var t = UXConfig.calendar.calendarColors.map(function(e) {
                return "#".concat(e)
            })
              , n = (0,
            ml.pP)(e)
              , r = n.show
              , o = n.calendar
              , a = o && !o.primary
              , i = (0,
            Xs.nb)(e)
              , l = (0,
            ml.qo)(e)
              , s = (0,
            ml.fi)(e)
              , c = !1;
            return (0,
            Sl.nIE)() && (o && s && o.uid === s.uid || s && s.open) && ((o = s.calendar).calendarId = s.id,
            o.open = s.open,
            c = !0),
            {
                show: r,
                errorModal: c,
                calendar: o,
                colors: t,
                canDelete: a,
                calendarNameValidator: function(e, t, n, r) {
                    var a = e.trim();
                    return !!t || !!n || (a ? l.some(function(e) {
                        return e.id !== o.id && e.name === a
                    }) ? (r(),
                    (0,
                    Yi.t)("calendar.errorMessage.ALREADY_EXISTS")) : !((null === a || void 0 === a ? void 0 : a.length) > 64) || (r(),
                    (0,
                    bl.WU)((0,
                    Yi.t)("calendar.warningMessage.WARNING_TOO_LONG"), (0,
                    Yi.t)("calendar.calendarEditor.LABEL_NAME"), 64)) : (0,
                    Yi.t)("common.errorMessage.REQUIRED"))
                },
                primaryCalendarDetails: i
            }
        }, function(e) {
            return {
                onSaveCalendar: function(t, n) {
                    return e((0,
                    ms.qQ)(t, n))
                },
                onDismiss: function(t) {
                    return e((0,
                    ms.jh)(t))
                },
                onDeleteCalendar: function(t, n) {
                    return e((0,
                    ms.q4)(t, n))
                },
                onSelectColor: function(t) {
                    return e((0,
                    ms.b2)(t))
                }
            }
        })(Ks)
          , $s = n(64364);
        function Gs(e) {
            "@babel/helpers - typeof";
            return (Gs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Qs(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Js(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return Js(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Js(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Js(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function ec(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, tc(r.key), r)
            }
        }
        function tc(e) {
            var t = function(e, t) {
                if ("object" !== Gs(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Gs(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Gs(t) ? t : String(t)
        }
        function nc(e, t) {
            return (nc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function rc(e) {
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
                var n, r = ac(e);
                if (t) {
                    var o = ac(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Gs(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return oc(e)
                }(this, n)
            }
        }
        function oc(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ac(e) {
            return (ac = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ic = function(e) {
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
                t && nc(e, t)
            }(n, r.PureComponent);
            var t = rc(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    isFormChanged: !1,
                    isFormValid: !0
                },
                r.handleFormChange = r.handleFormChange.bind(oc(r)),
                r.handleFormValid = r.handleFormValid.bind(oc(r)),
                r.handleSubmit = r.handleSubmit.bind(oc(r)),
                r.handleCancel = r.handleCancel.bind(oc(r)),
                r.handleFormInvalid = r.handleFormInvalid.bind(oc(r)),
                r
            }
            return function(e, t, n) {
                t && ec(e.prototype, t),
                n && ec(e, n),
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
                key: "handleFormValid",
                value: function() {
                    this.setState({
                        isFormValid: !0
                    })
                }
            }, {
                key: "handleFormInvalid",
                value: function() {
                    this.setState({
                        isFormValid: !1
                    })
                }
            }, {
                key: "handleFormChange",
                value: function(e, t) {
                    this.setState({
                        isFormChanged: t
                    })
                }
            }, {
                key: "handleReset",
                value: function() {
                    var e = this.form.getPristineValues();
                    this.setState({
                        isFormChanged: !1
                    }),
                    this.form.reset(e)
                }
            }, {
                key: "handleSubmit",
                value: function() {
                    var e = this.state.isFormValid
                      , t = this.form.getCurrentValues()
                      , n = t.fileName
                      , r = t.calendar;
                    return !!e && (this.props.onSubmit({
                        fileName: n,
                        calendarId: r
                    }),
                    !0)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.show
                      , o = t.onCancel
                      , a = t.colors
                      , i = t.personalCalendars
                      , l = t.primaryCalendarId
                      , s = t.subscribedCalendars
                      , c = t.events
                      , u = [].concat(Qs(i), Qs(s))
                      , d = Ki.l_;
                    return r.createElement(As.Z, {
                        className: "ow-calendar-eventexport",
                        show: n,
                        onHide: this.handleCancel,
                        backdrop: "static",
                        "aria-label": (0,
                        Yi.t)("calendar.action.eventsExport.HEAD_TITLE")
                    }, r.createElement(As.Z.Header, {
                        closeButton: !0
                    }, r.createElement(As.Z.Title, {
                        className: "ow-calendar-eventexport-title",
                        id: "ow-calendar-eventexport-dialog",
                        role: Ki.HB.HEADING,
                        "aria-level": Ki.DU.H2
                    }, (0,
                    Yi.t)("calendar.action.eventsExport.HEAD_TITLE"))), r.createElement(As.Z.Body, {
                        className: "ow-calendar-eventexport-body"
                    }, r.createElement(Is.l0, {
                        className: "ow-calendar-eventexport-form",
                        onChange: this.handleFormChange,
                        onValid: this.handleFormValid,
                        onInvalid: this.handleFormInvalid,
                        ref: function(t) {
                            e.form = t
                        }
                    }, r.createElement("label", {
                        className: "ow-calendar-eventexport-form-title"
                    }, (0,
                    Yi.t)("calendar.action.eventsExport.LABEL"), " "), r.createElement(Is.UP, {
                        type: "text",
                        label: (0,
                        Yi.t)("calendar.action.eventsExport.LABEL_FILENAME"),
                        name: "fileName",
                        value: (0,
                        Yi.t)("calendar.action.eventsExport.DEFAULT_FILENAME"),
                        "aria-label": (0,
                        Yi.t)("calendar.action.eventsExport.LABEL_FILENAME"),
                        "aria-required": !0,
                        required: !0,
                        validations: {
                            customValidation: function(e, t) {
                                return d.test(t) ? (0,
                                Yi.t)("calendar.warningMessage.WARNING_INVALID_FILENAME") : "" !== t.trim() || (0,
                                Yi.t)("calendar.warningMessage.WARNING_FILENAME_NO_BLANK")
                            }
                        },
                        validationErrors: {
                            isDefaultRequiredValue: (0,
                            Yi.t)("common.errorMessage.REQUIRED")
                        }
                    }), r.createElement($s.Z, {
                        className: "ow-calendar-eventexport-calendar-name-label",
                        calendars: u,
                        colors: a,
                        name: "calendar",
                        label: (0,
                        Yi.t)("calendar.action.eventsExport.LABEL_CALENDAR"),
                        value: l
                    }))), r.createElement(As.Z.Footer, null, r.createElement(hs.Z, {
                        className: "ow-button-primary btn btn-default",
                        onClick: this.handleSubmit,
                        disabled: 0 == c.length,
                        role: Ki.HB.BUTTON,
                        "aria-label": (0,
                        Yi.t)("calendar.action.eventsExport.BUTTON_EXPORT"),
                        "aria-disabled": 0 == c.length
                    }, (0,
                    Yi.t)("calendar.action.eventsExport.BUTTON_EXPORT")), r.createElement(hs.Z, {
                        className: "ow-button btn btn-default",
                        onClick: o,
                        role: Ki.HB.BUTTON,
                        "aria-label": (0,
                        Yi.t)("common.CANCEL")
                    }, (0,
                    Yi.t)("common.CANCEL"))))
                }
            }]),
            n
        }();
        ic.defaultProps = {
            show: !0,
            onCancel: function() {},
            onSubmit: function() {},
            colors: [],
            personalCalendars: [],
            subscribedCalendars: [],
            primaryCalendarId: ""
        },
        ic.propTypes = {
            show: a().bool,
            onCancel: a().func,
            onSubmit: a().func,
            colors: a().arrayOf(a().string),
            primaryCalendarId: a().string,
            personalCalendars: a().arrayOf(a().shape({
                id: a().string,
                name: a().string,
                color: a().string,
                visible: a().bool,
                primary: a().bool,
                personal: a().bool,
                readOnly: a().bool,
                sharingUrl: a().string
            })),
            subscribedCalendars: a().arrayOf(a().shape({
                id: a().string,
                name: a().string,
                color: a().string,
                primary: a().bool,
                personal: a().bool,
                readOnly: a().bool,
                sharingUrl: a().string
            }))
        };
        var lc = ic
          , sc = n(83416)
          , cc = (0,
        i.$j)(function(e) {
            return {
                personalCalendars: (0,
                Xs.qo)(e),
                show: (0,
                Wi.Ni)(e),
                colors: (0,
                sc.Z)("calendar.calendarColors").map(function(e) {
                    return "#".concat(e)
                }),
                primaryCalendarId: (0,
                Xs.so)(e),
                subscribedCalendars: (0,
                Xs.Si)(e),
                events: (0,
                ml.Cx)(e)
            }
        }, function(e) {
            return {
                onSubmit: function(t) {
                    var n = t.calendarId
                      , r = t.fileName;
                    return e((0,
                    Vi.cK)({
                        calendarId: n,
                        fileName: r
                    }))
                },
                onCancel: function() {
                    return e((0,
                    Vi.Ac)())
                }
            }
        })(lc)
          , uc = n(91597)
          , dc = n(76634)
          , fc = n(15559)
          , pc = n.n(fc)
          , mc = (0,
        i.$j)(function(e) {
            var t = (0,
            ml.VL)(e);
            if (!t)
                return {};
            var n, r = window.TimeUtil, o = t.allDay, a = t.startTime, i = t.endTime, l = t.calendarId, s = (0,
            ml.d2)(l)(e), c = (0,
            ml.Nu)(l)(e), u = r.parseInTimezoneForRui(a), d = r.parseInTimezoneForRui(i), f = pc()(t);
            o ? (f.endTime = r.parseInTimezoneForRui(i).add(-1, "seconds").format("YYYYMMDDTHHmmss"),
            n = "".concat(u.format("ddd"), " ").concat(r.getTimeParseInt24to12(r.getShortDateForRui(u))),
            u.isSame(d, "day") || (n += " ".concat((0,
            Yi.t)("common.TO"), " ").concat(u.format("ddd"), " ").concat(r.getTimeParseInt24to12(r.getShortDateForRui(d - 1))))) : (f.endTime = r.parseInTimezoneForRui(i),
            n = "".concat(u.format("ddd"), " ").concat(r.getTimeParseInt24to12(r.getShortDateForRui(u))),
            u.isSame(d, "day") ? n += ", ".concat(r.getTimeParseInt24to12(r.getShortTimeForRui(u)), " ").concat((0,
            Yi.t)("common.TO"), " ").concat(r.getTimeParseInt24to12(r.getShortTimeForRui(d))) : n += ", ".concat(r.getTimeParseInt24to12(r.getShortTimeForRui(u)), " ").concat((0,
            Yi.t)("common.TO"), " ").concat(d.format("ddd"), " ").concat(r.getTimeParseInt24to12(r.getShortDateForRui(d)), ", ").concat(r.getTimeParseInt24to12(r.getTimeParseInt24to12(r.getShortTimeForRui(d)))));
            var p = (0,
            ml.Te)(e)
              , m = p.clientX
              , v = p.mouseX
              , h = p.clientY
              , y = p.mouseY
              , b = p.targetRect
              , g = p.alignInside
              , E = (0,
            ml.vK)(e)[t.calendarId]
              , w = E.readOnly
              , S = E.personal
              , O = E.visible
              , T = (0,
            ml.gm)(e)
              , C = (0,
            ss.hL)(e)
              , D = t.xproperties && !!t.xproperties["X-EVENT-ID"]
              , k = t.attendees && t.attendees.find(function(e) {
                return e.address === C.email
            })
              , N = D && k && k.status
              , P = (0,
            dc.tK)(t.recurrence, r.parseInTimezoneForRui(t.startTime));
            return {
                timeInfo: n,
                color: c,
                event: t,
                invited: D,
                attendeeStatus: N,
                calendar: s,
                eventRecurenceValue: P.value,
                eventRecurenceLabel: P.label,
                user: C,
                mouseX: void 0 !== m ? m : v,
                mouseY: void 0 !== h ? h : y,
                readOnly: w,
                personal: S,
                visible: O,
                targetRect: b,
                alignInside: g,
                placement: "bottom",
                dateField: f,
                isSearchSelected: T
            }
        }, function(e) {
            return {
                onEdit: function(t) {
                    e((0,
                    Vi.UB)(t))
                },
                onDelete: function(t, n) {
                    e((0,
                    Vi.Bt)(t, n))
                },
                onClearSelection: function() {
                    e((0,
                    Vi.$p)([]))
                },
                updateRSVP: function(t, n) {
                    e((0,
                    Vi.I_)(t, n))
                }
            }
        })(uc.Z)
          , vc = n(38881)
          , hc = n(13536);
        function yc(e) {
            "@babel/helpers - typeof";
            return (yc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function bc(e, t) {
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
        function gc(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== yc(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== yc(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === yc(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var Ec = (0,
        i.$j)(function(e) {
            return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? bc(Object(n), !0).forEach(function(t) {
                        gc(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bc(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, e.calendar.entries.actionConfirm)
        }, function(e) {
            return {
                onYes: function() {
                    return e((0,
                    ms.yW)(Ki.iQ.YES))
                },
                onNo: function() {
                    return e((0,
                    ms.yW)(Ki.iQ.NO))
                },
                onCancel: function() {
                    return e((0,
                    ms.yW)(Ki.iQ.CANCEL))
                },
                onDismiss: function() {
                    return e((0,
                    ms.yW)(Ki.iQ.CANCEL))
                }
            }
        })(hc.Z)
          , wc = n(92012)
          , Sc = n.n(wc)
          , Oc = n(12079);
        function Tc(e) {
            "@babel/helpers - typeof";
            return (Tc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Cc(e, t) {
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
        function Dc(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Cc(Object(n), !0).forEach(function(t) {
                    kc(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cc(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function kc(e, t, n) {
            return (t = _c(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Nc(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Pc(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return Pc(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Pc(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Pc(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function xc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, _c(r.key), r)
            }
        }
        function _c(e) {
            var t = function(e, t) {
                if ("object" !== Tc(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Tc(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Tc(t) ? t : String(t)
        }
        function Mc(e, t) {
            return (Mc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Rc(e) {
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
                var n, r = Ic(e);
                if (t) {
                    var o = Ic(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Tc(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Ac(e)
                }(this, n)
            }
        }
        function Ac(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Ic(e) {
            return (Ic = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Lc = function(e) {
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
                t && Mc(e, t)
            }(n, r.PureComponent);
            var t = Rc(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    isFormValid: !0,
                    file: null
                },
                r.handleFormValid = r.handleFormValid.bind(Ac(r)),
                r.handleSubmit = r.handleSubmit.bind(Ac(r)),
                r.handleCancel = r.handleCancel.bind(Ac(r)),
                r.handleFormInvalid = r.handleFormInvalid.bind(Ac(r)),
                r.handleFiles = r.handleFiles.bind(Ac(r)),
                r
            }
            return function(e, t, n) {
                t && xc(e.prototype, t),
                n && xc(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidUpdate",
                value: function(e) {
                    e.show === this.props.show || this.props.show || this.setState({
                        isFormValid: !0,
                        file: null
                    })
                }
            }, {
                key: "handleCancel",
                value: function() {
                    (0,
                    this.props.onCancel)()
                }
            }, {
                key: "handleFormValid",
                value: function() {
                    this.setState({
                        isFormValid: !0
                    })
                }
            }, {
                key: "handleFormInvalid",
                value: function() {
                    this.setState({
                        isFormValid: !1
                    })
                }
            }, {
                key: "handleSubmit",
                value: function() {
                    var e = this.state
                      , t = e.isFormValid
                      , n = e.file
                      , r = this.form.getCurrentValues().calendar;
                    return !(!t || !n) && (this.props.onSubmit({
                        file: n,
                        calendarId: r
                    }),
                    !0)
                }
            }, {
                key: "handleFiles",
                value: function(e) {
                    this.setState({
                        file: e[0]
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.show
                      , o = t.colors
                      , a = t.personalCalendars
                      , i = t.subscribedCalendars
                      , l = t.primaryCalendarId
                      , s = t.acceptFileTypes
                      , c = t.isImporting
                      , u = this.state
                      , d = u.file
                      , f = u.isFormValid
                      , p = d && d.source.name
                      , m = s ? s.join(",") : void 0
                      , v = i.filter(function(e) {
                        return !e.readOnly
                    })
                      , h = [].concat(Nc(a), Nc(v));
                    return r.createElement(As.Z, {
                        className: "ow-calendar-eventImport",
                        show: n,
                        onHide: this.handleCancel,
                        backdrop: "static",
                        "aria-label": (0,
                        Yi.t)("calendar.action.eventsImport.HEAD_TITLE")
                    }, r.createElement(As.Z.Header, {
                        closeButton: !0
                    }, r.createElement(As.Z.Title, {
                        className: "ow-calendar-eventImport-title",
                        id: "ow-calendar-eventImport-dialog",
                        role: Ki.HB.HEADING,
                        "aria-level": Ki.DU.H2,
                        "aria-label": (0,
                        Yi.t)("calendar.action.eventsImport.HEAD_TITLE")
                    }, (0,
                    Yi.t)("calendar.action.eventsImport.HEAD_TITLE"))), r.createElement(As.Z.Body, {
                        className: "ow-calendar-eventImport-body"
                    }, r.createElement(Is.l0, {
                        className: "ow-calendar-eventImport-form",
                        onValid: this.handleFormValid,
                        onInvalid: this.handleFormInvalid,
                        ref: function(t) {
                            e.form = t
                        }
                    }, r.createElement("div", {
                        className: "ow-calendar-eventImport-form-title"
                    }, (0,
                    Yi.t)("calendar.action.eventsImport.LABEL"), " "), r.createElement("div", {
                        className: "ow-calendar-eventImport-files"
                    }, r.createElement(Oc.Z, {
                        className: "ow-calendar-eventImport-files-choose",
                        accept: m,
                        disabled: c,
                        clearAfterSelected: !0,
                        onChange: function(t) {
                            return e.handleFiles(t.map(function(e) {
                                return Dc(Dc({}, e), {}, {
                                    from: Ki.lM.LOCAL
                                })
                            }), !1)
                        }
                    }, r.createElement(hs.Z, {
                        className: "ow-calendar-eventImport-files-choose",
                        "aria-label": (0,
                        Yi.t)("calendar.action.eventsImport.FILE_CHOOSE_LABEL"),
                        "aria-disabled": c
                    }, (0,
                    Yi.t)("calendar.action.eventsImport.FILE_CHOOSE_LABEL"))), r.createElement("div", {
                        className: "ow-calendar-eventImport-files-file",
                        "aria-label": p
                    }, p || (0,
                    Yi.t)("calendar.informMessage.IMPORT_EVENT_FILENAME_LABEL"))), r.createElement($s.Z, {
                        calendars: h,
                        colors: o,
                        name: "calendar",
                        label: (0,
                        Yi.t)("calendar.action.eventsImport.IMPORT_TO_LABEL"),
                        value: l,
                        "aria-label": (0,
                        Yi.t)("calendar.action.eventsImport.IMPORT_TO_LABEL")
                    }))), r.createElement(As.Z.Footer, null, c && r.createElement(Sc(), {
                        now: 1,
                        max: "1",
                        active: !0
                    }), !c && r.createElement("div", null, r.createElement(hs.Z, {
                        className: "ow-button-primary btn btn-default",
                        onClick: this.handleSubmit,
                        disabled: !d || !f,
                        role: Ki.HB.BUTTON,
                        "aria-label": (0,
                        Yi.t)("calendar.action.eventsImport.BUTTON_IMPORT"),
                        "aria-disabled": !d || !f
                    }, (0,
                    Yi.t)("calendar.action.eventsImport.BUTTON_IMPORT")), r.createElement(hs.Z, {
                        className: "ow-button btn btn-default",
                        onClick: this.handleCancel,
                        role: Ki.HB.BUTTON,
                        "aria-label": (0,
                        Yi.t)("common.CANCEL")
                    }, (0,
                    Yi.t)("common.CANCEL")))))
                }
            }]),
            n
        }();
        Lc.defaultProps = {
            show: !0,
            onCancel: function() {},
            onSubmit: function() {},
            colors: [],
            acceptFileTypes: [],
            personalCalendars: [],
            subscribedCalendars: [],
            primaryCalendarId: "",
            isImporting: !1
        },
        Lc.propTypes = {
            show: a().bool,
            isImporting: a().bool,
            onCancel: a().func,
            onSubmit: a().func,
            colors: a().arrayOf(a().string),
            acceptFileTypes: a().arrayOf(a().string),
            primaryCalendarId: a().string,
            personalCalendars: a().arrayOf(a().shape({
                id: a().string,
                name: a().string,
                color: a().string,
                primary: a().bool,
                personal: a().bool,
                readOnly: a().bool,
                sharingUrl: a().string
            })),
            subscribedCalendars: a().arrayOf(a().shape({
                id: a().string,
                name: a().string,
                color: a().string,
                primary: a().bool,
                personal: a().bool,
                readOnly: a().bool,
                sharingUrl: a().string
            }))
        };
        var jc = Lc
          , Zc = (0,
        i.$j)(function(e) {
            return {
                personalCalendars: (0,
                Xs.qo)(e),
                subscribedCalendars: (0,
                Xs.Si)(e),
                show: (0,
                Wi.Zb)(e),
                colors: (0,
                sc.Z)("calendar.calendarColors").map(function(e) {
                    return "#".concat(e)
                }),
                acceptFileTypes: (0,
                sc.Z)("calendar.importAcceptFileTypes"),
                primaryCalendarId: (0,
                Xs.so)(e),
                isImporting: (0,
                Wi.hd)(e)
            }
        }, function(e) {
            return {
                onSubmit: function(t) {
                    var n = t.calendarId
                      , r = t.file;
                    return e((0,
                    Vi.G)({
                        calendarId: n,
                        file: r
                    }))
                },
                onCancel: function() {
                    return e((0,
                    Vi.rV)())
                }
            }
        })(jc);
        function Bc(e) {
            "@babel/helpers - typeof";
            return (Bc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Hc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Fc(r.key), r)
            }
        }
        function Fc(e) {
            var t = function(e, t) {
                if ("object" !== Bc(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Bc(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Bc(t) ? t : String(t)
        }
        function Uc(e, t) {
            return (Uc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function zc(e) {
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
                var n, r = Wc(e);
                if (t) {
                    var o = Wc(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Bc(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Yc(e)
                }(this, n)
            }
        }
        function Yc(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Wc(e) {
            return (Wc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Vc = function(e) {
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
                t && Uc(e, t)
            }(n, r.PureComponent);
            var t = zc(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).handleSave = r.handleSave.bind(Yc(r)),
                r
            }
            return function(e, t, n) {
                t && Hc(e.prototype, t),
                n && Hc(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "handleSave",
                value: function(e) {
                    var t = e.scope
                      , n = this.props
                      , r = n.onConfirm
                      , o = n.onRefresh;
                    r(t),
                    setTimeout(function() {
                        o()
                    }, 1e3)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.show
                      , o = t.onDismiss;
                    return r.createElement(As.Z, {
                        className: "ow-calendar-EventUpdateScopeConfirm",
                        show: n,
                        onHide: o,
                        backdrop: "static"
                    }, r.createElement(As.Z.Header, {
                        closeButton: !0
                    }, r.createElement(As.Z.Title, {
                        id: "ow-calendar-EventUpdateScopeConfirm-dialog"
                    }, (0,
                    Yi.t)("calendar.confirmMessage.CONFIRM_RECUR_UPDATE_TITLE"))), r.createElement(As.Z.Body, {
                        style: {
                            whiteSpace: "pre-line"
                        }
                    }, r.createElement(Is.l0, {
                        ref: function(t) {
                            return e.form = t
                        },
                        onValidSubmit: this.handleSave,
                        className: "ow-calendar-EventUpdateScopeConfirm-form"
                    }, r.createElement(Is.OF, {
                        name: "scope",
                        className: "ow-calendar-EventUpdateScopeConfirm-options",
                        value: "instance",
                        alignText: "right",
                        list: [{
                            value: "instance",
                            text: (0,
                            Yi.t)("calendar.eventUpdateScope.instance")
                        }, {
                            value: "future",
                            text: (0,
                            Yi.t)("calendar.eventUpdateScope.future")
                        }, {
                            value: "all",
                            text: (0,
                            Yi.t)("calendar.eventUpdateScope.all")
                        }]
                    }))), r.createElement(As.Z.Footer, null, r.createElement(hs.Z, {
                        className: "ow-calendar-EventUpdateScopeConfirm-ok ow-button-primary",
                        onClick: function(t) {
                            e.form.submit()
                        },
                        role: Ki.HB.BUTTON,
                        "aria-label": (0,
                        Yi.t)("common.OK")
                    }, (0,
                    Yi.t)("common.OK")), r.createElement(hs.Z, {
                        className: "ow-calendar-EventUpdateScopeConfirm-cancel",
                        onClick: function(e) {
                            o()
                        },
                        role: Ki.HB.BUTTON,
                        "aria-label": (0,
                        Yi.t)("common.CANCEL")
                    }, (0,
                    Yi.t)("common.CANCEL"))))
                }
            }]),
            n
        }();
        Vc.defaultProps = {
            show: !1,
            onDismiss: function() {},
            onConfirm: function() {},
            onRefresh: function() {}
        },
        Vc.propTypes = {
            show: o.bool,
            onDismiss: o.func,
            onConfirm: o.func,
            onRefresh: o.func
        };
        var Kc = (0,
        i.$j)(function(e) {
            return {
                show: (0,
                ml.jW)(e)
            }
        }, function(e) {
            return {
                onConfirm: function(t) {
                    return e((0,
                    Vi.Qj)(t))
                },
                onDismiss: function() {
                    return e((0,
                    Vi.Qj)())
                },
                onRefresh: function() {
                    return e((0,
                    Vi.op)())
                }
            }
        })(Vc)
          , Xc = n(71850);
        function qc(e) {
            "@babel/helpers - typeof";
            return (qc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function $c(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Gc(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return Gc(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Gc(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Gc(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function Qc(e, t) {
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
        function Jc(e, t, n) {
            return (t = tu(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function eu(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, tu(r.key), r)
            }
        }
        function tu(e) {
            var t = function(e, t) {
                if ("object" !== qc(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== qc(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === qc(t) ? t : String(t)
        }
        function nu(e, t) {
            return (nu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function ru(e) {
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
                var n, r = au(e);
                if (t) {
                    var o = au(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === qc(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return ou(e)
                }(this, n)
            }
        }
        function ou(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function au(e) {
            return (au = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var iu = function(e) {
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
                t && nu(e, t)
            }(n, r.PureComponent);
            var t = ru(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).onFormChange = r.onFormChange.bind(ou(r)),
                r.handleShare = r.handleShare.bind(ou(r)),
                r.handleHide = r.handleHide.bind(ou(r)),
                r.handleShow = r.handleShow.bind(ou(r)),
                r.isChanged = r.isChanged.bind(ou(r)),
                r.handlePublicChange = r.handlePublicChange.bind(ou(r)),
                r.handlePermission = r.handlePermission.bind(ou(r)),
                r.handleRemoveUser = r.handleRemoveUser.bind(ou(r)),
                r.handleRemoveCurrentUser = r.handleRemoveCurrentUser.bind(ou(r)),
                r.handleAddUser = r.handleAddUser.bind(ou(r)),
                r.state = {
                    changed: !1,
                    sharingList: null,
                    publicCal: !1,
                    selfShareError: !1
                },
                r
            }
            return function(e, t, n) {
                t && eu(e.prototype, t),
                n && eu(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = e.accessList
                      , n = e.publicCal
                      , r = this.state.changed
                      , o = t && (this.state.sharingList || t.map(function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Qc(Object(n), !0).forEach(function(t) {
                                    Jc(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qc(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, e)
                    }));
                    this.setState({
                        changed: this.isChanged(),
                        sharingList: o
                    }),
                    r || this.setState({
                        publicCal: n
                    })
                }
            }, {
                key: "onFormChange",
                value: function() {
                    this.setState({
                        changed: this.isChanged()
                    })
                }
            }, {
                key: "handlePublicChange",
                value: function(e) {
                    var t = this.props.publicCal;
                    this.setState({
                        publicCal: e,
                        changed: this.isChanged() || t !== e
                    })
                }
            }, {
                key: "handlePermission",
                value: function(e, t) {
                    t.level = e,
                    this.onFormChange()
                }
            }, {
                key: "handleAddUser",
                value: function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).address;
                    if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e))
                        if (e.trim().toLowerCase() !== this.autoSuggestInput.getCurrentAccount().email.toLowerCase()) {
                            if (this.setState({
                                selfShareError: !1
                            }),
                            this.autoSuggestInput.setState({
                                values: []
                            }),
                            !this.state.sharingList.some(function(t) {
                                return t.username.toUpperCase() === e.trim().toUpperCase()
                            })) {
                                var t = this.inputPermission.getValue();
                                this.state.sharingList.unshift({
                                    username: e,
                                    level: t
                                }),
                                this.setState({
                                    sharingList: $c(this.state.sharingList),
                                    changed: this.isChanged()
                                })
                            }
                        } else
                            this.setState({
                                selfShareError: !0
                            })
                }
            }, {
                key: "handleRemoveUser",
                value: function(e) {
                    var t, n = this.props.accessList, r = this.state.sharingList.filter(function(t) {
                        return t.username.toUpperCase() !== e.username.toUpperCase()
                    }), o = n && 0 === (null === (t = this.state.sharingList) || void 0 === t ? void 0 : t.length);
                    this.setState({
                        sharingList: r,
                        changed: o || JSON.stringify(r) !== JSON.stringify(n)
                    })
                }
            }, {
                key: "handleRemoveCurrentUser",
                value: function(e) {
                    e.address.trim().toLowerCase() === this.autoSuggestInput.getCurrentAccount().email.toLowerCase() && this.setState({
                        selfShareError: !1
                    })
                }
            }, {
                key: "isChanged",
                value: function() {
                    var e = this.props.accessList;
                    return !!e && (!this.publicCheck.isPristine() || JSON.stringify(this.state.sharingList) !== JSON.stringify(e))
                }
            }, {
                key: "handleShow",
                value: function() {
                    this.autoSuggestInput.setState({
                        values: []
                    })
                }
            }, {
                key: "handleHide",
                value: function() {
                    var e = this.props.onDismiss;
                    this.setState({
                        changed: !1,
                        sharingList: null
                    }),
                    this.autoSuggestInput.setState({
                        values: []
                    }),
                    e()
                }
            }, {
                key: "handleShare",
                value: function() {
                    var e = this.props
                      , t = e.onSavePermission
                      , n = e.calendar;
                    n.name = encodeURI(n.name),
                    t(n, this.state.sharingList, this.state.publicCal)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n = this, o = this.props, a = o.show, i = o.calendar, l = o.permissionOptions, s = o.accessList, c = o.publicCal, u = i || {}, d = u.name, f = void 0 === d ? "" : d, p = u.sharingUrl, m = this.state.selfShareError ? (0,
                    Yi.t)("calendar.common.SELF_SHARE_ERROR") : (0,
                    Yi.t)("common.errorMessage.INVALID_EMAIL_ADDRESS");
                    return r.createElement(As.Z, {
                        className: "ow-calendar-CalendarPermissionEditor",
                        show: a,
                        onHide: function() {
                            return n.handleHide()
                        },
                        onShow: function() {
                            return n.handleShow()
                        },
                        backdrop: "static"
                    }, r.createElement(As.Z.Header, {
                        closeButton: !0
                    }, r.createElement(As.Z.Title, {
                        id: "ow-calendar-CalendarPermissionEditor-dialog",
                        role: Ki.HB.HEADING,
                        "aria-level": Ki.DU.H2,
                        "aria-label": (0,
                        bl.WU)((0,
                        Yi.t)("calendar.calendarEditor.TITLE_SHARE"), f)
                    }, (0,
                    bl.WU)((0,
                    Yi.t)("calendar.calendarEditor.TITLE_SHARE"), f))), r.createElement(As.Z.Body, {
                        style: {
                            whiteSpace: "pre-line"
                        }
                    }, r.createElement(Is.l0, {
                        className: "ow-CalendarPermissionEditor-form"
                    }, r.createElement("div", {
                        className: "ow-calendar-CalendarPermissionEdior-inputTitle",
                        "aria-label": (0,
                        Yi.t)("calendar.calendarEditor.LABEL_SHARE_TEXT")
                    }, (0,
                    Yi.t)("calendar.calendarEditor.LABEL_SHARE_TEXT")), r.createElement("div", {
                        className: "ow-calendaar-CalendarPermissionEditor-addressInput"
                    }, r.createElement(Xc.Z, {
                        autoInputRef: function(e) {
                            n.autoSuggestInput = e
                        },
                        onAdd: function(e) {
                            return n.handleAddUser(e)
                        },
                        onRemove: function(e) {
                            return n.handleRemoveCurrentUser(e)
                        },
                        placeholder: (0,
                        Yi.t)("calendar.calendarEditor.PLACEHOLDER_ADD_EMAIL"),
                        errorMsg: m,
                        shareSelf: this.state.selfShareError
                    }), r.createElement(Is.Hi, {
                        ref: function(e) {
                            n.inputPermission = e
                        },
                        name: "permission",
                        className: "ow-calendar-CalendarPermissionEditor-permission",
                        options: l,
                        value: "read"
                    }), r.createElement(Ui.Z, {
                        name: "plus",
                        onClick: function() {
                            return n.handleAddUser()
                        },
                        role: Ki.HB.BUTTON,
                        "aria-label": (0,
                        Yi.t)("common.ADD"),
                        tabIndex: 0
                    })), r.createElement("div", {
                        className: "ow-calendar-CalendarPermissionEditor-listTitle",
                        "aria-label": (0,
                        Yi.t)("calendar.calendarEditor.ACCESS_LIST_TITLE")
                    }, (0,
                    Yi.t)("calendar.calendarEditor.ACCESS_LIST_TITLE")), r.createElement("div", {
                        className: "ow-calendar-CalendarPermissionEditor-shareList"
                    }, void 0 === s && r.createElement(zi.Z, null), s && 0 === (null === (e = this.state.sharingList) || void 0 === e ? void 0 : e.length) && r.createElement("div", {
                        className: "ow-calendar-CalendarPermissionEditor-none",
                        "aria-label": (0,
                        Yi.t)("common.EMPTY")
                    }, (0,
                    Yi.t)("common.EMPTY")), this.state.sharingList && this.state.sharingList.map(function(e) {
                        return r.createElement("div", {
                            key: "_".concat(e.username),
                            className: "ow-calendar-CalendarPermissionEditor-shareItem"
                        }, r.createElement("div", {
                            className: "ow-calendar-CalendarPermissionEditor-address",
                            "aria-label": null === e || void 0 === e ? void 0 : e.username
                        }, e.username), r.createElement(Is.Hi, {
                            name: "permission",
                            className: "ow-calendar-CalendarPermissionEditor-permission",
                            options: l,
                            value: e.level,
                            onChange: function(t) {
                                return n.handlePermission(t, e)
                            }
                        }), r.createElement(Ui.Z, {
                            name: "trash",
                            onClick: function() {
                                n.handleRemoveUser(e)
                            },
                            role: Ki.HB.BUTTON,
                            "aria-label": (0,
                            Yi.t)("common.DELETE"),
                            tabIndex: 0,
                            onKeyDown: function(t) {
                                return "Enter" === t.key && n.handleRemoveUser(e)
                            }
                        }))
                    })), r.createElement("div", {
                        className: "ow-calendar-CalendarPermissionEditor-publicTitle",
                        "aria-label": (0,
                        Yi.t)("calendar.calendarEditor.LABEL_PUBLIC")
                    }, (0,
                    Yi.t)("calendar.calendarEditor.LABEL_PUBLIC")), r.createElement(Is.bM, {
                        name: "public",
                        ref: function(e) {
                            n.publicCheck = e
                        },
                        className: "ow-calendar-CalendarPermissionEditor-publicCheck",
                        value: c,
                        label: (0,
                        Yi.t)("calendar.calendarEditor.LABEL_ALLOW_ANYONE"),
                        onChange: function(e) {
                            n.handlePublicChange(e)
                        },
                        "aria-label": (0,
                        Yi.t)("calendar.calendarEditor.LABEL_ALLOW_ANYONE")
                    }), this.state.publicCal && r.createElement("div", {
                        className: "ow-calendar-CalendarPermissionEditor-publicUrl",
                        "aria-label": (0,
                        Yi.t)("calendar.calendarEditor.LABEL_SHARE_LINK_TEXT")
                    }, (0,
                    Yi.t)("calendar.calendarEditor.LABEL_SHARE_LINK_TEXT"), r.createElement("br", null), p))), r.createElement(As.Z.Footer, null, r.createElement(hs.Z, {
                        disabled: !this.state.changed,
                        className: "ow-calendar-CalendarPermissionEditor-save ow-button-primary",
                        onClick: function() {
                            n.handleShare()
                        },
                        role: Ki.HB.BUTTON,
                        "aria-label": (0,
                        Yi.t)("common.SAVE"),
                        "aria-disabled": !(null !== this && void 0 !== this && null !== (t = this.state) && void 0 !== t && t.changed)
                    }, (0,
                    Yi.t)("common.SAVE")), r.createElement(hs.Z, {
                        className: "ow-calendar-CalendarPermissionEditor-cancel",
                        onClick: function() {
                            n.handleHide()
                        },
                        role: Ki.HB.BUTTON,
                        "aria-label": (0,
                        Yi.t)("common.CANCEL")
                    }, (0,
                    Yi.t)("common.CANCEL"))))
                }
            }]),
            n
        }();
        function lu(e) {
            return function(e) {
                if (Array.isArray(e))
                    return su(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return su(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return su(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function su(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        iu.defaultProps = {
            show: !1,
            calendar: void 0,
            accessList: void 0,
            publicCal: !1,
            onSavePermission: function() {},
            onDismiss: function() {},
            permissionOptions: [],
            shareSelf: !1
        },
        iu.propTypes = {
            show: o.bool,
            calendar: (0,
            o.shape)({
                id: o.string,
                name: o.string,
                visible: o.bool,
                primary: o.bool,
                personal: o.bool,
                readOnly: o.bool
            }),
            onSavePermission: o.func,
            accessList: (0,
            o.arrayOf)(o.object),
            publicCal: o.bool,
            onDismiss: o.func,
            permissionOptions: (0,
            o.arrayOf)(o.object),
            shareSelf: o.bool
        };
        var cu = (0,
        i.$j)(function(e) {
            var t = (0,
            ml.US)(e)
              , n = t.show
              , r = t.calendar;
            if (!r)
                return {};
            var o = Ki.iq.map(function(e) {
                return {
                    value: e.key,
                    label: (0,
                    Yi.t)("calendar.calendarEditor.shareCalendarPermission")[e.key],
                    iconName: e.iconName
                }
            })
              , a = r.accessList;
            return {
                show: n,
                calendar: r,
                accessList: a && a.filter(function(e) {
                    return "anyone" !== e.userType
                }),
                publicCal: a && a.some(function(e) {
                    return "anyone" === e.userType
                }),
                permissionOptions: o
            }
        }, function(e) {
            return {
                onSavePermission: function(t, n, r) {
                    return e((0,
                    ms.vT)({
                        calendar: t,
                        accessList: lu(n),
                        pub: r
                    }))
                },
                onDismiss: function() {
                    return e((0,
                    ms.rS)())
                }
            }
        })(iu)
          , uu = n(45792)
          , du = n(88422)
          , fu = n(44461)
          , pu = n(46095)
          , mu = (n(12154),
        n(97186))
          , vu = n.n(mu)
          , hu = (n(39940),
        n(70293))
          , yu = n.n(hu)
          , bu = n(38868)
          , gu = n.n(bu)
          , Eu = n(8764)
          , wu = n.n(Eu)
          , Su = function(e) {
            var t, n, o = e.error, a = e.progress, i = e.id, l = e.backUpdata, s = e.showEditorPanel, c = (0,
            Yi.t)("calendar.errorMessage.CALENDAR_SAVE_IN_PROGRESS"), u = (0,
            Yi.t)("calendar.errorMessage.ERROR_SAVE_CALENDAR");
            l && (l && l.calendar ? t = l.summary || l.calendar.name : l && null !== l && void 0 !== l && null !== (n = l.values) && void 0 !== n && n.summary && (t = l.values.summary,
            u = (0,
            Yi.t)("calendar.errorMessage.ERROR_SAVE_EVENT")));
            return r.createElement("div", null, a && r.createElement(gu(), null, r.createElement(yu(), {
                lg: "9",
                className: "ow-progress-content",
                "aria-atomic": "true",
                "aria-live": Ki.HO.ASSERTIVE
            }, " ", c, " ", t)), o && r.createElement(gu(), null, r.createElement(yu(), {
                className: "ow-progress",
                lg: "9"
            }, r.createElement("span", {
                className: "ow-progress-content-error",
                "aria-live": Ki.HO.ASSERTIVE
            }, u, " ", t), r.createElement(wu(), {
                className: "ow-progress-toast-button",
                disabled: s,
                role: Ki.HB.BUTTON,
                "aria-disabled": s,
                "aria-label": (0,
                Yi.t)("common.REOPEN"),
                onClick: function() {
                    e.onReopen(i)
                }
            }, r.createElement("span", null, (0,
            Yi.t)("common.REOPEN"))), r.createElement(wu(), {
                className: "ow-progress-cancel",
                onClick: function() {
                    e.onCancel(i)
                }
            }, r.createElement(Ui.Z, {
                className: "ow-icon-ico-close",
                name: "close",
                role: Ki.HB.BUTTON,
                "aria-label": (0,
                Yi.t)("common.CLOSE")
            })))))
        };
        Su.defaultProps = {
            id: ""
        },
        Su.propTypes = {
            id: a().string
        };
        var Ou = Su
          , Tu = n(61697);
        function Cu() {
            return (Cu = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var Du = function(e) {
            var t = e.toastList
              , n = e.calFailedItems
              , o = e.eventFailedItems
              , a = Object.keys(t);
            return a && a.length > 0 ? r.createElement("div", {
                className: "ow-progress-Container"
            }, a && a.map(function(a) {
                var i, l = t[a];
                return n && n[a] ? i = n[a] : o && o[a] && (i = o[a]),
                l ? r.createElement(Ou, Cu({
                    key: l.id,
                    showEditorPanel: e.showCalendarEditorPanel || !vu()(e.showEventEditorPanel),
                    backUpdata: i
                }, l, {
                    data: e.data,
                    onCancel: e.onCancel,
                    onReopen: e.onReopen
                })) : ""
            })) : r.createElement("div", null)
        };
        Du.propTypes = {
            id: a().string.isRequired
        };
        var ku = (0,
        i.$j)(function(e) {
            var t = function(e) {
                return e.calendar.calendarToast.toasts
            }(e)
              , n = (0,
            Xs.H6)(e)
              , r = (0,
            Wi.u1)(e);
            return {
                toastList: t,
                calFailedItems: n,
                showCalendarEditorPanel: (0,
                Xs.pP)(e).show,
                eventFailedItems: r,
                showEventEditorPanel: (0,
                Wi.l6)(e)
            }
        }, function(e) {
            return {
                onReopen: (0,
                pu.DE)(Tu.Sr, e),
                onCancel: (0,
                pu.DE)(Tu.oE, e)
            }
        })(Du)
          , Nu = n(74494)
          , Pu = n(9631)
          , xu = n(96312);
        function _u(e) {
            "@babel/helpers - typeof";
            return (_u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Mu(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Ru(r.key), r)
            }
        }
        function Ru(e) {
            var t = function(e, t) {
                if ("object" !== _u(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== _u(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === _u(t) ? t : String(t)
        }
        function Au(e, t) {
            return (Au = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Iu(e) {
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
                var n, r = Lu(e);
                if (t) {
                    var o = Lu(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === _u(t) || "function" == typeof t))
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
        function Lu(e) {
            return (Lu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ju = function(e) {
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
                t && Au(e, t)
            }(n, r.Component);
            var t = Iu(n);
            function n(e) {
                var r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                r = t.call(this, e);
                var o = window.uxLocalStorage && JSON.parse(window.uxLocalStorage.getItem("concurrentPopupShow"));
                return r.state = {
                    concurrentLoginShow: o
                },
                r
            }
            return function(e, t, n) {
                t && Mu(e.prototype, t),
                n && Mu(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    !0 !== window.securityNotification && (0,
                    Sl.nIE)() && e.securityTrackingList.filter(function(e) {
                        return "mail.vacationMessage2.save" !== e
                    }).map(function(t, n) {
                        window.securityNotification = !0,
                        (0,
                        c.Am)(r.createElement(Pu.Z, {
                            key: n,
                            toastId: t,
                            message: t,
                            id: n,
                            autoforwardAddress: e.autoforwardAddress.addresses,
                            addressEnabled: 0 === e.autoforwardAddress.addresses.length && "mail.forwarding.save" === t ? Ki.Q1.ENABLED : Ki.Q1.TEXT
                        }), {
                            autoClose: (0,
                            sc.Z)("securityNotification.toastInterval"),
                            hideProgressBar: !0,
                            closeOnClick: !1,
                            pauseOnHover: !1,
                            draggable: !1,
                            progress: !1,
                            newestOnTop: !0,
                            transition: c.sm
                        })
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.searchOpened;
                    return r.createElement("div", {
                        className: "ow-appLayout-hbox ow-appLayout-calendar",
                        role: Ki.HB.HEADING,
                        "aria-level": Ki.DU.H1,
                        "aria-label": (0,
                        Yi.t)("app.CALENDAR"),
                        tabIndex: 0
                    }, r.createElement(fu.Z, null, r.createElement("div", {
                        className: "ow-appLayout-hbox ow-appLayout-flex"
                    }, r.createElement(s(), {
                        size: Ki.mW.SIZE,
                        allowResize: !1,
                        maxSize: Ki.mW.MAXSIZE,
                        minSize: Ki.mW.MINSIZE
                    }, r.createElement(fu.Z, null, r.createElement(ks, null)), r.createElement("div", {
                        className: "ow-appLayout-flex ow-appLayout-vbox"
                    }, r.createElement(Rs, null), e && r.createElement(Xl, null), !e && r.createElement(ps, null))), r.createElement(fu.Z, null, r.createElement(vc.Z, null))), (0,
                    sc.Z)("advertisement.skyscrapper") && r.createElement(uu.Nv, {
                        title: "ad",
                        className: "ow-advertisement-right",
                        url: (0,
                        sc.Z)("advertisement.skyscrapperUrl")
                    }), r.createElement(fu.Z, null, r.createElement(qs, null)), r.createElement(fu.Z, null, r.createElement(cc, null)), r.createElement(fu.Z, null, r.createElement(mc, null)), r.createElement(fu.Z, null, r.createElement(Ec, null)), r.createElement(fu.Z, null, r.createElement(Zc, null)), r.createElement(fu.Z, null, r.createElement(Kc, null)), r.createElement(fu.Z, null, r.createElement(cu, null)), r.createElement(fu.Z, null, r.createElement(ku, null))))
                }
            }], [{
                key: "name",
                get: function() {
                    return Ki.lw.CALENDAR
                }
            }]),
            n
        }();
        ju.defaultProps = {
            searchOpened: !1,
            securityTrackingList: [],
            autoforwardAddress: []
        },
        ju.propTypes = {
            searchOpened: a().bool,
            getUserProfile: a().string.isRequired,
            getAuthDetails: a().string.isRequired,
            securityTrackingList: a().arrayOf(a().string),
            autoforwardAddress: a().arrayOf(a().string)
        };
        var Zu = (0,
        i.$j)(function(e) {
            var t = (0,
            ml.gm)(e)
              , n = (0,
            Nu.YqX)(e)
              , r = (0,
            xu.PK)(e);
            return {
                searchOpened: t,
                getUserProfile: (0,
                ss.zx)(e),
                getAuthDetails: (0,
                du._)(e),
                securityTrackingList: n,
                autoforwardAddress: r
            }
        })(ju)
    },
    2786: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return U
            }
        });
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(59883)
          , l = n.n(i)
          , s = n(55046)
          , c = n.n(s)
          , u = n(80357)
          , d = n.n(u)
          , f = n(8764)
          , p = n.n(f)
          , m = n(76707)
          , v = n.n(m)
          , h = n(45239)
          , y = n.n(h)
          , b = n(78295)
          , g = n.n(b)
          , E = n(55594)
          , w = n.n(E)
          , S = n(70293)
          , O = n.n(S)
          , T = n(15292)
          , C = n.n(T)
          , D = n(5613)
          , k = n(32022)
          , N = n.n(k)
          , P = n(70224)
          , x = n(32081)
          , _ = n(44910)
          , M = n(94165)
          , R = n(84987);
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
        function I(e, t, n) {
            return (t = j(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function L(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, j(r.key), r)
            }
        }
        function j(e) {
            var t = function(e, t) {
                if ("object" !== A(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== A(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === A(t) ? t : String(t)
        }
        function Z(e, t) {
            return (Z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                var n, r = F(e);
                if (t) {
                    var o = F(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === A(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return H(e)
                }(this, n)
            }
        }
        function H(e) {
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
        var U = function(e) {
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
                t && Z(e, t)
            }(n, r.PureComponent);
            var t = B(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).state = {
                    text: "",
                    category: "",
                    startTime: null,
                    endTime: null,
                    alarmsOnly: !1,
                    calendarId: null,
                    isAdvancedSearchShow: !1
                },
                r.handleAdvanceBtnClick = r.handleAdvanceBtnClick.bind(H(r)),
                r.handleChange = r.handleChange.bind(H(r)),
                r.handleSelectCategory = r.handleSelectCategory.bind(H(r)),
                r.handleChangeStart = r.handleChangeStart.bind(H(r)),
                r.handleChangeEnd = r.handleChangeEnd.bind(H(r)),
                r.handleQuickSearch = r.handleQuickSearch.bind(H(r)),
                r.handleAdvSearch = r.handleAdvSearch.bind(H(r)),
                r.clearField = r.clearField.bind(H(r)),
                r
            }
            return function(e, t, n) {
                t && L(e.prototype, t),
                n && L(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.searchSelected === this.props.searchSelected || e.searchSelected || this.setState({
                        text: "",
                        calendarId: "",
                        category: "",
                        startTime: "",
                        endTime: "",
                        alarmsOnly: ""
                    })
                }
            }, {
                key: "clearField",
                value: function(e) {
                    (this.setState(I({}, e, "")),
                    this.state.isAdvancedSearchShow) || (0,
                    this.props.onExitSearch)()
                }
            }, {
                key: "handleChange",
                value: function(e, t) {
                    this.setState(I({}, e, t.target.value))
                }
            }, {
                key: "handleQuickSearch",
                value: function() {
                    var e = this.props.onSearch
                      , t = this.state.text;
                    t && t.trim() && (e({
                        text: t || void 0
                    }),
                    this.setState({
                        isAdvancedSearchShow: !1
                    }))
                }
            }, {
                key: "handleAdvSearch",
                value: function() {
                    var e = this.props.onAdvancedSearch
                      , t = this.state
                      , n = t.text
                      , r = t.startTime
                      , o = t.endTime
                      , a = t.alarmsOnly
                      , i = t.calendarId
                      , l = t.category
                      , s = {
                        text: n || void 0,
                        startTime: r,
                        endTime: o,
                        alarmsOnly: a,
                        calendarId: i,
                        category: l || void 0
                    };
                    s.startTime = r,
                    s.endTime = o && N()(o).add(864e5 - 1, "milliseconds"),
                    e(s),
                    this.setState({
                        isAdvancedSearchShow: !1
                    })
                }
            }, {
                key: "handleSelectCategory",
                value: function(e) {
                    this.setState({
                        category: e
                    })
                }
            }, {
                key: "handleChangeStart",
                value: function(e) {
                    null !== e && void 0 !== e && e.isAfter(this.state.endTime) ? this.setState({
                        startTime: this.state.endTime,
                        endTime: e
                    }) : this.setState({
                        startTime: e
                    })
                }
            }, {
                key: "handleChangeEnd",
                value: function(e) {
                    null !== e && void 0 !== e && e.isBefore(this.state.startTime) ? this.setState({
                        startTime: e,
                        endTime: this.state.startTime
                    }) : this.setState({
                        endTime: e
                    })
                }
            }, {
                key: "handleAdvanceBtnClick",
                value: function() {
                    var e = this.state.isAdvancedSearchShow;
                    this.setState({
                        isAdvancedSearchShow: !e
                    })
                }
            }, {
                key: "renderInputField",
                value: function(e) {
                    var t = this
                      , n = e.placeHolderText
                      , o = e.value
                      , a = e.fieldName
                      , i = e.showClearButton;
                    return r.createElement("div", {
                        className: "ow-calendar-CalendarSearch-input"
                    }, r.createElement(l(), {
                        className: "ow-calendar-CalendarSearch-input-text",
                        type: "text",
                        placeholder: n,
                        title: n,
                        value: o,
                        "aria-label": o || n,
                        onChange: function(e) {
                            return t.handleChange(a, e)
                        },
                        onKeyDown: function(e) {
                            return 13 === e.keyCode && (t.state.isAdvancedSearchShow ? t.handleAdvSearch() : t.handleQuickSearch())
                        }
                    }), r.createElement(r.Fragment, null, (o || i) && r.createElement(x.Z, {
                        name: "close",
                        className: "ow-calendar-CalendarSearch-input-clear",
                        role: M.HB.BUTTON,
                        "aria-label": (0,
                        R.t)("common.CANCEL"),
                        onClick: function(e) {
                            return t.clearField(a, e)
                        },
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === M.BY.ENTERKEY && t.clearField(a, e)
                        }
                    }), r.createElement(x.Z, {
                        name: "search-active",
                        className: "ow-calendar-CalendarSearch-input-search",
                        role: M.HB.BUTTON,
                        "aria-label": (0,
                        R.t)("calendar.search.BTN_SEARCH"),
                        onClick: function() {
                            t.state.isAdvancedSearchShow ? t.handleAdvSearch() : t.handleQuickSearch()
                        },
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            e.key === M.BY.ENTERKEY && (t.state.isAdvancedSearchShow ? t.handleAdvSearch() : t.handleQuickSearch())
                        }
                    })))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.state.isAdvancedSearchShow
                      , n = this.props
                      , o = n.searchSelected
                      , a = n.allCalendars
                      , i = n.categories
                      , l = n.dateFormat;
                    if (a.length < 1)
                        return null;
                    var s = (a.filter(function(t) {
                        return t.id === e.state.calendarId
                    })[0] || a[0]).name
                      , u = this.state.text || this.state.startTime || this.state.endTime || this.state.category || this.state.calendarId || this.state.alarmsOnly
                      , f = (0,
                    R.t)("calendar.search.SEARCH_FIELD_BLANK");
                    return r.createElement("div", {
                        className: "ow-calendar-CalendarSearch".concat(o ? " ow-calendar-CalendarSearch-selected" : ""),
                        tabIndex: 0,
                        role: M.HB.SEARCH
                    }, r.createElement("div", {
                        ref: function(t) {
                            e.topBorder = t
                        }
                    }), r.createElement(c(), {
                        className: "ow-calendar-CalendarSearch-input-group"
                    }, this.renderInputField({
                        placeHolderText: f,
                        showClearButton: o,
                        value: this.state.text,
                        fieldName: "text"
                    }), r.createElement(c().Button, null, r.createElement(p(), {
                        onClick: this.handleAdvanceBtnClick,
                        title: (0,
                        R.t)("common.SHOW_ADVANCED_TOOLTIP"),
                        "aria-label": t ? (0,
                        R.t)("aria.label.EXPAND") : (0,
                        R.t)("aria.label.COLLAPSE"),
                        id: "CalendarSearch-caret-btn"
                    }, r.createElement("span", {
                        className: "caret"
                    })))), r.createElement(v(), {
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
                    }, r.createElement("div", {
                        className: "ow-calendar-CalendarSearch-overlay",
                        onKeyDown: function(e) {
                            e.key === M.BY.ESCAPEKEY && (0,
                            _.kW)("#CalendarSearch-caret-btn")
                        }
                    }, r.createElement(C(), null, r.createElement(y(), {
                        horizontal: !0
                    }, r.createElement(g(), {
                        controlId: "text",
                        bsSize: ""
                    }, r.createElement(O(), {
                        componentClass: w(),
                        sm: 2,
                        xs: 2,
                        "aria-label": (0,
                        R.t)("calendar.search.CONTENT")
                    }, (0,
                    R.t)("calendar.search.CONTENT"), ":"), r.createElement(O(), {
                        sm: 9,
                        xs: 9
                    }, this.renderInputField({
                        value: this.state.text,
                        fieldName: "text"
                    }))), r.createElement(g(), {
                        controlId: "category",
                        bsSize: ""
                    }, r.createElement(O(), {
                        componentClass: w(),
                        sm: 2,
                        xs: 2,
                        "aria-label": (0,
                        R.t)("calendar.search.CATEGORY")
                    }, (0,
                    R.t)("calendar.search.CATEGORY"), ":"), r.createElement(O(), {
                        sm: 9,
                        xs: 9
                    }, r.createElement(d(), {
                        id: "calendar-search-category-dropdown",
                        onSelect: function(t) {
                            return e.setState({
                                category: t
                            })
                        }
                    }, r.createElement(d().Toggle, {
                        noCaret: !0,
                        "aria-label": (0,
                        R.t)("calendar.search.CATEGORY")
                    }, this.state.category && r.createElement(x.Z, {
                        name: "calendar-".concat(this.state.category.toLowerCase())
                    }), r.createElement("div", {
                        className: "ow-calendar-CalendarSearch-categoryTitle"
                    }, i.filter(function(t) {
                        return t.key === e.state.category
                    })[0].name), r.createElement("span", {
                        className: "caret"
                    })), r.createElement(d().Menu, {
                        className: "ow-calendar-search-category-menu"
                    }, i.map(function(e) {
                        var t = e.name
                          , n = e.key;
                        return r.createElement(P.Z, {
                            eventKey: n
                        }, r.createElement(x.Z, {
                            name: "calendar-".concat(t.toLowerCase())
                        }), "" == n ? (0,
                        R.t)("calendar.search.ALL_CATEGORY") : (0,
                        R.t)("calendar.editorView.".concat(t.toUpperCase())))
                    }))))), r.createElement(g(), {
                        controlId: "calendars",
                        bsSize: ""
                    }, r.createElement(O(), {
                        componentClass: w(),
                        sm: 2,
                        xs: 2,
                        "aria-label": (0,
                        R.t)("calendar.search.CALENDAR")
                    }, (0,
                    R.t)("calendar.search.CALENDAR"), ":"), r.createElement(O(), {
                        sm: 9,
                        xs: 9
                    }, r.createElement(d(), {
                        id: "calendar-search-calendar-dropdown",
                        onSelect: function(t) {
                            return e.setState({
                                calendarId: t
                            })
                        }
                    }, r.createElement(d().Toggle, {
                        noCaret: !0,
                        "aria-label": (0,
                        R.t)("calendar.search.CALENDAR")
                    }, r.createElement("div", {
                        className: "ow-calendar-CalendarSearch-calendarsTitle",
                        "aria-label": s
                    }, s), r.createElement("span", {
                        className: "caret"
                    })), r.createElement(d().Menu, {
                        className: "ow-calendar-search-calendars-menu"
                    }, a.map(function(e) {
                        return r.createElement(P.Z, {
                            eventKey: e.id,
                            title: e.name,
                            "aria-label": e.name
                        }, e.name)
                    }))))), r.createElement(g(), {
                        controlId: "fromDate",
                        bsSize: ""
                    }, r.createElement(O(), {
                        componentClass: w(),
                        sm: 2,
                        xs: 2
                    }, (0,
                    R.t)("calendar.editorView.FIELD_TYPE_SELECTED_TEXT.DATE"), ":"), r.createElement(O(), {
                        className: "ow-calendar-CalendarSearch-dates",
                        sm: 9,
                        xs: 9
                    }, r.createElement("div", {
                        style: {
                            position: "relative"
                        }
                    }, r.createElement("label", {
                        className: "ow-icon-ico-calendar-datepicker"
                    }, " ", r.createElement(D.Z, {
                        id: "after",
                        placeholderText: (0,
                        R.t)("mail.search.FROM_DATE"),
                        "aria-label": (0,
                        R.t)("mail.search.FROM_DATE"),
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
                    }))), r.createElement("span", {
                        className: "ow-calendar-CalendarSearch-dates-seperator"
                    }, " - "), r.createElement("div", {
                        style: {
                            position: "relative"
                        }
                    }, r.createElement("label", {
                        className: "ow-icon-ico-calendar-datepicker"
                    }, " ", r.createElement(D.Z, {
                        placeholderText: (0,
                        R.t)("mail.search.TO_DATE"),
                        "aria-label": (0,
                        R.t)("mail.search.TO_DATE"),
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
                    }))))), r.createElement(g(), {
                        controlId: "reminder",
                        bsSize: ""
                    }, r.createElement(O(), {
                        componentClass: w(),
                        sm: 2,
                        xs: 2
                    }), r.createElement(O(), {
                        sm: 9,
                        xs: 9
                    }, r.createElement("div", {
                        role: M.HB.PRESENTATION,
                        className: "ow-calendar-CalendarSearch-reminder",
                        onClick: function() {
                            return e.setState({
                                alarmsOnly: !e.state.alarmsOnly
                            })
                        },
                        onKeyDown: function(t) {
                            t.key === M.BY.ENTERKEY ? e.setState({
                                alarmsOnly: !e.state.alarmsOnly
                            }) : u || t.key !== M.BY.TABKEY || (0,
                            _.kW)("#CalendarSearch-caret-btn")
                        }
                    }, r.createElement(x.Z, {
                        name: this.state.alarmsOnly ? "square-selected" : "squared-unchecked",
                        role: M.HB.CHECKBOX,
                        "aria-label": (0,
                        R.t)("calendar.search.WITH_REMINDER"),
                        "aria-checked": this.state.alarmsOnly,
                        tabIndex: 0
                    }), r.createElement("span", null, (0,
                    R.t)("calendar.search.WITH_REMINDER"))))), r.createElement("div", {
                        className: "ow-calendar-CalendarSearch-searchBtn-wrapper"
                    }, r.createElement(p(), {
                        className: "ow-button-primary btn btn-default",
                        onClick: this.handleAdvSearch,
                        disabled: !u,
                        role: M.HB.BUTTON,
                        "aria-label": (0,
                        R.t)("calendar.search.BTN_SEARCH"),
                        "aria-disabled": !u,
                        onKeyDown: function(t) {
                            if (t.key !== M.BY.TABKEY) {
                                if (t.key !== M.BY.ENTERKEY)
                                    return;
                                e.handleAdvSearch()
                            }
                            t.shiftKey ? ((0,
                            _.kW)(".ow-calendar-CalendarSearch-reminder .ow-icon"),
                            t.preventDefault()) : ((0,
                            _.kW)(".ow-calendar-CalendarSearch-input-group button"),
                            t.preventDefault())
                        }
                    }, (0,
                    R.t)("calendar.search.BTN_SEARCH"))))))))
                }
            }]),
            n
        }();
        U.defaultProps = {
            allCalendars: [],
            categories: [],
            searchSelected: !1,
            onExitSearch: function() {},
            onSearch: function() {},
            onAdvancedSearch: function() {}
        },
        U.propTypes = {
            allCalendars: a().arrayOf(a().object),
            categories: a().arrayOf(a().object),
            searchSelected: a().bool,
            onExitSearch: a().func,
            onSearch: a().func,
            onAdvancedSearch: a().func
        }
    },
    69765: function(e, t, n) {
        "use strict";
        var r = n(87401)
          , o = n(23398)
          , a = n.n(o)
          , i = n(55086)
          , l = n(10091)
          , s = n(77545)
          , c = n(84987)
          , u = n(83416)
          , d = n(44910)
          , f = n(94165);
        function p(e) {
            return function(e) {
                if (Array.isArray(e))
                    return m(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return m(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return m(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function m(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
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
        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, y(r.key), r)
            }
        }
        function y(e) {
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
        }
        function b(e, t) {
            return (b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
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
                var n, r = w(e);
                if (t) {
                    var o = w(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === v(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return E(e)
                }(this, n)
            }
        }
        function E(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function w(e) {
            return (w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var S = function(e) {
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
                t && b(e, t)
            }(n, r.PureComponent);
            var t = g(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).renderSearchExit = r.renderSearchExit.bind(E(r)),
                r.renderRefresh = r.renderRefresh.bind(E(r)),
                r.renderNewEvent = r.renderNewEvent.bind(E(r)),
                r.renderAddCalendar = r.renderAddCalendar.bind(E(r)),
                r.renderMore = r.renderMore.bind(E(r)),
                r.renderPrintCal = r.renderPrintCal.bind(E(r)),
                r.renderimportEvents = r.renderimportEvents.bind(E(r)),
                r.renderexportEvents = r.renderexportEvents.bind(E(r)),
                r.renderSubscribeCal = r.renderSubscribeCal.bind(E(r)),
                r.handlePrintCal = r.handlePrintCal.bind(E(r)),
                r
            }
            return function(e, t, n) {
                t && h(e.prototype, t),
                n && h(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "renderSearchExit",
                value: function(e) {
                    return r.createElement(s.Z, {
                        iconName: "exit",
                        role: f.HB.BUTTON,
                        onClick: function() {
                            return e()
                        },
                        className: "ow-calendar-CalendarToolbar-searchBack",
                        "aria-label": (0,
                        c.t)("mail.search.EXIT_SEARCH")
                    }, (0,
                    c.t)("mail.search.EXIT_SEARCH"))
                }
            }, {
                key: "renderRefresh",
                value: function(e) {
                    var t = this;
                    return r.createElement(l.Z.Button, {
                        iconName: "refresh",
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        c.t)("aria.label.Refresh"),
                        onClick: function() {
                            return e()
                        },
                        ref: function(e) {
                            t.refreshBtn = e
                        }
                    })
                }
            }, {
                key: "renderNewEvent",
                value: function(e) {
                    return r.createElement(l.Z.Button, {
                        onClick: function() {
                            return e()
                        },
                        iconName: "plus",
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        c.t)("calendar.toolbar.BUTTON_NEW"),
                        id: "calendarToolbarNewEventBtn",
                        onKeyDown: function(e) {
                            return e.key === f.BY.ENTERKEY && setTimeout(function() {
                                (0,
                                d.kW)(".ow-calendar-EventEditor-panel-upper")
                            }, 50)
                        }
                    }, (0,
                    c.t)("calendar.toolbar.BUTTON_NEW"))
                }
            }, {
                key: "renderAddCalendar",
                value: function(e) {
                    return r.createElement(l.Z.Button, {
                        onClick: function() {
                            return e()
                        },
                        iconName: "add-cal",
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        c.t)("calendar.toolbar.BUTTON_CREATE_CALENDAR"),
                        onKeyDown: function(e) {
                            return e.key === f.BY.ENTERKEY && (0,
                            d.Mb)()
                        }
                    }, (0,
                    c.t)("calendar.toolbar.BUTTON_CREATE_CALENDAR"))
                }
            }, {
                key: "handlePrintCal",
                value: function() {
                    setTimeout(function() {
                        var e = "@media print {body {zoom: 60%; -webkit-print-color-adjust: exact !important;  color-adjust: exact !important; print-color-adjust: exact !important;}}"
                          , t = document.head || document.getElementsByTagName("head")[0]
                          , n = document.createElement("style");
                        n.type = "text/css",
                        n.media = "print",
                        n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)),
                        t.appendChild(n),
                        window.print()
                    }, 50)
                }
            }, {
                key: "renderPrintCal",
                value: function(e) {
                    return r.createElement(l.Z.Button, {
                        onClick: this.handlePrintCal,
                        isImplicit: !0,
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        c.t)("calendar.toolbar.BUTTON_PRINT_CALENDAR")
                    }, (0,
                    c.t)("calendar.toolbar.BUTTON_PRINT_CALENDAR"))
                }
            }, {
                key: "renderimportEvents",
                value: function(e) {
                    return r.createElement(l.Z.Button, {
                        onClick: e,
                        isImplicit: !0,
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        c.t)("calendar.toolbar.BUTTON_IMPORT_EVENT"),
                        onKeyDown: function(e) {
                            return e.key === f.BY.ENTERKEY && (0,
                            d.Mb)()
                        }
                    }, (0,
                    c.t)("calendar.toolbar.BUTTON_IMPORT_EVENT"))
                }
            }, {
                key: "renderexportEvents",
                value: function(e) {
                    return r.createElement(l.Z.Button, {
                        onClick: e,
                        isImplicit: !0,
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        c.t)("calendar.toolbar.BUTTON_EXPORT_EVENT"),
                        onKeyDown: function(e) {
                            return e.key === f.BY.ENTERKEY && (0,
                            d.Mb)()
                        }
                    }, (0,
                    c.t)("calendar.toolbar.BUTTON_EXPORT_EVENT"))
                }
            }, {
                key: "renderSubscribeCal",
                value: function(e) {
                    return r.createElement(l.Z.Button, {
                        onClick: e,
                        isImplicit: !0,
                        role: f.HB.BUTTON,
                        "aria-label": (0,
                        c.t)("calendar.toolbar.BUTTON_SUBSCRIBE_CALENDAR"),
                        onKeyDown: function(e) {
                            return e.key === f.BY.ENTERKEY && (0,
                            d.Mb)()
                        }
                    }, (0,
                    c.t)("calendar.toolbar.BUTTON_SUBSCRIBE_CALENDAR"))
                }
            }, {
                key: "renderMore",
                value: function(e, t) {
                    return r.createElement(l.Z.Dropdown, {
                        className: "ow-calendar-CalendarToolbar-more-dropdown",
                        title: (0,
                        c.t)("common.MORE_LABEL"),
                        "aria-label": (0,
                        c.t)("common.MORE_LABEL")
                    }, e.map(function(e) {
                        return t[e]
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.onRefresh
                      , o = t.onCreateEvent
                      , a = t.onCreateCalendar
                      , s = t.onPrintCalendar
                      , c = t.onImportEvent
                      , d = t.onExportEvent
                      , f = t.onSubscrib
                      , m = t.onExitSearch
                      , h = t.enableCalendarSearch
                      , y = []
                      , b = [];
                    (0,
                    u.Z)("calendar.listToolbar").map(function(e) {
                        if ("object" === v(e)) {
                            var t = Object.keys(e)
                              , n = Object.values(e);
                            "more" === t[0] ? (b = [],
                            b = p(n[0]),
                            y.push(t[0])) : y.push(t[0])
                        } else
                            y.push(e)
                    });
                    var g = {
                        printCalendar: this.renderPrintCal(s),
                        importEvents: this.renderimportEvents(c),
                        exportEvents: this.renderexportEvents(d),
                        subscribeCal: this.renderSubscribeCal(f)
                    }
                      , E = {
                        refresh: this.renderRefresh(n),
                        newEvent: this.renderNewEvent(o),
                        addCalendar: this.renderAddCalendar(a),
                        more: this.renderMore(b, g)
                    };
                    return r.createElement(i.Z, {
                        className: "ow-calendar-CalendarToolbar-AutoSizer",
                        disableHeight: !0
                    }, function(t) {
                        var n = t.width;
                        return r.createElement(l.Z, {
                            enableResponsive: !0,
                            width: n > 450 ? 450 : n,
                            ref: function(t) {
                                e.toolbar = t
                            }
                        }, y.includes("btnBackToCalendar") && h ? e.renderSearchExit(m) : "", !h && r.createElement(r.Fragment, null, y.map(function(e) {
                            return E[e]
                        })))
                    })
                }
            }]),
            n
        }();
        S.propTypes = {
            onRefresh: a().func,
            onCreateEvent: a().func,
            onCreateCalendar: a().func,
            onPrintCalendar: a().func,
            onImportEvent: a().func,
            onExportEvent: a().func,
            onSubscrib: a().func,
            onExitSearch: a().func,
            enableCalendarSearch: a().bool
        },
        S.defaultProps = {
            onRefresh: function() {},
            onCreateEvent: function() {},
            onCreateCalendar: function() {},
            onPrintCalendar: function() {},
            onImportEvent: function() {},
            onExportEvent: function() {},
            onSubscrib: function() {},
            onExitSearch: function() {},
            enableCalendarSearch: !1
        },
        t.Z = S
    },
    5480: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return N
            }
        });
        var r = n(87401)
          , o = n(12674)
          , a = n(76707)
          , i = n.n(a)
          , l = n(23398)
          , s = n.n(l)
          , c = n(10091)
          , u = n(32081)
          , d = n(80110)
          , f = n(4446)
          , p = n(76634)
          , m = n(84987)
          , v = n(83416)
          , h = n(32022)
          , y = n.n(h)
          , b = n(94165)
          , g = n(44910)
          , E = n(7179);
        function w(e) {
            "@babel/helpers - typeof";
            return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function S(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, O(r.key), r)
            }
        }
        function O(e) {
            var t = function(e, t) {
                if ("object" !== w(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== w(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === w(t) ? t : String(t)
        }
        function T(e, t) {
            return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
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
                var n, r = k(e);
                if (t) {
                    var o = k(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === w(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return D(e)
                }(this, n)
            }
        }
        function D(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function k(e) {
            return (k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var N = function(e) {
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
                t && T(e, t)
            }(n, r.PureComponent);
            var t = C(n);
            function n(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                (r = t.call(this, e)).renderInfo = r.renderInfo.bind(D(r)),
                r.handleEdit = r.handleEdit.bind(D(r)),
                r.handleHide = r.handleHide.bind(D(r)),
                r.handleRSVP = r.handleRSVP.bind(D(r)),
                r.updatePosition = r.updatePosition.bind(D(r)),
                r.getAlarmText = r.getAlarmText.bind(D(r)),
                r.getAttendeeText = r.getAttendeeText.bind(D(r)),
                r.updatePositionMobile = r.updatePositionMobile.bind(D(r)),
                r.updatePositionDesktop = r.updatePositionDesktop.bind(D(r)),
                r.resetSpinner = r.resetSpinner.bind(D(r)),
                r.triggerSpinner = r.triggerSpinner.bind(D(r)),
                r.state = {
                    overlayX: 0,
                    overlayY: 0,
                    overlayWidth: 0,
                    overlayHeight: 0,
                    spinner: !1
                },
                r
            }
            return function(e, t, n) {
                t && S(e.prototype, t),
                n && S(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "componentDidUpdate",
                value: function() {
                    this.updateTime = new Date;
                    var e = this.props
                      , t = e.visible
                      , n = e.onClearSelection
                      , r = e.isSearchSelected;
                    t || r ? this.updatePosition() : n()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = this.props
                      , t = e.visible
                      , n = e.onClearSelection;
                    t && n()
                }
            }, {
                key: "getAlarmText",
                value: function(e) {
                    if (!e)
                        return "";
                    var t = window.UXConfig.calendar.reminder.options.indexOf(e.offsetMinutes);
                    return "email" === e.action ? "".concat((0,
                    m.t)("calendar.editorView.EMAIL"), ", ").concat((0,
                    m.t)("calendar.editorView.reminder.options")[t]) : "".concat(e.action, ", ").concat((0,
                    m.t)("calendar.editorView.reminder.options")[t])
                }
            }, {
                key: "getAttendeeText",
                value: function(e) {
                    var t = e.filter(function(e) {
                        return "accepted" === e.status
                    }).length
                      , n = t > 0 ? "".concat(t, " ").concat((0,
                    m.t)("calendar.editorView.attendee.status.accepted")) : ""
                      , r = e.filter(function(e) {
                        return "tentative" === e.status
                    }).length
                      , o = r > 0 ? " ".concat(r, " ").concat((0,
                    m.t)("calendar.editorView.attendee.status.tentative")) : ""
                      , a = e.filter(function(e) {
                        return "declined" === e.status
                    }).length
                      , i = a > 0 ? " ".concat(a, " ").concat((0,
                    m.t)("calendar.editorView.attendee.status.declined")) : ""
                      , l = t + r + a > 0;
                    return "".concat(e.length).concat(l ? " (" : "").concat(n).concat(i).concat(o).concat(l ? ")" : "", " ").concat((0,
                    m.t)("calendar.common.ATTENDEES"))
                }
            }, {
                key: "handleHide",
                value: function() {
                    var e = this.props.onClearSelection;
                    new Date - this.updateTime < 50 || setTimeout(function() {
                        return e()
                    }, 10)
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
                key: "handleEdit",
                value: function() {
                    (0,
                    f.EmB)() || this.handleHide();
                    var e = this.props
                      , t = e.onEdit
                      , n = e.dateField
                      , r = window.TimeUtil.getDateTimePatterns().LongDateWithTime;
                    n.startTime = n.startTime && y()(n.startTime).format(r),
                    n.endTime = n.endTime && y()(n.endTime).format(r),
                    t(n)
                }
            }, {
                key: "updatePosition",
                value: function() {
                    (0,
                    f.EmB)() ? this.updatePositionMobile() : this.updatePositionDesktop()
                }
            }, {
                key: "updatePositionMobile",
                value: function() {
                    if ((0,
                    o.findDOMNode)(this.overlay)) {
                        var e = (0,
                        o.findDOMNode)(this.container).parentElement.getBoundingClientRect().top
                          , t = document.body
                          , n = t.clientHeight
                          , r = t.clientWidth;
                        this.arrow.style.display = "none",
                        this.arrowParent.style.height = "".concat(n - e, "px"),
                        this.setState({
                            overlayX: 0,
                            overlayY: 0,
                            overlayWidth: r,
                            overlayHeight: n
                        })
                    }
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
                key: "updatePositionDesktop",
                value: function() {
                    var e = (0,
                    o.findDOMNode)(this.overlay);
                    if (e) {
                        var t = (0,
                        o.findDOMNode)(this.container).parentElement.getBoundingClientRect()
                          , n = t.left
                          , r = t.top
                          , a = this.props
                          , i = a.mouseX
                          , l = a.targetRect
                          , s = l.right
                          , c = l.top
                          , u = l.bottom
                          , d = a.alignInside
                          , f = document.body
                          , p = f.clientHeight
                          , m = f.clientWidth
                          , v = e.getBoundingClientRect()
                          , h = v.width
                          , y = v.height
                          , b = i + 40
                          , g = b > m - h - 5
                          , E = d ? Math.round(s - h - n) : Math.round((g ? i - h - 50 : b) - n)
                          , w = Math.round((c > p / 2 ? Math.min(u + 50, p - 5) - y : c - 50) - r);
                        this.arrowParent.style.padding = g ? "0px 12px 0px 0px" : "0px 0px 0px 12px",
                        this.arrow.classList.remove(g ? "ow-arrow-left" : "ow-arrow-right"),
                        this.arrow.classList.add(g ? "ow-arrow-right" : "ow-arrow-left"),
                        this.arrow.style.top = "".concat(Math.round(u - w - r - 10), "px"),
                        E === this.state.overlayX && w === this.state.overlayY && h === this.state.overlayWidth && y === this.state.overlayHeight || this.setState({
                            overlayX: E,
                            overlayY: w,
                            overlayWidth: h,
                            overlayHeight: y
                        })
                    }
                }
            }, {
                key: "renderInfo",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.event
                      , o = void 0 === n ? {} : n
                      , a = o.alarm
                      , i = o.attendees
                      , l = o.location
                      , s = o.organizer
                      , c = t.calendar;
                    return r.createElement("div", {
                        className: "ow-calendar-EventPreview-info"
                    }, r.createElement("div", {
                        role: b.HB.PRESENTATION,
                        className: "ow-calendar-EventPreview-item ow-calendar-EventPreview-calendar",
                        onClick: function() {
                            return e.handleEdit()
                        }
                    }, r.createElement("div", {
                        className: "ow-calendar-EventPreview-item-label"
                    }, r.createElement(u.Z, {
                        name: "calendar"
                    })), r.createElement("div", {
                        className: "ow-calendar-EventPreview-item-field",
                        title: unescape(null === c || void 0 === c ? void 0 : c.name)
                    }, r.createElement("span", null, unescape(null === c || void 0 === c ? void 0 : c.name)))), a && r.createElement("div", {
                        role: b.HB.PRESENTATION,
                        className: "ow-calendar-EventPreview-item ow-calendar-EventPreview-alarm",
                        onClick: function() {
                            return e.handleEdit()
                        }
                    }, r.createElement("div", {
                        className: "ow-calendar-EventPreview-item-label"
                    }, r.createElement(u.Z, {
                        name: "reminders"
                    })), r.createElement("div", {
                        className: "ow-calendar-EventPreview-item-field"
                    }, this.getAlarmText(a))), this.state.spinner ? r.createElement(d.Z, {
                        className: "ow-adv-spinner"
                    }) : "", i && i.length > 0 && r.createElement("div", {
                        role: b.HB.PRESENTATION,
                        className: "ow-calendar-EventPreview-item attendee",
                        onClick: function() {
                            return e.handleEdit()
                        }
                    }, r.createElement("div", {
                        className: "ow-calendar-EventPreview-item-label"
                    }, r.createElement(u.Z, {
                        name: "user"
                    })), r.createElement("div", {
                        className: "ow-calendar-EventPreview-item-field"
                    }, r.createElement("div", {
                        className: "ow-calendar-EventPreview-attendees-info"
                    }, s && r.createElement("div", {
                        className: "ow-calendar-EventPreview-organizer"
                    }, r.createElement("div", {
                        className: "organizer-name"
                    }, s.commonName || s.address, " (", (0,
                    p.hT)("organizer"), ")"), s.commonName && r.createElement("div", {
                        className: "organizer-address"
                    }, s.address)), r.createElement("span", null, this.getAttendeeText(i))))), l && r.createElement("div", {
                        role: b.HB.PRESENTATION,
                        className: "ow-calendar-EventPreview-item ow-calendar-EventPreview-location",
                        onClick: function() {
                            return e.handleEdit()
                        }
                    }, r.createElement("div", {
                        className: "ow-calendar-EventPreview-item-label"
                    }, r.createElement(u.Z, {
                        name: "location-calendar"
                    })), r.createElement("div", {
                        className: "ow-calendar-EventPreview-item-field"
                    }, r.createElement("span", null, l))))
                }
            }, {
                key: "renderToolbar",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.event
                      , o = t.invited
                      , a = t.attendeeStatus
                      , i = t.readOnly
                      , l = t.color
                      , s = (0,
                    f.EmB)() ? {
                        backgroundColor: l
                    } : {};
                    return r.createElement("div", {
                        className: "ow-calendar-EventPreview-toolbar-container",
                        style: s
                    }, r.createElement(c.Z, {
                        className: "ow-calendar-EventPreview-toolbar",
                        role: b.HB.BUTTON
                    }, r.createElement(c.Z.Button, {
                        iconName: "left",
                        className: "ow-calendar-EventPreview-close",
                        onClick: function() {
                            return e.handleHide()
                        }
                    }), o && r.createElement(c.Z.Button, {
                        className: "ow-calendar-attendStatus ow-calendar-attendStatus-accept".concat("accepted" === a ? " ow-calendar-attendStatus-selected" : ""),
                        iconName: "accepted",
                        onClick: function() {
                            return e.handleRSVP("accepted")
                        }
                    }, r.createElement("span", {
                        className: "ow-button-text"
                    }, "accepted" === a ? (0,
                    m.t)("calendar.editorView.attendee.status.accepted") : (0,
                    m.t)("calendar.editorView.attendee.status.accept"))), o && r.createElement(c.Z.Button, {
                        className: "ow-calendar-attendStatus ow-calendar-attendStatus-tentative".concat("tentative" === a ? " ow-calendar-attendStatus-selected" : ""),
                        iconName: "tentative",
                        onClick: function() {
                            return e.handleRSVP("tentative")
                        }
                    }, r.createElement("span", {
                        className: "ow-button-text"
                    }, (0,
                    m.t)("calendar.editorView.attendee.status.tentative"))), o && r.createElement(c.Z.Button, {
                        className: "ow-calendar-attendStatus ow-calendar-attendStatus-decline".concat("declined" === a ? " ow-calendar-attendStatus-selected" : ""),
                        iconName: "declined",
                        onClick: function() {
                            return e.handleRSVP("declined")
                        }
                    }, r.createElement("span", {
                        className: "ow-button-text"
                    }, "declined" === a ? (0,
                    m.t)("calendar.editorView.attendee.status.declined") : (0,
                    m.t)("calendar.editorView.attendee.status.decline"))), r.createElement("div", {
                        className: "ow-spacing"
                    }), !i && r.createElement(c.Z.Button, {
                        iconName: "edit",
                        className: "ow-calendar-EventPreview-edit",
                        onClick: function() {
                            return e.handleEdit()
                        },
                        "aria-label": (0,
                        m.t)("common.EDIT")
                    }), !i && r.createElement(c.Z.Button, {
                        iconName: "trash",
                        className: "ow-calendar-EventPreview-delete",
                        onClick: function() {
                            e.triggerSpinner(),
                            e.props.onDelete(n, e.resetSpinner)
                        },
                        "aria-label": (0,
                        m.t)("common.DELETE"),
                        onKeyDown: function(t) {
                            if (t.key !== b.BY.TABKEY) {
                                if (t.key !== b.BY.ENTERKEY)
                                    return;
                                e.triggerSpinner(),
                                e.props.onDelete(n, e.resetSpinner),
                                setTimeout(function() {
                                    (0,
                                    g.kW)(".ow-confirmDialog button")
                                }, 50)
                            }
                            t.shiftKey ? t.stopPropagation() : (t.preventDefault(),
                            (0,
                            g.kW)(".ow-calendar-EventPreview-header .ow-icon-close"))
                        }
                    })))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.event
                      , o = t.timeInfo
                      , a = t.color
                      , l = t.placement
                      , s = n || {}
                      , c = s.summary
                      , d = s.description
                      , p = this.state
                      , m = p.overlayX
                      , h = p.overlayY
                      , y = !(0,
                    f.EmB)()
                      , w = (0,
                    f.i7g)() || (0,
                    f.G6W)() ? "ellipsis-overflow" : "scroll-overflow"
                      , S = (0,
                    v.Z)("calendar.CATEGORY_OPTIONS")
                      , O = n && n.categories && S.find(function(e) {
                        return e.toUpperCase() === n.categories
                    });
                    return r.createElement("div", {
                        className: "ow-calendar-EventPreview-target",
                        style: {
                            top: "".concat(h, "px"),
                            left: "".concat(m, "px"),
                            visibility: n ? "visible" : "hidden"
                        },
                        ref: function(t) {
                            e.container = t
                        }
                    }, n && r.createElement(i(), {
                        className: "ow-calendar-EventPreview-overlay",
                        show: !0,
                        shouldUpdatePosition: !0,
                        target: this.container,
                        container: this.container,
                        placement: l,
                        rootClose: y,
                        onHide: function() {
                            e.handleHide()
                        },
                        onEnter: function() {
                            e.updatePosition()
                        },
                        ref: function(t) {
                            e.overlay = t
                        }
                    }, r.createElement("div", {
                        className: "ow-calendar-EventPreview",
                        ref: function(t) {
                            e.arrowParent = t
                        },
                        role: b.HB.DOCUMENT
                    }, r.createElement("div", {
                        className: "ow-arrow-left",
                        ref: function(t) {
                            e.arrow = t
                        }
                    }, r.createElement("div", {
                        className: "ow-arrow-inner"
                    })), r.createElement("div", {
                        className: "ow-calendar-EventPreview-inner",
                        onKeyDown: function(t) {
                            t.key === b.BY.ESCAPEKEY && (t.preventDefault(),
                            e.handleHide(),
                            (0,
                            g.kW)("#calendarToolbarNewEventBtn"))
                        }
                    }, r.createElement("div", {
                        className: "ow-calendar-EventPreview-header",
                        style: {
                            backgroundColor: a
                        }
                    }, r.createElement("span", {
                        role: b.HB.PRESENTATION,
                        className: "ow-calendar-EventPreview-headerInfo",
                        onClick: function() {
                            return e.handleEdit()
                        }
                    }, o), r.createElement(u.Z, {
                        name: "close",
                        id: "ow-calendar-preview-close",
                        role: b.HB.BUTTON,
                        "aria-label": "close",
                        onClick: function() {
                            return e.handleHide()
                        },
                        onKeyDown: function(t) {
                            if (1 !== document.querySelectorAll(".ow-calendar-EventPreview-toolbar button:not([disabled])").length || t.key !== b.BY.TABKEY)
                                return t.key !== b.BY.TABKEY ? t.key === b.BY.ENTERKEY ? (e.handleHide(),
                                void (0,
                                g.kW)("#calendarToolbarNewEventBtn")) : void 0 : void (t.shiftKey ? (t.preventDefault(),
                                (0,
                                g.kW)(".ow-calendar-EventPreview-toolbar .ow-calendar-EventPreview-delete")) : t.stopPropagation());
                            t.preventDefault()
                        }
                    })), r.createElement("div", {
                        className: "ow-calendar-EventPreview-content",
                        role: b.HB.REGION
                    }, r.createElement("div", {
                        className: "ow-calendar-EventPreview-content-title"
                    }, r.createElement(u.Z, {
                        className: "ow-calendar-EventPreview-category",
                        name: n.categories ? "calendar-".concat(n.categories.toLowerCase()) : "",
                        title: O || ""
                    }), r.createElement("div", {
                        className: "ow-calendar-EventPreview-content-desc"
                    }, r.createElement("div", {
                        className: "ow-calendar-EventPreview-content-desc-summary"
                    }, r.createElement("span", {
                        role: b.HB.PRESENTATION,
                        onClick: function() {
                            return e.handleEdit()
                        },
                        className: "ow-calendar-EventPreview-summary"
                    }, c)), r.createElement("div", {
                        role: b.HB.PRESENTATION,
                        onClick: function() {
                            return e.handleEdit()
                        },
                        className: "ow-calendar-EventPreview-desc ".concat(w)
                    }, d && d.split("\r").map(function(e) {
                        return r.createElement("span", {
                            dangerouslySetInnerHTML: {
                                __html: (0,
                                E.hG)(e)
                            }
                        })
                    })))), this.renderInfo()), this.renderToolbar()))))
                }
            }]),
            n
        }();
        N.defaultProps = {
            event: void 0,
            timeInfo: "",
            color: "transparent",
            mouseX: 0,
            targetRect: {},
            alignInside: !1,
            calendar: null,
            invited: !1,
            attendeeStatus: "",
            placement: "bottom",
            readOnly: !1,
            visible: !1,
            onEdit: function() {},
            updateRSVP: function() {},
            onClearSelection: function() {},
            onDelete: function() {}
        },
        N.propTypes = {
            event: s().shape({
                summary: s().string,
                startTime: s().string,
                endTime: s().string,
                allDay: s().bool
            }),
            color: s().string,
            timeInfo: s().string,
            mouseX: s().number,
            alignInside: s().bool,
            targetRect: s().shape(s().object),
            calendar: s().shape(s().object),
            attendeeStatus: s().string,
            placement: s().string,
            readOnly: s().bool,
            visible: s().bool,
            onEdit: s().func,
            updateRSVP: s().func,
            onClearSelection: s().func,
            invited: s().bool,
            onDelete: s().func
        }
    },
    73897: function(e) {
        e.exports = function(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    63405: function(e, t, n) {
        var r = n(73897);
        e.exports = function(e) {
            if (Array.isArray(e))
                return r(e)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    66115: function(e) {
        e.exports = function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    56690: function(e) {
        e.exports = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    89728: function(e, t, n) {
        var r = n(64062);
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, r(o.key), o)
            }
        }
        e.exports = function(e, t, n) {
            return t && o(e.prototype, t),
            n && o(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    26389: function(e, t, n) {
        var r = n(73808)
          , o = n(69617)
          , a = n(94993);
        e.exports = function(e) {
            var t = o();
            return function() {
                var n, o = r(e);
                if (t) {
                    var i = r(this).constructor;
                    n = Reflect.construct(o, arguments, i)
                } else
                    n = o.apply(this, arguments);
                return a(this, n)
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    38416: function(e, t, n) {
        var r = n(64062);
        e.exports = function(e, t, n) {
            return (t = r(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    73808: function(e) {
        function t(n) {
            return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports,
            t(n)
        }
        e.exports = t,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    61655: function(e, t, n) {
        var r = n(6015);
        e.exports = function(e, t) {
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
            t && r(e, t)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    75263: function(e, t, n) {
        var r = n(18698).default;
        function o(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (o = function(e) {
                return e ? n : t
            }
            )(e)
        }
        e.exports = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" !== r(e) && "function" != typeof e)
                return {
                    default: e
                };
            var n = o(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var l in e)
                if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, l) : null;
                    s && (s.get || s.set) ? Object.defineProperty(a, l, s) : a[l] = e[l]
                }
            return a.default = e,
            n && n.set(e, a),
            a
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    69617: function(e) {
        e.exports = function() {
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
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    79498: function(e) {
        e.exports = function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    42281: function(e) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    42122: function(e, t, n) {
        var r = n(38416);
        function o(e, t) {
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
        e.exports = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    r(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    70215: function(e, t, n) {
        var r = n(7071);
        e.exports = function(e, t) {
            if (null == e)
                return {};
            var n, o, a = r(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                    n = i[o],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    7071: function(e) {
        e.exports = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    94993: function(e, t, n) {
        var r = n(18698).default
          , o = n(66115);
        e.exports = function(e, t) {
            if (t && ("object" === r(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return o(e)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    6015: function(e) {
        function t(n, r) {
            return e.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports,
            t(n, r)
        }
        e.exports = t,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    861: function(e, t, n) {
        var r = n(63405)
          , o = n(79498)
          , a = n(86116)
          , i = n(42281);
        e.exports = function(e) {
            return r(e) || o(e) || a(e) || i()
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    95036: function(e, t, n) {
        var r = n(18698).default;
        e.exports = function(e, t) {
            if ("object" !== r(e) || null === e)
                return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" !== r(o))
                    return o;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    64062: function(e, t, n) {
        var r = n(18698).default
          , o = n(95036);
        e.exports = function(e) {
            var t = o(e, "string");
            return "symbol" === r(t) ? t : String(t)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    86116: function(e, t, n) {
        var r = n(73897);
        e.exports = function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    30907: function(e, t, n) {
        "use strict";
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    83878: function(e, t, n) {
        "use strict";
        function r(e) {
            if (Array.isArray(e))
                return e
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    59199: function(e, t, n) {
        "use strict";
        function r(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    25267: function(e, t, n) {
        "use strict";
        function r() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    1413: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var r = n(4942);
        function o(e, t) {
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
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
    },
    29439: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(83878);
        var o = n(40181)
          , a = n(25267);
        function i(e, t) {
            return (0,
            r.Z)(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, a, i, l = [], s = !0, c = !1;
                    try {
                        if (a = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            s = !1
                        } else
                            for (; !(s = (r = a.call(n)).done) && (l.push(r.value),
                            l.length !== t); s = !0)
                                ;
                    } catch (e) {
                        c = !0,
                        o = e
                    } finally {
                        try {
                            if (!s && null != n.return && (i = n.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (c)
                                throw o
                        }
                    }
                    return l
                }
            }(e, t) || (0,
            o.Z)(e, t) || (0,
            a.Z)()
        }
    },
    93433: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(30907);
        var o = n(59199)
          , a = n(40181);
        function i(e) {
            return function(e) {
                if (Array.isArray(e))
                    return (0,
                    r.Z)(e)
            }(e) || (0,
            o.Z)(e) || (0,
            a.Z)(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    },
    40181: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(30907);
        function o(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return (0,
                    r.Z)(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0,
                r.Z)(e, t) : void 0
            }
        }
    }
}]);
