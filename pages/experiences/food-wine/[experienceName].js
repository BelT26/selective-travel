import { useRouter } from "next/router";
import FoodWineDetail from "@/components/food-wine/food-wine-detail";
import Valpolicella from "@/public/images/valpolicella.jpg";
import WineCellar from "@/public/images/wine-cellar.jpg";
import WineFood from "@/public/images/wine-cheese.jpg";
import Vines from "@/public/images/vines.jpg";
import Vineyard from "@/public/images/vineyard.jpg";

const excursions = [
  {
    slug: "/valpolicella",
    title: "Valpolicella",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      {
        imgSrc: Valpolicella,
        alt: "a vineyard",
        id: "VALP1",
      },
      {
        imgSrc: WineFood,
        alt: "several glasses of wine with some cheese and bread",
        id: "VALP2",
      },

      { imgSrc: Vines, alt: "vines", id: "VALP3" },
      { imgSrc: Vineyard, alt: "vineyard", id: "VALP4" },
    ],
    days: ["Every Day"],
    cost: 35,
    duration: "Half day",
    time: "6 hours",
    highlights: ["Explore on foot", "	See Rialto", "Visit Doge’s Palace"],
    coachFeatures: [
      "Air-con",
      "Wifi",
      "WC",
      "On-board safety",
      "Comfort stops on request",
    ],
    tips: [
      "Comfy shoes",
      "Bring water",
      "Phone or Camera",
      "Charge phone",
      "Cash is useful",
      "Advise of late return and book early breakfast(if staying in a hotel)",
    ],
    included: ["Walking tour", "Museum ticket", "Lunch", "Boat trip"],
    excluded: ["Drinks with meal", "Tips"],
  },
  {
    slug: "/affi",
    title: "Affi",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      {
        imgSrc: Vines,
        alt: "vines",
        id: "AFFI1",
      },
      {
        imgSrc: WineFood,
        alt: "several glasses of wine with some cheese and bread",
        id: "AFFI2",
      },

      {
        imgSrc: WineCellar,
        alt: "a wine cellar with barrels of wine",
        id: "AFFI3",
      },
      { imgSrc: Vineyard, alt: "vineyard", id: "AFFI4" },
    ],
    days: ["Every Day"],
    cost: 35,
    duration: "Half day",
    time: "6 hours",
    highlights: ["Explore on foot", "	See Rialto", "Visit Doge’s Palace"],
    coachFeatures: [
      "Air-con",
      "Wifi",
      "WC",
      "On-board safety",
      "Comfort stops on request",
    ],
    tips: [
      "Comfy shoes",
      "Bring water",
      "Phone or Camera",
      "Charge phone",
      "Cash is useful",
      "Advise of late return and book early breakfast(if staying in a hotel)",
    ],
    included: ["Walking tour", "Museum ticket", "Lunch", "Boat trip"],
    excluded: ["Drinks with meal", "Tips"],
  },
];

function Experience() {
  const router = useRouter();
  const experienceName = router.query.experienceName;
  // console.log("experience name is " + experienceName);
  let selectedExperience = excursions[0];

  for (let i = 0; i < excursions.length; i++) {
    // console.log(excursions[i].slug);
    // console.log("/" + experienceName);
    if (excursions[i].slug === "/" + experienceName) {
      selectedExperience = excursions[i];
      console.log(selectedExperience.images);
    }
  }

  return (
    <>
      {" "}
      <FoodWineDetail excursion={selectedExperience} />
    </>
  );
}

export default Experience;
