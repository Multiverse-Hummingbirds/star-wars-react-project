import React, { useContext } from 'react'
import { FavoritesContext, useFavorites } from '../FavoritesProvider'
import  PeopleCard  from '../components/PeopleCard'
import { Container, Row, Col } from 'react-bootstrap';

function Favorites() {
    const { favorites } = useContext(FavoritesContext);
    //const { favorites } = useFavorites();
    console.log(favorites);

    return (
        <Container>
            <Row className='g-4'>
                {favorites.map((name) => (
                    <Col key={name}>
                        <PeopleCard name={name} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Favorites