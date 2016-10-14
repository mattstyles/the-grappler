
import Grappler from 'components/grappler/grappler'

// const pluck = attr => {
//   return struct => {
//     return Object.keys(struct)
//       .reduce((out, key) => {
//         if (!attr.includes(key)) {
//           return out
//         }
//
//         if (typeof out[key] !== 'undefined') {
//           return out
//         }
//
//         out[key] = struct[key]
//         return out
//       }, {})
//   }
// }
//
// const pluckStats = pluck(attrs)

const attrs = [
  'fans',
  'health',
  'skill',
  'charisma'
]

// info panel
const Info = ({grappler}) => {
  const keys = Object.keys(grappler)
  const attributes = attrs
    .filter(attr => keys.includes(attr))
    .map(attr => {
      return (
        <li>
          <span className='Info-Title'>{attr}</span>
          <span className='Info-Attr'>{grappler[attr]}</span>
        </li>
      )
    })

  return (
    <div className='InfoPanel'>
      <Grappler u={grappler.u} v={grappler.v} />
      <div className='Info'>
        <h2>{grappler.name}</h2>
        <h3>{grappler.finisher}</h3>
        <ul className='u-nakedList Info-Attributes'>
          {attributes}
        </ul>
      </div>
    </div>
  )
}

export default Info
