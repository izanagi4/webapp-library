import Axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../Footer";
import bookImg from "../images/kategori-buku.jpg";
import "./books/styles/books.css";

const Counter = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    Axios.get("https://bcv-server-mysql.herokuapp.com/thrive").then(
      (response) => {
        setBookList(response.data);
      }
    );
  }, []);

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("https://bcv-server-mysql.herokuapp.com/login").then(
      (response) => {
        if (response.data.loggedIn === false) {
          alert("You must logged in first");
          window.history.back();
        }
      }
    );
  }, []);

  const selesaiPinjam = (id) => {
    Axios.post(
      `https://bcv-server-mysql.herokuapp.com/selesaipinjam/${id}`
    ).then((response) => {
      window.location.reload();
    });
  };

  const pinjam = (id) => {
    Axios.post(`https://bcv-server-mysql.herokuapp.com/pinjam/${id}`).then(
      (response) => {
        window.location.reload();
      }
    );
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
                Apa makna kesuksesan?
                <br />
                <br /> Banyak yang mengukurnya dengan dua hal : kekayaan dan
                kekuasaan. Namun ternyata upaya meraih keduanya menyebabkan
                orang mengorbankan kesehatan dan keharmonisan hidup. Selalu
                terhubung 24 jam tiap hari demi mengejar sukses malah membuat
                kita stres, lelah, sakit, serta putus hubungan dengan dunia
                nyata dan hal-hal yang benar-benar penting. Buku ini mengajak
                kita memaknai ulang kesuksesan yaitu "Metrik Ketiga" yang
                terdiri atas kesejahteraan, kebijaksanaan, ketakjuban, dan
                berderma.
                <br />
                <br />
                Dengan bebagai saran dan wawasan, Arianna Hufflington mengajak
                kita berubah demi kesuksesan pripurna bagi diri kita, tempat
                kerja kita, dan masyarakat. Arianna Hufflington ialah pendiri,
                presiden dan pemimpin redaksi Hufflington Post Media Group,
                salah satu grup media berita dan informasi paling berpengaruh di
                dunia. Arianna salah satu perempuan paling berpengaruh di dunia
                media, tapi kini juga dikenal sebagai pengantuj pembinaan
                kesehatan jiwa-raga.
              </p>
            </div>
          </div>

          <div id="detail">
            <div className="bg-gray">
              <p>Jumlah Buku : 15</p>
              <p>Tanggal Terbit : 25 Maret 2015</p>
              <p>ISBN : 9780753555422</p>
              <p>Bahasa : Indonesia</p>
              <p>Penerbit : Kepustakaan Populer Gramedia</p>
              {bookList.map((val, key) => {
                return (
                  <p>
                    Status :
                    {(val.peminjam === 15 && " Sedang di pinjam") ||
                      (val.peminjam < 15 && " Tersedia")}
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
