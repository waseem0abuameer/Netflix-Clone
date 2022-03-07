import "./Movie.css";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import React from 'react';

const Movie = (data) => {

    return (

        <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${data.imgUrl}`} />
            <Card.Body>
                <Card.Title>{data.title ? data.title : "---"}</Card.Title>
                <Card.Text>
                    {data.movieInfo}
                </Card.Text>
                <Button id={data.id} onClick={data.handleShow} variant="primary">Add Favorite</Button>
            </Card.Body>
        </Card>
    );
};

export default Movie;