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

// function multiply() {
//   let element = 1;
//   if (arguments.length != 0) {
//     for (let index = 0; index < arguments.length; index++) {
//       element = element * arguments[index];
//     }
//     for (const iterator of arguments) {
//       element = element * iterator;
//     }
//     return element;
//   } else {
//     return (element = 0);
//   }
// }

// // let res = multiply(1, 2, 3);
// let res = multiply(2, 3, 10);
// console.log(res);

// // TODO: Practical task 2: Create function whuch take string and return reverse string.

// function reverseString(str) {
//   this.str = str;
//   return `${this.str.split('').reverse().join('')}`;
// }

// function reverseString(str) {
//   this.str = String(str);
//   return `${this.str.split('').reverse().join('')}`;
// }

// console.log(reverseString('Test')); // eseT
// console.log(reverseString('')); // ''
// console.log(reverseString(null)); // llun
// console.log(reverseString(undefined)); // denifednu
// console.log(reverseString()); // denifednu

// let data = 'I want \
// to be a professional \
// front-end \
// web developer!';
// let res = reverseString(data);
// console.log(res);

// let data = 'I want to be a professional front-end web developer!';
// let res = reverseString(data);
// console.log(res);

// TODO: Practical task 3: Functions
// Create function which take arguments string, number, null, undefined and
// return trim char to unicode
// Example: getCodeStringFromText('hello') // '104 101 108 108 111'
// Method to use: charCodeAt() and trim()

// function getCodeStringFromText(data) {
//   this.str = String(data).trim().replace(/\s+/g, ''); // Delete space

//   this.str = (function (cmd) {
//     let res = '';
//     for (const iterator of cmd) {
//       res = res.concat(iterator.charCodeAt(), ' ');
//     }
//     return res;
//   })(this.str);
//   console.log(this.str);
// }

// console.log(getCodeStringFromText(' T e x   t '));
// getCodeStringFromText(' T e x   t ');
// getCodeStringFromText(' h e l l o ');
// getCodeStringFromText(42);
// getCodeStringFromText(null);
// getCodeStringFromText(undefined);
// getCodeStringFromText();

// TODO: Practical task 4: Create function guess the number.
// The program accepts a number from 1 to 10
// Check value === number, and range 0-10
// return new Error('Please provide number in range 0-10.');
// return new Error('Please provide a valid number.');
// 'You win!'
// 'You are lose, your number is X, the random number is Y

// Generate number
// for (let index = 0; index < 30; index++) {
//   guessNumber(
//     (function (min = 0, max = 11) {
//       return Math.floor(Math.random() * (max - min)) + min;
//     })(),
//   );
// }
// function () {}

function winnerCheck(check) {
  let count = ''
  let robot = generateNumber();
  check == robot
    ? console.log('You winner!')
    : console.log(
        `You are lose, your number is ${check}, the random number is ${robot}`,
      );
}

function guessNumber(num) {
  // if (typeof num === typeof Number()) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  // console.log(num);
  switch (typeof num) {
    case typeof Number():
      0 <= num && num <= 10
        ? winnerCheck(num)
        : console.log('Please provide number in range 0-10.');
      break;
    case typeof String():
      console.log('Please provide number, not string.');
      break;
    default:
      console.log('Please provide a valid number.');
      break;
  }
}

// Generate random Number in range 0-10
function generateNumber(min = 0, max = 11) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (let index = 0; index < 10; index++) {
  // guessNumber(generateNumber);
  // guessNumber(generateNumber());
  guessNumber(generateNumber());
}

// let generateNumber = (function (min = 0, max = 11) {
//   for (var a = [0, 1, 2, 3, 4], i = a.length; i--; ) {
//     var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
//     return random;
//   }
// })();
