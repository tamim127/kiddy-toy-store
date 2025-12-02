import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  Star,
  Package,
  Truck,
  Shield,
  Heart,
  ShoppingCart,
} from "lucide-react";

export default function ToyDetails() {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const [allToys, setAllToys] = useState([]); // এটাই ম্যাজিক!
  const [loading, setLoading] = useState(true);
  const [mainImg, setMainImg] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const res = await fetch("/ToyData.json");
        const data = await res.json();

        setAllToys(data);

        const foundToy = data.find((t) => t.toyId === parseInt(id));
        if (foundToy) {
          setToy(foundToy);
          setMainImg(foundToy.mainImage);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchToys();
  }, [id]);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  if (loading)
    return <div className="text-center py-20 text-xl">Loading...</div>;
  if (!toy)
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        Toy not found!
      </div>
    );

  // Related Products
  const relatedToys = toy.relatedProducts
    ? allToys.filter((t) => toy.relatedProducts.includes(t.toyId)).slice(0, 4)
    : [];

  return (
    <>
      <title>{toy.metaTitle || toy.toyName}</title>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-6 text-gray-600">
          <ul className="flex gap-2">
            <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>→</li>
            <li>
              <a href="/all-toys" className="hover:text-blue-600">
                Toys
              </a>
            </li>
            <li>→</li>
            <li className="text-gray-900 font-medium">{toy.toyName}</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              {toy.discountPrice && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold z-10 shadow-lg">
                  SALE -
                  {Math.round(
                    ((toy.price - toy.discountPrice) / toy.price) * 100
                  )}
                  %
                </span>
              )}
              <img
                src={mainImg || toy.mainImage}
                alt={toy.toyName}
                className="w-full h-96 sm:h-[520px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-3">
              {[toy.mainImage, ...(toy.galleryImages || [])]
                .slice(0, 5)
                .map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Thumb ${i + 1}`}
                    onClick={() => setMainImg(img)}
                    className={`w-full h-20 object-cover rounded-lg cursor-pointer border-4 transition-all ${
                      mainImg === img
                        ? "border-blue-600 shadow-xl"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  />
                ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                {toy.toyName}
              </h1>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(toy.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">
                  {toy.rating} ({toy.totalReviews} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  ${toy.discountPrice || toy.price}
                </span>
                {toy.discountPrice && (
                  <span className="text-2xl text-gray-500 line-through">
                    ${toy.price}
                  </span>
                )}
              </div>

              <p className="text-lg text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl">
                {toy.shortDescription}
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-200">
              <div className="flex gap-3">
                <Package className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">SKU</p>
                  <p className="font-semibold">{toy.sku}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Age Range</p>
                  <p className="font-semibold">{toy.ageRange}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Truck className="w-6 h-6 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-500">Stock</p>
                  <p
                    className={`font-semibold ${
                      toy.availableQuantity > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {toy.availableQuantity > 0
                      ? `${toy.availableQuantity} in stock`
                      : "Out of stock"}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Heart className="w-6 h-6 text-red-600" />
                <div>
                  <p className="text-sm text-gray-500">Brand</p>
                  <p className="font-semibold">{toy.brand}</p>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-3 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-8 py-3 font-bold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-3 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={toy.availableQuantity === 0}
                className={`flex-1 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                  toy.availableQuantity === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl"
                }`}
              >
                <ShoppingCart className="w-6 h-6" />
                {toy.availableQuantity === 0 ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>

            {addedToCart && (
              <div className="bg-green-100 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl font-bold text-center">
                Successfully added to cart!
              </div>
            )}

            {/* Features */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Key Features
              </h3>
              <ul className="space-y-3">
                {toy.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Description */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {toy.description}
              </p>
            </div>
          </div>
        </div>

        {/* Related Products – এখন ১০০% কাজ করবে */}
        {relatedToys.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedToys.map((relatedToy) => (
                <a
                  key={relatedToy.toyId}
                  href={`/toy/${relatedToy.toyId}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <img
                      src={relatedToy.mainImage}
                      alt={relatedToy.toyName}
                      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                    />
                    {relatedToy.discountPrice && (
                      <span className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        SALE
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 line-clamp-2 h-12">
                      {relatedToy.toyName}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xl font-bold text-blue-600">
                        ${relatedToy.discountPrice || relatedToy.price}
                      </span>
                      {relatedToy.discountPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${relatedToy.price}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
