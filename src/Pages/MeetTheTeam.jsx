import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const MeetTheTeam = () => {
  const team = [
    {
      name: "Ayesha Rahman",
      role: "Founder & CEO",
      image: "https://i.ibb.co.com/0jZ4Y7N/ayesha.jpg",
    },
    {
      name: "Rahim Khan",
      role: "Creative Director",
      image: "https://i.ibb.co.com/4pQ8mZ2/rahim.jpg",
    },
    {
      name: "Fatima Akter",
      role: "Toy Designer",
      image: "https://i.ibb.co.com/8xL5vP9/fatima.jpg",
    },
    {
      name: "Omar Faruk",
      role: "Customer Happiness",
      image: "https://i.ibb.co.com/7bY3kL2/omar.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
          Meet the Team
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We’re a bunch of toy-loving people who work hard to make kids smile
          every day!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, idx) => (
            <TeamMemberCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
