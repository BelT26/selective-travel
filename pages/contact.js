import ContactForm from "../components/contact/contact-form";
import classes from "./contact.module.css";
import ContactImg from "../public/images/contact2.jpg";
import StaticHeroImage from "../components/ui/static-hero-image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaRegEnvelope } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import ContactLink from "../components/ui/contact_link";
function Contact() {
  return (
    <>
      <StaticHeroImage imgSrc={ContactImg} alt="a man typing on a laptop" />
      <Container>
        <div className={classes.heading}>
          <h1 className="display-4">Contact Us</h1>
        </div>
        <Row>
          <Col xs={12} lg={8}>
            <ContactForm />
          </Col>
          <Col xs={12} lg={4}>
            <Container className={classes.address_container}>
              <h4>Top Concierge</h4>
              <address>Address Line 1</address>
              <address>Address Line 1</address>
              <address>City</address>
              <address>Postcode</address>
              <address>Country</address>
              <address>
                <GiSmartphone className={classes.phone_icon} />
                <a
                  href="tel:+39 045
                7236870"
                  className={classes.phone_link}
                >
                  : +39 045 7236870
                </a>
              </address>
              <address>
                <FaRegEnvelope /> {"  "}
                <ContactLink
                  color="whitesmoke"
                  hover_color="rgb(147, 172, 223)"
                  email="info@top-concierge.com"
                  subject="Website Enquiry"
                >
                  : info@top-concierge.com
                </ContactLink>
              </address>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
