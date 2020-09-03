// IF statement

// >, <, >=, <=, ==, ===, !=, !==

let value;

value = 1 > 2; // false
value = 2 <= 2; // true
value = 1 == 1; // true
value = 1 == '1'; // true
value = 1 === '1'; //false
value = 1 != '1'; //false
value = 1 !== '1'; //true
value = 's' === 'S'; // false
value = 'a' > 'ab'; // false

value = 'a'.charCodeAt(); // 97 code of 'a'
value = 'A'.charCodeAt(); // 65 cod of 'A'

// if (statement) {
//     // actions
// } else {
//     // else actions
// }

if (value === 65) {
    console.log('Yes');
} else {
    console.log('No');
}

console.log(value);


//  ||, &&, !
value = null;
console.log(!value); // true, becouse null == 0 == false

value = [];

// if (value.length) {
//     console.log(value);
// } else {
//     console.log('Array is empty.');
// }

if (Array.isArray(value)) {
    console.log(value);
} else {
    console.log('Array is empty.');
}


let user = {
    name: 'Tony',
}

if (user.hasOwnProperty('name')) {
    console.log(user.name);
} else {
    console.log('Else');
}

value = 1 || 0 || null;
console.log(value);

let age = 17;
if (age < 16 || age > 65) {
    console.log(age);
} else {
    console.log('Not 16 - 65 age.');
}

let serverNick = 'Tony';
let nickName = serverNick || 'Empty nick';
console.log(nickName);

value = 1 && 0 && 2;
console.log(value);

value = 10;
if (value < 10) {
    console.log('value < 10', value);
} else if (value >= 10) {
    console.log('value >= 10', value);
}

// statement ? if true : if  false;
// statement ? if true : statement ? if true : if false;

let color = 'red1';

switch (color) {
    case 'red': console.log('case red'); break;
    case 'green': console.log('case green'); break;
    default: console.log('case empty');
}

