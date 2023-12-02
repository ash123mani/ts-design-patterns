"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return this.radius * this.radius * Circle.PI;
    }
}
Circle.PI = 3.14;
const CIRCLE1 = new Circle(1);
const CIRCLE2 = new Circle(2);
const CIRCLE3 = new Circle(3);
console.log('CIRCLE1 Area = ' + Circle.PI * Math.pow(CIRCLE1.radius, 2));
console.log('CIRCLE2 Area = ' + Circle.PI * Math.pow(CIRCLE2.radius, 2));
console.log('CIRCLE3 Area = ' + CIRCLE3.area());
