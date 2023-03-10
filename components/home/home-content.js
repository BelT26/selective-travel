import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import carouselImages from "./carousel-items";
import HeroImageCarousel from "../ui/hero-image-carousel";
import classes from "./home-content.module.css";
import CategoryGrid from "./category-grid";

function HomePageContent() {
  return (
    <>
      <HeroImageCarousel images={carouselImages} />
      <Container>
        <Row>
          <Col className={classes.subheading_col}>
            <h1 className={classes.subheading_top}>
              Why book with Top Concierge
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4} className={classes.reasons_col}>
            <h4 className={classes.reason_heading}>Based in the area</h4>
            <p className={classes.reason_text}>
              Our unrivalled local knowledge allows us to choose and to work
              with the finest and most trustworthy local service providers
            </p>
          </Col>
          <Col xs={12} lg={4} className={classes.reasons_col}>
            <h4 className={classes.reason_heading}>Travel & tourism experts</h4>
            <p className={classes.reason_text}>
              Years of first-hand experience working directly with holidaymakers
              has enbled us to fully understand how to delight our customers by
              providing the highest standard of service.
            </p>
          </Col>
          <Col xs={12} lg={4} className={classes.reasons_col}>
            <h4 className={classes.reason_heading}>Here to help</h4>
            <p className={classes.reason_text}>
              From information and top tips, our aim is that you spend a
              fabulous time in the area.
            </p>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col className={classes.subheading_col}>
          <h2 className={classes.subheading}>Recommended by your Concierge </h2>
        </Col>
      </Row>
      <CategoryGrid />
      {/* <Row>
        <Col className={classes.subheading_col}>
          <h2 className={classes.subheading}>Concierge services </h2>
        </Col>
      </Row> */}
    </>
  );
}

export default HomePageContent;
