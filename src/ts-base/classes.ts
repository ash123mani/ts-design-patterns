class Animal {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  feed(food: string, amount: number): void {
    console.log(
      'Feeding ' +
      this.name +
      ' the ' +
      this.constructor.name +
      ' ' +
      amount +
      ' kg of ' +
      food
    )
  }
}

class Dog extends Animal {
  isHungry: boolean
  name: string = "Pintu"

  constructor(isHungry: boolean, age: number,  name: string) {
    super(name, age);
    this.isHungry = isHungry;
    this.name = name;
  }

  feed(food: string, amount: number): void | string {
    if (this.isHungry) {
      super.feed(food, amount);
    } else {
      return `${this.name} eats one time and lives without eating 20hours then after`;
    }
  }
}

class Cat extends Animal {}

const animal = new Animal('Lion', 12)
const CAT = new Cat('Cosmo-cat', 8)
const DOG = new Dog(false, 12, "Cosmo-dog")
animal.feed('Deer Flesh', 200)
CAT.feed('Fish', 0.1)
console.log(DOG.feed('Beef', 0.25))
