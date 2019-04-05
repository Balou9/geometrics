interface TwoPoints {
  a: [number, number];
  b: [number, number];
}

export function twoPointDistance(obj: TwoPoints) : number {
  const a = Math.pow(obj.a[0] - obj.b[0], 2)
  const b = Math.pow(obj.a[1] - obj.b[1], 2)
  return Math.sqrt(a + b)
}
