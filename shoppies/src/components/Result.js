import React from 'react';

const Result = props => {

    console.log(props.results)
    return (
        <div className="card half">
            {props.search.length > 0 ? (
                <>
                    <h2>Results for "{props.search}"</h2>
                    {props.results.Response && props.results.Response == 'False' ? (
                        <p>No Results Found</p>
                    ) : (
                        <ul>
                            {props.results.Search.map(item => (
                                <li key={item.imdbID}>
                                    {item.Title} ({item.Year})
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <h2>Search for movies</h2>
            )}
        </div>
    )
}

export default Result;