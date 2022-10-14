import axios from 'axios';

axios.defaults.baseURL='http://localhost:8000';
const apiConfig={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('token')
        }
  };

export const createAccountStudent = (userName,password,firstName,lastName,ID) => new Promise((resolve, reject) => {
    axios.post('/user/student', {username:userName,password:password,firstname:firstName,lastname:lastName,student_id:ID})
        .then(function(response){
            window.location.href="./";
            window.alert("Successfully registered");
        })
        .catch(function(error){
            if(error.response.status===500){
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
        if( localStorage.token!=null){
        //console.log(localStorage.token)
        }
    // axios.get(`${baseEndpoint}/nft/${id}`, apiConfig)
    axios.get('/student', apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
    });
});