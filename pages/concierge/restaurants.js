import StaticHeroImage from "@/components/ui/static-hero-image";
import Restaurant from "@/public/images/restaurant2.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./concierge.module.css";

function Restaurants() {
  return (
    <>
      <StaticHeroImage
        imgSrc={Restaurant}
        alt="several wooden restaurant tables and chairs and a chalk board menu outside a restaurant"
      />
      <Row>
        <Col className={classes.heading_col}>
          <h1 className={classes.concierge_heading}>Restaurants</h1>
        </Col>
      </Row>
    </>
  );
}

export default Restaurants;
