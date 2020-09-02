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