import Axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Footer from "./Footer";
import "./styles/UploadRiset.css";

function UploadRiset() {
  const [namaLengkap, setNamaLengkap] = useState();
  const [univ, setUniv] = useState();
  const [namaPeneliti, setNamaPeneliti] = useState();
  const [role, setRole] = useState("");

  const addRiset = () => {
    Axios.post("https://bcv-server-mysql.herokuapp.com/upload", {
      namaLengkap: namaLengkap,
      univ: univ,
      namaPeneliti: namaPeneliti,
    }).then(() => {
      alert("Riset added!");
      window.location.reload();
    });
  };

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("https://bcv-server-mysql.herokuapp.com/login").then(
      (response) => {
        if (response.data.loggedIn === true) {
          setRole(response.data.user[0].role);
          console.log(response.data);
        }
      }
    );
  }, []);

  useEffect(() => {
    if (role === "user") {
      alert("You don't have the privilege to access this page");
      window.location.href = "/";
    }
  });

  return (
    <div className="uploadriset-page">
      {role === "user" ||
        ("null" &&
          alert(
            "you don't have the privelege to access this page!",
            window.history.back()
          ))}
      <Navbar />
      <div className="uploadriset-information">
        <h1>REGISTRASI REPOSITORY BNI</h1>
        <div className="uploadriset-datadiri">
          <label>Nama Lengkap</label>
          <input
            type="text"
            onChange={(event) => {
              setNamaLengkap(event.target.value);
            }}
          />
          <label>Universitas</label>
          <input
            type="text"
            onChange={(event) => {
              setUniv(event.target.value);
            }}
          />
          <label>Nama Penelitian</label>
          <input
            type="text"
            onChange={(event) => {
              setNamaPeneliti(event.target.value);
            }}
          />
        </div>
        <button onClick={addRiset}>Submit</button>
      </div>
      <Footer />
    </div>
  );
}

export default UploadRiset;
