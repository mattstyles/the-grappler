
import {View} from 'components/view/view'
import Grappler from 'components/grappler/grappler'
import Statusbar from 'components/statusbar/statusbar'
import Button from 'components/button/button'
import Options from 'components/options/options'

import {store} from 'signals/main'
import {ACTIONS as TIME_ACTIONS} from 'core/actions/time'

const MainView = ({state}) => {
  const {grappler} = state
  return (
    <View main>
      <Statusbar state={state} />
      <div className='Content'>
        <h1 onClick={e => {
          store.emit({
            type: TIME_ACTIONS.ADVANCE
          })
        }}>Main</h1>
        <Grappler u={grappler.u} v={grappler.v} />
        <Button
          icon='ARROW'
          iconClasses='u-pullRight Icon-arrow--right Icon--isSmall'
        >Press me</Button>
        <Button>Medium</Button>
        <Button icon='TWITTER' text='tweet' small />
      </div>
      <Options>
        <Button>Train</Button>
        <Button
          icon='ARROW'
          iconClasses='u-pullRight Icon-arrow--right'
          classes='Btn--isContinue'
        >Press me</Button>
      </Options>
    </View>
  )
}

export default MainView
