const cloneArray = require('./cloneArray.js');


test('properly clones an array', () => {
    const array = [1,2,3] 
    expect(cloneArray(array)).toEqual(array)
})