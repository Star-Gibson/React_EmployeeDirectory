import React from 'react';

// SearchBar 
const Search = ({ placeholder, handleChange }) => {
    return (
        <div>
            <input 
            type="text" 
            className="search"
            placeholder={ placeholder }
            onChange =  { handleChange } />
        </div>
    )
};

export default Search;
