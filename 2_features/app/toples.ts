const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// Пример Tuple
const pepsi: [string, boolean, number] = ['brown', true, 40]

// Альетрнативный вариант, используя Type alias
type Drink = [string, boolean, number]

const cola: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['clear', false, 0]