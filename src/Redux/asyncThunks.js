
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,

} from "firebase/auth";
import { Auth } from "../config/firebase/firebase";
import { setUser } from "./slice/AuthSlice";

export const signUp = (email, password)  => {
    createUserWithEmailAndPassword(Auth, email, password)
      // .then(user => dispatch(setUser(user)))
  };

  export const login = (email, password) => dispatch => {
    signInWithEmailAndPassword(Auth, email, password)
      .then(user => dispatch(setUser(user)))  
  };
  
  export const logout = () => dispatch => {
    signOut(Auth)
      .then(() => dispatch(setUser(null)))
  };

  