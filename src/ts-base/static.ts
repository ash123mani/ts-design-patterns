class Circle {
  static PI = 3.14;

  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return this.radius * this.radius * Circle.PI;
  }
}

const CIRCLE1 = new Circle(1)
const CIRCLE2 = new Circle(2)
const CIRCLE3 = new Circle(3)
console.log('CIRCLE1 Area = ' + Circle.PI * CIRCLE1.radius ** 2)
console.log('CIRCLE2 Area = ' + Circle.PI * CIRCLE2.radius ** 2)
console.log('CIRCLE3 Area = ' + CIRCLE3.area())
