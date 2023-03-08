import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MountainCoach from "../../public/images/mountain_coach.jpg";
import GoldCoach from "../../public/images/gold_coach.jpg";
import classes from "./transfers.module.css";
import TransferGrid from "@/components/transfers/transfer-grid";
import TransferForm from "@/components/booking-fom/transfer-form";

function Transfers() {
  return (
    <>
      <div className={classes.image_container}>
        <Image
          className={classes.hero_img}
          src={MountainCoach}
          alt="a coach parked in front of some mountains"
          height={600}
          width={800}
        />
      </div>
      <Row>
        <Col className={classes.transfers_heading}>
          <h1 className="display-4">Transfers</h1>
        </Col>
      </Row>

      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <Container className={classes.inner_form_container}>
              <TransferForm />
            </Container>
          </Col>
          <Col xs={12} lg={8}>
            <TransferGrid />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Transfers;
