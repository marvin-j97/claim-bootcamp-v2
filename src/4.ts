/**
 * Returns the highest element of an array
 * Use Array.reduce()
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */
export function getMax(arr: number[]): number {
  return arr.reduce((max, x) => Math.max(x, max));
}

export function reduce<T>(arr: T[], reducer: (accumulator: T, value: T) => T) {
  let result!: T;
  for (const value of arr) {
    result = reducer(result, value);
  }
  return result;
}
