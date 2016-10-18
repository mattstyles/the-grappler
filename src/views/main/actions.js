
import {store} from 'signals/main'
import {ACTIONS as TIME_ACTIONS} from 'core/actions/time'

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
    setTimeout(advanceTime, 0)

    return state
  }

  if (event.type === ACTIONS.PRACTISE) {
    let amt = Math.random() * 3 | 0

    state.grappler.skill += amt

    state.talk.current = 0

    let responses = [
      'The session didn\'t go very well',
      'I worked on my grappling',
      'Wowsers that session was the bomb'
    ]

    state.talk.text = [
      responses[amt],
      'What shall we do next?'
    ]

    setTimeout(advanceTime, 0)
    return state
  }

  if (event.type === ACTIONS.TRAIN) {
    let amt = Math.random() * 3 | 0
    let type = Math.random() * 2 | 0
    let attr = ['strength', 'agility'][type]

    state.grappler[attr] += amt

    let strRes = [
      'That session was too tough',
      'I feel a little stronger',
      'Man I love the weights'
    ]
    let agiRes = [
      'I fell over a lot',
      'Speed, speed, speed',
      'Right on! I felt good on the top rope'
    ]

    let res = type === 0
      ? strRes[amt]
      : agiRes[amt]

    state.talk.current = 0
    state.talk.text = [
      res,
      'Next job boss'
    ]

    setTimeout(advanceTime, 0)
    return state
  }

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
