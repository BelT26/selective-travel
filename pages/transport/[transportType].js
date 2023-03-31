import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Car from "../../public/images/car_mountain.jpg";
import Limousine from "../../public/images/limousine.jpg";
import Coach from "../../public/images/coach_mountain.jpg";
import classes from "./transfers.module.css";
import { IoPeopleSharp } from "react-icons/io";
import { FaSuitcaseRolling } from "react-icons/fa";

const vehicles = [
  {
    slug: "/private-cars",
    title: "Private Cars and Minivans",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      {
        imgSrc: Car,
        alt: "a car on a road in front of a hill",
        id: "CAR1",
      },
    ],
    categories: [
      {
        name: "Private Sedan Cars",
        min_pax: 1,
        max_pax: 3,
        cases: 2,
      },
      {
        name: "Private Premium Cars",
        min_pax: 1,
        max_pax: 3,
        cases: 2,
      },
      {
        name: "Private Minivans",
        min_pax: 4,
        max_pax: 8,
        cases: 8,
      },
      {
        name: "Private Premium Minivans",
        min_pax: 1,
        max_pax: 3,
        cases: 2,
      },
    ],
  },
  {
    slug: "/luxury-transfers",
    title: "Luxury Transfers",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      {
        imgSrc: Limousine,
        alt: "a car on a road in front of a hill",
        id: "CAR1",
      },
    ],
    categories: [
      {
        name: "Weddings",
        id: "wed1",
      },
      {
        name: "Special Occasions",
        id: "spo1",
      },
      {
        name: "Business",
        id: "bsn1",
      },
    ],
  },
  {
    slug: "/coaches",
    title: "Minibuses and Coaches",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      {
        imgSrc: Coach,
        alt: "a car on a road in front of a hill",
        id: "CAR1",
      },
    ],
    categories: [
      {
        name: "Minibuses (up to 16 Pax)",
        min_pax: 8,
        max_pax: 16,
        cases: 16,
        id: "coach1",
      },
      {
        name: "Coaches",
        min_pax: 15,
        max_pax: 26,
        cases: 26,
        id: "coach2",
      },
    ],
  },
];

function TransportType() {
  const router = useRouter();
  const vehicleType = router.query.transportType;
  // console.log("experience name is " + experienceName);
  let selectedVehicleType = vehicles[0];

  for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].slug === "/" + vehicleType) {
      selectedVehicleType = vehicles[i];
    }
  }

  return (
    <Container>
      <Row>
        <Col className={classes.transfers_heading}>
          <h1 className="display-4">{selectedVehicleType.title}</h1>
        </Col>
      </Row>
      <Row className={classes.transport_info_row}>
        <Col xs={12} lg={5}>
          <Image
            height={300}
            width={400}
            src={selectedVehicleType.images[0].imgSrc}
            alt={selectedVehicleType.images[0].alt}
          />
        </Col>
        <Col xs={12} lg={7}>
          {selectedVehicleType.categories.map((category) => (
            <Row>
              <h3 className={classes.transfer_category}>{category.name}</h3>

              <hr />
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default TransportType;
