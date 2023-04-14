import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import starWarsTransparentLogo from '../images/Star-Wars-transparent-logo.png'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <Navbar sticky='top' bg='dark' variant='dark' className='mb-4'>
            <Container>
                <Navbar.Brand>
                    <Nav.Link>
                        <Link to='/'><Image src={starWarsTransparentLogo} width='95rem' className='me-2' /></Link>
                    </Nav.Link>
                </Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link>
                        <Link to='/'>Characters</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to='/planets'>Planets</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to='/favorites'>Favorites</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation