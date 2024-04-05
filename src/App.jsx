import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import TeckStackSection from "./components/TeckStackSection";
import ContactsSection from "./components/ContactsSection";
import FooterSection from "./components/FooterSection";
import { Toaster } from "sonner";
import ScrollToTop from "react-scroll-to-top";
import ArrowUp from "./components/ArrowUpIcon";

import { useRef } from "react";

function App() {
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const techStackRef = useRef(null);
	const contactsRef = useRef(null);

	return (
		<>
			<Toaster richColors />
			<ScrollToTop
				smooth
				component={<ArrowUp />}
				style={{ paddingLeft: "5px" }}
			/>
			<HomeSection
				aboutRef={aboutRef}
				projectsRef={projectsRef}
				techStackRef={techStackRef}
				contactsRef={contactsRef}
			/>
			<AboutSection innerRef={aboutRef} />
			<ProjectsSection innerRef={projectsRef} />
			<TeckStackSection innerRef={techStackRef} />
			<ContactsSection innerRef={contactsRef} />
			<FooterSection />
		</>
	);
}

export default App;
