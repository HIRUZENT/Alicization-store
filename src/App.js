import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Faq from "./Components/Home/Faq/Faq.jsx";
import Topup from "./Components/Topup/Topup";
import Joki from "./Components/Joki/Joki.jsx";
import JarloSix from "./Components/Joki/JarloSix";
import Luofu from "./Components/Joki/Luofu";
import Chaos from "./Components/Joki/Chaos";
function App() {
  const [order, setOrder] = useState("");
  const encodeMessage = encodeURI(order);
  const whatsAppUrl = `https://wa.me/6289606230316?text=${encodeMessage}`;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/joki" element={<Joki />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/top-up" element={<Topup />} />
          <Route exact path="/joki/jarlo-six" element={<JarloSix setText={setOrder} url={whatsAppUrl} />} />
          <Route exact path="/joki/luofu" element={<Luofu setText={setOrder} url={whatsAppUrl} />} />
          <Route exact path="/joki/memory-of-chaos" element={<Chaos setText={setOrder} url={whatsAppUrl} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
