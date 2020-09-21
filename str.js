let data = 'прпвев ярикол'; // 0
// let data = 'ПрИвЕт пРикОлл'.toLowerCase(); // 0
// let data = 'ПрИвЕт пРикОл'.toLowerCase(); // 1
// let data = 'абаб ааах'; // 0
// let data = 'ааббдд ддббаа'; // 1
console.log('Input data: ' + data);

// Получение подстрок.
let subStrOne = data.slice(0, data.indexOf(' '));
// console.log('#' + subStrOne + '#');
let subStrTwo = data.slice(data.indexOf(' ') + 1);
// console.log('#' + subStrTwo + '#');

// Функция выражение, в которое производится сравнение срок по длинне, производится замена литералов по паттерну.
let replaceLetter = function (subStrOne, subStrTwo) {
  let convertStatus = ''; // Статус конвертации, если длинна не равна - 0, если конвертировать не возможно - 0, иначе 1.
  let pattern = {}; // Объект для генерации ключей замены литералов

  // Проверка подстрок на равенство по количеству элементов
  subStrOne.length == subStrTwo.length
    ? (convertStatus = 1)
    : (convertStatus = 0);

  // Если длинна подстрок равна, тогда выполняем замену литералов
  if (convertStatus) {
    for (let i = 0; i < subStrOne.length; i++) {
      // console.log(`## ${i} property: ${!pattern.hasOwnProperty(subStrOne[i])}`); // Проверка объекта на наличие ключа
      if (!pattern.hasOwnProperty(subStrOne[i])) {
        // Проверка на наличие паттерна
        if (subStrOne[i] != subStrTwo[i]) {
          // Если символ строки 1 не равен символу строки 2
          // Если находим литерал строки 2 в строке 1, тогда создаем дополнительную пару в Паттерне для сохранения и змены во всей строке
          if (!subStrOne.search(subStrTwo[i]) != -1) {
            pattern[subStrTwo[i]] = '#'; //  'д' - '#'
            pattern[subStrOne[i]] = subStrTwo[i]; // 'а' - 'д'
            pattern['#'] = subStrOne[i]; // '#' - 'а'

            // Замена найденного литерала во всей строке 1
            subStrOne = subStrOne
              .split(subStrTwo[i])
              .join(pattern[subStrTwo[i]]);

            // Замена первой парю ключей
            subStrOne = subStrOne.replace(subStrOne[i], pattern[subStrOne[i]]);
          } else {
            // console.log(`## ${(subStrOne[i], pattern['#'])}`);
            // Если в строке 1 не было найдено символов из строки 2, осуществляем просто замену литералов
            subStrOne = subStrOne.replace(subStrOne[i], pattern['#']);
          }
        }
      } else {
        // Замена ключей в случаи, когда литерал строки 1 и строки 2 равны
        if (subStrOne[i] == subStrTwo[i]) {
          subStrOne = subStrOne.replace(subStrOne[i], subStrTwo[i]);
        } else {
          subStrOne = subStrOne.replace(subStrOne[i], pattern[subStrOne[i]]);
        }
      }
    }
    console.log(pattern);
    convertStatus = subStrOne == subStrTwo ? 1 : 0;
    // console.log(
    //   `convertStatus: ${subStrOne} ? ${subStrTwo} == ${convertStatus}`,
    // );
  }

  return convertStatus;
};

console.log(`Result: ${replaceLetter(subStrOne, subStrTwo)}`);
