import React, { useState, useEffect } from 'react'
// import { Button, Card } from 'react-bootstrap'
import {useParams} from 'react-router-dom';

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
        </div>
    )
}

export default PlanetDetails