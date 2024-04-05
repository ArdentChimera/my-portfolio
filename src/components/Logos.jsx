import awsImage from "../assets/aws.png";
import bootstrapImage from "../assets/bootstrap.png";
import cssImage from "../assets/css.png";
import gitImage from "../assets/git.png";
import htmlImage from "../assets/html.png";
import jsImage from "../assets/JS.png";
import nodeJsImage from "../assets/nodeJS.png";
import reactImage from "../assets/React.png";
import tailwindImage from "../assets/tailwind.png";
import vsCodeImage from "../assets/vscode.png";

const techLogos = [
	{
		src: htmlImage,
	},
	{
		src: jsImage,
	},
	{
		src: cssImage,
	},
	{
		src: gitImage,
	},
	{
		src: awsImage,
	},
	{
		src: bootstrapImage,
	},
	{
		src: nodeJsImage,
	},
	{
		src: reactImage,
	},
	{
		src: tailwindImage,
	},
	{
		src: vsCodeImage,
	},
];

const Logos = () => {
	return (
		<>
			<div className="flex justify-center gap-4">
				{techLogos.map(({ src }) => (
					<img
						key={src} // Add a unique key prop for each image
						src={src}
						alt="Tech Logo"
						className="lg:h-[80px] md:h-[50px] h-[20px] lg:w-[80px] md:w-[50px] w-[20px] grayscale hover:grayscale-0 object-contain"
					/>
				))}
			</div>
		</>
	);
};

export default Logos;
