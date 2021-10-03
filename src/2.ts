/**
 * https://en.wikipedia.org/wiki/Rectifier_(neural_networks)#Variants
 * ReLU = Rectified Linear Unit
 *
 * Rectified linear units find applications in computer vision and speech recognition
 * using deep neural nets and computational neuroscience.
 */

/**
 * Parametric ReLU
 */
export function paraRelu(x: number, a = 0.01): number {
  if (x < 0) {
    return a * x;
  }
  return x;
}

/**
 * ReLU
 */
export function relu(x: number): number {
  return paraRelu(x, 0);
}
