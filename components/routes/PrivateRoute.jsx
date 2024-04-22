import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../src/redux/features/alertSlice';
import axios from 'axios';
import { setUser } from '../../src/redux/features/auth/authSlice';
import {useNavigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const navigate=useNavigate()
  const {user}  = useSelector(state=>state.auth);
  const dispatch=useDispatch();
  
  const getUser=async()=>{
      try {
        dispatch(showLoading());
        const {data} = await axios.post('https://nodejs-app-for-job.vercel.app/api/v1/user/getUser',{
          token:localStorage.getItem('token'),
          Headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        })

        dispatch(hideLoading())
        if(data.success){
          dispatch(setUser(data.userData))
        }
        else{
          localStorage.clear();
          navigate('/login')
        }

      } catch (error) {
        localStorage.clear();
        dispatch(hideLoading())
        console.log(error)
      }
  }
  useEffect(()=>{
    if(!user){
      getUser();
    }
  });
  if(localStorage.getItem('token')){
    return children
  }
  else{
    return navigate('/login')
  }

}

export default PrivateRoute
