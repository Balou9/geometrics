import { twoPointDistance } from "./lib/two_point_distance.ts"

interface Coordinates {
  bottomLeft: number[];
  bottomRight: number[];
  topRight: number[];
  topLeft: number[];
}

export function surfaceRectangle (obj: Coordinates, circum: boolean) {
  let a: number = obj.bottomRight[1] - obj.bottomLeft[1]
  let b: number = obj.topRight[0] - obj.bottomRight[0]
  if (circum) return 2 * a + 2 * b
  else return a * b
}

export function surfaceSquare (obj: Coordinates, circum: boolean) {
  let a: number = obj.bottomRight[1] - obj.bottomLeft[1]
  if (circum) return 4 * a
  else return a ** 2
}
