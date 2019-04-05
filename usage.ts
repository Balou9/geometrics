import {
  surfaceRectangle,
  surfaceSquare
} from './mod.ts'

let myRect = {
  bottomLeft: [0,0],
  bottomRight: [0,7],
  topRight: [23,7],
  topLeft: [23,0]
}

let mySquare = {
  bottomLeft: [0,0],
  bottomRight: [0,7],
  topRight: [7,7],
  topLeft: [7,0]
}

console.log(surfaceRectangle(myRect, false), surfaceRectangle(myRect, true))
console.log(surfaceSquare(mySquare, false), surfaceSquare(myRect, true))
