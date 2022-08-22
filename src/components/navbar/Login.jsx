import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import app from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert(` successfuly created`);
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert(`user signed in`);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  return (
    <div className="sign-up-containter col-3">
      <div>current User: {}</div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Email@"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className=" mt-4">
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block py-3 log-in"
          onClick={handleSignIn}
        >
          Login
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block py-3 log-in mt-3"
          onClick={handleSignUp}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Login;
