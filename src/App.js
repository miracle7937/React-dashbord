import React from 'react';
import './App.css';
import SideBar from './Dashboard/SideBar/sideContainer';
import Layout from './Dashboard/MainPage/Layout';
import AppBar from './Dashboard/appBar';

function App() {
	return (
		<div className="App  container">
			<AppBar />

			<SideBar />
			<Layout />
		</div>
	);
}

export default App;
