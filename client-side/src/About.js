import React from "react";
import "./styles/About.css";
import bniVid from "./video/bni-video.mp4";
import Navbar from "./component/Navbar";
import Footer from "./Footer";
import contact from "./images/contact-us.jpg";
import download from "./images/download.jpg";
import locate from "./images/locate.jpg";

function About() {
  return (
    <div>
      <Navbar />
      <video autoPlay loop muted src={bniVid} />
      <div className="about-container">
        <h1>About E-Library</h1>
        <p>
          E-Library merupakan media Digital perpustakaan yang di kelola oleh BNI
          Corporate University bertujuan untuk memudahkan setiap pegawai yang
          ingin mengakses buku-buku yang tersedia di Perpustakaan BNI Corporate
          University dengan mudah. Untuk Selengkapnya dapat klik video dibawah.
        </p>
      </div>
      <div className="facility-container">
        <div className="description-facility">
          <h1>Fasilitas</h1>
          <div className="traits">
            <ul>
              <li>
                <i className="circle fas fa-tv"></i>
                PC
              </li>
              <li>
                <i className="circle fas fa-wifi"></i>Internet & Intranet
              </li>
              <li>
                <i className="circle fas fa-print"></i>Print & Fotocopy
              </li>
              <li>
                <i className="circle far fa-handshake"></i>
                Fasilitas Meeting
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="services-container">
        <div className="description-services">
          <h1>Pelayanan Kami</h1>
          <p>
            Perpustakaan BNI Corporate University kami melayani peminjaman buku,
            Akses Internet dan Intranet, Print. Serta melayani kebutuhan riset
            mahasiswa S1 dan S3.
          </p>
          <button>Details</button>
        </div>
      </div>
      <div className="misc-container">
        <div className="description-misc">
          <p>
            BNI Corporate University akan selalu melakukan perbaikan tanpa henti
            serta peningkatan untuk lebih baik. E-Library hadir untuk memudahkan
            segala kebutuhan literatur untuk internal pegawai BNI serta
            mahasiswa S1 dan S3 melakukan penelitian.
          </p>
        </div>
        <div className="card-container">
          <div className="card-about">
            <img src={contact} alt="" />
            <br />
            <h1>Contacts</h1>
            <small>
              Pengunjung dapat menghubungi admin e-library apabila tidak
              menemukan solusi atas permasalahan pada e-library
            </small>
          </div>
          <div className="card-about">
            <img src={download} alt="" />
            <br />
            <h1>Download</h1>
            <small>
              Pengunjung dapat mendownload SOP Juklak & Juknis peminjaman dan
              Pengembalian buku, Riset dan lainnya.
            </small>
          </div>
          <div className="card-about">
            <img src={locate} alt="" />
            <br />
            <h1>Locater</h1>
            <small>
              Pengunjung dapat mengetahui Lokasi perpustakaan BNI, serta
              petunjuk untuk mengetahui lokasi buku berada.
            </small>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
