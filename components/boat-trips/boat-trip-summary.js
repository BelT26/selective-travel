import classes from "./boat-trip-summary.module.css";
import Image from "next/image";
import AnimatedButton from "../ui/animated-button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BoatTripSummary({ excursion }) {
  return (
    <Container>
      <hr className={classes.excursion_divider} />
      <h3 className={classes.excursion_heading}>{excursion.title}</h3>

      <div className={classes.imgtxt_container}>
        <div className={classes.image_container}>
          <Image
            src={excursion.imgSrc}
            className={classes.excursion_image}
            height={220}
            width={320}
            alt=""
            style={{ objectFit: "cover", marginBottom: "10" }}
          />
        </div>
        <div className={classes.content_right}>
          <div className={classes.text_container}>
            {excursion.description.map((paragraph) => (
              <p className={classes.summary_text}>{paragraph}</p>
            ))}
          </div>
          <Row>
            <Col xs={12} lg={8}>
              <p className={classes.info}>Duration </p>{" "}
              <p className={classes.cost}>{excursion.duration}</p>
            </Col>
            <Col xs={12} lg={4}>
              <p className={classes.info}> Cost </p>
              <p className={classes.cost}>
                <small>from</small> <b>&euro; {excursion.cost}</b>
              </p>
              <div className={classes.button_container}>
                <AnimatedButton
                  link={excursion.button_link}
                  className={classes.button}
                >
                  <h6>MORE DETAILS</h6>
                </AnimatedButton>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default BoatTripSummary;
