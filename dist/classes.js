"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log('Feeding ' +
            this.name +
            ' the ' +
            this.constructor.name +
            ' ' +
            amount +
            ' kg of ' +
            food);
    }
}
class Dog extends Animal {
    constructor(isHungry, age, name) {
        super(name, age);
        this.name = "Pintu";
        this.isHungry = isHungry;
        this.name = name;
    }
    feed(food, amount) {
        if (this.isHungry) {
            super.feed(food, amount);
        }
        else {
            return `${this.name} eats one time and lives without eating 20hours then after`;
        }
    }
}
class Cat extends Animal {
}
const animal = new Animal('Lion', 12);
const CAT = new Cat('Cosmo', 8);
const DOG = new Dog(false, 12, "Cosmo");
animal.feed('Deer Flesh', 200);
CAT.feed('Fish', 0.1);
console.log(DOG.feed('Beef', 0.25));
