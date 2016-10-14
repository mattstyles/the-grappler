
// @TODO remove, test
import {store} from 'signals/main'
store.register((state, event) => {
  if (event.type === 'wrassler') {
    Object.assign(state.grappler, {
      u: Math.random() * 20 | 0,
      v: Math.random() * 10 | 0
    })
  }

  return state
})

const Grappler = ({u, v}) => {
  let style = {
    backgroundPositionX: 0 - ((u || 0) * 8),
    backgroundPositionY: 0 - ((v || 0) * 16)
  }
  return (
    <div className='Grappler-container'>
      <div
        className='Grappler'
        style={style}
        onClick={e => {
          e.preventDefault()
          store.emit({type: 'wrassler'})
        }}
      ></div>
    </div>
  )
}

export default Grappler
