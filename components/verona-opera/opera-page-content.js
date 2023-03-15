import StaticHeroImage from "../ui/static-hero-image";
import Arena from "../../public/images/arena.jpg";
import classes from "./opera-page-content.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import OperaList from "./opera-list";

function OperaPageContent() {
  return (
    <>
      <StaticHeroImage
        imgSrc={Arena}
        alt="an outside view of the Verona Arena during the evening"
      />
      <Row>
        <Col className={classes.heading_col}>
          <h1 className={classes.excursions_heading}>Verona Opera</h1>
        </Col>
      </Row>
      <Container>
        <p className={classes.excursions_intro}>
          Praesent condimentum, justo sit amet egestas rhoncus, sem mi sagittis
          tortor, id hendrerit felis ex egestas nulla. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Nunc vehicula arcu sit amet sodales convallis. Aenean at
          sollicitudin dui, in rutrum turpis. Sed ac viverra odio, vel commodo
          massa. Maecenas vehicula sed diam id maximus. Aliquam volutpat augue
          vitae rhoncus efficitur. Curabitur in sem tristique nisi pulvinar
          scelerisque.
        </p>
      </Container>
      <OperaList />
    </>
  );
}

export default OperaPageContent;
