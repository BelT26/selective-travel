import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import AnimatedButton from "../ui/animated-button";

function TransferForm() {
  const [transferType, setTransferType] = useState("toGarda");
  const [addReturn, setAddReturn] = useState(false);
  const [arrivalLocation, setArrivalLocation] = useState("");
  const [departureLocation, setDepartureLocation] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [numPax, setNumPax] = useState(0);

  const handleTransferSelection = (e) => {
    setTransferType(e.target.value);
  };

  const handleArrivalSelection = (e) => {
    setArrivalLocation(e.target.value);
  };

  const handleDepartureSelection = (e) => {
    setDepartureLocation(e.target.value);
  };

  const handleDepartureTimeSelection = (e) => {
    setDepartureTime(e.target.value);
  };

  const handleDepartureDate = (e) => {
    setDepartureDate(e.target.value);
  };

  const handleNumPaxSelection = (e) => {
    setNumPax(e.target.value);
  };

  const handleSubmit = () => {
    const transferRequest = {
      transferType,
      addReturn,
      arrivalLocation,
      departureLocation,
      departureDate,
      departureTime,
      numPax,
    };
    console.log(transferRequest);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="numPax">
        <Form.Label>Number of People</Form.Label>
        <Form.Control
          type="number"
          placeholder={2}
          min={1}
          max={20}
          onChange={handleNumPaxSelection}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="transferType">
        <Form.Label>Transfer Type</Form.Label>
        <Form.Select
          aria-label="transfer-type"
          value={transferType}
          onChange={handleTransferSelection}
        >
          <option value="toGarda">Airport / Station to Lake Garda</option>
          <option value="fromGarda">Lake Garda to Airport / Station</option>
          <option value="privateCoach">Private Coach</option>
          <option valut="opera">Verona Opera</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="transferDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" onChange={handleDepartureDate} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="transferTime">
        <Form.Label>Time</Form.Label>
        <Form.Control type="time" onChange={handleDepartureTimeSelection} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="departingFrom">
        <Form.Label>From</Form.Label>
        {transferType === "toGarda" && (
          <Form.Select
            aria-label="departing_from"
            onChange={handleDepartureSelection}
          >
            <option value="VRN">Verona Airport</option>
            <option value="BGY">Bergamo Airport</option>
            <option value="VCE">Venice Airport</option>
            <option value="Mestre">Mestre Train Station</option>
            <option value="Piazzale_Roma">Venice - Piazzale Roma</option>
          </Form.Select>
        )}
        {transferType === "fromGarda" && (
          <Form.Select
            aria-label="lake-depeparture"
            onChange={handleDepartureSelection}
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
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="destination">
        <Form.Label>To</Form.Label>
        {transferType === "toGarda" && (
          <Form.Select
            aria-label="garda-arrival-point"
            onChange={handleArrivalSelection}
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
        )}
        {transferType === "fromGarda" && (
          <Form.Select
            aria-label="airport-arrival-point"
            onChange={handleArrivalSelection}
          >
            <option value="VRN">Verona Airport</option>
            <option value="BGY">Bergamo Airport</option>
            <option value="VCE">Venice Airport</option>
            <option value="Mestre">Mestre Train Station</option>
            <option value="Piazzale_Roma">Venice - Piazzale Roma</option>
          </Form.Select>
        )}
      </Form.Group>

      <Button
        variant="light"
        onClick={() => setAddReturn(true)}
        style={{ marginTop: "20px" }}
      >
        Add Return
      </Button>
      <AnimatedButton link="/">Search</AnimatedButton>
    </Form>
  );
}

export default TransferForm;
