import axios from 'axios';

const baseEndpoint='http://localhost:8000';

export const createAccountStudent = (userName, password, firstName, lastName, ID) => new Promise((resolve, reject) => {
    axios.post(`${baseEndpoint}/user/student`, {username: userName, firstName: firstName, lastName:lastName, password: password, ID:ID})
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const checkAccount = (userName,password) =>{
    axios.post(baseEndpoint+'/session',{userName:userName, password:password})
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