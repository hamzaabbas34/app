import React from "react";
import file from "../Assets/images/hamza_resume.pdf";

export default function ContactMe() {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = file; // Ensure file is in the public folder
		link.download = "hamza_resume.pdf";
		link.click();
	};

	return (
		<div
			id="contact"
			className="w-full px-10 lg:px-40 xl:px-40 2xl:px-40 py-36 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 font-machin">
			<div className="">
				<h2 className="sm:text-5xl text-4xl">
					That's enough of me {window.innerWidth <= 760 && <br />}
					let's talk about you.
				</h2>
			</div>
			<div className="flex flex-wrap justify-between  gap-4 mt-5  ">
				<h2 className=" flex">
					<a
						className="border-black  border-2 hover:border-white p-3 h-fit py-3 px-5  w-[45%] text-center sm:w-auto  rounded-full"
						href="https://www.instagram.com/hamza_abbas2024/">
						Instagram
					</a>
				</h2>
				<a
					href="https://wa.me/+03019612828"
					className="border-black  border-2 hover:border-white h-fit py-3 px-5 rounded-full w-[45%] text-center sm:w-auto">
					Whatsapp
				</a>
				<button
					onClick={handleDownload}
					className="download-btn w-full sm:w-auto border-2 border-black h-fit py-3 px-5 rounded-full hover:border-white">
					Download Resume
				</button>
			</div>
		</div>
	);
}
