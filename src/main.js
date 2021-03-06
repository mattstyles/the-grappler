
import {render} from 'inferno-dom'

import {store} from 'signals/main'
import {Navigator} from 'core/navigator/navigator'

import MainView from 'views/main/main'
import LoadView from 'views/load/load'

import {create} from 'core/service/grappler'

// import mutators
import {mutator as timeMutator} from 'core/mutators/time'
store.register(timeMutator)

const App = ({state}) => (
  <Navigator state={state}>
    <MainView route='main' defaultRoute state={state} />
    <LoadView route='load' />
  </Navigator>
)

let main = document.querySelector('.js-main')

store.observe(state => {
  render(
    <App state={state} />,
    main
  )

  if (process.env.DEBUG) {
    window.state = state
  }
})

if (process.env.DEBUG) {
  window.store = store
  window.create = create
}
