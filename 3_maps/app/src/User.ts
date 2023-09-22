import faker from 'facker'

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.name.firstName()
    console.log(this.name);
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}


