
import {store} from 'signals/main'

import {mutRelax} from 'core/mutators/mainOptions/relax'
import {mutPractise} from 'core/mutators/mainOptions/practise'
import {mutTrain} from 'core/mutators/mainOptions/train'
import {mutPublicity} from 'core/mutators/mainOptions/publicity'

/**
 * Actions
 */
export const ACTIONS = {
  'RELAX': 'action:relax',
  'PRACTISE': 'action:practise',
  'TRAIN': 'action:train',
  'PUBLICITY': 'action:publicity',
  'BOUT': 'action:bout'
}

/**
 * Action helpers
 */
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

export const toBout = event => {
  store.emit({
    type: ACTIONS.BOUT
  })
}

/**
 * Consequence / State mutation
 */
const mutator = (state, event) => {
  if (event.type === ACTIONS.RELAX) {
    return mutRelax(state)
  }

  if (event.type === ACTIONS.PRACTISE) {
    return mutPractise(state)
  }

  if (event.type === ACTIONS.TRAIN) {
    return mutTrain(state)
  }

  if (event.type === ACTIONS.PUBLICITY) {
    return mutPublicity(state)
  }

  if (event.type === ACTIONS.BOUT) {
    state.app.day += 1

    if (state.app.day === 6) {
      state.app.day = 1
      state.app.week += 1
    }
    return state
  }

  return state
}

store.register(mutator)
