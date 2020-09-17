eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < a ? '' : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!''.replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function (e) {
          return r[e];
        },
      ];
      e = function () {
        return '\\w+';
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p;
  })(
    "b d(a){o p='АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.q('');o t='абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.q('');1 e={};g(1 i=0;i<p.u;i++){e[p[i]]=t[i]}1 h='';g(1 i=0;i<a.u;i++){1 j=a.F(i);v(e[j]){h+=e[j]}G{h+=j}}k h}b H(a){3.5(a)}1 I='ПрИвЕт пРикОл'.w().q(' ');1 c='ПрИвЕт, КаК у ТЕБЯ деЛА?'.J(K);o{2}=L('M');1 6={};b r(f,a){k b(){1 x=2.7();1 y=f.N(O,P);v(!6[a])6[a]=0;6[a]+=2.7()-x;k y}}b s(a){a=a.w();k a}1 z=r(d,'l');1 A=r(s,'l');z(c);3.5(6.l.m(4)+' n');A(c);3.5(6.l.m(4)+' n');3.5(' # ');1 B=2.7();g(1 8=0;8<9;8++){d(c)}1 C=2.7();3.5('d / 9: '+((C-B)/9).m(4)+' n.');1 D=2.7();g(1 8=0;8<9;8++){s(c)}1 E=2.7();3.5('Q / 9: '+((E-D)/9).m(4)+' n.');",
    53,
    53,
    '|let|performance|console||log|timers|now|index|10||function|line2|lowerCase|charMap||for|modStr||letterAt|return|lower|toFixed|ms|const|letterUp|split|timeDecorator|originalLowerCase|letterLow|length|if|toLowerCase|start|result|timeLowerCase|timeOriginalLowerCase|t0|t1|m0|m1|charAt|else|getData|line|repeat|200000|require|perf_hooks|apply|this|arguments|original'.split(
      '|',
    ),
    0,
    {},
  ),
);
