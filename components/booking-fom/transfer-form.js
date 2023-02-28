import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TransferForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="numPax">
        <Form.Label>Number of People</Form.Label>
        <Form.Control type="number" placeholder={2} min={1} max={20} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="transferDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="departingFrom">
        <Form.Label>From</Form.Label>
        <Form.Select aria-label="departing_from">
          <option value="venice">Venice</option>
          <option value="verona">Verona</option>
        </Form.Select>{" "}
      </Form.Group>
      <Form.Group className="mb-3" controlId="goingTo">
        <Form.Label>To</Form.Label>
        <Form.Select aria-label="going_to">
          <option value="venice">Venice</option>
          <option value="verona">Verona</option>
        </Form.Select>{" "}
      </Form.Group>

      <Button variant="dark">Search</Button>
    </Form>
  );
}

export default TransferForm;
