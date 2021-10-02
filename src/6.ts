/**
 * Returns true if x is a digit
 */
export function isDigit(x: number): boolean {
  return x >= 0 && x < 10;
}

/**
 * Returns all digits of an array
 * Use isDigit() & Array.filter()
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
export function getDigits(arr: number[]): number[] {
  return arr.filter(isDigit);
}
