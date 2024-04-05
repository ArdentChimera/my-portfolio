import {
	Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineBody,
	Typography,
} from "@material-tailwind/react";

export function DefaultTimeline() {
	return (
		<div className="w-[80%] mx-auto mb-16 md:w-[32rem]">
			<Timeline>
				<TimelineItem>
					<TimelineConnector />
					<TimelineHeader className="h-3">
						<TimelineIcon />
						<Typography
							variant="h6"
							color="blue-gray"
							className="text-[12px] md:text-[16px] leading-none font-poppins tracking-[1px]"
						>
							Software engineering program, SoftUni
						</Typography>
					</TimelineHeader>
					<TimelineBody className="pb-8">
						<Typography
							variant="small"
							color="gray"
							className="text-[8px] md:text-[10px] lg:text-[14px] font-normal text-gray-600 font-raleway tracking-[1px]"
						>
							I went through the JavaScript learning path which included modules
							from Basics to Advanced. I have learned how to use the programming
							language to build projects and solve problems with the help of
							algorithms. My tasks included solving small but complex exercise
							problems, building static and dynamic web applications, and
							fetching data from databases and APIs.
						</Typography>
					</TimelineBody>
				</TimelineItem>
				<TimelineItem>
					<TimelineConnector />
					<TimelineHeader className="h-3">
						<TimelineIcon />
						<Typography
							variant="h6"
							color="blue-gray"
							className="text-[12px] md:text-[16px] leading-none font-poppins tracking-[1px]"
						>
							Sirma Academy - React & JavaScript
						</Typography>
					</TimelineHeader>
					<TimelineBody className="pb-8">
						<Typography
							variant="small"
							color="gray"
							className="text-[8px] md:text-[10px] lg:text-[14px] font-normal text-gray-600 font-raleway tracking-[1px]"
						>
							At the academy, I developed my JavaScript skills and learned the
							React fundamentals. The course was intensive and focused on
							hands-on application of the things we have learned. My tasks were
							to build all types of applications including single and multi-page
							applications using technologies from the React ecosystem. I gained
							knowledge of using React States, React Router, Redux, Axios,
							Tailwind, Express, NodeJS, and Git.
						</Typography>
					</TimelineBody>
				</TimelineItem>
				<TimelineItem>
					<TimelineHeader className="h-3">
						<TimelineIcon />
						<Typography
							variant="h6"
							color="blue-gray"
							className="text-[12px] md:text-[16px] leading-none font-poppins tracking-[1px]"
						>
							High School - Mathematics, Informatics and English
						</Typography>
					</TimelineHeader>
					<TimelineBody>
						<Typography
							variant="small"
							color="gray"
							className="text-[8px] md:text-[10px] lg:text-[14px] font-normal text-gray-600 font-raleway tracking-[1px]"
						>
							This is the place where my passion for computers and programming
							started.
						</Typography>
					</TimelineBody>
				</TimelineItem>
			</Timeline>
		</div>
	);
}
