
import Grappler from 'components/grappler/grappler'

// info panel
const Info = ({grappler}) => {
  return (
    <div className='InfoPanel'>
      <Grappler u={grappler.u} v={grappler.v} />
      <div className='Info'>
        <h2>{grappler.name}</h2>
        <h3>{grappler.finisher}</h3>
        <div>Fans: {grappler.fans}</div>
      </div>
    </div>
  )
}

export default Info
