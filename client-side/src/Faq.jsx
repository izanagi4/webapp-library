import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./Footer";
import "./styles/Faq.css";
import FaqQuestion from "./images/faq-question.svg";

function Faq() {
  return (
    <div className="faq">
      <Navbar />
      <div className="faq-flexbox">
        <div className="faq-leftside">
          <img src={FaqQuestion} alt="faq-question" />
        </div>
        <div className="faq-rightside">
          <h1>QNA</h1>
          <h4>Apa itu E-Library?</h4>
          <p>
            Merupakan sebuah platform perpustakaan digital yang dapat
            mempermudah pegawai BNI umum mengakses buku - buku yang tersedia di
            perpustakaan BCV. Selain itu mempermudah teman - teman mahasiswa
            untuk melakukan riset BNI sebagai objek. . .
            <a href="/">View more</a>
          </p>
        </div>
      </div>
      <div className="faq-bottomside">
        <h1>Got Idea?</h1>
        <p>
          Bagaimana dengan website e-library ini? berikanlah kritik & saran yang
          membangun. Saran anda akan langsung masuk ke admin dan atasan admin
          loh :)
        </p>
        <button a href="/">
          View More
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
