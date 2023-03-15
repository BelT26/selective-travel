import FoodWineSummary from "./food-wine-summary";
import classes from "./food-wine-list.module.css";
import Valpolicella from "@/public/images/valpolicella.jpg";
import WineLake from "@/public/images/wine-lake.jpg";
import WineCellar from "@/public/images/wine-cellar.jpg";
import WineFood from "@/public/images/wine-food.jpg";
import Vines from "@/public/images/vines.jpg";
import Vineyard from "@/public/images/vineyard.jpg";

const excursions = [
  {
    title: "Valpolicella",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    imgSrc: Valpolicella,
    alt: "a vineyard in Valpolicella",
    cost: 65,
    duration: "Full day",
    button_link: "/experiences/food-wine/valpolicella",
  },
  {
    title: "Affi",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    imgSrc: Vines,
    alt: "vine trees with grapes",
    cost: 70,
    duration: "Full day",
    button_link: "/experiences/food-wine/affi",
  },
];

function FoodWineList() {
  return (
    <div className={classes.list_container}>
      {excursions.map((excursion) => (
        <FoodWineSummary excursion={excursion} />
      ))}
    </div>
  );
}

export default FoodWineList;
