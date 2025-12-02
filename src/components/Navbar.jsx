import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext";
import { Menu, X } from "lucide-react";
import {
  FiHome,
  FiPackage,
  FiInfo,
  FiMail,
  FiUser,
  FiLayout,
  FiLogOut,
} from "react-icons/fi";

// public routes
const publicRoutes = [
  { path: "/", name: "Home", icon: <FiHome className="w-5 h-5" /> },
  {
    path: "/all-toys",
    name: "All Toys",
    icon: <FiPackage className="w-5 h-5" />,
  },
  { path: "/about", name: "About", icon: <FiInfo className="w-5 h-5" /> },
  { path: "/contact", name: "Contact", icon: <FiMail className="w-5 h-5" /> },
];

// private route for login user
const privateRoutes = [
  { path: "/myprofile", name: "Profile", icon: <FiUser className="w-5 h-5" /> },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FiLayout className="w-5 h-5" />,
  },
];

const Navbar = () => {
  const { user, logout, loading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // scroll navbar change effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 text-pink-600 font-semibold"
      : "flex items-center gap-2 text-gray-700 hover:text-purple-600 font-medium transition";

  // user profile URL
  const getAvatarUrl = () => {
    if (user?.photoURL) return user.photoURL;
    const name = user?.displayName || "User";
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name
    )}&background=random&color=fff&bold=true`;
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200"
            : "bg-white/95 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-1"
            >
              <span className="text-3xl fredoka font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                KiddyToy
              </span>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                Store
              </span>
            </Link>

            {/* Desktop Center Menu */}
            <div className="hidden lg:flex items-center gap-10 flex-1 justify-center">
              {publicRoutes.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className={navLinkStyle}
                >
                  {route.icon}
                  <span>{route.name}</span>
                </NavLink>
              ))}

              {user &&
                privateRoutes.map((route) => (
                  <NavLink
                    key={route.path}
                    to={route.path}
                    className={navLinkStyle}
                  >
                    {route.icon}
                    <span>{route.name}</span>
                  </NavLink>
                ))}
            </div>

            {/* Right Side: Profile / Login + Mobile Toggle */}
            <div className="flex items-center gap-4">
              {loading ? (
                <div className="w-11 h-11 rounded-full bg-gray-200 animate-pulse" />
              ) : user ? (
                <div className="flex items-center gap-3">
                  {/* Profile Picture */}
                  <button
                    onClick={() => navigate("/myprofile")}
                    className="relative group focus:outline-none"
                  >
                    <img
                      src={getAvatarUrl()}
                      alt="Profile"
                      className="w-11 h-11 rounded-full object-cover border-3 border-pink-400 shadow-lg transition-all hover:scale-110 hover:border-purple-500"
                    />
                    {/* Simple Tooltip */}
                    <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                      <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                        {user?.displayName || "My Profile"}
                      </span>
                    </div>
                  </button>

                  {/* Logout Button - Desktop Only */}
                  <button
                    onClick={handleLogout}
                    className="hidden sm:flex items-center gap-2 h-11 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-purple-700 transition shadow-md"
                  >
                    <FiLogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="ml-5 px-3 md:px-6 py-2 md:py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-700 transition shadow-lg text-sm"
                >
                  Login
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              >
                {isMobileMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-6 space-y-4">
              {/* Public Links */}
              {publicRoutes.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 text-lg font-medium ${
                      isActive
                        ? "text-pink-600"
                        : "text-gray-700 hover:text-purple-600"
                    }`
                  }
                >
                  {route.icon}
                  <span>{route.name}</span>
                </NavLink>
              ))}

              {/* Private Links */}
              {user &&
                privateRoutes.map((route) => (
                  <NavLink
                    key={route.path}
                    to={route.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 text-lg font-medium ${
                        isActive
                          ? "text-pink-600"
                          : "text-gray-700 hover:text-purple-600"
                      }`
                    }
                  >
                    {route.icon}
                    <span>{route.name}</span>
                  </NavLink>
                ))}

              {/* Logout / Login in Mobile */}
              <div className="border-t pt-5 mt-4">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 text-lg font-bold text-pink-600 hover:text-pink-700"
                  >
                    <FiLogOut className="w-5 h-5" />
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-bold text-purple-600 hover:text-purple-700"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Navbar bottom spacing */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Navbar;
