import React from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/Herosection'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Work/>
        <Footer/>

        
    </div>
  )
}

export default Home