import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const inititalState = {
  user: {
    userName:"coding addict"
  },
  theme: "dracula",
};

const userSlice = createSlice({
  name: "user",
  initialState: inititalState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state, action) => {
        state.user = null;
        localStorage.removeItem("user");
        toast.success("logged out successfully");
    },
    toggleTheme:(state)=>{
        console.log("toggleTheme");
    }
  },
});

export const {loginUser,logoutUser,toggleTheme} = userSlice.actions
export default userSlice.reducer;