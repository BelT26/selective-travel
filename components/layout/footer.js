import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./footer.module.css";
import Button from "react-bootstrap/Button";
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
        <Col xs={12} md={6} xl={3}>
          <h3>Selective Travel</h3>
          <address>Street Address</address>
          <address>City</address>
          <address>Country</address>

          <p>
            <GiSmartphone className={classes.phone_icon} /> : +39 045 7236870
          </p>
          <p>
            <FaRegEnvelope /> : info@selective-travel.com
          </p>
          <Row>
            <Col className={classes.social_icon_row}>
              <FaFacebook className={classes.social_icon} size={35} />
              <FaInstagram className={classes.social_icon} size={35} />
              <FaTwitter className={classes.social_icon} size={35} />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} xl={3}>
          <h3>What we do</h3>
          <p>About us</p>
          <p>Destinations</p>
          <p>Accommodation</p>
          <p>Services</p>
          <p>Golf</p>
          <p>Book online</p>
          <p>Extras</p>
          <p>Contact Us</p>
        </Col>
        <Col xs={12} md={6} xl={3}>
          <h3>Recent News</h3>
          <p>New website launch</p>
          <p>Selective Travel at the WTM</p>
          <p>Selective Travel opens up Croatia</p>
        </Col>
        <Col xs={12} md={6} xl={3}>
          <h3>Newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
            possimus voluptates cum maiores distinctio nobis ea voluptas ducimus
            deleniti eos molestias quam totam similique repudiandae nisi,
            temporibus itaque ab.
          </p>
          <Button variant="outline-light">Sign Up Now</Button>
        </Col>
      </Row>
    </footer>
  );
}
export default Footer;
