import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import carouselImages from "./carousel-items";
import HeroImageCarousel from "../ui/hero-image-carousel";
import Intro from "./intro";
import FormContainer from "../booking-fom/form-container";
import classes from "./home-content.module.css";

function HomePageContent() {
  return (
    <>
      <HeroImageCarousel images={carouselImages} />
      <Row>
        <Col className={classes.main_heading}>
          <h1 className="display-4">Welcome to Selective Travel</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={4}>
          <Container>
            <FormContainer />
          </Container>
        </Col>
        <Col xs={12} lg={8}>
          <Intro />
        </Col>
      </Row>
    </>
  );
}

export default HomePageContent;
