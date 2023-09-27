import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import UserSlice from '../slice/UserSlice';
import AuthSlice from '../slice/AuthSlice';

// Combine reducers
const rootReducer = combineReducers({
  user: UserSlice,
  auth: AuthSlice,
  // ...other reducers
});

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Apply middleware and create the store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;
