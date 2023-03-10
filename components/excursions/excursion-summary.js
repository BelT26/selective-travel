import classes from "./excursion-summary.module.css";
import Image from "next/image";
import AnimatedButton from "../ui/animated-button";
import Container from "react-bootstrap/Container";

function ExcursionSummary({ excursion }) {
  return (
    <Container>
      <hr className={classes.excursion_divider} />
      <h3 className={classes.excursion_heading}>{excursion.title}</h3>

      <div className={classes.imgtxt_container}>
        <div className={classes.image_container}>
          <Image
            src={excursion.imgSrc}
            className={classes.excursion_image}
            height={180}
            width={270}
            alt=""
            style={{ objectFit: "cover", marginBottom: "10" }}
          />
        </div>
        <div className={classes.content_right}>
          <div className={classes.text_container}>
            {excursion.description.map((paragraph) => (
              <p className={classes.summary_text}>{paragraph}</p>
            ))}
          </div>
          <h5 className={classes.info}>Duration </h5>{" "}
          <h5 className={classes.cost}>{excursion.duration}</h5>
          <br />
          <h5 className={classes.info}> Cost </h5>
          <h5 className={classes.cost}>&euro; {excursion.cost}</h5>
          <div className={classes.button_container}>
            <AnimatedButton link="/" className={classes.button}>
              Book Now
            </AnimatedButton>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ExcursionSummary;
