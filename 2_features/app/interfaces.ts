interface Vehicle {
  name: string
  year: Date
  broken: boolean
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is: ${this.name}`
  }
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
  console.log('Summary: ', vehicle.summary());
}

printVehicle(oldCivic)
