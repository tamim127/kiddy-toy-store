import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800 hover:text-purple-600 transition"
      >
        {question}
        <span className={`transform transition ${open ? "rotate-180" : ""}`}>
          Down Arrow
        </span>
      </button>
      {open && <p className="mt-4 text-gray-600 leading-relaxed">{answer}</p>}
    </div>
  );
};

export default FAQItem;
