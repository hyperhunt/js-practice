// All questions

// Какой тип у {}?
// Какой тип данных у null?
// Какие имена из перечисленных допустимые для переменных?
// Что будет в консоли ?let user = {"name":"Smith", age: 30}; console.log(user['name'] == user.name);
// Что будет в консоли?console.log(+'-' + 2)
// Что будет в консоли?let str = '123'; let result = +str; console.log(typeof(result), result);
// Как узнать длину строки?
// Какое значение имеет объявленная переменная (например, var a;)?
// Что будет в консоли?let foo = { str: 'test' }; console.log(foo && foo.str);
// Выберите корректное объявление переменной?
// Что будет в консоли?let arr = [] arr[500] = 1 console.log(arr.length);
// Как можно преобразовать строку в целое число?
// Что будет в консоли?var x = 1; if (x) { var x = 2; console.log(x); } console.log(x);
// Как полностью остановить работу цикла?
// Какие есть циклы в JavaScript из перечисленных?
// Что будет в консоли?console.log(typeof null)
// Какой тип данных у NaN?
// Что будет в консоли?let y; if (y) { let y = 2; console.log(y); } else { let y = 10; console.log(y); } console.log(y);
// Что будет в консоли?const z = 1; z = 20; z++ console.log(z);
// Что будет в консоли?const obj = { brand: 'EasyCode' }; obj.country = 'Ukraine'; console.log(obj)

//
// Practice in test
//

// Какой тип у {}?
// console.log(typeof {}); // Object

// Какой тип данных у null?
// console.log(typeof null); // Object

// Какие имена из перечисленных допустимые для переменных?
// camelCase, username, user_name
// let user_name = 'sd';
// console.log(user_name);

// Что будет в консоли ?
// let user = { "name": "Smith", age: 30 }; console.log(user['name'] == user.name);
// True

// Что будет в консоли?
// console.log(+'-' + 2);
// NaN

// Что будет в консоли?
// let str = '123';
// let result = +str;
// console.log(typeof result, result);
// number 123

// Как узнать длину строки?
// length
// let str = 'asd';
// console.log(str.length);

// Какое значение имеет объявленная переменная (например, var a;)?
// undefined
// var a;
// console.log(a);

// Что будет в консоли?
// let foo = { str: 'test' };
// console.log(foo && foo.str);
// console.log(1 && 'не важно');
// 1 && 'test' -> test

// Выберите корректное объявление переменной?

// Что будет в консоли ?
// let arr = [];
// arr[500] = 1;
// console.log(arr);
// console.log(arr.length);
// [ <500 empty items>, 1 ]
// 501

// Как можно преобразовать строку в целое число?
// let num = '42';
// +num === 42 ? console.log('Number: ' + num) : console.log(typeof num);
// parseInt(num, 10) === 42 ? console.log('Number: ' + num) : console.log(typeof num);
// Number(num) === 42 ? console.log('Number: ' + num) : console.log(typeof num);
// Math.round(num) === 42 ? console.log('Number: ' + num) : console.log(typeof num);
// parseFloat(num) === 42 ? console.log('Number: ' + num) : console.log(typeof num);
// let x;
// console.log(typeof x);
// console.log(~~x);
// ~~x = 0;

// Что будет в консоли?
// var x = 1;
// if (x) {
//   var x = 2;
//   console.log(x);
// }
// console.log(x);
// // 2 and 2

// let x = 1;
// if (x) {
//   let x = 2;
//   console.log(x);
// }
// console.log(x);

// Как полностью остановить работу цикла?
// break or if + false value

// let i = 0;
// while (i <= 10) {
//   i === 7 ? break : console.log('s');
//   i++;
// }

// Какие есть циклы в JavaScript из перечисленных?1
// while, do while, for, for in, for of

// Что будет в консоли?
// console.log(typeof null); // Object
// console.log(typeof function () {}); // Function

// Какой тип данных у NaN? // Not a Number -> of Number

// Что будет в консоли?
// let y;
// if (y) {
//   let y = 2;
//   console.log(y);
// } else {
//   let y = 10;
//   console.log(y);
// }
// console.log(y); // 10 and undefined

// Что будет в консоли?
// const z = 1;
// z = z + 20;
// z++;
// console.log(z); // Error assignment to constant variable.

// Что будет в консоли?
// const obj = { brand: 'EasyCode' };
// obj.country = 'Ukraine';
// console.log(obj); // Add new method. {  brand: 'EasyCode', country = 'Ukraine' }
