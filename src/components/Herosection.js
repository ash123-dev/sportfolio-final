import React from 'react'
import './Herosection.css'
import IntroImg from '../assets/introimg.jpg'
import { Link } from 'react-router-dom'

function HeroSection() {
    
  return (
    <div className='hero'>
        <div className='mask'>
<img className='intro-img' src={IntroImg} alt="intro-img"/>
        </div>
        
        <div className='content'>
         <p><strong>I'M AKASH</strong></p> 
        <h1 > Java Full Stack Developer</h1>
        <div>    
            <Link to="https://drive.google.com/file/d/1JYEkOyglFt7LlB71t1W_lacwKt9sktMO/view" className='btn'>Resume</Link>
            <Link to="/contact" className='btn btn__light'>Contact</Link>
        </div>
        </div>
       
    </div>
  )
}


export default HeroSection