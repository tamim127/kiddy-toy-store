import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function ToyDetails() {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchToy = async () => {
      try {
        const res = await fetch("/ToyData.json");
        const data = await res.json();
        const foundToy = data.find((t) => t.toyId === parseInt(id));
        setToy(foundToy);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchToy();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(`Thank you, ${formData.name}! You can try ${toy.toyName} now.`);
    setFormData({ name: "", email: "" });
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!toy) return <p className="text-center mt-10">Toy not found!</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl my-10 transition-transform transform hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Toy Image */}
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
        />

        {/* Toy Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-extrabold mb-4 text-gray-900">
              {toy.toyName}
            </h1>

            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Seller:</span> {toy.sellerName}
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Email:</span> {toy.sellerEmail}
            </p>
            <p className="mb-2 text-green-600 font-semibold text-lg">
              <span className="font-semibold">Price:</span> ${toy.price}
            </p>
            <p className="mb-2 text-yellow-500 font-semibold">
              <span className="font-semibold">Rating:</span> {toy.rating} ⭐
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Available Quantity:</span>{" "}
              {toy.availableQuantity}
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Category:</span> {toy.subCategory}
            </p>
            <p className="mb-4 text-gray-600">
              <span className="font-semibold">Description:</span>{" "}
              {toy.description}
            </p>
          </div>

          {/* Try Now Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-5 rounded-xl shadow-inner border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Try Now
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              Try Now
            </button>
            {success && (
              <p className="mt-3 text-green-600 font-medium">{success}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
