import { useNavigate } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const navigasi = useNavigate();
    return (
      <nav>
        <div className="container">
          <ul>
            <li>
              <p onClick={() => navigasi("/")}>Home</p>
            </li>
            <li>
              <p onClick={() => navigasi("/joki")}>Joki</p>
            </li>
            <li>
              <p onClick={() => navigasi("/top-up")}>Topup</p>
            </li>
            <li>
              <p onClick={() => navigasi("/faq")}>FAQ</p>
            </li>
            <li>
              <p onClick={() => navigasi("/top-up")}>Contact</p>
            </li>
          </ul>
        </div>
      </nav>
    );
}
export default Navbar;