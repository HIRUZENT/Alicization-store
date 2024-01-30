import React from "react";
import "./Topup.css";
const Topup = () => {
    const directBack = () =>{
        window.history.back()
    }
  return (
    <>
      <div className="row row-back-topup">
        <h1 onClick={directBack}>back</h1>
      </div>
      <div className="container container-topup">
        <div className="row">
          <div className="col-12">
            <h1>Segera hadir</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topup;
