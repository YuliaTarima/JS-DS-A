const addStrings = require('./leetcode#415');

test('addStrings function exists', () => {
    expect(addStrings).toBeDefined();
});

test('addStrings(2,3) should return 5', () => {
    expect(addStrings('2', '3')).toEqual('5');
});

test('addStrings(123, 456) should return 579', () => {
    expect(addStrings('123', '456')).toEqual('579');
});

test('addStrings(0, 10000000) should return 10000000000', () => {
    expect(addStrings('0', '10000000000')).toEqual('10000000000');
});