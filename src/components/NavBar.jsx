import SearchBar from "./SearchBar";
import "../styles/NavBar.css";
import amazonLogo from "../Icons/AmazonLogo.png"
import locationIcon from "../Icons/locationIcon.png"
import shoppingCart from "../Icons/shoppingCart.png"

const NavBar = () => {
  return (
    <nav>
      <img src={amazonLogo} alt="Amazon Logo" className="amazonLogo" />
      <div className="locationDiv">
        <img src={locationIcon} alt="Location Icon" />
        <p>Hello</p>
        <p>Select your address</p>
      </div>
      <SearchBar />
      <div>
        <span>Hello, sign in</span><span>Account & Lists</span>
        
      </div>
      <div>
        <span></span>Returns<span>& Orders</span>
      </div>
      <img src={shoppingCart} alt="Shopping Cart Icon" className="shoppingCart" />
    </nav>
  );
};
export default NavBar;
