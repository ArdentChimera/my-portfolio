import { ButtonGroup, Button } from "@material-tailwind/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const icons = [
	{
		icon: <GitHubIcon />,
		link: "https://github.com/ArdentChimera",
	},
	{
		icon: <LinkedInIcon />,
		link: "https://www.linkedin.com/in/nikolai-petrov-1a451a239/",
	},
	{
		icon: <InstagramIcon />,
		link: "https://www.instagram.com/nikolay.petrovv/",
	},
];

export function ButtonGroupComponent() {
	return (
		<div className="flex w-max flex-col items-center gap-4 mx-auto">
			<ButtonGroup variant="text">
				{icons.map(({ icon, link }, index) => (
					<Button key={index}>
						<a href={link} className="bg-none">
							{icon}
						</a>
					</Button>
				))}
			</ButtonGroup>
		</div>
	);
}
