import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

function PlanetsCard({ name }) {
    // initialize state
    const [planet, setPlanet] = useState(null);

    // useEffect to fetch data
    useEffect(() => {
        fetch()
            .then((res) => res.json)
            .then((data) => {
                setPlanet(data.results)
            })
    }, [name])

    return (
        <Card style={{ width: '20rem' }} className='mx-auto'>
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Text as='div'>
                    Planets Description
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PlanetsCard