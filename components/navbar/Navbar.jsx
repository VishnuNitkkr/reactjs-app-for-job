import React from 'react'
import './Navbar.css'
import { Link,useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../../src/redux/features/auth/logoutSlice'
import {toast} from 'react-toastify'
const Navbar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  let {isLogin}=useSelector(state=>state.logout)
  isLogin=isLogin||localStorage.getItem("token")

  const handleOnLogout=()=>{
    try {
      localStorage.clear();
      dispatch(logout())
      navigate('/login');
      toast.success("Log-Out successfully")
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <>
     <nav className="navbar navbar-expand-lg sticky-top ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        {!isLogin&&<>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        </>}
        {isLogin&&<>
          <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/applied-jobs">Applied jobs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        </>}
        
      </ul>
      {isLogin&&<>
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-success" type="submit">Search</button>
      </form>
      </>}
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        
        {!isLogin&&<>
          <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        </>}
        {isLogin&&<>
          <li className="nav-item">
          <a className="nav-link active" onClick={handleOnLogout}  >Logout</a>
        </li>
        </>}
       
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
