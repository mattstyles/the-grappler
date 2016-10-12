
import {store} from 'signals/main'
import {ACTIONS as TIME_ACTIONS} from 'core/actions/time'

export const advanceTime = event => {
  store.emit({
    type: TIME_ACTIONS.ADVANCE
  })
}
