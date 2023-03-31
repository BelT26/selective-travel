import { useState } from "react";
import classes from "./transport-detail.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Car1 from "../../public/images/standard_car.jpg";
import { IoPeopleSharp } from "react-icons/io";
import { FaSuitcaseRolling } from "react-icons/fa";
import { FaMapSigns } from "react-icons/fa";
import { FiClock } from "react-icons/fa";
import AnimatedButton from "../ui/animated-button";

function TranportDetail({ vehicle, route }) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={3} className={classes.vehicle_image}>
          <Image src={Car1} height={150} width={200} alt="car" />
          <h4>{vehicle.title}</h4>
          <p>(or similar)</p>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <h5>Service Overview</h5>{" "}
          <Row>
            <Col className={classes.icon_col}>
              <IoPeopleSharp />
            </Col>
            <Col className={classes.overview_details}>
              <h6>Passengers</h6>
              <p>
                Min: {vehicle.min_pax} Max: {vehicle.max_pax}
              </p>
            </Col>
          </Row>
          <Row>
            <Col className={classes.icon_col}>
              <FaSuitcaseRolling />
            </Col>
            <Col className={classes.overview_details}>
              <h6>Suitcase capacity</h6>
              <p>{vehicle.cases} medium suticases</p>
            </Col>
          </Row>
          <Row>
            <Col className={classes.icon_col}>
              <FaMapSigns />
            </Col>
            <Col className={classes.overview_details}>
              <h6>Distance</h6>
              <p>{route.distance}</p>
            </Col>
          </Row>
          <Row>
            <Col className={classes.icon_col}>
              <FiClock />
            </Col>
            <Col className={classes.overview_details}>
              <h6>Transfer Time</h6>
              <p>{route.time}</p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <h6>Included</h6>
          <ul>
            <li>Free amendments</li>
            <li>Professional chauffeur</li>
            <li>Instant confirmation</li>
            <li>Meet and greet</li>
            <li>Free cancellations (up to 24 hours before arrival)</li>
          </ul>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <h6>Price</h6>
          <h3>£100.00</h3>
          <AnimatedButton link="/">Book Transfer</AnimatedButton>
        </Col>
      </Row>
    </Container>
  );
}

export default TranportDetail;
