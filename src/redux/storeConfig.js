import { configureStore } from 'redux-starter-kit';
import { appReducer } from '../dux/App';

const store = configureStore({
  reducer: appReducer
})

export default store;