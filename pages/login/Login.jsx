import React ,{useState} from 'react'
import './Login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../../src/redux/features/alertSlice';
import Spinner from '../../components/Spinner';
import {  toast } from 'react-toastify';
const Login = () => {
  const [input,setInput]=useState({
   
    email:'',
    password:'',
    confirmPassword:'',

})

const dispatch=useDispatch();

const navigate= useNavigate();

const {loading} =useSelector(state=>state.alerts)
axios.defaults.withCredentials=true;
const handleChange=(e)=>{
  const values=e.target.value;
  setInput({
    ...input,
    [e.target.name]:values
  })
}

const handleSubmit=async(e)=>{
  e.preventDefault();
  try {
     
    if(input.confirmPassword===input.password){
      dispatch(showLoading())
      const {data}=await axios.post('https://nodejs-app-for-job.vercel.app/api/v1/auth/login',{
        email:input.email,
        password:input.password,
      })

      if(data.success){
        dispatch(hideLoading());
        localStorage.setItem('token',data.token)
        toast.success('login successfully')
        navigate('/dashboard');
      }
    }
    else{
      toast.error('password fields are not matching')
    }
  } catch (error) {
    dispatch(hideLoading());
    toast.error('invalid credentials please try again')
    console.log(error)
  }
}
  return (
    <>
      {loading?(<Spinner/>):(<div className="form-container">
      <form className='inputForm' onSubmit={handleSubmit} >
      
      <div className="mb-1">
        <label htmlFor="email" className="form-label">Email-address</label>
        <input type="text" className="form-control" name='email' value={input.email} onChange={handleChange}  />
        
      </div>
      <div className="mb-1">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" name='password' value={input.password} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" name='confirmPassword' value={input.confirmPassword} onChange={handleChange} />
      </div>
      
    <button type="submit" className="btn btn-primary">Submit</button>
    <div className="link">
      <p>Not registered yet? <Link to='/register' >Register Now</Link>
      </p>
    </div>
  </form>
    </div>)}
    </>
  )
}

export default Login
