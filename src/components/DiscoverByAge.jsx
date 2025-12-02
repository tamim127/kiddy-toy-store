import React from "react";
import { FiUser, FiUsers, FiZap, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

const DiscoverByAge = () => {
  const ages = [
    {
      range: "0-2 Years",
      title: "Tiny Explorers",
      icon: <FiUser className="w-16 h-16" />,
      gradient: "from-pink-400 via-pink-500 to-rose-600",
      glow: "shadow-pink-500/50",
      toys: "Rattles, Soft Blocks, Teethers",
    },
    {
      range: "3-5 Years",
      title: "Little Learners",
      icon: <FiUser className="w-16 h-16" />,
      gradient: "from-purple-400 via-purple-500 to-pink-600",
      glow: "shadow-purple-500/50",
      toys: "Puzzles, Blocks, Pretend Play",
    },
    {
      range: "6-9 Years",
      title: "Creative Minds",
      icon: <FiUsers className="w-16 h-16" />,
      gradient: "from-indigo-400 via-purple-500 to-pink-500",
      glow: "shadow-indigo-500/50",
      toys: "STEM Kits, Art Sets, Board Games",
    },
    {
      range: "10+ Years",
      title: "Future Innovators",
      icon: <FiZap className="w-16 h-16" />,
      gradient: "from-pink-500 via-purple-600 to-indigo-700",
      glow: "shadow-pink-600/50",
      toys: "Robotics, Science Kits, Strategy Games",
    },
  ];

  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl fredoka md:text-7xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-4">
            Discover By Age
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Grow, Play & Shine at Every Stage
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ages.map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              {/* Floating Glow Background */}
              <div
                className={`absolute -inset-4 bg-gradient-to-r ${item.gradient} rounded-3xl blur-3xl opacity-0 group-hover:opacity-60 transition-all duration-1000 ${item.glow}`}
              ></div>

              {/* Main Card */}
              <div className="relative h-full bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-6 group-hover:border-pink-300/50">
                {/* Icon with 3D Effect */}
                <div className="relative inline-block mb-6">
                  <div
                    className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${item.gradient} text-white shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    {item.icon}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-xl"></div>
                </div>

                {/* Age Range */}
                <h3 className="text-3xl font-black text-gray-800 mb-2">
                  {item.range}
                </h3>

                {/* Title */}
                <p className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  {item.title}
                </p>

                {/* Toy Examples */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {item.toys}
                </p>

                {/* Hover Button */}
                <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 mt-auto">
                  <div className="flex items-center justify-center gap-3 text-purple-600 font-bold">
                    <span className="text-lg">Explore Toys</span>
                    <Link
                      to="/all-toys"
                      className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
                    >
                      <FiArrowRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverByAge;
