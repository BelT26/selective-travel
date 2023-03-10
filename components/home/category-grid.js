import CategoryBox from "../ui/category-box";
import classes from "./category-grid.module.css";
import Venice from "../../public/images/venice.jpg";
import Coach from "../../public/images/gold_coach.jpg";
import GardaLand from "../../public/images/gardaland.jpg";
import Arena from "../../public/images/arena.jpg";

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
    title: "Theme Parks",
    imgSrc: GardaLand,
    href: "/theme-parks",
    alt: "rollercoaster against a blue sky",
  },
  {
    title: "Verona Opera",
    imgSrc: Arena,
    href: "/experiences/verona-opera",
    alt: "the verona arena at night",
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
