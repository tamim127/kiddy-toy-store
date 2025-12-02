import React from "react";
import img1 from "../assets/Rectangle 23.png";
import img2 from "../assets/Rectangle 24.png";
import img3 from "../assets/Rectangle 25.png";
import img4 from "../assets/Rectangle 26.png";

const PhotoGallery = () => {
  return (
    <div className="text-center   ">
      <div className="py-10">
        <h1 className="text-5xl fredoka md:text-6xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-4">
          Recent Photoshoots{" "}
        </h1>
        <p className="text-xl text-gray-600 font-medium">Check Gallery</p>
      </div>
      <div className="flex justify-center ">
        <img src={img1} alt="kids image" />
        <img src={img2} alt="kids image" />
        <img src={img3} alt="kids image" />
        <img src={img4} alt="kids image" />
      </div>
    </div>
  );
};

export default PhotoGallery;
