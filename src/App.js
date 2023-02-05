import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Contact from './components/aboutus/Contact';
import About from './components/aboutus/About';

function App() {
	return (
		<div>
			<BrowserRouter>
				{/* public */}
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
