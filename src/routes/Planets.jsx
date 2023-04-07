import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import PlanetsCard from '../components/PlanetsCard';

function Planets() {
    // initialize state
    const [planetsList, setPlanetsList] = useState([]);
    const [filteredPlanets, setFilteredPlanets] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    // useEffect to fetch the plantes
    useEffect(() => {
        setLoading(true);
        fetch(`https://swapi.dev/api/planets`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setPlanetsList(data.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    // useEffect to filter the planets
    useEffect(() => {
        setFilteredPlanets(
            planetsList.filter((planet) => (
                planet.name.toLowerCase().includes(search.toLowerCase())
            ))
        )
    }, [search, planetsList])

    return (
        <Container>
            <Row className='mb-4'>
                <Col>
                    <InputGroup>
                        <InputGroup.Text id='search'>Search</InputGroup.Text>
                        <FormControl value={search} onChange={(e) => setSearch(e.target.value)} />
                    </InputGroup>
                </Col>
            </Row>

            <Row className='g-4'>
                {loading ? (
                    <Button variant='primary' disabled style={{ width: '10%', margin: '0 45%', marginTop: '10px' }}>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                ) :
                    filteredPlanets.map((planet) => (
                        <Col key={planet.name}>
                            <PlanetsCard planet={planet} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Planets