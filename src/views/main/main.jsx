
import classnames from 'classnames'

import {View} from 'components/view/view'
import Info from 'components/info/info'
import Statusbar from 'components/statusbar/statusbar'
import Button from 'components/button/button'
import Options from 'components/options/options'
import TalkPanel from 'components/talk/talk'

import {
  actionRelax,
  actionPractise,
  actionTrain,
  actionPublicity,
  toBout
} from './actions'

const MainView = ({state}) => {
  const {grappler, talk} = state
  const {day} = state.app

  let continueClasses = classnames({
    'Icon-arrow--right': true,
    'Icon--arrowRightBounce': day >= 5
  })

  return (
    <View main>
      <Statusbar state={state} />
      <div className='Content'>
        <Info grappler={grappler} />
        <TalkPanel talk={talk} />
      </div>
      <Options>
        <Button
          classes={{'Btn--isDisabled': day >= 5}}
          onClick={actionRelax}
        >Rest</Button>
        <Button
          classes={{'Btn--isDisabled': day >= 5}}
          onClick={actionPractise}
        >Practise</Button>
        <Button
          classes={{'Btn--isDisabled': day >= 5}}
          onClick={actionTrain}
        >Work Out</Button>
        <Button
          classes={{'Btn--isDisabled': day >= 5}}
          onClick={actionPublicity}
        >Publicity</Button>
        <Button
          icon='ARROW'
          iconClasses={continueClasses}
          classes='Btn--isContinue'
          onClick={toBout}
        >Event</Button>
      </Options>
    </View>
  )
}

export default MainView
