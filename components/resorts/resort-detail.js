import { useState, useEffect } from "react";
import classes from "./resort-detail.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

function ResortDetail({ resort }) {
  const [selectedImageSrc, setSelectedImageSrc] = useState("");
  const [selectedImageAlt, setSelectedImageAlt] = useState("");
  let smallerImages = resort.images;

  useEffect(() => {
    setSelectedImageSrc(resort.images[0].imgSrc.src);
    setSelectedImageAlt(resort.images[0].alt);
  }, [resort]);

  const handleImageSelection = (e) => {
    console.log(e.target);
    setSelectedImageSrc(e.target.src);
    setSelectedImageAlt(e.target.alt);
    smallerImages = resort.images.filter(
      (image) => image.imgSrc.src !== e.target.src
    );
  };
  return (
    <Container>
      <h1 className={classes.resort_heading}>{resort.title}</h1>
      <Row>
        <Col xs={12} lg={7}>
          <div className={classes.large_image_container}>
            <Image
              className={classes.large_image}
              src={selectedImageSrc}
              height={440}
              width={700}
              alt={selectedImageAlt}
            />
          </div>
        </Col>{" "}
        <Col xs={12} lg={5} className={classes.image_col}>
          {smallerImages.map((image) => (
            <div
              key={image.id}
              className={classes.small_img_container}
              onClick={handleImageSelection}
            >
              <Image
                className={classes.small_img}
                src={image.imgSrc}
                height={400}
                width={600}
                alt={image.alt}
              />
            </div>
          ))}
        </Col>
      </Row>

      <h3 className={classes.resort_subheading}>Resort Information</h3>
      <div>
        {resort.description.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </Container>
  );
}

export default ResortDetail;
