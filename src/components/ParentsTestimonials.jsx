import React from "react";
import { FiStar } from "react-icons/fi";

const ParentsTestimonials = () => {
  const reviews = [
    {
      name: "Ayesha Rahman",
      location: "Dhaka, Bangladesh",
      comment:
        "My daughter now recites Surahs on her own! The Quran Sound Book is absolutely amazing. Thank you KiddyToy!",
      rating: 5,
      avatar:
        "https://i.pinimg.com/564x/7f/1d/14/7f1d14a7d13fe416ef912e0ce60bd58d.jpg",
    },
    {
      name: "Md. Zahidul Islam",
      location: "Chattogram",
      comment:
        "Finally toys that are both fun and Islamic! I feel completely at peace letting my kids play. 100% recommended!",
      rating: 5,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYTEGI1MdCZPpJ74iS3GdDPy89uR5LzPH8GQ&s",
    },
    {
      name: "Fatima Akter",
      location: "Sylhet",
      comment:
        "Super fast delivery and beautiful packaging. My kids are obsessed and keep making dua for KiddyToy. ",
      rating: 5,
      avatar:
        "https://i.pinimg.com/736x/60/30/64/603064b82b183e8ba90da3811cc6ce9e.jpg",
    },
  ];

  return (
    <section className="py-20 lg:py-28  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl fredoka md:text-6xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Trusted by over 50,000 happy families across Bangladesh
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/30 to-purple-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

              {/* Card */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-pink-100 hover:border-purple-300 transition-all duration-500 hover:-translate-y-4">
                

                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, idx) => (
                    <FiStar
                      key={idx}
                      className="w-7 h-7 text-yellow-400 fill-current drop-shadow-md"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-lg italic leading-relaxed text-center mb-8 min-h-32">
                  "{review.comment}"
                </p>

                {/* Avatar + Info */}
                <div className="flex items-center justify-center gap-5">
                  <div className="relative">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-pink-200 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>

                  <div className="text-left">
                    <h4 className="font-bold text-gray-800 text-lg">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Counter */}
        <div className="text-center mt-16">
          <p className="text-6xl fredoka font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            50,000+
          </p>
          <p className="text-xl text-gray-600 font-medium mt-2">
            Happy families and counting
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParentsTestimonials;
