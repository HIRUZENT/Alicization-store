import React from "react";
import "../Home/Home.css";
import Header from "../Header";
import GambarWibu from "../GambarWibu";
import Navbar from "../Navbar";
import Footer from "./Footer/Footer";
import Promo from "./Promo/Promo";
const Home = () => {
  return (
    <section className="home-section">
      <Navbar />
      <Header />
      <GambarWibu />
      <Promo/>
      {/* <Footer /> */}
    </section>
  );
};
export default Home;
