import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
// import { appReducer } from './dux/app';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  // app: appReducer(),
  // add this^^^^^^ back in when it does something
});

export default createRootReducer;