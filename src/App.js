import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import Swiper from './Components/Swiper/Swiper';

function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Home />
			<Swiper />
		</React.Fragment>
	);
}

export default App;
