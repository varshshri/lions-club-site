"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { id: 1, title: "Health Camp", src: "/api/placeholder/600/400" },
  { id: 2, title: "Blood Donation", src: "/api/placeholder/600/400" },
  { id: 3, title: "Community Service", src: "/api/placeholder/600/400" },
  { id: 4, title: "Tree Planting", src: "/api/placeholder/600/400" },
  { id: 5, title: "Food Distribution", src: "/api/placeholder/600/400" },
  { id: 6, title: "Eye Donation Awareness", src: "/api/placeholder/600/400" },
  { id: 7, title: "School Program", src: "/api/placeholder/600/400" },
  { id: 8, title: "Senior Care", src: "/api/placeholder/600/400" },
  { id: 9, title: "Environmental Cleanup", src: "/api/placeholder/600/400" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our activities and the impact we're making in the
            community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-video bg-gradient-to-br from-primary to-secondary relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {image.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    Click to view
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 text-white hover:text-secondary transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-2xl">
                    {galleryImages.find((img) => img.id === selectedImage)?.title}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}


