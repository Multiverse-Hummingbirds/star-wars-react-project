import React, { useState, useEffect, useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import starWarsLogo from '../images/starWarsLogo.png'
import { FavoritesContext } from '../FavoritesProvider';
import { Link } from 'react-router-dom';

function PeopleCard({ person, id }) {
    // initialize state
    const [people, setPeople] = useState(null);
    // Use context for adding to favorites
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext)

    // useEffect to fetch the data
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/`)
            .then((res) => res.json())
            .then((data) => {
                setPeople(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [person.name])


    return (
        <Card style={{ width: '20rem' }} className='mx-auto'>
            <Card.Img variant='top' src={starWarsLogo} width='280' height='160' bg='dark' />
            <Card.Body>
                <Card.Title>
                    <Link to={`/person/${id}`}>{person.name}</Link>
                </Card.Title>
                <Card.Text as='div' style={{ marginBottom: '10px' }}>
                    <Link to={`/planetDetails/${person.homeworld.slice(30, -1)}`}>Homeworld</Link>
                    {/*person.homeworld.slice(30, -1)*/}
                </Card.Text>
                {favorites.includes(person) ? (
                    <Button variant='danger' onClick={() => removeFavorite(person)}>
                        Unfavorite
                    </Button>
                ) : (
                    <Button variant='primary' onClick={() => addFavorite(person)}>
                        Favorite
                    </Button>
                )}
            </Card.Body>
        </Card>
    )
}

export default PeopleCard