import StaticHeroImage from "../../components/ui/static-hero-image";
import WellnessImg from "../../public/images/wellness2.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./concierge.module.css";

function Wellness() {
  return (
    <>
      <StaticHeroImage
        imgSrc={WellnessImg}
        alt="a lady in an infinity pool overlooking a lake"
      />
      <Row>
        <Col className={classes.heading_col}>
          <h1 className={classes.concierge_heading}>Fun and Wellness</h1>
        </Col>
      </Row>
    </>
  );
}

export default Wellness;
