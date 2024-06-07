import React from "react";
import { useState } from "react";
import "./signUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

const SignUp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [country, setCountry] = useState("India (+91)");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <div className="signUp">
      {!isLoggedIn && (
        <div className="loginContainer">
          <div className="loginHeader">
            <FontAwesomeIcon icon={faXmark} /> <h2>Log in or sign up</h2>
          </div>
          <div className="loginForm">
            <div className="loginInput">
              <label htmlFor="country">Country/Region</label>
              <select
                id="country"
                value={country}
                onChange={handleCountryChange}
              >
                <option value="India (+91)">India (+91)</option>
                <option value="United States (+1)">United States (+1)</option>
              </select>
            </div>
            <div className="loginInput">
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
            <button className="loginButton" onClick={handleLogin}>
              Continue
            </button>
            <div className="line"></div>or <div className="line"></div>
            <button className="loginButton" onClick={handleLogin}>
              <FontAwesomeIcon icon={faSquareFacebook} />
              Continue with Facebook
            </button>
            <button className="loginButton" onClick={handleLogin}>
              <FontAwesomeIcon icon={faGoogle} />
              Continue with Google
            </button>
            <button className="loginButton" onClick={handleLogin}>
              <FontAwesomeIcon icon={faApple} /> Continue with Apple
            </button>
            <button className="loginButton" onClick={handleLogin}>
              <FontAwesomeIcon icon={faEnvelope} />
              Continue with email
            </button>
          </div>
        </div>
      )}

      {isLoggedIn && (
        <div className="contentContainer">
          {/* Content for logged-in users */}
        </div>
      )}
    </div>
  );
};

export default SignUp;
