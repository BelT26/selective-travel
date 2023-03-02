import ContactForm from "@/components/contact/contact-form";
import classes from "./contact.module.css";

function Contact() {
  return (
    <>
      <div className={classes.heading}>
        <h1 className="display-4">Contact Us</h1>
      </div>

      <ContactForm />
    </>
  );
}

export default Contact;
