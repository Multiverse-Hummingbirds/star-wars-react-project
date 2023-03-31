import React, { useState, useEffect } from 'react'
// import { Button, Card } from 'react-bootstrap'

function PlanetDetails({ person }) {
    const [planet, setPlanet] = useState([]);

    useEffect(() => {
        fetch({})
            .then((res) => res.json())
            .then((data) => {
                setPlanet(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [planet])

    console.log("Planet is here" + planet)

    return (
        <div>
            PlanetDetails {planet.name}
        </div>
    )
}

export default PlanetDetails