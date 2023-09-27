import { takeLatest, put, call, select } from 'redux-saga/effects';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser, setCurrentUser } from './slice/AuthSlice'; // Import setUser and setCurrentUser
import { Auth } from '../config/firebase/firebase';
import { storageSession } from './store/StorageSession';
import { db } from '../config/firebase/firebase';
import { getDoc, doc, setDoc } from 'firebase/firestore';

function* syncUserWithAuth(action) {
  try {
    const user = yield call(onAuthStateChanged, Auth);

    if (user) {
      yield put(setUser(user));
      const storedUserInfo = storageSession.getItem("userInfo");
      if (!storedUserInfo) {
        // Fetch user info from Firestore and store it in state and session storage
        const userDocRef = doc(db, `users/${user.uid}`);
        const docSnapshot = yield call(getDoc, userDocRef);
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          yield put(setCurrentUser(userData));
          storageSession.setItem("userInfo", userData);
        }
      }
    } else {
      // Clear user info if not authenticated
      yield put(setUser(null));
      yield put(setCurrentUser({})); // You may need to specify the initial user data here
      storageSession.removeItem("userInfo");
    }
  } catch (error) {
    console.error('Error syncing user with auth:', error);
  }
}

export function* updateUserInfo(newUserInfo) {
  try {
    const userState = yield select((state) => state.auth.user);
    if (!userState) {
      return; // Not logged in
    }

    // Update user info in Firestore
    const userDocRef = doc(db, `users/${userState.uid}`);
    yield call(setDoc, userDocRef, newUserInfo, { merge: true });

    // Update user info in state and session storage
    yield put(setCurrentUser(newUserInfo));
    storageSession.setItem("userInfo", newUserInfo);
  } catch (error) {
    console.error('Error updating user info:', error);
  }
}

function* authSaga() {
  yield takeLatest('APP_INIT', syncUserWithAuth);
}

export default authSaga;
