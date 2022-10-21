import "./LoginPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkAccount } from "../api/UserApi";
import { StudentHome } from "../home/StudentHome";

export const LoginPage = () => {
  // //localStorage.clear();
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePW = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitClick = () => {
    localStorage.clear();
    checkAccount(userName, password);
    // navigate('./studentHome');
  };

  return (
    <div className="Login-component">
      <div className="whiteBox">
        <img src={"logo1(6).png"} className="logo" />
        <h1>Log In</h1>
        <input
          type="text"
          class="form-control"
          placeholder="User Name"
          value={userName}
          onChange={handleChangeName}
        />
        <br />
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          value={password}
          onChange={handleChangePW}
        />
        <br />
        <button class="login-button" type="submit" onClick={handleSubmitClick}>
          Submit
        </button>
        <br />
        <h6>
          <Link to="/register" className="register">
            Don't have an account? Click here to register!
          </Link>
        </h6>
      </div>
    </div>
  );
};
