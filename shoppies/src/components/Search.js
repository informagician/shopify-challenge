import React from 'react';

const Search = props => {

    const handelChange = e => {
        props.setSearch(e.target.value)
    }

    return (
        <div className="card">
            <label htmlFor="search">Movie title
                <br/>
                <input type="text" name="search" onChange={handelChange} />
            </label>
        </div>
    )
}

export default Search;