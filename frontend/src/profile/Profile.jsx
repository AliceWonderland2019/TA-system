import './Profile.css';

import { Link } from 'react-router-dom';
// import{ useState,useEffect } from 'react';
// import{getUserInfo} from '../api/AuthenAPI';
// import { getNFTByUser } from '../api/AuthenAPI';

export const Profile = () => {

  //const [user, setUser]=useState(undefined);


//   useEffect(()=>{
//       getUserInfo().then(x => setUser(x))
//   },[ ]);

//   if(!user){
//      return<>Please log in first</>
//   }

    return(<div className="profileContainer">
        <div className="textContainer">
            <img src={"logo1(6).png"} className="logo"/>
            <h1>Hello!! UserName</h1>
            <h5>FirstName: </h5>
            <h5>LastName: </h5>
            <h5>Email: </h5>
            <h5>SMU ID: </h5>
            <h5>Photo: </h5>
            <h5>New Password: </h5>

            <button>Update</button><button>Back</button>

        </div>
    
    
    </div>

    );
}