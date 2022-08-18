import React,{useRef, useState} from 'react'
import {signup,login, logout, useAuth} from "../../firebase"

const SignUp = () => {
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
    <div className="col-4 pt-5">

      <h3 className="d-flex justify-content-center">Sign Up</h3>
      <div>Cuurently Signed In As: {currentUser?.email}</div>
      <div className="form-group">
        <label>Email</label>
        <input ref={emailRef} type="email" className="form-control" placeholder="Email@"/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input ref={passwordRef}
          type="password"
          className="form-control"
          placeholder="Password"
          required
          
        />
      </div>
     

      <div className="d-flex justify-content-center mt-4">
        <button  onClick={handleSignup}  className="btn btn-primary btn-lg btn-block px-5 ">
          Sign Up
        </button>
        <button  onClick={handleLogin}  className="btn btn-primary btn-lg btn-block px-5 ">
          Login
        </button>

        <button disabled={loading || currentUser == null} onClick={handleLogout} className="btn btn-primary btn-lg btn-block px-5 mx-3">Log Out</button>
      </div>
    </div>
  )
}

export default SignUp