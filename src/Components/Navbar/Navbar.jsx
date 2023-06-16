import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../Components/Navbar/Navbar.scss";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>Istanjourney</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About</a>
				<a href="/#">Program</a>
				<a href="/#">Blog</a>
				<a href="/#">Gallery</a>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				
			</nav>
			<a className="booktour">Book a tour</a>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			
		</header>
	);
}

export default Navbar;
