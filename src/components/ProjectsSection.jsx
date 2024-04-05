import { QuadGallery } from "./QuadGallery";

const ProjectsSection = ({ innerRef }) => {
	return (
		<>
			{/* Section div */}
			<div ref={innerRef} className="mb-20">
				{/* Heading div */}
				<div className="text-center p-5">
					<h1 className="text-black font-poppins tracking-[9px] leading-[70px] uppercase text-[32px] font-semibold relative top-1 z-50">
						Projects
					</h1>
					<h1 className="text-white text-[55px] tracking-[5px] leading-[70px] uppercase font-poppins relative bottom-16">
						Projects
					</h1>
				</div>
				<div className="flex flex-col md:flex-row justify-center h-full ">
					<QuadGallery />
				</div>
			</div>
		</>
	);
};

export default ProjectsSection;
