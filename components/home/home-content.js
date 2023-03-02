import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import carouselImages from "./carousel-items";
import HeroImageCarousel from "../ui/hero-image-carousel";
import Intro from "./intro";
import FormContainer from "../booking-fom/form-container";
import CategoryContainer from "../ui/category-container";
import classes from "./home-content.module.css";
import ItalyImg from "../../public/images/venice.jpg";
import CroatiaImg from "../../public/images/croatia.jpg";
import GolfImg from "../../public/images/golf.jpg";

function HomePageContent() {
  const placeholderText = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quos velit officiis nulla eos laudantium aspernatur provident obcaecati eaque debitis, quaerat dignissimos neque rerum magnam nemo fugit eligendi adipisci natus.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quos velit officiis nulla eos laudantium aspernatur provident obcaecati eaque debitis, quaerat dignissimos neque rerum magnam nemo fugit eligendi adipisci natus.",
  ];

  return (
    <>
      <HeroImageCarousel images={carouselImages} />
      <Row>
        <Col className={classes.main_heading}>
          <h1 className="display-4">Welcome to Selective Travel</h1>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <Container>
              <FormContainer />
            </Container>
          </Col>
          <Col xs={12} lg={8}>
            <Intro />
            <CategoryContainer
              heading="Italy"
              imgSrc={ItalyImg}
              paragraphs={placeholderText}
              buttonLink="/"
              buttonText="Explore"
              txtColSize={5}
              imgColSize={7}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <CategoryContainer
          heading="Croatia"
          imgSrc={CroatiaImg}
          paragraphs={placeholderText}
          buttonLink="/"
          buttonText="Explore"
          txtColSize={7}
          imgColSize={5}
        />

        <CategoryContainer
          heading="Golf"
          imgSrc={GolfImg}
          paragraphs={placeholderText}
          buttonLink="/"
          buttonText="Explore"
          txtColSize={7}
          imgColSize={5}
        />
      </Container>
    </>
  );
}

export default HomePageContent;
