import React ,{useState} from 'react'
import axios from 'axios'
import './Register.css'
import {useDispatch,useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { hideLoading, showLoading } from '../../src/redux/features/alertSlice'
import Spinner from './../../components/Spinner';
import {  toast } from 'react-toastify';
const Register = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [input,setInput]=useState({
        name:'',
        lastName:'',
        email:'',
        password:'',
        location:'',

  })

  axios.defaults.withCredentials=true;

  const {loading} = useSelector(state=>state.alerts)

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
      if(!input){
        toast.error('plz provide all the fields')
      }
      dispatch(showLoading())
      const {data}=await axios.post('https://nodejs-app-for-job.vercel.app/api/v1/auth/register',{
        name:input.name,
        lastName:input.lastName,
        email:input.email,
        password:input.password,
        location:input.location
      })

      dispatch(hideLoading());

      if(data?.success){
         toast.success("registered successfully")
         navigate('/login')
      }
      

    } catch (error) {
      dispatch(hideLoading());
      toast.error('invalid form details')
      console.log(error)
    }
  }
  return (
    <>
    {loading?(<Spinner/>):(<div className="form-container ">
      <form className='inputForm' onSubmit={handleSubmit}>
      <div className="mb-1">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" name='name' value={input.name} onChange={handleChange} />
        
      </div>
      <div className="mb-1">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" name='lastName' value={input.lastName} onChange={handleChange} />
        
      </div>
      <div className="mb-1">
        <label htmlFor="email" className="form-label">Email-address</label>
        <input type="text" className="form-control" name='email' value={input.email} onChange={handleChange} />
        
      </div>
      <div className="mb-1">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" name='password' value={input.password} onChange={handleChange} />
      </div>
      <div className="mb-3 ">
        <label htmlFor="location" className="form-label">Location</label>
        <input type="text" className="form-control" name='location' value={input.location} onChange={handleChange} />
      </div>
      
      
    <button type="submit" className="btn btn-primary" >Submit</button>
    <div className="link">
      <p>Already registered? <Link to='/login'
      >Login Now</Link>
      </p>
    </div>
  </form>
    </div>
      )}

    </>
  )
}

export default Register
