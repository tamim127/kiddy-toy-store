import { Link, useLoaderData } from "react-router";

const ToyCard = () => {
  const toys = useLoaderData();
  const displayToys = toys.slice(0, 8);

  return (
    <div className=" lg:px-0">
      {/* Section Header */}
      <div className="text-center fredoka mt-20  space-y-3 sm:space-y-5">
        <h2 className="text-5xl fredoka md:text-6xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-4">
          Popular Muslim Toys & Educational Items for Little Believers
        </h2>
        <p className="text-lg fredoka sm:text-xl text-gray-600">
          Fun, Faith & Learning — All in One Place!
        </p>
      </div>

      {/* Toys Grid */}
      <div
        data-aos="zoom-in-up"
        className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "
      >
        {displayToys.map((toy) => (
          <div
            key={toy.toyId}
            className="relative group rounded-2xl transition-all duration-500 hover:scale-[1.03]"
          >
            {/* Gradient outline */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0"></div>

            {/* Inner card */}
            <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
              {/* Toy Image */}
              <div className="relative h-52 sm:h-56 md:h-60 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={toy.mainImage}
                  alt={toy.toyName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full shadow-md flex items-center text-sm sm:text-base skeleton">
                  <span>{toy.rating}</span>
                  <svg
                    className="w-4 h-4 ml-1 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <polygon points="10,1 12,7 18,7 13,11 15,17 10,13 5,17 7,11 2,7 8,7" />
                  </svg>
                </div>
              </div>

              {/* Toy Info */}
              <div className="p-4 sm:p-5 flex flex-col justify-between h-56">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-1 text-gray-900">
                    {toy.toyName}
                  </h2>
                  <p className="text-gray-700 mb-1 text-sm sm:text-base">
                    Available:{" "}
                    <span className="font-semibold ">
                      {toy.availableQuantity}
                    </span>
                  </p>
                  <p className="text-green-600 font-bold text-base sm:text-lg mb-2">
                    ${toy.price}
                  </p>
                </div>

                {/* View More Button */}
                <Link
                  to={`/home/${toy.toyId}`}
                  className="w-full text-center fredoka bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 rounded-xl shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-300 text-sm sm:text-base"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyCard;
