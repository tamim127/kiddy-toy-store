import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className=" bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:text-indigo-700 transition"
        >
          KiddyToy
        </Link>

        {/* Menu Links */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 font-semibold"
                : "text-gray-800 hover:text-indigo-700 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 font-semibold"
                : "text-gray-800 hover:text-indigo-700 transition"
            }
          >
            My Profile
          </NavLink>

          {/* Replace this later with user image + logout when Firebase is ready */}
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
