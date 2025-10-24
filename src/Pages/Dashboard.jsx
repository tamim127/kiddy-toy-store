import React from "react";
import { useAuth } from "../Context/AuthContext";
import { Navigate, useNavigate } from "react-router";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleImgClick = () => {
    if (user) {
      navigate("/myprofile");
    }
  };

  const stats = [
    { title: "Total Toys", value: 120 },
    { title: "Orders", value: 45 },
    { title: "Revenue", value: "$3,200" },
    { title: "Users", value: 60 },
  ];

  const notifications = [
    "New user registered",
    "Order #1023 completed",
    "New toy added to catalog",
  ];
  const shortcuts = [
    { name: "Add Toy" },
    { name: "View Orders" },
    { name: "Manage Users" },
  ];

  return (
    <div className="min-h-screen  bg-gray-100 my-10 rounded-2xl shadow-2xl p-6">
      <title>KiddyToy || DashBoard</title>
      <div
        onClick={handleImgClick}
        className="flex items-center justify-between  mb-6"
      >
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.displayName || "User"}!
        </h1>
        {user?.photoURL && (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition"
          >
            <p className="text-gray-500">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Shortcuts / Quick Links */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {shortcuts.map((shortcut, idx) => (
            <button
              key={idx}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg text-center transition"
            >
              {shortcut.name}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {notifications.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Statistics / Chart Placeholder */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Statistics</h2>
        <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500">
          Chart will appear here
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
