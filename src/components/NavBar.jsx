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
          <div class="nav-left">
            <div id="nav-logo">
              <img src={amazonLogo} alt="Amazon Logo" className="amazonLogo" />
            </div>
            <div id="nav-global-location">
              <img src={locationIcon} alt="Location Icon" />
              <p>Hello</p>
              <p>Select your address</p>
            </div>
          </div>
          <div class="nav-fill">
            <div id="nav-search">
              <SearchBar />
            </div>
          </div>
          <div class="nav-right"></div>
        </div>
      </div>
      <div>
        <span>Hello, sign in</span><span>Account & Lists</span>
        
      </div>
      <div>
        <span></span>Returns<span>& Orders</span>
      </div>
      <img src={shoppingCart} alt="Shopping Cart Icon" className="shoppingCart" />
    </header>
  );
};
export default NavBar;
