const singleNumber = require('./leetCode#136');

test('singleNumber function exists', () => {
    expect(singleNumber).toBeDefined();
});

test('Reverses [2, 2, 1]', () => {
    expect(singleNumber([2, 2, 1])).toEqual(1);
});

test('Reverses [4, 1, 2, 1, 2]', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4);
});