import { configureStore } from '@reduxjs/toolkit'
import { alertSlice } from './features/alertSlice'
import { authSlice } from './features/auth/authSlice'
import { logoutSlice } from './features/auth/logoutSlice';
export default configureStore({
  reducer:{
    alerts:alertSlice.reducer,
    auth:authSlice.reducer,
    logout:logoutSlice.reducer,
  },
})