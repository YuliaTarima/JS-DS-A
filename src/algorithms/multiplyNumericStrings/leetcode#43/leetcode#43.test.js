const multiply = require('./leetcode#43');

test('multiply function exists', () => {
    expect(multiply).toBeDefined();
});

test('multiply(2,3) should return 6', () => {
    expect(multiply('2', '3')).toEqual('6');
});

test('multiply(123, 456) should return 56088', () => {
    expect(multiply('123', '456')).toEqual('56088');
});

test('multiply(0, 10000000) should return 0', () => {
    expect(multiply('0', '10000000000')).toEqual('0');
});

test('multiply(123, 456) should return 56088', () => {
    expect(multiply('123', '456')).toEqual('56088');
});

test('multiply(9, 9) should return 81', () => {
    expect(multiply('9', '9')).toEqual('81');
});
