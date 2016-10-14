
import {store} from 'signals/main'
import {ACTIONS as TIME_ACTIONS} from 'core/actions/time'

export const ACTIONS = {
  'RELAX': 'action:relax'
}

export const advanceTime = event => {
  store.emit({
    type: TIME_ACTIONS.ADVANCE
  })
}

export const actionRelax = event => {
  store.emit({
    type: ACTIONS.RELAX
  })
}
