import { useRouter } from "next/router";
import SportDetail from "../../../components/sports-wellness/sport-detail";
import Bicycle1 from "../../../public/images/bicycle1.jpg";
import Bicycle2 from "../../../public/images/bicycle2.jpg";
import Bicycle3 from "../../../public/images/bicycle3.jpg";
import Venice5 from "../../../public/images/venice5.jpg";

const excursions = [
  {
    slug: "/cycle-tours",
    title: "Cycle Tours",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      {
        imgSrc: Bicycle1,
        alt: "bicycle parked in the countryside",
        id: "CYCLE1",
      },
      {
        imgSrc: Bicycle2,
        alt: "bicycle parked by a mountain lake",
        id: "CYCLE2",
      },

      { imgSrc: Bicycle3, alt: "cyclists", id: "CYCLE3" },
      { imgSrc: Venice5, alt: "venice", id: "VCE5" },
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
      <SportDetail excursion={selectedExperience} />
    </>
  );
}

export default Experience;
