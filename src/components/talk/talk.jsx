
const TalkPanel = ({talk}) => {
  return (
    <div className='TalkPanel'>
      <p>{talk.text[talk.current]}</p>
    </div>
  )
}

export default TalkPanel
