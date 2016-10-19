
import random from 'lodash/fp/random'
import flow from 'lodash/fp/flow'
import {d} from 'core/utils/number'

const applyTexture = base => {
  return Object.assign(base, {
    u: random(0, 20),
    v: random(0, 10)
  })
}

const applyBase = base => {
  let health = 10 + (random(10, 25) + random(10, 25))
  return Object.assign(base, {
    fans: d(2),
    health: health,
    maxHealth: health,
    stamina: d(2),
    agility: d(2),
    strength: d(2),
    charisma: d(2),
    skill: d(),
    weight: 220
  })
}

const applyDetails = base => {
  return Object.assign(base, {
    name: 'Elias Terblanche',
    from: 'Parts Unknown',
    finisher: 'Body Slam'
  })
}

export const create = (tier = 1) => {
  return flow(
    applyBase,
    applyTexture,
    applyDetails
  )({})
}
