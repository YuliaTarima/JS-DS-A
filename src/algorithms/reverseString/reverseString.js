// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// --- Solutions

// Solution: iterating through a string with for of loop
const reverse = (str) => {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// Solution: reverse iterating through a string with for loop
// const reverse = (str) => {
//   let reversed = '';
//
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//
//   return reversed;
// }

// Solution: iterating through a string with for loop
// const reverse = (str) => {
//     let reversed = '';
//
//     for (let i = 0; i <= str.length - 1; i++) {
//         reversed = str[i] + reversed;
//     }
//
//     return reversed;
// }

// Solution: using Array.reduce()
// const reverse = (str) =>
//     str.split('')
//         .reduce((rev, char) => char + rev, '');

// Solution: using Array.reduce() and the spread operator
// const reverse = (str) =>
//     [...str].reduce((rev, char) => char + rev, '');

// Solution: using Array.reverse()
// const reverse = (str) =>
//     str.split('')
//         .reverse()
//         .join('');

module.exports = reverse;