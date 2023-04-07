import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function PlanetsCard({ planet }) {

    return (
        <Card style={{ width: '20rem' }} className='mx-auto'>
            <Card.Body>
                <Card.Title>
                    {planet.name}
                </Card.Title>
                <Card.Text as='div'>
                    <Link to={`/planetDetails/${planet.url.slice(30, -1)}`}>Planet Link</Link>
                    Planets Description: {planet.diameter}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PlanetsCard