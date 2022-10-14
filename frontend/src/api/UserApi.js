import axios from 'axios';

axios.defaults.baseURL='http://localhost:8000';
const apiConfig={
//     Authorization:'Bearer'
        headers:{
            'Content-Type':'application/json;charset=utf-8',
            // 'Access-Control-Allow-Origin':'http://localhost:3000'
        }
  };

export const createAccountStudent = (userName,password,firstName,lastName,ID) => new Promise((resolve, reject) => {
    axios.post('/user/student', {username:userName,password:password,firstname:firstName,lastname:lastName,student_id:ID},apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            console.log('bang')
            alert(x);
            reject(x);
        });
});

export const checkAccount = (userName,password) =>{
    axios.post('/session',{userName:userName, password:password})
            .then(function(response){
                if(response.status===201){
                    window.alert("Successfully log in!!");
                    localStorage.setItem('token',response.data);
                }
                else{
                    window.alert("Logged with error");
                }
            })
            .catch(function(error){
                window.alert(error);
        });
}