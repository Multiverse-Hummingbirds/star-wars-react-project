import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import starWarsLogo from '../images/starWarsLogo.png'
import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <Navbar sticky='top' bg='dark' variant='dark' className='mb-4'>
            <Container>
                <Navbar.Brand>
                    <Image src={starWarsLogo} width='95rem' className='me-2' />
                    Star Wars API
                </Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='/'>Characters</Nav.Link>
                    <Nav.Link href='/planets'>Planets</Nav.Link>
                    <Nav.Link to='/favorites'>Favorites</Nav.Link> 
                    

                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation