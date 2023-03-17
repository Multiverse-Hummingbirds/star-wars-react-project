import React, { useState, useContext, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import PeopleCard from '../components/PeopleCard';

function Home({ peopleList }) {
    // useState for the list of filtered people by name
    const [filterdPeople, setFilteredPeople] = useState([]);
    const [search, setSearch] = useState('');

    // useEffect to filter the results
    useEffect(() => {
        setFilteredPeople(
            peopleList.filter((person) => (
                person.name.toLowerCase().includes(search.toLowerCase())
            ))
        )
    }, [search, peopleList])

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
                {filterdPeople.map((person) => (
                    <Col key={person.name}>
                        <PeopleCard url={person.url} name={person.name} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Home