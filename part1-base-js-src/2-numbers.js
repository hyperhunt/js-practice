// Numbers

const num1 = 10;
const num2 = 20;
let value;

value = num1 + num2;
value = value + 100;
value += 100;
// value = 5 % 2;
value++;

value = 0.6 + 0.7;
value = +value.toFixed(2);

console.log(value);

console.clear();

// Math
value = Math.random();
value = Math.round(2.6)
value = Math.ceil(2.1)
value = Math.floor(2.8)
value = Math.min(42, 3, 44, 8)

value = Math.floor(Math.random() * 100 + 1);
console.log(value);

const arr = ['black', 'red', 'blue', 'white', 'orange']
console.log('length: ' + arr.length);
value = Math.floor(Math.random() * arr.length);
console.log(arr[value]);


console.clear();

// Task

//Получить число pi из Math и округлить его до 2-х знаков после точки
console.log(Math.PI.toFixed(2));

// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));

// Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
let cmd = Math.random().toFixed(2);
console.log(cmd);

let cmd2 = Math.floor(Math.random() * 10 + 1);
console.log(cmd2);


// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

let cmdFloat = (0.6 * 10 + 0.7 * 10) / 10;
console.log(cmdFloat);
let cmdFloat2 = +(0.6 + 0.7).toFixed(1);
console.log(cmdFloat2);

// Получить число из строки ‘100$’
let stringToNumber = parseInt('100$');
console.log(stringToNumber);