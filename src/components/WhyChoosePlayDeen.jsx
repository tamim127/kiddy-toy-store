import React from 'react';

const WhyChoosePlayDeen = () => {
    return (
      <div>
        <section className="my-20 px-4 sm:px-8 lg:px-16 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Why Parents Love <span className="text-indigo-600">PlayDeen</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Islamic Learning Focus",
                desc: "All our toys encourage kids to learn Arabic, dua, and moral values in fun ways.",
                icon: "📖",
              },
              {
                title: "Safe & Eco-Friendly",
                desc: "Made from non-toxic, child-safe materials, approved by international standards.",
                icon: "🌿",
              },
              {
                title: "Creative & Educational",
                desc: "Develops imagination, teamwork, and problem-solving — while staying halal-friendly.",
                icon: "🧠",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-purple-100 hover:border-indigo-400 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
};

export default WhyChoosePlayDeen;