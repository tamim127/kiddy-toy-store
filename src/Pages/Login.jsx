import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext.jsx";
import toast from "react-hot-toast";

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        toast.success("Login Successful!");
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
    <div className="min-h-screen flex items-center justify-center">
      <title>KiddyToy || LogIn</title>
      <div className="bg-gradient-to-br from-purple-600 via-pink-700 to-purple-700 shadow-lg rounded-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-200 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg border border-gray-300/40 bg-white/10 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-200 mb-1">Password</label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              required
              placeholder="Enter your password"
              className="w-full px-3 py-2 rounded-lg border border-gray-300/40 bg-white/10 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-10"
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>

          {/* Forgot Password */}
          <p className="text-right text-sm mt-2 text-gray-200">
            <Link
              to={`/forget-password?email=${encodeURIComponent(email)}`}
              className="text-blue-400 hover:underline hover:text-white"
            >
              Forgot Password?
            </Link>
          </p>
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

        {/* Register */}
        <p className="text-center mt-4 text-gray-200">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-300 hover:underline hover:text-white">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
