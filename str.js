// let data = 'прпвев ярикол';
// let data = 'ПрИвЕт пРикОл'.toLowerCase();
let data = 'ааббдд ддббаа';
console.log('Input data: ' + data);

let subStrOne = data.slice(0, data.indexOf(' '));
console.log('#' + subStrOne + '#');
let subStrTwo = data.slice(data.indexOf(' ') + 1);
console.log('#' + subStrTwo + '#');

let r = '';
subStrOne.length == subStrTwo.length ? (r = 1) : (r = 0);
console.log(r);

let searchLetter = function (subStrOne, subStrTwo) {
  let pattern = {};

  for (let i = 0; i < subStrOne.length; i++) {
    console.log(`## ${i} property: ${!pattern.hasOwnProperty(subStrOne[i])}`);
    if (!pattern.hasOwnProperty(subStrOne[i])) {
      if (subStrOne[i] != subStrTwo[i]) {
        if (subStrOne.search(subStrTwo[i]) != -1) {
          pattern[subStrTwo[i]] = '#'; //  'д' - '#'
          pattern[subStrOne[i]] = subStrTwo[i]; // 'а' - 'д'
          pattern['#'] = subStrOne[i]; // '#' - 'а'

          subStrOne = subStrOne.split(subStrTwo[i]).join(pattern[subStrTwo[i]]);
          subStrOne = subStrOne.split(subStrOne[i]).join(pattern[subStrOne[i]]);
          subStrOne = subStrOne.split('#').join(pattern['#']);

          // subStrOne = subStrOne
          //   .split(pattern[subStrOne[i]])
          //   .join(pattern[subStrTwo[i]]);

          // subStrOne = subStrOne.replace(subStrOne[i], pattern[subStrOne[i]]);

          // subStrOne = subStrOne
          //   .split(pattern[subStrOne[i]])
          //   .join(pattern[subStrTwo[i]])
          //   .replace(subStrOne[i], pattern[subStrOne[i]]);

          //
          // subStrOne = subStrOne
          //   .split(pattern[subStrOne[i]])
          //   .join(pattern[subStrTwo[i]]);

          // subStrOne = subStrOne.split(subStrOne[i]).join(subStrTwo[i]);
          //

          // subStrOne = subStrOne.split(subStrTwo[i]).join(subStrOne[i]);
          // pattern[subStrOne[i]] = subStrTwo[i];
          // subStrOne = subStrOne.replace(
          //   pattern[subStrOne[i]],
          //   pattern[subStrTwo[i]],
          // );
        } else {
          // subStrOne = subStrOne
          //   .split(pattern[subStrOne[i]])
          //   .join(pattern[subStrTwo[i]]);
          // subStrOne = subStrOne.split(subStrOne[i]).join(subStrTwo[i]);
          // console.log(`##${i}: ${subStrOne[i]} ${subStrTwo[i]}`);
          // subStrOne = subStrOne
          //   .split(pattern[subStrOne[i]])
          //   .join(pattern[subStrTwo[i]]);
        }

        // subStrOne.search(subStrTwo[i]) == -1
        //   ? ((pattern[subStrOne[i]] = subStrTwo[i]),
        //     (subStrOne = subStrOne.replace(
        //       subStrOne[i],
        //       pattern[subStrOne[i]],
        //     )))
        //   : (subStrOne = subStrOne.replace(subStrOne[i], '#'));
        // console.log(`${i} IF: ` + subStrOne);
      }

      // subStrOne = subStrOne.split(subStrOne[i]).join(pattern[subStrOne[i]]);
      // console.log(`${i} EL: ` + subStrOne);
    }
    // } else {
    //   // if (subStrOne.search(pattern[subStrOne[i]]) != -1)
    //   //   subStrOne = subStrOne.replace(pattern[subStrOne[i]], '#');
    //   // subStrOne = subStrOne.split(subStrOne[i]).join(pattern[subStrOne[i]]);
    //   // console.log(`${i} EL: ` + subStrOne);
    //   // subStrOne = subStrOne.replace(subStrOne[i], pattern[subStrOne[i]]);

    // }
    console.log(`${i}: ` + subStrOne);
  }
  console.log(subStrOne);
  console.log(pattern);
  // console.log(result);/

  console.log(`R: ${subStrOne} ? ${subStrTwo} == ${subStrOne == subStrTwo}`);
};

searchLetter(subStrOne, subStrTwo);

let search = 'д';
let replaceWith = '#';
let m = 'ааббдд'.split(search).join(replaceWith);
console.log(m);

// console.log('## ## ##');
// let pattern = { пп: 'я', в: 'к', е: 'о' };

// let q = `pattern.hasOwnProperty([subStrOne[i]]): ${pattern.hasOwnProperty(
//   subStrOne[0],
// )}`;
// console.log(q);

// if () {
//       if (!pattern[subStrOne[i]] && pattern[subStrOne[i]] != subStrTwo[i]) {
