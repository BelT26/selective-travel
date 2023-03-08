import Image from "next/image";
import classes from "./transfer_container.module.css";
import AnimatedButton from "../ui/animated-button.js";

function TransferContainer(props) {
  return (
    <div className={classes.category_container}>
      <h3 className={classes.category_heading}>{props.heading}</h3>

      <div className={classes.imgtxt_container}>
        <div className={classes.image_container}>
          <Image
            src={props.imgSrc}
            className={classes.category_image}
            height={180}
            width={270}
            alt=""
            style={{ objectFit: "cover", marginBottom: "10" }}
          />
        </div>
        <div className={classes.text_container}>
          {props.description.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
        {/* <div className={classes.button_container}>
          <AnimatedButton link="/">Learn More</AnimatedButton>
        </div> */}
      </div>
    </div>
  );
}

export default TransferContainer;
