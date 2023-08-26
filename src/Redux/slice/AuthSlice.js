import { createSlice } from "@reduxjs/toolkit";

const current = {
    user: null,
    email: null,
    password: null,
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
      setEmaill: (state, action) => {
        state.email = action.payload;
      },
      setPassword: (state, action) => {
        state.password = action.payload;
      }
   }
})

export const { setUser, setEmaill, setPassword } = AuthSlice.actions;

export default AuthSlice.reducer;
