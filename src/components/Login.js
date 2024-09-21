import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/UserActions";
import { openModal } from "../actions/ModalActions";
import "./Login.css";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin) || {}; // Default to an empty object
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      onClose(); // Close the modal on successful login
      dispatch(openModal("closed", ""));
    }
  }, [dispatch, userInfo, onClose]);

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login-form">
      <h2>Log in or Sign up</h2>
      {error && <h2>{error.message || error}</h2>}
      {loading && <h2>Loading...</h2>}
      <form onSubmit={submitLogin}>
        <button type="button" className="facebook-login">Connect with Facebook</button>
        <button type="button" className="google-login">Connect with Google</button>
        <div className="login-or center">
          <span>or</span>
          <div className="or-divider"></div>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="browser-default"
          placeholder="Email address"
          style={{ backgroundColor: "white" }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="browser-default"
          placeholder="Password"
          style={{ backgroundColor: "white" }}
        />
        <button type="submit" className="sign-up-button">Login</button>
        <div className="divider"></div>
        <div>Don't have an account? Sign up</div>
      </form>
    </div>
  );
}

export default Login;

