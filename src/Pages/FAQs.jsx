import React from "react";
import FAQItem from "./FAQItem";

const FAQs = () => {
  const faqs = [
    {
      q: "Are your toys safe for babies?",
      a: "Yes! All toys are made with 100% non-toxic materials and tested for safety.",
    },
    {
      q: "Do you offer free shipping?",
      a: "Yes! Free shipping on all orders above $50.",
    },
    {
      q: "What is your return policy?",
      a: "30-day hassle-free returns. Just contact us!",
    },
    {
      q: "How long does delivery take?",
      a: "Inside Dhaka: 1-2 days. Outside: 3-5 days.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
