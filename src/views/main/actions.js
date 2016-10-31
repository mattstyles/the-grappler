
import {store} from 'signals/main'
import {advanceTime} from 'core/actions/time'

import {mutRelax} from 'core/mutators/mainOptions/relax'
import {mutPractise} from 'core/mutators/mainOptions/practise'
import {mutTrain} from 'core/mutators/mainOptions/train'

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

  // if (event.type === ACTIONS.TRAIN) {
  //   let amt = Math.random() * 3 | 0
  //   let type = Math.random() * 2 | 0
  //   let attr = ['strength', 'agility'][type]
  //
  //   state.grappler[attr] += amt
  //
  //   let strRes = [
  //     'That session was too tough',
  //     'I feel a little stronger',
  //     'Man I love the weights'
  //   ]
  //   let agiRes = [
  //     'I fell over a lot',
  //     'Speed, speed, speed',
  //     'Right on! I felt good on the top rope'
  //   ]
  //
  //   let res = type === 0
  //     ? strRes[amt]
  //     : agiRes[amt]
  //
  //   state.talk.current = 0
  //   state.talk.text = [
  //     res,
  //     'Next job boss'
  //   ]
  //
  //   setTimeout(advanceTime, 0)
  //   return state
  // }

  if (event.type === ACTIONS.PUBLICITY) {
    let fanAmt = Math.random() * 5 | 0
    let charismaAmt = Math.random() < 0.2
      ? 1
      : 0

    state.grappler.charisma += charismaAmt
    state.grappler.fans += fanAmt

    state.talk.current = 0
    state.talk.text = [
      'Boo yah! I made the front pages!',
      'What do we do now, Captain?'
    ]

    setTimeout(advanceTime, 0)
    return state
  }

  if (event.type === ACTIONS.BOUT) {
    return state
  }

  return state
}

store.register(mutator)
