import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormConst } from "../../constant/form";
import "./index.scss";
import { User } from "../../data/user";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleLogin = () => {
    const user = User.user.find(
      (item) => item.email === email && item.password === password
    );
    if (user) {
      setError(false);
      localStorage.setItem("userAccess", true);
      navigate("/");
    } else {
      setError(true);
    }
  };
  return (
    <div className="loginMainContainer">
      <div className="loginContainer">
        <div className="loginHeading">Login</div>
        <div className="loginSubContainer">
          <div className="loginSubHead">Email</div>
          <input
            placeholder={FormConst.EMAIL}
            type="email"
            className="inputField"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="loginSubContainer">
          <div className="loginSubHead">Password</div>
          <input
            placeholder={FormConst.PASSWORD}
            type="password"
            className="inputField"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="loginButton" onClick={handleLogin}>
          Login
        </button>
        {error && (
          <div className="errorMsg">Please Enter Correct Email or Password</div>
        )}
      </div>
    </div>
  );
};

export default Login;
