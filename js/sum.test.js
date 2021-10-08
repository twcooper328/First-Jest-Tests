const sum = require('./sum.js');

test('Sum properly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
})

test('Sum adds negative and positive numbers properly', () => {
    expect(sum(-4, 8)).toBe(4)
})