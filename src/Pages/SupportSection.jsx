import React from "react";

const SupportSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-600 to-pink-600 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          We’re Here to Help!
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Email Support</h3>
            <p className="text-lg">support@kiddytoy.com</p>
            <p className="text-sm mt-2 opacity-90">Reply within 2 hours</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Phone</h3>
            <p className="text-lg">+880 1234 567 890</p>
            <p className="text-sm mt-2 opacity-90">10 AM - 8 PM (Everyday)</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
            <button className="mt-4 bg-white text-purple-600 font-bold py-4 px-10 rounded-full hover:scale-105 transition">
              Start Chat Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
