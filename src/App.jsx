import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'

import './App.css'
import Home from './../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Navbar from './../components/navbar/Navbar';
import Footer from './../components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from '../components/routes/PrivateRoute';
import DashBoard from '../pages/home/DashBoard';
import PublicRoute from '../components/routes/PublicRoute';
import AppliedJobs from '../pages/home/AppliedJobs';
import About from '../pages/home/About';

function App() {
  

  return (
    <>
      <Navbar/>
        <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce />
      <Routes>
        <Route path='/' element={
          <PublicRoute>
          <Home/>
          </PublicRoute>
        } />
        <Route path='/login' element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        } />
        <Route path='/register' element={
          <PublicRoute>
            <Register/>
          </PublicRoute>
        } />
        <Route path='/dashboard' element={
          
            <DashBoard/>
          
        } />
        <Route path='/applied-jobs' element={
          
            <AppliedJobs/>
          
        } />
        <Route path='/about' element={
          
            <About/>
          
        } />
      </Routes> 
      <Footer/>
      
    </>
  )
}

export default App
