import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
  const navigate=useNavigate();
  if(localStorage.getItem('token')){
    return navigate('/dashboard')
  }
  else{
      return children
  }
}

export default PublicRoute
