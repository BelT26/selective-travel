import ThemeParkSummary from "./theme-park-summary";
import classes from "./theme-park-list.module.css";
import Gardaland from "../../public/images/gardaland.jpg";
import WaterPark from "../../public/images/water-park.jpg";

const excursions = [
  {
    title: "Gardaland",
    id: "GDL",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    imgSrc: Gardaland,
    alt: "a rollercoaster",
    cost: 50,
    duration: "Full day",
    button_link: "/experiences/theme-parks/gardaland",
  },
  {
    title: "Caneva World",
    id: "CNV",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    imgSrc: WaterPark,
    alt: "water slides",
    cost: 40,
    duration: "Full day",
    button_link: "/experiences/theme-parks/caneva",
  },
];

function ThemeParkList() {
  return (
    <div className={classes.list_container}>
      {excursions.map((excursion) => (
        <ThemeParkSummary excursion={excursion} key={excursion.id} />
      ))}
    </div>
  );
}

export default ThemeParkList;
