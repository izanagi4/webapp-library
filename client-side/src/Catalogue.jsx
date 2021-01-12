import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./Footer";
import "./styles/Catalogue.css";
import CataLogueImg from "./images/catalogue-book.svg";

function Catalogue() {
  return (
    <div className="catalogue">
      <Navbar />
      <h1>MENU CATALOGUE</h1>
      <div className="catalogue-flexbox">
        <div className="catalogue-categories">
          <a href="/kategoribuku">
            <h1>KATEGORI BUKU</h1>
          </a>
          <a href="/kategori-ebook">
            <h1>KATEGORI E-BOOK</h1>
          </a>
          <a href="/kategori-buku-favorit">
            <h1>FAVORITE BOOK</h1>
          </a>
        </div>
        <div className="catalogue-image">
          <img src={CataLogueImg} alt="Catalogue-img" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Catalogue;
