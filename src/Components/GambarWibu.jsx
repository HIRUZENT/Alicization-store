import React from "react";
import imgWibu from '../Components/Images/wibu2.png';
import "./GambarWibu.css";
const GambarWibu = () => {
  return (
    <div className="container-fluid containerWibu">
      <div className="row rowWibu align-items-center">
        <div className="col-12 text-center">
          <img src={imgWibu} alt="GambarWibu" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
export default GambarWibu;