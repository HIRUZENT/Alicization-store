import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Faq from "./Components/Home/Faq/Faq.jsx";
import Topup from "./Components/Topup/Topup";
import Contact from "./Components/Contact/Contact";
import Joki from "./Components/Joki/Joki.jsx";
import JarloSix from "./Components/Joki/JarloSix";
import Luofu from "./Components/Joki/Luofu";
import Chaos from "./Components/Joki/Chaos";
import Trailblaze from "./Components/Joki/FarmRelic/Trailblaze";
import PlanarSet from "./Components/Joki/FarmRelic/PlanarSet";
import Standard from "./Components/Joki/FarmRelic/Standard";
function App() {
  const [order, setOrder] = useState("");
  const encodeMessage = encodeURI(order);
  const whatsAppUrl = `https://wa.me/6285927760779?text=${encodeMessage}`;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* MAIN MENU */}
          <Route exact path="/joki" element={<Joki />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/top-up" element={<Topup />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* JOKI JARILO */}
          <Route exact path="/joki/jarlo-six" element={<JarloSix setText={setOrder} url={whatsAppUrl} />} />
          <Route exact path="/joki/luofu" element={<Luofu setText={setOrder} url={whatsAppUrl} />} />
          <Route exact path="/joki/memory-of-chaos" element={<Chaos setText={setOrder} url={whatsAppUrl} />} />
          {/* JOKI FARM RELIC */}
          <Route exact path="/joki/trailblaze" element={<Trailblaze setText={setOrder} url={whatsAppUrl} />} />
          <Route exact path="/joki/PlanarSet" element={<PlanarSet setText={setOrder} url={whatsAppUrl} />} />
          <Route exact path="/joki/Standard" element={<Standard setText={setOrder} url={whatsAppUrl} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
