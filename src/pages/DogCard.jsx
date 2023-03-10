import React, { useState, useEffect, useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function DogCard({ name }) {
    // initialize state
    const [dog, setDog] = useState(null);
    // Use params to grab param name
    const params = useParams();

    // useEffect to fetch the data
    useEffect(() => {
        fetch(`https://api.api-ninjas.com/v1/dogs?${params.name}`)
            .then((res) => res.json)
            .then((data) => {
                setDog(data)
            });
    }, [params.name])


    return (
        <Card>
            DogCard
            <Card.Title>{params.name}</Card.Title>
        </Card>
    )
}

export default DogCard