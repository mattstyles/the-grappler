
import {View} from 'components/view/view'
import Grappler from 'components/grappler/grappler'
import Statusbar from 'components/statusbar/statusbar'

import {store} from 'signals/main'
import {ACTIONS as TIME_ACTIONS} from 'core/actions/time'

console.log('actions', TIME_ACTIONS)

const MainView = ({state}) => {
  const {grappler} = state
  return (
    <View main>
      <Statusbar state={state} />
      <h1 onClick={e => {
        store.emit({
          type: TIME_ACTIONS.ADVANCE
        })
      }}>Main</h1>
      <Grappler u={grappler.u} v={grappler.v} />
    </View>
  )
}

export default MainView
