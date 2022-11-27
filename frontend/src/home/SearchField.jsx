import "./SearchField.css";
import React, {useContext, useState} from "react";
import {SelectField} from "../postJob/SelectField";
import { searchJob } from "../api/JobApi";
// import { JobContext } from "./context-manager";


export const SearchField = ( props ) => {

    // const {setSearch,setCourseID,setSchedule,setSemester}=useContext(JobContext);
    const [department,setDepartment]=useState("");
    const [catalog,setCatalog]=useState("");
    const [schedule,setSchedule]=useState("");
    const [semester,setSemester]=useState("");
    const [submitted, setSubmitted] = useState(false);
    const deptOptions=[
        { value: "BIOL", label: "BIOL"},
        { value: "CEE", label: "CEE"},
        { value: "CHEM", label: "CHEM"},
        { value: "CSE", label: "CSE"},
        { value: "CS", label: "CS"},
        { value: "DS", label: "DS"},
        { value: "ECE", label: "ECE"},
        { value: "ENGR", label: "ENGR"},
        { value: "ENGL", label: "ENGL"},
        { value: "GEOL", label: "GEOL"},
        { value: "ITOM", label: "ITOM"},
        { value: "KNW", label: "KNW"},
        { value: "MATH", label: "MATH"},
        { value: "ME", label: "ME"},
        { value: "OREM", label:"OREM"},
        { value: "PHYS", label: "PHYS"},
    ];
    const scheduleOptions=[
        { value: "MWF 9:00-10:00", label: "MWF 9:00-10:00"},
        { value: "MWF 11:00-12:00", label: "MWF 11:00-12:00"},
        { value: "MWF 5:00-6:00", label: "MWF 5:00-6:00"},
        { value: "MWF 3:00-4:00", label: "MWF 3:00-4:00"},
        { value: "T 6:30-9:00", label: "T 6:30-9:00"},
        { value: "TTH 11:00-12:30", label: "TTH 11:00-12:30"},
        { value: "TTH 2:00-2:30", label: "TTH 2:00-2:30"},
        { value: "TTH 3:30-5:00", label: "TTH 3:30-5:00"},
        { value: "TH 6:30-9:00", label: "TH 6:30-9:00"},
    ];
    const semesterOptions=[
        {value:"Spring 2023", label:"Spring 2023"},
        {value:"Fall 2023", label:"Fall 2023"},
    ];

    const handleCatalog = (e) => {
        setCatalog(e.target.value);
      };

      //Handling the form submission
  const handleSubmit = () => {
    if (department === "" && catalog === "" && schedule === "" && semester === "") {
      window.alert("Please fill out at least 1 field to search.");
    } 
    else {
    props.getSearch(true); 
      if(department===""&&catalog===""){
            //not searching
      }
      else if(department!=""&&catalog===""){
        props.getCourseID(department);
      }
      else if(department===""&&catalog!=""){
        props.getCourseID(catalog);
      }
      else{
        props.getCourseID(department+' '+catalog);
      }
    props.getSchedule(schedule);
    props.getSemester(semester);
    }
  }
  const handleCancel= () => {
      props.getSearch(false);
      setDepartment("");
      setCatalog("");
      setSchedule("");
      setSemester("");
    }
        return<>
        <div className="searchContainer">
            <div className="center">
                <div className="dropdown">
                    <SelectField
                    label="Department:"
                    value={department}
                    setValue={setDepartment}
                    options={deptOptions}
                    optionValueKey="value"
                    optionLabelKey="label"
                    required
                    />
                </div>
                <div className="dropdown">
                    <input className="inputSearch" placeholder="Search Catalog#" value={catalog} onChange={handleCatalog}></input>
                </div>
                <div className="dropdown">
                <SelectField
                    label="Schedule:"
                    value={schedule}
                    setValue={setSchedule}
                    options={scheduleOptions}
                    optionValueKey="value"
                    optionLabelKey="label"
                    required
                    />
                </div>
                <div className="dropdown">
                <SelectField
                    label="Semester:"
                    value={semester}
                    setValue={setSemester}
                    options={semesterOptions}
                    optionValueKey="value"
                    optionLabelKey="label"
                    required
                    />
                </div>
                <button className="searchButton" onClick={handleSubmit}>Search</button>
                <button className="CancelButton" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    </>
};