
import classnames from 'classnames'

const Statusbar = ({state}) => {
  const {status, app} = state

  let classes = classnames({
    'Status': true,
    'u-hide': status.isHidden
  })

  return (
    <div className='Status-container'>
      <div className={classes}>
        <span>Day {app.day} Week {app.week}</span>
        <span className='u-pullRight'>Cash ${app.cash}</span>
      </div>
    </div>
  )
}

export default Statusbar
