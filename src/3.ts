/**
 * Simulates the actions a HVAC unit can do
 * https://en.wikipedia.org/wiki/Heating,_ventilation,_and_air_conditioning
 */
export enum TemperatureAction {
  Idle,
  Heat,
  Cool,
}

/**
 * Having no threshold would result erratic behaviour if the current temperature
 * is very close to the target temperature
 */
const DEFAULT_IDLE_THRESHOLD = 0.5;

/**
 * Decides whether to cool or heat a room, or just to idle, based on the current
 * room temperature and target temperature
 *
 * If the temperature difference is smaller than the idle threshold, it should idle
 */
export function getTemperatureAction(
  current: number,
  target: number,
  idleThreshold = DEFAULT_IDLE_THRESHOLD,
): TemperatureAction {
  // TODO: implement
  return TemperatureAction.Idle;
}
