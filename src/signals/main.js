
import {Signal} from 'raid'

import {initial as nav} from 'core/navigator/model'
import {create as createGrappler} from 'core/service/grappler'

var initialState = Object.assign({}, ...[
  nav,
  {app: {
    cash: 47,
    week: 1,
    day: 1
  }},
  {grappler: Object.assign(createGrappler(), {
    fans: 0,
    health: 100
  })},
  {status: {
    isHidden: false
  }},
  {talk: {
    text: [
      'What do we do next, boss?',
      'The next bout is against The Wanderer, it’ll be rough',
      'That last bout was the bomb! The crowd went wild!'
    ],
    current: 0
  }},
  {bout: {
    opponent: null
  }}
])

if (process.env.DEBUG) {
  console.log('initial state:', initialState)
}

export const store = new Signal(initialState)
