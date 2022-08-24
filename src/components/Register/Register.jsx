import React, { useRef, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { LogginContext } from '../../store/LogginContext';

const Register = () => {

  const { handleRegister } = useContext(LogginContext)
  
  const navigate = useNavigate()

  const nameRef =  useRef()
  const lastNameRef =  useRef()
  const passNameRef =  useRef()
  const passConfirmNameRef =  useRef()


  const handleSubmit = (e) => {

    // Validar que no esta enviando nada

    e.preventDefault();
    handleRegister({
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      passName: passNameRef.current.value,
      passConfirmName: passConfirmNameRef.current.value,
    })

    navigate('/login')
  };

  return (
    <div className="form-container">
      <h3>Register</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" className="form-input" ref={nameRef} />
        <br />
        <label>Lastname</label>
        <input type="text" name="lastname" className="form-input" ref={lastNameRef} />
        <br />

        <label>password</label>
        <input type="password" name="password" className="form-input" ref={passNameRef} />
        <br />
        <label>confirm password</label>
        <input type="password" name="confirmPassword" className="form-input" ref={passConfirmNameRef} />
        <br />

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;