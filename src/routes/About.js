import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Herosection2 from '../components/Herosection2'

function About() {
  return (
    <div>
      <Navbar/>
      <Herosection2 heading="ABOUT." text="I'm Passionate on Java App Development"/>
   <Footer/>  
    </div>
  )
}

export default About