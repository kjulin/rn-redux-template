import Reactotron, { trackGlobalErrors } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

if(__DEV__) {
  Reactotron
    .configure()
    .use(reactotronRedux())
    .use(trackGlobalErrors({
      veto: frame => frame.fileName.indexOf('/node_modules/') >= 0
    }))
    .connect()

  Reactotron.clear()
}

