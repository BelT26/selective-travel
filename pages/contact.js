import Image from "next/image";
import ContactForm from "@/components/contact/contact-form";
import classes from "./contact.module.css";
import ContactImg from "../public/images/contact2.jpg";

function Contact() {
  return (
    <>
      <div className={classes.image_container}>
        <Image
          src={ContactImg}
          alt="lady typing on a laptop and holding an iPhone"
          className={classes.hero_img}
          height={600}
          width={800}
        />
      </div>
      <div className={classes.heading}>
        <h1 className="display-4">Contact Us</h1>
      </div>

      <ContactForm />
    </>
  );
}

export default Contact;
