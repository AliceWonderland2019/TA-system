import "./PostJob.css";
import { TextField, TextArea, SelectField } from "../postJob";
import { Calendar } from "./Calendar";
import { useState } from "react";

export const PostJobPage = ({ onJobPosted }) => {
  const { classes, setClasses } = useState("");
  const { jobTitle, setJobTitle } = useState("");
  const { jobDescription, setJobDescription } = useState("");
  const { qualifications, setQualifications } = useState("");
  const classOptions = [
    { value: 1, label: "CS 1341" },
    { value: 2, label: "CS 1342" },
    { value: 3, label: "CS 3345" },
  ];

  return (
    <>
        <form className="w-75 mx-auto rounded">
          <legend className="text-white p-2 mb-4 rounded">
            Post a new job!
          </legend>
          <div className="row mx-auto align-items-center">
            <SelectField
              label="CS Class:"
              value={classes}
              setValue={setClasses}
              options={classOptions}
              optionValueKey="value"
              optionLabelKey="label"
              required
            />
          </div>
          <div className="row mx-auto align-items-center">
            <TextField
              label="Job title:"
              value={jobTitle}
              setValue={setJobTitle}
              required
            />
          </div>
          <div className="row mx-auto align-items-center">
            <TextArea
              label="Job description:"
              value={jobDescription}
              setValue={setJobDescription}
              required
            />
          </div>
          <div className="row mx-auto align-items-center">
            <TextField
              label="Qualifications:"
              value={qualifications}
              setValue={setQualifications}
              required
            />
          </div>
          <div className="row mx-auto align-items-center">
            <div className="col">
              <Calendar label="Start date:" />
            </div>
            <div className="col">
              <Calendar label="End date:" />
            </div>
          </div>
          <div className="row mx-auto align-items-center">
            <TextField
              label="Compensation: $"
              value={jobTitle}
              setValue={setJobTitle}
              required
            />
          </div>
            <div className="row mx-auto p-3 justify-content-center">
              <div className=" col-2 m-4 align-self-center">
                <button
                  type="button"
                  className="form-button-post"
                  onClick={() => {
                    onJobPosted(classes, jobTitle, jobDescription);
                    setClasses("");
                    setJobTitle("");
                    setJobDescription("");
                  }}
                >
                  Post
                </button>
              </div>
              <div className="col-2 m-4 align-self-center">
                <button
                  type="button"
                  className="form-button-cancel"
                  onClick={() => {
                    onJobPosted(classes, jobTitle, jobDescription);
                    setClasses("");
                    setJobTitle("");
                    setJobDescription("");
                  }}
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
