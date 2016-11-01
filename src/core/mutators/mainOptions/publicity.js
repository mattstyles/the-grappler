
import {advanceTime} from 'core/actions/time'
import {
  getPrompt,
  getPublicityText
} from 'core/service/talk'

export const mutPublicity = state => {
  let fanAmt = Math.random() * 5 | 0
  let charismaAmt = Math.random() < 0.2
    ? 1
    : 0

  state.grappler.charisma += charismaAmt
  state.grappler.fans += fanAmt
  state.app.cash -= 3

  state.talk.current = 0
  state.talk.text = [
    getPublicityText(),
    getPrompt()
  ]

  setTimeout(advanceTime, 0)
  return state
}
