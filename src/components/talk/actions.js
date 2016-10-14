
import {store} from 'signals/main'

export const ACTIONS = {
  'NEXT': 'talk:next'
}

store.register((state, event) => {
  if (event.type === ACTIONS.NEXT) {
    const {current, text} = state.talk
    if (current === text.length - 1) {
      return state
    }

    state.talk.current++
    return state
  }

  return state
})

export const next = event => {
  console.log('go next')
  store.emit({type: ACTIONS.NEXT})
}
