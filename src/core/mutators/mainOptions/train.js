
import random from 'lodash/fp/random'
import {advanceTime} from 'core/actions/time'
import {
  getPrompt,
  getStrengthPoor,
  getStrengthGood,
  getStrengthGreat,
  getAgilityPoor,
  getAgilityGood,
  getAgilityGreat
} from 'core/service/talk'

export const mutTrain = state => {
  let type = random(0, 6)
  let amt = random(1, 3) * (type % 3)
  let attr = [
    'strength',
    'agility'
  ][type / 3 | 0]

  state.grappler[attr] += amt

  state.talk.current = 0

  let responses = [
    getStrengthPoor,
    getStrengthGood,
    getStrengthGreat,
    getAgilityPoor,
    getAgilityGood,
    getAgilityGreat
  ]

  state.talk.text = [
    responses[type](),
    getPrompt()
  ]

  setTimeout(advanceTime, 0)
  return state
}
