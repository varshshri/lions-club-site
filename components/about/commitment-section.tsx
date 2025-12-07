"use client";

import { motion } from "framer-motion";

export default function CommitmentSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
            Our Commitment to Service
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lions Club International is the largest service club organization in the world. 
            Our Agara chapter is dedicated to serving our community through humanitarian 
            work, local projects, and service initiatives that create real impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
