
import {Signal} from 'raid'

import {initial as nav} from 'core/navigator/model'

var initialState = Object.assign({}, ...[
  nav,
  {app: {
    cash: 47,
    week: 1,
    day: 1
  }},
  {grappler: {
    u: 0,
    v: 0,
    fans: 0,
    health: 100,
    skill: 3,
    agility: 15,
    strength: 7,
    weight: 245,
    charisma: 23,
    name: 'Macho Man',
    finisher: 'Elbow Drop',
    from: 'Alice Springs'
  }},
  {status: {
    isHidden: false
  }}
])

if (process.env.DEBUG) {
  console.log('initial state:', initialState)
}

export const store = new Signal(initialState)
