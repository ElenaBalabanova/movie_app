import React from "react";
import './Movie.css'
export const Movies = ({id, year, title, summary, poster, genres }) => {

    return <div className="movie">
        
            <img src={poster} alt={title} title={title}></img>
        
        <div className="movie_column">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genres">
                {genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}
            </ul>
            <p className="movie_summary">{summary.slice(0,100)}...</p>
        </div>
        
    </div>
}