// https://en.wikipedia.org/wiki/Value-added_tax
const VAT = 1.19;
const SHIPPING_COST = 5;

export function applyVAT(x: number): number {
  return -1;
}

export function applyShippingCosts(x: number): number {
  return -1;
}

/**
 * Combines two functions into a new function
 * https://en.wikipedia.org/wiki/Function_composition_(computer_science)
 */
export function compose<T>(f: (x: T) => T, g: (x: T) => T) {
  // TODO:implement
  return undefined;
}

export const calculatePrice = compose(applyVAT, applyShippingCosts);
