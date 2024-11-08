class Car {
  constructor(public make: string, public model: string, public year: number) {}
  getCarAge() {
    const date = new Date().getFullYear();
    return date;
  }
}
const car = new Car("yamaha", "r15", 2018);
car.getCarAge();
console.log(car.getCarAge());
