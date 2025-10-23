import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext.jsx";
import toast from "react-hot-toast";

function Register() {
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const isValidPassword = (pass) => {
    return pass.length >= 6 && /[A-Z]/.test(pass) && /[a-z]/.test(pass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPassword(user.password)) {
      toast.error("Password must have upper & lower case and min 6 chars");
      return;
    }

    register(user.email, user.password, user.name, user.photoURL)
      .then(() => {
        toast.success("Registration Successful!");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  const handleGoogle = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Google Login Successful!");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <title>KiddyToy || Register</title>
      <div className="bg-gradient-to-br from-pink-600 via-purple-800 to-pink-600 shadow-lg rounded-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 text-gray-200">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-3 py-2 rounded-lg border border-gray-300/40 bg-white/10 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-lg border border-gray-300/40 bg-white/10 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 text-gray-200">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              value={user.photoURL}
              onChange={handleChange}
              placeholder="Photo link"
              className="w-full px-3 py-2 rounded-lg border border-gray-300/40 bg-white/10 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 text-gray-200">Password</label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
              className="w-full px-3 py-2 pr-10 rounded-lg border border-gray-300/40 bg-white/10 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-10 text-gray-300"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300/40" />
          <span className="mx-2 text-gray-300">OR</span>
          <hr className="flex-grow border-gray-300/40" />
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogle}
          className="flex items-center justify-center w-full border border-gray-300/40 py-2 rounded-lg hover:bg-white/10 transition text-gray-100"
        >
          <FcGoogle className="mr-2 text-xl" /> Continue with Google
        </button>

        {/* Login Link */}
        <p className="text-center mt-4 text-gray-200">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
