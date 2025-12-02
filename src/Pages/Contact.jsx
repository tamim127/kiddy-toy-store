import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent. We’ll reply within 2 hours!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-8 lg:pt-10  ">
      {/* Hero */}
      <section className="py-10 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700 mb-6">
            We’re Here for You
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Questions? Ideas? Just want to say hi? Drop us a message — we reply
            super fast!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20  relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-base-100 p-10 rounded-3xl shadow-2xl">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-6 py-5 rounded-2xl border-2 border-transparent focus:border-pink-500 bg-base-300 backdrop-blur transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-6 py-5 rounded-2xl border-2 border-transparent focus:border-purple-500 bg-base-300 backdrop-blur transition"
                />
                <textarea
                  rows="6"
                  placeholder="Your Message..."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-6 py-5 rounded-2xl border-2 border-transparent focus:border-pink-500 bg-base-300 backdrop-blur transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold py-5 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition flex items-center justify-center gap-3 text-xl"
                >
                  <FiSend className="w-6 h-6" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info + Image */}
          <div className="space-y-12">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="KiddyToy Team"
              className="rounded-3xl shadow-2xl w-full"
            />

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FiMapPin />,
                  title: "Visit Us",
                  info: "Mirpur 10, Circle, Dhaka 1216",
                },
                {
                  icon: <FiPhone />,
                  title: "Call Us",
                  info: "+880 1234-567890",
                },
                {
                  icon: <FiMail />,
                  title: "Email Us",
                  info: "hello@kiddytoy.com",
                },
                {
                  icon: <FiClock />,
                  title: "Open Hours",
                  info: "10AM - 8PM (Everyday)",
                },
              ].map((item, i) => (
                <div key={i} className="bg-base-100 p-8 rounded-3xl shadow-xl">
                  <div className="text-pink-600 text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.info}</p>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
