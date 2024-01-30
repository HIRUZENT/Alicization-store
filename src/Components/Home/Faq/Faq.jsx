import React from "react";
import Navbar from "../../Navbar";
import IconContact from "../../IconContact";
import FaqContent from "./FaqContent";
import './Faq.css'
const Faq = () => {
    return (
      <section className="faq-section">
        <Navbar />
        <IconContact />
        <FaqContent />
      </section>
    );
}
export default Faq;