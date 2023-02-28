import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ExcursionForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="numPax">
        <Form.Label>Number of People</Form.Label>
        <Form.Control type="number_pax" placeholder={2} min={1} max={20} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="excursionDate">
        <Form.Label>From</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="excursion">
        <Form.Label>Excursion</Form.Label>
        <Form.Select aria-label="excursion">
          <option value="venice">Venice</option>
          <option value="dolomites">Dolomites</option>
        </Form.Select>{" "}
      </Form.Group>

      <Button variant="dark">Search</Button>
    </Form>
  );
}

export default ExcursionForm;
