import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createAccountStudent } from "../api/UserApi";

export const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [ID, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [numError, setNumError] = useState(false);
  //const [error, setError] = useState(false);

  // Handling the username change
  const handleUsername = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };
  //Handling the form submission
  const handleID = (e) => {
    if (!isNaN(e.target.value)) {
      setID(e.target.value);
      setSubmitted(false);
      setNumError(false);
    } else {
      e.target.value = null; //get rid of initial
      setNumError(true);
    }
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the name change
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };
  // Handling the name change
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  // Showing error message if error is true
  const errorNum = () => {
    return (
      <div
        className="numError"
        style={{
          display: numError ? '' : 'none',
        }}>
        <p className="errorMeg">*ID can only be numbers</p>
      </div>
    );
  };

  //Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "" || password === "" || ID === "") {
      window.alert("Please fill out User Name & Password & SMU ID.");
    } else {
      setSubmitted(true);
      //setError(true);
      createAccountStudent(userName, password, firstName, lastName, ID);
    }
  }

  return (
    <div className="Register-component">
      <div className="whiteBox">
        <img src={"logo1(6).png"} className="logo" />
        <h2>Register</h2>
        <br />
        <div className="form">
          <label className="">*User Name:</label>
          <input type="text" value={userName} onChange={handleUsername} />
          <br />
          <br />
          <label className="">*Password:</label>
          <input type="password" value={password} onChange={handlePassword} />
          <br />
          <br />

          <label className="">*SMU ID:</label>
          <div className="message">{errorNum()}</div>
          <input type="text" value={ID} onChange={handleID} />
          <br />
          <br />

          <label className="">FirstName:</label>
          <input type="text" value={firstName} onChange={handleFirstName} />
          <br />
          <br />

    <label className="">Last Name: </label>
    <input type="text" value={lastName} onChange={handleLastName}/>
    <br/>
    <br/>
  
    <div className="register-buttons">
   <button variant="outlined" onClick={handleSubmit}>Create</button>
   <Link to='/' className="LoginPage"><button variant="outlined">Back</button></Link>
   </div>
   <br/>
   
   </div>
   </div>
    </div>);
}