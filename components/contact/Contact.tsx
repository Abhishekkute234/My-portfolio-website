import { contacts } from "@/constants/contacts";
import ContactCard from "./ContactCard";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Contactusform from "../layout/Contactus";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center  overflow-hidden  bg-black px-6 py-24"
    >
      <h2 className="h2-bold my-11">Contact me</h2>
      <h4 className="h3-bold my-8 md:mx-auto md:max-w-[850px] md:text-center">
        Let&apos;s create something exceptional together! Feel free to reach out
        for collaboration, freelance work, or just to say hi!
      </h4>

      <div className="flex flex-col gap-4 lg:flex-row xl:justify-center ">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            title={contact.title}
            description={contact.description}
            icon={contact.icon}
            path={contact.path}
          />
        ))}
      </div>
      <div className="mx-auto my-8 text-4xl font-normal text-neutral-100 dark:text-neutral-100">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="flex flex-col items-center justify-center bg-black font-bold text-white dark:bg-black dark:text-white"
        >
          <Contactusform />
        </HoverBorderGradient>
      </div>
    </section>
  );
};
export default Contact;
