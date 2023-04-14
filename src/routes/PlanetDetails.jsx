import React, { useState, useEffect } from 'react'
// import { Button, Card } from 'react-bootstrap'
import {useParams} from 'react-router-dom';
import { Button, Card } from 'react-bootstrap'

function PlanetDetails() {
    const [planet, setPlanet] = useState("");
    const {id} = useParams();

    useEffect(() => {
        try {
            const fetchPlanet = async (planetID) => {
            const res = await fetch(`https://swapi.dev/api/planets/${planetID}/`)
            const data = await res.json();
            console.log(data);
            setPlanet(data);
        }
        fetchPlanet(id)
    } catch (error) {
            console.error(error)
        }
    }, [id])

    return (
        <div>
            PlanetDetails: {id}
            {planet.diameter}
        
                <Card style={{ width: '60%' }} className='mx-auto'>
                <Card.Title style={{ marginTop: '20px' }} className='mx-auto'>{planet.name} Details</Card.Title>
                <Card.Text style={{ marginLeft: '20px' }}>Climate: {planet.climate}</Card.Text>
                <Card.Text style={{ marginLeft: '20px' }}>Population: {planet.population}</Card.Text>
            </Card>
        </div>
    )
}

export default PlanetDetails