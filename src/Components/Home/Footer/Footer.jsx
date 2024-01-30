import React from "react";
import './Footer.css';
const Footer = () =>{
    return (
      <footer className="footer">
        <div className="container container-footer">
          <div className="row footer-header">
            <div className="col-md-9">
              <p>Alicization</p>
            </div>
            <div className="text-center col-md-3">
              <p>Kontak</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nesciunt magnam ut inventore sint, veritatis animi quia ipsa quibusdam porro.</p>
            </div>
            <div className="col-md-3 contactList">
              {/* <ul>
                <li>
                  <a href="/" className="d-flex">
                    <i class="fa-brands fa-instagram"></i>
                    <p>@alc_store</p>
                  </a>
                </li>
                <li>
                  <a href="/">oke</a>
                </li>
                <li>
                  <a href="/">gaming</a>
                </li>
                <li>
                  <a href="/">wibu</a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </footer>
    );
}
export default Footer;