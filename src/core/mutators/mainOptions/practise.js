
import {advanceTime} from 'core/actions/time'
import {
  getPrompt,
  getPractisePoor,
  getPractiseGood,
  getPractiseGreat
} from 'core/service/talk'

export const mutPractise = state => {
  let amt = Math.random() * 3 | 0

  state.grappler.skill += amt

  state.talk.current = 0

  let responses = [
    getPractisePoor,
    getPractiseGood,
    getPractiseGreat
  ]

  state.talk.text = [
    responses[amt](),
    getPrompt()
  ]

  setTimeout(advanceTime, 0)
  return state
}
