import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const GalleryImage = ({ image, alt, text, link }) => {
	return (
		// <figure className="relative h-72 w-full">
		// 	<img
		// 		key={key}
		// 		className="h-full w-full object-cover object-center "
		// 		src={image}
		// 		alt={alt}
		// 	/>
		// 	<figcaption className="absolute bottom-5 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-lg border border-black bg-white py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
		// 		<div>
		// 			<h3 className=" text-black font-semibold leading-none font-poppins tracking-[1px]">
		// 				{text}
		// 			</h3>
		// 		</div>
		// 	</figcaption>
		// </figure>
		<Card className="w-96 bg-[#f4f2f0] rounded-none">
			<CardHeader
				shadow={false}
				floated={false}
				className="h-40 w-[80%] mx-auto shadow-md rounded-none"
			>
				<img
					src={image}
					alt={alt}
					className="h-full w-full object-cover grayscale hover:grayscale-0 "
				/>
			</CardHeader>
			<CardBody>
				<div className="mb-2 flex items-center justify-center">
					<p
						color="blue-gray"
						className="text-black font-semibold leading-none font-poppins tracking-[1px] underline underline-offset-[20px] decoration-1 decoration-gray-700"
					>
						{text}
					</p>
				</div>
			</CardBody>
			<CardFooter className="pt-0 mx-auto">
				<a href={link} className="inline-block">
					<Button
						variant="text"
						className="flex items-center gap-2 font-raleway"
					>
						Go to project
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
				</a>
			</CardFooter>
		</Card>
	);
};

export default GalleryImage;
