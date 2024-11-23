/**
 * In this concept example, the client wants an object named b
 *
 * Rather than creating b directly in the client, it asks the creator (factory) for the object instead.
 *
 *The factory finds the relevant class using some kind of logic from the attributes of the request. It then asks the subclass to instantiate the new object that it then returns as a reference back to the client asking for it.
 */



// The Factory Concept
interface IProduct {
  name: string
}

class ConcreteProduct implements IProduct {
  name = ''
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'ConcreteProductA'
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'ConcreteProductB'
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'ConcreteProductC'
  }
}

class Creator {
  static createObject(someProperty: string): IProduct {
    if (someProperty === 'a') {
      return new ConcreteProductA()
    } else if (someProperty === 'b') {
      return new ConcreteProductB()
    } else {
      return new ConcreteProductC()
    }
  }
}

// The Client
const PRODUCT = Creator.createObject('b')
console.log(PRODUCT.name)