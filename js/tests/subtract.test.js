const subtract = require('./subtract.js');

test('gives back a value', () => {
    expect(subtract(10, 5)).toStrictEqual(expect.anything())
})

test('subtract subtracts two numbers', () => {
    expect(subtract(5,4)).toBe(1)
})