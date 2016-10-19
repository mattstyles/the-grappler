
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
    ? relaxAmount[random(relaxAmount.length - 1)(0)]
    : relaxNull[random(relaxNull.length - 1)(0)]
}
