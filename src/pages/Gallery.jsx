import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const mockGallery = [
  {
    id: 1,
    title: "Health Awareness Camp",
    description: "A camp conducted for students to learn about healthcare.",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-c4d86c08a2d2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Blood Donation Camp",
    description: "Students participated and donated blood for a good cause.",
    imageUrl: "https://images.unsplash.com/photo-1588776814789-2b14f2e5c6aa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Fitness & Wellness Camp",
    description: "Yoga and wellness sessions organized for students.",
    imageUrl: "https://images.unsplash.com/photo-1554284126-5b7e5b9f2adf?auto=format&fit=crop&w=800&q=80",
  },
];





const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          College Gallery
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Explore the events, camps, and activities conducted at KGR Vocational
          Junior College. Witness our commitment to learning, healthcare, and
          student engagement.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {mockGallery.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-transform"
            onClick={() => setSelected(item)}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl"
              >
                <FaTimes />
              </button>
              <img
                src={selected.imageUrl}
                alt={selected.title}
                className="w-full h-72 md:h-96 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selected.title}
              </h2>
              <p className="text-gray-600">{selected.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
