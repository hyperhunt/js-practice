// Callbacks

// function foo() {
//   console.log('foo');
// }

// foo();

// foo.field = 'Tony';
// console.log(foo.field);

/// Func first class
const arr = ['Tony', 'Hyper', 'Hunt', 'Dev'];
// => [4, 5, 4, 3]

const newArr = [];
function mapArray(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

function nameLength(el) {
  return el.length;
}

console.log(arr);

mapArray(arr, nameLength);
console.log(newArr);
