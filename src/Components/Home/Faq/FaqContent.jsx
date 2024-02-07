import Icon_3 from "../../Images/icon_2.png";
import Icon_4 from "../../Images/icon_3.png";
import Icon_5 from "../../Images/topaz.gif";
import './Faq.css';
import { Typewriter } from "react-simple-typewriter";
import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const FaqContent = () => {
  useEffect(() => {
    AOS.init({
      once: false
    })
  }, [])
  const [quest, setQuest] = useState({
    questions: ["bagaimana", "kenapa", "apa"],
  });
  return (
    <div className="container container-content-faq">
      <div className="row row-faq-content">
        <div className="col-lg-3 faq-img-side">
          <img src={Icon_3} alt="Gambar icon FAQ" />
        </div>
        <div className="col-lg-9 faq-header">
          <div className="row">
            <h4 id="headerFaq">Pertanyaan yang banyak ditanyakan</h4>
          </div>
          <div className="row most-quest">
            <h4>
              <Typewriter words={quest.questions} loop={false} cursorStyle={"_"} cursor typeSpeed={50} />
            </h4>
          </div>
        </div>
      </div>
      <div className="container all-questions">
        {/* Pertanyaan pertama */}
        <div className="row row-quest-1">
          <div data-aos="fade-right" data-aos-duration="1000" className="col-lg-9">
            <h3 className="quest-1 d-flex">
              1. Kenapa wibu aneh <h3 className="ask">?</h3>
            </h3>
            <div className="row">
              <h3 className="answer-1">
                Karena Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab possimus aliquid quos corporis numquam ipsa. Aliquid, pariatur! Ipsam molestias nisi iure, veniam, ab voluptatem deserunt quos enim aperiam minus pariatur!
                Labore, maxime vel?
              </h3>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="col-lg-3 img-quest-side">
            <img src={Icon_5} alt="Gambar icon FAQ" />
          </div>
        </div>
        {/* Pertanyaan kedua */}
        <div className="row row-quest-2">
          <div data-aos="zoom-in" data-aos-duration="1000" className="col-lg-3 column-img-2">
            <img className="img2" style={{ width: "70%" }} src={Icon_4} alt="Gambar icon FAQ" />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className="col-lg-9 img-quest-side2">
            <div className="row">
              <h3 className="quest-2">
                2. Kenapa wibu aneh<span>?</span>
              </h3>
            </div>
            <div className="row">
              <h3 className="answer-2">
                Karena Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab possimus aliquid quos corporis numquam ipsa. Aliquid, pariatur! Ipsam molestias nisi iure, veniam, ab voluptatem deserunt quos enim aperiam minus pariatur!
                accusamus nihil optio harum nam quo, minima magnam!
              </h3>
            </div>
          </div>
        </div>
        {/* Pertanyaan kedua */}
        <div className="row row-quest-3">
          <div className="col-lg-12 img-quest-side3">
            <div data-aos="fade-right" data-aos-duration="1000" className="row">
              <h3 className="quest-3">3. Kenapa wibu aneh?</h3>
            </div>
            <div className="row">
              <h3 data-aos="fade-right" data-aos-duration="1000" className="answer-3">
                Karena Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab possimus aliquid quos corporis numquam ipsa. Aliquid, pariatur! Ipsam molestias nisi iure, veniam, ab voluptatem deserunt quos enim aperiam minus pariatur!
                accusamus nihil optio harum nam quo, minima magnam! Karena Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab possimus aliquid quos corporis numquam ipsa. Aliquid, pariatur! Ipsam molestias nisi iure, veniam, ab
                voluptatem deserunt quos enim aperiam minus pariatur! accusamus nihil optio harum nam quo, minima magnam!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FaqContent;
