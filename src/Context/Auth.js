// UserAuthContextProvider.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider, 
  FacebookAuthProvider,
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


   const GoogleSignin = async () =>{
    const SignInWithPopop = await new GoogleAuthProvider()
    dispatch(setUser(SignInWithPopop.user));
    return signInWithPopup(Auth, SignInWithPopop)

   }
const FacebookSignin = async ()=>{
  const FacebookCreidentials = await new FacebookAuthProvider()
  dispatch(setUser(FacebookCreidentials.user))
  return signInWithPopup(Auth, FacebookCreidentials)
}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      dispatch(setUser(currentUser));
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <createUserAuthcontext.Provider value={{ signUp, logIn,  logOut,  updateProfile,GoogleSignin,FacebookSignin }}>
            {children}
        </createUserAuthcontext.Provider>
  )


};

export const useAuthContext = () => {
 return useContext(createUserAuthcontext)
}