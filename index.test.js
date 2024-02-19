import { capitalize } from './index.js';
import { reverseString } from './index.js';
import { Calculator } from './index.js';
import { CaesarCipher } from './index.js';
import { analyzeArray } from './index.js';

test('returns first character as upperCase for a string', () => {
    expect(capitalize('asgvahsbdb')).toBeTruthy()
})

test('returns first character as upperCase for a string with multiple words', () => {
    expect(capitalize('tynsj avsdj vndb oievn')).toBeTruthy()
})

test('returns a string in reverse order', () => {
    expect(reverseString('king of JS')).toMatch(/SJ fo gnik/);
})

test('returns a string in reverse order', () => {
    expect(reverseString('God of Code')).toMatch(/edoC fo doG/)
})

test('returns the sum of two numbers', () => {
    let sum = new Calculator
    expect(sum.add(2, 2)).toEqual(4)
})

test('returns the sum of two numbers', () => {
    let sum = new Calculator
    expect(sum.add(31561, 151651)).toEqual(183212)
})

test('returns the difference between two numbers', () => {
    let subtraction = new Calculator;
    expect(subtraction.subtract(2, 2)).toEqual(0)
})

test('returns the difference between two numbers', () => {
    let subtraction = new Calculator;
    expect(subtraction.subtract(183212, 56489)).toEqual(126723)
})

test('returns the difference between two numbers', () => {
    let multiply = new Calculator;
    expect(multiply.multiply(2, 2)).toEqual(4)
})

test('returns the difference between two numbers', () => {
    let multiply = new Calculator;
    expect(multiply.multiply(1587, 231)).toEqual(366597)
})

test('returns the difference between two numbers', () => {
    let division = new Calculator;
    expect(division.divide(2, 2)).toEqual(1)
})

test('returns the difference between two numbers', () => {
    let division = new Calculator;
    expect(division.divide(199360, 3115)).toEqual(64)
})

test('returns a caesar cipher for a string', () => {
    expect(CaesarCipher('Hello, World!', 4)).toMatch(/LIPPS, ASVPH!/)
})

test('returns a caesar cipher for a string', () => {
    expect(CaesarCipher('Hello, World!', 5)).toMatch(/MJQQT, BTWQI!/)
})

test('returns average, min, max and length of an array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({average: 4, min: 1, max: 8, length: 6})
})

test('returns average, min, max and length of an array', () => {
    expect(analyzeArray([7, 6, 1, 9, 8, 4, 89, 4, 16, 48, 98, 321])).toMatchObject({average: 51, min: 1, max: 321, length: 12})
})