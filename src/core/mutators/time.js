
import {ACTIONS} from 'core/actions/time'

const advanceTime = state => {
  const {day} = state.app

  if (day < 5) {
    state.app.day++
    return state
  }

  state.app.day = 1
  state.app.week++
  return state
}

export const mutator = (state, event) => {
  if (event.type === ACTIONS.ADVANCE) {
    return advanceTime(state)
  }

  return state
}
