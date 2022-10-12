import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {

    const [userName, setUserName]=useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

   
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
  
    // Handling the username change
    const handleUsername = (e) => {
      setUserName(e.target.value);
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
 
    // Handling the password change
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmitted(false);
    };

  //Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === '' || lastName === '' || firstName === '' || password === '') {
      window.alert("Please fill out all the fields.");
    } else {
       setSubmitted(true);
        // window.alert("Successs.");
        setError(true);
        //render();
        //Register(userName, firstName, lastName, password);    
    }
  };



//   const render =(e)=>{
//     if(error){
//         return<Link to='./home' className="createLink"></Link>;
//     }
//   };
 
    return(<div className='Login-component'>
    <div className="whiteBox">
    <img src={"logo1(6).png"} className="logo"/>
    <h1>Register</h1>
    <br/>

    <input type="text" placeholder='User Name' value={userName} onChange={handleUsername}/>
    <br/>
    <br/>

    <input type="text" placeholder='First Name' value={firstName} onChange={handleFirstName}/>
    <br/>
    <br/>

    <input type="text" placeholder='Last Name' value={lastName} onChange={handleLastName}/>
    <br/>
    <br/>

    <input type="password" placeholder='Password' value={password} onChange={handlePassword}/>

   <br/> <br/> <br/>
   <button variant="outlined" onClick={ handleSubmit }>Create</button>

   <br/>
    </div>
    </div>);
}