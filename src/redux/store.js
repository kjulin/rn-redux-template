import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import app from './reducers/app';
import dashboard from './reducers/dashboard';
import thunk from 'redux-thunk';
import {readyStatePromise} from './middleware/readyStatePromise';

import Reactotron from 'reactotron-react-native'

const reducer = combineReducers({
  app,
  dashboard,
  // [...]
});

const middleware = applyMiddleware(thunk, readyStatePromise)

let store
if(__DEV__) store = Reactotron.createStore(reducer, compose(middleware));
else store = createStore(reducer, compose(middleware));

export default store;