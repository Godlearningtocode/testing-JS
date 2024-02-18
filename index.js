#!/usr/bin/env node

/*export function capitalize(string) {
    let storage = string.split("")
    let firstCharacter = storage[0]
    storage[0] = storage[0].toUpperCase()
    if(storage[0] === storage[0].toUpperCase()) return true
    else return false
}

export function reverseString(string) {
    let storage = string.split("")
    let newString = " "
    for(let i = storage.length - 1; i >= 0; i--) {
        newString += string[i]
    }
    return newString
}

export function Calculator(a, b) {
    function add(a, b) {
        return a + b
    }

    function subtract(a, b) {
        return a - b
    }

    function multiply(a, b) {
        return a * b
    }

    function divide(a,b) {
        return a / b
    }

    return {
        add,
        subtract,
        multiply,
        divide
    }
}

export*/ function CaesarCipher(string, shiftFactor) {
    let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for(let i = 0; i < alphabets.length; i++) {
        if(string.toUpperCase() === alphabets[i]) return i
    }
}

console.log(CaesarCipher('a', 5))