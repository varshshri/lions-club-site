"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function JoinCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-poppins">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Become part of a global network of volunteers dedicated to serving communities 
            and creating lasting positive change. Together, we can make a real impact.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-6 text-base font-semibold"
          >
            Join Our Club
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
