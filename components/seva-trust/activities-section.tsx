"use client";

import { motion } from "framer-motion";
import { Shield, GraduationCap, Leaf } from "lucide-react";

const activities = [
  {
    icon: Shield,
    title: "Health Camps",
    description: "Providing free health check-ups and medical aid to those in need.",
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    description: "Empowering the next generation with educational resources and support.",
  },
  {
    icon: Leaf,
    title: "Environment",
    description: "Organizing tree plantation drives and cleanliness campaigns for a greener future.",
  },
];

export default function ActivitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b1f29] mb-4">
            Our Activities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to a wide range of initiatives that address the critical needs of our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#2563eb] rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1b1f29] mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
