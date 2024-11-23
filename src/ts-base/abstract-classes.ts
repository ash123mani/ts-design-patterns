abstract class _Animal {
  abstract name: string;
  age = -1;
  
  abstract feed(food: string, amount: number): void;

  sayHello(): void {
    console.log("Hello, I'm " + this.name);
  }
}

class _Cat extends _Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    super();
    this.name = name;
    this.age = age;
  }

  feed(food: string, amount: number): void {
    console.log(
      "Feeding " +
        this.name +
        "the" +
        this.constructor.name +
        " " +
        amount +
        " kg of " +
        food
    );
  }
}

class _Dog extends _Animal {
  name: string;

  constructor(name: string, age: number) {
    super();
    this.name = name;
    this.age = age;
  }

  feed(food: string, amount: number): void {
    console.log(
      "Feeding " +
        this.name +
        "the" +
        this.constructor.name +
        " " +
        amount +
        " kg of " +
        food
    );
  
  }
}

const _CAT = new _Cat("Billy", 5);
const _DOG = new _Dog("Pintu", 12);

_CAT.feed("Fish", 0.1);
_CAT.sayHello()
_DOG.feed("Beef", 0.25);
_DOG.sayHello();