// UserAuthContextProvider.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail,
  updatePassword,
} from "firebase/auth";
import { collection } from "firebase/firestore";
import { confirmPasswordReset } from "firebase/auth";
import { setUser } from "../Redux/slice/AuthSlice";
import { storageSession } from "../Redux/store/StorageSession";
import { createContext, useContext, useState } from "react";
import { Auth, db } from "../config/firebase/firebase";
import Cookies from "js-cookie";
import { getDoc, setDoc, doc } from "firebase/firestore";
import NoInternet from "../utils/NoInternet";
import GenLoading from "../utils/GenLoading";
const createUserAuthcontext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
  const [userInfo, setUserInfo] = useState("");
  const [globalloading, setgloballoading] = useState(true);
  const [loading, setLoading] = useState(true);

  const time = null;
  const signUp = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      Auth,
      email,
      password
    );
    const AuthToken = await userCredential.user.getIdToken();
    Cookies.set("authtoken", AuthToken, { expires: 7, secure: true });
    setUserInfo(userCredential.user);
    return userCredential;
  };
  const SignIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      Auth,
      email,
      password
    );
    const AuthToken = await userCredential.user.getIdToken();
    Cookies.set("authtoken", AuthToken, { expires: 7, secure: true });
    setUserInfo(userCredential.user);
    return userCredential;
  };

  const logOut = async () => {
    await signOut(Auth);
    setCurrentUser(null);
    setUserInfo("");
    storageSession.removeItem("userInfo");
  };

  const GoogleSignin = async () => {
    const SignInWithPopop = await new GoogleAuthProvider();
  
    setUserInfo(SignInWithPopop.user);
    return signInWithPopup(Auth, SignInWithPopop);
  };
  const FacebookSignin = async () => {
    const FacebookCreidentials = await new FacebookAuthProvider();
    setUserInfo(FacebookCreidentials.user);
    return signInWithPopup(Auth, FacebookCreidentials);
  };
  const ResetPassword = async (email) => {
    await sendPasswordResetEmail(Auth, email);
  };
  const Passwordchange = async (password) => {
    await updatePassword(Auth.currentUser, password);
  };

  const ConfirmPassword = async (oobCode, newPaasword) => {
    await confirmPasswordReset(Auth, oobCode, newPaasword);
  };

  async function doesUserExist(displayName) {
    try {
      const userDocRef = doc(db, 'users', displayName);
      const userDocSnapshot = await getDoc(userDocRef);
      return userDocSnapshot.exists();  
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false;
    }

  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, async (user) => {
      if(navigator.onLine){

        if (user) {
          setCurrentUser(user);
          const userDocRef = doc(db, `users/${user.uid}`);
          const docSnapshot = await getDoc(userDocRef);
          if (docSnapshot.exists()) {
            setgloballoading(false)
            setTimeout(() => {
            
              const userData = docSnapshot.data();
              setUserInfo(userData);
              setLoading(false)
              storageSession.setItem("userInfo", userData);
            }, 1000);
          }
        } else {
          setCurrentUser(null);
          setUserInfo("");
          // storageSession.removeItem("userInfo");
        }
      }
      setgloballoading(false)
    });
    // Return a cleanup function to remove the observer
    return () => {
      unsubscribe();
    };
  }, []);

  const updateUserInfo = async (newUserInfo) => {
    if (!currentUser) {
      return; // Not logged in
    }

    // Update user info in Firestore
    const userDocRef = doc(db, `users/${currentUser.uid}`);
    await setDoc(userDocRef, newUserInfo, { merge: true });

    // Update user info in state and session storage
    setUserInfo(newUserInfo);
    // storageSession.setItem("userInfo", newUserInfo);
  };
  if(globalloading){
    return  <GenLoading />
  }



  return (

    <createUserAuthcontext.Provider
      value={{
        signUp,
        SignIn,
        logOut,
        updateProfile,
        GoogleSignin,
        FacebookSignin,
        ResetPassword,
        ConfirmPassword,
        Passwordchange,
        updateUserInfo,
        userInfo,
        currentUser, 
        loading,
        setLoading,
        time
      }}
    >
      {navigator.onLine ?  children : <NoInternet />}
    </createUserAuthcontext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(createUserAuthcontext);
};
