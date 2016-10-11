
import {Signal} from 'raid'

import {initial as nav} from 'core/navigator/model'

var initialState = Object.assign({}, ...[
  nav,
  {app: {
    cash: 47
  }},
  {grappler: {
    u: 0,
    v: 0
  }},
  {status: {
    isHidden: false
  }}
])

if (process.env.DEBUG) {
  console.log('initial state:', initialState)
}

export const store = new Signal(initialState)
