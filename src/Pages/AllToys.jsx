import React, { useState, useMemo } from "react";
import { Link, useLoaderData } from "react-router";

const AllToys = () => {
  const toysData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Unique Categories
  const categories = [
    "All",
    ...new Set(
      toysData.map((toy) => toy.subCategory || toy.category || "Others")
    ),
  ];

  // Filtered & Sorted Toys
  const filteredAndSortedToys = useMemo(() => {
    let result = toysData;

    // Search
    if (searchTerm) {
      result = result.filter((toy) =>
        toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category Filter
    if (selectedCategory !== "All") {
      result = result.filter(
        (toy) =>
          (toy.subCategory || toy.category || "").toLowerCase() ===
          selectedCategory.toLowerCase()
      );
    }

    // Sort
    const sorted = [...result];
    if (sortOrder === "low-to-high") {
      sorted.sort(
        (a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price)
      );
    } else if (sortOrder === "high-to-low") {
      sorted.sort(
        (a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price)
      );
    }

    return sorted;
  }, [toysData, searchTerm, sortOrder, selectedCategory]);

  return (
    <>
      <title>KiddyToy | All Toys</title>

      <div className="min-h-screen pt-6 pb-12">
        {/* Hero Header */}
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">
            All Toys Collection
          </h1>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Discover the perfect toy for your little one — Safe, Fun & Full of
            Joy!
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-8">
          {/* Top Controls: Search + Sort */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            {/* Search Bar */}
            <div className="w-full lg:w-96">
              <input
                type="text"
                placeholder="Search toys by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg shadow-sm"
              />
            </div>

            {/* Sort + Results Count */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
              <div className="text-gray-600">
                Showing{" "}
                <span className="font-bold text-purple-600">
                  {filteredAndSortedToys.length}
                </span>{" "}
                toys
              </div>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white font-medium"
              >
                <option value="default">Default Order</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex  flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Category Filter */}
            <aside className="  lg:w-64 ">
              <div className="bg-white  rounded-2xl shadow-lg p-6 sticky top-6">
                <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
                  Categories
                </h3>
                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all font-medium ${
                          selectedCategory === cat
                            ? "bg-purple-600 text-white shadow-md"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        {cat === "All" ? "All Categories" : cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right Side - Toys Grid */}
            <div className="flex-1">
              {filteredAndSortedToys.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
                  <p className="text-2xl text-gray-500">No toys found</p>
                  <p className="text-gray-400 mt-2">
                    Try adjusting your filters
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-7">
                  {filteredAndSortedToys.map((toy) => (
                    <div
                      key={toy.toyId}
                      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                    >
                      {/* Image */}
                      <div className="relative h-64 bg-gray-100 overflow-hidden">
                        <img
                          src={toy.mainImage}
                          alt={toy.toyName}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Rating */}
                        <div className="absolute top-3 right-3 bg-yellow-400 text-black font-bold px-3 py-1.5 rounded-full flex items-center gap-1 text-sm shadow-lg">
                          {toy.rating} Star
                        </div>
                        {/* SALE Badge */}
                        {toy.discountPrice && (
                          <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-bold">
                            SALE
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-3">
                        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 h-14">
                          {toy.toyName}
                        </h3>

                        <div className="flex justify-between text-sm text-gray-600">
                          <span>
                            Stock:{" "}
                            <strong className="text-green-600">
                              {toy.availableQuantity}
                            </strong>
                          </span>
                        </div>

                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-2xl font-bold text-gray-900">
                              ${toy.discountPrice || toy.price}
                            </p>
                            {toy.discountPrice && (
                              <p className="text-sm text-gray-500 line-through">
                                ${toy.price}
                              </p>
                            )}
                          </div>
                        </div>

                        <Link
                          to={`/toy/${toy.toyId}`}
                          className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-xl hover:opacity-90 transition shadow-md"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllToys;
