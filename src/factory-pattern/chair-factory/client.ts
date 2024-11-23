// Factory Use Case Example Code
import ChairFactory from './chair-factory'

const CHAIR = ChairFactory.getChair('MediumChair')
console.log(CHAIR.color)
console.log(CHAIR.getDimensions())