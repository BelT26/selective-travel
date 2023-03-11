import { useState } from "react";
import classes from "./excursion-detail.module.css";
import Container from "react-bootstrap/Container";
import Image from "next/image";

function ExcursionDetail(props) {
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const smallerImages = props.images.filter((image) => image !== selectedImage);
  return (
    <Container>
      <div className={classes.excursion_detail_container}>
        <h1>{props.title}</h1>
        <p>{props.duration}</p>
        <p>{props.days}</p>
        <div className={classes.large_image_container}>
          <Image
            src={selectedImage.imgSrc}
            height={500}
            width={600}
            alt={selectedImage.alt}
          />
        </div>
        <div className={classes.image_col}>
          {smallerImages.map((image) => (
            <Image
              src={image.src}
              height={150}
              width={180}
              alt={image.alt}
              key={image.src}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ExcursionDetail;
