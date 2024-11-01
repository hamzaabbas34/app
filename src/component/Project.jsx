import React from "react";
import "./project.css";
import anas from '../Assets/images/anas.png'
import japan from '../Assets/images/japna.png'
import farreq from '../Assets/images/farreq.png'

export default function Project() {
	return (
		<div
			className="w-100 h-auto flex flex-col px-10 lg:px-20 xl:px-20 2xl:px-40 gap-20 mt-24 font-machin"
			id="project">
			<div className="second w-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
				<div className="lfss w-[100%] ">
					<div className="imagebox w-[100%] rounded-lg overflow-hidden h-80 parent-image ">
						<img
							src="https://acropolium.com/img/articles/build-a-fuel-management-system/img03.jpg"
							alt=""
							className="size-full  object-cover "
						/>
					</div>
					<h2 className="font-bold text-2xl py-4">
					Fuel management system
					</h2>
					<p>
						Developed as part of a group internship project, this Fuel
						Management System is designed to efficiently track and manage fuel
						consumption, inventory, and distribution. The system provides
						real-time insights and automated reporting to optimize fuel
						management processes and improve operational efficiency.
					</p>
					<div className="pt-3">
						<a href="https://github.com/hamzaabbas34">
							<button className=" hover:text-opacity-50 text-white">view github</button>
						</a>
					</div>
				</div>
				<div className="rgss w-full">
					<div className="imagebox w-[100%] rounded-lg overflow-hidden h-80 parent-image ">
						<img
							src={farreq}
							alt=""
							className="size-full  object-cover   "
						/>
					</div>
					<h2 className="font-bold text-2xl py-4">5k Ipv Provider </h2>
					<p>
						Available for purchase is a well-maintained Netflix channel that
						provides access to a wide range of popular and exclusive content.
						This channel offers a comprehensive streaming experience with a
						diverse library of movies, TV shows, documentaries, and original
						series.
					</p>
					<div className="pt-3">
						<a href="https://github.com/hamzaabbas34">
							<button className=" hover:text-opacity-50 text-white">view github</button>
						</a>
					</div>
				</div>
			</div>
			<div className="second w-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 sm:flex-col">
				<div className="lfss w-[100%] ">
					<div className="imagebox w-[100%] rounded-lg overflow-hidden h-80 parent-image ">
						<img src={anas} alt="" className="size-full object-cover " />
					</div>
					<h2 className="font-bold text-2xl py-4">Anas Qureshi Portfolio</h2>
					<p>
						A dynamic and visually engaging portfolio showcasing the creative
						prowess and diverse skills of a talented graphic designer. This
						portfolio highlights various design projects, demonstrating
						expertise in branding, digital design, print media, and more.
					</p>
					<div className="pt-3">
						<a href="https://github.com/hamzaabbas34">
							<button className=" hover:text-opacity-50 text-white">view github</button>
						</a>
					</div>
				</div>
				<div className="rgss w-full">
					<div className="imagebox w-[100%] rounded-lg overflow-hidden h-80 parent-image ">
						<img src={japan} alt="" className="size-full object-cover " />
					</div>
					<h2 className="font-bold text-2xl py-4">Japan customer Website </h2>
					<p>
						Under the philosophy of "Innovating Strategies," our organization
						operates as a model-type sales organization focused on supporting
						digital transformation (DX) and aiming to maximize customer lifetime
						value
					</p>
					<div className="pt-3">
						<a href="https://github.com/hamzaabbas34">
							<button className=" hover:text-opacity-50 text-white">view github</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
