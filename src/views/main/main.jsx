
import {View} from 'components/view/view'
import Grappler from 'components/grappler/grappler'
import Statusbar from 'components/statusbar/statusbar'
import Button from 'components/button/button'
import Options from 'components/options/options'

import {advanceTime} from './actions'

const MainView = ({state}) => {
  const {grappler} = state
  return (
    <View main>
      <Statusbar state={state} />
      <div className='Content'>
        <Grappler u={grappler.u} v={grappler.v} />
      </div>
      <Options>
        <Button>Train</Button>
        <Button
          icon='ARROW'
          iconClasses='u-pullRight Icon-arrow--right'
          classes='Btn--isContinue'
          onClick={advanceTime}
        >Press me</Button>
      </Options>
    </View>
  )
}

export default MainView
