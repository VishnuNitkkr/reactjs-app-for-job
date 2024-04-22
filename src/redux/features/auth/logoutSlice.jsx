import {createSlice} from '@reduxjs/toolkit'

export const logoutSlice=createSlice({
  name:"logout",
  initialState:{
    isLogin:false
  },
  reducers:{
    login(state){
      state.isLogin=true
    },
    logout(state){
      state.isLogin=false
    }
  }
})

export const {login,logout}=logoutSlice.actions;
