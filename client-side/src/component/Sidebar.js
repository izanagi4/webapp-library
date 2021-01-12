import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData.js";
import img from "../images/sidebar-profile.png";

function Sidebar() {
  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("https://bcv-server-mysql.herokuapp.com/login").then(
      (response) => {
        if (response.data.loggedIn === true) {
          setLoginStatus(response.data.user[0].username);
        } else {
          alert("You're not logged in!");
          window.history.href = "";
        }
      }
    );
  }, []);
  return (
    <div className="sidebar">
      <img src={img} alt="sidebar-profile" />
      <h4>{loginStatus}</h4>
      <ul className="sidebar-list">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === val.link ? "active" : ""}
              className="sidebar-row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
