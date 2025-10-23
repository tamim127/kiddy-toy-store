import React from "react";

const ParentsTestimonials = () => {
  const reviews = [
    {
      name: "Ayesha Rahman",
      comment:
        "My kids love the Quran Sound Toy! It’s so engaging and teaches Surahs beautifully.",
      img: "https://i.postimg.cc/kXq1B1jg/images-2.png",
    },
    {
      name: "Fatima Chowdhury",
      comment:
        "Finally toys that are fun AND Islamic! I feel happy letting my kids play freely.",
      img: "https://i.postimg.cc/kXq1B1jg/images-2.png",
    },
    {
      name: "Zahidul Islam",
      comment:
        "Great quality and safe materials. My son learned Arabic letters in just a week!",
      img: "https://i.postimg.cc/mrt6TPmN/download-1.png",
    },
  ];

  return (
    <section className="py-16 sm:py-20 rounded-xl bg-gradient-to-tr from-indigo-100 via-white to-purple-100 text-center px-4 sm:px-6 lg:px-0">
      <h2 className="text-3xl sm:text-4xl fredoka font-extrabold mb-10 sm:mb-12 text-gray-800">
        💬 What Parents Say
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={review.img}
              alt={review.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 border-4 border-indigo-300 object-cover"
            />
            <p className="text-gray-600 italic mb-3 text-sm sm:text-base">
              “{review.comment}”
            </p>
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
              {review.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParentsTestimonials;
