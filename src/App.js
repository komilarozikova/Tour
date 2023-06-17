import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import Swiper from './Components/Swiper/Swiper';
import Gallery from './Components/Gallery/Gallery';


function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Home />
			<Swiper />
			<Gallery />
		</React.Fragment>
	);
}

export default App;
