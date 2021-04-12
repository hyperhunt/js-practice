// var text = 'asdu42da u yuk8jy uzx3c7zc';
// var lines = text.split(/u{1,1}/);
// console.log(lines);

var num = 1234567
console.log([...num+''].map(n=>+n))
console.log([...num+''].map(n=>+n).reverse().join(''))
console.log(typeof([...num+''][0]));
console.log([...num+''][0]);

// const insert = (arr, index, ...newItems) => [
//     ...arr.slice(0, index),
//     ...newItems,
//     ...arr.slice(index)
//   ]

// var digit2 = insert(digits.splice(0, digits.length - (digits.length / 2)), 1, 10, 20)

// Array.prototype.insert = function(index) {
//     this.splice.apply(this, [index, 0].concat(
//         Array.prototype.slice.call(arguments, 1)));
//     return this;
// };

// console.log(digit2);
// if(digits.length % 2 == 0) {} else { digit2 = digits.drop }

var arr = ["apple", "orange", "raspberry"],
    arr2 = [1, 2, 4];

function insert(arr, item, index) {
    arr = arr.reduce(function(s, a, i) {
      i == index ? s.push(item, a) : s.push(a);
      return s;
    }, []);   
    console.log(arr);
}

insert(arr, "banana", 1);
insert(arr2, 7, 2);

// 1234567
// 1726354

// var i = 1
// while (num > 0) {
//     if(num % 2 != 0) {
//         digits.splice(i, 1, (num % 10));
//     }
//     i += 1
//     num = parseInt(num / 10);
//     // console.log(num+"\n");
// }
// // digits.reverse();



