import React from "react";
import "./styles/StartPage.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Navbar from './component/Navbar'

function StartPage() {
  return (
    <>
      <Navbar />
      <div className="main">
        <h1>
          E-Library BNI <br /> Corporate University
        </h1>
        <p>
          Platform E-Library khusus para pegawai BNI46 dan para mahasiswa untuk
          melakukan riset pada BANK BNI...
        </p>
        <NavLink to="/home">
          <button>
            <strong>START NOW</strong>
          </button>
        </NavLink>
      </div>
      <Footer />
    </>
  );
}

export default StartPage;
