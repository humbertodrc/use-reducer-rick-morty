import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    //
  };

  return (
    <div className="form-container">
      <h3>Register</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" className="form-input" />
        <br />
        <label>Lastname</label>
        <input type="text" name="lastname" className="form-input" />
        <br />

        <label>password</label>
        <input type="password" name="password" className="form-input" />
        <br />
        <label>confirm password</label>
        <input type="password" name="confirmPassword" className="form-input" />
        <br />

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;