import { MdArrowDropDown } from "react-icons/md";
import { MdSearch } from "react-icons/md";

export default function SearchBar() {
  return (
    <form className="flex flex-row focus-within:bg-black focus-within:ring ring-orange-400 rounded-[5px]">
      <div className="flex">
        <div id="nav-search-dropdown-card">
          <div className="flex bg-[#f3f3f3] p-2 h-10 w-12 items-center justify-center rounded-l-[4px] cursor-pointer border-r border-gray-300 hover:bg-[#dadada]">
            <span className="text-[#555] text-xs font-semibold">All</span>
            <MdArrowDropDown
              className="text-[#666] relative bottom-px"
              size={20}
            />
          </div>
          {/* <label htmlFor="searchDropdownBox" id="searchDropdownDescription" style={{display: "none"}}>Select the department you want to search in</label>
                    <select name="url" id="searchDropdownBox" className="" style={{display: "block", top: "2.5px" }}>
                        <option defaultChecked="selected" value="All">All Departments</option>
                        <option value="electronics">Electronics</option>
                    </select> */}
        </div>
      </div>
      <div className="w-full min-w-fit ">
        <input
          type="text"
          id="searchTextBox"
          placeholder="Search Amazon"
          className="w-full h-10 border-none text-black placeholder:text-sm placeholder:font-semibold placeholder:text-gray-500 pl-2 cursor-text outline-none"
          spellCheck="false"
          name="field-keywords"
        />
      </div>
      <MdSearch
        className="text-black bg-[#febd69] p-1 rounded-r-[4px] h-10 w-16 hover:bg-[#f3a847] cursor-pointer"
        size={30}
      />
    </form>
  );
}
