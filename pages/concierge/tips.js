import StaticHeroImage from "../../components/ui/static-hero-image";
import TipJar from "../../public/images/tips.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./concierge.module.css";

function Tips() {
  return (
    <>
      <StaticHeroImage imgSrc={TipJar} alt="a tip jar" />
      <Row>
        <Col className={classes.heading_col}>
          <h1 className={classes.concierge_heading}>Tips</h1>
        </Col>
      </Row>
    </>
  );
}

export default Tips;
