const FilterDiv = () => {
    return(
        <div className="filter--div">
            <h3>Browse Events</h3>
            <div className="div--box">
                <div className="filter--box">
                    <i className="fa fa-filter icon"></i>
                    <select size={1}>
                        <option selected>Web</option>
                        <option>AI & ML</option>
                        <option>Android Development</option>
                        <option>Deep Learning</option>
                    </select>
                </div>
                <div className="search--box">
                    <input type={"text"} placeholder={"Search"} size={10}>
                    </input>
                    <i className="fa fa-search icon"></i>
                </div>
            </div>            
        </div>
    )
}

export default FilterDiv