import React from 'react';
import { Link} from "react-router-dom";
import './StudentNavBar.css';

export const StudentNavBar = ( )=>{
    const handleLogOut= () => {
        localStorage.clear();
    };
    return(
        <div className='StudentNav'>
            <ul className='NavContainer'>
            <img src={"logo1(6).png"} className="logoNav"/>
            <div className="NavElements"><Link to ='/studentHome'>Jobs Market</Link></div>
            <div className="NavElements"><Link to ='/studentHome'>Employers</Link></div>
            <div className="NavRight"><Link to ='/' onClick={handleLogOut}><button className="NavLog">Log out</button></Link></div>
            <div className="NavRight"><Link to ='/profile'>Message</Link></div>
            <div className="NavRight"><Link to ='/profile'>Profile</Link></div>
            <div className="NavRight"><Link to ='/profile'>MyApplications</Link></div>
            </ul>
        </div>

    );

};