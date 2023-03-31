import classes from "./transport-list.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Limousine from "../../public/images/limousine.jpg";
import Car from "../../public/images/car_mountain.jpg";
import Coach from "../../public/images/coach_mountain.jpg";
import AnimatedButton from "../ui/animated-button";

function TransportList() {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={4}>
          <div className={classes.vehicle_container}>
            <div className={classes.vehicle_image}>
              <Image
                src={Car}
                width={360}
                height={270}
                alt="a car in front of a mountain"
              />
            </div>
            <h2 className={classes.vehicle_heading}>Private Cars & Minivans</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              impedit nam ipsa nihil, iusto tempora eveniet modi voluptatibus
              voluptas optio eum ipsam corporis. Doloribus aliquam non earum
              numquam maxime quia.
            </p>
            <AnimatedButton link="/transport/private-cars">
              View More
            </AnimatedButton>
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className={classes.vehicle_container}>
            <div className={classes.vehicle_image}>
              <Image
                src={Limousine}
                width={360}
                height={270}
                alt="a white limousine"
              />
            </div>
            <h2 className={classes.vehicle_heading}>Luxury Transfers</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              impedit nam ipsa nihil, iusto tempora eveniet modi voluptatibus
              voluptas optio eum ipsam corporis. Doloribus aliquam non earum
              numquam maxime quia.
            </p>
            <AnimatedButton link="/transport/luxury-transfers">
              View More
            </AnimatedButton>
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className={classes.vehicle_container}>
            <div className={classes.vehicle_image}>
              <Image
                src={Coach}
                width={360}
                height={270}
                alt="a coach parked in the mountains"
              />
            </div>
            <h2 className={classes.vehicle_heading}>Minibuses & Coaches</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              impedit nam ipsa nihil, iusto tempora eveniet modi voluptatibus
              voluptas optio eum ipsam corporis. Doloribus aliquam non earum
              numquam maxime quia.
            </p>
            <AnimatedButton link="/transport/coaches">View More</AnimatedButton>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TransportList;
