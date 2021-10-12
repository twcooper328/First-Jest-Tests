# Introduction to Testing - Read Me
![gif that shows test running](https://media.giphy.com/media/uttMYghH97SUbZj9ki/giphy.gif)

This contains a handful of JavaScript files that contain simple functions.
- sum.js
- subtract.js
- items.js
- dependantFunction.js
- assignVariable.js

These functions are then tested using Jest.

The purpose of this application is to familiarize myself with writing tests unit tests. 

### Running the test. 

After pulling down the repository, cd into the folder and run the command:

    npm test

### Software dependencies
- Jest - [Jest Documentation](https://jestjs.io/)
- Webpack - [Webpack Documentation](https://webpack.js.org/)

## Available Scripts

From the project directory, in the terminal you can run:

### `npm jest`

This will run all tests and output the coverage in the terminal.

## Tests

### Assign Variable

**assignVariable.test.js** contains tests that:
- test 'set-up' and 'tear-down' functions

### Dependent Function

**dependantFunction.test.js** contains tests that:
- mock a function and runs tests to see if it was called

### Items

**items.test.js** contains tests that:
- match array with snapshot
- see if array contains a specific object
- objects contain an "id" property
- array is correct length
- item names are correct
- items doesn't contain a specific object

### Subtract

**subtract.test.js** contains tests that:
- see if subtract returns a value
- see if return value is accurate
- see if returned value is correct type

### Sum

**sum.test.js** contains tests that:
- returned values are accurate
- sum add negative numbers
- use the "toBeGreaterthan" function
- use custom matchers

***
