class ___Animal {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  };
}

class __Cat extends ___Animal  {
  #sound: string

  constructor(name: string, age: number, sound: string) {
    super(name, age);
    this.#sound = sound;
  }
}

const __CAT = new __Cat('Cosmo', 8, 'Meow');
// console.log(__CAT.#sound) // error here ->> #name is private property accessible only inside class
// console.log(__CAT.name) // error ->> Property name is protected and only accessible within class ___Animal and its subclasses.

