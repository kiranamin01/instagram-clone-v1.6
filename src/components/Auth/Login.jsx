import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Remove credentials: "include"
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status); // Add this for debugging
      const data = await response.json();
      console.log("Response data:", data); // Add this for debugging

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store token and user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to home page
      navigate("/");
    } catch (err) {
      console.error("Login error:", err); // Add this for debugging
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#121212]">
      <div className="w-full max-w-[350px] px-8">
        {error && (
          <div className="mb-4 p-3 text-sm text-red-500 bg-red-100 rounded-md dark:bg-red-900/20">
            {error}
          </div>
        )}

        <div className="flex flex-col items-center mb-8">
          <FaInstagram className="text-5xl mb-4 dark:text-white" />
          <h1 className="font-instagram text-4xl dark:text-white">Instagram</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 border rounded-md bg-gray-50 dark:bg-[#262626] dark:border-gray-700 dark:text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-3 border rounded-md bg-gray-50 dark:bg-[#262626] dark:border-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?
          </span>
          <button
            onClick={() => navigate("/register")}
            className="text-sm text-blue-500 font-semibold"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
