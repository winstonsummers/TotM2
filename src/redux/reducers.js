import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { appReducer } from './dux/App';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app: appReducer(),
  // rest of your reducers
});

export default createRootReducer;