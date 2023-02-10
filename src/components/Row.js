import React, { useEffect, useState } from "react";

import axios from "../axios";

import "../css/row.css";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl]);

    //console.table(movies);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },

    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        }
        else {
            movieTrailer(movie.name || movie.title || movie.original_name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => console.log(error));
        }
    }

    return (
        <div>
            <div className="row" >
                <h2>{title}</h2>
                <div className="row__posters">
                    {movies?.map(movie => (
                        <img
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            className="row__poster"
                            src={`${base_url}${movie.backdrop_path}`}
                            alt={movie.name || movie.title || movie.original_name} />

                    ))}

                </div>
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

            </div>

        </div>
    );
}

export default Row;