import React from 'react';

import { Button } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/home';
import FavMovie from './components/FavMovie/favmovie';
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Fav" element={<FavMovie />} />
        </Routes>
    )
}