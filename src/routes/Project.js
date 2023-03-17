import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Herosection2 from '../components/Herosection2'
import Work  from '../components/Work'
const Project=()=> {
  return (
    <div>
   <Navbar/>

   <Herosection2 heading="PROJECTS." text="These are some of recent projects"/>
   <Work/>
   <Footer/>   
    </div>
  )
}

export default Project

