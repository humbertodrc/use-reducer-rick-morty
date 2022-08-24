import React from "react";
import "./header.css";

const Header = ({ setShowRegisterOrLogin }) => {
  return (
    <div className="header">
      <h1>Rick and Morty App</h1>
      <div className="login-options-container">
        <div className="login-options"></div>
      </div>
    </div>
  );
};

export default Header;