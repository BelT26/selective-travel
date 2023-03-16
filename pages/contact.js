import Image from "next/image";
import ContactForm from "@/components/contact/contact-form";
import classes from "./contact.module.css";
import ContactImg from "../public/images/contact2.jpg";
import StaticHeroImage from "@/components/ui/static-hero-image";

function Contact() {
  return (
    <>
      <StaticHeroImage imgSrc={ContactImg} alt="a man typing on a laptop" />

      <div className={classes.heading}>
        <h1 className="display-4">Contact Us</h1>
      </div>

      <ContactForm />
    </>
  );
}

export default Contact;
