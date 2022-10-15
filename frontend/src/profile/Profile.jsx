import './Profile.css';

import { Link } from 'react-router-dom';
import{ useState,useEffect } from 'react';
import { getUserInfo } from "../api/UserApi";
import { updateImage } from '../api/UserApi';

export const Profile = () => {

  const [user, setUser]=useState(undefined);
  const [photo,setPhoto]=useState('');
  const [update, setUpdate]=useState(false);
  useEffect(()=>{
      getUserInfo().then(x => setUser(x))
  },[ update ]);

  if(!user){
     return<>Loading..</>
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
                if(user[0].profile_pic===null){
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
            <h5>FirstName: {user[0].firstname} </h5>
            <h5>LastName: {user[0].lastname}</h5>
            <h5>Email: {user[0].email} </h5>
            <h5>SMU ID: {user[0].student_id}</h5>
            <br/>
            <br/>
            <br/>
            <button>Update</button>
            <button><Link to='/studentHome'>Back</Link></button>
        </div> 
    </div>
    );
};