/*!
 * is-32 <https://github.com/nivrith/is-32>
 *
 * Copyright (c) Nivrith
 * Licensed under the MIT License.
 */
import {isN} from 'is-n';

export const max_safe_32_bit_integer = 2147483647;
export const min_safe_32_bit_integer = -2147483648;

export const is32 = (n : number) => {
  if (!isN(n)) throw new Error(`Type Error: expected number got ${typeof n}`)
  return n <= max_safe_32_bit_integer && n >= min_safe_32_bit_integer
}
