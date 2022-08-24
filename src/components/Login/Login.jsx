import React, { useContext, useRef } from "react";
import { LogginContext } from '../../store/LogginContext';
import { useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {

  const { handleLogin} = useContext(LogginContext)
  
  const navigate = useNavigate()
  
  const nameRef = useRef()
  const passRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      pass: passRef.current.value,
    }
    handleLogin(data)

    navigate('/')
  };

  return (
    <div className="form-container">
      <h3>Login</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="name" className="form-input" ref={nameRef} />
        <br />
        <input type="password" name="password" className="form-input" ref={passRef} />
        <br />

        <button type="submit" className="btn">
          Send!
        </button>
      </form>
    </div>
  );
};

export default Login;
