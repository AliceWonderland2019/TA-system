import './LoginPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { checkAccount } from "../api/UserApi";

export const LoginPage =()=>{

    // //localStorage.clear();
    const [userName, setName]=useState('');
    const [password, setPassword]=useState('');

    const handleChangeName=(e)=>{
        setName(e.target.value);
    }

    const handleChangePW=(e)=>{
        setPassword(e.target.value);
    }
    
    const handleSubmitClick=()=>{
         checkAccount(userName,password);
        // //login(email, password);
        // navigate('/home');
    }

    return(
    <div className='Login-component'>
        
    <div className="whiteBox">
        <img src={"logo1(6).png"} className="logo"/>
        <h1>Log In</h1>
        <input type="text" class="form-control" placeholder='User Name' value={userName} onChange={handleChangeName}/>
        <br/>
        <br/>
        <input type="password" class="form-control" placeholder='Password' value={password} onChange={handleChangePW}/>
        <br/>
        <br/>
    <button variant="outlined" onClick={handleSubmitClick}><Link to='./home' className="createLink">Submit</Link></button>
    <br/>
        <h6><Link to='/register' className="register">Don't have an account? Click here to make one!</Link></h6>
   </div>
   </div>
    );
};