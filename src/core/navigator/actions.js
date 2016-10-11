
import {store} from 'signals/main'

export const ACTIONS = {
  NAVIGATE: 'nav:navigate'
}

export const navigate = route => {
  store.emit({
    type: ACTIONS.NAVIGATE,
    payload: {route}
  })
}
