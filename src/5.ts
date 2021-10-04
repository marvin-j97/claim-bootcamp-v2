/**
 * Returns an array of the negatives of the original array
 * [1] -> [-1]
 * Use Array.map()
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export function allNegatives(arr: number[]): number[] {
  return arr.map((x) => -x);
}
