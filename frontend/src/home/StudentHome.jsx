import "./StudentHome.css";
import { useState,useEffect } from 'react';
import { getUserInfo } from "../api/UserApi";
import {StudentNavBar} from "../Navbar/StudentNavBar";
import { JobMarket } from "./JobMarket";
import { SearchResult } from "./SearchResult";
import { SearchField } from "./SearchField";
export const StudentHome = () => {

    const [user, setUser]=useState("");
    const [search, setSearch]=useState(false);
    const [courseID,setCourseID]=useState("");
    const [schedule,setSchedule]=useState("");
    const [semester,setSemester]=useState("");

    const handleSearch = (e) => {
        setSearch(e);
    };
    const handleCourseID = (e) => {
        setCourseID(e);
    };
    const handleSchedule = (e) => {
        setSchedule(e);
    };
    const handleSemester = (e) => {
        setSemester(e);
    };
    
    useEffect(()=>{
        getUserInfo().then(x => setUser(x))
    },[ ]);

     if(!user){
        return<>Please log in first</>
    }

    const searchFun = (courseID,schedule,semester) => {
        console.log(courseID,schedule,semester);
        return (
          <div className="setSearch">{ search ? <SearchResult courseID={courseID} schedule={schedule} semester={semester}/>:<JobMarket/>}
          </div>
        );
      };

    return(<div className="HomeContainer">
        <StudentNavBar/>
        <div className="MainContainer">
              <h1>Hello!! {user[0].username}</h1>      
              <SearchField getSearch={handleSearch} getCourseID={handleCourseID} getSchedule={handleSchedule} getSemester={handleSemester} />
              <br></br>
              <div className="search">{searchFun(courseID,schedule,semester)}</div>
        </div>
      </div>
      );
  }