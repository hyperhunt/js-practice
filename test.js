// eval(
//   (function (p, a, c, k, e, r) {
//     e = function (c) {
//       return (
//         (c < a ? '' : e(parseInt(c / a))) +
//         ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
//       );
//     };
//     if (!''.replace(/^/, String)) {
//       while (c--) r[e(c)] = k[c] || e(c);
//       k = [
//         function (e) {
//           return r[e];
//         },
//       ];
//       e = function () {
//         return '\\w+';
//       };
//       c = 1;
//     }
//     while (c--)
//       if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
//     return p;
//   })(
//     "b d(a){o p='АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.q('');o t='абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.q('');1 e={};g(1 i=0;i<p.u;i++){e[p[i]]=t[i]}1 h='';g(1 i=0;i<a.u;i++){1 j=a.F(i);v(e[j]){h+=e[j]}G{h+=j}}k h}b H(a){3.5(a)}1 I='ПрИвЕт пРикОл'.w().q(' ');1 c='ПрИвЕт, КаК у ТЕБЯ деЛА?'.J(K);o{2}=L('M');1 6={};b r(f,a){k b(){1 x=2.7();1 y=f.N(O,P);v(!6[a])6[a]=0;6[a]+=2.7()-x;k y}}b s(a){a=a.w();k a}1 z=r(d,'l');1 A=r(s,'l');z(c);3.5(6.l.m(4)+' n');A(c);3.5(6.l.m(4)+' n');3.5(' # ');1 B=2.7();g(1 8=0;8<9;8++){d(c)}1 C=2.7();3.5('d / 9: '+((C-B)/9).m(4)+' n.');1 D=2.7();g(1 8=0;8<9;8++){s(c)}1 E=2.7();3.5('Q / 9: '+((E-D)/9).m(4)+' n.');",
//     53,
//     53,
//     '|let|performance|console||log|timers|now|index|10||function|line2|lowerCase|charMap||for|modStr||letterAt|return|lower|toFixed|ms|const|letterUp|split|timeDecorator|originalLowerCase|letterLow|length|if|toLowerCase|start|result|timeLowerCase|timeOriginalLowerCase|t0|t1|m0|m1|charAt|else|getData|line|repeat|200000|require|perf_hooks|apply|this|arguments|original'.split(
//       '|',
//     ),
//     0,
//     {},
//   ),
// );

// const nextId = ids =>
//   ids.sort((prev, next) => prev - next).reduce((a, b) => a + (a === b), 0);

// let r = nextId([0, 1, 3]);
// console.log(r);

// arr = arr.filter(function (item, pos) {
//   return arr.indexOf(item) == pos;
// });
// let data = 'ПриветПриветПриветПриветПривет'; // ?
// let subStrTwo = 'прикол';

// function mergeWords(data, subStrTwo) {
//   let strCut = {};

//   for (let i = 0; i < data.length; i += subStrTwo.length) {
//     strCut[i] = data.slice(i, i + subStrTwo.length);
//   }

//   let merge = '';
//   for (const key in strCut) {
//     if (strCut.hasOwnProperty(key)) {
//       if (merge != strCut[key]) {
//         merge += strCut[key];
//       }
//     }
//   }
//   return merge;
// }

// let r = mergeWords(data, subStrTwo)
// console.log(r);

// console.log('#');

// let user = {
//   alex: {
//     dayx: 22,
//   },
// };
// function happyBirthday() {
//   return {
//     print: function () {
//       console.log('Happy Birthday, Alex!');
//     },
//     next: function () {
//       console.log('Comming soon...');
//     },
//   };
// }

// user.alex.dayx == 22 ? happyBirthday().print() : happyBirthday().next();

// function outer() {
//   var x = 0;
//   function inner() {
//     x++;
//     console.log(x);
//   }
//   return inner;
// }

// let func = outer();

// func();
// func();
// func();

// let array = [1, 2, 3, 4, 5];

// console.log(
//   '[After .reduce()]: ',
//   array.reduce((acc, item) => acc * item),
// );

// console.log(array);

let minValue = [
  2,
  -24,
  13,
  -11,
  16,
  -12,
  -16,
  24,
  13,
  -38,
  19,
  -16,
  19,
  3,
  2,
  32,
  0,
  -10,
  -19,
  -27,
];

let maxValue = [
  34,
  26,
  21,
  -8,
  10,
  39,
  -14,
  20,
  20,
  27,
  1,
  1,
  27,
  -15,
  14,
  -8,
  20,
  17,
  5,
  -36,
];

let avgValue = [
  -39,
  30,
  -32,
  -9,
  3,
  -2,
  -11,
  -4,
  -32,
  39,
  0,
  -14,
  7,
  20,
  -12,
  22,
  -23,
  19,
  0,
  2,
];

function min(array) {
  return !array.length ? 0 : Math.min.apply(this, array);
}

function max(array) {
  return !array.length
    ? 0
    : array.reduce((acc, cur) => {
        return acc > cur ? acc : cur;
      });
}

function avg(array) {
  // return !array ? 0 : array.reduce((a, b) => a + b) / array.length;
  // return !array ? 0 : eval(array.join('+')) / array.length; // eval is evil
  return !array.length
    ? 0
    : (function () {
        let res = 0;
        for (const i of array) {
          res += i;
        }
        return res;
      })(array) / array.length;
}

let r = '';

console.log('2.5\n-1.8\n');
r = avg([]);
console.log(r);
r = avg([1, 2, 3, 4]);
console.log(r);
r = avg(avgValue);
console.log(r);
