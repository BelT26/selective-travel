import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TransportList from "../../components/transport/transport-list";
import classes from "./transfers.module.css";

function Transfers() {
  return (
    <>
      <Row>
        <Col className={classes.transfers_heading}>
          <h1 className="display-4">Transfers</h1>
        </Col>
      </Row>
      <TransportList />
    </>
  );
}

export default Transfers;
