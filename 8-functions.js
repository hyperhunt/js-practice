// Defining functions

// Function declarations

// function sayHello() {
//   console.log('Hello World!');
// }

// sayHello();

// function watchValue(firstName = 'Default', lastName = 'Default') {
//   return `Hello ${firstName} ${lastName}`;
// }

// let data = watchValue('Tony', 'Hunt');
// console.log(data);

// let empty = watchValue();
// console.log(empty);

// Hosting variable in function

// Bad example
// let x = 10;

// function foo() {
//   x = 20;
//   console.log(x);
// }

// foo();
// console.log(x);

// let x = 10;

// function foo() {
//   let x = 20;
//   console.log(x);
//   return x;
// }

// foo();
// console.log(x);

// const user = {
//   name: 'Tony',
//   age: 42,
// };

// function getObj(obj) {
//   console.log(obj);
//   obj.age = 30;
// }

// getObj(user);
// console.log(user);

// Function expressions

// const fn = function (x) {
//     return x * x;
// }

// console.log(fn(2, 2));

// (function (msg) {
//   console.log(msg);
// })('Hello');

// Arguments

// function foo(x) {
//   console.log(x);
//   console.log(arguments);
//   console.log(arguments[1]);
//   console.log(arguments[2]);

//   for (let index = 0; index < arguments.length; index++) {
//     console.log(arguments[index]);
//   }
// }

// foo(11, 'some string', [1, 2, 3]);

// TODO: Practical task 1: create function 'multiply' which will accept arguments
// and return their multiply
// multiply(1,2,3) => result 6 (1*2*3)
// If there are no arguments, then return zero

// function multiply() {
//   let element = 1;
//   if (arguments.length != 0) {
//     for (let index = 0; index < arguments.length; index++) {
//       element = element * arguments[index];
//     }
//     return element;
//   } else {
//     return (element = 0);
//   }
// }

// // let res = multiply(1, 2, 3);
// let res = multiply(2, 3, 10, 4, 5, 6, 8, 23, 4);
// console.log(res);

// // TODO: Practical task 2: Create function whuch take string and return reverse string.

// function reverseString(str) {
//   this.str = str;
//   return `${this.str.split('').reverse().join('')}`;
// }

// let data = 'I want \
// to be a professional \
// front-end \
// web developer!';
// let res = reverseString(data);
// console.log(res);

// let data = 'I want to be a professional front-end web developer!';
// let res = reverseString(data);
// console.log(res);
