import { createSlice } from "@reduxjs/toolkit";

const current = {
    user: "",
    currentuser: null,
  
}

export const AuthSlice = createSlice({
   name: "auth",
   initialState: {
    Authcurrent: current,
},
   reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
    
      setCurrentUser: (state, action) => {
        state.password = action.payload;
      }
   }
})

export const { setUser, setEmaill, setPassword,setCurrentUser } = AuthSlice.actions;

export default AuthSlice.reducer;
