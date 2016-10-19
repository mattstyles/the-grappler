
import {store} from 'signals/main'

export const ACTIONS = {
  ADVANCE: 'time:advance'
}

export const advanceTime = event => {
  store.emit({
    type: ACTIONS.ADVANCE
  })
}
