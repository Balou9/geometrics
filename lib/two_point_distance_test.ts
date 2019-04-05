import { runTests, test } from "https://deno.land/std/testing/mod.ts"
import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
import { twoPointDistance } from "./two_point_distance.ts"

test(function calcTwoPointDistance(): void {
  const coord = {a: [93,53], b: [22,46]};
  const expected = twoPointDistance(coord);
  assertEquals(twoPointDistance(coord), expected);
})

runTests()
