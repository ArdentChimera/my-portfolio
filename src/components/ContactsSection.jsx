import { ContactForm } from "./ContacForm";
import { ButtonGroupComponent } from "./ButtonGroupComponent";

const ContactsSection = ({ innerRef }) => {
	return (
		<>
			{/* Section div */}
			<div ref={innerRef} className="h-full lg:h-dvh">
				{/* Heading div */}
				<div className="text-center p-5">
					<h1 className="text-black font-poppins tracking-[9px] leading-[70px] uppercase text-[32px] font-semibold relative top-1 z-50">
						Contacts
					</h1>
					<h1 className="text-white text-[55px] tracking-[5px] leading-[70px] uppercase font-poppins relative bottom-16">
						Contacts
					</h1>
				</div>
				<div className="flex flex-col lg:flex-row justify-around">
					<ContactForm />
					<div className="mx-auto p-5 border border-black bg-gray-500/30">
						<p className="font-raleway text-black text-[18px] md:text-[36px] lg:p-10 leading-[28px] my-20">
							Checkout my social network bellow
						</p>
						<ButtonGroupComponent />
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactsSection;
