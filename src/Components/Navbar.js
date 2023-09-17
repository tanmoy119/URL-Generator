import React, { useState } from 'react'
import "./NavbarStyles.css"
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"


const Navbar = () => {
  const [Mobile,setMobile] = useState(false)

  return (
    <>
    <nav className = 'navbar'>

        <h3 className = 'logo'>Magetor</h3>


      <ul className = {Mobile?"nav-links-mobile":"nav-links"}
          onClick   = {()=>setMobile(false)}>

        <a to="/"><li>Home</li></a>
        <a to="/product"><li>Product</li></a>
        <a to="/about"><li>About</li></a>

      </ul>

        <button className='LogSi'>Login/Sign Up</button>

        <button className = 'mobile-menu-icon'
            onClick   = {()=>setMobile(!Mobile)}>
            {Mobile? <ImCross/> : <FaBars />}
        </button>
    </nav>
    </>
  )
}

export default Navbar