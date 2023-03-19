import SearchBar from "./SearchBar";
import amazonLogo from "../Icons/AmazonLogo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CgShoppingCart } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
export default function NavBar() {
  return (
    <header
      id="navbar-main"
      className="w-full h-16 bg-[#131921] flex text-white"
    >
      <div id="navbar" className="w-full flex">
        <div id="nav-belt" className="w-full flex gap-x-2 justify-between">
          <div id="nav-left" className="min-w-fit flex items-center p-2">
            <div className="p-2 hover:ring-1 ring-white ring-solid">
              <img
                src={amazonLogo}
                alt="Amazon Logo"
                className="h-8 w-auto cursor-pointer"
              />
            </div>
            <div
              id="nav-global-location"
              className="flex items-end p-2 cursor-pointer hover:ring-1 ring-white ring-solid"
            >
              <HiOutlineLocationMarker
                className="relative bottom-1"
                size={20}
              />
              <div className="flex flex-col items-start min-w-fit">
                <span className="text-xs font-bold text-[#CCCCCC] items-start">Hello</span>
                <span className="text-sm font-black">Select your address</span>
              </div>
            </div>
          </div>
          <div className="flex items-center w-[-webkit-fill-available] mr-4 ml-4">
            <div id="nav-search" className="w-full">
              <SearchBar />
            </div>
          </div>
          <div className="flex items-center mr-2 space-x-4 min-w-fit ">
            <div className="p-1 flex flex-col items-start min-w-fit hover:ring-1 ring-white ring-solid cursor-pointer">
              <span className="text-xs font-bold">Hello, sign in</span>
              <div className="flex">
                <span className="text-sm font-black">Account & Lists</span>
                <MdArrowDropDown
                  className="text-[#a7acb2] relative top-px"
                  size={20}
                />
              </div>
            </div>
            <div className="p-1 flex flex-col items-start min-w-fit hover:ring-1 ring-white ring-solid cursor-pointer">
              <span className="text-xs font-bold">Returns</span>
              <span className="text-sm font-black">& Orders</span>
            </div>
            <CgShoppingCart
              size={45}
              className="p-1 hover:ring-1 ring-white ring-solid cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
