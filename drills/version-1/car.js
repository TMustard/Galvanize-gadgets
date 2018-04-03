//Your code here.
class Car {
  constructor() {
    this.gallons = 0;
    this.milesDriven = 0;
    this.tripsTaken = [];
  }
  fill(gals) {
    this.gallons += gals;
  }
  drive(miles) {
    this.gallons -= miles / 10;
    this.milesDriven += miles;
    this.tripsTaken.push(miles + " miles");
  }
  odometer() {
    return this.milesDriven;
  }
  trips() {
    return this.tripsTaken;
  }
}
module.exports = Car;
