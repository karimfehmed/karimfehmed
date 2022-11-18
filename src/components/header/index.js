import "./style.css";
import logo from "../../assets/images/logo.webp";

const Header = () => {
  return (
    <div className="Mainheader">
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="logoHead">
          <p className="heading">Heaven Explorers Pakistan</p>
          <p>Local And Tour Website</p>
        </div>
      </div>
      <div className="Lists">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Offers</li>
          <li>Gallery</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="Bookbutton">
        <button>Book a Trip</button>
      </div>
    </div>
  );
};

export default Header;
