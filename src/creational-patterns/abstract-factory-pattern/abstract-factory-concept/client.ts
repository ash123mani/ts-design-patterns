// The Client
import AbstractFactory from "./abstract-factory-concept";

let PRODUCT = AbstractFactory.createObject('ab')
console.log(PRODUCT)

PRODUCT = AbstractFactory.createObject('bc')
console.log(PRODUCT)