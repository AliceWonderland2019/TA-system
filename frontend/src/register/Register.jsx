import './Register.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createAccountStudent } from "../api/UserApi";

export const Register = () => {

    const [userName, setUserName]=useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState('');

   
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
  
    // Handling the username change
    const handleUsername = (e) => {
      setUserName(e.target.value);
      setSubmitted(false);
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

    //Handling the form submission
    const handleID = (e) => {
        setID(e.target.value);
        setSubmitted(false);
      };

  //Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === '' || password === '') {
      window.alert("Please fill out User Name & Password.");
    } else {
      setSubmitted(true);
      setError(true);
      createAccountStudent(userName, password, firstName, lastName, ID);  
    }
  };

 
    return(<div className='Login-component'>
    <div className="whiteBox">
    <img src={"logo1(6).png"} className="logo"/>
    <h1>Register</h1>

    <input type="text" placeholder='*User Name' value={userName} onChange={handleUsername}/>
    <br/>
    <br/>

    <input type="password" placeholder='*Password' value={password} onChange={handlePassword}/>
    <br/>
    <br/>

    <input type="text" placeholder='First Name' value={firstName} onChange={handleFirstName}/>
    <br/>
    <br/>

    <input type="text" placeholder='Last Name' value={lastName} onChange={handleLastName}/>
    <br/>
    <br/>

    <input type="text" placeholder='SMU ID' value={ID} onChange={handleID}/>
    <br/>
    <br/>
  
    <div className="blocks">
   <button variant="outlined" onClick={ handleSubmit }>Create</button>
   <button variant="outlined"><Link to='/' className="LoginPage">Back</Link></button>
   </div>
   
   </div>
    </div>);
}