import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./Footer";
import "./styles/Riset.css";

function Riset() {
  return (
    <div className="riset">
      <Navbar />
      <div className="riset-container">
        <h1>RISET BNI</h1>
        <p>
          Hai Movers kalian tertarik untuk melihat hasil karya mahasiswa atau
          mahasiswi yang ini melakukan penelitian di BNI, tentunya mereka adalah
          Mahasiswa jenjang S1 dan S3. Jika ingin melakukan penelitian
          melengkapi ketentuan di bawah.
        </p>
        <a href="/repositoryriset">
          <button>Klik Disini!</button>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Riset;
