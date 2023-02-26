import searchBar from "../Icons/searchIcon.png"

export default function SearchBar() {
    return(
        <div>
            
            <form>
                <select name="departmentSelect" id="departments">
                    <option value="All">All</option>
                </select>
                <input type="text" id="searchBar" />
                <img src={searchBar} alt="Search Icon" className="searchIcon" />
            </form>
        </div>
    )
}