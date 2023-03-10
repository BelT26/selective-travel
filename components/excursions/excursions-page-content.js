import StaticHeroImage from "../ui/static-hero-image";
import Dolomites4 from "../../public/images/dolomites4.jpg";
import classes from "./excursions-page-content.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ExcursionsPageContent() {
  return (
    <>
      <StaticHeroImage
        imgSrc={Dolomites4}
        alt="the dolomite mountains in the summer"
      />
      <Row>
        <Col className={classes.heading_col}>
          <h1 className={classes.excursions_heading}>Experiences</h1>
        </Col>
      </Row>
    </>
  );
}

export default ExcursionsPageContent;
