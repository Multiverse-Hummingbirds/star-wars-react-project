import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.css';
import Planets from './routes/Planets';

const starWarsAPI = `https://swapi.dev/api/people/`

function App() {
	// initialize state with people
	const [peopleList, setPeopleList] = useState([]);
	const [loading, setLoading] = useState(false)

	//useEffect for fetching
	useEffect(() => {
		setLoading(true)
		fetch(starWarsAPI)
			.then((res) => res.json())
			.then((data) => {
				setLoading(false)
				setPeopleList(data.results)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={loading ? (
					<Button variant='primary' disabled style={{ width: '10%', margin: '0 50rem' }}>
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
					<Home peopleList={peopleList} />} />
				<Route path="/planets" element={<Planets />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
