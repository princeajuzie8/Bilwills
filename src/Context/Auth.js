// UserAuthContextProvider.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { setUser } from '../Redux/slice/AuthSlice';
import { createContext, useContext } from 'react';
import { Auth } from '../config/firebase/firebase';
import Cookies from 'js-cookie';
const createUserAuthcontext = createContext()
export const UserAuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  const signUp = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(Auth, email, password);
    const AuthToken = await userCredential.user.getIdToken();
    Cookies.set("authtoken", AuthToken, {expires: 7, secure: true})
    dispatch(setUser(userCredential.user));
    return userCredential;
  };

  const logIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(Auth, email, password);
    dispatch(setUser(userCredential.user));
    return userCredential;
  };

  const logOut = async () => {
    await signOut(Auth);
    dispatch(setUser(null));
  };

  // Other functions...

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      dispatch(setUser(currentUser));
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <createUserAuthcontext.Provider value={{ signUp, logIn,  logOut,  updateProfile }}>
            {children}
        </createUserAuthcontext.Provider>
  )


};

export const useAuthContext = () => {
 return useContext(createUserAuthcontext)
}