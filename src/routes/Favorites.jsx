import React, { useContext } from 'react'
import { FavoritesContext } from '../FavoritesProvider'
import PeopleCard from '../components/PeopleCard'
import { Container, Row, Col } from 'react-bootstrap';

function Favorites() {
    const { favorites } = useContext(FavoritesContext);

    if (favorites.length === 0) {
        return (
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                No favorites in list.
            </h3>
        )
    }

    return (
        <Container>
            <Row className='g-4'>
                {favorites.map((person) => (
                    <Col key={person.name}>
                        <PeopleCard person={person} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Favorites