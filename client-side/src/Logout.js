import React, { useEffect } from "react";
import Axios from "axios";

function Logout() {
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/logout").then((response) => {
      if (response.data.loggedIn === false) {
        window.location.href = "/";
        alert("You're Logged out now");
      } else {
        window.location.href = "/";
        alert("You're Logged out now");
      }
    });
  });
  return <div></div>;
}

export default Logout;
