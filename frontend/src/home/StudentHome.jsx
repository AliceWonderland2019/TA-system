import "./StudentHome.css";
import { useState,useEffect } from 'react';
import { getUserInfo } from "../api/UserApi";
import { Link } from "react-router-dom";
import {StudentNavBar} from "../Navbar/StudentNavBar";
import { JobMarket } from "./JobMarket";


export const StudentHome = () => {

    const [user, setUser]=useState(undefined);
  
    useEffect(()=>{
        getUserInfo().then(x => setUser(x))
    },[ ]);
  
     if(!user){
        return<>Please log in first</>
    }
  
    return(<div className="HomeContainer">
        <StudentNavBar/>
          <div className="MainContainer">
              <h1>Hello!! {user[0].username}</h1>
          </div>
        <JobMarket/>
      </div>
  
      );
  }