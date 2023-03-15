import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import AnimatedButton from "../ui/animated-button";
import classes from "./booking-form.module.css";

function ExcursionForm(props) {
  const [pickUpPoint, setPickUpPoint] = useState("");
  const [excursionDate, setExcursionDate] = useState("");
  const [numAdults, setNumAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);

  const excursionName = props.name;

  const handlePickUpPointSelection = (e) => {
    setDepartureLocation(e.target.value);
  };

  const handleExcursionDateSelection = (e) => {
    setExcursionDate(e.target.value);
  };

  const handleNumAdults = (e) => {
    setNumAdults(e.target.value);
  };

  const handleNumChildren = (e) => {
    setNumChildren(e.target.value);
  };

  const handleSubmit = () => {
    const excursionRequest = {
      excursionName,
      excursionDate,
      pickUpPoint,
      numChildren,
      numAdults,
    };
    console.log(excursionRequest);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <p>Adult price: &euro; {props.price}</p>
      <Form.Group
        className="mb-3"
        controlId="excursionDate"
        onChange={handleExcursionDateSelection}
      >
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="numAdults">
        <Form.Label>Number of Adults</Form.Label>
        <Form.Control
          type="number"
          placeholder={2}
          min={1}
          max={20}
          onChange={handleNumAdults}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="numChildren">
        <Form.Label>Number of Children (2-5)</Form.Label>
        <Form.Control
          type="number"
          placeholder={0}
          min={0}
          max={20}
          onChange={handleNumChildren}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="pickUp">
        <Form.Label>Pick-up point</Form.Label>
        <Form.Select
          aria-label="lake-depeparture"
          onChange={handlePickUpPointSelection}
        >
          <option value="peschiera">Peschiera del Garda</option>
          <option value="lazise">Lazise</option>
          <option value="bardolino">Bardolino</option>
          <option value="garda">Garda</option>
          <option value="costermano">Costermano</option>
          <option value="malcesine">Malcesine</option>
          <option value="torbole">Torbole</option>
          <option value="riva">Riva del Garda</option>
          <option value="limone">Limone</option>
          <option value="caprino">Caprino</option>
        </Form.Select>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="excursion">
        <Form.Label>Excursion</Form.Label>
        <Form.Select aria-label="excursion">
          <option value={props.excursion_name}>{props.excursion_name}</option>
          
        </Form.Select>{" "}
      </Form.Group> */}

      <AnimatedButton link="/">BOOK NOW</AnimatedButton>
    </Form>
  );
}

export default ExcursionForm;
