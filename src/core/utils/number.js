
import {random} from 'lodash/fp'

export const uid = () => {
  return (Math.random() * 10000000)
    .toFixed(0)
    .toString(16)
}

export function d (num = 1, type = 6) {
  let args = Array.from(arguments).slice(1)
  return new Array(num)
    .fill(0)
    .map((n, i) => args[i] || type)
    .reduce((t, n) => t + random(1, n), 0)
}
