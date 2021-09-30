import "mocha";
import { expect } from "chai";

import { derivative } from "../src/8";

const fixture: [(x: number) => number, number, number][] = [
  [() => 5, 0, 0],
  [() => 5, 1, 0],
  [() => -2, 7, 0],

  [(x) => x, 0, 1],
  [(x) => x, 5, 1],
  [(x) => x, -2, 1],
  [(x) => x, -20, 1],

  [(x) => 2 * x, 0, 2],
  [(x) => 2 * x, -5, 2],
  [(x) => 2 * x, 2, 2],

  [(x) => x * x, 0, 0],
  [(x) => x * x, 1, 2],
  [(x) => x * x, 2, 4],
  [(x) => x * x, 4, 8],
  [(x) => x * x, -4, -8],

  [(x) => x * x * x, 0, 0],
  [(x) => x * x * x, 1, 3],
  [(x) => x * x * x, 4, 48],
  [(x) => x * x * x, -4, 48],

  [Math.sin, 0, 1],
  [Math.sin, 0.5, 0.877583],
  [Math.sin, Math.PI, -1],
];

describe("Task 8", () => {
  fixture.forEach(([f, x, expected]) => {
    it(`Should correctly calculate derivative at x = ${x}: ${expected}`, () => {
      expect(derivative).to.be.a("function");
      const df = derivative(f);
      expect(df).to.be.a("function");
      // @ts-ignore
      expect(Math.abs(df(x) - expected)).to.be.lessThan(0.000001);
    });
  });
});
