import { useRouter } from "next/router";
import OperaDetail from "@/components/excursions/excursion-detail";
import Opera from "@/public/images/opera.jpg";
import Venice2 from "@/public/images/venice2.jpg";
import Venice5 from "@/public/images/venice5.jpg";
import Venice4 from "@/public/images/venice4.jpg";

const excursions = [
  {
    slug: "/aida",
    title: "Aida",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      { imgSrc: Opera, alt: "verona opera", id: "OPERA1" },
      {
        imgSrc: Venice2,
        alt: "a canal in venice with colourful houses",
        id: "VCE2",
      },

      { imgSrc: Venice4, alt: "venice", id: "VCE4" },
      { imgSrc: Venice5, alt: "venice", id: "VCE5" },
    ],
    days: ["Monday - Saturday"],
    cost: 65,
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
      <OperaDetail excursion={selectedExperience} />
    </>
  );
}

export default Experience;
