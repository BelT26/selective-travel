import CategoryBox from "../ui/category-box";
import classes from "./category-grid.module.css";
import Venice from "../../public/images/venice.jpg";
import Coach from "../../public/images/gold_coach.jpg";
import GardaLand from "../../public/images/gardaland.jpg";
import Boat from "../../public/images/boat_trip.jpg";

const categories = [
  {
    title: "Excursions",
    imgSrc: Venice,
    href: "/coach-excursions",
    alt: "venice",
  },
  {
    title: "Transport",
    imgSrc: Coach,
    href: "/transport",
    alt: "gold coloured coach",
  },
  {
    title: "Theme Parks",
    imgSrc: GardaLand,
    href: "/theme-parks",
    alt: "rollercoaster against a blue sky",
  },
  {
    title: "Boat Trips",
    imgSrc: Boat,
    href: "/boat-trips",
    alt: "ferry boat on Lake Garda",
  },
];

function CategoryGrid() {
  return (
    <div className={classes.grid}>
      {categories.map((category) => (
        <CategoryBox
          key={category.title}
          title={category.title}
          imgSrc={category.imgSrc}
          alt={category.alt}
          href={category.href}
        />
      ))}
    </div>
  );
}

export default CategoryGrid;
