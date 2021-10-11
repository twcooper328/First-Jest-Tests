const cloneLuckyFn = require('./dependantFunction.js');

test('are you lucky calls function properly', () => {
    const nameItShark = nado => `Shark${nado}!`;        // makes the function
    const mockFn = jest.fn(nameItShark);               // mocks the function

    const value = cloneLuckyFn(mockFn);           
    expect(mockFn).toHaveBeenCalled();           
    expect(mockFn).toHaveBeenCalledWith('-nado');           
    expect(value).toBe('Shark-nado!');

})