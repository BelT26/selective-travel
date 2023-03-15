import SportSummary from "./sport-summary";
import classes from "./sport-list.module.css";
import Bicycle from "@/public/images/bicycle1.jpg";
import Pool from "@/public/images/water.jpg";

const excursions = [
  {
    title: "Cycle Tours",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    imgSrc: Bicycle,
    alt: "a bicycle resting against a sign post in the country",
    cost: 65,
    duration: "Full day",
    button_link: "/experiences/sports-wellness/cycling",
  },
  {
    title: "Swimming Pools",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    imgSrc: Pool,
    alt: "light blue body of water",
    cost: 20,
    duration: "Full day",
    button_link: "/experiences/sports-wellness/swimming",
  },
];

function SportList() {
  return (
    <div className={classes.list_container}>
      {excursions.map((excursion) => (
        <SportSummary excursion={excursion} />
      ))}
    </div>
  );
}

export default SportList;
