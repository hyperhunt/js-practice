// Задача 1. Преобразования слов

// Условие задачи
// Ограничение времени, с 1
// Ограничение памяти, МБ 64
// Общее число попыток отправки 15

// TODO: На вход подается 2 подстроки.
// Нужно определить, можно ли превратить первую во вторую,
// заменяя одни буквы на другие, с учетом следующих правил:

//     - участвуют только буквы русского алфавита а-я;
//     - все буквы в нижнем регистре;
//     - за один шаг нужно преобразовать все вхождения одной
// буквы в другую букву.

// Входные данные

// Входная информация поступает из стандартного ввода в виде одной строки.
// В этой строке содержатся две подстроки, разделенные пробелом.
// Ваше решение должно учитывать вариант, когда на вход поданы строки разной длины.
// Некорректные данные на вход не поступают, дополнительные проверки не требуются.

// Выходные данные

// В качестве ответа в стандартный вывод программа должна выводить 1 (если
// превратить можно) или 0(если превратить нельзя).

// Пример 1

// Входные данные: привет прикол
// Выходные данные: 1
// Преобразования (выводить не нужно):
// в ⇒ к (прикет)
// е ⇒ о (прикот)
// т ⇒ л (прикол)

// Пример 2

// Входные данные: ааббдд ддббаа
// Выходные данные: 1
// Преобразования (выводить не нужно):
// д ⇒ я (ааббяя)
// а ⇒ д (ддббяя)
// я ⇒ а (ддббаа)

// Пример 3

// Входные данные: абаб ааах
// Выходные данные: 0
// Преобразовать нельзя, так как 'б' не сможет оказаться одновременно 'а' и 'х'.

// Примечания по оформлению решения

// При отправке решений на Java необходимо назвать исполняемый класс Main.
// В решении не нужно указывать пакет.

// Для работы со стандартным потоком ввода в JS используйте require('readline'),
// а для работы со стандартным потоком вывода - console.log(String(data)).

// Пример ввода-вывода на JS:

// const readline = require('readline');
// const rl = readline.createInterface(process.stdin, process.stdout);
// rl.on('line', (line) => {
//     // Введенная строка в переменной line, тут можно написать решение
//     console.log(String(result));
//     rl.close();
//     return;
// }).on('close', () => process.exit(0));

// Перед отправкой решения рекомендуем запустить тесты из раздела Тестирование,
// они помогут поймать синтаксические ошибки и ошибки выполнения.

// String methods: match(), search()
// filter(), map()

function lowerCase(dataToLow) {
  const letterUp = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');
  const letterLow = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');

  let charMap = {};
  for (let i = 0; i < letterUp.length; i++) {
    charMap[letterUp[i]] = letterLow[i];
  }

  let modStr = '';
  for (let i = 0; i < dataToLow.length; i++) {
    let letterAt = dataToLow.charAt(i);
    if (charMap[letterAt]) {
      modStr += charMap[letterAt];
    } else {
      modStr += letterAt;
    }
  }
  console.log('lowerCase: ' + modStr);

  return {
    get: function () {
      return modStr;
    },
    print: function () {
      console.log('lowerCase: ' + modStr);
    },
  };
}

// function getData(getLine) {
//   console.log(getLine);
// }

function methodOne(data) {
  /**
   * Входные данные: привет прикол
   * Выходные данные: 1
   * Преобразования (выводить не нужно):
   * в ⇒ к (прикет)
   * е ⇒ о (прикот)
   * т ⇒ л (прикол)
   **/

  // let pattern = {
  //   в: 'к',
  //   е: 'о',
  //   т: 'л',
  // };

  // function transformMethodOne(subStringData, patternData) {
  //   // console.log('arr ' + subStringData);
  //   let modMethodOne = '';
  //   for (let index = 0; index < subStringData[0].length; index++) {
  //     // console.log(patternData[subStringData[0][index]]);
  //     if (patternData[subStringData[0][index]]) {
  //       modMethodOne += patternData[subStringData[0][index]] + '1 ';
  //     } else {lowerCase

  //   // console.log(subStringData[0].charAt(0) == subStringData[1].charAt(0));
  //   // console.log(subStringData[0][0] == subStringData[1][0]);

  //   if (!subStringData[0][0] == subStringData[1][0])
  //     // for (let index = 0; index < subStringData[0].length; index++) {
  //     //   if (subStringData[0][index] == subStringData[1][index]) {
  //     //     let m = '';
  //     //     console.log('# ' + pattern[subStringData[0][index]]);
  //     //     for (let i = 0; i < subStringData[0].length; i++) {
  //     //       if (subStringData[0][index] == pattern[subStringData[0][index]]) {
  //     //         m += subStringData[0][index];
  //     //       }
  //     //     }

  //     //     result += subStringData[0][index];
  //     //     console.log(index + ': ' + subStringData[0][index]);
  //     //   } else {
  //     //     if (pattern[subStringData[0][index]] == undefined) {
  //     //       pattern[subStringData[0][index]] = subStringData[1][index];
  //     //       // result += subStringData[1][index];
  //     //     }
  //     //   }
  //     // }
  //     console.log(pattern);
  //   console.log('result: ' + result);
  // }
  checkTransform = '';

  let subString = data.split(' ');
  if (subString[0].length == subString[1].length) {
    transformMethodOne(subString);
    checkTransform = 1;
  } else {
    checkTransform = 0;
  }

  function repeatPattern() {}

  function transformMethodOne(subString) {
    // console.log('subString: ' + subString);
    let pattern = {};
    // subString[0].filter(item => console.log(item));
    for (let i = 0; i < subString[0].length; i++) {
      if (subString[0][i] != subString[1][0]) {
        pattern[subString[0][i]] = subString[1][i];
        subString[0] = subString[0].map(item =>
          subString[0][item] == pattern[item]
            ? (subString[0][item] = pattern[subString[0][item]])
            : (subString[0][item] = '#'),
        );
      }
    }
    console.log(pattern);
    console.log(subString[0]);
  }

  console.log(checkTransform);
}

// let line = 'ПрИвЕт пРикОл'.toLowerCase().split(' ');
// let data = 'ПрИвЕт пРиКОл';
let data = 'ПрИвЕВ пРиКОл';
console.log('Input data: ' + data);

methodOne(lowerCase(data).get()); // function, for, self func lowerCase()

// function myRepeat(dataRepeat, patternRepeat) {}

// function myData(data) {
//   console.log('data.length: ' + data.length);
//   console.log('data.length - index: ' + data.length - data[0].length);
//   if (data[0] == 'П') {
//     // let res = myRepeat(data, pattern);
//     // console.log(res);
//   }
// }

// myData(data);
// const { performance } = require('perf_hooks');
// let timers = {};

// function timeDecorator(f, timer) {
//   return function () {
//     let start = performance.now();
//     let result = f.apply(this, arguments);

//     if (!timers[timer]) timers[timer] = 0;
//     timers[timer] += performance.now() - start;

//     return result;
//   };
// }

// function originalLowerCase(str) {
//   // console.log('Result 2: ' + str.toLowerCase());
//   str = str.toLowerCase();
//   return str;
// }

// let timeLowerCase = timeDecorator(lowerCase, 'lower');
// let timeOriginalLowerCase = timeDecorator(originalLowerCase, 'lower');

// timeLowerCase(line2);
// console.log(timers.lower.toFixed(4) + ' ms');

// timeOriginalLowerCase(line2);
// console.log(timers.lower.toFixed(4) + ' ms');

// console.log(' # ');

// let t0 = performance.now();
// for (let index = 0; index < 10; index++) {
//   lowerCase(line2);
// }
// let t1 = performance.now();
// console.log('lowerCase / 10: ' + ((t1 - t0) / 10).toFixed(4) + ' ms.');

// let m0 = performance.now();
// for (let index = 0; index < 10; index++) {
//   originalLowerCase(line2);
// }
// let m1 = performance.now();
// console.log('original / 10: ' + ((m1 - m0) / 10).toFixed(4) + ' ms.');
