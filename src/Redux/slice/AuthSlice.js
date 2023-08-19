import { createSlice } from "@reduxjs/toolkit";

const initialvalue = {
    user: null,
    email: null,
    password: null,
}

export const AuthSlice = createSlice({
   name: "auth",
   initialState : {
    initialvalue,
   },
   reducers: {
      setUser: (state,action) =>{
        state.initialvalue = action.payload
      },
      setEmaill: (state,action) =>{
        state.initialvalue = action.payload
      },
      setPassword: (state,action) =>{
        state.initialvalue = action.payload
      }
   }
})



export const { setUser, setEmaill, setPassword } = AuthSlice.actions;

export default AuthSlice.reducer;