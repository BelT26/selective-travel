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
        <Col xs={12} md={6} xl={4}>
          <h5>Top Concierge</h5>
          <p>
            <GiSmartphone className={classes.phone_icon} /> : +39 045 7236870
          </p>
          <p>
            <FaRegEnvelope /> : info@selective-travel.com
          </p>
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
