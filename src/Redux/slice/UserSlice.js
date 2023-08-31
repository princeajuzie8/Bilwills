import { createSlice } from "@reduxjs/toolkit";

const initialvalue = {
    displayName: "",
    email: null,
    password: null,
    confirmPassword: null,
    location: null,
    bio: null,
    dob: null,
    photoURL: "https://i.pinimg.com/474x/ed/1f/41/ed1f41959e7e9aa7fb0a18b76c6c2755.jpg",
    id: null,
    phone: "",
}


const  userSlice =  createSlice({
    name: 'user',
    initialState: {
        userdata: initialvalue,
    },
    reducers: {
        // eslint-disable-next-line no-labels
        userCreateWithEmail : (state,action)=>{
            state.userdata= action.payload
            },
        userCreateWithGoogle : (state,action)=>{
            state.userdata= action.payload
            },
        usersLogin : (state,action)=>{
            state.userdata= action.payload
        },
        usersLogout : (state,action)=>{
            state.userdata= action.payload
        }
    }
})

export const { userCreateWithEmail, userCreateWithGoogle, usersLogin, usersLogout } = userSlice.actions

export default userSlice.reducer;