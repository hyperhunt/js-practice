// Loops

// while, do while, for, for of, for in

// while

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let m = 10;
// while (i--) {
//   console.log(i);
// }

// do {
//     console.log('Action');
// } while (i > 0)

// for

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let str = 'hello';
// let cmd = '';
// for (let i = 0; i < str.length; i++) {
//   cmd += str[i] + ': ';
// }

// console.log(cmd);

// let colors = ['red', 'green', 'blue'];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// const users = [
//   {
//     name: 'Tony',
//     age: 42,
//   },
//   {
//     name: 'Hunt',
//     age: 18,
//   },
//   {
//     name: 'Hyper',
//     age: 13,
//   },
// ];

// let usersObj = {};

// for (let index = 0; index < users.length; index++) {
//   const element = users[index].name + ' ' + users[index].age;
//   console.log(element);
//   usersObj[users[index].name] = users[index];
// }

// console.log(usersObj);
// console.log(usersObj['Tony']);

// for in

// const users = {
//   name: 'Tony',
//   age: 18,
// };

// for (const key in users) {
//   if (users.hasOwnProperty(key)) {
//     const element = users[key];
//     console.log(element);
//   }
// }

// for in example for Object

// const users = [
//   {
//     name: 'Tony',
//     age: 42,
//   },
//   {
//     name: 'Hunt',
//     age: 18,
//   },
//   {
//     name: 'Hyper',
//     age: 13,
//   },
// ];

// let usersObj = {};

// for (let index = 0; index < users.length; index++) {
//   const element = users[index].name + ' ' + users[index].age;
//   console.log(element);
//   usersObj[users[index].name] = users[index];
// }

// for (const key in usersObj) {
//   if (usersObj.hasOwnProperty(key)) {
//     const element = usersObj[key];
//     // console.log(`${key} + ' ' + ${element}`);
//     console.log(key);
//     console.log(usersObj[key]);
//   }
// }

// for of syntax in ES6 for massives

const users = [
  {
    name: 'Tony',
    age: 42,
  },
  {
    name: 'Hunt',
    age: 18,
  },
  {
    name: 'Hyper',
    age: 13,
  },
];

for (const iterator of users) {
  console.log(iterator);
}

words = users;
var uniqueWords = new Set(words);
console.log(uniqueWords[1]);

console.log('a');
for (let key of users.keys(users)) {
  console.log(users[key]);
}
