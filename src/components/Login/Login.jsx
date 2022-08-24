import React from "react";
import "./login.css";

const Login = () => {
  const handleSubmit = (e) => {
    //
  };

  return (
    <div className="form-container">
      <h3>Login</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="name" className="form-input" />
        <br />
        <input type="password" name="password" className="form-input" />
        <br />

        <button type="submit" className="btn">
          Send!
        </button>
      </form>
    </div>
  );
};

export default Login;
