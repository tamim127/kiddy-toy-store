import { Link, useLoaderData } from "react-router";

const ToyCard = ({ showAll }) => {
  const toys = useLoaderData();
  const displayToys = showAll ? toys : toys.slice(0, 8);

  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-0">
      {displayToys.map((toy) => (
        <div
          key={toy.toyId}
          className="relative group rounded-2xl transition-all duration-500 hover:scale-[1.03]"
        >
          {/* Gradient outline */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0"></div>

          {/* Inner content with border */}
          <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:border-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
            {/* Toy Image */}
            <div className="relative h-60 w-full overflow-hidden rounded-t-2xl">
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Rating Badge */}
              <div className="absolute top-3 right-3 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full shadow-md flex items-center">
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
            <div className="p-5 flex flex-col justify-between h-56">
              <div>
                <h2 className="text-lg font-bold mb-2 text-gray-900">
                  {toy.toyName}
                </h2>
                <p className="text-gray-700 mb-1">
                  Available:{" "}
                  <span className="font-semibold">{toy.availableQuantity}</span>
                </p>
                <p className="text-green-600 font-bold text-lg mb-3">
                  ${toy.price}
                </p>
              </div>

              {/* View More Button */}
              <Link
                to={`/home/${toy.toyId}`}
                className="w-full text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 rounded-xl shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-300"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToyCard;
