import Navbar from "../../Components/Navbar";
import IconContact from "../IconContact";
import bgLuofu from "../Images/bg-luofu.jpeg";
import "../Home/Faq/Faq.css";
const Luofu = (props) => {
  return (
    <>
      <div className="navbar-khusus">
        <Navbar />
      </div>
      <div className="container-fluid container-jarlosix">
        <IconContact />
        <div className="row row-jarlosix">
          <div className="col-3 jarlosix-left-image">
            <img src={bgLuofu} alt="JarloSix images" style={{ objectPosition: "12% 0px" }} />
          </div>
          <div className="col-9 header-jarlosix">
            <div className="row">
              <h1 className="header-jarlosix-text1">
                Luofu - <span>VI</span>
              </h1>
            </div>
            <div className="row header-jarlosix-text-2">
              <p>Traversing across the snow plains, you can get a full view of Belobog, the only spot on the ice-cold world of Jarilo-VI that barely fits the definition of wibu</p>
            </div>
            <div className="col-12 rows-list">
              <div className="row">
                <h1 className="header-jarlosix-fullstar">
                  Per <span>STAR</span>
                </h1>
              </div>
              <div className="row row-list-joki">
                <div className="col-12 d-flex">
                  <p>
                    Stage 1 - 3 Per star <span>( 4k )</span>
                  </p>
                  <div style={{ transform: "translateY(-8px)" }}>
                    <a href={props.url} onClick={() => props.setText("Hallo kak, aku mau order *Forgotten Hall* The Xianzhou Loufu Stage 1 - 3 Per Star")} target="_blank" rel="noopener noreferrer">
                      Order
                    </a>
                  </div>
                </div>
              </div>
              <div className="row row-list-joki">
                <div className="col-12 d-flex">
                  <p>
                    Stage 4 - 6 Per star <span>( 8k )</span>
                  </p>
                  <div style={{ transform: "translateY(-8px)" }}>
                    <a href={props.url} onClick={() => props.setText("Hallo kak, aku mau order *Forgotten Hall* The Xianzhou Loufu Stage 4 - 6 Per Star")} target="_blank" rel="noopener noreferrer">
                      Order
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <h1 className="header-jarlosix-fullstar">
                  Full <span>STAR</span>
                </h1>
              </div>
              <div className="row row-list-joki">
                <div className="col-12 d-flex">
                  <p>
                    Stage 1 - 3 Per Stage <span>( 12k )</span>
                  </p>
                  <div style={{ transform: "translateY(-8px)" }}>
                    <a href={props.url} onClick={() => props.setText("Hallo kak, aku mau order *Forgotten Hall* The Xianzhou Loufu Stage 1 - 3 Per Stage")} target="_blank" rel="noopener noreferrer">
                      Order
                    </a>
                  </div>
                </div>
              </div>
              <div className="row row-list-joki">
                <div className="col-12 d-flex">
                  <p>
                    Stage 4 - 6 Per Stage <span>( 22k )</span>
                  </p>
                  <div style={{ transform: "translateY(-8px)" }}>
                    <a href={props.url} onClick={() => props.setText("Hallo kak, aku mau order *Forgotten Hall* The Xianzhou Loufu Stage 4 - 6 Per Stage")} target="_blank" rel="noopener noreferrer">
                      Order
                    </a>
                  </div>
                </div>
              </div>
              <div className="row d-flex row-note">
                <p>
                  Note <span>*</span>
                </p>
                <div className="noted">
                  <h3>klo mau joki harus pake perasaan yah, misalnya akun kalian lvl 50 atau dibawahnya, trus order MoC lvl 70 keatas, mohon maaf kami tidak bisa, enjoy :)</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Luofu;
