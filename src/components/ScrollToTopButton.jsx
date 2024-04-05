import { useEffect, useState } from "react";

import { Button } from "@material-tailwind/react";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Top: 0 takes us all the way back to the top of the page
	// Behavior: smooth keeps it smooth!
	const scrollToTop = (ref) => {
		ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.scrollY > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<>
			{isVisible && (
				<Button
					variant="text"
					className="fixed bottom-5 right-5 z-50"
					onClick={() => scrollToTop(navRef)}
				>
					{/* <KeyboardDoubleArrowUpIcon /> */}
					Back to Top
				</Button>
			)}
		</>
	);
};

export default ScrollToTopButton;
