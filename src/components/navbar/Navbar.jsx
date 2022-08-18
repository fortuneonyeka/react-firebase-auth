import React from 'react'
import { Link } from "react-router-dom"
import Home from "../pages/Home"
import Logo from "../../assets/images/Logo/Retink.png"
import LogoVector from "../../assets/images/Logo/logo-01.png"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="logo">
        <img src={LogoVector} alt="" className="logo-vector"/>
        <img src={Logo} alt="" />
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
          <div className="collapse navbar-collapse d-flex justify-content-end pr-3">
            <ul className="navbar-nav ml-auto">
              <li>
                <Link to="/login" className="nav-link px-3 mx-3 text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="nav-link text-white">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
      {/* <Home/> */}
    </div>
  )
}

export default Navbar