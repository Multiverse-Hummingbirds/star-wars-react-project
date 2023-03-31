import React, { useState, useEffect, useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import starWarsLogo from '../images/starWarsLogo.png'
import { FavoritesContext } from '../FavoritesProvider';

function PeopleCard({ name }) {
    // initialize state
    const [people, setPeople] = useState(null);
    // Use context for adding to favorites
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext)

    // useEffect to fetch the data
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/`)
            .then((res) => res.json)
            .then((data) => {
                setPeople(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [name])


    return (
        <Card style={{ width: '20rem' }} className='mx-auto'>
            <Card.Img variant='top' src={starWarsLogo} width='280' height='160' bg='dark' />
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Text as='div'>
                    Homeworld:
                    {people?.homeworld}
                </Card.Text>
                {favorites.includes(name) ? (
                    <Button variant='danger' onClick={() => removeFavorite(name)}>
                        Unfavorite
                    </Button>
                ) : (
                    <Button variant='primary' onClick={() => addFavorite(name)}>
                        Favorite
                    </Button>
                )}
            </Card.Body>
        </Card>
    )
}

export default PeopleCard