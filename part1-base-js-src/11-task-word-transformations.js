// Задача 1. Преобразования слов

// Условие задачи
// Ограничение времени, с 1
// Ограничение памяти, МБ 64
// Общее число попыток отправки 15

// На вход подается 2 подстроки.
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
// filter(), map(), split(), slice(), join(), toLowerCase()
// hasOwnProperty(), length,

// function getData(getLine) {
//   console.log(getLine);
// }

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

// Преобразование строки из Верхнего регистра в Нижний регистр
// Вместо toLowerCase() интересно было попробовать написать свою реализацию и замерить скорость работы
function lowerCase(dataToLow) {
  const letterUp = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');
  const letterLow = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');

  // Получение Паттерна (ключ-значение) алфавита
  let charMap = {};
  for (let i = 0; i < letterUp.length; i++) {
    charMap[letterUp[i]] = letterLow[i];
  }

  // Преобразование из Верхнего регистар в Нижний
  let modStr = '';
  for (let i = 0; i < dataToLow.length; i++) {
    let letterAt = dataToLow.charAt(i);
    if (charMap[letterAt]) {
      modStr += charMap[letterAt];
    } else {
      modStr += letterAt;
    }
  }
  // console.log('lowerCase: ' + modStr);

  return {
    get: function () {
      // Функция для возвращения результата
      return modStr;
    },
    print: function () {
      // Функция для печати результа работы lowerCase в Терминал
      console.log('lowerCase: ' + modStr);
    },
  };
}

// Слияние дублей слов
function mergeWords(data, subStrTwo) {
  let strCut = {};

  for (let i = 0; i < data.length; i += subStrTwo.length) {
    strCut[i] = data.slice(i, i + subStrTwo.length);
  }

  let merge = '';
  for (const key in strCut) {
    if (strCut.hasOwnProperty(key)) {
      if (merge != strCut[key]) {
        merge += strCut[key];
      }
    }
  }
  return merge;
}

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
    // console.log(pattern); // Вывод содержимого Паттерна (ключ-значение) для поиска ошибок
    convertStatus = subStrOne == subStrTwo ? 1 : 0;
    // console.log(
    //   `convertStatus: ${subStrOne} ? ${subStrTwo} == ${convertStatus}`,
    // );
  }

  return convertStatus;
};

// Получение строки из Терминала
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', data => {
  data = lowerCase(String(data)).get();
  // Получение подстрок.
  let subStrOne = data.slice(0, data.indexOf(' '));
  // console.log('#' + subStrOne + '#');
  let subStrTwo = data.slice(data.indexOf(' ') + 1);
  // console.log('#' + subStrTwo + '#');

  // Merge duplicates
  subStrOne = mergeWords(subStrOne, subStrTwo);
  console.log(`${String(replaceLetter(subStrOne, subStrTwo))}`);
  rl.close();
  return;
}).on('close', () => process.exit(0));
