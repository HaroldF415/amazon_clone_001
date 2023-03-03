import searchBar from "../Icons/searchIcon.png";
import arrowDropDown from "../Icons/arrow_drop_down.png";

export default function SearchBar() {
    return(

        <form id="nav-search-bar-form" className="nav-searchbar">
            <div className="nav-left">
                <div id="nav-search-dropdown-card">
                    <div className="nav-search-facade">
                        <span id="nav-search-label-id" className="nav-search-label" style={{width: "auto"}}>All</span>
                        <img src={arrowDropDown} alt="nav icon" className="nav-icon" />
                    </div>
                    <label htmlFor="searchDropdownBox" id="searchDropdownDescription" style={{display: "none"}}>Select the department you want to search in</label>
                    <select name="url" id="searchDropdownBox" className="nav-search-dropdown" style={{display: "block", top: "2.5px" }}>
                        <option defaultChecked="selected" value="All">All Departments</option>
                        <option value="electronics">Electronics</option>
                    </select>
                </div>
            </div>
            <div className="nav-fill">
                <div className="nav-search-field">
                    <label htmlFor="searchTextBox" style={{display: "none"}}>Search Amazon</label>
                    <input type="text" id="searchTextBox" placeholder="Search Amazon" className="nav-input" spellCheck="false" name="field-keywords"/>
                </div>
            </div>
            <div className="nav-right">
                <span id="nav-search-submit-text">
                    <img src={searchBar} alt="Search Icon" className="searchIcon" />
                </span>
            </div>
        </form>
    )
}