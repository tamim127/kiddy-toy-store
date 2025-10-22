import { useState } from "react";
import Slider from "../components/Slider";
import ToyCard from "../components/ToyCard";
import DiscoverByAge from "../components/DiscoverByAge";
import WhyChoosePlayDeen from "../components/WhyChoosePlayDeen";
import FeaturedIslamicToys from "../components/FeaturedIslamicToys";
import ParentsTestimonials from "../components/ParentsTestimonials";

const Home = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="my-10">
      <Slider />
      <ToyCard showAll={showAll} />
      <div className="my-8 text-center">
        <button
          onClick={toggleShowAll}
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold shadow-md hover:opacity-90 transition"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
      <div>
        <DiscoverByAge />
      </div>
      <div>
        <FeaturedIslamicToys />
      </div>
      <div>
        <WhyChoosePlayDeen />
      </div>
      <div>
        <ParentsTestimonials />
      </div>
    </div>
  );
};

export default Home;
