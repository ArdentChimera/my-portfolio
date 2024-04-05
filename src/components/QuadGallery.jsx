import GalleryImage from "./GalleryImage";
import { Button } from "@material-tailwind/react";

import plastcomImage from "../assets/plastcom.png";
import creditCardComponentImage from "../assets/interractiveCard.png";
import colorPalleteGeneratorImage from "../assets/colorPallete.png";
import retailCardImage from "../assets/retailCardComponent.png";

export function QuadGallery() {
	const data = [
		{
			imageLink: plastcomImage,
			name: "Plastcom Website",
			link: "https://plastcom.netlify.app",
		},
		{
			imageLink: creditCardComponentImage,
			name: "Interractive Bank Card component",
			link: "https://interactive-credit-card-form.vercel.app/",
		},
		{
			imageLink: colorPalleteGeneratorImage,
			name: "Color palette generator",
			link: "https://color-generator-green.vercel.app/",
		},
		{
			imageLink: retailCardImage,
			name: "Retail Card component",
			link: "https://product-preview-card-component-nine-nu.vercel.app/",
		},
	];

	return (
		<div className=" flex flex-col md:items-center mx-auto gap-5 lg:grid lg:grid-cols-3 lg:gap-7">
			{data.map(({ imageLink, name, link }, index) => (
				<GalleryImage
					image={imageLink}
					alt="project"
					key={index}
					text={name}
					link={link}
				/>
			))}
			<div className="col-span-2 border border-black bg-gray-600/30 lg:p-7">
				<h1 className="w-1/2 font-poppins text-black lg:text-[28px] md:text-[20px] text-[16px] mx-auto md:mt-20 mt-10 tracking-[1px]">
					You can find more in my Github profile...
				</h1>
				{/* <a
					href="#"
					className="flex md:items-center lg:ml-[160px] md:ml-[120px] md:mb-5 ml-[180px] mt-10"
				> */}
				<Button
					variant="text"
					className="flex items-center gap-2 font-raleway lg:ml-[160px] md:ml-[120px] md:mb-5 ml-[180px] mt-10"
				>
					<a href="https://github.com/ArdentChimera">Go to Github</a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						className="h-4 w-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</Button>
				{/* </a> */}
			</div>
		</div>
	);
}
