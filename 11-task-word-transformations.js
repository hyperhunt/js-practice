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

function methodOne(subStr) {
  /**
   * Входные данные: привет прикол
   * Выходные данные: 1
   * Преобразования (выводить не нужно):
   * в ⇒ к (прикет)
   * е ⇒ о (прикот)
   * т ⇒ л (прикол)
   **/

  let pattern = {
    в: 'к',
    е: 'о',
    т: 'л',
  };

  checkTransform = '';

  function transformMethodOne(arrStrData, patternData) {
    // console.log('arr ' + arrStrData);
    for (let index = 0; index < arrStrData[0].length; index++) {
      console.log(arrStrData[0][index]);
    }
  }

  let arrStr = subStr.split(' ');
  if (arrStr[0].length == arrStr[1].length) {
    transformMethodOne(arrStr, pattern);
    checkTransform = 1;
  } else {
    checkTransform = 0;
  }
  console.log(checkTransform);
}

// let line = 'ПрИвЕт пРикОл'.toLowerCase().split(' ');
let data = 'ПрИвЕт пРиКОл';
console.log('Input data: ' + data + '\n');

methodOne(lowerCase(data).get());

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
