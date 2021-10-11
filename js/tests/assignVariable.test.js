const assignVariable = require('./assignVariable.js');

// set up and teardown
let listOfReturns = [];
beforeEach(() => {
    let alteredText = '';
})

afterEach(() => {
    listOfReturns = [...listOfReturns, alteredText]
})

test('if assignVariable assigns a set-up variable', () => {
    expect(assignVariable()).toBe('text is altered')
})

test('if teardown is saving the returned strings', () => {
    assignVariable()

    expect(listOfReturns).toEqual(
        expect.arrayContaining([
            'text is altered'
        ]))
})