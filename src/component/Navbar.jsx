import React from "react";
import "./nav.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
	

	return (
		<nav className="flex items-center justify-between w-100 px-10 lg:px-40 xl:px-40 2xl:px-40 pt-10 font-machin">
			<div className="text-2xl font-bold">Hamza</div>
			<div className="flex items-center gap-5">
				<Link to="#about">About</Link>
				<Link to="#project">Project</Link>
				<Link to="#contact">Contact Us</Link>
				
			</div>
			<div className="hidden">--</div>
		</nav>
	);
}
