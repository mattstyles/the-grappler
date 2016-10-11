
import {store} from 'signals/main'
import {mutator} from './mutator'
store.register(mutator)

const getChild = (children, route) => {
  let View = children.find(child => {
    return child.attrs.route === route
  })

  if (View) {
    return View
  }

  View = children.find(child => {
    return child.attrs.defaultRoute
  })

  if (View) {
    return View
  }

  return <span>Route not found</span>
}

export const Navigator = ({state, children}) => {
  let {route} = state.nav
  let View = getChild(children, route)

  if (process.env.DEBUG) {
    console.log('Rendering route', `<${View.attrs.route || route}>`)
  }

  return View
}
