import React  from 'react'

const style = {
    input: {
        color: "black",
        background: "goldenrod"
    }
}

const Search = (props) => {
    return (
        <form> 
            <div className="form-group my-2">
                <div className="input-group-lg">
        <input 
        style={style.input}
        id="search"
        className="form-control "
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
