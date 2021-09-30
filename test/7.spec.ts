import "mocha";
import { expect } from "chai";

import { calculatePrice, applyVAT, applyShippingCosts } from "../src/7";

describe("Task 7", () => {
  describe("applyVAT", () => {
    const fixture: [number, number][] = [[10, 11.9]];

    fixture.forEach(([price, expected]) => {
      it(`${price} should equal ${expected}`, () => {
        expect(applyVAT).to.be.a("function");
        expect(Math.abs(applyVAT(price) - expected)).to.be.lessThan(0.000001);
      });
    });
  });

  describe("applyShippingCosts", () => {
    const fixture: [number, number][] = [[10, 15]];

    fixture.forEach(([price, expected]) => {
      it(`${price} should equal ${expected}`, () => {
        expect(applyShippingCosts).to.be.a("function");
        expect(applyShippingCosts(price)).to.equal(expected);
      });
    });
  });

  describe("calculatePrice", () => {
    const fixture: [number, number][] = [
      [50, 64.5],
      [10, 16.9],
      [2, 7.38],
    ];

    fixture.forEach(([price, expected]) => {
      it(`${price} should equal ${expected}`, () => {
        expect(calculatePrice).to.be.a("function");
        // @ts-ignore
        expect(calculatePrice(price)).to.equal(expected);
      });
    });
  });
});
