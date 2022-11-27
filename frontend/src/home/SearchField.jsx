import "./SearchField.css";

export const SearchField = () => {
    return<>
        <div className="searchContainer">
            <div className="center">
                <div className="dropdown">
                    <span>Select Department..</span>
                    <div class="dropdown-content">
                    <p>Hello World!</p>
                    <p>Hello World!</p>
                    <p>Hello World!</p>
                    </div>
                </div>
                <div className="dropdown">
                    <input className="inputSearch" placeholder="Search Catalog#"></input>
                </div>
                <div className="dropdown">
                    <span>Select Schedule</span>
                    <div class="dropdown-content">
                    <p>Hello World!</p>
                    <p>Hello World!</p>
                    <p>Hello World!</p>
                    <p>Hello World!</p>
                    </div>
                </div>
                <div className="dropdown">
                    <span>Select Semester</span>
                    <div class="dropdown-content">
                    <p>Hello World!</p>
                    <p>Hello World!</p>
                    <p>Hello World!</p>
                    <p>Hello World!</p>
                    </div>
                </div>
                <button className="searchButton">Search</button>
            </div>
        </div>
    </>
};