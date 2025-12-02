import { useState } from "react";
import Slider from "../components/Slider";
import ToyCard from "../components/ToyCard";
import DiscoverByAge from "../components/DiscoverByAge";
import WhyChoosePlayDeen from "../components/WhyChoosePlayDeen";
import FeaturedIslamicToys from "../components/FeaturedIslamicToys";
import ParentsTestimonials from "../components/ParentsTestimonials";
import WelcomSection from "./WelcomSection";
import OurFeatuers from "../components/OurFeatuers";

const Home = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

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
        <ToyCard showAll={showAll} />
      </div>

      {/* Toggle Show All Button */}
      <div className="my-6 text-center">
        <button
          onClick={toggleShowAll}
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold shadow-md hover:opacity-90 transition transform hover:scale-105"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>

      {/* Discover By Age */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="mb-10 sm:mb-16"
      >
        <DiscoverByAge />
      </div>

      {/* Featured Islamic Toys */}
      <div className="mb-10 sm:mb-16">
        <FeaturedIslamicToys />
      </div>

      {/* Why Choose PlayDeen */}
      <div data-aos="fade-right" className="mb-10 sm:mb-16">
        <WhyChoosePlayDeen />
      </div>

      {/* Parents Testimonials */}
      <div data-aos="fade-left" className="mb-10 sm:mb-16">
        <ParentsTestimonials />
      </div>

      <div>
        <OurFeatuers />
      </div>
    </div>
  );
};

export default Home;
