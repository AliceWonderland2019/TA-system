import { TextField, TextArea, SelectField } from "../postJob";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addApplication } from "../api/UserApi"
import { Application } from "./Application"

export const ApplyToJob = () => {
  const { application, setApplication} = useState("");
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
    addApplication(application).then(x => navigate('/studentHome'));
  }

  const merge = delta => setApplication({ ...application, ...delta });

  return (
    <>
      <form className="w-75 mx-auto rounded">
        <legend className="text-white px-3 p-2 mb-4 rounded">
         Application Form
        </legend>
        <div className="row mx-auto align-items-center">
          <TextField
            label="Job ID:"
            value={application.job_id}
            setValue={ job_id => merge({ job_id })}
            required
          />
        </div>
        <div className="row mx-auto align-items-center">
          <TextField
            label="Student ID:"
            value={application.student_id}
            setValue={student_id => merge({ student_id })}
            required
          />
        </div>
        <div className="row mx-auto align-items-center">
          <div className="col">
            <TextField
              label="First name:"
              value={application.firstname}
              setValue={firstname => merge({ firstname })}
              required
            />
          </div>
          <div className="col">
            <TextField
              label="Last name:"
              value={application.lastname}
              setValue={lastname => merge({ lastname })}
              required
            />
          </div>
        </div>
        <div className="row mx-auto align-items-center">
          <div className="col">
            <TextField
              label="Major:"
              value={application.major}
              setValue={major => merge({ major })}
              required
            />
          </div>
          <div className="col">
            <SelectField
              label="School Year:"
              value={application.schoolyear}
              setValue={schoolyear => merge({ schoolyear })}
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
            value={application.reason}
            setValue={reason => merge({ reason })}
            required
          />
        </div>
        <div className="row mx-auto align-items-center">
          <TextArea
            label="Briefly introduce yourself:"
            value={application.introduction}
            setValue={introduction => merge({ introduction })}
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
              onClick={() => { navigate('/studentHome')}}
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
