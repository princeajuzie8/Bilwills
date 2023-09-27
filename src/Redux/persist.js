
import { db } from '../config/firebase/firebase';
import store from './store/configureStore';
import UserSlice from './slice/UserSlice';
import { collection } from 'firebase/firestore';

export const fetchUserDataFromFirestore = async (user) => {
  
  try {

    if (user) {
      const userDocRef = collection('users').doc(user.uid); // Assuming 'uid' is the user's unique ID
      const docSnapshot = await userDocRef.get();
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        // Dispatch an action to update the user data in your Redux store
        // For example, UserSlice might have an action like 'updateUserData'
        store.dispatch(UserSlice.updateUserData(userData));
      }
    }
  } catch (error) {
    console.error('Error fetching user data from Firestore:', error);
  }
};
