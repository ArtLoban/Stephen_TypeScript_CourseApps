const apples: number = 5        // Here `: number` - a type annotation
const speed: string = 'fast'
const hasName: boolean = true

const nothingMuch: null = null
const nothing: undefined = undefined

// built in objects
const now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']        // array of string (only strings!)
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true, true, false]

// Classes
class Car {

}
let car: Car = new Car()

// Object literal
let point: { x: number; y: number }  = {
    x: 10,
    y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {         // TS annotation here is: `: (i: number) => void`
    console.log(i);
}


/*** When to use annotations ***/

// 1) Function that returns `any` type
const json = '{"x": 10; "y": 20}'
const coordinates = JSON.parse(json)            // Result of this function maybe `any` type
const coordinatesTyped: { x: number; y: number } = JSON.parse(json)   // Here type of data is: `{ x: number; y: number }`
console.log(coordinates)    // {x: 10, y: 20 }

// 2) When we declare variable at one line and initialize it later
const words = ['red', 'green', 'blue']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
} 

