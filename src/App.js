import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Faq from './Components/Home/Faq/Faq.jsx';
import Topup from './Components/Topup/Topup';
import Joki from './Components/Joki/Joki.jsx';
import JarloSix from './Components/Joki/JarloSix';
import Luofu from './Components/Joki/Luofu';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/joki" element={<Joki />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/top-up" element={<Topup />} />
          <Route exact path="/joki/jarlo-six" element={<JarloSix />} />
          <Route exact path="/joki/luofu" element={<Luofu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
