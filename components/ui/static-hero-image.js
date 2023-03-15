import classes from "./static-hero-image.module.css";
import Container from "react-bootstrap/Container";
import Image from "next/image";

function StaticHeroImage(props) {
  return (
    <Container fluid className={classes.image_container}>
      <Image
        className={classes.hero_img}
        src={props.imgSrc}
        alt={props.alt}
        height={500}
        width={800}
      />
    </Container>
  );
}

export default StaticHeroImage;
