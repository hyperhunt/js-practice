// Callbacks
// https://medium.com/nuances-of-programming/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5-%D0%BE-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F%D1%85-%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE-%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0-2d94ace3e96c
// https://medium.com/nuances-of-programming/%D0%B8%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE-%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0-%D0%B2-javascript-c23daf53a5c0

// function foo() {
//   console.log('foo');
// }

// foo();

// foo.field = 'Tony';
// console.log(foo.field);

/// Func first class
// const arr = ['Tony', 'Hyper', 'Hunt', 'Dev'];
// // Task => [4, 5, 4, 3], toUpperCase()

// function mapArray(arr, fn) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(fn(arr[i]));
//   }
//   return newArr;
// }

// function nameLength(el) {
//   return el.length;
// }

// function nameToUpperCase(el) {
//   return el.toUpperCase();
// }

// let res = mapArray(arr, nameLength);
// let res2 = mapArray(arr, nameToUpperCase);
// console.log(res);
// console.log(res2);

// function greeting(firstName) {
//   return function (lastName) {
//     return `Hello, ${firstName} ${lastName}`;
//   };
// }

// const hello = greeting('Tony')('Dev');
// console.log(hello);
// // const fullName = hello('Hunt');
// // console.log(fullName);

// function question(job) {
//   const jobDictionary = {
//     developer: 'A u developer?',
//     teacher: 'A u teacher?',
//   };
//   // if (job === 'developer') {
//   //   return function (name) {
//   //     return `${name}, what is JS?`;
//   //   };
//   // } else if (job === 'teacher') {
//   //   return function (name) {
//   //     return `${name}, what a u teaching?`;
//   //   };
//   // }
//   return function (name) {
//     return `${name}, ${jobDictionary[job]}`;
//   };
// }

// const developerQuestion = question('developer');
// console.log(developerQuestion('Tony'));

// const teacherQuestion = question('teacher');
// console.log(teacherQuestion('Tony'));

// let arrFunc = [];
// arrFunc.push(function doSomething() {
//   console.log('doSomething');
// });
// console.log(arrFunc[0]);
// arrFunc[0][];

// let numbers = [1, 2, 3, 4, 5, 6];

// function isEven(x) {
//   return x % 2 === 0;
// }

// let evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(even => even % 2 === 0);
// console.log(evenNumbers);

// let words = ['Tony', 'Hyper', 'Hunt', 'Dev'];
// let wordLength = words.filter(x => x.length > 4);
// console.log(wordLength);
// console.log(words);

// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.map(even => even % 2 === 0);
// console.log(evenNumbers);
// console.log(numbers);
// console.log(evenNumbers);

// let numbers = ['Tony', 'Hyper', 'Hunt', 'Dev'];
// // let numbers = [1, 2, 3, 4, 5, 6];

// function sum(total, value) {
//   return total + value;
// }
// let evenNumbers = numbers.reduce(sum, 0);
// console.log(evenNumbers);

// function doWithLoading(fn) {
//   console.log('начало загрузки');
//   let returnValue = fn();
//   console.log('конец загрузки');
//   return returnValue;
// }
// function process() {
//   console.log('загружаем...');
// }
// doWithLoading(process);
// // начало загрузки
// // загружаем...
// // конец загрузки

// TODO:Create func to generade next ID user
// console.log(generateNewID()); //вызов номер: 1
// console.log(generateNewID()); //вызов номер: 2
// console.log(generateNewID()); //вызов номер: 3

// function generateID(prefix) {
//   let index = 0;
//   return function () {
//     index++;
//     return prefix + index;
//   };
// }

// let numGenerate = generateID('Query: ');
// console.log(numGenerate());
// console.log(numGenerate());
// console.log(numGenerate());

// TODO: Create Decorator func once()
// Example funct where save value

// function once(fn) {
//   let returnValue;
//   let canRun = true;
//   return function runOnce() {
//     if (canRun) {
//       returnValue = fn.apply(this, arguments);
//       canRun = false;
//     }
//     return returnValue;
//   };
// }

// var processonce = once('runnce');
// console.log(processonce());
// console.log(processonce());
// console.log(processonce());

// var something = (function () {
//   var executed = false;
//   return function (fx) {
//     if (!executed) {
//       executed = true;
//       return fx.apply('asd');
//       // do something
//     }
//   };
// })();

function once(fn, context) {
  var result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    } else {
      result = 'Once';
      console.log(result);
      return result;
    }
    return result;
  };
}

let res = once(function () {
  console.log('asd');
});

res();
res();
res();

// function log(level, message) {}

// let logInfo = log.bind(null, 'Info');
// let res = logInfo('message');
// console.log(res);

// const drinks = {
//   vodka: "It's bad",
//   beer: 'The right drink',
//   coffee: 'Increases heart rate',
//   milk: "It's good",
//   '': 'Default message',
// };

// for (const iterator in drinks) {
//   console.log(iterator, drinks[iterator]);
// }

// console.log(drinks['vodka']);
// console.log(drinks.beer);

// function drinkSelection(h2o) {
//   switch (typeof h2o) {
//     case typeof String():
//       h2o == 'vodka' || h2o == 'beer'
//         ? console.log('Что-то там вредит... Но от жизни тоже помирают.')
//         : console.log('Напиток для настоящих М.');
//       break;
//     case typeof Number():
//       console.log(`Введите название напитка, а не ${h2o}.`);
//       break;
//     default:
//       console.log('Какой напиток предпочитаешь, бро?');
//       break;
//   }
// }

// drinkSelection('beer');
// drinkSelection('coffee');
// drinkSelection(42);
// drinkSelection();
