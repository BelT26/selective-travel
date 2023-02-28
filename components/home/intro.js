import classes from "./intro.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import TravelImg from "../../public/images/travel.jpg";

function Intro() {
  return (
    <Container className={classes.intro_container}>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h1>Welcome to Selective Travel</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est
            aliquam nulla suscipit praesentium eius dolor voluptates. Mollitia
            magnam ullam nostrum, natus aperiam dolorem, minima quo odit velit
            nobis praesentium?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            neque iure asperiores labore, porro sint odio repudiandae voluptate
            tempora ea molestias sed, non voluptates quibusdam cupiditate fuga
            aliquam? Quas, fuga?
          </p>
        </Col>
        <Col>
          <Image
            src={TravelImg}
            width={300}
            height={200}
            alt="camera, binoculars, map and pipe"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
