import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import Image from "next/image";
import classes from "./hero-image-carousel.module.css";

function HeroImageCarousel({ images }) {
  return (
    <Container fluid className={classes.image_container}>
      <Carousel fade className={classes.carousel_slide}>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <Image
              className={classes.hero_img}
              src={image.imgSrc}
              alt={image.alt}
              height={500}
              width={800}
            />
            <div className={classes.caption_overlay}>
              <Carousel.Caption
                style={{
                  backgroundColor: "black",
                  width: "35svw",
                  height: "auto",
                }}
              >
                <h2>{image.title}</h2>
                <h4>{image.text}</h4>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default HeroImageCarousel;
