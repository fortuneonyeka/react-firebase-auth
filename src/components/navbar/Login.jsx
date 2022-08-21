import React from 'react'
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="sign-up-containter col-4">
      <h3 className="d-flex justify-content-center">Login</h3>

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
      <div className="cta">New user? <Link className="text-decoration-none mx-3 link-success" to="/register">Sign Up</Link> </div>
    </div>
  )
}

export default Login