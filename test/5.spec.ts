import "mocha";
import { expect } from "chai";

import { allNegatives } from "../src/5";

const fixture: [number[], number[]][] = [
  [
    [1, 8, 3, 6, 3, 4, 5, 1],
    [-1, -8, -3, -6, -3, -4, -5, -1],
  ],
  [
    [-20, -19, -18, -2],
    [20, 19, 18, 2],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 1],
    [-0, -0, -0, -0, -0, -0, -0, -1],
  ],
  [
    [-4, 5, 3],
    [4, -5, -3],
  ],
];

describe("Task 5", () => {
  fixture.forEach(([arr, expected]) => {
    it(`${arr} should be converted to ${expected}`, () => {
      expect(allNegatives(arr)).to.deep.equal(expected);
    });
  });
});
