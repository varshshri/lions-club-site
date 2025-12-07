"use client";

import { motion } from "framer-motion";
import { Lightbulb, Clock, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Lightbulb,
    title: "Our Mission",
    description: "To empower volunteers to serve the community, support humanitarian needs, and foster global understanding.",
  },
  {
    icon: Clock,
    title: "Our History",
    description: "Founded on March 1, 2010, the Agara chapter has a strong legacy of addressing important community needs and driving impactful projects. Chartered President is LN Raghavendra B.N, and now the club is having total members of 41 up to 2025.",
  },
  {
    icon: TrendingUp,
    title: "Our Impact",
    description: "We have executed over 150 major service projects benefiting health, education, environment, and community welfare.",
  },
];

export default function InfoCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-poppins">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
