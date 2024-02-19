#!/usr/bin/env node

export function capitalize(string) {
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

export function CaesarCipher(message, shift) {
  const shiftedAlphabet = [...Array(26)].map((_, i) =>
  String.fromCharCode(((i + shift) % 26) + 65)
);

const result = message.replace(/[a-z]/gi, (char) => {
  const charCode = char.charCodeAt(0);
  const index = charCode >= 97 ? charCode - 97 : charCode - 65;
  
  return shiftedAlphabet[index] || char;
});

return result;
}

export  function analyzeArray(array) {
    let average = 0, min = array[0], max = array[0], length = array.length;

    for(let i = 0; i < array.length; i++) {
        average += array[i];
        if(min > array[i]) min = array[i];
        if(max < array[i]) max = array[i];
    }

    return {
        average: Math.round(average/length),
        min: min,
        max: max,
        length: length
    }
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]))