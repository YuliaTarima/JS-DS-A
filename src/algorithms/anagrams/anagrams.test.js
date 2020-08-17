const anagrams = require('./anagrams');

test('anagrams function exists', () => {
    expect(typeof anagrams).toEqual('function');
});

test('"hello" is an anagram of "llohe"', () => {
    expect(anagrams('hello', 'llohe')).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"One One" is not an anagram of "Two two two"', () => {
    expect(anagrams('One One', 'Two two two')).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
    expect(anagrams('One one', 'One one c')).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(
        anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
    ).toBeFalsy();
});

// import {expect} from 'chai';
// import {formatString, isAnagram} from './anagrams';
//
// describe('formatString - basic functionality', () => {
//     it('removes spaces and converts to lower case', () => {
//         // 'This is a STRING' -> 'thisisastring'
//         const expected = 'thisisastring';
//         const actual = formatString('This is a STRING');
//         expect(actual).to.equal(expected);
//     });
// });
//
// describe('isAnagram - basic functionality', () => {
// // 'listen' 'silent'
// // 'elbow' 'below'
//     it('returns true when two known anagrams are passed in', () => {
//         const expected = true;
//         const actual = isAnagram('listen', 'silent');
//         expect(actual).to.equal(expected);
//     });
//
// // 'elbows' 'below' NOT anagrams
//     it('returns false when either of the strings has extra letters', () => {
//         const expected = false;
//         const actual = isAnagram('elbows', 'below');
//         expect(actual).to.equal(expected);
//
//         const actual2 = isAnagram('below', 'elbows');
//         expect(actual2).to.equal(expected);
//     })
//
// // 'listens' 'silent' NOT anagrams
//     it('returns false when the strings have the same letters in different quantities', () => {
//         const expected = false;
//         const actual = isAnagram('listens', 'silent');
//         expect(actual).to.equal(expected);
//     });
//
// // 'conversation' 'voices rant on' ARE anagrams
//     it('ignores spaces in the input strings', () => {
//         const expected = true;
//         const actual = isAnagram('conversation', 'voices rant on');
//         expect(actual).to.equal(expected);
//     });
//
// // 'STATE' 'taste' ARE anagrams
//     it('ignores case in the input strings', () => {
//         const expected = true;
//         const actual = isAnagram('STATE', 'taste');
//         expect(actual).to.equal(expected);
//     });
// })
