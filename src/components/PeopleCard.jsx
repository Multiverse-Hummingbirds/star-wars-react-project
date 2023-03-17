import React, { useState, useEffect, useContext } from 'react'
import { Button, Card } from 'react-bootstrap'

function PeopleCard({ homeworld, name }) {
    // initialize state
    const [people, setPeople] = useState(null);
    // Use context for adding to favorites

    // useEffect to fetch the data
    useEffect(() => {
        fetch(homeworld)
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
            <Card.Img variant='top' />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text as='div'>
                    Homeworld:
                </Card.Text>
                <Button variant='primary'>
                    Favorite
                </Button>
            </Card.Body>

        </Card>
    )
}

export default PeopleCard