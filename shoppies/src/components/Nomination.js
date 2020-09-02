import React from 'react';

const Nomination = props => {

    const handelRemove = item => {
        props.setNomination(
            props.nomination.filter(movie => movie !== item)
        )

        props.setCache(
            props.cache.filter(movie => movie !== item.imdbID)
        )
    }

    console.log(props.nomination)

    return (
        <div className="card half">
            <h2>My Nominations</h2>
            <ul>
                {/* DISPLAY LIST OF NOMINEES */}
                {props.nomination.map(item => (
                    <li key={item.imdbID}>
                        <div className="row movie">
                            <div className="col">
                                <img src={item.Poster} alt={item.Title} />
                            </div>
                            <div className="col">
                                {item.Title} <br />
                                {item.Year} <br />
                                <input type="button" value="Remove" onClick={() => handelRemove(item)} />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Nomination;