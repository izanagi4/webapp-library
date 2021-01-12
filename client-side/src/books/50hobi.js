import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../component/Navbar";
import Footer from "../Footer";
import bookImg from "../images/kategori-buku2.jpg";
import "./books/styles/books.css";

const Counter = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    Axios.get("https://bcv-server-mysql.herokuapp.com/50hobi").then((response) => {
      setBookList(response.data);
    });
  }, []);

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("https://bcv-server-mysql.herokuapp.com/login").then((response) => {
      if (response.data.loggedIn === false) {
        alert("You must logged in first");
        window.history.back();
      }
    });
  }, []);

  const selesaiPinjam = (id) => {
    Axios.post(`https://bcv-server-mysql.herokuapp.com/selesaipinjam/${id}`).then((response) => {
      window.location.reload();
    });
  };

  const pinjam = (id) => {
    Axios.post(`https://bcv-server-mysql.herokuapp.com/pinjam/${id}`).then((response) => {});
  };

  const displayDescription = () => {
    document.getElementById("detail").style.display = "none";
    document.getElementById("description").style.display = "block";
    document.getElementById("desc-button").style.textDecoration = "underline";
    document.getElementById("det-button").style.textDecoration = "none";
  };

  const displayDetail = () => {
    document.getElementById("description").style.display = "none";
    document.getElementById("detail").style.display = "block";
    document.getElementById("det-button").style.textDecoration = "underline";
    document.getElementById("desc-button").style.textDecoration = "none";
  };

  useEffect(() => {
    document.getElementById("detail").style.display = "none";
  });
  return (
    <div className="kategori-buku-information">
      <Navbar />
      <div className="kategori-buku-information-flexbox">
        <div className="kategori-buku-information-top">
          <img src={bookImg} alt="" />
          <div className="kategori-buku-information-flexcol">
            {bookList.map((val, key) => {
              return (
                <div
                  className="kategori-buku-information-top-detail"
                  key={val.id}
                >
                  <h1>{val.judul_buku}</h1>
                  <h3>{val.penulis}</h3>
                  <h5>{val.tahun_buku}</h5>
                  <h4>
                    <b>Jumlah Peminjam : {val.peminjam} </b>
                  </h4>
                  <div className="kategori-buku-information-top-buttons">
                    <button
                      onClick={() => {
                        pinjam(val.id);
                      }}
                    >
                      {" "}
                      Pinjam Buku
                    </button>
                    <button
                      onClick={() => {
                        selesaiPinjam(val.id);
                      }}
                    >
                      {" "}
                      Selesai Pinjam
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="kategori-buku-information-bottom">
          <button id="desc-button" onClick={displayDescription}>
            Deskripsi
          </button>
          <button id="det-button" onClick={displayDetail}>
            Detail
          </button>
          <div id="description">
            <div className="bg-gray">
              <p>
                Jangan pandang remeh hobi! Justru banyak orang yang mendulang
                kesuksesan berbekal hobi. Dahulu mungkin hobi kamu dianggap
                hanya menghabiskan waktu, tetapi sekarang kamu punya kesempatan
                menunjukkan betapa banyak manfaat hobimu. Buku ini akan mengajak
                kamu menyelami bermacam-macam hobi kekinian yang sangat bisa
                mendatangkan cuan sampai menjadi profesi yang membanggakan.
              </p>
            </div>
          </div>

          <div id="detail">
            <div className="bg-gray">
              <p>Jumlah Buku : 10</p>
              <p>Tanggal Terbit : 07 Desember 2020</p>
              <p>ISBN : 9786230402555</p>
              <p>Bahasa : Indonesia</p>
              <p>Penerbit : Elex Media Komputindo</p>
              {bookList.map((val, key) => {
                return (
                  <p>
                    Status :
                    {(val.peminjam === 10 && " Sedang di pinjam") ||
                      (val.peminjam < 10 && " Tersedia")}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Counter;
