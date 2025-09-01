  // src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Admissions from "../pages/Admissions";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import LoginOptions from "../pages/Login/LoginOptions";
import AdminLogin from "../pages/Login/AdminLogin";
import CourseDetail from "../pages/CourseDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseDetail />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} /> 
      <Route path="/login" element={<LoginOptions />} />
      <Route path="/login/admin" element={<AdminLogin />} />
      {/* You can add 404 page later */}
    </Routes>
  );
};

export default AppRoutes;
