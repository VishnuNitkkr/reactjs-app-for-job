import React from 'react'
import '../../src/styles/HomePage.css'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <video autoPlay muted loop id ='myvideo'>
        <source src ='/bg.mp4' type='video/mp4' />
        
      </video>
      <div className="content">
       <div className="card w-25">
       <h1>JOB PORTAL</h1>
       <div className="card-body">
       <h5>India's No. 1 carrar Platform</h5>
        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nam quod labore expedita tenetur necessitatibus a praesentium hic nobis! Aut.</p>
        <div className="links">
          <div>
          Not registered yet?
          <Link to='/register' >Here</Link>
          </div>
          <div className="btn">
            <Link to='/login'>Login</Link>
          </div>

        </div>
       </div>
       </div>
       
      </div>
    </>
  )
}

export default Home
