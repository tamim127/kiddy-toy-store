import React from 'react';

const DiscoverByAge = () => {
    return (
      <div>
        <section className="my-16 px-4 sm:px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Discover Toys by Age
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { age: "1–3 Years", color: "from-pink-400 to-orange-400" },
              { age: "4–6 Years", color: "from-blue-400 to-cyan-400" },
              { age: "7–10 Years", color: "from-green-400 to-lime-400" },
              { age: "11+ Years", color: "from-purple-400 to-indigo-400" },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 text-center text-white font-semibold bg-gradient-to-r ${item.color} shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300`}
              >
                <h3 className="text-lg">{item.age}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
};

export default DiscoverByAge;