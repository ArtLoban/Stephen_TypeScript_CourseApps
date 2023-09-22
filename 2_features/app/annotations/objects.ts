const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age
  }
}

let age = profile.age       // Обычно

let { age } = profile       // Деструктуризация
let { age }: { age: number} = profile     // Деструктуризация с анотацией


let { coords: { lat, lng } }: { coords: { lat: number; lng: number} } = profile
