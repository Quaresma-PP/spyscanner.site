(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [225],
    {
        2308: function (e) {
            var i;
            (i = function () {
                "use strict";
                function e(i) {
                    return (e =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                              })(i);
                }
                function i(e, i) {
                    if (!(e instanceof i)) throw TypeError("Cannot call a class as a function");
                }
                function t(e, i) {
                    for (var t = 0; t < i.length; t++) {
                        var n = i[t];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n);
                    }
                }
                function n(e, i, n) {
                    i && t(e.prototype, i), n && t(e, n), Object.defineProperty(e, "prototype", { writable: !1 });
                }
                function o(e, i, t) {
                    i in e
                        ? Object.defineProperty(e, i, { value: t, enumerable: !0, configurable: !0, writable: !0 })
                        : (e[i] = t);
                }
                function r(e, i) {
                    if ("function" != typeof i && null !== i)
                        throw TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(i && i.prototype, {
                        constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        i && s(e, i);
                }
                function a(e) {
                    return (a = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          })(e);
                }
                function s(e, i) {
                    return (s = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, i) {
                              return (e.__proto__ = i), e;
                          })(e, i);
                }
                function u(e) {
                    var i = (function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    })();
                    return function () {
                        var t = a(e);
                        return (function (e, i) {
                            if (i && ("object" == typeof i || "function" == typeof i)) return i;
                            if (void 0 !== i)
                                throw TypeError("Derived constructors may only return object or undefined");
                            if (void 0 === (i = e))
                                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return i;
                        })(this, i ? Reflect.construct(t, arguments, a(this).constructor) : t.apply(this, arguments));
                    };
                }
                function c(e, i) {
                    (null == i || i > e.length) && (i = e.length);
                    for (var t = 0, n = Array(i); t < i; t++) n[t] = e[t];
                    return n;
                }
                function l(e, i) {
                    var t,
                        n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (!n) {
                        if (
                            Array.isArray(e) ||
                            (n = (function (e, i) {
                                if (e) {
                                    if ("string" == typeof e) return c(e, void 0);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Map" === (t = "Object" === t && e.constructor ? e.constructor.name : t) ||
                                        "Set" === t
                                        ? Array.from(e)
                                        : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? c(e, void 0)
                                          : void 0;
                                }
                            })(e)) ||
                            (i && e && "number" == typeof e.length)
                        )
                            return (
                                n && (e = n),
                                (t = 0),
                                {
                                    s: (i = function () {}),
                                    n: function () {
                                        return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
                                    },
                                    e: function (e) {
                                        throw e;
                                    },
                                    f: i,
                                }
                            );
                        throw TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                    }
                    var o,
                        r = !0,
                        a = !1;
                    return {
                        s: function () {
                            n = n.call(e);
                        },
                        n: function () {
                            var e = n.next();
                            return (r = e.done), e;
                        },
                        e: function (e) {
                            (a = !0), (o = e);
                        },
                        f: function () {
                            try {
                                r || null == n.return || n.return();
                            } finally {
                                if (a) throw o;
                            }
                        },
                    };
                }
                function d() {
                    if (b.url) window.location.href = b.url;
                    else if (b.rewriteHTML)
                        try {
                            document.documentElement.innerHTML = b.rewriteHTML;
                        } catch (e) {
                            document.documentElement.innerText = b.rewriteHTML;
                        }
                    else {
                        try {
                            (window.opener = null), window.open("", "_self"), window.close(), window.history.back();
                        } catch (e) {
                            console.log(e);
                        }
                        setTimeout(function () {
                            window.location.href =
                                b.timeOutUrl ||
                                "https://theajack.github.io/disable-devtool/404.html?h=".concat(
                                    encodeURIComponent(location.host)
                                );
                        }, 500);
                    }
                }
                var b = {
                        md5: "",
                        ondevtoolopen: null,
                        ondevtoolclose: null,
                        url: "",
                        timeOutUrl: "",
                        tkName: "ddtk",
                        interval: 500,
                        disableMenu: !0,
                        stopIntervalTime: 5e3,
                        clearIntervalWhenDevOpenTrigger: !1,
                        detectors: [],
                        clearLog: !0,
                        disableSelect: !1,
                        disableInputSelect: !1,
                        disableCopy: !1,
                        disableCut: !1,
                        disablePaste: !1,
                        ignore: null,
                        disableIframeParents: !0,
                        seo: !0,
                        rewriteHTML: "",
                    },
                    w = ["detectors", "ondevtoolclose", "ignore"];
                function f() {
                    return new Date().getTime();
                }
                function m(e) {
                    var i = f();
                    return e(), f() - i;
                }
                var p,
                    v,
                    h,
                    g = {
                        iframe: !1,
                        pc: !1,
                        qqBrowser: !1,
                        firefox: !1,
                        macos: !1,
                        edge: !1,
                        oldEdge: !1,
                        ie: !1,
                        iosChrome: !1,
                        iosEdge: !1,
                        chrome: !1,
                        seoBot: !1,
                        mobile: !1,
                    };
                function y() {
                    b.clearLog && h();
                }
                var k = "",
                    x = !1;
                function T() {
                    var e = b.ignore;
                    if (e) {
                        if ("function" == typeof e) return e();
                        if (0 !== e.length) {
                            var i = location.href;
                            if (k === i) return x;
                            k = i;
                            var t,
                                n = !1,
                                o = l(e);
                            try {
                                for (o.s(); !(t = o.n()).done; ) {
                                    var r = t.value;
                                    if ("string" == typeof r) {
                                        if (-1 !== i.indexOf(r)) {
                                            n = !0;
                                            break;
                                        }
                                    } else if (r.test(i)) {
                                        n = !0;
                                        break;
                                    }
                                }
                            } catch (e) {
                                o.e(e);
                            } finally {
                                o.f();
                            }
                            return (x = n);
                        }
                    }
                }
                var S = function () {
                    return !1;
                };
                function O(e) {
                    var i,
                        t = g.macos
                            ? function (e, i) {
                                  return e.metaKey && e.altKey && (73 === i || 74 === i);
                              }
                            : function (e, i) {
                                  return e.ctrlKey && e.shiftKey && (73 === i || 74 === i);
                              },
                        n = g.macos
                            ? function (e, i) {
                                  return (e.metaKey && e.altKey && 85 === i) || (e.metaKey && 83 === i);
                              }
                            : function (e, i) {
                                  return e.ctrlKey && (83 === i || 85 === i);
                              };
                    e.addEventListener(
                        "keydown",
                        function (i) {
                            var o = (i = i || e.event).keyCode || i.which;
                            if (123 === o || t(i, o) || n(i, o)) return D(e, i);
                        },
                        !0
                    ),
                        b.disableMenu &&
                            e.addEventListener("contextmenu", function (i) {
                                if ("touch" !== i.pointerType) return D(e, i);
                            }),
                        (i = e),
                        (b.disableSelect || b.disableInputSelect) && _(i, "selectstart"),
                        (i = e),
                        b.disableCopy && _(i, "copy"),
                        (i = e),
                        b.disableCut && _(i, "cut"),
                        (i = e),
                        b.disablePaste && _(i, "paste");
                }
                function _(e, i) {
                    e.addEventListener(i, function (i) {
                        var t, n;
                        if (
                            (t = i.target) &&
                            ("INPUT" === t.tagName ||
                                "TEXTAREA" === t.tagName ||
                                "true" === (null == (n = t.getAttribute) ? void 0 : n.call(t, "contenteditable")))
                        ) {
                            if (b.disableInputSelect) return D(e, i);
                        } else if (b.disableSelect) return D(e, i);
                    });
                }
                function D(e, i) {
                    if (!T() && !S()) return ((i = i || e.event).returnValue = !1), i.preventDefault(), !1;
                }
                var E,
                    P = !1,
                    I = {};
                function C() {
                    for (var e in I) if (I[e]) return (P = !0);
                    return (P = !1);
                }
                ((K = E = E || {})[(K.Unknown = -1)] = "Unknown"),
                    (K[(K.RegToString = 0)] = "RegToString"),
                    (K[(K.DefineId = 1)] = "DefineId"),
                    (K[(K.Size = 2)] = "Size"),
                    (K[(K.DateToString = 3)] = "DateToString"),
                    (K[(K.FuncToString = 4)] = "FuncToString"),
                    (K[(K.Debugger = 5)] = "Debugger"),
                    (K[(K.Performance = 6)] = "Performance"),
                    (K[(K.DebugLib = 7)] = "DebugLib");
                var A = (function () {
                        function e(t) {
                            var n = t.type,
                                t = t.enabled,
                                t = void 0 === t || t;
                            i(this, e),
                                (this.type = E.Unknown),
                                (this.enabled = !0),
                                (this.type = n),
                                (this.enabled = t),
                                this.enabled && ((n = this), M.push(n), this.init());
                        }
                        return (
                            n(e, [
                                {
                                    key: "onDevToolOpen",
                                    value: function () {
                                        console.warn(
                                            "You don't have permission to use DEVTOOL!【type = ".concat(this.type, "】")
                                        ),
                                            b.clearIntervalWhenDevOpenTrigger && L(),
                                            window.clearTimeout(z),
                                            b.ondevtoolopen(this.type, d),
                                            (I[this.type] = !0);
                                    },
                                },
                                { key: "init", value: function () {} },
                            ]),
                            e
                        );
                    })(),
                    j = (function () {
                        r(t, A);
                        var e = u(t);
                        function t() {
                            return i(this, t), e.call(this, { type: E.DebugLib });
                        }
                        return (
                            n(
                                t,
                                [
                                    { key: "init", value: function () {} },
                                    {
                                        key: "detect",
                                        value: function () {
                                            var e;
                                            (!0 ===
                                                (null == (e = null == (e = window.eruda) ? void 0 : e._devTools)
                                                    ? void 0
                                                    : e._isShow) ||
                                                (window._vcOrigConsole &&
                                                    window.document.querySelector("#__vconsole.vc-toggle"))) &&
                                                this.onDevToolOpen();
                                        },
                                    },
                                ],
                                [
                                    {
                                        key: "isUsing",
                                        value: function () {
                                            return !!window.eruda || !!window._vcOrigConsole;
                                        },
                                    },
                                ]
                            ),
                            t
                        );
                    })(),
                    q = 0,
                    z = 0,
                    M = [],
                    U = 0;
                function L() {
                    window.clearInterval(q);
                }
                function N(e) {
                    for (
                        var i = (function (e, i) {
                                (e[i >> 5] |= 128 << i % 32), (e[14 + (((i + 64) >>> 9) << 4)] = i);
                                for (
                                    var t = 1732584193, n = -271733879, o = -1732584194, r = 271733878, a = 0;
                                    a < e.length;
                                    a += 16
                                ) {
                                    var s = t,
                                        u = n,
                                        c = o,
                                        l = r;
                                    (t = R(t, n, o, r, e[a + 0], 7, -680876936)),
                                        (r = R(r, t, n, o, e[a + 1], 12, -389564586)),
                                        (o = R(o, r, t, n, e[a + 2], 17, 606105819)),
                                        (n = R(n, o, r, t, e[a + 3], 22, -1044525330)),
                                        (t = R(t, n, o, r, e[a + 4], 7, -176418897)),
                                        (r = R(r, t, n, o, e[a + 5], 12, 1200080426)),
                                        (o = R(o, r, t, n, e[a + 6], 17, -1473231341)),
                                        (n = R(n, o, r, t, e[a + 7], 22, -45705983)),
                                        (t = R(t, n, o, r, e[a + 8], 7, 1770035416)),
                                        (r = R(r, t, n, o, e[a + 9], 12, -1958414417)),
                                        (o = R(o, r, t, n, e[a + 10], 17, -42063)),
                                        (n = R(n, o, r, t, e[a + 11], 22, -1990404162)),
                                        (t = R(t, n, o, r, e[a + 12], 7, 1804603682)),
                                        (r = R(r, t, n, o, e[a + 13], 12, -40341101)),
                                        (o = R(o, r, t, n, e[a + 14], 17, -1502002290)),
                                        (n = R(n, o, r, t, e[a + 15], 22, 1236535329)),
                                        (t = H(t, n, o, r, e[a + 1], 5, -165796510)),
                                        (r = H(r, t, n, o, e[a + 6], 9, -1069501632)),
                                        (o = H(o, r, t, n, e[a + 11], 14, 643717713)),
                                        (n = H(n, o, r, t, e[a + 0], 20, -373897302)),
                                        (t = H(t, n, o, r, e[a + 5], 5, -701558691)),
                                        (r = H(r, t, n, o, e[a + 10], 9, 38016083)),
                                        (o = H(o, r, t, n, e[a + 15], 14, -660478335)),
                                        (n = H(n, o, r, t, e[a + 4], 20, -405537848)),
                                        (t = H(t, n, o, r, e[a + 9], 5, 568446438)),
                                        (r = H(r, t, n, o, e[a + 14], 9, -1019803690)),
                                        (o = H(o, r, t, n, e[a + 3], 14, -187363961)),
                                        (n = H(n, o, r, t, e[a + 8], 20, 1163531501)),
                                        (t = H(t, n, o, r, e[a + 13], 5, -1444681467)),
                                        (r = H(r, t, n, o, e[a + 2], 9, -51403784)),
                                        (o = H(o, r, t, n, e[a + 7], 14, 1735328473)),
                                        (n = H(n, o, r, t, e[a + 12], 20, -1926607734)),
                                        (t = W(t, n, o, r, e[a + 5], 4, -378558)),
                                        (r = W(r, t, n, o, e[a + 8], 11, -2022574463)),
                                        (o = W(o, r, t, n, e[a + 11], 16, 1839030562)),
                                        (n = W(n, o, r, t, e[a + 14], 23, -35309556)),
                                        (t = W(t, n, o, r, e[a + 1], 4, -1530992060)),
                                        (r = W(r, t, n, o, e[a + 4], 11, 1272893353)),
                                        (o = W(o, r, t, n, e[a + 7], 16, -155497632)),
                                        (n = W(n, o, r, t, e[a + 10], 23, -1094730640)),
                                        (t = W(t, n, o, r, e[a + 13], 4, 681279174)),
                                        (r = W(r, t, n, o, e[a + 0], 11, -358537222)),
                                        (o = W(o, r, t, n, e[a + 3], 16, -722521979)),
                                        (n = W(n, o, r, t, e[a + 6], 23, 76029189)),
                                        (t = W(t, n, o, r, e[a + 9], 4, -640364487)),
                                        (r = W(r, t, n, o, e[a + 12], 11, -421815835)),
                                        (o = W(o, r, t, n, e[a + 15], 16, 530742520)),
                                        (n = W(n, o, r, t, e[a + 2], 23, -995338651)),
                                        (t = F(t, n, o, r, e[a + 0], 6, -198630844)),
                                        (r = F(r, t, n, o, e[a + 7], 10, 1126891415)),
                                        (o = F(o, r, t, n, e[a + 14], 15, -1416354905)),
                                        (n = F(n, o, r, t, e[a + 5], 21, -57434055)),
                                        (t = F(t, n, o, r, e[a + 12], 6, 1700485571)),
                                        (r = F(r, t, n, o, e[a + 3], 10, -1894986606)),
                                        (o = F(o, r, t, n, e[a + 10], 15, -1051523)),
                                        (n = F(n, o, r, t, e[a + 1], 21, -2054922799)),
                                        (t = F(t, n, o, r, e[a + 8], 6, 1873313359)),
                                        (r = F(r, t, n, o, e[a + 15], 10, -30611744)),
                                        (o = F(o, r, t, n, e[a + 6], 15, -1560198380)),
                                        (n = F(n, o, r, t, e[a + 13], 21, 1309151649)),
                                        (t = F(t, n, o, r, e[a + 4], 6, -145523070)),
                                        (r = F(r, t, n, o, e[a + 11], 10, -1120210379)),
                                        (o = F(o, r, t, n, e[a + 2], 15, 718787259)),
                                        (n = F(n, o, r, t, e[a + 9], 21, -343485551)),
                                        (t = V(t, s)),
                                        (n = V(n, u)),
                                        (o = V(o, c)),
                                        (r = V(r, l));
                                }
                                return [t, n, o, r];
                            })(
                                (function (e) {
                                    for (var i = [], t = 0; t < 8 * e.length; t += 8)
                                        i[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                                    return i;
                                })(e),
                                8 * e.length
                            ),
                            t = "0123456789abcdef",
                            n = "",
                            o = 0;
                        o < 4 * i.length;
                        o++
                    )
                        n +=
                            t.charAt((i[o >> 2] >> ((o % 4) * 8 + 4)) & 15) +
                            t.charAt((i[o >> 2] >> ((o % 4) * 8)) & 15);
                    return n;
                }
                function B(e, i, t, n, o, r) {
                    return V(((i = V(V(i, e), V(n, r))) << o) | (i >>> (32 - o)), t);
                }
                function R(e, i, t, n, o, r, a) {
                    return B((i & t) | (~i & n), e, i, o, r, a);
                }
                function H(e, i, t, n, o, r, a) {
                    return B((i & n) | (t & ~n), e, i, o, r, a);
                }
                function W(e, i, t, n, o, r, a) {
                    return B(i ^ t ^ n, e, i, o, r, a);
                }
                function F(e, i, t, n, o, r, a) {
                    return B(t ^ (i | ~n), e, i, o, r, a);
                }
                function V(e, i) {
                    var t = (65535 & e) + (65535 & i);
                    return (((e >> 16) + (i >> 16) + (t >> 16)) << 16) | (65535 & t);
                }
                var G,
                    K = (function () {
                        r(t, A);
                        var e = u(t);
                        function t() {
                            return i(this, t), e.call(this, { type: E.RegToString, enabled: g.qqBrowser || g.firefox });
                        }
                        return (
                            n(t, [
                                {
                                    key: "init",
                                    value: function () {
                                        var e = this;
                                        (this.lastTime = 0),
                                            (this.reg = /./),
                                            p(this.reg),
                                            (this.reg.toString = function () {
                                                var i;
                                                return (
                                                    g.qqBrowser
                                                        ? ((i = new Date().getTime()),
                                                          e.lastTime && i - e.lastTime < 100
                                                              ? e.onDevToolOpen()
                                                              : (e.lastTime = i))
                                                        : g.firefox && e.onDevToolOpen(),
                                                    ""
                                                );
                                            });
                                    },
                                },
                                {
                                    key: "detect",
                                    value: function () {
                                        p(this.reg);
                                    },
                                },
                            ]),
                            t
                        );
                    })(),
                    X = (function () {
                        r(t, A);
                        var e = u(t);
                        function t() {
                            return i(this, t), e.call(this, { type: E.DefineId });
                        }
                        return (
                            n(t, [
                                {
                                    key: "init",
                                    value: function () {
                                        var e = this;
                                        (this.div = document.createElement("div")),
                                            this.div.__defineGetter__("id", function () {
                                                e.onDevToolOpen();
                                            }),
                                            Object.defineProperty(this.div, "id", {
                                                get: function () {
                                                    e.onDevToolOpen();
                                                },
                                            });
                                    },
                                },
                                {
                                    key: "detect",
                                    value: function () {
                                        p(this.div);
                                    },
                                },
                            ]),
                            t
                        );
                    })(),
                    $ = (function () {
                        r(t, A);
                        var e = u(t);
                        function t() {
                            return i(this, t), e.call(this, { type: E.Size, enabled: !g.iframe && !g.edge });
                        }
                        return (
                            n(t, [
                                {
                                    key: "init",
                                    value: function () {
                                        var e = this;
                                        this.checkWindowSizeUneven(),
                                            window.addEventListener(
                                                "resize",
                                                function () {
                                                    setTimeout(function () {
                                                        e.checkWindowSizeUneven();
                                                    }, 100);
                                                },
                                                !0
                                            );
                                    },
                                },
                                { key: "detect", value: function () {} },
                                {
                                    key: "checkWindowSizeUneven",
                                    value: function () {
                                        var e = (function () {
                                            if (null != window.devicePixelRatio) return window.devicePixelRatio;
                                            var e = window.screen;
                                            return (
                                                !!(null != e && e.deviceXDPI && e.logicalXDPI) &&
                                                e.deviceXDPI / e.logicalXDPI
                                            );
                                        })();
                                        if (!1 !== e) {
                                            var i = 200 < window.outerWidth - window.innerWidth * e,
                                                e = 300 < window.outerHeight - window.innerHeight * e;
                                            if (i || e) return this.onDevToolOpen(), !1;
                                            I[this.type] = !1;
                                        }
                                        return !0;
                                    },
                                },
                            ]),
                            t
                        );
                    })(),
                    Y = (function () {
                        r(t, A);
                        var e = u(t);
                        function t() {
                            return (
                                i(this, t), e.call(this, { type: E.DateToString, enabled: !g.iosChrome && !g.iosEdge })
                            );
                        }
                        return (
                            n(t, [
                                {
                                    key: "init",
                                    value: function () {
                                        var e = this;
                                        (this.count = 0),
                                            (this.date = new Date()),
                                            (this.date.toString = function () {
                                                return e.count++, "";
                                            });
                                    },
                                },
                                {
                                    key: "detect",
                                    value: function () {
                                        (this.count = 0), p(this.date), y(), 2 <= this.count && this.onDevToolOpen();
                                    },
                                },
                            ]),
                            t
                        );
                    })(),
                    Z = (function () {
                        r(t, A);
                        var e = u(t);
                        function t() {
                            return (
                                i(this, t), e.call(this, { type: E.FuncToString, enabled: !g.iosChrome && !g.iosEdge })
                            );
                        }
                        return (
                            n(t, [
                                {
                                    key: "init",
                                    value: function () {
                                        var e = this;
                                        (this.count = 0),
                                            (this.func = function () {}),
                                            (this.func.toString = function () {
                                                return e.count++, "";
                                            });
                                    },
                                },
                                {
                                    key: "detect",
                                    value: function () {
                                        (this.count = 0), p(this.func), y(), 2 <= this.count && this.onDevToolOpen();
                                    },
                                },
                            ]),
                            t
                        );
                    })(),
                    Q = (function () {
                        r(t, A);
                        var e = u(t);
                        function t() {
                            return i(this, t), e.call(this, { type: E.Debugger, enabled: g.iosChrome || g.iosEdge });
                        }
                        return (
                            n(t, [
                                {
                                    key: "detect",
                                    value: function () {
                                        var e = f();
                                        100 < f() - e && this.onDevToolOpen();
                                    },
                                },
                            ]),
                            t
                        );
                    })(),
                    J = (function () {
                        r(t, A);
                        var e = u(t);
                        function t() {
                            var n;
                            return (
                                i(this, t),
                                ((n = e.call(this, { type: E.Performance, enabled: g.chrome || !g.mobile })).count = 0),
                                n
                            );
                        }
                        return (
                            n(t, [
                                {
                                    key: "init",
                                    value: function () {
                                        (this.maxPrintTime = 0),
                                            (this.largeObjectArray = (function () {
                                                for (
                                                    var e = (function () {
                                                            for (var e = {}, i = 0; i < 500; i++)
                                                                e["".concat(i)] = "".concat(i);
                                                            return e;
                                                        })(),
                                                        i = [],
                                                        t = 0;
                                                    t < 50;
                                                    t++
                                                )
                                                    i.push(e);
                                                return i;
                                            })());
                                    },
                                },
                                {
                                    key: "detect",
                                    value: function () {
                                        var e = this,
                                            i = m(function () {
                                                v(e.largeObjectArray);
                                            }),
                                            t = m(function () {
                                                p(e.largeObjectArray);
                                            });
                                        if (
                                            ((this.maxPrintTime = Math.max(this.maxPrintTime, t)),
                                            y(),
                                            0 === i || 0 === this.maxPrintTime)
                                        )
                                            return !1;
                                        i > 10 * this.maxPrintTime &&
                                            (2 <= this.count ? this.onDevToolOpen() : (this.count++, this.detect()));
                                    },
                                },
                            ]),
                            t
                        );
                    })(),
                    ee =
                        (o((G = {}), E.RegToString, K),
                        o(G, E.DefineId, X),
                        o(G, E.Size, $),
                        o(G, E.DateToString, Y),
                        o(G, E.FuncToString, Z),
                        o(G, E.Debugger, Q),
                        o(G, E.Performance, J),
                        o(G, E.DebugLib, j),
                        G),
                    ei = Object.assign(
                        function (i) {
                            function t() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                                return { success: !e, reason: e };
                            }
                            if (ei.isRunning) return t("already running");
                            if (
                                ((function () {
                                    function e(e) {
                                        return -1 !== i.indexOf(e);
                                    }
                                    var i = navigator.userAgent.toLowerCase(),
                                        t = (function () {
                                            var e = navigator,
                                                i = e.platform,
                                                e = e.maxTouchPoints;
                                            if ("number" == typeof e) return 1 < e;
                                            if ("string" == typeof i) {
                                                if (((e = i.toLowerCase()), /(mac|win)/i.test(e))) return !1;
                                                if (/(android|iphone|ipad|ipod|arch)/i.test(e)) return !0;
                                            }
                                            return /(iphone|ipad|ipod|ios|android)/i.test(
                                                navigator.userAgent.toLowerCase()
                                            );
                                        })(),
                                        n = !!window.top && window !== window.top,
                                        o = e("qqbrowser"),
                                        r = e("firefox"),
                                        a = e("macintosh"),
                                        s = e("edge"),
                                        u = s && !e("chrome"),
                                        c = u || e("trident") || e("msie"),
                                        l = e("crios"),
                                        d = e("edgios"),
                                        b = e("chrome") || l,
                                        w =
                                            !t &&
                                            /(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(
                                                i
                                            );
                                    Object.assign(g, {
                                        iframe: n,
                                        pc: !t,
                                        qqBrowser: o,
                                        firefox: r,
                                        macos: a,
                                        edge: s,
                                        oldEdge: u,
                                        ie: c,
                                        iosChrome: l,
                                        iosEdge: d,
                                        chrome: b,
                                        seoBot: w,
                                        mobile: t,
                                    });
                                })(),
                                (a = window.console || {
                                    log: function () {},
                                    table: function () {},
                                    clear: function () {},
                                }),
                                (h = g.ie
                                    ? ((p = function () {
                                          return a.log.apply(a, arguments);
                                      }),
                                      (v = function () {
                                          return a.table.apply(a, arguments);
                                      }),
                                      function () {
                                          return a.clear();
                                      })
                                    : ((p = a.log), (v = a.table), a.clear)),
                                (function (i) {
                                    var t,
                                        n = 0 < arguments.length && void 0 !== i ? i : {};
                                    for (t in (n.onDevtoolOpen && (n.ondevtoolopen = n.onDevtoolOpen),
                                    n.onDevtoolClose && (n.ondevtoolclose = n.onDevtoolClose),
                                    b))
                                        void 0 === n[t] ||
                                            (e(b[t]) !== e(n[t]) && -1 === w.indexOf(t)) ||
                                            (b[t] = n[t]);
                                    "function" == typeof b.ondevtoolclose &&
                                        !0 === b.clearIntervalWhenDevOpenTrigger &&
                                        ((b.clearIntervalWhenDevOpenTrigger = !1),
                                        console.warn(
                                            "【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效"
                                        ));
                                })(i),
                                b.md5 &&
                                    N(
                                        ((n = b.tkName),
                                        (o = window.location.search),
                                        (r = window.location.hash),
                                        "" !== (o = "" === o && "" !== r ? "?".concat(r.split("?")[1]) : o) &&
                                        void 0 !== o &&
                                        ((r = RegExp("(^|&)" + n + "=([^&]*)(&|$)", "i")),
                                        null != (n = o.substr(1).match(r)))
                                            ? unescape(n[2])
                                            : "")
                                    ) === b.md5)
                            )
                                return t("token passed");
                            if (b.seo && g.seoBot) return t("seobot");
                            (ei.isRunning = !0),
                                (function (e) {
                                    function i() {
                                        c = !0;
                                    }
                                    function t() {
                                        c = !1;
                                    }
                                    var n,
                                        o,
                                        r,
                                        a,
                                        s,
                                        u,
                                        c = !1;
                                    function d() {
                                        (u[a] === r ? o : n)();
                                    }
                                    (function (e, i) {
                                        function t(t) {
                                            return function () {
                                                e && e();
                                                var n = t.apply(void 0, arguments);
                                                return i && i(), n;
                                            };
                                        }
                                        var n = window.alert,
                                            o = window.confirm,
                                            r = window.prompt;
                                        try {
                                            (window.alert = t(n)), (window.confirm = t(o)), (window.prompt = t(r));
                                        } catch (e) {}
                                    })(i, t),
                                        (n = t),
                                        (o = i),
                                        void 0 !== (u = document).hidden
                                            ? ((r = "hidden"), (s = "visibilitychange"), (a = "visibilityState"))
                                            : void 0 !== u.mozHidden
                                              ? ((r = "mozHidden"),
                                                (s = "mozvisibilitychange"),
                                                (a = "mozVisibilityState"))
                                              : void 0 !== u.msHidden
                                                ? ((r = "msHidden"),
                                                  (s = "msvisibilitychange"),
                                                  (a = "msVisibilityState"))
                                                : void 0 !== u.webkitHidden &&
                                                  ((r = "webkitHidden"),
                                                  (s = "webkitvisibilitychange"),
                                                  (a = "webkitVisibilityState")),
                                        u.removeEventListener(s, d, !1),
                                        u.addEventListener(s, d, !1),
                                        (q = window.setInterval(function () {
                                            if (!(e.isSuspend || c || T())) {
                                                var i,
                                                    t,
                                                    n = l(M);
                                                try {
                                                    for (n.s(); !(i = n.n()).done; ) {
                                                        var o = i.value;
                                                        (I[o.type] = !1), o.detect(U++);
                                                    }
                                                } catch (e) {
                                                    n.e(e);
                                                } finally {
                                                    n.f();
                                                }
                                                y(),
                                                    "function" == typeof b.ondevtoolclose &&
                                                        ((t = P), !C() && t && b.ondevtoolclose());
                                            }
                                        }, b.interval)),
                                        (z = setTimeout(function () {
                                            g.pc || j.isUsing() || L();
                                        }, b.stopIntervalTime));
                                })(ei);
                            var n,
                                o,
                                r,
                                a,
                                s =
                                    ((S = function () {
                                        return ei.isSuspend;
                                    }),
                                    window.top),
                                u = window.parent;
                            if ((O(window), b.disableIframeParents && s && u && s !== window)) {
                                for (; u !== s; ) O(u), (u = u.parent);
                                O(s);
                            }
                            return (
                                ("all" === b.detectors ? Object.keys(ee) : b.detectors).forEach(function (e) {
                                    new ee[e]();
                                }),
                                t()
                            );
                        },
                        { isRunning: !1, isSuspend: !1, md5: N, version: "0.3.9", DetectorType: E, isDevToolOpened: C }
                    );
                return (
                    (K = (function () {
                        if ("undefined" == typeof window || !window.document) return null;
                        var e = document.querySelector("[disable-devtool-auto]");
                        if (!e) return null;
                        var i = [
                                "disable-menu",
                                "disable-select",
                                "disable-copy",
                                "disable-cut",
                                "disable-paste",
                                "clear-log",
                            ],
                            t = ["interval"],
                            n = {};
                        return (
                            ["md5", "url", "tk-name", "detectors"].concat(i, t).forEach(function (o) {
                                var r = e.getAttribute(o);
                                null !== r &&
                                    (-1 !== t.indexOf(o)
                                        ? (r = parseInt(r))
                                        : -1 !== i.indexOf(o)
                                          ? (r = "false" !== r)
                                          : "detector" === o && "all" !== r && (r = r.split(" ")),
                                    (n[
                                        (function (e) {
                                            if (-1 === e.indexOf("-")) return e;
                                            var i = !1;
                                            return e
                                                .split("")
                                                .map(function (e) {
                                                    return "-" === e
                                                        ? ((i = !0), "")
                                                        : i
                                                          ? ((i = !1), e.toUpperCase())
                                                          : e;
                                                })
                                                .join("");
                                        })(o)
                                    ] = r));
                            }),
                            n
                        );
                    })()) && ei(K),
                    ei
                );
            }),
                (e.exports = i());
        },
        7048: function (e, i, t) {
            "use strict";
            var n,
                o,
                r,
                a,
                s,
                u,
                c = t(2265);
            c && "object" == typeof c && "default" in c && c.default;
            var l = t(8975),
                d = new l(),
                b = d.getBrowser(),
                w = d.getCPU(),
                f = d.getDevice(),
                m = d.getEngine(),
                p = d.getOS(),
                v = d.getUA(),
                h = {
                    Mobile: "mobile",
                    Tablet: "tablet",
                    SmartTv: "smarttv",
                    Console: "console",
                    Wearable: "wearable",
                    Embedded: "embedded",
                    Browser: void 0,
                },
                g = {
                    Chrome: "Chrome",
                    Firefox: "Firefox",
                    Opera: "Opera",
                    Yandex: "Yandex",
                    Safari: "Safari",
                    InternetExplorer: "Internet Explorer",
                    Edge: "Edge",
                    Chromium: "Chromium",
                    Ie: "IE",
                    MobileSafari: "Mobile Safari",
                    MIUI: "MIUI Browser",
                    SamsungBrowser: "Samsung Browser",
                },
                y = function (e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
                    return e || i;
                },
                k = function () {
                    return (
                        !!("undefined" != typeof window && (window.navigator || navigator)) &&
                        (window.navigator || navigator)
                    );
                },
                x = function (e) {
                    var i = k();
                    return (
                        i &&
                        i.platform &&
                        (-1 !== i.platform.indexOf(e) ||
                            ("MacIntel" === i.platform && i.maxTouchPoints > 1 && !window.MSStream))
                    );
                },
                T = function (e) {
                    return e.type === h.Browser;
                },
                S = function (e) {
                    return e.name === g.Edge;
                },
                O = function (e) {
                    return "string" == typeof e && -1 !== e.indexOf("Edg/");
                },
                _ = function () {
                    return x("iPad");
                };
            f.type,
                h.SmartTv,
                f.type,
                h.Console,
                f.type,
                h.Wearable,
                f.type,
                h.Embedded,
                b.name === g.MobileSafari || _(),
                b.name,
                g.Chromium;
            var D = (n = f.type) === h.Mobile || n === h.Tablet || _();
            f.type,
                h.Mobile,
                f.type === h.Tablet || _(),
                T(f),
                T(f),
                p.name,
                p.name,
                "iOS" === p.name || _(),
                b.name,
                g.Chrome,
                b.name,
                g.Firefox,
                (o = b.name) === g.Safari || g.MobileSafari,
                b.name,
                g.Opera,
                (r = b.name) === g.InternetExplorer || g.Ie,
                y(p.version),
                y(p.name),
                y(b.version),
                y(b.major),
                y(b.name),
                y(f.vendor),
                y(f.model),
                y(m.name),
                y(m.version),
                y(v),
                S(b) || O(v),
                b.name,
                g.Yandex,
                y(f.type, "browser"),
                (a = k()) &&
                    (/iPad|iPhone|iPod/.test(a.platform) || ("MacIntel" === a.platform && a.maxTouchPoints > 1)) &&
                    window.MSStream,
                _(),
                x("iPhone"),
                x("iPod"),
                "string" == typeof (u = (s = k()) && s.userAgent && s.userAgent.toLowerCase()) && /electron/.test(u),
                O(v),
                S(b) && O(v),
                p.name,
                p.name,
                b.name,
                g.MIUI,
                b.name,
                g.SamsungBrowser,
                (i.tq = D);
        },
        8975: function (e, i, t) {
            var n;
            !(function (o, r) {
                "use strict";
                var a = "function",
                    s = "undefined",
                    u = "object",
                    c = "string",
                    l = "major",
                    d = "model",
                    b = "name",
                    w = "type",
                    f = "vendor",
                    m = "version",
                    p = "architecture",
                    v = "console",
                    h = "mobile",
                    g = "tablet",
                    y = "smarttv",
                    k = "wearable",
                    x = "embedded",
                    T = "Amazon",
                    S = "Apple",
                    O = "ASUS",
                    _ = "BlackBerry",
                    D = "Browser",
                    E = "Chrome",
                    P = "Firefox",
                    I = "Google",
                    C = "Honor",
                    A = "Huawei",
                    j = "Microsoft",
                    q = "Motorola",
                    z = "Nvidia",
                    M = "OnePlus",
                    U = "Opera",
                    L = "OPPO",
                    N = "Samsung",
                    B = "Sharp",
                    R = "Sony",
                    H = "Xiaomi",
                    W = "Zebra",
                    F = "Facebook",
                    V = "Chromium OS",
                    G = "Mac OS",
                    K = " Browser",
                    X = function (e, i) {
                        var t = {};
                        for (var n in e) i[n] && i[n].length % 2 == 0 ? (t[n] = i[n].concat(e[n])) : (t[n] = e[n]);
                        return t;
                    },
                    $ = function (e) {
                        for (var i = {}, t = 0; t < e.length; t++) i[e[t].toUpperCase()] = e[t];
                        return i;
                    },
                    Y = function (e, i) {
                        return typeof e === c && -1 !== Z(i).indexOf(Z(e));
                    },
                    Z = function (e) {
                        return e.toLowerCase();
                    },
                    Q = function (e, i) {
                        if (typeof e === c)
                            return (e = e.replace(/^\s\s*/, "")), typeof i === s ? e : e.substring(0, 500);
                    },
                    J = function (e, i) {
                        for (var t, n, o, s, c, l, d = 0; d < i.length && !c; ) {
                            var b = i[d],
                                w = i[d + 1];
                            for (t = n = 0; t < b.length && !c && b[t]; )
                                if ((c = b[t++].exec(e)))
                                    for (o = 0; o < w.length; o++)
                                        (l = c[++n]),
                                            typeof (s = w[o]) === u && s.length > 0
                                                ? 2 === s.length
                                                    ? typeof s[1] == a
                                                        ? (this[s[0]] = s[1].call(this, l))
                                                        : (this[s[0]] = s[1])
                                                    : 3 === s.length
                                                      ? typeof s[1] !== a || (s[1].exec && s[1].test)
                                                          ? (this[s[0]] = l ? l.replace(s[1], s[2]) : void 0)
                                                          : (this[s[0]] = l ? s[1].call(this, l, s[2]) : void 0)
                                                      : 4 === s.length &&
                                                        (this[s[0]] = l
                                                            ? s[3].call(this, l.replace(s[1], s[2]))
                                                            : void 0)
                                                : (this[s] = l || r);
                            d += 2;
                        }
                    },
                    ee = function (e, i) {
                        for (var t in i)
                            if (typeof i[t] === u && i[t].length > 0) {
                                for (var n = 0; n < i[t].length; n++) if (Y(i[t][n], e)) return "?" === t ? r : t;
                            } else if (Y(i[t], e)) return "?" === t ? r : t;
                        return i.hasOwnProperty("*") ? i["*"] : e;
                    },
                    ei = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM",
                    },
                    et = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [m, [b, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [m, [b, "Edge"]],
                            [
                                /(opera mini)\/([-\w\.]+)/i,
                                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                            ],
                            [b, m],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [m, [b, U + " Mini"]],
                            [/\bop(?:rg)?x\/([\w\.]+)/i],
                            [m, [b, U + " GX"]],
                            [/\bopr\/([\w\.]+)/i],
                            [m, [b, U]],
                            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                            [m, [b, "Baidu"]],
                            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
                            [m, [b, "Maxthon"]],
                            [
                                /(kindle)\/([\w\.]+)/i,
                                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                                /(?:ms|\()(ie) ([\w\.]+)/i,
                                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                                /(heytap|ovi|115)browser\/([\d\.]+)/i,
                                /(weibo)__([\d\.]+)/i,
                            ],
                            [b, m],
                            [/quark(?:pc)?\/([-\w\.]+)/i],
                            [m, [b, "Quark"]],
                            [/\bddg\/([\w\.]+)/i],
                            [m, [b, "DuckDuckGo"]],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [m, [b, "UC" + D]],
                            [
                                /microm.+\bqbcore\/([\w\.]+)/i,
                                /\bqbcore\/([\w\.]+).+microm/i,
                                /micromessenger\/([\w\.]+)/i,
                            ],
                            [m, [b, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [m, [b, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [m, [b, "IE"]],
                            [/ya(?:search)?browser\/([\w\.]+)/i],
                            [m, [b, "Yandex"]],
                            [/slbrowser\/([\w\.]+)/i],
                            [m, [b, "Smart Lenovo " + D]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [[b, /(.+)/, "$1 Secure " + D], m],
                            [/\bfocus\/([\w\.]+)/i],
                            [m, [b, P + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [m, [b, U + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [m, [b, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [m, [b, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [m, [b, U + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [m, [b, "MIUI" + K]],
                            [/fxios\/([\w\.-]+)/i],
                            [m, [b, P]],
                            [/\bqihoobrowser\/?([\w\.]*)/i],
                            [m, [b, "360"]],
                            [/\b(qq)\/([\w\.]+)/i],
                            [[b, /(.+)/, "$1Browser"], m],
                            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                            [[b, /(.+)/, "$1" + K], m],
                            [/samsungbrowser\/([\w\.]+)/i],
                            [m, [b, N + " Internet"]],
                            [/metasr[\/ ]?([\d\.]+)/i],
                            [m, [b, "Sogou Explorer"]],
                            [/(sogou)mo\w+\/([\d\.]+)/i],
                            [[b, "Sogou Mobile"], m],
                            [
                                /(electron)\/([\w\.]+) safari/i,
                                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
                            ],
                            [b, m],
                            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                            [b],
                            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
                            [m, b],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [[b, F], m],
                            [
                                /(Klarna)\/([\w\.]+)/i,
                                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                                /(daum)apps[\/ ]([\w\.]+)/i,
                                /safari (line)\/([\w\.]+)/i,
                                /\b(line)\/([\w\.]+)\/iab/i,
                                /(alipay)client\/([\w\.]+)/i,
                                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
                            ],
                            [b, m],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [m, [b, "GSA"]],
                            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                            [m, [b, "TikTok"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [m, [b, E + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [[b, E + " WebView"], m],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [m, [b, "Android " + D]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [b, m],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [m, [b, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [m, b],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [
                                b,
                                [
                                    m,
                                    ee,
                                    {
                                        "1.0": "/8",
                                        1.2: "/1",
                                        1.3: "/3",
                                        "2.0": "/412",
                                        "2.0.2": "/416",
                                        "2.0.3": "/417",
                                        "2.0.4": "/419",
                                        "?": "/",
                                    },
                                ],
                            ],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [b, m],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [[b, "Netscape"], m],
                            [/(wolvic|librewolf)\/([\w\.]+)/i],
                            [b, m],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [m, [b, P + " Reality"]],
                            [
                                /ekiohf.+(flow)\/([\w\.]+)/i,
                                /(swiftfox)/i,
                                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                /(firefox)\/([\w\.]+)/i,
                                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                                /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                /\b(links) \(([\w\.]+)/i,
                            ],
                            [b, [m, /_/g, "."]],
                            [/(cobalt)\/([\w\.]+)/i],
                            [b, [m, /master.|lts./, ""]],
                        ],
                        cpu: [
                            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
                            [[p, "amd64"]],
                            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
                            [[p, "ia32"]],
                            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
                            [[p, "arm64"]],
                            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
                            [[p, "armhf"]],
                            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
                            [[p, "arm"]],
                            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
                            [[p, /ower/, "", Z]],
                            [/ sun4\w[;\)]/i],
                            [[p, "sparc"]],
                            [
                                /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
                            ],
                            [[p, Z]],
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [d, [f, N], [w, g]],
                            [
                                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                                /sec-(sgh\w+)/i,
                            ],
                            [d, [f, N], [w, h]],
                            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                            [d, [f, S], [w, h]],
                            [
                                /\((ipad);[-\w\),; ]+apple/i,
                                /applecoremedia\/[\w\.]+ \((ipad)/i,
                                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                            ],
                            [d, [f, S], [w, g]],
                            [/(macintosh);/i],
                            [d, [f, S]],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [d, [f, B], [w, h]],
                            [
                                /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
                            ],
                            [d, [f, C], [w, g]],
                            [/honor([-\w ]+)[;\)]/i],
                            [d, [f, C], [w, h]],
                            [
                                /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
                            ],
                            [d, [f, A], [w, g]],
                            [
                                /(?:huawei)([-\w ]+)[;\)]/i,
                                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
                            ],
                            [d, [f, A], [w, h]],
                            [
                                /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
                                /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
                            ],
                            [
                                [d, /_/g, " "],
                                [f, H],
                                [w, g],
                            ],
                            [
                                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                                /\b; (\w+) build\/hm\1/i,
                                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
                                / ([\w ]+) miui\/v?\d/i,
                            ],
                            [
                                [d, /_/g, " "],
                                [f, H],
                                [w, h],
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [d, [f, L], [w, h]],
                            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
                            [d, [f, ee, { OnePlus: ["304", "403", "203"], "*": L }], [w, g]],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [d, [f, "Vivo"], [w, h]],
                            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                            [d, [f, "Realme"], [w, h]],
                            [
                                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                                /\bmot(?:orola)?[- ](\w*)/i,
                                /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                            ],
                            [d, [f, q], [w, h]],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [d, [f, q], [w, g]],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [d, [f, "LG"], [w, g]],
                            [
                                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                                /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
                                /\blg-?([\d\w]+) bui/i,
                            ],
                            [d, [f, "LG"], [w, h]],
                            [
                                /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
                                /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
                            ],
                            [d, [f, "Lenovo"], [w, g]],
                            [/(nokia) (t[12][01])/i],
                            [f, d, [w, g]],
                            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
                            [
                                [d, /_/g, " "],
                                [w, h],
                                [f, "Nokia"],
                            ],
                            [/(pixel (c|tablet))\b/i],
                            [d, [f, I], [w, g]],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [d, [f, I], [w, h]],
                            [
                                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                            ],
                            [d, [f, R], [w, h]],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [d, "Xperia Tablet"],
                                [f, R],
                                [w, g],
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [d, [f, M], [w, h]],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [d, [f, T], [w, g]],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [d, /(.+)/g, "Fire Phone $1"],
                                [f, T],
                                [w, h],
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [d, f, [w, g]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [d, [f, _], [w, h]],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [d, [f, O], [w, g]],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [d, [f, O], [w, h]],
                            [/(nexus 9)/i],
                            [d, [f, "HTC"], [w, g]],
                            [
                                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
                            ],
                            [f, [d, /_/g, " "], [w, h]],
                            [
                                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
                            ],
                            [d, [f, "TCL"], [w, g]],
                            [/(itel) ((\w+))/i],
                            [[f, Z], d, [w, ee, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [d, [f, "Acer"], [w, g]],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [d, [f, "Meizu"], [w, h]],
                            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                            [d, [f, "Ulefone"], [w, h]],
                            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
                            [d, [f, "Energizer"], [w, h]],
                            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
                            [d, [f, "Cat"], [w, h]],
                            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
                            [d, [f, "Smartfren"], [w, h]],
                            [/droid.+; (a(?:015|06[35]|142p?))/i],
                            [d, [f, "Nothing"], [w, h]],
                            [
                                /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
                                /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
                            ],
                            [d, [f, "Archos"], [w, g]],
                            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
                            [d, [f, "Archos"], [w, h]],
                            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
                            [f, d, [w, g]],
                            [
                                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                                /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
                                /(hp) ([\w ]+\w)/i,
                                /(microsoft); (lumia[\w ]+)/i,
                                /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
                                /(oppo) ?([\w ]+) bui/i,
                            ],
                            [f, d, [w, h]],
                            [
                                /(kobo)\s(ereader|touch)/i,
                                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                                /(kindle)\/([\w\.]+)/i,
                                /(nook)[\w ]+build\/(\w+)/i,
                                /(dell) (strea[kpr\d ]*[\dko])/i,
                                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                                /(trinity)[- ]*(t\d{3}) bui/i,
                                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                                /(vodafone) ([\w ]+)(?:\)| bui)/i,
                            ],
                            [f, d, [w, g]],
                            [/(surface duo)/i],
                            [d, [f, j], [w, g]],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [d, [f, "Fairphone"], [w, h]],
                            [/(u304aa)/i],
                            [d, [f, "AT&T"], [w, h]],
                            [/\bsie-(\w*)/i],
                            [d, [f, "Siemens"], [w, h]],
                            [/\b(rct\w+) b/i],
                            [d, [f, "RCA"], [w, g]],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [d, [f, "Dell"], [w, g]],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [d, [f, "Verizon"], [w, g]],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [d, [f, "Barnes & Noble"], [w, g]],
                            [/\b(tm\d{3}\w+) b/i],
                            [d, [f, "NuVision"], [w, g]],
                            [/\b(k88) b/i],
                            [d, [f, "ZTE"], [w, g]],
                            [/\b(nx\d{3}j) b/i],
                            [d, [f, "ZTE"], [w, h]],
                            [/\b(gen\d{3}) b.+49h/i],
                            [d, [f, "Swiss"], [w, h]],
                            [/\b(zur\d{3}) b/i],
                            [d, [f, "Swiss"], [w, g]],
                            [/\b((zeki)?tb.*\b) b/i],
                            [d, [f, "Zeki"], [w, g]],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [[f, "Dragon Touch"], d, [w, g]],
                            [/\b(ns-?\w{0,9}) b/i],
                            [d, [f, "Insignia"], [w, g]],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [d, [f, "NextBook"], [w, g]],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [[f, "Voice"], d, [w, h]],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [[f, "LvTel"], d, [w, h]],
                            [/\b(ph-1) /i],
                            [d, [f, "Essential"], [w, h]],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [d, [f, "Envizen"], [w, g]],
                            [/\b(trio[-\w\. ]+) b/i],
                            [d, [f, "MachSpeed"], [w, g]],
                            [/\btu_(1491) b/i],
                            [d, [f, "Rotor"], [w, g]],
                            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
                            [d, [f, z], [w, g]],
                            [/(sprint) (\w+)/i],
                            [f, d, [w, h]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [d, /\./g, " "],
                                [f, j],
                                [w, h],
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [d, [f, W], [w, g]],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [d, [f, W], [w, h]],
                            [/smart-tv.+(samsung)/i],
                            [f, [w, y]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [d, /^/, "SmartTV"],
                                [f, N],
                                [w, y],
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [f, "LG"],
                                [w, y],
                            ],
                            [/(apple) ?tv/i],
                            [f, [d, S + " TV"], [w, y]],
                            [/crkey/i],
                            [
                                [d, E + "cast"],
                                [f, I],
                                [w, y],
                            ],
                            [/droid.+aft(\w+)( bui|\))/i],
                            [d, [f, T], [w, y]],
                            [/(shield \w+ tv)/i],
                            [d, [f, z], [w, y]],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [d, [f, B], [w, y]],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [d, [f, R], [w, y]],
                            [/(mi(tv|box)-?\w+) bui/i],
                            [d, [f, H], [w, y]],
                            [/Hbbtv.*(technisat) (.*);/i],
                            [f, d, [w, y]],
                            [
                                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
                            ],
                            [
                                [f, Q],
                                [d, Q],
                                [w, y],
                            ],
                            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
                            [d, [w, y]],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [[w, y]],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [f, d, [w, v]],
                            [/droid.+; (shield)( bui|\))/i],
                            [d, [f, z], [w, v]],
                            [/(playstation \w+)/i],
                            [d, [f, R], [w, v]],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [d, [f, j], [w, v]],
                            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
                            [d, [f, N], [w, k]],
                            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
                            [f, d, [w, k]],
                            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
                            [d, [f, L], [w, k]],
                            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                            [d, [f, S], [w, k]],
                            [/(opwwe\d{3})/i],
                            [d, [f, M], [w, k]],
                            [/(moto 360)/i],
                            [d, [f, q], [w, k]],
                            [/(smartwatch 3)/i],
                            [d, [f, R], [w, k]],
                            [/(g watch r)/i],
                            [d, [f, "LG"], [w, k]],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [d, [f, W], [w, k]],
                            [/droid.+; (glass) \d/i],
                            [d, [f, I], [w, k]],
                            [/(pico) (4|neo3(?: link|pro)?)/i],
                            [f, d, [w, k]],
                            [/; (quest( \d| pro)?)/i],
                            [d, [f, F], [w, k]],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [f, [w, x]],
                            [/(aeobc)\b/i],
                            [d, [f, T], [w, x]],
                            [/(homepod).+mac os/i],
                            [d, [f, S], [w, x]],
                            [/windows iot/i],
                            [[w, x]],
                            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                            [d, [w, h]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [d, [w, g]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [[w, g]],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [[w, h]],
                            [/droid .+?; ([\w\. -]+)( bui|\))/i],
                            [d, [f, "Generic"]],
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [m, [b, "EdgeHTML"]],
                            [/(arkweb)\/([\w\.]+)/i],
                            [b, m],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [m, [b, "Blink"]],
                            [
                                /(presto)\/([\w\.]+)/i,
                                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                                /ekioh(flow)\/([\w\.]+)/i,
                                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                                /\b(libweb)/i,
                            ],
                            [b, m],
                            [/ladybird\//i],
                            [[b, "LibWeb"]],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [m, b],
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [b, m],
                            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
                            [b, [m, ee, ei]],
                            [
                                /windows nt 6\.2; (arm)/i,
                                /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
                                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
                            ],
                            [
                                [m, ee, ei],
                                [b, "Windows"],
                            ],
                            [
                                /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
                                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                                /cfnetwork\/.+darwin/i,
                            ],
                            [
                                [m, /_/g, "."],
                                [b, "iOS"],
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [b, G],
                                [m, /_/g, "."],
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [m, b],
                            [/(ubuntu) ([\w\.]+) like android/i],
                            [[b, /(.+)/, "$1 Touch"], m],
                            [
                                /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i,
                            ],
                            [b, m],
                            [/\(bb(10);/i],
                            [m, [b, _]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
                            [m, [b, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [m, [b, P + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [m, [b, "webOS"]],
                            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                            [m, [b, "watchOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [m, [b, E + "cast"]],
                            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                            [[b, V], m],
                            [
                                /panasonic;(viera)/i,
                                /(netrange)mmh/i,
                                /(nettv)\/(\d+\.[\w\.]+)/i,
                                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                                /(xbox); +xbox ([^\);]+)/i,
                                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                                /(mint)[\/\(\) ]?(\w*)/i,
                                /(mageia|vectorlinux)[; ]/i,
                                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
                                /(gnu) ?([\w\.]*)/i,
                                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                                /(haiku) (\w+)/i,
                            ],
                            [b, m],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [[b, "Solaris"], m],
                            [
                                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                                /(unix) ?([\w\.]*)/i,
                            ],
                            [b, m],
                        ],
                    },
                    en = function (e, i) {
                        if ((typeof e === u && ((i = e), (e = r)), !(this instanceof en)))
                            return new en(e, i).getResult();
                        var t = typeof o !== s && o.navigator ? o.navigator : r,
                            n = e || (t && t.userAgent ? t.userAgent : ""),
                            v = t && t.userAgentData ? t.userAgentData : r,
                            y = i ? X(et, i) : et,
                            k = t && t.userAgent == n;
                        return (
                            (this.getBrowser = function () {
                                var e,
                                    i = {};
                                return (
                                    (i[b] = r),
                                    (i[m] = r),
                                    J.call(i, n, y.browser),
                                    (i[l] = typeof (e = i[m]) === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : r),
                                    k && t && t.brave && typeof t.brave.isBrave == a && (i[b] = "Brave"),
                                    i
                                );
                            }),
                            (this.getCPU = function () {
                                var e = {};
                                return (e[p] = r), J.call(e, n, y.cpu), e;
                            }),
                            (this.getDevice = function () {
                                var e = {};
                                return (
                                    (e[f] = r),
                                    (e[d] = r),
                                    (e[w] = r),
                                    J.call(e, n, y.device),
                                    k && !e[w] && v && v.mobile && (e[w] = h),
                                    k &&
                                        "Macintosh" == e[d] &&
                                        t &&
                                        typeof t.standalone !== s &&
                                        t.maxTouchPoints &&
                                        t.maxTouchPoints > 2 &&
                                        ((e[d] = "iPad"), (e[w] = g)),
                                    e
                                );
                            }),
                            (this.getEngine = function () {
                                var e = {};
                                return (e[b] = r), (e[m] = r), J.call(e, n, y.engine), e;
                            }),
                            (this.getOS = function () {
                                var e = {};
                                return (
                                    (e[b] = r),
                                    (e[m] = r),
                                    J.call(e, n, y.os),
                                    k &&
                                        !e[b] &&
                                        v &&
                                        v.platform &&
                                        "Unknown" != v.platform &&
                                        (e[b] = v.platform.replace(/chrome os/i, V).replace(/macos/i, G)),
                                    e
                                );
                            }),
                            (this.getResult = function () {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU(),
                                };
                            }),
                            (this.getUA = function () {
                                return n;
                            }),
                            (this.setUA = function (e) {
                                return (n = typeof e === c && e.length > 500 ? Q(e, 500) : e), this;
                            }),
                            this.setUA(n),
                            this
                        );
                    };
                (en.VERSION = "1.0.41"),
                    (en.BROWSER = $([b, m, l])),
                    (en.CPU = $([p])),
                    (en.DEVICE = $([d, f, w, v, h, y, g, k, x])),
                    (en.ENGINE = en.OS = $([b, m])),
                    typeof i !== s
                        ? (e.exports && (i = e.exports = en), (i.UAParser = en))
                        : t.amdO
                          ? r !==
                                (n = function () {
                                    return en;
                                }.call(i, t, i, e)) && (e.exports = n)
                          : typeof o !== s && (o.UAParser = en);
                var eo = typeof o !== s && (o.jQuery || o.Zepto);
                if (eo && !eo.ua) {
                    var er = new en();
                    (eo.ua = er.getResult()),
                        (eo.ua.get = function () {
                            return er.getUA();
                        }),
                        (eo.ua.set = function (e) {
                            er.setUA(e);
                            var i = er.getResult();
                            for (var t in i) eo.ua[t] = i[t];
                        });
                }
            })("object" == typeof window ? window : this);
        },
        5591: function (e) {
            e.exports = {
                style: { fontFamily: "'__Inter_54a396', '__Inter_Fallback_54a396'", fontStyle: "normal" },
                className: "__className_54a396",
                variable: "__variable_54a396",
            };
        },
        2880: function (e) {
            e.exports = {
                style: { fontFamily: "'__Poppins_8afdc0', '__Poppins_Fallback_8afdc0'", fontStyle: "normal" },
                className: "__className_8afdc0",
                variable: "__variable_8afdc0",
            };
        },
    },
]);
