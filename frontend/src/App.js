import './App.css';
import {  Route, Routes } from 'react-router-dom';
import { LoginPage } from "./login/LoginPage";
import { Register} from "./register/Register";

function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<LoginPage/>}/>
      <Route exact path="/register" element={<Register/>}/>
    </Routes>
    </div>
  );
}

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
