import { useRouter } from "next/router";
import dropdownItems from "../../components/layout/dropdown_items";

function ThemeParkDetail() {
  const router = useRouter();
  const parkName = router.query.parkName;
  let selectedPark = "";
  console.log("Park name is " + parkName);

  const parks = dropdownItems[3].dropdowns;
  for (let i = 0; i < parks.length; i++) {
    console.log(parks[i].slug2);
    if (parks[i].slug2 === "/" + parkName) {
      selectedPark = parks[i].title;
      console.log(selectedPark);
    }
  }

  return <h1> {selectedPark}</h1>;
}

export default ThemeParkDetail;
