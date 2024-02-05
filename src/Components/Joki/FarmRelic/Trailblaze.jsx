import Navbar from "../../../Components/Navbar";
import IconContact from "../../IconContact";
import bgtrailblaze from "../../Images/bgtrailblaze.jpg";
import "../../Home/Faq/Faq.css";
const Trailblaze = (props) => {
  return (
    <>
      <div className="navbar-khusus">
        <Navbar />
      </div>
      <div className="container-fluid container-jarlosix">
        <IconContact />
        <div className="row row-jarlosix">
          <div className="col-3 jarlosix-left-image">
            <img src={bgtrailblaze} alt="JarloSix images" style={{ objectPosition: "70%" }} />
          </div>
          <div className="col-9 header-jarlosix">
            <div className="row">
              <h1 className="header-jarlosix-text1">
                TRAILBLAZE <span>POWER</span>
              </h1>
            </div>
            <div className="col-12 rows-list rows-list-trailblaze">
              <div className="row row-list-joki">
                <div className="col-12 d-flex">
                  <p>
                    Farm relic sesuai request customer <span>( 4k )</span>
                  </p>
                  <div style={{ transform: "translateY(-8px)" }}>
                    <a style={{ color: "white" }} href={props.url} onClick={() => props.setText("Hallo kak, aku mau order *Farm Relic* TrailBlaze")} target="_blank" rel="noopener noreferrer">
                      Order
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 header-farm-relic">
                <h6>
                  <span>*</span> Reserved Trailblaze Power bisa digunakan disini (opsional)
                </h6>
              </div>
              <div className="row d-flex row-note">
                <p>
                  Note <span>*</span>
                </p>
                <div className="noted">
                  <h3>Di menu ini kita hanya farming relic, tidak bisa request stat karena ini digunakan untuk tumbal up relic, gacha relic sesuai yang admin dapatkan, dan juga kalian bisa request utuk resinya mau dipake berapa</h3>
                  <h3>Semoga dapet relic beruntung!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Trailblaze;
