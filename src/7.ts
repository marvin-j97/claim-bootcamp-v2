// https://en.wikipedia.org/wiki/Value-added_tax
const VAT = 1.19;
const SHIPPING_COST = 5;

/**
 * Applies VAT (multiplier)
 */
export function applyVAT(x: number): number {
  // TODO: implement
  return -1;
}

/**
 * Applies shopping cost (addition)
 */
export function applyShippingCosts(x: number): number {
  // TODO: implement
  return -1;
}

/**
 * Combines two functions into a new function
 * https://en.wikipedia.org/wiki/Function_composition_(computer_science)
 */
export function compose<T>(f: (x: T) => T, g: (x: T) => T) {
  // TODO: implement
  return undefined;
}

export const calculatePrice = compose(applyVAT, applyShippingCosts);
