import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import Swiper from './Components/Swiper/Swiper';
import Gallery from './Components/Gallery/Gallery';
import Visit from './Components/Visit/Visit';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Home />
			<Swiper />
			<Gallery />
			<Visit />
			<Blog />
			<Contact />
			<Footer />
		</React.Fragment>
	);
}

export default App;
