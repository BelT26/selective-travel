import { useRouter } from "next/router";
import ExcursionDetail from "../../components/excursions/excursion-detail";
import Venice1 from "../../public/images/venice.jpg";
import Venice2 from "../../public/images/venice2.jpg";
import Venice3 from "../../public/images/venice3.jpg";
import Venice4 from "../../public/images/venice4.jpg";
import Venice5 from "../../public/images/venice5.jpg";
import Dolomites1 from "../../public/images/dolomites1.jpg";
import Dolomites3 from "../../public/images/dolomites3.jpg";
import Dolomites2 from "../../public/images/dolomites2.jpg";

const excursions = [
  {
    slug: "/venice",
    title: "Venice",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      { imgSrc: Venice1, alt: "venice", id: "VCE1" },
      {
        imgSrc: Venice2,
        alt: "a canal in venice with colourful houses",
        id: "VCE2",
      },

      { imgSrc: Venice4, alt: "venice", id: "VCE4" },
      { imgSrc: Venice5, alt: "venice", id: "VCE5" },
    ],
    days: ["Mondays and Wednesdays"],
    cost: 65,
    duration: "Full day",
    time: "12 hours",
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
    slug: "/dolomites",
    title: "Dolomites Tour (from south Lake Garda)",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      { imgSrc: Dolomites1, alt: "the Dolomites in the sunshine" },
      { imgSrc: Dolomites3, alt: "the Dolomites in the sunshine" },
      { imgSrc: Dolomites2, alt: "the Dolomites in the sunshine" },
    ],
    cost: 70,
    duration: "Full day",
    time: "12 hours",
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
      <ExcursionDetail excursion={selectedExperience} />
    </>
  );
}

export default Experience;
