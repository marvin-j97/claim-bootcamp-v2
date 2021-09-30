import "mocha";
import { expect } from "chai";

import { add } from "../src/1";

const fixture: [number, number, number][] = [
  [0, 0, 0],
  [4, 0, 4],
  [0, -5, -5],
  [6, 14, 20],
  [-80, 5, -75],
];

describe("Task 1", () => {
  fixture.forEach(([a, b, expected]) => {
    it(`${a} + ${b} should equal ${expected}`, () => {
      expect(add(a, b)).to.equal(expected);
    });
  });
});
