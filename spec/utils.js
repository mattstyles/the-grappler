
import test from 'tape'

/**
 * Number
 */
import {uid, d} from '../src/core/utils/number'

const getRange = fn => {
  return new Array(1000)
    .fill(0)
    .map(fn)
    .reduce((range, value) => {
      return [
        Math.min(range[0], value),
        Math.max(range[1], value)
      ]
    }, [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER])
}

test('Utilities: Number, Uid', assert => {
  assert.plan(1)
  assert.notEqual(uid(), uid(), 'Uids should be unique')
})

test('Utilities: Number, randoms', assert => {
  assert.plan(4)

  let res = getRange(() => d())
  assert.ok(res[0] > 0, 'Naked dice function should return minimum value of 1')
  assert.ok(res[1] <= 6, 'Naked dice function should return maximum value of 6')

  let res1 = getRange(() => d(4))
  assert.ok(res1[0] >= 4, 'The number of rolls can be specified')

  // There is a very small chance this test will fail
  let res2 = getRange(() => d(1, 100))
  assert.ok(res2[1] > 6, 'The number of sides can be specified')
})
