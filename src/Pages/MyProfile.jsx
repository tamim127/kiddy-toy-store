import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext.jsx";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config.js";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, logout } = useAuth();
  const [formData, setFormData] = useState({ name: "", photoURL: "" });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const currentUser = auth.currentUser; 

    if (!currentUser) {
      toast.error("No user logged in!");
      return;
    }

    try {
      await updateProfile(currentUser, {
        displayName: formData.name,
        photoURL: formData.photoURL,
      });

      toast.success("Profile updated successfully!");

     
      setFormData({
        name: formData.name,
        photoURL: formData.photoURL,
      });
    } catch (error) {
      console.error("Profile update failed:", error);
      toast.error(" Failed to update profile.");
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg font-medium">
          <span className="loading loading-ring loading-xl"></span>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center   px-4 py-10">
      <title>KiddyToy || MyProfile</title>

      <div className=" shadow-2xl rounded-2xl w-full max-w-md bg-gradient-to-br from-gray-200 via-pink-400 to-purple-300 p-8 sm:p-10  ">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8  fredoka">
          My Profile
        </h2>

        {/* Display user info */}
        <div className="text-center mb-8">
          <img
            src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full mb-3 object-cover border-2 border-white shadow-md"
          />
          <p className="font-semibold text-lg text-gray-800">
            {user.displayName || "No Name"}
          </p>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {/* Update Form */}
        <form onSubmit={handleSave} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-500 text-gray-800 "
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-500 text-gray-800 "
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300 hover:scale-[1.02]"
          >
            Save Changes
          </button>
        </form>

        {/* Logout */}
        <button
          onClick={logout}
          className="w-full mt-4 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300 hover:scale-[1.02]"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
