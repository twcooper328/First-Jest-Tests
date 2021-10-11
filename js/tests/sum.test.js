const sum = require('./sum.js');
const tomsFavNumbers = [0, 2, 3, 5, 6, 7, 9, 12, 13, 15, 18, 20]

test('Sum properly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
})

test('Sum adds negative and positive numbers properly', () => {
    expect(sum(-4, 8)).toBe(4)
})

test('that sum can output a big number - toBeGreaterThan', () => {
    const bigNum = tomsFavNumbers.reduce(sum)
    expect(sum(100, 100)).toBeGreaterThan(bigNum)
})


// create my own matcher
expect.extend({
    toBeMyFavorite(received) {
        
        const isIncluded = tomsFavNumbers.includes(received)
        if (isIncluded) {
            return {
                message: () => `expected ${received} to be one of my favorite numbers`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} not to be one of my favorite numbers`,
                pass: fail
            }
        }
    }
})

test('sum is capable of outputting one of my favorite numbers', () => {
    expect(sum(10, 10)).toBeMyFavorite(tomsFavNumbers)
})
