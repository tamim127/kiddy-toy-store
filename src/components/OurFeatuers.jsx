import React from "react";
import { Link } from "react-router";

const OurFeatuers = () => {
  const features = [
    {
      title: "Safe Materials",
      icon: "🛡️",
      desc: "Non-toxic, durable parts parents trust.",
    },
    {
      title: "Educational & Fun",
      icon: "📚",
      desc: "Playful lessons that build skills.",
    },
    {
      title: "Interactive Audio",
      icon: "🔊",
      desc: "Clear voice guidance for kids.",
    },
    {
      title: "Trusted by Parents",
      icon: "👨‍👩‍👧‍👦",
      desc: "Loved by families across the country.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl  py-10 ">
      <div className="mb-8 text-center">
        <h2 className="text-5xl fredoka md:text-6xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-4">
          What Makes Us Special
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Thoughtfully designed toys that combine safety, learning, and joy — so
          kids grow while they play.
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-center flex flex-col items-center"
            role="article"
            aria-label={feature.title}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-50 to-pink-50 text-4xl mb-4">
              <span aria-hidden="true">{feature.icon}</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default OurFeatuers;
