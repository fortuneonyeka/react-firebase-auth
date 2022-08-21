import React,{useRef, useState} from 'react'
import { Link } from "react-router-dom"
import {Form, Card, Button} from "react-bootstrap"
// import { useAuth} from "../../context/AuthContext"
import {signup,login, logout, useAuth} from "../../firebase"

const SignUp =() =>  {

const [loading, setLoading] = useState(false)
  const currentUser = useAuth

  const emailRef = useRef();
   const passwordRef = useRef();


   async function handleSignup() {
     setLoading(true)
    try {
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
       alert("Error")
     }
     setLoading(false)
   }

   async function handleLogin() {
     setLoading(true)
     try {
       await login(emailRef.current.value, passwordRef.current.value)
     } catch {
       alert("Error!")
     }
     setLoading(false)
   }

   async function handleLogout() {
     setLoading(true)
     try {
       await logout();
     } catch {
       alert("Error!")
     }
    setLoading(false)
   }

  return (
    

    
    <>
     
    <div className="sign-up-containter col-4">
      <h3 className="d-flex justify-content-center">Sign Up</h3>

      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Email@" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button type="button" className="btn btn-primary btn-lg btn-block py-3 log-in">
          Login
        </button>
      </div>
      <div className="cta">Already have an account? <Link className="text-decoration-none mx-3 link-success" to="/login">Log in</Link></div>
    </div>
  
     
    </>
   
    

      
  )
}

export default SignUp