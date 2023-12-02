"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var ___Cat_sound;
class ___Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
}
class __Cat extends ___Animal {
    constructor(name, age, sound) {
        super(name, age);
        ___Cat_sound.set(this, void 0);
        __classPrivateFieldSet(this, ___Cat_sound, sound, "f");
    }
}
___Cat_sound = new WeakMap();
const __CAT = new __Cat('Cosmo', 8, 'Meow');
// console.log(__CAT.#sound) // error here ->> #name is private property accessible only inside class
// console.log(__CAT.name) // error ->> Property name is protected and only accessible within class ___Animal and its subclasses.
