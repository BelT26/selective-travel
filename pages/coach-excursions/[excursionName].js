import { useRouter } from "next/router";
import dropdownItems from "@/components/layout/dropdown_items";

function CoachExcursion() {
  const router = useRouter();
  const excursionName = router.query.excursionName;
  let selectedExcursion = "";
  console.log("Excursion name is " + excursionName);

  const excursions = dropdownItems[1].dropdowns;
  for (let i = 0; i < excursions.length; i++) {
    console.log(excursions[i].slug2);
    if (excursions[i].slug2 === "/" + excursionName) {
      selectedExcursion = excursions[i].title;
      console.log(selectedExcursion);
    }
  }

  return <h1>Coach Excursion to {selectedExcursion}</h1>;
}

export default CoachExcursion;
