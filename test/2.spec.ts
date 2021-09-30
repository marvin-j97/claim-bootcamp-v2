import "mocha";
import { expect } from "chai";

import { paraRelu, leakyRelu, relu } from "../src/2";

describe("Task 2", () => {
  describe("paraRelu", () => {
    const fixture: [number, number, number][] = [
      [0, 0, 0],
      [0, 5, 0],
      [0, -5, 0],
      [1, 0, 1],
      [1, 5, 1],
      [1, -5, 1],
      [10, 0, 10],
      [10, 5, 10],
      [10, -5, 10],
      [-1, 0, 0],
      [-5, 0.1, -0.5],
      [-2, 1, -2],
      [-10, -1, 10],
    ];

    fixture.forEach(([x, a, expected]) => {
      it(`paraRelu(${x}, ${a}) should equal ${expected}`, () => {
        expect(paraRelu(x, a)).to.equal(expected);
      });
    });
  });

  describe("ReLU", () => {
    const fixture: [number, number][] = [
      [0, 0],
      [1, 1],
      [-5, 0],
      [-20, 0],
      [-0.5, 0],
      [10, 10],
      [0.01, 0.01],
    ];

    fixture.forEach(([x, expected]) => {
      it(`relu(${x}) should equal ${expected}`, () => {
        expect(relu(x)).to.equal(expected);
      });
    });
  });

  describe("Leaky ReLU", () => {
    const fixture: [number, number][] = [
      [0, 0],
      [1, 1],
      [-5, -0.05],
      [-20, -0.2],
      [-0.5, -0.005],
      [10, 10],
      [0.01, 0.01],
    ];

    fixture.forEach(([x, expected]) => {
      it(`leakyRelu(${x}) should equal ${expected}`, () => {
        expect(leakyRelu(x)).to.equal(expected);
      });
    });
  });
});
