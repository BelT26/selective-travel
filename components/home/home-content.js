import carouselImages from "./carousel-items";
import HeroImageCarousel from "../ui/hero-image-carousel";

function HomePageContent() {
  return (
    <>
      <HeroImageCarousel images={carouselImages} />
    </>
  );
}

export default HomePageContent;
