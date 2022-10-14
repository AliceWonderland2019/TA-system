import { useState,useEffect } from 'react';
import { getUserInfo } from "../api/UserApi";
import { Link} from "react-router-dom";

export const StudentHome = () => {

    const [user, setUser]=useState(undefined);
  
    useEffect(()=>{
        getUserInfo().then(x => setUser(x))
    },[ ]);
  
    if(!user){
       return<>Please log in first</>
    }
  
      return(<div className="HomeContainer">
          <div className="textContainer">
              <img src={"logo1(6).png"} className="logo"/>
              <h1>Hello!! {user[0].username}</h1>
  
              <button><Link to='/profile'>Profile</Link></button>
              <button><Link to='/'>Log out</Link></button>
  
          </div>
      
      
      </div>
  
      );
  }