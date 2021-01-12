import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "./component/Navbar";
import Footer from "./Footer";
import "./styles/KategoriEbook.css";
import img from "./images/kategori-buku ex.jpg";

function KategoriEbook() {
  const [ebookList, setEbookList] = useState([]);

  useEffect(() => {
    Axios.get("https://bcv-server-mysql.herokuapp.com/kategoriebook").then(
      (response) => {
        setEbookList(response.data);
      }
    );
  }, []);

  return (
    <div className="kategori-ebook">
      <Navbar />
      <div className="kategori-ebook-flexbox">
        <h1>Menu E-Book</h1>
        <div className="kategori-ebook-column">
          {ebookList.map((val, key) => {
            return (
              <div className="kategori-ebook-card" key={val.id}>
                <a href="/comingsoon">
                  <img src={img} alt="" />
                  <h4>{val.judul_buku}</h4>
                </a>
                <h6>Client : {val.client}</h6>
                <h6>{val.design}</h6>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default KategoriEbook;
