const EPSILON = 0.00000001;
const h = EPSILON;

/**
 * Returns the derivative of a function
 * https://en.wikipedia.org/wiki/Derivative
 * http://www.malinc.se/math/calculus/diffatpointen.php
 * https://sites.google.com/a/case.edu/differentiation/_/rsrc/1364892409693/difference-quotient/dq.png
 *
 * NOTE: The limit should not be implemented and is given by h = EPSILON
 */
export function derivative(f: (x: number) => number) {
  return function (x: number) {
    const dy = f(x + h) - f(x);
    return dy / h;
  };
}
