import React from "react";

const FeaturedIslamicToys = () => {
  return (
    <div>
      <section className="py-20 px-6 sm:px-12  rounded-xl bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <h2 className="text-4xl fredoka font-extrabold text-center text-gray-800 mb-12">
          🌙 Featured Islamic Toys
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "Quran Sound Toy",
              desc: "Learn Surahs with interactive sounds & lights.",
              img: "https://i.postimg.cc/FzcXn5Vr/download-13.jpg",
            },
            {
              name: "Arabic Alphabet Board",
              desc: "Fun way for kids to learn Arabic letters and pronunciation.",
              img: "https://i.postimg.cc/QtTzjg9M/download-14.jpg",
            },
            {
              name: "Dua Plush Doll",
              desc: "Cute doll that teaches basic Islamic duas in soft voice.",
              img: "https://i.postimg.cc/Dwppsp1S/download-15.jpg",
            },
          ].map((toy, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <img
                src={toy.img}
                alt={toy.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {toy.name}
                </h3>
                <p className="text-gray-600">{toy.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedIslamicToys;
