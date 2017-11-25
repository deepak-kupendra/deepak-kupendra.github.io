! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length,
            c = ab.type(a);
        return "function" === c || ab.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (ab.isFunction(b)) return ab.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return ab.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (hb.test(b)) return ab.filter(b, a, c);
            b = ab.filter(b, a)
        }
        return ab.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = ob[a] = {};
        return ab.each(a.match(nb) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        $.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), ab.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = ab.expando + Math.random()
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ub, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : tb.test(c) ? ab.parseJSON(c) : c
                } catch (e) {}
                sb.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return $.activeElement
        } catch (a) {}
    }

    function m(a, b) {
        return ab.nodeName(a, "table") && ab.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (rb.hasData(a) && (f = rb.access(a), g = rb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) ab.event.add(b, e, j[e][c])
            }
            sb.hasData(a) && (h = sb.access(a), i = ab.extend({}, h), sb.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && ab.nodeName(a, b) ? ab.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && yb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d = ab(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : ab.css(d[0], "display");
        return d.detach(), e
    }

    function u(a) {
        var b = $,
            c = Ob[a];
        return c || (c = t(a, b), "none" !== c && c || (Nb = (Nb || ab("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Nb[0].contentDocument, b.write(), b.close(), c = t(a, b), Nb.detach()), Ob[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Rb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || ab.contains(a.ownerDocument, a) || (g = ab.style(a, b)), Qb.test(g) && Pb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--;)
            if (b = Xb[e] + c, b in a) return b;
        return d
    }

    function y(a, b, c) {
        var d = Tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ab.css(a, c + wb[f], !0, e)), d ? ("content" === c && (g -= ab.css(a, "padding" + wb[f], !0, e)), "margin" !== c && (g -= ab.css(a, "border" + wb[f] + "Width", !0, e))) : (g += ab.css(a, "padding" + wb[f], !0, e), "padding" !== c && (g += ab.css(a, "border" + wb[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Rb(a),
            g = "border-box" === ab.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qb.test(e)) return e;
            d = g && (Z.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = rb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xb(d) && (f[g] = rb.access(d, "olddisplay", u(d.nodeName)))) : f[g] || (e = xb(d), (c && "none" !== c || !e) && rb.set(d, "olddisplay", e ? c : ab.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function() {
            Yb = void 0
        }), Yb = ab.now()
    }

    function E(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wb[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k = this,
            l = {},
            m = a.style,
            n = a.nodeType && xb(a),
            o = rb.get(a, "fxshow");
        c.queue || (h = ab._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, k.always(function() {
            k.always(function() {
                h.unqueued--, ab.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], j = ab.css(a, "display"), "none" === j && (j = u(a.nodeName)), "inline" === j && "none" === ab.css(a, "float") && (m.display = "inline-block")), c.overflow && (m.overflow = "hidden", k.always(function() {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $b.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (n ? "hide" : "show")) {
                    if ("show" !== e || !o || void 0 === o[d]) continue;
                    n = !0
                }
                l[d] = o && o[d] || ab.style(a, d)
            }
        if (!ab.isEmptyObject(l)) {
            o ? "hidden" in o && (n = o.hidden) : o = rb.access(a, "fxshow", {}), f && (o.hidden = !n), n ? ab(a).show() : k.done(function() {
                ab(a).hide()
            }), k.done(function() {
                var b;
                rb.remove(a, "fxshow");
                for (b in l) ab.style(a, b, l[b])
            });
            for (d in l) g = F(n ? o[d] : 0, d, k), d in o || (o[d] = g.start, n && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = ab.camelCase(c), e = b[d], f = a[c], ab.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ab.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0,
            g = bc.length,
            h = ab.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Yb || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: ab.extend({}, b),
                opts: ab.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Yb || D(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = ab.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bc[f].call(j, a, k, j.opts)) return d;
        return ab.map(k, F, j), ab.isFunction(j.opts.start) && j.opts.start.call(a, j), ab.fx.timer(ab.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(nb) || [];
            if (ab.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, ab.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === vc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = ab.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && ab.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function O(a, b, c, d) {
        var e;
        if (ab.isArray(b)) ab.each(b, function(b, e) {
            c || zc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== ab.type(b)) d(a, b);
        else
            for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return ab.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {},
        W = V.toString,
        X = V.hasOwnProperty,
        Y = "".trim,
        Z = {},
        $ = a.document,
        _ = "2.1.0",
        ab = function(a, b) {
            return new ab.fn.init(a, b)
        },
        bb = /^-ms-/,
        cb = /-([\da-z])/gi,
        db = function(a, b) {
            return b.toUpperCase()
        };
    ab.fn = ab.prototype = {
        jquery: _,
        constructor: ab,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = ab.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return ab.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(ab.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, ab.extend = ab.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ab.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (ab.isPlainObject(d) || (e = ab.isArray(d))) ? (e ? (e = !1, f = c && ab.isArray(c) ? c : []) : f = c && ab.isPlainObject(c) ? c : {}, g[b] = ab.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, ab.extend({
        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === ab.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        isPlainObject: function(a) {
            if ("object" !== ab.type(a) || a.nodeType || ab.isWindow(a)) return !1;
            try {
                if (a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (b) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = ab.trim(a), a && (1 === a.indexOf("use strict") ? (b = $.createElement("script"), b.text = a, $.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(bb, "ms-").replace(cb, db)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : Y.call(a)
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ab.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), ab.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || ab.guid++, e) : void 0
        },
        now: Date.now,
        support: Z
    }), ab.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var eb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, o, p, q;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                if (e = sb.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return _.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return _.apply(c, b.getElementsByClassName(g)), c
                    }
                if (x.qsa && (!J || !J.test(a))) {
                    if (o = l = N, p = b, q = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a), (l = b.getAttribute("id")) ? o = l.replace(ub, "\\$&") : b.setAttribute("id", o), o = "[id='" + o + "'] ", i = j.length; i--;) j[i] = o + n(j[i]);
                        p = tb.test(a) && k(b.parentNode) || b, q = j.join(",")
                    }
                    if (q) try {
                        return _.apply(c, p.querySelectorAll(q)), c
                    } catch (r) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return v(a.replace(ib, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > y.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) y.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && typeof a.getElementsByTagName !== V && a
        }

        function l() {}

        function m(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = y.preFilter; h;) {
                (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = kb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ib, " ")
                }), h = h.slice(d.length));
                for (g in y.filter) !(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }

        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function o(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = d || u(b || "*", h.nodeType ? [h] : h, []),
                    r = !a || !d && b ? p : q(p, m, a, h, i),
                    s = c ? f || (d ? a : o || e) ? [] : g : r;
                if (c && c(r, s, h, i), e)
                    for (j = q(s, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i)
                        }
                        for (k = s.length; k--;)(l = s[k]) && (j = f ? bb.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : _.apply(g, s)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                    return a === b
                }, g, !0), j = o(function(a) {
                    return bb.call(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                }]; e > h; h++)
                if (c = y.relative[a[h].type]) k = [o(p(k), c)];
                else {
                    if (c = y.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !y.relative[a[d].type]; d++);
                        return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                    }
                    k.push(c)
                }
            return p(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && y.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Z.call(i));
                            r = q(r)
                        }
                        _.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }

        function u(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function v(a, b, c, d) {
            var e, f, g, h, i, j = m(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && y.relative[f[1].type]) {
                    if (b = (y.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);)
                    if ((i = y.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && n(f), !a) return _.apply(c, d), c;
                        break
                    }
            }
            return B(a, j)(d, b, !I, c, tb.test(a) && k(b.parentNode) || b), c
        }
        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            },
            V = "undefined",
            W = 1 << 31,
            X = {}.hasOwnProperty,
            Y = [],
            Z = Y.pop,
            $ = Y.push,
            _ = Y.push,
            ab = Y.slice,
            bb = Y.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            cb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            db = "[\\x20\\t\\r\\n\\f]",
            eb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            fb = eb.replace("w", "w#"),
            gb = "\\[" + db + "*(" + eb + ")" + db + "*(?:([*^$|!~]?=)" + db + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + fb + ")|)|)" + db + "*\\]",
            hb = ":(" + eb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + gb.replace(3, 8) + ")*)|.*)\\)|)",
            ib = new RegExp("^" + db + "+|((?:^|[^\\\\])(?:\\\\.)*)" + db + "+$", "g"),
            jb = new RegExp("^" + db + "*," + db + "*"),
            kb = new RegExp("^" + db + "*([>+~]|" + db + ")" + db + "*"),
            lb = new RegExp("=" + db + "*([^\\]'\"]*?)" + db + "*\\]", "g"),
            mb = new RegExp(hb),
            nb = new RegExp("^" + fb + "$"),
            ob = {
                ID: new RegExp("^#(" + eb + ")"),
                CLASS: new RegExp("^\\.(" + eb + ")"),
                TAG: new RegExp("^(" + eb.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + gb),
                PSEUDO: new RegExp("^" + hb),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + db + "*(even|odd|(([+-]|)(\\d*)n|)" + db + "*(?:([+-]|)" + db + "*(\\d+)|))" + db + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + cb + ")$", "i"),
                needsContext: new RegExp("^" + db + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + db + "*((?:-\\d)?\\d*)" + db + "*\\)|)(?=[^-]|$)", "i")
            },
            pb = /^(?:input|select|textarea|button)$/i,
            qb = /^h\d$/i,
            rb = /^[^{]+\{\s*\[native \w/,
            sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tb = /[+~]/,
            ub = /'|\\/g,
            vb = new RegExp("\\\\([\\da-f]{1,6}" + db + "?|(" + db + ")|.)", "ig"),
            wb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            _.apply(Y = ab.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType
        } catch (xb) {
            _ = {
                apply: Y.length ? function(a, b) {
                    $.apply(a, ab.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        x = b.support = {}, A = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c = a ? a.ownerDocument || a : O,
                d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !A(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
                F()
            }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
                F()
            })), x.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), x.getElementsByTagName = e(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
            }), x.getElementsByClassName = rb.test(c.getElementsByClassName) && e(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), x.getById = e(function(a) {
                return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length
            }), x.getById ? (y.find.ID = function(a, b) {
                if (typeof b.getElementById !== V && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, y.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete y.find.ID, y.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), y.find.TAG = x.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, y.find.CLASS = x.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (x.qsa = rb.test(c.querySelectorAll)) && (e(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + db + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + db + "*(?:value|" + cb + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
            }), e(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + db + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (x.matchesSelector = rb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", hb)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var d, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0;
                if (f === h) return g(a, b);
                for (d = a; d = d.parentNode;) i.unshift(d);
                for (d = b; d = d.parentNode;) j.unshift(d);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, c) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!x.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = y.attrHandle[b.toLowerCase()],
                d = c && X.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : x.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !x.detectDuplicates, D = !x.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, z = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += z(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += z(b);
            return c
        }, y = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ob,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(vb, wb), a[3] = (a[4] || a[5] || "").replace(vb, wb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return ob.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && mb.test(c) && (b = m(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(vb, wb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + db + ")" + a + "(" + db + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = y.pseudos[a] || y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], y.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = bb.call(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = B(a.replace(ib, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function(a) {
                    return nb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(vb, wb).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !y.pseudos.empty(a)
                },
                header: function(a) {
                    return qb.test(a.nodeName)
                },
                input: function(a) {
                    return pb.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, y.pseudos.nth = y.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) y.pseudos[w] = h(w);
        for (w in {
                submit: !0,
                reset: !0
            }) y.pseudos[w] = i(w);
        return l.prototype = y.filters = y.pseudos, y.setFilters = new l, B = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = m(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d))
            }
            return f
        }, x.sortStable = N.split("").sort(U).join("") === N, x.detectDuplicates = !!E, F(), x.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), x.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(cb, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    ab.find = eb, ab.expr = eb.selectors, ab.expr[":"] = ab.expr.pseudos, ab.unique = eb.uniqueSort, ab.text = eb.getText, ab.isXMLDoc = eb.isXML, ab.contains = eb.contains;
    var fb = ab.expr.match.needsContext,
        gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        hb = /^.[^:#\[\.,]*$/;
    ab.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ab.find.matchesSelector(d, a) ? [d] : [] : ab.find.matches(a, ab.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, ab.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(ab(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (ab.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) ab.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? ab.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fb.test(a) ? ab(a) : a || [], !1).length
        }
    });
    var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        kb = ab.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : jb.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ib).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof ab ? b[0] : b, ab.merge(this, ab.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : $, !0)), gb.test(c[1]) && ab.isPlainObject(b))
                        for (c in b) ab.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = $.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = $, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ab.isFunction(a) ? "undefined" != typeof ib.ready ? ib.ready(a) : a(ab) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), ab.makeArray(a, this))
        };
    kb.prototype = ab.fn, ib = ab($);
    var lb = /^(?:parents|prev(?:Until|All))/,
        mb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ab.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && ab(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), ab.fn.extend({
        has: function(a) {
            var b = ab(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (ab.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fb.test(a) || "string" != typeof a ? ab(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ab.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? ab.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(ab(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(ab.unique(ab.merge(this.get(), ab(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), ab.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return ab.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return ab.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return ab.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return ab.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return ab.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return ab.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return ab.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return ab.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || ab.merge([], a.childNodes)
        }
    }, function(a, b) {
        ab.fn[a] = function(c, d) {
            var e = ab.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ab.filter(d, e)), this.length > 1 && (mb[a] || ab.unique(e), lb.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var nb = /\S+/g,
        ob = {};
    ab.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || f(a) : ab.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                    if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var c = i.length;
                        ! function f(b) {
                            ab.each(b, function(b, c) {
                                var d = ab.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), d ? g = i.length : b && (e = c, k(b))
                    }
                    return this
                },
                remove: function() {
                    return i && ab.each(arguments, function(a, b) {
                        for (var c;
                            (c = ab.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                    }), this
                },
                has: function(a) {
                    return a ? ab.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [], g = 0, this
                },
                disable: function() {
                    return i = j = b = void 0, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0, b || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return l
    }, ab.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", ab.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ab.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ab.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return ab.Deferred(function(c) {
                            ab.each(b, function(b, f) {
                                var g = ab.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && ab.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? ab.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, ab.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = R.call(arguments),
                g = f.length,
                h = 1 !== g || a && ab.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : ab.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ab.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pb;
    ab.fn.ready = function(a) {
        return ab.ready.promise().done(a), this
    }, ab.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? ab.readyWait++ : ab.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --ab.readyWait : ab.isReady) || (ab.isReady = !0, a !== !0 && --ab.readyWait > 0 || (pb.resolveWith($, [ab]), ab.fn.trigger && ab($).trigger("ready").off("ready")))
        }
    }), ab.ready.promise = function(b) {
        return pb || (pb = ab.Deferred(), "complete" === $.readyState ? setTimeout(ab.ready) : ($.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pb.promise(b)
    }, ab.ready.promise();
    var qb = ab.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === ab.type(c)) {
            e = !0;
            for (h in c) ab.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, ab.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(ab(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    ab.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = ab.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, ab.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (ab.isEmptyObject(f)) ab.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, ab.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                ab.isArray(b) ? d = b.concat(b.map(ab.camelCase)) : (e = ab.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(nb) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !ab.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var rb = new h,
        sb = new h,
        tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ub = /([A-Z])/g;
    ab.extend({
        hasData: function(a) {
            return sb.hasData(a) || rb.hasData(a)
        },
        data: function(a, b, c) {
            return sb.access(a, b, c)
        },
        removeData: function(a, b) {
            sb.remove(a, b)
        },
        _data: function(a, b, c) {
            return rb.access(a, b, c)
        },
        _removeData: function(a, b) {
            rb.remove(a, b)
        }
    }), ab.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sb.get(f), 1 === f.nodeType && !rb.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) d = g[c].name, 0 === d.indexOf("data-") && (d = ab.camelCase(d.slice(5)), i(f, d, e[d]));
                    rb.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sb.set(this, a)
            }) : qb(this, function(b) {
                var c, d = ab.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sb.get(f, a), void 0 !== c) return c;
                    if (c = sb.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = sb.get(this, d);
                    sb.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sb.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                sb.remove(this, a)
            })
        }
    }), ab.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = rb.get(a, b), c && (!d || ab.isArray(c) ? d = rb.access(a, b, ab.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = ab.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = ab._queueHooks(a, b),
                g = function() {
                    ab.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return rb.get(a, c) || rb.access(a, c, {
                empty: ab.Callbacks("once memory").add(function() {
                    rb.remove(a, [b + "queue", c])
                })
            })
        }
    }), ab.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ab.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = ab.queue(this, a, b);
                ab._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ab.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                ab.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = ab.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = rb.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wb = ["Top", "Right", "Bottom", "Left"],
        xb = function(a, b) {
            return a = b || a, "none" === ab.css(a, "display") || !ab.contains(a.ownerDocument, a)
        },
        yb = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = $.createDocumentFragment(),
            b = a.appendChild($.createElement("div"));
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>", Z.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var zb = "undefined";
    Z.focusinBubbles = "onfocusin" in a;
    var Ab = /^key/,
        Bb = /^(?:mouse|contextmenu)|click/,
        Cb = /^(?:focusinfocus|focusoutblur)$/,
        Db = /^([^.]*)(?:\.(.+)|)$/;
    ab.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = ab.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return typeof ab !== zb && ab.event.triggered !== b.type ? ab.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(nb) || [""], j = b.length; j--;) h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = ab.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = ab.event.special[n] || {}, k = ab.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && ab.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), ab.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.hasData(a) && rb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(nb) || [""], j = b.length; j--;)
                    if (h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = ab.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ab.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) ab.event.remove(a, n + b[j], c, d, !0);
                ab.isEmptyObject(i) && (delete q.handle, rb.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || $],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || $, 3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(n + ab.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[ab.expando] ? b : new ab.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ab.makeArray(c, [b]), l = ab.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !ab.isWindow(d)) {
                    for (i = l.delegateType || n, Cb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || $) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && ab.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !ab.acceptData(d) || j && ab.isFunction(d[n]) && !ab.isWindow(d) && (h = d[j], h && (d[j] = null), ab.event.triggered = n, d[n](), ab.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = ab.event.fix(a);
            var b, c, d, e, f, g = [],
                h = R.call(arguments),
                i = (rb.get(this, "events") || {})[a.type] || [],
                j = ab.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = ab.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((ab.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? ab(e, this).index(i) >= 0 : ab.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || $, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[ab.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Bb.test(e) ? this.mouseHooks : Ab.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ab.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = $), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ab.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return ab.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = ab.extend(new ab.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? ab.event.trigger(e, null, b) : ab.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, ab.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, ab.Event = function(a, b) {
        return this instanceof ab.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.getPreventDefault && a.getPreventDefault() ? j : k) : this.type = a, b && ab.extend(this, b), this.timeStamp = a && a.timeStamp || ab.now(), void(this[ab.expando] = !0)) : new ab.Event(a, b)
    }, ab.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = j, this.stopPropagation()
        }
    }, ab.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        ab.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !ab.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Z.focusinBubbles || ab.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            ab.event.simulate(b, a.target, ab.event.fix(a), !0)
        };
        ab.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = rb.access(d, b);
                e || d.addEventListener(a, c, !0), rb.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = rb.access(d, b) - 1;
                e ? rb.access(d, b, e) : (d.removeEventListener(a, c, !0), rb.remove(d, b))
            }
        }
    }), ab.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return ab().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = ab.guid++)), this.each(function() {
                ab.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ab(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                ab.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                ab.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? ab.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fb = /<([\w:]+)/,
        Gb = /<|&#?\w+;/,
        Hb = /<(?:script|style|link)/i,
        Ib = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Jb = /^$|\/(?:java|ecma)script/i,
        Kb = /^true\/(.*)/,
        Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Mb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Mb.optgroup = Mb.option, Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead, Mb.th = Mb.td, ab.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = ab.contains(a.ownerDocument, a);
            if (!(Z.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ab.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === ab.type(e)) ab.merge(l, e.nodeType ? [e] : e);
                    else if (Gb.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fb.exec(e) || ["", ""])[1].toLowerCase(), h = Mb[g] || Mb._default, f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                ab.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d || -1 === ab.inArray(e, d)) && (i = ab.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++];) Jb.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f, g, h = ab.event.special, i = 0; void 0 !== (c = a[i]); i++) {
                if (ab.acceptData(c) && (f = c[rb.expando], f && (b = rb.cache[f]))) {
                    if (d = Object.keys(b.events || {}), d.length)
                        for (g = 0; void 0 !== (e = d[g]); g++) h[e] ? ab.event.remove(c, e) : ab.removeEvent(c, e, b.handle);
                    rb.cache[f] && delete rb.cache[f]
                }
                delete sb.cache[c[sb.expando]]
            }
        }
    }), ab.fn.extend({
        text: function(a) {
            return qb(this, function(a) {
                return void 0 === a ? ab.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? ab.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ab.cleanData(r(c)), c.parentNode && (b && ab.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (ab.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return ab.clone(this, a, b)
            })
        },
        html: function(a) {
            return qb(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Hb.test(a) && !Mb[(Fb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Eb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (ab.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, ab.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                p = ab.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Z.checkClone && Ib.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = ab.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = ab.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = ab.clone(g, !0, !0), f && ab.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, ab.map(e, o), i = 0; f > i; i++) g = e[i], Jb.test(g.type || "") && !rb.access(g, "globalEval") && ab.contains(h, g) && (g.src ? ab._evalUrl && ab._evalUrl(g.src) : ab.globalEval(g.textContent.replace(Lb, "")))
            }
            return this
        }
    }), ab.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        ab.fn[a] = function(a) {
            for (var c, d = [], e = ab(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), ab(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Nb, Ob = {},
        Pb = /^margin/,
        Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$", "i"),
        Rb = function(a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null)
        };
    ! function() {
        function b() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", f.appendChild(g);
            var b = a.getComputedStyle(h, null);
            c = "1%" !== b.top, d = "4px" === b.width, f.removeChild(g)
        }
        var c, d, e = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
            f = $.documentElement,
            g = $.createElement("div"),
            h = $.createElement("div");
        h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(h), a.getComputedStyle && ab.extend(Z, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            reliableMarginRight: function() {
                var b, c = h.appendChild($.createElement("div"));
                return c.style.cssText = h.style.cssText = e, c.style.marginRight = c.style.width = "0", h.style.width = "1px", f.appendChild(g), b = !parseFloat(a.getComputedStyle(c, null).marginRight), f.removeChild(g), h.innerHTML = "", b
            }
        })
    }(), ab.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Sb = /^(none|table(?!-c[ea]).+)/,
        Tb = new RegExp("^(" + vb + ")(.*)$", "i"),
        Ub = new RegExp("^([+-])=(" + vb + ")", "i"),
        Vb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Wb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Xb = ["Webkit", "O", "Moz", "ms"];
    ab.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = ab.camelCase(b),
                    i = a.style;
                return b = ab.cssProps[h] || (ab.cssProps[h] = x(i, h)), g = ab.cssHooks[b] || ab.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ub.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ab.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || ab.cssNumber[h] || (c += "px"), Z.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = "", i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = ab.camelCase(b);
            return b = ab.cssProps[h] || (ab.cssProps[h] = x(a.style, h)), g = ab.cssHooks[b] || ab.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wb && (e = Wb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || ab.isNumeric(f) ? f || 0 : e) : e
        }
    }), ab.each(["height", "width"], function(a, b) {
        ab.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Sb.test(ab.css(a, "display")) ? ab.swap(a, Vb, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Rb(a);
                return y(a, c, d ? z(a, b, d, "border-box" === ab.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), ab.cssHooks.marginRight = w(Z.reliableMarginRight, function(a, b) {
        return b ? ab.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }), ab.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        ab.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Pb.test(a) || (ab.cssHooks[a + b].set = y)
    }), ab.fn.extend({
        css: function(a, b) {
            return qb(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (ab.isArray(b)) {
                    for (d = Rb(a), e = b.length; e > g; g++) f[b[g]] = ab.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? ab.style(a, b, c) : ab.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xb(this) ? ab(this).show() : ab(this).hide()
            })
        }
    }), ab.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ab.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? ab.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ab.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                ab.fx.step[a.prop] ? ab.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ab.cssProps[a.prop]] || ab.cssHooks[a.prop]) ? ab.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, ab.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, ab.fx = C.prototype.init, ab.fx.step = {};
    var Yb, Zb, $b = /^(?:toggle|show|hide)$/,
        _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$", "i"),
        ac = /queueHooks$/,
        bc = [G],
        cc = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = _b.exec(b),
                    f = e && e[3] || (ab.cssNumber[a] ? "" : "px"),
                    g = (ab.cssNumber[a] || "px" !== f && +d) && _b.exec(ab.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, ab.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    ab.Animation = ab.extend(I, {
            tweener: function(a, b) {
                ab.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cc[c] = cc[c] || [], cc[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? bc.unshift(a) : bc.push(a)
            }
        }), ab.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? ab.extend({}, a) : {
                complete: c || !c && b || ab.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !ab.isFunction(b) && b
            };
            return d.duration = ab.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ab.fx.speeds ? ab.fx.speeds[d.duration] : ab.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                ab.isFunction(d.old) && d.old.call(this), d.queue && ab.dequeue(this, d.queue)
            }, d
        }, ab.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(xb).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = ab.isEmptyObject(a),
                    f = ab.speed(b, c, d),
                    g = function() {
                        var b = I(this, ab.extend({}, a), f);
                        (e || rb.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = ab.timers,
                        g = rb.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ac.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && ab.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = rb.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = ab.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, ab.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), ab.each(["toggle", "show", "hide"], function(a, b) {
            var c = ab.fn[b];
            ab.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
            }
        }), ab.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            ab.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), ab.timers = [], ab.fx.tick = function() {
            var a, b = 0,
                c = ab.timers;
            for (Yb = ab.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || ab.fx.stop(), Yb = void 0
        }, ab.fx.timer = function(a) {
            ab.timers.push(a), a() ? ab.fx.start() : ab.timers.pop()
        }, ab.fx.interval = 13, ab.fx.start = function() {
            Zb || (Zb = setInterval(ab.fx.tick, ab.fx.interval))
        }, ab.fx.stop = function() {
            clearInterval(Zb), Zb = null
        }, ab.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ab.fn.delay = function(a, b) {
            return a = ab.fx ? ab.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a = $.createElement("input"),
                b = $.createElement("select"),
                c = b.appendChild($.createElement("option"));
            a.type = "checkbox", Z.checkOn = "" !== a.value, Z.optSelected = c.selected, b.disabled = !0, Z.optDisabled = !c.disabled, a = $.createElement("input"), a.value = "t", a.type = "radio", Z.radioValue = "t" === a.value
        }();
    var dc, ec, fc = ab.expr.attrHandle;
    ab.fn.extend({
        attr: function(a, b) {
            return qb(this, ab.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                ab.removeAttr(this, a)
            })
        }
    }), ab.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === zb ? ab.prop(a, b, c) : (1 === f && ab.isXMLDoc(a) || (b = b.toLowerCase(), d = ab.attrHooks[b] || (ab.expr.match.bool.test(b) ? ec : dc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ab.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void ab.removeAttr(a, b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(nb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = ab.propFix[c] || c, ab.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Z.radioValue && "radio" === b && ab.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), ec = {
        set: function(a, b, c) {
            return b === !1 ? ab.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, ab.each(ab.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fc[b] || ab.find.attr;
        fc[b] = function(a, b, d) {
            var e, f;
            return d || (f = fc[b], fc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fc[b] = f), e
        }
    });
    var gc = /^(?:input|select|textarea|button)$/i;
    ab.fn.extend({
        prop: function(a, b) {
            return qb(this, ab.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[ab.propFix[a] || a]
            })
        }
    }), ab.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !ab.isXMLDoc(a), f && (b = ab.propFix[b] || b, e = ab.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Z.optSelected || (ab.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), ab.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ab.propFix[this.toLowerCase()] = this
    });
    var hc = /[\t\r\n\f]/g;
    ab.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (ab.isFunction(a)) return this.each(function(b) {
                ab(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = ab.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (ab.isFunction(a)) return this.each(function(b) {
                ab(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? ab.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(ab.isFunction(a) ? function(c) {
                ab(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = ab(this), f = a.match(nb) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : rb.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var ic = /\r/g;
    ab.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = ab.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, ab(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ab.isArray(e) && (e = ab.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = ab.valHooks[this.type] || ab.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = ab.valHooks[e.type] || ab.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c)) : void 0
        }
    }), ab.extend({
        valHooks: {
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (Z.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ab.nodeName(c.parentNode, "optgroup"))) {
                            if (b = ab(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = ab.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = ab.inArray(ab(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), ab.each(["radio", "checkbox"], function() {
        ab.valHooks[this] = {
            set: function(a, b) {
                return ab.isArray(b) ? a.checked = ab.inArray(ab(a).val(), b) >= 0 : void 0
            }
        }, Z.checkOn || (ab.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), ab.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        ab.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), ab.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jc = ab.now(),
        kc = /\?/;
    ab.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, ab.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && ab.error("Invalid XML: " + a), b
    };
    var lc, mc, nc = /#.*$/,
        oc = /([?&])_=[^&]*/,
        pc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rc = /^(?:GET|HEAD)$/,
        sc = /^\/\//,
        tc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        uc = {},
        vc = {},
        wc = "*/".concat("*");
    try {
        mc = location.href
    } catch (xc) {
        mc = $.createElement("a"), mc.href = "", mc = mc.href
    }
    lc = tc.exec(mc.toLowerCase()) || [], ab.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mc,
            type: "GET",
            isLocal: qc.test(lc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ab.parseJSON,
                "text xml": ab.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, ab.ajaxSettings), b) : L(ab.ajaxSettings, a)
        },
        ajaxPrefilter: J(uc),
        ajaxTransport: J(vc),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ab.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (ab.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --ab.active || ab.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = ab.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? ab(m) : ab.event,
                o = ab.Deferred(),
                p = ab.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!g)
                                for (g = {}; b = pc.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || mc) + "").replace(nc, "").replace(sc, lc[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = ab.trim(l.dataType || "*").toLowerCase().match(nb) || [""], null == l.crossDomain && (i = tc.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === lc[1] && i[2] === lc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (lc[3] || ("http:" === lc[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = ab.param(l.data, l.traditional)), K(uc, l, b, v), 2 === t) return v;
            j = l.global, j && 0 === ab.active++ && ab.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !rc.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = oc.test(e) ? e.replace(oc, "$1_=" + jc++) : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)), l.ifModified && (ab.lastModified[e] && v.setRequestHeader("If-Modified-Since", ab.lastModified[e]), ab.etag[e] && v.setRequestHeader("If-None-Match", ab.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + wc + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[k](l[k]);
            if (d = K(vc, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return ab.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return ab.get(a, void 0, b, "script")
        }
    }), ab.each(["get", "post"], function(a, b) {
        ab[b] = function(a, c, d, e) {
            return ab.isFunction(c) && (e = e || d, d = c, c = void 0), ab.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), ab.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        ab.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), ab._evalUrl = function(a) {
        return ab.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ab.fn.extend({
        wrapAll: function(a) {
            var b;
            return ab.isFunction(a) ? this.each(function(b) {
                ab(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = ab(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(ab.isFunction(a) ? function(b) {
                ab(this).wrapInner(a.call(this, b))
            } : function() {
                var b = ab(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = ab.isFunction(a);
            return this.each(function(c) {
                ab(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ab.nodeName(this, "body") || ab(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ab.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, ab.expr.filters.visible = function(a) {
        return !ab.expr.filters.hidden(a)
    };
    var yc = /%20/g,
        zc = /\[\]$/,
        Ac = /\r?\n/g,
        Bc = /^(?:submit|button|image|reset|file)$/i,
        Cc = /^(?:input|select|textarea|keygen)/i;
    ab.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = ab.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = ab.ajaxSettings && ab.ajaxSettings.traditional), ab.isArray(a) || a.jquery && !ab.isPlainObject(a)) ab.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(yc, "+")
    }, ab.fn.extend({
        serialize: function() {
            return ab.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = ab.prop(this, "elements");
                return a ? ab.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !ab(this).is(":disabled") && Cc.test(this.nodeName) && !Bc.test(a) && (this.checked || !yb.test(a))
            }).map(function(a, b) {
                var c = ab(this).val();
                return null == c ? null : ab.isArray(c) ? ab.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Ac, "\r\n")
                }
            }).get()
        }
    }), ab.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Dc = 0,
        Ec = {},
        Fc = {
            0: 200,
            1223: 204
        },
        Gc = ab.ajaxSettings.xhr();
    a.ActiveXObject && ab(a).on("unload", function() {
        for (var a in Ec) Ec[a]()
    }), Z.cors = !!Gc && "withCredentials" in Gc, Z.ajax = Gc = !!Gc, ab.ajaxTransport(function(a) {
        var b;
        return Z.cors || Gc && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Dc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Ec[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Fc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Ec[g] = b("abort"), f.send(a.hasContent && a.data || null)
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), ab.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return ab.globalEval(a), a
            }
        }
    }), ab.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), ab.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = ab("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), $.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Hc = [],
        Ic = /(=)\?(?=&|$)|\?\?/;
    ab.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Hc.pop() || ab.expando + "_" + jc++;
            return this[a] = !0, a
        }
    }), ab.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ic.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ic.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ab.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ic, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || ab.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Hc.push(e)), g && ab.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), ab.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || $;
        var d = gb.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = ab.buildFragment([a], b, e), e && e.length && ab(e).remove(), ab.merge([], d.childNodes))
    };
    var Jc = ab.fn.load;
    ab.fn.load = function(a, b, c) {
        if ("string" != typeof a && Jc) return Jc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h), a = a.slice(0, h)), ab.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && ab.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? ab("<div>").append(ab.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, ab.expr.filters.animated = function(a) {
        return ab.grep(ab.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Kc = a.document.documentElement;
    ab.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = ab.css(a, "position"),
                l = ab(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = ab.css(a, "top"), i = ab.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ab.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, ab.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                ab.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            return f ? (b = f.documentElement, ab.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ab.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ab.nodeName(a[0], "html") || (d = a.offset()), d.top += ab.css(a[0], "borderTopWidth", !0), d.left += ab.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - ab.css(c, "marginTop", !0),
                    left: b.left - d.left - ab.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Kc; a && !ab.nodeName(a, "html") && "static" === ab.css(a, "position");) a = a.offsetParent;
                return a || Kc
            })
        }
    }), ab.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        ab.fn[b] = function(e) {
            return qb(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), ab.each(["top", "left"], function(a, b) {
        ab.cssHooks[b] = w(Z.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qb.test(c) ? ab(a).position()[b] + "px" : c) : void 0
        })
    }), ab.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        ab.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            ab.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qb(this, function(b, c, d) {
                    var e;
                    return ab.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ab.css(b, c, g) : ab.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), ab.fn.size = function() {
        return this.length
    }, ab.fn.andSelf = ab.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ab
    });
    var Lc = a.jQuery,
        Mc = a.$;
    return ab.noConflict = function(b) {
        return a.$ === ab && (a.$ = Mc), b && a.jQuery === ab && (a.jQuery = Lc), ab
    }, typeof b === zb && (a.jQuery = a.$ = ab), ab
}), window.Modernizr = function(a, b, c) {
        function d(a) {
            t.cssText = a
        }

        function e(a, b) {
            return d(x.join(a + ";") + (b || ""))
        }

        function f(a, b) {
            return typeof a === b
        }

        function g(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function h(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!g(e, "-") && t[e] !== c) return "pfx" == b ? e : !0
            }
            return !1
        }

        function i(a, b, d) {
            for (var e in a) {
                var g = b[a[e]];
                if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function j(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + z.join(d + " ") + d).split(" ");
            return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "), i(e, b, c))
        }

        function k() {
            o.input = function(c) {
                for (var d = 0, e = c.length; e > d; d++) E[c[d]] = c[d] in u;
                return E.list && (E.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), E
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), o.inputtypes = function(a) {
                for (var d, e, f, g = 0, h = a.length; h > g; g++) u.setAttribute("type", e = a[g]), d = "text" !== u.type, d && (u.value = v, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, q.removeChild(u)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? u.checkValidity && u.checkValidity() === !1 : u.value != v)), D[a[g]] = !!d;
                return D
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var l, m, n = "2.6.2",
            o = {},
            p = !0,
            q = b.documentElement,
            r = "modernizr",
            s = b.createElement(r),
            t = s.style,
            u = b.createElement("input"),
            v = ":)",
            w = {}.toString,
            x = " -webkit- -moz- -o- -ms- ".split(" "),
            y = "Webkit Moz O ms",
            z = y.split(" "),
            A = y.toLowerCase().split(" "),
            B = {
                svg: "http://www.w3.org/2000/svg"
            },
            C = {},
            D = {},
            E = {},
            F = [],
            G = F.slice,
            H = function(a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"),
                    k = b.body,
                    l = k || b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : r + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', r, '">', a, "</style>"].join(""), j.id = r, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = q.style.overflow, q.style.overflow = "hidden", q.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), q.style.overflow = i), !!g
            },
            I = function(b) {
                var c = a.matchMedia || a.msMatchMedia;
                if (c) return c(b).matches;
                var d;
                return H("@media " + b + " { #" + r + " { position: absolute; } }", function(b) {
                    d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
                }), d
            },
            J = function() {
                function a(a, e) {
                    e = e || b.createElement(d[a] || "div"), a = "on" + a;
                    var g = a in e;
                    return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), e = null, g
                }
                var d = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return a
            }(),
            K = {}.hasOwnProperty;
        m = f(K, "undefined") || f(K.call, "undefined") ? function(a, b) {
            return b in a && f(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return K.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = G.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(G.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(G.call(arguments)))
                };
            return d
        }), C.flexbox = function() {
            return j("flexWrap")
        }, C.canvas = function() {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }, C.canvastext = function() {
            return !!o.canvas && !!f(b.createElement("canvas").getContext("2d").fillText, "function")
        }, C.webgl = function() {
            return !!a.WebGLRenderingContext
        }, C.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : H(["@media (", x.join("touch-enabled),("), r, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = 9 === a.offsetTop
            }), c
        }, C.geolocation = function() {
            return "geolocation" in navigator
        }, C.postmessage = function() {
            return !!a.postMessage
        }, C.websqldatabase = function() {
            return !!a.openDatabase
        }, C.indexedDB = function() {
            return !!j("indexedDB", a)
        }, C.hashchange = function() {
            return J("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }, C.history = function() {
            return !!a.history && !!history.pushState
        }, C.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }, C.websockets = function() {
            return "WebSocket" in a || "MozWebSocket" in a
        }, C.rgba = function() {
            return d("background-color:rgba(150,255,150,.5)"), g(t.backgroundColor, "rgba")
        }, C.hsla = function() {
            return d("background-color:hsla(120,40%,100%,.5)"), g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla")
        }, C.multiplebgs = function() {
            return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(t.background)
        }, C.backgroundsize = function() {
            return j("backgroundSize")
        }, C.borderimage = function() {
            return j("borderImage")
        }, C.borderradius = function() {
            return j("borderRadius")
        }, C.boxshadow = function() {
            return j("boxShadow")
        }, C.textshadow = function() {
            return "" === b.createElement("div").style.textShadow
        }, C.opacity = function() {
            return e("opacity:.55"), /^0.55$/.test(t.opacity)
        }, C.cssanimations = function() {
            return j("animationName")
        }, C.csscolumns = function() {
            return j("columnCount")
        }, C.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return d((a + "-webkit- ".split(" ").join(b + a) + x.join(c + a)).slice(0, -a.length)), g(t.backgroundImage, "gradient")
        }, C.cssreflections = function() {
            return j("boxReflect")
        }, C.csstransforms = function() {
            return !!j("transform")
        }, C.csstransforms3d = function() {
            var a = !!j("perspective");
            return a && "webkitPerspective" in q.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
                a = 9 === b.offsetLeft && 3 === b.offsetHeight
            }), a
        }, C.csstransitions = function() {
            return j("transition")
        }, C.fontface = function() {
            var a;
            return H('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
            }), a
        }, C.generatedcontent = function() {
            var a;
            return H(["#", r, "{font:0/0 a}#", r, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }), a
        }, C.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, C.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, C.localstorage = function() {
            try {
                return localStorage.setItem(r, r), localStorage.removeItem(r), !0
            } catch (a) {
                return !1
            }
        }, C.sessionstorage = function() {
            try {
                return sessionStorage.setItem(r, r), sessionStorage.removeItem(r), !0
            } catch (a) {
                return !1
            }
        }, C.webworkers = function() {
            return !!a.Worker
        }, C.applicationcache = function() {
            return !!a.applicationCache
        }, C.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect
        }, C.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == B.svg
        }, C.smil = function() {
            return !!b.createElementNS && /SVGAnimate/.test(w.call(b.createElementNS(B.svg, "animate")))
        }, C.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")))
        };
        for (var L in C) m(C, L) && (l = L.toLowerCase(), o[l] = C[L](), F.push((o[l] ? "" : "no-") + l));
        return o.input || k(), o.addTest = function(a, b) {
                if ("object" == typeof a)
                    for (var d in a) m(a, d) && o.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), o[a] !== c) return o;
                    b = "function" == typeof b ? b() : b, "undefined" != typeof p && p && (q.className += " " + (b ? "" : "no-") + a), o[a] = b
                }
                return o
            }, d(""), s = u = null,
            function(a, b) {
                function c(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function d() {
                    var a = r.elements;
                    return "string" == typeof a ? a.split(" ") : a
                }

                function e(a) {
                    var b = q[a[o]];
                    return b || (b = {}, p++, a[o] = p, q[p] = b), b
                }

                function f(a, c, d) {
                    if (c || (c = b), k) return c.createElement(a);
                    d || (d = e(c));
                    var f;
                    return f = d.cache[a] ? d.cache[a].cloneNode() : n.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), f.canHaveChildren && !m.test(a) ? d.frag.appendChild(f) : f
                }

                function g(a, c) {
                    if (a || (a = b), k) return a.createDocumentFragment();
                    c = c || e(a);
                    for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
                    return f
                }

                function h(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? f(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/\w+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function i(a) {
                    a || (a = b);
                    var d = e(a);
                    return r.shivCSS && !j && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), k || h(a, d), a
                }
                var j, k, l = a.html5 || {},
                    m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    n = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    o = "_html5shiv",
                    p = 0,
                    q = {};
                ! function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                        }()
                    } catch (c) {
                        j = !0, k = !0
                    }
                }();
                var r = {
                    elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: l.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: l.shivMethods !== !1,
                    type: "default",
                    shivDocument: i,
                    createElement: f,
                    createDocumentFragment: g
                };
                a.html5 = r, i(b)
            }(this, b), o._version = n, o._prefixes = x, o._domPrefixes = A, o._cssomPrefixes = z, o.mq = I, o.hasEvent = J, o.testProp = function(a) {
                return h([a])
            }, o.testAllProps = j, o.testStyles = H, o.prefixed = function(a, b, c) {
                return b ? j(a, b, c) : j(a, "pfx")
            }, q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""), o
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == q.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = r.shift();
            s = 1, a ? a.t ? o(function() {
                ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : s = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && o(function() {
                        v.removeChild(l)
                    }, 50);
                    for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload()
                }
            }
            var j = j || m.errorTimeout,
                l = b.createElement(a),
                n = 0,
                q = 0,
                t = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, q)
            }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
        }

        function j(a, b, c, d, f) {
            return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
        }

        function k() {
            var a = m;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l, m, n = b.documentElement,
            o = a.setTimeout,
            p = b.getElementsByTagName("script")[0],
            q = {}.toString,
            r = [],
            s = 0,
            t = "MozAppearance" in n.style,
            u = t && !!b.createRange().compareNode,
            v = u ? n : p.parentNode,
            n = a.opera && "[object Opera]" == q.call(a.opera),
            n = !!b.attachEvent && !n,
            w = t ? "object" : n ? "script" : "img",
            x = n ? "script" : w,
            y = Array.isArray || function(a) {
                return "[object Array]" == q.call(a)
            },
            z = [],
            A = {},
            B = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            };
        m = function(a) {
            function b(a) {
                var b, c, d, a = a.split("!"),
                    e = z.length,
                    f = a.pop(),
                    g = a.length,
                    f = {
                        url: f,
                        origUrl: f,
                        prefixes: a
                    };
                for (c = 0; g > c; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
                for (c = 0; e > c; c++) f = z[c](f);
                return f
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (l = function() {
                            var a = [].slice.call(arguments);
                            m.apply(this, a), n()
                        }), g(a, l, b, 0, j);
                        else if (Object(a) === a)
                            for (i in h = function() {
                                    var b, c = 0;
                                    for (b in a) a.hasOwnProperty(b) && c++;
                                    return c
                                }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
                                var a = [].slice.call(arguments);
                                m.apply(this, a), n()
                            } : l[i] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), n()
                                }
                            }(m[i])), g(a[i], l, b, i, j))
                    } else !c && n()
                }
                var h, i, j = !!a.test,
                    k = a.load || a.both,
                    l = a.callback || f,
                    m = l,
                    n = a.complete || f;
                c(j ? a.yep : a.nope, !!k), k && c(k)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (y(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, m.addPrefix = function(a, b) {
            B[a] = b
        }, m.addFilter = function(a) {
            z.push(a)
        }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function() {
            b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k, l, n = b.createElement("script"),
                e = e || m.errorTimeout;
            n.src = a;
            for (l in d) n.setAttribute(l, d[l]);
            c = j ? h : c || f, n.onreadystatechange = n.onload = function() {
                !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
            }, o(function() {
                k || (k = 1, c(1))
            }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var j, e = b.createElement("link"),
                c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (p.parentNode.insertBefore(e, p), o(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(a) {
        a.belowthefold = function(b, c) {
            var d = a(window).height() + a(window).scrollTop();
            return d <= a(b).offset().top - c.threshold
        }, a.abovethetop = function(b, c) {
            var d = a(window).scrollTop();
            return d >= a(b).offset().top + a(b).height() - c.threshold
        }, a.rightofscreen = function(b, c) {
            var d = a(window).width() + a(window).scrollLeft();
            return d <= a(b).offset().left - c.threshold
        }, a.leftofscreen = function(b, c) {
            var d = a(window).scrollLeft();
            return d >= a(b).offset().left + a(b).width() - c.threshold
        }, a.inviewport = function(b, c) {
            return !(a.rightofscreen(b, c) || a.leftofscreen(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
        }, a.extend(a.expr[":"], {
            "below-the-fold": function(b) {
                return a.belowthefold(b, {
                    threshold: 0
                })
            },
            "above-the-top": function(b) {
                return a.abovethetop(b, {
                    threshold: 0
                })
            },
            "left-of-screen": function(b) {
                return a.leftofscreen(b, {
                    threshold: 0
                })
            },
            "right-of-screen": function(b) {
                return a.rightofscreen(b, {
                    threshold: 0
                })
            },
            "in-viewport": function(b) {
                return a.inviewport(b, {
                    threshold: 0
                })
            }
        })
    }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
        },
        easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
        },
        easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
        },
        easeInBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
        },
        easeInBounce: function(a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(a, b, c, d, e) {
            return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
        }
    }),
    function(a) {
        a.simplePlaceholder = {
            placeholderClass: null,
            hidePlaceholder: function() {
                var b = a(this);
                b.val() == b.attr("placeholder") && b.data(a.simplePlaceholder.placeholderData) && b.val("").removeClass(a.simplePlaceholder.placeholderClass).data(a.simplePlaceholder.placeholderData, !1)
            },
            showPlaceholder: function() {
                var b = a(this);
                "" == b.val() && b.val(b.attr("placeholder")).addClass(a.simplePlaceholder.placeholderClass).data(a.simplePlaceholder.placeholderData, !0)
            },
            preventPlaceholderSubmit: function() {
                return a(this).find(".simple-placeholder").each(function() {
                    var b = a(this);
                    b.val() == b.attr("placeholder") && b.data(a.simplePlaceholder.placeholderData) && b.val("")
                }), !0
            }
        }, a.fn.simplePlaceholder = function(b) {
            if (void 0 == document.createElement("input").placeholder) {
                var c = {
                    placeholderClass: "placeholding",
                    placeholderData: "simplePlaceholder.placeholding"
                };
                b && a.extend(c, b), a.extend(a.simplePlaceholder, c), this.each(function() {
                    var b = a(this);
                    b.focus(a.simplePlaceholder.hidePlaceholder), b.blur(a.simplePlaceholder.showPlaceholder), b.data(a.simplePlaceholder.placeholderData, !1), "" == b.val() && (b.val(b.attr("placeholder")), b.addClass(a.simplePlaceholder.placeholderClass), b.data(a.simplePlaceholder.placeholderData, !0)), b.addClass("simple-placeholder"), a(this.form).submit(a.simplePlaceholder.preventPlaceholderSubmit)
                })
            }
            return this
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.fn.fitVids = function(b) {
            var c = {
                    customSelector: null
                },
                d = document.createElement("div"),
                e = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
            return d.className = "fit-vids-style", d.innerHTML = "&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>", e.parentNode.insertBefore(d, e), b && a.extend(c, b), this.each(function() {
                var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
                c.customSelector && b.push(c.customSelector);
                var d = a(this).find(b.join(","));
                d.each(function() {
                    var b = a(this);
                    if (!("embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                        var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(),
                            d = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10),
                            e = c / d;
                        if (!b.attr("id")) {
                            var f = "fitvid" + Math.floor(999999 * Math.random());
                            b.attr("id", f)
                        }
                        b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"), b.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(jQuery),
    function(a) {
        a.fn.hoverIntent = function(b, c, d) {
            var e = {
                interval: 100,
                sensitivity: 7,
                timeout: 0
            };
            e = "object" == typeof b ? a.extend(e, b) : a.isFunction(c) ? a.extend(e, {
                over: b,
                out: c,
                selector: d
            }) : a.extend(e, {
                over: b,
                out: b,
                selector: c
            });
            var f, g, h, i, j = function(a) {
                    f = a.pageX, g = a.pageY
                },
                k = function(b, c) {
                    return c.hoverIntent_t = clearTimeout(c.hoverIntent_t), Math.abs(h - f) + Math.abs(i - g) < e.sensitivity ? (a(c).off("mousemove.hoverIntent", j), c.hoverIntent_s = 1, e.over.apply(c, [b])) : (h = f, i = g, c.hoverIntent_t = setTimeout(function() {
                        k(b, c)
                    }, e.interval), void 0)
                },
                l = function(a, b) {
                    return b.hoverIntent_t = clearTimeout(b.hoverIntent_t), b.hoverIntent_s = 0, e.out.apply(b, [a])
                },
                m = function(b) {
                    var c = jQuery.extend({}, b),
                        d = this;
                    d.hoverIntent_t && (d.hoverIntent_t = clearTimeout(d.hoverIntent_t)), "mouseenter" == b.type ? (h = c.pageX, i = c.pageY, a(d).on("mousemove.hoverIntent", j), 1 != d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
                        k(c, d)
                    }, e.interval))) : (a(d).off("mousemove.hoverIntent", j), 1 == d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
                        l(c, d)
                    }, e.timeout)))
                };
            return this.on({
                "mouseenter.hoverIntent": m,
                "mouseleave.hoverIntent": m
            }, e.selector)
        }
    }(jQuery),
    function(a) {
        "use strict";
        var b = function() {
            var b = {
                    bcClass: "sf-breadcrumb",
                    menuClass: "sf-js-enabled",
                    anchorClass: "sf-with-ul",
                    menuArrowClass: "sf-arrows"
                },
                c = function() {
                    var b = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                    return b && a(window).load(function() {
                        a("body").children().on("click", a.noop)
                    }), b
                }(),
                d = function() {
                    var a = document.documentElement.style;
                    return "behavior" in a && "fill" in a && /iemobile/i.test(navigator.userAgent)
                }(),
                e = function(a, c) {
                    var d = b.menuClass;
                    c.cssArrows && (d += " " + b.menuArrowClass), a.toggleClass(d)
                },
                f = function(c, d) {
                    return c.find("li." + d.pathClass).slice(0, d.pathLevels).addClass(d.hoverClass + " " + b.bcClass).filter(function() {
                        return a(this).children(d.popUpSelector).hide().show().length
                    }).removeClass(d.pathClass)
                },
                g = function(a) {
                    a.children("a").toggleClass(b.anchorClass)
                },
                h = function(a) {
                    var b = a.css("ms-touch-action");
                    b = "pan-y" === b ? "auto" : "pan-y", a.css("ms-touch-action", b)
                },
                i = function(b, e) {
                    var f = "li:has(" + e.popUpSelector + ")";
                    a.fn.hoverIntent && !e.disableHI ? b.hoverIntent(k, l, f) : b.on("mouseenter.superfish", f, k).on("mouseleave.superfish", f, l);
                    var g = "MSPointerDown.superfish";
                    c || (g += " touchend.superfish"), d && (g += " mousedown.superfish"), b.on("focusin.superfish", "li", k).on("focusout.superfish", "li", l).on(g, "a", e, j)
                },
                j = function(b) {
                    var c = a(this),
                        d = c.siblings(b.data.popUpSelector);
                    d.length > 0 && d.is(":hidden") && (c.one("click.superfish", !1), "MSPointerDown" === b.type ? c.trigger("focus") : a.proxy(k, c.parent("li"))())
                },
                k = function() {
                    var b = a(this),
                        c = o(b);
                    clearTimeout(c.sfTimer), b.siblings().superfish("hide").end().superfish("show")
                },
                l = function() {
                    var b = a(this),
                        d = o(b);
                    c ? a.proxy(m, b, d)() : (clearTimeout(d.sfTimer), d.sfTimer = setTimeout(a.proxy(m, b, d), d.delay))
                },
                m = function(b) {
                    b.retainPath = a.inArray(this[0], b.$path) > -1, this.superfish("hide"), this.parents("." + b.hoverClass).length || (b.onIdle.call(n(this)), b.$path.length && a.proxy(k, b.$path)())
                },
                n = function(a) {
                    return a.closest("." + b.menuClass)
                },
                o = function(a) {
                    return n(a).data("sf-options")
                };
            return {
                hide: function(b) {
                    if (this.length) {
                        var c = this,
                            d = o(c);
                        if (!d) return this;
                        var e = d.retainPath === !0 ? d.$path : "",
                            f = c.find("li." + d.hoverClass).add(this).not(e).removeClass(d.hoverClass).children(d.popUpSelector),
                            g = d.speedOut;
                        b && (f.show(), g = 0), d.retainPath = !1, d.onBeforeHide.call(f), f.stop(!0, !0).animate(d.animationOut, g, function() {
                            var b = a(this);
                            d.onHide.call(b)
                        })
                    }
                    return this
                },
                show: function() {
                    var a = o(this);
                    if (!a) return this;
                    var b = this.addClass(a.hoverClass),
                        c = b.children(a.popUpSelector);
                    return a.onBeforeShow.call(c), c.stop(!0, !0).animate(a.animation, a.speed, function() {
                        a.onShow.call(c)
                    }), this
                },
                destroy: function() {
                    return this.each(function() {
                        var c, d = a(this),
                            f = d.data("sf-options");
                        return f ? (c = d.find(f.popUpSelector).parent("li"), clearTimeout(f.sfTimer), e(d, f), g(c), h(d), d.off(".superfish").off(".hoverIntent"), c.children(f.popUpSelector).attr("style", function(a, b) {
                            return b.replace(/display[^;]+;?/g, "")
                        }), f.$path.removeClass(f.hoverClass + " " + b.bcClass).addClass(f.pathClass), d.find("." + f.hoverClass).removeClass(f.hoverClass), f.onDestroy.call(d), void d.removeData("sf-options")) : !1
                    })
                },
                init: function(c) {
                    return this.each(function() {
                        var d = a(this);
                        if (d.data("sf-options")) return !1;
                        var j = a.extend({}, a.fn.superfish.defaults, c),
                            k = d.find(j.popUpSelector).parent("li");
                        j.$path = f(d, j), d.data("sf-options", j), e(d, j), g(k), h(d), i(d, j), k.not("." + b.bcClass).superfish("hide", !0), j.onInit.call(this)
                    })
                }
            }
        }();
        a.fn.superfish = function(c) {
            return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? a.error("Method " + c + " does not exist on jQuery.fn.superfish") : b.init.apply(this, arguments)
        }, a.fn.superfish.defaults = {
            popUpSelector: "ul,.sf-mega",
            hoverClass: "sfHover",
            pathClass: "overrideThisToUse",
            pathLevels: 1,
            delay: 800,
            animation: {
                opacity: "show"
            },
            animationOut: {
                opacity: "hide"
            },
            speed: "normal",
            speedOut: "fast",
            cssArrows: !0,
            disableHI: !1,
            onInit: a.noop,
            onBeforeShow: a.noop,
            onShow: a.noop,
            onBeforeHide: a.noop,
            onHide: a.noop,
            onIdle: a.noop,
            onDestroy: a.noop
        }, a.fn.extend({
            hideSuperfishUl: b.hide,
            showSuperfishUl: b.show
        })
    }(jQuery), ! function(a) {
        var b = {},
            c = {
                mode: "horizontal",
                slideSelector: "",
                infiniteLoop: !0,
                hideControlOnEnd: !1,
                speed: 500,
                easing: null,
                slideMargin: 0,
                startSlide: 0,
                randomStart: !1,
                captions: !1,
                ticker: !1,
                tickerHover: !1,
                adaptiveHeight: !1,
                adaptiveHeightSpeed: 500,
                video: !1,
                useCSS: !0,
                preloadImages: "visible",
                responsive: !0,
                touchEnabled: !0,
                swipeThreshold: 50,
                oneToOneTouch: !0,
                preventDefaultSwipeX: !0,
                preventDefaultSwipeY: !1,
                pager: !0,
                pagerType: "full",
                pagerShortSeparator: " / ",
                pagerSelector: null,
                buildPager: null,
                pagerCustom: null,
                controls: !0,
                nextText: "Next",
                prevText: "Prev",
                nextSelector: null,
                prevSelector: null,
                autoControls: !1,
                startText: "Start",
                stopText: "Stop",
                autoControlsCombine: !1,
                autoControlsSelector: null,
                auto: !1,
                pause: 4e3,
                autoStart: !0,
                autoDirection: "next",
                autoHover: !1,
                autoDelay: 0,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 0,
                slideWidth: 0,
                onSliderLoad: function() {},
                onSlideBefore: function() {},
                onSlideAfter: function() {},
                onSlideNext: function() {},
                onSlidePrev: function() {}
            };
        a.fn.bxSlider = function(d) {
            if (0 == this.length) return this;
            if (this.length > 1) return this.each(function() {
                a(this).bxSlider(d)
            }), this;
            var e = {},
                f = this;
            b.el = this;
            var g = a(window).width(),
                h = a(window).height(),
                j = function() {
                    e.settings = a.extend({}, c, d), e.settings.slideWidth = parseInt(e.settings.slideWidth), e.children = f.children(e.settings.slideSelector), e.children.length < e.settings.minSlides && (e.settings.minSlides = e.children.length), e.children.length < e.settings.maxSlides && (e.settings.maxSlides = e.children.length), e.settings.randomStart && (e.settings.startSlide = Math.floor(Math.random() * e.children.length)), e.active = {
                        index: e.settings.startSlide
                    }, e.carousel = e.settings.minSlides > 1 || e.settings.maxSlides > 1, e.carousel && (e.settings.preloadImages = "all"), e.minThreshold = e.settings.minSlides * e.settings.slideWidth + (e.settings.minSlides - 1) * e.settings.slideMargin, e.maxThreshold = e.settings.maxSlides * e.settings.slideWidth + (e.settings.maxSlides - 1) * e.settings.slideMargin, e.working = !1, e.controls = {}, e.interval = null, e.animProp = "vertical" == e.settings.mode ? "top" : "left", e.usingCSS = e.settings.useCSS && "fade" != e.settings.mode && function() {
                        var a = document.createElement("div"),
                            b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var c in b)
                            if (void 0 !== a.style[b[c]]) return e.cssPrefix = b[c].replace("Perspective", "").toLowerCase(), e.animProp = "-" + e.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" == e.settings.mode && (e.settings.maxSlides = e.settings.minSlides), f.data("origStyle", f.attr("style")), f.children(e.settings.slideSelector).each(function() {
                        a(this).data("origStyle", a(this).attr("style"))
                    }), k()
                },
                k = function() {
                    f.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), e.viewport = f.parent(), e.loader = a('<div class="bx-loading" />'), e.viewport.prepend(e.loader), f.css({
                        width: "horizontal" == e.settings.mode ? 100 * e.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), e.usingCSS && e.settings.easing ? f.css("-" + e.cssPrefix + "-transition-timing-function", e.settings.easing) : e.settings.easing || (e.settings.easing = "swing"), q(), e.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), e.viewport.parent().css({
                        maxWidth: o()
                    }), e.settings.pager || e.viewport.parent().css({
                        margin: "0 auto 0px"
                    }), e.children.css({
                        "float": "horizontal" == e.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), e.children.css("width", p()), "horizontal" == e.settings.mode && e.settings.slideMargin > 0 && e.children.css("marginRight", e.settings.slideMargin), "vertical" == e.settings.mode && e.settings.slideMargin > 0 && e.children.css("marginBottom", e.settings.slideMargin), "fade" == e.settings.mode && (e.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), e.children.eq(e.settings.startSlide).css({
                        zIndex: 50,
                        display: "block"
                    })), e.controls.el = a('<div class="bx-controls" />'), e.settings.captions && z(), e.active.last = e.settings.startSlide == r() - 1, e.settings.video && f.fitVids();
                    var b = e.children.eq(e.settings.startSlide);
                    "all" == e.settings.preloadImages && (b = e.children), e.settings.ticker ? e.settings.pager = !1 : (e.settings.pager && w(), e.settings.controls && x(), e.settings.auto && e.settings.autoControls && y(), (e.settings.controls || e.settings.autoControls || e.settings.pager) && e.viewport.after(e.controls.el)), l(b, m)
                },
                l = function(b, c) {
                    var d = b.find("img, iframe").length;
                    if (0 == d) return void c();
                    var e = 0;
                    b.find("img, iframe").each(function() {
                        a(this).one("load", function() {
                            ++e == d && c()
                        }).each(function() {
                            this.complete && a(this).load()
                        })
                    })
                },
                m = function() {
                    if (e.settings.infiniteLoop && "fade" != e.settings.mode && !e.settings.ticker) {
                        var b = "vertical" == e.settings.mode ? e.settings.minSlides : e.settings.maxSlides,
                            c = e.children.slice(0, b).clone().addClass("bx-clone"),
                            d = e.children.slice(-b).clone().addClass("bx-clone");
                        f.append(c).prepend(d)
                    }
                    e.loader.remove(), t(), "vertical" == e.settings.mode && (e.settings.adaptiveHeight = !0), e.viewport.height(n()), f.redrawSlider(), e.settings.onSliderLoad(e.active.index), e.initialized = !0, e.settings.responsive && a(window).bind("resize", Q), e.settings.auto && e.settings.autoStart && J(), e.settings.ticker && K(), e.settings.pager && F(e.settings.startSlide), e.settings.controls && I(), e.settings.touchEnabled && !e.settings.ticker && M()
                },
                n = function() {
                    var b = 0,
                        c = a();
                    if ("vertical" == e.settings.mode || e.settings.adaptiveHeight)
                        if (e.carousel) {
                            var d = 1 == e.settings.moveSlides ? e.active.index : e.active.index * s();
                            for (c = e.children.eq(d), i = 1; i <= e.settings.maxSlides - 1; i++) c = c.add(d + i >= e.children.length ? e.children.eq(i - 1) : e.children.eq(d + i))
                        } else c = e.children.eq(e.active.index);
                    else c = e.children;
                    return "vertical" == e.settings.mode ? (c.each(function() {
                        b += a(this).outerHeight()
                    }), e.settings.slideMargin > 0 && (b += e.settings.slideMargin * (e.settings.minSlides - 1))) : b = Math.max.apply(Math, c.map(function() {
                        return a(this).outerHeight(!1)
                    }).get()), b
                },
                o = function() {
                    var a = "100%";
                    return e.settings.slideWidth > 0 && (a = "horizontal" == e.settings.mode ? e.settings.maxSlides * e.settings.slideWidth + (e.settings.maxSlides - 1) * e.settings.slideMargin : e.settings.slideWidth), a
                },
                p = function() {
                    var a = e.settings.slideWidth,
                        b = e.viewport.width();
                    return 0 == e.settings.slideWidth || e.settings.slideWidth > b && !e.carousel || "vertical" == e.settings.mode ? a = b : e.settings.maxSlides > 1 && "horizontal" == e.settings.mode && (b > e.maxThreshold || b < e.minThreshold && (a = (b - e.settings.slideMargin * (e.settings.minSlides - 1)) / e.settings.minSlides)), a
                },
                q = function() {
                    var a = 1;
                    if ("horizontal" == e.settings.mode && e.settings.slideWidth > 0)
                        if (e.viewport.width() < e.minThreshold) a = e.settings.minSlides;
                        else if (e.viewport.width() > e.maxThreshold) a = e.settings.maxSlides;
                    else {
                        var b = e.children.first().width();
                        a = Math.floor(e.viewport.width() / b)
                    } else "vertical" == e.settings.mode && (a = e.settings.minSlides);
                    return a
                },
                r = function() {
                    var a = 0;
                    if (e.settings.moveSlides > 0)
                        if (e.settings.infiniteLoop) a = e.children.length / s();
                        else
                            for (var b = 0, c = 0; b < e.children.length;) ++a, b = c + q(), c += e.settings.moveSlides <= q() ? e.settings.moveSlides : q();
                    else a = Math.ceil(e.children.length / q());
                    return a
                },
                s = function() {
                    return e.settings.moveSlides > 0 && e.settings.moveSlides <= q() ? e.settings.moveSlides : q()
                },
                t = function() {
                    if (e.children.length > e.settings.maxSlides && e.active.last && !e.settings.infiniteLoop) {
                        if ("horizontal" == e.settings.mode) {
                            var a = e.children.last(),
                                b = a.position();
                            u(-(b.left - (e.viewport.width() - a.width())), "reset", 0)
                        } else if ("vertical" == e.settings.mode) {
                            var c = e.children.length - e.settings.minSlides,
                                b = e.children.eq(c).position();
                            u(-b.top, "reset", 0)
                        }
                    } else {
                        var b = e.children.eq(e.active.index * s()).position();
                        e.active.index == r() - 1 && (e.active.last = !0), void 0 != b && ("horizontal" == e.settings.mode ? u(-b.left, "reset", 0) : "vertical" == e.settings.mode && u(-b.top, "reset", 0))
                    }
                },
                u = function(a, b, c, d) {
                    if (e.usingCSS) {
                        var g = "vertical" == e.settings.mode ? "translate3d(0, " + a + "px, 0)" : "translate3d(" + a + "px, 0, 0)";
                        f.css("-" + e.cssPrefix + "-transition-duration", c / 1e3 + "s"), "slide" == b ? (f.css(e.animProp, g), f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), G()
                        })) : "reset" == b ? f.css(e.animProp, g) : "ticker" == b && (f.css("-" + e.cssPrefix + "-transition-timing-function", "linear"), f.css(e.animProp, g), f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), u(d.resetValue, "reset", 0), L()
                        }))
                    } else {
                        var h = {};
                        h[e.animProp] = a, "slide" == b ? f.animate(h, c, e.settings.easing, function() {
                            G()
                        }) : "reset" == b ? f.css(e.animProp, a) : "ticker" == b && f.animate(h, speed, "linear", function() {
                            u(d.resetValue, "reset", 0), L()
                        })
                    }
                },
                v = function() {
                    for (var b = "", c = r(), d = 0; c > d; d++) {
                        var f = "";
                        e.settings.buildPager && a.isFunction(e.settings.buildPager) ? (f = e.settings.buildPager(d), e.pagerEl.addClass("bx-custom-pager")) : (f = d + 1, e.pagerEl.addClass("bx-default-pager")), b += '<div class="bx-pager-item"><a href="" data-slide-index="' + d + '" class="bx-pager-link">' + f + "</a></div>"
                    }
                    e.pagerEl.html(b)
                },
                w = function() {
                    e.settings.pagerCustom ? e.pagerEl = a(e.settings.pagerCustom) : (e.pagerEl = a('<div class="bx-pager" />'), e.settings.pagerSelector ? a(e.settings.pagerSelector).html(e.pagerEl) : e.controls.el.addClass("bx-has-pager").append(e.pagerEl), v()), e.pagerEl.delegate("a", "click", E)
                },
                x = function() {
                    e.controls.next = a('<a class="bx-next" href="">' + e.settings.nextText + "</a>"), e.controls.prev = a('<a class="bx-prev" href="">' + e.settings.prevText + "</a>"), e.controls.next.bind("click", A), e.controls.prev.bind("click", B), e.settings.nextSelector && a(e.settings.nextSelector).append(e.controls.next), e.settings.prevSelector && a(e.settings.prevSelector).append(e.controls.prev), e.settings.nextSelector || e.settings.prevSelector || (e.controls.directionEl = a('<div class="bx-controls-direction" />'), e.controls.directionEl.append(e.controls.prev).append(e.controls.next), e.controls.el.addClass("bx-has-controls-direction").append(e.controls.directionEl))
                },
                y = function() {
                    e.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + e.settings.startText + "</a></div>"), e.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + e.settings.stopText + "</a></div>"), e.controls.autoEl = a('<div class="bx-controls-auto" />'), e.controls.autoEl.delegate(".bx-start", "click", C), e.controls.autoEl.delegate(".bx-stop", "click", D), e.settings.autoControlsCombine ? e.controls.autoEl.append(e.controls.start) : e.controls.autoEl.append(e.controls.start).append(e.controls.stop), e.settings.autoControlsSelector ? a(e.settings.autoControlsSelector).html(e.controls.autoEl) : e.controls.el.addClass("bx-has-controls-auto").append(e.controls.autoEl), H(e.settings.autoStart ? "stop" : "start")
                },
                z = function() {
                    e.children.each(function() {
                        var b = a(this).find("img:first").attr("title");
                        void 0 != b && ("" + b).length && a(this).append('<div class="bx-caption"><span>' + b + "</span></div>")
                    })
                },
                A = function(a) {
                    e.settings.auto && f.stopAuto(), f.goToNextSlide(), a.preventDefault()
                },
                B = function(a) {
                    e.settings.auto && f.stopAuto(), f.goToPrevSlide(), a.preventDefault()
                },
                C = function(a) {
                    f.startAuto(), a.preventDefault()
                },
                D = function(a) {
                    f.stopAuto(), a.preventDefault()
                },
                E = function(b) {
                    e.settings.auto && f.stopAuto();
                    var c = a(b.currentTarget),
                        d = parseInt(c.attr("data-slide-index"));
                    d != e.active.index && f.goToSlide(d), b.preventDefault()
                },
                F = function(b) {
                    var c = e.children.length;
                    return "short" == e.settings.pagerType ? (e.settings.maxSlides > 1 && (c = Math.ceil(e.children.length / e.settings.maxSlides)), void e.pagerEl.html(b + 1 + e.settings.pagerShortSeparator + c)) : (e.pagerEl.find("a").removeClass("active"), void e.pagerEl.each(function(c, d) {
                        a(d).find("a").eq(b).addClass("active")
                    }))
                },
                G = function() {
                    if (e.settings.infiniteLoop) {
                        var a = "";
                        0 == e.active.index ? a = e.children.eq(0).position() : e.active.index == r() - 1 && e.carousel ? a = e.children.eq((r() - 1) * s()).position() : e.active.index == e.children.length - 1 && (a = e.children.eq(e.children.length - 1).position()), "horizontal" == e.settings.mode ? u(-a.left, "reset", 0) : "vertical" == e.settings.mode && u(-a.top, "reset", 0)
                    }
                    e.working = !1, e.settings.onSlideAfter(e.children.eq(e.active.index), e.oldIndex, e.active.index)
                },
                H = function(a) {
                    e.settings.autoControlsCombine ? e.controls.autoEl.html(e.controls[a]) : (e.controls.autoEl.find("a").removeClass("active"), e.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active"))
                },
                I = function() {
                    1 == r() ? (e.controls.prev.addClass("disabled"), e.controls.next.addClass("disabled")) : !e.settings.infiniteLoop && e.settings.hideControlOnEnd && (0 == e.active.index ? (e.controls.prev.addClass("disabled"), e.controls.next.removeClass("disabled")) : e.active.index == r() - 1 ? (e.controls.next.addClass("disabled"), e.controls.prev.removeClass("disabled")) : (e.controls.prev.removeClass("disabled"), e.controls.next.removeClass("disabled")))
                },
                J = function() {
                    e.settings.autoDelay > 0 ? setTimeout(f.startAuto, e.settings.autoDelay) : f.startAuto(), e.settings.autoHover && f.hover(function() {
                        e.interval && (f.stopAuto(!0), e.autoPaused = !0)
                    }, function() {
                        e.autoPaused && (f.startAuto(!0), e.autoPaused = null)
                    })
                },
                K = function() {
                    var b = 0;
                    if ("next" == e.settings.autoDirection) f.append(e.children.clone().addClass("bx-clone"));
                    else {
                        f.prepend(e.children.clone().addClass("bx-clone"));
                        var c = e.children.first().position();
                        b = "horizontal" == e.settings.mode ? -c.left : -c.top
                    }
                    u(b, "reset", 0), e.settings.pager = !1, e.settings.controls = !1, e.settings.autoControls = !1, e.settings.tickerHover && !e.usingCSS && e.viewport.hover(function() {
                        f.stop()
                    }, function() {
                        var b = 0;
                        e.children.each(function() {
                            b += "horizontal" == e.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0)
                        });
                        var c = e.settings.speed / b,
                            d = "horizontal" == e.settings.mode ? "left" : "top",
                            g = c * (b - Math.abs(parseInt(f.css(d))));
                        L(g)
                    }), L()
                },
                L = function(a) {
                    speed = a ? a : e.settings.speed;
                    var b = {
                            left: 0,
                            top: 0
                        },
                        c = {
                            left: 0,
                            top: 0
                        };
                    "next" == e.settings.autoDirection ? b = f.find(".bx-clone").first().position() : c = e.children.first().position();
                    var d = "horizontal" == e.settings.mode ? -b.left : -b.top,
                        g = "horizontal" == e.settings.mode ? -c.left : -c.top,
                        h = {
                            resetValue: g
                        };
                    u(d, "ticker", speed, h)
                },
                M = function() {
                    e.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, e.viewport.bind("touchstart", N)
                },
                N = function(a) {
                    if (e.working) a.preventDefault();
                    else {
                        e.touch.originalPos = f.position();
                        var b = a.originalEvent;
                        e.touch.start.x = b.changedTouches[0].pageX, e.touch.start.y = b.changedTouches[0].pageY, e.viewport.bind("touchmove", O), e.viewport.bind("touchend", P)
                    }
                },
                O = function(a) {
                    var b = a.originalEvent,
                        c = Math.abs(b.changedTouches[0].pageX - e.touch.start.x),
                        d = Math.abs(b.changedTouches[0].pageY - e.touch.start.y);
                    if (3 * c > d && e.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * d > c && e.settings.preventDefaultSwipeY && a.preventDefault(), "fade" != e.settings.mode && e.settings.oneToOneTouch) {
                        var f = 0;
                        if ("horizontal" == e.settings.mode) {
                            var g = b.changedTouches[0].pageX - e.touch.start.x;
                            f = e.touch.originalPos.left + g
                        } else {
                            var g = b.changedTouches[0].pageY - e.touch.start.y;
                            f = e.touch.originalPos.top + g
                        }
                        u(f, "reset", 0)
                    }
                },
                P = function(a) {
                    e.viewport.unbind("touchmove", O);
                    var b = a.originalEvent,
                        c = 0;
                    if (e.touch.end.x = b.changedTouches[0].pageX, e.touch.end.y = b.changedTouches[0].pageY, "fade" == e.settings.mode) {
                        var d = Math.abs(e.touch.start.x - e.touch.end.x);
                        d >= e.settings.swipeThreshold && (e.touch.start.x > e.touch.end.x ? f.goToNextSlide() : f.goToPrevSlide(), f.stopAuto())
                    } else {
                        var d = 0;
                        "horizontal" == e.settings.mode ? (d = e.touch.end.x - e.touch.start.x, c = e.touch.originalPos.left) : (d = e.touch.end.y - e.touch.start.y, c = e.touch.originalPos.top), !e.settings.infiniteLoop && (0 == e.active.index && d > 0 || e.active.last && 0 > d) ? u(c, "reset", 200) : Math.abs(d) >= e.settings.swipeThreshold ? (0 > d ? f.goToNextSlide() : f.goToPrevSlide(), f.stopAuto()) : u(c, "reset", 200)
                    }
                    e.viewport.unbind("touchend", P)
                },
                Q = function() {
                    var b = a(window).width(),
                        c = a(window).height();
                    (g != b || h != c) && (g = b, h = c, f.redrawSlider())
                };
            return f.goToSlide = function(b, c) {
                if (!e.working && e.active.index != b)
                    if (e.working = !0, e.oldIndex = e.active.index, e.active.index = 0 > b ? r() - 1 : b >= r() ? 0 : b, e.settings.onSlideBefore(e.children.eq(e.active.index), e.oldIndex, e.active.index), "next" == c ? e.settings.onSlideNext(e.children.eq(e.active.index), e.oldIndex, e.active.index) : "prev" == c && e.settings.onSlidePrev(e.children.eq(e.active.index), e.oldIndex, e.active.index), e.active.last = e.active.index >= r() - 1, e.settings.pager && F(e.active.index), e.settings.controls && I(), "fade" == e.settings.mode) e.settings.adaptiveHeight && e.viewport.height() != n() && e.viewport.animate({
                        height: n()
                    }, e.settings.adaptiveHeightSpeed), e.children.filter(":visible").fadeOut(e.settings.speed).css({
                        zIndex: 0
                    }), e.children.eq(e.active.index).css("zIndex", 51).fadeIn(e.settings.speed, function() {
                        a(this).css("zIndex", 50), G()
                    });
                    else {
                        e.settings.adaptiveHeight && e.viewport.height() != n() && e.viewport.animate({
                            height: n()
                        }, e.settings.adaptiveHeightSpeed);
                        var d = 0,
                            g = {
                                left: 0,
                                top: 0
                            };
                        if (!e.settings.infiniteLoop && e.carousel && e.active.last)
                            if ("horizontal" == e.settings.mode) {
                                var h = e.children.eq(e.children.length - 1);
                                g = h.position(), d = e.viewport.width() - h.outerWidth()
                            } else {
                                var i = e.children.length - e.settings.minSlides;
                                g = e.children.eq(i).position()
                            } else if (e.carousel && e.active.last && "prev" == c) {
                            var j = 1 == e.settings.moveSlides ? e.settings.maxSlides - s() : (r() - 1) * s() - (e.children.length - e.settings.maxSlides),
                                h = f.children(".bx-clone").eq(j);
                            g = h.position()
                        } else if ("next" == c && 0 == e.active.index) g = f.find("> .bx-clone").eq(e.settings.maxSlides).position(), e.active.last = !1;
                        else if (b >= 0) {
                            var k = b * s();
                            g = e.children.eq(k).position()
                        }
                        if ("undefined" != typeof g) {
                            var l = "horizontal" == e.settings.mode ? -(g.left - d) : -g.top;
                            u(l, "slide", e.settings.speed)
                        }
                    }
            }, f.goToNextSlide = function() {
                if (e.settings.infiniteLoop || !e.active.last) {
                    var a = parseInt(e.active.index) + 1;
                    f.goToSlide(a, "next")
                }
            }, f.goToPrevSlide = function() {
                if (e.settings.infiniteLoop || 0 != e.active.index) {
                    var a = parseInt(e.active.index) - 1;
                    f.goToSlide(a, "prev")
                }
            }, f.startAuto = function(a) {
                e.interval || (e.interval = setInterval(function() {
                    "next" == e.settings.autoDirection ? f.goToNextSlide() : f.goToPrevSlide()
                }, e.settings.pause), e.settings.autoControls && 1 != a && H("stop"))
            }, f.stopAuto = function(a) {
                e.interval && (clearInterval(e.interval), e.interval = null, e.settings.autoControls && 1 != a && H("start"))
            }, f.getCurrentSlide = function() {
                return e.active.index
            }, f.getSlideCount = function() {
                return e.children.length
            }, f.redrawSlider = function() {
                e.children.add(f.find(".bx-clone")).outerWidth(p()), e.viewport.css("height", n()), e.settings.ticker || t(), e.active.last && (e.active.index = r() - 1), e.active.index >= r() && (e.active.last = !0), e.settings.pager && !e.settings.pagerCustom && (v(), F(e.active.index))
            }, f.destroySlider = function() {
                e.initialized && (e.initialized = !1, a(".bx-clone", this).remove(), e.children.each(function() {
                    void 0 != a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style")
                }), void 0 != a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), e.controls.el && e.controls.el.remove(), e.controls.next && e.controls.next.remove(), e.controls.prev && e.controls.prev.remove(), e.pagerEl && e.pagerEl.remove(), a(".bx-caption", this).remove(), e.controls.autoEl && e.controls.autoEl.remove(), clearInterval(e.interval), e.settings.responsive && a(window).unbind("resize", Q))
            }, f.reloadSlider = function(a) {
                void 0 != a && (d = a), f.destroySlider(), j()
            }, j(), this
        }
    }(jQuery),
    function(a) {
        var b, c, d, e, f, g, h, i = "Close",
            j = "BeforeClose",
            k = "AfterClose",
            l = "BeforeAppend",
            m = "MarkupParse",
            n = "Open",
            o = "Change",
            p = "mfp",
            q = "." + p,
            r = "mfp-ready",
            s = "mfp-removing",
            t = "mfp-prevent-close",
            u = function() {},
            v = !!window.jQuery,
            w = a(window),
            x = function(a, c) {
                b.ev.on(p + a + q, c)
            },
            y = function(b, c, d, e) {
                var f = document.createElement("div");
                return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
            },
            z = function(c, d) {
                b.ev.triggerHandler(p + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
            },
            A = function(c) {
                return c === h && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), h = c), b.currTemplate.closeBtn
            },
            B = function() {
                a.magnificPopup.instance || (b = new u, b.init(), a.magnificPopup.instance = b)
            },
            C = function() {
                var a = document.createElement("p").style,
                    b = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== a.transition) return !0;
                for (; b.length;)
                    if (b.pop() + "Transition" in a) return !0;
                return !1
            };
        u.prototype = {
            constructor: u,
            init: function() {
                var c = navigator.appVersion;
                b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = C(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), e = a(document), b.popupsCache = {}
            },
            open: function(c) {
                d || (d = a(document.body));
                var f;
                if (c.isObj === !1) {
                    b.items = c.items.toArray(), b.index = 0;
                    var h, i = c.items;
                    for (f = 0; i.length > f; f++)
                        if (h = i[f], h.parsed && (h = h.el[0]), h === c.el[0]) {
                            b.index = f;
                            break
                        }
                } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
                if (b.isOpen) return void b.updateItemHTML();
                b.types = [], g = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : e, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = y("bg").on("click" + q, function() {
                    b.close()
                }), b.wrap = y("wrap").attr("tabindex", -1).on("click" + q, function(a) {
                    b._checkIfClose(a.target) && b.close()
                }), b.container = y("container", b.wrap)), b.contentContainer = y("content"), b.st.preloader && (b.preloader = y("preloader", b.container, b.st.tLoading));
                var j = a.magnificPopup.modules;
                for (f = 0; j.length > f; f++) {
                    var k = j[f];
                    k = k.charAt(0).toUpperCase() + k.slice(1), b["init" + k].call(b)
                }
                z("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (x(m, function(a, b, c, d) {
                    c.close_replaceWith = A(d.type)
                }), g += " mfp-close-btn-in") : b.wrap.append(A())), b.st.alignTop && (g += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? {
                    overflow: b.st.overflowY,
                    overflowX: "hidden",
                    overflowY: b.st.overflowY
                } : {
                    top: w.scrollTop(),
                    position: "absolute"
                }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                    height: e.height(),
                    position: "absolute"
                }), b.st.enableEscapeKey && e.on("keyup" + q, function(a) {
                    27 === a.keyCode && b.close()
                }), w.on("resize" + q, function() {
                    b.updateSize()
                }), b.st.closeOnContentClick || (g += " mfp-auto-cursor"), g && b.wrap.addClass(g);
                var l = b.wH = w.height(),
                    o = {};
                if (b.fixedContentPos && b._hasScrollBar(l)) {
                    var p = b._getScrollbarSize();
                    p && (o.marginRight = p)
                }
                b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : o.overflow = "hidden");
                var s = b.st.mainClass;
                return b.isIE7 && (s += " mfp-ie7"), s && b._addClassToMFP(s), b.updateItemHTML(), z("BuildControls"), a("html").css(o), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || d), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                    b.content ? (b._addClassToMFP(r), b._setFocus()) : b.bgOverlay.addClass(r), e.on("focusin" + q, b._onFocusIn)
                }, 16), b.isOpen = !0, b.updateSize(l), z(n), c
            },
            close: function() {
                b.isOpen && (z(j), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(s), setTimeout(function() {
                    b._close()
                }, b.st.removalDelay)) : b._close())
            },
            _close: function() {
                z(i);
                var c = s + " " + r + " ";
                if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                    var d = {
                        marginRight: ""
                    };
                    b.isIE7 ? a("body, html").css("overflow", "") : d.overflow = "", a("html").css(d)
                }
                e.off("keyup" + q + " focusin" + q), b.ev.off(q), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, z(k)
            },
            updateSize: function(a) {
                if (b.isIOS) {
                    var c = document.documentElement.clientWidth / window.innerWidth,
                        d = window.innerHeight * c;
                    b.wrap.css("height", d), b.wH = d
                } else b.wH = a || w.height();
                b.fixedContentPos || b.wrap.css("height", b.wH), z("Resize")
            },
            updateItemHTML: function() {
                var c = b.items[b.index];
                b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
                var d = c.type;
                if (z("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                    var e = b.st[d] ? b.st[d].markup : !1;
                    z("FirstMarkupParse", e), b.currTemplate[d] = e ? a(e) : !0
                }
                f && f !== c.type && b.container.removeClass("mfp-" + f + "-holder");
                var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
                b.appendContent(g, d), c.preloaded = !0, z(o, c), f = c.type, b.container.prepend(b.contentContainer), z("AfterChange")
            },
            appendContent: function(a, c) {
                b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(A()) : b.content = a : b.content = "", z(l), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
            },
            parseEl: function(c) {
                var d, e = b.items[c];
                if (e.tagName ? e = {
                        el: a(e)
                    } : (d = e.type, e = {
                        data: e,
                        src: e.src
                    }), e.el) {
                    for (var f = b.types, g = 0; f.length > g; g++)
                        if (e.el.hasClass("mfp-" + f[g])) {
                            d = f[g];
                            break
                        }
                    e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
                }
                return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, z("ElementParse", e), b.items[c]
            },
            addGroup: function(a, c) {
                var d = function(d) {
                    d.mfpEl = this, b._openClick(d, a, c)
                };
                c || (c = {});
                var e = "click.magnificPopup";
                c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
            },
            _openClick: function(c, d, e) {
                var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
                if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
                    var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                    if (g)
                        if (a.isFunction(g)) {
                            if (!g.call(b)) return !0
                        } else if (g > w.width()) return !0;
                    c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
                }
            },
            updateStatus: function(a, d) {
                if (b.preloader) {
                    c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                    var e = {
                        status: a,
                        text: d
                    };
                    z("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                        a.stopImmediatePropagation()
                    }), b.container.addClass("mfp-s-" + a), c = a
                }
            },
            _checkIfClose: function(c) {
                if (!a(c).hasClass(t)) {
                    var d = b.st.closeOnContentClick,
                        e = b.st.closeOnBgClick;
                    if (d && e) return !0;
                    if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                    if (c === b.content[0] || a.contains(b.content[0], c)) {
                        if (d) return !0
                    } else if (e && a.contains(document, c)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(a) {
                b.bgOverlay.addClass(a), b.wrap.addClass(a)
            },
            _removeClassFromMFP: function(a) {
                this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
            },
            _hasScrollBar: function(a) {
                return (b.isIE7 ? e.height() : document.body.scrollHeight) > (a || w.height())
            },
            _setFocus: function() {
                (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
            },
            _onFocusIn: function(c) {
                return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
            },
            _parseMarkup: function(b, c, d) {
                var e;
                d.data && (c = a.extend(d.data, c)), z(m, [b, c, d]), a.each(c, function(a, c) {
                    if (void 0 === c || c === !1) return !0;
                    if (e = a.split("_"), e.length > 1) {
                        var d = b.find(q + "-" + e[0]);
                        if (d.length > 0) {
                            var f = e[1];
                            "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                        }
                    } else b.find(q + "-" + a).html(c)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === b.scrollbarSize) {
                    var a = document.createElement("div");
                    a.id = "mfp-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
                }
                return b.scrollbarSize
            }
        }, a.magnificPopup = {
            instance: null,
            proto: u.prototype,
            modules: [],
            open: function(b, c) {
                return B(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
            },
            close: function() {
                return a.magnificPopup.instance && a.magnificPopup.instance.close()
            },
            registerModule: function(b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading..."
            }
        }, a.fn.magnificPopup = function(c) {
            B();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e, f = v ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                        mfpEl: e
                    }, d, f)
                } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else c = a.extend(!0, {}, c), v ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
            return d
        };
        var D, E, F, G = "inline",
            H = function() {
                F && (E.after(F.addClass(D)).detach(), F = null)
            };
        a.magnificPopup.registerModule(G, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    b.types.push(G), x(i + "." + G, function() {
                        H()
                    })
                },
                getInline: function(c, d) {
                    if (H(), c.src) {
                        var e = b.st.inline,
                            f = a(c.src);
                        if (f.length) {
                            var g = f[0].parentNode;
                            g && g.tagName && (E || (D = e.hiddenClass, E = y(D), D = "mfp-" + D), F = f.after(E).detach().removeClass(D)), b.updateStatus("ready")
                        } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                        return c.inlineElement = f, f
                    }
                    return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
                }
            }
        });
        var I, J = "ajax",
            K = function() {
                I && d.removeClass(I)
            },
            L = function() {
                K(), b.req && b.req.abort()
            };
        a.magnificPopup.registerModule(J, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    b.types.push(J), I = b.st.ajax.cursor, x(i + "." + J, L), x("BeforeChange." + J, L)
                },
                getAjax: function(c) {
                    I && d.addClass(I), b.updateStatus("loading");
                    var e = a.extend({
                        url: c.src,
                        success: function(d, e, f) {
                            var g = {
                                data: d,
                                xhr: f
                            };
                            z("ParseAjax", g), b.appendContent(a(g.data), J), c.finished = !0, K(), b._setFocus(), setTimeout(function() {
                                b.wrap.addClass(r)
                            }, 16), b.updateStatus("ready"), z("AjaxContentAdded")
                        },
                        error: function() {
                            K(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                        }
                    }, b.st.ajax.settings);
                    return b.req = a.ajax(e), ""
                }
            }
        });
        var M, N = function(c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || ""
            }
            return ""
        };
        a.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var a = b.st.image,
                        c = ".image";
                    b.types.push("image"), x(n + c, function() {
                        "image" === b.currItem.type && a.cursor && d.addClass(a.cursor)
                    }), x(i + c, function() {
                        a.cursor && d.removeClass(a.cursor), w.off("resize" + q)
                    }), x("Resize" + c, b.resizeImage), b.isLowIE && x("AfterChange", b.resizeImage)
                },
                resizeImage: function() {
                    var a = b.currItem;
                    if (a && a.img && b.st.image.verticalFit) {
                        var c = 0;
                        b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                    }
                },
                _onImageHasSize: function(a) {
                    a.img && (a.hasSize = !0, M && clearInterval(M), a.isCheckingImgSize = !1, z("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
                },
                findImageSize: function(a) {
                    var c = 0,
                        d = a.img[0],
                        e = function(f) {
                            M && clearInterval(M), M = setInterval(function() {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(M), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                            }, f)
                        };
                    e(1)
                },
                getImage: function(c, d) {
                    var e = 0,
                        f = function() {
                            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, z("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                        },
                        g = function() {
                            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                        },
                        h = b.st.image,
                        i = d.find(".mfp-img");
                    if (i.length) {
                        var j = document.createElement("img");
                        j.className = "mfp-img", c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                    }
                    return b._parseMarkup(d, {
                        title: N(c),
                        img_replaceWith: c.img
                    }, c), b.resizeImage(), c.hasSize ? (M && clearInterval(M), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
                }
            }
        });
        var O, P = function() {
            return void 0 === O && (O = void 0 !== document.createElement("p").style.MozTransform), O
        };
        a.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(a) {
                    return a.is("img") ? a : a.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var a, c = b.st.zoom,
                        d = ".zoom";
                    if (c.enabled && b.supportsTransition) {
                        var e, f, g = c.duration,
                            h = function(a) {
                                var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    d = "all " + c.duration / 1e3 + "s " + c.easing,
                                    e = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    f = "transition";
                                return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                            },
                            k = function() {
                                b.content.css("visibility", "visible")
                            };
                        x("BuildControls" + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                                f = h(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                    f.css(b._getOffset(!0)), e = setTimeout(function() {
                                        k(), setTimeout(function() {
                                            f.remove(), a = f = null, z("ZoomAnimationEnded")
                                        }, 16)
                                    }, g)
                                }, 16)
                            }
                        }), x(j + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                    if (a = b._getItemToZoom(), !a) return;
                                    f = h(a)
                                }
                                f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                    f.css(b._getOffset())
                                }, 16)
                            }
                        }), x(i + d, function() {
                            b._allowZoom() && (k(), f && f.remove(), a = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === b.currItem.type
                },
                _getItemToZoom: function() {
                    return b.currItem.hasSize ? b.currItem.img : !1
                },
                _getOffset: function(c) {
                    var d;
                    d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                    var e = d.offset(),
                        f = parseInt(d.css("padding-top"), 10),
                        g = parseInt(d.css("padding-bottom"), 10);
                    e.top -= a(window).scrollTop() - f;
                    var h = {
                        width: d.width(),
                        height: (v ? d.innerHeight() : d[0].offsetHeight) - g - f
                    };
                    return P() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
                }
            }
        });
        var Q = "iframe",
            R = "//about:blank",
            S = function(a) {
                if (b.currTemplate[Q]) {
                    var c = b.currTemplate[Q].find("iframe");
                    c.length && (a || (c[0].src = R), b.isIE8 && c.css("display", a ? "block" : "none"))
                }
            };
        a.magnificPopup.registerModule(Q, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    b.types.push(Q), x("BeforeChange", function(a, b, c) {
                        b !== c && (b === Q ? S() : c === Q && S(!0))
                    }), x(i + "." + Q, function() {
                        S()
                    })
                },
                getIframe: function(c, d) {
                    var e = c.src,
                        f = b.st.iframe;
                    a.each(f.patterns, function() {
                        return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                    });
                    var g = {};
                    return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
                }
            }
        });
        var T = function(a) {
                var c = b.items.length;
                return a > c - 1 ? a - c : 0 > a ? c + a : a
            },
            U = function(a, b, c) {
                return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
            };
        a.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var c = b.st.gallery,
                        d = ".mfp-gallery",
                        f = Boolean(a.fn.mfpFastClick);
                    return b.direction = !0, c && c.enabled ? (g += " mfp-gallery", x(n + d, function() {
                        c.navigateByImgClick && b.wrap.on("click" + d, ".mfp-img", function() {
                            return b.items.length > 1 ? (b.next(), !1) : void 0
                        }), e.on("keydown" + d, function(a) {
                            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                        })
                    }), x("UpdateStatus" + d, function(a, c) {
                        c.text && (c.text = U(c.text, b.currItem.index, b.items.length))
                    }), x(m + d, function(a, d, e, f) {
                        var g = b.items.length;
                        e.counter = g > 1 ? U(c.tCounter, f.index, g) : ""
                    }), x("BuildControls" + d, function() {
                        if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                            var d = c.arrowMarkup,
                                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(t),
                                g = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(t),
                                h = f ? "mfpFastClick" : "click";
                            e[h](function() {
                                b.prev()
                            }), g[h](function() {
                                b.next()
                            }), b.isIE7 && (y("b", e[0], !1, !0), y("a", e[0], !1, !0), y("b", g[0], !1, !0), y("a", g[0], !1, !0)), b.container.append(e.add(g))
                        }
                    }), x(o + d, function() {
                        b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                            b.preloadNearbyImages(), b._preloadTimeout = null
                        }, 16)
                    }), void x(i + d, function() {
                        e.off(d), b.wrap.off("click" + d), b.arrowLeft && f && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
                    })) : !1
                },
                next: function() {
                    b.direction = !0, b.index = T(b.index + 1), b.updateItemHTML()
                },
                prev: function() {
                    b.direction = !1, b.index = T(b.index - 1), b.updateItemHTML()
                },
                goTo: function(a) {
                    b.direction = a >= b.index, b.index = a, b.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var a, c = b.st.gallery.preload,
                        d = Math.min(c[0], b.items.length),
                        e = Math.min(c[1], b.items.length);
                    for (a = 1;
                        (b.direction ? e : d) >= a; a++) b._preloadItem(b.index + a);
                    for (a = 1;
                        (b.direction ? d : e) >= a; a++) b._preloadItem(b.index - a)
                },
                _preloadItem: function(c) {
                    if (c = T(c), !b.items[c].preloaded) {
                        var d = b.items[c];
                        d.parsed || (d = b.parseEl(c)), z("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                            d.hasSize = !0
                        }).on("error.mfploader", function() {
                            d.hasSize = !0, d.loadError = !0, z("LazyLoadError", d)
                        }).attr("src", d.src)), d.preloaded = !0
                    }
                }
            }
        });
        var V = "retina";
        a.magnificPopup.registerModule(V, {
                options: {
                    replaceSrc: function(a) {
                        return a.src.replace(/\.\w+$/, function(a) {
                            return "@2x" + a
                        })
                    },
                    ratio: 1
                },
                proto: {
                    initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var a = b.st.retina,
                                c = a.ratio;
                            c = isNaN(c) ? c() : c, c > 1 && (x("ImageHasSize." + V, function(a, b) {
                                b.img.css({
                                    "max-width": b.img[0].naturalWidth / c,
                                    width: "100%"
                                })
                            }), x("ElementParse." + V, function(b, d) {
                                d.src = a.replaceSrc(d, c)
                            }))
                        }
                    }
                }
            }),
            function() {
                var b = 1e3,
                    c = "ontouchstart" in window,
                    d = function() {
                        w.off("touchmove" + f + " touchend" + f)
                    },
                    e = "mfpFastClick",
                    f = "." + e;
                a.fn.mfpFastClick = function(e) {
                    return a(this).each(function() {
                        var g, h = a(this);
                        if (c) {
                            var i, j, k, l, m, n;
                            h.on("touchstart" + f, function(a) {
                                l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, w.on("touchmove" + f, function(a) {
                                    m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
                                }).on("touchend" + f, function(a) {
                                    d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                                        g = !1
                                    }, b), e())
                                })
                            })
                        }
                        h.on("click" + f, function() {
                            g || e()
                        })
                    })
                }, a.fn.destroyMfpFastClick = function() {
                    a(this).off("touchstart" + f + " click" + f), c && w.off("touchmove" + f + " touchend" + f)
                }
            }(), B()
    }(window.jQuery || window.Zepto),
    function(a) {
        function b() {}

        function c(a) {
            function c(b) {
                b.prototype.option || (b.prototype.option = function(b) {
                    a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
                })
            }

            function e(b, c) {
                a.fn[b] = function(e) {
                    if ("string" == typeof e) {
                        for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                            var j = this[h],
                                k = a.data(j, b);
                            if (k)
                                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                    var l = k[e].apply(k, g);
                                    if (void 0 !== l) return l
                                } else f("no such method '" + e + "' for " + b + " instance");
                            else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var d = a.data(this, b);
                        d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                    })
                }
            }
            if (a) {
                var f = "undefined" == typeof console ? b : function(a) {
                    console.error(a)
                };
                return a.bridget = function(a, b) {
                    c(b), e(a, b)
                }, a.bridget
            }
        }
        var d = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c(a.jQuery)
    }(window),
    function(a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b, c
        }
        var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : c.attachEvent && (d = function(a, c, d) {
            a[c + d] = d.handleEvent ? function() {
                var c = b(a);
                d.handleEvent.call(d, c)
            } : function() {
                var c = b(a);
                d.call(a, c)
            }, a.attachEvent("on" + c, a[c + d])
        });
        var e = function() {};
        c.removeEventListener ? e = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : c.detachEvent && (e = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var f = {
            bind: d,
            unbind: e
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
    }(this),
    function(a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : f.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== e.readyState;
            if (!b.isReady && !c) {
                b.isReady = !0;
                for (var d = 0, g = f.length; g > d; d++) {
                    var h = f[d];
                    h()
                }
            }
        }

        function d(d) {
            return d.bind(e, "DOMContentLoaded", c), d.bind(e, "readystatechange", c), d.bind(a, "load", c), b
        }
        var e = a.document,
            f = [];
        b.isReady = !1, "function" == typeof define && define.amd ? (b.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], d)) : a.docReady = d(a.eventie)
    }(this),
    function() {
        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }

        function c(a) {
            return function() {
                return this[a].apply(this, arguments)
            }
        }
        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if (a instanceof RegExp) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, d.flattenListeners = function(a) {
            var b, c = [];
            for (b = 0; a.length > b; b += 1) c.push(a[b].listener);
            return c
        }, d.getListenersAsObject = function(a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, d.addListener = function(a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
            return this
        }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
            return this.addListener(a, {
                listener: b,
                once: !0
            })
        }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
            return this.getListeners(a), this
        }, d.defineEvents = function(a) {
            for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
            return this
        }, d.removeListener = function(a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this
        }, d.off = c("removeListener"), d.addListeners = function(a, b) {
            return this.manipulateListeners(!1, a, b)
        }, d.removeListeners = function(a, b) {
            return this.manipulateListeners(!0, a, b)
        }, d.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if (a instanceof RegExp)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this
        }, d.trigger = c("emitEvent"), d.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, d.setOnceReturnValue = function(a) {
            return this._onceReturnValue = a, this
        }, d._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, d._getEvents = function() {
            return this._events || (this._events = {})
        }, a.noConflict = function() {
            return e.EventEmitter = f, a
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
    }.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function(a) {
        function b(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function c() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = g.length; c > b; b++) {
                var d = g[b];
                a[d] = 0
            }
            return a
        }

        function d(a) {
            function d(a) {
                if ("string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var d = f(a);
                    if ("none" === d.display) return c();
                    var e = {};
                    e.width = a.offsetWidth, e.height = a.offsetHeight;
                    for (var k = e.isBorderBox = !(!j || !d[j] || "border-box" !== d[j]), l = 0, m = g.length; m > l; l++) {
                        var n = g[l],
                            o = d[n];
                        o = h(a, o);
                        var p = parseFloat(o);
                        e[n] = isNaN(p) ? 0 : p
                    }
                    var q = e.paddingLeft + e.paddingRight,
                        r = e.paddingTop + e.paddingBottom,
                        s = e.marginLeft + e.marginRight,
                        t = e.marginTop + e.marginBottom,
                        u = e.borderLeftWidth + e.borderRightWidth,
                        v = e.borderTopWidth + e.borderBottomWidth,
                        w = k && i,
                        x = b(d.width);
                    x !== !1 && (e.width = x + (w ? 0 : q + u));
                    var y = b(d.height);
                    return y !== !1 && (e.height = y + (w ? 0 : r + v)), e.innerWidth = e.width - (q + u), e.innerHeight = e.height - (r + v), e.outerWidth = e.width + s, e.outerHeight = e.height + t, e
                }
            }

            function h(a, b) {
                if (e || -1 === b.indexOf("%")) return b;
                var c = a.style,
                    d = c.left,
                    f = a.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = a.currentStyle.left), c.left = b, b = c.pixelLeft, c.left = d, g && (f.left = g), b
            }
            var i, j = a("boxSizing");
            return function() {
                if (j) {
                    var a = document.createElement("div");
                    a.style.width = "200px", a.style.padding = "1px 2px 3px 4px", a.style.borderStyle = "solid", a.style.borderWidth = "1px 2px 3px 4px", a.style[j] = "border-box";
                    var c = document.body || document.documentElement;
                    c.appendChild(a);
                    var d = f(a);
                    i = 200 === b(d.width), c.removeChild(a)
                }
            }(), d
        }
        var e = a.getComputedStyle,
            f = e ? function(a) {
                return e(a, null)
            } : function(a) {
                return a.currentStyle
            },
            g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], d) : "object" == typeof exports ? module.exports = d(require("get-style-property")) : a.getSize = d(a.getStyleProperty)
    }(window),
    function(a, b) {
        function c(a, b) {
            return a[h](b)
        }

        function d(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function e(a, b) {
            d(a);
            for (var c = a.parentNode.querySelectorAll(b), e = 0, f = c.length; f > e; e++)
                if (c[e] === a) return !0;
            return !1
        }

        function f(a, b) {
            return d(a), c(a, b)
        }
        var g, h = function() {
            if (b.matchesSelector) return "matchesSelector";
            for (var a = ["webkit", "moz", "ms", "o"], c = 0, d = a.length; d > c; c++) {
                var e = a[c],
                    f = e + "MatchesSelector";
                if (b[f]) return f
            }
        }();
        if (h) {
            var i = document.createElement("div"),
                j = c(i, "div");
            g = j ? c : f
        } else g = e;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return g
        }) : window.matchesSelector = g
    }(this, Element.prototype),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function d(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }

        function e(a, e, f) {
            function h(a, b) {
                a && (this.element = a, this.layout = b, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var i = f("transition"),
                j = f("transform"),
                k = i && j,
                l = !!f("perspective"),
                m = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[i],
                n = ["transform", "transition", "transitionDuration", "transitionProperty"],
                o = function() {
                    for (var a = {}, b = 0, c = n.length; c > b; b++) {
                        var d = n[b],
                            e = f(d);
                        e && e !== d && (a[d] = e)
                    }
                    return a
                }();
            b(h.prototype, a.prototype), h.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, h.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, h.prototype.getSize = function() {
                this.size = e(this.element)
            }, h.prototype.css = function(a) {
                var b = this.element.style;
                for (var c in a) {
                    var d = o[c] || c;
                    b[d] = a[c]
                }
            }, h.prototype.getPosition = function() {
                var a = g(this.element),
                    b = this.layout.options,
                    c = b.isOriginLeft,
                    d = b.isOriginTop,
                    e = parseInt(a[c ? "left" : "right"], 10),
                    f = parseInt(a[d ? "top" : "bottom"], 10);
                e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f;
                var h = this.layout.size;
                e -= c ? h.paddingLeft : h.paddingRight, f -= d ? h.paddingTop : h.paddingBottom, this.position.x = e, this.position.y = f
            }, h.prototype.layoutPosition = function() {
                var a = this.layout.size,
                    b = this.layout.options,
                    c = {};
                b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""), b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""), this.css(c), this.emitEvent("layout", [this])
            };
            var p = l ? function(a, b) {
                return "translate3d(" + a + "px, " + b + "px, 0)"
            } : function(a, b) {
                return "translate(" + a + "px, " + b + "px)"
            };
            h.prototype._transitionTo = function(a, b) {
                this.getPosition();
                var c = this.position.x,
                    d = this.position.y,
                    e = parseInt(a, 10),
                    f = parseInt(b, 10),
                    g = e === this.position.x && f === this.position.y;
                if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
                var h = a - c,
                    i = b - d,
                    j = {},
                    k = this.layout.options;
                h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = p(h, i), this.transition({
                    to: j,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, h.prototype.goTo = function(a, b) {
                this.setPosition(a, b), this.layoutPosition()
            }, h.prototype.moveTo = k ? h.prototype._transitionTo : h.prototype.goTo, h.prototype.setPosition = function(a, b) {
                this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
            }, h.prototype._nonTransition = function(a) {
                this.css(a.to), a.isCleaning && this._removeStyles(a.to);
                for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
            }, h.prototype._transition = function(a) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
                var b = this._transn;
                for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
                for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
                if (a.from) {
                    this.css(a.from);
                    var d = this.element.offsetHeight;
                    d = null
                }
                this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
            };
            var q = j && d(j) + ",opacity";
            h.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: q,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(m, this, !1))
            }, h.prototype.transition = h.prototype[i ? "_transition" : "_nonTransition"], h.prototype.onwebkitTransitionEnd = function(a) {
                this.ontransitionend(a)
            }, h.prototype.onotransitionend = function(a) {
                this.ontransitionend(a)
            };
            var r = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            h.prototype.ontransitionend = function(a) {
                if (a.target === this.element) {
                    var b = this._transn,
                        d = r[a.propertyName] || a.propertyName;
                    if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                        var e = b.onEnd[d];
                        e.call(this), delete b.onEnd[d]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, h.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(m, this, !1), this.isTransitioning = !1
            }, h.prototype._removeStyles = function(a) {
                var b = {};
                for (var c in a) b[c] = "";
                this.css(b)
            };
            var s = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return h.prototype.removeTransitionStyles = function() {
                this.css(s)
            }, h.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, h.prototype.remove = function() {
                if (!i || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                var a = this;
                this.on("transitionEnd", function() {
                    return a.removeElem(), !0
                }), this.hide()
            }, h.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var a = this.layout.options;
                this.transition({
                    from: a.hiddenStyle,
                    to: a.visibleStyle,
                    isCleaning: !0
                })
            }, h.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var a = this.layout.options;
                this.transition({
                    from: a.visibleStyle,
                    to: a.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, h.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, h
        }
        var f = document.defaultView,
            g = f && f.getComputedStyle ? function(a) {
                return f.getComputedStyle(a, null)
            } : function(a) {
                return a.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : (a.Outlayer = {}, a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty))
    }(window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            return "[object Array]" === l.call(a)
        }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b
        }

        function e(a, b) {
            var c = n(b, a); - 1 !== c && b.splice(c, 1)
        }

        function f(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        }

        function g(c, g, l, n, o, p) {
            function q(a, c) {
                if ("string" == typeof a && (a = h.querySelector(a)), !a || !m(a)) return void(i && i.error("Bad " + this.constructor.namespace + " element: " + a));
                this.element = a, this.options = b({}, this.options), this.option(c);
                var d = ++s;
                this.element.outlayerGUID = d, t[d] = this, this._create(), this.options.isInitLayout && this.layout()
            }

            function r(a, c) {
                a.prototype[c] = b({}, q.prototype[c])
            }
            var s = 0,
                t = {};
            return q.namespace = "outlayer", q.Item = p, q.prototype.options = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, b(q.prototype, l.prototype), q.prototype.option = function(a) {
                b(this.options, a)
            }, q.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), b(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, q.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, q.prototype._itemize = function(a) {
                for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                    var g = b[e],
                        h = new c(g, this);
                    d.push(h)
                }
                return d
            }, q.prototype._filterFindItemElements = function(a) {
                a = d(a);
                for (var b = this.options.itemSelector, c = [], e = 0, f = a.length; f > e; e++) {
                    var g = a[e];
                    if (m(g))
                        if (b) {
                            o(g, b) && c.push(g);
                            for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++) c.push(h[i])
                        } else c.push(g)
                }
                return c
            }, q.prototype.getItemElements = function() {
                for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
                return a
            }, q.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, a), this._isLayoutInited = !0
            }, q.prototype._init = q.prototype.layout, q.prototype._resetLayout = function() {
                this.getSize()
            }, q.prototype.getSize = function() {
                this.size = n(this.element)
            }, q.prototype._getMeasurement = function(a, b) {
                var c, d = this.options[a];
                d ? ("string" == typeof d ? c = this.element.querySelector(d) : m(d) && (c = d), this[a] = c ? n(c)[b] : d) : this[a] = 0
            }, q.prototype.layoutItems = function(a, b) {
                a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
            }, q.prototype._getItemsForLayout = function(a) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.isIgnored || b.push(e)
                }
                return b
            }, q.prototype._layoutItems = function(a, b) {
                function c() {
                    d.emitEvent("layoutComplete", [d, a])
                }
                var d = this;
                if (!a || !a.length) return void c();
                this._itemsOn(a, "layout", c);
                for (var e = [], f = 0, g = a.length; g > f; f++) {
                    var h = a[f],
                        i = this._getItemLayoutPosition(h);
                    i.item = h, i.isInstant = b || h.isLayoutInstant, e.push(i)
                }
                this._processLayoutQueue(e)
            }, q.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, q.prototype._processLayoutQueue = function(a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this._positionItem(d.item, d.x, d.y, d.isInstant)
                }
            }, q.prototype._positionItem = function(a, b, c, d) {
                d ? a.goTo(b, c) : a.moveTo(b, c)
            }, q.prototype._postLayout = function() {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }, q.prototype._getContainerSize = k, q.prototype._setContainerMeasure = function(a, b) {
                if (void 0 !== a) {
                    var c = this.size;
                    c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
                }
            }, q.prototype._itemsOn = function(a, b, c) {
                function d() {
                    return e++, e === f && c.call(g), !0
                }
                for (var e = 0, f = a.length, g = this, h = 0, i = a.length; i > h; h++) {
                    var j = a[h];
                    j.on(b, d)
                }
            }, q.prototype.ignore = function(a) {
                var b = this.getItem(a);
                b && (b.isIgnored = !0)
            }, q.prototype.unignore = function(a) {
                var b = this.getItem(a);
                b && delete b.isIgnored
            }, q.prototype.stamp = function(a) {
                if (a = this._find(a)) {
                    this.stamps = this.stamps.concat(a);
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        this.ignore(d)
                    }
                }
            }, q.prototype.unstamp = function(a) {
                if (a = this._find(a))
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        e(d, this.stamps), this.unignore(d)
                    }
            }, q.prototype._find = function(a) {
                return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0
            }, q.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var a = 0, b = this.stamps.length; b > a; a++) {
                        var c = this.stamps[a];
                        this._manageStamp(c)
                    }
                }
            }, q.prototype._getBoundingRect = function() {
                var a = this.element.getBoundingClientRect(),
                    b = this.size;
                this._boundingRect = {
                    left: a.left + b.paddingLeft + b.borderLeftWidth,
                    top: a.top + b.paddingTop + b.borderTopWidth,
                    right: a.right - (b.paddingRight + b.borderRightWidth),
                    bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
                }
            }, q.prototype._manageStamp = k, q.prototype._getElementOffset = function(a) {
                var b = a.getBoundingClientRect(),
                    c = this._boundingRect,
                    d = n(a),
                    e = {
                        left: b.left - c.left - d.marginLeft,
                        top: b.top - c.top - d.marginTop,
                        right: c.right - b.right - d.marginRight,
                        bottom: c.bottom - b.bottom - d.marginBottom
                    };
                return e
            }, q.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, q.prototype.bindResize = function() {
                this.isResizeBound || (c.bind(a, "resize", this), this.isResizeBound = !0)
            }, q.prototype.unbindResize = function() {
                c.unbind(a, "resize", this), this.isResizeBound = !1
            }, q.prototype.onresize = function() {
                function a() {
                    b.resize(), delete b.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var b = this;
                this.resizeTimeout = setTimeout(a, 100)
            }, q.prototype.resize = function() {
                var a = n(this.element),
                    b = this.size && a;
                b && a.innerWidth === this.size.innerWidth || this.layout()
            }, q.prototype.addItems = function(a) {
                var b = this._itemize(a);
                return b.length && (this.items = this.items.concat(b)), b
            }, q.prototype.appended = function(a) {
                var b = this.addItems(a);
                b.length && (this.layoutItems(b, !0), this.reveal(b))
            }, q.prototype.prepended = function(a) {
                var b = this._itemize(a);
                if (b.length) {
                    var c = this.items.slice(0);
                    this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
                }
            }, q.prototype.reveal = function(a) {
                var b = a && a.length;
                if (b)
                    for (var c = 0; b > c; c++) {
                        var d = a[c];
                        d.reveal()
                    }
            }, q.prototype.hide = function(a) {
                var b = a && a.length;
                if (b)
                    for (var c = 0; b > c; c++) {
                        var d = a[c];
                        d.hide()
                    }
            }, q.prototype.getItem = function(a) {
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    if (d.element === a) return d
                }
            }, q.prototype.getItems = function(a) {
                if (a && a.length) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) {
                        var e = a[c],
                            f = this.getItem(e);
                        f && b.push(f)
                    }
                    return b
                }
            }, q.prototype.remove = function(a) {
                a = d(a);
                var b = this.getItems(a);
                if (b && b.length) {
                    this._itemsOn(b, "remove", function() {
                        this.emitEvent("removeComplete", [this, b])
                    });
                    for (var c = 0, f = b.length; f > c; c++) {
                        var g = b[c];
                        g.remove(), e(g, this.items)
                    }
                }
            }, q.prototype.destroy = function() {
                var a = this.element.style;
                a.height = "", a.position = "", a.width = "";
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    d.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace)
            }, q.data = function(a) {
                var b = a && a.outlayerGUID;
                return b && t[b]
            }, q.create = function(a, c) {
                function d() {
                    q.apply(this, arguments)
                }
                return Object.create ? d.prototype = Object.create(q.prototype) : b(d.prototype, q.prototype), d.prototype.constructor = d, r(d, "options"), b(d.prototype.options, c), d.namespace = a, d.data = q.data, d.Item = function() {
                    p.apply(this, arguments)
                }, d.Item.prototype = new p, g(function() {
                    for (var b = f(a), c = h.querySelectorAll(".js-" + b), e = "data-" + b + "-options", g = 0, k = c.length; k > g; g++) {
                        var l, m = c[g],
                            n = m.getAttribute(e);
                        try {
                            l = n && JSON.parse(n)
                        } catch (o) {
                            i && i.error("Error parsing " + e + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id : "") + ": " + o);
                            continue
                        }
                        var p = new d(m, l);
                        j && j.data(m, a, p)
                    }
                }), j && j.bridget && j.bridget(a, d), d
            }, q.Item = p, q
        }
        var h = a.document,
            i = a.console,
            j = a.jQuery,
            k = function() {},
            l = Object.prototype.toString,
            m = "object" == typeof HTMLElement ? function(a) {
                return a instanceof HTMLElement
            } : function(a) {
                return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
            },
            n = Array.prototype.indexOf ? function(a, b) {
                return a.indexOf(b)
            } : function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item)
    }(window),
    function(a) {
        function b(a) {
            function b() {
                a.Item.apply(this, arguments)
            }
            return b.prototype = new a.Item, b.prototype._create = function() {
                this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
            }, b.prototype.updateSortData = function() {
                if (!this.isIgnored) {
                    this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var a = this.layout.options.getSortData,
                        b = this.layout._sorters;
                    for (var c in a) {
                        var d = b[c];
                        this.sortData[c] = d(this.element, this)
                    }
                }
            }, b
        }
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
    }(window),
    function(a) {
        function b(a, b) {
            function c(a) {
                this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
            }
            return function() {
                function a(a) {
                    return function() {
                        return b.prototype[a].apply(this.isotope, arguments)
                    }
                }
                for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "resize"], e = 0, f = d.length; f > e; e++) {
                    var g = d[e];
                    c.prototype[g] = a(g)
                }
            }(), c.prototype.resizeVertical = function() {
                var b = a(this.isotope.element),
                    c = this.isotope.size && b;
                c && b.innerHeight === this.isotope.size.innerHeight || this.isotope.layout()
            }, c.prototype._getMeasurement = function() {
                this.isotope._getMeasurement.apply(this, arguments)
            }, c.prototype.getColumnWidth = function() {
                this.getSegmentSize("column", "Width")
            }, c.prototype.getRowHeight = function() {
                this.getSegmentSize("row", "Height")
            }, c.prototype.getSegmentSize = function(a, b) {
                var c = a + b,
                    d = "outer" + b;
                if (this._getMeasurement(c, d), !this[c]) {
                    var e = this.getFirstItemSize();
                    this[c] = e && e[d] || this.isotope.size["inner" + b]
                }
            }, c.prototype.getFirstItemSize = function() {
                var b = this.isotope.filteredItems[0];
                return b && b.element && a(b.element)
            }, c.prototype.layout = function() {
                this.isotope.layout.apply(this.isotope, arguments)
            }, c.prototype.getSize = function() {
                this.isotope.getSize(), this.size = this.isotope.size
            }, c.modes = {}, c.create = function(a, b) {
                function d() {
                    c.apply(this, arguments)
                }
                return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
            }, c
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
    }(window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            return "[object Array]" === k.call(a)
        }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b
        }

        function e(a, b) {
            var c = l(b, a); - 1 !== c && b.splice(c, 1)
        }

        function f(a, c, f, i, k) {
            function l(a, b) {
                return function(c, d) {
                    for (var e = 0, f = a.length; f > e; e++) {
                        var g = a[e],
                            h = c.sortData[g],
                            i = d.sortData[g];
                        if (h > i || i > h) {
                            var j = void 0 !== b[g] ? b[g] : b,
                                k = j ? 1 : -1;
                            return (h > i ? 1 : -1) * k
                        }
                    }
                    return 0
                }
            }
            var m = a.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
            m.Item = i, m.LayoutMode = k, m.prototype._create = function() {
                this.itemGUID = 0, this._sorters = {}, this._getSorters(), a.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
                for (var b in k.modes) this._initLayoutMode(b)
            }, m.prototype.reloadItems = function() {
                this.itemGUID = 0, a.prototype.reloadItems.call(this)
            }, m.prototype._itemize = function() {
                for (var b = a.prototype._itemize.apply(this, arguments), c = 0, d = b.length; d > c; c++) {
                    var e = b[c];
                    e.id = this.itemGUID++
                }
                return this._updateItemsSortData(b), b
            }, m.prototype._initLayoutMode = function(a) {
                var c = k.modes[a],
                    d = this.options[a] || {};
                this.options[a] = c.options ? b(c.options, d) : d, this.modes[a] = new c(this)
            }, m.prototype.layout = function() {
                return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
            }, m.prototype._layout = function() {
                var a = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
            }, m.prototype.arrange = function(a) {
                this.option(a), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
            }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() {
                var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                return this._isInstant = a
            }, m.prototype._filter = function(a) {
                function b() {
                    l.reveal(e), l.hide(f)
                }
                var c = this.options.filter;
                c = c || "*";
                for (var d = [], e = [], f = [], g = this._getFilterTest(c), h = 0, i = a.length; i > h; h++) {
                    var j = a[h];
                    if (!j.isIgnored) {
                        var k = g(j);
                        k && d.push(j), k && j.isHidden ? e.push(j) : k || j.isHidden || f.push(j)
                    }
                }
                var l = this;
                return this._isInstant ? this._noTransition(b) : b(), d
            }, m.prototype._getFilterTest = function(a) {
                return g && this.options.isJQueryFiltering ? function(b) {
                    return g(b.element).is(a)
                } : "function" == typeof a ? function(b) {
                    return a(b.element)
                } : function(b) {
                    return f(b.element, a)
                }
            }, m.prototype.updateSortData = function(a) {
                this._getSorters(), a = d(a);
                var b = this.getItems(a);
                b = b.length ? b : this.items, this._updateItemsSortData(b)
            }, m.prototype._getSorters = function() {
                var a = this.options.getSortData;
                for (var b in a) {
                    var c = a[b];
                    this._sorters[b] = n(c)
                }
            }, m.prototype._updateItemsSortData = function(a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    d.updateSortData()
                }
            };
            var n = function() {
                function a(a) {
                    if ("string" != typeof a) return a;
                    var c = h(a).split(" "),
                        d = c[0],
                        e = d.match(/^\[(.+)\]$/),
                        f = e && e[1],
                        g = b(f, d),
                        i = m.sortDataParsers[c[1]];
                    return a = i ? function(a) {
                        return a && i(g(a))
                    } : function(a) {
                        return a && g(a)
                    }
                }

                function b(a, b) {
                    var c;
                    return c = a ? function(b) {
                        return b.getAttribute(a)
                    } : function(a) {
                        var c = a.querySelector(b);
                        return c && j(c)
                    }
                }
                return a
            }();
            m.sortDataParsers = {
                parseInt: function(a) {
                    return parseInt(a, 10)
                },
                parseFloat: function(a) {
                    return parseFloat(a)
                }
            }, m.prototype._sort = function() {
                var a = this.options.sortBy;
                if (a) {
                    var b = [].concat.apply(a, this.sortHistory),
                        c = l(b, this.options.sortAscending);
                    this.filteredItems.sort(c), a !== this.sortHistory[0] && this.sortHistory.unshift(a)
                }
            }, m.prototype._mode = function() {
                var a = this.options.layoutMode,
                    b = this.modes[a];
                if (!b) throw Error("No layout mode: " + a);
                return b.options = this.options[a], b
            }, m.prototype._resetLayout = function() {
                a.prototype._resetLayout.call(this), this._mode()._resetLayout()
            }, m.prototype._getItemLayoutPosition = function(a) {
                return this._mode()._getItemLayoutPosition(a)
            }, m.prototype._manageStamp = function(a) {
                var b = this._mode();
                b.options.isOriginLeft = this.options.isOriginLeft, b.options.isOriginTop = this.options.isOriginTop, b._manageStamp(a)
            }, m.prototype._getContainerSize = function() {
                return this._mode()._getContainerSize()
            }, m.prototype.resize = function() {
                this._mode().resize()
            }, m.prototype.appended = function(a) {
                var b = this.addItems(a);
                if (b.length) {
                    var c = this._filterRevealAdded(b);
                    this.filteredItems = this.filteredItems.concat(c)
                }
            }, m.prototype.prepended = function(a) {
                var b = this._itemize(a);
                if (b.length) {
                    var c = this.items.slice(0);
                    this.items = b.concat(c), this._resetLayout(), this._manageStamps();
                    var d = this._filterRevealAdded(b);
                    this.layoutItems(c), this.filteredItems = d.concat(this.filteredItems)
                }
            }, m.prototype._filterRevealAdded = function(a) {
                var b = this._noTransition(function() {
                    return this._filter(a)
                });
                return this.layoutItems(b, !0), this.reveal(b), a
            }, m.prototype.insert = function(a) {
                var b = this.addItems(a);
                if (b.length) {
                    var c, d, e = b.length;
                    for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                    var f = this._filter(b);
                    for (this._noTransition(function() {
                            this.hide(f)
                        }), c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                    for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                    this.reveal(f)
                }
            };
            var o = m.prototype.remove;
            return m.prototype.remove = function(a) {
                a = d(a);
                var b = this.getItems(a);
                if (o.call(this, a), b && b.length)
                    for (var c = 0, f = b.length; f > c; c++) {
                        var g = b[c];
                        e(g, this.filteredItems)
                    }
            }, m.prototype._noTransition = function(a) {
                var b = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var c = a.call(this);
                return this.options.transitionDuration = b, c
            }, m
        }
        var g = a.jQuery,
            h = String.prototype.trim ? function(a) {
                return a.trim()
            } : function(a) {
                return a.replace(/^\s+|\s+$/g, "")
            },
            i = document.documentElement,
            j = i.textContent ? function(a) {
                return a.textContent
            } : function(a) {
                return a.innerText
            },
            k = Object.prototype.toString,
            l = Array.prototype.indexOf ? function(a, b) {
                return a.indexOf(b)
            } : function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode"], f) : a.Isotope = f(a.Outlayer, a.getSize, a.matchesSelector, a.Isotope.Item, a.Isotope.LayoutMode)
    }(window),
    function(a) {
        function b(a, b) {
            var d = a.create("masonry");
            return d.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var a = this.cols;
                for (this.colYs = []; a--;) this.colYs.push(0);
                this.maxY = 0
            }, d.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var a = this.items[0],
                        c = a && a.element;
                    this.columnWidth = c && b(c).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, d.prototype.getContainerWidth = function() {
                var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                    c = b(a);
                this.containerWidth = c && c.innerWidth
            }, d.prototype._getItemLayoutPosition = function(a) {
                a.getSize();
                var b = a.size.outerWidth % this.columnWidth,
                    d = b && 1 > b ? "round" : "ceil",
                    e = Math[d](a.size.outerWidth / this.columnWidth);
                e = Math.min(e, this.cols);
                for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c(f, g), i = {
                        x: this.columnWidth * h,
                        y: g
                    }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
                return i
            }, d.prototype._getColGroup = function(a) {
                if (2 > a) return this.colYs;
                for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                    var e = this.colYs.slice(d, d + a);
                    b[d] = Math.max.apply(Math, e)
                }
                return b
            }, d.prototype._manageStamp = function(a) {
                var c = b(a),
                    d = this._getElementOffset(a),
                    e = this.options.isOriginLeft ? d.left : d.right,
                    f = e + c.outerWidth,
                    g = Math.floor(e / this.columnWidth);
                g = Math.max(0, g);
                var h = Math.floor(f / this.columnWidth);
                h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
                for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
            }, d.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var a = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
            }, d.prototype._getContainerFitWidth = function() {
                for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
                return (this.cols - a) * this.columnWidth - this.gutter
            }, d.prototype.resize = function() {
                var a = this.containerWidth;
                this.getContainerWidth(), a !== this.containerWidth && this.layout()
            }, d
        }
        var c = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b)
        } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                if (e === b) return c
            }
            return -1
        };
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], b) : a.Masonry = b(a.Outlayer, a.getSize)
    }(window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a, c) {
            var d = a.create("masonry"),
                e = d.prototype._getElementOffset,
                f = d.prototype.layout,
                g = d.prototype._getMeasurement;
            b(d.prototype, c.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
            var h = d.prototype.measureColumns;
            return d.prototype.measureColumns = function() {
                this.items = this.isotope.filteredItems, h.call(this)
            }, d
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], c) : c(a.Isotope.LayoutMode, a.Masonry)
    }(window),
    function(a) {
        function b(a) {
            var b = a.create("fitRows");
            return b.prototype._resetLayout = function() {
                this.x = 0, this.y = 0, this.maxY = 0
            }, b.prototype._getItemLayoutPosition = function(a) {
                a.getSize(), 0 !== this.x && a.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
                var b = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += a.size.outerWidth, b
            }, b.prototype._getContainerSize = function() {
                return {
                    height: this.maxY
                }
            }, b
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : b(a.Isotope.LayoutMode)
    }(window),
    function(a) {
        function b(a) {
            var b = a.create("vertical", {
                horizontalAlignment: 0
            });
            return b.prototype._resetLayout = function() {
                this.y = 0
            }, b.prototype._getItemLayoutPosition = function(a) {
                a.getSize();
                var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                    c = this.y;
                return this.y += a.size.outerHeight, {
                    x: b,
                    y: c
                }
            }, b.prototype._getContainerSize = function() {
                return {
                    height: this.y
                }
            }, b
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : b(a.Isotope.LayoutMode)
    }(window),
    function() {
        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }

        function c(a) {
            return function() {
                return this[a].apply(this, arguments)
            }
        }
        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if ("object" == typeof a) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, d.flattenListeners = function(a) {
            var b, c = [];
            for (b = 0; a.length > b; b += 1) c.push(a[b].listener);
            return c
        }, d.getListenersAsObject = function(a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, d.addListener = function(a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
            return this
        }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
            return this.addListener(a, {
                listener: b,
                once: !0
            })
        }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
            return this.getListeners(a), this
        }, d.defineEvents = function(a) {
            for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
            return this
        }, d.removeListener = function(a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this
        }, d.off = c("removeListener"), d.addListeners = function(a, b) {
            return this.manipulateListeners(!1, a, b)
        }, d.removeListeners = function(a, b) {
            return this.manipulateListeners(!0, a, b)
        }, d.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if ("object" === c)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this
        }, d.trigger = c("emitEvent"), d.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, d.setOnceReturnValue = function(a) {
            return this._onceReturnValue = a, this
        }, d._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, d._getEvents = function() {
            return this._events || (this._events = {})
        }, a.noConflict = function() {
            return e.EventEmitter = f, a
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
    }.call(this),
    function(a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b, c
        }
        var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : c.attachEvent && (d = function(a, c, d) {
            a[c + d] = d.handleEvent ? function() {
                var c = b(a);
                d.handleEvent.call(d, c)
            } : function() {
                var c = b(a);
                d.call(a, c)
            }, a.attachEvent("on" + c, a[c + d])
        });
        var e = function() {};
        c.removeEventListener ? e = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : c.detachEvent && (e = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var f = {
            bind: d,
            unbind: e
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
    }(this),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventEmitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
    }(this, function(a, b, c) {
        function d(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function e(a) {
            return "[object Array]" === m.call(a)
        }

        function f(a) {
            var b = [];
            if (e(a)) b = a;
            else if ("number" == typeof a.length)
                for (var c = 0, d = a.length; d > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }

        function g(a, b, c) {
            if (!(this instanceof g)) return new g(a, b);
            "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
            var e = this;
            setTimeout(function() {
                e.check()
            })
        }

        function h(a) {
            this.img = a
        }

        function i(a) {
            this.src = a, n[a] = this
        }
        var j = a.jQuery,
            k = a.console,
            l = void 0 !== k,
            m = Object.prototype.toString;
        g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function() {
            this.images = [];
            for (var a = 0, b = this.elements.length; b > a; a++) {
                var c = this.elements[a];
                "IMG" === c.nodeName && this.addImage(c);
                var d = c.nodeType;
                if (d && (1 === d || 9 === d || 11 === d))
                    for (var e = c.querySelectorAll("img"), f = 0, g = e.length; g > f; f++) {
                        var h = e[f];
                        this.addImage(h)
                    }
            }
        }, g.prototype.addImage = function(a) {
            var b = new h(a);
            this.images.push(b)
        }, g.prototype.check = function() {
            function a(a, e) {
                return b.options.debug && l && k.log("confirm", a, e), b.progress(a), c++, c === d && b.complete(), !0
            }
            var b = this,
                c = 0,
                d = this.images.length;
            if (this.hasAnyBroken = !1, !d) return void this.complete();
            for (var e = 0; d > e; e++) {
                var f = this.images[e];
                f.on("confirm", a), f.check()
            }
        }, g.prototype.progress = function(a) {
            this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
            var b = this;
            setTimeout(function() {
                b.emit("progress", b, a), b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a)
            })
        }, g.prototype.complete = function() {
            var a = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var b = this;
            setTimeout(function() {
                if (b.emit(a, b), b.emit("always", b), b.jqDeferred) {
                    var c = b.hasAnyBroken ? "reject" : "resolve";
                    b.jqDeferred[c](b)
                }
            })
        }, j && (j.fn.imagesLoaded = function(a, b) {
            var c = new g(this, a, b);
            return c.jqDeferred.promise(j(this))
        }), h.prototype = new b, h.prototype.check = function() {
            var a = n[this.img.src] || new i(this.img.src);
            if (a.isConfirmed) return void this.confirm(a.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var b = this;
            a.on("confirm", function(a, c) {
                return b.confirm(a.isLoaded, c), !0
            }), a.check()
        }, h.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emit("confirm", this, b)
        };
        var n = {};
        return i.prototype = new b, i.prototype.check = function() {
            if (!this.isChecked) {
                var a = new Image;
                c.bind(a, "load", this), c.bind(a, "error", this), a.src = this.src, this.isChecked = !0
            }
        }, i.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, i.prototype.onload = function(a) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(a)
        }, i.prototype.onerror = function(a) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(a)
        }, i.prototype.confirm = function(a, b) {
            this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
        }, i.prototype.unbindProxyEvents = function(a) {
            c.unbind(a.target, "load", this), c.unbind(a.target, "error", this)
        }, g
    }),
    function(a) {
        var b = a(window),
            c = b.height();
        b.resize(function() {
            c = b.height()
        }), a.fn.parallax = function(d, e, f) {
            function g() {
                var f = b.scrollTop();
                j.each(function() {
                    var b = a(this),
                        g = b.offset().top,
                        i = h(b);
                    f > g + i || g > f + c || j.css("backgroundPosition", d + " " + Math.round((g - f) * e) + "px")
                })
            }
            var h, i, j = a(this);
            j.each(function() {
                i = j.offset().top
            }), h = f ? function(a) {
                return a.outerHeight(!0)
            } : function(a) {
                return a.height()
            }, (arguments.length < 1 || null === d) && (d = "50%"), (arguments.length < 2 || null === e) && (e = .1), (arguments.length < 3 || null === f) && (f = !0), b.bind("scroll", g).resize(g), g()
        }
    }(jQuery), ! function(a, b) {
        "object" == typeof exports ? module.exports = b(require("jquery")) : "function" == typeof define && define.amd ? define("EasyPieChart", ["jquery"], b) : b(a.jQuery)
    }(this, function(a) {
        var b = function(a, b) {
                var c, d = document.createElement("canvas");
                "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
                var e = d.getContext("2d");
                d.width = d.height = b.size, a.appendChild(d);
                var f = 1;
                window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-.5 + b.rotate / 180) * Math.PI);
                var g = (b.size - b.lineWidth) / 2;
                b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function() {
                    return +new Date
                };
                var h = function(a, b, c) {
                        c = Math.min(Math.max(-1, c || 0), 1);
                        var d = 0 >= c ? !0 : !1;
                        e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
                    },
                    i = function() {
                        var a, c, d = 24;
                        e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
                        for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
                        e.restore()
                    },
                    j = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
                            window.setTimeout(a, 1e3 / 60)
                        }
                    }(),
                    k = function() {
                        b.scaleColor && i(), b.trackColor && h(b.trackColor, b.lineWidth, 1)
                    };
                this.clear = function() {
                    e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
                }, this.draw = function(a) {
                    b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
                    var d;
                    d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
                }.bind(this), this.animate = function(a, c) {
                    var d = Date.now();
                    b.onStart(a, c);
                    var e = function() {
                        var f = Math.min(Date.now() - d, b.animate.duration),
                            g = b.easing(this, f, a, c - a, b.animate.duration);
                        this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
                    }.bind(this);
                    j(e)
                }.bind(this)
            },
            c = function(a, c) {
                var d = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    size: 110,
                    rotate: 0,
                    animate: {
                        duration: 1e3,
                        enabled: !0
                    },
                    easing: function(a, b, c, d, e) {
                        return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
                    },
                    onStart: function() {},
                    onStep: function() {},
                    onStop: function() {}
                };
                if ("undefined" != typeof b) d.renderer = b;
                else {
                    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    d.renderer = SVGRenderer
                }
                var e = {},
                    f = 0,
                    g = function() {
                        this.el = a, this.options = e;
                        for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
                        e.easing = "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? jQuery.easing[e.easing] : d.easing, "number" == typeof e.animate && (e.animate = {
                            duration: e.animate,
                            enabled: !0
                        }), "boolean" != typeof e.animate || e.animate || (e.animate = {
                            duration: 1e3,
                            enabled: e.animate
                        }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
                    }.bind(this);
                this.update = function(a) {
                    return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
                }.bind(this), this.disableAnimation = function() {
                    return e.animate.enabled = !1, this
                }, this.enableAnimation = function() {
                    return e.animate.enabled = !0, this
                }, g()
            };
        a.fn.easyPieChart = function(b) {
            return this.each(function() {
                var d;
                a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)))
            })
        }
    }),
    function(a) {
        a.easytabs = function(b, c) {
            var d, e, f, g, h, i, j = this,
                k = a(b),
                l = {
                    animate: !0,
                    panelActiveClass: "active",
                    tabActiveClass: "active",
                    defaultTab: "li:first-child",
                    animationSpeed: "normal",
                    tabs: "> ul > li",
                    updateHash: !0,
                    cycle: !1,
                    collapsible: !1,
                    collapsedClass: "collapsed",
                    collapsedByDefault: !0,
                    uiTabs: !1,
                    transitionIn: "fadeIn",
                    transitionOut: "fadeOut",
                    transitionInEasing: "swing",
                    transitionOutEasing: "swing",
                    transitionCollapse: "slideUp",
                    transitionUncollapse: "slideDown",
                    transitionCollapseEasing: "swing",
                    transitionUncollapseEasing: "swing",
                    containerClass: "",
                    tabsClass: "",
                    tabClass: "",
                    panelClass: "",
                    cache: !0,
                    event: "click",
                    panelContext: k
                },
                m = {
                    fast: 200,
                    normal: 400,
                    slow: 600
                };
            j.init = function() {
                j.settings = i = a.extend({}, l, c), i.bind_str = i.event + ".easytabs", i.uiTabs && (i.tabActiveClass = "ui-tabs-selected", i.containerClass = "ui-tabs ui-widget ui-widget-content ui-corner-all", i.tabsClass = "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all", i.tabClass = "ui-state-default ui-corner-top", i.panelClass = "ui-tabs-panel ui-widget-content ui-corner-bottom"), i.collapsible && void 0 !== c.defaultTab && void 0 === c.collpasedByDefault && (i.collapsedByDefault = !1), "string" == typeof i.animationSpeed && (i.animationSpeed = m[i.animationSpeed]), a("a.anchor").remove().prependTo("body"), k.data("easytabs", {}), j.setTransitions(), j.getTabs(), o(), p(), r(), v(), w(), k.attr("data-easytabs", !0)
            }, j.setTransitions = function() {
                f = i.animate ? {
                    show: i.transitionIn,
                    hide: i.transitionOut,
                    speed: i.animationSpeed,
                    collapse: i.transitionCollapse,
                    uncollapse: i.transitionUncollapse,
                    halfSpeed: i.animationSpeed / 2
                } : {
                    show: "show",
                    hide: "hide",
                    speed: 0,
                    collapse: "hide",
                    uncollapse: "show",
                    halfSpeed: 0
                }
            }, j.getTabs = function() {
                var b;
                j.tabs = k.find(i.tabs), j.panels = a(), j.tabs.each(function() {
                    var c = a(this),
                        d = c.children("a"),
                        e = c.children("a").data("target");
                    c.data("easytabs", {}), void 0 !== e && null !== e ? c.data("easytabs").ajax = d.attr("href") : e = d.attr("href"), e = e.match(/#([^\?]+)/)[1], b = i.panelContext.find("#" + e), b.length ? (b.data("easytabs", {
                        position: b.css("position"),
                        visibility: b.css("visibility")
                    }), b.not(i.panelActiveClass).hide(), j.panels = j.panels.add(b), c.data("easytabs").panel = b) : (j.tabs = j.tabs.not(c), "console" in window && console.warn("Warning: tab without matching panel for selector '#" + e + "' removed from set"))
                })
            }, j.selectTab = function(a, b) {
                var c = window.location,
                    d = (c.hash.match(/^[^\?]*/)[0], a.parent().data("easytabs").panel),
                    e = a.parent().data("easytabs").ajax;
                i.collapsible && !h && (a.hasClass(i.tabActiveClass) || a.hasClass(i.collapsedClass)) ? j.toggleTabCollapse(a, d, e, b) : a.hasClass(i.tabActiveClass) && d.hasClass(i.panelActiveClass) ? i.cache || s(a, d, e, b) : s(a, d, e, b)
            }, j.toggleTabCollapse = function(a, b, c, d) {
                j.panels.stop(!0, !0), n(k, "easytabs:before", [a, b, i]) && (j.tabs.filter("." + i.tabActiveClass).removeClass(i.tabActiveClass).children().removeClass(i.tabActiveClass), a.hasClass(i.collapsedClass) ? (!c || i.cache && a.parent().data("easytabs").cached || (k.trigger("easytabs:ajax:beforeSend", [a, b]), b.load(c, function(c, d, e) {
                    a.parent().data("easytabs").cached = !0, k.trigger("easytabs:ajax:complete", [a, b, c, d, e])
                })), a.parent().removeClass(i.collapsedClass).addClass(i.tabActiveClass).children().removeClass(i.collapsedClass).addClass(i.tabActiveClass), b.addClass(i.panelActiveClass)[f.uncollapse](f.speed, i.transitionUncollapseEasing, function() {
                    k.trigger("easytabs:midTransition", [a, b, i]), "function" == typeof d && d()
                })) : (a.addClass(i.collapsedClass).parent().addClass(i.collapsedClass), b.removeClass(i.panelActiveClass)[f.collapse](f.speed, i.transitionCollapseEasing, function() {
                    k.trigger("easytabs:midTransition", [a, b, i]), "function" == typeof d && d()
                })))
            }, j.matchTab = function(a) {
                return j.tabs.find("[href='" + a + "'],[data-target='" + a + "']").first()
            }, j.matchInPanel = function(a) {
                return a && j.validId(a) ? j.panels.filter(":has(" + a + ")").first() : []
            }, j.validId = function(a) {
                return a.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/)
            }, j.selectTabFromHashChange = function() {
                var a, b = window.location.hash.match(/^[^\?]*/)[0],
                    c = j.matchTab(b);
                i.updateHash && (c.length ? (h = !0, j.selectTab(c)) : (a = j.matchInPanel(b), a.length ? (b = "#" + a.attr("id"), c = j.matchTab(b), h = !0, j.selectTab(c)) : d.hasClass(i.tabActiveClass) || i.cycle || ("" === b || j.matchTab(g).length || k.closest(b).length) && (h = !0, j.selectTab(e))))
            }, j.cycleTabs = function(b) {
                i.cycle && (b %= j.tabs.length, $tab = a(j.tabs[b]).children("a").first(), h = !0, j.selectTab($tab, function() {
                    setTimeout(function() {
                        j.cycleTabs(b + 1)
                    }, i.cycle)
                }))
            }, j.publicMethods = {
                select: function(b) {
                    var c;
                    0 === (c = j.tabs.filter(b)).length ? 0 === (c = j.tabs.find("a[href='" + b + "']")).length && 0 === (c = j.tabs.find("a" + b)).length && 0 === (c = j.tabs.find("[data-target='" + b + "']")).length && 0 === (c = j.tabs.find("a[href$='" + b + "']")).length && a.error("Tab '" + b + "' does not exist in tab set") : c = c.children("a").first(), j.selectTab(c)
                }
            };
            var n = function(b, c, d) {
                    var e = a.Event(c);
                    return b.trigger(e, d), e.result !== !1
                },
                o = function() {
                    k.addClass(i.containerClass), j.tabs.parent().addClass(i.tabsClass), j.tabs.addClass(i.tabClass), j.panels.addClass(i.panelClass)
                },
                p = function() {
                    var b, c = window.location.hash.match(/^[^\?]*/)[0],
                        f = j.matchTab(c).parent();
                    1 === f.length ? (d = f, i.cycle = !1) : (b = j.matchInPanel(c), b.length ? (c = "#" + b.attr("id"), d = j.matchTab(c).parent()) : (d = j.tabs.parent().find(i.defaultTab), 0 === d.length && a.error("The specified default tab ('" + i.defaultTab + "') could not be found in the tab set ('" + i.tabs + "') out of " + j.tabs.length + " tabs."))), e = d.children("a").first(), q(f)
                },
                q = function(b) {
                    var c, f;
                    i.collapsible && 0 === b.length && i.collapsedByDefault ? d.addClass(i.collapsedClass).children().addClass(i.collapsedClass) : (c = a(d.data("easytabs").panel), f = d.data("easytabs").ajax, !f || i.cache && d.data("easytabs").cached || (k.trigger("easytabs:ajax:beforeSend", [e, c]), c.load(f, function(a, b, f) {
                        d.data("easytabs").cached = !0, k.trigger("easytabs:ajax:complete", [e, c, a, b, f])
                    })), d.data("easytabs").panel.show().addClass(i.panelActiveClass), d.addClass(i.tabActiveClass).children().addClass(i.tabActiveClass)), k.trigger("easytabs:initialised", [e, c])
                },
                r = function() {
                    j.tabs.children("a").bind(i.bind_str, function(b) {
                        i.cycle = !1, h = !1, j.selectTab(a(this)), b.preventDefault ? b.preventDefault() : b.returnValue = !1
                    })
                },
                s = function(a, b, c, d) {
                    if (j.panels.stop(!0, !0), n(k, "easytabs:before", [a, b, i])) {
                        var e, l, m, o, p = j.panels.filter(":visible"),
                            q = b.parent(),
                            r = window.location.hash.match(/^[^\?]*/)[0];
                        i.animate && (e = t(b), l = p.length ? u(p) : 0, m = e - l), g = r, o = function() {
                            k.trigger("easytabs:midTransition", [a, b, i]), i.animate && "fadeIn" == i.transitionIn && 0 > m && q.animate({
                                height: q.height() + m
                            }, f.halfSpeed).css({
                                "min-height": ""
                            }), i.updateHash && !h ? window.location.hash = "#" + b.attr("id") : h = !1, b[f.show](f.speed, i.transitionInEasing, function() {
                                q.css({
                                    height: "",
                                    "min-height": ""
                                }), k.trigger("easytabs:after", [a, b, i]), "function" == typeof d && d()
                            })
                        }, !c || i.cache && a.parent().data("easytabs").cached || (k.trigger("easytabs:ajax:beforeSend", [a, b]), b.load(c, function(c, d, e) {
                            a.parent().data("easytabs").cached = !0, k.trigger("easytabs:ajax:complete", [a, b, c, d, e])
                        })), i.animate && "fadeOut" == i.transitionOut && (m > 0 ? q.animate({
                            height: q.height() + m
                        }, f.halfSpeed) : q.css({
                            "min-height": q.height()
                        })), j.tabs.filter("." + i.tabActiveClass).removeClass(i.tabActiveClass).children().removeClass(i.tabActiveClass), j.tabs.filter("." + i.collapsedClass).removeClass(i.collapsedClass).children().removeClass(i.collapsedClass), a.parent().addClass(i.tabActiveClass).children().addClass(i.tabActiveClass), j.panels.filter("." + i.panelActiveClass).removeClass(i.panelActiveClass), b.addClass(i.panelActiveClass), p.length ? p[f.hide](f.speed, i.transitionOutEasing, o) : b[f.uncollapse](f.speed, i.transitionUncollapseEasing, o)
                    }
                },
                t = function(b) {
                    if (b.data("easytabs") && b.data("easytabs").lastHeight) return b.data("easytabs").lastHeight;
                    var c, d, e = b.css("display");
                    try {
                        c = a("<div></div>", {
                            position: "absolute",
                            visibility: "hidden",
                            overflow: "hidden"
                        })
                    } catch (f) {
                        c = a("<div></div>", {
                            visibility: "hidden",
                            overflow: "hidden"
                        })
                    }
                    return d = b.wrap(c).css({
                        position: "relative",
                        visibility: "hidden",
                        display: "block"
                    }).outerHeight(), b.unwrap(), b.css({
                        position: b.data("easytabs").position,
                        visibility: b.data("easytabs").visibility,
                        display: e
                    }), b.data("easytabs").lastHeight = d, d
                },
                u = function(a) {
                    var b = a.outerHeight();
                    return a.data("easytabs") ? a.data("easytabs").lastHeight = b : a.data("easytabs", {
                        lastHeight: b
                    }), b
                },
                v = function() {
                    "function" == typeof a(window).hashchange ? a(window).hashchange(function() {
                        j.selectTabFromHashChange()
                    }) : a.address && "function" == typeof a.address.change && a.address.change(function() {
                        j.selectTabFromHashChange()
                    })
                },
                w = function() {
                    var a;
                    i.cycle && (a = j.tabs.index(d), setTimeout(function() {
                        j.cycleTabs(a + 1)
                    }, i.cycle))
                };
            j.init()
        }, a.fn.easytabs = function(b) {
            var c = arguments;
            return this.each(function() {
                var d = a(this),
                    e = d.data("easytabs");
                return void 0 === e && (e = new a.easytabs(this, b), d.data("easytabs", e)), e.publicMethods[b] ? e.publicMethods[b](Array.prototype.slice.call(c, 1)) : void 0
            })
        }
    }(jQuery),
    function() {
        var a = [].indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            },
            b = [].slice;
        ! function(a, b) {
            return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(c) {
                return b(c, a)
            }) : b(a.jQuery, a)
        }(this, function(c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
            return e = c(d), l = a.call(d, "ontouchstart") >= 0, h = {
                horizontal: {},
                vertical: {}
            }, i = 1, k = {}, j = "waypoints-context-id", o = "resize.waypoints", p = "scroll.waypoints", q = 1, r = "waypoints-waypoint-ids", s = "waypoint", t = "waypoints", f = function() {
                function a(a) {
                    var b = this;
                    this.$element = a, this.element = a[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + i++, this.oldScroll = {
                        x: a.scrollLeft(),
                        y: a.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, this.element[j] = this.id, k[this.id] = this, a.bind(p, function() {
                        var a;
                        return b.didScroll || l ? void 0 : (b.didScroll = !0, a = function() {
                            return b.doScroll(), b.didScroll = !1
                        }, d.setTimeout(a, c[t].settings.scrollThrottle))
                    }), a.bind(o, function() {
                        var a;
                        return b.didResize ? void 0 : (b.didResize = !0, a = function() {
                            return c[t]("refresh"), b.didResize = !1
                        }, d.setTimeout(a, c[t].settings.resizeThrottle))
                    })
                }
                return a.prototype.doScroll = function() {
                    var a, b = this;
                    return a = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    }, !l || a.vertical.oldScroll && a.vertical.newScroll || c[t]("refresh"), c.each(a, function(a, d) {
                        var e, f, g;
                        return g = [], f = d.newScroll > d.oldScroll, e = f ? d.forward : d.backward, c.each(b.waypoints[a], function(a, b) {
                            var c, e;
                            return d.oldScroll < (c = b.offset) && c <= d.newScroll ? g.push(b) : d.newScroll < (e = b.offset) && e <= d.oldScroll ? g.push(b) : void 0
                        }), g.sort(function(a, b) {
                            return a.offset - b.offset
                        }), f || g.reverse(), c.each(g, function(a, b) {
                            return b.options.continuous || a === g.length - 1 ? b.trigger([e]) : void 0
                        })
                    }), this.oldScroll = {
                        x: a.horizontal.newScroll,
                        y: a.vertical.newScroll
                    }
                }, a.prototype.refresh = function() {
                    var a, b, d, e = this;
                    return d = c.isWindow(this.element), b = this.$element.offset(), this.doScroll(), a = {
                        horizontal: {
                            contextOffset: d ? 0 : b.left,
                            contextScroll: d ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: d ? 0 : b.top,
                            contextScroll: d ? 0 : this.oldScroll.y,
                            contextDimension: d ? c[t]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, c.each(a, function(a, b) {
                        return c.each(e.waypoints[a], function(a, d) {
                            var e, f, g, h, i;
                            return e = d.options.offset, g = d.offset, f = c.isWindow(d.element) ? 0 : d.$element.offset()[b.offsetProp], c.isFunction(e) ? e = e.apply(d.element) : "string" == typeof e && (e = parseFloat(e), d.options.offset.indexOf("%") > -1 && (e = Math.ceil(b.contextDimension * e / 100))), d.offset = f - b.contextOffset + b.contextScroll - e, d.options.onlyOnScroll && null != g || !d.enabled ? void 0 : null !== g && g < (h = b.oldScroll) && h <= d.offset ? d.trigger([b.backward]) : null !== g && g > (i = b.oldScroll) && i >= d.offset ? d.trigger([b.forward]) : null === g && b.oldScroll >= d.offset ? d.trigger([b.forward]) : void 0
                        })
                    })
                }, a.prototype.checkEmpty = function() {
                    return c.isEmptyObject(this.waypoints.horizontal) && c.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([o, p].join(" ")), delete k[this.id]) : void 0
                }, a
            }(), g = function() {
                function a(a, b, d) {
                    var e, f;
                    d = c.extend({}, c.fn[s].defaults, d), "bottom-in-view" === d.offset && (d.offset = function() {
                        var a;
                        return a = c[t]("viewportHeight"), c.isWindow(b.element) || (a = b.$element.height()), a - c(this).outerHeight()
                    }), this.$element = a, this.element = a[0], this.axis = d.horizontal ? "horizontal" : "vertical", this.callback = d.handler, this.context = b, this.enabled = d.enabled, this.id = "waypoints" + q++, this.offset = null, this.options = d, b.waypoints[this.axis][this.id] = this, h[this.axis][this.id] = this, e = null != (f = this.element[r]) ? f : [], e.push(this.id), this.element[r] = e
                }
                return a.prototype.trigger = function(a) {
                    return this.enabled ? (null != this.callback && this.callback.apply(this.element, a), this.options.triggerOnce ? this.destroy() : void 0) : void 0
                }, a.prototype.disable = function() {
                    return this.enabled = !1
                }, a.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0
                }, a.prototype.destroy = function() {
                    return delete h[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, a.getWaypointsByElement = function(a) {
                    var b, d;
                    return (d = a[r]) ? (b = c.extend({}, h.horizontal, h.vertical), c.map(d, function(a) {
                        return b[a]
                    })) : []
                }, a
            }(), n = {
                init: function(a, b) {
                    var d;
                    return null == b && (b = {}), null == (d = b.handler) && (b.handler = a), this.each(function() {
                        var a, d, e, h;
                        return a = c(this), e = null != (h = b.context) ? h : c.fn[s].defaults.context, c.isWindow(e) || (e = a.closest(e)), e = c(e), d = k[e[0][j]], d || (d = new f(e)), new g(a, d, b)
                    }), c[t]("refresh"), this
                },
                disable: function() {
                    return n._invoke.call(this, "disable")
                },
                enable: function() {
                    return n._invoke.call(this, "enable")
                },
                destroy: function() {
                    return n._invoke.call(this, "destroy")
                },
                prev: function(a, b) {
                    return n._traverse.call(this, a, b, function(a, b, c) {
                        return b > 0 ? a.push(c[b - 1]) : void 0
                    })
                },
                next: function(a, b) {
                    return n._traverse.call(this, a, b, function(a, b, c) {
                        return b < c.length - 1 ? a.push(c[b + 1]) : void 0
                    })
                },
                _traverse: function(a, b, e) {
                    var f, g;
                    return null == a && (a = "vertical"), null == b && (b = d), g = m.aggregate(b), f = [], this.each(function() {
                        var b;
                        return b = c.inArray(this, g[a]), e(f, b, g[a])
                    }), this.pushStack(f)
                },
                _invoke: function(a) {
                    return this.each(function() {
                        var b;
                        return b = g.getWaypointsByElement(this), c.each(b, function(b, c) {
                            return c[a](), !0
                        })
                    }), this
                }
            }, c.fn[s] = function() {
                var a, d;
                return d = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], n[d] ? n[d].apply(this, a) : c.isFunction(d) ? n.init.apply(this, arguments) : c.isPlainObject(d) ? n.init.apply(this, [null, d]) : c.error(d ? "The " + d + " method does not exist in jQuery Waypoints." : "jQuery Waypoints needs a callback function or handler option.")
            }, c.fn[s].defaults = {
                context: d,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, m = {
                refresh: function() {
                    return c.each(k, function(a, b) {
                        return b.refresh()
                    })
                },
                viewportHeight: function() {
                    var a;
                    return null != (a = d.innerHeight) ? a : e.height()
                },
                aggregate: function(a) {
                    var b, d, e;
                    return b = h, a && (b = null != (e = k[c(a)[0][j]]) ? e.waypoints : void 0), b ? (d = {
                        horizontal: [],
                        vertical: []
                    }, c.each(d, function(a, e) {
                        return c.each(b[a], function(a, b) {
                            return e.push(b)
                        }), e.sort(function(a, b) {
                            return a.offset - b.offset
                        }), d[a] = c.map(e, function(a) {
                            return a.element
                        }), d[a] = c.unique(d[a])
                    }), d) : []
                },
                above: function(a) {
                    return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
                        return b.offset <= a.oldScroll.y
                    })
                },
                below: function(a) {
                    return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
                        return b.offset > a.oldScroll.y
                    })
                },
                left: function(a) {
                    return null == a && (a = d), m._filter(a, "horizontal", function(a, b) {
                        return b.offset <= a.oldScroll.x
                    })
                },
                right: function(a) {
                    return null == a && (a = d), m._filter(a, "horizontal", function(a, b) {
                        return b.offset > a.oldScroll.x
                    })
                },
                enable: function() {
                    return m._invoke("enable")
                },
                disable: function() {
                    return m._invoke("disable")
                },
                destroy: function() {
                    return m._invoke("destroy")
                },
                extendFn: function(a, b) {
                    return n[a] = b
                },
                _invoke: function(a) {
                    var b;
                    return b = c.extend({}, h.vertical, h.horizontal), c.each(b, function(b, c) {
                        return c[a](), !0
                    })
                },
                _filter: function(a, b, d) {
                    var e, f;
                    return (e = k[c(a)[0][j]]) ? (f = [], c.each(e.waypoints[b], function(a, b) {
                        return d(e, b) ? f.push(b) : void 0
                    }), f.sort(function(a, b) {
                        return a.offset - b.offset
                    }), c.map(f, function(a) {
                        return a.element
                    })) : []
                }
            }, c[t] = function() {
                var a, c;
                return c = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], m[c] ? m[c].apply(null, a) : m.aggregate.call(null, c)
            }, c[t].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, e.load(function() {
                return c[t]("refresh")
            })
        })
    }.call(this),
    function() {
        ! function(a, b) {
            return "function" == typeof define && define.amd ? define(["jquery", "waypoints"], b) : b(a.jQuery)
        }(this, function(a) {
            var b, c;
            return b = {
                wrapper: '<div class="sticky-wrapper" />',
                stuckClass: "stuck"
            }, c = function(a, b) {
                return a.wrap(b.wrapper), a.parent()
            }, a.waypoints("extendFn", "sticky", function(d) {
                var e, f, g;
                return f = a.extend({}, a.fn.waypoint.defaults, b, d), e = c(this, f), g = f.handler, f.handler = function(b) {
                    var c, d;
                    return c = a(this).children(":first"), d = "down" === b || "right" === b, c.toggleClass(f.stuckClass, d), e.height(d ? c.outerHeight() : ""), null != g ? g.call(this, b) : void 0
                }, e.waypoint(f), this.data("stuckClass", f.stuckClass)
            }), a.waypoints("extendFn", "unsticky", function() {
                return this.parent().waypoint("destroy"), this.unwrap(), this.removeClass(this.data("stuckClass"))
            })
        })
    }.call(this),
    function(a) {
        a.extend(a.fn, {
            validate: function(b) {
                if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var c = a.data(this[0], "validator");
                return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
                    c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
                }), this.submit(function(b) {
                    function d() {
                        var d;
                        return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
                    }
                    return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
                })), c)
            },
            valid: function() {
                if (a(this[0]).is("form")) return this.validate().form();
                var b = !0,
                    c = a(this[0].form).validate();
                return this.each(function() {
                    b = b && c.element(this)
                }), b
            },
            removeAttrs: function(b) {
                var c = {},
                    d = this;
                return a.each(b.split(/\s/), function(a, b) {
                    c[b] = d.attr(b), d.removeAttr(b)
                }), c
            },
            rules: function(b, c) {
                var d = this[0];
                if (b) {
                    var e = a.data(d.form, "validator").settings,
                        f = e.rules,
                        g = a.validator.staticRules(d);
                    switch (b) {
                        case "add":
                            a.extend(g, a.validator.normalizeRule(c)), delete g.messages, f[d.name] = g, c.messages && (e.messages[d.name] = a.extend(e.messages[d.name], c.messages));
                            break;
                        case "remove":
                            if (!c) return delete f[d.name], g;
                            var h = {};
                            return a.each(c.split(/\s/), function(a, b) {
                                h[b] = g[b], delete g[b]
                            }), h
                    }
                }
                var i = a.validator.normalizeRules(a.extend({}, a.validator.classRules(d), a.validator.attributeRules(d), a.validator.dataRules(d), a.validator.staticRules(d)), d);
                if (i.required) {
                    var j = i.required;
                    delete i.required, i = a.extend({
                        required: j
                    }, i)
                }
                return i
            }
        }), a.extend(a.expr[":"], {
            blank: function(b) {
                return !a.trim("" + a(b).val())
            },
            filled: function(b) {
                return !!a.trim("" + a(b).val())
            },
            unchecked: function(b) {
                return !a(b).prop("checked")
            }
        }), a.validator = function(b, c) {
            this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
        }, a.validator.format = function(b, c) {
            return 1 === arguments.length ? function() {
                var c = a.makeArray(arguments);
                return c.unshift(b), a.validator.format.apply(this, c)
            } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
                b = b.replace(RegExp("\\{" + a + "\\}", "g"), function() {
                    return c
                })
            }), b)
        }, a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(a) {
                    this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
                },
                onfocusout: function(a) {
                    this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
                },
                onkeyup: function(a, b) {
                    (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
                },
                onclick: function(a) {
                    a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
                },
                highlight: function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
                },
                unhighlight: function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
                }
            },
            setDefaults: function(b) {
                a.extend(a.validator.defaults, b)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: a.validator.format("Please enter no more than {0} characters."),
                minlength: a.validator.format("Please enter at least {0} characters."),
                rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
                range: a.validator.format("Please enter a value between {0} and {1}."),
                max: a.validator.format("Please enter a value less than or equal to {0}."),
                min: a.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function b(b) {
                        var c = a.data(this[0].form, "validator"),
                            d = "on" + b.type.replace(/^validate/, "");
                        c.settings[d] && c.settings[d].call(c, this[0], b)
                    }
                    this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var c = this.groups = {};
                    a.each(this.settings.groups, function(b, d) {
                        "string" == typeof d && (d = d.split(/\s/)), a.each(d, function(a, d) {
                            c[d] = b
                        })
                    });
                    var d = this.settings.rules;
                    a.each(d, function(b, c) {
                        d[b] = a.validator.normalizeRule(c)
                    }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                    return this.valid()
                },
                element: function(b) {
                    b = this.validationTargetFor(this.clean(b)), this.lastElement = b, this.prepareElement(b), this.currentElements = a(b);
                    var c = this.check(b) !== !1;
                    return c ? delete this.invalid[b.name] : this.invalid[b.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c
                },
                showErrors: function(b) {
                    if (b) {
                        a.extend(this.errorMap, b), this.errorList = [];
                        for (var c in b) this.errorList.push({
                            message: b[c],
                            element: this.findByName(c)[0]
                        });
                        this.successList = a.grep(this.successList, function(a) {
                            return !(a.name in b)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(a) {
                    var b = 0;
                    for (var c in a) b++;
                    return b
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
                },
                findLastActive: function() {
                    var b = this.lastActive;
                    return b && 1 === a.grep(this.errorList, function(a) {
                        return a.element.name === b.name
                    }).length && b
                },
                elements: function() {
                    var b = this,
                        c = {};
                    return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                    })
                },
                clean: function(b) {
                    return a(b)[0]
                },
                errors: function() {
                    var b = this.settings.errorClass.replace(" ", ".");
                    return a(this.settings.errorElement + "." + b, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(a) {
                    this.reset(), this.toHide = this.errorsFor(a)
                },
                elementValue: function(b) {
                    var c = a(b).attr("type"),
                        d = a(b).val();
                    return "radio" === c || "checkbox" === c ? a("input[name='" + a(b).attr("name") + "']:checked").val() : "string" == typeof d ? d.replace(/\r/g, "") : d
                },
                check: function(b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c, d = a(b).rules(),
                        e = !1,
                        f = this.elementValue(b);
                    for (var g in d) {
                        var h = {
                            method: g,
                            parameters: d[g]
                        };
                        try {
                            if (c = a.validator.methods[g].call(this, f, b, h.parameters), "dependency-mismatch" === c) {
                                e = !0;
                                continue
                            }
                            if (e = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                            if (!c) return this.formatAndAdd(b, h), !1
                        } catch (i) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + h.method + "' method.", i), i
                        }
                    }
                    return e ? void 0 : (this.objectLength(d) && this.successList.push(b), !0)
                },
                customDataMessage: function(b, c) {
                    return a(b).data("msg-" + c.toLowerCase()) || b.attributes && a(b).attr("data-msg-" + c.toLowerCase())
                },
                customMessage: function(a, b) {
                    var c = this.settings.messages[a];
                    return c && (c.constructor === String ? c : c[b])
                },
                findDefined: function() {
                    for (var a = 0; arguments.length > a; a++)
                        if (void 0 !== arguments[a]) return arguments[a];
                    return void 0
                },
                defaultMessage: function(b, c) {
                    return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
                },
                formatAndAdd: function(b, c) {
                    var d = this.defaultMessage(b, c.method),
                        e = /\$?\{(\d+)\}/g;
                    "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                        message: d,
                        element: b
                    }), this.errorMap[b.name] = d, this.submitted[b.name] = d
                },
                addWrapper: function(a) {
                    return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
                },
                defaultShowErrors: function() {
                    var a, b;
                    for (a = 0; this.errorList[a]; a++) {
                        var c = this.errorList[a];
                        this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message)
                    }
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight)
                        for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return a(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(b, c) {
                    var d = this.errorsFor(b);
                    d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d)
                },
                errorsFor: function(b) {
                    var c = this.idOrName(b);
                    return this.errors().filter(function() {
                        return a(this).attr("for") === c
                    })
                },
                idOrName: function(a) {
                    return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
                },
                validationTargetFor: function(a) {
                    return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
                },
                checkable: function(a) {
                    return /radio|checkbox/i.test(a.type)
                },
                findByName: function(b) {
                    return a(this.currentForm).find("[name='" + b + "']")
                },
                getLength: function(b, c) {
                    switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                    }
                    return b.length
                },
                depend: function(a, b) {
                    return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
                },
                dependTypes: {
                    "boolean": function(a) {
                        return a
                    },
                    string: function(b, c) {
                        return !!a(b, c.form).length
                    },
                    "function": function(a, b) {
                        return a(b)
                    }
                },
                optional: function(b) {
                    var c = this.elementValue(b);
                    return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
                },
                startRequest: function(a) {
                    this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
                },
                stopRequest: function(b, c) {
                    this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(b) {
                    return a.data(b, "previousValue") || a.data(b, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(b, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(b, c) {
                b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
            },
            classRules: function(b) {
                var c = {},
                    d = a(b).attr("class");
                return d && a.each(d.split(" "), function() {
                    this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
                }), c
            },
            attributeRules: function(b) {
                var c = {},
                    d = a(b),
                    e = d[0].getAttribute("type");
                for (var f in a.validator.methods) {
                    var g;
                    "required" === f ? (g = d.get(0).getAttribute(f), "" === g && (g = !0), g = !!g) : g = d.attr(f), /min|max/.test(f) && (null === e || /number|range|text/.test(e)) && (g = Number(g)), g ? c[f] = g : e === f && "range" !== e && (c[f] = !0)
                }
                return c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength, c
            },
            dataRules: function(b) {
                var c, d, e = {},
                    f = a(b);
                for (c in a.validator.methods) d = f.data("rule-" + c.toLowerCase()), void 0 !== d && (e[c] = d);
                return e
            },
            staticRules: function(b) {
                var c = {},
                    d = a.data(b.form, "validator");
                return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
            },
            normalizeRules: function(b, c) {
                return a.each(b, function(d, e) {
                    if (e === !1) return void delete b[d];
                    if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                            case "string":
                                f = !!a(e.depends, c.form).length;
                                break;
                            case "function":
                                f = e.depends.call(c, c)
                        }
                        f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                    }
                }), a.each(b, function(d, e) {
                    b[d] = a.isFunction(e) ? e(c) : e
                }), a.each(["minlength", "maxlength"], function() {
                    b[this] && (b[this] = Number(b[this]))
                }), a.each(["rangelength", "range"], function() {
                    var c;
                    b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
                }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
            },
            normalizeRule: function(b) {
                if ("string" == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), function() {
                        c[this] = !0
                    }), b = c
                }
                return b
            },
            addMethod: function(b, c, d) {
                a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], 3 > c.length && a.validator.addClassRules(b, a.validator.normalizeRule(b))
            },
            methods: {
                required: function(b, c, d) {
                    if (!this.depend(d, c)) return "dependency-mismatch";
                    if ("select" === c.nodeName.toLowerCase()) {
                        var e = a(c).val();
                        return e && e.length > 0
                    }
                    return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
                },
                email: function(a, b) {
                    return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
                },
                url: function(a, b) {
                    return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
                },
                date: function(a, b) {
                    return this.optional(b) || !/Invalid|NaN/.test("" + new Date(a))
                },
                dateISO: function(a, b) {
                    return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
                },
                number: function(a, b) {
                    return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
                },
                digits: function(a, b) {
                    return this.optional(b) || /^\d+$/.test(a)
                },
                creditcard: function(a, b) {
                    if (this.optional(b)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(a)) return !1;
                    var c = 0,
                        d = 0,
                        e = !1;
                    a = a.replace(/\D/g, "");
                    for (var f = a.length - 1; f >= 0; f--) {
                        var g = a.charAt(f);
                        d = parseInt(g, 10), e && (d *= 2) > 9 && (d -= 9), c += d, e = !e
                    }
                    return 0 === c % 10
                },
                minlength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                    return this.optional(c) || e >= d
                },
                maxlength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                    return this.optional(c) || d >= e
                },
                rangelength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                    return this.optional(c) || e >= d[0] && d[1] >= e
                },
                min: function(a, b, c) {
                    return this.optional(b) || a >= c
                },
                max: function(a, b, c) {
                    return this.optional(b) || c >= a
                },
                range: function(a, b, c) {
                    return this.optional(b) || a >= c[0] && c[1] >= a
                },
                equalTo: function(b, c, d) {
                    var e = a(d);
                    return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        a(c).valid()
                    }), b === e.val()
                },
                remote: function(b, c, d) {
                    if (this.optional(c)) return "dependency-mismatch";
                    var e = this.previousValue(c);
                    if (this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), e.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = e.message, d = "string" == typeof d && {
                            url: d
                        } || d, e.old === b) return e.valid;
                    e.old = b;
                    var f = this;
                    this.startRequest(c);
                    var g = {};
                    return g[c.name] = b, a.ajax(a.extend(!0, {
                        url: d,
                        mode: "abort",
                        port: "validate" + c.name,
                        dataType: "json",
                        data: g,
                        success: function(d) {
                            f.settings.messages[c.name].remote = e.originalMessage;
                            var g = d === !0 || "true" === d;
                            if (g) {
                                var h = f.formSubmitted;
                                f.prepareElement(c), f.formSubmitted = h, f.successList.push(c), delete f.invalid[c.name], f.showErrors()
                            } else {
                                var i = {},
                                    j = d || f.defaultMessage(c, "remote");
                                i[c.name] = e.message = a.isFunction(j) ? j(b) : j, f.invalid[c.name] = !0, f.showErrors(i)
                            }
                            e.valid = g, f.stopRequest(c, g)
                        }
                    }, d)), "pending"
                }
            }
        }), a.format = a.validator.format
    }(jQuery),
    function(a) {
        var b = {};
        if (a.ajaxPrefilter) a.ajaxPrefilter(function(a, c, d) {
            var e = a.port;
            "abort" === a.mode && (b[e] && b[e].abort(), b[e] = d)
        });
        else {
            var c = a.ajax;
            a.ajax = function(d) {
                var e = ("mode" in d ? d : a.ajaxSettings).mode,
                    f = ("port" in d ? d : a.ajaxSettings).port;
                return "abort" === e ? (b[f] && b[f].abort(), b[f] = c.apply(this, arguments), b[f]) : c.apply(this, arguments)
            }
        }
    }(jQuery),
    function(a) {
        a.extend(a.fn, {
            validateDelegate: function(b, c, d) {
                return this.bind(c, function(c) {
                    var e = a(c.target);
                    return e.is(b) ? d.apply(e, arguments) : void 0
                })
            }
        })
    }(jQuery), ! function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("undefined" != typeof jQuery ? jQuery : window.Zepto)
    }(function(a) {
        "use strict";

        function b(b) {
            var c = b.data;
            b.isDefaultPrevented() || (b.preventDefault(), a(b.target).ajaxSubmit(c))
        }

        function c(b) {
            var c = b.target,
                d = a(c);
            if (!d.is("[type=submit],[type=image]")) {
                var e = d.closest("[type=submit]");
                if (0 === e.length) return;
                c = e[0]
            }
            var f = this;
            if (f.clk = c, "image" == c.type)
                if (void 0 !== b.offsetX) f.clk_x = b.offsetX, f.clk_y = b.offsetY;
                else if ("function" == typeof a.fn.offset) {
                var g = d.offset();
                f.clk_x = b.pageX - g.left, f.clk_y = b.pageY - g.top
            } else f.clk_x = b.pageX - c.offsetLeft, f.clk_y = b.pageY - c.offsetTop;
            setTimeout(function() {
                f.clk = f.clk_x = f.clk_y = null
            }, 100)
        }

        function d() {
            if (a.fn.ajaxSubmit.debug) {
                var b = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(b) : window.opera && window.opera.postError && window.opera.postError(b)
            }
        }
        var e = {};
        e.fileapi = void 0 !== a("<input type='file'/>").get(0).files, e.formdata = void 0 !== window.FormData;
        var f = !!a.fn.prop;
        a.fn.attr2 = function() {
            if (!f) return this.attr.apply(this, arguments);
            var a = this.prop.apply(this, arguments);
            return a && a.jquery || "string" == typeof a ? a : this.attr.apply(this, arguments)
        }, a.fn.ajaxSubmit = function(b) {
            function c(c) {
                var d, e, f = a.param(c, b.traditional).split("&"),
                    g = f.length,
                    h = [];
                for (d = 0; g > d; d++) f[d] = f[d].replace(/\+/g, " "), e = f[d].split("="), h.push([decodeURIComponent(e[0]), decodeURIComponent(e[1])]);
                return h
            }

            function g(d) {
                for (var e = new FormData, f = 0; f < d.length; f++) e.append(d[f].name, d[f].value);
                if (b.extraData) {
                    var g = c(b.extraData);
                    for (f = 0; f < g.length; f++) g[f] && e.append(g[f][0], g[f][1])
                }
                b.data = null;
                var h = a.extend(!0, {}, a.ajaxSettings, b, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: i || "POST"
                });
                b.uploadProgress && (h.xhr = function() {
                    var c = a.ajaxSettings.xhr();
                    return c.upload && c.upload.addEventListener("progress", function(a) {
                        var c = 0,
                            d = a.loaded || a.position,
                            e = a.total;
                        a.lengthComputable && (c = Math.ceil(d / e * 100)), b.uploadProgress(a, d, e, c)
                    }, !1), c
                }), h.data = null;
                var j = h.beforeSend;
                return h.beforeSend = function(a, c) {
                    c.data = b.formData ? b.formData : e, j && j.call(this, a, c)
                }, a.ajax(h)
            }

            function h(c) {
                function e(a) {
                    var b = null;
                    try {
                        a.contentWindow && (b = a.contentWindow.document)
                    } catch (c) {
                        d("cannot get iframe.contentWindow document: " + c)
                    }
                    if (b) return b;
                    try {
                        b = a.contentDocument ? a.contentDocument : a.document
                    } catch (c) {
                        d("cannot get iframe.contentDocument: " + c), b = a.document
                    }
                    return b
                }

                function g() {
                    function b() {
                        try {
                            var a = e(r).readyState;
                            d("state = " + a), a && "uninitialized" == a.toLowerCase() && setTimeout(b, 50)
                        } catch (c) {
                            d("Server abort: ", c, " (", c.name, ")"), h(A), w && clearTimeout(w), w = void 0
                        }
                    }
                    var c = l.attr2("target"),
                        f = l.attr2("action"),
                        g = "multipart/form-data",
                        j = l.attr("enctype") || l.attr("encoding") || g;
                    x.setAttribute("target", o), (!i || /post/i.test(i)) && x.setAttribute("method", "POST"), f != m.url && x.setAttribute("action", m.url), m.skipEncodingOverride || i && !/post/i.test(i) || l.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    }), m.timeout && (w = setTimeout(function() {
                        v = !0, h(z)
                    }, m.timeout));
                    var k = [];
                    try {
                        if (m.extraData)
                            for (var n in m.extraData) m.extraData.hasOwnProperty(n) && k.push(a.isPlainObject(m.extraData[n]) && m.extraData[n].hasOwnProperty("name") && m.extraData[n].hasOwnProperty("value") ? a('<input type="hidden" name="' + m.extraData[n].name + '">').val(m.extraData[n].value).appendTo(x)[0] : a('<input type="hidden" name="' + n + '">').val(m.extraData[n]).appendTo(x)[0]);
                        m.iframeTarget || q.appendTo("body"), r.attachEvent ? r.attachEvent("onload", h) : r.addEventListener("load", h, !1), setTimeout(b, 15);
                        try {
                            x.submit()
                        } catch (p) {
                            var s = document.createElement("form").submit;
                            s.apply(x)
                        }
                    } finally {
                        x.setAttribute("action", f), x.setAttribute("enctype", j), c ? x.setAttribute("target", c) : l.removeAttr("target"), a(k).remove()
                    }
                }

                function h(b) {
                    if (!s.aborted && !F) {
                        if (E = e(r), E || (d("cannot access response document"), b = A), b === z && s) return s.abort("timeout"), void y.reject(s, "timeout");
                        if (b == A && s) return s.abort("server abort"), void y.reject(s, "error", "server abort");
                        if (E && E.location.href != m.iframeSrc || v) {
                            r.detachEvent ? r.detachEvent("onload", h) : r.removeEventListener("load", h, !1);
                            var c, f = "success";
                            try {
                                if (v) throw "timeout";
                                var g = "xml" == m.dataType || E.XMLDocument || a.isXMLDoc(E);
                                if (d("isXml=" + g), !g && window.opera && (null === E.body || !E.body.innerHTML) && --G) return d("requeing onLoad callback, DOM not available"), void setTimeout(h, 250);
                                var i = E.body ? E.body : E.documentElement;
                                s.responseText = i ? i.innerHTML : null, s.responseXML = E.XMLDocument ? E.XMLDocument : E, g && (m.dataType = "xml"), s.getResponseHeader = function(a) {
                                    var b = {
                                        "content-type": m.dataType
                                    };
                                    return b[a.toLowerCase()]
                                }, i && (s.status = Number(i.getAttribute("status")) || s.status, s.statusText = i.getAttribute("statusText") || s.statusText);
                                var j = (m.dataType || "").toLowerCase(),
                                    k = /(json|script|text)/.test(j);
                                if (k || m.textarea) {
                                    var l = E.getElementsByTagName("textarea")[0];
                                    if (l) s.responseText = l.value, s.status = Number(l.getAttribute("status")) || s.status, s.statusText = l.getAttribute("statusText") || s.statusText;
                                    else if (k) {
                                        var o = E.getElementsByTagName("pre")[0],
                                            p = E.getElementsByTagName("body")[0];
                                        o ? s.responseText = o.textContent ? o.textContent : o.innerText : p && (s.responseText = p.textContent ? p.textContent : p.innerText)
                                    }
                                } else "xml" == j && !s.responseXML && s.responseText && (s.responseXML = H(s.responseText));
                                try {
                                    D = J(s, j, m)
                                } catch (t) {
                                    f = "parsererror", s.error = c = t || f
                                }
                            } catch (t) {
                                d("error caught: ", t), f = "error", s.error = c = t || f
                            }
                            s.aborted && (d("upload aborted"), f = null), s.status && (f = s.status >= 200 && s.status < 300 || 304 === s.status ? "success" : "error"), "success" === f ? (m.success && m.success.call(m.context, D, "success", s), y.resolve(s.responseText, "success", s), n && a.event.trigger("ajaxSuccess", [s, m])) : f && (void 0 === c && (c = s.statusText), m.error && m.error.call(m.context, s, f, c), y.reject(s, "error", c), n && a.event.trigger("ajaxError", [s, m, c])), n && a.event.trigger("ajaxComplete", [s, m]), n && !--a.active && a.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, s, f), F = !0, m.timeout && clearTimeout(w), setTimeout(function() {
                                m.iframeTarget ? q.attr("src", m.iframeSrc) : q.remove(), s.responseXML = null
                            }, 100)
                        }
                    }
                }
                var j, k, m, n, o, q, r, s, t, u, v, w, x = l[0],
                    y = a.Deferred();
                if (y.abort = function(a) {
                        s.abort(a)
                    }, c)
                    for (k = 0; k < p.length; k++) j = a(p[k]), f ? j.prop("disabled", !1) : j.removeAttr("disabled");
                if (m = a.extend(!0, {}, a.ajaxSettings, b), m.context = m.context || m, o = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (q = a(m.iframeTarget), u = q.attr2("name"), u ? o = u : q.attr2("name", o)) : (q = a('<iframe name="' + o + '" src="' + m.iframeSrc + '" />'), q.css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px"
                    })), r = q[0], s = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function() {},
                        getResponseHeader: function() {},
                        setRequestHeader: function() {},
                        abort: function(b) {
                            var c = "timeout" === b ? "timeout" : "aborted";
                            d("aborting upload... " + c), this.aborted = 1;
                            try {
                                r.contentWindow.document.execCommand && r.contentWindow.document.execCommand("Stop")
                            } catch (e) {}
                            q.attr("src", m.iframeSrc), s.error = c, m.error && m.error.call(m.context, s, c, b), n && a.event.trigger("ajaxError", [s, m, c]), m.complete && m.complete.call(m.context, s, c)
                        }
                    }, n = m.global, n && 0 === a.active++ && a.event.trigger("ajaxStart"), n && a.event.trigger("ajaxSend", [s, m]), m.beforeSend && m.beforeSend.call(m.context, s, m) === !1) return m.global && a.active--, y.reject(), y;
                if (s.aborted) return y.reject(), y;
                t = x.clk, t && (u = t.name, u && !t.disabled && (m.extraData = m.extraData || {}, m.extraData[u] = t.value, "image" == t.type && (m.extraData[u + ".x"] = x.clk_x, m.extraData[u + ".y"] = x.clk_y)));
                var z = 1,
                    A = 2,
                    B = a("meta[name=csrf-token]").attr("content"),
                    C = a("meta[name=csrf-param]").attr("content");
                C && B && (m.extraData = m.extraData || {}, m.extraData[C] = B), m.forceSync ? g() : setTimeout(g, 10);
                var D, E, F, G = 50,
                    H = a.parseXML || function(a, b) {
                        return window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "text/xml"), b && b.documentElement && "parsererror" != b.documentElement.nodeName ? b : null
                    },
                    I = a.parseJSON || function(a) {
                        return window.eval("(" + a + ")")
                    },
                    J = function(b, c, d) {
                        var e = b.getResponseHeader("content-type") || "",
                            f = "xml" === c || !c && e.indexOf("xml") >= 0,
                            g = f ? b.responseXML : b.responseText;
                        return f && "parsererror" === g.documentElement.nodeName && a.error && a.error("parsererror"), d && d.dataFilter && (g = d.dataFilter(g, c)), "string" == typeof g && ("json" === c || !c && e.indexOf("json") >= 0 ? g = I(g) : ("script" === c || !c && e.indexOf("javascript") >= 0) && a.globalEval(g)), g
                    };
                return y
            }
            if (!this.length) return d("ajaxSubmit: skipping submit process - no element selected"), this;
            var i, j, k, l = this;
            "function" == typeof b ? b = {
                success: b
            } : void 0 === b && (b = {}), i = b.type || this.attr2("method"), j = b.url || this.attr2("action"), k = "string" == typeof j ? a.trim(j) : "", k = k || window.location.href || "", k && (k = (k.match(/^([^#]+)/) || [])[1]), b = a.extend(!0, {
                url: k,
                success: a.ajaxSettings.success,
                type: i || a.ajaxSettings.type,
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, b);
            var m = {};
            if (this.trigger("form-pre-serialize", [this, b, m]), m.veto) return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (b.beforeSerialize && b.beforeSerialize(this, b) === !1) return d("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            var n = b.traditional;
            void 0 === n && (n = a.ajaxSettings.traditional);
            var o, p = [],
                q = this.formToArray(b.semantic, p);
            if (b.data && (b.extraData = b.data, o = a.param(b.data, n)), b.beforeSubmit && b.beforeSubmit(q, this, b) === !1) return d("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [q, this, b, m]), m.veto) return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            var r = a.param(q, n);
            o && (r = r ? r + "&" + o : o), "GET" == b.type.toUpperCase() ? (b.url += (b.url.indexOf("?") >= 0 ? "&" : "?") + r, b.data = null) : b.data = r;
            var s = [];
            if (b.resetForm && s.push(function() {
                    l.resetForm()
                }), b.clearForm && s.push(function() {
                    l.clearForm(b.includeHidden)
                }), !b.dataType && b.target) {
                var t = b.success || function() {};
                s.push(function(c) {
                    var d = b.replaceTarget ? "replaceWith" : "html";
                    a(b.target)[d](c).each(t, arguments)
                })
            } else b.success && s.push(b.success);
            if (b.success = function(a, c, d) {
                    for (var e = b.context || this, f = 0, g = s.length; g > f; f++) s[f].apply(e, [a, c, d || l, l])
                }, b.error) {
                var u = b.error;
                b.error = function(a, c, d) {
                    var e = b.context || this;
                    u.apply(e, [a, c, d, l])
                }
            }
            if (b.complete) {
                var v = b.complete;
                b.complete = function(a, c) {
                    var d = b.context || this;
                    v.apply(d, [a, c, l])
                }
            }
            var w = a("input[type=file]:enabled", this).filter(function() {
                    return "" !== a(this).val()
                }),
                x = w.length > 0,
                y = "multipart/form-data",
                z = l.attr("enctype") == y || l.attr("encoding") == y,
                A = e.fileapi && e.formdata;
            d("fileAPI :" + A);
            var B, C = (x || z) && !A;
            b.iframe !== !1 && (b.iframe || C) ? b.closeKeepAlive ? a.get(b.closeKeepAlive, function() {
                B = h(q)
            }) : B = h(q) : B = (x || z) && A ? g(q) : a.ajax(b), l.removeData("jqxhr").data("jqxhr", B);
            for (var D = 0; D < p.length; D++) p[D] = null;
            return this.trigger("form-submit-notify", [this, b]), this
        }, a.fn.ajaxForm = function(e) {
            if (e = e || {}, e.delegation = e.delegation && a.isFunction(a.fn.on), !e.delegation && 0 === this.length) {
                var f = {
                    s: this.selector,
                    c: this.context
                };
                return !a.isReady && f.s ? (d("DOM not ready, queuing ajaxForm"), a(function() {
                    a(f.s, f.c).ajaxForm(e)
                }), this) : (d("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)")), this)
            }
            return e.delegation ? (a(document).off("submit.form-plugin", this.selector, b).off("click.form-plugin", this.selector, c).on("submit.form-plugin", this.selector, e, b).on("click.form-plugin", this.selector, e, c), this) : this.ajaxFormUnbind().bind("submit.form-plugin", e, b).bind("click.form-plugin", e, c)
        }, a.fn.ajaxFormUnbind = function() {
            return this.unbind("submit.form-plugin click.form-plugin")
        }, a.fn.formToArray = function(b, c) {
            var d = [];
            if (0 === this.length) return d;
            var f, g = this[0],
                h = this.attr("id"),
                i = b ? g.getElementsByTagName("*") : g.elements;
            if (i && (i = a(i).get()), h && (f = a(":input[form=" + h + "]").get(), f.length && (i = (i || []).concat(f))), !i || !i.length) return d;
            var j, k, l, m, n, o, p;
            for (j = 0, o = i.length; o > j; j++)
                if (n = i[j], l = n.name, l && !n.disabled)
                    if (b && g.clk && "image" == n.type) g.clk == n && (d.push({
                        name: l,
                        value: a(n).val(),
                        type: n.type
                    }), d.push({
                        name: l + ".x",
                        value: g.clk_x
                    }, {
                        name: l + ".y",
                        value: g.clk_y
                    }));
                    else if (m = a.fieldValue(n, !0), m && m.constructor == Array)
                for (c && c.push(n), k = 0, p = m.length; p > k; k++) d.push({
                    name: l,
                    value: m[k]
                });
            else if (e.fileapi && "file" == n.type) {
                c && c.push(n);
                var q = n.files;
                if (q.length)
                    for (k = 0; k < q.length; k++) d.push({
                        name: l,
                        value: q[k],
                        type: n.type
                    });
                else d.push({
                    name: l,
                    value: "",
                    type: n.type
                })
            } else null !== m && "undefined" != typeof m && (c && c.push(n), d.push({
                name: l,
                value: m,
                type: n.type,
                required: n.required
            }));
            if (!b && g.clk) {
                var r = a(g.clk),
                    s = r[0];
                l = s.name, l && !s.disabled && "image" == s.type && (d.push({
                    name: l,
                    value: r.val()
                }), d.push({
                    name: l + ".x",
                    value: g.clk_x
                }, {
                    name: l + ".y",
                    value: g.clk_y
                }))
            }
            return d
        }, a.fn.formSerialize = function(b) {
            return a.param(this.formToArray(b))
        }, a.fn.fieldSerialize = function(b) {
            var c = [];
            return this.each(function() {
                var d = this.name;
                if (d) {
                    var e = a.fieldValue(this, b);
                    if (e && e.constructor == Array)
                        for (var f = 0, g = e.length; g > f; f++) c.push({
                            name: d,
                            value: e[f]
                        });
                    else null !== e && "undefined" != typeof e && c.push({
                        name: this.name,
                        value: e
                    })
                }
            }), a.param(c)
        }, a.fn.fieldValue = function(b) {
            for (var c = [], d = 0, e = this.length; e > d; d++) {
                var f = this[d],
                    g = a.fieldValue(f, b);
                null === g || "undefined" == typeof g || g.constructor == Array && !g.length || (g.constructor == Array ? a.merge(c, g) : c.push(g))
            }
            return c
        }, a.fieldValue = function(b, c) {
            var d = b.name,
                e = b.type,
                f = b.tagName.toLowerCase();
            if (void 0 === c && (c = !0), c && (!d || b.disabled || "reset" == e || "button" == e || ("checkbox" == e || "radio" == e) && !b.checked || ("submit" == e || "image" == e) && b.form && b.form.clk != b || "select" == f && -1 == b.selectedIndex)) return null;
            if ("select" == f) {
                var g = b.selectedIndex;
                if (0 > g) return null;
                for (var h = [], i = b.options, j = "select-one" == e, k = j ? g + 1 : i.length, l = j ? g : 0; k > l; l++) {
                    var m = i[l];
                    if (m.selected) {
                        var n = m.value;
                        if (n || (n = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), j) return n;
                        h.push(n)
                    }
                }
                return h
            }
            return a(b).val()
        }, a.fn.clearForm = function(b) {
            return this.each(function() {
                a("input,select,textarea", this).clearFields(b)
            })
        }, a.fn.clearFields = a.fn.clearInputs = function(b) {
            var c = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function() {
                var d = this.type,
                    e = this.tagName.toLowerCase();
                c.test(d) || "textarea" == e ? this.value = "" : "checkbox" == d || "radio" == d ? this.checked = !1 : "select" == e ? this.selectedIndex = -1 : "file" == d ? /MSIE/.test(navigator.userAgent) ? a(this).replaceWith(a(this).clone(!0)) : a(this).val("") : b && (b === !0 && /hidden/.test(d) || "string" == typeof b && a(this).is(b)) && (this.value = "")
            })
        }, a.fn.resetForm = function() {
            return this.each(function() {
                ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
            })
        }, a.fn.enable = function(a) {
            return void 0 === a && (a = !0), this.each(function() {
                this.disabled = !a
            })
        }, a.fn.selected = function(b) {
            return void 0 === b && (b = !0), this.each(function() {
                var c = this.type;
                if ("checkbox" == c || "radio" == c) this.checked = b;
                else if ("option" == this.tagName.toLowerCase()) {
                    var d = a(this).parent("select");
                    b && d[0] && "select-one" == d[0].type && d.find("option").selected(!1), this.selected = b
                }
            })
        }, a.fn.ajaxSubmit.debug = !1
    }), ! function(a) {
        a.fn.gMap = function(b, c) {
            switch (b) {
                case "addMarker":
                    return a(this).trigger("gMap.addMarker", [c.latitude, c.longitude, c.content, c.icon, c.popup]);
                case "centerAt":
                    return a(this).trigger("gMap.centerAt", [c.latitude, c.longitude, c.zoom]);
                case "clearMarkers":
                    return a(this).trigger("gMap.clearMarkers")
            }
            var d = a.extend({}, a.fn.gMap.defaults, b);
            return this.each(function() {
                var b = new google.maps.Map(this);
                a(this).data("gMap.reference", b);
                var c = new google.maps.Geocoder;
                d.address ? c.geocode({
                    address: d.address
                }, function(a) {
                    a && a.length && b.setCenter(a[0].geometry.location)
                }) : d.latitude && d.longitude ? b.setCenter(new google.maps.LatLng(d.latitude, d.longitude)) : a.isArray(d.markers) && d.markers.length > 0 ? d.markers[0].address ? c.geocode({
                    address: d.markers[0].address
                }, function(a) {
                    a && a.length > 0 && b.setCenter(a[0].geometry.location)
                }) : b.setCenter(new google.maps.LatLng(d.markers[0].latitude, d.markers[0].longitude)) : b.setCenter(new google.maps.LatLng(34.885931, 9.84375)), b.setZoom(d.zoom), b.setMapTypeId(google.maps.MapTypeId[d.maptype]);
                var e = {
                    scrollwheel: d.scrollwheel,
                    disableDoubleClickZoom: !d.doubleclickzoom
                };
                d.controls === !1 ? a.extend(e, {
                    disableDefaultUI: !0
                }) : 0 !== d.controls.length && a.extend(e, d.controls, {
                    disableDefaultUI: !0
                }), b.setOptions(e);
                var f, g, h = new google.maps.Marker;
                f = new google.maps.MarkerImage(d.icon.image), f.size = new google.maps.Size(d.icon.iconsize[0], d.icon.iconsize[1]), f.anchor = new google.maps.Point(d.icon.iconanchor[0], d.icon.iconanchor[1]), h.setIcon(f), d.icon.shadow && (g = new google.maps.MarkerImage(d.icon.shadow), g.size = new google.maps.Size(d.icon.shadowsize[0], d.icon.shadowsize[1]), g.anchor = new google.maps.Point(d.icon.shadowanchor[0], d.icon.shadowanchor[1]), h.setShadow(g)), a(this).bind("gMap.centerAt", function(a, c, d, e) {
                    e && b.setZoom(e), b.panTo(new google.maps.LatLng(parseFloat(c), parseFloat(d)))
                });
                var i = [];
                a(this).bind("gMap.clearMarkers", function() {
                    for (; i[0];) i.pop().setMap(null)
                });
                var j;
                a(this).bind("gMap.addMarker", function(a, c, e, f, g, k) {
                    var l, m, n = new google.maps.LatLng(parseFloat(c), parseFloat(e)),
                        o = new google.maps.Marker({
                            position: n
                        });
                    if (g ? (l = new google.maps.MarkerImage(g.image), l.size = new google.maps.Size(g.iconsize[0], g.iconsize[1]), l.anchor = new google.maps.Point(g.iconanchor[0], g.iconanchor[1]), o.setIcon(l), g.shadow && (m = new google.maps.MarkerImage(g.shadow), m.size = new google.maps.Size(g.shadowsize[0], g.shadowsize[1]), m.anchor = new google.maps.Point(g.shadowanchor[0], g.shadowanchor[1]), h.setShadow(m))) : (o.setIcon(h.getIcon()), o.setShadow(h.getShadow())), f) {
                        "_latlng" === f && (f = c + ", " + e);
                        var p = new google.maps.InfoWindow({
                            content: d.html_prepend + f + d.html_append
                        });
                        google.maps.event.addListener(o, "click", function() {
                            j && j.close(), p.open(b, o), j = p
                        }), k && google.maps.event.addListenerOnce(b, "tilesloaded", function() {
                            p.open(b, o)
                        })
                    }
                    o.setMap(b), i.push(o)
                });
                for (var k, l = this, m = function(b) {
                        return function(c) {
                            c && c.length > 0 && a(l).trigger("gMap.addMarker", [c[0].geometry.location.lat(), c[0].geometry.location.lng(), b.html, b.icon, b.popup])
                        }
                    }, n = 0; n < d.markers.length; n++) k = d.markers[n], k.address ? ("_address" === k.html && (k.html = k.address), c.geocode({
                    address: k.address
                }, m(k))) : a(this).trigger("gMap.addMarker", [k.latitude, k.longitude, k.html, k.icon, k.popup])
            })
        }, a.fn.gMap.defaults = {
            address: "",
            latitude: 0,
            longitude: 0,
            zoom: 1,
            markers: [],
            controls: [],
            scrollwheel: !1,
            doubleclickzoom: !0,
            maptype: "ROADMAP",
            html_prepend: '<div class="gmap_marker">',
            html_append: "</div>",
            icon: {
                image: "http://www.google.com/mapfiles/marker.png",
                shadow: "http://www.google.com/mapfiles/shadow50.png",
                iconsize: [20, 34],
                shadowsize: [37, 34],
                iconanchor: [9, 34],
                shadowanchor: [6, 34]
            }
        }
    }(jQuery), + function(a) {
        function b(c, d) {
            var e, f = a.proxy(this.process, this);
            this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .sf-menu li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
        }
        b.DEFAULTS = {
            offset: 10
        }, b.prototype.refresh = function() {
            var b = this.$element[0] == window ? "offset" : "position";
            this.offsets = a([]), this.targets = a([]); {
                var c = this;
                this.$body.find(this.selector).map(function() {
                    var d = a(this),
                        e = d.data("target") || d.attr("href"),
                        f = /^#./.test(e) && a(e);
                    return f && f.length && f.is(":visible") && [
                        [f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
                    ] || null
                }).sort(function(a, b) {
                    return a[0] - b[0]
                }).each(function() {
                    c.offsets.push(this[0]), c.targets.push(this[1])
                })
            }
        }, b.prototype.process = function() {
            var a, b = this.$scrollElement.scrollTop() + this.options.offset,
                c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                d = c - this.$scrollElement.height(),
                e = this.offsets,
                f = this.targets,
                g = this.activeTarget;
            if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
            if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
            for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
        }, b.prototype.activate = function(b) {
            this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
            var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
                d = a(c).parents("li").addClass("active");
            d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
        };
        var c = a.fn.scrollspy;
        a.fn.scrollspy = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.scrollspy"),
                    f = "object" == typeof c && c;
                e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
            return a.fn.scrollspy = c, this
        }, a(window).on("load", function() {
            a('[data-spy="scroll"]').each(function() {
                var b = a(this);
                b.scrollspy(b.data())
            })
        })
    }(jQuery);