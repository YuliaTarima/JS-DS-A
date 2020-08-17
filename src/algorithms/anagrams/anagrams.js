// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// // Solution
// import {isEqual} from 'lodash';
// import {getLetterCount} from './letter-count';
//
// export const formatString = string =>
//     string.toLowerCase().replace(/\s+/g, '');
//
// function anagrams(stringA, stringB) {
//     const string1LetterCount = getLetterCount(formatString(stringA));
//     const string2LetterCount = getLetterCount(formatString(stringB));
//
//     return isEqual(string1LetterCount, string2LetterCount);
// };

// // Solution
// function cleanString(str) {
//     return str
//         .replace(/[^\w]/g, '')
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join('');
// }
//
// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }

// Solution
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;