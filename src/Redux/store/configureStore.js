import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../slice/UserSlice";
import AuthSlice from "../slice/AuthSlice";
export default  configureStore({
reducer: {
    user: UserSlice,
    auth: AuthSlice,
}
});