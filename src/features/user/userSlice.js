import { createSlice } from "@reduxjs/toolkit";
import { MdToken } from "react-icons/md";
import { toast } from "react-toastify";

const getUserFromLocalStorage = ()=>{
  return JSON.parse(localStorage.getItem("user")) || null;
}


const inititalState = {
  user: getUserFromLocalStorage(),
  // theme: "dracula",
};

const userSlice = createSlice({
  name: "user",
  initialState: inititalState,
  reducers: {
    loginUser: (state, action) => {
      const {user,jwt } = action.payload;
      state.user = {...user,token:jwt};   
      console.log(state.user);
      
      localStorage.setItem("user",JSON.stringify(user));
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