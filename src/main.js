
import {render} from 'inferno-dom'

import {store} from 'signals/main'
import {Navigator} from 'core/navigator/navigator'

import MainView from 'views/main/main'
import LoadView from 'views/load/load'

const App = ({state}) => (
  <Navigator state={state}>
    <MainView route='main' defaultRoute state={state} />
    <LoadView route='load' />
  </Navigator>
)

store.observe(state => {
  render(
    <App state={state} />,
    document.querySelector('.js-main')
  )
})

if (process.env.DEBUG) {
  window.store = store
}
