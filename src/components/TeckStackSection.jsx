import Logos from "./Logos";

const TeckStackSection = ({ innerRef }) => {
	return (
		<>
			{/* Section div */}
			<div ref={innerRef} className="bg-white h-4/5 pb-20">
				{/* Heading div */}
				<div className="text-center p-5">
					<h1 className="text-black font-poppins tracking-[9px] leading-[70px] uppercase text-[28px] md:text-[32px] font-semibold relative top-1 z-50">
						Tech Stack
					</h1>
					<h1 className="text-[#eeeeee] text-[40px] md:text-[55px] tracking-[5px] leading-[70px] uppercase font-poppins relative bottom-16">
						Tech Stack
					</h1>
				</div>
				<div>
					<Logos />
				</div>
			</div>
		</>
	);
};

export default TeckStackSection;
