import Axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./Footer";
import "./styles/KategoriBukuFavorit.css";
import img from "./images/kategori-buku ex.jpg";

function KategoriBukuFavorit() {
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    Axios.get("https://bcv-server-mysql.herokuapp.com/kategoribukufav").then(
      (response) => {
        setFavoriteList(response.data);
      }
    );
  }, []);
  return (
    <div>
      <Navbar />
      <div className="kategori-buku-favorit">
        <h1>Buku Terfavorit</h1>
        <div className="kategori-buku-favorit-flexbox">
          {favoriteList.map((val, key) => {
            return (
              <div className="kategori-buku-favorit-card" key={val.id}>
                <a href={`/books/${val.link}`}>
                  <img src={img} alt="" />
                  <h3>{val.judul_buku}</h3>
                </a>
                <h6>Penulis : {val.penulis}</h6>
                <h6>Terbit : {val.tahun_buku}</h6>
                <h6>
                  <b>Peminjam : {val.peminjam}</b>
                </h6>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default KategoriBukuFavorit;
