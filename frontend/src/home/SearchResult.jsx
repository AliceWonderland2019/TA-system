import "./JobMarket.css";
import { useState,useEffect } from 'react';
import {getJobs} from "../api/JobApi";

export const SearchResult = ({ courseID,schedule,semester}) => {
    const [Jobs, setJobs ]=useState([]);

    useEffect(()=>{
        console.log(courseID,schedule,semester);
        getJobs(courseID,schedule,semester).then(y => setJobs(y));
    },[courseID,schedule,semester ]);

    return<>   
        <div id="JobContainer">
            <div className="center">
            <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Position</th>
                <th>Schedule</th>
                <th>Semester</th>
                <th>Salary</th>
            </tr>
            {Jobs && Jobs.map((Job, index) => 
                <tr className="JobRow">
                    <td className="JobSumId">{Job.course_id}</td>
                    <td className="JobSumName">{Job.course_name}</td>
                    <td className="JobSumPosition">{Job.position}</td>
                    <td className="JobSumSchedule">{Job.schedule}</td>
                    <td className="JobSumSemester">{Job.semester}</td>
                    <td className="JobSumSalary">{Job.salary}</td>
                </tr>
            )
            }
            </div>
        </div>
    </>
};
