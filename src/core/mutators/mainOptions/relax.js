
import {advanceTime} from 'core/actions/time'
import {
  getPrompt,
  getRelaxText
} from 'core/service/talk'

export const mutRelax = state => {
  const {health, maxHealth} = state.grappler

  let amt = 0
  if (health < maxHealth) {
    amt = Math.min(Math.random() * 5 | 0, maxHealth - health)
    state.grappler.health += amt
  }

  state.app.cash -= 1

  state.talk.current = 0
  state.talk.text = [
    getRelaxText(amt),
    getPrompt(state)
  ]

  // @TODO the set immediate hack isn’t great but needs fixing in the signal
  setTimeout(advanceTime, 0)

  return state
}
