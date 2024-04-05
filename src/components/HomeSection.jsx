import profileImage from "../assets/profile-image.jpg";
import Navbar from "./Navbar";
import { Button } from "@material-tailwind/react";

const HomeSection = ({ aboutRef, projectsRef, techStackRef, contactsRef }) => {
	const scrollToRef = (ref) => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<div className="h-full md:h-vh lg:h-dvh">
				<Navbar
					aboutRef={aboutRef}
					projectsRef={projectsRef}
					techStackRef={techStackRef}
					contactsRef={contactsRef}
				/>
				<div className="flex flex-col md:flex-row justify-center">
					<div className="w-[80%] md:w-[400px] lg:w-[450px] h-[200px] md:h-[300px] lg:h-[400px] lg:mx-0 mx-auto">
						<img
							src={profileImage}
							alt="my image"
							className="rounded-br-[200px] rounded-tr-[200px] h-[200px] w-[150px] md:h-[350px] md:w-[250px] lg:h-[450px] lg:w-[350px] lg:mt-20 mx-auto"
						/>
					</div>
					<div className="w-1/2 flex flex-col items-center md:w-[400px] lg:w-[500px] my-20 md:my-16 lg:my-36 lg:mx-0 mx-auto">
						<p className="font-raleway text-center text-[20px] md:text-[32px] lg:text-[36px] text-black font-light tracking-[1px]">
							Hello, I'm Nikolay
						</p>
						<h2 className="font-poppins text-black text-[16px] text-center md:text-[40px] lg:text-[46px]">
							Software Developer
						</h2>
						<p className="font-raleway text-black text-center text-[10px] md:text-[14px] lg:text-[18px] leading-[28px] mt-5">
							A highly motivated and skilled individual with a strong passion
							for web development and JavaScript.
						</p>
						<Button
							onClick={() => scrollToRef(projectsRef)}
							size="lg"
							ripple={true}
							className="rounded-full bg-primary text-white font-poppins mt-10 px-5 text-[10px] lg:text-[12px] md:px-12 "
						>
							My Projects
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeSection;
