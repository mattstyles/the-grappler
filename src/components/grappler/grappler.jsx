
const styles = {
  backgroundPositionX: 160,
  backgroundPositionY: 176
}

const Grappler = ({u, v}) => {
  let style = Object.assign({}, styles, {
    backgroundPositionX: 0 - ((u || 0) * 8),
    backgroundPositionY: 0 - ((v || 0) * 16)
  })
  return (
    <div
      className='Grappler'
      style={style}
    >
    </div>
  )
}

export default Grappler
