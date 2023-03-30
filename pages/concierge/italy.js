import classes from "./concierge.module.css";
import StaticHeroImage from "../../components/ui/static-hero-image";
import LocalArea from "../../public/images/local-area2.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ItalyInfo() {
  return (
    <>
      <StaticHeroImage imgSrc={LocalArea} alt="" />
      <Row>
        <Col className={classes.heading_col}>
          <h1 className={classes.concierge_heading}>About Italy</h1>
        </Col>
      </Row>
    </>
  );
}

export default ItalyInfo;
