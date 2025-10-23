import React from 'react';

const WelcomSection = () => {
    return (
      <div className="relative fredoka bg-gradient-to-br from-purple-700 via-pink-600 to-indigo-500 rounded-2xl px-2 py-4 sm:px-8 sm:py-14 text-center mb-10 sm:mb-12 shadow-lg overflow-hidden">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            KiddyToy
          </span>
        </h1>

        <p className="text-base sm:text-lg text-white/90 mb-4 max-w-md mx-auto">
          Explore Fun & Educational Muslim Toys for Little Believers!
        </p>

        {/* Decorative Circles */}
        <div className="absolute -top-8 -left-8 w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full animate-pulse"></div>
      </div>
    );
};

export default WelcomSection;