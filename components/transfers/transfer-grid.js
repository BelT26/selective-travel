import Image from "next/image";
import MountainCoach from "../../public/images/mountain_coach.jpg";
import GoldCoach from "../../public/images/gold_coach.jpg";
import Arena from "../../public/images/arena.jpg";
import Lake from "../../public/images/lake5.jpg";
import Airport from "../../public/images/airport.jpg";
import classes from "./transfer-grid.module.css";
import TransferContainer from "./transfer_container";

const transferTypes = [
  {
    title: "Airports and Stations to Lake Garda",
    imgSrc: Airport,
    alt: "a plane on an airport runway",
    description: [
      "Lorem ipsum dolor sit amet,  velit odio semper diam, ut semper velit metus in arcu.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    ],
  },
  {
    title: "Lake Garda to Airports and Stations",
    imgSrc: Lake,
    alt: "Lake Garda",
    description: [
      "Lorem ipsum dolor sit amet,. e. Quisque mollis, neque vel varius sollicitudin, velit odio semper diam, ut semper velit metus in arcu.",
    ],
  },
  {
    title: "Verona Opera",
    imgSrc: Arena,
    alt: "The Verona Arena at night",
    description: [
      "Lorem ipsum dolor sit amet. Class aptent taciti. Sed in ligula mollis, mollis diam in, imperdiet augue. Quisque mollis, neque vel varius sollicitudin, velit odio semper diam, ut semper velit metus in arcu.",
    ],
  },
  {
    title: "Private Transfers",
    imgSrc: GoldCoach,
    alt: "a gold coloured coach",
    description: [
      "Lorem ipsum dolor sit amet,  ada fames ac ante ipsum primis in faucibus.  Sed in ligula mollis, mollis diam in, imperdiet augue. Quisque mollis, neque vel varius sollicitudin, velit odio semper diam.",
    ],
  },
];

function TransferGrid() {
  transferTypes.forEach((type) => console.log(type.imgSrc));
  return (
    <div className={classes.transfer_grid}>
      {transferTypes.map((item) => (
        <TransferContainer
          key={item.alt}
          heading={item.title}
          description={item.description}
          imgSrc={item.imgSrc}
        />
      ))}
    </div>
  );
}

export default TransferGrid;
