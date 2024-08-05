import React from "react";

export default function ContactMe() {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = "./image/hamza_resume.pdf"; // Change this to the path of your resume file
		link.download = "hamza_resume.pdf";
		link.click();
	};

	return (
		<div
			id="contact"
			className="w-full px-10 lg:px-40 xl:px-40 2xl:px-40 py-36 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 font-machin">
			<div className="">
				<h2 className="text-5xl">
					That's enough of me {window.innerWidth <= 760 && <br />}
					let's talk about you.
				</h2>
			</div>
			<div className="flex flex-col  gap-20">
				<div className="flex flex-col gap-5">
					<div className="btn">
						<button className="font-bold text-[1.4rem]">Contact Me</button>
					</div>
					<div className="flex gap-10 lg:gap-20 xl:gap-20 2xl:gap-20 ">
						<h2>
							<a href="https://www.instagram.com/hamza_abbas2024/">Instagram</a>
						</h2>
						<a href="https://wa.me/+03019612828">Whatsapp</a>
						<button onClick={handleDownload} className="download-btn">
							Download Resume
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
