// Arrays methods

// const numArr = [1, 32, 3, 4, 5];
// let value;
// value = numArr.length;

// value = Array.isArray(numArr); // true
// value = numArr[2];
// value = numArr.indexOf(32); // Index 1

// // push - add in end, pop - delete end element
// value = numArr.push(42);
// value = numArr.pop();

// // unshift - add in start, shift - delet start element
// value = numArr.unshift(13);
// value = numArr.shift();

// // splice - add and/or delete range elements
// value = numArr.splice(0, 2); // delete 2 elements
// value = numArr.splice(1, 2, 'one', 'two');

// value = numArr.reverse(); // reverse elements in array

// concat - concatenates the string/array arguments
// value = numArr.concat(numArr);

// join - creates and returns a new string by concatenating all of the elements in an array
// join - array arguments in string
// value = numArr.join('#');

// split - divides a String into an ordered list of substrings
// split - return the array
// value = numArr.toString().split('');
// console.log('numArr: ' + numArr + ', typeof: ' + typeof numArr);
// console.log('value: ' + value + ', typeof: ' + typeof value);

// value = 'Hello'.split('')[0]; // return element of index 0 - 'H'
// console.log(value);

// TODO: Practical task 5
// Create func return array from 1 to n
// gerArray(10); // [1,2,3,4,5,6,7,8,9,10]

// const numArr = [];

// function getArray(num) {
//   for (let index = 1; index <= num; index++) {
//     numArr.push(index);
//   }
//   console.log(numArr);
// }

// getArray(5);

// TODO: Practical task 6
// Create the func takes an array and terun new array wthis duplicated arguments

// function doubleArray(arr) {
//   arr = arr.concat(arr);
//   console.log(arr);
// }

// doubleArray([1, 2, 3]);

// TODO: Practical task 7
// Replace first element in witch takes array

// function chancgeCollection() {
//   for (let iterator = 0; iterator < arguments.length; iterator++) {
//     arguments[iterator].shift();
//   }
//   console.log(arguments);
// }

// chancgeCollection([1, 2, 3], ['a', 'b', 'c']);
