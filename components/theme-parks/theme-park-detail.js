import { useState, useEffect } from "react";
import classes from "./theme-park-detail.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { RxCheck, RxCross2 } from "react-icons/rx";
import { TiChevronRightOutline } from "react-icons/ti";
import ExcursionForm from "../booking-fom/excursion-form";

function ThemeParkDetail({ excursion }) {
  const [selectedImageSrc, setSelectedImageSrc] = useState("");
  const [selectedImageAlt, setSelectedImageAlt] = useState("");
  let smallerImages = excursion.images;

  useEffect(() => {
    setSelectedImageSrc(excursion.images[0].imgSrc.src);
    setSelectedImageAlt(excursion.images[0].alt);
  }, [excursion]);

  const handleImageSelection = (e) => {
    console.log(e.target);
    setSelectedImageSrc(e.target.src);
    setSelectedImageAlt(e.target.alt);
  };
  return (
    <Container>
      <div className={classes.excursion_detail_container}>
        <h1 className={classes.excursion_heading}>{excursion.title}</h1>
        {/* <p>{excursion.duration}</p> */}
        <Row>
          <Col xs={12} lg={8}>
            <div className={classes.time_container}>
              <FiClock />
              <span> {excursion.time}</span>
            </div>
            <p>{excursion.days}</p>
            <Row>
              <Col xs={12} lg={9}>
                <div className={classes.large_image_container}>
                  <Image
                    className={classes.large_image}
                    src={selectedImageSrc}
                    height={400}
                    width={600}
                    alt={selectedImageAlt}
                  />
                </div>
              </Col>{" "}
              <Col xs={12} lg={2}>
                <div className={classes.image_col}>
                  {smallerImages.map((image) => (
                    <div
                      className={classes.small_img_container}
                      onClick={handleImageSelection}
                    >
                      <Image
                        className={classes.small_img}
                        src={image.imgSrc}
                        height={400}
                        width={600}
                        alt={image.alt}
                        key={image.id}
                      />
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={4} className={classes.form_container}>
            <ExcursionForm name="venice" price="65" />
          </Col>
        </Row>
        <h3 className={classes.excursion_subheading}>Overview</h3>
        <div>
          {excursion.description.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
        {excursion.highlights && (
          <div>
            <h3 className={classes.excursion_subheading}>Highlights</h3>
            <ul className={classes.highlights}>
              {excursion.highlights.map((highlight) => (
                <li>
                  <TiChevronRightOutline /> {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
        {excursion.coachFeatures && (
          <div>
            <h3 className={classes.excursion_subheading}>
              Your Coach or Minibus
            </h3>
            <ul className={classes.coach_features}>
              {excursion.coachFeatures.map((feature) => (
                <li className={classes.coach_feature}>
                  <RxCheck /> {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {excursion.included && (
          <Row>
            <Col xs={12} lg={6}>
              <h3 className={classes.excursion_subheading}>Included</h3>
              <ul className={classes.included}>
                {excursion.included.map((item) => (
                  <li className={classes.included_item}>
                    <RxCheck /> {item}
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={12} lg={6}>
              <h3 className={classes.excursion_subheading}>Not Included</h3>
              <ul className={classes.excluded}>
                {excursion.excluded.map((item) => (
                  <li className={classes.excluded_item}>
                    <RxCross2 />
                    {"    "}
                    {item}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        )}
        {excursion.tips && (
          <div>
            <h3 className={classes.excursion_subheading}>Top Concierge Tips</h3>
            <ul className={classes.tips}>
              {excursion.tips.map((tip) => (
                <li className={classes.tip}>
                  <RxCheck /> {tip}
                </li>
              ))}
            </ul>{" "}
          </div>
        )}
      </div>
      <hr className={classes.small_print_divider} />
      <h6 className={classes.small_print_heading}>The small print</h6>
      <p className={classes.small_print_text}>
        <span className={classes.underline}>Cancellation Policy</span> For a
        full refund, you must cancel at least 24 hours before the experience’s
        start time. If you cancel less than 24 hours before the experience’s
        start time, the amount you paid will not be refunded. Any changes made
        less than 24 hours before the experience’s start time will not be accept
        Please note that no refund will be accepted for no shows or late
        arrivals. The tour will take place also with rain, in the event of
        exceptional high tide it might be cancelled and refund will be provided
      </p>
    </Container>
  );
}

export default ThemeParkDetail;
