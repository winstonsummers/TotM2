import { configureStore } from 'redux-starter-kit';
import { appReducer } from './App';

const store = configureStore({
  reducer: appReducer
})

export default store;