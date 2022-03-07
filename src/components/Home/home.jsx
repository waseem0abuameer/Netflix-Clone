import React from 'react';

import Header from '../Header/Header';
import MovieList from "../MovieList/MovieList"
import Movie from "../Movie/Movie"

import { useState, useEffect } from "react";
export default function Home() {
    const [movies, setMovie] = useState([]);
    async function getData() {
        let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
        let data = await response.json();
        setMovie(data);
    }
    useEffect(() => {
        getData();
    }, []);


    return (
        <>

            <Header />
            <div className="container">

                <MovieList movies={movies} />

            </div>
        </>
    )
}