import { takeLatest, put, call } from 'redux-saga/effects';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from './slice/AuthSlice';
import { Auth } from '../config/firebase/firebase';

function* syncUserWithAuth(action) {
    const user = yield call(onAuthStateChanged, Auth);
    yield put(setUser(user));
}

function* authSaga() {
    yield takeLatest('APP_INIT', syncUserWithAuth);
}

export default authSaga;