import Image from "next/image";
import Link from "next/link";
import classes from "./category-box.module.css";

function CategoryBox(props) {
  return (
    <div
      className={classes.box}
      style={{ width: props.width, height: props.height }}
    >
      <Link
        href={props.href}
        style={{ textDecoration: "none", color: "whitesmoke" }}
      >
        <Image
          src={props.imgSrc}
          alt={props.alt}
          height={props.height}
          width={props.width}
          className={classes.category_img}
        />
        <h3 className={classes.box_title}>{props.title}</h3>
      </Link>
    </div>
  );
}

export default CategoryBox;
