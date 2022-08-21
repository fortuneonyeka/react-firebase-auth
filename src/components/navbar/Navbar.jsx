import React from 'react'
import { Link } from "react-router-dom"
import Home from "../pages/Home"
import Logo from "../../assets/images/Logo/Retink.png"
import LogoVector from "../../assets/images/Logo/logo-01.png"
import mainlogo from "../../assets/images/Logo/logo-wo-subtitle.png"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="logo">
       <Link to="/"> <img src={mainlogo} alt="" className="logo-vector"/></Link>
       
        </div>
        
        <div className="container">
          <div className="page-links">
          <Link to="/" className="navbar-brand nav-item text-muted">
            Home
          </Link>
          <Link to="/services" className="navbar-brand nav-item ">
            Services
          </Link>
          <Link to="/about" className="navbar-brand nav-item text-muted">
            About
          </Link>
         
            
          
          </div>
        </div>
                <Link to="/login" className=" nav-link p-2  text-white">
                  Login
                </Link>
             
      </nav> 
      {/* <Home/> */}
    </div>
  )
}

export default Navbar