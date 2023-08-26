import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import UserSlice from '../slice/UserSlice';
import AuthSlice from '../slice/AuthSlice';
import authSaga from '../AuthSaga';

// Define your session storage keys
const USER_SESSION_KEY = 'user';
// const AUTH_SESSION_KEY = 'auth';

// Combine reducers
const rootReducer = combineReducers({
  user: UserSlice,
  auth: AuthSlice,
  // ...other reducers
});

// Load initial state from sessionStorage
const loadState = (key) => {
  try {
    const serializedState = sessionStorage.getItem(key);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

const userInitialState = loadState(USER_SESSION_KEY);
// const authInitialState = loadState(AUTH_SESSION_KEY);

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Apply middleware and create the store
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer, {
  user: userInitialState,
  // auth: authInitialState,
});

// Subscribe to state changes and save to sessionStorage
store.subscribe(() => {
  const { user, auth } = store.getState();
  sessionStorage.setItem(USER_SESSION_KEY, JSON.stringify(user));
  // sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(auth));
});

// Run sagas
sagaMiddleware.run(authSaga);

export default store;
