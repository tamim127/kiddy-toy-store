import React from 'react';

const DiscoverByAge = () => {
    return (
      <div>
        <section className="my-12 sm:my-16 px-3 sm:px-6 lg:px-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold fredoka text-center mb-6 sm:mb-10 text-gray-800">
            Discover Toys by Age
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { age: "1–3 Years", color: "from-pink-400 to-orange-400" },
              { age: "4–6 Years", color: "from-blue-400 to-cyan-400" },
              { age: "7–10 Years", color: "from-green-400 to-lime-400" },
              { age: "11+ Years", color: "from-purple-400 to-indigo-400" },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center text-white font-semibold bg-gradient-to-r ${item.color} shadow-md sm:shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300`}
              >
                <h3 className="text-sm sm:text-base md:text-lg">{item.age}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
};

export default DiscoverByAge;