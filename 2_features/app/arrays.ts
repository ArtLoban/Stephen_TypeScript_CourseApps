const carMakers = ['ford', 'toyota', 'chevy']       // `: strings[]`
const dates = [new Date(), new Date()]              // `: Date[]`

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Help with inference when extracting value
const theCar = carMakers[0]      // `: string`
const myCar = carMakers.pop()

// Prevent incompatible values
carMakers.push(100)

// Help with `map`. Code editor will give autocomlite options depending on the type of data
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

// Flexible types
const importantDates: (Date | string)[] = [new Date()]     // `: (string | Date)[]`
importantDates.push('2030-10-10')
importantDates.push(new Date())
importantDates.push(100)

