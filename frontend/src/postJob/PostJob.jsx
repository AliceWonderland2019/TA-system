import "./PostJob.css";
import { useState } from "react";
// import { createJob } from "../api/ApplicationApi";
import { createJob } from "../api/UserApi";
import { Job } from "./Job";
import {
  TextField,
  TextArea,
  SelectField,
  Calendar,
} from "../components/common";
import { useNavigate } from "react-router-dom";

export const PostJobPage = () => {
  const [ employeeID, setEmployeeID ] = useState("");
  const [status, setStatus] = useState("1");
  const [ classes, setClasses ] = useState("");
  const [ classId, setClassId ] = useState("");
  const [ schedule, setSchedule ] = useState("");
  const [ semster, setSemster ] = useState("");
  const [ jobTitle, setJobTitle ] = useState("");
  const [ jobDescription, setJobDescription ] = useState("");
  const [endDate, setEndDate] = useState(new Date());
  const [postDate, setPostDate] = useState(new Date());
  const [ salary, setSalary ] = useState(""); 
  const positionOptions = [
    { value: "TA Head", label: "TA Head" },
    { value: "TA Assisstant", label: "TA Assisstant" },
  ];

  const semsterOptions = [
    { value: "SPRING 2023", label: "SPRING 2023" },
    { value: "FALL 2023", label: "FALL 2023" },
  ];

  const navigate = useNavigate();
  // .then(x => navigate('/studentHome')
  const handlePostClick = () => {
    createJob(
      new Job(employeeID, classes, classId, schedule, semster, jobTitle, jobDescription, postDate, endDate, salary, status));
  };
  const handleCancelClick = () => {
    setEmployeeID("");
    setClassId("");
    setClasses("");
    setSchedule("");
    setSemster("");
    setJobTitle("");
    setJobDescription("");
    setEndDate("");
    setSalary("");
  };

  return (
    <>
      <form className="w-75 mx-auto rounded">
        <legend className="text-white p-2 mb-4 rounded">Post a new job!</legend>

        <div className="row mx-auto align-items-center">
          <TextField
            label="Employee ID"
            value={employeeID}
            setValue={setEmployeeID}
            required
          />
        </div>

        <div className="row mx-auto align-items-center">
          <div className="col">
            <TextField
              label="Course Name:"
              value={classes}
              setValue={setClasses}
              required
            />
          </div>
          <div className="col">
            <TextField
              label="Course ID:"
              value={classId}
              setValue={setClassId}
              required
            />
          </div>
        </div>

        <div className="row mx-auto align-items-center">
          <div className="col">
            <TextField
              label="Schedule:"
              value={schedule}
              setValue={setSchedule}
              required
            />
          </div>
          <div className="col">
            <SelectField
              label="Semster:"
              value={semster}
              setValue={setSemster}
              options={semsterOptions}
              optionValueKey="value"
              optionLabelKey="label"
              required
            />
          </div>
        </div>

        <div className="row mx-auto align-items-center">
          <SelectField
            label="Job title:"
            value={jobTitle}
            setValue={setJobTitle}
            options={positionOptions}
            optionValueKey="value"
            optionLabelKey="label"
            required
          />
        </div>
        <div className="row mx-auto align-items-center">
          <TextArea
            label="Job description & Qualifications:"
            value={jobDescription}
            setValue={setJobDescription}
            required
          />
        </div>
        <div className="row mx-auto align-items-center">
          <div className="col">
            <Calendar label="Deadline:" value={endDate} setValue={setEndDate} />
          </div>
        </div>
        <div className="row mx-auto align-items-center">
          <TextField
            label="Compensation: $"
            value={salary}
            setValue={setSalary}
            required
          />
        </div>
        <div className="row mx-auto p-3 justify-content-center">
          <div className=" col-2 m-4 align-self-center">
            <button
              type="button"
              className="form-button-post"
              onClick={handlePostClick}
            >
              Post
            </button>
          </div>
          <div className="col-2 m-4 align-self-center">
            <button
              type="button"
              className="form-button-cancel"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="row mx-auto p-3 justify-content-center">
          <div className="col-3">
            <img src={"logo1(6).png"} alt="smu logo" />
          </div>
        </div>
      </form>
    </>
  );
};