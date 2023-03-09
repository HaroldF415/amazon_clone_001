import SearchBar from "./SearchBar";
import amazonLogo from "../Icons/AmazonLogo.png"
import locationIcon from "../Icons/locationIcon.png"
import shoppingCart from "../Icons/shoppingCart.png"
import arrowDropDown from "../Icons/arrow_drop_down.png";
import "../styles/NavBar.css";


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
            <div className="accountList">
              <span className="topSpan">Hello, sign in</span>
              <span>Account & Lists</span>
              <img src={arrowDropDown} alt="nav icon" className="signInDropdown" />
            </div>
            <div className="returnOrder">
              <span className="topSpan">Returns</span><span>& Orders</span>
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
