import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact';
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="/project" element= {<Project/>}/>
    <Route path="/skill" element= {<About/>}/>
    <Route path="/contact" element= {<Contact/>}/>

   </Routes>
   </>
   
  )
  
}

export default App