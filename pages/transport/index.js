import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TransferBus from "@/public/images/transfer.jpg";
import GoldCoach from "../../public/images/gold_coach.jpg";
import classes from "./transfers.module.css";
import TransferGrid from "@/components/transfers/transfer-grid";
import TransferForm from "@/components/booking-fom/transfer-form";
import StaticHeroImage from "@/components/ui/static-hero-image";

function Transfers() {
  return (
    <>
      <StaticHeroImage
        imgSrc={GoldCoach}
        alt="a bus travelling along a country road"
      />
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
        </Row>
      </Container>
    </>
  );
}

export default Transfers;
