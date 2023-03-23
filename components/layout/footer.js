import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./footer.module.css";
import ContactLink from "../ui/contact_link";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";

function Footer() {
  return (
    <footer className={classes.footer}>
      <Row>
        <Col xs={12} md={6} xl={4}>
          <h5>Top Concierge</h5>
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
        </Col>
        <Col className={classes.social_icon_col} xs={12} md={6} xl={4}>
          <FaFacebook className={classes.social_icon} size={35} />
          <FaInstagram className={classes.social_icon} size={35} />
          <FaTwitter className={classes.social_icon} size={35} />
        </Col>
        <Col xs={12} md={6} xl={4} className="ms-auto">
          <h5>Privacy Policy</h5>
        </Col>
      </Row>
    </footer>
  );
}
export default Footer;
