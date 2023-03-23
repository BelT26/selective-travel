import { useRouter } from "next/router";
import Boat1 from "../../../public/images/boat_trip.jpg";
import Limone1 from "../../../public/images/limone.jpg";
import Limone2 from "../../../public/images/limone2.jpg";
import Sirmione from "../../../public/images/sirmione.jpg";
import SanVigilio from "../../../public/images/lake5.jpg";
import Boat3 from "../../../public/images/boat3.jpg";
import Sirmione2 from "../../../public/images/lake4.jpg";
import BoatTripDetail from "../../../components/boat-trips/boat-trip-detail";

const excursions = [
  {
    slug: "/northern-garda",
    title: "Northern Lake Garda",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      {
        imgSrc: Boat1,
        alt: "a ferry boat on Lake Garda",
        id: "BTNR1",
      },
      {
        imgSrc: Limone1,
        alt: "Limone on Lake Garda",
        id: "BTNR2",
      },

      { imgSrc: Limone2, alt: "Limone on Lake Garda", id: "BTNR3" },
      { imgSrc: Boat3, alt: "a ferry boat on Lake Garda", id: "BTNR4" },
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
    slug: "/southern-garda",
    title: "Southern Lake Garda",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      {
        imgSrc: SanVigilio,
        alt: "Punta San Vigilio",
        id: "BTST1",
      },
      {
        imgSrc: Sirmione,
        alt: "Sirmione",
        id: "BTST2",
      },

      {
        imgSrc: Sirmione2,
        alt: "Sirmione",
        id: "BTST3",
      },
      { imgSrc: Boat3, alt: "a ferry boat on Lake Garda", id: "BTNR4" },
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
      <BoatTripDetail excursion={selectedExperience} />
    </>
  );
}

export default Experience;
