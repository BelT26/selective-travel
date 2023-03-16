import ExcursionSummary from "./excursion-summary";
import classes from "./excursion-list.module.css";
import Venice from "../../public/images/venice2.jpg";
import Dolomites1 from "../../public/images/dolomites1.jpg";
import Dolomites3 from "../../public/images/dolomites3.jpg";
import Opera from "../../public/images/opera.jpg";
import Boat from "../../public/images/boat_trip.jpg";

const excursions = [
  {
    title: "Venice",
    id: "VCE",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    imgSrc: Venice,
    alt: "a canal in venice with colourful houses",
    cost: 65,
    duration: "Full day",
    button_link: "/experiences/coach-excursions/venice",
  },
  {
    title: "Dolomites Tour (from south Lake Garda)",
    id: "DOL-S",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    imgSrc: Dolomites1,
    alt: "the Dolomites in the sunshine",
    cost: 70,
    duration: "Full day",
    button_link: "/experiences/coach-excursions/dolomites",
  },
  {
    title: "Dolomites Tour (from north Lake Garda)",
    id: "DOL-N",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    imgSrc: Dolomites3,
    alt: "the Dolomites in the sunshine",
    cost: 60,
    duration: "Full day",
    button_link: "/experiences/coach-excursions/dolomites",
  },
];

function ExcursionList() {
  return (
    <div className={classes.list_container}>
      {excursions.map((excursion) => (
        <ExcursionSummary excursion={excursion} key={excursion.id} />
      ))}
    </div>
  );
}

export default ExcursionList;
