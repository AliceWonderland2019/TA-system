import axios from 'axios';

// axios.defaults.baseURL='http://localhost:8000';
// let apiConfig={
//         headers:{
//             Authorization:'Bearer ' + localStorage.getItem('token')
//         }
//   };

export const createAccountStudent = (userName,password,firstName,lastName,ID) => new Promise((resolve, reject) => {
    axios.post('/user/student', {username:userName,password:password,firstname:firstName,lastname:lastName,student_id:ID})
        .then(function(response){
            window.location.href="./";
            window.alert("Successfully registered");
        })
        .catch(function(error){
            if(error.response.status===400){
                window.alert("Username already taken");
            }
            else{
                window.alert(error);
            }
        });
});

export const checkAccount = (userName,password) =>new Promise((resolve, reject) =>{
    axios.post('/session',{username:userName, password:password})
            .then(function(response){
                if(response.status===201){
                    //window.alert("Successfully log in!!");
                    //localStorage.clear();
                    localStorage.setItem('token',response.data);
                    window.location.href="./studentHome";
                }
                else{
                    window.alert("Logged with error");
                }
            })
            .catch(function(error){
                if(error.response.status===401){
                    window.alert("Unmatched username & password");
                }
                else{
                    window.alert(error);
                }
        });
});
export const getUserInfo = () =>new Promise((resolve,reject)=>{
    // var myToken=localStorage.getItem('token');
    let apiConfig={
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('token')
            }
      };
    //window.alert(localStorage.token);
    axios.get('/student', apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
    });
});

export const updateImage = (photo) =>new Promise((resolve,reject)=>{
    let apiConfig={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('token')
        }
  };
    //window.alert(localStorage.token);
    axios.put('/student/picture', {profile_pic:photo}, apiConfig)
    .then(function(response){
        console.log("Successfully changed!!");
    })
    .catch(function(error){
        window.alert(error);
    });
});

export const updateProfile=(firstName,lastName,email,introduction) =>new Promise((resolve,reject)=>{
    let apiConfig={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('token')
        }
  };
  axios.put('/student/update', {firstname:firstName,lastname:lastName,email:email,introduction:introduction},apiConfig)
  .then(function(response){

  })
  .catch(function(error){
    window.alert(error);
  })
});

export const addApplication = (application) => new Promise((resolve, reject) => {
    let apiConfig={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('token')
        }
    };
    console.log(application);
    axios.post(`/student/newapplications`, application, apiConfig) //根据链接里的id返回整个account
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
}); //method

// post a job
export const createJob = (job) => new Promise((resolve, reject) => {
    let apiConfig={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('token')
        }
};
axios.post(`/employee/newjobs`, job, apiConfig)
    .then(x => resolve(x.data))
    .catch(x => {
        alert(x);
        reject(x);
    });
});