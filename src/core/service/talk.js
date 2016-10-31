
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

const strengthPoor = [
  'I felt weak and ineffective',
  'Training didn\'t go very well',
  'The weights were too heavy today'
]
const strengthGood = [
  'I feel good after that',
  'Getting stronger all the time',
  'That session was great'
]
const strengthGreat = [
  'I feel like I could wrestle a bear!',
  'Almost as strong as the Hulk',
  'I was a beast in the gym today'
]
const agilityPoor = [
  'I felt clumsy and heavy',
  'Training didn\'t go very well',
  'I fell over a lot'
]
const agilityGood = [
  'Gym time went well',
  'Getting quicker all the time',
  'That session was great'
]
const agilityGreat = [
  'I was like lightning today',
  'Almost as quick as a cheetah',
  'My footwork is the best'
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

/**
 * Training responses
 */
export const getStrengthPoor = state => {
  return strengthPoor[random(0, strengthPoor.length - 1)]
}
export const getStrengthGood = state => {
  return strengthGood[random(0, strengthGood.length - 1)]
}
export const getStrengthGreat = state => {
  return strengthGreat[random(0, strengthGreat.length - 1)]
}
export const getAgilityPoor = state => {
  return agilityPoor[random(0, agilityPoor.length - 1)]
}
export const getAgilityGood = state => {
  return agilityGood[random(0, agilityGood.length - 1)]
}
export const getAgilityGreat = state => {
  return agilityGreat[random(0, agilityGreat.length - 1)]
}
