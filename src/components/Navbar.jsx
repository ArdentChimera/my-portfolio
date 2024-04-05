import { Button } from "@material-tailwind/react";

const Navbar = ({
	aboutRef,
	projectsRef,
	techStackRef,
	contactsRef,
	innerRef,
}) => {
	const scrollToRef = (ref) => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<div
				ref={innerRef}
				className="flex flex-col md:flex-row w-full justify-around lg:justify-evenly my-10"
			>
				<div>
					<h1 className="text-center md:ml-10 font-poppins text-[32px] md:text-2xl lg:text-4xl text-black font-bold tracking-[9px] leading-[70px] drop-shadow-[-0.696px_4.951px_2.5px_rgba(21,21,21,0.16)]">
						DEVELOPER
					</h1>
				</div>
				<div>
					<ul className="flex flex-row items-center gap-2 justify-center md:gap-5 font-poppins text-black my-6 md:my-0">
						<li>
							<Button
								onClick={() => scrollToRef(aboutRef)}
								variant="text"
								className="text-[10px] lg:text-[16px] lg:font-normal p-2"
							>
								About
							</Button>
						</li>
						<li>
							<Button
								onClick={() => scrollToRef(projectsRef)}
								variant="text"
								className="text-[10px] lg:text-[16px] lg:font-normal p-2"
							>
								Projects
							</Button>
						</li>
						<li>
							<Button
								onClick={() => scrollToRef(techStackRef)}
								variant="text"
								className="text-[10px] lg:text-[16px] lg:font-normal p-2"
							>
								Tech Stack
							</Button>
						</li>
						<Button
							onClick={() => scrollToRef(contactsRef)}
							variant="outlined"
							size="sm"
							ripple={true}
							className="rounded-full border-primary text-primary text-[10px] lg:text-[16px] lg:font-normal focus:outline-none active:outlined"
						>
							Contacts
						</Button>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
