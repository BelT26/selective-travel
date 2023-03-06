import Form from "react-bootstrap/Form";
import AnimatedButton from "../ui/animated-button";
import classes from "./booking-form.module.css";

function AccommodationForm() {
  return (
    <Form>
      <div className={classes.booking_form}>
        <Form.Group className="mb-3" controlId="accommodation">
          <Form.Label>Accommodation Type</Form.Label>
          <Form.Select aria-label="accommodation">
            <option value="hotel">Hotel</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="numPax">
          <Form.Label>Number of Passengers</Form.Label>
          <Form.Control type="number" placeholder={2} min={1} max={20} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fromDate">
          <Form.Label>From</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="toDate">
          <Form.Label>To</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Select aria-label="country">
            <option value="croatia">Croatia</option>
            <option value="italy">Italy</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="region">
          <Form.Label>Region</Form.Label>
          <Form.Select aria-label="region">
            <option value="dalmatia">Dalmatia</option>
            <option value="istria">Istria</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="destination">
          <Form.Label>Destination</Form.Label>
          <Form.Select aria-label="destination">
            <option value="split">Split</option>
            <option value="dubrovnik">Dubrovnik</option>
          </Form.Select>
        </Form.Group>
      </div>
      <AnimatedButton link="/">Search</AnimatedButton>
    </Form>
  );
}

export default AccommodationForm;
