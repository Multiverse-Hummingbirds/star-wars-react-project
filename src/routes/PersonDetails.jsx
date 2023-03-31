import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'

function PersonDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState([]);

    // fetch with id
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCharacter(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id])

    return (
        <Card style={{ width: '60%' }} className='mx-auto'>
            <Card.Title className='mx-auto'>{character.name} Details</Card.Title>
            <Card.Text style={{ marginLeft: '20px' }}>Gender: {character.gender}</Card.Text>
            <Card.Text style={{ marginLeft: '20px' }}>Height: {character.height}</Card.Text>
            <Card.Text style={{ marginLeft: '20px' }}>Birth year: {character.birth_year}</Card.Text>
            <Card.Text style={{ marginLeft: '20px' }}>Hair Color: {character.hair_color}</Card.Text>
            <Card.Text style={{ marginLeft: '20px' }}>Skin Color: {character.skin_color}</Card.Text>
            <Card.Text style={{ fontWeight: 'bold' }} className='mx-auto'>Votes </Card.Text>
            <Button variant='primary' style={{ width: '15%', marginBottom: '15px' }} className='mx-auto'>
                Upvote
            </Button>
            <Button variant='danger' style={{ width: '15%', marginBottom: '15px' }} className='mx-auto'>
                Down vote
            </Button>
        </Card>

    )
}

export default PersonDetails