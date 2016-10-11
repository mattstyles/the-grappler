
import {View} from 'components/view/view'
import Grappler from 'components/grappler/grappler'
import Statusbar from 'components/statusbar/statusbar'

const MainView = ({state}) => {
  const {grappler} = state
  return (
    <View main>
      <Statusbar state={state} />
      <h1>Main</h1>
      <Grappler u={grappler.u} v={grappler.v} />
    </View>
  )
}

export default MainView
