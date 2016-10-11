
import {View} from 'components/view/view'
import {navigate} from 'core/navigator/actions'

const LoadView = props => {
  return (
    <View main>
      <h1>Loading...</h1>
      <button onClick={() => navigate('main')}>Click me</button>
    </View>
  )
}

export default LoadView
