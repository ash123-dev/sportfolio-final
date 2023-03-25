import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Herosection2 from '../components/Herosection2'
import Skill from '../components/Skill'

function About() {
  return (
    <div>
      <Navbar/>
      <Herosection2 heading="SKILL." text="I'm Passionate on Java App Development"/>
      <Skill/>
   <Footer/>  
    </div>
  )
}

export default About