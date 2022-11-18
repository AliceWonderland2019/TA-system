import axios from 'axios';

axios.defaults.baseURL='http://localhost:8000';
let apiConfig={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('token')
        }
  };

export const getJobList = () =>new Promise((resolve,reject)=>{
    // var myToken=localStorage.getItem('token');
    let apiConfig={
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('token')
            }
      };
    //window.alert(localStorage.token);
    axios.get('/student/jobs', apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
    });
});