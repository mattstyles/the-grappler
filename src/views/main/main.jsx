
import {View} from 'components/view/view'
import Grappler from 'components/grappler/grappler'

import {store} from 'signals/main'
store.register((state, event) => {
  if (event.type === 'wrassler') {
    state.grappler = {
      u: Math.random() * 20 | 0,
      v: Math.random() * 10 | 0
    }
  }

  return state
})

const MainView = ({state}) => {
  const {grappler} = state
  return (
    <View main>
      <h1 onClick={e => {
        store.emit({type: 'wrassler'})
      }}>Main</h1>
      <Grappler u={grappler.u} v={grappler.v} />
    </View>
  )
}

export default MainView
