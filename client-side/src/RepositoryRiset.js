import React from "react";
import "./styles/Repository.css";

function RepositoryRiset() {
  return (
    <div className="repository-bni">
      <div className="repository-column">
        <h1>REPOSITORY RISET BNI</h1>
        <div className="repository-buttons">
          <div className="repository-buttons-desc">
            <a href="/databaseriset">
              <button>KANTOR PUSAT</button>
            </a>
            <p>
              Kumpulan riset mahasiswa yang melakukan penelitian dengan subjek
              di kantor pusat atau ke divisi yang ada dalam satuan bni
            </p>
          </div>
          <div className="repository-buttons-desc">
            <a href="/databaseriset">
              <button>KANTOR WILAYAH</button>
            </a>
            <p>
              Kumpulan riset mahasiswa yang melakukan penelitian dengan subjek
              di kantor wiliayah atau ke unit-unit yang ada dalam satuan bni
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepositoryRiset;
