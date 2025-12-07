"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-poppins">
            Join Us in Serving Our Community
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Your participation can make a real difference. Whether you volunteer your time, 
            contribute resources, or spread awareness, every effort counts in building a 
            stronger, more compassionate Agara community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold"
            >
              Volunteer With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white border-2 border-gray-300 text-primary hover:bg-gray-50 px-8 py-6 text-base font-semibold"
            >
              Donate Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
