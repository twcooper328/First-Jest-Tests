function areYouLucky({string, randomFn}) {
    let randomNumber = randomFn()
    
    return `${string}, your lucky number is ${randomNumber}`
}

module.exports = areYouLucky