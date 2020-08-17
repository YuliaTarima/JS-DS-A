// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// --- Solutions
const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Time complexity: O(N) where N is a number of characters in a string
// Space complexity: O(N) we created Array copy of input string
const reverse = (str) => {

    const vowels = {};
    for (const char of 'aeiouyAEIOUY') {
        vowels[char] = true;
    }

    const reversed = [...str];
    // or str.split('');

    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        while (left < right && !(str[left] in vowels)) {
            left ++;
        }

        while (left < right && !(str[right] in vowels)) {
            right --;
        }

        swap(reversed, left, right);
        left ++;
        right --;
    }

    return reversed.join('');
}

module.exports = reverse;