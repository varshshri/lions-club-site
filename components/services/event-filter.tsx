"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/services-data";

interface EventFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function EventFilter({ activeCategory, onCategoryChange }: EventFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          onClick={() => onCategoryChange(category)}
          className={`
            px-6 py-3 rounded-full font-medium text-sm transition-all duration-300
            ${
              activeCategory === category
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-primary border-2 border-gray-200 hover:border-primary"
            }
          `}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
