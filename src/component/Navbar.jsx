import React, { useState } from "react";
import "./nav.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
	const [isTrue, setIsTrue] = useState(false);

	return (
		<nav className="flex items-center justify-between w-100 px-10 lg:px-40 xl:px-40 2xl:px-40 pt-10 font-machin">
			<div className="text-2xl font-bold">Hamza</div>
			<div className="2xl:flex xl:flex md:flex lg:flex items-center gap-5 sm:hidden hidden">
				<Link to="#about">About</Link>
				<Link to="#project">Project</Link>
				<Link to="#contact">Contact Us</Link>
			</div>
			<button
				className="lg:hidden md:hidden block"
				onClick={() => setIsTrue(!isTrue)} // Toggle the state when the button is clicked
			>
				Menu
			</button>
			<div
				className={`fixed top-0 right-0 bg-white shadow-lg p-5 rounded-lg h-full z-10 w-1/2 transition-transform duration-300 ${
					isTrue ? "transform translate-x-0" : "transform translate-x-full"
				}`}>
				<div className="text-right text-2xl my-4">
					<button onClick={() => setIsTrue(false)}>⛌</button>
				</div>
				<Link
					to="#about"
					className="block mb-2"
					onClick={() => setIsTrue(false)}>
					About
				</Link>
				<Link
					to="#project"
					className="block mb-2"
					onClick={() => setIsTrue(false)}>
					Project
				</Link>
				<Link to="#contact" className="block" onClick={() => setIsTrue(false)}>
					Contact Us
				</Link>
			</div>
		</nav>
	);
}
