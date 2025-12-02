import React from "react";
import {
  FiHeart,
  FiShield,
  FiZap,
  FiGlobe,
  FiAward,
  FiSmile,
} from "react-icons/fi";

const WhyChoosePlayDeen = () => {
  const features = [
    {
      icon: <FiHeart className="w-12 h-12" />,
      title: "100% Child-Safe & Non-Toxic",
      desc: "Every toy is made with BPA-free, premium materials and passes strict international safety tests.",
      gradient: "from-pink-400 to-rose-500",
    },
    {
      icon: <FiShield className="w-12 h-53 " />,
      title: "Halal & Faith-Inspired",
      desc: "Designed to teach Quran, dua, and Islamic values while keeping playtime fun and meaningful.",
      gradient: "from-purple-400 to-pink-600",
    },
    {
      icon: <FiZap className="w-12 h-12" />,
      title: "Boosts Creativity & Learning",
      desc: "Develops imagination, problem-solving, and motor skills — the smart way to play.",
      gradient: "from-indigo-400 to-purple-600",
    },
  ];

  return (
    <section className=" py-10  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl fredoka md:text-6xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-4">
            Why Parents Choose KiddyToy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            More than just toys — we deliver joy, safety, and childhood magic
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group cursor-default"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Floating Glow Background */}
              <div
                className={`absolute -inset-3 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-700`}
              ></div>

              {/* Main Card */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 text-center shadow-2xl border border-pink-100 hover:border-purple-300 transition-all duration-500 hover:-translate-y-6 ">
                {/* Icon with Gradient Circle */}
                <div
                  className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${feature.gradient} text-white shadow-2xl mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 `}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

                {/* Subtle Decorative Element */}
                <div className="mt-8 flex justify-center gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-pink-400 rounded-full opacity-60"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl">
            <FiAward className="w-6 h-6" />
            Trusted by 50,000+ Parents in Bangladesh
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePlayDeen;
