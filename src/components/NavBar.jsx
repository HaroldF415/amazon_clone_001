import SearchBar from "./SearchBar";
import "../styles/NavBar.css";
import amazonLogo from "../Icons/AmazonLogo.png"
import locationIcon from "../Icons/locationIcon.png"
import shoppingCart from "../Icons/shoppingCart.png"

const NavBar = () => {
  return (
    <header id="navbar-main">
      <div id="navbar">
        <div id="nav-belt">
          <div className="nav-left">
            <div id="nav-logo">
              <img src={amazonLogo} alt="Amazon Logo" className="amazonLogo" />
            </div>
            <div id="nav-global-location">
              <img className="locationIcon" src={locationIcon} alt="Location Icon" />
              <div className="nav-location-text">
                <span className="nav-line-1">Hello</span>
                <span className="nav-line-2">Select your address</span>
              </div>
            </div>
          </div>
          <div className="nav-fill">
            <div id="nav-search">
              <SearchBar />
            </div>
          </div>
          <div className="nav-right">
            <div>
              <span>Hello, sign in</span>
              <span>Account & Lists</span>
            </div>
            <div>
              <span></span>Returns<span>& Orders</span>
            </div>
            <img
              src={shoppingCart}
              alt="Shopping Cart Icon"
              className="shoppingCart"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
