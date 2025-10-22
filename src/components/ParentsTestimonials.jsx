import React from 'react';

const ParentsTestimonials = () => {
    return (
      <div>
        <section className="py-20 bg-gradient-to-tr from-indigo-100 via-white to-purple-100 text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-800">
            💬 What Parents Say
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ayesha Rahman",
                comment:
                  "My kids love the Quran Sound Toy! It’s so engaging and teaches Surahs beautifully.",
                img: "https://i.postimg.cc/8zx3bp6R/mom1.jpg",
              },
              {
                name: "Fatima Chowdhury",
                comment:
                  "Finally toys that are fun AND Islamic! I feel happy letting my kids play freely.",
                img: "https://i.postimg.cc/G3RZL7tp/mom2.jpg",
              },
              {
                name: "Zahidul Islam",
                comment:
                  "Great quality and safe materials. My son learned Arabic letters in just a week!",
                img: "https://i.postimg.cc/1tspLKYX/dad1.jpg",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-indigo-300"
                />
                <p className="text-gray-600 italic mb-3">“{review.comment}”</p>
                <h4 className="font-semibold text-gray-800">{review.name}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
};

export default ParentsTestimonials;