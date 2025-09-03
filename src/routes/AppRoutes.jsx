import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFound from "../pages/NotFound";

// Public pages (can stay normal imports)
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import CourseDetail from "../pages/CourseDetail";
import Admissions from "../pages/Admissions";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import LoginOptions from "../pages/login/LoginOptions";
import AdminLogin from "../pages/Login/AdminLogin";

// Lazy load Admin pages
const AdminLayout = lazy(() => import("../layouts/AdminLayout"));
const AdminDashboard = lazy(() => import("../pages/Admin/AdminDashboard"));
const Faculty = lazy(() => import("../pages/Admin/Faculty"));
const CoursesAdmin = lazy(() => import("../pages/Admin/CoursesAdmin"));
const GalleryAdmin = lazy(() => import("../pages/Admin/GalleryAdmin"));

// Lazy load Students module (new structure)
const StudentsPage = lazy(() => import("../features/students/StudentsPage"));
const StudentEditPage = lazy(() => import("../features/students/StudentEditPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<LoginOptions />} />
        <Route path="/login/admin" element={<AdminLogin />} />

        {/* Admin protected layout */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="courses" element={<CoursesAdmin />} />
          <Route path="gallery" element={<GalleryAdmin />} />

          {/* Students module */}
          <Route path="students" element={<StudentsPage />} />
          <Route path="students/new" element={<StudentEditPage />} />
          <Route path="students/edit/:id" element={<StudentEditPage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
