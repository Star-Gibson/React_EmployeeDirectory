import React  from 'react'

const Search = (props) => {
    return (
        <form> 
            <div className="form-group">
                <div className="input-group">
        <input 
        id="search"
        className="form-control"
        onChange ={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        placeholder ="Who are you looking for?"
        />
                </div>
            </div>
        </form>
    )
}

export default Search
