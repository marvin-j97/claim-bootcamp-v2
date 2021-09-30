import "mocha";
import { expect } from "chai";

import { getMax } from "../src/4";

const fixture: [number[], number][] = [
  [[1, 8, 3, 6, 3, 4, 5, 1], 8],
  [[-20, -19, -18, -2], -2],
  [[0, 0, 0, 0, 0, 0, 0, 1], 1],
  [[5, 0, 0, 0, 0, 0, 0, 0], 5],
];

describe("Task 4", () => {
  fixture.forEach(([arr, expected]) => {
    it(`${expected} should be highest element`, () => {
      expect(getMax(arr)).to.equal(expected);
    });
  });
});
