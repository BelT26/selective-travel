import { useState } from "react";
import AccommodationForm from "./accommodation-form";
import TransferForm from "./transfer-form";
import ExcursionForm from "./excursion-form";
import classes from "./booking-form.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormContainer() {
  const [selectedForm, setSelectedForm] = useState("accommodation");
  return (
    <>
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h3>Select your travel experience</h3>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <span
              className={
                selectedForm === "accommodation"
                  ? classes.active_form
                  : classes.form_selector
              }
              onClick={() => setSelectedForm("accommodation")}
            >
              Accomodation
            </span>
            <span
              className={
                selectedForm === "transfers"
                  ? classes.active_form
                  : classes.form_selector
              }
              onClick={() => setSelectedForm("transfers")}
            >
              Transfers
            </span>
            <span
              className={
                selectedForm === "excursions"
                  ? classes.active_form
                  : classes.form_selector
              }
              onClick={() => setSelectedForm("excursions")}
            >
              Excursions
            </span>
          </Col>
        </Row>
        <Container className={classes.inner_form_container}>
          {selectedForm === "accommodation" && <AccommodationForm />}
          {selectedForm === "transfers" && <TransferForm />}
          {selectedForm === "excursions" && <ExcursionForm />}
        </Container>
      </Container>
    </>
  );
}

export default FormContainer;
