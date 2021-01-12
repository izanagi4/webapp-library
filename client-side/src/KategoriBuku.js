import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "./component/Navbar";
import Footer from "./Footer";
import img from "./images/kategori-buku ex.jpg";
import "./styles/KategoriBuku.css";

function KategoriBuku() {
  const [kategoriList, setKategoriList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Axios.get("https://bcv-server-mysql.herokuapp.com/kategoribuku").then(
      (response) => {
        setKategoriList(response.data);
      }
    );
  }, []);

  return (
    <div className="kategori-buku">
      <Navbar />
      <div className="kategori-buku-flexbox">
        <div className="kategori-buku-leftside">
          <h1>Kategori Buku</h1>
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="kategori-buku-rightside">
          {kategoriList
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.judul_buku.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => {
              return (
                <div className="kategori-buku-card" key={val.id}>
                  <a href={`/books/${val.link}`}>
                    <img src={img} alt="booked" />
                    <h4>{val.judul_buku}</h4>
                    <h5>
                      {val.tahun_buku} <br /> {val.penulis}
                    </h5>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default KategoriBuku;
