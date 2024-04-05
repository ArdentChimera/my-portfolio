import { DefaultTimeline } from "./TimelineComponent";
import CustomAccordion from "./Accordion";
import { forwardRef } from "react";

const AboutSection = ({ innerRef }) => {
	return (
		<>
			{/* Section div */}
			<div ref={innerRef} className="bg-white h-full lg:h-dvh">
				{/* Heading div */}
				<div className="text-center p-5">
					<h1 className="text-black font-poppins tracking-[9px] leading-[70px] uppercase text-[32px] font-semibold relative top-1 z-50">
						About
					</h1>
					<h1 className="text-[#eeeeee] text-[55px] tracking-[5px] leading-[70px] uppercase font-poppins relative bottom-16">
						About
					</h1>
				</div>
				{/* Content div */}
				<div className="flex flex-col lg:flex-row justify-around items-center">
					<div className="mt-5 md:mt-0">
						<h2 className="text-center text-black text-[16px] md:text-[32px] font-poppins tracking-[5px] font-normal mb-5">
							Education
						</h2>
						<DefaultTimeline />
					</div>
					<div className="w-[80%] lg:w-[40%] mb-20">
						<h2 className="text-black text-center text-[16px] md:text-[32px] font-poppins tracking-[5px] font-normal mb-5">
							Work Expirience
						</h2>

						<CustomAccordion />
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutSection;
