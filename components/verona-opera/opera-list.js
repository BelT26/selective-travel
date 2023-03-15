import OperaSummary from "./opera_summary";
import classes from "./opera-list.module.css";
import Opera from "../../public/images/opera.jpg";

const excursions = [
  {
    title: "Aida",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    imgSrc: Opera,
    alt: "people inside the Verona Arena at night waiting for the opera to begin",
    cost: 60,
    duration: "Half day",
    button_link: "/experiences/verona-opera/aida",
  },
];

function OperaList() {
  return (
    <div className={classes.list_container}>
      {excursions.map((excursion) => (
        <OperaSummary excursion={excursion} />
      ))}
    </div>
  );
}

export default OperaList;
