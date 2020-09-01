import React from 'react';

const Result = props => {

    return (
        <div className="card half">
            {props.search.length > 0 ? (
                <h2>Results for "{props.search}"</h2>
            ) : (
                <h2>Search for movies</h2>
            )}
        </div>
    )
}

export default Result;