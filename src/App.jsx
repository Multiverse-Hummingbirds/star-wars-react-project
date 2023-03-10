import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DogCard from './pages/DogCard';

function App() {
	return (
		<BrowserRouter className="App">
			<h2>Dogs API</h2>
			<Routes>
				<Route path='/:name' element={<DogCard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
