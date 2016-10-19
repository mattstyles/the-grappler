
import random from 'lodash/fp/random'

const prompts = [
  'What next, boss?',
  'What do we do next, chief?',
  'What shall we do next?',
  'Next job, boss.',
  'What to do today, captain?',
  'What next?',
  'What\'s the plan for today, chief?'
]

const relaxNull = [
  'It\'s good to have a day off',
  'You have a day off too sometime, boss',
  'I\'d rather be training'
]
const relaxAmount = [
  'I feel relaxed',
  'I feel rested',
  'I needed that rest'
]

const practisePoor = [
  'That session didn\'t go very well',
  'You should hire a new coach',
  'Whatever'
]
const practiseGood = [
  'I worked hard on my grappling',
  'I worked on my grappling',
  'That session went well',
  'I feel good after that'
]
const practiseGreat = [
  'That session was the bomb',
  'I wish every session could be so good',
  'Wowsers that was awesome'
]

/**
 * Returns text for an action prompt
 */
const promptRandom = random(prompts.length - 1)
export const getPrompt = state => {
  return prompts[promptRandom(0)]
}

/**
 * Relax action prompt
 */
export const getRelaxText = amount => {
  return amount > 0
    ? relaxAmount[random(0, relaxAmount.length - 1)]
    : relaxNull[random(0, relaxNull.length - 1)]
}

/**
 * Practise responses
 */
export const getPractisePoor = state => {
  return practisePoor[random(0, practisePoor.length - 1)]
}
export const getPractiseGood = state => {
  return practiseGood[random(0, practiseGood.length - 1)]
}
export const getPractiseGreat = state => {
  return practiseGreat[random(0, practiseGreat.length - 1)]
}
