/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        // hold left pointer in temp
        let temp = s[left];
        // put right pointer into left
        s[left] = s[right];
        left++; // or s[left++] = s[right];
        // put temp into right
        s[right] = temp;
        right--; // or s[right--] = temp;
    }
    return s;
};

// const reverseString = function(s) {
//     for (let i = 0; i < s.length / 2; i++) {
//         // put left into temp
//         let tmp = s[i];
//         //put right into left
//         s[i] = s[s.length - i - 1];
//         // put left (stored in temp) into right
//         s[s.length - i - 1] = tmp;
//     }
//
//     return s;
// };

// const helper = (s, left, right) => {
//     if (left >= right) return;
//     let tmp = s[left];
//     s[left++] = s[right];
//     s[right--] = tmp;
//     helper(s, left, right);
// }
//
// const reverseString = function(s) {
//     helper(s, 0, s.length - 1);
// };

module.exports = reverseString;