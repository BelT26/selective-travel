import { useRouter } from "next/router";
import dropdownItems from "@/components/layout/dropdown_items";

function Experience() {
  const router = useRouter();
  const experienceName = router.query.experienceName;
  let selectedExperience = "";
  console.log("Excursion name is " + experienceName);

  const experiences = dropdownItems[1].dropdowns;
  for (let i = 0; i < experiences.length; i++) {
    console.log(experiences[i].slug2);
    if (experiences[i].slug2 === "/" + experienceName) {
      selectedExperience = experiences[i].title;
      console.log(selectedExperience);
    }
  }

  return <h1>{selectedExperience}</h1>;
}

export default Experience;
