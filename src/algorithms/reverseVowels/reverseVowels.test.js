const reverse = require('./reverseVowels');

test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
    expect(reverse('hello')).toEqual('holle');
});

test('Reverse reverses a string', () => {
    expect(reverse('hEllo')).toEqual('hollE');
});

test('Reverse reverses a string', () => {
    expect(reverse('leetcode')).toEqual('leotcede');
});