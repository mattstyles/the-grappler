
import {store} from 'signals/main'
import {ACTIONS as TIME_ACTIONS} from 'core/actions/time'

/**
 * Actions
 */
export const ACTIONS = {
  'RELAX': 'action:relax',
  'PRACTISE': 'action:practise',
  'TRAIN': 'action:train',
  'PUBLICITY': 'action:publicity'
}

/**
 * Action helpers
 */
export const advanceTime = event => {
  store.emit({
    type: TIME_ACTIONS.ADVANCE
  })
}

export const actionRelax = event => {
  store.emit({
    type: ACTIONS.RELAX
  })
}

export const actionPractise = event => {
  store.emit({
    type: ACTIONS.PRACTISE
  })
}

export const actionTrain = event => {
  store.emit({
    type: ACTIONS.TRAIN
  })
}

export const actionPublicity = event => {
  store.emit({
    type: ACTIONS.PUBLICITY
  })
}

/**
 * Consequence / State mutation
 */
const mutator = (state, event) => {
  if (event.type === ACTIONS.RELAX) {
    const {health, maxHealth} = state.grappler

    if (health < maxHealth) {
      let amt = Math.min(Math.random() * 5 | 0, maxHealth - health)
      state.grappler.health += amt
    }

    state.talk.current = 0
    state.talk.text = [
      'It\'s good to have a day off',
      'What next chief?'
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

store.register(mutator)
