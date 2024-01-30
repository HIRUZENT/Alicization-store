import "./Header.css";
import IconContact from "./IconContact";
const Header = () => {
  return (
    <div className="container containerHeader">
      <IconContact />
      <div className="row">
        <h1>Welcome to</h1>
      </div>
      <div className="row">
        <h1>
          <span>Alicization</span> Store
        </h1>
      </div>
    </div>
  );
};
export default Header;