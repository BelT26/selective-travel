import BoatTripSummary from "./boat-trip-summary";
import classes from "./boat-trip-list.module.css";
import Boat from "../../public/images/boat_trip.jpg";
import SanVig from "@/public/images/lake5.jpg";

const excursions = [
  {
    title: "Northern Lake",
    id: "BOAT2",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    alt: "a ferry boat crossing Lake Garda",
    imgSrc: Boat,
    cost: 30,
    duration: "Half day",
    button_link: "/experiences/boat-trips/northern-lake",
  },
  {
    title: "Southern Lake",
    id: "BOAT2",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    alt: "Punta San Vigilio Lake Garda",
    imgSrc: SanVig,
    cost: 40,
    duration: "Half day",
    button_link: "/experiences/boat-trips/southern-lake",
  },
];

function BoatTripList() {
  return (
    <div className={classes.list_container}>
      {excursions.map((excursion) => (
        <BoatTripSummary excursion={excursion} key={excursion.id} />
      ))}
    </div>
  );
}

export default BoatTripList;
