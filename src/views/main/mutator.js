
import {ACTIONS as TIME_ACTIONS} from 'core/actions/time'
import {ACTIONS} from './actions'

import {store} from 'signals/main'

const mutator = (state, event) => {
  if (event.type === ACTIONS.RELAX) {
    const {health, maxHealth} = state.grappler

    if (health < maxHealth) {
      let amt = Math.min(Math.random() * 5 | 0, maxHealth - health)
      state.grappler.health += amt
    }

    state.talk.current = 0
    state.talk.text = [
      'It\'s good to have a day off'
    ]

    // @TODO the set immediate hack isn’t great but needs fixing in the signal
    setTimeout(() => {
      store.emit({
        type: TIME_ACTIONS.ADVANCE
      })
    }, 0)

    return state
  }

  return state
}

export default mutator
