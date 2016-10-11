
import {Signal} from 'raid'

import {initial as nav} from 'core/navigator/model'

var initialState = Object.assign({}, ...[
  nav,
  {main: {
    foo: 'bar'
  }},
  {grappler: {
    u: 0,
    v: 0
  }}
])

if (process.env.DEBUG) {
  console.log('initial state:', initialState)
}

export const store = new Signal(initialState)