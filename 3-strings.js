// Strings

// const firstName = 'Tony'
// const lastName = 'Hunt'
// const age = 42
// const str = 'Hello, World!'

// let value = str;
// value = firstName + ' ' + lastName;
// value += ' ' + age;

// console.log(value);

// value = firstName.length;
// console.log('firstName: ' + value);

// value = str[str.length - 1];
// console.log(value);


// // Method for Strings

// value = firstName.toLowerCase();
// value = firstName.toLocaleUpperCase();
// value = firstName.concat(' ', 'tada!');
// value = firstName.indexOf('o');
// value = firstName.indexOf('a'); // -1, not found

// value = str.includes('Hello')

// value = str.slice(0, 5); // Hello
// value = str.replace('World', 'Tony')

// console.log(value);


// Style ES5
const firstName = 'Tony'
const lastName = 'Hunt'
const age = 42

let str;
str = 'Hello my name is ' + firstName + ' ' + lastName;
console.log(str);


str = '<ul>'
    + '<li>First name: ' + firstName + '</li>'
    + '</ul>'
// console.log(str);

// Style ES6

str = `
<ul>
    <li>First name: ${firstName}</li>
    <li>Last name: ${lastName}</li>
    <li>Age: ${age}</li>
    <li>Math random: ${Math.random()}</li>
</ul>
`;

function randMy() {
    return str;
};

setInterval(() => {
    document.body.innerHTML = randMy();
});