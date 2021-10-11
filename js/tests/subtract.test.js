const subtract = require('./subtract.js');

test('gives back a value', () => {
    expect(subtract(10, 5)).toStrictEqual(expect.anything());
});

test('subtract subtracts two numbers', () => {
    expect(subtract(5,4)).toBe(1);
});

test('subtract gives back the correct type', () => {
    const subtractionResult = subtract(66, 33);
     expect( typeof subtractionResult).toBe('number');
});