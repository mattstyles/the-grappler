
import classnames from 'classnames'

import {View} from 'components/view/view'
import Info from 'components/info/info'
import Statusbar from 'components/statusbar/statusbar'
import Button from 'components/button/button'
import Options from 'components/options/options'

import {advanceTime} from './actions'

const MainView = ({state}) => {
  const {grappler} = state

  let continueClasses = classnames({
    'Icon-arrow--right': true,
    'Icon--arrowRightBounce': state.app.day === 5
  })

  return (
    <View main>
      <Statusbar state={state} />
      <div className='Content'>
        <Info grappler={grappler} />
      </div>
      <Options>
        <Button>Relax</Button>
        <Button>Practise</Button>
        <Button>Work Out</Button>
        <Button>Publicity</Button>
        <Button
          icon='ARROW'
          iconClasses={continueClasses}
          classes='Btn--isContinue'
          onClick={advanceTime}
        >Event</Button>
      </Options>
    </View>
  )
}

export default MainView
