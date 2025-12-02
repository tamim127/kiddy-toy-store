import React from "react";

const TeamMemberCard = ({ name, role, image, facebook, linkedin }) => {
  return (
    <div className="group text-center">
      <div className="relative overflow-hidden rounded-3xl shadow-xl">
        <img
          src={image || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
          <div className="flex gap-4">
            {facebook && (
              <a
                href={facebook}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                f
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
              >
                in
              </a>
            )}
          </div>
        </div>
      </div>
      <h3 className="mt-6 text-2xl font-bold text-gray-800">{name}</h3>
      <p className="text-purple-600 font-medium">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
