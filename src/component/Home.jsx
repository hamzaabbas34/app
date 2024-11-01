import React, { useEffect } from "react";
import gsap from "gsap";
import "./home.css";
import profile from "../Assets/images/special.jpg";
import Navbar from "./Navbar";

export default function Home() {
	useEffect(() => {
		startLoader();
		window.scrollTo(0, 0);
	}, []);
	useEffect(() => {
		window.scrollTo(-10, 0);
	}, []);

	function startLoader() {
		gsap.to(".overlay", 1.5, {
			delay: 0.5,
			height: 0,
			stagger: {
				amount: 0.5,
			},
			ease: "power4.inOut",
		});
		gsap.from(".rights", {
			delay: 1,
			y: 100,
			duration: 1.5,
			ease: "power4.inOut",
			opacity: 0,
		});
		gsap.to(".rights", {
			delay: 1.5,
			y: 0,
			duration: 1.5,
			ease: "power4.inOut",
			opacity: 1,
		});
		gsap.from(".left", {
			delay: 1,
			opacity: 0,
			y: 100,
			duration: 1.5,
			ease: "power4.inOut",
		});
		gsap.to(".left", {
			delay: 1.5,
			opacity: 1,
			y: 0,
			duration: 1.5,
			ease: "power4.inOut",
		});
	}

	return (
		<>
			<div className="overlay"></div>
			<Navbar />
			<div className="w-100  sm:h-[95vh] h-[90vh] flex justify-center items-center px-10 lg:px-40 xl:px-40 2xl:px-40">
				<div className="maindiv  grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 2xl:grid-cols-3">
					<div className="lf  2xl:col-span-2 xl:col-span-2 lg:col-span-2  flex justify-start items-center left">
						<h2 className=" sm:text-4xl text-2xl font-light leading-tight font-machin">
							Hey, I'm Hamza Abbas—a web developer focused on creating polished
							user experiences, with expertise in both frontend and backend
							technologies, including Node.js.
						</h2>
					</div>
					<div className="rg flex justify-center items-center rights w-100  ">
						<div className=" sm:w-[60%] w-full rounded-full overflow-hidden grayscale m-auto ">
							<img src={profile} alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
