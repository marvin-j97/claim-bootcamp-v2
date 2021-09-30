import "mocha";
import { expect } from "chai";

import { TemperatureControl, getTemperatureAction } from "../src/3";

const fixture: [number, number, TemperatureControl][] = [
  [20, 20.5, TemperatureControl.Heat],
  [20.5, 20, TemperatureControl.Cool],
  [24, 20, TemperatureControl.Cool],
  [20, 27, TemperatureControl.Heat],
  [-5, 20, TemperatureControl.Heat],
  [35, 20, TemperatureControl.Cool],
  [20.49, 20, TemperatureControl.Idle],
  [20, 20.49, TemperatureControl.Idle],
  [25, 25.1, TemperatureControl.Idle],
  [30.5, 30.5, TemperatureControl.Idle],
];

const actionName: Record<TemperatureControl, string> = {
  [TemperatureControl.Idle]: "Idle",
  [TemperatureControl.Heat]: "Heat up",
  [TemperatureControl.Cool]: "Cool off",
};

describe("Task 3", () => {
  fixture.forEach(([current, target, expected]) => {
    it(`${current.toFixed(1)}° -> ${target.toFixed(1)}°: ${actionName[expected]}`, () => {
      expect(getTemperatureAction(current, target)).to.equal(expected);
    });
  });
});
