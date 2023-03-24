import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.css';
import Planets from './routes/Planets';

const starWarsAPI = `https://swapi.dev/api/people/`

function App() {
	// initialize state with people
	const [peopleList, setPeopleList] = useState([]);

	//useEffect for fetching
	useEffect(() => {
		fetch(starWarsAPI)
			.then((res) => res.json())
			.then((data) => {
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
				<Route path="/" element={<Home peopleList={peopleList} />} />
				<Route path="/planets" element={<Planets />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
