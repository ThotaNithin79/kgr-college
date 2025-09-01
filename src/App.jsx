// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"; // ✅ Common Navbar
import Footer from "./components/footer/Footer"; // ✅ Common Footer
import AppRoutes from "./routes/AppRoutes"; // ✅ Page routes

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar always visible */}
        <Navbar />

        {/* Page content changes here */}
        <main className="flex-grow">
          <AppRoutes />
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
