import React, { useState, useEffect } from "react";
import "./styles/login.css";
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;
  const register = () => {
    Axios.post("https://bcv-server-mysql.herokuapp.com/register", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        alert("Successfully Registered!");
        window.location.href = "/login";
      } else {
        alert("failed");
      }
    });
  };

  const login = () => {
    Axios.post("https://bcv-server-mysql.herokuapp.com/login", {
      username: usernameLogin,
      password: passwordLogin,
    }).then((response) => {
      if (response.data.message) {
        alert("Wrong username or password!");
        window.location.reload();
      } else {
        alert(`Welcome ${loginStatus}`);
        window.location.reload();
        window.location.href = "/home";
      }
    });
  };

  useEffect(() => {
    Axios.get("https://bcv-server-mysql.herokuapp.com/login").then(
      (response) => {
        if (response.data.loggedIn === true) {
          setLoginStatus(response.data.user[0].username);
        }
      }
    );
  }, []);

  const ChangetoRegist = () => {
    document.getElementById("login-layout").style.display = "none";
    document.getElementById("register-layout").style.display = "flex";
  };

  const ChangetoLogin = () => {
    document.getElementById("login-layout").style.display = "flex";
    document.getElementById("register-layout").style.display = "none";
  };
  return (
    <div className="login-page">
      <div className="register-user" id="register-layout">
        <h3>Register</h3>
        <input
          placeholder="Username"
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={register}>Register!</button>
        <h6 onClick={ChangetoLogin}>Already have an account? Login now!</h6>
        <ul className="social-media circle-register">
          <li>
            <a className="circle" href="/#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a className="circle" href="/#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a className="circle" href="/#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="login-user" id="login-layout">
        <h3>Login</h3>
        <input
          placeholder="Username"
          type="text"
          onChange={(event) => {
            setUsernameLogin(event.target.value);
          }}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setPasswordLogin(event.target.value);
          }}
        />
        <button onClick={login}>Login!</button>
        <h6 onClick={ChangetoRegist}>Haven't registered yet? Create one!</h6>
        <ul className="social-media">
          <li>
            <a className="circle" href="/#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a className="circle" href="/#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a className="circle" href="/#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
