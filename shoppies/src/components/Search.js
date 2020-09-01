import React from 'react';

const Search = () => {

    return (
        <div className="card">
            <label htmlFor="search">Movie title
                <br/>
                <input type="text" name="search" />
            </label>
        </div>
    )
}

export default Search;