/*!
 * VERSION: beta 0.2.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope =
  'undefined' != typeof module && module.exports && 'undefined' != typeof global
    ? global
    : this || window
;(function (t) {
  'use strict'
  var e = t.GreenSockGlobals || t,
    i = function (t) {
      var i,
        s = t.split('.'),
        r = e
      for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {}
      return r
    },
    s = i('com.greensock.utils'),
    r = function (t) {
      var e = t.nodeType,
        i = ''
      if (1 === e || 9 === e || 11 === e) {
        if ('string' == typeof t.textContent) return t.textContent
        for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
      } else if (3 === e || 4 === e) return t.nodeValue
      return i
    },
    n = document,
    a = n.defaultView ? n.defaultView.getComputedStyle : function () {},
    o = /([A-Z])/g,
    h = function (t, e, i, s) {
      var r
      return (
        (i = i || a(t, null))
          ? ((t = i.getPropertyValue(e.replace(o, '-$1').toLowerCase())),
            (r = t || i.length ? t : i[e]))
          : t.currentStyle && ((i = t.currentStyle), (r = i[e])),
        s ? r : parseInt(r, 10) || 0
      )
    },
    l = function (t) {
      return t.length &&
        t[0] &&
        ((t[0].nodeType && t[0].style && !t.nodeType) ||
          (t[0].length && t[0][0]))
        ? !0
        : !1
    },
    _ = function (t) {
      var e,
        i,
        s,
        r = [],
        n = t.length
      for (e = 0; n > e; e++)
        if (((i = t[e]), l(i)))
          for (s = i.length, s = 0; i.length > s; s++) r.push(i[s])
        else r.push(i)
      return r
    },
    u = ')eefec303079ad17405c',
    c = /(?:<br>|<br\/>|<br \/>)/gi,
    p = n.all && !n.addEventListener,
    f =
      "<div style='position:relative;display:inline-block;" +
      (p ? "*display:inline;*zoom:1;'" : "'"),
    m = function (t) {
      t = t || ''
      var e = -1 !== t.indexOf('++'),
        i = 1
      return (
        e && (t = t.split('++').join('')),
        function () {
          return f + (t ? " class='" + t + (e ? i++ : '') + "'>" : '>')
        }
      )
    },
    d =
      (s.SplitText =
      e.SplitText =
        function (t, e) {
          if (('string' == typeof t && (t = d.selector(t)), !t))
            throw 'cannot split a null element.'
          ;(this.elements = l(t) ? _(t) : [t]),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this._originals = []),
            (this.vars = e || {}),
            this.split(e)
        }),
    g = function (t, e, i, s, o) {
      c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u))
      var l,
        _,
        p,
        f,
        d,
        g,
        v,
        y,
        T,
        w,
        b,
        x,
        P,
        S = r(t),
        C = e.type || e.split || 'chars,words,lines',
        k = -1 !== C.indexOf('lines') ? [] : null,
        R = -1 !== C.indexOf('words'),
        A = -1 !== C.indexOf('chars'),
        D = 'absolute' === e.position || e.absolute === !0,
        O = D ? '&#173; ' : ' ',
        M = -999,
        L = a(t),
        z = h(t, 'paddingLeft', L),
        I = h(t, 'borderBottomWidth', L) + h(t, 'borderTopWidth', L),
        E = h(t, 'borderLeftWidth', L) + h(t, 'borderRightWidth', L),
        N = h(t, 'paddingTop', L) + h(t, 'paddingBottom', L),
        F = h(t, 'paddingLeft', L) + h(t, 'paddingRight', L),
        X = h(t, 'textAlign', L, !0),
        U = t.clientHeight,
        B = t.clientWidth,
        j = S.length,
        Y = '</div>',
        q = m(e.wordsClass),
        G = m(e.charsClass),
        V = -1 !== (e.linesClass || '').indexOf('++'),
        Q = e.linesClass
      for (V && (Q = Q.split('++').join('')), p = q(), f = 0; j > f; f++)
        (g = S.charAt(f)),
          ')' === g && S.substr(f, 20) === u
            ? ((p += Y + '<BR/>'), f !== j - 1 && (p += ' ' + q()), (f += 19))
            : ' ' === g && ' ' !== S.charAt(f - 1) && f !== j - 1
            ? ((p += Y), f !== j - 1 && (p += O + q()))
            : (p += A && ' ' !== g ? G() + g + '</div>' : g)
      for (
        t.innerHTML = p + Y,
          d = t.getElementsByTagName('*'),
          j = d.length,
          v = [],
          f = 0;
        j > f;
        f++
      )
        v[f] = d[f]
      if (k || D)
        for (f = 0; j > f; f++)
          (y = v[f]),
            (_ = y.parentNode === t),
            (_ || D || (A && !R)) &&
              ((T = y.offsetTop),
              k &&
                _ &&
                T !== M &&
                'BR' !== y.nodeName &&
                ((l = []), k.push(l), (M = T)),
              D &&
                ((y._x = y.offsetLeft),
                (y._y = T),
                (y._w = y.offsetWidth),
                (y._h = y.offsetHeight)),
              k &&
                ((R !== _ && A) || (l.push(y), (y._x -= z)),
                _ && f && (v[f - 1]._wordEnd = !0)))
      for (f = 0; j > f; f++)
        (y = v[f]),
          (_ = y.parentNode === t),
          'BR' !== y.nodeName
            ? (D &&
                ((b = y.style),
                R ||
                  _ ||
                  ((y._x += y.parentNode._x), (y._y += y.parentNode._y)),
                (b.left = y._x + 'px'),
                (b.top = y._y + 'px'),
                (b.position = 'absolute'),
                (b.display = 'block'),
                (b.width = y._w + 1 + 'px'),
                (b.height = y._h + 'px')),
              R
                ? _
                  ? s.push(y)
                  : A && i.push(y)
                : _
                ? (t.removeChild(y), v.splice(f--, 1), j--)
                : !_ &&
                  A &&
                  ((T = !k && !D && y.nextSibling),
                  t.appendChild(y),
                  T || t.appendChild(n.createTextNode(' ')),
                  i.push(y)))
            : k || D
            ? (t.removeChild(y), v.splice(f--, 1), j--)
            : R || t.appendChild(y)
      if (k) {
        for (
          D &&
            ((w = n.createElement('div')),
            t.appendChild(w),
            (x = w.offsetWidth + 'px'),
            (T = w.offsetParent === t ? 0 : t.offsetLeft),
            t.removeChild(w)),
            b = t.style.cssText,
            t.style.cssText = 'display:none;';
          t.firstChild;

        )
          t.removeChild(t.firstChild)
        for (P = !D || (!R && !A), f = 0; k.length > f; f++) {
          for (
            l = k[f],
              w = n.createElement('div'),
              w.style.cssText =
                'display:block;text-align:' +
                X +
                ';position:' +
                (D ? 'absolute;' : 'relative;'),
              Q && (w.className = Q + (V ? f + 1 : '')),
              o.push(w),
              j = l.length,
              d = 0;
            j > d;
            d++
          )
            'BR' !== l[d].nodeName &&
              ((y = l[d]),
              w.appendChild(y),
              P && (y._wordEnd || R) && w.appendChild(n.createTextNode(' ')),
              D &&
                (0 === d &&
                  ((w.style.top = y._y + 'px'), (w.style.left = z + T + 'px')),
                (y.style.top = '0px'),
                T && (y.style.left = y._x - T + 'px')))
          R ||
            A ||
            (w.innerHTML = r(w).split(String.fromCharCode(160)).join(' ')),
            D && ((w.style.width = x), (w.style.height = y._h + 'px')),
            t.appendChild(w)
        }
        t.style.cssText = b
      }
      D &&
        (U > t.clientHeight &&
          ((t.style.height = U - N + 'px'),
          U > t.clientHeight && (t.style.height = U + I + 'px')),
        B > t.clientWidth &&
          ((t.style.width = B - F + 'px'),
          B > t.clientWidth && (t.style.width = B + E + 'px')))
    },
    v = d.prototype
  ;(v.split = function (t) {
    this.isSplit && this.revert(),
      (this.vars = t || this.vars),
      (this._originals.length =
        this.chars.length =
        this.words.length =
        this.lines.length =
          0)
    for (var e = 0; this.elements.length > e; e++)
      (this._originals[e] = this.elements[e].innerHTML),
        g(this.elements[e], this.vars, this.chars, this.words, this.lines)
    return (this.isSplit = !0), this
  }),
    (v.revert = function () {
      if (!this._originals) throw "revert() call wasn't scoped properly."
      for (var t = this._originals.length; --t > -1; )
        this.elements[t].innerHTML = this._originals[t]
      return (
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.isSplit = !1),
        this
      )
    }),
    (d.selector =
      t.$ ||
      t.jQuery ||
      function (e) {
        return t.$
          ? ((d.selector = t.$), t.$(e))
          : n
          ? n.getElementById('#' === e.charAt(0) ? e.substr(1) : e)
          : e
      }),
    (d.version = '0.2.4')
})(_gsScope),
  (function (t) {
    'use strict'
    var e = function () {
      return (_gsScope.GreenSockGlobals || _gsScope)[t]
    }
    'function' == typeof define && define.amd
      ? define(['TweenLite'], e)
      : 'undefined' != typeof module && module.exports && (module.exports = e())
  })('SplitText')
