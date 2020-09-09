// Strings

// const firstName = 'Tony'
// const lastName = 'Hunt'
// const age = 42
// const str = 'Hello, World!'

// let value = str;
// value = firstName + ' ' + lastName;
// value += ' ' + age;

// console.log(value);

// value = firstName.length;
// console.log('firstName: ' + value);

// value = str[str.length - 1];
// console.log(value);

// // Method for Strings

// value = firstName.toLowerCase();
// value = firstName.toLocaleUpperCase();
// value = firstName.concat(' ', 'tada!');
// value = firstName.indexOf('o');
// value = firstName.indexOf('a'); // -1, not found

// value = str.includes('Hello')

// value = str.slice(0, 5); // Hello
// value = str.replace('World', 'Tony')

// console.log(value);

// methods = [
//       'quote', 'substring', 'toLowerCase', 'toUpperCase', 'charAt',
//       'charCodeAt', 'indexOf', 'lastIndexOf', 'startsWith', 'endsWith',
//       'trim', 'trimLeft', 'trimRight', 'toLocaleLowerCase',
//       'toLocaleUpperCase', 'localeCompare', 'match', 'search',
//       'replace', 'split', 'substr', 'concat', 'slice'
// ],

// let a = ['дуб', 'осина', 'ёлка', 'берёза'].sort(function (a, b) {
//   return a.localeCompare(b);
// }); // [ "берёза", "дуб", "ёлка", "осина" ]
// console.log(a);

// let str = 'Привет как дела? #Ёжик дом';
// let tmp = str.slice(str.indexOf('#') + 1);
// let end = tmp.indexOf(' ');
// tmp = tmp.substring(0, end);
// console.log(tmp); // Ежик

// let pattern = /#/;
// let tmp = str.match(pattern);
// let result = tmp.index;
// console.log(result);

// console.log(str.startsWith('#'));
// console.log(str.split(''));

// console.log(str.indexOf('#'));
// var from = str.search('#Ёжик');
// var end = from.indexOf(' ');
// $newstr = str.substring(from, end);
// console.log($newstr);

// letter Ё -> /^[а-я\u0451]*$/ig
// /#[А-яA-z]+/gi;

// performance from the perf_hooks module (available in node 8.5+).
// const { performance } = require('perf_hooks');
// var t0 = performance.now();

// let str = 'Привет как дела? #Ёжик дом';
// str = str.match(/#[A-zА-я\u0451]+/gi);
// console.log(str);

// var t1 = performance.now();
// console.log('Took', (t1 - t0).toFixed(4), 'milliseconds');

// const { performance } = require('perf_hooks');
// var t0 = performance.now();

// let str = 'Привет как дела? #Ёжик дом';
// var CheckName = str.split(' ').filter(([firstLetter]) => firstLetter === '#');
// console.log(CheckName);

// var t1 = performance.now();
// console.log('Took', (t1 - t0).toFixed(4), 'milliseconds');

// /#[А-яA-z]+/gi;
// str = str.match(/#(.+)\s/gi);
// console.log(str);

// "Привет как дела? #Ёжик дом #привет #мамонт".match(/#(.+?)\s/g).map(str => str.replace('#', "").trim() ) // ["Ёжик", "привет"]

// let str = 'Привет как дела? #Ёжик дом';
// str = str.match(/#(.+)\s/);
// console.log(str);

// let a = '#123 ##test 123 123#123'
//   .split(' ')
//   .filter(([firstLetter]) => firstLetter === '#');
// console.log(a);

// Style ES5
// const firstName = 'Tony'
// const lastName = 'Hunt'
// const age = 42

// let str;
// str = 'Hello my name is ' + firstName + ' ' + lastName;
// console.log(str);

// str = '<ul>'
//     + '<li>First name: ' + firstName + '</li>'
//     + '</ul>'
// // console.log(str);

// // Style ES6

// str = `
// <ul>
//     <li>First name: ${firstName}</li>
//     <li>Last name: ${lastName}</li>
//     <li>Age: ${age}</li>
//     <li>Math random: ${Math.random()}</li>
// </ul>
// `;

// function randMy() {
//     return str;
// };

// setInterval(() => {
//     document.body.innerHTML = randMy();
// });
