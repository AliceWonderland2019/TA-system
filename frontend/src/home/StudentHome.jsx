import "./StudentHome.css";
import { useState,useEffect } from 'react';
import { getUserInfo } from "../api/UserApi";
import {StudentNavBar} from "../Navbar/StudentNavBar";
import { JobMarket } from "./JobMarket";
import {getJobList} from "../api/JobApi";

export const StudentHome = () => {

    const [user, setUser]=useState(undefined);
    const [Jobs, setJobs ]=useState([]);
  
    useEffect(()=>{
        getUserInfo().then(x => setUser(x))
    },[ ]);
    
    useEffect(()=>{
        getJobList().then(y => setJobs(y));
    },[ ]);

     if(!user){
        return<>Please log in first</>
    }

    return(<div className="HomeContainer">
        <StudentNavBar/>
          <div className="MainContainer">
              <h1>Hello!! {user[0].username}</h1>      
              <JobMarket Jobs={Jobs}/>
          </div>
      </div>
  
      );
  }