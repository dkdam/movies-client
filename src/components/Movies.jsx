import React from 'react'

function Movies(props) {
    return (
        <div>
            <h1>Movies</h1>
            {props.movies.map((movie) => {
                return (
                    <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.body}</p>
                </div>
                )
                
            })}
        </div>
    )
}

export default Movies