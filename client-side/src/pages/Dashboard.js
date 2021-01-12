import React, { useEffect, useState } from "react";
import Axios from "axios";
import Sidebar from "../component/Sidebar";
import "../styles/Dashboard.css";

function Dashboard() {
  const [favoriteList, setFavoriteList] = useState([]);
  const [kategoriList, setKategoriList] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    Axios.get("https://bcv-server-mysql.herokuapp.com/rankingbuku").then(
      (response) => {
        setFavoriteList(response.data);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("https://bcv-server-mysql.herokuapp.com/kategoribuku").then(
      (response) => {
        setKategoriList(response.data);
      }
    );
  }, []);

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
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-flexbox">
        <div className="most-accessed-box">
          <h1>Buku Tersering diakses</h1>
          {favoriteList.map((val, key) => {
            return (
              <div className="most-accessed-book" key={val.id}>
                <h2>{val.judul_buku}</h2>
                <small>Tahun Terbit Buku : {val.tahun_buku}</small>
                <small>Jumlah Akses : {val.peminjam}</small>
              </div>
            );
          })}
        </div>
        <div className="ebook-list-box">
          <h1>Daftar E-Book</h1>
          <table className="tg" border="black">
            <thead>
              <tr>
                <th className="tg-0e8q">No.</th>
                <th className="tg-0e8q">Judul Buku</th>
                <th className="tg-0e8q">Tahun Terbit Buku</th>
              </tr>
            </thead>
            <tbody>
              {kategoriList.map((val, key) => {
                return (
                  <tr>
                    <td className="tg-0lax">{val.id}</td>
                    <td className="tg-0lax">{val.judul_buku}</td>
                    <td className="tg-0lax">{val.tahun_buku}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
