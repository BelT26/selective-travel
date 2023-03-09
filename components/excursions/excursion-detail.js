import classes from "./excursion-detail.module.css";
import Container from "react-bootstrap/Container";

function ExcursionDetail(props) {
  return (
    <Container>
      <div className={classes.excursion_detail_container}></div>
    </Container>
  );
}

export default ExcursionDetail;
