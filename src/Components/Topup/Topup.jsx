import React from "react";
import falzee from "../Images/falze.png";
import "./Topup.css";
const Topup = () => {
  const directBack = () => {
    window.history.back();
  };
  return (
    <>
      <div className="row row-back-topup">
        <h1 onClick={directBack}>back</h1>
      </div>
      <div className="container container-topup">
        <div className="row">
          <div className="col-12 img-falzee">
            <img src={falzee} alt="Falzee Store" />
          </div>
          <div className="col-12 col-collab">
            <p>Coming Soon</p>
            <h6>Alicization Store x Falzee Store</h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topup;
