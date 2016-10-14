
import {next} from './actions'
import Button from 'components/button/button'

const TalkPanel = ({talk}) => {
  const more = talk.current === talk.text.length - 1
    ? null
    : <Button
      classes={'Btn--isNaked'}
      onPress={next}
    >more</Button>

  return (
    <div className='TalkPanel'>
      <p>{talk.text[talk.current]}</p>
      {more}
    </div>
  )
}

export default TalkPanel
