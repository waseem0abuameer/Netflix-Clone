import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

import React from 'react';

export default function ModalMovie({ movie, show, handleClose }) {

    return (
        <Modal
            show={show}
            onHide={handleClose}

        >
            <Modal.Header closeButton>
                <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {movie.overview}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    );
}
