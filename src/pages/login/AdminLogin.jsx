import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Uncomment when backend is ready

const AdminLogin = () => {
  const navigate = useNavigate();

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // UI states
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // ---- Replace this block with real API call later ----
      // const response = await axios.post("/api/auth/login", { email, password });
      // const token = response.data.token;
      // localStorage.setItem("adminToken", token);
      
      // Mock authentication for now
      if (email === "admin@college.com" && password === "12345") {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/admin/dashboard");
      } else {
        setError("Invalid email or password");
      }
      // ---- End of mock section ----
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Administrator Login
          </h2>
          <p className="text-gray-600 mt-2">
            Access your admin panel to manage college operations.
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 text-red-600 text-sm font-medium text-center">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@college.com"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         outline-none transition shadow-sm"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         outline-none transition shadow-sm"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-xl 
                        shadow-md transition transform hover:-translate-y-0.5 
                        ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700 hover:shadow-lg"}`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Optional link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Forgot your password?{" "}
          <a href="/forgot-password" className="text-blue-600 hover:underline">
            Reset here
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
