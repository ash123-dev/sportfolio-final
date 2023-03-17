import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Herosection2 from '../components/Herosection2'
import Contactform from '../components/Contactform'

function Contact() {
  return (
    <div>
      <Navbar/>
      <Herosection2 heading="CONTACT." text="Available"/>
      <Contactform/>
    <Footer/>  
    </div>
  )
}

export default Contact