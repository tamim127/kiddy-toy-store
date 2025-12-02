import React from "react";

const Careers = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8">
          Join Our Family
        </h2>
        <p className="text-xl text-gray-700 mb-10">
          We’re always looking for passionate, creative, and fun-loving people
          to join KiddyToy!
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {["Toy Designer", "Customer Support", "Marketing Hero"].map((job) => (
            <div
              key={job}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{job}</h3>
              <p className="text-gray-600 mb-6">
                Full-time • Dhaka, Bangladesh
              </p>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
        <p className="mt-12 text-lg text-gray-600">
          Send your CV to:{" "}
          <a
            href="mailto:careers@kiddytoy.com"
            className="text-purple-600 font-bold"
          >
            careers@kiddytoy.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Careers;
