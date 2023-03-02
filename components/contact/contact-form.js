import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import classes from "./contact-form.module.css";

function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("accommodation");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setFullname("");
      setEmail("");
      setSubject("accommodation");
      setMessage("");
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };
  return (
    <>
      <Container className={classes.inner_form_container}>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3"
            controlId="name"
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
          >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          >
            <Form.Label>Enquiry Type</Form.Label>
            <Form.Select aria-label="subject">
              <option value="accommodation">Accommodation</option>
              <option value="excursions">Excursions</option>
              <option value="transfers">Transfers</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          >
            <Form.Label>Message</Form.Label>
            <Form.Control type="textarea" rows={5} />
          </Form.Group>
          <Button variant="dark" onClick={handleSubmit}>
            {buttonText}
          </Button>
        </Form>
      </Container>
      <div className={classes.message_container}>
        {showSuccessMessage && (
          <h3 className={classes.success}>Message successfully sent</h3>
        )}
        {showFailureMessage && (
          <h3 className={classes.error}>Error sending message</h3>
        )}
      </div>
    </>
  );
}

export default ContactForm;
