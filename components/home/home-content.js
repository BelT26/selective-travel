import carouselImages from "./carousel-items";
import HeroImageCarousel from "../ui/hero-image-carousel";
import Intro from "./intro";

function HomePageContent() {
  return (
    <>
      <HeroImageCarousel images={carouselImages} />
      <Intro />
    </>
  );
}

export default HomePageContent;
