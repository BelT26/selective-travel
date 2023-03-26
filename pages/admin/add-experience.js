import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import classes from "./add-experience.module.css";
import AddExperienceForm from "../../components/admin/add-experience-form";

function AddExperience() {
  return (
    <>
      <Container>
        <Row>
          <Col className={classes.heading_col}>
            <h1 className={classes.form_heading}>Add Experience</h1>
          </Col>
        </Row>

        <Row>
          <Col className={classes.form_col}>
            <AddExperienceForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddExperience;
