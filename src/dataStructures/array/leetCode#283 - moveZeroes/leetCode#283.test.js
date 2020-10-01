const moveZeroes = require('./leetCode#283');

test('function moveZeroes exists', () => {
    expect(typeof moveZeroes).toEqual('function');
});

test('moveZeroes [0,1,0,3,12] returns [1,3,12,0,0]', () => {
    expect([0,1,0,3,12]).toEqual(expect.arrayContaining([1,3,12,0,0]));
});

test('moveZeroes [0,0,1] returns [1, 0, 0]', () => {
    expect([0,0,1]).toEqual(expect.arrayContaining([1,0,0]));
});

test('moveZeroes [1,0,0,1] returns [1,1,0,0]', () => {
    expect([1,0,0,1]).toEqual(expect.arrayContaining([1,1,0,0]));
});

