import classes from "./resort-summary.module.css";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Link from "next/link";

function ResortSummary({ resort }) {
  return (
    <div className={classes.resort_summary}>
      <h2 className={classes.resort_heading}>{resort.title}</h2>

      <div className={classes.image_container}>
        <Image
          src={resort.images[0].imgSrc}
          className={classes.resort_image}
          height={300}
          width={500}
          alt={resort.images[0].alt}
          style={{ objectFit: "cover", marginBottom: "20px" }}
        />
      </div>

      <div className={classes.text_container}>
        {resort.description.map((paragraph) => (
          <p className={classes.summary_text}>{paragraph}</p>
        ))}
      </div>
      <Link
        href={`/concierge/resort-info${resort.slug}`}
        className={classes.link}
      >
        Read more...
      </Link>
    </div>
  );
}

export default ResortSummary;
