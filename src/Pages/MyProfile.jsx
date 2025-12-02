import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext.jsx";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config.js";
import toast from "react-hot-toast";
import {
  User,
  Mail,
  Calendar,
  Edit3,
  Save,
  LogOut,
  Camera,
} from "lucide-react";

const MyProfile = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
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
    try {
      await updateProfile(auth.currentUser, {
        displayName: formData.name.trim() || "User",
        photoURL:
          formData.photoURL.trim() || "https://i.ibb.co/4pDNDk1/avatar.png",
      });
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      toast.error("Failed to update profile.");
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <>
      <title>KiddyToy | My Profile</title>

      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              My Profile
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Manage your account information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Profile Card */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 text-center">
                <div className="relative inline-block">
                  <img
                    src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                    alt="Profile"
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-gray-200 shadow-md mx-auto"
                  />
                  <div className="absolute bottom-2 right-2 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-4 sm:mt-6">
                  {user.displayName || "User"}
                </h2>
                <p className="text-gray-600 flex items-center justify-center gap-2 mt-2 text-sm sm:text-base">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  {user.email}
                </p>

                <div className="mt-4 sm:mt-6 text-left bg-gray-50 rounded-xl p-4 sm:p-5">
                  <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    Member Since
                  </p>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">
                    {new Date(user.metadata.creationTime).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>

                <button
                  onClick={logout}
                  className="mt-4 sm:mt-6 w-full py-2 sm:py-3 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
                  Logout
                </button>
              </div>
            </div>

            {/* Edit Section */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2 sm:gap-3">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    Personal Information
                  </h3>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition flex items-center gap-2"
                  >
                    <Edit3 className="w-4 h-4 sm:w-5 sm:h-5" />
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </button>
                </div>

                {isEditing ? (
                  <form
                    onSubmit={handleSave}
                    className="space-y-5 sm:space-y-6"
                  >
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm sm:text-base"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                        Photo URL (optional)
                      </label>
                      <input
                        type="url"
                        name="photoURL"
                        value={formData.photoURL}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm sm:text-base"
                        placeholder="https://example.com/photo.jpg"
                      />
                      <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                        Use{" "}
                        <a
                          href="https://imgbb.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          imgbb.com
                        </a>{" "}
                        to upload photo
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 sm:py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Save className="w-4 h-4 sm:w-5 sm:h-5" />
                      Save Changes
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12 sm:py-16 bg-gray-50 rounded-2xl">
                    <div className="text-6xl text-gray-300 mb-4">✔️</div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-700">
                      Your profile is up to date
                    </h4>
                    <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
                      Everything looks good!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
