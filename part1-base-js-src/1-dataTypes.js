// ## REVISING STRINGS

// let example = 'this example exists'
// example = example.replace('exists', 'is awesome')
// console.log(example);

// let example = 'pizza is alright';
// example = example.replace('alright', 'wonderful');
// console.log(example);

// ## NUMBERS

// Однострочный комментарий

/*
Многострочный комментарий
*/

/**
 * JSDoc style comment
 */

 /**
  * Primitives data types
  *
  * Number: 2020, 1.5, Nan, Infinity
  * String: 'Hello', "Hello", `Hello`
  * Boolean: true, false
  * Undefined: undefined
  * Symbol()
  */

console.log(2020, 1.5);
console.log(2020 * 'string');
console.log(1 / 0);

console.log('one', "two", `three`);
console.log(true, false);

console.log(null);
console.log(undefined);

console.log(Symbol);

  /**
   * Objects data types (Reference type)
   *
   * Object: { name: 'Tony', age: '42' }
   * Array: [1,2,3]
   * Function: function foo() {}
   * Date: new Date()
   */

console.log({ name: 'Tony', age: 42 });
console.table({ name: 'Tony', web: 'HyperHunt.dev' });

console.log([1,2,3,4]);

// Variables
// var 2015
// EACMScript 6: let, cost

console.clear();

var name = 'Tony'
console.log(name);

name = 'Hunt'
console.log(name);

var age;
console.log(age);
age = 42;
console.log(age);

var $name = '$name';
console.log($name);
var _name = '_name'
console.log(_name);

// Style Variables
var userAge = 42; // camelCase
var user_age = 42; // mod
var UserAge = 42; // style for Class
var userage = 42; // bad variant

console.log(car); // undefined: var car - hosting
var car = 'bmw'
var car = 'audi'
console.log(car);


console.clear();
// let and const

let nickName = 'TonyHunt'
console.log(nickName);

const firstName = 'Tony'
console.log(firstName);
// firstName = 'Hunt' - Uncaught TypeError: invalid assignment to const 'firstName'
// const a; Uncaught SyntaxError: missing = in const declaration

const user = {
    name: 'Tony',
    age: 42
}
console.log(user);
user.name = 'Hunt'
console.log(user);

console.clear();

let value;

// Number to String
value = String(10);
value = String(10+40);
value = (40).toString();

// Boolean to String
value = String(true)
value = String(false)

// Array to String
value = String([1,2,3])

// Object to String
value = String({ name: 'Tony', age: 42 })

value = 30 + ''
value = 30 - '1'
value = 30 - 'number'

value = true + 10; // true 1, false 0

// String to Number
value = Number('23')
value = Number(true) // 1
value = Number(null) // 0
value = Number([1,2,3]) // Nan

value = parseInt('200char') // 200
value = parseFloat('20.20float') // 20.2

// Boolean
value = Boolean('') // false
value = Boolean(' ') // true
value = Boolean('string') // true
value = Boolean('0') // false
value = Boolean('42') // true
value = Boolean(undefined) // false
value = Boolean(null) // false
value = Boolean({}) // true
value = Boolean([]) // true

console.log(value);
console.log(typeof value);