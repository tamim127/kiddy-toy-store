import React from "react";
import { Link, useLoaderData } from "react-router";

const ToyCard = () => {
  const toys = useLoaderData();
  return (
    <>
      <h1>Toys List</h1>
      <div className="my-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 sm:px-6 lg:px-0">
        {toys.map((toy) => (
          <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{toy.toyName}</h2>

              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-bold mr-2">
                  {toy.rating}
                </span>
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(toy.rating)
                          ? "fill-current text-yellow-500"
                          : "text-gray-300"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <polygon points="10,1 12,7 18,7 13,11 15,17 10,13 5,17 7,11 2,7 8,7" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-2">
                Available: {toy.availableQuantity}
              </p>
              <p className="text-green-600 font-bold text-lg mb-4">
                ${toy.price}
              </p>

              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToyCard;
