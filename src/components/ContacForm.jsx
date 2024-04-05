import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@material-tailwind/react";
import { toast } from "sonner";

export const ContactForm = () => {
	const form = useRef();
	const [emailError, setEmailError] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		if (!form.current.user_email.value.trim()) {
			setEmailError(true);
			return;
		}

		emailjs
			.sendForm("service_i2vl55l", "template_mm58ukd", form.current, {
				publicKey: "8U7eKrY78-uB0G4WE",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					toast.success("Email sent successfully. Thank you!");
					form.current.user_name.value = "";
					form.current.user_email.value = "";
					form.current.message.value = "";
					setEmailError(false);
				},
				(error) => {
					console.log("FAILED...", error.text);
					toast.error("Error! Please try again.");
				}
			);
	};

	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			className="w-[80%] lg:w-[35%] mx-auto mb-20 mt-5 flex flex-col gap-5"
		>
			<label className="text-black leading-none font-poppins tracking-[1px]">
				Name
			</label>
			<input
				type="text"
				name="user_name"
				className=" bg-[#f4f2f0] border-b-2 border-black focus:outline-none font-normal text-gray-600 font-raleway tracking-[1px]"
			/>
			<label className="text-black leading-none font-poppins tracking-[1px]">
				Email
			</label>
			<input
				type="email"
				name="user_email"
				className=" bg-[#f4f2f0] border-b-2 border-black focus:outline-none font-normal text-gray-600 font-raleway tracking-[1px]"
			/>
			{emailError && (
				<p className="text-red-500 text-sm">Please fill out the email field.</p>
			)}
			<label className="text-black leading-none font-poppins tracking-[1px]">
				Message
			</label>
			<textarea
				name="message"
				className=" bg-[#f4f2f0] border-b-2 border-black focus:outline-none font-normal text-gray-600 font-raleway tracking-[1px]"
			/>
			<Button
				type="submit"
				className="w-36 rounded-full bg-primary text-white font-poppins mt-10 px-8"
			>
				Send
			</Button>
		</form>
	);
};
