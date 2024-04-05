import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";

import { useState } from "react";

const CustomAccordion = () => {
	const [openAcc1, setOpenAcc1] = useState(true);
	const [openAcc2, setOpenAcc2] = useState(true);
	const [openAcc3, setOpenAcc3] = useState(true);

	const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
	const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
	const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

	return (
		<>
			<Accordion open={openAcc1}>
				<AccordionHeader
					className="text-[12px] md:text-[16px] leading-none font-poppins tracking-[1px] hover:text-primary"
					onClick={handleOpenAcc1}
				>
					Software Developer at KBC Global Services - Present
				</AccordionHeader>
				<AccordionBody className="text-[8px] md:text-[10px] lg:text-[14px] font-normal text-gray-600 font-raleway tracking-[1px]">
					Developing and maintaining software responsible for internal
					communication and outsourced printing. Utilizing software and
					technologies such as System Orchestrator, Compart, Streamweaver,
					Microsoft SQL Server, and JavaScript.
				</AccordionBody>
			</Accordion>
			<Accordion open={openAcc2}>
				<AccordionHeader
					className="text-[12px] md:text-[16px] leading-none font-poppins tracking-[1px] hover:text-primary"
					onClick={handleOpenAcc2}
				>
					Backup Technical Support Engineer at DXC Technologies
				</AccordionHeader>
				<AccordionBody className="text-[8px] md:text-[10px] lg:text-[14px] font-normal text-gray-600 font-raleway tracking-[1px]">
					Proficient in managing backup infrastructure and ensuring data
					protection. Experienced in developing and enforcing backup policies.
					Skilled in performing data restores and conducting disaster recovery
					tests. Proven track record in monitoring backup systems and generating
					insightful reports. Collaborative team player with strong
					problem-solving skills.
				</AccordionBody>
			</Accordion>
			<Accordion open={openAcc3}>
				<AccordionHeader
					className="text-[12px] md:text-[16px] leading-none font-poppins tracking-[1px] hover:text-primary"
					onClick={handleOpenAcc3}
				>
					Help Desk Analyst at HCL HCL Technologies
				</AccordionHeader>
				<AccordionBody className="text-[8px] md:text-[10px] lg:text-[14px] font-normal text-gray-600 font-raleway tracking-[1px]">
					Troubleshoot and fix any issues with the client`&apos`s hardware and
					software. Worked with Active Directory, ServiceNow, Bash, and Shell
					scripts. Creating and maintaining knowledge articles.
				</AccordionBody>
			</Accordion>
		</>
	);
};

export default CustomAccordion;
