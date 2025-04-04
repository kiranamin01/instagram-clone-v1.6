import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Register user
      console.log("Registering with:", formData); // Debug log
      const registerResponse = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const registerData = await registerResponse.json();
      console.log("Register response:", registerData); // Debug log

      if (!registerResponse.ok) {
        throw new Error(registerData.message || "Registration failed");
      }

      // Auto login after successful registration
      const loginBody = {
        email: formData.email,
        password: formData.password,
      };
      console.log("Attempting login with:", loginBody); // Debug log

      const loginResponse = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginBody),
        }
      );

      const loginData = await loginResponse.json();
      console.log("Login response:", loginData); // Debug log

      if (!loginResponse.ok) {
        throw new Error(loginData.message || "Login failed");
      }

      // Store token and user data
      localStorage.setItem("token", loginData.token);
      localStorage.setItem("user", JSON.stringify(loginData.user));

      // Add a small delay before navigation
      setTimeout(() => {
        window.location.href = "/"; // Force page refresh after login
      }, 100);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
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
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full px-4 py-3 border rounded-md bg-gray-50 dark:bg-[#262626] dark:border-gray-700 dark:text-white"
          />
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
            disabled={loading}
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Already have an account?
          </span>
          <button
            onClick={() => navigate("/login")}
            className="text-sm text-blue-500 font-semibold"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
