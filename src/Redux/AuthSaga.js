import { takeLatest, put, call } from 'redux-saga/effects';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from './slice/AuthSlice';
import { Auth } from '../config/firebase/firebase';
function* syncUserWithAuth(action) {
    const unsubscribe = onAuthStateChanged(
        Auth, 
      (user) => put(setUser(user))
    );
    
    yield call(unsubscribe); 
  }
  
  function* authSaga() {
    yield takeLatest('APP_INIT', syncUserWithAuth);
  }
  
  export default authSaga;