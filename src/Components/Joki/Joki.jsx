import React from "react";
import Navbar from "../Navbar";
// import IconContact from '../IconContact';
import silverWolf from "../Images/silwolf.png";
import herta from "../Images/herta.png";
import charlote from "../Images/charlote.png";
import woldrender from "../Images/wolfrender.png";
import traiblazers from "../Images/traiblazers.png";
import himeko from "../Images/himekochans.png";
import hook from "../Images/hook.png";
// import caelus from "../Images/caelus.png";
import "./Joki.css";
const Joki = () => {
  return (
    <>
      <Navbar />
      {/* <IconContact/> */}
      <div className="container">
        <div className="row header-joki">
          <h1>
            Joki Honkai <span>Star Rail</span>
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="row header-kategori">
          <h2>
            Forgotten
            <span> Hall</span>
          </h2>
        </div>
      </div>
      <div className="container-fluid container-card">
        <div className="row row-card">
          <div className="col-md-4 col-lg-3 col-sm-4 col-6 d-flex column-card cards1">
            <a href="/joki/jarlo-six" className="d-flex">
              <img src={herta} alt="Card_2" />
              <h4>JARLIO-VI</h4>
            </a>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-4 col-6 d-flex column-card cards2">
            <a href="/joki/luofu" className="d-flex">
              <img src={hook} alt="Card_2" />
              <h4>THE XIANZHOU LOUFU</h4>
            </a>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-4 col-6 d-flex column-card cards3">
            <a href="/joki/memory-of-chaos" className="d-flex">
              <img src={himeko} alt="Card_3" />
              <h4>MEMORY OF CHAOS</h4>
            </a>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-4 col-6 d-flex column-card cards4">
            <img src={silverWolf} alt="Card_4" />
            <h4>AWOKAW</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row header-kategori">
          <h2>Terus ini Forgotten yang lain</h2>
        </div>
      </div>
      <div className="container-fluid container-card">
        <div className="row row-card">
          <div className="col-md-4 col-lg-3 col-sm-4 col-6 d-flex column-card cards1">
            <a href="/joki/jarlo-six" className="d-flex">
              <img src={herta} alt="Card_2" />
              <h4>Jarlo-VII</h4>
            </a>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-4 col-6 d-flex column-card cards2">
            <a href="/" className="d-flex">
              <img src={traiblazers} alt="Card_2" />
              <h4>TraiBlazers</h4>
            </a>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-4 col-6 d-flex column-card cards3">
            <a href="/" className="d-flex">
              <img src={charlote} alt="Card_3" />
              <h4>AWOKAW</h4>
            </a>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-4 col-6 d-flex column-card cards4">
            <img src={woldrender} alt="Card_4" />
            <h4>AWOKAW</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row header-kategori">
          <h2>Terus ini yang lain lagi banyak dah</h2>
        </div>
      </div>
      <div className="container-fluid container-card">
        <div className="row row-card">
          <div className="col-md-4 col-lg-3 col-sm-4 col-6 d-flex column-card cards1">
            <a href="/joki/jarlo-six" className="d-flex">
              <img src={herta} alt="Card_2" />
              <h4>Jarlo-VII</h4>
            </a>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-4 col-6 d-flex column-card cards2">
            <a href="/" className="d-flex">
              <img src={traiblazers} alt="Card_2" />
              <h4>TraiBlazers</h4>
            </a>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-4 col-6 d-flex column-card cards3">
            <a href="/" className="d-flex">
              <img src={charlote} alt="Card_3" />
              <h4>AWOKAW</h4>
            </a>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-4 col-6 d-flex column-card cards4">
            <img src={woldrender} alt="Card_4" />
            <h4>AWOKAW</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Joki;
