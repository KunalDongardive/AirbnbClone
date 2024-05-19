import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="card">
        <div className="top">
          <div className="left">
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="right">
            <h1>Log in or sign up</h1>
          </div>
        </div>
        <div className="center">
          <form action="">
            <legend>Welcome to Airbnb</legend>
            <table style={{ border: "1px solid black", borderRadius: "5px" }}>
              <tr>
                <td>
                  <label for="cars">Country/Region</label>
                  <select id="cars" name="cars">
                    <option value="volvo">India (+91)</option>
                    <option value="saab">American Samoa (+1)</option>
                    <option value="fiat">Australia (+61)</option>
                    <option value="audi">Japan (+81)</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="number" placeholder="Phone number" />
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div className="hline"></div> &nbsp; or &nbsp;
        <div className="hline"></div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default SignUp;
