import React, { useState } from "react";
import PropTypes from 'prop-types';


const SearchBar = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        <input type="text"
            className="form-control"
            placeholder="Search for city"
            debounceTimeout={1000}
            value={search}
            onChange={handleOnChange}
            aria-label="search for city"
        ></input>
    );
};

SearchBar.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;