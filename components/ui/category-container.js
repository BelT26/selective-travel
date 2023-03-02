import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import classes from "./category-container.module.css";
import AnimatedButton from "./animated-button.js";

function CategoryContainer(props) {
  return (
    <div className={classes.category_container}>
      <h2 className={classes.category_heading}>{props.heading}</h2>

      <div className={classes.imgtxt_container}>
        <div className={classes.image_container}>
          <Image
            src={props.imgSrc}
            className={classes.category_image}
            height={240}
            width={340}
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={classes.text_container}>
          {props.paragraphs.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
      </div>
      <AnimatedButton link="/">{props.buttonText}</AnimatedButton>
    </div>
  );
}

export default CategoryContainer;
