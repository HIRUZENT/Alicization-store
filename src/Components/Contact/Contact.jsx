import React from "react";
import Navbar from "../Navbar";
import IconContact from "../IconContact";
import imgContact from "../Images/img-contact.png";
import instagramIcon from "../Images/instagram-icon.webp";
import "./Contact.css";
const Contact = () => {
    return (
      <>
        <div className="container">
          <Navbar />
          <div className="icon-contact-contact">
            <IconContact />
          </div>
        </div>
        <div className="container container-contact">
          <div className="row row-image-contact">
            <div className="col-md-3 img-contact">
              <img src={imgContact} alt="Gambar Contact" />
            </div>
            <div className="col-md-9 contact-list">
              <div className="row">
                <h1 id="header-contact">
                  Kontak <span>Kami</span>
                </h1>
              </div>
              <div className="container container-list-contact">
                <div className="row">
                  <div className="col-12 d-flex column-contact" id="instagram-contact">
                    <img src={instagramIcon} alt="icon Instagram" />
                    <p>Instagram @alicization_store</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex column-contact" id="instagram-contact">
                    <img src={instagramIcon} alt="icon Instagram" />
                    <p>Instagram @wibu_12</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex column-contact" id="instagram-contact">
                    <img src={instagramIcon} alt="icon Instagram" />
                    <p>Instagram @wibu_12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Contact;