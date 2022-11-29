import './Profile.css';

import { Link } from 'react-router-dom';
import{ useState,useEffect} from 'react';
import { getUserInfo } from "../api/UserApi";
import { updateImage } from '../api/UserApi';
import { updateProfile } from '../api/UserApi';

export const Profile = () => {

  const [user, setUser]=useState(undefined);
  const [photo,setPhoto]=useState('');
  const [update, setUpdate]=useState(false);
  
  const [password, setPassword] = useState("");
  const [ID, setID] = useState(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [introduction, setIntroduction]=useState("");
  const [submitted, setSubmitted] = useState(false);
  const [numError, setNumError] = useState(false);
  
  //get user and update profile pic
  useEffect(()=>{
      getUserInfo().then(x => setUser(x));
  },[ update ]);

  //render user information
  useEffect(()=>{
    if(user){
        setFirstName(user[0].firstname);
        setLastName(user[0].lastname);
        setEmail(user[0].email);
        setID(user[0].student_id);
        setIntroduction(user[0].introduction);
    }
},[ user ]);

  if(!user){
     return<>Loading..</>
  }
    //Handling the form submission
      const handleID = (e) => {
        if (!isNaN(e.target.value)) {
          setID(e.target.value);
          setSubmitted(false);
          setNumError(false);
        } else {
          e.target.value = null; //get rid of initial
          setNumError(true);
        }
      };
    
      // Handling the password change
      const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
      };
    
      // Handling the name change
      const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setSubmitted(false);
      };
      // Handling the name change
      const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
      };
      const handleEmail= (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
      };
      const handleIntroduction=(e)=>{
        setIntroduction(e.target.value);
        setSubmitted(false);
      }
    
      // Showing error message if error is true
      const errorNum = () => {
        return (
          <div
            className="numError"
            style={{
              display: numError ? '' : 'none',
            }}>
            <p>*ID can only be numbers</p>
          </div>
        );
      };
    
      //Handling the form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        if (ID === "") {
            setID(user[0].student_id);
        }
        setSubmitted(true);
        updateProfile(firstName, lastName, email, introduction);
      }
    
  const handlePhoto = (e) => {
    setPhoto(e.target.value);
    setUpdate(false);
  };   
  
  const handleUpdate = (e) => {
    e.preventDefault();
      setUpdate(true);
      updateImage(photo);
    };

    return(<div className="profileContainer">
        <div className="textContainer">
            <img src={"logo1(6).png"} className="logo"/>
            <h1>Hello!! {user[0].username}</h1>
            <p className="smallp">Portrait: </p>
            <div className="Row">
            <div className="Column">
                {(() => {
                if(user[0].profile_pic===null||user[0].profile_pic===""){
                    return <img src='https://i.pinimg.com/originals/a8/57/00/a85700f3c614f6313750b9d8196c08f5.png' className="profilePic"/>
                }
                else{
                    return <img src={user[0].profile_pic} className="profilePic"/>
                }
                })()}
            </div>
            <div className="Column">
                <input className="updatePhoto" value={photo} onChange={handlePhoto}></input>
                <button onClick={handleUpdate}>Update Portrait</button>
            </div>
            </div>
            <div className="Row">
                <h5 className="Column">First Name: </h5>
                <input className="Column" type="text" value={firstName} onChange={handleFirstName} />
            </div>
            <div className="Row">
                <h5 className="Column">Last Name: </h5>
                <input className="Column" type="text" value={lastName} onChange={handleLastName} />
            </div>
            <div className="Row">
                <h5 className="Column">Email: </h5>
                <input className="Column" type="text" value={email} onChange={handleEmail} />
            </div>
            <div className="Row">
                <h5 className="Column">SMU ID: </h5>
                <div className="message">{errorNum()}</div>
                <input className="Column" type="text" value={ID} onChange={handleID} />
            </div>
            <h5>Introduction: </h5>
            <input className="introduction" type="" value={introduction} onChange={handleIntroduction} />
            {/* <div className="Row">
                <h5 className="Column">New Password: </h5>
                <input className="Column" type="password" value={password} onChange={handlePassword} />
            </div> */}
            <br/>
            <br/>
            <button onClick={handleSubmit}>Update</button>
            <button><Link to='/studentHome'>Back</Link></button>
        </div> 
    </div>
    );
};