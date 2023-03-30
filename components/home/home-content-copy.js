import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import carouselImages from "./carousel-items";
import HeroImageCarousel from "../ui/hero-image-carousel";
import classes from "./home-content.module.css";
import CategoryGrid from "./category-grid";
import ContactLink from "../ui/contact_link";
import { FaConciergeBell } from "react-icons/fa";
import Venice from "../../public/images/venice.jpg";
import Coach from "../../public/images/gold_coach.jpg";
import GardaLand from "../../public/images/gardaland.jpg";
import Arena from "../../public/images/arena.jpg";
import Boats from "../../public/images/boats2.jpg";
import GoldBell from "../../public/images/goldbell.jpg";

const categories = [
  {
    title: "Experiences",
    imgSrc: Venice,
    href: "/experiences",
    alt: "venice",
  },
  {
    title: "Transport",
    imgSrc: Coach,
    href: "/transport",
    alt: "gold coloured coach",
  },
  {
    title: "Concierge",
    imgSrc: GoldBell,
    href: "/concierge/tips",
    alt: "a concierge bell",
  },
  {
    title: "Verona Opera",
    imgSrc: Arena,
    href: "/experiences/verona-opera",
    alt: "the verona arena at night",
  },
];

function HomePageContent() {
  return (
    <>
      <HeroImageCarousel images={carouselImages} />
      <Container>
        <Row className={classes.intro_row}>
          <Col xs={12} lg={6} className={classes.intro_text_col}>
            <h1 className={classes.heading}>
              Welcome to Italy and Lake Garda!
            </h1>
            <p>
              <b>Top Concierge </b>has been designed to offer assistance to
              travellers, whether they are just planning their stay or they have
              already travelled out to their destination. We believe that time
              spent away from home is precious. Our aim is to provide practical
              and reliable information, together with a range of useful
              services, thus ensuring the travellers’ carefree and memorable
              stay.
            </p>
            <p>We would be delighted to be your point of reference! </p>
          </Col>
          <Col xs={12} lg={6} className={classes.intro_img_col}>
            <Image
              className="classes.boats_img"
              src={Boats}
              alt="sailing boats moored up alongside a promenade on Lake Garda"
              height={330}
              width={550}
            />
          </Col>
        </Row>
        <Row>
          <Col className={classes.subheading_col}>
            <h2 className={classes.subheading_top}>About Top Concierge</h2>
          </Col>
        </Row>
        <div className={classes.reasons_container}>
          <div className={classes.reasons_col}>
            <h4 className={classes.reason_heading}>LAKE GARDA EXPERTS</h4>
            <p className={classes.reason_text}>
              Our unrivalled local knowledge and experience, together with our
              wide network of contacts in the Lake Garda area (and many other
              Italian regions as well) enables us to provide a variety of useful
              information and to select like-minded service providers.
            </p>
          </div>
          <div className={classes.reasons_col}>
            <h4 className={classes.reason_heading}>
              TRAVEL & TOURISM SPECIALISTS
            </h4>
            <p className={classes.reason_text}>
              With years of work experience for some of the most reputable UK
              and EU operators, in roles that ranged from overseas holiday rep
              to senior commercial and product management, we fully understand
              how to delight customers by meeting and exceeding their
              expectations.
            </p>
          </div>
          <div className={classes.reasons_col}>
            <h4 className={classes.reason_heading}>
              PROFESSIONAL AND HANDS ON
            </h4>
            <p className={classes.reason_text}>
              We would love to hear from you! No matter how large or small your
              questions may be, we will do our best to assist at all times and
              to provide competent and reliable service. Please browse our
              website as it is here to answer your questions. Or just tap the
              bell {"  "}
              to get in touch.
            </p>
            <Row>
              <Col style={{ textAlign: "center", marginTop: "0px" }}>
                <ContactLink
                  hover_color="rgb(223, 182, 79)"
                  color="whitesmoke"
                  email="info@topconcierge.com"
                  subject="website enquiry"
                  style={{ textAlign: "center" }}
                >
                  <FaConciergeBell style={{ fontSize: "30px" }} />
                </ContactLink>{" "}
              </Col>
            </Row>
          </div>
          <div className={classes.reasons_col}>
            <h4 className={classes.reason_heading}>WE ARE A ONE STOP SHOP</h4>
            <p className={classes.reason_text}>
              With years of work experience for some of the most reputable UK
              and EU operators, in roles that ranged from overseas holiday rep
              to senior commercial and product management, we fully understand
              how to delight customers by meeting and exceeding their
              expectations.
            </p>
          </div>
          <div className={classes.reasons_col}>
            <h4 className={classes.reason_heading}>YOUR BOOKINGS ARE SAFE</h4>
            <p className={classes.reason_text}>
              With years of work experience for some of the most reputable UK
              and EU operators, in roles that ranged from overseas holiday rep
              to senior commercial and product management, we fully understand
              how to delight customers by meeting and exceeding their
              expectations.
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <Row>
          <Col className={classes.subheading_col}>
            <h2 className={classes.subheading}>
              Recommended by your Concierge{" "}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className={classes.category_grid_col}>
            <CategoryGrid
              categories={categories}
              box_height={260}
              box_width={240}
            />
          </Col>
        </Row>
      </Container>

      {/* <Row>
        <Col className={classes.subheading_col}>
          <h2 className={classes.subheading}>Concierge services </h2>
        </Col>
      </Row> */}
    </>
  );
}

export default HomePageContent;
