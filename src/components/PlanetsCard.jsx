import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PlanetsCard({ planet }) {

    return (
        <Card style={{ width: '20rem' }} className='mx-auto'>
            <Card.Body>
                <Card.Title>
                    {planet.name}
                </Card.Title>
                <Card.Text as='div'>
                    <Link to={`/planetDetails/${planet.url.slice(30, -1)}`}>Planet Details</Link>
                </Card.Text>
                <Card.Text as='div'>
                    Climate: {planet.climate}
                </Card.Text>
                <Card.Text as='div'>
                    Population: {planet.population}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PlanetsCard