const singleNumber = require('./leetcode136');

test('singleNumber function exists', () => {
    expect(singleNumber).toBeDefined();
});

test('singleNumber([2,2,1] should return 1', () => {
    expect(singleNumber([2,2,1])).toEqual(1);
});

test('singleNumber([4,1,2,1,2] should return 4', () => {
    expect(singleNumber([4,1,2,1,2])).toEqual(4);
});

test('singleNumber([1,0,1] should return 0', () => {
    expect(singleNumber([1,0,1])).toEqual(0);
});