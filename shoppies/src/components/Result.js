import React from 'react';

const Result = props => {

    const handelNominate = item => {

        props.setNomination([
            ...props.nomination,
            item
        ])

        props.setCache([
            ...props.cache,
            item.imdbID
        ])
    }

    return (
        <div className="card half">
            {props.search.length > 0 ? (
                <>
                    <h2>Results for "{props.search}"</h2>
                    {props.results.Response && props.results.Response === 'False' ? (
                        <p>No Results Found</p>
                    ) : (
                        <ul>
                            {props.results.Search.map(item => (
                                <li key={item.imdbID}>
                                    <div className="row movie">
                                        <div className="col">
                                            <img src={item.Poster} alt={item.Title} />
                                        </div>
                                        <div className="col">
                                            {item.Title} <br />
                                            {item.Year} <br />
                                            <input 
                                                type="button" 
                                                value="Nominate" 
                                                onClick={() => handelNominate(item)}
                                                disabled={props.cache.includes(item.imdbID) && true}
                                            />
                                        </div>
                                    </div>
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