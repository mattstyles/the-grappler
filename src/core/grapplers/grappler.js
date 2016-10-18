
import {random} from 'lodash/fp'

const applyTexture = base => {
  return Object.assign(base, {
    u: random(0, 20),
    v: random(0, 10)
  })
}

const applyBase = base => {
  let health = 10 + (random(10, 25) + random(10, 25))
  return Object.assign(base, {
    fans: random(0, 10),
    health: health,
    maxHealth: maxHealth,
    stamina: random(0, 6) + random(0, 6)
  })
}

export const create = (tier = 1) => {
  let health = 25 + (random(0, 20) * tier)
  return {
    u: 0,
    v: 0,
    fans: random(0, 10) * tier,
    health: health,
    maxHealth: health,
    skill: 1 + (random(0, 5) * tier),
    agility: 15,
    strength: 7,
    weight: 245,
    charisma: 23,
    name: 'Macho Man',
    finisher: 'Elbow Drop',
    from: 'Alice Springs'
  }
}
