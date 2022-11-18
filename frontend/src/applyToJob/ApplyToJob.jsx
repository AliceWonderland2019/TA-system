import { TextField, TextArea, SelectField } from "../postJob";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addApplication } from "../api/UserApi"
import { Application } from "./Application"

export const ApplyToJob = () => {
  const { application, setApplication} = useState("");
  const { studentID, setStudentID } = useState("");
  const { jobID, setJobID } = useState("");
  const { status, setStatus } = useState("");
  const { reason, setReason } = useState("");
  const { introduction, setIntroduction} = useState("");
  const { firstName, setFirstName } = useState("");
  const { lastName, setLastName } = useState("");
  const { major, setMajor } = useState("");
  const { schoolYear, setSchoolYear } = useState("");
  const shoolYearOptions = [
    { value: 1, label: "Freshman" },
    { value: 2, label: "Sophomore" },
    { value: 3, label: "Junior" },
    { value: 4, label: "Senior" },
    { value: 5, label: "Graduate" }
  ]

  useEffect(() => {
    addApplication({})
  }, []);

  const navigate = useNavigate();

  const handleApplyClick = () => {
    addApplication(new Application(jobID, studentID, status, firstName, lastName, major, schoolYear, reason, introduction)).then(x => navigate('/studentHome'));
  }

  return (
    <>
      <form className="w-75 mx-auto rounded">
        <legend className="text-white px-3 p-2 mb-4 rounded">
         Application Form
        </legend>
        <div className="row mx-auto align-items-center">
          <TextField
            label="Job ID:"
            value={jobID}
            setValue={setJobID}
            required
          />
        </div>
        <div className="row mx-auto align-items-center">
          <TextField
            label="Student ID:"
            value={studentID}
            setValue={setStudentID}
            required
          />
        </div>
        <div className="row mx-auto align-items-center">
          <div className="col">
            <TextField
              label="First name:"
              value={firstName}
              setValue={setFirstName}
              required
            />
          </div>
          <div className="col">
            <TextField
              label="Last name:"
              value={lastName}
              setValue={setLastName}
              required
            />
          </div>
        </div>
        <div className="row mx-auto align-items-center">
          <div className="col">
            <TextField
              label="Major:"
              value={major}
              setValue={setMajor}
              required
            />
          </div>
          <div className="col">
            <SelectField
              label="School Year:"
              value={schoolYear}
              setValue={setSchoolYear}
              options={shoolYearOptions}
              optionValueKey="value"
              optionLabelKey="label"
              required
            />
          </div>
        </div>
        <div className="row mx-auto align-items-center">
          <TextArea
            label="Briefly explain why you want to be a TA:"
            value={reason}
            setValue={setReason}
            required
          />
        </div>
        <div className="row mx-auto align-items-center">
          <TextArea
            label="Briefly introduce yourself:"
            value={introduction}
            setValue={setIntroduction}
            required
          />
        </div>
        <div className="row mx-auto px-3 justify-content-center">
          <div className=" col-2 mx-4 align-self-center">
            <button
              type="button"
              className="form-button-post"
              onClick={handleApplyClick}
            >
              Apply
            </button>
          </div>
          <div className="col-2 mx-4 align-self-center">
            <button
              type="button"
              className="form-button-cancel"
              onClick={() => {
                navigate('/studentHome')
              }}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="row mx p-3 justify-content-center">
          <div className="col-3">
            <img src={"logo1(6).png"} alt="smu logo" />
          </div>
        </div>
      </form>
    </>
  );
};
