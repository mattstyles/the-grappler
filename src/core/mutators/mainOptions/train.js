
import random from 'lodash/fp/random'
import {advanceTime} from 'core/actions/time'
import {
  getPrompt,
  getStrengthPoor,
  getStrengthGood,
  getStrengthGreat,
  getAgilityPoor,
  getAgilityGood,
  getAgilityGreat,
  getStaminaPoor,
  getStaminaGood,
  getStaminaGreat
} from 'core/service/talk'

export const mutTrain = state => {
  let traits = [
    'strength',
    'agility',
    'stamina'
  ]
  let type = random(0, 3 * traits.length)
  let amt = random(1, 3) * (type % 3)
  let attr = traits[type / 3 | 0]

  state.grappler[attr] += amt

  state.talk.current = 0

  let responses = [
    getStrengthPoor,
    getStrengthGood,
    getStrengthGreat,
    getAgilityPoor,
    getAgilityGood,
    getAgilityGreat,
    getStaminaPoor,
    getStaminaGood,
    getStaminaGreat
  ]

  state.talk.text = [
    responses[type](),
    getPrompt()
  ]

  setTimeout(advanceTime, 0)
  return state
}
