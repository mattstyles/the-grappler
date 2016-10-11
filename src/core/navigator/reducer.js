
import {ACTIONS as NAV_ACTIONS} from './actions'

export const reducer = (state, event) => {
  if (event.type === NAV_ACTIONS.NAVIGATE) {
    state.nav.route = event.payload.route
  }

  return state
}
