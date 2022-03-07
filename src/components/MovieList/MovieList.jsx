import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Movie from "../Movie/Movie";
import ModalMovie from "../ModalMovie/ModalMovie";
import { useState } from "react";
let MovieList = ({ movies }) => {
    const [chosenMovie, setchosenMovie] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handelchosenMovie(movie) {
        setchosenMovie(movie);
        handleShow();
    }
    return (
        <>

            {movies.map(movie => {
                return (


                    <div>
                        <div className="cardContainer" key={movie.id}>
                            <Movie id={movie.id} title={movie.title} imgUrl={movie.poster_path} movieInfo={movie.overview} handleShow={handleShow} />
                        </div>
                        {chosenMovie && <ModalMovie movie={movie} handleClose={handleClose} show={show} />}
                    </div>


                )
            })

            }
        </>
    )

}
export default MovieList;
