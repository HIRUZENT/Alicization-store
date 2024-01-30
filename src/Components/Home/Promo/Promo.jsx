import React from "react";
import promo_1 from "../../Images/anjay-promo1.png";
import promo_2 from "../../Images/anjay-promo2.png";
import promo_3 from "../../Images/anjay-promo3.png";
import "./Promo.css";
const Promo = () => {
  return (
    <div className="container container-promo">
      <div className="row">
        <div className="col-md-12">
          <h1 className="header-promo"><span>Promo</span> saat ini</h1>
          <div id="carouselExampleIndicators" class="carousel slide carousel-promo" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={promo_1} class="d-block" alt="Promo 1" />
              </div>
              <div class="carousel-item">
                <img src={promo_2} class="d-block" alt="Promo 2" />
              </div>
              <div class="carousel-item">
                <img src={promo_3} class="d-block" alt="Promo 3" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Promo;
