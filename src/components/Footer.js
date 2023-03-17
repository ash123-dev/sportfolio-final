import React from 'react'
import './Footer.css'
import { FaFacebook, FaHome, FaLinkedinIn, FaMailBulk, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: 'white', marginRight: '2rem' }} />
            <p>289,Perumal kovil Street,Kumbakonam.</p><br/>
            
          </div>
          <div className='phone'>
            <h4><FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }} />
              96298123335</h4>
          </div>
          <div className='email'>
            <h4><FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem' }} />
              akashmurugankum@gmail.com</h4>
          </div>
        </div>
        <div className='right'>
          <p>Contact Me:</p>
          <div className='social'>
          <a href="www.facebook.com">
            <FaFacebook size={30} style={{color:'white' , marginRight:'2rem'}}/>
            </a>
            <FaLinkedinIn size={30} style={{color:'white' , marginRight:'1rem'}}/>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer