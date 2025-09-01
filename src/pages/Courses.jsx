import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaStethoscope, FaMicroscope } from "react-icons/fa";
import { FlaskConical } from "lucide-react"; // Removed CheckCircle, Users

const Courses = () => {
  const courses = [
    {
      id: "mphw",
      title: "Multi-Purpose Health Worker (MPHW)",
      description:
        "The Multi-Purpose Health Worker (MPHW) program at KGR Vocational Junior College is designed to prepare students for essential roles in the healthcare sector. This vocational course focuses on community health, basic medical care, and preventive healthcare practices, enabling students to serve as a vital link between healthcare institutions and society.",
      duration: "2 Years",
      image: "/images/courses/mphw.jpg", // Local image
      icon: <FaStethoscope className="text-blue-600 w-6 h-6" />,
    },
    {
      id: "mlt",
      title: "Medical Laboratory Technology (MLT)",
      description:
        "The Medical Laboratory Technology (MLT) program at KGR Vocational Junior College equips students with the knowledge and technical skills required to work in diagnostic laboratories and healthcare facilities. This course focuses on clinical testing, laboratory procedures, and modern diagnostic techniques, preparing students for crucial roles in the medical field.",
      duration: "2 Years",
      image: "/images/courses/mlt.jpg",
      icon: <FaMicroscope className="text-green-600 w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tight drop-shadow-lg">
            <span className="inline-block align-middle mr-2">
              <FlaskConical className="inline text-indigo-600" size={40} />
            </span>
            Our Courses
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full animate-pulse"></div>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
            Discover specialized vocational programs designed to empower
            students with skills for the healthcare and medical fields.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-14">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 animate-fade-in"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/80 rounded-full p-3 shadow-lg">
                  {course.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-10 space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 group-hover:text-indigo-700 transition-colors">
                  {course.title}
                </h2>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {course.description}
                </p>

                <div className="flex items-center text-gray-500 text-sm font-semibold">
                  <FaCalendarAlt className="mr-2 text-indigo-400" />
                  Duration:{" "}
                  <span className="ml-1 text-blue-900">{course.duration}</span>
                </div>

                <div className="pt-4">
                  {/* Route to Course Detail */}
                  <Link
                    to={`/courses/${course.id}`}
                    className="block w-full text-center py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
