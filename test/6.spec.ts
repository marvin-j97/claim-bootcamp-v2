import "mocha";
import { expect } from "chai";

import { getDigits, isDigit } from "../src/6";

describe("Task 6", () => {
  describe("isDigit", () => {
    const fixture: [number, boolean][] = [
      [5, true],
      [1, true],
      [0, true],
      [-22, false],
      [10, false],
      [1000, false],
    ];

    fixture.forEach(([x, expected]) => {
      it(`${x} should be${expected ? "" : " not"} a digit`, () => {
        expect(isDigit(x)).to.equal(expected);
      });
    });
  });

  describe("getDigits", () => {
    const fixture: [number[], number[]][] = [
      [
        [1, 5, 9],
        [1, 5, 9],
      ],
      [
        [1, 5, 11],
        [1, 5],
      ],
      [[10, 11, 12], []],
      [[-44, 5, 10], [5]],
    ];

    fixture.forEach(([arr, expected]) => {
      it(`${arr} should be converted to ${expected}`, () => {
        expect(getDigits(arr)).to.deep.equal(expected);
      });
    });
  });
});
