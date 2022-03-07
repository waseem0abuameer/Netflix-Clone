
import Nav from 'react-bootstrap/Nav';
import React from 'react';

export default function Header() {
    return (

        <Nav activeKey="/home" >
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/FAV">FAV PAGE</Nav.Link>
            </Nav.Item>


        </Nav>
    )
}