const reverseString = require('./leetCode#344');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('Reverses ["h","e","l","l","o"]', () => {
    expect(reverseString(["h","e","l","l","o"])).toEqual(expect.arrayContaining(["o","l","l","e","h"]));
});

test('Reverses ["H","a","n","n","a","h"]', () => {
    expect(reverseString(["H","a","n","n","a","h"])).toEqual(expect.arrayContaining(["h","a","n","n","a","H"]));
});