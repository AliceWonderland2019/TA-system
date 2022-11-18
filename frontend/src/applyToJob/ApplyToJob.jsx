import {
  TextField,
  TextArea,
  Calendar,
  SelectField,
} from "../postJob";
import { useState } from "react";

export const ApplyToJob = ({ onApply }) => {
  const { firstName, setFirstName } = useState("");
  const { lastName, setLastName } = useState("");
  const { address, setAddress } = useState("");
  const { city, setCity } = useState("");
  const { state, setState } = useState("");
  const { zipCode, setZipCode } = useState("");
  const { whyTA, setWhyTA } = useState("");
  const { jobID, setJobID } = useState("");
  const stateOptions = [
    { value: 1, label: "Alabama" },
    { value: 2, label: "Alaska" },
    { value: 3, label: "Arizona" },
    { value: 4, label: "Arkansas" },
    { value: 5, label: "American Samoa" },
    { value: 6, label: "California" },
    { value: 7, label: "Colorado" },
    { value: 8, label: "Connecticut" },
    { value: 9, label: "Delaware" },
    { value: 10, label: "District of Columbia" },
    { value: 11, label: "Florida" },
    { value: 12, label: "Georgia" },
    { value: 13, label: "Guam" },
    { value: 14, label: "Hawaii" },
    { value: 15, label: "Idaho" },
    { value: 16, label: "Illinois" },
    { value: 17, label: "Indiana" },
    { value: 18, label: "Iowa" },
    { value: 19, label: "Kansas" },
    { value: 20, label: "Kentucky" },
    { value: 21, label: "Louisiana" },
    { value: 22, label: "Maine" },
    { value: 23, label: "Maryland" },
    { value: 24, label: "Massachusetts" },
    { value: 25, label: "Michigan" },
    { value: 26, label: "Minnesota" },
    { value: 27, label: "Mississippi" },
    { value: 28, label: "Missouri" },
    { value: 29, label: "Montana" },
    { value: 30, label: "Nebraska" },
    { value: 31, label: "Nevada" },
    { value: 32, label: "New Hampshire" },
    { value: 33, label: "New Jersey" },
    { value: 34, label: "New Mexico" },
    { value: 35, label: "New York" },
    { value: 36, label: "North Carolina" },
    { value: 37, label: "North Dakota" },
    { value: 38, label: "Northern Mariana Islands" },
    { value: 39, label: "Ohio" },
    { value: 40, label: "Oklahoma" },
    { value: 41, label: "Oregon" },
    { value: 42, label: "Pennsylvania" },
    { value: 43, label: "Puerto Rico" },
    { value: 44, label: "Rhode Island" },
    { value: 45, label: "South Carolina" },
    { value: 46, label: "South Dakota" },
    { value: 47, label: "Tennessee" },
    { value: 48, label: "Texas" },
    { value: 49, label: "Trust Territories" },
    { value: 50, label: "Utah" },
    { value: 51, label: "Vermont" },
    { value: 52, label: "Virginia" },
    { value: 53, label: "Virgin Islands" },
    { value: 54, label: "Washington" },
    { value: 55, label: "West Virginia" },
    { value: 56, label: "Wisconsin" },
    { value: 57, label: "Wyoming" },
  ];

  return (
    <>
      <form className="w-75 mx-auto rounded">
        <legend className="text-white p-2 mb-4 rounded">
          Apply!
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
          <TextField
            label="Address:"
            value={address}
            setValue={setAddress}
            required
          />
        </div>
        <div className="row mx-auto align-items-center">
          <div className="col">
            <TextField
              label="City:"
              value={city}
              setValue={setCity}
              required
            />
          </div>
          <div className="col-md-3">
            <SelectField
              label="State:"
              value={state}
              setValue={setState}
              options={stateOptions}
              optionValueKey="value"
              optionLabelKey="label"
              required
            />
          </div>
          <div className="col-3">
            <TextField
              label="Zip code:"
              value={zipCode}
              setValue={setZipCode}
              required
            />
          </div>
        </div>
        <div className="row mx-auto align-items-center">
          <div className="col">
            <Calendar label="Available to start:" />
          </div>
        </div>
        <div className="row mx-auto align-items-center">
          <TextArea
            label="Briefly explain why you want to be a TA:"
            value={whyTA}
            setValue={setWhyTA}
            required
          />
        </div>
        <div className="row mx-auto p-3 justify-content-center">
          <div className=" col-2 m-4 align-self-center">
            <button
              type="button"
              className="form-button-post"
              onClick={() => {
                onApply(firstName, lastName, address, city, state);
                setFirstName("");
                setLastName("");
                setAddress("");
                setCity("");
              }}
            >
              Apply
            </button>
          </div>
          <div className="col-2 m-4 align-self-center">
            <button
              type="button"
              className="form-button-cancel"
              onClick={() => {
                onApply(firstName, lastName, address, city, state);
                setFirstName("");
                setLastName("");
                setAddress("");
                setCity("");
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
