import Head from "next/head";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CategoryBox from "../../components/ui/category-box";
import styles from "../../styles/Home.module.css";
import Boat from "../../public/images/boat2.jpg";
import Arena from "../../public/images/arena.jpg";
import Venice from "../../public/images/venice3.jpg";
import Wine from "../../public/images/food-wine.jpg";
import Wellness from "../../public/images/wellness.jpg";
import classes from "./experiences.module.css";
import GardaLand from "../../public/images/gardaland.jpg";

const categories = [
  {
    title: "Days Out by Coach",
    imgSrc: Venice,
    href: "/experiences/coach-excursions",
    alt: "venice",
  },
  {
    title: "Boat Trips",
    imgSrc: Boat,
    href: "/experiences/boat-trips",
    alt: "a ferry on Lake Garda",
  },
  {
    title: "Food and Wine",
    imgSrc: Wine,
    href: "/experiences/food-wine",
    alt: "wine with cheese and charcuterie",
  },
  {
    title: "Verona Opera",
    imgSrc: Arena,
    href: "/experiences/verona-opera",
    alt: "the verona arena at night",
  },
  {
    title: "Sport and Wellness",
    imgSrc: Wellness,
    href: "/experiences/sport-wellness",
    alt: "a lady in an infinity pool",
  },
  {
    title: "Theme Parks",
    imgSrc: GardaLand,
    href: "/theme-parks",
    alt: "rollercoaster against a blue sky",
  },
];

function Experiences() {
  return (
    <>
      <Head>
        <title>Top Concierge - Excursions</title>
        <meta
          name="description"
          content="Top Concierge provides unrivalled excursions from the finest local service providers to a range of stunning destinations"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col className={classes.heading_col}>
          <h1 className={classes.experiences_heading}>All Experiences</h1>
        </Col>
      </Row>
      <Container style={{ padding: "80px" }}>
        <div className={classes.experiences_grid}>
          {categories.map((category) => (
            <CategoryBox
              key={category.title}
              title={category.title}
              imgSrc={category.imgSrc}
              alt={category.alt}
              href={category.href}
              height={260}
              width={275}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

export default Experiences;
