import React from "react";
import "./styles/Home.css";
import { NavLink } from "react-router-dom";
import banner from "./images/e-library banner 2.png";
import hotbooks from "./images/hot-books.svg";
import ebooks from "./images/e-books.svg";
import news from "./images/news.png";
import Navbar from "./component/Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="flexbox-upper-side">
        <div className="upper-side">
          <img src={banner} alt="e-library-banner" />
          <div className="small-img option">
            <div className="riset-option">
              <h4>
                Klik <b>Riset</b> Buat kamu yang mau Riset di BNI. Detailnya ada
                di FAQ yaa...
              </h4>
              <a href="/riset">
                <button>View Riset</button>
              </a>
            </div>
            <div className="catalogue-option">
              <h4>
                Ada beberapa pilihan buku yang bisa kamu pinjam dan diantar
                gratis!
              </h4>
              <a href="/catalogue">
                <button>View Catalogue</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="card blue">
          <NavLink
            to="/kategori-buku-favorit"
            style={{ textDecoration: "none" }}
          >
            <img src={ebooks} alt="" />
            <h4>Hot Books!</h4>
          </NavLink>
        </div>

        <div className="card green">
          <NavLink to="/kategori-ebook" style={{ textDecoration: "none" }}>
            <img src={hotbooks} alt="" />
            <h4>E-Books!</h4>
          </NavLink>
        </div>
        <div className="card red">
          <NavLink to="/comingsoon" style={{ textDecoration: "none" }}>
            <img src={news} alt="" />
            <h4>Our News!</h4>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
