import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext.jsx";

function Navbar() {
  const { user, loading, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleProfileClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/myprofile");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: Mobile Menu Button + Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          >
            <span
              className={`block h-1 w-full bg-gray-800 rounded transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-3" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-gray-800 rounded transition duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-gray-800 rounded transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl rye  font-bold bg-gradient-to-r from-red-500 via-pink-600 to-red-700 bg-clip-text text-transparent  hover:text-indigo-700 transition"
          >
            KiddyToy
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-800 hover:text-pink-700 font-medium transition ${
                isActive ? "text-pink-600" : ""
              }`
            }
          >
            Home
          </NavLink>

          <button
            onClick={handleProfileClick}
            className="text-gray-800 hover:text-pink-600 font-medium transition"
          >
            My Profile
          </button>

          {user && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `text-gray-800 hover:text-pink-600 font-medium transition ${
                  isActive ? "text-pink-600" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
          )}
        </div>

        {/* Right: User Info / Login */}
        <div className="flex items-center gap-3">
          {loading ? (
            <p className="text-black ">
              <span className="loading loading-ring loading-xl"></span>
            </p>
          ) : user ? (
            <div className="flex items-center gap-3">
              {/* User Image */}
              <div className="relative group">
                <img
                  src={user.photoURL || "https://i.ibb.co/2M0x0X3/default.png"}
                  alt={user.displayName || "User"}
                  className=" w-9 md:w-10 h-9 md:h-10 rounded-full border-2 border-white cursor-pointer transition-transform duration-300 hover:scale-110"
                />
                <span className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {user.displayName || "User"}
                </span>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#f30b0f] to-[#da4256] text-white font-semibold shadow-md hover:opacity-90 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col gap-4 p-4 mt-2 rounded-lg transition-all duration-300 ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-gray-800 hover:text-indigo-700 shadow-md p-3 rounded-2xl font-medium transition"
        >
          Home
        </NavLink>

        <button
          onClick={() => {
            setMenuOpen(false);
            handleProfileClick();
          }}
          className="text-gray-800 hover:text-indigo-700 shadow-md p-3 rounded-2xl font-medium transition text-left"
        >
          My Profile
        </button>

        {user && (
          <NavLink
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 hover:text-indigo-700 shadow-md p-3 rounded-2xl font-medium transition"
          >
            Dashboard
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
