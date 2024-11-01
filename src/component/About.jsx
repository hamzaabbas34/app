// import gsap from "gsap"; // Import gsap library
// import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
// import ContactMe from "./ContactMe";
// import Project from "./Project";
// import { useEffect } from "react";

// gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

// export default function About() {
// 	useEffect(() => {
// 		const tl = gsap.timeline({
// 			scrollTrigger: {
// 				scrub: 1,
// 				trigger: "#about", // Change trigger to the appropriate element ID
// 				start: "top top",
// 				end: "bottom bottom",
// 				toggleActions: "restart pause reverse pause",
// 			},
// 		});

// 		tl.to("#changeColor", {
// 			backgroundColor: "black",
// 			color: "white",
// 			duration: 0.2,
// 		});
// 	}, []);

// 	return (
// 		<div id="changeColor" className="change1 py-5">
// 			<div id="about" className="w-100 font-machin abouts">
// 				<div className="siders w-100 flex gap-5 px-10 lg:px-40 xl:px-40 2xl:px-40 py-5 ">
// 					<div className="acordine w-[30%] flex flex-col gap-5 justify-start">
// 						<div className="">
// 							<button>servics</button>
// 						</div>
// 						<div>
// 							<button className="font-bold text-[15px]  md:text-[1.3rem]  ">
// 								Development
// 							</button>
// 							<div className="hidden">
// 								<li>Html/css/js</li>
// 								<li>Nodejs</li>
// 								<li>React</li>
// 								<li>Python</li>
// 							</div>
// 						</div>
// 						<div>
// 							<button className="font-bold text-[15px] md:text-[1.3rem]">
// 								Language
// 							</button>
// 							<div className="hidden">
// 								<li>Html/css/js</li>
// 								<li>Nodejs</li>
// 								<li>React</li>
// 								<li>Python</li>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="w-[70%] flex flex-col gap-5 pb-10">
// 						<div className="ps-4">
// 							<button>about</button>
// 						</div>
// 						<p className="text-[15px] md:text-[1.3rem] lg:pe-10  ps-4">
// 							Frontend developers are responsible for designing the layout of
// 							the "About" section. They should ensure that the design is
// 							visually engaging, easy to navigate, and aligns with the overall
// 							aesthetic of the website or application
// 						</p>
// 						<div className="hidden">
// 							<li>Html/css/js</li>
// 							<li>Nodejs</li>
// 							<li>React</li>
// 							<li>Python</li>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<Project />
// 			<ContactMe />
// 		</div>
// 	);
// }

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ContactMe from "./ContactMe";
import Project from "./Project";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
	const [showLanguage, setShowLanguage] = useState(false); // State to toggle language list

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				scrub: 1,
				trigger: "#about",
				start: "top top",
				end: "bottom bottom",
				toggleActions: "restart pause reverse pause",
			},
		});

		tl.to("#changeColor", {
			backgroundColor: "black",
			color: "white",
			duration: 0.2,
		});
	}, []);

	return (
		<div id="changeColor" className="change1 py-5">
			<div id="about" className="w-100 font-machin abouts">
				<div className="siders w-100 flex gap-5 px-10 lg:px-40 xl:px-40 2xl:px-40 py-5 ">
					<div className="acordine w-[30%] flex flex-col gap-5 justify-start">
						<div className="">
							<button>Services</button>
						</div>
						<div>
							<button
								className="font-bold text-[15px] md:text-[1.3rem]"
								onClick={() => setShowLanguage(!showLanguage)}>
								Development
							</button>
						</div>
						<div>
							<button
								className="font-bold text-[15px] md:text-[1.3rem]"
								onClick={() => setShowLanguage(!showLanguage)} // Toggle on click
							>
								Language
							</button>
						</div>
					</div>

					<div className="w-[70%] flex flex-col gap-5 pb-10">
						<div className="ps-4">
							<button>About</button>
						</div>
						{!showLanguage && (
							<p className="text-[15px] md:text-[1.3rem] lg:pe-10 ps-4">
								Frontend developers are responsible for designing the layout of
								the "About" section. They should ensure that the design is
								visually engaging, easy to navigate, and aligns with the overall
								aesthetic of the website or application.
							</p>
						)}
						{showLanguage && (
							<div className="text-[15px] md:text-[1.2rem] lg:pe-10 ps-4 list-none">
								<li>Html/css/js</li>
								<li>Nodejs</li>
								<li>React</li>
								<li>Javascript</li>
							</div>
						)}
					</div>
				</div>
			</div>
			<Project />
			<ContactMe />
		</div>
	);
}
