import Slider from "../components/Slider";
import ToyCard from "../components/ToyCard";
import DiscoverByAge from "../components/DiscoverByAge";
import WhyChoosePlayDeen from "../components/WhyChoosePlayDeen";
import FeaturedIslamicToys from "../components/FeaturedIslamicToys";
import ParentsTestimonials from "../components/ParentsTestimonials";
import WelcomSection from "./WelcomSection";
import OurFeatuers from "../components/OurFeatuers";
import PhotoGallery from "../components/PhotoGallery";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="my-6 sm:my-10 px-4 sm:px-6 lg:px-0">
      <title>KiddyToy || Home</title>

      <div>
        <WelcomSection />
      </div>

      {/* Slider Section */}
      <div className="mb-8 sm:mb-12">
        <Slider />
      </div>

      {/* Toy Cards Section */}
      <div className="mb-6 sm:mb-10">
        <ToyCard />
      </div>

      {/* Discover By Age */}
      <div data-aos="fade-up" className="mb-6 sm:mb-10">
        <DiscoverByAge />
      </div>

      {/* Featured Islamic Toys */}
      <div className="mb-6 sm:mb-10">
        <FeaturedIslamicToys />
      </div>

      {/* Why Choose PlayDeen */}
      <div data-aos="fade-right" className="mb-6 sm:mb-10">
        <WhyChoosePlayDeen />
      </div>

      {/* Parents Testimonials */}
      <div data-aos="fade-left" className="mb-6 sm:mb-10">
        <ParentsTestimonials />
      </div>

      {/* Photo section */}
      <div className="mb-6 sm:mb-10">
        <PhotoGallery />
      </div>
      
      {/* service section */}
      <div className="mb-6 sm:mb-10">
        <Services />
      </div>

      {/* our features section */}
      <div className="mb-6 sm:mb-10">
        <OurFeatuers />
      </div>
    </div>
  );
};

export default Home;
