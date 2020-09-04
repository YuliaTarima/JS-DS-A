const fizzBuzz = require('./leetcode#412');

test('fizzBuzz function exists', () => {
    expect(fizzBuzz).toBeDefined();
});

test('n = 15', () => {
    expect(fizzBuzz(15)).toEqual(expect.arrayContaining([
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz"
    ]));
});