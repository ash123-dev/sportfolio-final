import React, { useState } from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa'
function Navbar() {

    const [click,setClick]=useState(false);
    const handleclick=()=>setClick(!click)

    const [color,setColor]=useState(false)
    const changecolor=()=>{
    if(window.scrollY>=100){
      setColor(true)
    }else{
      setColor(false)
    }
    
    }
    window.addEventListener("scroll",changecolor)
 
  return (
    <div className={color ?"header header-bg":"header"}>
   <Link to="/"> Portfolio.</Link>
  
  <ul className={click ? 'nav__menu active':'nav__menu'}> 
<li>
    <Link to="/"> Home</Link>
</li>

<li>
    <Link to="/project"> Project</Link>
</li>
<li>
    <Link to="/skill"> Skill</Link>
</li>
<li>
    <Link to="/contact"> Contact</Link>
</li>

  </ul>

  <div className='hamburger' onClick={handleclick}>

    {click ? (<FaTimes size={20} style={{color:"#fff"}}/>) :(<FaBars size={20} style={{color:"#fff"}} />) }
  
  
  </div>

    </div>

    
  
  )
  
}

export default Navbar