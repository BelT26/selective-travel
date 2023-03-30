import { useRouter } from "next/router";
import Lazise1 from "../../../public/images/lazise1.jpg";
import Lazise2 from "../../../public/images/lazise2.jpg";
import Lazise3 from "../../../public/images/lazise3.jpg";
import Bardolino1 from "../../../public/images/bardolino1.jpg";
import Bardolino2 from "../../../public/images/bardolino2.jpg";
import Bardolino3 from "../../../public/images/bardolino3.jpg";
import Bardolino4 from "../../../public/images/bardolino4.jpg";
import Bardolino5 from "../../../public/images/bardolino5.jpg";
import Bardolino6 from "../../../public/images/bardolino6.jpg";
import Garda1 from "../../../public/images/garda1.jpg";
import Garda2 from "../../../public/images/garda2.jpg";
import Garda3 from "../../../public/images/garda3.jpg";
import Malcesine1 from "../../../public/images/malcesine1.jpg";
import Malcesine2 from "../../../public/images/malcesine2.jpg";
import Malcesine3 from "../../../public/images/malcesine3.jpg";
import ResortDetail from "../../../components/resorts/resort-detail";

const resorts = [
  {
    slug: "/lazise",
    title: "Lazise",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      {
        imgSrc: Lazise1,
        alt: "Lazise",
        id: "LZS1",
      },
      {
        imgSrc: Lazise2,
        alt: "Lazise",
        id: "LZS2",
      },
      {
        imgSrc: Lazise3,
        alt: "Lazise",
        id: "LZS3",
      },
      {
        imgSrc: Bardolino4,
        alt: "Bardolino",
        id: "BDL4",
      },
      {
        imgSrc: Bardolino5,
        alt: "Bardolino",
        id: "BDL5",
      },
      {
        imgSrc: Bardolino6,
        alt: "Bardolino",
        id: "BDL6",
      },
    ],
  },
  {
    slug: "/bardolino",
    title: "Bardolino",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      {
        imgSrc: Bardolino1,
        alt: "Bardolino",
        id: "BDL1",
      },
      {
        imgSrc: Bardolino2,
        alt: "Bardolino",
        id: "BDL2",
      },
      {
        imgSrc: Bardolino3,
        alt: "Bardolino",
        id: "BDL3",
      },
      {
        imgSrc: Bardolino4,
        alt: "Bardolino",
        id: "BDL4",
      },
      {
        imgSrc: Bardolino5,
        alt: "Bardolino",
        id: "BDL5",
      },
      {
        imgSrc: Bardolino6,
        alt: "Bardolino",
        id: "BDL6",
      },
    ],
  },
  {
    slug: "/garda",
    title: "Garda",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      {
        imgSrc: Garda1,
        alt: "Garda",
        id: "GRD1",
      },
      {
        imgSrc: Garda2,
        alt: "Garda",
        id: "GRD2",
      },
      {
        imgSrc: Garda3,
        alt: "Garda",
        id: "GRD3",
      },
      {
        imgSrc: Bardolino4,
        alt: "Bardolino",
        id: "BDL4",
      },
      {
        imgSrc: Bardolino5,
        alt: "Bardolino",
        id: "BDL5",
      },
      {
        imgSrc: Bardolino6,
        alt: "Bardolino",
        id: "BDL6",
      },
    ],
  },
  {
    slug: "/malcesine",
    title: "Malcesine",
    description: [
      "Proin tristique sed augue quis sagittis. Proin pretium lectus id tellus aliquam bibendum. Nullam vitae libero at sem facilisis rutrum ut ut lectus. Sed sit amet orci sed libero tempus tincidunt ut scelerisque elit. Cras ut neque id erat aliquet iaculis. Proin a quam varius, accumsan est eget, pharetra leo. Mauris consequat condimentum mi, vel accumsan leo rutrum porta. Vestibulum quis tempor tellus. Sed nibh metus, volutpat nec justo tincidunt, pretium ornare quam.",
    ],
    images: [
      {
        imgSrc: Malcesine1,
        alt: "Malcesine",
        id: "MLC1",
      },
      {
        imgSrc: Malcesine2,
        alt: "Malcesine",
        id: "MLC2",
      },
      {
        imgSrc: Malcesine3,
        alt: "Malcesine",
        id: "MLC3",
      },
      {
        imgSrc: Bardolino4,
        alt: "Bardolino",
        id: "BDL4",
      },
      {
        imgSrc: Bardolino5,
        alt: "Bardolino",
        id: "BDL5",
      },
      {
        imgSrc: Bardolino6,
        alt: "Bardolino",
        id: "BDL6",
      },
    ],
  },
];

function ResortPage() {
  const router = useRouter();
  const resortName = router.query.resortName;
  let selectedResort = resorts[0];

  for (let i = 0; i < resorts.length; i++) {
    if (resorts[i].slug === "/" + resortName) {
      selectedResort = resorts[i];
      console.log(selectedResort.images);
    }
  }

  return <ResortDetail resort={selectedResort} />;
}

export default ResortPage;
