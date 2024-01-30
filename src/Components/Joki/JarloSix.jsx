import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import IconContact from "../IconContact";
import bg1 from "../Images/bg1.jpeg";
import "../Home/Faq/Faq.css";
const JarloSix = () => {
  const [order, setOrder] = useState("");
  const encodeMessage = encodeURI(order);
  const whatsAppUrl = `https://wa.me/6289606230316?text=${encodeMessage}`;
  console.log(whatsAppUrl);
  return (
    <>
      <div className="navbar-khusus">
        <Navbar />
      </div>
      <div className="container-fluid container-jarlosix">
        <IconContact />
        <div className="row row-jarlosix">
          <div className="col-md-3 jarlosix-left-image">
            <img src={bg1} alt="JarloSix images" />
          </div>
          <div className="col-md-9 header-jarlosix">
            <div className="row">
              <h1 className="header-jarlosix-text1">
                Jarlo - <span>VI</span>
              </h1>
            </div>
            <div className="row header-jarlosix-text-2">
              <p>Traversing across the snow plains, you can get a full view of Belobog, the only spot on the ice-cold world of Jarilo-VI that barely fits the definition of wibu</p>
            </div>
            <div className="col-12 rows-list">
              <div className="row">
                <h1 className="header-jarlosix-fullstar">
                  Full <span>STAR</span>
                </h1>
              </div>
              <div className="row row-list-joki">
                <div className="col-12 d-flex">
                  <p>
                    Stage 1 - 4 Per star <span>( Rp.4k )</span>
                  </p>
                  <div>
                    <a href={whatsAppUrl} onClick={() => setOrder("Hallo kak, aku mau order Jarlo VI Stage 1 - 4 Per Star")} target="_blank" rel="noopener noreferrer">
                      Order
                    </a>
                  </div>
                </div>
              </div>
              <div className="row row-list-joki">
                <div className="col-12 d-flex">
                  <p>
                    Stage 5 - 9 Per star <span>( Rp.7k )</span>
                  </p>
                  <div>
                    <a href={whatsAppUrl} onClick={() => setOrder("Hallo kak, aku mau order Jarlo VI Stage 5 - 9 Per star")} target="_blank" rel="noopener noreferrer">
                      Order
                    </a>
                  </div>
                </div>
              </div>
              <div className="row row-list-joki">
                <div className="col-12 d-flex">
                  <p>
                    Stage 10 - 15 Per star <span>( Rp. 10k )</span>
                  </p>
                  <div>
                    <a href={whatsAppUrl} onClick={() => setOrder("Hallo kak, aku mau order Jarlo VI Stage 10 - 15 Per star")} target="_blank" rel="noopener noreferrer">
                      Order
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <h1 className="header-jarlosix-fullstar">
                  Full <span>STAGE</span>
                </h1>
              </div>
              <div className="row row-list-joki">
                <div className="col-12 d-flex">
                  <p>
                    Stage 1 - 4 Per Stage <span>( Rp.10k )</span>
                  </p>
                  <div>
                    <a href={whatsAppUrl} onClick={() => setOrder("Hallo kak, aku mau order Jarlo VI Stage 10 - 15 Per Stage")} target="_blank" rel="noopener noreferrer">
                      Order
                    </a>
                  </div>
                </div>
              </div>
              <div className="row row-list-joki">
                <div className="col-12 d-flex">
                  <p>
                    Stage 5 - 9 Per Stage <span>( Rp.20k )</span>
                  </p>
                  <div>
                    <a href={whatsAppUrl} onClick={() => setOrder("Hallo kak, aku mau order Jarlo VI Stage 10 - 15 Per Stage")} target="_blank" rel="noopener noreferrer">
                      Order
                    </a>
                  </div>
                </div>
              </div>
              <div className="row row-list-joki">
                <div className="col-12 d-flex">
                  <p>
                    Stage 10 - 15 Per Stage <span>( Rp.30k )</span>
                  </p>
                  <div>
                    <a href={whatsAppUrl} onClick={() => setOrder("Hallo kak, aku mau order Jarlo VI Stage 10 - 15 Per Stage")} target="_blank" rel="noopener noreferrer">
                      Order
                    </a>
                  </div>
                </div>
              </div>
              <div className="row d-flex row-note">
                <p>
                  Note <span>*</span>
                </p>
                <p>segala puji syukur kita panjatkan kepada wibu atas Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id facilis eligendi quaerat, quibusdam explicabo illo provident! Deserunt dolores fugit sunt?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default JarloSix;
