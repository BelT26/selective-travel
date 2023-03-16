import ContactForm from "@/components/contact/contact-form";
import classes from "./contact.module.css";
import ContactImg from "../public/images/contact2.jpg";
import StaticHeroImage from "@/components/ui/static-hero-image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaRegEnvelope } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";

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
              <p>
                <GiSmartphone className={classes.phone_icon} /> : +39 045
                7236870
              </p>
              <p>
                <FaRegEnvelope /> : info@top-concierge.com
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
