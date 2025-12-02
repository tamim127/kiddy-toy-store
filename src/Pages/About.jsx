import React from "react";
import { Link } from "react-router";
import {
  FiHeart,
  FiTruck,
  FiShield,
  FiStar,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";

const About = () => {
  return (
    <div className="pt-8 lg:pt-10 pb-10">
      {/* Hero Section */}
      <section className="relative rounded-2xl min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1564470939458-1289338e2d85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFRveSUyMFN0b3JlfGVufDB8fDB8fHww"
            alt="Happy children playing with colorful toys"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/50 to-pink-900/30"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl fredoka md:text-7xl lg:text-8xl font-black text-white mb-6 drop-shadow-2xl">
            KiddyToy Store
          </h1>
          <p className="text-2xl md:text-4xl font-medium text-pink-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            Where Joy Meets Imagination – Safe, Colorful & Fun Toys for Every
            Child
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center mt-12">
            <div className="bg-white/20 backdrop-blur-lg px-10 py-7 rounded-3xl border border-pink-300/40 shadow-2xl">
              <p className="text-5xl font-bold text-pink-300">50,000+</p>
              <p className="text-xl text-white mt-2">Happy Families</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg px-10 py-7 rounded-3xl border border-purple-300/40 shadow-2xl">
              <p className="text-5xl font-bold text-yellow-300 flex items-center justify-center gap-2">
                4.9 <FiStar className="text-4xl" />
              </p>
              <p className="text-xl text-white mt-2">Parent Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl fredoka md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We believe children learn best through play. That’s why every toy
              in our store is carefully selected to be 100% halal, educational,
              and designed to strengthen love for Allah, the Quran, and the
              Prophet ﷺ.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Every toy is hand-picked with love, tested for safety, and
              designed to spark joy, learning, and endless imagination.
            </p>

            <div className="space-y-4">
              {[
                "100% Halal Materials",
                "Educational & Faith-Based",
                "Islamic Design & Values",
                "Approved by Scholars & Parents",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-purple-700"
                >
                  <FiCheckCircle className="w-7 h-7 text-pink-500 flex-shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1723532417179-2ecd23fc1551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG11c2xpbSUyMHRveXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Children playing happily"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl fredoka font-bold text-gray-800 mb-12">
            Why Choose KiddyToy?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: FiTruck,
                title: "Fast Delivery",
                desc: "Quick & reliable shipping to your home",
              },
              {
                icon: FiShield,
                title: "Safe Materials",
                desc: "100% Halal and non-toxic materials",
              },
              {
                icon: FiUsers,
                title: "Trusted by Parents",
                desc: "Loved by thousands of happy families",
              },
              {
                icon: FiStar,
                title: "Top Rated",
                desc: "High quality toys with 5-star rating",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-left"
              >
                <feature.icon className="w-10 h-10 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 rounded-2xl  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl fredoka md:text-6xl font-bold text-white mb-8">
            Ready to Make Childhood Magical?
          </h2>
          <Link
            to="/all-toys"
            className="inline-block px-14 py-6 bg-white text-pink-600 font-black text-2xl rounded-full hover:bg-gray-100 transform hover:scale-110 transition-all shadow-2xl"
          >
            Shop Toys Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
