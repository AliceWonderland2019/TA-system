import axios from 'axios';

// axios.defaults.baseURL='http://localhost:8000';
// let apiConfig={
//         headers:{
//             Authorization:'Bearer ' + localStorage.getItem('token')
//         }
//   };

export const getJobList = () =>new Promise((resolve,reject)=>{
    // var myToken=localStorage.getItem('token');
    let apiConfig={
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('token')
            }
      };
    //   window.alert(apiConfig.headers.Authorization);
    axios.get('/student/jobs', apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
    });
});


// export const getJobs = (courseID,schedule,semester) =>new Promise((resolve,reject)=>{
//     // var myToken=localStorage.getItem('token');
//     let apiConfig={
//             headers:{
//                 Authorization:'Bearer ' + localStorage.getItem('token')
//             }
//     };
//     window.alert(apiConfig.headers.Authorization);
//     axios.get('/student/job',{ params: {course_id:courseID, schedule:schedule, semester:semester }, apiConfig})
//         .then(x => resolve(x.data))
//         .catch(x => {
//             alert(x);
//             reject(x);
//     });
// });

export const getJobs = (courseID,schedule,semester) =>new Promise((resolve,reject)=>{
    // var myToken=localStorage.getItem('token');
    let apiConfig={
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('token')
            }
    };
    axios.get(`/student/job?course_id=${courseID}&schedule=${schedule}&semester=${semester}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
    });
});


// export const getJob = (course_id) =>new Promise((resolve,reject)=>{
//     // var myToken=localStorage.getItem('token');
//     let apiConfig={
//             headers:{
//                 Authorization:'Bearer ' + localStorage.getItem('token')
//             }
//       };
//     //window.alert(localStorage.token);
//     axios.get('/user/job?',{ params: {course_id:department+' '+catalog, schedule:schedule, semester:semester}},apiConfig)
//         .then(x => resolve(x.data))
//         .catch(x => {
//             alert(x);
//             reject(x);
//     });
// });